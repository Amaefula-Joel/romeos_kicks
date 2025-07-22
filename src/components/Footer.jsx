import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo / About */}
                <div>
                    <h3 className="script text-3xl font-bold mb-3 italic">Romeos Kicks</h3>
                    <p className="text-sm text-gray-400">
                        Stylish shoes. Affordable prices. Delivered with care.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#hero" className="hover:text-red-400">Home</a></li>
                        <li><a href="#featured" className="hover:text-red-400">Featured</a></li>
                        <li><a href="#testimonials" className="hover:text-red-400">Testimonials</a></li>
                        <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4 text-xl text-gray-400">
                        <a href="https://wa.me/2348095723573" className="hover:text-red-400"><FaWhatsapp /></a>
                        <a href="https://instagram.com/romeos_kicks" target="_blank" rel="noopener noreferrer" className="hover:text-red-400"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4 border-gray-700">
                &copy; {new Date().getFullYear()} <span className="text-gray-300">Romeos Kicks</span> . All rights reserved.
            </div>
        </footer>
    );
}
