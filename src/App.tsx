import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsOSS from './components/WhatIsOSS';
import WhereIsItUsed from './components/WhereIsItUsed';
import HowItHelps from './components/HowItHelps';
import HowFossitHelps from './components/HowFossitHelps';
import HowItWorks from './components/HowItWorks';
import Community from './components/Community';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      <Navbar />
      <Hero />
      <WhatIsOSS />
      <WhereIsItUsed />
      <HowItHelps />
      <HowFossitHelps />
      <HowItWorks />
      <Community />
      <CallToAction />
      <Footer />
    </div>
  );
}
