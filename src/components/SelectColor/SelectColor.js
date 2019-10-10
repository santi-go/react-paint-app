import React from 'react';
import Button from '../Button/Button'
import './SelectColor.scss';

class SelectColor extends React.Component {
    renderColorButton(i) {
        return (
            <Button 
                className={this.props.colors[i].className} 
                onClick={() => this.props.onClick(this.props.colors[i])}
            ></Button>
        );
    }

    render() {
        return (
            <div className="select-color">
                <div className="select-color label"></div>
                {this.renderColorButton(0)}
                {this.renderColorButton(1)}
                {this.renderColorButton(2)}
            </div>
        );
    }
}

export default SelectColor;