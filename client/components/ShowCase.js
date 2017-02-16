import React from 'react';
import Products from './Products';
import UtilResource from '../Util/UtilResource';

const ShowCase = React.createClass({

    render(){

        var carroselControl = [];

        for(var i = 0, v = this.props.products.length - 4; i < v; i++){
            carroselControl.push(<span key={i}>°</span>);
        }

        return(
            <div className="row">
                <h3>{UtilResource.translate[this.props.name]}</h3>
                <div className="carrosel">
                    <Products products={this.props.products}/>
                    <div>
                        {carroselControl}
                    </div>
                </div>
            </div>
        )
    }
});

export default ShowCase;