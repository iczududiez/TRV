import React from 'react';
import Filtro from './Filtro';
import ShowCase from './ShowCase';
import Footer from './Footer';
import ProductService from '../../service/ProductService';

const Body = React.createClass({

    getInitialState(){
        return {
            products:null
        }
    },
    componentDidMount(){

        //Or var self = this;

        ProductService.getProducts().then(function(response){
            this.setState({products:response.data});
            //self.setState...
        }.bind(this));
    },
    render(){

        var showCases = Object.getOwnPropertyNames(this.state.products || {}).map(function(item, key){
            return <ShowCase 
                     key={key.toString()}
                     products={this.state.products[item]}
                     name={item}/>
        }.bind(this));

        return(
            <div className="container">
                <Filtro />
                {showCases}
                <Footer />
            </div>
        )
    }
});

export default Body;