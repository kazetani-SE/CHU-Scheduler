import {useEffect, useState} from "react";
import type {GroupMetadata} from "../../types/group.ts";
import {groupService} from "../../services/groupService.ts";


export function useGroupList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [groupList, setGroupList] = useState<GroupMetadata[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try{
                const data = await groupService.getGroupList(controller.signal);
                setGroupList(data);
            }catch (err) {
                if ((err as Error).name !== "AbortError") {
                    setError("Failed to fetch group list");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return {loading, error, groupList};
}