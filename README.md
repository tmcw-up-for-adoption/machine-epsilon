# machine epsilon

In math code, you might see values for epsilon, or ε. This stands for the
smallest representable increment, often of floating point numbers. Due
to the nature of floating point numbers, this value is different at different
points along the number-line.

This library explores this in detail. It isn't ready for prime-time, since it uses
Float32 rather than Float64 units.

## api

### reintepret(value, fromtype, totype)

Reintepret the bits in a number from one type to another:

```js
// read a floating point number as an int
reinterpret(value, Float32Array, Int32Array);
```

### floatlexorder(value, delta)

Given a floating point number, move it by `delta` increments.

### epsilon(value)

Return the difference between this floating point value and the next
value on the number line.
