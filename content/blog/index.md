---
title: "Regular Expressions(RegEx) Basics"
description: "In this article we will talk about basic stuffs regular expressions to get started."
---

- [basic use - Let us find the word 'apple' in the string](#basic-use---let-us-find-the-word-apple-in-the-string)
- [Find Many String](#find-many-string)
  - [Using match](#using-match)
  - [Using matchAll](#using-matchall)
- [How to Set **_Case Insensitive_**](#how-to-set-case-insensitive)
- [Find All Capital Letters](#find-all-capital-letters)
- [How To Find Digits in a string](#how-to-find-digits-in-a-string)
- [Using `Replace` Function](#using-replace-function)
- [Using Search and Exec function](#using-search-and-exec-function)
- [Use of test function](#use-of-test-function)
  - [Give Me Coffee](#give-me-coffee)

In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern.

This post will go over some basic stuff about regular expressions. Regular Expressions enable us to easily find patterns in a string.

## basic use - Let us find the word 'apple' in the string

```js
const text = "This is an apple";
const regex = /apple/;

const result = text.match(regex);
console.log(result);

/**
output:
[
  0: "apple"
  groups: undefined
  index: 11
  input: "this is an apple"
  length: 1
]
*/
```

## Find Many String

We are going to use the previous example and were going to add a global option to the regex. This will create an array of all occurrences. Note, this is case sensitive.

### Using match

```js
const text = "this is an apple and another apple or APPLe";
const regex = /apple/g;

console.log(text.match(regex));
/**
Output:
['apple', 'apple']
*/
```

### Using matchAll

```js
const text = "this is an apple and another apple or APPLe";
const regex = /apple/g;

console.log([...text.match(regex)]);
/**
Output:
[
  0: ['apple', index: 11, input: 'this is an apple and another apple or APPLe', groups: undefined]
  1: ['apple', index: 29, input: 'this is an apple and another apple or APPLe', groups: undefined]
]
*/
```

## How to Set **_Case Insensitive_**

We are going to add the `i` option to the modifier to make the pattern case insensitive.

```js
const text = "this is an apple and another apple or APPLe";
const regex = /apple/gi;

console.log([...text.matchAll(regex)]);
/**
[
  0: ['apple', index: 11, input: 'this is an apple and another apple or APPLe', groups: undefined]
  1: ['apple', index: 29, input: 'this is an apple and another apple or APPLe', groups: undefined]
  2: ['APPLe', index: 38, input: 'this is an apple and another apple or APPLe', groups: undefined]
]
*/
```

## Find All Capital Letters

```js
const text = "Make Arnold Reverse the Video about Eternal Latency";
const regex = /[A-Z]/g; // we still need to use the global option

console.log(text.match(regex));
/**
Output:
['M', 'A', 'R', 'V', 'E', 'L']
*/
```

We can also set our regex to ignore the letter `M`.

```js
const text = "Make Arnold Reverse the Video about Eternal Latency";
const regex = /(?![M])[A-Z]/g;

console.log(text.match(regex));
/**
    Output:
    ['A', 'R', 'V', 'E', 'L']
 */
```

## How To Find Digits in a string

```js
const text = "We have a sugar of 200g, a lemon of 1kg and 1000kg of water.";
const regex = /\d/g; // using \d to match any digit

console.log(text.match(regex));
/**
    Output:
    ['2', '0', '0', '1', '1', '0', '0', '0']
 */
```

Get FULL numbers by using the `+` option.

```js
const text = "We have a sugar of 200g, a lemon of 1kg and 1000kg of water.";
const regex = /\d+/g; // using \d+ find full number

console.log(text.match(regex));
/**
    Output:
    ['200', '1', '1000']
 */
```

## Using `Replace` Function

We're going to find and replace an item. In this example, we're going to find capital letters and replace them with @.

```js
const text = "I have 1 item.";
const regex = /\d/g; // using \d+ find full number

console.log(text.replace(regex, "@"));
/**
    Output:
    I have @ item.
 */
```

Other samples:

```js
// replace all capital letters
const result = "This is A New Item".replace(/[A-Z]/g, "@");
console.log(result); // @his is @ @ew @tem

// replace full numbers
const result = "This is A 200kg New Item with 0% capacity".replace(/\d+/g, "@");
console.log(result); // This is A @kg New Item with @% capacity

// replace all letter a
const result = "This is A 200kg New Item with 0% capacity".replace(
    /[a]/gi,
    "@"
);
console.log(result); // This is @ 200kg New Item with 0% c@p@city
```

## Using Search and Exec function

Search will give us the `index` position of the first match.

```js
const result = "We are the World".search(/the/g);
console.log(result); // 7
```

Exec on the other hand is like a match but with the purpose to be used in a loop. returns an array of captures or null.

```js
const text = "We are the people of the world";
const regex = /the/g;
let arr;
while ((arr = regex.exec(text)) !== null) {
    console.log(`Found ${arr[0]} in index ${arr.index}.`);
}

/**
    Output:
    Found the in index 7.
    Found the in index 21.
 */
```

## Use of test function

The `test` Returns a Boolean value that indicates whether or not a pattern exists in a searched string.

example validating an email address(This is a complicated regex but the main point here is how to use the test function):

```js
const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log(regex.test("brojenuel@123.890")); // false
console.log(regex.test("jenuelganawed936@gmail.com")); // true
```

other example:

```js
const text = "This is just a text";

console.log(/a/.test(text)); // true - because a exist on the text
console.log(/\d/.test(text)); // false - because no digits found
console.log(/[A-Z]/.test(text)); // true - because theres a capital letter
console.log(/A/i.test(text)); // true - because letter a/A exist on the text
```

<hr />

### Give Me Coffee

I create a post like this.
If you like to give me money, I will gladly accept 😁👍.

-   [Ko-Fi](https://ko-fi.com/brojenuel)
-   [Buy Me Coffee](https://www.buymeacoffee.com/brojenuel)

check out my latest personal project:
[Believers Sword App](https://believers-sword-app.herokuapp.com/)

Follow me:
[Instgram](https://www.instagram.com/brojenuel/)
[Facebook](https://www.facebook.com/broJenuel/)
[Youtube](https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA)
