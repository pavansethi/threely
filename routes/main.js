const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('main/home');
});

router.get('/mygigs', (req, res, next) => {
  res.render('main/my-gigs');
});

module.exports = router;
