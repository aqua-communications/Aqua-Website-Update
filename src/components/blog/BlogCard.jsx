import { Link } from 'react-router-dom';

export default function BlogCard({ blog, index }) {
  return (
    <article className="group border-b border-black/15 pb-8 md:pb-10">
      <Link to={`/blog/${blog.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2] focus-visible:ring-offset-4">
        <div className="flex items-center justify-between gap-4">
          <p className="section-eyebrow text-[#0891b2]">{blog.category}</p>
          <span className="text-[9px] font-bold tracking-[0.18em] text-black/30">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h2 className="mt-8 text-[1.45rem] md:text-[1.75rem] font-medium leading-[1.08] tracking-[-0.03em] transition-colors group-hover:text-[#0891b2]">
          {blog.title}
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-bold uppercase tracking-[0.14em] text-black/40">
          <time dateTime={blog.publishedDate}>{blog.publishedDate}</time>
          <span>{blog.readingTime}</span>
        </div>
        {blog.imageAvailable && blog.image ? (
          <div className="relative mt-6 overflow-hidden border border-black/10 bg-black/5">
            <img src={blog.image} alt={blog.imageAlt || blog.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] md:h-64" />
            <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1.5 backdrop-blur-sm">
              <img src="/images/aqua-logo.png" alt="" aria-hidden="true" className="h-5 w-auto object-contain" />
            </span>
          </div>
        ) : null}
        <p className="mt-5 text-[0.94rem] leading-relaxed text-black/60">{blog.excerpt}</p>
        <span className="mt-7 inline-flex text-[10px] font-bold uppercase tracking-[0.14em] text-black/65 group-hover:text-[#0891b2]">Read article <span aria-hidden="true" className="ml-2">&#8594;</span></span>
      </Link>
    </article>
  );
}
