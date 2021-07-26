import React, { useState } from "react";
import _ from "lodash";
import { v4 } from "uuid"; // generates unique ids for folders/files created into drive data

import "../App.css";
import Card from "./Card";
import InputBox from "./InputBox";
import Modal from "./Modal";

const DriveSection = (props) => {
  const {
    childItems,
    parent,
    cardSelected,
    searchText,
    onSearch,
    driveItems,
    setDriveItems,
    addChild,
    removeChild,
    setSearchText,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState(""); // drive item type to be created via modal - either folder/file

  const folderData = _.filter(childItems, (item) => item.isFolder); // list of folders for current directory
  const fileData = _.filter(childItems, (item) => !item.isFolder); // list of files for current directory

  // adding new folder to drive data
  const createFolder = (data) => {
    const driveItem = {
      id: v4(),
      name: data,
      parent: parent.id,
      children: [],
      isFolder: true,
    };
    setDriveItems(driveItems.unshift(driveItem));
    addChild(driveItem.id);
    setShowModal(false);
  };

  // adding new file to drive data
  const createFile = (data) => {
    const driveItem = {
      id: v4(),
      name: data,
      parent: parent.id,
      children: null,
      isFolder: false,
    };
    setDriveItems(driveItems.unshift(driveItem));
    addChild(driveItem.id);
    setShowModal(false);
  };

  // duplicate existing drive item - appends "_copy" to the file/folder name
  const duplicateChild = (data) => {
    let name = `${data.name}_copy`;
    if (!data.isFolder) {
      const nameSplit = _.split(data.name, ".");
      name = `${nameSplit[0]}_copy.${nameSplit[-1]}`;
    }
    const driveItem = {
      id: v4(),
      name: name,
      parent: parent.id,
      children: [],
      isFolder: data.isFolder,
    };
    setDriveItems(driveItems.unshift(driveItem));
    addChild(driveItem.id);
  };

  return (
    <div className="drive-container">
      <div className="drive-header">
        <p className="drive-title">{parent.name}</p>
        <div>
          <button
            className="folder-btn"
            onClick={() => {
              setShowModal(true);
              setType("folder");
            }}
          >
            New folder
          </button>
          <button
            className="file-btn"
            onClick={() => {
              setShowModal(true);
              setType("file");
            }}
          >
            New file
          </button>
          {/* Modal to create new folder/file */}
          {showModal && (
            <Modal
              onClose={() => setShowModal(false)}
              type={type}
              createFolder={createFolder}
              createFile={createFile}
              actionType="create"
            />
          )}
        </div>
      </div>
      <span className="font-14px">
        {_.size(folderData)} folders, {_.size(fileData)} files
      </span>
      <br />
      <br />
      {/* Search Box to filter drive data of current directory */}
      <InputBox
        searchText={searchText}
        onSearch={onSearch}
        setSearchText={setSearchText}
      />
      <br />
      {/* list of folder of current directory */}
      {_.size(folderData) > 0 && (
        <p className="sub-heading">{_.size(folderData)} folders</p>
      )}
      <div className="cards-layout">
        {_.map(folderData, (item) => (
          <Card
            data={item}
            key={item.id}
            cardSelected={cardSelected}
            driveItems={driveItems}
            setDriveItems={setDriveItems}
            removeChild={removeChild}
            duplicateChild={duplicateChild}
            setSearchText={setSearchText}
          />
        ))}
      </div>
      {/* list of files of current directory */}
      {_.size(fileData) > 0 && (
        <p className="sub-heading">{_.size(fileData)} files</p>
      )}

      <div className="cards-layout">
        {_.map(fileData, (item) => (
          <Card
            data={item}
            key={item.id}
            driveItems={driveItems}
            setDriveItems={setDriveItems}
            removeChild={removeChild}
            duplicateChild={duplicateChild}
          />
        ))}
      </div>
    </div>
  );
};

export default DriveSection;
