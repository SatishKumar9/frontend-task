import React from "react"

import cross from "../assets/Union.png"

import "../App.css"

const Modal = props => {

    if (!props.show) {
        return null;
    }

    const placeholder = "Enter folder name"

    const inputChanges = e => {
        console.log(e)
    }

    return (
        <div className="modal-container" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-title">
                    <p className="modal-heading">SubSection</p>
                    <span onClick={props.onClose} className="pointer"><img height="18px" src={cross} alt="" /></span>
                </div>
                <div className="modal-body">
                    <p>{props.title}</p>
                    <input className="modal-input" type="text" placeholder={placeholder} onChange={(e) => { inputChanges(e.target.value) }} />
                </div>
                <div className="modal-footer">
                    <button className="folder-btn" onClick={props.onClose}>Cancel</button>
                    <button className="file-btn" onClick={props.onSubmit}>Create folder</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;