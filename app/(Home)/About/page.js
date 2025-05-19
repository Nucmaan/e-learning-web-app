import React from 'react';
 

const AboutPage = () => {
  const stats = [
    { label: 'Courses', value: '10,000+' },
    { label: 'Students', value: '500,000+' },
    { label: 'Instructors', value: '1,500+' },
    { label: 'Countries', value: '150+' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: '/images/nasri.jpeg',
      bio: 'Former EdTech executive with 15+ years of experience in education technology and online learning.'
    },
    {
      name: 'David Chen',
      role: 'CTO & Co-Founder',
      image: '/images/nasri.jpeg',
      bio: 'Software engineer and architect who previously built learning management systems for major universities.'
    },
    {
      name: 'Amara Okafor',
      role: 'Head of Content',
      image: '/images/nasri.jpeg',
      bio: 'Curriculum development expert with a background in instructional design and educational psychology.'
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Head of Operations',
      image: '/images/nasri.jpeg',
      bio: 'Operations specialist with experience scaling online platforms and improving user experiences.'
    }
  ];

  return (
    <>
       <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white pb-16 pt-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our E-Learning Platform</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're on a mission to transform education and make quality learning accessible to everyone, anywhere.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Founded in 2018, our e-learning platform began with a simple vision: to break down barriers to education and create opportunities for learners worldwide.
                </p>
                <p>
                  What started as a small collection of technology courses has grown into a comprehensive platform offering thousands of courses across dozens of disciplines, from programming and data science to business, arts, and personal development.
                </p>
                <p>
                  Today, we serve hundreds of thousands of students from over 150 countries, connecting them with expert instructors and in-demand skills. Our approach combines cutting-edge technology with proven educational methodologies to deliver engaging, effective learning experiences.
                </p>
                <p>
                  We believe that education is a lifelong journey, and we're committed to supporting learners at every stage of their careers and personal growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-gray-600">
                To empower individuals to reach their full potential through accessible, high-quality education that develops practical skills and fosters lifelong learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3">Accessibility</h4>
                <p className="text-gray-700">We believe education should be available to everyone, regardless of location, background, or circumstances.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3">Quality</h4>
                <p className="text-gray-700">We maintain high standards for our content, instructors, and learning experience to ensure meaningful outcomes.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3">Innovation</h4>
                <p className="text-gray-700">We continuously explore new technologies and teaching methods to enhance the learning experience.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3">Community</h4>
                <p className="text-gray-700">We foster connections between learners and instructors to create a supportive global learning community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="h-64 relative bg-gray-200">
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                      {/* Will be replaced with actual team member images later */}
                      <span className="text-lg font-bold text-blue-800">Team Member Photo</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600 text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
            <p className="text-xl mb-8">
              Start your learning journey today and gain the skills you need to succeed in today's fast-changing world.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/courses" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold">
                Explore Courses
              </a>
              <a href="/register" className="bg-transparent border-2 border-white hover:bg-blue-700 px-8 py-3 rounded-md font-semibold">
                Sign Up Free
              </a>
            </div>
          </div>
        </section>
      </main>
     </>
  );
};

export default AboutPage;
