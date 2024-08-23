import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsDetailsPage({ params }) {
  let newsSlug = params.Slug;

  console.log("newsSlug",newsSlug)
  const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === newsSlug);
  console.log("newsItem",newsItem)

  if(!newsItem){
    notFound()
  }
  return (
    <article className="news-article">
      <header>
        
        <Link href={`/news/${newsItem.slug}/image`}>
        {/* <image src={`/images/news/${newsItem.image}`} alt={newsItem.title}></image> */}
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>

        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <h1>News Page</h1>
      <p>{newsItem.content}</p>
    </article>
  );
}
