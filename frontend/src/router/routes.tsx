export const ROUTES = {
    EXAMPLE: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    MAIN_PAGE: "/main",
    FRIEND_PAGE: "/friend",
    GROUP_PAGE: "/group",
    ENTITY_PAGE: "/entity",
    CALENDAR_PAGE: "/calendar",
    TASK_PAGE: "/task",
    TERMS: "/terms",
    PRIVACY: "/privacy",

    FRIEND_CALENDAR: "/friend/:id/calendar",
    FRIEND_CHAT: "/friend/:id/chat",
    FRIEND_MEETUP: "/friend/:id/meetup",
    FRIEND_SETTING: "/friend/:id/setting",

    GROUP_CHAT: "/group/:id/chat",
    GROUP_CALENDAR: "/group/:id/calendar",
    GROUP_KANBAN: "/group/:id/kanban",
    GROUP_REPORT: "/group/:id/report",
    GROUP_MEMBER: "/group/:id/member",
    GROUP_SETTING: "/group/:id/setting",
}

export const buildRoute = (path: string, id: string) =>
    path.replace(":id", id);