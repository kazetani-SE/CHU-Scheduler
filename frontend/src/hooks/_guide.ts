/**
 * HOOKS TEMPLATE
 * Used for handling logic
 */

import { useState, useEffect } from "react";

export function useExample() {
    const [data, setData] = useState<string>("Hello world");

    useEffect(() => {
        // side effect
    }, []);

    return { data, setData }; // return value is optional
}

/**
 * RULES:
 * - hook's name must start by "use"
 * - Can call api (through services)
 * - Does not return JSX
 */