import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "./routes.tsx";
import MainPage from "../pages/MainPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import ExamplePage from "../pages/_guide.tsx";
import CalendarPage from "../pages/CalendarPage.tsx";
import ExampleHeader from "../layouts/_guide.tsx";
import EntityPage from "../pages/EntityPage.tsx";
import EntityLayout from "../layouts/EntityLayout.tsx";
import FriendCalendarPage from "../pages/friend/FriendCalendarPage.tsx";
import FriendChatPage from "../pages/friend/FriendChatPage.tsx";
import FriendMeetupPage from "../pages/friend/FriendMeetupPage.tsx";
import FriendSettingPage from "../pages/friend/FriendSettingPage.tsx";
import GroupCalendarPage from "../pages/group/GroupCalendarPage.tsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.LOGIN,
        children:[{index: true, element: <LoginPage isisLogin={true}/>}],
    },
    {
        path: ROUTES.REGISTER,
        children:[{index: true, element: <LoginPage isisLogin={false}/>}],
    },
    {
        path: ROUTES.EXAMPLE,
        element: <ExampleHeader/>,
        children:[{index: true, element: <ExamplePage/>}],
    },
    {
        path: ROUTES.MAIN_PAGE,
        element: <MainLayout/>,
        children:[{index: true, element: <MainPage/>}],
    },
    
    {
        path: ROUTES.CALENDAR_PAGE,
        element: <MainLayout/>,
        children:[{index: true, element: <CalendarPage/>}],
    },

    {
        path: ROUTES.ENTITY_PAGE,
        element: <MainLayout/>,
        children: [
            { index: true, element: <EntityPage/> },
        ]
    },

    {
        path: ROUTES.FRIEND_PAGE,
        element: <MainLayout/>,
        children:[
            {index: true, element: <EntityPage/>},
            {
                path:":id",
                element: <EntityLayout isFriend={true}/>,
                children:[
                    {index: true,           element: <FriendCalendarPage/>},
                    { path: "calendar",     element: <FriendCalendarPage/> },
                    { path: "chat",         element: <FriendChatPage/>     },
                    { path: "meetup",       element: <FriendMeetupPage/>   },
                    { path: "setting",      element: <FriendSettingPage/>  },
                ]
            }
        ],
    },

    {
        path: ROUTES.GROUP_PAGE,
        element: <MainLayout/>,
        children:[
            {index: true, element: <EntityPage/>},
            {
                path: ":id",
                element: <EntityLayout isFriend={false}/>,
                children: [
                    { index: true,          element: <GroupCalendarPage /> },
                    { path: "calendar",     element: <GroupCalendarPage /> },
                    { path: "chat",         element: <GroupCalendarPage /> },
                    { path: "kanban",       element: <GroupCalendarPage /> },
                    { path: "report",       element: <GroupCalendarPage /> },
                    { path: "member",       element: <GroupCalendarPage /> },
                    { path: "setting",      element: <GroupCalendarPage /> },
                ]
            }
        ]
    }
]);