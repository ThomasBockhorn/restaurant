(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      mainPhoto: "/img/restaurantTable.jpg"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dishOne: "/img/chicken.jpg",
      dishTwo: "/img/bean-stew.jpg",
      dishThree: "/img/steak.jpg",
      dishFour: "/img/pie.jpg",
      dishFive: "/img/coffee.jpg",
      dishSix: "/img/Salmon.jpg",
      dishSeven: "/img/teriyaki-salmon.jpg",
      dishEight: "/img/alcohol.jpg",
      dishNine: "/img/brownie.jpg"
    };
  },
  methods: {
    modal: function modal(imgID) {
      //Gets the modal and modal Image
      var modal = document.getElementById("modal");
      var modalImage = document.getElementById("modalImage"); //display modal

      modal.style.display = "block";
      modalImage.src = imgID.srcElement.src;
    },
    abort: function abort(event) {
      event.srcElement.style.display = "none";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/GalleryComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/GalleryComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_NavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/NavbarComponent */ "./resources/js/components/navbar/NavbarComponent.vue");
/* harmony import */ var _footer_FooterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/FooterComponent */ "./resources/js/components/footer/FooterComponent.vue");
/* harmony import */ var _galleryComponents_mainGallery_MainGalleryComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../galleryComponents/mainGallery/MainGalleryComponent */ "./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue");
/* harmony import */ var _galleryComponents_header_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../galleryComponents/header/HeaderComponent */ "./resources/js/components/galleryComponents/header/HeaderComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "navbar-component": _navbar_NavbarComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    "footer-component": _footer_FooterComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    "maingallery-component": _galleryComponents_mainGallery_MainGalleryComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    "header-component": _galleryComponents_header_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-6ba54c00] {\n  filter: brightness(50%);\n  height: 35em;\n}\n.header[data-v-6ba54c00] {\n  z-index: 9;\n  color: white;\n  text-align: center;\n  position: absolute;\n  font-family: \"Poiret One\", cursive;\n  margin-top: 15%;\n}\n@media screen and (max-width: 768px) {\nimg[data-v-6ba54c00] {\n    height: 20em;\n}\n.header[data-v-6ba54c00] {\n    margin-top: 30%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-91891e28] {\n  padding: 1em;\n  cursor: pointer;\n  transition: 0.3s;\n}\nimg[data-v-91891e28]:hover {\n  opacity: 0.7;\n}\n\n/**styling for modal */\n.modal[data-v-91891e28] {\n  display: none;\n  position: fixed;\n  z-index: 999999;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.modal-content[data-v-91891e28] {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  pointer-events: none;\n}\n.modal-content[data-v-91891e28] {\n  -webkit-animation-name: zoom-data-v-91891e28;\n  -webkit-animation-duration: 0.6s;\n  animation-name: zoom-data-v-91891e28;\n  animation-duration: 0.6s;\n}\n@-webkit-keyframes zoom-data-v-91891e28 {\nfrom {\n    -webkit-transform: scale(0);\n}\nto {\n    -webkit-transform: scale(1);\n}\n}\n@keyframes zoom-data-v-91891e28 {\nfrom {\n    transform: scale(0);\n}\nto {\n    transform: scale(1);\n}\n}\n.close[data-v-91891e28] {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n  z-index: 2000000;\n  pointer-events: none;\n}\n@media only screen and (max-width: 700px) {\n.modal-content[data-v-91891e28] {\n    width: 100%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=template&id=6ba54c00&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=template&id=6ba54c00&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "d-flex" }, [
    _c("img", {
      staticClass: "w-100",
      attrs: { src: _vm.mainPhoto, alt: _vm.mainPhoto }
    }),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "header flex-column justify-content-center w-100" },
      [_c("h1", { staticClass: "text-center" }, [_vm._v("Gallery")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=template&id=91891e28&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=template&id=91891e28&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row w-100 justify-content-around" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("img", {
            staticClass: "w-100",
            attrs: { src: _vm.dishOne, alt: _vm.dishOne, height: "100%" },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 d-flex flex-column" }, [
          _c("img", {
            staticClass: "w-100",
            attrs: { src: _vm.dishTwo, alt: _vm.dishTwo, height: "50%" },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "w-100",
            attrs: { src: _vm.dishFour, alt: _vm.dishFour, height: "50%" },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 d-flex flex-column" }, [
          _c("img", {
            staticClass: "w-100",
            attrs: { src: _vm.dishThree, alt: _vm.dishThree, height: "50%" },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "w-100",
            attrs: { src: _vm.dishFive, alt: _vm.dishFive, height: "50%" },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            attrs: {
              src: _vm.dishSix,
              alt: _vm.dishSix,
              height: "100%",
              width: "100%"
            },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            attrs: {
              src: _vm.dishSeven,
              alt: _vm.dishSeven,
              height: "100%",
              width: "100%"
            },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            attrs: {
              src: _vm.dishEight,
              alt: _vm.dishEight,
              height: "100%",
              width: "100%"
            },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            attrs: {
              src: _vm.dishNine,
              alt: _vm.dishNine,
              height: "100%",
              width: "100%"
            },
            on: {
              click: function($event) {
                return _vm.modal($event)
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal",
        attrs: { id: "modal" },
        on: {
          click: function($event) {
            return _vm.abort($event)
          }
        }
      },
      [
        _c(
          "button",
          {
            staticClass: "close",
            on: {
              click: function($event) {
                return _vm.abort($event)
              }
            }
          },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("img", { staticClass: "modal-content", attrs: { id: "modalImage" } })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/GalleryComponent.vue?vue&type=template&id=3bac29e1&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/GalleryComponent.vue?vue&type=template&id=3bac29e1&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "header",
      { staticClass: "mt-3 w-100" },
      [_c("navbar-component"), _vm._v(" "), _c("header-component")],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "m-3", attrs: { id: "mainGallery" } },
      [_c("maingallery-component")],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "w-100" }, [_c("footer-component")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/galleryComponents/header/HeaderComponent.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/galleryComponents/header/HeaderComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderComponent_vue_vue_type_template_id_6ba54c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=template&id=6ba54c00&scoped=true& */ "./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=template&id=6ba54c00&scoped=true&");
/* harmony import */ var _HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HeaderComponent_vue_vue_type_style_index_0_id_6ba54c00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css& */ "./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderComponent_vue_vue_type_template_id_6ba54c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeaderComponent_vue_vue_type_template_id_6ba54c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ba54c00",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/galleryComponents/header/HeaderComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_style_index_0_id_6ba54c00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=style&index=0&id=6ba54c00&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_style_index_0_id_6ba54c00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_style_index_0_id_6ba54c00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_style_index_0_id_6ba54c00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_style_index_0_id_6ba54c00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_style_index_0_id_6ba54c00_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=template&id=6ba54c00&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=template&id=6ba54c00&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_6ba54c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HeaderComponent.vue?vue&type=template&id=6ba54c00&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/header/HeaderComponent.vue?vue&type=template&id=6ba54c00&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_6ba54c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_6ba54c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainGalleryComponent_vue_vue_type_template_id_91891e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainGalleryComponent.vue?vue&type=template&id=91891e28&scoped=true& */ "./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=template&id=91891e28&scoped=true&");
/* harmony import */ var _MainGalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainGalleryComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MainGalleryComponent_vue_vue_type_style_index_0_id_91891e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css& */ "./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MainGalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainGalleryComponent_vue_vue_type_template_id_91891e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainGalleryComponent_vue_vue_type_template_id_91891e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91891e28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainGalleryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_style_index_0_id_91891e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=style&index=0&id=91891e28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_style_index_0_id_91891e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_style_index_0_id_91891e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_style_index_0_id_91891e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_style_index_0_id_91891e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_style_index_0_id_91891e28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=template&id=91891e28&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=template&id=91891e28&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_template_id_91891e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainGalleryComponent.vue?vue&type=template&id=91891e28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/galleryComponents/mainGallery/MainGalleryComponent.vue?vue&type=template&id=91891e28&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_template_id_91891e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainGalleryComponent_vue_vue_type_template_id_91891e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/GalleryComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/GalleryComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GalleryComponent_vue_vue_type_template_id_3bac29e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryComponent.vue?vue&type=template&id=3bac29e1&scoped=true& */ "./resources/js/components/pages/GalleryComponent.vue?vue&type=template&id=3bac29e1&scoped=true&");
/* harmony import */ var _GalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GalleryComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/GalleryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GalleryComponent_vue_vue_type_template_id_3bac29e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GalleryComponent_vue_vue_type_template_id_3bac29e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3bac29e1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/GalleryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/GalleryComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/GalleryComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/GalleryComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/GalleryComponent.vue?vue&type=template&id=3bac29e1&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pages/GalleryComponent.vue?vue&type=template&id=3bac29e1&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_template_id_3bac29e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GalleryComponent.vue?vue&type=template&id=3bac29e1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/GalleryComponent.vue?vue&type=template&id=3bac29e1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_template_id_3bac29e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GalleryComponent_vue_vue_type_template_id_3bac29e1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);