const router = require('express').Router();

router.use((req, res, next) => {
  const err = new Error('API route not found');
  res.status(404);
  next(err);
});

module.exports = router;
