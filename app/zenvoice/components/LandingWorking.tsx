"use client";
import { useState } from "react";
import FiveStars from "./ui/FiveStars";
import Image from "next/image";
import zenvoicelogo from "@/public/zenvoicelogo.png";

export default function LandingWorking() {
    const [openIndex, setOpenIndex] = useState(0);

    const Features = [
        {
            title: "1. Connect Stripe accounts",
            description: "Add one or multiple Stripe accounts to ZenVoice. It takes less than a minute. No coding required.",
            content: (
                <div className="flex gap-2 items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-teal-600 shrink-0 mt-1">
                        <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    <span className="text-teal-600 font-semibold">Secured with restricted API keys</span>
                </div>
            )
        },
        {
            title: "2. Get your ZenVoice link",
            description: "Your customers can retrieve any successful payments made on all your Stripe accounts.",
            content: (
                <div className="space-y-3">
                    <div className="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-teal-600 flex-shrink-0 mt-1">
                            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                        </svg>
                        <span className="text-teal-600 font-semibold">Send by email</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-teal-600 flex-shrink-0 mt-1">
                            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-teal-600 font-semibold">Show on dashboard</span>
                    </div>
                </div>
            )
        },
        {
            title: "3. Customers generate invoices",
            description: "Once customers find a successful payment, they receive a secure link to generate, edit, and download invoices.",
            content: (
                <div className="space-y-3">
                    <div className="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-teal-600 flex-shrink-0 mt-1">
                            <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-teal-600 font-semibold">Protected data</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-teal-600 flex-shrink-0 mt-1">
                            <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                        </svg>
                        <span className="text-teal-600 font-semibold">Editable invoices</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 text-teal-600 flex-shrink-0 mt-1">
                            <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .75.75v.258a33.186 33.186 0 0 1 6.668.83.75.75 0 0 1-.336 1.461 31.28 31.28 0 0 0-1.103-.232l1.702 7.545a.75.75 0 0 1-.387.832A4.981 4.981 0 0 1 15 14c-.825 0-1.606-.2-2.294-.556a.75.75 0 0 1-.387-.832l1.77-7.849a31.743 31.743 0 0 0-3.339-.254v11.505a20.01 20.01 0 0 1 3.78.501.75.75 0 1 1-.339 1.462A18.558 18.558 0 0 0 10 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 0 1-.338-1.462 20.01 20.01 0 0 1 3.779-.501V4.509c-1.129.026-2.243.112-3.34.254l1.771 7.85a.75.75 0 0 1-.387.83A4.98 4.98 0 0 1 5 14a4.98 4.98 0 0 1-2.294-.556.75.75 0 0 1-.387-.832L4.02 5.067c-.37.07-.738.148-1.103.232a.75.75 0 0 1-.336-1.462 32.845 32.845 0 0 1 6.668-.829V2.75A.75.75 0 0 1 10 2ZM5 7.543 3.92 12.33a3.499 3.499 0 0 0 2.16 0L5 7.543Zm10 0-1.08 4.787a3.498 3.498 0 0 0 2.16 0L15 7.543Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-teal-600 font-semibold">EU compliant template</span>
                    </div>
                </div>
            )
        },
        {
            title: "4. Bulk download invoices",
            description: "You can also download all your invoices in bulk, with a single click.",
            content: (
                <div className="space-y-3">
                    <div className="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 text-teal-600 flex-shrink-0 mt-1">
                            <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                            <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                        </svg>
                        <span className="text-teal-600 font-semibold">Download all as ZIP</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 text-teal-600 flex-shrink-0 mt-1">
                            <path fillRule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 3.5a.75.75 0 0 1 .75.75v2.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V6.25A.75.75 0 0 1 8 5.5Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-teal-600 font-semibold">Export as CSV</span>
                    </div>
                    <div className="flex gap-2 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 text-teal-600 flex-shrink-0 mt-1">
                            <path d="M6.25 8.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0Z" />
                            <path fillRule="evenodd" d="M7 12c1.11 0 2.136-.362 2.965-.974l2.755 2.754a.75.75 0 1 0 1.06-1.06l-2.754-2.755A5 5 0 1 0 7 12Zm0-1.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-teal-600 font-semibold">Filter by date range</span>
                    </div>
                </div>
            )
        }
    ]

    return (
        <section className="py-20 px-4 max-md:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl text-gray-900 font-extrabold tracking-tight mb-20 text-center">
                    Self-serve invoices for your customers, bulk download for you
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Accordion */}
                    <div className="space-y-3">
                        {Features.map((feature, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => {
                                        if (openIndex !== index) {
                                            setOpenIndex(index);
                                        }
                                    }}
                                    className={`w-full px-6 py-4 flex items-center justify-between font-semibold transition-colors ${
                                        openIndex === index
                                            ? "bg-gray-100 text-gray-900"
                                            : "bg-white text-gray-700 hover:bg-gray-50"
                                    }`}
                                >
                                    <span>{feature.title}</span>
                                    <span className={`text-xl transition-transform duration-300 ${
                                        openIndex === index ? "rotate-45" : "rotate-0"
                                    }`}>
                                        +
                                    </span>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                                    openIndex === index ? "max-h-96" : "max-h-0"
                                }`}>
                                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                        <p className="text-gray-600 text-sm mb-4">
                                            {feature.description}
                                        </p>
                                        <div className="space-y-3">
                                            {feature.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Image/Logo */}
                    <div className="flex items-center justify-center">
                        <Image
                            src={zenvoicelogo}
                            alt="ZenVoice"
                            width={400}
                            height={400}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Bottom Testimonial */}
                <div className="flex flex-col items-center justify-center gap-6 mt-20">
                    <FiveStars />

                    <div className="space-y-4 text-center">
                        <p>
                            I added the ZenVoice link in the welcome email. So if anyone <br /> wants to have the invoice then it&apos;s self-serve. I deploy it once <br /> 
                            and <span className="bg-yellow-100/50 px-1">I don&apos;t need to care anymore.</span></p>
                    </div>

                    <div className="flex gap-3">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <Image
                                    src={zenvoicelogo}
                                    alt="Philipp Keller"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex items-start flex-col ">
                            <h1 className="font-bold">
                                Philipp Keller
                            </h1>
                            <p>
                                6,717 followers on 𝕏
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}