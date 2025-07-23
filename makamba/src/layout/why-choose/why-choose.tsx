import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Users, Award, BookOpen, Clock, ArrowRight } from "lucide-react"

export default function WhyChoose() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <p className="border-2 border-black  px-3 py-1.5 rounded-lg text-gray-500 text-xs font-medium tracking-wide uppercase mb-4">Porquê nos escolher?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Porquê escolher a Makamba Tech?
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Expert Instructors */}
        <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from top industry professionals who bring years of real-world experience to the classroom, providing
              you with the latest tools, techniques, and insights needed to excel in your field.
            </p>
          </CardContent>
        </Card>

        {/* Career-Boost Certify */}
        <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career-Boost Certify</h3>
            <p className="text-gray-600 leading-relaxed">
              Earn certifications that are highly regarded by employers, helping you enhance your resume, gain industry
              recognition, and open doors to new career opportunities.
            </p>
          </CardContent>
        </Card>

        {/* 100+ High Impact Courses */}
        <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">100+ High Impact Courses</h3>
            <p className="text-gray-600 leading-relaxed">
              expert.io offers over 100 courses that cover essential skills in today's tech industry. Whether you're a
              beginner or an experienced professional, our courses in web development, data science, and cybersecurity
              provide practical, hands-on learning to help you apply your skills immediately in competitive.
            </p>
          </CardContent>
        </Card>

        {/* Flexible Learning Schedules - Highlighted */}
        <Card className="p-8 bg-slate-900 text-white relative overflow-hidden">
          <CardContent className="p-0 relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Flexible Learning Schedules</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              At expert.io, we understand the importance of balancing learning with a busy lifestyle. That's why our
              courses are available on-demand, allowing you to learn at your own pace, anytime and anywhere.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Whether you're a working professional or a student, you can customize your schedule to fit your needs.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/10 rounded-full translate-y-12 -translate-x-12"></div>
        </Card>
      </div>
    </section>
  )
}
