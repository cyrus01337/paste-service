import React from "react";


function onInput(event) {
    console.log("Input!");
}


function Codebox() {
    return (
        <textarea className="codebox" id="codebox" onInput={onInput}></textarea>
    );
}


export default Codebox;
