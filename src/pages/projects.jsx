import React, { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  MapPin,
  Maximize2,
  X,
  User,
  Phone,
  Activity,
  Ruler,
  Send,
} from "lucide-react";

import projectImage1 from "../assets/images/project-1.jpg";
import projectImage2 from "../assets/images/project-2.jpg";
import projectImage3 from "../assets/images/project-3.avif";
import projectImage4 from "../assets/images/project-4.jpg";
import projectImage5 from "../assets/images/project-5.jpg";
import projectImage6 from "../assets/images/project-6.webp";

const projects = [
  {
    id: 1,
    image: projectImage1,
    name: "N4 Turf",
    location: "perambur, chennai - 600011",
    landSize: "5,200 sq.m",
  },
  {
    id: 2,
    image: projectImage2,
    name: "Turf Tricks Arena",
    location: " Kilpauk chennai - 600010",
    landSize: "8,500 sq.m",
  },
  {
    id: 3,
    image: projectImage3,
    name: "The Turf of Madras",
    location: " Madhavarm chennai - 600020",
    landSize: "4,500 sq.m",
  },
  {
    id: 4,
    image: projectImage4,
    name: "The Turf Tales",
    location: "Kolathur chennai - 600099",
    landSize: "4,000 sq.m",
  },
  {
    id: 5,
    image: projectImage5,
    name: "X box Turf zone",
    location: " Pattalam chennai  - 600012",
    landSize: "5,000 sq.m",
  },
  {
    id: 6,
    image: projectImage6,
    name: "N4 Turf",
    location: "Washermanpet chennai - 600021",
    landSize: "4,200 sq.m",
  },
];

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "",
    area: "",
    message: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- WHATSAPP SUBMIT ---
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const myNumber = "918428013578";

    const text =
      `*New Portfolio Quote Request*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Location: ${formData.location}%0A` +
      `Project: ${formData.projectType}%0A` +
      `Area: ${formData.area} sqft%0A` +
      `Details: ${formData.message}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="py-30 px-4 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold uppercase tracking-tight">
            Our Completed Turf Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            Explore our portfolio of premium turf installations across the globe
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl active:scale-[0.98] transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-3 font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 uppercase">
                  {project.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Maximize2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{project.landSize}</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-600 transform translate-x-8 -translate-y-8 rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-white p-12 rounded-[2rem] shadow-xl border border-gray-100">
          <p className="text-gray-950 mb-6 text-2xl font-bold uppercase tracking-tight">
            Want to see your project in our portfolio?
          </p>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-green-200 transform hover:-translate-y-1 active:scale-95 active:bg-green-800 uppercase tracking-widest cursor-pointer"
            onClick={toggleModal}
          >
            Start Your Project Today
          </button>
        </div>
      </div>

      {/* --- PROFESSIONAL QUOTE MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={toggleModal}
          ></div>

          <div className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold uppercase italic">
                  Request Quote
                </h2>
                <p className="text-green-100 text-xs mt-1 italic font-medium">
                  Transforming Your Vision Into Reality
                </p>
              </div>
              <button
                onClick={toggleModal}
                className="hover:rotate-90 active:scale-90 transition-transform bg-black/10 p-2 rounded-full"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
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
                  placeholder="Project Location (City/State)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Activity className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    name="projectType"
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 appearance-none active:bg-gray-100 transition-all"
                    required
                  >
                    <option value="">Select Project</option>
                    <option value="Football Turf">Football Turf</option>
                    <option value="Cricket Pitch">Cricket Pitch</option>
                    <option value="Multi-Sport Arena">Multi-Sport Arena</option>
                  </select>
                </div>
                <div className="relative">
                  <Ruler className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    name="area"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Area (Sq. Ft.)"
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
                  />
                </div>
              </div>

              <textarea
                name="message"
                rows="3"
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements..."
                className="w-full p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:brightness-110 active:scale-[0.95] active:from-green-700 active:to-emerald-800 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg cursor-pointer"
              >
                Submit Request <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
