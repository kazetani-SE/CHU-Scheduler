import { useState } from "react";
import { Search } from 'lucide-react';
import {X} from "lucide-react";
import { Check } from 'lucide-react';
import { Eraser } from "lucide-react";

export default function Taskbar() {
    const [keyword, setKeyword] = useState("");

    const task = ["Wake up", "Eat", "Sleep", "poop"];

    const filteredTask = task.filter((i) => `User ${i}`.toLowerCase().includes(keyword.toLowerCase()));

    return (
        <div className="h-full pb-4 bg-gray-100 py-4 pl-4 pr-2 flex-col">
            <div className="bg-white h-full rounded-xl shadow p-1">
                <div className="p-2 font-bold">
                    Task
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
                    {filteredTask.map((i) => (
                        <div key={i} className="flex flex-col p-2 hover:bg-gray-100 cursor-pointer">
                            <div className="flex items-center rounded-lg px-2 gap-1">
                                {i}
                                <X className="ml-auto rounded-2xl w-[1.2vw] h-[1.2vw] shrink-0 bg-red-300"/>
                                <Check className="rounded-2xl w-[1.2vw] h-[1.2vw] shrink-0 bg-green-300"/>
                                <Eraser className="rounded-2xl w-[1.2vw] h-[1.2vw] shrink-0 bg-gray-300"/>
                            </div>

                        </div>))}
                </div>
            </div>
        </div>
    );
}