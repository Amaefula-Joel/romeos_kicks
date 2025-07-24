import React from 'react';
import '../styles/loader.css';

const Loader = () => {
    const text = "ROMEOS  KICKS";

    return (
        <div className="loader-container">
            <div className="loader-text">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{ animationDelay: `${index * 0.15}s` }}
                        className="fade-letter"
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Loader;