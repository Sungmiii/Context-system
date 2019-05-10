import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag nz"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag kr"
            onClick={() => this.onLanguageChange('korean')}
          />
        </div>
        <LanguageContext.Provider
          value={this.state.language}
        >
          <UserCreate />
        </LanguageContext.Provider>

        <LanguageContext.Provider
          value="korean"
        >
          <UserCreate />
        </LanguageContext.Provider>
        <UserCreate />
      </div>
    );
  }
}

export default App;
