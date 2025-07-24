import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero'
// import FeaturedProducts from '../components/FeaturedProducts'
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyBuyFromUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import Loader from '../components/Loader';


import { featuredProducts } from '../data/featuredProducts';


function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Hero />

                    <ProductGrid title="Featured Products" products={featuredProducts} />
                    <div className="text-center mb-12">
                        <Link
                            to="/all-products"
                            className="inline-block border-2 border-red-500 bg-red-500 hover:bg-transparent text-white hover:text-red-500 px-7 py-3 rounded-br-2xl rounded-tl-2xl text-lg font-semibold transition"
                        >
                            See More Products
                        </Link>
                    </div>

                    <Testimonials />
                    <WhyUs />
                    <Contact />
                    <Footer />
                </>
            )}
        </>
    );
}

export default Home;
