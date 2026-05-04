/**
 * PAGES TEMPLATE
 * Used for rendering pages
 */

import {useExample} from "../hooks/_guide.ts";
import ExampleCard from "../components/_guide.tsx";
import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../router/routes.tsx";


export default function ExamplePage() {
    const { data } = useExample();

    const navigate = useNavigate();

    return (
        <div className="bg-blue-50 flex flex-col justify-center items-center w-full">
            <ExampleCard title={data} />
            <Button
                className="border-2 border-blue-800"
                onClick={() => navigate(ROUTES.LOGIN)}
            >
                Move to login page
            </Button>
        </div>
    );
}

/**
 * RULES:
 * - Does not call api
 * - Does not contain big logic
 */