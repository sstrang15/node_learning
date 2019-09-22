var url = require('url');
const address = require('./helloworld.js');


const urlParser = (address) => {

    var q = url.parse(address, true);
    const host = q.host;
    const port = q.port;
    const pathname = q.pathname;
    // everything after ?
    var qdata = q.query;
    console.log(qdata);
    console.log(typeof(qdata));
}


module.exports = {
    urlParser
}
