import React from 'react';

class App extends React.Component {
    state = { language: 'english' }

    onLanguageChange = (lang) => {
        this.setState({
            language: lang
        })
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
                {this.state.language}
            </div>
        )
    }
};

export default App;