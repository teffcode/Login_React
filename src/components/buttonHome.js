import React from 'react'
import { Button } from 'semantic-ui-react'
import './buttonHome.css'
import image from '../images/insta_icon.png'

const ButtonHome = () => (
  <div className="content">
    <img 
        className="image" 
        alt="Insta"    
        src={image} 
    />
    <h1 className="letter">Insta</h1>
  </div>
)

export default ButtonHome