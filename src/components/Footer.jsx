import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";

export default function Footer() {
  // Modal states
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-2 text-white">N4 Sports Infra</h3>
              <p className="text-green-300 text-sm">
                Professional Turf Construction
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building world-class sports facilities with premium quality
              materials and expert craftsmanship.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/N4-Sports-Infra/61577663586294/"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/n4sports_infra/"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-xl mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "Football Turf",
                "Cricket Nets",
                "Arena Setup",
                "Maintenance",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-xl mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <FaPhoneAlt className="text-green-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a
                    href="tel:+918428013578"
                    className="hover:text-green-400 transition-colors"
                  >
                    +91 8428013578
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MdEmail className="text-green-400 text-xl mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:n4sportsinfra@gmail.com"
                    className="hover:text-green-400 transition-colors"
                  >
                    n4sportsinfra@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-green-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <p className="text-sm">
                    No.333/3 perambur barracks road, Chennai - 600011
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2026 N4 SPORTS INFRA Turf Construction. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL SYSTEM --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white text-gray-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="bg-green-700 p-6 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold uppercase tracking-wider">
                {activeModal === "privacy"
                  ? "Privacy Policy"
                  : "Terms of Service"}
              </h3>
              <button
                onClick={closeModal}
                className="hover:bg-black/20 p-1 rounded-full transition-colors"
              >
                <MdClose size={24} />
              </button>
            </div>

            <div className="p-8 max-h-[70vh] overflow-y-auto text-sm leading-relaxed space-y-4 text-gray-700">
              {activeModal === "privacy" ? (
                <>
                  <p className="font-bold text-lg text-green-800">
                    Your Privacy is Our Priority
                  </p>
                  <p>
                    At N4 Sports Infra, we respect your privacy. We only collect
                    information that you voluntarily provide through our contact
                    forms or WhatsApp for business inquiries.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Information Collection:</strong> We collect your
                      name, phone number, and project details to provide
                      accurate quotes.
                    </li>
                    <li>
                      <strong>Data Usage:</strong> Your details are used
                      strictly for site inspections and communication regarding
                      your turf project.
                    </li>
                    <li>
                      <strong>Security:</strong> We do not sell or share your
                      personal data with third-party marketing agencies.
                    </li>
                  </ul>
                  <p>
                    By using our website, you consent to our simple data
                    practices aimed at providing the best construction services.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-bold text-lg text-green-800">
                    Business Terms & Conditions
                  </p>
                  <p>
                    By engaging with N4 Sports Infra for your turf construction,
                    you agree to the following standard terms:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Quotations:</strong> All initial quotes are
                      estimates. Final pricing is confirmed only after a
                      professional site inspection.
                    </li>
                    <li>
                      <strong>Project Timeline:</strong> Construction duration
                      (usually 15-45 days) depends on weather conditions and
                      site readiness.
                    </li>
                    <li>
                      <strong>Payments:</strong> Projects follow a standard
                      payment structure (Advance, Milestone payments, and Final
                      handover).
                    </li>
                    <li>
                      <strong>Maintenance:</strong> Warranty covers
                      manufacturing defects in synthetic turf as per the
                      selected grade.
                    </li>
                  </ul>
                  <p>
                    We strive to deliver quality arenas and expect professional
                    cooperation from our clients regarding site access and
                    permits.
                  </p>
                </>
              )}
            </div>

            <div className="p-6 border-t border-gray-100 text-right">
              <button
                onClick={closeModal}
                className="bg-green-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-800 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
