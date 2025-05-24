import React, { createContext } from "react";

export  const AppContext  = createContext();

const CreateContexts = (props) => {
    const phone = "+91 9876543211"
    const Name = "UseContext Hooks"

    return (
        <AppContext.Provider value={{phone, Name}}>
            {props.children}
        </AppContext.Provider>
    )

}


export default CreateContexts;