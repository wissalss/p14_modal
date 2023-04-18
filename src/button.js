import React from 'react';
import {useState} from "react"
import Modale from "./lib/Modal"
import "./button.css"

function Button() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <button className="openModale" 
                onClick= {() => {
                    setModal(true);
                }}> 
                Save
            </button>
            {modal && <Modale closeModale={setModal} message={"Your message"} />}
        </>
    )
}

export default Button