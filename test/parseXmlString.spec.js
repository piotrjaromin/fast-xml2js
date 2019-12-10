'use strict';

const { expect, assert: { fail } } = require('chai');
const { readFileSync } = require('fs');

const { parseXmlString } = require('../index');

const simpleXml = readFileSync('./test/fixtures/simple.xml', 'utf-8').toString();

describe('parseXml should', () => {

    it('correctly parse xml', async () => {
        const data = await parseXmlString(simpleXml);
        expect(data).to.eql({
            data: {
                '$': {
                    type: 'some-random-type'
                },
                description: ['Root description'],
                entry: [
                    {
                        name: [ 'First entry'],
                        description: ['Entry description']
                    },
                    {
                        name: [ 'Second entry' ],
                        description: [ 'second entry description' ]
                    }
                ]
            }
        })
    })

    it('return error when it got invalid xml', async () => {
        try {
            await parseXmlString('<xcz>dsaf');
        } catch (err) {
            expect(err).to.exist;
            expect(err).to.be.instanceOf(Error);
            return;
        }

        fail('Test should end in catch');
    })

    it('return error when xml is empty string', async () => {
        try {
            await parseXmlString('')
        } catch (err) {
            expect(err).to.exist;
            expect(err).to.be.instanceOf(Error);
            expect(err.message).to.eq('Empty string is not valid XML');
            return;
        }

        fail('Test should end in catch');
    })
})