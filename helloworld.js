
const urlParse = require('./urlParsing.js')

const politeConsole = require("./politeConsole");

politeConsole.politeConsole.log("Hello, World");

var addr = 'http://localhost:8080/index.php?type=page&action=update&id=5221'

urlParse.urlParser(addr);


module.exports = addr;