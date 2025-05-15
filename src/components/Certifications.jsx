import { useState, useEffect } from 'react';
import AWSsolutionArchitect from '../assets/AWS solution architect associate.png';
import BitsAndBytes from '../assets/BitsAndBytesCN.png';
import CloudComputing from '../assets/Cloud Computing.png';
import DevOps from '../assets/DevOps Certificate.png';
import MarketingAnalytics from '../assets/Marketing Analytics.png';
import UIUX from '../assets/UIUX.png';
import Python from '../assets/VItyarthi Python certificate.png';

const certificates = [
    {
        id: 1,
        title: "AWS Soltion Architect Associate",
        image: `${AWSsolutionArchitect}`,
    },
    {
        id: 2,
        title: "Coursera Bits and Bytes of Computer Networking",
        image: `${BitsAndBytes}`,
    },
    {
        id: 3,
        title: "NPTEL Cloud Computing",
        image: `${CloudComputing}`,
    },
    {
        id: 4,
        title: "DevOps Certificate",
        image: `${DevOps}`,
    },
    {
        id: 5,
        title: "NPTEL Marketing Analytics",
        image: `${MarketingAnalytics}`,
    },
    {
        id: 6,
        title: "Adobe UI/UX Graphic Design Certification Program",
        image: `${UIUX}`,
    },
    {
        id: 7,
        title: "Python Essentials",
        image: `${Python}`,
    }
];

export const Certifications = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // 5 seconds

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handlePrevious = () => {
        setCurrentIndex(current => 
            current === 0 ? certificates.length - 1 : current - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex(current => 
            current === certificates.length - 1 ? 0 : current + 1
        );
    };

    return (
        <div className="py-8 px-4 max-w-6xl mx-auto" id="certifications">
            <h2 className="text-4xl font-bold text-center mb-8 underline text-zinc-200">
                My Certifications
            </h2>
            
            <div className="flex items-center justify-center gap-4">
                <button 
                    className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={handlePrevious}
                    aria-label="Previous certificate"
                >
                    ←
                </button>

                <div className="width-full max-w-2xl">
                    <h3 className="text-xl font-semibold text-center mb-4 text-stone-300">
                        {certificates[currentIndex].title}
                    </h3>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img 
                            src={certificates[currentIndex].image}
                            alt={certificates[currentIndex].title}
                            className="object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                <button 
                    className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={handleNext}
                    aria-label="Next certificate"
                >
                    →
                </button>
            </div>
        </div>
    );
};