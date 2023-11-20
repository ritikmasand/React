import React from "react";
import { useState } from "react";
function ToggleComp() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h1> {darkMode ? "dark-mode" : "light-mode"} </h1>
      <button onClick={toggleMode}>Toggle Button</button>
    </div>
  );
}

export default ToggleComp;
// sre : site reliability  engineers (cloud based softwares)
// cloud engineers 
// on-call 
// amazon : 
// software - testing

// instructor  : 1200 / 20000 per hour 

// masai school : 20 lpa 
// scaler 
// byjus
// pw
// newton school
// coding ninjas : tech support ( handle  )
// alma better : 5500 - 1.5 
// Ta : teaching assistant : 500 - 900 per hours 