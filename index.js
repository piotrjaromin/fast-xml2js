var fastxml2js = require('./fast-xml2js/fast-xml2js.node');

/**
 * Callback after xml is parsed
 * @callback parseCallback
 * @param {string} err Error string describing an error that occurred
 * @param {object} obj Resulting parsed JS object
 */

/**
 * Parses an XML string into a JS object
 * @param  {string} xml
 * @param  {parseCallback} cb
 */
function parseString(xml, cb) {
    return fastxml2js.parseString(xml, function(err, data) {
        //So that it's asynchronous
        process.nextTick(function() {
            cb(err, data);
        });
    });
};

/**
 * Parses an XML string into a JS object
 * @param  {string} xmlString string representation of xml
 * @returns {Promise<Object>} resolved xml object
 */
function parseXmlString(xmlString) {
    return new Promise((resolve, reject) => {
        if (xmlString.length == 0) {
            return reject(new Error('Empty string is not valid XML'));
        }

        fastxml2js.parseString(xmlString, (err, data) => {
            if (err) {
               return reject(toErrorType(err));
            }

            return resolve(data);
        });
    });
}

function toErrorType(err) {
    return typeof err === 'string' ? new Error(err) : err;
}

module.exports = {
    parseXmlString,
    parseString
};

