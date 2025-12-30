import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Target, Award, TrendingUp, Mail } from 'lucide-react';
import { VerticalCard } from '../components/Card';

export default function Business() {
  const opportunities = [
    {
      title: 'Strategic Partnership',
      icon: <Users className="size-12" />,
      desc: 'Collaborate with FOSSIT to promote open-source adoption and innovation in the IT industry.',
    },
    {
      title: 'Brand Visibility',
      icon: <Target className="size-12" />,
      desc: 'Gain exposure to a growing community of developers, students, and IT professionals passionate about FOSS.',
    },
    {
      title: 'Event Sponsorship',
      icon: <Award className="size-12" />,
      desc: 'Support our workshops, conferences, and community events to showcase your commitment to open source.',
    },
    {
      title: 'Talent Pipeline',
      icon: <TrendingUp className="size-12" />,
      desc: 'Connect with skilled developers and fresh talent actively engaged in open-source development.',
    },
  ];

  return (
    <div className="bg-[#061523] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-1)] mb-6">
              FOSSIT For Businesses & Sponsors
            </h1>
            <p className="text-xl text-[var(--text-2)] max-w-3xl mx-auto">
              Partner with FOSSIT to drive open-source innovation and community growth
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-6">Why Partner With FOSSIT?</h2>
            <p className="text-[#DBF9F0] text-lg leading-relaxed mb-4">
              Interested in partnering with FOSSIT or sponsoring our initiatives? We welcome collaborations with 
              businesses that share our vision of promoting open-source software. By partnering with FOSSIT, 
              you'll be supporting the growth of the open-source ecosystem while gaining visibility among a 
              vibrant community of developers, students, and IT professionals.
            </p>
            <p className="text-[#DBF9F0] text-lg leading-relaxed">
              Together, we can drive innovation, foster talent, and contribute to a more open and collaborative 
              technological future.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              Discover how your business can benefit from partnering with FOSSIT
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, idx) => (
              <VerticalCard key={idx} icon={opportunity.icon} heading={opportunity.title}>
                {opportunity.desc}
              </VerticalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0B2332] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#59A5D8] mb-6">What You Get</h2>
            <div className="space-y-4 text-[#91E5F6] text-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Logo placement and recognition on our website and promotional materials</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Speaking opportunities at FOSSIT events and conferences</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Social media mentions and digital marketing exposure</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Direct access to our community of talented developers</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Opportunities to host workshops and recruitment events</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Custom partnership packages tailored to your business objectives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <div className="text-[#B3DEC1] mb-6 flex justify-center">
              <Mail className="size-16" />
            </div>
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-4">
              Let's Build Together
            </h2>
            <p className="text-[#DBF9F0] text-lg max-w-2xl mx-auto mb-6">
              Ready to make an impact in the open-source community? We'd love to discuss how we can work 
              together to achieve our shared goals. Contact us to explore partnership opportunities.
            </p>
            <div className="space-y-2">
              <p className="text-[#B3DEC1] font-semibold text-xl">Get in Touch</p>
              <a 
                href="mailto:business@fossit.co.in"
                className="text-[#DBF9F0] hover:text-[#B3DEC1] transition-colors text-lg font-mono"
              >
                business@fossit.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
