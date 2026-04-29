import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ClientsPage() {
  const clients = [
    {
      name: 'Adani Power',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adani_logo_2012.svg/1280px-Adani_logo_2012.svg.png',
      bgImage: 'https://c.ndtvimg.com/2025-05/6asvamrk_adani-power-plant-up_625x300_10_May_25.jpeg',
      url: 'https://www.adani.com/businesses/energy-utilities/thermal-power'
    },
    {
      name: 'Intertek',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkaVsuS6so0zmr6sTV-C2nv9NPRo_4gcBxA&s',
      bgImage: 'https://accuvio.com/wp-content/uploads/2018/09/intertek-1.png',
      url: 'https://www.intertek.com/bangladesh/'
    },
    {
      name: 'Bahon Limited',
      logo: 'https://www.bahon.com/assets/images/logo.png',
      bgImage: 'https://i.ibb.co/60BPLLD6/bahon.png',
      url: 'https://www.bahon.com/'
    },
    {
      name: 'Jaago Foundation',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/06/JAAGO_Foundation.jpeg',
      bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NXaI-lBRMHIxLmPuVya7yI2OIpp66Ir_RA&s',
      url: 'https://jaago.com.bd/'
    }
  ];

  const caseStudies = [
    {
      title: 'Powering Bangladesh with Clean Energy Solutions',
      client: 'Adani Power',
      img: 'https://c.ndtvimg.com/2025-05/6asvamrk_adani-power-plant-up_625x300_10_May_25.jpeg',
      desc: 'Partnering with Adani Power to amplify their sustainability initiatives and community engagement across South Asia.'
    },
    {
      title: 'Ensuring Quality Excellence in Bangladesh',
      client: 'Intertek',
      img: 'https://accuvio.com/wp-content/uploads/2018/09/intertek-1.png',
      desc: 'Supporting Intertek Bangladesh with strategic communications that reinforced their position as a leader in quality assurance.'
    },
    {
      title: 'Connecting Communities through Technology',
      client: 'Bahon Limited',
      img: 'https://i.ibb.co/60BPLLD6/bahon.png',
      desc: 'Helping Bahon Limited build brand awareness and trust through targeted PR campaigns and digital storytelling.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-brand-light pt-44 sm:pt-48 md:pt-52 lg:pt-56 xl:pt-60 pb-20">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <Link
                key={i}
                href={client.url}
                target="_blank"
                className="group relative h-64 rounded-3xl overflow-hidden bg-[#1a1a1a]"
              >
                <Image
                  src={client.bgImage}
                  alt=""
                  fill
                  className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={48}
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2 rounded-full bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-white font-serif text-xl font-medium tracking-tight group-hover:text-blue-300 transition-colors">
                    {client.name}
                  </p>
                </div>
              </Link>
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
