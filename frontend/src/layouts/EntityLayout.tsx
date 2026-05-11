import FunctionBar from "../components/FunctionBar.tsx";
import {Outlet, useParams} from "react-router-dom";
import {useFriendById} from "../hooks/friend/useFriend.ts";
import {useGroupById} from "../hooks/group/useGroup.ts";
import type {Metadata} from "../types/metadata.ts";
import {TYPES} from "../types/metadata.ts";

export default function EntityLayout({ isFriend }: { isFriend: boolean }) {
    const { id } = useParams();
    const { loading: friendLoading, friend, error: friendError } = useFriendById(id);
    const { loading: groupLoading,  group,  error: groupError  } = useGroupById(id);

    const loading = isFriend ? friendLoading : groupLoading;
    const error   = isFriend ? friendError   : groupError;
    const data: Metadata | null = isFriend
        ? friend ? { id: friend.id, name: friend.username, type: TYPES.FRIEND } : null
        : group  ? { id: group.id,  name: group.name,      type: TYPES.GROUP  } : null;

    if (loading) return <div>Loading...</div>;
    if (!data || error) return <div>Not found</div>;

    return (
        <div className="h-full flex">
            <div className="w-[360px]">
                <FunctionBar data={data}/>
            </div>
            <div className="flex-1 z-0">
                <Outlet/>
            </div>
        </div>
    );
}