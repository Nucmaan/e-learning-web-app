import React from 'react';
import Image from 'next/image';

const StarRating = () => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg 
    className="w-8 h-8 text-blue-600" 
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.346 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
  </svg>
);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'James K',
      role: 'UX Designer',
      image: '/images/nasri.jpeg',
      quote: 'The courses are well-structured and easy to follow. I learned real-world skills that helped me land a better job!'
    },
    {
      id: 2,
      name: 'Sarah M',
      role: 'Digital Marketer',
      image: '/images/nasri.jpeg',
      quote: 'The platform is super user-friendly, and the instructors are top-notch. Highly recommend for anyone serious about upskilling!'
    },
    {
      id: 3,
      name: 'David L',
      role: 'Content Strategist',
      image: '/images/nasri.jpeg',
      quote: 'I loved the flexibility! I could learn at my own pace and balance it with my full-time job. The certification was a bonus!'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <QuoteIcon />
              </div>
              
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <StarRating />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 