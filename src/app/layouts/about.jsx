import { MaskContainer } from "../components/ui/svg-mask-effect"

const About = () => {
    return (
      <>
        <div className="hero bg-neutral py-16 pt-2" id="about">
          <div className="hero-content w-[95vw] mx-auto grid grid-cols-1 place-items-center">
            <h1 className="mt-5 text-3xl font-bold text-white">About Me</h1>
            <div className="-mt-5 border-t-secondary border-t-2 w-[200px]"></div>
            <MaskContainer
              revealText={
                <>
                  <p className="max-w-4xl mx-auto text-slate-800 text-center text-xl font-bold">
                    "Teknologi Informasi adalah pilar yang membangun jalan
                    menuju masa depan, memungkinkan kita untuk menembus batasan
                    dan merangkul kemungkinan yang tak terbatas."
                  </p>
                </>
              }
              className="h-[12rem] w-full"
            >
              <p className="text-xl">
                "<span className="text-rose-500">Teknologi Informasi</span>{" "}
                adalah <span className="text-rose-500">pilar</span> yang
                membangun jalan menuju{" "}
                <span className="text-rose-500">masa depan</span>, memungkinkan
                kita untuk{" "}
                <span className="text-secondary">menembus batasan</span> dan
                merangkul kemungkinan yang tak terbatas."{" "}
                </p>
            </MaskContainer>
            <p className="text-center md:w-[70vw] text-slate-300">
                Sebagai lulusan baru didunia pemograman mendorong saya untuk terus eksplorasi dan berkembang. Saya sangat menikmati setiap momen ketika bisa merintis pengetahuan baru dalam hal apapun termasuk dalam hal teknologi informasi baik melalui YouTube maupun kursus Codepolitan disela-sela waktu luang. Saat ini saya berminat untuk mempelajari pekembangan dunia Web Development dan Android Development. Saya Bercita-cita Untuk memberikan kontribusi besar dan berdampak didalam dunia pemograman. Saya memiliki kemampuan dalam hal programing yang saya peroleh dimasa perkuliahan, dimulai dari Front-End Web Programming, Back-End Developer, Fullstact Developer, serta Mobile Programming. Cek detail saya dibawah.
            </p>
        </div>
        </div>
      </>
    );
}

export default About