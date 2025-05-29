import React, { useContext } from "react";
import { AppContext } from "../Context/AppContexts";

const  Header = () => {

    const Phone = useContext(AppContext);
    console.log("Header Rendered")
    
    return(
        <>
         <h1>Header</h1>
         <h2>Phone: {Phone}</h2>
         {/* <h2>Name: {Name}</h2> */}
        </>


    )

}

//export default (Header)
export default React.memo(Header)

