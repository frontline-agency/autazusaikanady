import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) return <Navigate to="/blog" replace />;

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  // Split content into sections for image insertion
  const sections = post.content.split(/\n(?=##\s)/);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src={post.images[0].src}
          alt={post.images[0].alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--usa-navy))] via-[hsl(var(--usa-navy)/0.5)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/blog" className="text-usa-red text-sm font-semibold hover:underline mb-3 inline-flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" /> Blog
              </Link>
              <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/70 mt-4 text-sm">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("pl-PL", { year: "numeric", month: "long", day: "numeric" })}</time>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {sections.map((section, i) => (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="prose prose-lg max-w-none
                    prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-foreground
                    prose-li:text-muted-foreground
                    prose-ul:mb-4 prose-ol:mb-4"
                  dangerouslySetInnerHTML={{
                    __html: section
                      .replace(/^## (.+)/gm, '<h2>$1</h2>')
                      .replace(/^### (.+)/gm, '<h3>$1</h3>')
                      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                      .replace(/^- (.+)/gm, '<li>$1</li>')
                      .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
                      .replace(/\n{2,}/g, '</p><p>')
                      .replace(/^(?!<[hulo])/gm, (match) => match ? `<p>${match}` : '')
                  }}
                />
                {/* Insert image after 1st and 3rd sections */}
                {(i === 1 || i === 3) && post.images[i === 1 ? 1 : 2] && (
                  <motion.figure
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="my-8 rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={post.images[i === 1 ? 1 : 2].src}
                      alt={post.images[i === 1 ? 1 : 2].alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    <figcaption className="text-sm text-muted-foreground p-3 bg-muted text-center">
                      {post.images[i === 1 ? 1 : 2].alt}
                    </figcaption>
                  </motion.figure>
                )}
              </div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-usa-navy rounded-2xl p-8 text-center"
            >
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
                Zainteresowany importem auta z USA?
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                Skontaktuj się z nami i otrzymaj bezpłatną wycenę. Zajmujemy się wszystkim – od licytacji po rejestrację.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-usa-red hover:bg-usa-red text-primary-foreground font-bold uppercase tracking-wide group relative overflow-hidden">
                  <a href="/kontakt">
                    <span className="relative z-10">SKONTAKTUJ SIĘ</span>
                    <span className="absolute inset-0 bg-[hsl(var(--usa-navy)/0.5)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:+48502441033" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> +48 502 441 033
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-start gap-4">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="flex items-start gap-2 text-usa-red hover:underline text-sm max-w-[45%]">
                  <ArrowLeft className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-2">{prevPost.title}</span>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="flex items-start gap-2 text-usa-red hover:underline text-sm text-right max-w-[45%]">
                  <span className="line-clamp-2">{nextPost.title}</span>
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
