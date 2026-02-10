import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, ArrowRight, Phone, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const estimateReadTime = (content: string) => Math.max(3, Math.ceil(content.split(/\s+/).length / 200));

const BlogPost = () => {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) return <Navigate to="/blog" replace />;

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const readTime = estimateReadTime(post.content);

  // Split content into sections by h2 headers
  const sections = post.content.split(/\n(?=##\s)/);

  // Distribute images evenly across sections
  const getImageForSection = (sectionIndex: number): { src: string; alt: string } | null => {
    if (sectionIndex === 0) return null; // skip first section (intro)
    // Place image 1 after section 1, image 2 after section ~middle
    if (sectionIndex === 1 && post.images[1]) return post.images[1];
    const midPoint = Math.max(2, Math.floor(sections.length / 2));
    if (sectionIndex === midPoint && post.images[2]) return post.images[2];
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={post.images[0].src} alt={post.images[0].alt} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--usa-navy))] via-[hsl(var(--usa-navy)/0.6)] to-[hsl(var(--usa-navy)/0.15)]" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-usa-red text-sm font-semibold hover:underline mb-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-1.5">
                <ArrowLeft className="w-3.5 h-3.5" /> Wróć do bloga
              </Link>
              <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-5 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" })}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {readTime} min czytania
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  Auta z Ameryki USA
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Keywords bar */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-3.5 h-3.5 text-muted-foreground" />
            {post.keywords.map((kw) => (
              <span key={kw} className="text-xs bg-background text-muted-foreground rounded-full px-3 py-1 border border-border">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Lead paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-usa-red pl-6 italic"
            >
              {post.excerpt}
            </motion.p>

            {sections.map((section, i) => {
              const image = getImageForSection(i);
              return (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: renderSectionHtml(section) }}
                  />

                  {image && (
                    <motion.figure
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                      className="my-10 md:my-14 rounded-2xl overflow-hidden shadow-lg"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      <figcaption className="text-sm text-muted-foreground px-5 py-3 bg-muted/50 border-t border-border flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-usa-red flex-shrink-0" />
                        {image.alt}
                      </figcaption>
                    </motion.figure>
                  )}
                </div>
              );
            })}

            {/* Divider */}
            <div className="my-14 flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-usa-red" />
                <span className="w-2 h-2 rounded-full bg-usa-navy" />
                <span className="w-2 h-2 rounded-full bg-usa-red" />
              </div>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-usa-navy rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--usa-red)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--usa-red)) 0%, transparent 50%)`
                }} />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  Zainteresowany importem auta z USA?
                </h3>
                <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
                  Skontaktuj się z nami i otrzymaj bezpłatną wycenę. Zajmujemy się wszystkim – od licytacji po rejestrację.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" className="bg-usa-red hover:bg-usa-red text-primary-foreground font-bold uppercase tracking-wide text-lg px-8 py-6 group relative overflow-hidden">
                      <a href="/kontakt">
                        <span className="relative z-10">SKONTAKTUJ SIĘ</span>
                        <span className="absolute inset-0 bg-[hsl(var(--usa-navy)/0.5)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                      <a href="tel:+48502441033" className="flex items-center gap-2">
                        <Phone className="w-5 h-5" /> +48 502 441 033
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Post navigation */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="group p-5 rounded-xl border border-border hover:border-usa-red/30 hover:bg-muted/50 transition-all">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1 mb-2">
                    <ArrowLeft className="w-3 h-3" /> Poprzedni wpis
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-usa-red transition-colors line-clamp-2">{prevPost.title}</span>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="group p-5 rounded-xl border border-border hover:border-usa-red/30 hover:bg-muted/50 transition-all text-right md:col-start-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center justify-end gap-1 mb-2">
                    Następny wpis <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-usa-red transition-colors line-clamp-2">{nextPost.title}</span>
                </Link>
              ) : <div />}
            </div>

            {/* Related posts */}
            <div className="mt-16">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Inne artykuły, które mogą Cię zainteresować</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blogPosts
                  .filter((_, idx) => idx !== postIndex)
                  .slice(0, 4)
                  .map((related) => (
                    <Link key={related.slug} to={`/blog/${related.slug}`} className="group flex gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <img src={related.image} alt={related.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-usa-red transition-colors line-clamp-2">{related.title}</h4>
                        <span className="text-xs text-muted-foreground mt-1 block">{new Date(related.date).toLocaleDateString("pl-PL")}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

/** Render a markdown section to clean HTML with proper headings and paragraphs */
function renderSectionHtml(section: string): string {
  const lines = section.split('\n');
  let html = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('### ')) {
      html += `<h3>${trimmed.slice(4)}</h3>`;
    } else if (trimmed.startsWith('## ')) {
      html += `<h2>${trimmed.slice(3)}</h2>`;
    } else if (trimmed.startsWith('- ')) {
      html += `<li>${applyInline(trimmed.slice(2))}</li>`;
    } else {
      html += `<p>${applyInline(trimmed)}</p>`;
    }
  }

  // Wrap consecutive <li> in <ul>
  html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, (match) => `<ul>${match}</ul>`);

  return html;
}

function applyInline(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

export default BlogPost;
