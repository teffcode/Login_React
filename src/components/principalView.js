import React, {Component} from 'react';
import './principalView.css';
import image from '../images/img_principal.jpg';
import ButtonCA from './buttonCreateAccount.js';

class PrincipalView extends Component {
    render(){
        return(
            <div className="containerPrincipalImage">
                <div className="containerPrincipalInfo">
                    <h2>
                        Crecemos para nuestros clientes ofreciéndoles confiabilidad y oportunidad
                    </h2>
                </div>
                <ButtonCA/>
            </div>
        );
    }
}

export default PrincipalView