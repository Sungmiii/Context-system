import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
// class Button extends React.Component {
//   static contextType = LanguageContext;

//   render() {
//     const text = this.context === 'english' ? 'Submit' : '제출'
//     return <button className="ui button primary">{text}</button>;
//   }
// }

//using Consumer
class Button extends React.Component {
  renderSubmit = (value) => {
    return value === 'english' ? 'Submit' : '제출'
  }
  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

//Button.contextType = LanguageContext; can do either way

export default Button;
