import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Modal.css'

function Modale({closeModale, message}) {

    return (
        <>
            <div className='bcgModale'>
                <button className="close" onClick={() => closeModale(false)}> <AiOutlineClose/> </button>
                <h5>{message} &#128079; </h5>
            </div>
        </>
    );
};

export default Modale;