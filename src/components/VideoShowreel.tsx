import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const VideoShowreel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Video Background */}
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-r from-background to-card/20">
            <video
              ref={videoRef}
              className="w-full h-full object-cover object-center"
              src="/v1.mp4"
              playsInline
              muted
              autoPlay
              loop
              
              style={{
                minHeight: '400px',
                width: 'auto',
                height: 'auto'
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Animated Title Overlay */}
            <motion.div 
              className="absolute top-0 left-0 right-0 flex flex-col items-center text-center z-10 pt-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
              
              </motion.h1>
              <motion.div 
                className="h-1 w-24 bg-white mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowreel;