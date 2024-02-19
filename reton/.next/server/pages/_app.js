(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7216:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(5994);
;// CONCATENATED MODULE: external "react-useanimations/lib/bookmark"
var bookmark_namespaceObject = require("react-useanimations/lib/bookmark");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/_App/GoTop.js




const GoTop = ({
  scrollStepInPx,
  delayInMs
}) => {
  const [thePosition, setThePosition] = external_react_default().useState(false);
  const timeoutRef = external_react_default().useRef(null);
  external_react_default().useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop,
      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "bx bxs-up-arrow-alt"
      }), /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "bx bxs-up-arrow-alt"
      })]
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: renderGoTopIcon()
  });
};

/* harmony default export */ var _App_GoTop = (GoTop);
;// CONCATENATED MODULE: ./components/_App/Preloader.js




const Preloader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "loader",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "d-table",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "d-table-cell",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "preloader__wrapper",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "preloader__circle",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--1"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--2"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--3"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--4"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--5"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--6"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--7"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--8"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "preloader__circle-line preloader__circle-line--9"
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ var _App_Preloader = (Preloader);
// EXTERNAL MODULE: ./eduardo.config.js
var eduardo_config = __webpack_require__(2749);
// EXTERNAL MODULE: ./ave.config.js
var ave_config = __webpack_require__(6938);
;// CONCATENATED MODULE: ./components/_App/Layout.js









const Layout = ({
  children
}) => {
  // Preloader
  const config = process.env.NEXT_PUBLIC_WHO === 'Ave' ? ave_config/* default */.Z : eduardo_config/* default */.Z;
  const [loader, setLoader] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setTimeout(() => setLoader(false), 3000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: config.Layout.description
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: config.Layout.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:title",
        property: "og:title",
        content: config.Layout.title2
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: config.Layout.twitter
      })]
    }), children, loader ? /*#__PURE__*/jsx_runtime_.jsx(_App_Preloader, {}) : null, /*#__PURE__*/jsx_runtime_.jsx(_App_GoTop, {
      scrollStepInPx: "100",
      delayInMs: "10.50"
    })]
  });
};

/* harmony default export */ var _App_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(_App_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 5994:
/***/ (function() {



/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,396], function() { return __webpack_exec__(7216); });
module.exports = __webpack_exports__;

})();