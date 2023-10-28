import React, { useState, useEffect } from 'react';

const items = [
    'Dream Job',
    'Ideal Job',
    'Perfect Job',
    'Aspired Job',
    'Optimal Job',
    'Desired Job',
    'Wanted Job',
    'Favorite Job',
    'Best Job',
    'Perfect Job'
];

function SlidingText() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            {items.map((item, index) => (
                <span key={index} className={`animate-text-slide ${index === currentIndex ? 'visible' : 'hidden'}`}>
                    {item}
                </span>
            ))}
        </>
    );
}

export default SlidingText;
