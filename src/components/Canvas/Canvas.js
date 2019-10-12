import React from 'react';
import './Canvas.scss'
import Button from '../Button/Button';

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

        this.undoLast = this.undoLast.bind(this);
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

        this.points.push({
            x: mouseX,
            y: mouseY,
            size: lineWidth,
            color: brushCol,
            mode: "begin",
            stroke: this.stroke
        })
    }

    mouseUp = e => {
        const { brushCol, lineWidth} = this.props;
        const mouseX = (e.pageX || e.touches[0].pageX) - this.bb.left;
        const mouseY = (e.pageY || e.touches[0].pageY) - this.bb.top;

        this.setState({ mouseDown: false });

        this.points.push({
            x: mouseX,
            y: mouseY,
            size: lineWidth,
            color: brushCol,
            mode: "end",
            stroke: this.stroke
        });
    }

    mouseMove = e => {
        const { brushCol, lineWidth} = this.props;
        const mouseX = (e.pageX || e.touches[0].pageX) - this.bb.left;
        const mouseY = (e.pageY || e.touches[0].pageY) - this.bb.top;
        this.lastX = mouseX;
        this.lastY = mouseY;

        if (this.state.mouseDown) {
            if (e.touches) e.preventDefault();

            if (
                (e.pageX || e.touches[0].pageX) > 0 &&
                (e.pageY || e.touches[0].pageY) < this.props.height
            ) {
                
                this.ctx.lineTo( mouseX, mouseY);
                this.ctx.stroke();

                this.points.push({
                    x: mouseX,
                    y: mouseY,
                    size: lineWidth,
                    color: brushCol,
                    mode: "draw",
                    stroke: this.stroke
                });
            }
        }
    }

    redrawAll() {
        if (this.points.length === 0) {
            return;
        }
    
        this.ctx.clearRect(0, 0, this.props.width, this.props.height);
    
        for (var i = 0; i < this.points.length; i++) {
    
            var pt = this.points[i];
            
            var begin = false;
    
            if (this.ctx.lineWidth !== pt.size) {
                this.ctx.lineWidth = pt.size;
                begin = true;
            }
            if (this.ctx.strokeStyle !== pt.color) {
                this.ctx.strokeStyle = pt.color;
                begin = true;
            }
            if (pt.mode === "begin" || begin) {
                this.ctx.beginPath();
                this.ctx.moveTo(pt.x, pt.y);
            }
            if (pt.mode === "draw") {
                this.ctx.lineTo(pt.x, pt.y);
                console.log(pt);
            }
            

            if (pt.mode === "end" || (i === this.points.length - 1)) {
                this.ctx.stroke();
            }
        }
        this.ctx.stroke();
    }

    undoLast() {
        this.points.pop();
        this.redrawAll();
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
                    <Button
                        className="myButton"
                        onClick={this.undoLast}
                    >
                    </Button>
            </div>    
        )
    }
}

export default Canvas;