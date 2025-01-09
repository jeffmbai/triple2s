import { useEffect, useState } from 'react'


const useDeviceType = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Mobile detection logic remains the same
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return { isMobile }
 
}

export default useDeviceType