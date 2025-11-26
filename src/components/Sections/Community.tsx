import { Users, Code, Trophy, Star } from 'lucide-react';
import { HorizontalCard } from '../Card';

export default function Community() {
  const data = [
              {
                title: 'Active Community',
                icon: <Users className="size-8" />,
                desc: 'Join discussions, ask questions, and share your experiences with fellow developers.',
              },
              {
                title: 'Learning Resources',
                icon: <Code className="size-8" />,
                desc: 'Access exclusive tutorials, workshops, and mentorship opportunities.',
              },
              {
                title: 'Monthly Challenges',
                icon: <Trophy className="size-8" />,
                desc: 'Participate in themed challenges and win exclusive badges and recognition.',
              },
              {
                title: 'Showcase Your Work',
                icon: <Star className="size-8" />,
                desc: 'Build your developer profile and get discovered by potential employers.',
              },
            ];
  return (
    <section id="community" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-1)] mb-4">
            Join the FOSSIT Community
          </h2>
          <p className="text-[var(--text-3)] max-w-2xl mx-auto">
            Connect with developers, share knowledge, and grow together. Our community is here to support your open source journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, idx) => (
              <HorizontalCard key={idx} icon={item.icon} heading={item.title}>
                {item.desc}
              </HorizontalCard>
            ))
          }
        </div>
        
      </div>
    </section>
  );
}
