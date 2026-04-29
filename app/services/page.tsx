import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'storytelling',
      title: 'Story Telling',
      desc: 'Embark on a narrative journey with our Storytelling service. We craft compelling tales, connecting audiences with your brand, conveying messages that resonate, and leaving a lasting impact.',
      features: ['Narrative Development', 'Brand Messaging', 'Content Creation', 'Audience Engagement'],
      img: 'https://picsum.photos/seed/storytelling/800/600'
    },
    {
      id: 'stakeholder',
      title: 'Stakeholder Relations',
      desc: 'Foster meaningful connections with our Stakeholder Relations service. We navigate relationships with precision, ensuring positive engagements with legislators, local administrations, NGOs, and communities for sustained business success.',
      features: ['Community Outreach', 'NGO Partnerships', 'Legislative Engagement', 'Relationship Management'],
      img: 'https://picsum.photos/seed/stakeholder/800/600'
    },
    {
      id: 'event',
      title: 'Event Management',
      desc: 'Elevate your events with precision through our Event Management service. We conceptualize, plan, and execute memorable experiences, reinforcing your brand\'s identity and values for lasting impact and engagement.',
      features: ['Concept Development', 'Logistics Planning', 'On-site Execution', 'Post-event Analysis'],
      img: 'https://picsum.photos/seed/event/800/600'
    },
    {
      id: 'government',
      title: 'Government Relations',
      desc: 'Effortlessly navigate regulatory complexities with our experts. We establish vital connections with government bodies, advocate for policies, ensuring your brand\'s voice is heard, fostering positive relationships with regulatory authorities.',
      features: ['Policy Advocacy', 'Regulatory Navigation', 'Government Liaison', 'Compliance Strategy'],
      img: 'https://picsum.photos/seed/government/800/600'
    },
    {
      id: 'executive',
      title: 'Executive Profiling',
      desc: 'Strategically shape executive images. We craft compelling narratives, showcase leadership qualities, and enhance the public image of executives. Our profiling strategies position your leadership team as industry authorities and thought leaders.',
      features: ['Thought Leadership', 'Media Training', 'Speaking Opportunities', 'Personal Branding'],
      img: 'https://picsum.photos/seed/executive/800/600'
    },
    {
      id: 'media',
      title: 'Media Relations',
      desc: 'We diligently establish and nurture relationships with key media outlets, ensuring strategic brand placements. Our efforts guarantee that your brand is featured in the right places at the right time, fostering positive coverage and enhancing your overall media presence.',
      features: ['Media Pitching', 'Press Release Distribution', 'Media Monitoring', 'Crisis Communication'],
      img: 'https://picsum.photos/seed/media/800/600'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-brand-light pt-44 sm:pt-48 md:pt-52 lg:pt-56 xl:pt-60 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="text-brand-mulberry">Services</span>
          </h1>
          <p className="text-lg text-gray-600 md:text-xl leading-relaxed">
            Comprehensive communications solutions tailored to your brand&apos;s unique needs and objectives.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 pt-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-brand-cobalt mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand-mulberry rounded-full hover:bg-brand-mulberry/90 transition-colors shadow-lg shadow-brand-mulberry/20"
                    >
                      Inquire Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className={`relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
