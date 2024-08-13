import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import ScrollToTop from './components/scrolltotop';
import HomePage from './pages/homePage';
import LanguageDetails from './pages/languages';
import AnimatedText from './pages/animation';
import { IoLogoWhatsapp } from 'react-icons/io';
function App() {
  return (
    <div >
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/learn/:lang' element={<LanguageDetails/>}/>
        <Route path='/animate' element={<AnimatedText/>}/>
      </Routes>
    </Router>
    <a href={`whatsapp:contact=8920743393@s.whatsapp.com&message="Hello Learn Academy,I'd like to chat with you"`} className="p-2 fixed z-30 bottom-6 right-6 border-2 rounded-full border-green-500 bg-white "><IoLogoWhatsapp className='text-green-500' style={{fontSize:'2rem'}}/></a>
    </div>
  );
}

export default App;
