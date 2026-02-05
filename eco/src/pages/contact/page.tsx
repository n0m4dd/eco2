import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AnimatedBackground from '../../components/feature/AnimatedBackground';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
      formBody.append('company', formData.company);
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
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
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

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Address',
      content: 'Premises No. 5EB 644, Sixth Floor, Building Name 5 East B Dubai Airport Freezone, United Arab Emirate',
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      content: '+1 (555) 123-4567\n+1 (555) 123-4568',
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      content: 'info@ecotrd.com',
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground variant="white" />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-[56px] lg:text-[64px] font-bold text-black mb-4">
              Contact Us
            </h1>
            <p className="text-[18px] text-gray-600">
              Get in touch with our team for inquiries and support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2 bg-[#E6F5EB] rounded-[30px] p-10 lg:p-12"
            >
              <h2 className="text-[36px] lg:text-[48px] font-bold text-[#1A4D2E] mb-12">
                Get in Touch
              </h2>

              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                      <i className={`${info.icon} text-2xl text-[#2D5F3F]`}></i>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-[#1A4D2E] mb-2">
                        {info.title}
                      </h3>
                      <p className="text-[15px] text-gray-700 leading-relaxed whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-[#2D5F3F]/20">
                <h3 className="text-[18px] font-semibold text-[#1A4D2E] mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {['linkedin', 'twitter', 'facebook', 'instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2D5F3F] hover:bg-[#2D5F3F] hover:text-white transition-all duration-300 cursor-pointer"
                      aria-label={social}
                    >
                      <i className={`ri-${social}-fill text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-[30px] p-10 lg:p-12 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
                <h2 className="text-[32px] font-bold text-black mb-8">
                  Send us a Message
                </h2>

                <form id="contact-page-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[16px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2D5F3F] focus:ring-4 focus:ring-[#2D5F3F]/10 transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[16px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2D5F3F] focus:ring-4 focus:ring-[#2D5F3F]/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[16px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2D5F3F] focus:ring-4 focus:ring-[#2D5F3F]/10 transition-all duration-300"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[16px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2D5F3F] focus:ring-4 focus:ring-[#2D5F3F]/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message * (max 500 characters)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[16px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2D5F3F] focus:ring-4 focus:ring-[#2D5F3F]/10 transition-all duration-300 resize-none"
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
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
