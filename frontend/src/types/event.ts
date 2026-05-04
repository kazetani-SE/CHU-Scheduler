export type Description = {
    title: string;
    content: string;
    start: string;
    end: string;
    url?: string;
}

export type Comment = {
    content: string;
    senderId: string;
    sendAt: string;
    pin: boolean;
}

export type ExtendedProps = {
    descriptions?: Description[];
    comments?: Comment[];
    location?: string;
    priority?: number;
}

export type CalendarEvent = {
    id: string;
    groupId?: string;
    title: string;
    date?: string;
    start?: string;
    end?: string;
    url?: string;
    extendedProps?: ExtendedProps;
    overlap: boolean;
    editable: boolean;
}