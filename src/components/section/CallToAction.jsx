import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  X,
  User,
  MapPin,
  Activity,
  Ruler,
  Send,
} from "lucide-react";

export default function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // --- NEW STATE FOR FORM DATA ---
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    consultationType: "",
    area: "",
    message: "",
  });

  // --- NEW WHATSAPP REDIRECT FUNCTION ---
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const myNumber = "918428013578"; // <--- Aapka Number

    const text =
      `*New Business Consultation Request*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Land Location: ${formData.location}%0A` +
      `Consultation For: ${formData.consultationType}%0A` +
      `Land Area: ${formData.area}%0A` +
      `Goals/Details: ${formData.message}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="relative py-24 px-4 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden"
      id="cta"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-100 text-sm font-semibold uppercase tracking-widest">
              Limited Slots Available
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
            Have Land? Start Your <br />
            <span className="text-green-400 italic">Turf Business Today!</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed font-medium">
            We Build Professional Sports Turfs & Profitable Ventures
          </p>

          {/* Description */}
          <p className="text-lg text-green-200/80 max-w-2xl mx-auto">
            Transform your vacant land into a profitable sports turf facility.
            Get expert guidance, quality construction, and ongoing support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={toggleModal}
              className="group bg-white text-green-900 px-10 py-5 rounded-xl font-bold flex items-center gap-3 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="text-lg uppercase">
                Request Free Consultation
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/20 mt-12">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-green-300 font-bold uppercase">
                  Call Us Now
                </p>
                <p className="text-sm font-medium">+91 (842) 801-3578</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20"></div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-green-300 font-bold uppercase">
                  Email Us
                </p>
                <p className="text-sm font-medium">n4sportsinfra@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PROFESSIONAL MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={toggleModal}
          ></div>

          <div className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="bg-gradient-to-r from-green-700 to-emerald-900 p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold uppercase italic">
                  Free Consultation
                </h2>
                <p className="text-green-100 text-xs mt-1 italic">
                  Let's plan your business together
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
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-600 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    name="phone"
                    type="tel"
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-600 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  name="location"
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Land Location (City/District)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-600 focus:outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Activity className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    name="consultationType"
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-600 appearance-none"
                    required
                  >
                    <option value="">Consultation For?</option>
                    <option value="Football Turf">Football Turf</option>
                    <option value="Cricket Pitch">Cricket Pitch</option>
                    <option value="Business Planning">Business Planning</option>
                  </select>
                </div>
                <div className="relative">
                  <Ruler className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    name="area"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Total Land Area"
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <textarea
                name="message"
                rows="3"
                onChange={handleInputChange}
                placeholder="Tell us about your land and business goals..."
                className="w-full p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-600 focus:outline-none transition-all"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-700 to-emerald-900 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-widest cursor-pointer"
              >
                Get My Free Guide <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
