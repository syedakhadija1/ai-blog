import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPost, getPosts } from "@/lib/posts"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { CommentsSection } from "@/components/comments/comments-section"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.id)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-4xl py-8">
      <BlogPostHeader post={post} />
      <BlogPostContent content={post.content} />
      <CommentsSection />
    </article>
  )
}