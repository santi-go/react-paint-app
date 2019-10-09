import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            
        }
    }
    
    
    render() {
        const {
            type
        } = this.props;
        return (
            <button className={type}>
                button
            </button>
        );
    }
}

export default Button;