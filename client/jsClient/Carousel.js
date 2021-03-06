var Carousel = {
    memo:{},
    validation:function(){

        return  !!document.getElementsByClassName('carousel').length &&
                !!document.getElementsByClassName('carousel-panel').length &&
                !!document.getElementsByClassName('carousel-item').length &&
                !!document.getElementsByClassName('carousel-control').length
    },
    organizes:function(){

        if(!this.validation()){ this.removeAllCarousel(); return; }

        function organization(elem, key){

            elem.setAttribute("carouselKey",key);
            var itens = getChildrensByClass(getChildrensByClass(elem,'carousel-panel'),"carousel-item");
            var itensControl = getChildrensByClass(getChildrensByClass(elem,'carousel-control'),"item-control");
            var elemActive = getChildrensByClass(itensControl[0] ? itensControl[0].parentElement : null, "active")[0];
            var itemWidth = itens[0].clientWidth;
            var marginItem = Math.ceil((elem.clientWidth - (itemWidth * 4)) / 3) - 3;
            var startMargin = elemActive && elemActive.getAttribute("carControl") ? 
                            ((itemWidth + marginItem) * parseInt(elemActive.getAttribute("carControl"))) * -1 :
                            0;

            function itemMargin(item, index){
                    item.setAttribute("style","margin-left:" + (startMargin + ((itemWidth + marginItem) * index)) + "px;");  
            }

            itens.map(itemMargin);
            itensControl.map(function (item, key) {
                item.setAttribute("carControl", key);
            });

            this.memo[key] = {"itens":itens,
                            "itensControl":itensControl,
                            "itemWidth":itemWidth,
                            "marginItem":marginItem,
                            "totalWidth":(itemWidth + marginItem),
                            "lastActiveElem":null,
                            "moving":false,
                            "changeMoving":{'elemRequest':null,
                                            'qtdMoves':0,
                                            'status':'OK'}}
        }

        var carousels = document.getElementsByClassName('carousel');

        Array.prototype.map.call(carousels,organization.bind(this));
    },
    moveCarousel:function(elem) {

        var activeControl = null;
        var parentCarousel = findParentByClass(elem, 'carousel');
        var key = parentCarousel.getAttribute("carouselKey");

        if(!this.memo[key].moving){
            var itemSelectedPosition = parseInt(elem.getAttribute("carControl"));
            var itemACtivePosition = 0;
            
            if(this.memo[key].changeMoving.status === 'lastProcess'){
                var positionLastElem = this.memo[key].lastActiveElem.getAttribute('carControl');
                var qtdMove = this.memo[key].changeMoving.qtdMoves;
                activeControl = getSiblingsByAttributeValue(elem, 'carControl', qtdMove > 0 ? qtdMove - positionLastElem : positionLastElem - (qtdMove * -1));
                this.memo[key].changeMoving.status = "OK";
                if(!activeControl.length){
                    addClass(elem, 'active');
                    getSiblingsElems(elem).map(function(elemSibling){
                        removeClass(elemSibling,'active');
                    });
                }
            }else{
                activeControl = getSiblingsByClassName(elem, "active");
            }
            
            if(activeControl.length){
                itemACtivePosition = parseInt(activeControl[0].getAttribute("carControl"));
                

                this.movementLogic(itemACtivePosition < itemSelectedPosition, itemACtivePosition - itemSelectedPosition, parentCarousel);
                

                this.memo[key].lastActiveElem = activeControl[0];
                addClass(elem, 'active');
                getSiblingsElems(elem).map(function(elemSibling){
                    removeClass(elemSibling,'active');
                });
            }
        }else{
            //Apply for future changeMoving Logic
            //this.memo[key].changeMoving.status = 'require';
            //this.memo[key].changeMoving.elemRequest = elem;
        }
    },
    movementLogic:function(direction, moves, elemParent){
                
        if(direction){ moves = moves * -1; }

        var key = elemParent.getAttribute("carouselKey");

        if(!this.memo[key].moving){
            this.memo[key].moving = true;
            
            var control = 100;
            var movePerInteract = (this.memo[key].totalWidth * moves) / control;
            
            function mapFunc(item, index, itens){
                var currentStyle = item.getAttribute("style");
                var currentMargin = parseFloat(currentStyle ? currentStyle.replace(/margin-left:\s?(-?[\.e\d]+)px;/,"$1") : 0)//.toFixed(10);
                var nextMargin = direction ? 
                                (Math.round((currentMargin - movePerInteract) * 100) /100) :
                                (Math.round((currentMargin + movePerInteract) * 100) /100)

                item.setAttribute("style","margin-left:" + nextMargin + "px;");
            }

            function animationFunc(){
                //console.log('animate');
                if(control){
                    this.memo[key].itens.map(mapFunc);
                    control--;
                }else{
                    clearInterval(animation);
                    this.memo[key].moving = false;
                }
            }

            var animation = setInterval(animationFunc.bind(this),10);
        }
    },
    _movementOldLogic:function(direction, moves, elemParent){

        if(direction){ moves = moves * -1; }

        var key = elemParent.getAttribute("carouselKey");
        
        if(!this.memo[key].moving){
            this.memo[key].moving = true;
            
            var control = 100;
            var qtdItensControl = this.memo[key].itensControl.length;
            var movement = (this.memo[key].marginItem + this.memo[key].itemWidth)
            var remains = movement * moves;

            function validationMove(currentMargin, index, itens, nextMargin){
                
                if(direction){
                    return index ? true : nextMargin >= ((movement * (qtdItensControl - 1)) * -1);
                }else{
                    return index ? true : nextMargin <= 0;
                }
            }

            function mapFunc(item, index, itens){
                var currentStyle = item.getAttribute("style");
                var currentMargin = parseInt(currentStyle ? currentStyle.replace(/margin-left:\s?(-?[\.\d]+)px;/,"$1") : 0);
                var nextMargin = direction ? (currentMargin - control) : (currentMargin + control);
                
                //if(validationMove(currentMargin, index, itens, nextMargin)){
                    item.setAttribute("style","margin-left:" + nextMargin + "px;");
                //}else{
                //    remains = 0;
               // }
            }

            function animationFunc(){
                if(remains){
                    if(this.memo[key].changeMoving.status === 'require'){
                        this.memo[key].changeMoving.qtdMoves = moves - (remains - (remains % movement)) / movement;
                        this.memo[key].changeMoving.qtdMoves *= (direction ? 1 : -1);
                        remains = remains % movement;
                        this.memo[key].changeMoving.status = 'callMove';
                    }
                    this.memo[key].itens.map(mapFunc);
                    remains = remains ? remains - control : remains;
                }else{
                    clearInterval(animation);
                    this.memo[key].moving = false;
                    if(this.memo[key].changeMoving.status === 'callMove'){
                        this.memo[key].changeMoving.status = 'lastProcess';
                        this.moveCarousel(this.memo[key].changeMoving.elemRequest);
                    }
                }
            }

            var animation = setInterval(animationFunc.bind(this),10);
        }
    },
    removeAllCarousel:function(){

        var itens = document.getElementsByClassName('carousel-item'); 
        var carousels = document.getElementsByClassName('carousel');

        for(var i = 0, v = itens.length; i < v; i++){
            if((i+1) % 4){
                itens[i].setAttribute("style","");
            }else{
                itens[i].setAttribute("style","margin-right:0;");
            }
        }

        while(carousels.length){
            removeClass(carousels[0],"carousel");
        }

    }
}

window.onresize = function(){
    Carousel.organizes();
}

/* DOM nav Functions */
function getSiblingsByClassName(elem, classSiblingElem){

    function filterSiblings(elemSibling){
        return hasAttributeValue(elemSibling, 'class', classSiblingElem);
    }

    return getSiblingsElems(elem).filter(filterSiblings);
}

function getSiblingsByAttributeValue(elem, attribute, value){

    function filterSiblings(elemSibling){
        return hasAttributeValue(elemSibling, attribute, value);
    }

    return getSiblingsElems(elem).filter(filterSiblings);
}

function getSiblingsElems(elem, nextOrPreviousOrNull){
    
    var ret = [];
    var control = {
        'previous': 'previousElementSibling',
        'next': 'nextElementSibling'
    }
    
    function getSiblings(elem,prop){
        var ret = [];

        while(elem[prop]){
            ret.push(elem[prop]);
            elem = elem[prop];
        }

        return ret;
    }

    function getSiblingsWithMap(prop){
        return getSiblings(elem,control[prop]);
    }

    if(control[nextOrPreviousOrNull]){
        ret = getSiblings(elem,control[nextOrPreviousOrNull]).reverse();
    }else{
        ret = Object.getOwnPropertyNames(control).map(getSiblingsWithMap);
        ret = ret[0].concat(ret[1]);
    }
    return ret;
}

function addClass(elem, _class){
    addValueAttribute(elem, 'class', _class);
}

function removeClass(elem, _class){
    elem.setAttribute('class',elem.getAttribute('class').replace(new RegExp("\\s?"+_class+"\\s?")," ").trim());
}

function typeObject(obj, test){
    var type = Object.prototype.toString.call(obj).replace(/\]|\[|object\s/g,"")
    return  test ?
            new RegExp(test,"i").test(type) : 
            type;
}

function addValueAttribute(elem, attribute, value){
    elem.setAttribute(attribute,elem.getAttribute(attribute).replace(/([\w\W]*)/,"$1 "+value));
}

//if elem is array of elems only childrens for the first is return
function getChildrensByClass(elem, classChildrenElem){
   
    var ret = [];
    elem = typeObject(elem,"html[\\w\\W]*element") ? 
           elem :
           (typeObject(elem,"array|htmlcolletcion") ? elem[0] : null);  

    if(!elem){ return ret; }

    for(var i = 0, v = elem.children.length; i < v; i++){
        if(hasAttributeValue(elem.children[i], 'class', classChildrenElem)){
            ret.push(elem.children[i])
        }
    }

    return ret;
}

function findParentByClass(elem, classParentElem){
    
    while(elem.parentElement && elem.parentElement.tagName != "BODY"){
        if(hasAttributeValue(elem.parentElement,'class',classParentElem)){
            return elem.parentElement;
        }
        elem = elem.parentElement;
    }

    return null;
}

function hasAttributeValue(elem, attribute, haveValue){
    var regex = "^" + haveValue + "$|" + 
                "^" + haveValue + "\\s|" +
                "\\s" + haveValue + "$|" +
                "\\s" + haveValue + "\\s";
    return new RegExp(regex,'gi').test(elem.getAttribute(attribute));
}
/* DOM nav Functions */

module.exports = Carousel;