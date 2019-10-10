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
            activeColor: { name: 'black', className: "btn black-btn"},
            isOn: false

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
    
    render() {
        const {
            className
        } = this.props;

        return (
            <div className={className}>
                <Canvas></Canvas>
                <Button className="btn black-btn" onClick={this.handleClick} isOn={this.state.isOn}></Button>
                <Button className="btn green-btn"></Button>
                <Button className="btn red-btn"></Button>
            </div>
        );
    }
}

export default PaintUI;