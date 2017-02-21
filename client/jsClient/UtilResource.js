const UtilResource = {
    translate: function(langOf,langFor){
        var languages = {
            "en-us":{
                "pt-br":function(term){
                    
                    var translate = {
                        "best-sellers":"Mais Vendidos",
                        "releases":"Lançamentos"
                    }

                    return translate[term] ? translate[term] : noTranslate(term);
                }
            }
        }

        function noTranslate(term){
            return term.replace(/^(\w)/,function(match){ return match.toUpperCase() });
        }

        return languages[langOf][langFor] || noTranslate;
    },
    convert:{
        highTop:function(value){
            return !!value ? "Cano Alto" : "Cano Baixo";
        },
        money:function(value, typeFormat){
            
            value = value.toString().replace(/(\.\d{1})$/,"$10").replace(/\.(\d{2})$/,",$1");

            var format = {
                'brl': "R$ "+ value
            }

            return format[typeFormat] || value;
        }
    }
}

export default UtilResource;