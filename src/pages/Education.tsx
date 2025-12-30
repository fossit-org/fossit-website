import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GraduationCap, BookOpen, Users, Trophy, Mail } from 'lucide-react';
import { VerticalCard } from '../components/Card';

export default function Education() {
  const offerings = [
    {
      title: 'Curriculum Integration',
      icon: <BookOpen className="size-12" />,
      desc: 'We help integrate free and open-source software concepts and practices into your academic curriculum.',
    },
    {
      title: 'Workshops & Training',
      icon: <GraduationCap className="size-12" />,
      desc: 'Organize workshops and training sessions for students and faculty on FOSS technologies and best practices.',
    },
    {
      title: 'Community Building',
      icon: <Users className="size-12" />,
      desc: 'Help establish and nurture open-source communities within your institution to foster collaboration.',
    },
    {
      title: 'Project Opportunities',
      icon: <Trophy className="size-12" />,
      desc: 'Connect students with real-world open-source projects for hands-on learning and contribution.',
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
              FOSSIT For Educational Institutions
            </h1>
            <p className="text-xl text-[var(--text-2)] max-w-3xl mx-auto">
              Empowering education through free and open-source software
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-6">Partner With FOSSIT</h2>
            <p className="text-[#DBF9F0] text-lg leading-relaxed">
              Are you an educational institution looking to collaborate with FOSSIT? We offer various programs 
              and resources to support the integration of free and open-source software in your curriculum. 
              Our mission is to prepare the next generation of developers and IT professionals by providing 
              them with hands-on experience in open-source development, collaboration, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              What We Offer
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              Comprehensive programs and resources for educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, idx) => (
              <VerticalCard key={idx} icon={offering.icon} heading={offering.title}>
                {offering.desc}
              </VerticalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0B2332] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#59A5D8] mb-6">Benefits for Your Institution</h2>
            <div className="space-y-4 text-[#91E5F6] text-lg">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Enhance your curriculum with cutting-edge open-source technologies and methodologies</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Provide students with real-world experience through open-source project contributions</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Build a vibrant open-source community within your campus</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Connect with industry professionals and other educational institutions</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#59A5D8] mt-2"></div>
                <p>Access to exclusive resources, mentorship, and training materials</p>
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
              Start Your Collaboration Journey
            </h2>
            <p className="text-[#DBF9F0] text-lg max-w-2xl mx-auto mb-6">
              Ready to bring open-source software education to your institution? Let's work together to 
              create a vibrant learning environment that prepares students for the future of technology.
            </p>
            <div className="space-y-2">
              <p className="text-[#B3DEC1] font-semibold text-xl">Contact Us</p>
              <a 
                href="mailto:education@fossit.co.in"
                className="text-[#DBF9F0] hover:text-[#B3DEC1] transition-colors text-lg font-mono"
              >
                education@fossit.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
