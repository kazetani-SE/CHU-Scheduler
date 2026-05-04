import apiClient from "./axiosClient.ts";
import type {CalendarEvent} from "../types/event.ts";

const USE_MOCK = true

const mockEventList = [
    {
        title: "event 1",
        date: "2026-04-01",
        id: "1",
        overlap: false,
        editable: false,
        extendedProps: { priority: 3 },
    },
    {
        title: "event 2",
        date: "2026-04-02",
        id: "2",
        overlap: false,
        editable: false,
        extendedProps: { priority: 1 },
    },
    {
        title: "event 3",
        date: "2026-04-05",
        id: "3",
        overlap: false,
        editable: false,
        extendedProps: { priority: 1 },
    },
    {
        title: "event 4",
        date: "2026-04-12",
        id: "4",
        overlap: true,
        editable: true,
        extendedProps: { priority: 1 },
    },
    {
        title: "event 5",
        date: "2026-04-24",
        id: "5",
        overlap: true,
        editable: true,
        extendedProps: { priority: 2 },
    },
    {
        title: "event 6",
        date: "2026-05-04",
        id: "6",
        overlap: true,
        editable: true,
        extendedProps: { priority: 2 },
    },
];

export const calenderService = {
    getEvents: async (signal?: AbortSignal): Promise<CalendarEvent[]> => {
        if (USE_MOCK) return mockEventList;
        return apiClient.get("/events", { signal }) as unknown as Promise<CalendarEvent[]>;
    }
}