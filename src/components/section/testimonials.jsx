import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Martinez",
    role: "Sports Club Owner",
    image:
      "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTAyMTIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    review:
      "Outstanding quality and service! They transformed our empty land into a world-class football turf. The project was completed on time and within budget. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "School Director",
    image:
      "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzc1MDIxOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    review:
      "Professional team with excellent attention to detail. Our students now enjoy a safe and beautiful sports facility. The maintenance support has been exceptional. Thank you!",
    rating: 5,
  },
  {
    id: 3,
    name: "James Anderson",
    role: "Business Investor",
    image:
      "https://images.unsplash.com/photo-1718433720603-326f60a3a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXQlMjBzbWlsZXxlbnwxfHx8fDE3NzUwMjcyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    review:
      "Best decision we made for our investment! The turf construction was flawless and the ROI has exceeded our expectations. Their expertise is truly unmatched in the industry.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center opacity-50">
                <Quote className="w-6 h-6 text-green-600" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-green-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-green-600">500+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-green-600">98%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-green-600">15+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-green-600">50+</p>
            <p className="text-gray-600">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
}
