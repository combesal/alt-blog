import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import BlogPage from './pages/BlogPage/BlogPage'
import AddArticlePage from './pages/AddArticlePage/AddArticlePage'
import Navbar from './components/Navbar/Navbar'
import NotFoundPage from './services/utils/NotFoundPage'
import { ArticleI } from './services/interfaces/ArticleI'

function App() {

  const [articles, setArticles] = useState<ArticleI[]>(() => {
    const savedArticles = localStorage.getItem("articles");
    if(savedArticles) {
        const articles: ArticleI[] = JSON.parse(savedArticles);
        return articles;
    } else {
        return [];
    }
});

useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  function handleSubmitArticle(article: ArticleI): void {
    setArticles([ article, ...articles]);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} > </Route>
        <Route path="/blog" element={<BlogPage articles={articles} />}> </Route>
        <Route path="/add-article" element={<AddArticlePage handleSubmitArticle={handleSubmitArticle} />}> </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
