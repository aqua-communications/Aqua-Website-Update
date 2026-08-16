import { useEffect } from 'react';

const SITE_URL = 'https://www.aquabd.pro';
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-bg.jpg`;

export default function usePageMeta({ title, description, path = '/', image = DEFAULT_IMAGE, robots = 'index,follow,max-image-preview:large' }) {
  useEffect(() => {
    const absoluteUrl = `${SITE_URL}${path}`;
    document.title = title;

    const setMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(property ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('robots', robots);
    setMeta('googlebot', robots);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', absoluteUrl, true);
    setMeta('og:image', image, true);
    setMeta('og:site_name', 'AQUA Innovations', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = absoluteUrl;
  }, [title, description, path, image, robots]);
}
