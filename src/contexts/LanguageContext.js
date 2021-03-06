import React from 'react';

//makesure capitalize
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english', color: 'red' };

    onLanguageChange = (language, color) => {
        this.setState({
            language, color
        })
    };

    render() {
        return (
            <Context.Provider
                value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
};

export default Context;

