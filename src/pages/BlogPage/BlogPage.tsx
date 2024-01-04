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
                articles.map((article: ArticleI, index: number) => (
                    <div className='article' key={index}>
                        <img height={200} src={article.image} alt="" />
                        <div>
                            <h2>{article.title} </h2>
                            <p> {article.description} </p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
