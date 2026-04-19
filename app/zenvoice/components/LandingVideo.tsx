import FiveStars from "./ui/FiveStars";

export default function LandingVideo() {
    return (
         <section className="my-40 max-md:my-20 space-y-25 max-md:space-y-10 p-2"> 
        
        
        
        
                        <div className="relative flex justify-center">
                            <div className="absolute max-md:hidden right-240 top-1/2 -translate-y-1/2">
                            <p>Zenvoice <br /> in 3 minutes</p>
                                <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 15 C 10 50, 60 70, 75 45 C 85 30, 95 60, 120 55" strokeWidth="2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M113 50 L120 55 L110 58" strokeWidth="2.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="mx-auto max-md:scale-50 ">
                                <iframe className="w-220 h-120 rounded-2xl border-8 border-slate-50
                                        shadow-[0_0_0_1px_rgba(0,0,0,0.15)]
                                         
                            " src="https://www.youtube.com/embed/Em8puhjUfQ4?si=eixGhrUMBnEfMtin" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
        
                          <div className="flex flex-col items-center justify-center gap-6 max-md:gap-4 p-2">
                                        <FiveStars />
                        
                                        <div className="space-y-4 text-center">
                                            <p className="max-md:text-sm">
                                               ZenVoice solves a crazy pain of my biz.
                                            </p>
                                            <p className="max-md:text-sm">
                                              My customer support agent is getting requests <br /> regarding invoices 2-3 times A DAY. I purchased and <br /><span className="bg-yellow-100/50 px-1">integrated it to my Stripe account in less than 5min.</span>
                                              </p>
                                        </div>
                        
                                        <div className="flex gap-3 max-md:flex-col max-md:items-center">
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                                </div>
                                            </div>
                                            <div className="flex items-start max-md:items-center max-md:text-center flex-col ">
                                                <h1 className="font-bold text-lg text-gray-700">
                                                    Roey Lalazar
                                                </h1>
                                                <p className="text-sm">
                                                    1,107 followers on 𝕏
                                                </p>
                                            </div>
                                        </div>
                        
                                    </div>
                    </section>
    )
};