"use client";

import { BlogPost } from "@/lib/blog-data";
import { Separator } from "@/components/ui/separator";
import { CommentSection } from "@/components/blog/CommentSection";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogContent } from "@/components/blog/BlogContent";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <BlogHeader post={post} />
        <BlogContent content={post.content} />
      </article>
      <Separator className="my-8" />
      <CommentSection />
    </div>
  );
}