import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  PenTool,
  Shovel,
  Layers,
  CheckCircle,
  X,
  User,
  Phone,
  MapPin,
  Activity,
  Ruler,
  Send,
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Site Inspection",
    description: "Thorough assessment of your location and requirements",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Planning",
    description: "Custom design tailored to your specifications",
  },
  {
    icon: Shovel,
    number: "03",
    title: "Ground Preparation",
    description: "Professional site preparation and leveling",
  },
  {
    icon: Layers,
    number: "04",
    title: "Turf Installation",
    description: "Expert installation with premium materials",
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Final Delivery",
    description: "Quality inspection and project handover",
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = step.icon;
  const fromLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-center gap-6 transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0"
          : fromLeft
            ? "opacity-0 -translate-x-20"
            : "opacity-0 translate-x-20"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Step number badge */}
      <div
        className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg glow-green animate-float"
        style={{ animationDelay: `${index * 0.4}s` }}
      >
        {step.number}
      </div>

      <div className="flex-1 bg-white rounded-2xl p-6 shadow-md border border-green-100 glow-card border-glow">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ConstructionProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "Football Turf",
    area: "",
    message: "",
  });

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHeaderVisible(true);
          o.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (headerRef.current) o.observe(headerRef.current);
    return () => o.disconnect();
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const myNumber = "918428013578";
    const text = `Site Inspection Request*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ASite Address: ${formData.location}%0AProject Type: ${formData.projectType}%0AApprox Area: ${formData.area} sqft%0ADetails/Time: ${formData.message}`;
    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="py-24 px-4 bg-slate-950 relative overflow-hidden"
      id="process"
    >
      {/* Animated background glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <span className="inline-block bg-green-900/60 text-green-400 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider border border-green-700/50">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="shimmer-text">Construction</span> Process
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A proven 5-step approach delivering world-class turf every time
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-green-500 via-emerald-400 to-transparent pointer-events-none hidden sm:block" />

          {processSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-700`}
        >
          <button
            onClick={toggleModal}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg cursor-pointer glow-green hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            Book a Free Site Inspection
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={toggleModal}
          ></div>
          <div
            className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl"
            style={{ animation: "slideInLeft 0.35s ease" }}
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold uppercase italic">
                  Site Inspection
                </h2>
                <p className="text-green-100 text-xs mt-1">
                  We'll come to you — Free of Charge
                </p>
              </div>
              <button
                onClick={toggleModal}
                className="hover:rotate-90 transition-transform bg-black/10 p-2 rounded-full cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="p-8 space-y-4" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  name="location"
                  type="text"
                  placeholder="Site Address"
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Activity className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    name="projectType"
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 appearance-none"
                  >
                    <option>Football Turf</option>
                    <option>Cricket Pitch</option>
                    <option>Multi-Sport</option>
                  </select>
                </div>
                <div className="relative">
                  <Ruler className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    name="area"
                    type="text"
                    placeholder="Area (Sq. Ft.)"
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>
              <textarea
                name="message"
                rows="3"
                placeholder="Preferred time for visit..."
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg cursor-pointer glow-green"
              >
                Send via WhatsApp <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
