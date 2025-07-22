import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/testimonial.css';

import { testimonials } from '../data/testimonials';

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 bg-gray-100 px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                

                <div className='flex flex-col items-center mb-10'>
                    <h2 className="sm:text-4xl text-3xl font-bold mb-3">What Our Customers Say</h2>
                    <div className='h-1 w-16 bg-red-600'></div>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
                                <p className="text-gray-700 italic mb-6">“{t.message}”</p>
                                <div className="flex items-center gap-4 justify-center">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold">{t.name}</p>
                                        <p className="text-sm text-gray-500">{t.title}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
