import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Lightbulb, GitBranch, Rocket, Mail } from 'lucide-react';
import { VerticalCard } from '../components/Card';

export default function Developers() {
  const opportunities = [
    {
      title: 'Contribute to Projects',
      icon: <Code className="size-12" />,
      desc: 'Work on exciting open-source projects and make a real impact in the FOSS community.',
    },
    {
      title: 'Share Your Ideas',
      icon: <Lightbulb className="size-12" />,
      desc: 'Have an innovative project idea? We can help you bring it to life and connect you with contributors.',
    },
    {
      title: 'Collaborate & Learn',
      icon: <GitBranch className="size-12" />,
      desc: 'Work alongside experienced developers and learn best practices in open-source development.',
    },
    {
      title: 'Get Featured',
      icon: <Rocket className="size-12" />,
      desc: 'Showcase your project on FOSSIT and gain visibility in the open-source community.',
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
              FOSSIT For Developers
            </h1>
            <p className="text-xl text-[var(--text-2)] max-w-3xl mx-auto">
              Build, collaborate, and innovate with the FOSSIT developer community
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              What We Offer
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              Opportunities for developers to grow, contribute, and showcase their work
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

      {/* How to Get Involved Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-6">How to Get Involved</h2>
            <div className="space-y-6 text-[#DBF9F0] text-lg">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#56E39F] text-[#061523] flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-[#B3DEC1] font-semibold mb-2">Share Your Project Idea</h3>
                  <p>Have a project in mind? Reach out to us and we'll help you get started with resources and guidance.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#56E39F] text-[#061523] flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-[#B3DEC1] font-semibold mb-2">Get Your Project Featured</h3>
                  <p>Want your project showcased on FOSSIT? We highlight innovative open-source projects and help them gain visibility.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#56E39F] text-[#061523] flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-[#B3DEC1] font-semibold mb-2">Help Build FOSSIT</h3>
                  <p>Want to contribute to making FOSSIT better? Join our development team and help shape the future of our platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0B2332] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <div className="text-[#59A5D8] mb-6 flex justify-center">
              <Mail className="size-16" />
            </div>
            <h2 className="text-3xl md:text-4xl text-[#59A5D8] mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-[#91E5F6] text-lg max-w-2xl mx-auto mb-6">
              Whether you have an idea for a new project, want to contribute to existing ones, or help us improve FOSSIT, 
              we'd love to hear from you.
            </p>
            <div className="space-y-2">
              <p className="text-[#59A5D8] font-semibold text-xl">Get in Touch</p>
              <a 
                href="mailto:developer@fossit.co.in"
                className="text-[#91E5F6] hover:text-[#59A5D8] transition-colors text-lg font-mono"
              >
                developer@fossit.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
