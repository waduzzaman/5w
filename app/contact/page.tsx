import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-brand-light pt-44 sm:pt-48 md:pt-52 lg:pt-56 xl:pt-60 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text mb-6">
            Get in <span className="text-brand-mulberry">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Ready to elevate your brand&apos;s voice? Contact us today to discuss how we can help you achieve your communication goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-brand-text mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-mulberry focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-mulberry focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-mulberry focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-mulberry focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-mulberry focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-mulberry rounded-full hover:bg-brand-mulberry/90 transition-colors shadow-lg shadow-brand-mulberry/20"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-brand-text mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-cobalt flex-shrink-0 mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-text mb-1">Reach Us</h3>
                      <p className="text-gray-600">Hafiz Mansion (3rd Floor), 33 Kazi Nazrul Islam Ave<br />Dhaka 1215, Bangladesh</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-cobalt flex-shrink-0 mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-text mb-1">Phone</h3>
                      <p className="text-gray-600">+8801716425306<br />+880 1617-03082<br /><br /><span className="font-bold">Call us Toll Free</span><br />+8801716-425306</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-cobalt flex-shrink-0 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-text mb-1">Email</h3>
                      <p className="text-gray-600">info@5wcommunications.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Interactive Map Embedded Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
