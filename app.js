// const fs = require('fs')
// const colors = require('colors')
const actionType = require('./actionType')

const type = process.argv[2];
const title = process.argv[3];


actionType(type,title);
