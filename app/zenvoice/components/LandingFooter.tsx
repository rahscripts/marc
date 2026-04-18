import Image from "next/image";
import zenvoicelogo from "@/public/zenvoicelogo.png";

export default function LandingFooter() {
    const linksData = [
        { label: "Support", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Affiliates", href: "#" }
    ];

    const legalData = [
        { label: "Terms of services", href: "#" },
        { label: "Privacy policy", href: "#" }
    ];

    const moreData = [
        { label: "Newsletter for makers", href: "#" },
        { label: "TrustMRR", href: "#" },
        { label: "IndiePage", href: "#" },
        { label: "PoopUp", href: "#" },
        { label: "ShipFast", href: "#" },
        { label: "GamifyList", href: "#" },
        { label: "WorkbookPDF", href: "#" },
        { label: "ByeDispute", href: "#" },
        { label: "DataFast", href: "#" },
        { label: "CodeFast", href: "#" }
    ];

    return (
        <footer className="bg-gray-100 py-20 px-4 max-md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 max-md:text-center gap-12 mb-12">
                    {/* Left Section */}
                    <div className="md:col-span-1">
                        <div className="flex items-center max-md:justify-center gap-2 mb-4">
                            <Image src={zenvoicelogo} alt="Zenvoice Logo" className="w-8 h-8" />
                            <h1 className="font-bold text-lg text-gray-900">Zenvoice</h1>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 max-w-xs max-md:mx-auto">
                            Stripe invoices made easy. Let your customers generate and download invoices themselves. No more manual work. No Stripe fee. No more headaches.
                        </p>
                        <p className="text-gray-500 text-xs mb-4">
                            Copyright © 2026 - All rights reserved
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">Links</h3>
                        <ul className="space-y-1">
                            {linksData.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-sm link link-hover">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-1">
                            {legalData.map((legal, index) => (
                                <li key={index}>
                                    <a href={legal.href} className="text-sm link link-hover">
                                        {legal.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Section */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">More</h3>
                        <ul className="space-y-1">
                            {moreData.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className=" text-sm link link-hover">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className=" pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                            <Image src={"/mylogo.png"} width={60} height={60} alt="my logo"  className="rounded-full" />
                        </div>
                        <p className="text-gray-700 text-sm">
                            Hey Curious 👋 I&apos;m <a target="_blank" href="https://xrahman.com" className="underline font-semibold cursor-pointer link link-hover">Rahman</a>, the creator of Zenvoice. You can follow my work on <a target="_blank" href="https://x.com/xrahman_" className="underline font-semibold cursor-pointer link link-hover">Twitter</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
