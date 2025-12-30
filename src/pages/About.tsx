import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Lightbulb, Rocket, Globe } from 'lucide-react';
import { VerticalCard } from '../components/Card';

export default function About() {
  const values = [
    {
      title: 'Community',
      icon: <Users className="size-12" />,
      desc: 'Fostering a collaborative environment where developers, users, and organizations can contribute to and benefit from open-source projects.',
    },
    {
      title: 'Innovation',
      icon: <Lightbulb className="size-12" />,
      desc: 'Encouraging creativity and technological advancement through open-source solutions.',
    },
    {
      title: 'Empowerment',
      icon: <Rocket className="size-12" />,
      desc: 'Providing resources and opportunities for everyone interested in free and open-source software.',
    },
    {
      title: 'Transparency',
      icon: <Globe className="size-12" />,
      desc: 'Promoting openness and shared knowledge across the IT ecosystem.',
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
              About FOSSIT
            </h1>
            <p className="text-xl text-[var(--text-2)] max-w-3xl mx-auto">
              Free and Open Source Software in IT
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-6">Our Mission</h2>
            <div className="space-y-4 text-[#DBF9F0] text-lg leading-relaxed">
              <p>
                FOSSIT (Free and Open Source Software in IT) is an initiative dedicated to promoting the use and 
                development of free and open-source software (FOSS) within the IT industry. Our mission is to foster 
                a collaborative environment where developers, users, and organizations can contribute to and benefit 
                from open-source projects.
              </p>
              <p>
                It aims at bridging the gap between open-source communities and the IT sector, encouraging innovation, 
                transparency, and shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              Our Core Values
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              The principles that guide our work and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <VerticalCard key={idx} icon={value.icon} heading={value.title}>
                {value.desc}
              </VerticalCard>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0B2332] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#59A5D8] mb-6">What We Do</h2>
            <div className="space-y-4 text-[#91E5F6] text-lg leading-relaxed">
              <p>
                Through workshops, conferences, and online resources, FOSSIT supports the growth of open-source 
                software and its adoption in various IT applications. It also provides a platform for networking 
                and collaboration among FOSS enthusiasts and professionals.
              </p>
              <p>
                Whether you are a beginner looking to learn about open-source software or an experienced developer 
                seeking to contribute to projects, FOSSIT offers valuable resources and opportunities for everyone 
                interested in the world of free and open-source software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)]">
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-6">Our Journey</h2>
            <div className="space-y-4 text-[#DBF9F0] text-lg leading-relaxed">
              <p>
                Starting as a small community of enthusiasts, FOSSIT has grown into a significant movement within 
                the IT industry, advocating for the principles of freedom, collaboration, and innovation that 
                underpin the open-source philosophy.
              </p>
              <p>
                Through its efforts, FOSSIT aims to create a more inclusive and dynamic IT ecosystem where open-source 
                solutions are recognized and utilized for their potential to drive technological advancement and 
                benefit to the society.
              </p>
              <p>
                Through its various initiatives, FOSSIT continues to inspire and empower individuals and organizations 
                to embrace open-source software in India. By promoting awareness, providing education, and facilitating 
                collaboration, FOSSIT plays a crucial role in shaping the future of IT in India, ensuring that 
                open-source software remains a vital component of technological progress and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
