import apiClient from "./axiosClient.ts";
import type { LoginPayload, User } from "../types/auth.ts";

const USE_MOCK = true;

const MOCK_USER: User = {
    id: "mock1",
    username: "User 1",
    email: "user1@gmail.com",
    created_at: "2021-04-01",
};

export const authService = {
    login: async (request: LoginPayload): Promise<User> => {
        if (USE_MOCK) {
            return MOCK_USER;
        }
        return apiClient.post("/auth/login", request) as unknown as Promise<User>;
    },
};