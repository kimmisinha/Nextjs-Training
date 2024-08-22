import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
  let newsSlug = params.Slug;
  const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === newsSlug);
  if(!newsItem){
    notFound()
  }
  return (
    <article className="news-article">
      <header>
        {/* <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/> */}
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>

        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <h1>News Page</h1>
      <p>{newsItem.content}</p>
    </article>
  );
}
