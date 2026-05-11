import {useEffect, useState} from "react";
import type {Group} from "../../types/group.ts";
import {groupService} from "../../services/groupService.ts";
import type {Metadata} from "../../types/metadata.ts";


export function useGroupList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [groupList, setGroupList] = useState<Metadata[]>([]);
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

export function useGroupById(id:string | undefined) {
    const [loading, setLoading] = useState<boolean>(true);
    const [group, setGroup] = useState<Group>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try{
                if (!id) {
                    setLoading(false);
                    return;
                }

                const data = await groupService.getGroupById(id, controller.signal);
                setGroup(data);
            }catch (err) {
                if ((err as Error).name !== "AbortError") {
                    setError("Failed to fetch group");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    return {loading, group, error};
}