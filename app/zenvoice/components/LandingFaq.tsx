"use client";

import { useState } from "react";


export default function LandingFaq() {


    const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());


    const faqs = [
  {
    question: "Why do I need ZenVoice?",
    answer: `When you sell one-time payment products, Stripe takes a 0.4% cut (up to $2.00) per sale. With ZenVoice, you only pay once, and never again.

And if you don't pay for Stripe Invoicing, you will get customer requests asking for invoices. Stripe receipts aren't enough for most countries' regulations.

Finally, Stripe invoices aren't editable. Your customers can't add VAT, Tax ID, or fix typos after the purchase is done.

ZenVoice fixes all that.`
  },
  {
    question: "Do I have to use Stripe?",
    answer: "Yes"
  },
  {
    question: "Does it work for one-time purchases?",
    answer: "Yes! It's made for one-time purchases, to avoid paying 0.4% in Stripe fee (or up to $2 per invoice)."
  },
  {
    question: "Does it work for Payment Links?",
    answer: "Yes."
  },
  {
    question: "Does it work for subscriptions?",
    answer: "Yes."
  },
  {
    question: "Does it work if I don’t use Stripe Invoicing?",
    answer: ""
  },
  {
    question: "Does it work for past transactions?",
    answer: "It does. ZenVoice will check for successful payments on your Stripe accounts and generate invoices for any successful payments."
  },
  {
    question: "Is it secure?",
    answer: "Yes. We use restricted API keys to access your Stripe account using the minimum required data to generate invoices."
  },
  {
    question: "Can customers edit invoices?",
    answer: "Yes. They can edit the invoice to add their VAT number, Tax ID, or correct a typo in their name for instance."
  },
  {
    question: "Can customers edit invoices? (VAT, Tax ID)",
    answer: "Yes. They can edit the invoice to add their VAT number, Tax ID, or correct a typo in their name for instance. No more support requests."
  },
  {
    question: "Can customers see other invoices?",
    answer: "Customers can only generate, edit, and download invoices for their own successful payments. If your customer retrieves a payment, they will have to confirm their email address to access the payment data."
  },
  {
    question: "Can I download all invoices for a period?",
    answer: `
Yes. From your dashboard, you can select a Stripe account and a date range, then fetch every payment made during that period. You can download each invoice individually as PDF, export the full list as CSV, or download all invoices at once as a ZIP file.

This is useful for accounting, tax reporting, or simply keeping your records organized.
`
  }
];
    return (
        <section className="py-20 px-6 max-md:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex max-md:flex-col max-md:gap-10">
                    {/* Left Side */}
                    <div className="flex-1 max-md:px-1">
                        <p className="text-sm font-semibold text-teal-600 mb-2">FAQ</p>
                        <h1 className="text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h1>
                    </div>

                    {/* Right Side - Accordion */}
                    <div className="lg:col-span-2 space-y-3 flex-1">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-t border-slate-200 overflow-hidden">
                                <button
                                    onClick={() => {
                                        const newIndices = new Set(openIndices);
                                        if (newIndices.has(index)) {
                                            newIndices.delete(index);
                                        } else {
                                            newIndices.add(index);
                                        }
                                        setOpenIndices(newIndices);
                                    }}
                                    className={`w-full px-2 py-4 flex cursor-pointer items-center justify-between font-bold transition-colors duration-200 ${
                                        openIndices.has(index)
                                            ? "text-emerald-700"
                                            : " text-gray-900"
                                    }`}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`text-xl ${openIndices.has(index) ? "-rotate-360" : "rotate-0"} transition-transform duration-300`}>
                                        {openIndices.has(index) ? 
                                        '-' : '+'}
                                    </span>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                                    openIndices.has(index) ? "max-h-96" : "max-h-0"
                                }`}>
                                    <div className="px-6 max-md:px-2 py-4 ">
                                        <p className="text-gray-600 font-semibold leading-relaxed whitespace-pre-wrap">
                                            {faq.answer.split('Stripe takes a 0.4% cut (up to $2.00) per sale').map((part, i) => (
                                                i === 0 ? part : (
                                                    <span key={i}>
                                                        <span className="underline">Stripe takes a 0.4% cut (up to $2.00) per sale</span>
                                                        {part}
                                                    </span>
                                                )
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}