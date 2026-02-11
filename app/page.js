import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="http://localhost:3000/week-2">Week 2</Link>

        <Link href="http://localhost:3000/week-3">Week 3</Link>

        <Link href="http://localhost:3000/week-4">Week 4</Link>

        <Link href="http://localhost:3000/week-5">Week 5</Link>

        <Link href="http://localhost:3000/week-6">Week 6</Link>
      </div>
    </main>
  );
}
