import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth); //size of browser window

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", checkSize);
        return () => { //cleanup function to prevent memory leak
            window.removeEventListener('resize', checkSize);
        }

    });

    return (
        <>
            <h1>window</h1>
            <h2>{size}</h2>
        </>
    );
};

export default UseEffectCleanup;
