/**
 * LAYOUT TEMPLATE
 * Used for rendering layout
 */

import {Outlet} from "react-router-dom";

export default function ExampleHeader(){
    return (
        <div className="bg-indigo-200">
            <h1 className=" flex flex-row items-center justify-center
            font-extrabold text-cyan-700
            ">
                This is the Header of Example Page
            </h1>
            <Outlet/>
        </div>
    );
}
/**
 * RULES: just contain layout UI
 * - Does not contain business logic
 */