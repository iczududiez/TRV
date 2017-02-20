import React from 'react';
import Products from './Products';
import UtilResource from '../jsClient/UtilResource';
import Carousel from '../jsClient/Carousel';

var ShowCase = React.createClass({
    moveCarousel(event){
        
        event = event ? event : window.event;
        var elem = event.target ? event.target : event.srcElement;
        Carousel.moveCarousel(elem);
    },
    render(){

        var carouselControl = [];
        
        //Logic for Filter
        var size = this.props.products.length - 3 > 1 ? this.props.products.length - 3: 0;
        for(let i = 0, v = size; i < v; i++){
            carouselControl.push(<span key={i} onClick={this.moveCarousel} className={!i ? "item-control bullet active" : "item-control bullet"}></span>);
        }

        return(
            <div className="container container-noFlex">
                <h3>{UtilResource.translate[this.props.name] || this.props.name.replace(/^(\w)/,function(match){ return match.toUpperCase() })}</h3>
                <div className="carousel">
                    <Products products={this.props.products}/>
                    <menu className="carousel-control">
                        {carouselControl}
                    </menu>
                </div>
            </div>
        )
    }
});

export default ShowCase;