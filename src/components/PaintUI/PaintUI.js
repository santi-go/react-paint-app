import React from 'react';
import Canvas from '../Canvas/Canvas'
import Button from '../Button/Button'
import './PaintUI.scss';

class PaintUI extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            colors: [
                { name: 'black', className: "btn black-btn"},
                { name: 'green', className: "btn green-btn"},
                { name: 'red', className: "btn red-btn"}
            ],
            activeColor: { name: 'green', className: "btn green-btn"},
        }

        this.handleActiveColor = this.handleActiveColor.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleActiveColor(color) {
        this.setState({activeColor: color});
    }
 
    handleClick() {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));
    }

    renderButton(i) {
        return (
            <Button 
                className={this.state.colors[i].className} 
                onClick={() => this.handleActiveColor(this.state.colors[i])}
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
            lineWidth: 10,
            className: 'paint',
            height: 500,
            width: 500,
            onDraw: () => { console.log('i have drawn!'); },
          };

        return (
            <div className={className}>
                <Canvas{...canvasProps}></Canvas>
                {this.renderButton(0)}
                {this.renderButton(1)}
                {this.renderButton(2)}
            </div>
        );
    }
}

export default PaintUI;