import { Button } from './ui/button';
import { Github } from 'lucide-react';

export default function CallToAction() {
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
