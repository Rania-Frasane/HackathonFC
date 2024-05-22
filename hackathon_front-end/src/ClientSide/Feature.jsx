import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

const images = [
    "/photos/intelicom.png",
    "/photos/involys.png",
    "https://www.capgemini.com/fr-fr/wp-content/themes/capgemini2020/assets/images/logo.svg",
    "/photos/mega.png",

];

export default function Feature() {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="w-full  md:py-24 lg:py-4">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Trusted Partners</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        We're proud to work with some of the best companies in the industry.
                    </p>
                </div>
                <motion.div
                    className="grid w-full grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-12"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
                >
                    {images.map((_img, index) => (
                        <Link key={index} className="mx-auto flex w-full items-center justify-center" to="#">
                            <motion.img
                                alt="Company Logo"
                                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center transition-transform duration-300 ease-in-out hover:scale-105"
                                height="70"
                                src={_img}
                                width="140"
                                whileHover={{ scale: 1.05 }}
                                variants={variants}
                            />
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
