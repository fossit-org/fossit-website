import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Users, Code, Trophy, Star } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="bg-[#dae9f6] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[#3d5467] mb-4">
            Join the FOSSIT Community
          </h2>
          <p className="text-[#3d5467] max-w-2xl mx-auto">
            Connect with developers, share knowledge, and grow together. Our community is here to support your open source journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-[#3d5467] bg-white">
            <CardHeader className="flex items-start gap-4 p-6">
              <div className="bg-[#3d5467] text-white p-3 rounded-xl shrink-0">
                <Users className="size-8" />
              </div>
              <div>
                <CardTitle className="text-[#3d5467] text-lg">Active Community</CardTitle>
                <CardDescription>
                  Join discussions, ask questions, and share your experiences with fellow developers.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-[#3d5467] bg-white">
            <CardHeader className="flex items-start gap-4 p-6">
              <div className="bg-[#3d5467] text-white p-3 rounded-xl shrink-0">
                <Code className="size-8" />
              </div>
              <div>
                <CardTitle className="text-[#3d5467] text-lg">Learning Resources</CardTitle>
                <CardDescription>
                  Access exclusive tutorials, workshops, and mentorship opportunities.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-[#3d5467] bg-white">
            <CardHeader className="flex items-start gap-4 p-6">
              <div className="bg-[#3d5467] text-white p-3 rounded-xl shrink-0">
                <Trophy className="size-8" />
              </div>
              <div>
                <CardTitle className="text-[#3d5467] text-lg">Monthly Challenges</CardTitle>
                <CardDescription>
                  Participate in themed challenges and win exclusive badges and recognition.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-[#3d5467] bg-white">
            <CardHeader className="flex items-start gap-4 p-6">
              <div className="bg-[#3d5467] text-white p-3 rounded-xl shrink-0">
                <Star className="size-8" />
              </div>
              <div>
                <CardTitle className="text-[#3d5467] text-lg">Showcase Your Work</CardTitle>
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
