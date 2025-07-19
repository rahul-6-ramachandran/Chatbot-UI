import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { motion } from "framer-motion";

interface Message {
    role : string,
    content : string
}
export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[] >([
    { role: "assistant", content: "Hey Rahul! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const sendMessage = () => {
    if (!input.trim()) return;
  
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
  
    const fullReply =
      "This is a sample AI response. You can replace this with API integration.";
    let current = "";
  
    let i = 0;
    const interval = setInterval(() => {
      current += fullReply[i];
      i++;
  
      // update the last message or add a new one if it's not started yet
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          // update existing typing message
          const updated = [...prev];
          updated[prev.length - 1] = { role: "assistant", content: current };
          return updated;
        } else {
          return [...prev, { role: "assistant", content: current }];
        }
      });
  
      if (i === fullReply.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30); // controls typing speed
  };
  
  console.log(messages,"messsages")

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col flex-1 relative overflow-y-auto scroll-thin">
      <div className="flex-1  p-6 space-y-4">
        {messages.map((msg, idx) => (
          <Message key={idx} role={msg.role} content={msg.content} />
        ))}
        {isTyping && (
  <p className="italic text-gray-400">Assistant is typing...</p>
)}
        <div ref={bottomRef} />
      </div>

      <motion.div
      className="p-4 m-10 rounded-2xl border-t sticky bottom-4 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#121212]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form className="w-full h-full"  >
        <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-slate-950 rounded-xl dark:bg-gray-700">
          <label htmlFor="editor" className="sr-only">
            Publish post
          </label>
          <motion.textarea
            id="editor"
            rows={6}
            className="w-full p-4 text-sm text-white bg-transparent border-none focus:outline-none resize-none placeholder:italic placeholder-gray-400 dark:placeholder-gray-400"
            placeholder="Tell us about your idea"
            required
            value={input}
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 100 }}
            onChange={(e)=> setInput(e.target.value)}
          />
        </div>
        <div className="text-end mt-4">
          <motion.button
       
            className="px-5 py-2.5 text-sm font-medium text-gray-300 bg-zinc-800 rounded-full hover:text-white hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            type="button" 
            onClick={
              sendMessage
            }
            
          >
            Generate
          </motion.button>
        </div>
      </form>
    </motion.div>

    </div>
  );
}
