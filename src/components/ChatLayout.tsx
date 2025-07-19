import ChatSidebar from "./ChatSidebar.tsx";
import ChatWindow from "./ChatWindow.tsx";

export default function ChatLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-b from-blue-900 dark:bg-[#1e1e1e] text-black dark:text-white">
  
    <div className="w-64 h-full border-r border-gray-700">
      <ChatSidebar />
    </div>

   
      <ChatWindow />
   
  </div>
  );
}
