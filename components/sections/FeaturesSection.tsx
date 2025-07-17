import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    'Writing & repurposing for multiple platforms',
    'Writing with AI or humanize with CWrite',
    'Writing into Text based creatives',
    'Writing in your brand voice/voice',
    'Writing Agent'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="relative">
                  {/* Mockup of notebook and phone */}
                  <div className="w-48 h-56 bg-white rounded-lg shadow-xl transform rotate-12 border-4 border-gray-300">
                    <div className="p-4">
                      <div className="text-center font-bold text-gray-800 text-sm mb-2">WORDS</div>
                      <div className="text-center font-bold text-gray-800 text-sm mb-2">THAT</div>
                      <div className="text-center font-bold text-gray-800 text-sm">SELL</div>
                      <div className="mt-4 space-y-2">
                        {[1, 2, 3, 4, 5].map((line) => (
                          <div key={line} className="h-1 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-24 h-40 bg-blue-500 rounded-lg shadow-lg transform -rotate-12 border-4 border-gray-300">
                    <div className="p-2">
                      <div className="w-full h-6 bg-blue-400 rounded-sm mb-2"></div>
                      <div className="space-y-1">
                        {[1, 2, 3].map((dot) => (
                          <div key={dot} className="w-2 h-2 bg-white rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Writing</h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}