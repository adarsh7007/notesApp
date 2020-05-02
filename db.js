let mongoose = require('mongoose')
let db = mongoose.connection;
mongoose.connect('mongodb://abc:12345@cluster0-shard-00-00-ezags.mongodb.net:27017,cluster0-shard-00-01-ezags.mongodb.net:27017,cluster0-shard-00-02-ezags.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true});
db.on('err', console.error.bind(console, 'connection err:'));
db.once('open', function () {
    console.log('connect')
});
