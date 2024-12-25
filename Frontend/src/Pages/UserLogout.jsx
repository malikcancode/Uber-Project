import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/logout", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default UserLogout;
