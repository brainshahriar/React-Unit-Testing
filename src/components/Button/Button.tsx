import React from 'react';

type ButtonType = {
    title?:string;
}

const Button:React.FC<ButtonType> = (props:ButtonType) => {
    const handleClick=()=>{
        sessionStorage.setItem("lastname", "Smith");
    }
    return (
       <>
       <button onClick={handleClick} type='button'>Hello {props.title}</button>
       </>
    );
};

export default Button;