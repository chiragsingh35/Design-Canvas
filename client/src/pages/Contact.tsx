import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // We're using the button as a mailto link now, but keeping form for validation if needed later
    window.location.href = `mailto:chiragasom@gmail.com?subject=Project Inquiry from ${values.name}&body=${values.message}`;
    toast({
      title: "Opening Email Client...",
      description: "If nothing happens, please email me directly at chiragasom@gmail.com",
    });
  }

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold uppercase mb-6">
            Let's <span className="text-gradient">Talk</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Ready to start your next project? Reach out directly or use the form to prepare your email.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Me</p>
                <a href="mailto:chiragasom@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">chiragasom@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-lg font-bold">India (Remote Available)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/10 focus:border-primary h-12" />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} className="bg-white/5 border-white/10 focus:border-primary h-12" />
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
                        placeholder="Tell me about your project..." 
                        className="min-h-[120px] bg-white/5 border-white/10 focus:border-primary resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="button" asChild className="w-full h-12 bg-gradient-primary font-bold text-lg hover:opacity-90 transition-opacity">
                <a href="mailto:chiragasom@gmail.com">
                  Send Request <Send className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
