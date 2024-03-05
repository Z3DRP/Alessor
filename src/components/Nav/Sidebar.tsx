import React, { MouseEvent } from "react";
import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

type DrawerProps = {
    name?: string;
    show?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SideDrawer = (props: PropsWithChildren<DrawerProps>) => {
    const content = (
        <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );
    // add to add the null assertion ! at the end of document.getElementById
    // ! assures typscript this value is never null
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook')!);
};

export default SideDrawer;