import React from "react";
import { PropsWithChildren } from "react";
import './SideDrawer.css';

type DrawerProps = {
    name: string;
}

const SideDrawer = (props: PropsWithChildren<DrawerProps>) => {
    return <aside className="side-drawer">{props.children}</aside>
};

export default SideDrawer;