import { User } from "lucide-react"
import { Comment } from "./types"

interface CommentListProps {
  comments: Comment[]
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-muted p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-primary rounded-full p-2">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium">{comment.name}</p>
              <p className="text-sm text-muted-foreground">{comment.date}</p>
            </div>
          </div>
          <p className="text-foreground">{comment.content}</p>
        </div>
      ))}
    </div>
  )
}