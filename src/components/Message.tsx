interface MessageProps {
  role: string;
  content: string;
}

export default function Message({ role, content }: MessageProps) {
    const isUser = role === "user";
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div
          className={`max-w-xl px-4 py-2 rounded-2xl text-sm ${
            isUser
              ? "bg-gray-600 text-white"
              : "bg-gray-800 text-black dark:bg-gray-800 dark:text-white"
          }`}
        >
          {content}
        </div>
      </div>
    );
  }
  