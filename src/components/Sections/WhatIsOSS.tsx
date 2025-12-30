import { Code, Users, Zap } from 'lucide-react';
import { HorizontalCard } from '../Card';
import { OutlinedButton } from '../Button';
export default function WhatIsOSS() {

  const content = [
    {
      icon: <Code className="size-6" />,
      title: "Transparent Development",
      description: "Transparent and collaborative development"
    },
    {
      icon: <Users className="size-6" />,
      title: "Community Driven",
      description: "Community-driven innovation"
    },
    {
      icon: <Zap className="size-6" />,
      title: "Rapid Innovation",
      description: "Rapid iteration and improvement"
    }
  ]
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="order-2 lg:order-1">
            <p className="text-[var(--text-3)] leading-relaxed text-base md:text-lg">
              Most of the corporate software in the world is proprietary, which means the source code (the actual code used to make the software) is hidden from public view and you need special permissions from the company to view, alter and distribute it. Such software is called closed source.
              <br /><br />
              However, in open source software, things are the opposite of closed source. You can view, edit and distribute the software's source code without any special permissions. The best part is, it's completely free and somewhat easy to use.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-[var(--text-1)] mb-8">
              What is Open Source Software?
            </h2>

            <div className="space-y-6">
              
              {content.map((item, index) => (
                <HorizontalCard key={index} heading={item.title} icon={item.icon}>
                  {item.description}
                </HorizontalCard>
              ))}

            </div>

            <div className="mt-8">
              <OutlinedButton variant="primary" href="/about">
                Know More
              </OutlinedButton>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
