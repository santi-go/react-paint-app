import React from 'react';

function Button(props){
    const line = "line"
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
        >
        <div className={line}></div>    
        </button>
    );
}

export default Button;