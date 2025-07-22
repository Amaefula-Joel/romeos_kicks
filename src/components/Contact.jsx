import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted! (Integrate with EmailJS or Formspree later)");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="bg-gray-100 py-16 px-6 md:px-12" id="contact">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                <p className="text-center text-gray-600 mb-10">
                    Have a question or want to order a shoe? Reach out to us!
                </p>
                <form onSubmit={handleSubmit} className="space-y-6 bg-white py-8 md:px-8 px-4  rounded-xl shadow-md">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>

                {/* Optional WhatsApp contact */}
                <div className="text-center mt-6 text-base text-gray-600">
                    Or chat with us directly on{" "}
                    <a
                        href="https://wa.me/2348095723573"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 font-medium underline"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
