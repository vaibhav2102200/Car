import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Volume2, Car, Lightbulb, Palette,
  Settings, Package, Shield, Monitor,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { WordReveal } from '@/components/ui/WordReveal';

const Services = () => {
  useEffect(() => {
    document.body.classList.add('smooth-transition');
    return () => document.body.classList.remove('smooth-transition');
  }, []);
  const services = [
  {
    title: 'Car Audio Systems',
    description: 'Experience the best car audio installation in Bangalore with powerful stereos, amplifiers, speakers, and subwoofers. We ensure crystal-clear sound and bass for the ultimate driving experience.',
    features: [
      'Premium branded speakers & woofers',
      'Custom stereo setup & installation',
      'Noise reduction & sound tuning',
      'Audio upgrades for every car model'
    ],
    icon: Volume2,
  },
  {
    title: 'Custom Car Interiors & Upholstery',
    description: 'Transform your ride with luxury car interiors in Bangalore. From leather upholstery to stylish dashboard finishes, we make your cabin look premium and feel comfortable.',
    features: [
      'Leather & fabric seat covers',
      'Custom dashboards & trims',
      'Steering wheel & gear knob upgrades',
      'Ambient interior lighting'
    ],
    icon: Car,
  },
  {
    title: 'Car Lighting & Styling',
    description: 'Upgrade to premium car lighting modifications in Bangalore. Add safety and style with LED headlights, taillights, fog lamps, and ambient interior lighting.',
    features: [
      'HID & LED headlight upgrades',
      'Stylish DRLs & fog lights',
      'Taillight customizations',
      'Interior ambient lighting kits'
    ],
    icon: Lightbulb,
  },
  {
    title: 'Car Wraps & Paint Protection',
    description: 'Give your car a new identity with vinyl wraps, PPF (Paint Protection Film), and ceramic coating in Bangalore. Keep your paint safe and your car shining.',
    features: [
      'Gloss, matte & textured vinyl wraps',
      'PPF for scratch & stone-chip protection',
      'Ceramic coating for long-lasting shine',
      'Custom designs & color options'
    ],
    icon: Palette,
  },
  {
    title: 'Alloy Wheels',
    description: 'Upgrade your car’s style and performance with premium alloy wheels in Bangalore. We provide durable, lightweight, and stylish alloys to enhance your car’s look.',
    features: [
      'Multi-spoke, concave & custom alloy designs',
      'High-quality branded alloys',
      'Better road grip & handling',
      'Available in multiple finishes'
    ],
    icon: Settings,
  },
  {
    title: 'Car Accessories',
    description: 'Shop the best car accessories in Bangalore with GMS Car Modifiers. From styling to functionality, we have everything to make your ride unique.',
    features: [
      'Seat covers & floor mats',
      'Steering & dashboard accessories',
      'Roof rails, spoilers & side skirts',
      'Mobile mounts & utility gadgets'
    ],
    icon: Package,
  },
  {
    title: 'PPF & Ceramic Coating',
    description: 'Protect your car with PPF and ceramic coating in Bangalore. Our advanced paint protection keeps your car scratch-free, glossy, and weather-resistant.',
    features: [
      'Anti-scratch protection film',
      'Long-lasting ceramic shine',
      'UV & heat resistance',
      'Easier cleaning & maintenance'
    ],
    icon: Shield,
  },
  {
    title: 'Stereo Systems',
    description: 'Enhance your drives with custom stereo system installation in Bangalore. From touch-screen infotainment to surround sound setups, we provide the best in-car entertainment solutions.',
    features: [
      'Latest touch-screen systems',
      'Android & Apple CarPlay integration',
      'GPS navigation-enabled stereos',
      'Rear camera & parking sensor integration'
    ],
    icon: Monitor,
  }
];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section with Background Image */}
     <section
  className="relative mt-16 overflow-hidden min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-80px)] min-h-[60vh] flex items-center justify-center"
>
  {/* Background video */}
  <div className="absolute inset-0 flex items-center justify-center">
  <video
    className="rounded-lg 
               w-[500px] h-[235px]   /* default for mobile */
               md:w-full md:h-full   /* full screen on tablet & above */
               object-cover object-center"
    autoPlay
    muted
    loop
    playsInline
    webkit-playsinline="true"
    preload="metadata"
    controls={false}
    src="/v3.mp4"
  />
</div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Centered text */}
  <div className="relative text-center z-10 px-4">
    <WordReveal
      text="Our Services"
      className="text-2xl md:text-6xl font-bold mb-2 md:mb-4 leading-tight text-center text-white"
    />
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="text-sm md:text-lg max-w-3xl mx-auto text-gray-200 px-2"
    >
      Premium customization – Audio, Interiors, Lighting, Wraps, Alloys, PPF & Ceramic
    </motion.p>
  </div>
</section>



      {/* Services Grid */}
      <section className="py-16 bg-background relative z-10">
        <div className="container px-4">
          <motion.div
            className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              offscreen: {},
              onscreen: {
                transition: { staggerChildren: 0.15, delayChildren: 0.3 },
              },
            }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={{
                  offscreen: { y: 40, opacity: 0 },
                  onscreen: {
                    y: 0,
                    opacity: 1,
                    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
                  },
                }}
              >
                <Card className="group hover:shadow-lg hover:shadow-primary/20 transition-shadow border-border/50 hover:border-primary/50 p-4 md:p-6 bg-card">
                  <CardHeader className="pb-3">
                    <div className="mb-3 md:mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-heading text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-sm md:text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs md:text-sm text-muted-foreground">
                          <CheckCircle className="mr-2 h-3 w-3 md:h-4 md:w-4 text-success mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12 md:mt-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-foreground">Ready to Transform Your Car?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your car modification needs and get a personalized quote.
            </p>
            <Button asChild size="lg" variant="destructive" className="glow-effect px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
