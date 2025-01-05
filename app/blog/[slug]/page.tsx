import { blogPosts } from "@/lib/blog-data";
import BlogPostClient from "@/components/blog/BlogPostClient";

// Generate static params at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Server component
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <BlogPostClient post={post} />;
}