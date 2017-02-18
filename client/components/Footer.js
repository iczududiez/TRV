import React from 'react';
import path from 'path';
import banner from '../../public/image/banner-footer.png';

//Stateless
function Footer(){
    return (
        <footer>
            <div className="row">
                    <div className="banner">
                        <img src={banner} alt="Banner JUST DO IT."/>
                    </div>
                    <div className="footer-menu">
                        <p>JUST DO IT.</p>
                        <a className="btn btn-default btn-footer">TODOS OS PRODUTOS</a>
                    </div>
                </div>
                <div className="copyright">
                    <p>Nike Copyright 2017 - all rights reserved</p>
                </div>
        </footer>
    )
}

export default Footer;