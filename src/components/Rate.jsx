import React, { useState } from "react";

function Rate(props) {
    
    const [isMouseOver, setIsMouseOver] = useState(false);
    
    function handleMouseOver() {
        setIsMouseOver(true);
    }
    function handleMouseOut() {
        setIsMouseOver(false);
    }
    return <a href="#" onFocus={props.handleFocus} style={isMouseOver ? {backgroundColor:"hsl(25, 97%, 53%)",color: "hsl(0,0%,100%)"} : null} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >{props.value}</a> 
}

export default Rate;