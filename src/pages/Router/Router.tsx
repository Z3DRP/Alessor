import { Route, Routes } from 'react-router-dom';
import { RouterType } from '../../types/Router.types';
import PagesData from '../PagesData/PagesData';

const Router = () => {
    const pageRoutes = PagesData.map(({ path, title, element }: RouterType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>
};

export default Router;