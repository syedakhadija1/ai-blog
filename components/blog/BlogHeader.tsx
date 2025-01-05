import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPost } from "@/lib/blog-data";

interface BlogHeaderProps {
  post: BlogPost;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <>
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center mb-8">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.authorAvatar} />
          <AvatarFallback>{post.author[0]}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="text-sm font-medium">{post.author}</p>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </div>
      </div>
    </>
  );
}