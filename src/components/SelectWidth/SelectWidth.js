import React from 'react';
import Button from '../Button/Button'
import './SelectWidth.scss';

class SelectWidth extends React.Component {
    renderWidthButton(i) {
        return (
            <Button 
                className={this.props.widths[i].className} 
                onClick={() => this.props.onClick(this.props.widths[i])}
            ></Button>
        );
    }

    render() {
        const label = "LINE WEIGHT:"
        return (
            <div className="select-width">
                <div className="select-width label">{label}</div>
                {this.renderWidthButton(0)}
                {this.renderWidthButton(1)}
                {this.renderWidthButton(2)}
                {this.renderWidthButton(3)}
            </div>
        );
    }
}

export default SelectWidth;