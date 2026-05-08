export type User = {
    id: string;
    username: string;
    email: string;
    firstname?: string;
    lastname?: string;
    gender?: string;
    phone?: string;
    created_at: string;
}
export type LoginPayload = {
    email: string;
    password: string;
}