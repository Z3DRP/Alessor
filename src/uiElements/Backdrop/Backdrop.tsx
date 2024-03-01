import React, { MouseEvent } from "react";
import ReactDOM from 'react-dom';
import './Backdrop.css';

type bdProps = {
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const Backdrop = ({onClick}: bdProps) => {
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={onClick}></div>,
        document.getElementById('backdrop-hook')!
    );
}

export default Backdrop;