import WhyChooseUs from '../components/chooseUs';
import ContactForm from '../components/contactUs';
import Footer from '../components/Footer';
import Training from '../components/homesections/Exam';
import NewCareers from '../components/homesections/newCareers';
import HomeDetails from '../components/homesections/welcomeSection';
import MainSection from '../components/MainheaderSecton';
import Navbar from '../components/navigation';
import Testimonials from '../components/testimonials';
import { Toaster } from 'react-hot-toast';

function HomePage() {

  return (
    <>
    
    <Navbar/>
    <Toaster position='top-center' reverseOrder={false}/>
    <MainSection/>
    <div className=' bg-white relative -top-16  rounded-[4rem] text-center text-black pt-10 flex flex-col justify-center items-center space-y-20 '>
    <HomeDetails/>
    <NewCareers/>
    <Training/>
    </div>
    <WhyChooseUs/>
    <Testimonials/>
    <div className=' bg-white relative -top-16  rounded-[4rem]  text-black pt-10 flex flex-col justify-center items-center space-y-20 '>
    <ContactForm/></div>
    <Footer/>
    </>
  );
}

export default HomePage;