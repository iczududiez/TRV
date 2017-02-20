const UtilResource = {
    translate:{
        "best-sellers":"Mais Vendidos",
        "releases":"Lançamentos"
    },
    convert:{
        highTop:function(value){
            return !!value ? "Cano Alto" : "Cano Baixo";
        },
        money:function(value){
            
            value = value.toString().replace(/(\.\d{1})$/,"$10").replace(/\.(\d{2})$/,",$1");

            return function(typeFormat){
                var format = {
                    'brl': "R$ "+ value
                }
                return format[typeFormat] || value;
            }
        }
    }
}

export default UtilResource;