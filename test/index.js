var test = require('tap').test;
var middleware = require('../');
var request = require('supertest');
var express = require('express');

var app = express();

app.use(middleware);

test('plain text', (t) => {
  app.get('/text', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('"Hello, world!"');
  });
  request(app)
    .get('/text')
    .end((err, res) => {
      t.equal(res.text, '\u201cHello, world!\u201d');
      t.end();
    });
});

test('basic html', (t) => {
  app.get('/html', (req, res) => {
    res.send('"Hello, world!"');
  });
  request(app)
    .get('/html')
    .end((err, res) => {
      t.match(res.text, '\u201cHello, world!\u201d');
      t.end();
    });
});

test('invalid html', (t) => {
  app.get('/invalid-html', (req, res) => {
    res.send('<html><body><h1>"Foo <span>bar</span>"<p>\'baz\'</body></html>');
  });
  request(app)
    .get('/invalid-html')
    .end((err, res) => {
      t.match(res.text, '\u201cFoo <span>bar</span>\u201d');
      t.match(res.text, '\u2018baz\u2019');
      t.end();
    });
});
