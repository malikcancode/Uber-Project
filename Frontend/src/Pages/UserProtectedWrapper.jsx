import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/UserContext";
import axios from "axios";

function UserProtectedWrapper({ children }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    axios
      .get("http://localhost:4000/users/profile", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setLoading(false);
        }
      })
      .catch((err) => {
        navigate("/login");
      });
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default UserProtectedWrapper;
