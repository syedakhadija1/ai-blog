interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="mt-8" dangerouslySetInnerHTML={{ __html: content }} />
  );
}