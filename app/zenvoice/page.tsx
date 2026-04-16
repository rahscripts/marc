import LandingHeader from "./components/LandingHeader";
import GetZenvoiceBtn from "./components/ui/GetZenvoiceBtn";




export default function ZenvoicePage() {
    return (
        <div className="max-w-5xl mx-auto w-full">
            <LandingHeader />
            <section>
                <h1 className="text-4xl font-bold">Zenvoice</h1>
                <p className="mt-4">Zenvoice landing page content goes here.</p>
                <GetZenvoiceBtn />
            </section>
        </div>
    )
}