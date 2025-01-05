"use client"

import { useState } from "react"
import { CommentForm } from "./comment-form"
import { CommentList } from "./comment-list"
import type { Comment } from "@/lib/types"

const initialComments: Comment[] = [
  {
    id: "1",
    name: "John Doe",
    content: "Great article! Very informative.",
    date: "2024-03-21"
  },
  {
    id: "2",
    name: "Jane Smith",
    content: "Thanks for sharing these insights.",
    date: "2024-03-20"
  }
]

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments)

  const handleSubmitComment = (data: { name: string; email: string; content: string }) => {
    const newComment: Comment = {
      id: String(comments.length + 1),
      name: data.name,
      content: data.content,
      date: new Date().toISOString().split('T')[0]
    }
    setComments([newComment, ...comments])
  }

  return (
    <div className="border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <div className="space-y-8">
        <CommentForm onSubmit={handleSubmitComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  )
}