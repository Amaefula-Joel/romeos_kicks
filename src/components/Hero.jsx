import sportingShoe from '../assets/sporting_shoe_image.jpg';

export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white min-h-[400px] h-[90vh] flex items-center justify-center px-6 md:px-12">
            {/* Background Image */}
            <img
                src={sportingShoe}
                alt="Shoes"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* Overlay Content */}
            <div className="relative z-10 max-w-4xl w-full sm:text-left text-center ">
                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Step Into Style With <br />
                        <span className="mt-1 italic inline-block bg-gradient-to-r text-red-600 bg-clip-text drop-shadow-lg tracking-wide">
                            Romeo Kicks
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6">Discover quality shoes for every occasion</p>
                    <a
                        href="#contact"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg transition"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
}
