import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MessageCircle, Users, Share2, Heart } from 'lucide-react';
import { VerticalCard } from '../components/Card';
import { OutlinedButton } from '../components/Button';

export default function Community() {
  const platforms = [
    {
      title: 'Discord',
      icon: <MessageCircle className="size-12" />,
      desc: 'Join our Discord server for real-time discussions, help, and collaboration with fellow FOSS enthusiasts.',
      link: 'https://discord.gg/hwDP6NXt',
      buttonText: 'Join Discord',
    },
    {
      title: 'Telegram',
      icon: <Share2 className="size-12" />,
      desc: 'Connect with the community on Telegram for quick updates, announcements, and casual conversations.',
      link: 'https://t.me/+_DfbcLmHsIc4MzVl',
      buttonText: 'Join Telegram',
    },
  ];

  const benefits = [
    {
      title: 'Active Community',
      icon: <Users className="size-12" />,
      desc: 'Join discussions, ask questions, and share your experiences with fellow developers and FOSS enthusiasts.',
    },
    {
      title: 'Knowledge Sharing',
      icon: <Share2 className="size-12" />,
      desc: 'Learn from others and contribute your own knowledge to help grow the community.',
    },
    {
      title: 'Networking',
      icon: <Users className="size-12" />,
      desc: 'Build connections with like-minded individuals and professionals in the open-source space.',
    },
    {
      title: 'Support',
      icon: <Heart className="size-12" />,
      desc: 'Get help, guidance, and support from experienced community members on your open-source journey.',
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
              Join Our Community
            </h1>
            <p className="text-xl text-[var(--text-2)] max-w-3xl mx-auto">
              Connect with FOSS enthusiasts, share knowledge, and grow together on various platforms
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              Community Platforms
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              Stay updated, share knowledge, and connect with fellow FOSS enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, idx) => (
              <div 
                key={idx}
                className="bg-[#031A26] rounded-2xl p-8 border border-[rgba(255,255,255,0.06)] hover:scale-[1.02] transition-transform"
              >
                <div className="text-[#B3DEC1] text-center mb-6">
                  <div className="rounded-xl p-3 w-fit mx-auto">
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl mt-4 mb-4">
                    {platform.title}
                  </h3>
                </div>
                <p className="text-[#DBF9F0] text-center mb-6">
                  {platform.desc}
                </p>
                <div className="flex justify-center">
                  <OutlinedButton variant="primary" href={platform.link}>
                    {platform.buttonText}
                  </OutlinedButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[var(--text-1)] mb-4">
              Why Join Our Community?
            </h2>
            <p className="text-[var(--text-3)] max-w-2xl mx-auto">
              Discover the benefits of being part of the FOSSIT community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <VerticalCard key={idx} icon={benefit.icon} heading={benefit.title}>
                {benefit.desc}
              </VerticalCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0B2332] rounded-2xl p-8 md:p-12 border border-[rgba(255,255,255,0.06)] text-center">
            <h2 className="text-3xl md:text-4xl text-[#59A5D8] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#91E5F6] text-lg max-w-2xl mx-auto mb-8">
              Join our vibrant community today and become part of the open-source movement. 
              Whether you're a beginner or an experienced developer, there's a place for you in the FOSSIT community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <OutlinedButton variant="primary" href="https://discord.gg/hwDP6NXt">
                Join Discord
              </OutlinedButton>
              <OutlinedButton variant="secondary" href="https://t.me/+_DfbcLmHsIc4MzVl">
                Join Telegram
              </OutlinedButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
