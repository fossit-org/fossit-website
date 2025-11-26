'use client';

import { Badge } from '../ui/badge';
import { OutlinedButton } from '../Button';
import { Sparkles, ArrowRight, Github, Rocket, Code, Users, Trophy } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

  return (
    <main ref={heroRef} className="overflow-hidden">
      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="space-y-8">
            <Badge className="hero-badge bg-gradient-to-r from-[var(--text-4)] to-[var(--text-3)] text-[var(--background)] border-none px-4 py-2 font-bold">
              <Sparkles className="size-3 mr-1" />
              Coding Made More Fun
            </Badge>
            <h1 className="hero-title text-[var(--text-4)] text-8xl md:text-9xl font-bold tracking-tight">
              FOSSIT
            </h1>
            <p className="hero-subtitle text-2xl md:text-3xl text-[var(--text-2)]">
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

      {/* Adventure Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative py-32 px-4 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-content space-y-6">
              <h2 className="text-5xl md:text-6xl text-[var(--text-2)]">
                Transform Your Journey
              </h2>
              <p className="text-xl text-[var(--text-3)] leading-relaxed">
                Transform your open source journey into an engaging adventure.
                Every contribution tells a story, every line of code makes a difference.
              </p>
            </div>
            <div className="section-svg relative h-96">
              {/* <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                    <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--text-4)" />
                      <stop offset="100%" stopColor="var(--bg-3)" />
                    </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="url(#rocketGrad)" opacity="0.12" />
                <path d="M200 80 L220 140 L260 120 L240 180 L300 200 L240 220 L260 280 L220 260 L200 320 L180 260 L140 280 L160 220 L100 200 L160 180 L140 120 L180 140 Z" fill="url(#rocketGrad)" />
                <circle cx="200" cy="200" r="30" fill="white" />
                <Rocket className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 text-[var(--text-4)]" />
              </svg> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="relative py-32 px-4 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-svg relative h-96 order-2 lg:order-1">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--text-2)" />
                    <stop offset="100%" stopColor="var(--bg-3)" />
                  </linearGradient>
                </defs>
                <rect x="50" y="100" width="300" height="200" rx="20" fill="url(#codeGrad)" opacity="0.2" />
                <rect x="70" y="130" width="100" height="10" rx="5" fill="url(#codeGrad)" opacity="0.6" />
                <rect x="70" y="155" width="150" height="10" rx="5" fill="url(#codeGrad)" opacity="0.6" />
                <rect x="70" y="180" width="120" height="10" rx="5" fill="url(#codeGrad)" opacity="0.6" />
                <circle cx="320" cy="120" r="15" fill="var(--text-2)" />
                <Code className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 text-[var(--text-2)]" />
              </svg>
            </div>
            <div className="section-content space-y-6 order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl text-[var(--text-2)]">
                Earn Points
              </h2>
              <p className="text-xl text-[var(--text-3)] leading-relaxed">
                Earn points for every contribution. Track your progress, celebrate milestones,
                and watch your impact grow with each commit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="relative py-32 px-4 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-content space-y-6">
              <h2 className="text-5xl md:text-6xl text-[var(--text-2)]">
                Master Fundamentals
              </h2>
              <p className="text-xl text-[var(--text-3)] leading-relaxed">
                Learn fundamentals from the ground up. Build skills, gain confidence,
                and become the developer you aspire to be.
              </p>
            </div>
            <div className="section-svg relative h-96">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="learnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--text-2)" />
                      <stop offset="100%" stopColor="var(--text-3)" />
                    </linearGradient>
                </defs>
                <polygon points="200,50 350,150 350,250 200,350 50,250 50,150" fill="url(#learnGrad)" opacity="0.2" />
                <circle cx="200" cy="200" r="80" fill="url(#learnGrad)" opacity="0.3" />
                <path d="M200 120 L240 160 L220 210 L260 250 L200 280 L140 250 L180 210 L160 160 Z" fill="url(#learnGrad)" />
                <Trophy className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 text-[var(--text-2)]" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="relative py-32 px-4 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-svg relative h-96 order-2 lg:order-1">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="communityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--text-4)" />
                    <stop offset="100%" stopColor="var(--bg-3)" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="140" r="40" fill="url(#communityGrad)" opacity="0.4" />
                <circle cx="140" cy="220" r="35" fill="url(#communityGrad)" opacity="0.4" />
                <circle cx="260" cy="220" r="35" fill="url(#communityGrad)" opacity="0.4" />
                <circle cx="170" cy="290" r="30" fill="url(#communityGrad)" opacity="0.4" />
                <circle cx="230" cy="290" r="30" fill="url(#communityGrad)" opacity="0.4" />
                <line x1="200" y1="180" x2="140" y2="185" stroke="url(#communityGrad)" strokeWidth="3" opacity="0.6" />
                <line x1="200" y1="180" x2="260" y2="185" stroke="url(#communityGrad)" strokeWidth="3" opacity="0.6" />
                <line x1="140" y1="255" x2="170" y2="260" stroke="url(#communityGrad)" strokeWidth="3" opacity="0.6" />
                <line x1="260" y1="255" x2="230" y2="260" stroke="url(#communityGrad)" strokeWidth="3" opacity="0.6" />
                <Users className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 text-[var(--text-4)]" />
              </svg>
            </div>
            <div className="section-content space-y-6 order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl text-[var(--text-4)]">
                Join the Community
              </h2>
              <p className="text-xl text-[var(--text-3)] leading-relaxed">
                Connect with a thriving developer community. Share knowledge, collaborate on projects,
                and grow together with passionate developers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
