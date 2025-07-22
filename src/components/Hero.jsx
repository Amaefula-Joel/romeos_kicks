import sportingShoe from '../assets/sporting_shoe_image.jpg';

export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white h-[90vh] flex items-center justify-center px-6 md:px-12">
            {/* Background Image */}
            <img
                // src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000"
                src={sportingShoe}
                alt="Shoes"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* Overlay Content */}
            <div className="relative z-10 max-w-4xl w-full sm:text-left text-center ">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Step Into Style</h1>
                    <p className="text-lg md:text-xl mb-6">Discover quality shoes for every occasion</p>
                    <a
                        href="#featured"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg transition"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
}
