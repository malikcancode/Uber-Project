import { useState } from "react";
import { CaptainContext } from "./CaptainContext";

function CaptainContextProvider({ children }) {
  const [captain, setCaptain] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log("captain from context", captain);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  return (
    <CaptainContext.Provider
      value={{
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
      }}
    >
      {children}
    </CaptainContext.Provider>
  );
}

export default CaptainContextProvider;
