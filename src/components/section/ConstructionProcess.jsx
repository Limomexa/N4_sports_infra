import React, { useState } from "react";
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

export default function ConstructionProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "Football Turf",
    area: "",
    message: "",
  });

  // --- FIXED WHATSAPP REDIRECT FUNCTION ---
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const myNumber = "918428013578";

    // Professional English Message Format
    const text =
      `Site Inspection Request*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Site Address: ${formData.location}%0A` +
      `Project Type: ${formData.projectType}%0A` +
      `Approx Area: ${formData.area} sqft%0A` +
      `Details/Time: ${formData.message}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 px-4 bg-white" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-gray-900 uppercase">
            Our Turf Building Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            From concept to completion, we follow a proven process to deliver
            exceptional results
          </p>
        </div>

        {/* --- DESKTOP TIMELINE --- */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-green-500 to-green-600 mx-20"></div>
            <div className="grid grid-cols-5 gap-4 relative">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center group">
                    <div className="relative z-10 mb-6 transition-transform duration-500 group-hover:scale-110">
                      <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                        <Icon
                          className="w-14 h-14 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg font-bold">
                        <span className="text-sm">{step.number}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 uppercase">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- CTA SECTION --- */}
        <div className="mt-16 text-center p-12 bg-gradient-to-r from-green-600 to-emerald-700 rounded-[2rem] shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase tracking-tight">
              Ready to Start Your Turf Project?
            </h3>
            <p className="text-green-50 mb-8 text-lg max-w-xl mx-auto">
              Our experts are ready to visit your site and provide a
              professional assessment.
            </p>
            <button
              onClick={toggleModal}
              className="bg-white text-green-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl active:scale-95 uppercase tracking-widest cursor-pointer"
            >
              Schedule Site Inspection Now
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={toggleModal}
          ></div>
          <div className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="bg-orange-500 p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold uppercase italic">
                  Book Inspection
                </h2>
                <p className="text-orange-100 text-xs mt-1">
                  Our experts will visit your location shortly.
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
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    name="phone"
                    type="tel"
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
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
                  placeholder="Exact Site Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Activity className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    name="projectType"
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 appearance-none"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Project Type</option>
                    <option value="Football Turf">Football Turf</option>
                    <option value="Cricket Pitch">Cricket Pitch</option>
                    <option value="Box Cricket">Box Cricket</option>
                  </select>
                </div>
                <div className="relative">
                  <Ruler className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    name="area"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Approx Area (Sq. Ft.)"
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <textarea
                name="message"
                rows="3"
                onChange={handleInputChange}
                placeholder="Preferred date/time for visit or other details..."
                className="w-full p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg cursor-pointer"
              >
                Confirm Inspection <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
