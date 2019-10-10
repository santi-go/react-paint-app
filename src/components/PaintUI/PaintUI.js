import React from 'react';
import Canvas from '../Canvas/Canvas';
import Button from '../Button/Button';
import SelectColor from '../SelectColor/SelectColor';
import './PaintUI.scss';

class PaintUI extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            colors: [
                { name: 'black', className: "color-btn black-btn"},
                { name: 'green', className: "color-btn green-btn"},
                { name: 'red', className: "color-btn red-btn"}
            ],
            activeColor: { name: 'green', className: "btn green-btn"},
            widths: [
                { width: 2, className: "width-btn extra-thin-btn"},
                { width: 5, className: "width-btn thin-btn"},
                { width: 10, className: "width-btn medium-btn"},
                { width: 20, className: "width-btn large-btn"}
            ],
            activeWidth: { width: 5, className: "width-btn thin-btn"},
        }

        this.handleActiveColor = this.handleActiveColor.bind(this);
        this.handleActiveWidth = this.handleActiveWidth.bind(this);
    }

    handleActiveColor(color) {
        this.setState({activeColor: color});
    }
 
    handleActiveWidth(width) {
        this.setState({activeWidth: width});
    }

    // renderColorButton(i) {
    //     return (
    //         <Button 
    //             className={this.state.colors[i].className} 
    //             onClick={() => this.handleActiveColor(this.state.colors[i])}
    //         ></Button>
    //     );
    // }

    renderWidthButton(i) {
        return (
            <Button 
                className={this.state.widths[i].className} 
                onClick={() => this.handleActiveWidth(this.state.widths[i])}
            ></Button>
        );
    }
    
    render() {
        const {
            className
        } = this.props;

        const canvasProps = {
            style: {
              background: 'tomato',
            },
            brushCol: this.state.activeColor.name,
            lineWidth: this.state.activeWidth.width,
            className: 'paint',
            height: 500,
            width: 500,
        };

        return (
            <div className={className}>
                <Canvas{...canvasProps}></Canvas>
                <SelectColor{...this.state} onClick={this.handleActiveColor}></SelectColor>
                {this.renderWidthButton(0)}
                {this.renderWidthButton(1)}
                {this.renderWidthButton(2)}
                {this.renderWidthButton(3)}
            </div>
        );
    }
}

export default PaintUI;