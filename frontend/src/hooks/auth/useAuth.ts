import { useState } from "react";
import type { LoginPayload } from "../../types/auth.ts";
import { authService } from "../../services/authService.ts";

export function useAuth() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Just mock behaviour of login
    const login = async (request: LoginPayload) => {
        setLoading(true);
        setError(null);
        try {
            return await authService.login(request);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Failed to login");
            }
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, login };
}