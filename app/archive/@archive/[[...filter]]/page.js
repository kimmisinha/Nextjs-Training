import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/components/lib/news";
import NewsList from "@/components/news-list";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter ? filter[0] : null;
  const selectedMonth = filter ? filter[1] : null;

  let news;
  let link = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    link = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    link = []; // Clear links since we're already filtering by month
  }

  let newscontent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newscontent = <NewsList news={news} />;
  }
//   if (
//     (selectedYear && !getAvailableNewsYears().includes(selectedYear)) ||
//     (selectedMonth &&
//       selectedYear &&
//       !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
//   ) {
//     throw new Error("Invalid filter");
//   }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {link.map((monthOrYear) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${monthOrYear}`
                : `/archive/${monthOrYear}`;
              return (
                <li key={monthOrYear}>
                  <Link href={href}>{monthOrYear}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newscontent}
    </>
  );
}
