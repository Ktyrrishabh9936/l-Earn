import Footer from '../components/Footer';
import Navbar from '../components/navigation';
import LanguagePage from '../components/languagesection/languagePage';
import CourseInfo from '../components/languagesection/courseInfo';
import { useParams } from 'react-router-dom';

function LanguageDetails() {
  const params = useParams();
  const lang = params.lang;
  return (
    <>
    <Navbar />
    <LanguagePage language={lang}/>
    <div className=' bg-white relative -top-16  rounded-[4rem]  text-black pt-14  space-y-20 '>
      <CourseInfo language={lang}/>
    </div>
    <Footer/>
    </>
  );
}

export default LanguageDetails;