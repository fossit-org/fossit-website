import { Globe, Monitor, Code } from 'lucide-react';
import { VerticalCard } from '../Card';

export default function WhereIsItUsed() {

  const data = [
            {
              title: 'Industry Software',
              icon: <Globe className="size-10" />,
              desc: 'Powers major tech companies and enterprise solutions',
              classes: '',
            },
            {
              title: 'Personal Software',
              icon: <Monitor className="size-10" />,
              desc: 'From browsers to operating systems you use daily',
              classes: '',
            },
            {
              title: 'Developer Tools',
              icon: <Code className="size-10" />,
              desc: 'The frameworks and libraries that power modern web',
              classes: 'md:col-span-2 lg:col-span-1',
            },
          ]
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <h2 className="text-[var(--text-1)]">
            Where is Open Source Software Useful?
          </h2>
          <p className="text-xl text-[var(--text-3)] text-center lg:text-right">
            EVERYWHERE. Literally, everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((card, index) => (
            <div key={index} className={card.classes}>
              <VerticalCard heading={card.title} icon={card.icon}>
                {card.desc}
              </VerticalCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
