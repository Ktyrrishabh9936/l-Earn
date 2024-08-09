import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import LanguageDetails from './pages/lanuages';
import ScrollToTop from './components/scrolltotop';
function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/learn/:lang' element={<LanguageDetails/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
