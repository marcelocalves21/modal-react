import { createContext, useState } from "react";



export const ModalContext = createContext()

const ModalContextProvider = (props) => {
    const [modal, setModal] = useState(false)

    return(
        <ModalContext.Provider value={{
            modal:modal, 
            setModal: setModal
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider