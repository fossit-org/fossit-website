import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Users, Code, Trophy, Star } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="bg-[var(--bg-2)] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[var(--text-1)] mb-4">
            Join the FOSSIT Community
          </h2>
          <p className="text-[var(--text-3)] max-w-2xl mx-auto">
            Connect with developers, share knowledge, and grow together. Our community is here to support your open source journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-[var(--text-3)] bg-[var(--card)]">
            <CardHeader className="flex items-start gap-4 p-6">
              <div className="bg-[var(--primary)] text-[var(--text-1)] p-3 rounded-xl shrink-0">
                <Users className="size-8" />
              </div>
              <div>
                <CardTitle className="text-[var(--text-1)] text-lg">Active Community</CardTitle>
                <CardDescription>
                  Join discussions, ask questions, and share your experiences with fellow developers.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-[var(--text-3)] bg-[var(--card)]">
            <CardHeader className="flex items-start gap-4 p-6">
              <div className="bg-[var(--primary)] text-[var(--text-1)] p-3 rounded-xl shrink-0">
                <Code className="size-8" />
              </div>
              <div>
                <CardTitle className="text-[var(--text-1)] text-lg">Learning Resources</CardTitle>
                <CardDescription>
                  Access exclusive tutorials, workshops, and mentorship opportunities.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-[var(--text-3)] bg-[var(--card)]">
            <CardHeader className="flex items-start gap-4 p-6">
              <div className="bg-[var(--primary)] text-[var(--text-1)] p-3 rounded-xl shrink-0">
                <Trophy className="size-8" />
              </div>
              <div>
                <CardTitle className="text-[var(--text-1)] text-lg">Monthly Challenges</CardTitle>
                <CardDescription>
                  Participate in themed challenges and win exclusive badges and recognition.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-[var(--text-3)] bg-[var(--card)]">
            <CardHeader className="flex items-start gap-4 p-6">
              <div className="bg-[var(--primary)] text-[var(--text-1)] p-3 rounded-xl shrink-0">
                <Star className="size-8" />
              </div>
              <div>
                <CardTitle className="text-[var(--text-1)] text-lg">Showcase Your Work</CardTitle>
                <CardDescription>
                  Build your developer profile and get discovered by potential employers.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
