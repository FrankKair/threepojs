#!/usr/bin/env node
const fs = require('fs');
const Promise = require('bluebird');
const exec = require('child_process').exec;
const jsStringify = require('javascript-stringify');

function promiseFrom(child) {
  return new Promise(function(resolve, reject) {
    child.addListener("exit", resolve);
    child.addListener("error", reject);
  });
}

const path_to_file = process.argv.slice(2, process.argv.length);
const childProcess = exec(`ruby xlsxtojson.rb ${path_to_file}`);

promiseFrom(childProcess).then(function(result) {
  const data = fs.readFileSync('strings.json', 'utf8')
  const jsObject = jsStringify(JSON.parse(data), null, 2);
  fs.writeFile("strings.js", jsObject, function(error) {
    if (error) {
      return console.log(error);
    }
    console.log("strings.js was generated successfully!");
    fs.unlinkSync('strings.json');
  });
}, function (error) {
    console.log(`Promise rejected: ${error}`);
});