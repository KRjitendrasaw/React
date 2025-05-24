import React, { useState , useEffect} from "react";



function UseEffectHooks()  {
    const [count, setCount] = useState(0);
  //  const [name, setName] = useState("JR Star");

    //first scanerio without second parameter
    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 2 )
        }, 2000)
    } ,)

    //second scanerio with second parameter  with deps where if value is changed in array then useEffect triggers
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count => count + 2 )
    //     }, 2000)
    // } ,[count, name])

    
    return(
        <>
        <h1>This is the Count for page Count: {count} </h1>
        </>
    )
}


export default UseEffectHooks;