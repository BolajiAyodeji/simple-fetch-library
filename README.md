<div align="center">

[![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=flat-square)](https://github.com/acekyd/made-in-nigeria)
[![Open Source Helpers](https://www.codetriage.com/bolajiayodeji/simple-fetch-library/badges/users.svg)](https://www.codetriage.com/bolajiayodeji/simple-fetch-library)

</div>

# Getting Started

Download and include the JavaScript file | [full version](https://github.com/BolajiAyodeji/simple-fetch-library/blob/master/dist/simpleFetch.js) | [minified](https://github.com/BolajiAyodeji/simple-fetch-library/blob/master/dist/simpleFetch.min.js) | [ES6 version](https://github.com/BolajiAyodeji/simple-fetch-library/blob/master/src/simpleFetch.js) |

```html
<script src="simpleFetch.js"></script>
```
```html
<script src="simpleFetch.min.js"></script>
```
> Create a new simpleFetch
 ```js
 const http = new simpleFetch;
 ```

# Examples

* GET Request

```js
http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
<br>

* POST Request

```js
const data = {
    "name": "Bolaji Ayodeji",
    "username": "bolajiayodeji",
    "email": "hi@bolajiayodeji.com",
    "address": {
      "street": "Hello world",
      "suite": "Hello",
      "city": "Lokoja, Kogi",
      "zipcode": "xxx-xxx-xxx",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "+234 8109445504",
    "website": "https://bolajiayodeji.com",
    "company": {
      "name": "PhilanthroLab",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
};

http.post("https://jsonplaceholder.typicode.com/users", data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
<br>

* PUT Request

```js
const data = {
    "name": "Bolaji Ayodeji",
    "username": "bolajiayodeji",
    "email": "hi@bolajiayodeji.com",
    "address": {
      "street": "Hello world",
      "suite": "Hello",
      "city": "Lokoja, Kogi",
      "zipcode": "xxx-xxx-xxx",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "+234 8109445504",
    "website": "https://bolajiayodeji.com",
    "company": {
      "name": "PhilanthroLab",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
};

http.put("https://jsonplaceholder.typicode.com/users/2", data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
<br>

* DELETE Request

```js
http.delete("https://jsonplaceholder.typicode.com/users/2")
  .then(() => console.log(data))
  .catch(err => console.log(err));
```

# Contribution Guide

```bash
git clone https://github.com/BolajiAyodeji/simple-fetch-library.git
```
```bash
cd simple-fetch-library
```
```bash
npm install
```
```bash
npm run build
```
