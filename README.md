# express-smartquotes

Express middleware to empower smart people to use smart quotes. This is an extension of
<a href="http://smartquotesjs.com">smartquotesjs</a> for those of us that want an easy
server-side version.

#### Installation

`express-smartquotes` is available in npm.

```
npm install express-smartquotes
```

#### Usage

Just add the smartquotes middleware to your stack like any other express middleware.

```javascript

const express = require('express');
const smartquotes = require('express-smartquotes');

const app = express();

app.use(smartquotes);

```

The middleware will automatically alter any responses with a content type of
HTML or plain text. Since this is currently an early release, there's no support
for other content types such as JSON.

#### Contributing

If you find bugs or additions to the code, the best way to contribute is to fork this repo, make the changes (without updating version numbers), and make a pull request back to this repo to be merged in.

If the bug pertains to an issue with incorrect parsing of the quotes, please direct those bugs to
<a href="http://github.com/kellym/smartquotesjs/issues">smartquotesjs issues</a>, as this repo
pertains to its implementation in express.

Otherwise, the repository has Travis-CI running, but be sure to add any necessary tests and run `npm test` before opening a PR.
