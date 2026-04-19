import React, { useState } from "react";
import {
  ArrowRight,
  X,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Settings,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: "⚽",
    title: "Football Turf Construction",
    description:
      "Professional FIFA-standard football turf installation with high-quality synthetic grass and perfect drainage.",
    features: ["FIFA Certified", "Weather Resistant", "10 Year Warranty"],
    details:
      "Our football turfs use high-density monofilament fibers that mimic natural grass. We provide a 7-layer sub-base construction for zero water logging and maximum shock absorption to prevent player injuries.",
    specs: { warranty: "10 Years", duration: "15-20 Days", maintenance: "Low" },
  },
  {
    id: 2,
    icon: "🏏",
    title: "Cricket Nets Setup",
    description:
      "Complete cricket practice facility setup with premium quality nets, proper pitch construction, and safety padding.",
    features: ["Professional Grade", "Custom Sizing", "Easy Maintenance"],
    details:
      "We specialize in both indoor and outdoor cricket nets. Our pitches use high-density 15mm curly turf for perfect ball bounce and spin. The nets are UV-stabilized HDPE for extreme durability against sun and rain.",
    specs: {
      warranty: "5 Years",
      duration: "7-10 Days",
      maintenance: "Minimal",
    },
  },
  {
    id: 3,
    icon: "🏟",
    title: "Multi sports arena",
    description:
      "Full-scale sports arena construction including multi-sport turfs, lighting systems, and facility management.",
    features: ["Multi-Sport Ready", "Modern Design", "Complete Solution"],
    details:
      "From floodlights to spectator seating, we build turn-key arenas. Our multi-sport turfs allow you to play Football, Box Cricket, and Volleyball on the same surface with different color markings.",
    specs: {
      warranty: "8 Years",
      duration: "30-45 Days",
      maintenance: "Moderate",
    },
  },
  {
    id: 4,
    icon: "🏟",
    title: "Pickle ball court",
    description:
      "Full-scale sports arena construction including multi-sport turfs, lighting systems, and facility management.",
    features: ["Multi-Sport Ready", "Modern Design", "Complete Solution"],
    details:
      "From floodlights to spectator seating, we build turn-key arenas. Our multi-sport turfs allow you to play Football, Box Cricket, and Volleyball on the same surface with different color markings.",
    specs: {
      warranty: "8 Years",
      duration: "30-45 Days",
      maintenance: "Moderate",
    },
  },
  {
    id: 5,
    icon: "🏟",
    title: "Badminton court",
    description:
      "Full-scale sports arena construction including multi-sport turfs, lighting systems, and facility management.",
    features: ["Multi-Sport Ready", "Modern Design", "Complete Solution"],
    details:
      "From floodlights to spectator seating, we build turn-key arenas. Our multi-sport turfs allow you to play Football, Box Cricket, and Volleyball on the same surface with different color markings.",
    specs: {
      warranty: "8 Years",
      duration: "30-45 Days",
      maintenance: "Moderate",
    },
  },
  {
    id: 6,
    icon: "🏟",
    title: "Arena Setup",
    description:
      "Full-scale sports arena construction including multi-sport turfs, lighting systems, and facility management.",
    features: ["Multi-Sport Ready", "Modern Design", "Complete Solution"],
    details:
      "From floodlights to spectator seating, we build turn-key arenas. Our multi-sport turfs allow you to play Football, Box Cricket, and Volleyball on the same surface with different color markings.",
    specs: {
      warranty: "8 Years",
      duration: "30-45 Days",
      maintenance: "Moderate",
    },
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // --- NEW WHATSAPP REDIRECT FUNCTION ---
  const handleServiceWhatsApp = (serviceTitle) => {
    const myNumber = "918428013578";
    const text = `Hello, I would like to inquire about your services:%0A%0A*Service:* ${serviceTitle}%0A%0AI would like to get more details regarding this.`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

  return (
    <section
      className="py-30 px-4 bg-gradient-to-b from-gray-50 to-white"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">
            Our Turf Construction Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your sports facility needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 font-bold">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>

              <button
                onClick={() => setSelectedService(service)}
                className="w-full cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md group/button"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative animate-in zoom-in duration-300">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{selectedService.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedService.title}
                  </h2>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed italic border-l-4 border-green-500 pl-4">
                  {selectedService.details}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 p-4 rounded-xl text-center border border-green-100">
                    <ShieldCheck className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-[10px] uppercase text-gray-500 font-bold">
                      Warranty
                    </p>
                    <p className="font-bold text-green-700">
                      {selectedService.specs.warranty}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl text-center border border-green-100">
                    <Clock className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-[10px] uppercase text-gray-500 font-bold">
                      Duration
                    </p>
                    <p className="font-bold text-green-700">
                      {selectedService.specs.duration}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl text-center border border-green-100">
                    <Settings className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-[10px] uppercase text-gray-500 font-bold">
                      Maintenance
                    </p>
                    <p className="font-bold text-green-700">
                      {selectedService.specs.maintenance}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="font-bold text-gray-800">Key Deliverables:</p>
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">
                        {feature} - Industry Grade
                      </span>
                    </div>
                  ))}
                </div>

                {/* --- UPDATED BUTTON FOR WHATSAPP --- */}
                <button
                  onClick={() => handleServiceWhatsApp(selectedService.title)}
                  className="w-full cursor-pointer bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                >
                  Get a Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
