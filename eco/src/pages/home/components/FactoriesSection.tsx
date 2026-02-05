import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FactoriesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedFactory, setSelectedFactory] = useState<Factory | null>(null);

interface Factory {
  id: number;
  name: string;
  location: string;
  description: string;
  capacity: string;
  employees: string;
  established: string;
  certifications: string;
  image: string;
  features: string[];
  large?: boolean;
}

const factories: Factory[] = [
  {
    id: 1,
    name: 'JSC "NavoiAzot"',
    location: 'Navoi Region, Uzbekistan',
    description:
      'One of the largest chemical enterprises in Central Asia, specializing in the production of nitrogen-based chemicals and industrial materials for domestic and international markets.',
    capacity: '2.2 million tons/year',
    employees: '9,540',
    established: '—',
    certifications: 'International quality and safety standards',
    image: '/img/6.jpg',
    features: [
      'Annual production capacity: 2.2 million tons',
      'Workforce: 9,540 employees',
      'Key products: ammonia, ammonium nitrate, PVC, caustic soda, methanol',
      'Sales markets across Central Asia, Europe, and Asia'
    ]
  },
  {
    id: 2,
    name: 'JSC "Dehkanabad Potash Plant"',
    location: 'Kashkadarya Region, Uzbekistan',
    description:
      'A key producer of potash products, supplying potassium-based fertilizers and industrial raw materials to agricultural and industrial markets.',
    capacity: '330 thousand tons/year',
    employees: '1,952',
    established: '—',
    certifications: 'Quality and safety compliance',
    image: '/img/9.jpg',
    features: [
      'Annual production capacity: 330 thousand tons',
      'Products: potassium chloride, technical salt',
      'Export markets in Central Asia and beyond'
    ]
  },
  {
    id: 3,
    name: 'JSC "Maxam-Chirchiq"',
    location: 'Tashkent Region, Uzbekistan',
    description:
      'A major producer of nitrogen-based fertilizers and industrial chemicals, serving agricultural and industrial sectors with export-oriented production.',
    capacity: '1.5 million tons/year',
    employees: '2,700',
    established: '—',
    certifications: 'Industry compliance standards',
    large: true,
    image: '/img/7.jpg',
    features: [
      'Nitrogen-based fertilizers',
      'Industrial chemicals',
      'Export-oriented production'
    ]
  },
];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F5EB]/70 via-[#F0F9F4]/60 to-[#E6F5EB]/70"></div>
      
      {/* Single floating orb - reduced effects */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-[200px] h-[200px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(45, 95, 63, 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[48px] lg:text-[56px] font-semibold text-black/90 mb-5"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          >
            Our Factories
          </h2>
          <p 
            className="text-[18px] lg:text-[20px] text-gray-600/80"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            State-of-the-art manufacturing facilities worldwide
          </p>
        </motion.div>

        {/* Factories Grid - 4 blocks forming a rectangle */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {factories.map((factory, index) => (
            <motion.div
              key={factory.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`relative group cursor-pointer
                ${factory.large ? 'md:col-start-2 md:row-start-1 md:row-span-2' : ''}
              `}
              onClick={() => setSelectedFactory(factory)}
            >
              <div
                className="relative h-full min-h-[250px] rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                }}
              >
                <div className="relative h-full transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={factory.image}
                    alt={factory.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-[18px] lg:text-[22px] font-semibold mb-2">
                      {factory.name}
                    </h3>
                    <p className="text-white/90 text-[14px] flex items-center gap-2">
                      <i className="ri-map-pin-line"></i>
                      {factory.location}
                    </p>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <i className="ri-arrow-right-up-line text-white text-xl"></i>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFactory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
            onClick={() => setSelectedFactory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              style={{
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFactory(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 z-10 cursor-pointer group"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
                aria-label="Close"
              >
                <i className="ri-close-line text-2xl text-gray-800 group-hover:rotate-90 transition-transform duration-300"></i>
              </button>

              {/* Image */}
              <div className="relative h-[280px] rounded-t-3xl overflow-hidden">
                <img
                  src={selectedFactory.image}
                  alt={selectedFactory.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-3 mb-6">
                  <div 
                    className="w-14 h-14 bg-[#E6F5EB] rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      boxShadow: '0 4px 16px rgba(45, 95, 63, 0.15)',
                    }}
                  >
                    <i className="ri-building-line text-3xl text-[#2D5F3F]"></i>
                  </div>
                  <div>
                    <h3 
                      className="text-[28px] lg:text-[32px] font-semibold text-black/90 mb-2"
                      style={{
                        textShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      {selectedFactory.name}
                    </h3>
                    <p 
                      className="text-[16px] text-gray-600/80 flex items-center gap-2"
                      style={{
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      <i className="ri-map-pin-line text-[#2D5F3F]"></i>
                      {selectedFactory.location}
                    </p>
                  </div>
                </div>

                <p 
                  className="text-[17px] text-gray-700/90 leading-relaxed mb-8"
                  style={{
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {selectedFactory.description}
                </p>

                <div className="space-y-4">
                  <h4 
                    className="text-[18px] font-semibold text-black/90 mb-4"
                    style={{
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    Key Features
                  </h4>
                  {selectedFactory.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group"
                    >
                      <div 
                        className="w-8 h-8 bg-[#E6F5EB] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#E6F5EB]/80 transition-colors duration-300"
                        style={{
                          boxShadow: '0 2px 8px rgba(45, 95, 63, 0.1)',
                        }}
                      >
                        <i className="ri-check-line text-[#2D5F3F] text-sm"></i>
                      </div>
                      <p 
                        className="text-[16px] text-gray-700/80 leading-relaxed"
                        style={{
                          textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                        }}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
