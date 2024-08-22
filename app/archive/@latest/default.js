import { getLatestNews } from "@/components/lib/news";
import NewsList from "@/components/news-list";

export default function LatestNewsPage() {
  const LatestNews = getLatestNews();
  return (
    <>
      <h1>LatestNewsPage Page</h1>
      <NewsList news={LatestNews} />
    </>
  );
}
