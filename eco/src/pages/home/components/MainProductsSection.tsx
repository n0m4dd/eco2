import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProductCategory {
  id: number;
  title: string;
  icon: string;
  products: string[];
}

export default function MainProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const categories: ProductCategory[] = [
    {
      id: 1,
      title: 'Mineral Fertilizers',
      icon: 'ri-plant-line',
      products: [
        'Nitrogen-phosphorus fertilizer',
        'Ammonium nitrate',
        'Technical aqueous ammonia',
        'Ammonium sulfate'
      ]
    },
    {
      id: 2,
      title: 'Industrial Chemistry',
      icon: 'ri-flask-line',
      products: [
        'Technical liquid ammonia',
        'Technical acetone',
        'Technical calcium chloride',
        'Technical methanol grade A'
      ]
    },
    {
      id: 3,
      title: 'Resins and Polymers',
      icon: 'ri-drop-line',
      products: [
        'Urethane resin grade KS-11',
        'Urea-formaldehyde resin grade KF-J',
        'Urea-formaldehyde resin grade KF-MT-15',
        'Methyl acetate (technical)'
      ]
    },
    {
      id: 4,
      title: 'Acids',
      icon: 'ri-test-tube-line',
      products: [
        'Nitric acid',
        'Technical hydrochloric acid',
        'Inhibited hydrochloric acid',
        'Acetic acid'
      ]
    },
    {
      id: 5,
      title: 'Technical Gases',
      icon: 'ri-mist-line',
      products: [
        'Technical liquid nitrogen',
        'Gaseous argon',
        'Pyrolysis acetylene',
        'Carbon dioxide'
      ]
    },
    {
      id: 6,
      title: 'Reagents',
      icon: 'ri-medicine-bottle-line',
      products: [
        'Sodium cyanide',
        'Polyacrylamide',
        'K-4 reagent',
        'Technical thiourea'
      ]
    },
    {
      id: 7,
      title: 'Other Products',
      icon: 'ri-box-3-line',
      products: [
        'Solid carbon dioxide',
        'Iron (III) chloride hexahydrate (40% aqueous solution)',
        'Sodium salt of dichloroisocyanuric acid',
        'Soot-containing paste'
      ]
    },
    {
      id: 8,
      title: 'Textile Materials',
      icon: 'ri-t-shirt-line',
      products: [
        'Cotton filter fabric'
      ]
    }
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* White background */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 
            className="text-[48px] lg:text-[56px] font-semibold text-black/90 mb-6"
            style={{
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          >
            Product Overview
          </h2>
          <p 
            className="text-[18px] lg:text-[20px] max-w-4xl  mx-auto leading-relaxed mb-6"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            A concise overview of our complete product range for quick reference and initial familiarization.
          </p>
          <p 
            className="text-[18px] lg:text-[20px] text-gray-700/80 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            Our company provides a diverse range of high-quality chemical products, including mineral fertilizers, industrial chemicals, resins, polymers, acids, technical gases, and reagents, all designed to meet the highest industry standards and support sustainable development across various sectors.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <div
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(45, 95, 63, 0.1)',
                }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 bg-[#E6F5EB] rounded-xl flex items-center justify-center mb-4"
                  style={{
                    boxShadow: '0 4px 16px rgba(45, 95, 63, 0.15)',
                  }}
                >
                  <i className={`${category.icon} text-3xl text-[#2D5F3F]`}></i>
                </div>

                {/* Title */}
                <h3 
                  className="text-[20px] font-semibold text-black/90 mb-3"
                  style={{
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {category.title}
                </h3>

                {/* Product Count */}
                <p className="text-[14px] text-gray-600/80 mb-4">
                  {category.products.length} {category.products.length === 1 ? 'product' : 'products'}
                </p>

                {/* Expand Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-medium text-[#2D5F3F]">
                    {expandedCategory === category.id ? 'Hide details' : 'View details'}
                  </span>
                  <motion.i
                    animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ri-arrow-down-s-line text-xl text-[#2D5F3F]"
                  ></motion.i>
                </div>

                {/* Expanded Products List */}
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-[#2D5F3F]/10 space-y-2">
                        {category.products.map((product, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[#2D5F3F] rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-[15px] text-gray-700/80 leading-relaxed">
                              {product}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
