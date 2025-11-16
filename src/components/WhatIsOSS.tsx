import { Code, Users, Zap } from 'lucide-react';

export default function WhatIsOSS() {
  return (
    <section className="bg-gradient-to-br from-[#dae9f6] to-[#e1fcf7] py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[#3d5467] leading-relaxed text-lg">
              Most of the corporate software in the world is proprietary, which means the source code (the actual code used to make the software) is hidden from public view and you need special permissions from the company to view, alter and distribute it. Such software is called closed source.
              <br /><br />
              However, in open source software, things are the opposite of closed source. You can view, edit and distribute the software's source code without any special permissions. The best part is, it's completely free and somewhat easy to use.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl text-[#3d5467] mb-8">
              What is Open Source Software?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
                <div className="bg-gradient-to-br from-[#3d5467] to-[#44625d] text-white p-3 rounded-xl shrink-0">
                  <Code className="size-6" />
                </div>
                <div>
                  <h4 className="text-[#3d5467] mb-1">Transparent Development</h4>
                  <p className="text-gray-600">
                    Transparent and collaborative development
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
                <div className="bg-gradient-to-br from-[#3d5467] to-[#44625d] text-white p-3 rounded-xl shrink-0">
                  <Users className="size-6" />
                </div>
                <div>
                  <h4 className="text-[#3d5467] mb-1">Community Driven</h4>
                  <p className="text-gray-600">
                    Community-driven innovation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
                <div className="bg-gradient-to-br from-[#3d5467] to-[#44625d] text-white p-3 rounded-xl shrink-0">
                  <Zap className="size-6" />
                </div>
                <div>
                  <h4 className="text-[#3d5467] mb-1">Rapid Innovation</h4>
                  <p className="text-gray-600">
                    Rapid iteration and improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
