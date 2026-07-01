import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import siteContent, { t } from '../../config/siteConfig';
import { stagger, itemFade } from '../../lib/animations';

const CATEGORIES = [
  { id: 'coffee', label: { tr: 'Kahve', en: 'Coffee' }, icon: '☕' },
  { id: 'food', label: { tr: 'Yiyecek', en: 'Food' }, icon: '🥐' },
  { id: 'drinks', label: { tr: 'İçecekler', en: 'Drinks' }, icon: '🍹' },
];

export default function MenuSection() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';
  const menu = siteContent.menuItems;

  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sm font-semibold text-[#C67B5C] tracking-[0.2em] uppercase">{t({ tr: 'Menü', en: 'Menu' }, lang)}</span>
          <h2 className="font-serif text-display text-[#3C2415] mt-3 mb-4">{t({ tr: 'Lezzetlerimiz', en: 'Our Flavors' }, lang)}</h2>
          <p className="text-[#6B3524]/60 max-w-lg mx-auto">{t({ tr: 'Mevsimin en taze malzemeleriyle hazırlanan seçkimiz', en: 'Our selection prepared with the freshest seasonal ingredients' }, lang)}</p>
        </motion.div>

        {CATEGORIES.map((cat, ci) => {
          const items = menu[cat.id] || [];
          if (!items.length) return null;
          return (
            <div key={cat.id} className={`mb-16 ${ci % 2 === 0 ? '' : ''}`}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-serif text-2xl font-semibold text-[#3C2415]">{t(cat.label, lang)}</h3>
                <div className="flex-1 h-px bg-[#E8C9A0]/50 ml-4" />
              </div>
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(item => (
                  <motion.div key={item.id} variants={itemFade}
                    className="group flex justify-between items-center p-5 rounded-2xl hover:bg-[#FFF8F0] transition-colors duration-300 border border-transparent hover:border-[#E8C9A0]/50 cursor-default">
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-[#3C2415] group-hover:text-[#C67B5C] transition-colors">{t(item.name, lang)}</h4>
                      <p className="text-sm text-[#6B3524]/50 mt-0.5">{t(item.description, lang)}</p>
                    </div>
                    <span className="font-serif text-lg font-semibold text-[#C67B5C] shrink-0 ml-4">{item.price}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
