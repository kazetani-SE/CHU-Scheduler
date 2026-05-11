import { Search } from 'lucide-react';
import {CircleUserRound} from "lucide-react";
import { Mail } from 'lucide-react';
import {useFriendList} from "../hooks/friend/useFriend.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useGroupList} from "../hooks/group/useGroup.ts";
import type {Metadata} from "../types/metadata.ts";

export default function Sidebar() {
    const [keyword, setKeyword] = useState("");
    const { loading: friendLoading, friendList, error: friendError } = useFriendList();
    const { loading: groupLoading, groupList, error: groupError } = useGroupList();
    const navigate = useNavigate();

    const loading = friendLoading || groupLoading;
    const error = friendError || groupError;
    const list = [...friendList, ...groupList];

    if (loading) return <LoadingSpinner />;
    if (error)   return <ErrorMessage message={error} />;

  const filteredList = list.filter((i) => i.name.toLowerCase().includes(keyword.toLowerCase()));

    const handleOnClick = (obj: Metadata) => {
        const basePath = obj.type;

        navigate(`/${basePath}/${obj.id}/calendar`);
    };

  return (
    <div className="h-full pb-4 bg-gray-100 py-4 pl-4 pr-2 flex-col">
        <div className="bg-white h-full rounded-xl shadow p-1">
      <div className="p-2 font-bold">
          Friends and Groups
      </div>

      <div className="p-2 border-b">
        <div className="flex items-center bg-gray-100 rounded-lg px-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1 px-2 py-2 bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredList.map((i) => (
            <div id={i.id} className="flex flex-col p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOnClick(i)}
            >
                <div className="flex items-center rounded-lg px-2 gap-1">
                    <CircleUserRound className="w-[1.5vw] h-[1.5vw] shrink-0"/>
                    {i.name}
                    <Mail className="ml-auto w-[1.2vw] h-[1.2vw] shrink-0"/>
                </div>

            </div>))}
      </div>
      </div>
    </div>
  );
}

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center gap-2 py-6 text-gray-400">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-400 rounded-full animate-spin" />
            <span className="text-sm">Loading...</span>
        </div>
    );
}

function ErrorMessage({ message }: { message: string }) {
    return (
        <div className="flex items-center gap-2 mx-2 my-3 px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-red-500 text-sm">
            <span>⚠</span>
            <span>{message}</span>
        </div>
    );
}