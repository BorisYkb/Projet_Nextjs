'use client';

import { useEffect, useRef } from 'react';
import { Book, Briefcase, HeartPulse, Plane, Shirt, Home, Utensils, Dumbbell } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const categories = [
    { icon: <Book size={28} />, title: 'Technology', students: '497 students' },
    { icon: <HeartPulse size={28} />, title: 'Health and Wellness', students: '763 students' },
    { icon: <Plane size={28} />, title: 'Travel', students: '684 students' },
    { icon: <Briefcase size={28} />, title: 'Finance', students: '451 students' },
    { icon: <Book size={28} />, title: 'Education', students: '433 students' },
    { icon: <Utensils size={28} />, title: 'Food and Beverage', students: '463 students' },
    { icon: <Shirt size={28} />, title: 'Fashion', students: '951 students' },
    { icon: <Home size={28} />, title: 'Home and Garden', students: '194 students' },
    { icon: <Dumbbell size={28} />, title: 'Sports', students: '425 students' },
];

export default function FeaturedCategories() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="max-w-7xl mx-auto my-14 px-6 py-12 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl"
        >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
                <div>
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">Featured <span className='bg-gradient-to-r from-green-600 via-yellow-500 to-yellow-400 text-transparent bg-clip-text'>Categories</span> </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md">
                        Explore a wide range of topics to find the perfect fit for your next event or learning journey.
                    </p>
                </div>
                <button className="mt-6 md:mt-0 bg-gray-900 text-white py-3 px-6 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-700 transition">
                    Explore more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-10 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer hover:scale-[1.02]"
                    >
                        <div className="text-indigo-600">
                            {category.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                            <p className="text-gray-500 text-sm">{category.students}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
