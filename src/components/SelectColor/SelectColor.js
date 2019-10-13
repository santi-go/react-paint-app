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
        const label = "SELECT A COLOR:"
        const className = "select-color";
        return (
            <div className={className}>
                <div className={`${className} label`}>{label}</div>
                {this.renderColorButton(0)}
                {this.renderColorButton(1)}
                {this.renderColorButton(2)}
                {this.renderColorButton(3)}
                {this.renderColorButton(4)}
                {this.renderColorButton(5)}
                {this.renderColorButton(6)}
                {this.renderColorButton(7)}
                {this.renderColorButton(8)}
                {this.renderColorButton(9)}
                {this.renderColorButton(10)}
                {this.renderColorButton(11)}
                {this.renderColorButton(12)}
                {this.renderColorButton(13)}
                {this.renderColorButton(14)}
                {this.renderColorButton(15)}
            </div>
        );
    }
}

export default SelectColor;