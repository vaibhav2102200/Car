import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure videos play when component mounts
    const playVideos = async () => {
      try {
        if (videoRef.current) {
          // Load the video first
          videoRef.current.load();
          await videoRef.current.play();
        }
        if (mobileVideoRef.current) {
          // Load the video first
          mobileVideoRef.current.load();
          await mobileVideoRef.current.play();
        }
      } catch (error) {
        console.log("Video autoplay failed:", error);
        // Try to play again after a short delay
        setTimeout(async () => {
          try {
            if (videoRef.current) await videoRef.current.play();
            if (mobileVideoRef.current) await mobileVideoRef.current.play();
          } catch (retryError) {
            console.log("Video retry failed:", retryError);
          }
        }, 1000);
      }
    };
    
    playVideos();
  }, []);
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-grays-900"
    >
      {/* Video Background - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          ref={videoRef}
          preload="auto"
          src="/home_converted.mp4"
        />
      </div>
      
      {/* Video Background - Mobile */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden">
        <video
          ref={mobileVideoRef}
          className="rounded-lg w-[500px] h-[700px] object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          src="/home_converted.mp4"
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
          <Button asChild className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-8 py-3 text-base font-normal transition-all duration-300 group">
            <Link to="/contact">
              Let's connect
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
