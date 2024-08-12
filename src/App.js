import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import ScrollToTop from './components/scrolltotop';
import HomePage from './pages/homePage';
import LanguageDetails from './pages/languages';
import AnimatedText from './pages/animation';
import { IoLogoWhatsapp } from 'react-icons/io';
function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/learn/:lang' element={<LanguageDetails/>}/>
        <Route path='/animate' element={<AnimatedText/>}/>
      </Routes>
    </Router>
    <div className="p-2 fixed bottom-6 right-6 border-2 rounded-full border-green-500 bg-white "><IoLogoWhatsapp className='text-green-500' style={{fontSize:'2rem'}}/></div>
    </>
  );
}

export default App;
