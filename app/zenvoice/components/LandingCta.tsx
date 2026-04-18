import Review from "./ui/Review";
import GetZenvoiceBtn from "./ui/GetZenvoiceBtn";

export default function LandingCta() {
    return (
        <section className="my-30 max-w-7xl mx-auto flex items-center justify-center px-4">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center justify-center text-center gap-10">
                    <h1 className="text-5xl text-gray-900 font-extrabold">Ditch Stripe Invoicing fee and <br /> focus on your startup
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl">
                    Let your customers generate, edit, and download <br /> invoices themselves.
                    </p>
                    <GetZenvoiceBtn extraClass="w-fit"/>
                </div>
                <div className="flex max-md:flex-col  gap-10 max-md:gap-20">
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </section>
    )
}