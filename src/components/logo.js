import React from 'react'
import { Button } from 'semantic-ui-react'
import './logo.css'
import image from '../images/security.png'

const Logo = () => (
  <div className="content">
    <img 
        className="image" 
        alt="Security Guard"    
        src={image} 
    />
    <h1 className="letter">Security Guard</h1>
  </div>
)

export default Logo