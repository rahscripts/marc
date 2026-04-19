import FiveStars from "./ui/FiveStars";


export default function LandingComparison() {

    const stripeInvoices = [
        "Pay 0.4% per invoice (up to $2)",
        "Or manually create invoices",
        "Waste hours in customer support",
        "Can’t update details once sent (VAT, Tax ID)",
        "Can't make invoices for previous purchases",
    ]

    const zenVoice = [
        "One-time payment for unlimited invoices",
        "Self-serve invoices",
        "No more customer support",
        "Editable invoices to stay compliant",
        "Invoices for any payment, even past ones"
    ]


    return (
        <section className="my-30 max-md:my-10 space-y-10 text-center p-2">
            <h1 className="text-5xl max-md:text-2xl text-gray-700 font-extrabold tracking-tight">
                Why pay Stripe for a PDF?
            </h1>
            <div className="flex gap-4 max-md:flex-col max-md:gap-3">
                <div className="bg-red-100 p-12 max-md:p-6 flex-1 rounded-lg m-4 max-md:m-2 space-y-2">
                    <h1 className="font-bold text-lg text-start text-red-700">Stripe invoices</h1>
                    {
                        stripeInvoices.map((item, index) => (
                            <div key={index} className="flex text-red-700 items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                                </svg>
                                <p>{item}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="bg-green-100 flex-1 p-12 max-md:p-6 rounded-lg m-4 max-md:m-2 space-y-2">
                    <h1 className="font-bold text-lg text-start text-green-700">ZenVoice</h1>
                    {
                        zenVoice.map((item, index) => (
                            <div key={index} className="flex text-green-700 items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                </svg>

                                <p>{item}</p>
                            </div>
                        ))
                    }
                </div>



            </div>

            <div className="flex flex-col items-center justify-center gap-6 max-md:gap-4 p-2">
                <FiveStars />

                <div className="space-y-4 text-center">
                    <p className="max-md:text-sm">
                        <span className="bg-yellow-100/50 px-1">I don't want to pay Stripe $2 for every invoice.</span> I don't want to <br /> spend 10 minutes manually crafting every invoice either. <br />
                    </p>
                    <p className="max-md:text-sm">
                        Zenvoice solved this problem once and for all. The app is <br /> simple, but it nails the job perfectly.</p>
                </div>

                <div className="flex gap-3 max-md:flex-col max-md:items-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                        </div>
                    </div>
                    <div className="flex items-start max-md:items-center max-md:text-center flex-col ">
                        <h1>
                            Dan kulkov
                        </h1>
                        <p className="text-sm">
                            23.1k followers on X
                        </p>
                    </div>
                </div>

            </div>


        </section>
    )
}