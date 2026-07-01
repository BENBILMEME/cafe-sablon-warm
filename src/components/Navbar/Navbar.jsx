import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import siteContent, { t } from '../../config/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const C = siteContent;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#FFF8F0]/95 backdrop-blur-lg shadow-sm border-b border-[#E8C9A0]/30' : 'bg-transparent'
      }`}>
      <nav className="max-w-6xl mx-auto flex h-16 md:h-20 items-center justify-between px-6">
        <a href={`/${lang}`} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#C67B5C] flex items-center justify-center text-white font-serif text-lg font-bold group-hover:bg-[#B0654A] transition-colors">C</div>
          <span className="font-serif text-xl font-semibold text-[#3C2415]">{C.business.shortName}</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: t({ tr: 'Menü', en: 'Menu' }, lang), href: '#menu' },
            { label: t({ tr: 'Hikayemiz', en: 'Our Story' }, lang), href: '#about' },
            { label: t({ tr: 'Galeri', en: 'Gallery' }, lang), href: '#gallery' },
            { label: t({ tr: 'Konum', en: 'Location' }, lang), href: '#contact' },
          ].map(link => (
            <a key={link.href} href={`/${lang}${link.href}`}
              className="text-sm font-medium text-[#6B3524] hover:text-[#C67B5C] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C67B5C] after:transition-all hover:after:w-full">{link.label}</a>
          ))}
          <div className="flex items-center gap-1 ml-2 border-l border-[#E8C9A0] pl-4">
            <a href="/tr" className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${lang === 'tr' ? 'bg-[#C67B5C] text-white' : 'text-[#6B3524] hover:text-[#C67B5C]'}`}>TR</a>
            <a href="/en" className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${lang === 'en' ? 'bg-[#C67B5C] text-white' : 'text-[#6B3524] hover:text-[#C67B5C]'}`}>EN</a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
