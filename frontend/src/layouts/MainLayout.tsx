import {CircleUserRound, House} from "lucide-react";
import { Settings } from 'lucide-react';
import {Link, Outlet} from "react-router-dom";
import { CalendarFold } from 'lucide-react';
import { Users } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { Power } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import {useState, type SetStateAction} from "react";
import {ROUTES} from "../router/routes.tsx";

// type User = {
//     name: string;
//     avatar: string;
// } | null;

// Light Mode
// Ocean Blue Palette
// Sidebar:   #3B5998  (navy blue)
// Topbar:    #5B7FCB  (medium blue)
// Icons:     #a8c0ff  (light blue)
// Accent:    #4A6CF7  (vivid blue)
// BG light:  #e8eef8  (very light blue)

// Dark Mode
// Sidebar: #0f1c38 (dark navy)
// Topbar: #1a2744 (dark blue)
// Background : #111827 + #0d1321
// Icons & accent: #378ADD (Light blue)
// Text: #b5d4f4 (faded blue)
// Chat bubble: #185FA5

const MENU_ITEMS = {
    FRIEND: 'Friend',
    GROUP: 'Group',
    CALENDAR: 'Calendar',
    TASK: 'Task',
    NOTE: 'Note',
}

export default function MainLayout() {

    return (
        <div className="h-screen flex flex-col overflow-x-hidden" style={{background: "#e8eef8"}}>

            <div
                className="pl-3 h-[6vh] flex flex-col justify-center w-full top-0"
                style={{background: "#5B7FCB"}}
            >
                <div className="flex flex-row justify-start items-center gap-2">
                    <div className="flex justify-start items-center gap-5 cursor-pointer" style={{color: "#fff"}}>
                        <h1 className="font-bold tracking-wide text-white">
                            CHU
                        </h1>

                        <div className="flex flex-row justify-center items-center gap-4 w-[25vw]">
                            <p className="font-medium cursor-pointer hover:opacity-75 transition-opacity">Home</p>
                            <p className="font-medium cursor-pointer hover:opacity-75 transition-opacity">Dashboard</p>
                            <p className="font-medium cursor-pointer hover:opacity-75 transition-opacity">Feedback</p>
                            <p className="font-medium cursor-pointer hover:opacity-75 transition-opacity">Contact us</p>
                        </div>

                        <div className="ml-255">
                            <CircleUserRound className="w-[1.8vw] h-[1.8vw] shrink-0 text-white"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-full">
                <MenuBar/>
                <div
                    className="flex-1 overflow-y-auto p-0 rounded-tl-xl"
                    style={{background: "#fff"}}
                >
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

function MenuBar() {
    const [onChosen, setOnChosen] = useState<string>(MENU_ITEMS.GROUP);

    const handleOnClick = (e: { currentTarget: { id: SetStateAction<string>; }; }) => {setOnChosen(e.currentTarget.id);};

    return (
        <div
            className="flex flex-col items-center border-gray-100 py-5 px-2"
            style={{ background: "#3B5998" }}
        >
            <div className="flex flex-col items-center gap-6 flex-1">
                <Link to={ROUTES.MAIN_PAGE}>
                    <div className={menuStyle(MENU_ITEMS.GROUP, onChosen)}
                         id={MENU_ITEMS.GROUP}
                         onClick={handleOnClick}
                         title={"Main"}
                    >
                        <House className="w-[1.5vw] h-[1.5vw] shrink-0" style={{ color: "#a8c0ff" }} />
                    </div>
                </Link>

                <Link to={ROUTES.ENTITY_PAGE}>
                    <div className={menuStyle(MENU_ITEMS.FRIEND, onChosen)}
                        id={MENU_ITEMS.FRIEND}
                         onClick={handleOnClick}
                         title={"Friends and Groups"}
                    >
                        <Users className="w-[1.5vw] h-[1.5vw] shrink-0" style={{ color: "#a8c0ff" }} />
                    </div>
                </Link>

                <Link to={ROUTES.CALENDAR_PAGE}>
                    <div className={menuStyle(MENU_ITEMS.CALENDAR, onChosen)}
                        id={MENU_ITEMS.CALENDAR}
                         onClick={handleOnClick}
                         title={"Calendar"}
                    >
                        <CalendarFold className="w-[1.7vw] h-[1.7vw] shrink-0" style={{ color: "#a8c0ff" }} />
                    </div>
                </Link>

                <div className={menuStyle(MENU_ITEMS.TASK, onChosen)}
                    id={MENU_ITEMS.TASK}
                     onClick={handleOnClick}
                     title={"Task"}
                >
                    <AlarmClock className="w-[1.7vw] h-[1.7vw] shrink-0" style={{ color: "#a8c0ff" }} />
                </div>

                <div className={menuStyle(MENU_ITEMS.NOTE, onChosen)}
                    id={MENU_ITEMS.NOTE}
                     onClick={handleOnClick}
                     title={"Notes"}
                >
                    <NotebookPen className="w-[1.7vw] h-[1.7vw] shrink-0" style={{ color: "#a8c0ff" }} />
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-auto">
                <div className="p-2 rounded-lg cursor-pointer hover:bg-white/10 active:bg-white/20 transition-colors">
                    <Settings className="w-[1.5vw] h-[1.5vw] shrink-0" style={{ color: "#a8c0ff" }} />
                </div>
                
                <Link to={ROUTES.LOGIN}>
                <div className="p-2 rounded-lg cursor-pointer hover:bg-red-300 active:bg-red-400 transition-colors" style={{ color: "#a8c0ff" }} >
                    <Power className="w-[1.5vw] h-[1.5vw] shrink-0 hover:text-amber-50" />
                </div>
                </Link>
            </div>
        </div>
    );
}

const menuStyle = (currentId: string, activeId: string) => {
    const selected = currentId === activeId;

    return `p-2 rounded-lg cursor-pointer transition-colors ${
        selected
            ? "bg-white/20 ring-2 ring-white/40"
            : "hover:bg-white/10 active:bg-white/20"
    }`;
};