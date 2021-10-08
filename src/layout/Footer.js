import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components/Footer.css'

class Footer extends Component 
{
    render() 
    {
        return (
            <div align="center" className="Footer">
                {this.props.pie}
            </div>
        )
    }
}
export default Footer;

Footer.propTypes={
    pie: PropTypes.object
}


