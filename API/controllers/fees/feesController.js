const getFees = (req, res, next) => {
  const {
    PARK_FEE_HOURS_0_1,
    PARK_FEE_HOURS_1_3,
    PARK_FEE_HOURS_3_5,
    PARK_FEE_HOURS_FULL
  } = process.env;

  res.status(200).json({
    success: true,
    data: {
      hours_0_1: PARK_FEE_HOURS_0_1,
      hours_1_3: PARK_FEE_HOURS_1_3,
      hours_3_5: PARK_FEE_HOURS_3_5,
      fullDay: PARK_FEE_HOURS_FULL
    }
  });
};

module.exports = {
  getFees
};
