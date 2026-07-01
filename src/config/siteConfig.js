import siteContent from './site-content.json';
export const PLACEHOLDER = '/placeholder.svg';
export function getContent() { return siteContent; }
export function t(obj, lang = 'tr') {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.tr || obj.en || '';
}
export default siteContent;
