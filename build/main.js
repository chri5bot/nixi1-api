require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: PORT, MONGODB_URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONGODB_URI", function() { return MONGODB_URI; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);

dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://chris:WAneUWcKpx6qo81|@cluster0.284ov.mongodb.net/nixi1?retryWrites=true&w=majority';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: pubsub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pubsub", function() { return pubsub; });
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config/index.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schema */ "./src/schema.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/db */ "./src/utils/db.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const pubsub = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__["PubSub"]();
const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__["ApolloServer"]({
  schema: _schema__WEBPACK_IMPORTED_MODULE_4__["default"],
  cors: true,
  playground:  true ? true : undefined,
  introspection: true,
  tracing: true,
  path: '/'
});
server.applyMiddleware({
  app,
  path: '/',
  cors: true,
  onHealthCheck: () => new Promise((resolve, reject) => {
    if (mongoose__WEBPACK_IMPORTED_MODULE_5___default.a.connection.readyState > 0) {
      resolve();
    } else {
      reject();
    }
  })
});
const httpServer = Object(http__WEBPACK_IMPORTED_MODULE_0__["createServer"])(app);
server.installSubscriptionHandlers(httpServer);
app.get('/', async (req, res) => {
  const thing = await Promise.resolve({
    one: 'two'
  }) // async/await!
  .catch(e => res.json({
    error: e.message
  }));
  return res.json(_objectSpread(_objectSpread({}, thing), {}, {
    hello: 'world'
  })); // object-rest-spread!
});
httpServer.listen(_config__WEBPACK_IMPORTED_MODULE_3__["PORT"], () => {
  console.log(`> Server ready at http://localhost:${_config__WEBPACK_IMPORTED_MODULE_3__["PORT"]}${server.graphqlPath}`);
  console.log(`> Subscriptions ready at ws://localhost:${_config__WEBPACK_IMPORTED_MODULE_3__["PORT"]}${server.subscriptionsPath}`);
});

/***/ }),

/***/ "./src/mutations/message/createMessage.js":
/*!************************************************!*\
  !*** ./src/mutations/message/createMessage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topics_message_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../topics/message/index */ "./src/topics/message/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./src/index.js");


/* harmony default export */ __webpack_exports__["default"] = (async (_, args) => {
  const {
    id,
    text
  } = await args.input;
  await _index__WEBPACK_IMPORTED_MODULE_1__["pubsub"].publish(_topics_message_index__WEBPACK_IMPORTED_MODULE_0__["default"], {
    messageCreated: {
      id,
      text
    }
  });
  return {
    id,
    text
  };
});

/***/ }),

/***/ "./src/mutations/message/index.js":
/*!****************************************!*\
  !*** ./src/mutations/message/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMessage */ "./src/mutations/message/createMessage.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Mutation: {
    createMessage: _createMessage__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./src/queries/message/index.js":
/*!**************************************!*\
  !*** ./src/queries/message/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages */ "./src/queries/message/messages.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Query: {
    messages: _messages__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./src/queries/message/messages.js":
/*!*****************************************!*\
  !*** ./src/queries/message/messages.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async (_, args) => args.message);

/***/ }),

/***/ "./src/schema.js":
/*!***********************!*\
  !*** ./src/schema.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/Message */ "./src/types/Message.js");
/* harmony import */ var _queries_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queries/message */ "./src/queries/message/index.js");
/* harmony import */ var _mutations_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutations/message */ "./src/mutations/message/index.js");
/* harmony import */ var _subscriptions_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscriptions/message */ "./src/subscriptions/message/index.js");






const Root = apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;
const resolvers = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, _queries_message__WEBPACK_IMPORTED_MODULE_3__["default"], _mutations_message__WEBPACK_IMPORTED_MODULE_4__["default"], _subscriptions_message__WEBPACK_IMPORTED_MODULE_5__["default"]);
const schema = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["makeExecutableSchema"])({
  typeDefs: [Root, _types_Message__WEBPACK_IMPORTED_MODULE_2__["default"]],
  resolvers
});
/* harmony default export */ __webpack_exports__["default"] = (schema);

/***/ }),

/***/ "./src/subscriptions/message/index.js":
/*!********************************************!*\
  !*** ./src/subscriptions/message/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messageCreated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageCreated */ "./src/subscriptions/message/messageCreated.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  Subscription: {
    messageCreated: _messageCreated__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./src/subscriptions/message/messageCreated.js":
/*!*****************************************************!*\
  !*** ./src/subscriptions/message/messageCreated.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _topics_message_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../topics/message/index */ "./src/topics/message/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  subscribe: () => _index__WEBPACK_IMPORTED_MODULE_0__["pubsub"].asyncIterator([_topics_message_index__WEBPACK_IMPORTED_MODULE_1__["default"]])
});

/***/ }),

/***/ "./src/topics/message/index.js":
/*!*************************************!*\
  !*** ./src/topics/message/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const MESSAGE_CREATED = 'MESSAGE_CREATED';
/* harmony default export */ __webpack_exports__["default"] = (MESSAGE_CREATED);

/***/ }),

/***/ "./src/types/Message.js":
/*!******************************!*\
  !*** ./src/types/Message.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  type Message {
    id: String!
    text: String!
  }
  input createMessageInput {
    id: String!
    text: String!
  }
  extend type Mutation {
    createMessage(input: createMessageInput): Message
  }
  extend type Subscription {
    messageCreated: Message
  }
  extend type Query {
    messages: [Message]
  }
`);

/***/ }),

/***/ "./src/utils/db.js":
/*!*************************!*\
  !*** ./src/utils/db.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.js");


mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;
const connection = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(_config__WEBPACK_IMPORTED_MODULE_1__["MONGODB_URI"], {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useCreateIndex', true);
connection.then(db => db).catch(err => {
  console.log(err);
});
/* harmony default export */ __webpack_exports__["default"] = (connection);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\star5\dev\test\nixi1-api\src/index.js */"./src/index.js");


/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.map