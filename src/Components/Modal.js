import React, { useState } from "react";

import "../App.css";

import cross from "../assets/Union.png";

const Modal = (props) => {
  const {
    actionType,
    data,
    type,
    onClose,
    createFile,
    createFolder,
    deleteItem,
    renameItem,
  } = props;

  const filename = actionType === "rename" ? data.name : ""; // for rename action, input field is auto populated with existing filename
  const [input, setInput] = useState(filename); // entered input value for folder/file name

  // modal text to be displayed for folder/file and for each different available action
  // actionType -> create, delete, rename
  // type -> folder, file
  let heading = "";
  let subHeading = "";
  let placeholder = "";
  let actionText = "";

  switch (type) {
    case "folder": {
      switch (actionType) {
        case "create": {
          heading = "Create a new folder";
          subHeading = "Name of the folder";
          placeholder = "Enter folder name";
          actionText = "Create folder";
          break;
        }
        case "rename": {
          heading = "Rename folder";
          subHeading = "Name of the folder";
          placeholder = "Enter folder name";
          actionText = "Rename folder";
          break;
        }
        case "delete": {
          heading = `Delete ${data.name} folder?`;
          subHeading =
            "Are you sure you want to delete this folder? This is a permanent action and can’t be undone.";
          actionText = "Delete folder";
          break;
        }
        default:
          break;
      }
      break;
    }
    case "file": {
      switch (actionType) {
        case "create": {
          heading = "Create a new file";
          subHeading = "Name of the file";
          placeholder = "Enter file name";
          actionText = "Create file";
          break;
        }
        case "rename": {
          heading = "Rename file";
          subHeading = "Name of the file";
          placeholder = "Enter file name";
          actionText = "Rename file";
          break;
        }
        case "delete": {
          heading = `Delete ${data.name} file?`;
          subHeading =
            "Are you sure you want to delete this folder? This is a permanent action and can’t be undone.";
          actionText = "Delete file";
          break;
        }
        default:
          break;
      }
      break;
    }
    default: {
      break;
    }
  }

  // entered input for folder/file name
  const inputChanges = (value) => {
    setInput(value);
  };

  // calls relevant method based on type and action, upon submiting modal
  const onSubmit = () => {
    switch (type) {
      case "folder": {
        switch (actionType) {
          case "create": {
            createFolder(input);
            break;
          }
          case "rename": {
            renameItem({ data, input });
            break;
          }
          case "delete": {
            deleteItem(data);
            break;
          }
          default:
            break;
        }
        break;
      }
      case "file": {
        switch (actionType) {
          case "create": {
            createFile(input);
            break;
          }
          case "rename": {
            renameItem({ data, input });
            break;
          }
          case "delete": {
            deleteItem(data);
            break;
          }
          default:
            break;
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <p className="modal-heading">{heading}</p>
          <span onClick={onClose} className="pointer">
            <img height="18px" src={cross} alt="" />
          </span>
        </div>
        <div className="modal-body">
          <p>{subHeading}</p>
          {actionType !== "delete" ? (
            <input
              className="modal-input"
              value={input}
              type="text"
              placeholder={placeholder}
              onChange={(e) => {
                inputChanges(e.target.value);
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div className="modal-footer">
          {actionType === "delete" && (
            <button className="danger-btn" onClick={onSubmit}>
              {actionText}
            </button>
          )}
          <button className="folder-btn btn-border-light" onClick={onClose}>
            Cancel
          </button>
          {actionType !== "delete" && (
            <button
              className="file-btn"
              onClick={onSubmit}
              disabled={input ? false : true}
            >
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
