function WaitForDriver(setDriverPanel) {
  return (
    <>
      <div className="p-4 sm:p-6 rounded-lg mx-auto h-full max-w-screen-lg">
        <div className="w-full flex items-center justify-center text-2xl sm:text-4xl text-gray-500 cursor-pointer hover:text-gray-700 transition">
          <i
            onClick={() => {
              setDriverPanel(false);
            }}
            className="ri-arrow-down-wide-fill"
          ></i>
        </div>

        <div className="flex items-center bg-gray-50 rounded-lg p-4 sm:p-6 shadow-md mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Driver"
            className="w-12 h-12 rounded-full mr-4"
          />

          <div className="flex-1">
            <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
              John Doe
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Vehicle: Toyota Corolla
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Number Plate: ABC-1234
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
          <div className="details flex-1 w-full bg-white rounded-lg p-4 sm:p-6">
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
      </div>{" "}
    </>
  );
}

export default WaitForDriver;
