import { MaskContainer } from "../components/ui/svg-mask-effect"

const About = () => {
    return (
        <>
            <div className="hero bg-neutral py-16 pt-2">
                
                    <div className="hero-content w-[95vw] mx-auto grid grid-cols-1 place-items-center">
                        <h1 className="mt-5 text-3xl font-bold">About Me</h1>
                    <div className="border-b-secondary border-b-2 w-[200px]"></div>
                    <MaskContainer
                        revealText={
                            <>
                                <p className="max-w-4xl mx-auto text-slate-800 text-center text-xl font-bold">
                                    "Teknologi Informasi adalah pilar yang membangun jalan menuju masa depan, memungkinkan kita untuk menembus batasan dan merangkul kemungkinan yang tak terbatas." 
                                </p>
                            </>
                        }
                        className="h-[12rem] w-full"
                    >
                        <p className="text-xl">"<span className="text-rose-500">Teknologi Informasi</span> adalah <span className="text-rose-500">pilar</span> yang membangun jalan menuju <span className="text-rose-500">masa depan</span>, memungkinkan kita untuk <span className="text-secondary">menembus batasan</span> dan merangkul kemungkinan yang tak terbatas." </p>
                    </MaskContainer>
                        <p className="text-center md:w-[70vw] text-slate-300">Saya adalah lulusan S1 Sistem Informasi dari STMIK Royal Kisaran, dengan rasa suka yang mendalam pada dunia pemrograman. Saya selalu didorong oleh rasa ingin tahu yang besar dan keingintahuan yang tak terbatas, yang mendorong saya untuk terus mengeksplorasi dan belajar hal-hal baru dalam dunia yang dinamis ini. Saya menemukan kegembiraan yang luar biasa dalam mengejar pengetahuan baru, terutama dalam bidang teknologi informasi. Saya memiliki kemampuan dalam hal programing yang saya peroleh dimasa perkuliahan, dimulai dari Front-End Web Programming, Back-End Developer, Fullstact Developer, serta Mobile Programming. Cek detail saya dibawah.</p>
                    </div>
                
            </div>
        </>
    )
}

export default About