import {buildRoute, ROUTES} from "../router/routes.tsx";
import {
    MessageSquareText,
    CalendarRange,
    AlarmClock,
    Settings2,
    UserRoundX,
    ChevronLeft,
    SquareKanban, Squirrel, Table2, LogOut, Info
} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {type Metadata, TYPES} from "../types/metadata.ts";

type MenuFunction = {
    label: string;
    path: string;
    icon: React.ComponentType<{ className?: string }>;
    isWarning?:boolean;
}

const MENU_FRIEND_FUNCTION: MenuFunction[] = [
    { label: "Shared Calendar", path: ROUTES.FRIEND_CALENDAR, icon: CalendarRange               },
    { label: "Chat",            path: ROUTES.FRIEND_CHAT,     icon: MessageSquareText           },
    { label: "Meet-up",         path: ROUTES.FRIEND_MEETUP,   icon: AlarmClock                  },
    { label: "Information",     path: ROUTES.FRIEND_MEETUP,   icon: Info                        },
    { label: "Setting",         path: ROUTES.FRIEND_SETTING,  icon: Settings2                   },
    { label: "Unfriend",        path: ROUTES.FRIEND_PAGE,     icon: UserRoundX, isWarning: true },
]

const MENU_GROUP_FUNCTION: MenuFunction[] = [
    { label: "Chat",          path: ROUTES.GROUP_CHAT,     icon: MessageSquareText           },
    { label: "Main Calendar", path: ROUTES.GROUP_CALENDAR, icon: CalendarRange               },
    { label: "Kanban",        path: ROUTES.GROUP_KANBAN,   icon: Table2                      },
    { label: "Report",        path: ROUTES.GROUP_REPORT,   icon: SquareKanban                },
    { label: "Member",        path: ROUTES.GROUP_MEMBER,   icon: Squirrel                    },
    { label: "Setting",       path: ROUTES.GROUP_SETTING,  icon: Settings2                   },
    { label: "Exit group",    path: ROUTES.FRIEND_PAGE,    icon: LogOut, isWarning: true     },
]

export default function FunctionBar({data}:{data:Metadata}) {
    const menu_function = data.type === TYPES.FRIEND ? MENU_FRIEND_FUNCTION : MENU_GROUP_FUNCTION;
    const [active, setActive] = useState<string>(menu_function[0].label);
    const navigate = useNavigate();

    return (
        <div className="h-full pb-4 bg-gray-100 py-4 pl-4 pr-2 flex-col">
            <div className="bg-white h-full rounded-xl shadow p-1">
                <button
                    onClick={() => navigate(ROUTES.FRIEND_PAGE)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    title="Turn back"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="font-bold text-2xl truncate ml-2">
                    {data.name}
                </div>

                <div className="flex flex-col gap-2 p-2">
                    {menu_function.map((item) => (
                        <FunctionIcon
                            key={item.label}
                            item={item}
                            active={active}
                            setActive={setActive}
                            id={data.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FunctionIcon({ item, active, setActive, id }: {
    item: MenuFunction;
    active: string;
    setActive: (label: string) => void;
    id:string;
}) {
    const Icon = item.icon;
    const isActive = item.label === active;

    const handleClick = (active:string) => {
        if(active === "Unfriend") return;
        setActive(active);
    }

    return (
        <Link to={buildRoute(item.path, id)}>
            <div
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors
            ${isActive && !item.isWarning
                    ? "bg-gray-100 ring-1 ring-gray-300"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleClick(item.label)}
            >
                <Icon className={`w-5 h-5 ${item.isWarning ? "text-red-600" : "text-gray-500"}`} />
                <span className={`text-sm ${item.isWarning ? "text-red-600" : "text-black"}`}>
            {item.label}
        </span>
            </div>
        </Link>
    );
}