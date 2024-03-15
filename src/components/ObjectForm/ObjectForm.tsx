import React from "react";
import './ObjectForm.css';
import { Type } from "typescript";

interface Object {
    Id?: string;
    Obj: {[key: string]: string};
}
const ObjectForm = (props: Object) => {
    const objKeys = Object.keys(props.Obj);

    return <form >
        {
            objKeys.map(obj => (
                <>
                    <label htmlFor={`${props.Id}-${props.Obj[obj]}`}>{props.Obj[obj]}</label>
                    <input type="text" id={`${props.Id}-${props.Obj[obj]}`} name={`${props.Obj[obj]}`} />
                </>
            ))
        }
    </form>
}

export default ObjectForm;