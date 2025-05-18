import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Abigail P.',
      image: '/images/nasri.jpeg',
      quote: 'I have a full-time job and 3 kids. I needed the flexibility offered by Coursera Plus in order to achieve my goals. My Coursera Plus subscription motivated me to keep learning.'
    },
    {
      id: 2,
      name: 'Shi Jie F.',
      image: '/images/nasri.jpeg',
      quote: 'Coursera Plus keeps me motivated to learn. With each course, I\'m getting more value out of my subscription. I can access almost anything with Coursera Plus!'
    },
    {
      id: 3,
      name: 'Inés K.',
      image: '/images/nasri.jpeg',
      quote: 'I really appreciate the flexibility I get with Coursera Plus. I can try any course and switch to another one for no additional cost. This motivates me to learn even more!'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12">What subscribers are achieving through learning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="ml-4 text-lg font-medium">{testimonial.name}</h3>
              </div>
              <p className="text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 