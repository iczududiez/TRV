import React from 'react';
import Products from './Products';
import UtilResource from '../Util/UtilResource';

const ShowCase = React.createClass({

    render(){

        var carroselControl = [];

        for(var i = 0, v = this.props.products.length - 4; i < v; i++){
            carroselControl.push(<span key={i} className={!i ? "item-control bullet active" : "item-control bullet"}></span>);
        }

        return(
            <div className="container container-noFlex">
                <h3>{UtilResource.translate[this.props.name]}</h3>
                <div className="carrosel">
                    <Products products={this.props.products}/>
                    <menu className="carrosel-control">
                        {carroselControl}
                    </menu>
                </div>
            </div>
        )
    }
});

export default ShowCase;