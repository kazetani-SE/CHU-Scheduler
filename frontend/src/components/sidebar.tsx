import { useState } from "react";
import { Search } from 'lucide-react';
import {CircleUserRound} from "lucide-react";
import { Mail } from 'lucide-react';

export default function Sidebar() {
  const [keyword, setKeyword] = useState("");

  const users = ["Thanh","Phong","Duc","Khoa","Sigma"];

  const filteredUsers = users.filter((i) => `User ${i}`.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div className="h-full pb-4 bg-gray-100 py-4 pl-4 pr-2 flex-col">
        <div className="bg-white h-full rounded-xl shadow p-1">
      <div className="p-2 font-bold">
        Messages
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
        {filteredUsers.map((i) => (
            <div key={i} className="flex flex-col p-2 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center rounded-lg px-2 gap-1">
                    <CircleUserRound className="w-[1.5vw] h-[1.5vw] shrink-0"/>
                    {i}
                    <Mail className="ml-auto w-[1.2vw] h-[1.2vw] shrink-0"/>
                </div>

            </div>))}
      </div>
      </div>
    </div>
  );
}