import { DUMMY_NEWS } from "@/dumy-news"

export default function NewsDetail({params}){   
    const newsSlug=params.slug
    const newsItem=DUMMY_NEWS.find((news)=>news.slug===newsSlug)
    return(
    <article className="news-article">
        <header>
            <img src={`/news/${newsItem.image}`} alt={newsItem.title} />
            <h1>{newsItem.title}</h1>
            <title dateTime={newsItem.date}>{newsItem.date}</title>
        </header>
        <p>{newsItem.content}</p>
    </article>)
}