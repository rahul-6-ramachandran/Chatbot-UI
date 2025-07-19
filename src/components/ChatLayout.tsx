import { useState } from "react";
import ChatSidebar from "./ChatSidebar.tsx";
import ChatWindow from "./ChatWindow.tsx";

export default function ChatLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-b from-blue-900 dark:bg-[#1e1e1e] text-black dark:text-white relative">
      
      {/* Toggle Button for mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden absolute fixed top-4  left-4 z-50 bg-gray-800 text-white px-3 py-1 rounded-md"
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

  
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } fixed z-40 md:static md:block h-full w-64 bg-gray-100 dark:bg-[#121212] border-r border-gray-300 dark:border-gray-700`}
      >
        <ChatSidebar />
      </div>

     
        <ChatWindow />
      
    </div>
  );
}
