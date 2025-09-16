import { motion, useInView } from "framer-motion";
import Navigation from "../components/Navigation";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const BlogPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Best Car Modification in Bangalore – Transform Your Ride with GMS Car Modifiers",
      excerpt: "Experience the best car modification in Bangalore with GMS. From interiors to audio, wraps, and luxury car accessories, we turn your car into a masterpiece.",
      location: "Bangalore",
      services: ["Interiors", "Audio", "Wraps", "Luxury Accessories"],
      image: "/blog/1.jpg"
    },
    {
      id: 2,
      title: "Top Car Modifiers in KR Puram – Audio, Wraps, and PPF Experts",
      excerpt: "Upgrade your car with expert car modifiers in KR Puram. GMS offers audio installation, stylish wraps, and premium PPF for unmatched car customization.",
      location: "KR Puram",
      services: ["Audio Installation", "Wraps", "PPF"],
      image: "/blog/2.jpg"
    },
    {
      id: 3,
      title: "Car Modification in Whitefield Bangalore – Interiors, Alloy Wheels & More",
      excerpt: "Get professional car modification in Whitefield Bangalore. GMS specializes in interiors, alloy wheels, wraps & accessories for a luxury driving experience.",
      location: "Whitefield",
      services: ["Interiors", "Alloy Wheels", "Wraps", "Accessories"],
      image: "/blog/3.jpg"
    },
    {
      id: 4,
      title: "Best Car Modification in Mahadevapura – Lighting, Stereo & Ceramic Coating",
      excerpt: "At Mahadevapura, GMS Car Modifiers offers lighting upgrades, car stereo systems, PPF, and ceramic coating to give your car a stylish new identity.",
      location: "Mahadevapura",
      services: ["Lighting", "Stereo Systems", "PPF", "Ceramic Coating"],
      image: "/blog/4.jpg"
    },
    {
      id: 5,
      title: "Car Modifiers in Karnataka – Wraps, Graphics & Premium Car Accessories",
      excerpt: "Discover the best car modifiers in Bellandur. GMS provides car wraps, graphics, interiors, lighting & accessories to enhance your vehicle's look and feel.",
      location: "Bellandur",
      services: ["Wraps", "Graphics", "Interiors", "Lighting"],
      image: "/blog/5.jpg"
    },
    {
      id: 6,
      title: "Car Modification in CV Raman Nagar – Interiors, Audio & PPF Coating",
      excerpt: "For premium car modification in CV Raman Nagar, GMS delivers interiors, audio upgrades, lighting, PPF & ceramic coating to protect and style your car.",
      location: "CV Raman Nagar",
      services: ["Interiors", "Audio", "Lighting", "PPF", "Ceramic Coating"],
      image: "/blog/6.jpg"
    },
    {
      id: 7,
      title: "Best Car Modifiers in Marathahalli – Stylish Interiors & Alloy Wheel Upgrades",
      excerpt: "Transform your ride with the best car modifiers in Marathahalli. From interiors to alloy wheels, lighting & wraps, GMS brings you premium modifications.",
      location: "Marathahalli",
      services: ["Interiors", "Alloy Wheels", "Lighting", "Wraps"],
      image: "/blog/7.jpg"
    },
    {
      id: 8,
      title: "Car Accessories & Customization in Bangalore – Luxury Mods at GMS",
      excerpt: "Explore luxury car accessories and customization in Bangalore with GMS. From audio systems to wraps & interiors, we offer premium modification services.",
      location: "Bangalore",
      services: ["Audio Systems", "Wraps", "Interiors", "Luxury Mods"],
      image: "/blog/8.jpg"
    },
    {
      id: 9,
      title: "Premium Car Modification Shop in Karnataka – PPF, Ceramic & Luxury Upgrades",
      excerpt: "GMS Car Modifiers is Karnataka's premium car modification shop. Get ceramic coating, PPF, audio, interiors & luxury accessories across the state.",
      location: "Karnataka",
      services: ["Ceramic Coating", "PPF", "Audio", "Interiors", "Luxury Accessories"],
      image: "/blog/9.jpg"
    },
    {
      id: 10,
      title: "Why GMS Car Modifiers is the #1 Choice for Car Customization in Bangalore & Karnataka",
      excerpt: "GMS Car Modifiers is trusted for car customization in Bangalore & Karnataka. We specialize in interiors, audio, wraps, PPF & ceramic coating upgrades.",
      location: "Bangalore & Karnataka",
      services: ["Interiors", "Audio", "Wraps", "PPF", "Ceramic Coating"],
      image: "/blog/10.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-800 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Hero Section */}
      <section className="relative mt-16 pt-24 pb-20 bg-gradient-to-br from-black via-gray-900 to-red-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent leading-normal py-2">
   GMS Car Modifiers Blog
 </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover the latest in car modification trends, expert tips, and showcase our premium customization services across Bangalore and Karnataka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Blog Posts */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-red-500 to-red-600"></div>
          
          <div className="space-y-16" ref={containerRef}>
            {blogPosts.map((post, index) => {
              const isLeft = index % 2 === 0;
              const cardRef = useRef(null);
              const cardInView = useInView(cardRef, { once: true, margin: "-200px" });
              
              return (
                <motion.div
                  key={post.id}
                  ref={cardRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} md:${isLeft ? 'justify-start' : 'justify-end'} justify-center`}
                >
                  {/* Timeline Node - Hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-black z-10"></div>
                  
                  {/* Card */}
                  <div className={`w-full max-w-lg ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="bg-gray-900 border-red-600/30 hover:border-red-500 transition-all duration-300 overflow-hidden group">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-red-600 text-white border-red-600">
                            {post.location}
                          </Badge>
                        </div>
                       
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.services.slice(0, 3).map((service) => (
                            <Badge key={service} variant="outline" className="text-xs text-red-400 border-red-500">
                              {service}
                            </Badge>
                          ))}
                          {post.services.length > 3 && (
                            <Badge variant="outline" className="text-xs text-red-400 border-red-500">
                              +{post.services.length - 3} more
                            </Badge>
                          )}
                        </div>
                        
                         
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-900 via-red-800 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Car?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact GMS Car Modifiers today for premium car customization services across Bangalore and Karnataka.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300"
            >
              <Link to="/contact">Get Quote Now</Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer />
     
    </div>
  );
};

export default BlogPage;
