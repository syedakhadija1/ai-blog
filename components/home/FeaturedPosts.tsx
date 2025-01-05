import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";
import { cn } from "@/lib/utils";
import { fadeIn, slideInLeft } from "@/lib/animations";

export function FeaturedPosts() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className={cn("py-16 bg-muted/50", fadeIn())}>
      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl font-bold text-center mb-12",
          slideInLeft(100)
        )}>
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className={cn(slideInLeft((index + 1) * 100))}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}