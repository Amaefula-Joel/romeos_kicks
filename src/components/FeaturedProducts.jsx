import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { products } from '../data/products';

import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/captions.css";

import '../styles/featuredProduct.css';

const categories = ['All', ...new Set(products.map(p => p.category))];

export default function FeaturedProducts() {
    const isotope = useRef(null);
    const [filterKey, setFilterKey] = useState('*');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        const grid = document.querySelector('.product-grid');

        isotope.current = new Isotope(grid, {
            itemSelector: '.product-item',
            layoutMode: 'fitRows',
        });

        imagesLoaded(grid, () => { });

        return () => isotope.current?.destroy();
    }, []);

    useEffect(() => {
        if (filterKey === '*') {
            isotope.current?.arrange({ filter: '*' });
        } else {
            isotope.current?.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    // Filtered products for lightbox navigation
    const filteredProducts = filterKey === '*'
        ? products
        : products.filter(product => product.category === filterKey);

    // Prepare slides for Lightbox
    const slides = filteredProducts.map(product => ({
        src: product.image,
        title: product.name,
        description: product.price,
    }));

    return (
        <section id="featured" className="pt-12 pb-16 px-6  bg-white">
            <div className="max-w-6xl mx-auto">
                <div className='flex flex-col items-center mb-10'>
                    <h2 className="sm:text-4xl text-3xl font-bold text-center mb-3">Featured Products</h2>
                    <div className='h-1 w-16 bg-red-600'></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilterKey(cat === 'All' ? '*' : cat)}
                            className={`px-4 py-2 rounded-full border cursor-pointer transition select-none ${filterKey === (cat === 'All' ? '*' : cat)
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
                    {products.map((product) => {
                        // Find index in filteredProducts for correct navigation
                        const filteredIdx = filteredProducts.findIndex(p => p.id === product.id);
                        return (
                            <div
                                key={product.id}
                                className={`product-item mb-2 ${product.category}`}
                            >
                                <div className='bg-gray-100 p-4 rounded-lg'>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover rounded mb-4 cursor-pointer"
                                        onClick={() => {
                                            setLightboxIndex(filteredIdx);
                                            setLightboxOpen(true);
                                        }}
                                    />
                                    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                                    <p className="text-red-600 text-base font-semibold">{product.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides}
                index={lightboxIndex}
                plugins={[Captions]}
                captions={{
                    descriptionTextAlign: "center",
                    titleTextAlign: "center",
                }}
                // styles={{
                //     image: {
                //         maxHeight: "70vh", 
                //         maxWidth: "400px", 
                //         objectFit: "contain", 
                //         background: "#fff", 
                //     }
                // }}

                on={{
                    view: ({ index }) => setLightboxIndex(index),
                }}
            />
        </section>
    );
}