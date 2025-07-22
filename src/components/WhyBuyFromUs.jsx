import { whyUs } from "../data/whyUs";

export default function WhyUs() {
    return (
        <section className="bg-white py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="sm:text-4xl text-3xl font-bold mb-3">Why Buy From Us</h2>
                <p className="text-lg text-gray-700 mb-12">Explore our top-rated, customer-favorite products that everyone’s loving!</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {whyUs.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
