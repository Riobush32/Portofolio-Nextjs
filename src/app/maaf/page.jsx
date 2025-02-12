"use client";

import FloatingHearts from "./../components/maaf/FloatingHearts";
import StickyNote from "./../components/maaf/StickyNote";
import { useEffect, useRef } from "react";

export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playAudio = () => {
        audioRef.current.play().catch(error => console.log("Autoplay blocked: ", error));
        document.removeEventListener("click", playAudio);
      };
      document.addEventListener("click", playAudio);
    }
  }, []);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-pink-100" 
        style={{
            backgroundImage: "url('/assets/maaf/backgrond-lucu.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
    >
      <audio ref={audioRef} src="/assets/maaf/latar.mp3" loop />
      <FloatingHearts />
      <StickyNote />
    </div>
  );
}
