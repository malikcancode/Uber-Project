import { Link } from "react-router-dom";

function Riding() {
  return (
    <div className="h-screen flex flex-col">
      <Link
        to="/home"
        className="fixed top-4 left-4 h-12 w-12 bg-black rounded-full flex items-center justify-center shadow-lg z-10"
      >
        <i className="ri-home-4-line text-white text-xl"></i>
      </Link>

      <div className="h-1/2 relative">
        <img
          className="h-full w-full object-cover rounded-b-3xl"
          src="https://www.cnet.com/a/img/resize/17aa07cdfd65afdad5fe8513fc6649490b670788/hub/2018/08/30/290ae0f3-d8e8-4ccc-9fe7-0935ed9bdf00/google-maps-ogi.jpg?auto=webp&fit=crop&height=675&width=1200"
          alt="Map View"
        />
      </div>

      <div className="h-1/2 flex flex-col justify-between p-6 bg-gray-50 rounded-t-3xl shadow-2xl">
        <div className="flex items-center bg-white rounded-lg p-4 shadow-md">
          <img
            src="https://via.placeholder.com/50"
            alt="Driver"
            className="w-16 h-16 rounded-full border-2 border-gray-200 mr-4"
          />

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
              John Doe
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              Vehicle: Toyota Corolla
            </p>
            <p className="text-sm text-gray-600">Number Plate: ABC-1234</p>
          </div>
        </div>

        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 px-6 rounded-lg ">
          Make A Payment
        </button>
      </div>
    </div>
  );
}

export default Riding;
