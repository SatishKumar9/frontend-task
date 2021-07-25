import React, { useState } from "react"

import search from "../assets/SearchO.svg"
import cross from "../assets/Union.png"

const InputBox = ({ data }) => {

    const [cross, setCross] = useState();
    const placeholder = "Search for a folder of file"
    let clear;

    const inputChanges = e => {
        console.log(e)
        if (e) {
            setCross(<img height="18px" style={{marginTop:"4px"}}  src={cross} alt="" />)
        }
        // clear = (e) ? <img height="18px" style={{marginTop:"4px"}}  src={cross} alt="" /> : <span></span>
        console.log(clear)
    }

    return (
        <div className="input-container">
            <img src={search} alt="" />
            <input className="input-box" type="text" placeholder={placeholder} onChange={(e) => { inputChanges(e.target.value) }} />
            {clear}
            {/* <img height="18px" style={{marginTop:"4px"}}  src={cross} alt="" /> */}
        </div>
    )
}

export default InputBox;