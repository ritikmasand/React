import { useState, useEffect } from "react";

const useInernetStatus = () => {
  const [status, setStatus] = useState(true);

  const internetOn = () => {
    setStatus(true);
  };

  const internetOff = () => {
    setStatus(false);
  };

  useEffect(() => {
    window.addEventListener("online", internetOn);
    window.addEventListener("offline", internetOff);

    return () => {
      window.removeEventListener("online", internetOn);
      window.removeEventListener("offline", internetOff);
    };
  }, []);
  return status;
};

export default useInernetStatus

// cinemagics  ✅
// cinepedia   ✅
// cinehub    
// cinemtatics 🙅‍♀️ 
// movie mania
