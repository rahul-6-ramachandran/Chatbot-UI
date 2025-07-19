import '../index.css'

export default function ChatSidebar() {
    const chatList = [
      "New Chat", "AI Assistant", "Project Plan", "Debug Notes",
      "New Chat", "AI Assistant", "Project Plan", "Debug Notes",
      "New Chat", "AI Assistant", "Project Plan", "Debug Notes",
      "New Chat", "AI Assistant", "Project Plan", "Debug Notes"
    ];
  
    return (
        <div className="w-64 h-screen overflow-y-auto scroll-thin bg-gray-100 dark:bg-[#121212] border-r border-gray-300 dark:border-gray-700 p-4">
        <h2 className="text-lg font-semibold mb-4">Chats</h2>
        <ul className="space-y-2">
          {chatList.map((chat, idx) => (
            <li
              key={idx}
              className="p-2 rounded-xl bg-gray-900 text-center text-white hover:bg-gray-200 dark:hover:bg-[#2a2a2a] cursor-pointer"
            >
              {chat}
            </li>
          ))}
        </ul>
      </div>
      
    );
  }
  