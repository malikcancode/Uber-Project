const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password, vehicle } = req.body;
  const isCaptainExists = await captainModel.findOne({ email });

  if (isCaptainExists) {
    return res.status(400).json({
      message: "Captain already exists",
    });
  }

  const hashPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateToken();
  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
    })
    .json({
      captain,
      token,
    });
};

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const token = captain.generateToken();
  res.cookie("token", token);

  res.status(200).json({
    token,
    captain,
  });
};

module.exports.captainProfile = (req, res) => {
  if (!req.captain) {
    return res.status(404).json({ message: "Captain not found" });
  }

  res.status(200).json({
    success: true,
    message: "Captain profile fetched successfully",
    user: req.captain,
  });
};

module.exports.logoutCaptain = async (req, res, next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged Out Successfully!",
    });
};
