import Link from "next/link";
export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((newItem) => (
        <li key={newItem.id}>
          <Link href={`/news/${newItem.slug}`}>
            <img
              src={`/images/news/${newItem.image}`}
              alt={newItem.title}
            ></img>
            <span>{newItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
