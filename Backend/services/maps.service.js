const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address
  )}&format=json`;

  try {
    const response = await axios.get(url);

    if (response.data && response.data.length > 0) {
      const location = response.data[0];
      return {
        lat: parseFloat(location.lat),
        lon: parseFloat(location.lon),
      };
    } else {
      throw new Error("No results found");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("Query is required");
  }

  const apiKey = process.env.OPENCAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    input
  )}&key=${apiKey}&no_annotations=1`;

  try {
    const response = await axios.get(url);

    if (response.data && response.data.results) {
      // Map the results to the formatted location strings and return the suggestions
      const suggestions = response.data.results.map(
        (result) => result.formatted
      );
      return suggestions;
    } else {
      // No results found
      throw new Error("No suggestions found");
    }
  } catch (err) {
    console.error("Error fetching suggestions:", err.message);
    throw new Error("Failed to fetch suggestions");
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const geocodeAddress = async (address) => {
    const options = {
      method: "GET",
      url: "https://api.opencagedata.com/geocode/v1/json",
      params: {
        q: address,
        key: process.env.OPENCAGE_API_KEY,
      },
    };

    const response = await axios.request(options);

    if (response.data.results.length > 0) {
      const location = response.data.results[0].geometry;
      return `${location.lat},${location.lng}`;
    } else {
      throw new Error(`Geocoding failed for address: ${address}`);
    }
  };

  try {
    const originCoords = await geocodeAddress(origin);
    const destinationCoords = await geocodeAddress(destination);

    const options = {
      method: "GET",
      url: "https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix",
      params: {
        origins: originCoords,
        destinations: destinationCoords,
      },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "trueway-matrix.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);

    if (
      response.data &&
      response.data.distances &&
      response.data.distances.length > 0
    ) {
      const distanceArray = response.data.distances[0];
      const durationArray = response.data.durations[0];

      const distanceInKm = (distanceArray[0] / 1000).toFixed(2);
      const durationInMinutes = (durationArray[0] / 60).toFixed(2);

      const route = {
        distance: `${distanceInKm} km`,
        duration: `${durationInMinutes} minutes`,
      };

      return route;
    } else {
      throw new Error("No route found");
    }
  } catch (err) {
    console.error("Error fetching distance and time:", err.message);
    throw new Error("Unable to fetch distance and time");
  }
};
