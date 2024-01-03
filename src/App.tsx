import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home/HomePage'
import BlogPage from './pages/Blog/BlogPage'
import AddArticlePage from './pages/AddArticlePage/AddArticlePage'
import Navbar from './components/Navbar/Navbar'
import NotFoundPage from './services/utils/NotFoundPage'
import { Article } from './services/interfaces/Article'

function App() {

  const [articles, setArticles] = useState<Article[]>([]);

  function handleSubmitArticle(article: Article): void {
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
