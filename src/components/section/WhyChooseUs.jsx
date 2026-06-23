import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Award,
  Clock,
  DollarSign,
  Palette,
  Wrench,
  X,
  User,
  Phone,
  MapPin,
  Activity,
  Ruler,
  Send,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "High Quality Turf Materials",
    description: "Premium materials for long-lasting results",
    dir: "left",
  },
  {
    icon: Clock,
    title: "Fast Construction Time",
    description: "Efficient installation without compromising quality",
    dir: "bottom",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates that fit your budget",
    dir: "right",
  },
  {
    icon: Palette,
    title: "Custom Turf Design",
    description: "Tailored solutions for your specific needs",
    dir: "left",
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    description: "Ongoing care to keep your turf pristine",
    dir: "bottom",
  },
  {
    icon: Award,
    title: "All Projects Completed on Time",
    description: "Proven track record of successful installations",
    dir: "right",
  },
];

function AnimatedCard({ feature, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = feature.icon;

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

  const dirClass = {
    left: visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16",
    right: visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16",
    bottom: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
  }[feature.dir];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out glow-card bg-white rounded-2xl p-8 shadow-lg border border-green-100 ${dirClass}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-md animate-glow-pulse">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const btnRef = useRef(null);
  const [btnVisible, setBtnVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    turfType: "Football Turf",
    area: "",
    message: "",
  });

  useEffect(() => {
    const o1 = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHeaderVisible(true);
          o1.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    const o2 = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setBtnVisible(true);
          o2.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (headerRef.current) o1.observe(headerRef.current);
    if (btnRef.current) o2.observe(btnRef.current);
    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const myNumber = "918428013578";
    const text = `*New Quote Request*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}%0ATurf Type: ${formData.turfType}%0AArea: ${formData.area} sqft%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 bg-dot-pattern relative overflow-hidden"
      id="why-choose-us"
    >
      {/* Floating background glow orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-300/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider border border-green-200">
            Our Advantages
          </span>
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">
            Why Choose <span className="shimmer-text">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver excellence in every turf construction project with
            unmatched quality and service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div
          ref={btnRef}
          className={`mt-16 text-center transition-all duration-700 ease-out ${btnVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <button
            onClick={toggleModal}
            className="bg-gradient-to-r from-green-600 to-emerald-600 cursor-pointer hover:from-green-500 hover:to-emerald-500 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 glow-green animate-pulse-ring active:scale-95"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={toggleModal}
          ></div>
          <div
            className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl"
            style={{ animation: "slideInRight 0.35s ease" }}
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold uppercase italic">
                  Request Quote
                </h2>
                <p className="text-green-100 text-xs mt-1">
                  Industry-Leading Turf Construction
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
                  placeholder="Project Location"
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Activity className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    name="turfType"
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
                placeholder="Message..."
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
