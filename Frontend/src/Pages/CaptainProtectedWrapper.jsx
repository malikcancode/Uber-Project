import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainProtectedWrapper({ children }) {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/captains/profile", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setLoading(false);
        }
      })
      .catch((err) => {
        navigate("/captain-login");
      });
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
}

export default CaptainProtectedWrapper;
