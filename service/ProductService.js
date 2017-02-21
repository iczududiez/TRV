import Axios from 'axios';
//var Axios = require('axios');

const ProductService = {
    getProducts(){
       return Axios.get('http://www.raphaelfabeni.com.br/rv/data.json')
                    .catch(function (error) {
                        if (error.response) {
                            console.log("Error " + error.response.status + " no serviço " + error.response.config.url);
                        }
                    });
    }
}

export default ProductService;