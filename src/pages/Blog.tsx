import { motion } from "framer-motion";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-usa-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--usa-navy))] to-[hsl(var(--usa-navy)/0.8)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-usa-red font-semibold uppercase tracking-wider">Blog</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2">
              Wiedza o imporcie aut z USA i Kanady
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
              Praktyczne porady, analizy kosztów i wszystko, co musisz wiedzieć przed zakupem auta z Ameryki
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative h-52 overflow-hidden">
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
                    <h2 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-usa-red transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-usa-red font-semibold text-sm">
                      Czytaj dalej <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-usa-red font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć na stronę główną
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
