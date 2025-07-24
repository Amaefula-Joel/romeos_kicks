import React from 'react';

import shoeBg from "../assets/shoes-background_811396-20046.jpg";
const AllProductHero = () => {
    return (
        <section
            className="w-full h-64 flex items-center justify-center bg-cover bg-center text-white"
            style={{
                backgroundImage: `url(${shoeBg})`,
            }}
        >
            <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-2xl w-full mx-auto">
                    <h1 className="md:text-4xl text-2xl font-bold mb-2">Browse our complete collection of stylish kicks</h1>
                </div>
            </div>
        </section>
    );
};

export default AllProductHero;
