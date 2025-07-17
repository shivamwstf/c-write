import { Button } from '@/components/ui/button';

export function DemoSection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See the CWrite platform in action
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Get a demo and discover how go-to-market teams use Copy.ai to 
            supercharge their revenue engine and achieve B2B GTM velocity.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}