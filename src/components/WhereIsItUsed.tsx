import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Globe, Monitor, Code } from 'lucide-react';

export default function WhereIsItUsed() {
  return (
    <section className="bg-gradient-to-br from-[#e1fcf7] to-[#dae9f6] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <h2 className="text-4xl text-[#44625d]">
            Where is Open Source Software Useful?
          </h2>
          <p className="text-xl text-[#44625d] text-center lg:text-right">
            EVERYWHERE. Literally, everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-[#8aa29e] to-[#44625d] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Globe className="size-10 text-[#e1fcf7]" />
              </div>
              <CardTitle className="text-[#e1fcf7] text-2xl mt-4">
                Industry Software
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e1fcf7]/90">
                Powers major tech companies and enterprise solutions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#8aa29e] to-[#44625d] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Monitor className="size-10 text-[#e1fcf7]" />
              </div>
              <CardTitle className="text-[#e1fcf7] text-2xl mt-4">
                Personal Software
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e1fcf7]/90">
                From browsers to operating systems you use daily
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#8aa29e] to-[#44625d] border-none hover:scale-105 hover:-translate-y-2 transition-all shadow-lg group md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="bg-white/20 rounded-xl p-3 w-fit mb-3 group-hover:bg-white/30 transition-colors">
                <Code className="size-10 text-[#e1fcf7]" />
              </div>
              <CardTitle className="text-[#e1fcf7] text-2xl mt-4">
                Developer Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#e1fcf7]/90">
                The frameworks and libraries that power modern web
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
