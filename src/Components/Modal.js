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
        <div className="modal-container">
            <div className="modal-content">
                <div className="modal-title">
                    <p className="modal-heading">SubSection</p>
                    <img height="18px" src={cross} alt="" />
                </div>
                <div className="modal-body">
                    <span>Name of the folder</span><br />
                    <input className="modal-input" type="text" placeholder={placeholder} onChange={(e) => { inputChanges(e.target.value) }} />
                </div>
                <div className="modal-footer">
                    <button className="folder-btn">Cancel</button>
                    <button className="file-btn">Create folder</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;