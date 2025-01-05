export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-8">
      <h1 className="text-4xl font-bold mb-6">About Modern Blog</h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Welcome to Modern Blog, where we share insights and knowledge about web development,
          design, and technology. Our mission is to provide high-quality content that helps
          developers and designers stay up-to-date with the latest trends and best practices.
        </p>

        <h2>Our Vision</h2>
        <p>
          We believe in making technical knowledge accessible to everyone. Through our articles,
          we aim to break down complex concepts into understandable pieces, helping both
          beginners and experienced professionals grow in their careers.
        </p>

        <h2>Join Our Community</h2>
        <p>
          Whether you're a seasoned developer or just starting your journey in tech,
          Modern Blog is here to support your growth. We encourage discussion and
          knowledge sharing among our readers.
        </p>
      </div>
    </div>
  )
}