interface SectionHeadingProps {
  title: string
  subtitle: string
  highlight?: string
  className?: string
}

export function SectionHeading({ title, subtitle, highlight, className = "" }: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </span>
        ))}
      </h2>
      <p className="text-muted-foreground text-lg">{subtitle}</p>
    </div>
  )
}

