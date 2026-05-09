import { ChevronDown } from 'lucide-react';

export default function ChatPanel() {
    return (
        <div className="h-full bg-gray-100 rounded-xl shadow-x100">
            <div className="bg-white h-full rounded-xl shadow pb-2 flex flex-col ">
                <div className="flex p-4 border-b text-amber-50 font-semibol rounded-t-xl" style={{ background: "#5B7FCB" }} >
                        Chat 
                    <div className="ml-auto">
                        <ChevronDown className='hover:bg-amber-50:text-red-100 transition-opacity'/>
                    </div>
                </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3">

            {/* Other*/}
            <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500 pl-1 py-2">Phong</span>
                <div className="bg-gray-200 px-3 py-2 rounded-2xl max-w-xs">
                    Hello
                </div>
            </div>

            {/* Me */}
            <div className="flex flex-col items-end">
                <span className="text-xs text-gray-500 py-2 pr-1">Thanh</span>
                <div className="bg-blue-500 text-white px-3 py-2 rounded-2xl max-w-xs">
                    Gay
                </div>
            </div>

        </div>

            {/* Input */}
            <div className="p-3 pb-0 border-t mt-auto">
                <input
                    className="w-full border rounded-lg p-2"
                    placeholder="Type message..."
                />
            </div>
            </div>
        </div>
    );
}