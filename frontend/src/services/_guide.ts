/**
 * SERVICES - TEMPLATE
 */

import apiClient from "./axiosClient.ts";

/**
 * GET
 */
export const getUsers = () => {
    return apiClient.get("/users");
};

/**
 * POST
 */
export const createUser = (data: { name: string; email: string }) => {
    return apiClient.post("/users", data);
};

/**
 * PUT
 */
export const updateUser = (
    id: number,
    data: Partial<{ name: string; email: string }>
) => {
    return apiClient.put(`/users/${id}`, data);
};

/**
 * DELETE
 */
export const deleteUser = (id: number) => {
    return apiClient.delete(`/users/${id}`);
};

/**
 * FLOW:
 * service → hook → component
 */