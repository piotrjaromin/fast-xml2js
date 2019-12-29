# fast-xml2js

***This is fork of: https://github.com/cmrigney/fast-xml2js***

In-place replacement for xml2js parseString. This is about 20x-30x faster and makes use of the rapidxml C++ library.

### Install

Run ```npm install @pjaromin/fast-xml2js```

### Using

#### parseString

```js
const { parseString } = require('@pjaromin/fast-xml2js');
parseString('<some_xml>', function(err, result) {
    console.log(result);
});
```

#### parseXmlString

```js
const { parseXmlString } = require('@pjaromin/fast-xml2js');
parseXmlString('<some_xml>').then(result => console.log(obj));
```

Errors returned by this function are `Error` instances.

### Changelog

Change log can be found [here](CHANGELOG.md)
Errors returned by this function are `string` instances.
