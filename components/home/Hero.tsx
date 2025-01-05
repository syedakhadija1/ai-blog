import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeIn, slideUp } from "@/lib/animations";

export function Hero() {
  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 z-0" />
      <div 
        className={cn(
          "relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh]",
          fadeIn()
        )}
      >
        <h1 
          className={cn(
            "text-4xl sm:text-6xl font-bold tracking-tight text-primary text-center mb-6",
            slideUp(100)
          )}
        >
          Insights for Modern Developers
        </h1>
        <p 
          className={cn(
            "text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-center",
            slideUp(200)
          )}
        >
          Discover in-depth articles about web development, design patterns, and best practices from industry experts.
        </p>
        <Link 
          href="/blog"
          className={cn(slideUp(300))}
        >
          <Button 
            size="lg" 
            className="gap-2 group hover:scale-105 transition-transform duration-300"
          >
            Explore Articles
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
    </div>
  );
}