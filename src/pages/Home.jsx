import { useState, useEffect } from "react";
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

  // --- NEW STATE FOR FORM DATA ---
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    turfType: "Football Turf",
    area: "",
    message: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const toggleModal = () => setIsOpen(!isOpen);

  // --- NEW WHATSAPP REDIRECT FUNCTION ---
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
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-12 h-3 bg-green-500"
                  : "w-3 h-3 bg-white/50 hover:bg-white/80 active:scale-90"
              }`}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center gap-2 bg-green-600/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Premium Turf Construction
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase">
                Build Your Dream <br />
                <span className="text-green-400 italic">Sports Turf</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
                World-class arenas designed and built with precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={toggleModal}
                  className="bg-green-500 cursor-pointer text-black font-bold px-8 py-4 rounded-lg text-lg hover:bg-green-400 active:bg-green-600 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 group"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#projects" className="w-full sm:w-auto">
                  <button className="w-full bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg hover:bg-white/20 active:bg-white/30 transition-all flex items-center justify-center gap-3 group">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 fill-white" />
                    <span className="cursor-pointer">View Projects</span>
                  </button>
                </a>
              </div>
              <span className="hidden">
                football turf construction company, artificial turf
                installation, cricket pitch construction, sports turf builder,
                football ground construction Chennai, turf construction India
              </span>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="active:scale-105 transition-transform">
                  <p className="text-3xl font-bold text-green-400">200+</p>
                  <p className="text-xs uppercase text-gray-400 tracking-widest">
                    Happy Clients
                  </p>
                </div>
                <div className="active:scale-105 transition-transform">
                  <p className="text-3xl font-bold text-green-400">10+</p>
                  <p className="text-xs uppercase text-gray-400 tracking-widest">
                    Projects Done
                  </p>
                </div>
                <div className="active:scale-105 transition-transform">
                  <p className="text-3xl font-bold text-green-400">98%</p>
                  <p className="text-xs uppercase text-gray-400 tracking-widest">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative group">
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-[2rem] border border-white/20 shadow-2xl transition-transform duration-500">
                <div className="relative rounded-2xl overflow-hidden h-[500px]">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                    <p className="text-2xl font-bold text-white uppercase tracking-tighter italic">
                      {slides[currentSlide].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUOTE MODAL */}
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={toggleModal}
            ></div>
            <div className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300">
              <div className="bg-green-600 p-6 text-white flex justify-between items-center">
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
                  className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 active:bg-green-800 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg cursor-pointer"
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
