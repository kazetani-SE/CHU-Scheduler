import type {Group} from "../types/group.ts";
import apiClient from "./axiosClient.ts";
import {type Metadata, TYPES} from "../types/metadata.ts";

const USE_MOCK= true;

const MOCK_GROUP_LIST: Group[] = [
    {
        id: "g-1",
        name: "F-Code",
        created_at: "2026-01-15T08:30:00Z"
    },
    {
        id: "g-2",
        name: "Web Dev Enthusiasts",
        created_at: "2026-02-02T14:10:00Z"
    },
    {
        id: "g-3",
        name: "Japanese Culture Club",
        created_at: "2026-02-20T19:45:00Z"
    },
    {
        id: "g-4",
        name: "Open Source Contributor",
        created_at: "2026-03-01T11:00:00Z"
    },
    {
        id: "g-5",
        name: "UI/UX Design Studio",
        created_at: "2026-03-18T09:20:00Z"
    },
    {
        id: "g-6",
        name: "Backend Warriors",
        created_at: "2026-04-05T16:40:00Z"
    }
];

export const groupService = {
    getGroupList: async (signal?: AbortSignal): Promise<Metadata[]> => {
        if (USE_MOCK) {
            return MOCK_GROUP_LIST.map((group) => ({
                id: group.id,
                name: group.name,
                type: TYPES.GROUP
            }));
        }
        return apiClient.get("/friendList", {signal}) as unknown as Metadata[];
    },

    getGroupById: async (id: string, signal?: AbortSignal): Promise<Group> => {
        if (USE_MOCK) {
            return MOCK_GROUP_LIST.find(
                (g) => g.id === id
            ) as unknown as Group;
        }
        return apiClient.get(`/friendList/${id}`, {signal}) as unknown as Group;
    }
}