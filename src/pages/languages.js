import Footer from '../components/Footer';
import Navbar from '../components/navigation';
import LanguagePage from '../components/languagesection/languagePage';
import CourseInfo from '../components/languagesection/courseInfo';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function LanguageDetails() {
  const params = useParams();
  const lang = params.lang;
  const elementRef = useRef(null);
  // State to store the height
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Set the height after the component mounts
    if (elementRef.current) {
      setHeight(elementRef.current.clientHeight);
    }
  }, []);
  return (
    <>
    <Navbar />
    <LanguagePage language={lang} height={height}/>
    <div className=' bg-white relative -top-16  rounded-[4rem]  text-black pt-14  space-y-20 '>
      <CourseInfo language={lang} elementRef={elementRef}/>
    </div>
    <Footer/>
    </>
  );
}

export default LanguageDetails;