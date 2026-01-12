import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Download, FileText } from "lucide-react";

export default function Admissions() {
  const { toast } = useToast();
  const mutation = useCreateInquiry();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      studentName: "",
      studentAge: "",
      classOfInterest: "",
      message: ""
    }
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        setSubmitted(true);
        toast({
          title: "Inquiry Sent!",
          description: "We have received your admission inquiry and will contact you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: error.message,
        });
      }
    });
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://pixabay.com/get/g0f4ca7a5979acd679b4cbc56f7a23da0de475717424c7c79e5baaded0e9aaa119ed3a3bea0ff73182fbb5e128605ad54e067338386bdf974d272eb4bcf293162_1280.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Admissions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Join the De Peak School family. Your child's future starts here.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Admission Process</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {[
                  { title: "Inquiry & Visit", desc: "Complete the online enquiry form or call to schedule a campus visit. Campus tours are by appointment and provide a chance to meet staff." },
                  { title: "Application Form", desc: "Download, complete and submit the admission form with the required documents listed below." },
                  { title: "Entrance Exam", desc: "Candidates sit a placement assessment covering Mathematics and English. Results help determine class placement and support needs." },
                  { title: "Interview", desc: "A short, friendly interview with the student and parent to discuss the child's needs, strengths and placement." },
                  { title: "Admission Offer", desc: "Successful applicants receive an offer letter with clear instructions on acceptance, fees and orientation." }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary group-[.is-active]:bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-white border border-slate-200 shadow-sm">
                      <div className="font-bold text-primary mb-1">{step.title}</div>
                      <div className="text-sm text-slate-500">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Requirements</h3>
              <ul className="space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-100">
                {[
                  "Recent passport photograph of student",
                  "Copy of birth certificate",
                  "Last academic report card (if transferring)",
                  "Medical report/immunization record",
                  "Completed application form"
                ].map((req, i) => (
                  <li key={i} className="flex items-start text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Download Forms</h3>
              <div className="flex gap-4">
                 <a href="/downloads/admission-form.pdf" download className="w-full">
                   <Button variant="outline" className="w-full justify-start">
                     <FileText className="mr-2 h-4 w-4" /> Download Admission Form
                   </Button>
                 </a>
                 <a href="/downloads/fee-schedule.pdf" download className="w-full">
                   <Button variant="outline" className="w-full justify-start">
                     <Download className="mr-2 h-4 w-4" /> Download Fee Schedule
                   </Button>
                 </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <SectionHeader title="Make an Enquiry" subtitle="Get Started" alignment="left" className="mb-8" />
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your inquiry has been successfully submitted. Our admissions team will get in touch with you via email or phone within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} className="mt-6" variant="outline">
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="parentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent/Guardian Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Mr. & Mrs. Adebayo" {...field} className="h-12 bg-gray-50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" {...field} className="h-12 bg-gray-50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="0801 234 5678" {...field} className="h-12 bg-gray-50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="classOfInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Class of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-gray-50">
                                  <SelectValue placeholder="Select a class" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Creche">Creche</SelectItem>
                                <SelectItem value="Nursery">Nursery</SelectItem>
                                <SelectItem value="Primary">Primary</SelectItem>
                                <SelectItem value="Secondary">Secondary (JSS/SSS)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="studentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Student Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Child's Full Name" {...field} className="h-12 bg-gray-50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="studentAge"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Student Age</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 10 years" {...field} className="h-12 bg-gray-50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any specific questions regarding transportation, boarding, etc." 
                              className="min-h-[120px] bg-gray-50"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold h-12 text-lg" disabled={mutation.isPending}>
                      {mutation.isPending ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
