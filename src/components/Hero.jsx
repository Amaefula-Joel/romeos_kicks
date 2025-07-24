import sportingShoe from '../assets/sporting_shoe_image.jpg';

export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white min-h-[340px] h-[90vh] flex items-center justify-center px-6 md:px-12 py-10">
            {/* Background Image */}
            <img
                src={sportingShoe}
                alt="Shoes"
                className="absolute inset-0 w-full h-full object-cover opacity-50 select-none"
            />

            {/* Overlay Content */}
            <div className="relative z-10 max-w-4xl w-full sm:text-left text-center ">
                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-5">
                        Step Into Style With <br />
                        <span className="script mt-1 inline-block text-red-600 drop-shadow-lg tracking-wide">
                            Romeos Kicks
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8">Discover quality shoes for every occasion</p>
                    <a
                        href="#contact"
                        className="inline-block border-2 border-red-500 bg-red-500 hover:bg-transparent text-white hover:text-red-500 px-7 py-3 rounded-br-2xl rounded-tl-2xl text-lg font-semibold transition"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
}
