import React from 'react';
import Filter from './Filter';
import ShowCase from './ShowCase';
import ProductService from '../../service/ProductService';
import Carousel from '../jsClient/Carousel';
import FilterLogic from '../jsClient/FilterLogic';

var Body = React.createClass({

    getInitialState(){
        return {
            products:null,
            filters:[],
            message:null
        }
    },
    componentDidUpdate (){
        Carousel.organizes();
    },
    componentDidMount(){

        //Or var self = this;

        ProductService.getProducts().then(function(response){
            if(response){
                this.setState({products:response.data});
                FilterLogic.itemArray = Object.assign({}, response.data);//Cloning Object
                Object.assign
                //self.setState...
            }else{
                this.setState({message:"Não encontramos nenhum produto. :/"});
            }
        }.bind(this));
    },
    setFilter(event){
        
        event = event ? event : window.event;
        var elem = event.target ? event.target : event.srcElement;
        var productFilter = this.state.products;

        if(elem.checked){
            FilterLogic.addFilter(elem.getAttribute('name'), elem.value);
        }else{
            FilterLogic.removeFilter(elem.getAttribute('name'), elem.value);
        }

        for(var prop in productFilter){
            productFilter[prop] = FilterLogic.filterLogic(prop);
        }

        this.setState({products:productFilter});
    },
    render(){

        var showCases = Object.getOwnPropertyNames(this.state.products || {}).map(function(item, key){
            return <ShowCase 
                     key={key}
                     products={this.state.products[item]}
                     name={item}/>
        }.bind(this));

        var returnHTML = showCases.length ?
                        (<div className="row">
                            <Filter filterFunc={this.setFilter}/>
                            {showCases}
                        </div>) :
                        (<div className="row">
                            <div className="message">
                                <h2>{this.state.message}</h2>
                            </div>
                        </div>);

        return (
            <section className="body">
                {returnHTML}
            </section>
        )
    }
});

export default Body;