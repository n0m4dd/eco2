import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    {
      icon: 'ri-shield-check-line',
      value: '100%',
      label: 'Quality Control Compliance',
      description: 'Across all production stages',
    },
    {
      icon: 'ri-route-line',
      value: '50+',
      label: 'Verified Logistics Continuity',
      description: 'Stable global supply routes',
    },
    {
      icon: 'ri-file-check-line',
      value: '100%',
      label: 'Contract Fulfilment Commitment',
      description: 'On-time and in-full delivery',
    },
    {
      icon: 'ri-leaf-line',
      value: '-30%',
      label: 'Carbon Reduction',
      description: 'Lower environmental footprint',
    },
  ];


  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Transparent green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6F5EB]/70 via-[#F0F9F4]/60 to-[#E6F5EB]/70"></div>

      {/* Optional soft floating orb */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-[200px] h-[200px] rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
          >
            Our Impact
          </h2>
          <p
            className="text-[18px] lg:text-[20px] text-gray-600/80"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}
          >
            Numbers that reflect our commitment to excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 bg-[#E6F5EB] rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ boxShadow: '0 4px 16px rgba(45, 95, 63, 0.15)' }}
              >
                <i className={`${stat.icon} text-4xl text-[#2D5F3F]`}></i>
              </div>

              {/* Value */}
              <div
                className="text-[48px] lg:text-[56px] font-bold text-[#2D5F3F] mb-3"
                style={{ textShadow: '0 4px 16px rgba(45, 95, 63, 0.15)' }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <h3
                className="text-[18px] font-semibold text-black/90 mb-2"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}
              >
                {stat.label}
              </h3>

              {/* Description */}
              <p
                className="text-[15px] text-gray-600/80"
                style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)' }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
