import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { DollarSign, Rocket, TrendingUp } from 'lucide-react';

export default function HowItHelps() {
  return (
    <section className="bg-gradient-to-br from-[var(--bg-2)] to-[var(--bg-1)] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-[var(--text-1)] mb-12">
          <span>How Does Open Source Help </span>
          <span className="underline decoration-[var(--text-2)]">Developers</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-[var(--text-2)] to-[var(--bg-3)] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-3 group-hover:bg-[var(--border)] transition-colors">
                <DollarSign className="size-10 text-[var(--text-1)]" />
              </div>
              <CardTitle className="text-[var(--text-1)] text-2xl mt-4">
                Career Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--text-1)]/90">
                Build your portfolio and attract opportunities through meaningful contributions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[var(--text-2)] to-[var(--bg-3)] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-3 group-hover:bg-[var(--border)] transition-colors">
                <Rocket className="size-10 text-[var(--text-1)]" />
              </div>
              <CardTitle className="text-[var(--text-1)] text-2xl mt-4">
                Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--text-1)]/90">
                Learn from real-world code and experienced developers in the community
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[var(--text-2)] to-[var(--bg-3)] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-[var(--muted)] rounded-xl p-3 w-fit mb-3 group-hover:bg-[var(--border)] transition-colors">
                <TrendingUp className="size-10 text-[var(--text-1)]" />
              </div>
              <CardTitle className="text-[var(--text-1)] text-2xl mt-4">
                Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--text-1)]/90">
                Accelerate your career with visible contributions and networking
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
