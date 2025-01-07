const router = require("express").Router();

router.route("/", (_req, res) => {
  res.status(200).json({
    message: "server is running",
  });
});

router.route("/health", (req, res) => {
  res.status(200).json({
    message: "server health is good",
  });
});

module.exports = router;
