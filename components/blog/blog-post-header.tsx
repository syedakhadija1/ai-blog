import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/types"

interface BlogPostHeaderProps {
  post: Post
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <>
      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {post.category}
          </Badge>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{post.readingTime}</span>
        </div>
      </div>
    </>
  )
}