import { Link } from 'react-router-dom';

function renderParts(parts) {
  return parts.map((part, index) => (part.href ? <Link key={`${part.text}-${index}`} to={part.href} className="font-medium text-[#087f99] underline decoration-black/20 underline-offset-4 hover:text-black">{part.text}</Link> : <span key={`${part.text}-${index}`}>{part.text}</span>));
}

function ContentBlock({ block }) {
  if (block.type === 'intro') return <p className="text-[1.15rem] md:text-[1.3rem] leading-[1.55] text-black/78">{block.text}</p>;
  if (block.type === 'heading') return <h2 className="pt-5 text-[1.65rem] md:text-[2.15rem] font-medium leading-[1.05] tracking-[-0.035em]">{block.text}</h2>;
  if (block.type === 'paragraph') return <p className="text-[1rem] md:text-[1.06rem] leading-[1.75] text-black/72">{block.parts ? renderParts(block.parts) : block.text}</p>;
  if (block.type === 'list') {
    const List = block.ordered ? 'ol' : 'ul';
    return <List className={`${block.ordered ? 'list-decimal' : 'list-disc'} space-y-2 pl-6 text-[1rem] md:text-[1.06rem] leading-[1.7] text-black/72`}>{block.items.map((item) => <li key={item}>{item}</li>)}</List>;
  }
  if (block.type === 'faq') return <div className="border-t border-black/10 pt-5"><h3 className="text-[1.05rem] md:text-[1.15rem] font-medium leading-tight">{block.question}</h3><p className="mt-2 text-[1rem] leading-[1.7] text-black/70">{block.answer}</p></div>;
  if (block.type === 'final') return <footer className="border-t-2 border-black pt-6"><h2 className="text-[1.65rem] md:text-[2.15rem] font-medium leading-[1.05] tracking-[-0.035em]">Final Thought</h2><p className="mt-4 text-[1.05rem] md:text-[1.15rem] leading-[1.65] text-black/78">{block.text}</p></footer>;
  return null;
}

export default function BlogArticle({ blog }) {
  return (
    <article className="mx-auto max-w-3xl">
      <header>
        <p className="section-eyebrow text-[#0891b2]">{blog.category}</p>
        <h1 className="mt-5 text-[clamp(2.7rem,6vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.055em]">{blog.title}</h1>
        <p className="mt-7 max-w-2xl text-[1.12rem] md:text-[1.25rem] leading-relaxed text-black/62">{blog.excerpt}</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[0.15em] text-black/42">
          <time dateTime={blog.publishedDate}>Published {blog.publishedDate}</time>
          <span>{blog.readingTime}</span>
        </div>
      </header>

      <figure className="mt-10 aspect-[16/8] overflow-hidden border border-black/10 bg-[#85ffff]" aria-label={blog.imageAlt}>
        <div className="flex h-full items-end justify-between p-5 md:p-8">
          <span className="text-[clamp(2rem,6vw,5rem)] font-medium uppercase leading-[0.85] tracking-[-0.06em] text-black/80">AQUA<br />{blog.category}</span>
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/55">AQUA Blogs</span>
        </div>
      </figure>

      <section className="mt-12 space-y-7" aria-label={`${blog.title} article body`}>
        {blog.content.map((block, index) => <ContentBlock key={`${block.type}-${block.text || block.question || index}`} block={block} />)}
      </section>
    </article>
  );
}
