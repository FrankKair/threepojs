#!/usr/bin/env node
const fs = require('fs');
const xlsxToJson = require('xlsx-to-json');

const filePath = process.argv[2];

if (!filePath) {
  console.log('No input. Provide the path to a XLSX file.');
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

  const strings = JSON.stringify(stringsObject, null, 2);
  fs.writeFileSync('strings.js', `${strings}\n`);

  console.log('strings.js was generated successfully!');
});
