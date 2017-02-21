import React from 'react';
import UtilResource from '../jsClient/UtilResource';

var Products = React.createClass({

    render(){
        var products = this.props.products.map(function(productItem, key){
            if(productItem.filter == null ? true : productItem.filter){
                return (
                    <div key={key.toString()} className={(key +1) % 4 ? "product carousel-item" : "product carousel-item noMarginRight"}>
                        <figure>
                            <img src={productItem.image}/>
                        </figure>
                        <div className="details">
                            <a className="person" alt={productItem.title}>PERSONALIZE</a>
                            <span className="name">{productItem.title}</span>
                            <span className="describle">{UtilResource.convert.highTop(productItem["high-top"])}</span>
                            <span className="price">{UtilResource.convert.money(productItem.price,'brl')}</span>
                            <span className="times">ou {productItem.installments.number}X de {UtilResource.convert.money(productItem.installments.value)} sem juros</span>
                            <a className="btn btn-buy">COMPRAR</a>
                        </div>
                    </div>
                )
            }else{
                return null;
            }
        })


        return (
            <section className="products carousel-panel">
                {products}
            </section>
        )
    }
});

Products.propTypes = {
    products: React.PropTypes.array.isRequired
}

export default Products;