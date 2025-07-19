import { useEffect, useState } from "react";

interface TypingParagraphProps {
  text: string;
  speed?: number;
}

const TypingParagraph = ({ text, speed = 40 }: TypingParagraphProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="mt-4 text-lg md:text-gray-200">{displayedText}</p>;
};

export default TypingParagraph;
