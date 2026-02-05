import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AnimatedBackground from '../../components/feature/AnimatedBackground';

interface Product {
  id: number;
  name: string;
  category: string;
  source: 'navoiyazot' | 'maxam-chirchiq' | 'dehkanabad';
  description: string;
  fullDescription: string;
  specifications: string[];
  applications: string[];
  image: string;
}

export default function Products() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  const categories = [
  'All',
  'Navoiyazot',
  'Maxam-Chirchiq',
  'Dehkanabad',
  ];

  const productsPlaceholderImage = '/img/10.jpg';

  const products: Product[] = [
  // =========================
  // NAVOIYAZOT
  // =========================
  {
    id: 1,
    name: 'Urea (Granulated), Grade A & B',
    category: 'Navoiyazot',
    source: 'navoiyazot',
    description:
      'Granulated urea used as a nitrogen fertilizer and as a raw material for industrial chemical production.',
    fullDescription:
      'Granulated urea (carbamide) is produced in Grade A for industrial applications and Grade B for agriculture and livestock farming. The product provides a high nitrogen content and stable physical properties suitable for storage, transportation, and application.',
    specifications: [
      'Nitrogen content: ≥ 46%',
      'Grades available: A (industrial), B (agricultural)',
      'Form: Granules',
      'Biuret content: up to 1.4%',
      'Non-combustible and explosion-proof',
      'Fully water-soluble',
    ],
    applications: [
      'Mineral fertilizers',
      'Chemical industry',
      'Resins and adhesives production',
      'Crop growing',
      'Livestock feed additive',
    ],
    image: '/img/12.png',
  },
  {
    id: 2,
    name: 'Ammonium Nitrate',
    category: 'Navoiyazot',
    source: 'navoiyazot',
    description:
      'Universal nitrogen fertilizer providing fast and long-lasting nutrition for crops.',
    fullDescription:
      'Ammonium nitrate is a high-concentration nitrogen fertilizer suitable for a wide range of crops and soil types. It is produced in granular form and can be applied as a base fertilizer or during the growing season.',
    specifications: [
      'Nitrogen content: approx. 34%',
      'Form: Granular',
      'Fully water-soluble',
      'Rapid nitrogen availability',
      'Suitable for all soil types',
    ],
    applications: [
      'Agriculture',
      'Crop fertilization',
      'Industrial chemical production',
      'Complex fertilizer manufacturing',
    ],
    image: '/img/13.png',
  },

  // =========================
  // MAXAM-CHIRCHIQ
  // =========================
  {
    id: 3,
    name: 'Urea (Prilled), Grade A & B',
    category: 'Maxam-Chirchiq',
    source: 'maxam-chirchiq',
    description:
      'Prilled urea designed for agricultural and industrial applications.',
    fullDescription:
      'Prilled urea is produced in Grade A for industrial use and Grade B for agricultural applications. The prilled form ensures uniform application and rapid dissolution.',
    specifications: [
      'Nitrogen content: ≥ 46%',
      'Grades: A (industry), B (agriculture)',
      'Form: Prills',
      'High solubility',
      'Stable during storage',
    ],
    applications: [
      'Agriculture',
      'Industrial chemistry',
      'Fertilizer blending',
    ],
    image: '/img/14.png',
  },
  {
    id: 4,
    name: 'Ammonium Nitrate with Calcium & Magnesium',
    category: 'Maxam-Chirchiq',
    source: 'maxam-chirchiq',
    description:
      'Nitrogen fertilizer enriched with calcium and magnesium for improved crop nutrition.',
    fullDescription:
      'Ammonium nitrate produced with calcium and magnesium additives to enhance granule strength, improve storage stability, and provide additional macronutrients.',
    specifications: [
      'Nitrogen content: approx. 34%',
      'Calcium and magnesium enriched',
      'Granular form',
      'Improved mechanical strength',
      'Reduced caking',
    ],
    applications: [
      'Agriculture',
      'Cereal crops',
      'Vegetables and legumes',
    ],
    image: '/img/15.png',
  },

  // =========================
  // DEHKANABAD
  // =========================
  {
    id: 5,
    name: 'Potassium Chloride',
    category: 'Dehkanabad',
    source: 'dehkanabad',
    description:
      'Potassium fertilizer used in agriculture and industrial applications.',
    fullDescription:
      'Potassium chloride is a widely used potash fertilizer suitable for crop production and industrial processing. It provides a high potassium content and stable physical properties.',
    specifications: [
      'Potassium content (K2O): ≥ 60%',
      'Form: Crystals or granules',
      'Moisture content: ≤ 1%',
      'Free-flowing material',
      'Non-combustible',
    ],
    applications: [
      'Agriculture',
      'Crop fertilization',
      'Chemical industry',
      'Feed and food additives',
    ],
    image: '/img/16.png',
  },
];


  const filteredProducts = products.filter(p => {
    const categoryMatch =
      selectedCategory === 'All' || p.category === selectedCategory;

    const sourceMatch =
      !selectedSource || p.source === selectedSource;

    return categoryMatch && sourceMatch;
  });


  useEffect(() => {
    const productId = searchParams.get('id');
    if (productId) {
      const product = products.find(p => p.id === parseInt(productId));
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const sourceFromUrl = searchParams.get('source');

    if (sourceFromUrl) {
      setSelectedSource(sourceFromUrl);

      const categoryMap: Record<string, string> = {
        'navoiyazot': 'Navoiyazot',
        'maxam-chirchiq': 'Maxam-Chirchiq',
        'dehkanabad': 'Dehkanabad',
      };

      setSelectedCategory(categoryMap[sourceFromUrl] ?? 'All');
    } else {
      setSelectedSource(null);
      setSelectedCategory('All');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams]);

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
            className="text-center mb-12"
          >
            <h1 className="text-[56px] lg:text-[64px] font-bold text-black mb-4">
              Product Catalog
            </h1>
            <p className="text-[18px] text-gray-600">
              Explore our comprehensive range of chemical and petroleum products
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSource(null); // 🔥 ВАЖНО
                }}
                className={`px-8 py-3 rounded-full text-[15px] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#2D5F3F] text-white shadow-lg'
                    : 'bg-transparent border border-gray-300 text-gray-700 hover:border-[#2D5F3F]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-[#E6F5EB] text-[#2D5F3F] text-[10px] font-semibold uppercase tracking-wider rounded-full mb-3">
                      {product.category}
                    </span>

                    <h3 className="text-[18px] font-semibold text-black mb-2 group-hover:text-[#2D5F3F] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-[32px] max-w-[1000px] w-full my-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:rotate-90 transition-transform duration-300 cursor-pointer z-10"
                aria-label="Close"
              >
                <i className="ri-close-line text-2xl text-gray-800"></i>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[85vh] overflow-y-auto">
                {/* Left - Image */}
                <div className="relative h-[400px] lg:h-auto">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Right - Information */}
                <div className="p-8 lg:p-12">
                  <span className="inline-block px-4 py-1.5 bg-[#E6F5EB] text-[#2D5F3F] text-[11px] font-semibold uppercase tracking-wider rounded-full mb-4">
                    {selectedProduct.category}
                  </span>

                  <h2 className="text-[32px] lg:text-[36px] font-bold text-black mb-6">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-[17px] text-gray-700 leading-relaxed mb-8">
                    {selectedProduct.fullDescription}
                  </p>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h3 className="text-[20px] font-semibold text-black mb-4 flex items-center gap-2">
                      <i className="ri-file-list-line text-[#2D5F3F]"></i>
                      Specifications
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.specifications.map((spec, index) => (
                        <li key={index} className="flex items-start gap-2 text-[15px] text-gray-600">
                          <i className="ri-checkbox-circle-fill text-[#2D5F3F] mt-0.5"></i>
                          <span dangerouslySetInnerHTML={{ __html: spec }}></span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h3 className="text-[20px] font-semibold text-black mb-4 flex items-center gap-2">
                      <i className="ri-apps-line text-[#2D5F3F]"></i>
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-700 text-[14px] rounded-lg"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      window.location.href = '/contact';
                    }}
                    className="w-full py-4 bg-[#2D5F3F] text-white text-[16px] font-semibold rounded-xl hover:bg-[#1A4D2E] transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
