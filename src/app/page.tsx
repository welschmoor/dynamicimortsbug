import Link from "next/link";

export default function Home() {
  return (
    <main className="relative text-4xl flex flex-col justify-center items-center h-screen gap-10">
      <span className="text-gray-400">Always clear cache before navigating</span>
      <Link href={"/colorpage"} className="block">
        Go to color page | normal &gt;
      </Link>
      <Link href={"/colorpage2"} className="block">
        Go to color page | dynamic &gt;
      </Link>
    </main>
  );
}
