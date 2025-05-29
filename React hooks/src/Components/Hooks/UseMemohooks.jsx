import React, { useMemo, useState } from "react";


function UseMemoHooks() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function CubeNum(num) {
        console.log("calculation done");
        return Math.pow(num, 3);
    }
    
    // here we passed two parameter first is number and second is dependence in form of [number] such that it changes only when number changes
    const result =  useMemo(() =>  {
        return CubeNum(number)
    }, [number]);

    return (
        <>
        {/* targeting the input value for that given in input field */}
        <input type="number"  value={number} onChange={(e)=> {setNumber(e.target.value)}}/>
        <h2>This  is the Cube of given number: {result}</h2>
        <button  type="submit" onClick={()=> setCounter(counter + 1)} > +1 </button>
        <h2>Counter : {counter}</h2>
        <button  type="submit" onClick={()=> counter >=  0 ? counter == 0 : setCounter(counter -  1)}  > -1 </button>
        </>
    )


}


export default UseMemoHooks;