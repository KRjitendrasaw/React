import React, { useContext } from 'react'
//import { AppContext } from './Components/Context/AppContexts.jsx';

import { AppContext } from './AppContexts.jsx';




const Footer = () => {

    const {phone, Name} = useContext(AppContext);
    return (
    <>
    <h1>Footer</h1>
    <h2>Phone: {phone}</h2>
    <h2>Name: {Name}</h2>
    </>
    
)
}

export default Footer;