var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('static'));

/*
app.post('/', function (req, res) {
    console.log(req.body);
})
*/

app.get('/loser', function (req, res) {
    console.log("I'm firing..");
    res.send("<em>hellooo</em>");
})

app.listen(app.get('port'), function() {
    console.log('Express started at port ' + app.get('port'));
});

