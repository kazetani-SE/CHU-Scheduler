import apiClient from "./axiosClient.ts";
import {GENDERS, type User} from "../types/auth.ts";
import {type Metadata, TYPES} from "../types/metadata.ts";

const USE_MOCK = true;

const MOCK_FRIEND_LIST: User[] = [
    {
        id: "f-1",
        username: "Bun bo hue",
        email: "johnsmith@gmail.com",
        firstname: "John",
        lastname: "Smith",
        gender: GENDERS.MALE,
        phone: "0901234561",
        created_at: "2026-01-10T08:30:00Z",
    },
    {
        id: "f-2",
        username: "Alice Johson",
        email: "alicejohnson@gmail.com",
        firstname: "Alice",
        lastname: "Johnson",
        gender: GENDERS.FEMALE,
        phone: "0901234562",
        created_at: "2026-01-15T09:45:00Z",
    },
    {
        id: "f-3",
        username: "Erik",
        email: "erich.v.mainstain@gmail.com",
        firstname: "Erich",
        lastname: "Mainstain",
        gender: GENDERS.MALE,
        phone: "0901234563",
        created_at: "2026-02-01T14:20:00Z",
    },
    {
        id: "f-4",
        username: "moriarty",
        email: "william.moriarty@gmail.com",
        firstname: "William",
        lastname: "James Moriarty",
        gender: GENDERS.MALE,
        phone: "0901234564",
        created_at: "2026-02-12T16:00:00Z",
    },
    {
        id: "f-5",
        username: "Dav mile",
        email: "davidmiller@gmail.com",
        firstname: "David",
        lastname: "Miller",
        gender: GENDERS.MALE,
        phone: "0901234565",
        created_at: "2026-03-05T10:10:00Z",
    },
    {
        id: "f-6",
        username: "Doan Vien Truong",
        email: "doanvientruong@gmail.com",
        firstname: "Doan",
        lastname: "Vien Truong",
        gender: GENDERS.OTHER,
        phone: "0901234566",
        created_at: "2026-04-01T18:25:00Z",
    },
];

export const friendService = {
    getFriendList: async(signal?: AbortSignal):Promise<Metadata[]> => {
        if(USE_MOCK) {
            return MOCK_FRIEND_LIST.map((friend) => ({
                id: friend.id,
                name: friend.username,
                type: TYPES.FRIEND,
            }));
        }

        return apiClient.get("/friendList", {signal}) as unknown as Metadata[];
    },

    getFriendById: async(id: string, signal?: AbortSignal):Promise<User> => {
        if (USE_MOCK) {
            return MOCK_FRIEND_LIST.find(
                (f) => f.id === id
            ) as unknown as User;
        }

        return apiClient.get(`/friendList/${id}`, {signal}) as unknown as User;
    }
}