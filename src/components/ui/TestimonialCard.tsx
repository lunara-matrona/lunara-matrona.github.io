import { Quote, Star } from "lucide-react";
import type { Testimonial } from "../../types/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__top">
        <Quote size={34} aria-hidden="true" />
        <div className="testimonial-card__stars" aria-label={`${testimonial.rating} de 5 estrellas`}>
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} size={17} fill="currentColor" aria-hidden="true" />
          ))}
        </div>
      </div>
      <blockquote>“{testimonial.quote}”</blockquote>
      <footer>
        <strong>{testimonial.name}</strong>
        <span>{testimonial.service}</span>
      </footer>
    </article>
  );
}
