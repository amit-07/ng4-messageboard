var express = require('express');
var bodyParser = require('body-parser');
var app =  express();

var messages = [{text: 'some text', owner: 'Tim'},{text: 'other message', owner: 'Jane'}];


app.use(bodyParser.json());
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    next();
});

var api = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
});

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result =  messages.filter(message => message.owner == user);
    res.json(result);
});

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
});

app.use('/api', api);
app.listen(2021);