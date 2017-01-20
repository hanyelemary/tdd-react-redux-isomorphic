import React from 'react';

const Button = ({ buttonText, classNames, handleClick }) => {  
  return <button onClick={handleClick} className={classNames}>{buttonText}</button>;  
}

Button.PropTypes = {
  buttonText: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
  classNames: React.PropTypes.string
}

export default Button;