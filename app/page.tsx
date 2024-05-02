import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="py-3 px-3 flex items-center flex-col h-full justify-center">
            <h1 className="text-3xl text-indigo-500 font-bold mb-2">
                Hello Discord Clone
            </h1>
            <Link href="/main">
                <Button variant={"ghost"}>Click Me !</Button>
            </Link>
        </div>
    );
}
