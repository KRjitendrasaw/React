import React from 'react'
import CustomHooks from './CustomHooks'

const UseCustomhooks = () => {

    //Use the generic custome hooks which is created on other geeric place  i.e,CustomHooks from './CustomHooks'
    const [name, setName] = CustomHooks('username', '')
    const [id, setId] = CustomHooks('userId', '')


  return (

    <>
    <h1>Hello, {name}</h1>
    <input
     placeholder="Enter the name" 
    type='text' 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />

    <br/>
    
    <h1>Hello, {id}</h1>
    <input
     placeholder="Enter the Id" 
    type='number' 
    value={id}
    onChange={(e)=> setId(e.target.value)}
    />


    </>
  )
}

export default UseCustomhooks;