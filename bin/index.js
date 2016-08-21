'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = fabricFetch;

require('isomorphic-fetch');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * @param  {String} url
 * @return {Function} graphql fetch
 */
function fabricFetch(url) {
    /**
     * @param  {String} query graphql query
     * @param  {Object} vars  graphql query args
     * @param  {Object} opts  fetch options
     * @return {Promise} fetch promise
     */
    return function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(query) {
            var vars = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
            var options, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            options = _extends({}, opts, {
                                method: 'POST',
                                headers: new Headers(opts.headers)
                            });

                            if (query) {
                                _context.next = 3;
                                break;
                            }

                            throw new Error('query must be defined');

                        case 3:

                            options.body = JSON.stringify({
                                query: query,
                                variables: JSON.stringify(vars)
                            });

                            if (!options.headers.get('content-type')) {
                                options.headers.append('Content-Type', 'application/json');
                            }

                            _context.next = 7;
                            return fetch('' + url, options);

                        case 7:
                            res = _context.sent;
                            _context.next = 10;
                            return res.json();

                        case 10:
                            return _context.abrupt('return', _context.sent);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function graphQLFetch(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        }

        return graphQLFetch;
    }();
}
