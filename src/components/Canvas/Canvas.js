import React from 'react';
import './Canvas.scss'

class Canvas extends React.Component {
    constructor(...props) {
        super(...props);

        this.points = [];
        this.lastX = 0;
        this.lastY = 0;
        this.stroke = 0;

        this.state = {
            mouseDown: false,
            mouseLocation: [0, 0],
        };
    }

    componentDidMount() {
        const { brushCol, lineWidth } = this.props;
        const canvas = this.refs.canvas;

        this.ctx = canvas.getContext('2d');
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = brushCol;
        this.ctx.lineJoin = this.ctx.lineCap = 'round';

        this.bb = canvas.getBoundingClientRect();
    }
    
    mouseDown = e => {
        const { brushCol, lineWidth} = this.props;
        const mouseX = (e.pageX || e.touches[0].pageX) - this.bb.left;
        const mouseY = (e.pageY || e.touches[0].pageY) - this.bb.top;
        this.lastX = mouseX;
        this.lastY = mouseY;
        this.stroke +=1;

        if (!this.state.mouseDown) this.setState({ mouseDown: true });
        
        this.ctx.strokeStyle = brushCol;
        this.ctx.lineWidth = lineWidth;

        this.setState({
          mouseLocation: [e.pageX || e.touches[0].pageX, e.pageY || e.touches[0].pageY],          
        });
        
        this.ctx.beginPath();

        this.ctx.moveTo( mouseX, mouseY);
    }

    mouseUp = e => {
        this.setState({ mouseDown: false });
    }

    mouseMove = e => {
        const mouseX = (e.pageX || e.touches[0].pageX) - this.bb.left;
        const mouseY = (e.pageY || e.touches[0].pageY) - this.bb.top;
        
        if (this.state.mouseDown) {
            if (e.touches) e.preventDefault();

            if (
                (e.pageX || e.touches[0].pageX) > 0 &&
                (e.pageY || e.touches[0].pageY) < this.props.height
            ) {
                
                this.ctx.lineTo( mouseX, mouseY);
                this.ctx.stroke();
            }
        }
    }

    render() {
        const {
            className,
            width,
            height,
            style,
        } = this.props;
        return (
            <div className={className}>
                <canvas
                        ref="canvas"
                        className={`${className}__canvas`}
                        width={width}
                        height={height}
                        style={
                            Object.assign({}, style, {
                                width: this.props.width,
                                height: this.props.height,
                            })
                        }

                        onMouseDown={this.mouseDown}
                        onTouchStart={this.mouseDown}

                        onMouseUp={this.mouseUp}
                        onTouchEnd={this.mouseUp}

                        onMouseMove={this.mouseMove}
                        onTouchMove={this.mouseMove}
                    />
            </div>    
        )
    }
}

export default Canvas;