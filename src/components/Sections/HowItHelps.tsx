import { DollarSign, Rocket, TrendingUp } from 'lucide-react';
import { VerticalCard } from '../Card';

export default function HowItHelps() {

  const data = [
            {
              title: 'Career Growth',
              icon: <DollarSign className="size-10" />,
              desc: 'Build your portfolio and attract opportunities through meaningful contributions',
            },
            {
              title: 'Learning',
              icon: <Rocket className="size-10" />,
              desc: 'Learn from real-world code and experienced developers in the community',
            },
            {
              title: 'Growth',
              icon: <TrendingUp className="size-10" />,
              desc: 'Accelerate your career with visible contributions and networking',
            },
          ]
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-[var(--text-1)] mb-12">
          <span>How Does Open Source Help </span>
          <span className="underline decoration-[var(--text-2)]">Developers</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((card, idx) => (
            <VerticalCard key={idx} heading={card.title} icon={card.icon}>
              {card.desc}
            </VerticalCard>
          ))}
        </div>
      </div>
    </section>
  );
}
