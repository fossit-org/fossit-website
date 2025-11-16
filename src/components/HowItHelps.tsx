import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { DollarSign, Rocket, TrendingUp } from 'lucide-react';

export default function HowItHelps() {
  return (
    <section className="bg-gradient-to-br from-[#ffdcdf] to-[#ffc9d0] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-[#702129] mb-12">
          <span>How Does Open Source Help </span>
          <span className="underline decoration-[#702129]">Developers</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-[#db5461] to-[#702129] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <DollarSign className="size-10 text-[#ffdcdf]" />
              </div>
              <CardTitle className="text-[#ffdcdf] text-2xl mt-4">
                Career Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ffdcdf]/90">
                Build your portfolio and attract opportunities through meaningful contributions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#db5461] to-[#702129] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Rocket className="size-10 text-[#ffdcdf]" />
              </div>
              <CardTitle className="text-[#ffdcdf] text-2xl mt-4">
                Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ffdcdf]/90">
                Learn from real-world code and experienced developers in the community
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#db5461] to-[#702129] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <TrendingUp className="size-10 text-[#ffdcdf]" />
              </div>
              <CardTitle className="text-[#ffdcdf] text-2xl mt-4">
                Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#ffdcdf]/90">
                Accelerate your career with visible contributions and networking
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
