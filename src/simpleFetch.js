/**
 * simpleFetch Library
 * A simple FETCH API Library for making HTTP Requests"
 *
 * @version 1.0.0
 * @author Bolaji Ayodeji
 * @license MIT
 */

class simpleFETCH {
  // Make GET Request
  async get(url, headers) {
    const response = await fetch(url, { headers: { ...headers } });
    const resData = await response.json();
    return resData;
  }

  // Make POST Request
  async post(url, data, headers) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        ...headers
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // Make PUT Request
  async put(url, data, headers) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        ...headers
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  // Make DELETE Request
  async delete(url, headers) {
    const _ = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        ...headers
      }
    });

    const resData = await "Data Deleted";
    return resData;
  }
}
