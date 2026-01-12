import { useNewsList } from "@/hooks/use-news";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function News() {
  const { data: newsItems, isLoading } = useNewsList();

  return (
    <div className="min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">News & Events</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Stay updated with the latest happenings at De Peak School.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-gray-100 rounded-2xl animate-pulse"></div>
             ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems && newsItems.length > 0 ? (
              newsItems.map((news) => (
                <Card key={news.id} className="h-full border-none shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">
                      {news.category}
                    </div>
                    <img 
                      src={news.imageUrl} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-secondary" />
                      {new Date(news.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <h3 className="text-2xl font-bold font-serif text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {news.content}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-xl text-muted-foreground">No news updates available at the moment.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
