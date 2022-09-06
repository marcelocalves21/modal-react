import React, { useContext } from "react"
import Logo from "../../assets/react.svg"
import { ModalContext } from "../../context/ModalContextProvider"

import { Modal } from '../modal/Modal'

import './navbar.css'

export const Navbar = () => {
    const {modal, setModal} = useContext(ModalContext)

    const activateModal = () => {
        setModal(!modal)
    }
    
    return(
        <nav className="navbar-container">
            <img src={Logo} />
            <div>
                <button 
                    className="navbar-button" 
                    onClick={()=> activateModal()}>
                        Modal
                </button>
                <Modal active={modal}/>
            </div>
        </nav>
    )
}