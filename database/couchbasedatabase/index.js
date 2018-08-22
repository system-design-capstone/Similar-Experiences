const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost');
cluster.authenticate('Administrator', '123456');
const bucket = cluster.openBucket('simexp');

// bucket.on('error', console.error.bind(console, 'connection error: '));
// bucket.once('open', () => console.log('CONNECTED YAY'))
module.exports = { bucket };