import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Video, FileText, Code } from 'lucide-react';
import { HorizontalCard } from '../components/Card';

export default function Learn() {
  const resourceTypes = [
    {
      title: 'Tutorials',
      icon: <BookOpen className="size-8" />,
      desc: 'Step-by-step guides to help you master open-source technologies and best practices.',
    },
    {
      title: 'Video Courses',
      icon: <Video className="size-8" />,
      desc: 'Comprehensive video tutorials covering various FOSS tools and frameworks.',
    },
    {
      title: 'Documentation',
      icon: <FileText className="size-8" />,
      desc: 'Detailed documentation and reference materials for popular open-source projects.',
    },
    {
      title: 'Code Examples',
      icon: <Code className="size-8" />,
      desc: 'Real-world code examples and best practices from experienced developers.',
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
              Learning Center
            </h1>
            <p className="text-xl text-[var(--text-2)] max-w-3xl mx-auto">
              Your gateway to mastering free and open-source software
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#031A26] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <h2 className="text-3xl md:text-4xl text-[#B3DEC1] mb-6">Welcome to the FOSSIT Learning Center</h2>
            <p className="text-[#DBF9F0] text-lg leading-relaxed">
              Explore our Learning Center for tutorials, guides, and resources to help you get started with 
              free and open-source software. Whether you're a beginner or an experienced developer, our 
              Learning Center has something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Types Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              What You'll Find Here
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              Access a wide range of learning materials tailored to different skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resourceTypes.map((type, idx) => (
              <HorizontalCard key={idx} icon={type.icon} heading={type.title}>
                {type.desc}
              </HorizontalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0B2332] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <div className="mb-6">
              <div className="inline-block px-6 py-2 bg-[#59A5D8] text-[#061523] rounded-full font-semibold text-lg">
                Coming Soon
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#59A5D8] mb-4">
              Interactive Learning Experience
            </h2>
            <p className="text-[#91E5F6] text-lg max-w-2xl mx-auto mb-6">
              We're building an extensive library of learning resources complete with interactive filters, 
              search functionality, and personalized recommendations. Browse through various topics and 
              skill levels to find the perfect resources for your learning journey.
            </p>
            <div className="bg-[#031A26] rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-[#91E5F6] text-sm">
                <span className="font-semibold text-[#59A5D8]">Note:</span> Content cards with filters to 
                browse through various topics and skill levels will be integrated with the backend API soon. 
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              Upcoming Features
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-[#031A26] rounded-xl p-6 border border-[rgba(255,255,255,0.06)]">
              <h3 className="text-xl text-[#B3DEC1] mb-2 font-semibold">🔍 Advanced Filtering</h3>
              <p className="text-[#DBF9F0]">
                Filter resources by technology, skill level, content type, and more to find exactly what you need.
              </p>
            </div>

            <div className="bg-[#031A26] rounded-xl p-6 border border-[rgba(255,255,255,0.06)]">
              <h3 className="text-xl text-[#B3DEC1] mb-2 font-semibold">📚 Learning Paths</h3>
              <p className="text-[#DBF9F0]">
                Follow curated learning paths designed to take you from beginner to advanced in various FOSS technologies.
              </p>
            </div>

            <div className="bg-[#031A26] rounded-xl p-6 border border-[rgba(255,255,255,0.06)]">
              <h3 className="text-xl text-[#B3DEC1] mb-2 font-semibold">✅ Progress Tracking</h3>
              <p className="text-[#DBF9F0]">
                Track your learning progress and earn badges as you complete tutorials and challenges.
              </p>
            </div>

            <div className="bg-[#031A26] rounded-xl p-6 border border-[rgba(255,255,255,0.06)]">
              <h3 className="text-xl text-[#B3DEC1] mb-2 font-semibold">👥 Community Contributions</h3>
              <p className="text-[#DBF9F0]">
                Access resources created by the community and contribute your own tutorials and guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
