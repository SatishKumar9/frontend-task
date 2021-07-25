import React, { useState } from "react"

import cross from "../assets/Union.png"

import "../App.css"

const Modal = props => {

    const [input, setInput] = useState("")

    if (!props.show) {
        return null;
    }

    let heading = "";
    let subHeading = "";
    let placeholder = "";
    let actionText = ""

    switch (props.type) {
        case "folder": {
            heading = "Create a new folder"
            subHeading = "Name of the folder"
            placeholder = "Enter folder name"
            actionText = "Create folder"
            break;
        }
        case "file": {
            heading = "Create a new file"
            subHeading = "Name of the file"
            placeholder = "Enter file name"
            actionText = "Create file"
            break;
        } default: {
            break;
        }
    }

    const inputChanges = value => {
        setInput(value)
    }

    const onSubmit = () => {
        switch (props.type) {
            case "folder": {
                props.createFolder(input)
                break
            } 
            case "file": {
                props.createFile(input);
                break
            }
            default: {}
        }
    }

    return (
        <div className="modal-container" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-title">
                    <p className="modal-heading">{heading}</p>
                    <span onClick={props.onClose} className="pointer"><img height="18px" src={cross} alt="" /></span>
                </div>
                <div className="modal-body">
                    <p>{subHeading}</p>
                    <input className="modal-input" type="text" placeholder={placeholder} onChange={(e) => { inputChanges(e.target.value) }} />
                </div>
                <div className="modal-footer">
                    <button className="folder-btn" onClick={props.onClose}>Cancel</button>
                    <button className="file-btn" onClick={onSubmit}>{actionText}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;