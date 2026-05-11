import {useEffect, useState} from "react";
import {friendService} from "../../services/friendService.ts";
import type {Metadata} from "../../types/metadata.ts";
import type {User} from "../../types/auth.ts";

export function useFriendList() {
    const [loading, setLoading] = useState<boolean>(false);
    const [friendList, setFriendList] = useState<Metadata[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchFriendList = async () => {
            setLoading(true);
            setError(null);

            try{
                const data = await friendService.getFriendList(controller.signal);
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
    },[]);

    return { loading, friendList, error };
}

export function useFriendById(id: string | undefined) {
    const [loading, setLoading] = useState<boolean>(false);
    const [friend, setFriend] = useState<User>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchFriendList = async () => {
            setLoading(true);
            setError(null);

            try{
                if (!id) {
                    setLoading(false);
                    return;
                }

                const data = await friendService.getFriendById(id, controller.signal);
                setFriend(data);
            }catch (err) {
                if ((err as Error).name !== "AbortError") {
                    setError("Failed to fetch friend list!");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchFriendList();
    },[id]);

    return { loading, friend, error };
}