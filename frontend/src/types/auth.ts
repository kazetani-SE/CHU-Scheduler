export const GENDERS = {
    MALE: "male",
    FEMALE: "female",
    OTHER: "other",
} as const;

export type Gender = typeof GENDERS[keyof typeof GENDERS];

export type User = {
    id: string;
    username: string;
    email: string;
    firstname?: string;
    lastname?: string;
    gender?: Gender;
    phone?: string;
    created_at: string;
}
export type LoginPayload = {
    email: string;
    password: string;
}