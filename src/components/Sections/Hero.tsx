'use client';

import { Badge } from '../ui/badge';
import { OutlinedButton } from '../Button';
import { Sparkles, ArrowRight, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSubSection = ({ innerRef, heading, content, svg, orientation }: any) => {
  return (
    <section ref={innerRef} className="relative py-32 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {orientation === 'left' ? (
            <>
              <div className="section-content space-y-6">
                <h2 className="text-3xl md:text-4xl text-[#C6F2FA]">{heading}</h2>
                {content}
              </div>
              <div className="section-svg relative h-96">{svg}</div>
            </>
          ) : (
            <>
              <div className="section-svg relative h-96 order-2 lg:order-1">{svg}</div>
              <div className="section-content space-y-6 order-1 lg:order-2 text-right">
                <h2 className="text-3xl md:text-4xl text-[#C6F2FA]">{heading}</h2>
                {content}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero title animation
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-badge', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out',
      });

      gsap.from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out',
      });

      // Scroll-triggered section animations
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const content = section.querySelector('.section-content');
        const svg = section.querySelector('.section-svg');

        // Parallax effect on scroll
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          // y: -50,
          ease: 'none',
        });

        // Content fade and slide in
        gsap.from(content, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          duration: 1,
          ease: 'power3.out',
        });

        // SVG animation
        gsap.from(svg, {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 45%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          scale: 0.8,
          rotation: index % 2 === 0 ? -10 : 10,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
        });

        // Interactive hover effect
        section.addEventListener('mouseenter', () => {
          gsap.to(svg, {
            scale: 1.1,
            rotation: 0,
            duration: 0.6,
            ease: 'power2.out',
          });
        });

        section.addEventListener('mouseleave', () => {
          gsap.to(svg, {
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
          });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const heroSections = [
    {
      heading: 'Transform Your Journey',
      content: (
        <p className="text-lg text-[var(--text-3)] leading-relaxed">
          Transform your open source journey into an engaging adventure. Every contribution tells a story, every line of code makes a difference.
        </p>
      ),
      svg: <div></div>,
      orientation: 'left',
    },
    {
      heading: 'Earn Points',
      content: (
        <p className="text-lg text-[var(--text-3)] leading-relaxed">
          Earn points for every contribution. Track your progress, celebrate milestones, and watch your impact grow with each commit.
        </p>
      ),
      svg: <div></div>,
      orientation: 'right',
    },
    {
      heading: 'Master Fundamentals',
      content: (
        <p className="text-lg text-[var(--text-3)] leading-relaxed">
          Learn fundamentals from the ground up. Build skills, gain confidence, and become the developer you aspire to be.
        </p>
      ),
      svg: <div></div>,
      orientation: 'left',
    },
    {
      heading: 'Join the Community',
      content: (
        <p className="text-lg text-[var(--text-3)] leading-relaxed">
          Connect with a thriving developer community. Share knowledge, collaborate on projects, and grow together with passionate developers worldwide.
        </p>
      ),
      svg: <div></div>,
      orientation: 'right',
    },
  ];

  return (
    <main ref={heroRef} className="overflow-hidden">
      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        {/* <div className='absolute bottom-0 left-0 rounded-full' style={{boxShadow: '0px 0px 400px 100px #53A2BE'}}></div> */}
        <div className='absolute top-0 right-0 rounded-full opacity-20' style={{boxShadow: '0px 0px 800px 200px #F0E2A3'}}></div>
        <div className="container mx-auto max-w-7xl text-center">
          <div className="space-y-8">
            <Badge className="hero-badge bg-gradient-to-r from-[#1F0322] to-[#0E1428] text-[#53A2BE] border-none px-4 py-2 font-bold">
              <Sparkles className="size-3 mr-1" />
              Coding Made More Fun
            </Badge>
            <p className="hero-title text-[#d4b5ff] text-8xl md:text-9xl font-light tracking-tight">
              FOSSIT
            </p>
            <div className='absolute left-0 right-0 rounded-full opacity-15' style={{boxShadow: '0px 0px 400px 100px #d4b5ff'}}></div>
            <p className="hero-subtitle text-2xl md:text-3xl text-[#C6F2FA]">
              For Open Source Software, I Think
            </p>
            <div className="hero-buttons flex flex-wrap gap-4 pt-4 justify-center">
              <OutlinedButton variant="primary">
                <Github className="size-5 mr-2" />
                Get Started
              </OutlinedButton>
              <OutlinedButton>
                Learn More
                <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </OutlinedButton>
            </div>
          </div>
        </div>
      </section>

      {heroSections.map((s, i) => (
        <HeroSubSection
          key={i}
          innerRef={(el: HTMLElement | null) => (sectionsRef.current[i] = el)}
          heading={s.heading}
          content={s.content}
          svg={s.svg}
          orientation={s.orientation}
        />
      ))}

    </main>
  );
}
