export default function GetZenvoiceBtn({extraClass}:{extraClass?:string}) {
    return (
        <button className={`group btn rounded-lg py-5.5 px-18 bg-emerald-600/90  hover:bg-emerald-700 transtion-all duration-200 font-semibold text-white flex ${extraClass}`}>
            Get Zenvoice <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 transition-transform duration-300 group-hover:translate-x-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

        </button>
    )
}