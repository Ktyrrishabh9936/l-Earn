import './App.css';
import WhyChooseUs from './components/chooseUs';
import ContactForm from './components/contactUs';
import Training from './components/homesections/Exam';
import NewCareers from './components/homesections/newCareers';
import HomeDetails from './components/homesections/welcomeSection';
import MainSection from './components/MainheaderSecton';
import Navbar from './components/navigation';
import Testimonials from './components/testimonials';

function App() {
  return (
    <>
    <Navbar/>
    <MainSection/>
    <div className=' bg-white relative -top-16  rounded-[4rem] text-center text-black pt-10 flex flex-col justify-center items-center space-y-20 '>
    <HomeDetails/>
    <NewCareers/>
    <Training/>
    </div>
    <WhyChooseUs/>
    <Testimonials/>
    {/* <ContactForm/> */}

    </>
  );
}

export default App;
