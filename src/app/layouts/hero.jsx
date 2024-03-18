import { Content } from "next/font/google"
import Navbar from "../components/navbar"
import Contents from "../components/contents"

const Hero = () => {
    return (
        <div className="bg-accent min-h-[100vh] pt-2">
            <div className="w-[95vw] mx-auto">
                <Navbar />
                <Contents />
            </div>
        </div>
    )
}

export default Hero