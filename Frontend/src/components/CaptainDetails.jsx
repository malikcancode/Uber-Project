import { useContext } from "react";
import { CaptainContext } from "../context/CaptainContext";

function CaptainDetails() {
  const { captain } = useContext(CaptainContext);
  console.log("captain details:", captain);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_JP3p8M52qy4TQGX6-OEwiikpxjc-hiJIA&s"
            alt="Driver"
            className="w-16 h-16 rounded-full border-2 border-white object-cover object-center"
          />{" "}
          <h4 className="text-lg font-medium">Driver Name</h4>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="text-md font-medium text-gray-600">Earned</p>
          <h4 className="text-xl font-semibold">296.2RS</h4>
        </div>
      </div>
      <div className="flex justify-center gap-28 items-start">
        <div className="text-center">
          <i className="text-2xl font-extralight ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className=" text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-extralight ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className=" text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-extralight ri-book-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className=" text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </>
  );
}

export default CaptainDetails;
