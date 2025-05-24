import React, { useContext } from 'react'
import { AppContext } from './AppContexts.jsx';



const Header = () => {

    const {phone, Name} = useContext(AppContext);
    return (
    <>
    <h1>Header</h1>
    <h2>Phone: {phone}</h2>
    <h2>Name: {Name}</h2>
    </>
    
)
}

export default Header;