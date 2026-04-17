import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "./routes.tsx";
import ExamplePage from "../pages/_guide.tsx";
import ExampleHeader from "../layouts/_guide.tsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.EXAMPLE,
        element: <ExampleHeader/>,
        children:[{index: true, element: <ExamplePage/>}],
    }
]);