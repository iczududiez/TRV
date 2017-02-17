import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
require('../../public/cssSASS/style.css');

const App = React.createClass({
    render(){
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
})

export default App;