import React, { useEffect, useState } from 'react'


//custom hooks that having key, value that used as per dynamic value and key assign 
const CustomHooks= (key, initaValue) => {

    const[name, setName] = useState(
        localStorage.getItem(key) ?
         localStorage.getItem(key) : initaValue
    )

    useEffect(()=> {
        localStorage.setItem(key, name)
    },[name, key])

  return  [name, setName]
}

export default CustomHooks