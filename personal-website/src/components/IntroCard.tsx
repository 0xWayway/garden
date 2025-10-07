'use client';

import { motion } from 'framer-motion';

interface IntroCardProps {
  introText?: string;
}

export default function IntroCard({ introText }: IntroCardProps) {
  // 默认文本作为后备
  const defaultIntro = `Hello, I'm Lucky

Always a trader and a student. When I'm not in front of a screen, 
you can usually find me on the climbing wall. I was involved in crypto 
from 2021 to 2024 — now I focus more on market dynamics and mechanisms.

A little bit of nomad, right now based in Xiamen and a new community 
in Malaysia, hoping to leave more footprints around the world in the future.

I love bread, pizza, soft wind, sunset, and walking by the river 🍃

If you're also into market or climbing, let's catch up!
Or if you just want to chat — you're very welcome :)

(DMs open :)))`;

  const displayText = introText || defaultIntro;
  
  // 将文本按段落分割
  const paragraphs = displayText.split('\n\n').filter(p => p.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full"
      style={{ fontFamily: 'var(--font-kalam), Kalam, cursive' }}
    >
      <div className="space-y-4">
        <div className="text-[#333333] space-y-4 leading-relaxed text-lg">
          {paragraphs.map((paragraph, index) => {
            // 特殊处理第一段（Hello, I'm Lucky）
            if (index === 0) {
              return (
                <p key={index} className="-mt-2 mb-1">
                  {paragraph}
                </p>
              );
            }
            
            // 特殊处理包含 "let's catch up" 的段落
            if (paragraph.includes("let's catch up")) {
              return (
                <p key={index}>
                  {paragraph.split('let\'s catch up').map((part, partIndex) => (
                    <span key={partIndex}>
                      {part}
                      {partIndex === 0 && (
                        <strong className="font-bold">let&apos;s catch up!</strong>
                      )}
                    </span>
                  ))}
                </p>
              );
            }
            
            // 特殊处理最后一段（DMs open）
            if (paragraph.includes("DMs open")) {
              return (
                <p key={index} className="text-sm text-[#666666]">
                  {paragraph}
                </p>
              );
            }
            
            // 普通段落
            return (
              <p key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
