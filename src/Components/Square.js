import React from "react";
import "./style.css";

function Square({onClick, value}) {
  
// the return is to make the squares that will form the board
    return (
        <div className="square" onClick={onClick}>{value}</div>
    ); 
};

export default Square;