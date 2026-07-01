import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import siteContent, { t } from '../../config/siteConfig';
import { stagger, itemFade } from '../../lib/animations';

const CoffeeIcon = () => (<svg className="w-6 h-6 text-[#C67B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zm4-4h8v4H6V4z"/></svg>);
const FoodIcon = () => (<svg className="w-6 h-6 text-[#C67B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>);
const DrinkIcon = () => (<svg className="w-6 h-6 text-[#C67B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16l-1.5 14.5a2 2 0 01-2 1.5H7.5a2 2 0 01-2-1.5L4 4zm4 8h8"/></svg>);

const ICONS = { coffee: CoffeeIcon, food: FoodIcon, drinks: DrinkIcon };

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

        {Object.entries(ICONS).map(([catId, Icon]) => {
          const items = menu[catId] || [];
          if (!items.length) return null;
          return (
            <div key={catId} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Icon />
                <h3 className="font-serif text-2xl font-semibold text-[#3C2415]">{t({ tr: { coffee: 'Kahve', food: 'Yiyecek', drinks: 'İçecek' }[catId], en: { coffee: 'Coffee', food: 'Food', drinks: 'Drinks' }[catId] }, lang)}</h3>
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
