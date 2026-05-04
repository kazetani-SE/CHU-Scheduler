import type {DayCellContentArg, EventContentArg} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import {useEventList} from "../hooks/event/useEventList.ts";

export default function MainPage() {
    const {eventList} = useEventList();

    return (
        <div className="flex flex-row justify-center w-full p-2 bg-white">
            <div className="w-[80vw] rounded-b-sm overflow-hidden">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    dayCellClassNames={dayCellColor}
                    dayHeaderClassNames="bg-indigo-300"
                    eventClassNames={eventColor}
                    events={eventList}
                />
            </div>
        </div>
    );
}

const eventColor = (arg: EventContentArg) => {
    const priority = arg.event.extendedProps.priority;

    if (priority === 3) return "!bg-red-800";
    if (priority === 2) return "!bg-blue-500";
    return "!bg-emerald-500";
};

const dayCellColor = (arg:DayCellContentArg) => {
    let custom = "hover:bg-sky-100 ";
    if (arg.isToday) custom += "!bg-cyan-100 ";
    else custom += "!bg-sky-50 ";

    return [custom];
}