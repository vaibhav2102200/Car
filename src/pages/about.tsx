import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {WordReveal} from "@/components/ui/WordReveal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const stats = [
  { number: "5000+", suffix: "", label: "Cars Modified" },
  { number: "10+", suffix: " yrs", label: "Experience" },
  { number: "100%", suffix: "", label: "Customer Satisfaction" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/v2.mp4"
            
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 ">
          <WordReveal
            text="About GMS Car Modifiers"
            delay={0.2}
            className="text-3xl md:text-6xl font-bold mb-4 leading-tight text-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Passion, style & performance in every project
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">
              Transforming Ordinary Cars Into Extraordinary Machines
            </h2>
            <p className="text-muted-foreground mb-6">
              At GMS Car Modifiers, we transform ordinary cars into extraordinary machines. We specialize in car
              modification across Bangalore, KR Puram, Whitefield, Mahadevapura, and Marathahalli.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of skilled professionals brings years of experience in automotive customization, ensuring
              every modification meets the highest standards of quality and craftsmanship.
            </p>
            <p className="text-muted-foreground">
              From premium audio systems to custom interiors, lighting upgrades to performance enhancements, we offer
              comprehensive solutions for car enthusiasts who demand excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                      >
                        {stat.number}
                        {stat.suffix}
                      </motion.span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-card px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="group transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:border-red-500 rounded-lg border border-border p-4">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                   To be the most trusted car modification brand in Karnataka, setting new standards in automotive
  customization and customer satisfaction. We aim to redefine style, comfort, performance.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="group transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:border-red-500 rounded-lg border border-border p-4">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Provide world-class services blending style, safety, and performance, while building lasting
                  relationships with our customers through exceptional craftsmanship.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">Visit Our Workshop</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Bangalore, our state-of-the-art workshop is equipped with the latest tools and technology to bring your car modification dreams to life.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-8 border border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  434, Old Madras Rd, Corporation Colony,<br />
                  Bangalore Corporation Industrial Estate,<br />
                  Dooravani Nagar, Bengaluru,<br />
                  Karnataka 560016
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Phone:</strong> +91 7619360036</p>
                  <p><strong>Phone:</strong> +91 7619360037</p>
                  <p><strong>Email:</strong> gmscarmodifiers@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;