import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import siteContent, { t } from '../../config/siteConfig';
import { stagger, itemFade } from '../../lib/animations';

export default function Gallery() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const G = siteContent.gallery;
  if (!G.images?.length) return null;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sm font-semibold text-[#C67B5C] tracking-[0.2em] uppercase">{t({ tr: 'Galeri', en: 'Gallery' }, lang)}</span>
          <h2 className="font-serif text-display text-[#3C2415] mt-3">{t(G.heading, lang)}</h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {G.images.map((img, i) => (
            <motion.div key={i} variants={itemFade}
              className={`rounded-2xl overflow-hidden bg-[#F5E1C8] ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''} aspect-square`}>
              <img src={img.src} alt={t(img.alt, lang)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
