import Testimonials from '../Components/Testimonials';
import SubscriptionPlans from '../Components/SubscriptionPlans';
import CareerBenefits from '../Components/CareerBenefits';
import FeaturedCourses from '../Components/FeaturedCourses';
import LearningStats from '../Components/LearningStats';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCourses />
      <CareerBenefits />
      <LearningStats />
      <SubscriptionPlans />
      <Testimonials />
    </main>
  )
}
