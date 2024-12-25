import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <div className="bg-cover bg-[url('https://cdn.finshots.app/images/2022/07/uber-files.png')] h-screen pt-5 w-full flex-col flex justify-between bg-bottom">
        <h2 className="text-black font-bold text-2xl mx-5 tracking-wide">
          UBER
        </h2>
        <div className="bg-white py-4 pb-5 px-4 flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="w-full text-center bg-black text-white py-3 tracking-wider rounded-md font-semibold"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
