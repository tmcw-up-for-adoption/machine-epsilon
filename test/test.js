var lex = require('../');
var test = require('tap').test;

test('flo', function(t) {
    t.equal(lex.reinterpret(1, Float32Array, Int32Array), 1065353216);
    t.equal(lex.floatlexorder(1, 1), 1.0000001192092896);
    t.equal(lex.floatlexorder(1, -1), 0.9999999403953552);
    t.equal(lex.floatlexorder(1, -1), 0.9999999403953552);
    t.equal(lex.epsilon(1), 1.1920928955078125e-7);
    t.equal(lex.epsilon(10000), 1.1920928955078125e-7);
    t.end();
});
