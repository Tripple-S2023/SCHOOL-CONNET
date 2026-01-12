import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2, Book, GraduationCap, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Academics() {
  return (
    <div className="min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://pixabay.com/get/g0f4ca7a5979acd679b4cbc56f7a23da0de475717424c7c79e5baaded0e9aaa119ed3a3bea0ff73182fbb5e128605ad54e067338386bdf974d272eb4bcf293162_1280.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Academic Excellence</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Our rigorous curriculum prepares students for global success.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            De Peak School delivers a broad, balanced and well‑structured curriculum that meets Nigerian national requirements while incorporating international best practice. We emphasise conceptual understanding, practical skills and moral reasoning to prepare students for exams and real‑world challenges.
          </p>
        </div>

        {/* Curriculum Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Core Subjects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {['Mathematics', 'English Language', 'Basic Science', 'Social Studies', 'Civic Education', 'Christian Religious Studies'].map(subject => (
                  <li key={subject} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary mr-2" /> {subject}
                    <span className="text-sm text-muted-foreground ml-2">— focused lessons, regular assessments and exam preparation.</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-secondary shadow-lg hover:shadow-xl transition-shadow transform md:-translate-y-4">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl font-serif">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">We prioritize multilingualism to prepare students for a globalized world.</p>
              <ul className="space-y-3">
                {['English (Language of Instruction)', 'French (Core Subject)', 'Yoruba (Cultural Heritage)'].map(subject => (
                  <li key={subject} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-2" /> {subject}
                    <span className="text-sm text-muted-foreground ml-2">— tailored lessons, conversation practice and cultural studies.</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-serif">Vocational</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {['Information Technology (ICT)', 'Home Economics', 'Music & Creative Arts', 'Entrepreneurship', 'Technical Drawing'].map(subject => (
                  <li key={subject} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary mr-2" /> {subject}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Methodology */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Teaching Methodology" subtitle="How We Teach" alignment="left" />
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-primary">Student-Centered Learning</h4>
                  <p className="text-muted-foreground">Teachers act as facilitators, encouraging students to actively participate in the learning process through discussions and projects.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-primary">Moral Integration</h4>
                  <p className="text-muted-foreground">Every subject is taught with a biblical worldview, helping students connect knowledge with God's truth.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-primary">Technology Enhanced</h4>
                  <p className="text-muted-foreground">Classrooms are equipped with modern learning aids, and ICT is integrated across the curriculum.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3"></div>
               {/* Unsplash image: Teacher helping student */}
              <img 
                src="https://images.unsplash.com/photo-1544531696-9348411883ce?q=80&w=2070&auto=format&fit=crop" 
                alt="Teaching methodology" 
                className="relative rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
