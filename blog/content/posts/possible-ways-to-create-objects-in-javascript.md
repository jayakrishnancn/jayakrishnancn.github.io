+++
date = '2024-10-24T15:55:33+05:30'
title = 'Possible Ways to Create Objects in Javascript'
+++

In this article, we’ll explore different techniques for creating objects in JavaScript, ranging from traditional constructor functions to modern ES6 classes.

In JavaScript, objects serve as a powerful way to organize data and functionality. They consist of key-value pairs, where the keys (also known as properties) are strings, and the values can be of any data type. You can create objects using various approaches, such as object literals, constructors, or classes. These objects not only store data through properties but also encapsulate behavior using methods—functions defined within the object. This combination of data and functionality helps maintain clean and structured code, making objects an essential part of JavaScript programming.

## ES6 Class syntax

ES6 introduces class feature to create the objects

```Javascript
class Person {
  constructor(name) {
    this.name = name
  }
}
var object = new Person("Sudheer")
```

## Object constructor

The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

```Javascript
var object = new Object()
```

## Object’s create method

The create method of Object creates a new object by passing the prototype object as a parameter

```Javascript
var object = Object.create(null)
```

## Object literal syntax

The object literal syntax is equivalent to create method when it passes null as parameter

```Javascript
var object = {}

```

## Function constructor

Create any function and apply the new operator to create object instances.

```Javascript
function Person(name) {
  this.name = name
  this.age = 21
}
var object = new Person("Sudheer")
```

## Function constructor with prototype

This is similar to function constructor but it uses prototype for their properties and methods

```Javascript
function Person() {}
Person.prototype.name = "Sudheer"
var object = new Person()
```
