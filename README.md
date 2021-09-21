# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emikeke/lotide`

**Require it:**

`const _ = require('@emikeke/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns first element in an array
* `tail`: returns everything except first element in an array
* `middle`: returns middle-most element(s) in an array
* `assertArraysEqual`: returns T/F after comparing actual with expected value (supports non primitive types)
* `assertEqual`: compares actual with expected value (doesn't support objects & array)
* `assertObjectsEqual`: returns T/F after comparing actual with expected value (supports objects)
* `countLetters`: returns a count of each of the letters in a string
* `countOnly`: returns counts for a specific subset of items
* `eqArrays`: compares actual with expected value (supports arrays)
* `eqObjects`: takes 2 objects, returns T/F based on a perfect match
* `findKey`: returns the first key for which the callback returns a truthy value if no key i
* `findKeyByValue`: returns the first key with contains the given value
* `letterPositions`: return all the indicies in the string where each character is found
* `map`: returns a new array based on the results of the callback function
* `takeUntil`: returns a slice of the array with elements taken from the beginning and keeps going until the callback/predicate returns a truthy value
* `without`: returns a subset of a given array, removing unwanted elements