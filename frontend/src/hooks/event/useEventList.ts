import { useEffect, useState } from "react";
import { calenderService } from "../../services/calenderService.ts";
import type { CalendarEvent } from "../../types/event.ts";

export function useEventList() {
    const [eventList, setEventList] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchEvents = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await calenderService.getEvents(controller.signal);
                setEventList(data);
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
    }, []);

    return { eventList, loading, error };
}