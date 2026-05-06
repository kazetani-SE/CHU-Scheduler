import type {FriendMetadata} from "../types/friend.ts";
import apiClient from "./axiosClient.ts";

const USE_MOCK = true;

const MOCK_FRIEND_LIST: FriendMetadata[] = [
    {
        id: "f-1",
        name: "John Smith",
    },
    {
        id: "f-2",
        name: "Alice Johnson",
    },
    {
        id: "f-3",
        name: "Erich.v Mainstain",
    },
    {
        id: "f-4",
        name: "William James Moriarty",
    },
    {
        id: "f-5",
        name: "David Miller",
    },
    {
        id: "f-6",
        name: "Doan Vien Truong",
    },
];

export const friendService = {
    getFriendList: async(signal?: AbortSignal):Promise<FriendMetadata[]> => {
        if(USE_MOCK) return MOCK_FRIEND_LIST;

        return apiClient.get("/friendList", {signal}) as unknown as FriendMetadata[];
    }
}