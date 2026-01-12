import { SectionHeader } from "@/components/SectionHeader";
import { Music, Users, BookOpen, Trophy } from "lucide-react";

export default function SchoolLife() {
  return (
    <div className="min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://pixabay.com/get/g0f4ca7a5979acd679b4cbc56f7a23da0de475717424c7c79e5baaded0e9aaa119ed3a3bea0ff73182fbb5e128605ad54e067338386bdf974d272eb4bcf293162_1280.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">School Life</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Beyond the classroom - building character and community.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        
        {/* Spiritual Life */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary rounded-2xl z-0"></div>
              {/* Unsplash image: Students praying or in assembly */}
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
                alt="Chapel service" 
                className="rounded-2xl shadow-lg relative z-10 w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
               <BookOpen className="h-6 w-6 text-secondary" />
               <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">Spiritual Life</h3>
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Faith & Devotion</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Christianity is at the heart of life at De Peak School. Each day begins with devotions and prayer, and our timetable includes regular chapel services, Scripture study and small‑group discipleship. Spiritual formation is infused into lessons so students grow in faith as they learn.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="h-2 w-2 rounded-full bg-secondary mt-2 mr-3"></span>
                <span className="text-gray-700">Weekly Chapel Services with worship and teaching.</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 rounded-full bg-secondary mt-2 mr-3"></span>
                <span className="text-gray-700">Moral instruction classes integrated into timetable.</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 rounded-full bg-secondary mt-2 mr-3"></span>
                <span className="text-gray-700">Scripture memorization and bible study groups.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Extracurriculars */}
        <div className="mb-24">
          <SectionHeader title="Extracurricular Activities" subtitle="Talent Development" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all group text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Music className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Music & Arts</h3>
              <p className="text-muted-foreground">Choir, orchestra, drama club, and visual arts competitions to express creativity.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all group text-center">
               <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sports</h3>
              <p className="text-muted-foreground">Football, basketball, athletics, and swimming to build teamwork and fitness.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all group text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Clubs & Societies</h3>
              <p className="text-muted-foreground">JET Club, Debate Society, Red Cross, and Press Club for intellectual growth.</p>
            </div>
          </div>
        </div>

        {/* Discipline */}
        <div className="bg-navy rounded-3xl p-8 md:p-16 text-white text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-secondary">A Culture of Discipline</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            "Train up a child in the way he should go..." (Proverbs 22:6). We maintain clear behaviour expectations, a smart dress code and punctual routines. Our pastoral team works with families to support student welfare, counsel when needed, and encourage personal responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}
