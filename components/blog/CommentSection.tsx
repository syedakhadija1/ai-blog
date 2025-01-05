import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Anonymous User",
      content: newComment,
      date: new Date().toLocaleDateString(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <div className="space-y-4 mb-8">
        {comments.map((comment) => (
          <Card key={comment.id} className="p-4">
            <div className="flex items-center mb-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">{comment.author}</p>
                <p className="text-xs text-muted-foreground">{comment.date}</p>
              </div>
            </div>
            <p className="text-sm mt-2">{comment.content}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <Textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button
          onClick={handleSubmitComment}
          className="flex items-center gap-2"
        >
          <Send className="h-4 w-4" />
          Post Comment
        </Button>
      </div>
    </section>
  );
}