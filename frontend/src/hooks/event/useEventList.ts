import { useEffect, useState } from "react";
import { calenderService } from "../../services/calenderService.ts";
import type { CalendarEvent } from "../../types/event.ts";

export function useEventList(id?: string) {
    const [eventList, setEventList] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchEvents = async () => {
            setLoading(true);
            setError(null);
            try {
                if (id) {
                    const data = await calenderService.getEventsByOwner(id, controller.signal);
                    setEventList(data);
                } else {
                    const data = await calenderService.getEvents(controller.signal);
                    setEventList(data);
                }
            } catch (err) {
                if ((err as Error).name !== "AbortError") {
                    setError("Failed to fetch events");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();

        return () => controller.abort();
    }, [id]);

    return { eventList, loading, error };
}