"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">

        {/* Page Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl fw-bold text-gray-800 mb-3 !text-green-900">
            Contact Us
          </h2>
          <p className="text-gray-600 !text-green-900">
            Feel free to contact us for any queries or information.
          </p>
        </div>

        <div className="row g-4">

          {/* Contact Info */}
          <div className="col-lg-4 col-md-12">
            <div className="bg-gray-50 rounded-xl p-6 h-100 shadow-sm">

              <div className="mb-4">
                <h5 className="fw-bold mb-1 !text-green-900">📞 Phone</h5>
                <p className="text-gray-600 mb-0">+88 01 27 14 101</p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-1 !text-green-900">📧 Email</h5>
                <p className="text-gray-600 mb-0">info@example.com</p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-1 !text-green-900">📍 Location</h5>
                <p className="text-gray-600 mb-0">
                  Suite 80 Golden Street, Germany
                </p>
              </div>

              <div>
                <h5 className="fw-bold mb-1 !text-green-900">⏰ Working Hours</h5>
                <p className="text-gray-600 mb-0">
                  Monday – Friday: 9:00 AM – 6:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 col-md-12">
            <div className="bg-white rounded-xl p-8 shadow">

              <h3 className="fw-bold mb-4 !text-green-900">Send Us a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control placeholder:!text-green-900"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control placeholder:!text-green-900"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      className="form-control placeholder:!text-green-900"
                      placeholder="Your Phone Number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      name="message"
                      className="form-control placeholder:!text-green-900"
                      rows={5}
                      placeholder="Your Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-success px-5 py-2
                                 hover:opacity-90 transition "
                    >
                      Send Message
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
