import { useEffect, useRef } from 'react';

interface VideoDebuggerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  videoSrc: string;
}

const VideoDebugger = ({ videoRef, videoSrc }: VideoDebuggerProps) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      // Video load started
    };

    const handleLoadedData = () => {
      // Video data loaded
    };

    const handleCanPlay = () => {
      // Video can play
    };

    const handlePlay = () => {
      // Video started playing
    };

    const handlePause = () => {
      // Video paused
    };

    const handleError = (e: Event) => {
      // Video error occurred
    };

    // Add event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

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
