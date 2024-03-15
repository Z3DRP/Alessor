import React, {HTMLAttributes, MouseEvent } from "react";
import { PropsWithChildren, ClassAttributes } from "react";
import { Interpolation, Theme } from '@emotion/react';
import './Card.css';

type CardProps = {
    className?: string;
    show?: boolean;
    style?: ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & { css?: Interpolation<Theme>; };
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Card = (props: PropsWithChildren<CardProps>) => {
    return (
        <div className={`card ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

export default Card;