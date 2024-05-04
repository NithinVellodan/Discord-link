import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center text-white">
        {/* <Image
          src="/discord_logo.png"
          alt="Discord Logo"
          width={100}
          height={100}
        /> */}
        <h1 className="text-4xl font-bold mt-6 mb-4">
          &quot; Please Click the Link Moluu ❤️❤️❤️❤️ &quot;
        </h1>
        <p className="text-lg mb-8">Click faster</p>
        <Link href="/main">
          <Button
            // variant="solid"
            className="px-8 py-3 bg-white text-indigo-500 rounded-full hover:bg-indigo-400 hover:text-white transition duration-300 ease-in-out"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
