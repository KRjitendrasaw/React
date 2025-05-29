import React, { useReducer } from "react";


function UseReducer()  {

  const initialState  = {count : 0}

   // const [count, setCount ] = useState(0);
     
    const rereducer = (state, action) => {
      switch(action.type){
        case 'increase' :{
        return {count: state.count + 1}    
        }
        case 'decrease' : {
          return {count: state.count - 1}  
        }
        case 'input' : {
          return {count: action.payload}  
        }
        default : {
          return state
        }
      }
      
    }

   const  [state , dispatch] = useReducer(rereducer, initialState)
    
       return (
        <> 
            <h1>{state.count}</h1>
            <button  type="submit" onClick={() =>dispatch({type: 'increase'})}>Increase</button>
            <button  type="submit" onClick={() =>dispatch({type: 'decrease'})}>Decrease</button>
            <br/>
            <input  type="number" 
             value={state.count}
            onChange={(e) =>dispatch({type: 'input', payload: Number((e.target.value)) })}/>
        </>
    )


}


export default UseReducer;