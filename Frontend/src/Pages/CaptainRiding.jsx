import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FinishRide } from "../components/FinishRide";
import gsap from "gsap";

function CaptainRiding() {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRef = useRef(null);

  useEffect(() => {
    if (finishRidePanel) {
      gsap.to(finishRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(finishRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen flex relative flex-col">
      <div className="fixed left-0 flex w-full items-center justify-between px-6 z-10">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to="/captain-home"
          className="px-2 inline-block py-3 mt-6 bg-black rounded-full shadow-lg"
        >
          <i className="ri-logout-box-r-line px-2 py-2 text-white text-xl"></i>
        </Link>
      </div>

      <div className="h-[75%] relative">
        <img
          className="h-full w-full object-cover rounded-b-3xl"
          src="https://www.cnet.com/a/img/resize/17aa07cdfd65afdad5fe8513fc6649490b670788/hub/2018/08/30/290ae0f3-d8e8-4ccc-9fe7-0935ed9bdf00/google-maps-ogi.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt="Map View"
        />
      </div>
      <div className="h-[25%] bg-yellow-400">
        <div
          onClick={() => {
            setFinishRidePanel(true);
          }}
          className="w-full flex items-center justify-center text-2xl sm:text-4xl text-gray-500 cursor-pointer hover:text-gray-700 transition"
        >
          <i className="ri-arrow-up-wide-line"></i>{" "}
        </div>
        <div className="flex items-center justify-around">
          {" "}
          <h4 className="text-xl font-semibold">4KM Away</h4>
          <button
            onClick={() => {
              setFinishRidePanel(true);
            }}
            className="bg-green-600 text-white rounded-lg py-2 sm:py-3 px-4 sm:px-5 tracking-wider font-semibold text-sm sm:text-lg"
          >
            Complete Ride
          </button>
        </div>
      </div>
      <div
        ref={finishRef}
        className="fixed translate-y-full bg-white z-10 w-full bottom-0 py-8 px-3 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
}

export default CaptainRiding;
