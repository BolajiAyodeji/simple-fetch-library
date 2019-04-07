"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(url) {
        var response, resData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(url);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                resData = _context.sent;
                return _context.abrupt("return", resData);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }() // Make POST Request

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url, data) {
        var response, resData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                resData = _context2.sent;
                return _context2.abrupt("return", resData);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function post(_x2, _x3) {
        return _post.apply(this, arguments);
      }

      return post;
    }() // Make PUT Request

  }, {
    key: "put",
    value: function () {
      var _put = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(url, data) {
        var response, resData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(url, {
                  method: 'PUT',
                  headers: {
                    'Content-type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.json();

              case 5:
                resData = _context3.sent;
                return _context3.abrupt("return", resData);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function put(_x4, _x5) {
        return _put.apply(this, arguments);
      }

      return put;
    }() // Make DELETE Request

  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(url) {
        var response, resData;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch(url, {
                  method: 'DELETE',
                  headers: {
                    'Content-type': 'application/json'
                  }
                });

              case 2:
                response = _context4.sent;
                _context4.next = 5;
                return 'Data Deleted';

              case 5:
                resData = _context4.sent;
                return _context4.abrupt("return", resData);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function _delete(_x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return simpleFETCH;
}();