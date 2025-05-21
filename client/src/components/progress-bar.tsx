import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressBarProps {
  label: string;
  percentage: number;
}

export function ProgressBar({ label, percentage }: ProgressBarProps) {
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, ease: "easeInOut" }
      });
    }
  }, [controls, inView, percentage]);
  
  return (
    <div className="mb-5" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full">
        <motion.div 
          className="h-2 bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
}
