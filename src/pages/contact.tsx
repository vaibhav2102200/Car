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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const { firstName, lastName, email, phone, carModel, message } = formData;
    
    let whatsappMessage = `Hello GMS Car Modifiers! 👋\n\n`;
    whatsappMessage += `I'm interested in your car modification services.\n\n`;
    
    // Always include name fields, even if empty
    const fullName = `${firstName || ''} ${lastName || ''}`.trim();
    whatsappMessage += `*Name:* ${fullName || 'Not provided'}\n`;
    
    // Always include other fields
    whatsappMessage += `*Email:* ${email || 'Not provided'}\n`;
    whatsappMessage += `*Phone:* ${phone || 'Not provided'}\n`;
    whatsappMessage += `*Car Model:* ${carModel || 'Not specified'}\n`;
    whatsappMessage += `*Requirements:* ${message || 'No specific requirements mentioned'}\n`;
    
    whatsappMessage += `\nPlease contact me for more details. Thank you!`;
    
    console.log('Generated WhatsApp message:', whatsappMessage); // Debug log
    return encodeURIComponent(whatsappMessage);
  };

  const sendToWhatsApp = (phoneNumber: string) => {
    console.log('Form data before sending:', formData); // Debug log
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    console.log('WhatsApp URL:', whatsappUrl); // Debug log
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least some form data is provided
    const hasData = Object.values(formData).some(value => value.trim() !== '');
    
    if (!hasData) {
      alert('Please fill in at least one field before sending the message.');
      return;
    }
    
    // Send to first WhatsApp number by default
    sendToWhatsApp(whatsappNumbers[0]);
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
      title: "Email",
      details: ["gmscarmodifiers@gmail.com"]
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["434, Old Madras Rd, Corporation Colony, Bangalore Corporation Industrial Estate, Dooravani Nagar, Bengaluru, Karnataka 560016"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: By Appointment"
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
                  
                  {/* Debug button to test message generation */}
                 
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
                            onClick={() => sendToWhatsApp(detail.replace(/\s/g, ''))}
                            className="text-green-400 hover:text-green-300 underline cursor-pointer transition-colors"
                          >
                            {detail} (Click to WhatsApp)
                          </button>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map Placeholder
              <div className="mt-8 rounded-lg overflow-hidden border border-border h-[300px] bg-card flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps Integration Here</p>
              </div> */}
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
