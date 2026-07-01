import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import siteContent, { t, PLACEHOLDER } from '../../config/siteConfig';
import { fadeUp } from '../../lib/animations';

export default function About() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const A = siteContent.about;
  const B = siteContent.business;

  const HIGHLIGHTS = [
    { icon: '☕', label: { tr: 'Özel Kavrum', en: 'Specialty Roast' }, desc: { tr: 'En kaliteli çekirdekler', en: 'Finest beans' } },
    { icon: '🧈', label: { tr: 'El Yapımı', en: 'Handcrafted' }, desc: { tr: 'Günlük taze üretim', en: 'Fresh daily' } },
    { icon: '🌿', label: { tr: 'Doğal', en: 'Natural' }, desc: { tr: 'Koruyucusuz, katkısız', en: 'No preservatives' } },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol — Görsel */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#F5E1C8] order-2 lg:order-1">
            <img src={PLACEHOLDER} alt={t(A.heading, lang)} className="w-full h-full object-cover" />
          </motion.div>

          {/* Sağ — Metin */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-[#C67B5C] tracking-[0.2em] uppercase">{t(A.title, lang)}</span>
            <h2 className="font-serif text-display text-[#3C2415] mt-3 mb-6">{t(A.heading, lang)}</h2>
            <p className="text-lg text-[#6B3524]/70 leading-relaxed mb-8">{t(A.description, lang)}</p>

            {/* Öne çıkanlar */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {HIGHLIGHTS.map(h => (
                <div key={h.icon} className="text-center p-4 rounded-2xl bg-white border border-[#E8C9A0]/30">
                  <span className="text-2xl">{h.icon}</span>
                  <p className="font-serif text-sm font-semibold text-[#3C2415] mt-2">{t(h.label, lang)}</p>
                  <p className="text-xs text-[#6B3524]/50 mt-1">{t(h.desc, lang)}</p>
                </div>
              ))}
            </div>

            {/* Rating + Hours */}
            <div className="flex flex-wrap gap-6 text-sm text-[#6B3524]/60">
              <span>★ {B.rating} {B.ratingPlatform}</span>
              <span className="w-px h-4 bg-[#E8C9A0]" />
              <span>{t(siteContent.hours.displayText, lang)}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
