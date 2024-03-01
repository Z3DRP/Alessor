import React from "react";
import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import './SideDrawer.css';

type DrawerProps = {
    name: string;
}

const SideDrawer = (props: PropsWithChildren<DrawerProps>) => {
    const content = <aside className="side-drawer">{props.children}</aside>;
    // add to add the null assertion ! at the end of document.getElementById
    // ! assures typscript this value is never null
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook')!);
};

export default SideDrawer;