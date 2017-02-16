import Axios from 'axios';
//var Axios = require('axios');

const ProductService = {
    getProducts(){
       return Axios.get('http://www.raphaelfabeni.com.br/rv/data.json');
    }
}

export default ProductService;