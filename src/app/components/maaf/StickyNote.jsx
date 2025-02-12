"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const notes = [
  { text: "😭 Sayaaang Maaf ya sayang, aku buat ayang rasa sendiri terus", image: "/assets/maaf/jenuh.gif" },
  { text: "📜 Aku sering banget buat ayang kesel maaf ya", image: "/assets/maaf/marah.gif" },
  { text: "Pengen liat ayang lagi 😭", image: "/assets/maaf/sedih.gif" },
  { text: "Pengen jajan bareng", image: "/assets/maaf/jajan.gif" },
  { text: "Rindu", image: "/assets/maaf/rindu.gif" },
  { text: "Jangan marah terus ya sayang", image: "/assets/maaf/takut.gif" },
  { text: "Maaf", image: "/assets/maaf/takut.gif" },
  { text: "Love You Sayang", image: "/assets/maaf/loveyou.gif" },
];
const StickyNote = () => {
    const [page, setPage] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const handleNextPage = () => {
    if (page < notes.length - 1) {
      setIsMoving(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
      setTimeout(() => {
        setPage(page + 1);
        setIsMoving(false);
      }, 600);
    }
  };
  
    return (
        <div className="bg-white px-3 py-5 rounded-xl shadow-slate-500 shadow-xl border-2">
            <div className="relative w-72 h-96 ">
            <audio ref={audioRef} src="/assets/maaf/robek.mp3" preload="auto" />
                {notes.map((note, index) => (
                <motion.div
                    key={index}
                    initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
                    animate={
                    index === page && isMoving
                        ? { y: 300, x: -50, rotate: 15, opacity: 0 }
                        : { y: 0, x: 0, rotate: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`absolute top-0 left-0 w-full h-full p-6 
                            rounded-lg   text-center flex flex-col 
                            justify-center items-center ${
                                index <= page ? "z-10" : "z-0"
                            }`}
                    style={{
                    backgroundImage: "linear-gradient(transparent 95%, #9ca3af 96%), repeating-linear-gradient(white, white 24px, #d1d5db 25px)",
                    backgroundSize: "100% 30px",
                    backgroundColor: "#fef3c7",
                    }}
                >
                    {note.image && (
                    <img src={note.image} alt="Note Image" className="w-24 mb-3" />
                    )}
                    <p className="text-lg font-handwriting text-gray-900 leading-[30px]">
                    {note.text}
                    </p>
        
                    {index === page && page < notes.length - 1 && (
                    <motion.div
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 50 }} 
                        onDragEnd={(event, info) => {
                        if (info.point.y > 40) {
                            handleNextPage();
                        }
                        }}
                        className="mt-4 flex flex-col items-center cursor-pointer"
                    >
                        <button
                        onClick={handleNextPage}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                        >
                        Halaman Berikutnya
                        </button>
                        <p className="text-gray-600 mt-1">Atau tarik ke bawah ⬇️</p>
                    </motion.div>
                    )}
                </motion.div>
                ))}
            </div>
        </div>
    );
  };
  
  export default StickyNote;
  