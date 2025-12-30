import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Twitter, Linkedin, Instagram, Briefcase } from 'lucide-react';
import { HorizontalCard } from '../components/Card';

export default function Contact() {
  const contactChannels = [
    {
      title: 'X (Twitter)',
      icon: <Twitter className="size-8" />,
      desc: 'Follow us for updates and announcements',
      link: 'https://x.com/@fossitofficial',
      display: 'x.com/@fossitofficial',
    },
    {
      title: 'LinkedIn',
      icon: <Linkedin className="size-8" />,
      desc: 'Connect with us professionally',
      link: 'https://www.linkedin.com/company/fossitinc',
      display: 'linkedin.com/company/fossitinc',
    },
    {
      title: 'Instagram',
      icon: <Instagram className="size-8" />,
      desc: 'Stay updated with our latest content',
      link: 'https://instagram.com/fossitofficial',
      display: 'instagram.com/fossitofficial',
    },
    {
      title: 'General Inquiries',
      icon: <Mail className="size-8" />,
      desc: 'For general questions and information',
      link: 'mailto:info@fossit.co.in',
      display: 'info@fossit.co.in',
    },
    {
      title: 'Business Inquiries',
      icon: <Briefcase className="size-8" />,
      desc: 'For partnerships and sponsorships',
      link: 'mailto:business@fossit.co.in',
      display: 'business@fossit.co.in',
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
              Contact Us
            </h1>
            <p className="text-xl text-[var(--text-2)] max-w-3xl mx-auto">
              Get in touch with FOSSIT for collaboration opportunities, inquiries, or more information
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              Reach Out to Us
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              Choose the best channel for your inquiry
            </p>
          </div>

          <div className="space-y-6">
            {contactChannels.map((channel, idx) => (
              <a 
                key={idx} 
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-[1.02] transition-transform"
              >
                <HorizontalCard icon={channel.icon} heading={channel.title}>
                  <div className="space-y-1">
                    <p>{channel.desc}</p>
                    <p className="font-mono text-sm text-[#59A5D8]">{channel.display}</p>
                  </div>
                </HorizontalCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-4">
              We're Here to Help
            </h2>
            <p className="text-[#DBF9F0] text-lg max-w-2xl mx-auto">
              Whether you have questions, ideas, or want to collaborate with FOSSIT, we'd love to hear from you. 
              Our team is dedicated to promoting open-source software and building a vibrant community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
