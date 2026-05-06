import type {GroupMetadata} from "../types/group.ts";
import apiClient from "./axiosClient.ts";

const USE_MOCK_DATA = true;

const MOCK_GROUP_LIST: GroupMetadata[] = [
    {
        id: "g-1",
        name: "F-Code"
    },
    {
        id: "g-2",
        name: "Web Dev Enthusiasts"
    },
    {
        id: "g-3",
        name: "Japanese Culture Club"
    },
    {
        id: "g-4",
        name: "Open Source Contributor"
    },
    {
        id: "g-5",
        name: "UI/UX Design Studio"
    },
    {
        id: "g-6",
        name: "Backend Warriors"
    }
];

export const groupService = {
    getGroupList: async (signal?: AbortSignal): Promise<GroupMetadata[]> => {
        if(USE_MOCK_DATA) return MOCK_GROUP_LIST;
        return apiClient.get("/friendList", {signal}) as unknown as GroupMetadata[];
    }
}