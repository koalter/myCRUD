const { Router } = require('express');
const router = Router();

router.get('/', function(request, response, next) {
    // response.send('Ready to rollout!');
    response.json({"Title": "Ready to rollout!"});
});

router.get('/test', function(request, response, next) {
    const data = {
        "name": "nombre",
        "website": "example.com"
    }

    response.json(data);
});

module.exports = router;