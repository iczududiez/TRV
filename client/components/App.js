import React from 'react';
import Header from './Header';
import Body from './Body';

const App = React.createClass({
    render(){
        return (
            <div>
                <header>
                    <Header />
                </header>
                <section>
                    <Body />
                </section>
            </div>
        )
    }
})

export default App;