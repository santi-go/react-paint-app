import React from 'react';
import Canvas from '../Canvas/Canvas';
import SelectColor from '../SelectColor/SelectColor';
import SelectWidth from '../SelectWidth/SelectWidth';
import './PaintUI.scss';

class PaintUI extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            colors: [
                { name: 'maroon', className: "color-btn maroon-btn"},
                { name: 'red', className: "color-btn red-btn"},
                { name: 'orange', className: "color-btn orange-btn"},
                { name: 'yellow', className: "color-btn yellow-btn"},
                { name: 'olive', className: "color-btn olive-btn"},
                { name: 'green', className: "color-btn green-btn"},
                { name: 'purple', className: "color-btn purple-btn"},
                { name: 'fuchsia', className: "color-btn fuchsia-btn"},
                { name: 'lime', className: "color-btn lime-btn"},
                { name: 'teal', className: "color-btn teal-btn"},
                { name: 'aqua', className: "color-btn aqua-btn"},
                { name: 'blue', className: "color-btn blue-btn"},
                { name: 'navy', className: "color-btn navy-btn"},
                { name: 'black', className: "color-btn black-btn"},
                { name: 'gray', className: "color-btn gray-btn"},
                { name: 'white', className: "color-btn white-btn"},  
            ],
            activeColor: { name: 'black', className: 'color-btn black-btn'},
            widths: [
                { width: 2, className: "width-btn extra-thin-btn"},
                { width: 5, className: "width-btn thin-btn"},
                { width: 10, className: "width-btn medium-btn"},
                { width: 18, className: "width-btn large-btn"}
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

    render() {
        const {
            className
        } = this.props;

        const panel = "panel";

        const canvasProps = {
            style: {
              background: 'powderblue',
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
                <div className={panel}>
                    <SelectColor{...this.state} onClick={this.handleActiveColor}></SelectColor>
                    <SelectWidth{...this.state} onClick={this.handleActiveWidth}></SelectWidth>
                </div>
            </div>
        );
    }
}

export default PaintUI;