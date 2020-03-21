#!/usr/bin/env node

const express = require('express');
const ip = require('ip');

const args = process.argv.slice(2);

if(args.length == 0) {
    console.log('NSP file name required.');
    console.log('Usage: serve-nsp some.nsp [port number]');
    process.exit();
}

const port = args[1] || 3000;

const app = express();
app.get('/', (req, res) => {
    res.sendFile('./' + args[0], { root: process.cwd() });
});

app.listen(port, () => console.log(`Serving ${args[0]} on ${ip.address()}/${port}!`));