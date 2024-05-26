
import './App.scss'
import { NewsProvider } from './context/NewsState'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import News from './components/News/News';
import Header from './components/Header/Header';
import FormNews from './components/FormNews/FormNews';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
    <NewsProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/News" element={<News />} />
        <Route path="/FormNews" element={<FormNews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </NewsProvider>
  </div>
  )
}

export default App
