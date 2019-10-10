import React from 'react';

function Button(props){
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
        ></button>
    );
}

export default Button;