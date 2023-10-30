let express = require("express"),
    router = express.Router();


router.get("/status", (request, response) => {
    const status = {
        status: "prismatic core online",
    };
    response.send(status);
});

router.get("/songs", (request, response) => {
    const status = {
        songs: "song list",
    };
    response.send(status);
});

router.get("/artists", (request, response) => {
    const status = [
        {
            name: "Pitbull",
        },
        {
            name: "Mr Worldwide",
        }
    ];
    response.send(status);
});

module.exports = router;
