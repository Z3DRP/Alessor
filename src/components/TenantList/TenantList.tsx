import React, { MouseEvent } from 'react';
import Itenant from '../../interfaces/ITenant';
import Button from '../Button/Button';
import Card from '../Card/Card';
import TenantItem from '../TenantItem/TenantItem';

type Tprops = { 
    tenants: Itenant[];
}

const TenantList = (props: Tprops) => {
    const addTenant = () => {

    }

    if (props.tenants?.length === 0) {
        return <div className="tenant-list center">
            <Card >
                <h2>No Tenants Available</h2>
                <Button btnName="Add Tenant" onClick={addTenant}/>
            </Card>
        </div>
    }

    return <ul className="tenant-list" >
        {props.tenants.map(tenant => (
            <TenantItem 
                key={tenant.Id} 
                tenant={tenant} 
                image={tenant.Image} 
                firstName={tenant.FirstName} 
                lastName={tenant.LastName} 
                address={tenant.Address}
            />
        ))};
    </ul>
}

export default TenantList;