import ReactDom from "react-dom";
import React from 'react'

const Modal = (props) => {

    return ReactDom.createPortal(
        (<div>
            <div>
            </div>
        </div>),
        document.querySelector("#modal")
    )

}

export default Modal;
