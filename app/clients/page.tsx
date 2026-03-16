import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    { name: 'TechCorp', logo: 'https://picsum.photos/seed/techcorp/200/100' },
    { name: 'GlobalFin', logo: 'https://picsum.photos/seed/globalfin/200/100' },
    { name: 'EcoLife', logo: 'https://picsum.photos/seed/ecolife/200/100' },
    { name: 'HealthPlus', logo: 'https://picsum.photos/seed/healthplus/200/100' },
    { name: 'EduSmart', logo: 'https://picsum.photos/seed/edusmart/200/100' },
    { name: 'BuildRight', logo: 'https://picsum.photos/seed/buildright/200/100' },
    { name: 'TravelGo', logo: 'https://picsum.photos/seed/travelgo/200/100' },
    { name: 'FoodieHub', logo: 'https://picsum.photos/seed/foodiehub/200/100' }
  ];

  const caseStudies = [
    {
      title: 'Rebranding a Legacy Financial Institution',
      client: 'GlobalFin',
      img: 'https://picsum.photos/seed/cs-globalfin/800/600',
      desc: 'How we helped GlobalFin modernize their brand image and attract a younger demographic through a comprehensive digital PR campaign.'
    },
    {
      title: 'Launching a Sustainable Fashion Line',
      client: 'EcoLife',
      img: 'https://picsum.photos/seed/cs-ecolife/800/600',
      desc: 'A strategic media relations campaign that secured coverage in top fashion and sustainability publications, driving a 300% increase in launch day sales.'
    },
    {
      title: 'Navigating a Product Recall Crisis',
      client: 'TechCorp',
      img: 'https://picsum.photos/seed/cs-techcorp/800/600',
      desc: 'Our swift crisis communication strategy helped TechCorp maintain customer trust and minimize reputational damage during a major product recall.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-brand-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text mb-6">
            Featured <span className="text-brand-mulberry">Clients</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We are proud to partner with industry leaders and innovative startups to amplify their stories and drive meaningful results.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-cobalt uppercase mb-4">Our Partners</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-text">Trusted by Top Brands</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, i) => (
              <div key={i} className="flex justify-center p-6 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-brand-text text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-mulberry uppercase mb-4">Success Stories</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">Proven Results</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.img}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm font-bold tracking-widest text-brand-cobalt uppercase mb-3">{study.client}</div>
                  <h4 className="text-2xl font-serif font-bold mb-4">{study.title}</h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">{study.desc}</p>
                  <Link href="/contact" className="text-brand-mulberry hover:text-white transition-colors inline-flex items-center text-sm font-semibold">
                    Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
