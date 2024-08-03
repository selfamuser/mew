import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
// import CatalogPage from './pages/CatalogPage';
import ComingSoon from './pages/ComingSoon';
import ContactUsPage from './pages/ContactUsPage';
import Home from './pages/Home';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/catalog' element={<ComingSoon />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
