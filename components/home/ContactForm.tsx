"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeIn, slideUp, scaleUp } from "@/lib/animations";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={cn("py-16 bg-background relative overflow-hidden", fadeIn())}>
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-xl relative z-10">
        <div className={cn("text-center mb-10", slideUp(100))}>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or want to collaborate? Send us a message!
          </p>
        </div>

        {isSubmitted ? (
          <div className={cn(
            "text-center p-8 bg-primary/5 rounded-lg border border-primary/10",
            scaleUp()
          )}>
            <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              We've received your message and will get back to you soon.
            </p>
            <Button
              variant="outline"
              className="hover:scale-105 transition-transform"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={cn(slideUp(200))}>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="transition-all duration-300 hover:border-primary/50 focus:border-primary"
                required
              />
            </div>
            <div className={cn(slideUp(300))}>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="transition-all duration-300 hover:border-primary/50 focus:border-primary"
                required
              />
            </div>
            <div className={cn(slideUp(400))}>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px] transition-all duration-300 hover:border-primary/50 focus:border-primary"
                required
              />
            </div>
            <Button 
              type="submit" 
              className={cn(
                "w-full gap-2 group hover:scale-105 transition-transform duration-300",
                slideUp(500)
              )}
            >
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}