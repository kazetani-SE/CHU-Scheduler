import {CircleUserRound, Menu} from "lucide-react";
import {Outlet} from "react-router-dom";
import {useState} from "react";

// type User = {
//     name: string;
//     avatar: string;
// } | null;

const DEFAULT_MENUBAR_WIDTH = 4;
const MAX_MENUBAR_WIDTH = 15;
const MENUBAR_DURATION = "duration-200";

export default function MainLayout() {
    const [menuBarWidth, setMenuBarWidth] = useState<number>(DEFAULT_MENUBAR_WIDTH);

    const menuOnClick = () => {
        setMenuBarWidth(menuBarWidth === DEFAULT_MENUBAR_WIDTH ? MAX_MENUBAR_WIDTH : DEFAULT_MENUBAR_WIDTH);
    };

    return (
        <div className="h-screen flex flex-col">

            <div className="h-[7vh] flex justify-between items-center
            w-full pr-4 sticky top-0 z-50"
            >
                <div className="flex flex-row justify-start items-center gap-2">
                    <div className="flex flex-row justify-center items-center"
                         style={{ width: `${DEFAULT_MENUBAR_WIDTH}vw` }}
                    >
                        <button
                            onClick={menuOnClick}
                            className="flex justify-center items-center cursor-pointer
                    hover:bg-gray-400 rounded-full w-10 h-10"
                        >
                            <Menu />
                        </button>
                    </div>

                    <div className="flex flex-row justify-start items-center gap-[5vw] cursor-pointer">
                        <h1>
                            LOGO
                        </h1>

                        <div className="flex flex-row justify-center items-center gap-4">
                            <p className="text-gray-500 font-medium cursor-pointer">
                                Home
                            </p>

                            <p className="text-gray-500 font-medium cursor-pointer">
                                Dashboard
                            </p>

                            <p className="text-gray-500 font-medium cursor-pointer">
                                Feedback
                            </p>

                            <p className="text-gray-500 font-medium cursor-pointer">
                                Contact us
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <p className="text-xl">Avatar</p>
                    <CircleUserRound className="w-[2.5vw] h-[2.5vw]"/>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                <MenuBar width={menuBarWidth}/>
                <div className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

function MenuBar({ width }: { width: number }) {
    return (
        <div
            className={`flex flex-col items-start justify-start gap-2
            border-r-1 border-gray-100 transition-all ${MENUBAR_DURATION} pl-2 pt-4`}
            style={{ width: `${width}vw` }}
        >
            <div className="flex flex-row items-center justify-start gap-2">
                <CircleUserRound className="w-[2.5vw] h-[2.5vw] flex-shrink-0"/>
                <p className={`transition-[width] ${MENUBAR_DURATION} whitespace-nowrap overflow-hidden
                 ${width === MAX_MENUBAR_WIDTH ? 'w-full' : 'w-0'}`}>
                    Name of user or group
                </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
                <CircleUserRound className="w-[2.5vw] h-[2.5vw] flex-shrink-0"/>
                <p className={`transition-[width] ${MENUBAR_DURATION} whitespace-nowrap overflow-hidden
                 ${width === MAX_MENUBAR_WIDTH ? 'w-full' : 'w-0'}`}>
                    Name of user or group
                </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
                <CircleUserRound className="w-[2.5vw] h-[2.5vw] flex-shrink-0"/>
                <p className={`transition-[width] ${MENUBAR_DURATION} whitespace-nowrap overflow-hidden
                 ${width === MAX_MENUBAR_WIDTH ? 'w-full' : 'w-0'}`}>
                    Name of user or group
                </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
                <CircleUserRound className="w-[2.5vw] h-[2.5vw] flex-shrink-0"/>
                <p className={`transition-[width] ${MENUBAR_DURATION} whitespace-nowrap overflow-hidden
                 ${width === MAX_MENUBAR_WIDTH ? 'w-full' : 'w-0'}`}>
                    Name of user or group
                </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
                <CircleUserRound className="w-[2.5vw] h-[2.5vw] flex-shrink-0"/>
                <p className={`transition-[width] ${MENUBAR_DURATION} whitespace-nowrap overflow-hidden
                 ${width === MAX_MENUBAR_WIDTH ? 'w-full' : 'w-0'}`}>
                    Name of user or group
                </p>
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