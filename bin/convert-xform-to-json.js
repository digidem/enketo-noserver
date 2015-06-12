#!/usr/bin/env node
var infile = process.argv[2]
var outfile = process.argv[3] || infile.replace(/\.xml$/, '.json')

var fs = require('fs')
var xml2js = require('xml2js')

var options = {
  async: false,
  explicitChildren: true,
  preserveChildrenOrder: true,
  explicitAttrs: true
}

var parser = new xml2js.Parser(options)

var xform = fs.readFileSync(infile, 'utf8')

parser.parseString(xform, function (err, result) {
  if (err) console.log(err)
  fs.writeFileSync(outfile, JSON.stringify(result, null, '  '))
})
