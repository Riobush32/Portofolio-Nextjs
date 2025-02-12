"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate 10 hearts dengan posisi & ukuran acak
    const generatedHearts = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      size: Math.random() * 40 + 20, // Ukuran acak antara 20px - 60px
      left: Math.random() * 100, // Posisi acak di layar
      delay: Math.random() * 5, // Delay animasi acak
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 0 }} // Mulai dari bawah layar
          animate={{ y: "-10vh", opacity: 1 }} // Terbang ke atas
          transition={{
            duration: 5 + Math.random() * 3, // Waktu animasi 5-8 detik
            repeat: Infinity,
            ease: "linear",
            delay: heart.delay,
          }}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
