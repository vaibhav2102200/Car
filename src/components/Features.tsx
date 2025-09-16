import { Car,Settings,ShieldCheck,} from "lucide-react";
import { Link } from "react-router-dom";
const Features = () => {
  const features = [
  {
    icon: Car,
    title: "Premium Customization",
    description:
      "From luxury interiors to stylish exteriors, we craft unique modifications that enhance both comfort and style.",
  },
  {
    icon: Settings,
    title: "Performance Upgrades",
    description:
      "Boost your car’s speed, handling, and efficiency with expert tuning, exhaust systems, and engine enhancements.",
  },
  {
    icon: ShieldCheck,
    title: "Protection & Detailing",
    description:
      "Keep your car looking new with ceramic coatings, PPF wrapping, and precision detailing trusted by car enthusiasts.",
  },
];


  return (
    <section className="py-24 px-4 bg-zinc-900 relative">
      {/* Dark Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Triangles with glow */}
        <div className="absolute w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-black border-b-opacity-40 animate-geometric-float" style={{left: '20%', top: '30%', animationDelay: '0s'}}></div>
        <div className="absolute w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-black border-b-opacity-50 animate-geometric-float" style={{left: '70%', top: '20%', animationDelay: '1s'}}></div>
        
        {/* Squares with glow */}
        <div className="absolute w-16 h-16 bg-black bg-opacity-35 animate-geometric-float" style={{left: '80%', top: '60%', animationDelay: '2s'}}></div>
        <div className="absolute w-12 h-12 bg-black bg-opacity-45 animate-geometric-float" style={{left: '10%', top: '70%', animationDelay: '0.5s'}}></div>
        
        {/* Hexagons with glow (using clip-path) */}
        <div className="absolute w-20 h-20 bg-black bg-opacity-30 animate-geometric-float" style={{left: '50%', top: '40%', animationDelay: '1.5s', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
        <div className="absolute w-14 h-14 bg-black bg-opacity-40 animate-geometric-float" style={{left: '30%', top: '50%', animationDelay: '0.8s', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
        
        {/* Additional geometric shapes with glow */}
        <div className="absolute w-0 h-0 border-l-10 border-r-10 border-b-15 border-l-transparent border-r-transparent border-b-black border-b-opacity-35 animate-geometric-float" style={{left: '5%', top: '15%', animationDelay: '2.5s'}}></div>
        <div className="absolute w-18 h-18 bg-black bg-opacity-25 animate-geometric-float" style={{left: '90%', top: '25%', animationDelay: '1.8s'}}></div>
        <div className="absolute w-8 h-8 bg-black bg-opacity-55 animate-geometric-float" style={{left: '40%', top: '80%', animationDelay: '0.3s'}}></div>
        <div className="absolute w-22 h-22 bg-black bg-opacity-20 animate-geometric-float" style={{left: '60%', top: '10%', animationDelay: '2.8s'}}></div>
        <div className="absolute w-0 h-0 border-l-7 border-r-7 border-b-11 border-l-transparent border-r-transparent border-b-black border-b-opacity-45 animate-geometric-float" style={{left: '85%', top: '75%', animationDelay: '1.2s'}}></div>
        <div className="absolute w-16 h-16 bg-black bg-opacity-30 animate-geometric-float" style={{left: '15%', top: '45%', animationDelay: '0.7s', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
        <div className="absolute w-10 h-10 bg-black bg-opacity-50 animate-geometric-float" style={{left: '75%', top: '45%', animationDelay: '1.9s'}}></div>
        <div className="absolute w-24 h-24 bg-black bg-opacity-15 animate-geometric-float" style={{left: '25%', top: '5%', animationDelay: '3.2s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground max-w-xl">
            Why Choose GMS
          </h2>

          <div className="space-y-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 group p-4 rounded-lg border border-border transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:border-red-500"
              >
                <div className="w-8 h-8 flex-shrink-0 mt-1 text-accent group-hover:text-red-500 transition-colors duration-300">
                  <feature.icon className="w-full h-full" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-foreground group-hover:text-red-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center text-foreground hover:text-red-500 transition-colors duration-300 border-b border-transparent hover:border-red-500"
            >
              Get a quote now →
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:border-red-500">
          <video
            className="w-full h-[300px] md:h-[400px] rounded-2xl transition-transform duration-500 group-hover:scale-105 object-cover object-center"
  autoPlay
  loop
  muted
  playsInline
            src="/v.mp4"
            style={{
              minHeight: '300px',
              width: 'auto',
              height: 'auto'
            }}
>

  Your browser does not support the video tag.
</video>

        </div>
      </div>
    </section>
  );
};

export default Features;
