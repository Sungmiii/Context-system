import React from 'react';

import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class App extends React.Component {
  state = {
    language: 'english',
    color: 'red'
  };

  onLanguageChange = (language, color) => {
    this.setState({
      language,
      color
    });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider
          value={this.state.language}
        >
          <ColorContext.Provider
            value={this.state.color}
          >
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div >
    );
  }
}

export default App;
