import React from "react";
import Image from "next/image";
import { BackgroundLines } from "./../components/ui/background-lines";
import { AnimatedTestimonials } from "./../components/ui/animated-testimonials";
import { TextGenerateEffect } from "./../components/ui/text-generate-effect";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
  } from "./../components/ui/text-reveal-card";
export default function LovePage() {
    const testimonials = [
        {
          quote:
            "Seru juga nikahan Dinda Ilhaam, cuma cape juga 1 harian disana. tapi karena bareng ayang capenya jadi nggak seberapa",
          name: "Nikahan Dinda Ilham",
          designation: "11 Agustus 2024",
          src: "/assets/mylove/moment3.jpg",
        },
        {
          quote:
            "Kita sampai sore di sana nunggu matahari terbenam, ayang paling suka kalau liat langit waktu mataharinya mulai terbenam",
          name: "Liat Sunsite DiRawang",
          designation: "30 Juli 2024",
          src: "/assets/mylove/moment2.jpg",
        },
        {
          quote:
            "Kapan-kapan kita kemari lagi ya, kayaknya seru naik kereta2an itu. balapan yok",
          name: "Pelabuhan Tanjung Balai",
          designation: "18 Agustus 2024",
          src: "/assets/mylove/moment1.jpg",
        },
        {
          quote:
            "Kalau Kemari pasti gowet ketempat yang cahanya bagus untuk foto😂",
          name: "Naik Perahu Angsa",
          designation: "17 Oktober 2023",
          src: "/assets/mylove/moment4.jpg",
        },
        {
          quote:
            "Ingat tidak, Waktu itu kita mewarnai lukisan ini di masjid, ada yang gambar ayam juga😊",
          name: "Lukisan Kucing",
          designation: "05 Agustus 2023",
          src: "/assets/mylove/moment5.jpg",
        },
        {
            quote:
              "Di hari itu, adalah hari kebahagian kita karena berhasil melewati tantangan masa-masa kuliah bersama",
            name: "Moment Ketika Kita Wisuda",
            designation: "16 Desember 2023",
            src: "/assets/mylove/moment6.jpg",
        },
      ];
    const words = `"Sayangku, di usiamu yang baru ini, aku berdoa agar setiap langkahmu dipenuhi keberkahan dan kebahagiaan yang tak pernah putus. Semoga semua impianmu perlahan menjadi nyata, dan segala perjuanganmu dibalas dengan hasil yang indah. Aku berharap kamu selalu sehat, kuat, dan ceria selalu. Bersama kamu, aku percaya, kita bisa menghadapi apa pun yang ada di depan. Selamat melangkah ke babak baru hidupmu, sayang."
      `;
    return (
      <div>
        <BackgroundLines className="flex items-center justify-center w-full min-h-[100vh] flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Happy Birthday, SayangKu <br /> Adida Mitha Adelia Panjaitan.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Semoga semua yang sayang inginkan tercapai dan tahun ini jadi lebih baik dari yang sebelumnya. Terima kasih sudah membuat hidupku lebih bahagia. Ayang selalu bertambah istimewa setiap tahunnya untukku
            </p>
        </BackgroundLines>
        <div className="px-5 py-3 text-xs">
            <TextGenerateEffect duration={5} filter={false} words={words} />
        </div>
        <div className="mx-5 flex items-center justify-center my-5 text-3xl rounded-2xl w-full bg-transparent">
            <TextRevealCard className="bg-transparent border-none text-3xl"
                text="Kenangan Kita"
                revealText="Love You Sayang ❤️"
            >
                {/* <TextRevealCardTitle>
                Sometimes, you just need to see it.
                </TextRevealCardTitle> */}
                {/* <TextRevealCardDescription>
                Geser kalimatnya mungkin kamu terkejut
                </TextRevealCardDescription> */}
            </TextRevealCard>
        </div>
        <div className="px-5 py-3">
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
        
        <div className="grid grid-cols-2  gap-4 mx-5 my-5">
            <div className="flex flex-col gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image1.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image2.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image3.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image4.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image5.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image6.jpg" alt=""/>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image7.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image8.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image9.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image10.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image11.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/assets/mylove/image12.jpg" alt=""/>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
  