import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Code, Star, Target, Users, BarChart3, Trophy, TrendingUp, Award, Sparkles } from 'lucide-react';

export default function HowFossitHelps() {
  return (
    <section id="features" className="bg-gradient-to-br from-[var(--bg-2)] to-[var(--bg-1)] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-[var(--text-1)] mb-4">
          <span>How Does FOSSIT Make It </span>
          <span className="italic">Easy</span>?
        </h2>
        <p className="text-lg text-[var(--text-3)] mb-12 max-w-2xl">
          We've built everything you need to succeed in open source
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-3 group-hover:bg-[var(--border)] transition-colors">
                <Target className="size-10 text-[var(--text-4)]" />
              </div>
              <CardTitle className="text-[var(--text-4)] text-2xl mt-4">
                Curated Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--text-4)]/90">
                Centralized hub for discovering and contributing to curated OSS projects
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-3 group-hover:bg-[var(--border)] transition-colors">
                <Users className="size-10 text-[var(--text-4)]" />
              </div>
              <CardTitle className="text-[var(--text-4)] text-2xl mt-4">
                Active Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--text-4)]/90">
                Connect with like-minded developers and mentors to grow together
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-3 group-hover:bg-[var(--border)] transition-colors">
                <BarChart3 className="size-10 text-[var(--text-4)]" />
              </div>
              <CardTitle className="text-[var(--text-4)] text-2xl mt-4">
                Rich Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--text-4)]/90">
                Access tutorials, guides, and learning materials to boost your skills
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[var(--card)]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-[var(--text-1)] mb-8">
            The Gamification Edge
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--bg-2)] transition-colors">
                <div className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] text-[var(--text-1)] p-3 rounded-xl shrink-0">
                  <Trophy className="size-6" />
                </div>
                <div>
                  <h4 className="text-[var(--text-1)] mb-2">Earn Points</h4>
                  <p className="text-[var(--text-3)]">Every contribution counts. Earn points for commits, pull requests, reviews, and more.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--bg-2)] transition-colors">
                <div className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] text-[var(--text-1)] p-3 rounded-xl shrink-0">
                  <TrendingUp className="size-6" />
                </div>
                <div>
                  <h4 className="text-[var(--text-1)] mb-2">Climb Leaderboards</h4>
                  <p className="text-[var(--text-3)]">Compete with developers worldwide and showcase your dedication.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--bg-2)] transition-colors">
                <div className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] text-[var(--text-1)] p-3 rounded-xl shrink-0">
                  <Award className="size-6" />
                </div>
                <div>
                  <h4 className="text-[var(--text-1)] mb-2">Unlock Badges</h4>
                  <p className="text-[var(--text-3)]">Collect achievement badges as you master different skills and technologies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--bg-2)] transition-colors">
                <div className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] text-[var(--text-1)] p-3 rounded-xl shrink-0">
                  <Sparkles className="size-6" />
                </div>
                <div>
                  <h4 className="text-[var(--text-1)] mb-2">Track Progress</h4>
                  <p className="text-[var(--text-3)]">Visualize your growth with detailed analytics and contribution history.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-12">
            <Card className="bg-gradient-to-br from-[var(--text-4)] to-[var(--bg-3)] border-none text-[var(--text-1)] hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-2 group-hover:bg-[var(--border)] transition-colors">
                  <Trophy className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">1,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--text-1)]/90">Active Developers</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[var(--text-2)] to-[var(--bg-3)] border-none text-[var(--text-1)] hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-2 group-hover:bg-[var(--border)] transition-colors">
                  <Code className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--text-1)]/90">Open Source Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[var(--text-2)] to-[var(--bg-2)] border-none text-[var(--text-1)] hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-2 group-hover:bg-[var(--border)] transition-colors">
                  <Star className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">10K+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--text-1)]/90">Contributions Made</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[var(--bg-2)] to-[var(--bg-3)] border-none text-[var(--text-1)] hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-2 group-hover:bg-[var(--border)] transition-colors">
                  <Award className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">25+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--text-1)]/90">Achievement Badges</p>
              </CardContent>
            </Card>
          </div>


      </div>
    </section>
  );
}
