import React, { useState } from "react"
import _ from "lodash"
import Card from "./Card"
import InputBox from "./InputBox"
import Modal from "./Modal"
import "../App.css"
import { v4 } from "uuid";

const DriveSection = props => {
    const { childItems, parent, cardSelected, searchText, onSearch, driveItems, setDriveItems, addChild, removeChild } = props;
    const [show, setShow] = useState(false);
    const [type, setType] = useState("")

    const folderData = _.filter(childItems, item => item.isFolder)
    const fileData = _.filter(childItems, item => !item.isFolder)

    const createFolder = data => {
        const driveItem = {
            id: v4(),
            name: data,
            parent: parent.id,
            children: [],
            isFolder: true
        }
        setDriveItems(driveItems.push(driveItem));
        addChild(driveItem.id);
        setShow(false)
    }

    const createFile = data => {
        const driveItem = {
            id: v4(),
            name: data,
            parent: parent.id,
            children: null,
            isFolder: false
        }
        setDriveItems(driveItems.push(driveItem));
        addChild(driveItem.id);
        setShow(false)
    }

    const duplicateChild = data => {
        let name = `${data.name}_copy`
        if (!data.isFolder) {
            const nameSplit = _.split(data.name, ".")
            name = `${nameSplit[0]}_copy.${nameSplit[-1]}`
        }
        const driveItem = {
            id: v4(),
            name: name,
            parent: parent.id,
            children: [],
            isFolder: data.isFolder
        }
        setDriveItems(driveItems.push(driveItem));
        addChild(driveItem.id);
    }

    return (
        <div className="drive-container">
            <div className="drive-header">
                <p className="drive-title">{parent.name}</p>
                <div>
                    <button className="folder-btn" onClick={() => { setShow(true); setType("folder") }}>New folder</button>
                    <button className="file-btn" onClick={() => { setShow(true); setType("file") }}>New file</button>
                    {show && <Modal onClose={() => setShow(false)} type={type} createFolder={createFolder} createFile={createFile} actionType="create" />}
                </div>
            </div>
            <span className="font-light">{_.size(folderData)} folders, {_.size(fileData)} files </span>
            <br />
            <br />
            <InputBox searchText={searchText} onSearch={onSearch} />
            <br />
            {_.size(folderData) > 0 && <p className="sub-heading">{_.size(folderData)} folders</p>}
            <div className="cards-layout">
                {_.map(folderData, item =>
                    <Card data={item} key={item.id} cardSelected={cardSelected} driveItems={driveItems} setDriveItems={setDriveItems} removeChild={removeChild} duplicateChild={duplicateChild} />
                )}
            </div>
            {_.size(fileData) > 0 && <p className="sub-heading">{_.size(fileData)} files</p>}

            <div className="cards-layout">
                {_.map(fileData, item =>
                    <Card data={item} key={item.id} driveItems={driveItems} setDriveItems={setDriveItems} removeChild={removeChild} duplicateChild={duplicateChild} />
                )}
            </div>
        </div>
    )
}

export default DriveSection;