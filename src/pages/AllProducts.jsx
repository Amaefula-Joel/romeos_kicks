import { useState, useEffect } from 'react';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

import Loader from '../components/Loader';

import ProductGrid from '../components/ProductGrid';

import { allProducts } from '../data/allProducts';

export default function AllProducts() {
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
                    <ProductGrid title="All Products" products={allProducts} />
                    <Contact />
                    <Footer />
                </>
            )}
        </>
    );
}