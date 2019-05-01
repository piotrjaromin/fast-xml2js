'use strict';

const { readFileSync } = require('fs');
const Benchmark = require('benchmark');

const { parseXmlString, parseString } = require('../index');
const simpleXml = readFileSync('./test/fixtures/simple.xml', 'utf-8').toString();

const suite = new Benchmark.Suite;

suite.add('parseXmlString#simple', async () => {
    await parseXmlString(simpleXml);
})
.add('parseString#simple', async () => {
    await new Promise(resolve => parseString(simpleXml, async () => {
        resolve();
    }));
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({ 'async': true });
