import React from 'react';
import './Modal.css'

const Modal = (props) => {
    return (
        <div className="Modal">
            <div onClick={() => {props.close()}} className="Modal-close-btn">X</div>
            {props.children}
        </div>
    )
}

export default Modal;