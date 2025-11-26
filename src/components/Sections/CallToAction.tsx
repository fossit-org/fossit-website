import { OutlinedButton, RaisedButton } from '../Button'
import { Github } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-[var(--text-1)] mb-6">
          Ready to Level Up Your Open Source Game?
        </h2>
        <p className="text-[var(--text-4)] mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already earning points, climbing leaderboards, and making meaningful contributions to open source projects.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <RaisedButton>
            <Github className="size-4 mr-2" />
            Sign In with GitHub
          </RaisedButton>
          <OutlinedButton variant='secondary'>
            Explore Projects
          </OutlinedButton>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-[var(--text-1)] mb-2">1,000+</div>
            <div className="text-[var(--text-4)]">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-[var(--text-1)] mb-2">500+</div>
            <div className="text-[var(--text-4)]">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-[var(--text-1)] mb-2">10K+</div>
            <div className="text-[var(--text-4)]">Contributions</div>
          </div>
          <div className="text-center">
            <div className="text-[var(--text-1)] mb-2">25+</div>
            <div className="text-[var(--text-4)]">Badges</div>
          </div>
        </div>
      </div>
    </section>
  );
}
