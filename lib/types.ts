export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  coverImage: string
  readingTime: string
  category: string
}

export interface Comment {
  id: string
  name: string
  content: string
  date: string
}