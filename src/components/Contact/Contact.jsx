import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import siteContent, { t } from '../../config/siteConfig';
import { fadeUp } from '../../lib/animations';

export default function Contact() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const C = siteContent;
  const B = C.business;

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sm font-semibold text-[#C67B5C] tracking-[0.2em] uppercase">{t({ tr: 'Konum', en: 'Location' }, lang)}</span>
          <h2 className="font-serif text-display text-[#3C2415] mt-3">{t(C.contact.heading, lang)}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Harita */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5E1C8]">
            {C.contact.googleMapsEmbedUrl ? (
              <iframe src={C.contact.googleMapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#6B3524]/30 font-serif text-lg italic">Google Maps embed URL'si site-content.json'a eklenecek</div>
            )}
          </motion.div>

          {/* Bilgiler */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#3C2415] mb-2">{B.shortName}</h3>
              <p className="text-[#6B3524]/60">{B.address}</p>
            </div>

            <div className="space-y-4">
              {C.hours && (
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#F5E1C8] flex items-center justify-center"><svg className="w-5 h-5 text-[#C67B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9"/><path strokeLinecap="round" d="M12 7v5l3 3"/></svg></span>
                  <div>
                    <p className="text-sm font-semibold text-[#3C2415]">{t(C.hours.daysLabel, lang)}</p>
                    <p className="text-sm text-[#6B3524]/50">{C.hours.openHour}:00 — {C.hours.closeHour}:00</p>
                  </div>
                </div>
              )}

              {B.phone && (
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#F5E1C8] flex items-center justify-center"><svg className="w-5 h-5 text-[#C67B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></span>
                  <div>
                    <p className="text-sm font-semibold text-[#3C2415]">{t({ tr: 'Telefon', en: 'Phone' }, lang)}</p>
                    <a href={`tel:${B.phone}`} className="text-sm text-[#C67B5C] hover:underline">{B.phone}</a>
                  </div>
                </div>
              )}

              {B.email && (
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#F5E1C8] flex items-center justify-center"><svg className="w-5 h-5 text-[#C67B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></span>
                  <div>
                    <p className="text-sm font-semibold text-[#3C2415]">Email</p>
                    <a href={`mailto:${B.email}`} className="text-sm text-[#C67B5C] hover:underline">{B.email}</a>
                  </div>
                </div>
              )}
            </div>

            {C.contact.googleMapsUrl && (
              <a href={C.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C67B5C] text-white font-semibold rounded-full hover:bg-[#B0654A] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                {t({ tr: 'Yol Tarifi Al', en: 'Get Directions' }, lang)}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
