import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-100 py-14 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <div className='flex flex-col items-center mb-5'>
                    <h2 className="sm:text-4xl text-3xl font-bold text-center mb-3">Get in Touch</h2>
                    <div className='h-1 w-16 bg-red-600'></div>
                </div>
                <p className="text-gray-600 mb-8">
                    Have questions or want to place an order? Reach out directly through WhatsApp or Instagram.
                </p>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://wa.me/2348095723573"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>

                    <a
                        href="https://instagram.com/romeos_kicks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 transition"
                    >
                        <FaInstagram size={20} />
                        Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}
