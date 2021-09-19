const getVehicleTypes = (req, res, next) => {
  const {
    VEHICLE_TYPE_MOTORCYCLE,
    VEHICLE_TYPE_CAR,
    VEHICLE_TYPE_VAN,
    VEHICLE_TYPE_TRUCK
  } = process.env;

  res.status(200).json({
    success: true,
    data: {
      motorcycle: VEHICLE_TYPE_MOTORCYCLE,
      car: VEHICLE_TYPE_CAR,
      van: VEHICLE_TYPE_VAN,
      truck: VEHICLE_TYPE_TRUCK
    }
  });
};

module.exports = {
  getVehicleTypes
};
