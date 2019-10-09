import React from 'react';
import './Button.scss';

class Button extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            isOn: false        
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));
      }
    
    render() {
        const {
            type,
            color
        } = this.props;
        return (
            <button 
                className={`${type} ${color}`}
                onClick={this.handleClick}
            >
            {this.state.isOn ? "On" : "Off"} 

            </button>
        );
    }
}

export default Button;