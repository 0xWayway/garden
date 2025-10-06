"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface TimelineEvent {
  id: string;
  title: string;
  description?: string;
  date?: string;
  [key: string]: unknown;
}

interface TimelineItemProps {
  event: TimelineEvent;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
  onHover: (index: number | null) => void;
  index: number;
  activeIndex: number | null;
  styles: TimelineStyles;
  customRender?: (event: TimelineEvent) => React.ReactNode;
}

interface TimelineStyles {
  lineColor: string;
  activeLineColor: string;
  dotColor: string;
  activeDotColor: string;
  dotSize: string;
  titleColor: string;
  descriptionColor: string;
  dateColor: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  event,
  isActive,
  isLast,
  onHover,
  index,
  activeIndex,
  styles,
  customRender,
}) => {
  const fillDelay = activeIndex !== null ? Math.max(0, (index - 1) * 0.1) : 0;
  const fillDuration = activeIndex !== null ? Math.max(0.2, 0.5 - index * 0.1) : 0.5;

  // 彩色主题数组
  const colorThemes = [
    { dot: '#8ca0a0', bg: '#a5d8ff' },
    { dot: '#d8b4a0', bg: '#ffc9c9' },
    { dot: '#6f7c58', bg: '#b2f2bb' },
    { dot: '#9eb4b3', bg: '#d0bfff' },
  ];
  
  const currentTheme = colorThemes[index % colorThemes.length];

  return (
    <motion.div
      className="flex last:mb-0"
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mr-4 flex flex-col items-center">
        {/* 手绘风格的连接线 */}
        {!isLast && (
          <svg
            className="absolute"
            style={{
              top: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '8px',
              height: '100%',
              overflow: 'visible'
            }}
          >
            {/* 灰色底线 */}
            <path
              d={`M 4 0 Q ${3 + Math.sin(index) * 1.5} 30, 4 60 T 4 120 Q ${5 - Math.cos(index) * 1.5} 150, 4 180 T 4 100%`}
              stroke={styles.lineColor}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* 彩色激活线 */}
            <motion.path
              d={`M 4 0 Q ${3 + Math.sin(index) * 1.5} 30, 4 60 T 4 120 Q ${5 - Math.cos(index) * 1.5} 150, 4 180 T 4 100%`}
              stroke={currentTheme.bg}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isActive ? 1 : 0 }}
              transition={{ duration: fillDuration, delay: fillDelay }}
            />
          </svg>
        )}
        
        {/* 手绘风格的圆点 */}
        <motion.div
          className="relative z-10"
          style={{
            width: styles.dotSize,
            height: styles.dotSize,
          }}
          animate={{
            scale: isActive ? 1.3 : 1,
            rotate: isActive ? 360 : 0,
          }}
          transition={{ duration: fillDuration, delay: fillDelay }}
        >
          <svg
            viewBox="0 0 40 40"
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {/* 手绘风格的圆形 */}
            <motion.path
              d="M 20 5 Q 30 5, 35 15 T 35 25 Q 35 32, 28 37 T 15 37 Q 8 35, 5 25 T 5 15 Q 5 8, 12 5 T 20 5"
              fill={isActive ? currentTheme.bg : "#fcfaf6"}
              stroke={isActive ? currentTheme.dot : styles.dotColor}
              strokeWidth="3"
              initial={{ fill: "#fcfaf6" }}
              animate={{
                fill: isActive ? currentTheme.bg : "#fcfaf6",
                stroke: isActive ? currentTheme.dot : styles.dotColor,
              }}
              transition={{ duration: fillDuration, delay: fillDelay }}
            />
          </svg>
        </motion.div>
      </div>
      <div className={cn("flex-grow leading-5", !isLast && "mb-3")}>
        {customRender ? (
          customRender(event)
        ) : (
          <>
            <h3 className="text-lg font-semibold" style={{ color: styles.titleColor }}>
              {event.title}
            </h3>
            <p style={{ color: styles.descriptionColor }}>{event.description}</p>
            <span className="text-sm" style={{ color: styles.dateColor }}>
              {event.date}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
};

interface AnimatedTimelineProps {
  events: TimelineEvent[];
  className?: string;
  styles?: Partial<TimelineStyles>;
  customEventRender?: (event: TimelineEvent) => React.ReactNode;
  onEventHover?: (event: TimelineEvent | null) => void;
  onEventClick?: (event: TimelineEvent) => void;
  initialActiveIndex?: number;
}

const defaultStyles: TimelineStyles = {
  lineColor: "#d1d5db",
  activeLineColor: "#8B7355",
  dotColor: "#d1d5db",
  activeDotColor: "#8B7355",
  dotSize: "1.5rem",
  titleColor: "inherit",
  descriptionColor: "inherit",
  dateColor: "inherit",
};

export function AnimatedTimeline({
  events,
  className = "",
  styles: customStyles = {},
  customEventRender,
  onEventHover,
  onEventClick,
  initialActiveIndex,
}: AnimatedTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(initialActiveIndex ?? null);
  const styles = { ...defaultStyles, ...customStyles };

  const handleHover = (index: number | null) => {
    setActiveIndex(index);
    onEventHover?.(index !== null ? events[index] : null);
  };

  return (
    <div className={`relative py-4 ${className}`}>
      {events.map((event, index) => (
        <div key={event.id} onClick={() => onEventClick?.(event)}>
          <TimelineItem
            event={event}
            isActive={activeIndex !== null && index <= activeIndex}
            isFirst={index === 0}
            isLast={index === events.length - 1}
            onHover={handleHover}
            index={index}
            activeIndex={activeIndex}
            styles={styles}
            customRender={customEventRender}
          />
        </div>
      ))}
    </div>
  );
}

