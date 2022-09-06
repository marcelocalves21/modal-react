import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";

import './modal.css'

export const Modal = (props) => {
    const {modal, setModal} = useContext(ModalContext)

    const deactivateModal = () => {
        setModal(!modal)
    }

  return (
    <>
      <div
        className={modal ? "page-disable" : "page-disable disable"}
        onClick={() => deactivateModal()}
      ></div>
      <div className={modal ? "modal" : "modal disable"}>
        <button className="modal-closing btn closing-button" onClick={() => deactivateModal()}>
          X
        </button>
        <div className="modal-header">
          <h3>header</h3>
        </div>
        <div className="modal-body">
          <textarea rows="5" cols="10"></textarea>
        </div>
        <div className="modal-footer">
          <button className=" btn post-button">Post</button>
          <button 
            className="btn cancel-button" 
            onClick={() => deactivateModal()}
        >
            Cancel
        </button>
        </div>
      </div>
    </>
  );
};
