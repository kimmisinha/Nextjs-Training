import Header from "./components/header";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <Link href="/about">ABOUT PAGE</Link>
      </p>
    </main>
  );
}
