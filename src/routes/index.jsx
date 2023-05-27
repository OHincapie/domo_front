import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import { Historial } from "../components/Historial";


export const getRoutes = () => createBrowserRouter([
    {
        path: '',
        element: <App/> 
    }, 
    {
        path: '/historial',
        element: <Historial/>
    }
]);