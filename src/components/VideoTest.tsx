import { useState, useEffect } from 'react';

const VideoTest = () => {
  const [testResults, setTestResults] = useState<string[]>([]);

  useEffect(() => {
    const runTests = async () => {
      const results: string[] = [];
      
      // Test 1: Check if we're on iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      results.push(`iOS Device: ${isIOS}`);
      
      // Test 2: Check video format support
      const video = document.createElement('video');
      const mp4Support = video.canPlayType('video/mp4');
      results.push(`MP4 Support: ${mp4Support}`);
      
      // Test 3: Check video file accessibility
      const testVideoSrc = '/home.mp4';
      try {
        const response = await fetch(testVideoSrc, { method: 'HEAD' });
        results.push(`Video file accessible: ${response.ok} (Status: ${response.status})`);
      } catch (error) {
        results.push(`Video file accessible: false (Error: ${error})`);
      }
      
      // Test 4: Check HTTPS
      results.push(`HTTPS: ${location.protocol === 'https:'}`);
      
      // Test 5: Check user agent
      results.push(`User Agent: ${navigator.userAgent}`);
      
      setTestResults(results);
    };
    
    runTests();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">Video Debug Info:</h3>
      {testResults.map((result, index) => (
        <div key={index} className="mb-1">{result}</div>
      ))}
    </div>
  );
};

export default VideoTest;
