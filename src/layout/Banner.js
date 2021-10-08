import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components/Banner.css'

class Banner extends Component {
    render() 
    {
        return (
            <div className="Banner">
                <h1>{this.props.texto}</h1>
            </div>
        )
    }
}

export default Banner;

Banner.propTypes={
    texto: PropTypes.string,
}
Banner.defaultProps={
    texto: "Desarrollo de Aplicaciones para Dispositivos Moviles",
}