import React from 'react';

const Filtro = React .createClass({

    render(){
        return (
            <div className="row">
                <div>
                    <span className="title">
                        Chuteiras HyperVemon:
                    </span>
                </div>
                <div>
                    <input id="chkCanoAlto" type="checkbox" name="filtroCano" value="1"/>
                    <label htmlFor="chkCanoAlto">Cano Alto</label>
                    <input id="chkCanoBaixo" type="checkbox" name="filtroCano" value="2"/>
                    <label htmlFor="chkCanoBaixo">Cano Alto</label>
                    <input id="chkFutebolCampo" type="checkbox" name="filtroFutebol" value="1"/>
                    <label htmlFor="chkFutebolCampo">Cano Alto</label>
                    <input id="chkFutebolSociety" type="checkbox" name="filtroFutebol" value="2"/>
                    <label htmlFor="chkFutebolSociety">Cano Alto</label>
                </div>
                <div>
                    <a href="#" className="btn btn-default">Todos os produtos</a>
                </div>
            </div>
        )
    }

})

export default Filtro;