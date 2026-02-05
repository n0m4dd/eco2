import { useEffect } from 'react';
import type { FC } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'white' | 'green';
}

const AnimatedBackground: FC<AnimatedBackgroundProps> = ({ variant = 'white' }) => {
  useEffect(() => {
    // Инициализация particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: '#00c261' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 5, random: true },
          line_linked: { enable: true, distance: 150, color: '#00c261', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 1, direction: 'none', out_mode: 'out' },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
          modes: { repulse: { distance: 200 }, push: { particles_nb: 4 } },
        },
        retina_detect: true,
      });
    }
  }, []);

  const bgColor = variant === 'green'
    ? 'bg-gradient-to-br from-[#E6F5EB] via-[#F0F9F4] to-[#E6F5EB]'
    : 'bg-white';

  return (
    <div className={`fixed inset-0 -z-10 ${bgColor}`}>
      {/* Canvas для particles.js */}
      <div id="particles-js" className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default AnimatedBackground;
