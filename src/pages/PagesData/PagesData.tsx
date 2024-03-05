import { Link } from "react-router-dom";
import { RouterType } from "../../interfaces/Router.types";
import Dashboard from "../Dashboard/Dashboard";
import HouseSearch from "../HouseSearch/HouseSearch";
import Lease from "../Lease/Lease";
import Login from "../Login/Login";
import Properties from "../Properties/Properties";
import Register from '../Register/Register';
import Tenants from "../Tenants/Tenants";
import Tasks from "../Tasks/Tasks";

const PagesData: RouterType[] = [
    {
        path: '',
        element: <Login />,
        title: 'Login'
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        title: 'Dashboard'
    }, {
        path: 'houseSearch',
        element: <HouseSearch />,
        title: 'HouseSearch'
    }, {
        path: 'lease',
        element: <Lease />,
        title: 'Lease'
    },
    {
        path: 'properties',
        element: <Properties />,
        title: 'Properties'
    }, 
    {
        path: 'tenants',
        element: <Tenants />,
        title: 'Tenants'
    },
    {
        path: 'register',
        element: <Register />,
        title: 'Register'
    },
    {
        path: 'tasks',
        element: <Tasks />,
        title: 'Tasks'
    }
];

export default PagesData;