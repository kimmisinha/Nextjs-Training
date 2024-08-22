import { getAvailableNewsYears, getNewsForYear } from "@/components/lib/news";
import NewsList from "@/components/news-list";

export default function FilteredNewsPage({params}){
    const newsyear=params.year
    const news=getNewsForYear(newsyear)
    return <>
    <NewsList news={news}/>
    </>
}