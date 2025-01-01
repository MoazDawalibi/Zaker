export const detectDeviceType = () => {
    const ua = navigator.userAgent;
  
    // Check if it's an iOS device
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
  
    if (/android/i.test(ua)) {
      return 'android';
    } else if (isIOS) {
      return 'ios';
    } else {
      return 'desktop';
    }
  };
  

