import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({params}){
    const newItemSlug=params.slug
    const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === newItemSlug);
  if(!newsItem){
    notFound()
  }
    return (
        <>
        <div className="fullscreen-iamge">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
        </div>
        </>
    )
}