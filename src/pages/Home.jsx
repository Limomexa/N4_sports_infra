import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  ArrowRight,
  Play,
  X,
  Send,
  MapPin,
  Ruler,
  Phone,
  User,
  Activity,
} from "lucide-react";
import { Helmet } from "react-helmet";

import slide1 from "../assets/carosel-images/carosel-slide1.jpg";
import slide2 from "../assets/carosel-images/carosel-slide2.jpg";
import slide3 from "../assets/carosel-images/carosel-slide3.jpg";
import slide4 from "../assets/carosel-images/carosel-slide4.jpg";
import slide5 from "../assets/carosel-images/carosel-slide5.jpg";
import turfVideo from "../assets/images/turf-construction.mp4";

const slides = [
  { id: 1, image: slide1, title: "Expert Construction" },
  { id: 2, image: slide2, title: "Professional Football Turf" },
  { id: 3, image: slide3, title: "Quality Installation" },
  { id: 4, image: slide4, title: "Premium Green Turf" },
  { id: 5, image: slide5, title: "Modern Sports Arena" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    turfType: "Football Turf",
    area: "",
    message: "",
  });

  // Hero entrance animation on mount
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const toggleModal = () => setIsOpen(!isOpen);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const myNumber = "918428013578";
    const text =
      `*New Quote Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Turf Type:* ${formData.turfType}%0A` +
      `*Area:* ${formData.area} sqft%0A` +
      `*Message:* ${formData.message}`;
    window.open(`https://wa.me/${myNumber}?text=${text}`, "_blank");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Football Turf Construction | Artificial Turf Builder</title>
        <meta
          name="description"
          content="Professional football turf construction company offering artificial turf installation, cricket pitch construction and sports ground development."
        />
        <meta
          name="keywords"
          content="football turf construction, artificial turf installation, cricket turf construction, sports turf builder, turf construction company, football ground construction"
        />
        <meta name="author" content="Turf Construction" />
        <meta
          property="og:title"
          content="Professional Turf Construction Company"
        />
        <meta
          property="og:description"
          content="We build football turf, cricket pitch and multi-sport artificial turf grounds."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <section
        className="relative min-h-screen pt-10 bg-gray-100 overflow-hidden"
        id="home"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={turfVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/75"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>

          {/* Animated glowing orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 blur-[180px] rounded-full animate-glow-pulse"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-400/5 blur-[100px] rounded-full animate-float pointer-events-none"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full animate-float-slow pointer-events-none"></div>
        </div>

        <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="space-y-10">
              {/* Badge — slides down from top */}
              <div
                className={`transition-all duration-700 ease-out ${
                  heroLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <span
                  className="
      inline-block
      bg-green-600/80
      border border-green-500/40
      rounded-full
      backdrop-blur-sm

      px-4 py-2 text-sm
      sm:px-5 sm:py-2.5 sm:text-base
      md:px-6 md:py-3 md:text-lg
      lg:px-8 lg:py-4

      whitespace-nowrap
    "
                >
                  Built by Turf Owners, For Turf Owners
                </span>
              </div>

              {/* Main heading — slides from left */}
              <div
                className={`transition-all duration-800 ease-out ${heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                style={{ transitionDelay: "300ms" }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight uppercase tracking-tight">
                  Build Your Dream
                  <br />
                  <span
                    className={`shimmer-text italic transition-all duration-800 ease-out ${heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    Sports Turf
                  </span>
                </h1>
              </div>

              {/* Subtitle — fades up */}
              <div
                className={`transition-all duration-700 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                  World-class arenas designed and built with precision.
                </p>
              </div>

              {/* Buttons — slide from bottom */}
              <div
                className={`transition-all duration-700 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: "750ms" }}
              >
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                  <button
                    onClick={toggleModal}
                    className="bg-green-500 text-black font-bold px-10 py-5 rounded-2xl text-lg hover:bg-green-400 transition-all glow-green hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer animate-pulse-ring"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <a href="#projects">
                    <button className="w-full sm:w-auto bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                      <Play className="w-5 h-5 fill-white" />
                      <span>View Projects</span>
                    </button>
                  </a>
                </div>
              </div>

              <span className="hidden">
                football turf construction company, artificial turf
                installation, cricket pitch construction, sports turf builder,
                football ground construction Chennai, turf construction India
              </span>

              {/* Stats — each stat zooms in with stagger */}
              {/* <div
                className={`transition-all duration-700 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: "900ms" }}
              >
                <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto border-t border-white/20">
                  {[
                    { value: "200+", label: "Happy Clients" },
                    { value: "10+", label: "Projects Done" },
                    { value: "98%", label: "Satisfaction" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-700 ease-out ${heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                      style={{ transitionDelay: `${950 + i * 120}ms` }}
                    >
                      <p
                        className="text-4xl font-bold text-green-400 stat-number animate-bounce-gentle"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs uppercase text-gray-400 tracking-widest mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-20 left-1/2 -translate-x-1/2 z-20 transition-all duration-700 ease-out ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "1300ms" }}
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent animate-bounce-gentle"></div>
          </div>
        </div>

        {/* QUOTE MODAL */}
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
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
                  <p className="text-green-100 text-xs">
                    Professional Turf Solutions
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
                      placeholder="Full Name"
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
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
                    placeholder="Project Location"
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Activity className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <select
                      name="turfType"
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 appearance-none active:bg-gray-100 transition-all"
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
                    />
                  </div>
                </div>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Message..."
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-100 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-500 focus:outline-none active:bg-gray-100 transition-all"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg cursor-pointer glow-green"
                >
                  Send via WhatsApp <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
