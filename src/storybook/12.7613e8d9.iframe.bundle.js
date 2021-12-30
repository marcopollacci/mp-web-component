/*! For license information please see 12.7613e8d9.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./dist/esm/shadow-css-b1ac6541.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scopeCss",(function(){return scopeCss}));__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim-end.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _parenSuffix=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",_cssColonHostRe=new RegExp("(-shadowcsshost"+_parenSuffix,"gim"),_cssColonHostContextRe=new RegExp("(-shadowcsscontext"+_parenSuffix,"gim"),_cssColonSlottedRe=new RegExp("(-shadowcssslotted"+_parenSuffix,"gim"),_polyfillHostNoCombinatorRe=/-shadowcsshost-no-combinator([^\s]*)/,_shadowDOMSelectorsRe=[/::shadow/g,/::content/g],_polyfillHostRe=/-shadowcsshost/gim,_colonHostRe=/:host/gim,_colonSlottedRe=/::slotted/gim,_colonHostContextRe=/:host-context/gim,_commentRe=/\/\*\s*[\s\S]*?\*\//g,_commentWithHashRe=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_ruleRe=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_curlyRe=/([{}])/g,_selectorPartsRe=/(^.*?[^\\])??((:+)(.*)|$)/,processRules=function processRules(input,ruleCallback){var inputWithEscapedBlocks=escapeBlocks(input),nextBlockIndex=0;return inputWithEscapedBlocks.escapedString.replace(_ruleRe,(function(){var selector=arguments.length<=2?void 0:arguments[2],content="",suffix=arguments.length<=4?void 0:arguments[4],contentPrefix="";suffix&&suffix.startsWith("{%BLOCK%")&&(content=inputWithEscapedBlocks.blocks[nextBlockIndex++],suffix=suffix.substring("%BLOCK%".length+1),contentPrefix="{");var cssRule={selector:selector,content:content},rule=ruleCallback(cssRule);return""+(arguments.length<=1?void 0:arguments[1])+rule.selector+(arguments.length<=3?void 0:arguments[3])+contentPrefix+rule.content+suffix}))},escapeBlocks=function escapeBlocks(input){for(var inputParts=input.split(_curlyRe),resultParts=[],escapedBlocks=[],bracketCount=0,currentBlockParts=[],partIndex=0;partIndex<inputParts.length;partIndex++){var part=inputParts[partIndex];"}"===part&&bracketCount--,bracketCount>0?currentBlockParts.push(part):(currentBlockParts.length>0&&(escapedBlocks.push(currentBlockParts.join("")),resultParts.push("%BLOCK%"),currentBlockParts=[]),resultParts.push(part)),"{"===part&&bracketCount++}return currentBlockParts.length>0&&(escapedBlocks.push(currentBlockParts.join("")),resultParts.push("%BLOCK%")),{escapedString:resultParts.join(""),blocks:escapedBlocks}},convertColonRule=function convertColonRule(cssText,regExp,partReplacer){return cssText.replace(regExp,(function(){for(var _len=arguments.length,m=new Array(_len),_key=0;_key<_len;_key++)m[_key]=arguments[_key];if(m[2]){for(var parts=m[2].split(","),r=[],i=0;i<parts.length;i++){var p=parts[i].trim();if(!p)break;r.push(partReplacer("-shadowcsshost-no-combinator",p,m[3]))}return r.join(",")}return"-shadowcsshost-no-combinator"+m[3]}))},colonHostPartReplacer=function colonHostPartReplacer(host,part,suffix){return host+part.replace("-shadowcsshost","")+suffix},colonHostContextPartReplacer=function colonHostContextPartReplacer(host,part,suffix){return part.indexOf("-shadowcsshost")>-1?colonHostPartReplacer(host,part,suffix):host+part+suffix+", "+part+" "+host+suffix},selectorNeedsScoping=function selectorNeedsScoping(selector,scopeSelector){var re=function makeScopeMatcher(scopeSelector){return scopeSelector=scopeSelector.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+scopeSelector+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(scopeSelector);return!re.test(selector)},injectScopingSelector=function injectScopingSelector(selector,scopingSelector){return selector.replace(_selectorPartsRe,(function(_){var before=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",colon=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",after=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return before+scopingSelector+colon+after}))},applyStrictSelectorScope=function applyStrictSelectorScope(selector,scopeSelector,hostSelector){scopeSelector=scopeSelector.replace(/\[is=([^\]]*)\]/g,(function(_){return arguments.length<=1?void 0:arguments[1]}));for(var res,className="."+scopeSelector,_scopeSelectorPart=function _scopeSelectorPart(p){var scopedP=p.trim();if(!scopedP)return"";if(p.indexOf("-shadowcsshost-no-combinator")>-1)scopedP=function applySimpleSelectorScope(selector,scopeSelector,hostSelector){if(_polyfillHostRe.lastIndex=0,_polyfillHostRe.test(selector)){var replaceBy="."+hostSelector;return selector.replace(_polyfillHostNoCombinatorRe,(function(_,selector){return injectScopingSelector(selector,replaceBy)})).replace(_polyfillHostRe,replaceBy+" ")}return scopeSelector+" "+selector}(p,scopeSelector,hostSelector);else{var t=p.replace(_polyfillHostRe,"");t.length>0&&(scopedP=injectScopingSelector(t,className))}return scopedP},safeContent=function safeSelector(selector){var placeholders=[],index=0;return{content:(selector=selector.replace(/(\[[^\]]*\])/g,(function(_,keep){var replaceBy="__ph-"+index+"__";return placeholders.push(keep),index++,replaceBy}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(_,pseudo,exp){var replaceBy="__ph-"+index+"__";return placeholders.push(exp),index++,pseudo+replaceBy})),placeholders:placeholders}}(selector),scopedSelector="",startIndex=0,sep=/( |>|\+|~(?!=))\s*/g,shouldScope=!((selector=safeContent.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(res=sep.exec(selector));){var separator=res[1],_part=selector.slice(startIndex,res.index).trim();scopedSelector+=((shouldScope=shouldScope||_part.indexOf("-shadowcsshost-no-combinator")>-1)?_scopeSelectorPart(_part):_part)+" "+separator+" ",startIndex=sep.lastIndex}var part=selector.substring(startIndex);return scopedSelector+=(shouldScope=shouldScope||part.indexOf("-shadowcsshost-no-combinator")>-1)?_scopeSelectorPart(part):part,function restoreSafeSelector(placeholders,content){return content.replace(/__ph-(\d+)__/g,(function(_,index){return placeholders[+index]}))}(safeContent.placeholders,scopedSelector)},scopeSelectors=function scopeSelectors(cssText,scopeSelectorText,hostSelector,slotSelector,commentOriginalSelector){return processRules(cssText,(function(rule){var selector=rule.selector,content=rule.content;return"@"!==rule.selector[0]?selector=function scopeSelector(selector,scopeSelectorText,hostSelector,slotSelector){return selector.split(",").map((function(shallowPart){return slotSelector&&shallowPart.indexOf("."+slotSelector)>-1?shallowPart.trim():selectorNeedsScoping(shallowPart,scopeSelectorText)?applyStrictSelectorScope(shallowPart,scopeSelectorText,hostSelector).trim():shallowPart.trim()})).join(", ")}(rule.selector,scopeSelectorText,hostSelector,slotSelector):(rule.selector.startsWith("@media")||rule.selector.startsWith("@supports")||rule.selector.startsWith("@page")||rule.selector.startsWith("@document"))&&(content=scopeSelectors(rule.content,scopeSelectorText,hostSelector,slotSelector)),{selector:selector.replace(/\s{2,}/g," ").trim(),content:content}}))},scopeCssText=function scopeCssText(cssText,scopeId,hostScopeId,slotScopeId,commentOriginalSelector){var slotted=function convertColonSlotted(cssText,slotScopeId){var slotClass="."+slotScopeId+" > ",selectors=[];return cssText=cssText.replace(_cssColonSlottedRe,(function(){for(var _len2=arguments.length,m=new Array(_len2),_key2=0;_key2<_len2;_key2++)m[_key2]=arguments[_key2];if(m[2]){for(var compound=m[2].trim(),suffix=m[3],slottedSelector=slotClass+compound+suffix,prefixSelector="",i=m[4]-1;i>=0;i--){var _char=m[5][i];if("}"===_char||","===_char)break;prefixSelector=_char+prefixSelector}var orgSelector=prefixSelector+slottedSelector,addedSelector=""+prefixSelector.trimRight()+slottedSelector.trim();if(orgSelector.trim()!==addedSelector.trim()){var updatedSelector=addedSelector+", "+orgSelector;selectors.push({orgSelector:orgSelector,updatedSelector:updatedSelector})}return slottedSelector}return"-shadowcsshost-no-combinator"+m[3]})),{selectors:selectors,cssText:cssText}}(cssText=function convertColonHostContext(cssText){return convertColonRule(cssText,_cssColonHostContextRe,colonHostContextPartReplacer)}(cssText=function convertColonHost(cssText){return convertColonRule(cssText,_cssColonHostRe,colonHostPartReplacer)}(cssText=function insertPolyfillHostInCssText(selector){return selector.replace(_colonHostContextRe,"-shadowcsscontext").replace(_colonHostRe,"-shadowcsshost").replace(_colonSlottedRe,"-shadowcssslotted")}(cssText))),slotScopeId);return cssText=function convertShadowDOMSelectors(cssText){return _shadowDOMSelectorsRe.reduce((function(result,pattern){return result.replace(pattern," ")}),cssText)}(cssText=slotted.cssText),scopeId&&(cssText=scopeSelectors(cssText,scopeId,hostScopeId,slotScopeId)),{cssText:(cssText=(cssText=cssText.replace(/-shadowcsshost-no-combinator/g,"."+hostScopeId)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:slotted.selectors}},scopeCss=function scopeCss(cssText,scopeId,commentOriginalSelector){var hostScopeId=scopeId+"-h",slotScopeId=scopeId+"-s",commentsWithHash=function extractCommentsWithHash(input){return input.match(_commentWithHashRe)||[]}(cssText);cssText=function stripComments(input){return input.replace(_commentRe,"")}(cssText);var orgSelectors=[];if(commentOriginalSelector){var processCommentedSelector=function processCommentedSelector(rule){var placeholder="/*!@___"+orgSelectors.length+"___*/",comment="/*!@"+rule.selector+"*/";return orgSelectors.push({placeholder:placeholder,comment:comment}),rule.selector=placeholder+rule.selector,rule};cssText=processRules(cssText,(function(rule){return"@"!==rule.selector[0]?processCommentedSelector(rule):rule.selector.startsWith("@media")||rule.selector.startsWith("@supports")||rule.selector.startsWith("@page")||rule.selector.startsWith("@document")?(rule.content=processRules(rule.content,processCommentedSelector),rule):rule}))}var scoped=scopeCssText(cssText,scopeId,hostScopeId,slotScopeId);return cssText=[scoped.cssText].concat(_toConsumableArray(commentsWithHash)).join("\n"),commentOriginalSelector&&orgSelectors.forEach((function(_ref){var placeholder=_ref.placeholder,comment=_ref.comment;cssText=cssText.replace(placeholder,comment)})),scoped.slottedSelectors.forEach((function(slottedSelector){cssText=cssText.replace(slottedSelector.orgSelector,slottedSelector.updatedSelector)})),cssText}},"./node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var global=__webpack_require__("./node_modules/core-js/internals/global.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),TypeError=global.TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"./node_modules/core-js/modules/es.array.reduce.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("./node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("./node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("./node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("./node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/es.string.trim-end.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$trimEnd=__webpack_require__("./node_modules/core-js/internals/string-trim.js").end,FORCED=__webpack_require__("./node_modules/core-js/internals/string-trim-forced.js")("trimEnd"),trimEnd=FORCED?function trimEnd(){return $trimEnd(this)}:"".trimEnd;$({target:"String",proto:!0,name:"trimEnd",forced:FORCED},{trimEnd:trimEnd,trimRight:trimEnd})}}]);
//# sourceMappingURL=12.7613e8d9.iframe.bundle.js.map