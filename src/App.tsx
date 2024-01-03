import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import BlogPage from './pages/Blog/BlogPage'
import AddArticlePage from './pages/AddArticlePage/AddArticlePage'
import Navbar from './components/Navbar/Navbar'
import NotFoundPage from './services/utils/NotFoundPage'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} > </Route>
        <Route path="/blog" element={<BlogPage />}> </Route>
        <Route path="/add-article" element={<AddArticlePage />}> </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
