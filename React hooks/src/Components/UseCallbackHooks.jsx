import React, { useCallback, useState } from "react";
import Header from "./Header";



function UseCallBackHooks() {

    const [count , setCount ] = useState(0);
    
    //here we are passing a a anonymns function such that it being renedered again and again
    //const newFunc = () => {}
    
    //here we are passing a empty callback function to resolve above issue by using useCallback hooks that uses
    // cached function to avoid rerender
    //const newFunc = useCallback(() =>{} , [count]) //if we use this it's also rerendered again and aagin 
    const newFunc = useCallback(() =>{} , [])

   return (
    <> 
         {/* here we are passing a props in Header components  */}
        <Header newFunc={newFunc}/>
        <h1>{count}</h1>
        <button  type="submit" onClick={() => setCount(prev => prev + 1) }>Click</button>
    </>

   )
}


export default UseCallBackHooks;