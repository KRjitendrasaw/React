import React, { useEffect, useRef, useState } from "react";


function UseRefsHooks()  {
    // Userref first Example
    // const [value, setValue]  = useState(0);
    // const count = useRef(0);
    // console.log(count.current)
    //const [count1, setCount1]  = useState(0);

    // useEffect(() => {
    //   count.current = count.current + 1    
    // })
    // const handleClickeds = () => {
    //     if(value > 0 ){
    //         setValue( value  => value - 1 )
    //     }
    // }
    // const handleClickedss = () => {
    //     setValue( value  => value + 1 )
    // }

    {/* Userref second Example */}
    const inputRef = useRef();
    const btnClicked = () => {
        //console.log(inputRef.current)
        inputRef.current.style.background = "Green" 
    }
    

    return (
    <>
    {/* Userref first Example */}
    {/* <button onClick={handleClickeds(() => prev => prev - 1)}>-1</button> */}
    {/* <button onClick={setValue(()=> prev => prev -1)}>-1</button> */}
    {/* <h1>{value}</h1> */}
    {/* <button onClick={setValue(() => prev => prev + 1)}>+1</button> */}
    {/* <button onClick={handleClickeds(() => prev => prev + 1)}>+1</button> */}
    {/* <h1>ReRender Count: {count.current} </h1> */}
    
    {/* Userref second Example */}
    <input type="text"  ref={inputRef}/>
    <button type="text" onClick={btnClicked}>Click</button>

    </>
    )   
}

export default UseRefsHooks;