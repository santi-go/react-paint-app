import React from 'react';
import './Canvas.scss'
import UndoRedo from '../UndoRedo/UndoRedo';

class Canvas extends React.Component {
    constructor(...props) {
        super(...props);

        this.points = [];
        this.stroke = 0;
        this.lastStroke = [];
        
        this.state = {
            mouseDown: false,
            mouseLocation: [0, 0],
        };

        this.undoLast = this.undoLast.bind(this);
        this.redoLast = this.redoLast.bind(this);
        this.findLastBeginIndex = this.findLastBeginIndex.bind(this);
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
        this.stroke +=1;

        if (!this.state.mouseDown) this.setState({ mouseDown: true });
        
        this.ctx.strokeStyle = brushCol;
        this.ctx.lineWidth = lineWidth;

        this.setState({
          mouseLocation: [e.pageX || e.touches[0].pageX, e.pageY || e.touches[0].pageY],          
        });

        this.points.push({
            x: mouseX,
            y: mouseY,
            size: lineWidth,
            color: brushCol,
            mode: "begin",
            stroke: this.stroke
        })
        
        this.ctx.beginPath();
        this.ctx.moveTo( mouseX, mouseY);

        
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
        const mouseX = (e.pageX || e.touches[0].pageX) - this.bb.left;
        const mouseY = (e.pageY || e.touches[0].pageY) - this.bb.top;
        
        if (this.state.mouseDown) {
            if (e.touches) e.preventDefault();

            if (
                (e.pageX || e.touches[0].pageX) > 0 &&
                (e.pageY || e.touches[0].pageY) < this.props.height
            ) {
                
                this.points.push({
                    x: mouseX,
                    y: mouseY,
                    stroke: this.stroke
                });

                this.ctx.lineTo( mouseX, mouseY);
                this.ctx.stroke();
            }
        }
    }

    redrawAll() {
        if (this.points.length === 0) {
            this.ctx.clearRect(0, 0, this.props.width, this.props.height);
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

            if (pt.mode === "end" || (i === this.points.length - 1)) {
                this.ctx.stroke();
            }

            this.ctx.lineTo(pt.x, pt.y);
            this.ctx.stroke(); 
        }
    }

    findLastBeginIndex = (el) => {
        return el.stroke === this.stroke && el.mode === "begin"
    }

    undoLast() {
        let lastBeginIndex = this.points.findIndex(this.findLastBeginIndex);
        this.lastStroke = this.points.splice(lastBeginIndex);
        this.stroke -= 1;
        this.redrawAll();
    }

    redoLast() {
        this.points = this.points.concat(this.lastStroke);
        this.redrawAll();
        this.lastStroke =[]
        this.stroke += 1;   
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
                    <UndoRedo
                        className="undo-redo-btn"
                        unDo={this.undoLast}
                        reDo={this.redoLast}
                    >
                    </UndoRedo>
            </div>    
        )
    }
}

export default Canvas;