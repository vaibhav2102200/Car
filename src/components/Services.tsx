import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Car Wraps & Paint Protection",
      description: "Vinyl wraps, PPF & ceramic coating for a lasting shine.",
      image: "/17.jpg",
      link: "/services"
    },
    {
      title: "Car Lighting & Styling", 
      description: "LED headlights, DRLs, taillights & fog lamps for safety and style.",
      image: "//image.made-in-china.com/202f0j00NKZVweRJwIcE/Car-Styling-Cold-Light-Ambiance-Lamp-Line-Auto-Lights-LED-RGB-Neon-Interior-Atmosphere-Light-Strip.webp",
      link: "/services"
    },
    {
      title: "Car Audio Systems",
      description: "Crystal-clear sound with premium speakers, amplifiers & subwoofers.",
      image: "/6.jpg",
      link: "/services"
    }
  ];

  return (
    <section className="py-24 px-4 bg-grey-900 relative">
      {/* Dark Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Small dark particles with glow */}
        <div className="absolute w-2 h-2 bg-black bg-opacity-60 rounded-full animate-particle-float" style={{left: '15%', top: '25%', animationDelay: '0s'}}></div>
        <div className="absolute w-3 h-3 bg-black bg-opacity-70 rounded-full animate-particle-float" style={{left: '75%', top: '15%', animationDelay: '0.5s'}}></div>
        <div className="absolute w-1 h-1 bg-black bg-opacity-80 rounded-full animate-particle-float" style={{left: '45%', top: '35%', animationDelay: '1s'}}></div>
        <div className="absolute w-4 h-4 bg-black bg-opacity-50 rounded-full animate-particle-float" style={{left: '85%', top: '45%', animationDelay: '1.5s'}}></div>
        <div className="absolute w-2 h-2 bg-black bg-opacity-65 rounded-full animate-particle-float" style={{left: '25%', top: '55%', animationDelay: '0.8s'}}></div>
        <div className="absolute w-3 h-3 bg-black bg-opacity-55 rounded-full animate-particle-float" style={{left: '65%', top: '75%', animationDelay: '1.2s'}}></div>
        <div className="absolute w-1 h-1 bg-black bg-opacity-75 rounded-full animate-particle-float" style={{left: '35%', top: '85%', animationDelay: '0.3s'}}></div>
        <div className="absolute w-2 h-2 bg-black bg-opacity-60 rounded-full animate-particle-float" style={{left: '95%', top: '65%', animationDelay: '0.7s'}}></div>
        
        {/* Additional particles with glow */}
        <div className="absolute w-1 h-1 bg-black bg-opacity-85 rounded-full animate-particle-float" style={{left: '5%', top: '40%', animationDelay: '1.8s'}}></div>
        <div className="absolute w-3 h-3 bg-black bg-opacity-45 rounded-full animate-particle-float" style={{left: '55%', top: '20%', animationDelay: '0.2s'}}></div>
        <div className="absolute w-2 h-2 bg-black bg-opacity-70 rounded-full animate-particle-float" style={{left: '90%', top: '30%', animationDelay: '1.4s'}}></div>
        <div className="absolute w-4 h-4 bg-black bg-opacity-40 rounded-full animate-particle-float" style={{left: '40%', top: '60%', animationDelay: '0.9s'}}></div>
        <div className="absolute w-1 h-1 bg-black bg-opacity-90 rounded-full animate-particle-float" style={{left: '10%', top: '80%', animationDelay: '2.1s'}}></div>
        <div className="absolute w-2 h-2 bg-black bg-opacity-55 rounded-full animate-particle-float" style={{left: '80%', top: '50%', animationDelay: '0.6s'}}></div>
        <div className="absolute w-3 h-3 bg-black bg-opacity-60 rounded-full animate-particle-float" style={{left: '30%', top: '10%', animationDelay: '1.7s'}}></div>
        <div className="absolute w-1 h-1 bg-black bg-opacity-75 rounded-full animate-particle-float" style={{left: '70%', top: '90%', animationDelay: '0.4s'}}></div>
        <div className="absolute w-2 h-2 bg-black bg-opacity-65 rounded-full animate-particle-float" style={{left: '50%', top: '70%', animationDelay: '1.6s'}}></div>
        <div className="absolute w-4 h-4 bg-black bg-opacity-35 rounded-full animate-particle-float" style={{left: '15%', top: '5%', animationDelay: '2.3s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-left mb-16 animate-fade-in">
         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground max-w-xl">
  Our Core Services
</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            At GMS Car Modifiers Bangalore, we specialize in premium car customization that enhances 
style, comfort, performance, and protection. Whether you’re in across Bangalore, KR 
Puram, Whitefield, Mahadevapura, Bellandur, CV Raman Nagar, Marathahalli & all over 
Karnataka, our services are trusted by thousands of car enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:border-red-500 rounded-lg border border-border p-4"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.link} 
                  className="inline-block text-foreground hover:text-red-500 transition-colors duration-300 border-b border-transparent hover:border-red-500"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
