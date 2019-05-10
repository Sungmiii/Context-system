import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        console.log(this.context)
        return (

            <div>
                Select a language:
                <i
                    className="flag nz"
                    onClick={() => this.context.onLanguageChange('english', 'red')}
                />
                <i
                    className="flag kr"
                    onClick={() => this.context.onLanguageChange('korean', 'primary')}
                />
            </div>
        )
    }
}

export default LanguageSelector;