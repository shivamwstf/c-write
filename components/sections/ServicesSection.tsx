import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Globe, PenTool } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: 'Prospecting Cockpit',
      description: 'Easily create content & contexts for B2B high-quality sales outreach. Over direct customer relationship with the leads your prospect has.',
      badge: 'SALES',
      color: 'bg-purple-500'
    },
    {
      icon: Globe,
      title: 'Translation + Localization',
      description: 'Product entire localize text & repostion for any language. All in real-time for a fraction of the cost of traditional agencies.',
      badge: 'MARKETING',
      color: 'bg-blue-500'
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Create your content library with AI — SEO, thought leadership, use cases, social, and more. Draft, and optimize, not waste.',
      badge: 'MARKETING',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get With CWrite
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="hover:bg-blue-50">
                    Get Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full"
          >
            SEE MORE
          </Button>
        </div>
      </div>
    </section>
  );
}