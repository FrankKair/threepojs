#!/usr/bin/env node
const { writeFileSync } = require('fs');
const xlsxToJson = require('xlsx-to-json');
const jsStringify = require('javascript-stringify');

const filePath = process.argv[2];
if (!filePath) {
  console.log('No input. Provide the path to a XLSX file.');
  return;
}

const fileExtension = filePath.split('.').pop();
if (fileExtension !== 'xlsx') {
  console.log(`XLSX file expected. Received ${fileExtension}.`);
  return;
}

xlsxToJson({ input: filePath, output: null }, (err, rows) => {
  if (err) {
    console.error(err);
    return;
  }

  const stringsObject = rows.reduce((stringsPartial, row) => {
    const { key, ...values } = row;
    return { ...stringsPartial, [key]: values };
  }, {});

  const strings = jsStringify(stringsObject, null, 2);
  writeFileSync('strings.js', `${strings}\n`);

  console.log('strings.js was generated successfully!');
});
