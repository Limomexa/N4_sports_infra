import React, { useState, useEffect, useRef } from "react";
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

import projectImage1 from "../assets/images/project-1.png";
import projectImage2 from "../assets/images/project-2.jpg";
import projectImage3 from "../assets/images/project-3.avif";
import projectImage4 from "../assets/images/project-4.jpg";
import projectImage5 from "../assets/images/project-5.jpg";
import projectImage6 from "../assets/images/project-6.png";

const projects = [
  {
    id: 1,
    image: projectImage1,
    name: "N4 Turf",
    location: "Perambur, Chennai - 600011",
    landSize: "5,200 sq.m",
  },
  {
    id: 2,
    image: projectImage2,
    name: "Turf Tricks Arena",
    location: "Kilpauk, Chennai - 600010",
    landSize: "8,500 sq.m",
  },
  {
    id: 3,
    image: projectImage3,
    name: "The Turf of Madras",
    location: "Madhavaram, Chennai - 600020",
    landSize: "4,500 sq.m",
  },
  {
    id: 4,
    image: projectImage4,
    name: "The Turf Tales",
    location: "Kolathur, Chennai - 600099",
    landSize: "4,000 sq.m",
  },
  {
    id: 5,
    image: projectImage5,
    name: "X Box Turf Zone",
    location: "Pattalam, Chennai - 600012",
    landSize: "5,000 sq.m",
  },
  {
    id: 6,
    image: projectImage6,
    name: "N4 Turf",
    location: "Washermanpet, Chennai - 600021",
    landSize: "4,200 sq.m",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
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
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-700 ease-out glow-card ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : fromLeft
            ? "opacity-0 -translate-x-16"
            : "opacity-0 translate-x-16"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <ImageWithFallback
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Glow overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
  );
}

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    projectType: "",
    area: "",
    message: "",
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const myNumber = "918428013578";
    const text = `*New Portfolio Quote Request*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}%0AProject: ${formData.projectType}%0AArea: ${formData.area} sqft%0ADetails: ${formData.message}`;
    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

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
          setCtaVisible(true);
          o2.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (headerRef.current) o1.observe(headerRef.current);
    if (ctaRef.current) o2.observe(ctaRef.current);
    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, []);

  return (
    <section
      className="py-30 px-4 bg-gray-50 bg-dot-pattern relative overflow-hidden"
      id="projects"
    >
      {/* bg glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider border border-green-200">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold uppercase tracking-tight">
            Our Completed <span className="shimmer-text">Turf Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            Explore our portfolio of premium turf installations across the
            region
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`mt-20 text-center bg-white p-12 rounded-[2rem] shadow-xl border border-gray-100 transition-all duration-700 ease-out ${ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <p className="text-gray-950 mb-6 text-2xl font-bold uppercase tracking-tight">
            Want to see your project in our portfolio?
          </p>
          <button
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 glow-green hover:scale-105 active:scale-95 uppercase tracking-widest cursor-pointer"
            onClick={toggleModal}
          >
            Start Your Project Today
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
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
                <p className="text-green-100 text-xs mt-1 italic font-medium">
                  Transforming Your Vision Into Reality
                </p>
              </div>
              <button
                onClick={toggleModal}
                className="hover:rotate-90 active:scale-90 transition-transform bg-black/10 p-2 rounded-full cursor-pointer"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
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
                  onChange={handleInputChange}
                  placeholder="Project Location"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>
              <textarea
                name="message"
                rows="3"
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                className="w-full p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg cursor-pointer glow-green"
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
