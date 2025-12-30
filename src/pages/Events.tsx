import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Users, Presentation, Mail, Sparkles } from 'lucide-react';
import { VerticalCard } from '../components/Card';

export default function Events() {
  const eventTypes = [
    {
      title: 'Workshops',
      icon: <Presentation className="size-12" />,
      desc: 'Hands-on workshops covering various open-source technologies and development practices.',
    },
    {
      title: 'Conferences',
      icon: <Users className="size-12" />,
      desc: 'Large-scale conferences featuring keynotes, talks, and networking opportunities.',
    },
    {
      title: 'Webinars',
      icon: <Calendar className="size-12" />,
      desc: 'Online sessions with industry experts sharing insights on FOSS trends and best practices.',
    },
    {
      title: 'Hackathons',
      icon: <Sparkles className="size-12" />,
      desc: 'Collaborative coding events where developers work together on open-source projects.',
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
              Events & Workshops
            </h1>
            <p className="text-xl text-[var(--text-2)] max-w-3xl mx-auto">
              Join us for hands-on learning, networking, and insights into open-source software
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-6">Stay Connected with FOSSIT Events</h2>
            <p className="text-[#DBF9F0] text-lg leading-relaxed">
              Stay tuned for upcoming events, workshops, and webinars hosted by FOSSIT. These events are 
              designed to provide hands-on experience, networking opportunities, and insights into the latest 
              trends in open-source software. Whether you're looking to learn new skills, connect with the 
              community, or showcase your work, our events have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              Types of Events
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              Explore the different types of events we organize for the community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, idx) => (
              <VerticalCard key={idx} icon={type.icon} heading={type.title}>
                {type.desc}
              </VerticalCard>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0B2332] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#59A5D8] mb-6">What to Expect</h2>
            <div className="space-y-4 text-[#91E5F6] text-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Hands-on experience with the latest open-source technologies and tools</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Networking opportunities with industry professionals and community members</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Insights from experienced speakers and mentors in the FOSS community</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Collaborative learning environment with fellow developers and enthusiasts</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Certificates of participation and recognition for active contributors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <div className="mb-6">
              <div className="inline-block px-6 py-2 bg-[#B3DEC1] text-[#061523] rounded-full font-semibold text-lg">
                Coming Soon
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-4">
              Event Calendar & Registration
            </h2>
            <p className="text-[#DBF9F0] text-lg max-w-2xl mx-auto">
              We're working on a comprehensive event calendar where you can browse upcoming events, register 
              for workshops, and access past event recordings. Check back soon for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0B2332] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <div className="text-[#59A5D8] mb-6 flex justify-center">
              <Mail className="size-16" />
            </div>
            <h2 className="text-3xl md:text-4xl text-[#59A5D8] mb-4">
              Want to Help Organize Events?
            </h2>
            <p className="text-[#91E5F6] text-lg max-w-2xl mx-auto mb-6">
              Are you passionate about organizing events and bringing the community together? We'd love to 
              have you on our team! Whether you want to host a workshop, speak at an event, or help with 
              logistics, we welcome your contribution.
            </p>
            <div className="space-y-2">
              <p className="text-[#59A5D8] font-semibold text-xl">Get in Touch</p>
              <a 
                href="mailto:events@fossit.co.in"
                className="text-[#91E5F6] hover:text-[#59A5D8] transition-colors text-lg font-mono"
              >
                events@fossit.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
