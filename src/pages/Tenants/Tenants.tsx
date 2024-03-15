import React from 'react';
import { useState, useEffect } from 'react';
import './Tenants.css';
import { toast } from 'react-toastify';
import ToastOptions from '../../interfaces/ToastOptions';
import TenantList from '../../components/TenantList/TenantList';
import axios from 'axios';

const Tenants = () => {
    const [tenants, setTenants] = useState(null);
    const showToast = (message: string, options: ToastOptions) => {
        return new Promise<void>((resolve, reject) => {
            try {
              if (options.type === 'success') {
                console.log('success toast');
                toast.success(message);
              } else {
                console.log('error toast');
                toast.error(message);
              }
              resolve()
            } catch (err) {
              reject(err)
            }
          });
    }
    useEffect(async () => {
        const fetchTenants = async () => {
            try {
                const result = await axios(
                    'https://localhost:8000/tenants'
                );

                const data = await result.json();
                setTenants(data);
            } catch {
                showToast('An error occurred while fetching tenants', {type: 'error'});
            }

        };
        fetchTenants();
    }, []);

    return (
       <TenantList tenants={tenants ?? []}/>
    )
}

export default Tenants;