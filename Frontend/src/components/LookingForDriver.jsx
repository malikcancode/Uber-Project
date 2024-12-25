function LookingForDriver({
  pickup,
  destination,
  fare,
  vehicleType,
  setVehicleFoundsetVehicleFound,
}) {
  return (
    <div className="p-4 sm:p-6 rounded-lg mx-auto h-full max-w-screen-lg">
      <div className="w-full flex items-center justify-center text-2xl sm:text-4xl text-gray-500 cursor-pointer hover:text-gray-700 transition">
        <i
          onClick={() => {
            setVehicleFound(false);
          }}
          className="ri-arrow-down-wide-fill"
        ></i>
      </div>

      <h3 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mt-4 mb-6">
        Looking for driver
      </h3>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
        <div className="image flex-1 flex justify-center">
          <img
            className="w-64 h-40 sm:w-80 sm:h-52 lg:w-96 lg:h-60 object-cover object-center rounded-lg"
            src="/1.png"
            alt="Vehicle"
          />
        </div>

        <div className="details flex-1 w-full bg-white rounded-lg p-4 sm:p-6">
          <div className="flex items-start mb-4">
            <i className="ri-map-pin-2-line text-green-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                {pickup}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos, sint!
              </p>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <i className="ri-map-pin-2-line text-red-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Destination
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">{destination}</p>
            </div>
          </div>
          {/* 
          <div className="flex items-start mb-4">
            <i className="ri-timer-line text-blue-600 text-xl sm:text-2xl mr-2 sm:mr-3"></i>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                Estimated Time
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">12 minutes</p>
            </div>
          </div> */}

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
    </div>
  );
}

export default LookingForDriver;
