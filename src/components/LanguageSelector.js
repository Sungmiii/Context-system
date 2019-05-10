import React from 'react';

class LanguageSelector extends React.Component {
    render() {
        return (
            <div>
                Select a language:
          <i
                    className="flag nz"
                    onClick={() => this.props.onLanguageChange('english', 'red')}
                />
                <i
                    className="flag kr"
                    onClick={() => this.props.onLanguageChange('korean', 'primary')}
                />
            </div>
        )
    }
}

export default LanguageSelector;