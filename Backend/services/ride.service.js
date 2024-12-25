const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const distanceInKm = parseFloat(
    distanceTime.distance.replace(/[^\d.-]/g, "")
  );
  const durationInMin = parseFloat(
    distanceTime.duration.replace(/[^\d.-]/g, "")
  );

  if (isNaN(distanceInKm) || isNaN(durationInMin)) {
    throw new Error("Invalid distance or duration data from map service");
  }

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        distanceInKm * perKmRate.auto +
        durationInMin * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        distanceInKm * perKmRate.car +
        durationInMin * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        distanceInKm * perKmRate.moto +
        durationInMin * perMinuteRate.moto
    ),
  };

  return fare;
}

module.exports.getFare = getFare;

function getOtp(num) {
  function generateOtp(num) {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  }
  return generateOtp(num);
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);

  const ride = rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare[vehicleType],
  });

  return ride;
};
