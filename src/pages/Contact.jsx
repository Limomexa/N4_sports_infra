import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  Maximize2,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    landSize: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwNw73Kbh7XwYATNvxSQibMuBRvW_kLto2vPVdXHkxKxCYbxvjy-p7S2OTSTohfmiZ2/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      alert("Enquiry sent successfully!");

      setFormData({
        name: "",
        phone: "",
        landSize: "",
        location: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending enquiry");
    }
  };

  return (
    <section className="py-30 px-4 bg-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your turf project? Contact us today for a free
            consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl mb-6 text-gray-900">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our turf construction services? We're here
                to help!
              </p>
            </div>

            {/* Phone */}
            <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Phone Number</h4>
                <a href="tel:+918428013578" className="text-green-600 text-lg">
                  +91 84280 13578
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Email Address</h4>
                <a
                  href="mailto:n4sportsinfra@gmail.com"
                  className="text-green-600 text-lg"
                >
                  n4sportsinfra@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">Office Location</h4>
                <p className="text-green-600 text-lg">
                  No.333/3 Perambur Barracks Road,
                  <br />
                  Perambur, Chennai - 11
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-3xl mb-2 text-white">Send Us an Enquiry</h3>
            <p className="text-green-100 mb-8">
              Fill out the form and we'll get back to you
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-white mb-2 text-sm">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white mb-2 text-sm">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white"
                  />
                </div>
              </div>

              {/* Land Size */}
              <div>
                <label className="block text-white mb-2 text-sm">
                  Land Size *
                </label>
                <input
                  type="text"
                  id="landSize"
                  required
                  value={formData.landSize}
                  onChange={handleChange}
                  placeholder="5000 sq.m"
                  className="w-full pl-4 pr-4 py-4 rounded-xl bg-white/10 text-white"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-white mb-2 text-sm">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                  className="w-full pl-4 pr-4 py-4 rounded-xl bg-white/10 text-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full pl-4 pr-4 py-4 rounded-xl bg-white/10 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-green-700 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all duration-300"
              >
                <span className="text-lg">Send Enquiry</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
