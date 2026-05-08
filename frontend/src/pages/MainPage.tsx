import Sidebar from "../components/sidebar";
import Calendar from "../components/calendar"
import ChatPanel from "../components/chatpanel";


export default function MainPage() {
    return (
        <div className="h-full flex">
            <div className="w-[360px]">
                <Sidebar />
            </div>

            <div className="flex-1 z-0">
                <Calendar />
            </div>

            <div className="w-70 h-100 fixed bottom-2 right-4">
                <ChatPanel />
            </div>

            <div className="w-70 h-100 fixed bottom-2 right-75">
                <ChatPanel />
            </div> 
        </div>
    );
}