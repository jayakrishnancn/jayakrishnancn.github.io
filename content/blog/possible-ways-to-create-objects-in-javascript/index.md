---
title: Possible ways to create objects in JavaScript
tags: ["javascript", "back-to-basics", "basics", "general"]
description: Possible ways to create objects in javascript
date: 2021-10-24
---

| Content                                                                     |
| --------------------------------------------------------------------------- |
| [ES6 Class syntax](#ES6-Class-syntax)                                       |
| [Object constructor](#Object-constructor)                                   |
| [Object's create method](#Object-s-create-method)                           |
| [Object literal syntax](#Object-literal-syntax)                             |
| [Function constructor](#Function-constructor)                               |
| [Function constructor with prototype](#Function-constructor-with-prototype) |

## There are many ways to create objects in javascript as below

- <u id="ES6-Class-syntax">**ES6 Class syntax:**</u>
  ES6 introduces class feature to create the objects

  ```javascript
  class Person {
    constructor(name) {
      this.name = name
    }
  }
  var object = new Person("Sudheer")
  ```

- <u id="Object-constructor">**Object constructor:**</u>
  The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

```javascript
var object = new Object()
```

- <u id="Object-s-create-method">**Object's create method:**</u>
  The create method of Object creates a new object by passing the prototype object as a parameter

  ```javascript
  var object = Object.create(null)
  ```

- <u id="Object-literal-syntax">**Object literal syntax:**</u>
  The object literal syntax is equivalent to create method when it passes null as parameter

  ```javascript
  var object = {}
  ```

- <u id="Function-constructor">**Function constructor:**</u>
  Create any function and apply the new operator to create object instances,

  ```javascript
  function Person(name) {
    this.name = name
    this.age = 21
  }
  var object = new Person("Sudheer")
  ```

- <u id="Function-constructor-with-prototype">**Function constructor with prototype:**</u>
  This is similar to function constructor but it uses prototype for their properties and methods,

  ```javascript
  function Person() {}
  Person.prototype.name = "Sudheer"
  var object = new Person()
  ```
