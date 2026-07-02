import siteContent from './site-content.json';
export const PLACEHOLDER = '/placeholder.svg';
export function getContent() { return siteContent; }
export function t(obj, lang = 'tr') {
  if (!obj) { console.warn('[Config] t() called with empty object'); return ''; }
  if (typeof obj === 'string') return obj;
  const val = obj[lang] || obj.tr || obj.en;
  if (!val) console.warn('[Config] Missing translation:', obj, 'lang:', lang);
  return val || '';
}
export default siteContent;
