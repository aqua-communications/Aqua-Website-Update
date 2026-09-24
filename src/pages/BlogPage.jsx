import PageHero from '../components/common/PageHero';
import usePageMeta, { SITE_URL } from '../hooks/usePageMeta';
import useStructuredData from '../hooks/useStructuredData';
import BlogCard from '../components/blog/BlogCard';
import { blogs } from '../data/blogs';

const blogSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: 'AQUA Blogs',
      url: `${SITE_URL}/blog`,
      description: 'AQUA Innovations perspectives on brand activation, experience design, digital strategy, culture and technology in Bangladesh.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      blogPost: blogs.map((blog) => ({ '@id': `${SITE_URL}/blog/${blog.slug}` })),
    },
    {
      '@type': 'ItemList',
      numberOfItems: blogs.length,
      itemListElement: blogs.map((blog, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/blog/${blog.slug}`,
        name: blog.title,
      })),
    },
  ],
};

export default function BlogPage() {
  usePageMeta({
    title: 'AQUA Blogs | Ideas on Brand Experiences, Design & Culture',
    description: 'Read AQUA Innovations perspectives on brand activation, experience design, architecture, communication and technology in Bangladesh.',
    path: '/blog',
  });
  useStructuredData('blog', blogSchema);

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero
        eyebrow="AQUA Blogs"
        title="Ideas for"
        accent="what is next."
        description="Hard-coded perspectives from AQUA Innovations on brand activation, experience design, digital strategy, culture and technology in Bangladesh."
      />

      <section className="pb-16 md:pb-20" aria-label="AQUA blog articles">
        <div className="aqua-container border-t border-black/15">
          <div className="grid md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-12">
            {blogs.map((blog, index) => <BlogCard key={blog.slug} blog={blog} index={index} />)}
          </div>
          <p className="mt-8 text-[0.78rem] leading-relaxed text-black/45">
            AQUA Blogs is an editorial resource. New posts are added to the site directly by the AQUA team; there is no public publishing or submission form.
          </p>
        </div>
      </section>
    </main>
  );
}