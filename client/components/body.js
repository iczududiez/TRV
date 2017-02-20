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
            filters:[]
        }
    },
    componentDidUpdate (){
        Carousel.organizes();
    },
    componentDidMount(){

        //Or var self = this;

        ProductService.getProducts().then(function(response){
            this.setState({products:response.data});
            FilterLogic.itemArray = JSON.parse(JSON.stringify(response.data));//Cloning Object
            //self.setState...
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
                     key={key.toString()}
                     products={this.state.products[item]}
                     name={item}/>
        }.bind(this));

        return(
            <section className="body">
                <div className="row">
                    <Filter filterFunc={this.setFilter}/>
                    {showCases}
                </div>
            </section>
        )
    }
});

export default Body;