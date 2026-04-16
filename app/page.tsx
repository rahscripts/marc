import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-10 max-md:p-4 flex items-center flex-col justify-center text-center">
     starting of marc louvin project.
     in this project i will be building landing page of marc louvin to learn frontend. i really love his app design. i'll start with 
     
     <Link className="text-green-600 hover:text-green-700 transition-all duration-300 hover:underline" href={"/zenvoice"}>zenvoice.</Link>
    </div>
  );
}
