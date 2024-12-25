import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationPanel from "../components/LocationPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [driverPanel, setDriverPanel] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmPanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingforDriverRef = useRef(null);

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        "http://localhost:4000/maps/get-suggestions",
        {
          params: { input: e.target.value },
          withCredentials: true,
        }
      );
      setPickupSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching pickup suggestions:", error);
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        "http://localhost:4000/maps/get-suggestions",
        {
          params: { input: e.target.value },
          withCredentials: true,
        }
      );
      setDestinationSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching destination suggestions:", error);
    }
  };

  function submitHandler(e) {
    e.preventDefault();
  }

  async function findTrip() {
    setVehiclePanel(true);
    setPanelOpen(false);

    const response = await axios.get("http://localhost:4000/rides/get-fare", {
      params: { pickup, destination },
      withCredentials: true,
    });
    setFare(response.data);
  }

  async function createRide() {
    try {
      const response = await axios.post(
        "http://localhost:4000/rides/create",
        { pickup, destination, vehicleType },
        { withCredentials: true }
      );
      console.log("Ride created:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  }

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
        });
        gsap.to(panelClose.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
        });
        gsap.to(panelClose.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmPanelRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(confirmPanelRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (driverPanel) {
      gsap.to(waitingforDriverRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(waitingforDriverRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [driverPanel]);

  return (
    <div className="relative h-screen">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="w-full h-[70%]">
        <img
          className="h-full w-full object-cover"
          src="https://www.cnet.com/a/img/resize/17aa07cdfd65afdad5fe8513fc6649490b670788/hub/2018/08/30/290ae0f3-d8e8-4ccc-9fe7-0935ed9bdf00/google-maps-ogi.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt=""
        />
      </div>
      <div className="h-screen justify-end flex flex-col absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelClose}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="w-full flex items-center justify-center text-4xl text-gray-400"
          >
            <i className="ri-arrow-down-wide-fill"></i>{" "}
          </h5>
          <h4 className="text-2xl font-semibold mb-7">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex gap-3"
          >
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("pickup");
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eee] px-12 py-2 rounded-lg w-full"
              type="text"
              placeholder="Add a Pickup location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("destination");
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-12 py-2 rounded-lg w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div
          ref={panelRef}
          className="bg-white 
        opacity-0 h-0 w-full px-5"
        >
          <button
            onClick={findTrip}
            className="bg-black text-white py-2 rounded-lg w-full"
          >
            Find Trip
          </button>
          {panelOpen && (
            <LocationPanel
              suggestions={
                activeField === "pickup"
                  ? pickupSuggestions
                  : destinationSuggestions
              }
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
              setPickup={setPickup}
              setDestination={setDestination}
              activeField={activeField}
            />
          )}
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed bg-white z-10 w-full
       bottom-0 translate-y-full py-8 px-3 pt-12"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
          fare={fare}
          selectVehicle={setVehicleType}
        />
      </div>
      <div
        ref={confirmPanelRef}
        className="fixed bg-white z-10 w-full
       bottom-0 translate-y-full py-8 px-3 pt-12"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
          setVehiclePanel={setVehiclePanel}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed bg-white z-10 w-full
       bottom-0 translate-y-full py-8 px-3 pt-12"
      >
        <LookingForDriver
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={waitingforDriverRef}
        className="fixed bg-white z-10 w-full
       bottom-0 py-8 px-3 pt-12"
      >
        <WaitForDriver setDriverPanel={setDriverPanel} />
      </div>
    </div>
  );
}

export default Home;
