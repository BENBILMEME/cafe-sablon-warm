import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import siteContent, { t } from '../../config/siteConfig';

export default function FAQ() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const F = siteContent.faq;
  if (!F.questions?.length) return null;

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FFF8F0]">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sm font-semibold text-[#C67B5C] tracking-[0.2em] uppercase">FAQ</span>
          <h2 className="font-serif text-display text-[#3C2415] mt-3">{t(F.heading, lang)}</h2>
        </motion.div>

        <div className="space-y-3">
          {F.questions.map((q, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#E8C9A0]/30 overflow-hidden">
              <button type="button" onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-sans font-medium text-[#3C2415] hover:text-[#C67B5C] transition-colors">
                <span className="pr-4">{t(q.question, lang)}</span>
                <motion.svg animate={{ rotate: openIdx === i ? 45 : 0 }} className="w-5 h-5 shrink-0 text-[#C67B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></motion.svg>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-[#6B3524]/60 leading-relaxed">{t(q.answer, lang)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
