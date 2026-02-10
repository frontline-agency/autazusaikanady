import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, ArrowLeft, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleCount = isMobile ? 1 : 3;
  const maxIndex = blogPosts.length - visibleCount;

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, maxIndex)), [maxIndex]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  // Auto-advance
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isInView, maxIndex]);

  return (
    <section id="blog" className="py-20 bg-usa-light-blue" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Blog</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Wiedza o imporcie aut z USA
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Praktyczne porady, analizy kosztów i wszystko, co musisz wiedzieć przed zakupem auta z USA
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:bg-usa-red hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:hover:bg-background disabled:hover:text-foreground"
            aria-label="Poprzedni wpis"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:bg-usa-red hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:hover:bg-background disabled:hover:text-foreground"
            aria-label="Następny wpis"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${current * (100 / visibleCount + (6 * 4) / (visibleCount * 16))}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              style={{ width: `${(blogPosts.length / visibleCount) * 100}%` }}
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.6 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                  style={{ width: `${100 / blogPosts.length * visibleCount - 2}%`, flexShrink: 0 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("pl-PL")}</time>
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-usa-red transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-usa-red font-semibold text-sm">
                        Czytaj dalej <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-usa-red w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Przejdź do slajdu ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Link to full blog */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button asChild className="bg-usa-red hover:bg-usa-red text-primary-foreground font-bold uppercase tracking-wide group relative overflow-hidden">
            <Link to="/blog">
              <span className="relative z-10">ZOBACZ WSZYSTKIE WPISY</span>
              <span className="absolute inset-0 bg-[hsl(var(--usa-navy))] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
