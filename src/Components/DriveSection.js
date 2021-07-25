import React, { useState } from "react"
import _ from "lodash"
import Card from "./Card"
import InputBox from "./InputBox"
import Modal from "./Modal"
import "../App.css"

const DriveSection = ({ childItems, title, cardSelected, searchText , onSearch  }) => {

    const [show, setShow] = useState(false);

    console.log("child",childItems)

    const folderData = _.filter(childItems, item => item.isFolder)
    const fileData = _.filter(childItems, item => !item.isFolder)

    return (
        <div className="drive-container">
            <div className="drive-header">
                <p className="drive-title">{title}</p>
                <div>
                    <button className="folder-btn" onClick={() => { setShow(true) }}>New folder</button>
                    <button className="file-btn">New file</button>
                    <Modal show={show} onClose={() => setShow(false)} title={"name "} />
                </div>
            </div>
            <span className="font-light">{_.size(folderData)} folders, {_.size(fileData)} files </span>
            <br />
            <br />
            <InputBox searchText={searchText} onSearch={onSearch}/>
            <br />
            {_.size(folderData) > 0 && <p className="sub-heading">{_.size(folderData)} folders</p>}
            <div className="cards-layout">
                {_.map(folderData, item =>
                    <Card data={item} key={item.id} cardSelected={cardSelected} />
                )}
            </div>
            {_.size(fileData) > 0 && <p className="sub-heading">{_.size(fileData)} files</p>}
            
            <div className="cards-layout">
                {_.map(fileData, item =>
                    <Card data={item} key={item.id} />
                )}
            </div>
        </div>
    )
}

export default DriveSection;