import React from "react";
import './TenantItem.cs';
import IAddress from "../../interfaces/IAddress";
import ITenant from "../../interfaces/ITenant";
import { displayStreetAddress } from "../../utils/Utils";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { useState } from "react";
import ObjectForm from "../ObjectForm/ObjectForm";

type Props = {
    firstName: string | undefined;
    lastName: string | undefined;
    address: IAddress | undefined;
    tenant: ITenant;
    image: string | undefined;
}
const TenantItem = (props: Props) => {
    const [showBody, setShowbody] = useState(false);

    const handleShowBody = () => {
        setShowbody(true);
    }

    const handleHideBody = () => {
        setShowbody(false);
    }

    const handleViewMap = () => {

    }
    const handleMore = () => {

    }
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }

    return <li className="tenant-item">
        <Card>
            <div className="tenant-item_img">
                <img src={props.image} alt={`${props.firstName} - ${props.lastName}`} />
            </div>
            <div className="tenant-item_info">
                <h2>{props.firstName} {props.lastName}</h2>
                <h3>{displayStreetAddress(props.address)}</h3>
            </div>
            <div className="tenant-body">
                {
                    showBody ?? <ObjectForm Id={props.tenant?.Id} Obj={props.tenant}/>
                }
            </div>
            <div className="tenant-item__actions">
                <Button btnName="View Map" onClick={handleViewMap}/>
                <Button btnName="More" onClick={handleMore} />
                <Button btnName="Edit" onClick={handleEdit} />
                <Button btnName="Delete" onClick={handleDelete} />
            </div>
        </Card>
    </li>
}

export default TenantItem;