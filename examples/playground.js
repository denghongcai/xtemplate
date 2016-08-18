webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(332);


/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint no-console:0 */
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(36);
	var XTemplate = __webpack_require__(176);
	var textareaStyle = {
	  width: 600,
	  height: 200
	};
	var labelStyle = {
	  display: 'inline-block',
	  width: 100
	};
	
	function start() {
	  var data = {};
	  var dataContent = document.getElementById('data').value.trim();
	  if (dataContent) {
	    data = JSON.parse(dataContent);
	  }
	  console.log(new XTemplate(document.getElementById('template').value).render(data));
	}
	
	ReactDOM.render(React.createElement(
	  'div',
	  { style: { margin: 10 } },
	  React.createElement(
	    'div',
	    { style: { marginBottom: 10 } },
	    React.createElement(
	      'span',
	      { style: labelStyle },
	      'template:'
	    ),
	    React.createElement('textarea', {
	      style: textareaStyle,
	      id: 'template',
	      defaultValue: 'Hello {{world}}!'
	    })
	  ),
	  React.createElement(
	    'div',
	    { style: { marginBottom: 10 } },
	    React.createElement(
	      'span',
	      { style: labelStyle },
	      'data(json):'
	    ),
	    React.createElement('textarea', {
	      style: textareaStyle,
	      id: 'data',
	      defaultValue: '{ "world": "world"}'
	    })
	  ),
	  React.createElement(
	    'button',
	    { onClick: start },
	    'render to console'
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=playground.js.map