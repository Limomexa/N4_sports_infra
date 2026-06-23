import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Trophy,
  Target,
  CheckCircle,
  ArrowRight,
  MapPin,
  Lightbulb,
  Wrench,
} from "lucide-react";

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          o.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, visible };
}

const journey = [
  { icon: Building2, year: "2021", desc: "Started N4 Turf Operations" },
  {
    icon: Wrench,
    year: "Challenges",
    desc: "Faced Real Construction & Maintenance Issues",
  },
  {
    icon: Lightbulb,
    year: "Insights",
    desc: "Identified Industry-Wide Problems",
  },
  { icon: Target, year: "Evolution", desc: "Transformed Into N4 Sports Infra" },
  {
    icon: Trophy,
    year: "Today",
    desc: "Trusted Sports Infrastructure Partner",
  },
];

const painPoints = [
  {
    title: "Construction Delays",
    desc: "Projects taking months longer than expected.",
  },
  {
    title: "Maintenance Issues",
    desc: "Lack of proper post-handover support.",
  },
  {
    title: "Turf Quality",
    desc: "Poor material selection affecting durability.",
  },
  {
    title: "Owner Challenges",
    desc: "Difficulty managing long-term operational costs.",
  },
];

const differences = [
  "We were turf owners before becoming builders.",
  "We understand long-term maintenance.",
  "We design for operational efficiency.",
  "We provide complete lifecycle support.",
  "We think like owners and build solutions that last.",
];

function JourneyCard({ item, index }) {
  const { ref, visible } = useReveal();
  const Icon = item.icon;
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center glow-card animate-float"
        style={{ animationDelay: `${index * 0.5}s` }}
      >
        <Icon className="text-green-600 w-8 h-8" />
      </div>
      <h3 className="font-bold mt-4 text-slate-800">{item.year}</h3>
      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
    </div>
  );
}

function PainCard({ item, index }) {
  const { ref, visible } = useReveal();
  const fromLeft = index % 2 === 0;
  return (
    <div
      ref={ref}
      className={`bg-white p-8 rounded-2xl shadow glow-card border border-gray-100 transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0"
          : fromLeft
            ? "opacity-0 -translate-x-14"
            : "opacity-0 translate-x-14"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="font-bold text-xl text-slate-800">{item.title}</h3>
      <p className="mt-3 text-gray-600">{item.desc}</p>
    </div>
  );
}

export default function About() {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const storyHeaderRef = useRef(null);
  const [storyHeaderVisible, setStoryHeaderVisible] = useState(false);
  const whyRef = useRef(null);
  const [whyVisible, setWhyVisible] = useState(false);
  const diffLeftRef = useRef(null);
  const [diffLeftVisible, setDiffLeftVisible] = useState(false);
  const diffRightRef = useRef(null);
  const [diffRightVisible, setDiffRightVisible] = useState(false);
  const visionRef = useRef(null);
  const [visionVisible, setVisionVisible] = useState(false);
  const ctaRef = useRef(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const pairs = [
      [heroRef, setHeroVisible],
      [storyHeaderRef, setStoryHeaderVisible],
      [whyRef, setWhyVisible],
      [diffLeftRef, setDiffLeftVisible],
      [diffRightRef, setDiffRightVisible],
      [visionRef, setVisionVisible],
      [ctaRef, setCtaVisible],
    ];
    const observers = pairs.map(([ref, setter]) => {
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setter(true);
            o.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      if (ref.current) o.observe(ref.current);
      return o;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-white" id="about">
      {/* HERO */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/15 rounded-full blur-[120px] animate-glow-pulse pointer-events-none" />
        <div
          ref={heroRef}
          className={`relative max-w-7xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="bg-green-600/80 border border-green-500/40 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
            Built by Turf Owners, For Turf Owners
          </span>
          <h1 className="text-5xl md:text-7xl mt-6 font-bold leading-tight">
            Building Sports Infrastructure <br />
            <span className="shimmer-text">That Lasts</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg leading-relaxed">
            From operating our own turf facilities to becoming a complete sports
            infrastructure solutions provider, our journey is built on real
            experience, practical knowledge, and long-term vision.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={storyHeaderRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${storyHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="text-green-600 uppercase tracking-widest font-semibold">
              Our Journey
            </span>
            <h2 className="text-4xl mt-4 font-bold text-slate-900">
              From Turf Operators To Industry Experts
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {journey.map((item, i) => (
              <JourneyCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE STARTED */}
      <section className="py-24 bg-slate-50 bg-dot-pattern relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-green-100/60 rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            ref={whyRef}
            className={`text-center mb-16 transition-all duration-700 ease-out ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-slate-900">
              Why N4 Sports Infra Was{" "}
              <span className="shimmer-text">Created</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {painPoints.map((item, i) => (
              <PainCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            What Makes Us <span className="shimmer-text">Different</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              ref={diffLeftRef}
              className={`space-y-5 transition-all duration-700 ease-out ${diffLeftVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-16"}`}
            >
              {differences.map((d, i) => (
                <div
                  key={i}
                  className={`flex gap-4 items-start p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{d}</span>
                </div>
              ))}
            </div>
            <div
              ref={diffRightRef}
              className={`bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 transition-all duration-700 ease-out glow-green ${diffRightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
            >
              <h3 className="text-3xl font-bold">Built From Experience</h3>
              <p className="mt-6 text-lg text-green-100 leading-relaxed">
                We did not study the problem as outsiders — we lived it
                ourselves. That experience became the foundation of our
                company's evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
        <div
          ref={visionRef}
          className={`max-w-6xl mx-auto px-6 text-center relative z-10 transition-all duration-700 ease-out ${visionVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="animate-bounce-gentle inline-block">
            <MapPin className="mx-auto text-green-600" size={50} />
          </div>
          <h2 className="text-4xl font-bold mt-6 text-slate-900">
            All India Service Coverage
          </h2>
          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our vision is to expand our services to sports academies, clubs,
            educational institutions, residential communities, and government
            projects while growing into new cities and regions across India.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none animate-glow-pulse" />
        <div
          ref={ctaRef}
          className={`relative z-10 transition-all duration-700 ease-out ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold">
            Ready To Build Your{" "}
            <span className="shimmer-text">Sports Facility?</span>
          </h2>
          <a href="tel:+918428013578">
            <button className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-10 py-5 rounded-2xl flex items-center gap-2 mx-auto font-bold text-lg glow-green hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer">
              Get Free Consultation <ArrowRight size={20} />
            </button>
          </a>
        </div>
      </section>
    </section>
  );
}
