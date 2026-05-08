import {CircleUserRound, Menu} from "lucide-react";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import EmptyAvatar from "../components/EmptyAvatar.tsx";
import {useFriendList} from "../hooks/friend/useFriendList.ts";
import {useGroupList} from "../hooks/group/useGroupList.ts";

const DEFAULT_MENUBAR_WIDTH = 4.6;
const MAX_MENUBAR_WIDTH = 15.5;
const MENUBAR_DURATION = "duration-200";

export default function MainLayout() {
    const [menuBarWidth, setMenuBarWidth] = useState<number>(DEFAULT_MENUBAR_WIDTH);

    const menuOnClick = () => {
        setMenuBarWidth(menuBarWidth === DEFAULT_MENUBAR_WIDTH ? MAX_MENUBAR_WIDTH : DEFAULT_MENUBAR_WIDTH);
    };

    return (
        <div className="h-screen flex flex-col bg-gray-900">

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
                            <Menu color={"white"}/>
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

                <div className="flex items-center gap-2 text-white">
                    <p className="text-xl">Avatar</p>
                    <CircleUserRound className="w-[2.5vw] h-[2.5vw]" color={"white"}/>
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

function MenuBar({ width }:
                 { width: number}) {
    const [chosenId, setChosenId] = useState<string>("Your id");

    const {friendList} = useFriendList();
    const {groupList} = useGroupList()

    return (
        <div
            className={`flex flex-col items-start justify-start gap-2 text-white
            border-gray-100 transition-all ${MENUBAR_DURATION} pl-2 py-4
            overflow-y-auto max-h-screen overflow-x-hidden no-scrollbar`}
            style={{ width: `${width}vw` }}
        >

            <div id={"Your id"} className="flex flex-row items-center justify-start gap-2">
                <EmptyAvatar name={"You"} className={miniIcon(chosenId === "Your id")} isChosen={chosenId === "Your id"}
                    onClick={() => setChosenId("Your id")}
                />
                <p className={`transition-[width] ${MENUBAR_DURATION} whitespace-nowrap overflow-hidden
                 ${width === MAX_MENUBAR_WIDTH ? 'w-full' : 'w-0'}`}>
                    Account Name
                </p>
            </div>

            <p className="text-gray-500 text-sm font-semibold border-t-2 border-gray-500 pt-1">
                Friends
            </p>

            {friendList.map((friend) => (
                <div id={friend.id} className="flex flex-row items-center justify-start gap-2">
                    <EmptyAvatar name={friend.name} className={miniIcon(chosenId === friend.id)} isChosen={chosenId === friend.id}
                        onClick={() => setChosenId(friend.id)}
                    />
                    <p className={`transition-[width] ${MENUBAR_DURATION} whitespace-nowrap overflow-hidden
                 ${width === MAX_MENUBAR_WIDTH ? 'w-full' : 'w-0'} text-wrap`}>
                        {friend.name}
                    </p>
                </div>
            ))}

            <p className="text-gray-500 text-sm font-semibold border-t-2 border-gray-500 pt-1">
                Groups
            </p>

            {groupList.map((group) => (
                <div id={group.id} className="flex flex-row items-center justify-start gap-2">
                    <EmptyAvatar name={group.name} className={miniIcon(chosenId === group.id)} isChosen={chosenId === group.id}
                        onClick={() => setChosenId(group.id)}
                    />
                    <p className={`transition-[width] ${MENUBAR_DURATION} whitespace-nowrap overflow-hidden
                 ${width === MAX_MENUBAR_WIDTH ? 'w-full' : 'w-0'} text-wrap`}>
                        {group.name}
                    </p>
                </div>
            ))}
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

const miniIcon = (isChosen:boolean) => {
    return `w-[3.3vw] aspect-square flex-shrink-0 !text-[2.2vh] cursor-pointer
            ${isChosen? "!border-3 brightness-110" :"!border-none"} `
}