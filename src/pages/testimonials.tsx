import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [videoError, setVideoError] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoLoading, setVideoLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setCurrentVideoIndex(0); // Reset to first video when switching
        setVideoError(false); // Reset error state
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);
  
  const videoSources = isMobile 
    ? ["/t1.mp4", "/vv3.mp4", "/v3.mp4", "/v1.mp4"] // Mobile-first with t1.mp4
    : ["/vv3.mp4", "/v3.mp4", "/v1.mp4", "/v.mp4"]; // Desktop sources

  const testimonials = [
    {
      name: "John D.",
      location: "Bangalore",
      service: "Car Audio System Installation",
      rating: 5,
      comment: "Exceptional service! The audio system they installed transformed my driving experience. Professional team and great attention to detail."
    },
    {
      name: "Rahul S.",
      location: "Whitefield",
      service: "Interior Customization",
      rating: 5,
      comment: "Amazing interior work! They completely transformed my car's interior with premium materials and perfect finishing."
    },
    {
      name: "Priya M.",
      location: "KR Puram",
      service: "PPF & Ceramic Coating",
      rating: 5,
      comment: "Top-notch paint protection work. My car looks better than new and the ceramic coating is holding up beautifully."
    },
    {
      name: "Vijay K.",
      location: "Marathahalli",
      service: "Car Lighting & Styling",
      rating: 5,
      comment: "Fantastic lighting upgrades! The LED conversion and ambient lighting looks amazing. Very professional service."
    },
    {
      name: "Arun P.",
      location: "CV Raman Nagar",
      service: "Alloy Wheels & Wraps",
      rating: 5,
      comment: "Got my alloy wheels and car wrap done here. The workmanship is excellent and the team is very knowledgeable."
    },
    {
      name: "Sarah M.",
      location: "Bellandur",
      service: "Complete Car Modification",
      rating: 5,
      comment: "Had multiple modifications done on my car. From audio to interiors, everything is perfect. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      {/* Video Background */}
      <div className="absolute inset-0 z-0 min-h-screen">
        {videoLoading && !videoError && (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-lg">Loading video...</p>
            </div>
          </div>
        )}
        
        {!videoError ? (
          <video
            className="rounded-lg w-[500px] h-[700px] object-cover object-center mx-auto"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={videoSources[currentVideoIndex]}
            onError={(e) => {
              if (currentVideoIndex < videoSources.length - 1) {
                setCurrentVideoIndex(currentVideoIndex + 1);
              } else {
                setVideoError(true);
              }
            }}
            onLoadStart={() => {
              setVideoLoading(true);
            }}
            onCanPlay={() => {
              setVideoLoading(false);
            }}
            onLoadedData={() => {
              setVideoLoading(false);
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-lg mb-2">Video unavailable</p>
              <p className="text-sm text-gray-400">Background video could not be loaded</p>
            </div>
          </div>
        )}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <main className="pt-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in text-white">
            Customer Testimonials
          </h1>
          <p className="text-lg text-gray-200 mb-12 animate-fade-in">
            What our satisfied customers say about GMS Car Modifiers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-6 space-y-4 border border-gray-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:border-red-500"
              >

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-200 italic">"{testimonial.comment}"</p>
                
                {/* Customer Info */}
                <div className="pt-4 border-t border-gray-600">
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.location}</p>
                  <p className="text-sm text-gray-300">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
       
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Testimonials;
