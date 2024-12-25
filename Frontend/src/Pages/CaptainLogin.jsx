import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/captains/login",
        captain,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        setCaptain(data.captain);
        console.log("Captain Data from API Response:", data);

        navigate("/captain-home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 md:p-10 h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            className="w-24"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            alt="Captain logo"
          />
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="space-y-4"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2 capitalize">
              Whats your email
            </h3>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 capitalize">
              Enter Password
            </h3>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="Password"
            />
          </div>

          <button className="bg-[#111] text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-black transition duration-300">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          <Link
            to="/captain-signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Register as a Captain
          </Link>
        </p>
      </div>

      <div className="mt-6 w-full max-w-sm">
        <Link
          to="/login"
          className="bg-[#25a244] flex items-center justify-center text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
