import React from "react";
import './MainHeader.css';
import { PropsWithChildren } from "react";

type HeaderProps= {
    name: string;
}

const MainHeader = (props: PropsWithChildren<HeaderProps>) => {
    return <header className="main-header">{props.children}</header>;
};

export default MainHeader;