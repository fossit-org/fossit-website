import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Users, Code, Trophy, Star } from 'lucide-react';

export default function Community() {
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
