import { Hero } from "@/components/home/Hero";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { ContactForm } from "@/components/home/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPosts />
      <ContactForm />
    </main>
  );
}