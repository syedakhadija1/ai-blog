import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <h2 className="text-xl font-semibold">{post.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}