import { useState } from "react";


function UseStateHooks() {
    //useEffect
    let [counter, Setcounter] = useState(0)
    
    const addValue = () => {
      if(counter <= 19  ){
        Setcounter(counter + 1)
        //console.log(counter)
      }
    }
    
    const removeValue = () => {
      if(counter > 0  ){
        Setcounter(counter -1)
        console.log(counter)
      }
      // no need for else condition
      // Setcounter(0)
      // console.log(counter)
    }
    
      return (
        <>
        <h1> This is Hooks Project</h1>
        <h2> Counter Value:  {counter}</h2>
    
        <button onClick={ addValue}>Add Value : {counter} </button>
          <br/>
        <button onClick={ removeValue}>Remove Value:  {counter} </button>
    
        </>
      )
    }
    


    
export default UseStateHooks;