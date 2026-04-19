import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { Helmet } from "react-helmet";

const stats = [
  {
    id: 1,
    value: "5+",
    label: "Years Experience",
    icon: TrendingUp,
  },
  {
    id: 2,
    value: "50+",
    label: "Projects Completed",
    icon: CheckCircle2,
  },
  {
    id: 3,
    value: "200+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    id: 4,
    value: "15+",
    label: "Awards Won",
    icon: Award,
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Turf Construction Company | Football Turf Builders</title>

        <meta
          name="description"
          content="Leading turf construction company specializing in football turf installation, cricket pitch construction and artificial grass sports ground development."
        />

        <meta
          name="keywords"
          content="turf construction company, football turf builders, artificial turf installation, cricket pitch construction, sports ground construction, turf builders"
        />

        <meta name="author" content="Turf Construction Company" />

        <meta
          property="og:title"
          content="Professional Turf Construction Company"
        />
        <meta
          property="og:description"
          content="We build football turfs, cricket pitches and sports facilities."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>
      <section className="py-30 px-4 bg-white" id="about">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">
              About Our Company
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading the way in professional turf construction with excellence
              and innovation
            </p>
          </div>

          {/* Company Description with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695713503375-e8458c3e1d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMGNvbnN0cnVjdGlvbiUyMHdvcmtlcnN8ZW58MXx8fHwxNzc1MTM0MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Turf Construction Team"
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-green-600 text-white py-4 px-6 rounded-xl shadow-xl">
                  <p className="text-3xl mb-1">5+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-emerald-100 rounded-full -z-10"></div>
            </div>

            {/* Right Side - Description */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl text-gray-900">
                Building World-Class Sports Facilities
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We are a premier turf construction company specializing in
                creating high-quality sports facilities that meet international
                standards. With over 5 years of experience in the industry, we
                have successfully completed more than 50 projects across the
                country.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our team of skilled professionals uses cutting-edge technology
                and premium materials to deliver exceptional results. From
                football turfs to cricket nets and complete arena setups, we
                handle every aspect of your project with precision and care.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Quality Assured</h4>
                    <p className="text-sm text-gray-600">
                      Premium materials only
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-sm text-gray-600">
                      Certified professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl mb-4">Our Mission</h3>
                <p className="text-green-50 leading-relaxed text-lg">
                  To provide world-class sports infrastructure that inspires
                  athletes and communities to achieve their full potential. We
                  are committed to delivering excellence in every project
                  through innovation, quality, and unwavering dedication to
                  customer satisfaction.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To be the most trusted and innovative turf construction
                  company, setting new benchmarks in quality and service. We
                  envision a future where every community has access to premium
                  sports facilities that promote health, wellness, and
                  competitive excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Stats */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 border border-green-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl mb-4 text-gray-900">
                Our Track Record
              </h3>
              <p className="text-gray-600 text-lg">
                Numbers that speak for our excellence and commitment
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.id} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-4 group-hover:scale-110 group-hover:bg-green-600 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-4xl md:text-5xl text-green-600 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-700">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-20">
            <h3 className="text-3xl text-center mb-12 text-gray-900">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">💎</div>
                <h4 className="text-xl mb-3 text-gray-900">Quality First</h4>
                <p className="text-gray-600">
                  We never compromise on the quality of materials and
                  workmanship
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl mb-3 text-gray-900">Customer Focus</h4>
                <p className="text-gray-600">
                  Your satisfaction and success are at the heart of everything
                  we do
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl mb-3 text-gray-900">Innovation</h4>
                <p className="text-gray-600">
                  Constantly evolving with the latest technology and best
                  practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
