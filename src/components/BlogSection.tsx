import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const posts = [
    {
      title: "Import samochodów z USA – czy warto? Analiza kosztów",
      excerpt: "Jednym z najczęściej pojawiających się pytań dotyczących importu samochodów ze Stanów Zjednoczonych jest związane z ostatecznymi kosztami. Czy sprowadzanie aut z USA jest opłacalne?",
      image: "https://autazusaikanady.pl/wp-content/uploads/2024/12/Designer-5-400x250.jpeg",
      date: "2024-12-15",
    },
    {
      title: "Jak wygląda aukcja pojazdów na COPART lub IAA?",
      excerpt: "Zastanawiasz się nad sprowadzeniem auta z USA ale potrzebna ci mała pomoc? Zapraszamy do przeczytania krótkiego poradnika na temat importu aut z USA.",
      image: "https://autazusaikanady.pl/wp-content/uploads/2024/12/Designer-2-400x250.jpeg",
      date: "2024-12-10",
    },
    {
      title: "Ile czasu potrzeba na sprowadzenie auta z USA do Polski?",
      excerpt: "Sprowadzanie samochodu z USA do Polski może być atrakcyjną opcją dla wielu osób poszukujących unikalnych modeli i atrakcyjnych cen.",
      image: "https://autazusaikanady.pl/wp-content/uploads/2024/12/Designer-8-400x250.jpeg",
      date: "2024-12-05",
    },
    {
      title: "Jak sprowadzić auto z USA bez ryzyka?",
      excerpt: "Coraz więcej kierowców rozważa import samochodów z USA. Dzięki temu można nabyć dobrze wyposażony pojazd w świetnym stanie technicznym.",
      image: "https://autazusaikanady.pl/wp-content/uploads/2025/02/Designer-7-400x250.jpeg",
      date: "2024-11-28",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-usa-light-blue" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-usa-red font-semibold uppercase tracking-wider">Blog</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Wiedza o imporcie aut z USA
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Praktyczne porady, analizy kosztów i wszystko, co musisz wiedzieć przed zakupem auta z USA
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="flex-none w-80 md:w-96 snap-start bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-usa-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-usa-red font-semibold text-sm hover:underline"
                  >
                    Czytaj dalej
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {posts.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-usa-red' : 'bg-muted-foreground/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
