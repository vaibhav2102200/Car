import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    carModel: '',
    message: ''
  });

  const whatsappNumbers = ['+917619360036', '+917619360037'];

  // Function to send message to WhatsApp
  const sendToWhatsApp = (phoneNumber: string) => {
    const message = "Hello GMS Car Modifiers! I'm interested in your car modification services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    
    // Create WhatsApp message with form data
    const { firstName, lastName, email, phone, carModel, message } = formData;
    
    // Create a shorter, simpler message
    let text = `Hello GMS Car Modifiers!\n\n`;
    text += `I need car modification services.\n\n`;
    
    if (firstName || lastName) {
      text += `Name: ${firstName} ${lastName}\n`;
    }
    if (phone) {
      text += `Phone: ${phone}\n`;
    }
    if (email) {
      text += `Email: ${email}\n`;
    }
    if (carModel) {
      text += `Car: ${carModel}\n`;
    }
    if (message) {
      text += `Details: ${message}\n`;
    }
    
    text += `\nPlease contact me. Thanks!`;
    
    // Create WhatsApp URL with shorter message
    const whatsappUrl = `https://wa.me/+917619360036?text=${encodeURIComponent(text)}`;
    
    console.log('WhatsApp URL:', whatsappUrl);
    console.log('Message to send:', text);
    
    // Try alternative WhatsApp URL format
    const alternativeUrl = `https://api.whatsapp.com/send?phone=+917619360036&text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp with fallback
    try {
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.log('Trying alternative URL:', alternativeUrl);
      window.open(alternativeUrl, '_blank');
    }
    
    // Clear form after successful submission
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        carModel: '',
        message: ''
      });
    }, 1000);
  };

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
      title: "Email",
      details: ["gmscarmodifiers@gmail.com"]
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["434, Old Madras Rd, Corporation Colony, Bangalore Corporation Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016"],
      mapsLink: "https://maps.app.goo.gl/NnymXCSJfixoP8Yq5"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Sunday: 10:00 AM - 8:00 PM",
      ]
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
          src="/v44.mp4"
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
      
      <main className="pt-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight animate-fade-in text-white">
                Contact Us
              </h1>
              <p className="text-lg text-gray-200 mb-8 animate-fade-in">
                Get in touch with us for premium car modification services in Bangalore and surrounding areas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name" 
                  />
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name" 
                  />
                </div>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                />
                <Input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number" 
                />
                <Input 
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  placeholder="Car Make & Model (Optional)" 
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements" 
                  rows={5} 
                />
                <div className="space-y-3">
                  <Button type="submit" className="w-full animate-fade-in bg-green-600 hover:bg-green-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send WhatsApp Message
                  </Button>
                  
                
                  
                  
                  <p className="text-sm text-gray-300 text-center">
                    Click the button to open WhatsApp with your message pre-filled
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <info.icon className="w-6 h-6 text-accent" />
                    <h2 className="text-2xl font-light text-white">
                      {info.title}
                    </h2>
                  </div>
                  <div className="space-y-2 pl-9">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-200">
                        {info.isWhatsApp ? (
                          <button
                            onClick={() => sendToWhatsApp(detail.replace(/\D/g, ''))}
                            className="text-green-400 hover:text-green-300 underline cursor-pointer transition-colors flex items-center gap-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              className="w-4 h-4"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045C2.073 6.507 6.58 2 12.119 2c2.637 0 5.112 1.027 6.988 2.896A9.825 9.825 0 0122.24 12.08c-.003 5.539-4.511 10.045-10.189 10.045zm8.413-17.457A11.815 11.815 0 0012.119 0C5.452 0 .073 5.377.1 12.045c.019 2.13.561 4.21 1.608 6.045L.017 24l6.063-1.595a11.89 11.89 0 005.988 1.607h.005c6.666 0 12.045-5.377 12.073-12.043a11.86 11.86 0 00-3.477-8.44z"/>
                            </svg>
                            {detail} 
                          </button>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                    {info.mapsLink && (
                      <div className="mt-3">
                        <Button
                          onClick={() => window.open(info.mapsLink, '_blank')}
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          View on Google Maps
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;