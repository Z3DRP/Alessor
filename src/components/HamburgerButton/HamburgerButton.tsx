import React, { MouseEvent } from "react";
import './HamburgerButton.css';

interface ButtonProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const HamburgerButton = ({ onClick }: ButtonProps) => {
    return (
        <button className="main-navigation__menu-btn" onClick={onClick}>
            <span />
            <span />
            <span />
        </button>
    );
}

export default HamburgerButton;