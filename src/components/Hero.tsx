import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Code, Star, Award, Sparkles, ArrowRight, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-[#492170] to-[#8f5fbf] text-white border-none">
              <Sparkles className="size-3 mr-1" />
              Open Source Gamification Platform
            </Badge>
            <h1 className="text-[#492170]">
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
