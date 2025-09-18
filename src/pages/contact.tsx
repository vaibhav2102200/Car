
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle, Sparkles, Zap, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [whatsappStatus, setWhatsappStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const whatsappNumbers = ['+917619360036', '+917619360037'];

  // Suppress WhatsApp manifest errors globally
  useEffect(() => {
    // Store original console methods
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalLog = console.log;
    
    // Create a comprehensive filter function for WhatsApp errors
    const shouldSuppress = (message: string) => {
      const lowerMessage = message.toLowerCase();
      return lowerMessage.includes('manifest.json') || 
             lowerMessage.includes('api.whatsapp.com') ||
             lowerMessage.includes('failed to load resource') ||
             lowerMessage.includes('manifest fetch from') ||
             lowerMessage.includes('whatsapp') && lowerMessage.includes('404') ||
             lowerMessage.includes('whatsapp') && lowerMessage.includes('manifest');
    };
    
    // Override console methods with more aggressive filtering
    console.error = (...args) => {
      const message = args.join(' ');
      if (shouldSuppress(message)) {
        return; // Suppress WhatsApp manifest errors
      }
      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      const message = args.join(' ');
      if (shouldSuppress(message)) {
        return; // Suppress WhatsApp manifest warnings
      }
      originalWarn.apply(console, args);
    };

    console.log = (...args) => {
      const message = args.join(' ');
      if (shouldSuppress(message)) {
        return; // Suppress WhatsApp manifest logs
      }
      originalLog.apply(console, args);
    };

    // Add global error handler for uncaught errors
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.message && shouldSuppress(event.message)) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason && shouldSuppress(event.reason.toString())) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    };

    // Add event listeners
    window.addEventListener('error', handleGlobalError, true);
    window.addEventListener('unhandledrejection', handleUnhandledRejection, true);

    // Cleanup function
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      console.log = originalLog;
      window.removeEventListener('error', handleGlobalError, true);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection, true);
    };
  }, []);



  // Enhanced WhatsApp sending function with validation and error handling
  const sendToWhatsApp = async (phoneNumber: string, message?: string) => {
    try {
      setWhatsappStatus('sending');

    const defaultMessage = `Hello GMS Car Modifiers! 👋\n\nI'm interested in your car modification services.\n\nPlease contact me for more details. Thank you!`;
    const text = message || defaultMessage;
    
    // Clean phone number - remove spaces and ensure proper format
      const cleanPhoneNumber = phoneNumber.replace(/\s/g, '').replace(/[^\d+]/g, '');
      
      // Validate phone number
      if (!cleanPhoneNumber || cleanPhoneNumber.length < 10) {
        throw new Error('Invalid phone number format');
      }
      
    const encodedText = encodeURIComponent(text);
    
    // Use the correct WhatsApp URL format
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedText}`;
    
      // Try to open WhatsApp
      const whatsappWindow = window.open(whatsappUrl, '_blank');
      
      if (whatsappWindow) {
        setWhatsappStatus('success');
        // Reset status after 3 seconds
        setTimeout(() => {
          setWhatsappStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to open WhatsApp. Please check if WhatsApp is installed.');
      }
      
    } catch (error) {
      setWhatsappStatus('error');
      
      // Reset status after 5 seconds
    setTimeout(() => {
        setWhatsappStatus('idle');
      }, 5000);
    }
  };


  const locations = [
    "Bangalore",
    "KR Puram",
    "Whitefield",
    "Mahadevapura",
    "Bellandur",
    "CV Raman Nagar",
    "Marathahalli"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 7619360036", "+91 7619360037"]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 7619360036", "+91 7619360037"],
      isWhatsApp: true
    },
    {
      icon: Mail,
      title: "Email & Business Hours",
      details: [
        "gmscarmodifiers@gmail.com",
        "Monday - Sunday: 10:00 AM - 8:00 PM"
      ]
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["434, Old Madras Rd, Corporation Colony, Bangalore Corporation Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016"],
      mapsLink: "https://maps.app.goo.gl/NnymXCSJfixoP8Yq5"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/v44.mp4"
          preload="auto"
          style={{
            minHeight: '100vh',
            minWidth: '100vw',
            width: 'auto',
            height: 'auto'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center md:hidden">
    <video
      className="rounded-lg w-[500px] h-[700px] object-cover object-center"
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline="true"
      preload="auto"
      controls={false}
      src="/videos/c1.mp4"
    />
  </div>
      
      <main className="pt-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Ready to Transform Your Ride?</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Connect</span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Get in touch with us for premium car modification services in Bangalore and surrounding areas.
                <span className="text-green-400 font-medium"> We're just a click away!</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-green-400"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">We're online and ready to help</span>
                </div>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

          {/* WhatsApp Status Display */}
          {whatsappStatus === 'success' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 mb-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <p className="text-green-400 font-medium text-lg">WhatsApp opened successfully! Your message is ready to send.</p>
              </div>
            </motion.div>
          )}

          {whatsappStatus === 'error' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 mb-8 max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <p className="text-red-400 font-medium text-lg">Failed to open WhatsApp. Please try again or contact us directly.</p>
              </div>
            </motion.div>
          )}

          {/* Quick WhatsApp Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-16 border border-gray-600/50 hover:border-green-500/50 transition-all duration-500"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 rounded-full px-4 py-2 mb-4"
              >
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Instant Contact</span>
              </motion.div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Quick WhatsApp Contact</h2>
              <p className="text-gray-300 text-lg mb-6">Click below to send us a WhatsApp message instantly!</p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <Button 
                  onClick={() => sendToWhatsApp('917619360037')}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 text-xl font-bold rounded-xl shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={whatsappStatus === 'sending'}
                >
                  {whatsappStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-6 h-6 mr-3" />
                      <span className="hidden sm:inline">Send WhatsApp Message</span>
                      <span className="sm:hidden">Send Message</span>
                    </>
                  )}
                  </Button>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
                </div>
          </motion.div>
          {/* Contact Information Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto border border-gray-600/50"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Get In Touch</span>
              </motion.div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 text-lg">Multiple ways to reach us - choose what works best for you!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 ${info.mapsLink ? 'md:col-span-3' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <info.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {info.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="transition-all duration-200"
                      >
                        {info.isWhatsApp ? (
                          <button
                            onClick={() => sendToWhatsApp(detail)}
                            className="text-green-400 hover:text-green-300 flex items-center gap-3 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-200 w-full text-left group"
                            disabled={whatsappStatus === 'sending'}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045C2.073 6.507 6.58 2 12.119 2c2.637 0 5.112 1.027 6.988 2.896A9.825 9.825 0 0122.24 12.08c-.003 5.539-4.511 10.045-10.189 10.045zm8.413-17.457A11.815 11.815 0 0012.119 0C5.452 0 .073 5.377.1 12.045c.019 2.13.561 4.21 1.608 6.045L.017 24l6.063-1.595a11.89 11.89 0 005.988 1.607h.005c6.666 0 12.045-5.377 12.073-12.043a11.86 11.86 0 00-3.477-8.44z"/>
                            </svg>
                            <span className="font-medium">{detail}</span>
                            {whatsappStatus === 'sending' && (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-400 ml-auto"></div>
                            )}
                          </button>
                        ) : (
                          <div className="text-gray-300 p-2 rounded-lg bg-gray-800/30">
                            {detail}
                          </div>
                        )}
                      </motion.div>
                    ))}
                    
                    {info.mapsLink && (
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4"
                      >
                        <button
                          onClick={() => window.open(info.mapsLink, '_blank')}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <MapPin className="w-5 h-5" />
                          <span>Open in Google Maps</span>
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

           
          </motion.div>
        </div>
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;