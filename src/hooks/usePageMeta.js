import { useEffect } from 'react';

export const SITE_URL = 'https://aquabd.pro';
export const SITE_NAME = 'AQUA Innovations';
export const DEFAULT_IMAGE = `${SITE_URL}/images/hero-bg.jpg`;

const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

function toAbsoluteUrl(value) {
  if (!value) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}

export default function usePageMeta({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  imageAlt = 'AQUA Innovations brand activation and experience design work',
  robots = DEFAULT_ROBOTS,
  type = 'website',
  schema,
}) {
  useEffect(() => {
    const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
    const absoluteUrl = `${SITE_URL}${normalizedPath}`;
    const absoluteImage = toAbsoluteUrl(image);

    document.documentElement.lang = 'en';
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
    setMeta('bingbot', robots);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:url', absoluteUrl, true);
    setMeta('og:image', absoluteImage, true);
    setMeta('og:image:alt', imageAlt, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'en_US', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', absoluteImage);
    setMeta('twitter:image:alt', imageAlt);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = absoluteUrl;

    const schemaId = 'aqua-page-schema';
    let schemaTag = document.head.querySelector(`#${schemaId}`);
    if (schema) {
      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.type = 'application/ld+json';
        schemaTag.id = schemaId;
        document.head.appendChild(schemaTag);
      }
      schemaTag.textContent = JSON.stringify(schema);
    } else if (schemaTag) {
      schemaTag.remove();
    }
  }, [title, description, path, image, imageAlt, robots, type, schema]);
}
