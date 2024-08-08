import Footer from '../components/Footer';
import Navbar from '../components/navigation';
import LanguagePage from '../components/languagesection/languagePage';
import CourseInfo from '../components/languagesection/courseInfo';

function LanguageDetails() {
  return (
    <>
    <Navbar/>
    <LanguagePage/>
    <div className=' bg-white relative -top-16  rounded-[4rem] text-center text-black pt-10 flex flex-col justify-center items-center space-y-20 '>
      <CourseInfo/>
    </div>
    <Footer/>
    </>
  );
}

export default LanguageDetails;