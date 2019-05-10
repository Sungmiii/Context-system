import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

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
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>);
  }
}

//Button.contextType = LanguageContext; can do either way

export default Button;
