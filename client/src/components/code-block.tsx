import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

interface CodeBlockProps {
  code: string;
  language: string;
  filename: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`font-code text-sm rounded-lg shadow-xl ${theme === 'dark' ? 'bg-[#1a2234]' : 'bg-[#f1f5f9]'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-4">
        <div className="flex text-xs mb-2">
          <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-gray-400">{filename}</span>
        </div>
        <pre className="overflow-x-auto">
          <code className={`language-${language} text-gray-300`}>
            {code}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
