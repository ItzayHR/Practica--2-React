import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components/Body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Body extends Component 
{
    render() 
    {
        return (
            <div className="Body">
                <br/>
                <h1>{this.props.practica}</h1>
                <br/>
                <div className="Lista">
                    <ol start="1">
                        {
                            this.props.temas.map
                            (
                                (e,index)=>
                                <li key={index}>{e}</li>
                            )
                        }
                    </ol>
                </div>
                    
                <Button variant="primary" onClick={()=>(alert("Hola"))}>Dale click</Button>
            </div>
        )
    }
}
export default Body;

Body.propTypes={
    practica: PropTypes.string,
    temas: PropTypes.array
}