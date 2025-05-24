import React from "react";


const CustomButton = (
{    text,
     onclick, 
     type = "button",
    className = "" }) => {
    return (
        <button type={type}
        onClick={onclick}
        className={`${className}`}
        >
            {text}
        </button>
    );
};


export default CustomButton;
