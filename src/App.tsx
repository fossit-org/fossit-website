import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import WhatIsOSS from './components/Sections/WhatIsOSS';
import WhereIsItUsed from './components/Sections/WhereIsItUsed';
import HowItHelps from './components/Sections/HowItHelps';
import HowFossitHelps from './components/Sections/HowFossitHelps';
import HowItWorks from './components/Sections/HowItWorks';
import Community from './components/Sections/Community';
import CallToAction from './components/Sections/CallToAction';
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
