webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(331);


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint no-console:0 */
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(36);
	var XTemplate = __webpack_require__(176);
	
	var Test = React.createClass({
	  displayName: 'Test',
	  parse: function parse() {
	    var g = XTemplate.Compiler.parse(this.refs.tpl.value);
	    console.log(g);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement('link', { rel: 'stylesheet', href: '//g.tbcdn.cn/kissy/k/1.4.2/css/dpl/base.css' }),
	      React.createElement('link', { rel: 'stylesheet', href: '//g.tbcdn.cn/kissy/k/1.4.2/css/dpl/forms.css' }),
	      React.createElement('link', { rel: 'stylesheet', href: '//g.tbcdn.cn/kissy/k/1.4.2/button/assets/dpl.css' }),
	      React.createElement(
	        'div',
	        { className: 'container' },
	        React.createElement(
	          'div',
	          { className: 'row' },
	          React.createElement(
	            'div',
	            { className: 'span8' },
	            React.createElement(
	              'h2',
	              null,
	              '模板代码'
	            ),
	            React.createElement(
	              'div',
	              null,
	              React.createElement('textarea', {
	                style: { width: 350, height: 400 },
	                ref: 'tpl',
	                defaultValue: '\n                    {{3*4*5}}\n'
	              })
	            ),
	            React.createElement('br', null),
	            React.createElement(
	              'button',
	              { ref: 'parse', className: 'ks-button', onClick: this.parse },
	              'parse'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=parse.js.map