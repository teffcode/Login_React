import React, {Component} from 'react';
import './cardLogin.css';
import image from '../images/img_principal.jpg';
import ButtonCA from './buttonCreateAccount.js';
import NormalLoginForm from './normalLoginForm.js';
import { Grid, Label, Segment } from 'semantic-ui-react';

class CardLogin extends Component {

    render(){
        return(
                <div>
                    <div className="form">
                        <Segment raised className="segmentContainer">
                            <Label ribbon 
                            style={{                                
                                backgroundColor: '#48D1CC', 
                                color:'white', 
                                padding:'15px', 
                                width:'150px',
                                heigth: '60px',
                                paddingLeft: '37px',
                            }}>
                                Admin Login
                            </Label>                       
                            <NormalLoginForm/>                                                
                        </Segment>
                    </div>
                </div>                  
        );
    }
}

export default CardLogin;