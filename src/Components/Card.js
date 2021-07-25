import React from "react"

import "../App.css"
import folder from "../assets/Folder.svg"
import pdf from "../assets/File-pdf.svg"
import ppt from "../assets/File-ppt.svg"
import doc from "../assets/File-text.svg"
import dots from "../assets/DotsVerticalO.svg"

const Card = ({ data, cardSelected }) => {

    let cardImage;
    let backgroundColor;
    const isDirectory = data.isFolder;

    if (!isDirectory) {
        const ext = data.name.slice(-3)
        if (ext === "pdf") {
            backgroundColor = {
                backgroundColor: "#FFF5F7"
            };
            cardImage = <img src={pdf} alt="pdf" />
        } else if (ext === "ppt") {
            backgroundColor = {
                backgroundColor: "#FFF9EB"
            };
            cardImage = <img src={ppt} alt="ppt" />
        } else if (ext === "doc") {
            backgroundColor = {
                backgroundColor: "#F5F5FF"
            };
            cardImage = <img src={doc} alt="doc" />
        }
    } else {
        backgroundColor = {
            backgroundColor: "#fff"
        };
        cardImage = <img src={folder} alt="folder" />
    }

    return (
        <div className={`card-container ${isDirectory ? "pointer": ""}`} onClick={() => { if (isDirectory) { cardSelected({ crumb: data, type:"card" }) } }}>
            <div className="card-img" style={backgroundColor}>
                {cardImage}
            </div>
            <div className="folder-card-content" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.125)" }}>
                <div>
                    {(!isDirectory) ? <span className="card-ext">{data.name.slice(-3)}<br /></span> : ""}
                    <span>{(isDirectory) ? data.name : data.name.slice(0, -4)}</span>
                </div>
                <img src={dots} alt="dot" />
            </div>
        </div>
    )
}

export default Card;