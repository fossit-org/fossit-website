import { RaisedButton } from '../Button'
import { Github } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
            <h2 className="text-center mb-4 text-[var(--text-1)]">
          Get Started in 3 Simple Steps
        </h2>
            <p className="text-center text-[var(--text-3)] mb-16 max-w-2xl mx-auto">
          Join FOSSIT and transform your open source journey today
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-2xl transition-all shadow-sm hover:shadow-md">
                <div className="text-[var(--text-1)] rounded-full size-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">1</span>
            </div>
                <h3 className="mb-3 text-[var(--text-1)]">Connect GitHub</h3>
                <p className="text-[var(--text-3)]">
              Sign in with your GitHub account. We'll automatically sync your profile and contributions.
            </p>
          </div>

              <div className="text-center p-6 rounded-2xl transition-all shadow-sm hover:shadow-md">
                <div className="text-[var(--text-1)] rounded-full size-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">2</span>
            </div>
                <h3 className="mb-3 text-[var(--text-2)]">Choose Projects</h3>
                <p className="text-[var(--text-3)]">
              Browse our curated list of projects and find ones that match your interests and skill level.
            </p>
          </div>

              <div className="text-center p-6 rounded-2xl transition-all shadow-sm hover:shadow-md">
                <div className="text-[var(--text-1)] rounded-full size-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl">3</span>
            </div>
                <h3 className="mb-3 text-[var(--text-2)]">Start Contributing</h3>
                <p className="text-[var(--text-3)]">
              Make contributions and watch your points grow. Track your progress on your personalized dashboard.
            </p>
          </div>
        </div>

        <div className="text-center">
          <RaisedButton>
            <Github className="size-5 mr-2" />
            Start Your Journey
          </RaisedButton>
        </div>
      </div>
    </section>
  );
}
