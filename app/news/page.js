import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
export default function NewsDetailsPage() {
  return(
    <>
    <h1>News Page</h1>
    <ul className="news-list">
      {/* <li>
        <Link href="/news/First-news">First News Item</Link>
      </li>
      <li>
        <Link href="/news/second-news">second News Item</Link>
      </li>
      <li>
        <Link href="/news/Third-news">Third News Item</Link>
      </li> */}

      {DUMMY_NEWS.map(newItem=>
        (<li key={newItem.id}>
        <Link href={`/news/${newItem.slug}`}>
        <img src={`/images/news/${newItem.image}`} alt={newItem.title}></img>
        <span>{newItem.title}</span>
        </Link>
      </li>))}

    </ul>
  </>
  );
 
}
