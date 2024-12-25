function ConfirmRide({
  setConfirmRidePanel,
  setVehicleFound,
  createRide,
  pickup,
  destination,
  vehicleType,
  fare,
}) {
  return (
    <div className="p-4 sm:p-6 rounded-lg mx-auto h-full max-w-screen-lg">
      {/* Close Button */}
      <div
        onClick={() => {
          setConfirmRidePanel(false);
        }}
        className="w-full flex items-center justify-center text-2xl sm:text-4xl text-gray-500 cursor-pointer hover:text-gray-700 transition"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </div>

      {/* Header */}
      <h3 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mt-4 mb-6">
        Confirm Your Ride
      </h3>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
        {/* Image Section */}
        <div className="image flex-1 flex justify-center">
          <img
            className="w-64 h-40 sm:w-80 sm:h-52 lg:w-96 lg:h-60 object-cover object-center rounded-lg"
            src="/1.png"
            alt="Vehicle"
          />
        </div>

        {/* Details Section */}
        <div className="details flex-1 w-full bg-white rounded-lg p-4 sm:p-6">
          {/* Pickup */}
          <div className="flex items-start mb-4">
            <i className="ri-map-pin-2-line text-green-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Pickup Location
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">{pickup}</p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex items-start mb-4">
            <i className="ri-map-pin-2-line text-red-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Destination
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">{destination}</p>
            </div>
          </div>

          {/* Estimated Time */}
          {/* <div className="flex items-start mb-4">
            <i className="ri-timer-line text-blue-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Estimated Time
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">12 minutes</p>
            </div>
          </div> */}

          {/* Fare */}
          <div className="flex items-start">
            <i className="ri-money-dollar-circle-line text-yellow-500 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Fare
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Rs {fare[vehicleType]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={() => {
          setVehicleFound(true);
          setConfirmRidePanel(false);
          createRide();
        }}
        className="w-full mt-6 bg-green-600 text-white rounded-lg py-2 sm:py-3 px-4 sm:px-5 tracking-wider font-semibold text-sm sm:text-lg hover:bg-green-700 transition"
      >
        Confirm Ride
      </button>
    </div>
  );
}

export default ConfirmRide;
