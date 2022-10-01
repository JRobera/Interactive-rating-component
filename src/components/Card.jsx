import React, { useState } from "react";
import { HeaderOne, HeaderTwo } from "./Header.jsx";

function Card(){
    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked(true);
    }
    return (
    <div className="card">
    {!isClicked ? <HeaderOne rated={ handleClick } /> : <HeaderTwo />}
    </div>);
}

export default Card;