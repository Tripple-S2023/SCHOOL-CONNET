import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Learn about our history, mission, and the values that drive us.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Principal's Message */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-4 bg-gray-200 min-h-[300px] md:min-h-full relative">
              {/* Unsplash image: Portrait of a professional headmaster/principal */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Principal" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-8 p-8 md:p-12">
              <Quote className="h-12 w-12 text-secondary/30 mb-6" />
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Principal's Message</h2>
              <p className="text-secondary font-semibold mb-6">Dr. Emmanuel Adebayo, PhD.</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to De Peak School. Established to provide excellent Christian day secondary education, we are dedicated to developing students who excel academically and live out their faith with integrity. Our programmes are designed to cultivate intellect, character and service.
                </p>
                <p>
                  Our commitment is to raise God‑fearing leaders who are equipped with strong moral convictions, critical thinking skills and a heart for community. We partner closely with parents to ensure each child receives individual attention and pastoral care.
                </p>
                <p>
                  Join us as we nurture young people who will contribute positively to Nigeria and the wider world through knowledge, faith and service.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
                  alt="Signature" 
                  className="h-12 opacity-50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy text-white p-10 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.8L19.2 19H4.8L12 5.8z"/></svg>
            </div>
            <h3 className="text-3xl font-serif font-bold text-secondary mb-6 relative z-10">Our Vision</h3>
            <p className="text-lg leading-relaxed relative z-10 text-gray-300">
              To be a world-class Christian institution known for producing innovative, 
              disciplined, and God-fearing leaders who will positively impact Nigeria and the world.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-3xl border border-gray-200 group hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              To provide holistic education that combines rigorous academic training with deep spiritual guidance, 
              fostering an environment where every child discovers their potential and purpose in God.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <SectionHeader title="Our Core Values" subtitle="What We Stand For" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Faith", desc: "Trusting God in all things." },
            { title: "Discipline", desc: "Order and self-control." },
            { title: "Excellence", desc: "Surpassing standards." },
            { title: "Integrity", desc: "Honesty and strong moral principles." },
            { title: "Service", desc: "Serving others with humility." }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-secondary text-center hover:bg-primary hover:text-white transition-colors duration-300 group"
            >
              <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 text-primary group-hover:text-secondary font-bold text-xl font-serif transition-colors">
                {value.title[0]}
              </div>
              <h4 className="font-bold text-lg mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground group-hover:text-gray-300">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
