import Header from "./components/header";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <h2>Blog Post</h2>
        <Link href="/about">ABOUT PAGE</Link>
        <Link href="/blog/post-1">Post_1</Link>
        <Link href="/blog/post-2">Post_2</Link>
      </p>
    </main>
  );
}
