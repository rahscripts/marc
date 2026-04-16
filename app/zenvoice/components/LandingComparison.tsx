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
           <section>
                        <h1 className="text-5xl text-gray-800 font-extrabold tracking-tight">
                            Why pay Stripe for a PDF?
                        </h1>
                         <div>
        
                         </div>  
        
                      <div>
                        <FiveStars />
        
                        <p>
                            I don't want to pay Stripe $2 for every invoice. I don't want to spend 10 minutes manually crafting every invoice either.
        
        Zenvoice solved this problem once and for all. The app is simple, but it nails the job perfectly.</p>   
        
         <div>
             <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                </div>
              </div>
              <div>
                <h1>
                    Dan kulkov
                </h1>
                <p>
                    23.1k followers on X
                </p>
              </div>
         </div>
        
                     </div>
        
        
                    </section>
    )
}