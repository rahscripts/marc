import FiveStars from "./ui/FiveStars";
import GetZenvoiceBtn from "./ui/GetZenvoiceBtn";


export default function LandingVideo() {

    const firstPricing = [
        "ZenVoice link",
"Unlimited self-serve invoices",
"Bulk invoice download",
"1 Stripe account"
    ]

    const secondPricing = [
        "ZenVoice link",
        "Unlimited self-serve invoices",
        "Bulk invoice download",
        "Unlimited Stripe accounts"
    ];
    return (
          <section id="pricing" className="max-md:m-6   py-20 max-w-5xl mx-auto space-y-30 max-md:space-y-10">
                        <div className="flex flex-col items-center justify-center gap-6 max-md:gap-4 text-center">
                            <p className="text-white text-sm rounded-2xl px-2 bg-gray-700 animate-pulse ">
                                ✨ Launch discount — $50 OFF ✨
                            </p>
                            <h1 className="text-5xl text-gray-800 font-bold tracking-tight max-md:text-3xl">
                                Stop wasting hours  <br /> managing Stripe invoices
                            </h1>
                            <p className="max-md:text-sm ">
                                Ditch the 0.4% Stripe Invoicing fee, reduce customer support, <br /> and focus on your startup. 1-minute no-code setup.
                            </p>
                        </div>
                        <div className="flex gap-8 max-md:flex-col md:m-8">
                           <div className="flex flex-1 flex-col gap-3 items-start justify-start bg-white p-10 rounded-lg">
                             <div className="flex gap-1 items-baseline">
                                <p className="line-through">$99</p> <p className="text-5xl font-extrabold">$49</p> <p className="uppercase text-xs">usd</p>
                             </div>
                               {
                                firstPricing.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                       <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={1 } viewBox="0 0 16 16" fill="currentColor" className="size-5 ">
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                        <p className="text-gray-900 font-semibold">{item}</p>
                                    </div>
                                ))}
                                <div className="w-full text-center">
                                    <GetZenvoiceBtn extraClass="w-full"/>
                                    <p className="text-sm">One-time payment, <span className="underline">then it's yours forever</span></p>
                                </div>
                           </div>
                            <div className="flex flex-1 relative border border-green-500 flex-col gap-3 items-start justify-start bg-white p-10 rounded-lg">
                                 <div className="absolute -top-4 left-1/2 -translate-x-1/2">
    <span className="bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
      BUSY FOUNDERS' CHOICE
    </span>
  </div>
                             <div className="flex gap-1 items-baseline">
                                <p className="line-through">$119</p> <p className="text-5xl font-extrabold">$69</p> <p className="uppercase text-xs">usd</p>
                             </div>
                               {
                                secondPricing.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                       <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={1 } viewBox="0 0 16 16" fill="currentColor" className="size-5 ">
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                        <p className="text-gray-900 font-semibold">{item}</p>
                                    </div>
                                ))}
                                <div className="w-full text-center">
                                    <GetZenvoiceBtn extraClass="w-full"/>
                                    <p className="text-sm">One-time payment, <span className="underline">then it's yours forever</span></p>
                                </div>
                           </div>
                        </div>
        
                        <div className="flex flex-col items-center justify-center gap-6">
                            <FiveStars />
        
                            <div className="space-y-4 text-center">
                                <p>
                                  Not having to make invoices manually is <span className="bg-yellow-100/50 px-1">saving me br tons of <br /> support work</span>. Now I can just send a link to customers and they <br /> handle everything themselves
                                </p>
                            </div>
        
                            <div className="flex gap-3">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                    </div>
                                </div>
                                <div className="flex items-start flex-col ">
                                    <h1 className="font-bold text-lg text-gray-700">
                                        Nico Jaennen
                                    </h1>
                                    <p>
                                     21.7K followers on 𝕏
                                    </p>
                                </div>
                            </div>
        
                        </div>
                    </section>
    )
}