import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Partner {
  name: string;
  description: string;
}

interface Category {
  title: string;
  icon: string;
  partners: Partner[];
}

export default function PartnersSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories: Category[] = [
    {
      title: 'Production and Extraction',
      icon: 'ri-box-3-line',
      partners: [
        { name: 'АО "MAXAM-CHIRCHIK"', description: 'over 1.5 million tons of products per year' },
        { name: 'АО "NavoiAzot"', description: 'over 2.2 million tons of products per year' },
        { name: 'АО "Dehkanabad Potash Plant"', description: 'over 330 thousand tons of products per year' },
      ],
    },
    {
      title: 'Logistics and Transport',
      icon: 'ri-truck-line',
      partners: [
        {
          name: 'OOO "KIMYOTRANS-LOGISTIC"',
          description: 'Logistics within the group of companies and intersectoral raw material transportation',
        },
        {
          name: 'OOO "KIMYOTRANS"',
          description: 'Transportation and freight forwarding services for domestic and international shipments',
        },
      ],
    },
    {
      title: 'Trade',
      icon: 'ri-store-line',
      partners: [
        {
          name: 'OOO "UZKIMYOIMPEX"',
          description: 'Logistics within the group of companies and intersectoral raw material transportation',
        },
      ],
    },
  ];

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E6F5EB]/20 to-white"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:sticky lg:top-32"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[12px] font-semibold text-[#2D5F3F] uppercase tracking-[2px] mb-5 block"
              style={{
                textShadow: '0 2px 8px rgba(45, 95, 63, 0.15)',
              }}
            >
              Our Partners
            </motion.span>

            <h2 
              className="text-[42px] lg:text-[52px] font-semibold text-black/90 mb-6 leading-tight"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              Our Partners
            </h2>

            <div className="space-y-5 text-[17px] lg:text-[18px] text-gray-700/80 leading-relaxed">
              <p style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)' }}>
                AO "Uzkimyosanoat" unites leading enterprises of the chemical industry in Uzbekistan, covering the full cycle — from raw material extraction and production to scientific research, logistics, and trade.
              </p>
              <p style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)' }}>
                Thanks to modern technologies and highly qualified personnel, the company produces millions of tons of products annually, making a significant contribution to the country's economic development.
              </p>
            </div>
          </motion.div>

          {/* Right Categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-4"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: activeCategory === index 
                    ? '0 12px 40px rgba(45, 95, 63, 0.15)' 
                    : '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(45, 95, 63, 0.1)',
                }}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-[#E6F5EB]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 bg-[#E6F5EB]/50 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        boxShadow: '0 4px 16px rgba(45, 95, 63, 0.1)',
                      }}
                    >
                      <i className={`${category.icon} text-[#2D5F3F] text-xl`}></i>
                    </div>
                    <h3 
                      className="text-[18px] lg:text-[20px] font-semibold text-black/90 text-left"
                      style={{
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <motion.i
                    animate={{ rotate: activeCategory === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ri-arrow-down-s-line text-2xl text-[#2D5F3F]"
                  ></motion.i>
                </button>

                {/* Category Content */}
                <AnimatePresence>
                  {activeCategory === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4">
                        {category.partners.map((partner, pIndex) => (
                          <motion.div
                            key={pIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: pIndex * 0.05, duration: 0.3 }}
                            className="bg-white/60 rounded-xl p-4 border border-[#E6F5EB]/50"
                            style={{
                              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                            }}
                          >
                            <h4 
                              className="text-[16px] font-semibold text-black/90 mb-2"
                              style={{
                                textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                              }}
                            >
                              {partner.name}
                            </h4>
                            <p 
                              className="text-[15px] text-gray-600/80 leading-relaxed"
                              style={{
                                textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                              }}
                            >
                              {partner.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
