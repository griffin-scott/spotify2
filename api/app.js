const express = require('express'),
    app = express();

const cors = require("cors")
    app.use(cors())

let routes = require('./routes');
app.use(express.json());
app.use('/api', routes)

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
