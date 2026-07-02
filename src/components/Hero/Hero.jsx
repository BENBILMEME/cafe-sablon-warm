import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import siteContent, { t, PLACEHOLDER } from '../../config/siteConfig';
import { fadeUp } from '../../lib/animations';

export default function Hero() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const H = siteContent.hero;
  const C = siteContent;

  return (
    <section id="main-content" className="relative min-h-screen flex items-center bg-[#FFF8F0] overflow-hidden" aria-labelledby="hero-heading">
      {/* Arka plan deseni */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, #3C2415 1px, transparent 0)', backgroundSize: '50px 50px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Sol — Metin */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center lg:text-left">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5E1C8]/50 border border-[#E8C9A0]/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#6B8F71]" />
            <span className="text-xs font-medium text-[#6B3524] tracking-wide">{t(C.hours.displayText, lang)}</span>
          </motion.div>

          <h1 className="font-serif text-hero text-[#3C2415] mb-6 leading-[1.08]">
            {t(H.tagline, lang)}<br />
            <span className="italic text-[#C67B5C]">{t(H.tagline2, lang)}</span>
          </h1>

          <p className="text-lg text-[#6B3524]/70 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
            {t(H.description, lang)}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href={`/${lang}#menu`}
              className="px-8 py-4 bg-[#C67B5C] text-white font-semibold rounded-full hover:bg-[#B0654A] transition-all duration-300 shadow-[0_4px_20px_rgba(198,123,92,0.25)] hover:shadow-[0_8px_30px_rgba(198,123,92,0.35)]">
              {t(H.cta, lang)}
            </a>
            <a href={C.contact.googleMapsUrl || '#'} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#E8C9A0] text-[#6B3524] font-semibold rounded-full hover:border-[#C67B5C] hover:text-[#C67B5C] transition-all duration-300">
              {t(H.secondaryCta, lang)}
            </a>
          </div>

          {/* Rating */}
          <div className="mt-10 flex items-center gap-3 justify-center lg:justify-start text-sm text-[#6B3524]/60">
            <span className="flex items-center gap-1">★ ★ ★ ★ ★</span>
            <span className="font-semibold text-[#3C2415]">{C.business.rating}</span>
            <span>·</span>
            <span>{C.business.ratingPlatform}</span>
          </div>
        </motion.div>

        {/* Sağ — Büyük görsel */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#F5E1C8] shadow-2xl">
          <img src={PLACEHOLDER} alt={C.business.name}
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3C2415]/20 to-transparent" />
          {/* Floating badge */}
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg">
            <p className="font-serif text-lg font-semibold text-[#3C2415]">{t({ tr: 'El Yapımı', en: 'Handcrafted' }, lang)}</p>
            <p className="text-xs text-[#6B3524]/60">{t({ tr: 'Her gün taze', en: 'Fresh daily' }, lang)}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium text-[#6B3524]/40 tracking-[0.3em] uppercase">{t({ tr: 'Keşfet', en: 'Discover' }, lang)}</span>
        <motion.svg animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-4 h-4 text-[#6B3524]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></motion.svg>
      </motion.div>
    </section>
  );
}
