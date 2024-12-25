import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

function CaptainHome() {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelPanelRef = useRef(null);

  useEffect(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [ridePopUpPanel]);

  useEffect(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelPanelRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(confirmRidePopUpPanelPanelRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [confirmRidePopUpPanel]);

  return (
    <div className="h-screen flex relative flex-col">
      <div className="fixed left-0 flex w-full items-center justify-between px-6 z-10">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <Link
          to="/home"
          className="px-2 inline-block py-3 mt-6 bg-black rounded-full shadow-lg"
        >
          <i className="ri-logout-box-r-line px-2 py-2 text-white text-xl"></i>
        </Link>
      </div>

      <div className="h-[70%] relative">
        <img
          className="h-full w-full object-cover rounded-b-3xl"
          src="https://www.cnet.com/a/img/resize/17aa07cdfd65afdad5fe8513fc6649490b670788/hub/2018/08/30/290ae0f3-d8e8-4ccc-9fe7-0935ed9bdf00/google-maps-ogi.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt="Map View"
        />
      </div>

      <div className="h-[30%] flex flex-col justify-between p-6 bg-yellow-500 rounded-t-3xl">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed translate-y-full bg-white z-10 w-full bottom-0 py-8 px-3 pt-12"
      >
        <RidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
      <div
        ref={confirmRidePopUpPanelPanelRef}
        className="fixed translate-y-full bg-white z-10 w-full bottom-0 py-8 px-3 pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
}

export default CaptainHome;
