import Sidebar from "../components/sidebar.tsx";

export default function EntityPage() {
    return (
        <div className="h-full flex">
            <div className="w-[360px]">
                <Sidebar/>
            </div>

            <div className="flex-1 z-0">
                <EmptyNotice/>
            </div>
        </div>
    );
}

function EmptyNotice() {
    return (
        <div className="h-full flex flex-col items-center bg-gray-100
        justify-center gap-3 text-gray-400 select-none">
            <span className="text-5xl">📅</span>
            <p className="text-lg font-medium">No events to display</p>
            <p className="text-sm">Please select a Friend or Group to view their calendar</p>
        </div>
    );
}