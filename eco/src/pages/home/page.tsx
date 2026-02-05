import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AnimatedBackground from '../../components/feature/AnimatedBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ProductsSection from './components/ProductsSection';
import PartnersSection from './components/PartnersSection';
import MainProductsSection from './components/MainProductsSection';
import FactoriesSection from './components/FactoriesSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground variant="white" />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProductsSection />
        <PartnersSection />
     {/*<MainProductsSection />*/}
        <FactoriesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
