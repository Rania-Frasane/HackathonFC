import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://1and5tech.com/wp-content/uploads/2023/05/1-2-770x400.jpg",
  "https://img.freepik.com/premium-photo/professional-team-programmer-working-project-software-development-computer-it-company_229060-90.jpg",
  "https://th.bing.com/th/id/OIP.3VLrmWtcDuTo6gOKpraqiQHaE8?w=600&h=400&rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/R.f311d3fc956f194453ef9b334535673e?rik=hlwDj20KmJvpFQ&riu=http%3a%2f%2fboomtech.co%2fwp-content%2fuploads%2f2017%2f02%2fboom-fb-link.jpg&ehk=FKYwvK3yZM4ObDoW%2f0eY9KmTxUQvF4xxftC0Sny%2bBpg%3d&risl=&pid=ImgRaw&r=0"
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div id="custom-controls-gallery" className="relative w-full " data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <AnimatePresence initial={false}>
          {images.map((img, index) => (
            activeIndex === index && (
              <motion.div
                key={index}
                className="absolute block w-full h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              >
                <img
                  src={img}
                  className="absolute block w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center pt-4">
        <button
          type="button"
          className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
