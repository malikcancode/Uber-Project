const jwt = require("jsonwebtoken");
const captainModel = require("../models/captain.model");
const userModel = require("../models/user.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized due to token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_CAPTAIN_SECRET);

    const captain = await captainModel.findById(decoded.id);

    if (!captain) {
      return res.status(404).json({ message: "User not found" });
    }

    req.captain = captain;
    return next();
  } catch (error) {
    console.error("Error during authCaptain:", error);
    return res.status(401).json({ message: "Unauthorized Captain 404" });
  }
};
