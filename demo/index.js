
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const outputGet = document.getElementById('output-get');
const outputPost = document.getElementById('output-post');
const outputPut = document.getElementById('output-put');
const outputDelete = document.getElementById('output-delete');

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

const http = new simpleFETCH();

// Get Request
button1.addEventListener('click', getReq);

function getReq(e) {
  http.get("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      return data;
    })
    .then((data) => {
      console.log(data);

      outputGet.innerHTML = `<pre><code>${JSON.stringify(data, null, 2)}</code></pre>`;
    })
    .catch(err => console.log(err));

  e.preventDefault();
}

// POST Request
button2.addEventListener('click', postReq);

function postReq(e) {
  http.post("https://jsonplaceholder.typicode.com/users", data)
  .then((res) => {
    return res;
  })
  .then((res) => {
    let output = `
    <pre><code>${JSON.stringify(res, null, 2)}</code></pre>
    `;
    outputPost.innerHTML = output;
  })
  .catch(err => console.log(err));

e.preventDefault();
}

// PUT Request
button3.addEventListener('click', putReq);

function putReq(e) {
  http.put("https://jsonplaceholder.typicode.com/users/2", data)
  .then((data) => {
    return data;
  })
  .then((res) => {
    let output = `
    <pre><code>${JSON.stringify(res, null, 2)}</code></pre>
    `;
    outputPut.innerHTML = output;
  })
  .catch(err => console.log(err));

e.preventDefault();
}

// DELETE Request
button4.addEventListener('click', delReq);

function delReq(e) {
  http.delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => {
    return data;
  })
  .then((data) => {
    outputDelete.innerHTML = `<code>${data}</code>`;
  })
  .catch(err => console.log(err));

e.preventDefault();
}
