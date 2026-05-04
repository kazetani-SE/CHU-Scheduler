import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "./routes.tsx";
import MainPage from "../pages/MainPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import ExamplePage from "../pages/_guide.tsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.LOGIN,
        children:[{index: true, element: <LoginPage/>}],
    },
    {
        path: ROUTES.EXAMPLE,
        children:[{index: true, element: <ExamplePage/>}],
    },
    {
        path: ROUTES.MAIN_PAGE,
        element: <MainLayout/>,
        children:[{index: true, element: <MainPage/>}],
    }
]);