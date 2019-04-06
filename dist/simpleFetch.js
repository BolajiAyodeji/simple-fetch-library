"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * simpleFetch Library
 * A simple FETCH API Library for making HTTP Requests"
 *
 * @version 1.0.0
 * @author Bolaji Ayodeji
 * @license MIT
 */
var simpleFETCH =
/*#__PURE__*/
function () {
  function simpleFETCH() {
    _classCallCheck(this, simpleFETCH);
  }

  _createClass(simpleFETCH, [{
    key: "get",
    // Make GET Request
    value: function get(url) {
      return new Promise(function (resolve, reject) {
        fetch(url).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    } // Make POST Request

  }, {
    key: "post",
    value: function post(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    } // Make PUT Request

  }, {
    key: "put",
    value: function put(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve(data);
        }).catch(function (err) {
          return reject(err);
        });
      });
    } // Make DELETE Request

  }, {
    key: "delete",
    value: function _delete(url) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return resolve("Data Deleted!");
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }]);

  return simpleFETCH;
}();