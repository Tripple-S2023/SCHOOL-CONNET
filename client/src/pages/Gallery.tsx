import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Video, ImageIcon } from "lucide-react";

export default function Gallery() {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">A visual journey through life at De Peak School.</p>
        </div>
      </div>

      <div className="container-custom py-16 space-y-12">
        <SectionHeader title="Classrooms" subtitle="Learning spaces" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <img src={`https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop`} alt={`Classroom ${i}`} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-primary mb-1">Modern Classrooms</h4>
                <p className="text-sm text-muted-foreground">Bright, well‑equipped learning spaces that support focused study and collaborative projects.</p>
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader title="School Events" subtitle="Sports, prizes and celebrations" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <img src={`https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1600&auto=format&fit=crop`} alt={`Event ${i}`} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-primary mb-1">School Events</h4>
                <p className="text-sm text-muted-foreground">Sports days, prize giving and cultural celebrations that bring our community together.</p>
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader title="Christian Activities" subtitle="Chapel & devotions" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <img src={`https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop`} alt={`Chapel ${i}`} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-primary mb-1">Chapel & Devotions</h4>
                <p className="text-sm text-muted-foreground">Worship, teaching and Scripture memory—central to daily life at De Peak School.</p>
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader title="Language & Cultural Programs" subtitle="Yoruba, French and cultural days" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <img src={`https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop`} alt={`Cultural ${i}`} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-primary mb-1">Language & Culture</h4>
                <p className="text-sm text-muted-foreground">Snapshots from our Yoruba cultural events and French language activities.</p>
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader title="Videos" subtitle="Highlights & messages" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl overflow-hidden p-6 flex items-center justify-center">
            <div className="text-center">
              <Video className="mx-auto mb-4 h-12 w-12 text-primary" />
              <p className="text-muted-foreground">Placeholder for welcome video or chapel highlights.</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden p-6 flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="mx-auto mb-4 h-12 w-12 text-primary" />
              <p className="text-muted-foreground">Add school videos here. Use MP4 or embed from YouTube/Vimeo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
