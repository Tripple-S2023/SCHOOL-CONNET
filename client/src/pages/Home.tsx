import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Star, Languages, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { useNewsList } from "@/hooks/use-news";

export default function Home() {
  const { data: newsItems } = useNewsList();
  const latestNews = newsItems?.slice(0, 3) || [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-white hero-gradient">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-secondary text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
              Welcome to De Peak School
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Raising God-fearing Leaders <br className="hidden md:block" /> with <span className="text-secondary">Academic Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
              We combine rigorous academic training with deep moral instruction to prepare students for global leadership rooted in Christian values.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                  Apply for Admission
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-full w-full sm:w-auto">
                  Discover More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Unsplash image: Students studying in library/classroom */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-tl-3xl z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-br-3xl z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1577896334614-201b31d50863?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students studying" 
                  className="rounded-2xl shadow-xl relative z-10 w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader 
                title="A Foundation for Life" 
                subtitle="Why Choose Us" 
                alignment="left"
                className="mb-8"
              />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At De Peak School, we believe that education is more than just academic grades. It is about shaping character, building resilience, and fostering a deep sense of purpose.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Located in a serene environment conducive for learning, we offer a unique blend of the Nigerian and British curricula, enriched with strong Christian moral instruction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: BookOpen, title: "Christian Values", text: "Bible-based moral instruction integrated into learning." },
                  { icon: Star, title: "Academic Excellence", text: "Outstanding performance in national examinations." },
                  { icon: Languages, title: "Multilingual", text: "Proficiency in English, French, and Yoruba." },
                  { icon: GraduationCap, title: "Future Leaders", text: "Mentorship programs for leadership development." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/5 p-3 rounded-lg text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader 
              title="Latest from School" 
              subtitle="News & Events" 
              alignment="left"
              className="mb-0"
            />
            <Link href="/news">
              <Button variant="ghost" className="text-primary hover:text-secondary group font-semibold">
                View All News <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.length > 0 ? (
              latestNews.map((news) => (
                <Link href={`/news`} key={news.id}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full z-10">
                        {news.category}
                      </div>
                      <img 
                        src={news.imageUrl} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-3">{new Date(news.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                      <h3 className="text-xl font-bold font-serif text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 text-sm">
                        {news.content}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              // Placeholder skeleton if no news
              [1, 2, 3].map((i) => (
                <Card key={i} className="h-full border-none shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse" />
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Start Your Child's Journey to Excellence</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Admissions are currently open for the upcoming academic session. Join the De Peak School family today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold text-lg px-10 py-6 rounded-full">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-primary font-bold text-lg px-10 py-6 rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
