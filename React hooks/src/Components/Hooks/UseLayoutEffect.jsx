import React, { useEffect, useLayoutEffect } from 'react'


function UseLayoutEffects() {

    useEffect(()=> {
        console.log("Message from UseEffect")
    }, [])

    useLayoutEffect(()=> {
        console.log("Message from useLayoutEffect")
    })

  return (
<>
    <h2>Text Message</h2>
    {Array(10).fill('').map((item, index) =>(
    <li key={index}> {Math.pow(Math.random(), 10)}</li>
))}
</>
  );
}

export default UseLayoutEffects;