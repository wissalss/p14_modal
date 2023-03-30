import React from "react";
import './Modal.css'
import PropTypes from "prop-types"

export const Modal = ({ showModal, hideModal, message, title, modalStyle, modalHeaderStyle, titleStyle, modalBodyStyle, modalFooterStyle,CloseButtonStyle, footerButton1Style, footerButton2Style, buttonText1, buttonText2 }) =>{

    return showModal && (
            <>
            <div className="modal-overlay">
                <div className="modal-wrapper">
                <div className="modal" style={modalStyle}>
                    <div className="modal-header" style={modalHeaderStyle}>
                        <h3 style={titleStyle}>{title}</h3>
                        <button type="button" style={CloseButtonStyle}  className="modal-close-button"  onClick={hideModal}>X</button>
                    </div>
                    <div className="modal-body" style={modalBodyStyle}>{message}</div>
                    <div className="modal-footer" style={modalFooterStyle}>
                        <button type="button" className="modal-close-button-footer" style={footerButton1Style} onClick={hideModal}>{buttonText1}</button>
                        <button type="button" className="modal-close-button-footer" style={footerButton2Style} onClick={hideModal}>{buttonText2}</button>
                    </div>
                </div>
                </div>
            </div>
            </>
    )
}



Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired
}