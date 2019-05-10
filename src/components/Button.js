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
  renderSubmit = (language) => {
    return language === 'english' ? 'Submit' : '제출'
  }
  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }
  render() {
    return (
      <LanguageContext.Consumer>
        {({ color }) => this.renderButton(color)}
      </LanguageContext.Consumer>
    );
  }
}

//Button.contextType = LanguageContext; can do either way

export default Button;
