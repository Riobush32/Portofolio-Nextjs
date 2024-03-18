import { Content } from "next/font/google"
import Navbar from "../components/navbar"
import Contents from "../components/contents"

const Hero = () => {
    return (
        <div className="bg-accent pt-2" id="hero">
            <div className="w-[95vw] mx-auto">
                <Navbar />
                <Contents />
            </div>
        </div>
    )
}

export default Hero