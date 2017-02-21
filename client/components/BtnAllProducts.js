import React from 'react';
import Carousel from '../jsClient/Carousel'

const BtnAllProducts = React.createClass({

    allProducts(){
        Carousel.removeAllCarousel();
    },
    render(){
        return <a className={this.props.addClass ? "btn btn-default " + this.props.addClass : "btn btn-default" }>TODOS OS PRODUTOS</a>
    }
    //use this for see all products in the same page.
    // render(){
    //     return <a className={this.props.addClass ? "btn btn-default " + this.props.addClass : "btn btn-default" } onClick={this.allProducts}>TODOS OS PRODUTOS</a>
    // }

});

export default BtnAllProducts;