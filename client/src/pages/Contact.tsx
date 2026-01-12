import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useCreateContact();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(data: InsertContactMessage) {
    mutation.mutate(data, {
      onSuccess: () => {
        setSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We will get back to you soon.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Failed to send",
          description: error.message,
        });
      }
    });
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2574&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Have questions? We are here to help.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <SectionHeader title="Get in Touch" subtitle="We'd love to hear from you" alignment="left" className="mb-8" />
            <p className="text-muted-foreground mb-10 text-lg">
              Whether you are a prospective parent, a current student, or a visitor, we welcome your inquiries. Use the contact form below for quick questions, or call the admissions office to arrange a visit. Our team responds to messages within one business day.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0 mr-4 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Our Location</h4>
                  <p className="text-muted-foreground">123 Education Close, Off Peak Avenue,<br />Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0 mr-4 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Phone Numbers</h4>
                  <p className="text-muted-foreground">+234 123 456 7890<br />+234 098 765 4321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0 mr-4 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Email Address</h4>
                  <p className="text-muted-foreground">info@depeakschool.ng<br />admissions@depeakschool.ng</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0 mr-4 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">Opening Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 7:30 AM - 4:00 PM<br />Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
             <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h3>
             
             {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent</h3>
                  <p className="text-green-700">
                    Thanks for reaching out! We'll be in touch shortly. For urgent enquiries, please call the admissions line shown opposite.
                  </p>
                  <Button onClick={() => setSubmitted(false)} className="mt-6" variant="outline">
                    Send Another Message
                  </Button>
                </div>
             ) : (
               <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="h-12 bg-gray-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="h-12 bg-gray-50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="080..." {...field} className="h-12 bg-gray-50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="General Inquiry" {...field} className="h-12 bg-gray-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[150px] bg-gray-50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12 text-lg" disabled={mutation.isPending}>
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
             )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-96 bg-gray-200 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
             <p className="text-muted-foreground flex items-center">
               <MapPin className="mr-2" /> Google Map Placeholder (Lagos, Nigeria)
             </p>
          </div>
          {/* In a real app, embed Google Maps iframe here */}
        </div>
      </div>
    </div>
  );
}
