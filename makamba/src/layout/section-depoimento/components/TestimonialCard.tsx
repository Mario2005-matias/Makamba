import { useState, useEffect } from "react"

interface TestimonialCardProps {
  testimonial: Testimonial
  delay: number
}

export interface Testimonial {
  id: number
  name: string
  username: string
  avatar: string
  content: string
  company?: string
  companyLogo?: string
}


export  function TestimonialCard({ testimonial, delay }: TestimonialCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Company Logo */}
      {testimonial.company && (
        <div className="flex justify-end mb-4">
          <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            {testimonial.company}
          </div>
        </div>
      )}

      {/* Testimonial Content */}
      <blockquote className="text-gray-700 text-base leading-relaxed mb-6">"{testimonial.content}"</blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
        />
        <div>
          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-sm">{testimonial.username}</div>
        </div>
      </div>
    </div>
  )
}
