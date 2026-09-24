import { Link } from 'react-router-dom';

export default function RelatedBlogs({ blogs }) {
  return (
    <section className="border-t border-black/15 pt-8 md:pt-10" aria-labelledby="related-blogs-heading">
      <div className="flex items-end justify-between gap-5">
        <h2 id="related-blogs-heading" className="text-[1.8rem] md:text-[2.35rem] font-medium leading-none tracking-[-0.04em]">Related Insights</h2>
        <Link to="/blog" className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-black/55 hover:text-black sm:block">All blogs <span aria-hidden="true">&#8594;</span></Link>
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {blogs.map((blog) => (
          <Link key={blog.slug} to={`/blog/${blog.slug}`} className="group border-t border-black/12 pt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2]">
            <p className="section-eyebrow text-[#0891b2]">{blog.category}</p>
            <h3 className="mt-3 text-[1.15rem] font-medium leading-tight tracking-[-0.02em] group-hover:text-[#0891b2]">{blog.title}</h3>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-black/55">{blog.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
