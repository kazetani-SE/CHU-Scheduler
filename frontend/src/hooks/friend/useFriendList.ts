import {useEffect, useState} from "react";
import type {FriendMetadata} from "../../types/friend.ts";
import {friendService} from "../../services/friendService.ts";

export function useFriendList() {
    const [loading, setLoading] = useState<boolean>(false);
    const [friendList, setFriendList] = useState<FriendMetadata[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchFriendList = async () => {
            setLoading(true);
            setError(null);

            try{
                const data =  await friendService.getFriendList(controller.signal);
                setFriendList(data);
            }catch (err) {
                if ((err as Error).name !== "AbortError") {
                    setError("Failed to fetch friend list!");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchFriendList();
    }, []);

    return { loading, friendList, error };
}