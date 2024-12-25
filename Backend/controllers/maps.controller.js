const mapService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;

  if (!address) {
    return res.status(400).json({ message: "Address is required" });
  }

  try {
    const coordinates = await mapService.getAddressCoordinate(address);

    if (coordinates) {
      res.status(200).json({ success: true, data: coordinates });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Coordinates not found" });
    }
  } catch (error) {
    console.error("Error in controller:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching coordinates",
    });
  }
};

module.exports.getDistanceTime = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;

    const distanceTime = await mapService.getDistanceTime(origin, destination);

    res.status(200).json(distanceTime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
  try {
    // Validate the input query
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input } = req.query;

    // Call the service to get autocomplete suggestions
    const suggestions = await mapService.getAutoCompleteSuggestions(input);

    // Return the suggestions in the response
    res.status(200).json(suggestions);
  } catch (err) {
    console.error(err);
    // Handle errors (could be validation, service errors, or internal server errors)
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};
