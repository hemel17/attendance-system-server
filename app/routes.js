const authenticate = require("../middlewares/authenticate");

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

router.get("/test", authenticate, (req, res) => {
  res.json({
    message: "authenticated route",
  });
});

module.exports = router;
