import { Article } from '../../services/interfaces/Article';
import './BlogPage.css';

interface PropArticle {
    articles: Article[];
}

export default function BlogPage(props: PropArticle) {

    const { articles } = props;
    

    return (
        <>
            <h1>Blog Page</h1>

            {articles &&
                articles.map((article: Article, index: number) => (
                    <div key={index}>
                        <h2> Auteur : {article.author} </h2>
                        <h2> Titre : {article.title} </h2>
                        <h2> Message : {article.description} </h2>
                    </div>
                ))
            }
        </>
    )
}
