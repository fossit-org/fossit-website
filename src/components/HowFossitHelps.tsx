import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Target, Users, BarChart3, Trophy, TrendingUp, Award, Sparkles } from 'lucide-react';

export default function HowFossitHelps() {
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
