import { Link, useParams } from 'react-router-dom';
import BlogArticle from '../components/blog/BlogArticle';
import RelatedBlogs from '../components/blog/RelatedBlogs';
import usePageMeta, { SITE_URL } from '../hooks/usePageMeta';
import useStructuredData from '../hooks/useStructuredData';
import { blogs } from '../data/blogs';

function buildSchema(blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.metaDescription,
    image: blog.imageAvailable ? [`${SITE_URL}${blog.image}`] : undefined,
    datePublished: blog.publishedDate,
    dateModified: blog.modifiedDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${blog.slug}` },
    author: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'AQUA Innovations', url: `${SITE_URL}/` },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'AQUA Innovations' },
    keywords: blog.keywords.join(', '),
    articleSection: blog.category,
    inLanguage: 'en',
  };
}

function BlogNotFound() {
  usePageMeta({ title: 'Blog Not Found | AQUA Innovations', description: 'The requested AQUA blog article could not be found.', path: '/blog/not-found', robots: 'noindex, follow' });
  return <main id="main-content" className="bg-[#f5f5f5] px-5 pb-20 pt-40 text-black"><div className="aqua-container"><p className="section-eyebrow text-[#0891b2]">AQUA Blogs</p><h1 className="mt-5 max-w-3xl text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.055em]">Article not found.</h1><p className="mt-7 max-w-xl text-[1.1rem] leading-relaxed text-black/62">This blog article does not exist or may have moved.</p><Link to="/blog" className="mt-8 inline-flex text-[10px] font-bold uppercase tracking-[0.14em] text-black/70 hover:text-[#0891b2]">Back to Blogs <span aria-hidden="true" className="ml-2">&#8594;</span></Link></div></main>;
}

function BlogArticleContent({ blog }) {
  const relatedBlogs = blogs.filter((item) => item.slug !== blog.slug);
  usePageMeta({ title: blog.seoTitle, description: blog.metaDescription, path: `/blog/${blog.slug}`, image: blog.image });
  useStructuredData(`blog-${blog.slug}`, buildSchema(blog));

  return (
    <main id="main-content" className="bg-[#f5f5f5] px-5 pb-20 pt-32 text-black md:pt-40">
      <div className="aqua-container">
        <BlogArticle blog={blog} />
        <div className="mx-auto mt-16 max-w-5xl">
          <RelatedBlogs blogs={relatedBlogs} />
          <section className="mt-16 border-t border-black/15 pt-10 md:mt-20" aria-labelledby="blog-contact-heading">
            <p className="section-eyebrow text-[#0891b2]">Start a conversation</p>
            <h2 id="blog-contact-heading" className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.05em]">Build what people remember.</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-black/62">Planning a brand activation, digital campaign or integrated brand experience?</p>
            <Link to="/contact" className="mt-7 inline-flex text-[10px] font-bold uppercase tracking-[0.14em] text-black/75 hover:text-[#0891b2]">Start a project with AQUA <span aria-hidden="true" className="ml-2">&#8594;</span></Link>
          </section>
        </div>
      </div>
    </main>
  );
}

export default function BlogArticlePage() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) return <BlogNotFound />;
  return <BlogArticleContent blog={blog} />;
}
