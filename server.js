var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("<h1>Chào tất cả các bạn đến với api jobIt!</h1>");
}
)
require("./routes/Tag")(app);
require("./routes/Company")(app);
require("./routes/Work")(app);
require("./routes/User")(app);
require("./routes/Role")(app);
require("./routes/Contact")(app);
require("./routes/TypeOfWork")(app);
require("./routes/New")(app);
require("./routes/SocialNetwork")(app);
require("./routes/Candidate")(app);
require("./routes/Recruiment")(app);
require("./routes/TagNew")(app);

app.use(function (err, req, res, next) {
    res.status(500).send(err)
})


app.listen(process.env.PORT || 666, () => { console.log("Chào mừng bạn đến với Backend"); })