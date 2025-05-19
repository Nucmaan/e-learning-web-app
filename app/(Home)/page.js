import Testimonials from '../../Components/Testimonials';
import SubscriptionPlans from '../../Components/SubscriptionPlans';
import FeaturedCourses from '../../Components/FeaturedCourses';
 import Hero from '../../Components/Hero';
import Benefits from '@/Components/Benefits';
import HowItWorks from '@/Components/HowItWorks';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCourses />
      <Benefits />
      <HowItWorks />
      <SubscriptionPlans />
      <Testimonials />
    </main>
  )
}
