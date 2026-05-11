export const TYPES = {
    FRIEND: "friend",
    GROUP: "group"
} as const;

export type Type = typeof TYPES[keyof typeof TYPES];

export type Metadata = {
    id: string;
    name: string;
    type: Type;
}