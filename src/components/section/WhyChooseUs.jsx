import { useState } from "react";
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
  },
  {
    icon: Clock,
    title: "Fast Construction Time",
    description: "Efficient installation without compromising quality",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates that fit your budget",
  },
  {
    icon: Palette,
    title: "Custom Turf Design",
    description: "Tailored solutions for your specific needs",
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    description: "Ongoing care to keep your turf pristine",
  },
  {
    icon: Award,
    title: "All Projects Completed on the time",
    description: "Proven track record of successful installations",
  },
];

export default function WhyChooseUs() {
  // CHANGE LOG 1: Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    turfType: "Football Turf",
    area: "",
    message: "",
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const myNumber = "918428013578"; // <--- APNA WHATSAPP NUMBER YAHAN DALO (91 ke saath)

    const text =
      `*New Quote Request*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Location: ${formData.location}%0A` +
      `Turf Type: ${formData.turfType}%0A` +
      `Area: ${formData.area} sqft%0A` +
      `Message: ${formData.message}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50"
      id="why-choose-us"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver excellence in every turf construction project with
            unmatched quality and service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action - Button Triggers Modal */}
        <div className="mt-16 text-center">
          <button
            onClick={toggleModal}
            className="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-green-200 active:scale-95"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </div>

      {/* --- PROFESSIONAL QUOTE MODAL (Same as Navbar/Home) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-300"
            onClick={toggleModal}
          ></div>

          <div className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
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
                className="hover:rotate-90 transition-transform bg-black/10 p-2 rounded-full"
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
                className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg"
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
