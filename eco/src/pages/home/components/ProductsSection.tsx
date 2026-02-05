import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function ProductsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Navoiyazot Plant",
      description:
          "Mineral fertilizers and products from one of Uzbekistan’s largest chemical plants",
      icon: "ri-building-4-line",
      image: "/img/3.jpg",
      source: "navoiyazot",
    },
    {
      id: 2,
      title: "Maxam-Chirchiq Plant",
      description:
          "Nitrogen-based fertilizers and chemicals from a major production facility",
      icon: "ri-flask-line",
      image: "/img/4.jpg",
      source: "maxam-chirchiq",
    },
    {
      id: 3,
      title: "Dehkanabad Potash Plant",
      description:
        "Potash fertilizers produced at a strategic mining and processing facility",
      icon: "ri-leaf-line",
      image: "/img/5.jpg",
      source: "dehkanabad",
    },
  ];

  const handleNavigate = (source: string) => {
    navigate(`/products?source=${encodeURIComponent(source)}`);
  };

  return (
    <section
      id="products"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* White background */}
      <div className="absolute inset-0 bg-white"></div>

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
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            Product Origins
          </h2>
          <p
            className="text-[18px] lg:text-[20px] text-gray-600/80"
            style={{
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            Products supplied from key manufacturing facilities
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group cursor-pointer"
              onClick={() => handleNavigate(product.source)}
            >
              <div
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(45, 95, 63, 0.1)",
                }}
              >
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Icon Badge */}
                  <div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    style={{
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <i
                      className={`${product.icon} text-2xl text-[#2D5F3F]`}
                    ></i>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-[22px] font-semibold text-black/90 mb-3"
                    style={{
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="text-[16px] text-gray-600/80 leading-relaxed mb-4"
                    style={{
                      textShadow: "0 1px 4px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Learn More (visual only) */}
                  <span className="flex items-center gap-2 text-[#2D5F3F] font-medium group-hover:gap-3 transition-all duration-300">
                    <span className="text-[15px]">Learn more</span>
                    <i className="ri-arrow-right-line text-lg"></i>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
