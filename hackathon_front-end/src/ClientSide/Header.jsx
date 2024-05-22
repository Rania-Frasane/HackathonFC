// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import Feature from './Feature';
import Hero from './Hero';
import Testimonials from './testimonials';
// import Testimonial from './Testimonial';

export default function Header() {
  return (
    <>
      <section className="w-full py-4 md:py-24 " >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col  space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Potential with Our Online Learning Platform
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 py-20">
                  Explore a vast library of courses, connect with expert instructors, and transform your skills at your
                  own pace. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, id ab. Iure, molestias voluptatibus. Architecto eveniet unde cupiditate molestias quod, voluptas, numquam in delectus, reiciendis commodi libero magni consectetur nostrum!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="#"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="550"
              src="https://thestandardcio.com/wp-content/uploads/sites/2/2022/09/Software-a-a-S-800x400.jpg"
              width="550"
            />
            {/* <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last h-[550px]" >
<Hero/>
         </div> */}
          </div>
        </div>
      </section>
      {/* <Testimonial/> */}
      <Feature />
      <Testimonials />
    </>
  );
}
