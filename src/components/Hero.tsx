import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-grays-900"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          ref={videoRef}
          src="/v1.mp4"
         
          style={{
            minHeight: '100vh',
            minWidth: '100vw',
            width: 'auto',
            height: 'auto'
          }}
        />
      </div>
      
     
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
    <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight text-center">
  {/* First Line */}
  <span className="block text-white transition-all duration-500">
    Best Car modifiers in
  </span>

  {/* Second Line */}
  <span className="block text-3xl md:text-5xl text-red-500  transition-all duration-500">
    Bangalore
  </span>
</h1>
          <p className="text-lg md:text-1xl text-white leading-tight 
   transition-all duration-500">
            Premium Car Customization – Audio, Interiors, Lighting, Wraps, Alloys, PPF & Ceramic 
Book Your Modification 
          </p>
          <br></br>
          <Button 
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-8 py-3 text-base font-normal transition-all duration-300 group"
          ><Link to="/contact">
            Let's connect</Link>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
