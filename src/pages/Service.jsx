import { useState } from "react";
import {
  ArrowRight,
  X,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Settings,
} from "lucide-react";
import useScrollReveal from "../hooks/useScrollAnimation";

/* ── Sport Icons ──────────────────────────────────────────── */
const FootballIcon = () => (
  <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none">
    <circle
      cx="32"
      cy="32"
      r="28"
      fill="white"
      fillOpacity="0.15"
      stroke="white"
      strokeWidth="2"
    />
    <polygon points="32,10 38,22 26,22" fill="white" />
    <polygon points="10,28 20,22 20,34" fill="white" />
    <polygon points="54,28 44,22 44,34" fill="white" />
    <polygon points="18,48 26,42 20,34" fill="white" />
    <polygon points="46,48 38,42 44,34" fill="white" />
    <polygon points="32,54 26,42 38,42" fill="white" />
    <circle cx="32" cy="32" r="6" fill="white" />
  </svg>
);

const CricketIcon = () => (
  <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none">
    <rect x="28" y="8" width="8" height="28" rx="4" fill="white" />
    <rect
      x="24"
      y="36"
      width="16"
      height="5"
      rx="2"
      fill="white"
      fillOpacity="0.7"
    />
    <rect
      x="20"
      y="41"
      width="24"
      height="5"
      rx="2"
      fill="white"
      fillOpacity="0.5"
    />
    <line
      x1="14"
      y1="20"
      x2="36"
      y2="42"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="12" cy="22" r="5" fill="white" fillOpacity="0.9" />
  </svg>
);

const MultiSportIcon = () => (
  <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none">
    <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2.5" />
    <circle cx="44" cy="20" r="10" stroke="white" strokeWidth="2.5" />
    <circle cx="32" cy="44" r="10" stroke="white" strokeWidth="2.5" />
    <line
      x1="20"
      y1="20"
      x2="44"
      y2="20"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />
    <line
      x1="44"
      y1="20"
      x2="32"
      y2="44"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />
    <line
      x1="20"
      y1="20"
      x2="32"
      y2="44"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />
  </svg>
);

const PickleballIcon = () => (
  <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none">
    <circle cx="32" cy="28" r="14" stroke="white" strokeWidth="2.5" />
    <line x1="22" y1="18" x2="42" y2="38" stroke="white" strokeWidth="2" />
    <line x1="42" y1="18" x2="22" y2="38" stroke="white" strokeWidth="2" />
    <rect x="29" y="40" width="6" height="18" rx="3" fill="white" />
    <rect
      x="22"
      y="55"
      width="20"
      height="4"
      rx="2"
      fill="white"
      fillOpacity="0.7"
    />
  </svg>
);

const BadmintonIcon = () => (
  <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none">
    <ellipse cx="32" cy="18" rx="14" ry="10" stroke="white" strokeWidth="2.2" />
    <line
      x1="20"
      y1="14"
      x2="44"
      y2="22"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <line
      x1="20"
      y1="18"
      x2="44"
      y2="18"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <line
      x1="20"
      y1="22"
      x2="44"
      y2="14"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.6"
    />
    <path d="M32 28 L28 44 L32 42 L36 44 Z" fill="white" />
    <rect
      x="30"
      y="42"
      width="4"
      height="14"
      rx="2"
      fill="white"
      fillOpacity="0.8"
    />
  </svg>
);

const ArenaIcon = () => (
  <svg viewBox="0 0 64 64" className="w-9 h-9" fill="none">
    <ellipse cx="32" cy="36" rx="26" ry="14" stroke="white" strokeWidth="2.5" />
    <line x1="6" y1="36" x2="6" y2="24" stroke="white" strokeWidth="2.5" />
    <line x1="58" y1="36" x2="58" y2="24" stroke="white" strokeWidth="2.5" />
    <ellipse
      cx="32"
      cy="24"
      rx="26"
      ry="14"
      stroke="white"
      strokeWidth="2.5"
      fill="white"
      fillOpacity="0.08"
    />
    <line
      x1="32"
      y1="10"
      x2="32"
      y2="38"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />
    <line
      x1="10"
      y1="20"
      x2="54"
      y2="20"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />
  </svg>
);

/* ── Service Data ─────────────────────────────────────────── */
const services = [
  {
    id: 1,
    Icon: FootballIcon,
    color: "green",
    tag: "Most Popular",
    title: "Football Turf Construction",
    description:
      "Professional FIFA-standard football turf installation with high-quality synthetic grass and perfect drainage.",
    features: ["FIFA Certified", "Weather Resistant", "10 Year Warranty"],
    details:
      "Our football turfs use high-density monofilament fibers that mimic natural grass. We provide a 7-layer sub-base construction for zero water logging and maximum shock absorption to prevent player injuries.",
    specs: { warranty: "10 Years", duration: "15–20 Days", maintenance: "Low" },
  },
  {
    id: 2,
    Icon: CricketIcon,
    color: "blue",
    tag: "Precision Build",
    title: "Cricket Nets Setup",
    description:
      "Complete cricket practice facility with premium nets, proper pitch construction, and safety padding.",
    features: ["Professional Grade", "Custom Sizing", "Easy Maintenance"],
    details:
      "We specialize in both indoor and outdoor cricket nets. Our pitches use high-density 15mm curly turf for perfect ball bounce and spin. UV-stabilized HDPE nets for extreme durability against sun and rain.",
    specs: {
      warranty: "5 Years",
      duration: "7–10 Days",
      maintenance: "Minimal",
    },
  },
  {
    id: 3,
    Icon: MultiSportIcon,
    color: "purple",
    tag: "All-in-One",
    title: "Multi-Sport Arena",
    description:
      "Full-scale arena with multi-sport turfs, floodlighting systems, and complete facility management.",
    features: ["Multi-Sport Ready", "Modern Design", "Complete Solution"],
    details:
      "From floodlights to spectator seating, we build turn-key arenas. Multi-sport turfs let you play Football, Box Cricket, and Volleyball on the same surface with different color markings.",
    specs: {
      warranty: "8 Years",
      duration: "30–45 Days",
      maintenance: "Moderate",
    },
  },
  {
    id: 4,
    Icon: PickleballIcon,
    color: "orange",
    tag: "Trending",
    title: "Pickleball Court",
    description:
      "Premium pickleball court construction with professional-grade surfaces, net systems, and line markings.",
    features: ["Anti-Slip Surface", "Pro Markings", "Durable Net Posts"],
    details:
      "Pickleball courts built with cushioned acrylic or synthetic turf surfaces. We handle everything from site prep to net installation, ensuring perfect bounce and player safety.",
    specs: { warranty: "8 Years", duration: "10–15 Days", maintenance: "Low" },
  },
  {
    id: 5,
    Icon: BadmintonIcon,
    color: "cyan",
    tag: "Indoor Ready",
    title: "Badminton Court",
    description:
      "Professional badminton courts with regulation dimensions, wooden or synthetic flooring, and lighting.",
    features: ["Regulation Size", "Anti-Glare Lighting", "Shock Absorption"],
    details:
      "Our badminton courts use BWF-approved synthetic or wooden flooring with precise line marking. We install anti-glare LED systems at the right height and angle for competitive play.",
    specs: {
      warranty: "8 Years",
      duration: "10–15 Days",
      maintenance: "Minimal",
    },
  },
  {
    id: 6,
    Icon: ArenaIcon,
    color: "rose",
    tag: "Turnkey",
    title: "Arena Setup",
    description:
      "End-to-end sports arena development — from groundwork and fencing to lighting and spectator stands.",
    features: ["Turnkey Project", "Custom Design", "Licensed Engineers"],
    details:
      "We design and build complete sports arenas with spectator seating, parking, security fencing, and floodlit multi-sport grounds — delivered on time, within budget.",
    specs: {
      warranty: "10 Years",
      duration: "45–60 Days",
      maintenance: "Moderate",
    },
  },
];

/* ── Colour token map ─────────────────────────────────────── */
const colorMap = {
  green: {
    bg: "bg-green-500",
    light: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    badge: "bg-green-100 text-green-700",
  },
  blue: {
    bg: "bg-blue-500",
    light: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  purple: {
    bg: "bg-purple-500",
    light: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
  },
  orange: {
    bg: "bg-orange-500",
    light: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
  },
  cyan: {
    bg: "bg-cyan-500",
    light: "bg-cyan-50",
    border: "border-cyan-200",
    text: "text-cyan-600",
    badge: "bg-cyan-100 text-cyan-700",
  },
  rose: {
    bg: "bg-rose-500",
    light: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
  },
};

/* ── WhatsApp helper ──────────────────────────────────────── */
const openWhatsApp = (serviceTitle) => {
  const num = "918428013578";
  const text = `Hello! I'd like to inquire about:%0A%0A*Service:* ${serviceTitle}%0APlease share more details.`;
  window.open(`https://wa.me/${num}?text=${text}`, "_blank");
};

const WaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.072.528 4.017 1.453 5.712L0 24l6.455-1.424A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.375l-.36-.213-3.727.977.994-3.634-.234-.373A9.79 9.79 0 0 1 2.182 12c0-5.423 4.395-9.818 9.818-9.818 5.424 0 9.818 4.395 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z" />
  </svg>
);

/* ── Card ─────────────────────────────────────────────────── */
function ServiceCard({ service, index, onClick }) {
  const c = colorMap[service.color];
  const direction = index % 2 === 0 ? "reveal-left" : "reveal-right";
  const delay = `stagger-${(index % 6) + 1}`;

  return (
    <div
      onClick={onClick}
      className={`
        ${direction} ${delay}
        group relative bg-white rounded-2xl p-7 shadow-md
        border ${c.border} cursor-pointer
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl
        flex flex-col overflow-hidden
      `}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${c.bg} rounded-2xl`}
      />

      {/* top row: icon + badge */}
      <div className="flex items-start justify-between mb-6">
        <div
          className={`w-16 h-16 ${c.bg} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <service.Icon />
        </div>
        <span
          className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c.badge}`}
        >
          {service.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-6">
        {service.description}
      </p>

      {/* feature pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.features.map((f, i) => (
          <span
            key={i}
            className={`text-xs font-semibold px-3 py-1 rounded-full ${c.light} ${c.text}`}
          >
            {f}
          </span>
        ))}
      </div>

      <div
        className={`flex items-center gap-2 text-sm font-bold ${c.text} transition-all duration-300 group-hover:gap-4`}
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}

/* ── Modal ─────────────────────────────────────────────────── */
function ServiceModal({ service, onClose }) {
  const c = colorMap[service.color];
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${c.bg} p-7 relative overflow-hidden`}>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <service.Icon />
              </div>
              <div>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
                  {service.tag}
                </p>
                <h2 className="text-xl font-extrabold text-white leading-tight">
                  {service.title}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-7 space-y-6 max-h-[65vh] overflow-y-auto">
          <p
            className={`text-gray-600 text-sm leading-relaxed border-l-4 ${c.bg.replace("bg-", "border-")} pl-4 py-1`}
          >
            {service.details}
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "Warranty",
                value: service.specs.warranty,
                Icon: ShieldCheck,
              },
              { label: "Duration", value: service.specs.duration, Icon: Clock },
              {
                label: "Maintenance",
                value: service.specs.maintenance,
                Icon: Settings,
              },
            ].map(({ label, value, Icon }) => (
              <div
                key={label}
                className={`${c.light} ${c.border} border rounded-xl p-3 text-center`}
              >
                <Icon className={`w-5 h-5 ${c.text} mx-auto mb-1.5`} />
                <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-0.5">
                  {label}
                </p>
                <p className={`text-sm font-extrabold ${c.text}`}>{value}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs uppercase text-gray-400 font-bold tracking-widest mb-3">
              Key Deliverables
            </p>
            <div className="space-y-2.5">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${c.text}`} />
                  <span className="text-gray-700 text-sm font-medium">
                    {f} — Industry Grade
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => openWhatsApp(service.title)}
            className={`w-full ${c.bg} text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer`}
          >
            <WaIcon /> Enquire on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────── */
export default function Services() {
  useScrollReveal();
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal-down inline-flex items-center gap-2 bg-green-100 border border-green-300 px-5 py-2 rounded-full mb-5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-700 text-xs font-bold uppercase tracking-widest">
              What We Build
            </span>
          </div>
          <h2 className="reveal-up stagger-2 text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Our Turf Construction
            <span className="block text-green-600">Services</span>
          </h2>
          <hr className="reveal-zoom stagger-2 divider-glow max-w-xs mx-auto mb-5" />
          <p className="reveal-up stagger-3 text-lg text-gray-500 max-w-xl mx-auto">
            Comprehensive, professional-grade solutions for every type of sports
            facility. Click any card to explore details.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => setSelected(service)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal-up mt-16 bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
          <div className="relative z-10 text-center md:text-left">
            <p className="text-white/70 text-sm uppercase tracking-widest font-bold mb-1">
              Not sure what you need?
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Talk to our turf expert — free consultation
            </h3>
          </div>
          <button
            onClick={() => openWhatsApp("General Inquiry")}
            className="relative z-10 flex-shrink-0 bg-white text-green-700 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-green-50 active:scale-95 transition-all shadow-xl flex items-center gap-2 cursor-pointer"
          >
            <WaIcon /> Chat on WhatsApp
          </button>
        </div>
      </div>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
