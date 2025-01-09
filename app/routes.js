const router = require("express").Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    message: "server is running",
  });
});

router.get("/health", (_req, res) => {
  res.status(200).json({
    message: "server health is good",
  });
});

module.exports = router;
