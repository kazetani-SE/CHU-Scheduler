import {CircleUserRound} from "lucide-react";
import { Settings } from 'lucide-react';
import {Link, Outlet} from "react-router-dom";
import { CalendarFold } from 'lucide-react';
import { Users } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { Power } from 'lucide-react';
import { NotebookPen } from 'lucide-react';

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

export default function MainLayout() {

    return (
        <div className="h-screen flex flex-col" style={{ background: "#e8eef8" }}>

            <div
                className="pl-3 py-3 h-[5vh] flex flex-col justify-between w-full top-0"
                style={{ background: "#5B7FCB" }}
            >
                <div className="flex flex-row justify-start items-center gap-2">
                    <div className="flex justify-start items-center gap-5 cursor-pointer" style={{ color: "#fff" }}>
                        <h1 className="font-bold tracking-wide text-white">
                            CHU
                        </h1>

                        <div className="flex flex-row justify-center items-center gap-4">
                            <p className="font-medium cursor-pointer hover:opacity-75 transition-opacity">Home</p>
                            <p className="font-medium cursor-pointer hover:opacity-75 transition-opacity">Dashboard</p>
                            <p className="font-medium cursor-pointer hover:opacity-75 transition-opacity">Feedback</p>
                            <p className="font-medium cursor-pointer hover:opacity-75 transition-opacity">Contact us</p>
                        </div>

                        <div className="ml-306">
                            <CircleUserRound className="w-[1.8vw] h-[1.8vw] shrink-0 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-full">
                <MenuBar />
                <div
                    className="flex-1 overflow-y-auto p-0 rounded-tl-xl"
                    style={{ background: "#fff" }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

function MenuBar() {
    return (
        <div
            className="flex flex-col items-center border-gray-100 py-5 px-2"
            style={{ background: "#3B5998" }}
        >
            <div className="flex flex-col items-center gap-6 flex-1">
                <Link to="/main"> 
                <div className="p-2 rounded-lg cursor-pointerhover:bg-white/10 active:bg-white/20 transition-colors">
                    <Users className="w-[1.5vw] h-[1.5vw] shrink-0" style={{ color: "#a8c0ff" }} />
                </div>
                </Link>

                <Link to="/calendar">                         
                <div className="p-2 rounded-lg cursor-pointer hover:bg-white/10 active:bg-white/20 transition-colors">
                    <CalendarFold className="w-[1.7vw] h-[1.7vw] shrink-0" style={{ color: "#a8c0ff" }} />
                </div>
                </Link>

                <div className="p-2 rounded-lg cursor-pointer hover:bg-white/10 active:bg-white/20 transition-colors">
                    <AlarmClock className="w-[1.7vw] h-[1.7vw] shrink-0" style={{ color: "#a8c0ff" }} />
                </div>

                <div className="p-2 rounded-lg cursor-pointer hover:bg-white/10 active:bg-white/20 transition-colors">
                    <NotebookPen className="w-[1.7vw] h-[1.7vw] shrink-0" style={{ color: "#a8c0ff" }} />
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-auto">
                <div className="p-2 rounded-lg cursor-pointer hover:bg-white/10 active:bg-white/20 transition-colors">
                    <Settings className="w-[1.5vw] h-[1.5vw] shrink-0" style={{ color: "#a8c0ff" }} />
                </div>
                
                <Link to="/login">  
                <div className="p-2 rounded-lg cursor-pointer hover:bg-red-300 active:bg-red-400 transition-colors" style={{ color: "#a8c0ff" }} >
                    <Power className="w-[1.5vw] h-[1.5vw] shrink-0 hover:text-amber-50" />
                </div>
                </Link>
            </div>
        </div>
    );
}

// function AuthSection({user}:{ user: User }) {
//     if(!user) {
//         return (
//             <div className="flex flex-row items-center gap-4">
//                 <p className="font-medium cursor-pointer">
//                     Log in
//                 </p>
//                 <Button
//                     className="bg-indigo-700 text-base text-blue-50 rounded-full cursor-pointer"
//                 >
//                     Register
//                 </Button>
//             </div>
//         );
//     }
//
//     return (
//         <div className="flex items-center gap-2">
//             <CircleUserRound />
//             Avatar
//         </div>
//     );
// }