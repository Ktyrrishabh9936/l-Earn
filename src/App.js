import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import ScrollToTop from './components/scrolltotop';
import HomePage from './pages/homePage';
import LanguageDetails from './pages/languages';
import { IoLogoWhatsapp } from 'react-icons/io';
import PolicyPage from './pages/Policy';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div >
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/learn/dutch' element={<LanguageDetails lang='dutch'/>}/>
        <Route path='/learn/spanish' element={<LanguageDetails lang='spanish'/>}/>
        <Route path='/learn/english' element={<LanguageDetails lang='english'/>}/>
        <Route path='/learn/japanese' element={<LanguageDetails lang='japanese'/>}/>
        <Route path='/learn/chinese' element={<LanguageDetails lang='chinese'/>}/>
        <Route path='/ourPolicy' element={<PolicyPage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </Router>
    <a href={`https://wa.me/918920743393?text=${encodeURIComponent("Hello Learn Academy Team, I'd like to chat with you")}`} className="p-2 fixed z-30 bottom-6 right-6 border-2 rounded-full border-green-500 bg-white "><IoLogoWhatsapp className='text-green-500' style={{fontSize:'2rem'}}/></a>
    </div>
  );
}

export default App;
