import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <nav className="flex gap-6 text-lg">
          <Link href="/events" className="text-blue-600 hover:text-blue-800 font-medium">
            Events
          </Link>
          <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
            About
          </Link>
        </nav>

        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Events</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover and join amazing events in your area
          </p>
          
          <Link
            href="/events"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 inline-flex"
          >
            Browse Events
          </Link>
        </div>
      </main>
    </div>
  );
}
