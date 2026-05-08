import Calendar from "../components/calendar"
import Taskbar from "../components/taskbar"


export default function CalendarPage() {
    return (
        <div className="h-full flex">
            <div className="w-[360px]">
                <Taskbar />
            </div>

            <div className="flex-1">
                <Calendar/>
            </div>

        </div>
    );
}