import {
  Building2,
  Trophy,
  Target,
  CheckCircle,
  ArrowRight,
  MapPin,
  Lightbulb,
  Wrench,
} from "lucide-react";

export default function About() {
  const services = [
    "Football Turf",
    "Cricket Turf",
    "Multi Sports Turf",
    "Cricket Nets",
    "Badminton Courts",
    "Pickleball Courts",
  ];

  const process = [
    "Planning",
    "Design",
    "Execution",
    "Turf Laying",
    "Lighting",
    "Maintenance",
  ];

  const stats = [
    { value: "2021", label: "Started Journey" },
    { value: "50+", label: "Projects Delivered" },
    { value: "10+", label: "Cities Covered" },
    { value: "100%", label: "Client Focused" },
  ];

  return (
    <section className="bg-white" id="about">
      ```
      {/* HERO SECTION */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="bg-green-600 px-4 py-2 rounded-full text-sm">
            Built by Turf Owners, For Turf Owners
          </span>

          <h1 className="text-5xl md:text-7xl mt-6 font-bold">
            Building Sports Infrastructure That Lasts
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg">
            From operating our own turf facilities to becoming a complete sports
            infrastructure solutions provider, our journey is built on real
            experience, practical knowledge, and long-term vision.
          </p>
        </div>
      </section>
      {/* OUR STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 uppercase tracking-widest">
              Our Journey
            </span>

            <h2 className="text-4xl mt-4 font-bold text-slate-900">
              From Turf Operators To Industry Experts
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Building2 />
              </div>
              <h3 className="font-bold mt-4">2021</h3>
              <p>Started N4 Turf Operations</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Wrench />
              </div>
              <h3 className="font-bold mt-4">Challenges</h3>
              <p>Faced Real Construction & Maintenance Issues</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Lightbulb />
              </div>
              <h3 className="font-bold mt-4">Insights</h3>
              <p>Identified Industry-Wide Problems</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Target />
              </div>
              <h3 className="font-bold mt-4">Evolution</h3>
              <p>Transformed Into N4 Sports Infra</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Trophy />
              </div>
              <h3 className="font-bold mt-4">Today</h3>
              <p>Trusted Sports Infrastructure Partner</p>
            </div>
          </div>
        </div>
      </section>
      {/* WHY WE STARTED */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Why N4 Sports Infra Was Created
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-bold text-xl">Construction Delays</h3>
              <p className="mt-3 text-gray-600">
                Projects taking months longer than expected.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-bold text-xl">Maintenance Issues</h3>
              <p className="mt-3 text-gray-600">
                Lack of proper post-handover support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-bold text-xl">Turf Quality</h3>
              <p className="mt-3 text-gray-600">
                Poor material selection affecting durability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-bold text-xl">Owner Challenges</h3>
              <p className="mt-3 text-gray-600">
                Difficulty managing long-term operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* DIFFERENCE */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Makes Us Different
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="text-green-500" />
                <span>We were turf owners before becoming builders.</span>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-500" />
                <span>We understand long-term maintenance.</span>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-500" />
                <span>We design for operational efficiency.</span>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-500" />
                <span>We provide complete lifecycle support.</span>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-green-500" />
                <span>We think like owners and build solutions that last.</span>
              </div>
            </div>

            <div className="bg-green-600 rounded-3xl p-10">
              <h3 className="text-3xl font-bold">Built From Experience</h3>

              <p className="mt-6 text-lg">
                We did not study the problem as outsiders — we lived it
                ourselves. That experience became the foundation of our
                company's evolution.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Service Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border rounded-2xl p-8 hover:bg-green-600 hover:text-white transition"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>

          <div className="grid md:grid-cols-6 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* STATS */}
      <section className="py-24 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-bold">{item.value}</h3>
              <p className="mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      {/* VISION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <MapPin className="mx-auto text-green-600" size={50} />

          <h2 className="text-4xl font-bold mt-6">Vision For Growth</h2>

          <p className="mt-8 text-lg text-gray-600">
            Our vision is to expand our services to sports academies, clubs,
            educational institutions, residential communities, and government
            projects while growing into new cities and regions across India.
          </p>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-5xl font-bold">
          Ready To Build Your Sports Facility?
        </h2>

        <button className="mt-8 bg-green-600 px-8 py-4 rounded-xl flex items-center gap-2 mx-auto">
          Get Free Consultation
          <ArrowRight size={20} />
        </button>
      </section>
    </section>
  );
}
