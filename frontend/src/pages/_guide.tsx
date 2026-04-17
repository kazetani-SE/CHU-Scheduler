/**
 * PAGES TEMPLATE
 * Used for rendering pages
 */

import {useExample} from "../hooks/_guide.ts";
import ExampleCard from "../components/_guide.tsx";


export default function ExamplePage() {
    const { data } = useExample();

    return (
        <div className="bg-blue-50 flex flex-row justify-center items-center w-full">
            <ExampleCard title={data} />
        </div>
    );
}

/**
 * RULES:
 * - Does not call api
 * - Does not contain big logic
 */