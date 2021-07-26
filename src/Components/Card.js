import React, { useState } from "react";
import _ from "lodash";
import { Dropdown } from "react-bootstrap";

import "../App.css";
import Modal from "./Modal";

import folder from "../assets/Folder.svg";
import pdf from "../assets/File-pdf.svg";
import ppt from "../assets/File-ppt.svg";
import doc from "../assets/File-text.svg";
import dots from "../assets/DotsVerticalO.svg";
import edit from "../assets/Edit-line.svg";
import duplicate from "../assets/Vector.svg";
import bin from "../assets/Delete.svg";

const Card = (props) => {
  const {
    data,
    cardSelected,
    driveItems,
    setDriveItems,
    removeChild,
    duplicateChild,
    setSearchText,
  } = props;

  let cardImage;
  let backgroundColor;
  const isDirectory = data.isFolder;
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");

  // setting card images and background colors according to file extensions
  if (!isDirectory) {
    const ext = _.split(data.name, ".")[1];
    if (ext === "pdf") {
      backgroundColor = {
        backgroundColor: "#FFF5F7",
      };
      cardImage = <img src={pdf} alt="pdf" />;
    } else if (ext === "ppt") {
      backgroundColor = {
        backgroundColor: "#FFF9EB",
      };
      cardImage = <img src={ppt} alt="ppt" />;
    } else if (ext === "doc") {
      backgroundColor = {
        backgroundColor: "#F5F5FF",
      };
      cardImage = <img src={doc} alt="doc" />;
    }
  } else {
    backgroundColor = {
      backgroundColor: "#fff",
    };
    cardImage = <img src={folder} alt="folder" />;
  }

  // rename folder/file in drive data
  const renameItem = ({ data, input }) => {
    let index = _.indexOf(driveItems, data);
    driveItems[index].name = input;
    setDriveItems(driveItems);
    setShowModal(false);
  };

  // deleting folder/file from drive data
  const deleteItem = (data) => {
    setDriveItems(_.filter(driveItems, (item) => item.id !== data.id));
    removeChild(data.id);
    setShowModal(false);
  };

  return (
    <div
      className={`card-container ${isDirectory ? "pointer" : ""}`}
      onClick={() => {
        if (isDirectory) {
          cardSelected({ crumb: data, type: "card" });
          setSearchText("");
        }
      }}
    >
      {/* card contents */}
      <div className="card-img" style={backgroundColor}>
        {cardImage}
      </div>
      <div
        className="folder-card-content"
        style={{ borderTop: "1px solid rgba(0, 0, 0, 0.125)" }}
      >
        <div>
          {!isDirectory ? (
            <span className="card-ext">
              {_.split(data.name, ".")[1]}
              <br />
            </span>
          ) : (
            ""
          )}
          <span className="filename">
            {isDirectory ? data.name : _.split(data.name, ".")[0]}
          </span>
        </div>
        {/* actions dropdown */}
        <Dropdown onClick={(e) => e.stopPropagation()} align="end">
          <Dropdown.Toggle variant="success">
            <img src={dots} alt="dot" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              eventKey="1"
              onClick={() => {
                setActionType("rename");
                setShowModal(true);
              }}
            >
              <div className="card-options">
                <img src={edit} alt="" />
                <span className="ml-1rem">
                  Rename {isDirectory ? "folder" : "file"}
                </span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onClick={() => {
                duplicateChild(data);
              }}
            >
              <div className="card-options">
                <img src={duplicate} alt="" />
                <span className="ml-1rem">
                  Duplicate {isDirectory ? "folder" : "file"}
                </span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              onClick={() => {
                setActionType("delete");
                setShowModal(true);
              }}
            >
              <div className="card-options">
                <img src={bin} alt="" height="16px" width="16px" />
                <span className="ml-1rem danger">
                  Delete {isDirectory ? "folder" : "file"}
                </span>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* Modal for renaming and deleting folder/file */}
        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            type={isDirectory ? "folder" : "file"}
            actionType={actionType}
            data={data}
            renameItem={renameItem}
            deleteItem={deleteItem}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
