/**
 * SERVICES - TEMPLATE
 */

import apiClient from "./axiosClient";

export const userService = {
    /**
     * GET
     */
    getUsers: () => {
        return apiClient.get("/users");
    },

    /**
     * POST
     */
    createUser: (data: { name: string; email: string }) => {
        return apiClient.post("/users", data);
    },

    /**
     * PUT
     */
    updateUser: (
        id: number,
        data: Partial<{ name: string; email: string }>
    ) => {
        return apiClient.put(`/users/${id}`, data);
    },

    /**
     * DELETE
     */
    deleteUser: (id: number) => {
        return apiClient.delete(`/users/${id}`);
    },
};

/**
 * FLOW:
 * service → hook → component
 */