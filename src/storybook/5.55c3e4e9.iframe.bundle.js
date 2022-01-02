(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./dist/esm/mp-select-image-option.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"mp_select_image_option",(function(){return MpSelectImageOption}));__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-ebaa4aa4.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var MpSelectImageOption=function(){function MpSelectImageOption(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MpSelectImageOption),Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.j)(this,hostRef),this.choosedValue=Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,"choosedValue",7),this.slotInput=null,this.populateList=[],this.value="",this.disabled=!1,this.readonly=!1,this.defaultIcon=null,this.open=!1,this.currentSelected=null}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(MpSelectImageOption,[{key:"watchValue",value:function watchValue(){this.populateFirstLi()}},{key:"keyListener",value:function keyListener(ev){["ArrowUp","ArrowDown","Enter"].includes(ev.key)&&this.changeSelected(ev.key)}},{key:"changeSelected",value:function changeSelected(key){var _this=this;if(this.open){var currentIndex=this.populateList.findIndex((function(singolo){return singolo.value===_this.value}));"ArrowUp"===key&&this.value!==this.populateList[0].value&&(this.value=this.populateList[currentIndex-1].value),"ArrowDown"===key&&this.value!==this.populateList[this.populateList.length-1].value&&(this.value=this.populateList[currentIndex+1].value),"Enter"===key&&(this.open=!1)}}},{key:"connectedCallback",value:function connectedCallback(){if(this.slotInput=this.el.querySelector("input"),!this.slotInput||"hidden"!==this.slotInput.getAttribute("type"))throw new Error("Please provide input type hidden inside component: <mp-select-image-option><input type='hidden' /></mp-select-image-option>");this.populateFirstLi()}},{key:"populateFirstLi",value:function populateFirstLi(){var _this2=this;this.populateList.length&&this.value&&(this.currentSelected=this.populateList.find((function(singolo){return singolo.value===_this2.value})),this.setSlot(this.value))}},{key:"onChooseValue",value:function onChooseValue(singleItem){this.value=singleItem.value,this.choosedValue.emit(singleItem.value),this.currentSelected=singleItem,this.setSlot(singleItem.value)}},{key:"setSlot",value:function setSlot(value){this.slotInput.setAttribute("value",value)}},{key:"render",value:function render(){var _this3=this;if(this.slotInput)return Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.f,{"aria-controls":"listbox","aria-expanded":this.open?"true":"false","aria-haspopup":"listbox",role:"combobox"},Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null),Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("ul",{role:"listbox",onClick:function onClick(){return _this3.open=!_this3.open},class:{open:this.open}},Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("li",{role:"option"},this.currentSelected?this.renderFirstLi():"Choose Option...",!this.disabled&&!this.readonly&&Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("mp-font-awesome",{class:"selector",stringFontAwesome:"fas fa-angle-"+(this.open?"up":"down")})),!this.disabled&&!this.readonly&&this.populateList.map((function(singleItem){return Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("li",{role:"option",class:{current:_this3.value===singleItem.value},onClick:function onClick(){return _this3.onChooseValue(singleItem)}},(singleItem.faImage||_this3.defaultIcon)&&Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",null,Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("mp-font-awesome",{stringFontAwesome:singleItem.faImage||_this3.defaultIcon})),Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",null,singleItem.description))}))))}},{key:"renderFirstLi",value:function renderFirstLi(){var returnArray=[Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",null,Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("p",null,this.currentSelected.description))];return(this.currentSelected.faImage||this.defaultIcon)&&returnArray.unshift(Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",null,Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.h)("mp-font-awesome",{stringFontAwesome:this.currentSelected.faImage||this.defaultIcon}))),returnArray}},{key:"el",get:function get(){return Object(_index_ebaa4aa4_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}],[{key:"watchers",get:function get(){return{value:["watchValue"]}}}]),MpSelectImageOption}();MpSelectImageOption.style=":host{display:block;cursor:pointer}:host([disabled]),:host([readonly]){background-color:#dddddd;cursor:default}::slotted(*){display:none}.selector{margin-left:auto}ul{position:relative;min-width:200px;padding:0.375rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}ul li{display:none;padding:5px 0.375rem;min-width:150px}ul li:first-child{display:flex;border-top:0}ul li:hover,ul li:focus,ul li.current{background-color:#ddd}ul li:first-child:hover{background-color:transparent}ul li>div{flex:0 0 auto}ul li>div>p{padding:0;margin:-2px 0px 0px 0px}ul li>div:first-of-type{min-width:2rem}ul.open li{display:flex}"}}]);