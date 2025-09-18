import { useEffect, useRef } from 'react';

interface VideoDebuggerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  videoSrc: string;
}

const VideoDebugger = ({ videoRef, videoSrc }: VideoDebuggerProps) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const logVideoInfo = () => {
      console.log('=== VIDEO DEBUG INFO ===');
      console.log('Video src:', videoSrc);
      console.log('Video readyState:', video.readyState);
      console.log('Video networkState:', video.networkState);
      console.log('Video paused:', video.paused);
      console.log('Video muted:', video.muted);
      console.log('Video autoplay:', video.autoplay);
      console.log('Video playsInline:', video.playsInline);
      console.log('Video webkit-playsinline:', video.getAttribute('webkit-playsinline'));
      console.log('User Agent:', navigator.userAgent);
      console.log('Is iOS:', /iPad|iPhone|iPod/.test(navigator.userAgent));
      console.log('========================');
    };

    const handleLoadStart = () => {
      console.log('Video load started');
      logVideoInfo();
    };

    const handleLoadedData = () => {
      console.log('Video data loaded');
      logVideoInfo();
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      logVideoInfo();
    };

    const handlePlay = () => {
      console.log('Video started playing');
      logVideoInfo();
    };

    const handlePause = () => {
      console.log('Video paused');
      logVideoInfo();
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      logVideoInfo();
    };

    // Add event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    // Initial log
    logVideoInfo();

    // Cleanup
    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, [videoRef, videoSrc]);

  return null;
};

export default VideoDebugger;
