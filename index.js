// TODO: 64 bit
module.exports.reinterpret = reinterpret;
module.exports.floatlexorder = floatlexorder;
module.exports.epsilon = epsilon;

function reinterpret(value, from, to) {
    var floatArray = new from(1);
    floatArray[0] = value;
    var intArray = new to(floatArray.buffer);
    return intArray[0];
}

function floatlexorder(value, delta) {
    var f = reinterpret(value, Float32Array, Int32Array);
    f += delta;
    return reinterpret(f, Int32Array, Float32Array);
}

function epsilon(value) {
    return floatlexorder(value, 1) - value;
}
