import { Link } from "react-router-dom";
import { useState } from "react";

function ConfirmRidePopUp({ setConfirmRidePopUpPanel, setRidePopUpPanel }) {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full w-full flex flex-col">
      <h3
        onClick={() => {
          setConfirmRidePopUpPanel(false);
          setRidePopUpPanel(false);
        }}
        className="w-full flex items-center justify-center text-2xl sm:text-4xl text-gray-500 cursor-pointer hover:text-gray-700 transition"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h3>
      <h3 className="text-xl sm:text-3xl font-bold text-gray-800 text-start">
        Confirm Ride
      </h3>

      <div className="w-full flex items-center justify-between bg-yellow-400 px-4 py-1 mt-2 rounded-lg">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 object-cover object-center rounded-full"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt="Profile Picture"
          />
          <h2 className="text-xl sm:text-xl font-semibold">Yasirmalik</h2>
        </div>
        <h5 className="text-sm sm:text-base font-medium">2.2 KM</h5>
      </div>

      <div className="flex flex-col  lg:flex-row items-center lg:items-start gap-2 lg:gap-6">
        <div className="image flex-1 flex justify-center">
          <img
            className="w-56 h-40 sm:w-56 sm:h-56 lg:w-56 lg:h-60 object-cover object-center rounded-lg"
            src="/1.png"
            alt="Vehicle"
          />
        </div>

        <div className="details flex-1 p-8 w-full rounded-lg">
          <div className="flex items-start mb-4">
            <i className="ri-map-pin-2-line text-green-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                562/11/a
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos, sint!
              </p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <i className="ri-timer-line text-blue-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Estimated Time
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">12 minutes</p>
            </div>
          </div>

          <div className="flex items-start">
            <i className="ri-money-dollar-circle-line text-yellow-500 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Fare
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">$25.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler(e);
          }}
        >
          <input
            className="bg-[#eee] px-12 py-3 rounded-lg w-full mb-4"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Link
            to="/confirm-riding"
            className="w-full flex items-center justify-center bg-green-600 text-white rounded-lg py-2 sm:py-3 px-4 sm:px-5 tracking-wider font-semibold text-sm sm:text-lg mb-3"
          >
            Confirm
          </Link>
          <button
            onClick={() => {
              setConfirmRidePopUpPanel(false);
              setRidePopUpPanel(false);
            }}
            className="w-full bg-red-600 text-white rounded-lg py-2 sm:py-3 px-4 sm:px-5 tracking-wider font-semibold text-sm sm:text-lg"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmRidePopUp;
