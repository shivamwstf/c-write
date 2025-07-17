import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              CREATE THE DIFFERENCE
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            HUMAN LAYER IN AI COPYWRITING
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
            Revolutionize your content creation with AI-powered copywriting that maintains the human touch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}