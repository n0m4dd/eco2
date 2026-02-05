import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    {
      value: '24/7',
      label: 'Operational support availability',
    },
    {
      value: '3',
      label: 'Production facilities in Uzbekistan',
    },
    {
      value: '50+',
      label: 'Export destinations worldwide',
    },
    {
      value: '10+',
      label: 'Years of international trading experience',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* White background with soft edges */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 
              className="text-[42px] lg:text-[52px] font-semibold text-black/90 mb-6 leading-tight"
              style={{
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              About ECOTRADE
            </h2>
              <div className="space-y-5 text-[17px] lg:text-[18px] text-gray-700/80 leading-relaxed">
                <p style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)' }}>
                  ECOTRADE FZCO is an international trading company specializing in the supply
                  of mineral fertilizers produced in the Republic of Uzbekistan. Our core
                  expertise lies in organizing efficient trade operations, coordinating
                  logistics, and ensuring reliable execution across all stages of cooperation.
                </p>

                <p style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)' }}>
                  The company focuses on speed of execution, operational flexibility, and
                  continuous support throughout the entire transaction cycle — from initial
                  request to final delivery. A structured approach to workflow management
                  allows us to respond promptly to market requirements and partner needs.
                </p>

                <p style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)' }}>
                  Our competitive advantages include transparent communication, consistent
                  quality standards, and close cooperation with production and logistics
                  partners. ECOTRADE FZCO is committed to long-term collaboration, reliability,
                  and sustainable business practices in international trade.
                </p>
              </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(45, 95, 63, 0.1)',
                }}
              >
                <div 
                  className="text-[48px] lg:text-[56px] font-bold text-[#2D5F3F] mb-2"
                  style={{
                    textShadow: '0 4px 16px rgba(45, 95, 63, 0.15)',
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-[16px] text-gray-600/80 font-medium"
                  style={{
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
