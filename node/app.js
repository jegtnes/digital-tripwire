// var express = require('express'),
//     bodyParser = require('body-parser'),
//     app = express(),
//     port = 4567;
//
// var mongoose =     require('mongoose');
// var Schema = mongoose.Schema;
//
// mongoose.connect('mongodb://localhost/door');
//
// var Door = mongoose.model('Door', new Schema({
//   events: [{
//     state: String,
//     timestamp: { type: Date }
//   }]
// }));
//
// app.use(bodyParser.json());
//
// app.get('/', function(req, res) {
//   Door.find(function(err, doors) {
//     if (err) {
//       return res.status(500).send(err);
//     }
//
//     res.json(doors)
//   });
// });
//
// app.post('/', function (req, res) {
//     var body = req.body;
//     console.log('!!!!!')
//     console.log(req.headers);
//     console.log('!!!!!')
//
//     // var door = new Door;
//
//     res.json({
//         message: 'ok got it!'
//     });
// });
//
// var server = app.listen(port, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log('Example app listening at http://%s:%s', host, port)
//
// });

var fs = require('fs');
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 4567;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.json({message: 'sup'})
});

app.post('/', function (req, res) {

    var headers = req.headers;

    fs.appendFileSync(__dirname + 'youwhat.txt', headers.value + ' at ' + headers.time + '\n');

    res.json({
        message: 'ok got it!'
    });
});

var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});
