import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  content: string
  author: string
  role: string
  rating?: number
}

export function TestimonialCard({ content, author, role, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-lg mb-4">{content}</blockquote>
      <footer>
        <cite className="not-italic font-semibold">{author}</cite>
        <p className="text-sm text-muted-foreground">{role}</p>
      </footer>
    </Card>
  )
}

