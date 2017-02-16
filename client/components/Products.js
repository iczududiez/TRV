import React from 'react';
import UtilResource from '../Util/UtilResource';

const Products = React.createClass({

    render(){

        var products = this.props.products.map(function(productItem, key){
            return (
                <div key={key.toString()} className="product">
                    <figure>
                        <img src={productItem.image}/>
                    </figure>
                    <div className="details">
                        <a>personalize</a>
                        <span className="name">{productItem.title}</span>
                        <span className="describle">{UtilResource.convert.highTop(productItem["high-top"])}</span>
                        <span className="price">{UtilResource.convert.money(productItem.price)(true)}</span>
                        <span className="times">ou {productItem.installments.number}X de {UtilResource.convert.money(productItem.installments.value)(false)} sem juros</span>
                        <a href="#" className="btn btn-buy">Comprar</a>
                    </div>
                </div>
            )
        })


        return (
            <section className="products">
                {products}
            </section>
        )
    }
})

export default Products;