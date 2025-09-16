import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BookingSection = () => {
  return (
    <section className="py-24 px-4 bg-neutral-900 relative">
      {/* Dark Wave Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Wave-like dark elements with glow */}
        <div className="absolute w-32 h-4 bg-black bg-opacity-30 rounded-full animate-wave-float" style={{left: '10%', top: '25%', animationDelay: '0s'}}></div>
        <div className="absolute w-24 h-3 bg-black bg-opacity-40 rounded-full animate-wave-float" style={{left: '60%', top: '35%', animationDelay: '1s'}}></div>
        <div className="absolute w-40 h-5 bg-black bg-opacity-25 rounded-full animate-wave-float" style={{left: '30%', top: '55%', animationDelay: '2s'}}></div>
        <div className="absolute w-20 h-3 bg-black bg-opacity-35 rounded-full animate-wave-float" style={{left: '80%', top: '65%', animationDelay: '0.5s'}}></div>
        <div className="absolute w-28 h-4 bg-black bg-opacity-30 rounded-full animate-wave-float" style={{left: '5%', top: '75%', animationDelay: '1.5s'}}></div>
        <div className="absolute w-16 h-3 bg-black bg-opacity-45 rounded-full animate-wave-float" style={{left: '70%', top: '85%', animationDelay: '0.8s'}}></div>
        
        {/* Additional wave elements with glow */}
        <div className="absolute w-36 h-3 bg-black bg-opacity-20 rounded-full animate-wave-float" style={{left: '45%', top: '15%', animationDelay: '2.5s'}}></div>
        <div className="absolute w-18 h-4 bg-black bg-opacity-35 rounded-full animate-wave-float" style={{left: '85%', top: '45%', animationDelay: '1.8s'}}></div>
        <div className="absolute w-26 h-3 bg-black bg-opacity-30 rounded-full animate-wave-float" style={{left: '15%', top: '65%', animationDelay: '0.3s'}}></div>
        <div className="absolute w-22 h-4 bg-black bg-opacity-25 rounded-full animate-wave-float" style={{left: '55%', top: '75%', animationDelay: '1.2s'}}></div>
        <div className="absolute w-14 h-3 bg-black bg-opacity-40 rounded-full animate-wave-float" style={{left: '25%', top: '35%', animationDelay: '2.8s'}}></div>
        <div className="absolute w-30 h-4 bg-black bg-opacity-20 rounded-full animate-wave-float" style={{left: '75%', top: '15%', animationDelay: '0.7s'}}></div>
        <div className="absolute w-12 h-3 bg-black bg-opacity-45 rounded-full animate-wave-float" style={{left: '5%', top: '55%', animationDelay: '1.9s'}}></div>
        <div className="absolute w-34 h-3 bg-black bg-opacity-15 rounded-full animate-wave-float" style={{left: '65%', top: '85%', animationDelay: '3.1s'}}></div>
        <div className="absolute w-20 h-4 bg-black bg-opacity-30 rounded-full animate-wave-float" style={{left: '35%', top: '5%', animationDelay: '0.4s'}}></div>
        <div className="absolute w-24 h-3 bg-black bg-opacity-35 rounded-full animate-wave-float" style={{left: '95%', top: '25%', animationDelay: '2.2s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-tight hover:text-red-500 transition-colors duration-300 text-3xl">
            Book your luxury car detailing today
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the ultimate in automotive care with our premium detailing services designed for luxury vehicles.
          </p>
          
          <Button 
            className="bg-transparent border border-foreground text-foreground px-8 py-3 text-base font-normal transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:border-red-500 hover:bg-red-500 hover:text-white"
          >
            <Link to="/contact">
              Get a quote now →
            </Link>
          </Button>
        </div>
        
        {/* Right Image */}
        <div className="relative group rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:border-red-500">
           <video
            className="w-full h-[300px] md:h-[400px] object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            src="/v4.mp4"
            style={{
              minHeight: '300px',
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
