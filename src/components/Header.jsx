import React from "react";
import Rating from "./Rating";

let ratingNum;

function handleSelected(number) {
    ratingNum = number;
}

function HeaderOne(props) {
    return (
     <div className="ratingcard">  
            <img src="icon-star.svg" className="star" alt="illustration-1" />
        <div>
            <h3>
                How did we do?
            </h3>
            <p className="description">
                Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!
            </p>
        </div>
        <Rating rated={ props.rated } selected={ handleSelected } />
    </div>);
}

function HeaderTwo() {
    return( 
    <div>
      <img src="illustration-thank-you.svg" alt="illustration-2" />
      <p className="selected">You selected { ratingNum } out of 5</p> 
      <h3 className="thankheader">Thank you!</h3>
      <p className="thankpara">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
    </div>);
}

export { HeaderOne, HeaderTwo };
