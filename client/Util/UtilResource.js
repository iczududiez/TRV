const UtilResource = {
    translate:{
        "best-sellers":"Mais Vendidos",
        "releases":"Lançamentos"
    },
    convert:{
        highTop:function(value){
            return value ? "Cano Alto" : "Cano Baixo";
        },
        money:function(value){
            return function(brlFormat){
                return brlFormat ? ("R$ "+value.toString().replace(/(\.\d{1})$/,"$10").replace(/\.(\d{2})$/,",$1")) : value.toString().replace(/(\.\d{1})$/,"$10").replace(/\.(00)$/,",$1");
            }
        }
    }
}

export default UtilResource;