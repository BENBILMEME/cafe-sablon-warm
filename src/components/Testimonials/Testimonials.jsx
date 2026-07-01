import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import siteContent, { t } from '../../config/siteConfig';

export default function Testimonials() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const T = siteContent.testimonials;
  if (!T.reviews?.length) return null;

  const [active, setActive] = useState(0);
  const r = T.reviews[active];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="text-sm font-semibold text-[#C67B5C] tracking-[0.2em] uppercase">{t({ tr: 'Yorumlar', en: 'Reviews' }, lang)}</span>
          <h2 className="font-serif text-display text-[#3C2415] mt-3">{t(T.heading, lang)}</h2>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E8C9A0]/20">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: r.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C67B5C]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="font-serif text-xl md:text-2xl text-[#3C2415] italic leading-relaxed mb-6">"{r.text}"</p>
              <p className="font-sans font-semibold text-[#3C2415]">{r.author}</p>
              <p className="text-sm text-[#6B3524]/50 mt-1">{r.date}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {T.reviews.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-10 bg-[#C67B5C]' : 'w-2 bg-[#E8C9A0]'}`}
                aria-label={`Yorum ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
