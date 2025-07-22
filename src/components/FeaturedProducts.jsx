import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { products } from '../data/products';

const categories = ['All', ...new Set(products.map(p => p.category))];

export default function FeaturedProducts() {
    const isotope = useRef(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        const grid = document.querySelector('.product-grid');

        isotope.current = new Isotope(grid, {
            itemSelector: '.product-item',
            layoutMode: 'fitRows',
        });

        imagesLoaded(grid, () => {

        });

        return () => isotope.current?.destroy();
    }, []);


    useEffect(() => {
        if (filterKey === '*') {
            isotope.current?.arrange({ filter: '*' });
        } else {
            isotope.current?.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    return (
        <section id="featured" className="py-12 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className='flex flex-col items-center mb-10'>
                    <h2 className="text-3xl font-bold text-center mb-3">Featured Products</h2>
                    <div className='h-1 w-16 bg-red-600'></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilterKey(cat === 'All' ? '*' : cat)}
                            className={`px-4 py-2 rounded-full border cursor-pointer transition ${filterKey === (cat === 'All' ? '*' : cat)
                                ? 'bg-red-600 text-white'
                                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="product-grid">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`product-item ${product.category}`}
                        >
                            <div className=''>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded mb-4"
                                />
                                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                                <p className="text-red-600 text-base font-semibold">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}