import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ScrollMotion from './components/homesections/ScrollAnimate';
import LanguageDetails from './pages/lanuages';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/scroll' element={<ScrollMotion/>}/>
        <Route path='/languages' element={<LanguageDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
