import { useState, useEffect } from 'react';
import { Github, Award, Trophy, Users, Target, Zap, Code, Star, TrendingUp, ArrowRight, Menu, X, DollarSign, BarChart3, Info, Globe, Monitor, Rocket, Sparkles, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import svgPaths from './imports/svg-yz2q41bjvz';

function IconDollar({ fill = "#492170" }: { fill?: string }) {
  return (
    <svg className="size-12" fill="none" preserveAspectRatio="none" viewBox="0 0 36 58">
      <path d={svgPaths.p202cb700} fill={fill} />
    </svg>
  );
}

function IconBarChart({ fill = "#492170" }: { fill?: string }) {
  return (
    <svg className="size-12" fill="none" preserveAspectRatio="none" viewBox="0 0 67 58">
      <path d={svgPaths.p1b0b0a00} fill={fill} />
    </svg>
  );
}

function IconInfo({ fill = "#492170" }: { fill?: string }) {
  return (
    <svg className="size-12" fill="none" preserveAspectRatio="none" viewBox="0 0 29 58">
      <path d={svgPaths.p37327300} fill={fill} />
    </svg>
  );
}

function IconGlobe({ fill = "#44625D" }: { fill?: string }) {
  return (
    <svg className="size-12" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
      <path d={svgPaths.p263c9c00} fill={fill} />
    </svg>
  );
}

function IconMonitor({ fill = "#44625D" }: { fill?: string }) {
  return (
    <svg className="size-12" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
      <path d={svgPaths.pd377c00} fill={fill} />
    </svg>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#492170] to-[#8f5fbf] p-2 rounded-xl">
              <Code className="size-6 text-white" />
            </div>
            <h1 className="text-3xl text-[#492170]">FOSSIT</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[#1f0322] hover:text-[#492170] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-[#1f0322] hover:text-[#492170] transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[#1f0322] hover:text-[#492170] transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('community')} className="text-[#1f0322] hover:text-[#492170] transition-colors">
              Community
            </button>
            <Button className="bg-gradient-to-r from-[#492170] to-[#8f5fbf] hover:from-[#702129] hover:to-[#db5461] text-white shadow-lg hover:shadow-xl transition-all">
              <Github className="size-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1f0322]"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-[#1f0322] hover:text-[#492170] transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="text-[#1f0322] hover:text-[#492170] transition-colors text-left">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-[#1f0322] hover:text-[#492170] transition-colors text-left">
              How It Works
            </button>
            <button onClick={() => scrollToSection('community')} className="text-[#1f0322] hover:text-[#492170] transition-colors text-left">
              Community
            </button>
            <Button className="bg-gradient-to-r from-[#492170] to-[#8f5fbf] hover:from-[#702129] hover:to-[#db5461] text-white w-full">
              <Github className="size-4 mr-2" />
              Sign In
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-[#492170] to-[#8f5fbf] text-white border-none">
              <Sparkles className="size-3 mr-1" />
              Open Source Gamification Platform
            </Badge>
            <h1 className="text-6xl text-[#492170]">
              FOSSIT
            </h1>
            <p className="text-xl text-gray-700">
              For Open Source Software, I Think
            </p>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              Transform your open source journey into an engaging adventure. Earn points for every contribution, climb global leaderboards, unlock achievements, and connect with a thriving developer community.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-[#492170] to-[#8f5fbf] hover:from-[#702129] hover:to-[#db5461] text-white shadow-lg hover:shadow-xl transition-all">
                <Github className="size-5 mr-2" />
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#492170] text-[#492170] hover:bg-[#492170] hover:text-white group">
                Learn More
                <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-[#8f5fbf] to-[#492170] border-none text-white hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="bg-white/20 rounded-xl p-3 w-fit mb-2 group-hover:bg-white/30 transition-colors">
                  <Trophy className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">1,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">Active Developers</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#db5461] to-[#702129] border-none text-white hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="bg-white/20 rounded-xl p-3 w-fit mb-2 group-hover:bg-white/30 transition-colors">
                  <Code className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">Open Source Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#8aa29e] to-[#44625d] border-none text-white hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="bg-white/20 rounded-xl p-3 w-fit mb-2 group-hover:bg-white/30 transition-colors">
                  <Star className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">10K+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">Contributions Made</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#3d5467] to-[#1f2937] border-none text-white hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="bg-white/20 rounded-xl p-3 w-fit mb-2 group-hover:bg-white/30 transition-colors">
                  <Award className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">25+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">Achievement Badges</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsOSS() {
  return (
    <section className="bg-gradient-to-br from-[#dae9f6] to-[#e1fcf7] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[#3d5467] leading-relaxed text-lg">
              Most of the corporate software in the world is proprietary, which means the source code (the actual code used to make the software) is hidden from public view and you need special permissions from the company to view, alter and distribute it. Such software is called closed source.
              <br /><br />
              However, in open source software, things are the opposite of closed source. You can view, edit and distribute the software's source code without any special permissions. The best part is, it's completely free and somewhat easy to use.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl text-[#3d5467] mb-8">
              What is Open Source Software?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
                <div className="bg-gradient-to-br from-[#3d5467] to-[#44625d] text-white p-3 rounded-xl shrink-0">
                  <Code className="size-6" />
                </div>
                <div>
                  <h4 className="text-[#3d5467] mb-1">Transparent Development</h4>
                  <p className="text-gray-600">
                    Transparent and collaborative development
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
                <div className="bg-gradient-to-br from-[#3d5467] to-[#44625d] text-white p-3 rounded-xl shrink-0">
                  <Users className="size-6" />
                </div>
                <div>
                  <h4 className="text-[#3d5467] mb-1">Community Driven</h4>
                  <p className="text-gray-600">
                    Community-driven innovation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
                <div className="bg-gradient-to-br from-[#3d5467] to-[#44625d] text-white p-3 rounded-xl shrink-0">
                  <Zap className="size-6" />
                </div>
                <div>
                  <h4 className="text-[#3d5467] mb-1">Rapid Innovation</h4>
                  <p className="text-gray-600">
                    Rapid iteration and improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhereIsItUsed() {
  return (
    <section className="bg-gradient-to-br from-[#e1fcf7] to-[#dae9f6] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <h2 className="text-4xl text-[#44625d]">
            Where is Open Source Software Useful?
          </h2>
          <p className="text-xl text-[#44625d] text-center lg:text-right">
            EVERYWHERE. Literally, everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-[#8aa29e] to-[#44625d] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Globe className="size-10 text-[#e1fcf7]" />
              </div>
              <CardTitle className="text-[#e1fcf7] text-2xl mt-4">
                Industry Software
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e1fcf7]/90">
                Powers major tech companies and enterprise solutions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#8aa29e] to-[#44625d] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Monitor className="size-10 text-[#e1fcf7]" />
              </div>
              <CardTitle className="text-[#e1fcf7] text-2xl mt-4">
                Personal Software
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e1fcf7]/90">
                From browsers to operating systems you use daily
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#8aa29e] to-[#44625d] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Code className="size-10 text-[#e1fcf7]" />
              </div>
              <CardTitle className="text-[#e1fcf7] text-2xl mt-4">
                Developer Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e1fcf7]/90">
                The frameworks and libraries that power modern web
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function HowItHelps() {
  return (
    <section className="bg-gradient-to-br from-[#ffdcdf] to-[#ffc9d0] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl text-[#702129] mb-12">
          <span>How Does Open Source Help </span>
          <span className="underline decoration-[#702129]">Developers</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-[#db5461] to-[#702129] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <DollarSign className="size-10 text-[#ffdcdf]" />
              </div>
              <CardTitle className="text-[#ffdcdf] text-2xl mt-4">
                Career Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ffdcdf]/90">
                Build your portfolio and attract opportunities through meaningful contributions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#db5461] to-[#702129] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Rocket className="size-10 text-[#ffdcdf]" />
              </div>
              <CardTitle className="text-[#ffdcdf] text-2xl mt-4">
                Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ffdcdf]/90">
                Learn from real-world code and experienced developers in the community
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#db5461] to-[#702129] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <TrendingUp className="size-10 text-[#ffdcdf]" />
              </div>
              <CardTitle className="text-[#ffdcdf] text-2xl mt-4">
                Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ffdcdf]/90">
                Accelerate your career with visible contributions and networking
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function HowFossitHelps() {
  return (
    <section id="features" className="bg-gradient-to-br from-[#e7cfff] to-[#d4b5ff] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl text-[#492170] mb-4">
          <span>How Does FOSSIT Make It </span>
          <span className="italic">Easy</span>?
        </h2>
        <p className="text-lg text-[#492170]/80 mb-12 max-w-2xl">
          We've built everything you need to succeed in open source
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-[#8f5fbf] to-[#492170] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Target className="size-10 text-[#e7cfff]" />
              </div>
              <CardTitle className="text-[#e7cfff] text-2xl mt-4">
                Curated Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7cfff]/90">
                Centralized hub for discovering and contributing to curated OSS projects
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#8f5fbf] to-[#492170] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Users className="size-10 text-[#e7cfff]" />
              </div>
              <CardTitle className="text-[#e7cfff] text-2xl mt-4">
                Active Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7cfff]/90">
                Connect with like-minded developers and mentors to grow together
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#8f5fbf] to-[#492170] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <BarChart3 className="size-10 text-[#e7cfff]" />
              </div>
              <CardTitle className="text-[#e7cfff] text-2xl mt-4">
                Rich Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e7cfff]/90">
                Access tutorials, guides, and learning materials to boost your skills
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl text-[#492170] mb-8">
            The Gamification Edge
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="bg-gradient-to-br from-[#492170] to-[#8f5fbf] text-white p-3 rounded-xl shrink-0">
                  <Trophy className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg text-[#492170] mb-2">Earn Points</h4>
                  <p className="text-gray-600">Every contribution counts. Earn points for commits, pull requests, reviews, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="bg-gradient-to-br from-[#492170] to-[#8f5fbf] text-white p-3 rounded-xl shrink-0">
                  <TrendingUp className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg text-[#492170] mb-2">Climb Leaderboards</h4>
                  <p className="text-gray-600">Compete with developers worldwide and showcase your dedication.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="bg-gradient-to-br from-[#492170] to-[#8f5fbf] text-white p-3 rounded-xl shrink-0">
                  <Award className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg text-[#492170] mb-2">Unlock Badges</h4>
                  <p className="text-gray-600">Collect achievement badges as you master different skills and technologies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="bg-gradient-to-br from-[#492170] to-[#8f5fbf] text-white p-3 rounded-xl shrink-0">
                  <Sparkles className="size-6" />
                </div>
                <div>
                  <h4 className="text-lg text-[#492170] mb-2">Track Progress</h4>
                  <p className="text-gray-600">Visualize your growth with detailed analytics and contribution history.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-center mb-4 text-[#492170]">
          Get Started in 3 Simple Steps
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Join FOSSIT and transform your open source journey today
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-2xl hover:bg-white transition-all shadow-sm hover:shadow-md">
            <div className="bg-gradient-to-br from-[#8f5fbf] to-[#492170] text-white rounded-full size-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-xl mb-3 text-[#492170]">Connect GitHub</h3>
            <p className="text-gray-600">
              Sign in with your GitHub account. We'll automatically sync your profile and contributions.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl hover:bg-white transition-all shadow-sm hover:shadow-md">
            <div className="bg-gradient-to-br from-[#db5461] to-[#702129] text-white rounded-full size-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-xl mb-3 text-[#702129]">Choose Projects</h3>
            <p className="text-gray-600">
              Browse our curated list of projects and find ones that match your interests and skill level.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl hover:bg-white transition-all shadow-sm hover:shadow-md">
            <div className="bg-gradient-to-br from-[#8aa29e] to-[#44625d] text-white rounded-full size-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-xl mb-3 text-[#44625d]">Start Contributing</h3>
            <p className="text-gray-600">
              Make contributions and watch your points grow. Track your progress on your personalized dashboard.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-[#492170] to-[#8f5fbf] hover:from-[#702129] hover:to-[#db5461] text-white shadow-lg hover:shadow-xl transition-all">
            <Github className="size-5 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="bg-[#dae9f6] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-['Red_Hat_Display'] text-[#3d5467] mb-4">
            Join the FOSSIT Community
          </h2>
          <p className="font-['Roboto_Mono'] text-[#3d5467] max-w-2xl mx-auto">
            Connect with developers, share knowledge, and grow together. Our community is here to support your open source journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-[#3d5467]">
            <CardHeader>
              <Users className="size-8 text-[#3d5467] mb-2" />
              <CardTitle className="text-[#3d5467]">Active Community</CardTitle>
              <CardDescription>
                Join discussions, ask questions, and share your experiences with fellow developers.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-[#3d5467]">
            <CardHeader>
              <Code className="size-8 text-[#3d5467] mb-2" />
              <CardTitle className="text-[#3d5467]">Learning Resources</CardTitle>
              <CardDescription>
                Access exclusive tutorials, workshops, and mentorship opportunities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-[#3d5467]">
            <CardHeader>
              <Trophy className="size-8 text-[#3d5467] mb-2" />
              <CardTitle className="text-[#3d5467]">Monthly Challenges</CardTitle>
              <CardDescription>
                Participate in themed challenges and win exclusive badges and recognition.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-[#3d5467]">
            <CardHeader>
              <Star className="size-8 text-[#3d5467] mb-2" />
              <CardTitle className="text-[#3d5467]">Showcase Your Work</CardTitle>
              <CardDescription>
                Build your developer profile and get discovered by potential employers.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="bg-[#492170] py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-['Red_Hat_Display'] text-white mb-6">
          Ready to Level Up Your Open Source Game?
        </h2>
        <p className="font-['Roboto_Mono'] text-[#e7cfff] mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already earning points, climbing leaderboards, and making meaningful contributions to open source projects.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-white hover:bg-[#e7cfff] text-[#492170] uppercase">
            <Github className="size-4 mr-2" />
            Sign In with GitHub
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#492170] uppercase">
            Explore Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="font-['Red_Hat_Display'] text-white mb-2">1,000+</div>
            <div className="font-['Roboto_Mono'] text-[#e7cfff]">Developers</div>
          </div>
          <div className="text-center">
            <div className="font-['Red_Hat_Display'] text-white mb-2">500+</div>
            <div className="font-['Roboto_Mono'] text-[#e7cfff]">Projects</div>
          </div>
          <div className="text-center">
            <div className="font-['Red_Hat_Display'] text-white mb-2">10K+</div>
            <div className="font-['Roboto_Mono'] text-[#e7cfff]">Contributions</div>
          </div>
          <div className="text-center">
            <div className="font-['Red_Hat_Display'] text-white mb-2">25+</div>
            <div className="font-['Roboto_Mono'] text-[#e7cfff]">Badges</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#181818] text-gray-400 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-['Cutive_Mono'] text-white mb-4">FOSSIT</h3>
            <p className="font-['Roboto_Mono'] text-sm">
              Gamifying open source development, one contribution at a time.
            </p>
          </div>

          <div>
            <h4 className="font-['Roboto_Mono'] uppercase text-white mb-4">Platform</h4>
            <ul className="space-y-2 font-['Roboto_Mono']">
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Home</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">About FOSSIT</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Go To The App</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Communities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Roboto_Mono'] uppercase text-white mb-4">Resources</h4>
            <ul className="space-y-2 font-['Roboto_Mono']">
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Learning Centre</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">For Developers</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">For Sponsors</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">For Educational Institutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Roboto_Mono'] uppercase text-white mb-4">Contact</h4>
            <ul className="space-y-2 font-['Roboto_Mono']">
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Contact</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Cutive_Mono'] text-white text-center md:text-left">
              FOSSIT
            </p>
            <div className="font-['Roboto_Mono'] text-center uppercase">
              <p className="mb-0">
                Designed and Developed by <span className="underline">Manish</span> and <span className="underline">FOSSIT</span>
              </p>
              <p>
                WiTh <span className="underline">JavaScript</span> and ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#f5f1f2] min-h-screen">
      <Navbar />
      <Hero />
      <WhatIsOSS />
      <WhereIsItUsed />
      <HowItHelps />
      <HowFossitHelps />
      <HowItWorks />
      <Community />
      <CallToAction />
      <Footer />
    </div>
  );
}