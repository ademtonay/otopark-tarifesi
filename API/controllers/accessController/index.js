const accessController = (req, res, next) => {
  const { API_KEY } = process.env;
  const { key } = req.query;

  if (API_KEY !== key) {
    res.status(403).json({
      success: false,
      message: "Forbidden request"
    });
  }
  next();
};

module.exports = {
  accessController
};
