import Image from "next/image"


export default function LandingHeader() {
    return (
        <div className="flex items-center justify-between p-4 px-6">
            <div className="flex items-center space-x-2 font-black">
                    <Image src="/zenvoicelogo.png" alt="zenvoice logo" width={30} height={30} />
                    <h1 className="text-lg">Zenvoice</h1>
            </div>
            <div className="flex items-center space-x-8 ">
                <a className="link link-hover" href="#pricing">Pricing</a>
                <a className="link link-hover" href="#faq">FAQ</a>
            </div>

            <div>   
                <button className="bg-white py-2 text-sm px-4 hover:bg-gray-300 transition-all duration-300 cursor-pointer font-semibold shadow-sm rounded-xl">
                    Login
                </button>

            </div>
        </div>
    )
}