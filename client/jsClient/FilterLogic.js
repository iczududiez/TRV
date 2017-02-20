//var Filter = {
module.exports = {
    filters:[],
    itemArray:[],
    addFilter(filter, value){
        this.filters.push({'property':filter,'value':value});
    },
    removeFilter(filter, value){

        function removeFunc(itemFilter){
            return itemFilter.property === filter ?  !(itemFilter.value === value) : true;
        }

        this.filters = this.filters.filter(removeFunc);
    },
    filterLogic(prop){

        return this.itemArray[prop].filter(function(item){

            var ret = false;

            for(let i = 0, v = this.filters.length; i < v; i++){
                if(item[this.filters[i].property] == this.filters[i].value){
                    ret = true;
                    break;
                }
            }

            return this.filters.length  ? ret : true;

        }.bind(this));
    }
}
/*
Filter.addFilter = function(filter, value){
    this.filters.push({'property':filter,'value':value});
}

Filter.removeFilter =  function(filter, value){

    function removeFunc(itemFilter){
        return itemFilter.property === filter ?  !(value === value) : true;
    }

    this.filters = filters.filter(removeFunc);
}

Filter.filters = function(array){

    array = array.filter(function(item){

        var ret = false;

        for(let i = 0, v = this.filters.length; i < v; i++){
            if(item[this.filters[i].property] == this.filters[i].value){
                ret = true;
                break;
            }
        }

        return ret;

    }.bind(this));

    return array;
}
8*/