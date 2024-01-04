import { ArticleI } from '../../services/interfaces/ArticleI';
import './BlogPage.css';

interface PropArticle {
    articles: ArticleI[];
}

export default function BlogPage(props: PropArticle) {

    const { articles } = props;
    

    return (
        <>
            <h1>Blog Page</h1>

            {articles &&
                articles
                .slice()
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((article: ArticleI, index: number) => {
                    const articleDate = new Date(article.date);

                    return (
                        <div className='article' key={index}>
                            <img height={200} src={article.image} alt="" />
                            <div>
                                <h2>
                                    {article.title} - {articleDate.toLocaleString("fr-FR", {"dateStyle": "full", "timeStyle": "medium"})}
                                </h2>
                                <p>{article.description}</p>
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}
