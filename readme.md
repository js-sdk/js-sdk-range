# js-sdk-range

Simple range utilities.

[![Build Status](https://travis-ci.org/js-sdk/js-sdk-range.svg?branch=master)](https://travis-ci.org/js-sdk/js-sdk-range) [![Coverage Status](https://coveralls.io/repos/github/js-sdk/js-sdk-range/badge.svg?branch=master)](https://coveralls.io/github/js-sdk/js-sdk-range?branch=master)

## Library

### between(value, lower, higher)

`value` is between the `lower` and `higher` values.

### rangeIn(start, end, [lower, higher])

`start` and `end` are on the interval `[lower, higher]`.

### rangeImpl(start, end, step, f)

Range from `start` to `end` in `step` with a transformation `f`.

### range(start, end)

Range between `start` and `end`. `step` is `1`.

### rangeStep(start, end, step)

Range between `start` and `end` in `step`.

### rangeIncl(start, end)

Range between `start` and `end`. Includes the `end`.

### rangeInclStep(start, end, step)

Range between `start` and `end` in `step`. Includes the `end` if in range for `step`.

### rangeChar(start, end)

Range of characters `start` to `end`.

Here is all valid ranges:

- Lower case: `[a-z]`

- Upper case: `[A-Z]`

- Digit:      `[0-9]`

A specified range `rangeChar('a', 'Z')` is invalid and produces an empty list.


## license

See `license.md` or visit [Unlicense](http://unlicense.org).
