import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2D5F3F] via-[#1A4D2E] to-[#2D5F3F] text-white py-16 overflow-hidden">
      {/* Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10"></div>

      {/* Floating soft orbs */}
      <div
        className="absolute top-10 left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-10 right-[15%] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 mb-0">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8">
          {/* Логотип слева */}
          <img
            src="/img/logo.png"
            alt="ECOTRADE"
            className="h-10 brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]"
          />

          {/* Текст справа (по центру на мобильных) */}
          <p
            className="text-white/80 text-[14px] md:text-[13px] leading-relaxed max-w-md text-center md:text-right"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}
          >
            The copying of information (quoting of data or messages) published
            on the company's website (hereinafter referred to as the "Website")
            is allowed only with a reference to the source of such information.
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            boxShadow: "0 -1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          <p
            className="text-white/70 text-sm"
            style={{
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            © 2025 ECOTRADE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
