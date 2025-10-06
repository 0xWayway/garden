'use client';

import { motion } from 'framer-motion';

export default function IntroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full"
      style={{ fontFamily: 'Virgil, Patrick Hand, cursive' }}
    >
      <div className="space-y-4">
        <div className="text-[#333333] space-y-4 leading-relaxed text-base">
          <p>
            Hello, I'm Lucky
          </p>
          
          <p>
            Always a trader and a student. When I'm not in front of a screen, 
            you can usually find me on the climbing wall. I was involved in crypto 
            from 2021 to 2024 — now I focus more on market dynamics and mechanisms.
          </p>
          
          <p>
            A little bit of nomad, right now based in Xiamen and a new community 
            in Malaysia, hoping to leave more footprints around the world in the future.
          </p>
          
          <p>
            I love bread, pizza, soft wind, sunset, and walking by the river 🍃
          </p>
          
          <p>
            If you're also into market or climbing, <strong className="font-bold">let's catch up!</strong>
            <br />
            Or if you just want to chat — you're very welcome :)
          </p>
          
          <p className="text-sm text-[#666666]">
            (DMs open :)))
          </p>
        </div>
      </div>
    </motion.div>
  );
}

