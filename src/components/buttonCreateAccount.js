import React from 'react'
import classNames from 'classnames';
import './buttonCreateAccount.css'

const ButtonCreateAccount = (props) => (
  <div className={classNames('button', {'button-white': props.white })}>
    {props.text}
  </div>
)

export default ButtonCreateAccount;