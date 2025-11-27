import { VerticalCard, HorizontalCard } from '../Card'
import { Target, Users, BarChart3, Trophy, TrendingUp, Award, Sparkles } from 'lucide-react';

export default function HowFossitHelps() {

  const VerticalCardContent = [
    {
      icon: <Target className="size-10" />,
      heading: 'Curated Platform',
      description: 'Centralized hub for discovering and contributing to curated OSS projects'
    },
    {
      icon: <Users className="size-10" />,
      heading: 'Active Community',
      description: 'Connect with like-minded developers and mentors to grow together'
    },
    {
      icon: <BarChart3 className="size-10" />,
      heading: 'Rich Resources',
      description: 'Access tutorials, guides, and learning materials to boost your skills'
    }
  ]

  const HorizontalCardContent = [
    {
      icon: <Trophy className="size-6" />,
      heading: 'Earn Points',
      description: 'Every contribution counts. Earn points for commits, pull requests, reviews, and more.'
    },
    {
      icon: <TrendingUp className="size-6" />,
      heading: 'Climb Leaderboards',
      description: 'Compete with developers worldwide and showcase your dedication.'
    },
    {
      icon: <Award className="size-6" />,
      heading: 'Unlock Badges',
      description: 'Collect achievement badges as you master different skills and technologies.'
    },
    {
      icon: <Sparkles className="size-6" />,
      heading: 'Track Progress',
      description: 'Visualize your growth with detailed analytics and contribution history.'
    }
  ]
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-[var(--text-1)] mb-4">
          <span>How Does FOSSIT Make It </span>
          <span className="italic">Easy</span>?
        </h2>
        <p className="text-lg text-[var(--text-3)] mb-12 max-w-2xl">
          We've built everything you need to succeed in open source
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {VerticalCardContent.map((card, index) => (
            <VerticalCard key={index} heading={card.heading} icon={card.icon}>
              {card.description}
            </VerticalCard>
          ))}
        </div>

        <div className="rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-[var(--text-1)] mb-8">
            The Gamification Edge
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {HorizontalCardContent.map((card, index) => (
              <HorizontalCard key={index} heading={card.heading} icon={card.icon}>
                {card.description}
              </HorizontalCard>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-4 mt-12">
            <Card className="border-none text-[var(--text-1)] hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="rounded-xl p-3 w-fit mb-2">
                  <Trophy className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">1,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--text-1)]/90">Active Developers</p>
              </CardContent>
            </Card>
            <Card className="border-none text-[var(--text-1)] hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="rounded-xl p-3 w-fit mb-2">
                  <Code className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--text-1)]/90">Open Source Projects</p>
              </CardContent>
            </Card>
            <Card className="border-none text-[var(--text-1)] hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="rounded-xl p-3 w-fit mb-2">
                  <Star className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">10K+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--text-1)]/90">Contributions Made</p>
              </CardContent>
            </Card>
            <Card className="border-none text-[var(--text-1)] hover:scale-105 transition-all shadow-lg group">
              <CardHeader className="pb-3">
                <div className="rounded-xl p-3 w-fit mb-2">
                  <Award className="size-8" />
                </div>
                <CardTitle className="text-white text-3xl">25+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--text-1)]/90">Achievement Badges</p>
              </CardContent>
            </Card>
          </div> */}


      </div>
    </section>
  );
}
