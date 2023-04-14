import './styles/reset.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Sales from './pages/sales/Sales';
import Contacts from './pages/contacts/Contacts';


import Footer from './components/footer/Footer';

import ScrollToTop from './utils/scrollToTop';
import HeaderTop from './components/headerTop/HeaderTop';



function App() {
  return (
    <>
      <Router>

        <ScrollToTop />
        <HeaderTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;
