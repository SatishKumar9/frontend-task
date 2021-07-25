import React, { useState } from "react";
import _ from "lodash";
import { Dropdown } from "react-bootstrap";
import Modal from "./Modal";
import "../App.css";
import folder from "../assets/Folder.svg";
import pdf from "../assets/File-pdf.svg";
import ppt from "../assets/File-ppt.svg";
import doc from "../assets/File-text.svg";
import dots from "../assets/DotsVerticalO.svg";

const Card = (props) => {
  const {
    data,
    cardSelected,
    driveItems,
    setDriveItems,
    removeChild,
    duplicateChild,
  } = props;
  let cardImage;
  let backgroundColor;
  const isDirectory = data.isFolder;
  const [show, setShow] = useState(false);
  const [actionType, setActionType] = useState("");

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

  const renameItem = ({ data, input }) => {
    let index = _.indexOf(driveItems, data);
    driveItems[index].name = input;
    setDriveItems(driveItems);
    setShow(false);
  };

  const deleteItem = (data) => {
    setDriveItems(_.filter(driveItems, (item) => item.id !== data.id));
    removeChild(data.id);
    setShow(false);
  };

  return (
    <div
      className={`card-container ${isDirectory ? "pointer" : ""}`}
      onClick={() => {
        if (isDirectory) {
          cardSelected({ crumb: data, type: "card" });
        }
      }}
    >
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
          <span>{isDirectory ? data.name : _.split(data.name, ".")[0]}</span>
        </div>
        <Dropdown
          onClick={(e) => e.stopPropagation()}
          align="end"
          className="options-align"
        >
          <Dropdown.Toggle variant="success">
            <img src={dots} alt="dot" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              eventKey="1"
              onClick={() => {
                setActionType("rename");
                setShow(true);
              }}
            >
              Rename {isDirectory ? "folder" : "file"}{" "}
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onClick={() => {
                duplicateChild(data);
              }}
            >
              Duplicate {isDirectory ? "folder" : "file"}
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              onClick={() => {
                setActionType("delete");
                setShow(true);
              }}
            >
              Delete {isDirectory ? "folder" : "file"}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {show && (
          <Modal
            onClose={() => setShow(false)}
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
