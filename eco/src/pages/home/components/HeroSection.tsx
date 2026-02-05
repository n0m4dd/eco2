import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover opacity-[0.70]"
        style={{
          backgroundImage: "url('/img/11.jpg')",
        }}
      />

      {/* Дополнительный белый градиент */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1
              className="text-[56px] md:text-[72px] lg:text-[96px] font-bold text-black/95 mb-4 md:mb-6 leading-tight"
              style={{
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              ECOTRADE FZCO
            </h1>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              <h2
                className="text-[26px] md:text-[32px] lg:text-[42px] font-bold text-[#2D5F3F] leading-tight"
                style={{
                  textShadow: "0 3px 15px rgba(45, 95, 63, 0.15)",
                }}
              >
                Global Chemical Solutions
              </h2>
            </div>

            <p
              className="text-[16px] md:text-[18px] lg:text-[22px] font-medium text-gray-700 leading-relaxed mb-8 md:mb-12 max-w-2xl"
              style={{
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
              }}
            >
              Ecotrade FZCO specializes in the trading of mineral fertilizers produced in the
              Republic of Uzbekistan. The company works with products manufactured at major
              chemical enterprises, focusing on stable supply chains, efficient logistics,
              and consistent product quality.
            </p>

            <p
              className="text-[16px] md:text-[18px] lg:text-[22px] font-medium text-gray-700 leading-relaxed mb-8 md:mb-12 max-w-2xl"
              style={{
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
              }}
            >
              Cooperating with leading manufacturers such as JSC Navoiyazot, JSC
              Maxam-Chirchiq, and JSC Dehkanabad Potash Plant, Ecotrade FZCO delivers trading
              solutions designed to support long-term partnerships and reliable fulfillment
              of contractual obligations.
            </p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6"
            >
              <a
                href="#products"
                className="px-8 md:px-10 py-3 md:py-4 bg-[#2D5F3F] text-white text-[15px] md:text-[17px] font-semibold rounded-full hover:bg-[#234a31] transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                style={{
                  boxShadow: "0 8px 30px rgba(45, 95, 63, 0.25)",
                }}
              >
                Our Products
              </a>
              <a
                href="/contact"
                className="px-8 md:px-10 py-3 md:py-4 bg-white/70 backdrop-blur-sm text-[#2D5F3F] text-[15px] md:text-[17px] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                style={{
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(45, 95, 63, 0.2)",
                }}
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex relative items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[600px] h-[500px] lg:h-[600px]">
              <img
                src="/img/1.png"
                alt="Petroleum Products"
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-11 md:w-8 md:h-12 border-2 border-[#2D5F3F]/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-[#2D5F3F] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
