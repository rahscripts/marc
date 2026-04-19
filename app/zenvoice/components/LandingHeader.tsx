import Image from "next/image"


export default function LandingHeader() {
    return (
        <div className="flex items-center justify-between p-4 px-6 max-md:flex-col max-md:gap-4 max-md:text-center">
            <div className="flex items-center space-x-2 font-black">
                    <Image src="/zenvoicelogo.png" alt="zenvoice logo" width={30} height={30} />
                    <h1 className="text-lg">Zenvoice</h1>
            </div>
            <div className="flex items-center space-x-8 max-md:space-x-4 max-md:text-sm ">
                <a className="link link-hover" href="#pricing">Pricing</a>
                <a className="link link-hover" href="#faq">FAQ</a>
            </div>

            <div>   
                <button className="bg-white py-2 text-sm px-4 max-md:px-3 max-md:py-1.5 max-md:text-xs hover:bg-gray-300 transition-all duration-300 cursor-pointer font-semibold shadow-sm rounded-xl">
                    Login
                </button>

            </div>
        </div>
    )
}