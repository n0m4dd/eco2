import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('message', formData.message);

      const response = await fetch('https://', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/60 backdrop-blur-2xl rounded-[60px] p-12 lg:p-20 mx-4 lg:mx-20 relative overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
          }}
        >
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#E6F5EB]/20 pointer-events-none rounded-[60px]"></div>
          
          {/* Floating orb */}
          <motion.div
            className="absolute top-10 right-10 w-[200px] h-[200px] rounded-full pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(circle, rgba(45, 95, 63, 0.3) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left Content */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-[12px] font-semibold text-[#2D5F3F] uppercase tracking-[2px] mb-5 block"
                style={{
                  textShadow: '0 2px 8px rgba(45, 95, 63, 0.15)',
                }}
              >
                Get In Touch
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-[36px] lg:text-[48px] font-semibold text-black/90 leading-tight mb-6"
                style={{
                  textShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                }}
              >
                Let's Work Together
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-[17px] text-gray-600/90 leading-relaxed mb-8"
                style={{
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                }}
              >
                Have questions about our products or services? Our team is ready to help you find the perfect solution for your business needs.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="space-y-5"
              >
                {[
                  { icon: 'ri-mail-line', text: 'info@ecotrd.com' },
                  { icon: 'ri-map-pin-line', text: 'Premises No. 5EB 644, Sixth Floor, Building Name 5 East B Dubai Airport Freezone, United Arab Emirate' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div 
                      className="w-12 h-12 bg-[#E6F5EB]/50 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E6F5EB]/80 transition-all duration-300"
                      style={{
                        boxShadow: '0 4px 16px rgba(45, 95, 63, 0.1)',
                      }}
                    >
                      <i className={`${item.icon} text-[#2D5F3F] text-xl`}></i>
                    </div>
                    <span 
                      className="text-[16px] text-gray-700/80"
                      style={{
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <form id="contact-form" className="space-y-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 bg-white/60 backdrop-blur-xl border-0 rounded-2xl text-[15px] text-gray-800 placeholder-gray-500/60 focus:outline-none focus:ring-2 focus:ring-[#2D5F3F]/30 transition-all duration-300"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 bg-white/60 backdrop-blur-xl border-0 rounded-2xl text-[15px] text-gray-800 placeholder-gray-500/60 focus:outline-none focus:ring-2 focus:ring-[#2D5F3F]/30 transition-all duration-300"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                    className="w-full px-6 py-4 bg-white/60 backdrop-blur-xl border-0 rounded-2xl text-[15px] text-gray-800 placeholder-gray-500/60 focus:outline-none focus:ring-2 focus:ring-[#2D5F3F]/30 transition-all duration-300"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message (max 500 characters)"
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-6 py-4 bg-white/60 backdrop-blur-xl border-0 rounded-2xl text-[15px] text-gray-800 placeholder-gray-500/60 focus:outline-none focus:ring-2 focus:ring-[#2D5F3F]/30 transition-all duration-300 resize-none"
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-2 text-right">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#2D5F3F] text-white text-[18px] font-semibold rounded-xl hover:bg-[#1A4D2E] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
                  >
                    Something went wrong. Please try again or check message length.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
