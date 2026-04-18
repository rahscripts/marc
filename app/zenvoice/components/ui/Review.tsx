import FiveStars from "@/app/zenvoice/components/ui/FiveStars";

export default function Review() {
    return (
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
    )
}