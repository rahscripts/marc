import LandingHeader from "./components/LandingHeader";
import GetZenvoiceBtn from "./components/ui/GetZenvoiceBtn";
import HeroAvatar from "./components/ui/HeroAvatar";
import FiveStars from "./components/ui/FiveStars";
import LandingComparison from "./components/LandingComparison";
import LandingWorking from "./components/LandingWorking";




export default function ZenvoicePage() {

    const list = [
       " 1-minute no-code setup",
"Editable invoices (VAT, etc.)",
"No 0.4% Stripe invoice fee"
    ];
    return (
        <div className="max-w-5xl mx-auto w-full">
            <section className="w-screen h-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-emerald-500/20">
                <div className="max-w-5xl mx-auto w-full">
                    <LandingHeader />
                    <section className="h-screen flex mt-30 items-center justify-start flex-col gap-6 text-center px-4">
                       <p><span className="text-xs text-gray-500">Made for</span> <span className="text-blue-600 font-semibold tracking-tighter">stripe</span></p>
                       <h1 className="text-6xl tracking-tight font-black max-w-2xl">
                       Stop paying <span className="italic text-red-500">0.4%</span> <br />
                    for Stripe invoices
                       </h1>
                       <p className="text-lg text-gray-600 max-w-xl">
                        Let your customers generate, edit, and download <br /> their invoices, with just<span className="underline italic decoration-emerald-600 decoration-2 decoration-wavy"> a link.</span>
                       </p>
                       <div className="flex flex-col items-start gap-2">
                           {
                            list.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-green-500">
                             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                           </svg>
                                    <p className="text-gray-700">{item}</p>
                                </div>
                            ))}
                       </div>
                        <GetZenvoiceBtn />
                        <HeroAvatar />
                    
                    </section>
                </div>
            </section>
            <LandingComparison />
            <LandingWorking />
        </div>
    )
}