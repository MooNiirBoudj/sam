import React from 'react';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance across all devices and platforms.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure by Design',
    description: 'Built with security best practices and data protection in mind.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile First',
    description: 'Responsive design that works seamlessly on any screen size.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Scale',
    description: 'Ready to serve your customers anywhere in the world.'
  }
];

export const Features = () => {
  return (
    <section className="py-32 section-padding bg-white" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge technology with exceptional design to deliver outstanding results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500
                         border border-gray-100 group cursor-pointer fade-in
                         hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center
                            text-primary mb-6 group-hover:bg-primary group-hover:text-white
                            transition-colors duration-500 transform-gpu group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary group-hover:text-primary
                           transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};