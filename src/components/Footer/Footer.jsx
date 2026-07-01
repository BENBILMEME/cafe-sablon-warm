import { useLocation } from 'react-router-dom';
import siteContent, { t } from '../../config/siteConfig';

export default function Footer() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const C = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#3C2415] text-[#FFF8F0]/70 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">{C.business.shortName}</h3>
            <p className="text-sm leading-relaxed">{C.business.address}</p>
            <p className="text-sm mt-3">{t(C.hours.displayText, lang)}</p>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">{t({ tr: 'Sayfalar', en: 'Pages' }, lang)}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`/${lang}#menu`} className="hover:text-white transition-colors">{t({ tr: 'Menü', en: 'Menu' }, lang)}</a></li>
              <li><a href={`/${lang}#about`} className="hover:text-white transition-colors">{t({ tr: 'Hikayemiz', en: 'Our Story' }, lang)}</a></li>
              <li><a href={`/${lang}#gallery`} className="hover:text-white transition-colors">{t({ tr: 'Galeri', en: 'Gallery' }, lang)}</a></li>
              <li><a href={`/${lang}#contact`} className="hover:text-white transition-colors">{t({ tr: 'Konum', en: 'Location' }, lang)}</a></li>
              <li><a href={`/${lang}#faq`} className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">{t({ tr: 'Sosyal Medya', en: 'Social Media' }, lang)}</h4>
            <ul className="space-y-2 text-sm">
              {C.social.instagram && <li><a href={C.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>}
              {C.social.googleMaps && <li><a href={C.social.googleMaps} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Maps</a></li>}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-xs">
          <p>© {year} {C.business.name}. {t({ tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' }, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
