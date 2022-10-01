import React, { useState } from "react";
import Rate from "./Rate";

function Rating(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const custombtnStyle ={
        backgroundColor: "hsl(0, 0%, 100%) ", 
        color: "hsl(25, 97%, 53%)"
    };

    function handleClick(event) {
           props.rated();
    }
    function handleMouseOver() {
        setIsMouseOver(true);
    }
    function handleMouseOut() {
        setIsMouseOver(false);
    }
    function handleFocus(event) {
        props.selected(event.target.innerHTML);
    }

    return (
        <div>
            <div className="ratings">
                <Rate handleFocus={ handleFocus } value="1" />
                <Rate handleFocus={ handleFocus } value="2" />
                <Rate handleFocus={ handleFocus } value="3" />
                <Rate handleFocus={ handleFocus } value="4" />
                <Rate handleFocus={ handleFocus } value="5" />
            </div>
            <p className="btnsubmit" onClick={ handleClick } style={isMouseOver ? custombtnStyle : null} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>SUBMIT</p>
        </div>
        );
}

export default Rating;