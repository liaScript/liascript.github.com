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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/elm/App.elm":
/*!*************************!*\
  !*** ./src/elm/App.elm ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.bu.ev === region.b_.ev)
	{
		return 'on line ' + region.bu.ev;
	}
	return 'on lines ' + region.bu.ev + ' through ' + region.b_.ev;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**_UNUSED/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ei,
		impl.fl,
		impl.e6,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.dY.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done(elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done(elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.dY.b, xhr)); });
		elm$core$Maybe$isJust(request.C) && _Http_track(router, xhr, request.C.a);

		try {
			xhr.open(request.y, request.bz, true);
		} catch (e) {
			return done(elm$http$Http$BadUrl_(request.bz));
		}

		_Http_configureRequest(xhr, request);

		request.dA.a && xhr.setRequestHeader('Content-Type', request.dA.a);
		xhr.send(request.dA.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.d6; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.B.a || 0;
	xhr.responseType = request.dY.d;
	xhr.withCredentials = request.V;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? elm$http$Http$GoodStatus_ : elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		bz: xhr.responseURL,
		c4: xhr.status,
		e4: xhr.statusText,
		d6: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return elm$core$Dict$empty;
	}

	var headers = elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(elm$core$Dict$update, key, function(oldValue) {
				return elm$core$Maybe$Just(elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2(elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, elm$http$Http$Sending({
			e0: event.loaded,
			aU: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2(elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, elm$http$Http$Receiving({
			eV: event.loaded,
			aU: event.lengthComputable ? elm$core$Maybe$Just(event.total) : elm$core$Maybe$Nothing
		}))));
	});
}

// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.cv) { flags += 'm'; }
	if (options.bL) { flags += 'i'; }

	try
	{
		return elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? elm$core$Maybe$Just(submatch)
				: elm$core$Maybe$Nothing;
		}
		out.push(A4(elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? elm$core$Maybe$Just(submatch)
				: elm$core$Maybe$Nothing;
		}
		return replacer(A4(elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^formAction$/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		ey: func(record.ey),
		bv: record.bv,
		bh: record.bh
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.ey;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bv;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.bh) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ei,
		impl.fl,
		impl.e6,
		function(sendToApp, initialModel) {
			var view = impl.fo;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.ei,
		impl.fl,
		impl.e6,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.au && impl.au(sendToApp)
			var view = impl.fo;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.dA);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.dd) && (_VirtualDom_doc.title = title = doc.dd);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.eN;
	var onUrlRequest = impl.eO;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		au: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.cF === next.cF
							&& curr.b9 === next.b9
							&& curr.cB.a === next.cB.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		ei: function(flags)
		{
			return A3(impl.ei, flags, _Browser_getUrl(), key);
		},
		fo: impl.fo,
		fl: impl.fl,
		e6: impl.e6
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { d8: 'hidden', dD: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { d8: 'mozHidden', dD: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { d8: 'msHidden', dD: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { d8: 'webkitHidden', dD: 'webkitvisibilitychange' }
		: { d8: 'hidden', dD: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		cS: _Browser_getScene(),
		di: {
			dn: _Browser_window.pageXOffset,
			ft: _Browser_window.pageYOffset,
			dm: _Browser_doc.documentElement.clientWidth,
			b8: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		dm: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		b8: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			cS: {
				dm: node.scrollWidth,
				b8: node.scrollHeight
			},
			di: {
				dn: node.scrollLeft,
				ft: node.scrollTop,
				dm: node.clientWidth,
				b8: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			cS: _Browser_getScene(),
			di: {
				dn: x,
				ft: y,
				dm: _Browser_doc.documentElement.clientWidth,
				b8: _Browser_doc.documentElement.clientHeight
			},
			dS: {
				dn: x + rect.left,
				ft: y + rect.top,
				dm: rect.width,
				b8: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$App$LinkClicked = function (a) {
	return {$: 3, a: a};
};
var author$project$App$UrlChanged = function (a) {
	return {$: 4, a: a};
};
var author$project$App$Idle = {$: 0};
var author$project$App$Load_ReadMe_Result = function (a) {
	return {$: 7, a: a};
};
var author$project$App$Loading = {$: 1};
var author$project$App$Model = F6(
	function (key, url, state, lia, code, size) {
		return {W: code, an: key, e: lia, aU: size, t: state, bz: url};
	});
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = 1;
var elm$core$Basics$LT = 0;
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = 2;
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0;
	return elm$core$Dict$keys(dict);
};
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$Red = 0;
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1) {
				case 0:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === -1) {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === -1) {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === -1) {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (!_n0.$) {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var elm$core$Basics$False = 1;
var elm$core$Basics$True = 0;
var elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.k) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.l),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.l);
		} else {
			var treeLen = builder.k * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.m) : builder.m;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.k);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.l) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.l);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{m: nodeList, k: (len / elm$core$Array$branchFactor) | 0, l: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 1) {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var elm$http$Http$NetworkError_ = {$: 2};
var elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var elm$http$Http$Timeout_ = {$: 1};
var elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			elm$core$Basics$identity,
			A2(elm$core$Basics$composeR, toResult, toMsg));
	});
var elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return elm$core$Result$Err(
				f(e));
		}
	});
var elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var elm$http$Http$NetworkError = {$: 2};
var elm$http$Http$Timeout = {$: 1};
var elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return elm$core$Result$Err(
					elm$http$Http$BadUrl(url));
			case 1:
				return elm$core$Result$Err(elm$http$Http$Timeout);
			case 2:
				return elm$core$Result$Err(elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return elm$core$Result$Err(
					elm$http$Http$BadStatus(metadata.c4));
			default:
				var body = response.b;
				return A2(
					elm$core$Result$mapError,
					elm$http$Http$BadBody,
					toResult(body));
		}
	});
var elm$http$Http$expectString = function (toMsg) {
	return A2(
		elm$http$Http$expectStringResponse,
		toMsg,
		elm$http$Http$resolve(elm$core$Result$Ok));
};
var elm$http$Http$emptyBody = _Http_emptyBody;
var elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$http$Http$State = F2(
	function (reqs, subs) {
		return {cH: reqs, c7: subs};
	});
var elm$http$Http$init = elm$core$Task$succeed(
	A2(elm$http$Http$State, elm$core$Dict$empty, _List_Nil));
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Process$kill = _Scheduler_kill;
var elm$core$Process$spawn = _Scheduler_spawn;
var elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (!cmd.$) {
					var tracker = cmd.a;
					var _n2 = A2(elm$core$Dict$get, tracker, reqs);
					if (_n2.$ === 1) {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _n2.a;
						return A2(
							elm$core$Task$andThen,
							function (_n3) {
								return A3(
									elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2(elm$core$Dict$remove, tracker, reqs));
							},
							elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						elm$core$Task$andThen,
						function (pid) {
							var _n4 = req.C;
							if (_n4.$ === 1) {
								return A3(elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _n4.a;
								return A3(
									elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3(elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			elm$core$Task$andThen,
			function (reqs) {
				return elm$core$Task$succeed(
					A2(elm$http$Http$State, reqs, subs));
			},
			A3(elm$http$Http$updateReqs, router, cmds, state.cH));
	});
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (!_n0.$) {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _n0) {
		var actualTracker = _n0.a;
		var toMsg = _n0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? elm$core$Maybe$Just(
			A2(
				elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : elm$core$Maybe$Nothing;
	});
var elm$http$Http$onSelfMsg = F3(
	function (router, _n0, state) {
		var tracker = _n0.a;
		var progress = _n0.b;
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$filterMap,
					A3(elm$http$Http$maybeSend, router, tracker, progress),
					state.c7)));
	});
var elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return elm$http$Http$Request(
				{
					V: r.V,
					dA: r.dA,
					dY: A2(_Http_mapExpect, func, r.dY),
					d6: r.d6,
					y: r.y,
					B: r.B,
					C: r.C,
					bz: r.bz
				});
		}
	});
var elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$http$Http$subMap = F2(
	function (func, _n0) {
		var tracker = _n0.a;
		var toMsg = _n0.b;
		return A2(
			elm$http$Http$MySub,
			tracker,
			A2(elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager(elm$http$Http$init, elm$http$Http$onEffects, elm$http$Http$onSelfMsg, elm$http$Http$cmdMap, elm$http$Http$subMap);
var elm$http$Http$command = _Platform_leaf('Http');
var elm$http$Http$subscription = _Platform_leaf('Http');
var elm$http$Http$request = function (r) {
	return elm$http$Http$command(
		elm$http$Http$Request(
			{V: false, dA: r.dA, dY: r.dY, d6: r.d6, y: r.y, B: r.B, C: r.C, bz: r.bz}));
};
var elm$http$Http$get = function (r) {
	return elm$http$Http$request(
		{dA: elm$http$Http$emptyBody, dY: r.dY, d6: _List_Nil, y: 'GET', B: elm$core$Maybe$Nothing, C: elm$core$Maybe$Nothing, bz: r.bz});
};
var author$project$App$download = F2(
	function (msg, url) {
		return elm$http$Http$get(
			{
				dY: elm$http$Http$expectString(msg),
				bz: url
			});
	});
var elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + elm$core$String$fromInt(port_));
		}
	});
var elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var elm$url$Url$toString = function (url) {
	var http = function () {
		var _n0 = url.cF;
		switch (_n0) {
			case 0:
				return 'http://';
			case 1:
				return 'https://';
			case 2:
				return 'file://';
			default:
				return 'file:///';
		}
	}();
	return A3(
		elm$url$Url$addPrefixed,
		'#',
		url.a0,
		A3(
			elm$url$Url$addPrefixed,
			'?',
			url.ag,
			_Utils_ap(
				A2(
					elm$url$Url$addPort,
					url.cB,
					_Utils_ap(http, url.b9)),
				url.cz)));
};
var author$project$App$get_base = function (url) {
	return elm$url$Url$toString(
		_Utils_update(
			url,
			{a0: elm$core$Maybe$Nothing}));
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var author$project$App$get_origin = function (query) {
	if (!query.$) {
		var url = query.a;
		return A2(
			elm$core$String$join,
			'/',
			elm$core$List$reverse(
				A2(
					elm$core$List$drop,
					1,
					elm$core$List$reverse(
						A2(elm$core$String$split, '/', url))))) + '/';
	} else {
		return '';
	}
};
var author$project$App$Error = function (a) {
	return {$: 4, a: a};
};
var author$project$App$LiaParse = {$: 2};
var author$project$App$Load_Template_Result = function (a) {
	return {$: 8, a: a};
};
var author$project$App$Parsing = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Process$sleep = _Process_sleep;
var elm$core$Task$Perform = elm$core$Basics$identity;
var elm$core$Task$init = elm$core$Task$succeed(0);
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return 0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0;
		return A2(elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			A2(elm$core$Task$map, toMessage, task));
	});
var author$project$App$message = function (msg) {
	return A2(
		elm$core$Task$perform,
		elm$core$Basics$identity,
		A2(
			elm$core$Task$andThen,
			elm$core$Basics$always(
				elm$core$Task$succeed(msg)),
			elm$core$Process$sleep(0)));
};
var andre_dietrich$parser_combinators$Combine$app = function (_n0) {
	var inner = _n0;
	return inner;
};
var andre_dietrich$parser_combinators$Combine$InputStream = F3(
	function (data, input, position) {
		return {bQ: data, D: input, K: position};
	});
var andre_dietrich$parser_combinators$Combine$initStream = function (s) {
	return A3(andre_dietrich$parser_combinators$Combine$InputStream, s, s, 0);
};
var andre_dietrich$parser_combinators$Combine$runParser = F3(
	function (p, st, s) {
		var _n0 = A3(
			andre_dietrich$parser_combinators$Combine$app,
			p,
			st,
			andre_dietrich$parser_combinators$Combine$initStream(s));
		if (!_n0.c.$) {
			var state = _n0.a;
			var stream = _n0.b;
			var res = _n0.c.a;
			return elm$core$Result$Ok(
				_Utils_Tuple3(state, stream, res));
		} else {
			var state = _n0.a;
			var stream = _n0.b;
			var ms = _n0.c.a;
			return elm$core$Result$Err(
				_Utils_Tuple3(state, stream, ms));
		}
	});
var andre_dietrich$parser_combinators$Combine$Parser = elm$core$Basics$identity;
var andre_dietrich$parser_combinators$Combine$andThen = F2(
	function (f, p) {
		return F2(
			function (state, stream) {
				var _n0 = A3(andre_dietrich$parser_combinators$Combine$app, p, state, stream);
				if (!_n0.c.$) {
					var rstate = _n0.a;
					var rstream = _n0.b;
					var res = _n0.c.a;
					return A3(
						andre_dietrich$parser_combinators$Combine$app,
						f(res),
						rstate,
						rstream);
				} else {
					var estate = _n0.a;
					var estream = _n0.b;
					var ms = _n0.c.a;
					return _Utils_Tuple3(
						estate,
						estream,
						elm$core$Result$Err(ms));
				}
			});
	});
var andre_dietrich$parser_combinators$Combine$bimap = F3(
	function (fok, ferr, p) {
		return F2(
			function (state, stream) {
				var _n0 = A3(andre_dietrich$parser_combinators$Combine$app, p, state, stream);
				if (!_n0.c.$) {
					var rstate = _n0.a;
					var rstream = _n0.b;
					var res = _n0.c.a;
					return _Utils_Tuple3(
						rstate,
						rstream,
						elm$core$Result$Ok(
							fok(res)));
				} else {
					var estate = _n0.a;
					var estream = _n0.b;
					var ms = _n0.c.a;
					return _Utils_Tuple3(
						estate,
						estream,
						elm$core$Result$Err(
							ferr(ms)));
				}
			});
	});
var andre_dietrich$parser_combinators$Combine$map = F2(
	function (f, p) {
		return A3(andre_dietrich$parser_combinators$Combine$bimap, f, elm$core$Basics$identity, p);
	});
var pilatch$flip$Flip$flip = F3(
	function (_function, argB, argA) {
		return A2(_function, argA, argB);
	});
var andre_dietrich$parser_combinators$Combine$andMap = F2(
	function (rp, lp) {
		return A2(
			andre_dietrich$parser_combinators$Combine$andThen,
			A2(pilatch$flip$Flip$flip, andre_dietrich$parser_combinators$Combine$map, rp),
			lp);
	});
var andre_dietrich$parser_combinators$Combine$ignore = F2(
	function (p1, p2) {
		return A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			p1,
			A2(andre_dietrich$parser_combinators$Combine$map, elm$core$Basics$always, p2));
	});
var andre_dietrich$parser_combinators$Combine$keep = F2(
	function (p1, p2) {
		return A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			p1,
			A2(
				andre_dietrich$parser_combinators$Combine$map,
				pilatch$flip$Flip$flip(elm$core$Basics$always),
				p2));
	});
var andre_dietrich$parser_combinators$Combine$succeed = function (res) {
	return F2(
		function (state, stream) {
			return _Utils_Tuple3(
				state,
				stream,
				elm$core$Result$Ok(res));
		});
};
var andre_dietrich$parser_combinators$Combine$lazy = function (t) {
	return A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		t,
		andre_dietrich$parser_combinators$Combine$succeed(0));
};
var andre_dietrich$parser_combinators$Combine$maybe = function (p) {
	return F2(
		function (state, stream) {
			var _n0 = A3(andre_dietrich$parser_combinators$Combine$app, p, state, stream);
			if (!_n0.c.$) {
				var rstate = _n0.a;
				var rstream = _n0.b;
				var res = _n0.c.a;
				return _Utils_Tuple3(
					rstate,
					rstream,
					elm$core$Result$Ok(
						elm$core$Maybe$Just(res)));
			} else {
				return _Utils_Tuple3(
					state,
					stream,
					elm$core$Result$Ok(elm$core$Maybe$Nothing));
			}
		});
};
var andre_dietrich$parser_combinators$Combine$modifyState = function (f) {
	return F2(
		function (state, stream) {
			return A3(
				andre_dietrich$parser_combinators$Combine$app,
				andre_dietrich$parser_combinators$Combine$succeed(0),
				f(state),
				stream);
		});
};
var andre_dietrich$parser_combinators$Combine$onsuccess = function (res) {
	return andre_dietrich$parser_combinators$Combine$map(
		elm$core$Basics$always(res));
};
var andre_dietrich$parser_combinators$Combine$skip = function (p) {
	return A2(andre_dietrich$parser_combinators$Combine$onsuccess, 0, p);
};
var andre_dietrich$parser_combinators$Combine$mapError = andre_dietrich$parser_combinators$Combine$bimap(elm$core$Basics$identity);
var andre_dietrich$parser_combinators$Combine$onerror = F2(
	function (m, p) {
		return A2(
			andre_dietrich$parser_combinators$Combine$mapError,
			elm$core$Basics$always(
				_List_fromArray(
					[m])),
			p);
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {ef: index, ap: match, eM: number, e5: submatches};
	});
var elm$regex$Regex$findAtMost = _Regex_findAtMost;
var elm$regex$Regex$never = _Regex_never;
var andre_dietrich$parser_combinators$Combine$regexer = F5(
	function (input, output, pat, state, stream) {
		var pattern = A2(elm$core$String$startsWith, '^', pat) ? pat : ('^' + pat);
		var _n0 = A3(
			elm$regex$Regex$findAtMost,
			1,
			A2(
				elm$core$Maybe$withDefault,
				elm$regex$Regex$never,
				input(pattern)),
			stream.D);
		if (_n0.b && (!_n0.b.b)) {
			var match = _n0.a;
			var len = elm$core$String$length(match.ap);
			var pos = stream.K + len;
			var rem = A2(elm$core$String$dropLeft, len, stream.D);
			return _Utils_Tuple3(
				state,
				_Utils_update(
					stream,
					{D: rem, K: pos}),
				elm$core$Result$Ok(
					output(match)));
		} else {
			return _Utils_Tuple3(
				state,
				stream,
				elm$core$Result$Err(
					_List_fromArray(
						['expected input matching Regexp /' + (pattern + '/')])));
		}
	});
var elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var elm$regex$Regex$fromString = function (string) {
	return A2(
		elm$regex$Regex$fromStringWith,
		{bL: false, cv: false},
		string);
};
var andre_dietrich$parser_combinators$Combine$regex = A2(
	elm$core$Basics$composeR,
	A2(
		andre_dietrich$parser_combinators$Combine$regexer,
		elm$regex$Regex$fromString,
		function ($) {
			return $.ap;
		}),
	elm$core$Basics$identity);
var andre_dietrich$parser_combinators$Combine$whitespace = A2(
	andre_dietrich$parser_combinators$Combine$onerror,
	'optional whitespace',
	andre_dietrich$parser_combinators$Combine$regex('\\s*'));
var andre_dietrich$parser_combinators$Combine$emptyErr = F2(
	function (state, stream) {
		return _Utils_Tuple3(
			state,
			stream,
			elm$core$Result$Err(_List_Nil));
	});
var andre_dietrich$parser_combinators$Combine$or = F2(
	function (lp, rp) {
		return F2(
			function (state, stream) {
				var _n0 = A3(andre_dietrich$parser_combinators$Combine$app, lp, state, stream);
				if (!_n0.c.$) {
					var res = _n0;
					return res;
				} else {
					var lms = _n0.c.a;
					var _n1 = A3(andre_dietrich$parser_combinators$Combine$app, rp, state, stream);
					if (!_n1.c.$) {
						var res = _n1;
						return res;
					} else {
						var rms = _n1.c.a;
						return _Utils_Tuple3(
							state,
							stream,
							elm$core$Result$Err(
								_Utils_ap(lms, rms)));
					}
				}
			});
	});
var andre_dietrich$parser_combinators$Combine$choice = function (xs) {
	return A3(elm$core$List$foldr, andre_dietrich$parser_combinators$Combine$or, andre_dietrich$parser_combinators$Combine$emptyErr, xs);
};
var andre_dietrich$parser_combinators$Combine$many = function (p) {
	var accumulate = F3(
		function (acc, state, stream) {
			accumulate:
			while (true) {
				var _n0 = A3(andre_dietrich$parser_combinators$Combine$app, p, state, stream);
				if (!_n0.c.$) {
					var rstate = _n0.a;
					var rstream = _n0.b;
					var res = _n0.c.a;
					if (_Utils_eq(stream, rstream)) {
						return _Utils_Tuple3(
							rstate,
							rstream,
							elm$core$List$reverse(acc));
					} else {
						var $temp$acc = A2(elm$core$List$cons, res, acc),
							$temp$state = rstate,
							$temp$stream = rstream;
						acc = $temp$acc;
						state = $temp$state;
						stream = $temp$stream;
						continue accumulate;
					}
				} else {
					return _Utils_Tuple3(
						state,
						stream,
						elm$core$List$reverse(acc));
				}
			}
		});
	return F2(
		function (state, stream) {
			var _n1 = A3(accumulate, _List_Nil, state, stream);
			var rstate = _n1.a;
			var rstream = _n1.b;
			var res = _n1.c;
			return _Utils_Tuple3(
				rstate,
				rstream,
				elm$core$Result$Ok(res));
		});
};
var andre_dietrich$parser_combinators$Combine$many1 = function (p) {
	return A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		andre_dietrich$parser_combinators$Combine$many(p),
		A2(andre_dietrich$parser_combinators$Combine$map, elm$core$List$cons, p));
};
var andre_dietrich$parser_combinators$Combine$string = function (s) {
	return F2(
		function (state, stream) {
			if (A2(elm$core$String$startsWith, s, stream.D)) {
				var len = elm$core$String$length(s);
				var pos = stream.K + len;
				var rem = A2(elm$core$String$dropLeft, len, stream.D);
				return _Utils_Tuple3(
					state,
					_Utils_update(
						stream,
						{D: rem, K: pos}),
					elm$core$Result$Ok(s));
			} else {
				return _Utils_Tuple3(
					state,
					stream,
					elm$core$Result$Err(
						_List_fromArray(
							['expected \"' + (s + '\"')])));
			}
		});
};
var andre_dietrich$parser_combinators$Combine$manyTill = F2(
	function (p, end_) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _n0 = A3(andre_dietrich$parser_combinators$Combine$app, end_, state, stream);
					if (!_n0.c.$) {
						var rstate = _n0.a;
						var rstream = _n0.b;
						return _Utils_Tuple3(
							rstate,
							rstream,
							elm$core$Result$Ok(
								elm$core$List$reverse(acc)));
					} else {
						var estate = _n0.a;
						var estream = _n0.b;
						var ms = _n0.c.a;
						var _n1 = A3(andre_dietrich$parser_combinators$Combine$app, p, state, stream);
						if (!_n1.c.$) {
							var rstate = _n1.a;
							var rstream = _n1.b;
							var res = _n1.c.a;
							var $temp$acc = A2(elm$core$List$cons, res, acc),
								$temp$state = rstate,
								$temp$stream = rstream;
							acc = $temp$acc;
							state = $temp$state;
							stream = $temp$stream;
							continue accumulate;
						} else {
							return _Utils_Tuple3(
								estate,
								estream,
								elm$core$Result$Err(ms));
						}
					}
				}
			});
		return accumulate(_List_Nil);
	});
var andre_dietrich$parser_combinators$Combine$optional = F2(
	function (res, p) {
		return A2(
			andre_dietrich$parser_combinators$Combine$or,
			p,
			andre_dietrich$parser_combinators$Combine$succeed(res));
	});
var andre_dietrich$parser_combinators$Combine$fail = function (m) {
	return F2(
		function (state, stream) {
			return _Utils_Tuple3(
				state,
				stream,
				elm$core$Result$Err(
					_List_fromArray(
						[m])));
		});
};
var andre_dietrich$parser_combinators$Combine$Num$unwrap = function (value) {
	if (!value.$) {
		var v = value.a;
		return andre_dietrich$parser_combinators$Combine$succeed(v);
	} else {
		return andre_dietrich$parser_combinators$Combine$fail('impossible state in Combine.Num.unwrap');
	}
};
var elm$core$String$toInt = _String_toInt;
var andre_dietrich$parser_combinators$Combine$Num$int = A2(
	andre_dietrich$parser_combinators$Combine$onerror,
	'expected an int',
	A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		andre_dietrich$parser_combinators$Combine$Num$unwrap,
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			elm$core$String$toInt,
			andre_dietrich$parser_combinators$Combine$regex('-?(?:0|[1-9]\\d*)'))));
var author$project$Lia$Markdown$Effect$Parser$effect_number = function () {
	var state = function (n) {
		return A2(
			andre_dietrich$parser_combinators$Combine$keep,
			andre_dietrich$parser_combinators$Combine$succeed(n),
			andre_dietrich$parser_combinators$Combine$modifyState(
				function (s) {
					return _Utils_update(
						s,
						{
							M: function () {
								if (_Utils_cmp(n, s.M.dR) > 0) {
									var e = s.M;
									return _Utils_update(
										e,
										{dR: n});
								} else {
									return s.M;
								}
							}(),
							aK: A2(elm$core$List$cons, n, s.aK)
						});
				}));
	};
	return A2(andre_dietrich$parser_combinators$Combine$andThen, state, andre_dietrich$parser_combinators$Combine$Num$int);
}();
var author$project$Lia$Markdown$Effect$Parser$reset_effect_number = andre_dietrich$parser_combinators$Combine$modifyState(
	function (s) {
		return _Utils_update(
			s,
			{
				aK: A2(elm$core$List$drop, 1, s.aK)
			});
	});
var author$project$Lia$Markdown$Inline$Types$EInline = F4(
	function (a, b, c, d) {
		return {$: 12, a: a, b: b, c: c, d: d};
	});
var author$project$Lia$Markdown$Effect$Parser$inline = function (inlines) {
	return A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Markdown$Effect$Parser$reset_effect_number,
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			A2(
				andre_dietrich$parser_combinators$Combine$manyTill,
				inlines,
				andre_dietrich$parser_combinators$Combine$string('}')),
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string('}{'),
				A2(
					andre_dietrich$parser_combinators$Combine$andMap,
					A2(
						andre_dietrich$parser_combinators$Combine$optional,
						99999,
						A2(
							andre_dietrich$parser_combinators$Combine$keep,
							andre_dietrich$parser_combinators$Combine$Num$int,
							andre_dietrich$parser_combinators$Combine$regex('[\t ]*-[\t ]*'))),
					A2(
						andre_dietrich$parser_combinators$Combine$map,
						author$project$Lia$Markdown$Inline$Types$EInline,
						A2(
							andre_dietrich$parser_combinators$Combine$keep,
							author$project$Lia$Markdown$Effect$Parser$effect_number,
							andre_dietrich$parser_combinators$Combine$string('{')))))));
};
var author$project$Lia$Markdown$Footnote$Model$insert = F3(
	function (key, val, model) {
		return A3(elm$core$Dict$insert, key, val, model);
	});
var author$project$Lia$Markdown$Footnote$Parser$add_footnote = function (_n0) {
	var key = _n0.a;
	var val = _n0.b;
	return andre_dietrich$parser_combinators$Combine$modifyState(
		function (s) {
			return _Utils_update(
				s,
				{
					b5: A3(author$project$Lia$Markdown$Footnote$Model$insert, key, val, s.b5)
				});
		});
};
var author$project$Lia$Markdown$Inline$Types$Chars = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Types$FootnoteMark = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var author$project$Lia$Markdown$Types$Paragraph = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$Lia$Markdown$Footnote$Parser$store = function (_n0) {
	var key = _n0.a;
	var val = _n0.b;
	if (!val.$) {
		var v = val.a;
		return A2(
			andre_dietrich$parser_combinators$Combine$keep,
			andre_dietrich$parser_combinators$Combine$succeed(
				author$project$Lia$Markdown$Inline$Types$FootnoteMark(key)),
			author$project$Lia$Markdown$Footnote$Parser$add_footnote(
				_Utils_Tuple2(
					key,
					_List_fromArray(
						[
							A2(
							author$project$Lia$Markdown$Types$Paragraph,
							elm$core$Maybe$Nothing,
							_List_fromArray(
								[
									A2(author$project$Lia$Markdown$Inline$Types$Chars, v, elm$core$Maybe$Nothing)
								]))
						]))));
	} else {
		return andre_dietrich$parser_combinators$Combine$succeed(
			author$project$Lia$Markdown$Inline$Types$FootnoteMark(key));
	}
};
var andre_dietrich$parser_combinators$Combine$primitive = elm$core$Basics$identity;
var andre_dietrich$parser_combinators$Combine$Char$satisfy = function (pred) {
	return andre_dietrich$parser_combinators$Combine$primitive(
		F2(
			function (state, stream) {
				var message = 'could not satisfy predicate';
				var _n0 = elm$core$String$uncons(stream.D);
				if (!_n0.$) {
					var _n1 = _n0.a;
					var h = _n1.a;
					var rest = _n1.b;
					return pred(h) ? _Utils_Tuple3(
						state,
						_Utils_update(
							stream,
							{D: rest, K: stream.K + 1}),
						elm$core$Result$Ok(h)) : _Utils_Tuple3(
						state,
						stream,
						elm$core$Result$Err(
							_List_fromArray(
								[message])));
				} else {
					return _Utils_Tuple3(
						state,
						stream,
						elm$core$Result$Err(
							_List_fromArray(
								[message])));
				}
			}));
};
var andre_dietrich$parser_combinators$Combine$Char$anyChar = A2(
	andre_dietrich$parser_combinators$Combine$onerror,
	'expected any character',
	andre_dietrich$parser_combinators$Combine$Char$satisfy(
		elm$core$Basics$always(true)));
var elm$core$String$fromList = _String_fromList;
var author$project$Lia$Parser$Helper$stringTill = function (p) {
	return A2(
		andre_dietrich$parser_combinators$Combine$map,
		elm$core$String$fromList,
		A2(andre_dietrich$parser_combinators$Combine$manyTill, andre_dietrich$parser_combinators$Combine$Char$anyChar, p));
};
var elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var author$project$Lia$Markdown$Footnote$Parser$inline = A2(
	andre_dietrich$parser_combinators$Combine$andThen,
	author$project$Lia$Markdown$Footnote$Parser$store,
	A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		andre_dietrich$parser_combinators$Combine$maybe(
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Parser$Helper$stringTill(
					andre_dietrich$parser_combinators$Combine$string(')')),
				andre_dietrich$parser_combinators$Combine$string('('))),
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			elm$core$Tuple$pair,
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Parser$Helper$stringTill(
					andre_dietrich$parser_combinators$Combine$string(']')),
				andre_dietrich$parser_combinators$Combine$string('[^')))));
var author$project$Lia$Markdown$Inline$Multimedia$regex = function (pattern) {
	return A2(
		elm$core$Maybe$withDefault,
		elm$regex$Regex$never,
		elm$regex$Regex$fromString(pattern));
};
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Lia$Markdown$Inline$Multimedia$check = F2(
	function (pattern, url) {
		var _n0 = A3(elm$regex$Regex$findAtMost, 1, pattern, url);
		if (_n0.b && (!_n0.b.b)) {
			var match = _n0.a;
			return A2(
				elm$core$Maybe$withDefault,
				elm$core$Maybe$Nothing,
				elm$core$List$head(match.e5));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Lia$Markdown$Inline$Multimedia$search = F2(
	function (patterns, url) {
		search:
		while (true) {
			if (patterns.b) {
				var t = patterns.a;
				var ts = patterns.b;
				var _n1 = A2(author$project$Lia$Markdown$Inline$Multimedia$check, t.ae, url);
				if (!_n1.$) {
					var str = _n1.a;
					return _Utils_Tuple2(
						true,
						t.Y(str));
				} else {
					var $temp$patterns = ts,
						$temp$url = url;
					patterns = $temp$patterns;
					url = $temp$url;
					continue search;
				}
			} else {
				return _Utils_Tuple2(false, url);
			}
		}
	});
var author$project$Lia$Markdown$Inline$Multimedia$audio = author$project$Lia$Markdown$Inline$Multimedia$search(
	_List_fromArray(
		[
			{
			Y: function (w) {
				return 'https://w.soundcloud.com/player/?url=https://soundcloud.com/' + w;
			},
			ae: author$project$Lia$Markdown$Inline$Multimedia$regex('https?:\\/\\/(?:w\\.|www\\.|)(?:soundcloud\\.com\\/)(?:(?:player\\/\\?url=https\\%3A\\/\\/api.soundcloud.com\\/tracks\\/)|)(((\\w|-)[^A-z]{7})|([A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*(?!\\/sets(?:\\/|$))(?:\\/[A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*){1,2}))')
		}
		]));
var author$project$Lia$Markdown$Inline$Multimedia$movie = author$project$Lia$Markdown$Inline$Multimedia$search(
	_List_fromArray(
		[
			{
			Y: function (w) {
				return 'https://www.youtube.com/embed/' + w;
			},
			ae: author$project$Lia$Markdown$Inline$Multimedia$regex('(?:http(?:s)?://)?(?:www\\.)?(?:youtu\\.be/|youtube\\.com/(?:(?:watch)?\\?(?:.*&)?v(?:i)?=|(?:v|vi|user)/))([^\\?&\"\'<> #]+)')
		},
			{
			Y: function (w) {
				return 'https://player.vimeo.com/video/' + w;
			},
			ae: author$project$Lia$Markdown$Inline$Multimedia$regex('(?:http(?:s)?://)?(?:www\\.)?(?:player.)?(?:vimeo\\.com).*?(\\d+)')
		},
			{
			Y: function (w) {
				return 'https://www.teachertube.com/embed/video/' + w;
			},
			ae: author$project$Lia$Markdown$Inline$Multimedia$regex('(?:http(?:s)?://)?(?:www\\.)?(?:teachertube\\.com).*?(\\d+)')
		}
		]));
var author$project$Lia$Markdown$Inline$Parser$attr_ = function (dict) {
	return A3(
		elm$core$Dict$insert,
		'style',
		function () {
			var _n0 = A2(elm$core$Dict$get, 'style', dict);
			if (!_n0.$) {
				var value = _n0.a;
				return 'display: inline-block;' + value;
			} else {
				return 'display: inline-block;';
			}
		}(),
		dict);
};
var elm$core$String$toLower = _String_toLower;
var author$project$Lia$Markdown$Inline$Parser$attribute = A2(
	andre_dietrich$parser_combinators$Combine$andMap,
	author$project$Lia$Parser$Helper$stringTill(
		andre_dietrich$parser_combinators$Combine$regex('\"[ \t\n]*')),
	A2(
		andre_dietrich$parser_combinators$Combine$map,
		F2(
			function (k, v) {
				return _Utils_Tuple2(
					elm$core$String$toLower(k),
					v);
			}),
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$regex('[ \t\n]*=[ \t\n]*\"'),
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				andre_dietrich$parser_combinators$Combine$regex('\\w+'),
				andre_dietrich$parser_combinators$Combine$whitespace))));
var author$project$Lia$Markdown$Inline$Parser$comment = function (p) {
	return A2(
		andre_dietrich$parser_combinators$Combine$keep,
		A2(
			andre_dietrich$parser_combinators$Combine$manyTill,
			p,
			andre_dietrich$parser_combinators$Combine$string('-->')),
		andre_dietrich$parser_combinators$Combine$string('<!--'));
};
var author$project$Lia$Markdown$Effect$Model$Element = F3(
	function (narrator, comment, paragraphs) {
		return {dI: comment, eE: narrator, ad: paragraphs};
	});
var andre_dietrich$parser_combinators$Combine$withState = function (f) {
	return F2(
		function (state, stream) {
			return A3(
				andre_dietrich$parser_combinators$Combine$app,
				f(state),
				state,
				stream);
		});
};
var elm$core$Array$length = function (_n0) {
	var len = _n0.a;
	return len;
};
var author$project$Lia$Markdown$Effect$Parser$get_counter = function (idx) {
	return andre_dietrich$parser_combinators$Combine$withState(
		function (s) {
			return andre_dietrich$parser_combinators$Combine$succeed(
				function () {
					var _n0 = A2(elm$core$Dict$get, idx, s.M.aG);
					if (!_n0.$) {
						var e = _n0.a;
						return elm$core$Array$length(e.ad) - 1;
					} else {
						return 0;
					}
				}());
		});
};
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var author$project$Lia$Markdown$Inline$Stringify$inline2string = function (inline) {
	inline2string:
	while (true) {
		switch (inline.$) {
			case 0:
				var str = inline.a;
				return str;
			case 2:
				var x = inline.a;
				var $temp$inline = x;
				inline = $temp$inline;
				continue inline2string;
			case 3:
				var x = inline.a;
				var $temp$inline = x;
				inline = $temp$inline;
				continue inline2string;
			case 4:
				var x = inline.a;
				var $temp$inline = x;
				inline = $temp$inline;
				continue inline2string;
			case 5:
				var x = inline.a;
				var $temp$inline = x;
				inline = $temp$inline;
				continue inline2string;
			case 6:
				var x = inline.a;
				var $temp$inline = x;
				inline = $temp$inline;
				continue inline2string;
			case 7:
				var str = inline.a;
				return str;
			case 8:
				var str = inline.b;
				return str;
			case 9:
				var ref = inline.a;
				return author$project$Lia$Markdown$Inline$Stringify$ref2string(ref);
			case 12:
				var inlines = inline.c;
				return author$project$Lia$Markdown$Inline$Stringify$stringify(inlines);
			case 13:
				var inlines = inline.a;
				return author$project$Lia$Markdown$Inline$Stringify$stringify(inlines);
			default:
				return '';
		}
	}
};
var author$project$Lia$Markdown$Inline$Stringify$ref2string = function (ref) {
	switch (ref.$) {
		case 4:
			var alt = ref.a;
			return author$project$Lia$Markdown$Inline$Stringify$stringify(alt);
		case 2:
			var alt = ref.a;
			return author$project$Lia$Markdown$Inline$Stringify$stringify(alt);
		case 3:
			var alt = ref.a;
			return author$project$Lia$Markdown$Inline$Stringify$stringify(alt);
		case 0:
			var alt = ref.a;
			return author$project$Lia$Markdown$Inline$Stringify$stringify(alt);
		default:
			var alt = ref.a;
			return author$project$Lia$Markdown$Inline$Stringify$stringify(alt);
	}
};
var author$project$Lia$Markdown$Inline$Stringify$stringify = function (inlines) {
	return elm$core$String$concat(
		A2(elm$core$List$map, author$project$Lia$Markdown$Inline$Stringify$inline2string, inlines));
};
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{m: nodeList, k: nodeListSize, l: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Elm$JsArray$push = _JsArray_push;
var elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					elm$core$Elm$JsArray$push,
					elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = elm$core$Array$SubTree(
					A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, elm$core$Elm$JsArray$empty));
				return A2(elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!value.$) {
				var subTree = value.a;
				var newSub = elm$core$Array$SubTree(
					A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, subTree));
				return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = elm$core$Array$SubTree(
					A4(
						elm$core$Array$insertTailInTree,
						shift - elm$core$Array$shiftStep,
						index,
						tail,
						elm$core$Elm$JsArray$singleton(value)));
				return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		var originalTailLen = elm$core$Elm$JsArray$length(tail);
		var newTailLen = elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + elm$core$Array$shiftStep;
				var newTree = A4(
					elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					elm$core$Elm$JsArray$singleton(
						elm$core$Array$SubTree(tree)));
				return A4(elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4(elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4(elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			elm$core$Array$unsafeReplaceTail,
			A2(elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$String$trim = _String_trim;
var author$project$Lia$Markdown$Effect$Parser$add_comment = F2(
	function (visible, _n0) {
		var idx = _n0.a;
		var temp_narrator = _n0.b;
		var par = _n0.c;
		var rslt = function (id2) {
			return andre_dietrich$parser_combinators$Combine$succeed(
				_Utils_Tuple2(idx, id2));
		};
		var mod = function (s) {
			var narrator = A2(
				elm$core$Maybe$withDefault,
				s.bV.eE,
				A2(elm$core$Maybe$map, elm$core$String$trim, temp_narrator));
			return _Utils_update(
				s,
				{
					M: function () {
						var e = s.M;
						return _Utils_update(
							e,
							{
								aG: function () {
									var _n1 = A2(elm$core$Dict$get, idx, e.aG);
									if (!_n1.$) {
										var cmt = _n1.a;
										return A3(
											elm$core$Dict$insert,
											idx,
											visible ? _Utils_update(
												cmt,
												{
													dI: cmt.dI + ('\n' + author$project$Lia$Markdown$Inline$Stringify$stringify(par)),
													ad: A2(
														elm$core$Array$push,
														_Utils_Tuple2(elm$core$Maybe$Nothing, par),
														cmt.ad)
												}) : _Utils_update(
												cmt,
												{
													dI: cmt.dI + ('\n' + author$project$Lia$Markdown$Inline$Stringify$stringify(par))
												}),
											e.aG);
									} else {
										return A3(
											elm$core$Dict$insert,
											idx,
											A3(
												author$project$Lia$Markdown$Effect$Model$Element,
												narrator,
												author$project$Lia$Markdown$Inline$Stringify$stringify(par),
												elm$core$Array$fromList(
													visible ? _List_fromArray(
														[
															_Utils_Tuple2(elm$core$Maybe$Nothing, par)
														]) : _List_Nil)),
											e.aG);
									}
								}()
							});
					}()
				});
		};
		return A2(
			andre_dietrich$parser_combinators$Combine$andThen,
			rslt,
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Markdown$Effect$Parser$get_counter(idx),
				andre_dietrich$parser_combinators$Combine$modifyState(mod)));
	});
var andre_dietrich$parser_combinators$Combine$modifyStream = function (f) {
	return F2(
		function (state, stream) {
			return A3(
				andre_dietrich$parser_combinators$Combine$app,
				andre_dietrich$parser_combinators$Combine$succeed(0),
				state,
				_Utils_update(
					stream,
					{
						D: f(stream.D)
					}));
		});
};
var andre_dietrich$parser_combinators$Combine$putState = function (state) {
	return F2(
		function (_n0, stream) {
			return A3(
				andre_dietrich$parser_combinators$Combine$app,
				andre_dietrich$parser_combinators$Combine$succeed(0),
				state,
				stream);
		});
};
var author$project$Lia$Parser$Context$par_ = function (s) {
	return _Utils_eq(s.cc, _List_Nil) ? andre_dietrich$parser_combinators$Combine$succeed(0) : (s._ ? andre_dietrich$parser_combinators$Combine$skip(
		andre_dietrich$parser_combinators$Combine$succeed(0)) : andre_dietrich$parser_combinators$Combine$skip(
		andre_dietrich$parser_combinators$Combine$string(
			elm$core$String$concat(s.cc))));
};
var author$project$Lia$Parser$Context$skip_ = F2(
	function (bool, state) {
		return _Utils_update(
			state,
			{_: bool});
	});
var author$project$Lia$Parser$Context$indentation = A2(
	andre_dietrich$parser_combinators$Combine$ignore,
	andre_dietrich$parser_combinators$Combine$modifyState(
		author$project$Lia$Parser$Context$skip_(false)),
	andre_dietrich$parser_combinators$Combine$withState(author$project$Lia$Parser$Context$par_));
var author$project$Lia$Parser$Helper$c_frame = A2(
	andre_dietrich$parser_combinators$Combine$map,
	elm$core$String$length,
	andre_dietrich$parser_combinators$Combine$regex('`{3,}'));
var elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var author$project$Lia$Markdown$Macro$Parser$code_block = A2(
	andre_dietrich$parser_combinators$Combine$map,
	A2(elm$core$Basics$composeR, elm$core$String$concat, elm$core$List$singleton),
	A2(
		andre_dietrich$parser_combinators$Combine$manyTill,
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			andre_dietrich$parser_combinators$Combine$regex('(.(?!```))*\\n?'),
			andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation)),
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			author$project$Lia$Parser$Helper$c_frame,
			andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation))));
var author$project$Lia$Markdown$Macro$Parser$get = F2(
	function (name, def) {
		switch (name) {
			case '@author':
				return elm$core$Maybe$Just(def.dw);
			case '@date':
				return elm$core$Maybe$Just(def.dM);
			case '@email':
				return elm$core$Maybe$Just(def.dT);
			case '@version':
				return elm$core$Maybe$Just(def.fn);
			case '@section':
				return elm$core$Maybe$Just(
					elm$core$String$fromInt(def.cV));
			case '@uid':
				return elm$core$Maybe$Just(
					elm$core$String$fromInt(def.cV) + ('_' + elm$core$String$fromInt(def.dh)));
			default:
				return A2(elm$core$Dict$get, name, def.ao);
		}
	});
var andre_dietrich$parser_combinators$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			rp,
			A2(andre_dietrich$parser_combinators$Combine$keep, p, lp));
	});
var andre_dietrich$parser_combinators$Combine$parens = A2(
	andre_dietrich$parser_combinators$Combine$between,
	andre_dietrich$parser_combinators$Combine$string('('),
	andre_dietrich$parser_combinators$Combine$string(')'));
var andre_dietrich$parser_combinators$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			andre_dietrich$parser_combinators$Combine$many(
				A2(andre_dietrich$parser_combinators$Combine$keep, p, sep)),
			A2(andre_dietrich$parser_combinators$Combine$map, elm$core$List$cons, p));
	});
var andre_dietrich$parser_combinators$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			andre_dietrich$parser_combinators$Combine$or,
			A2(andre_dietrich$parser_combinators$Combine$sepBy1, sep, p),
			andre_dietrich$parser_combinators$Combine$succeed(_List_Nil));
	});
var author$project$Lia$Utils$toJSstring = A2(
	elm$core$Basics$composeR,
	elm$core$String$split('\\'),
	elm$core$String$join('\\\\'));
var author$project$Lia$Markdown$Macro$Parser$parameter = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Utils$toJSstring,
	andre_dietrich$parser_combinators$Combine$choice(
		_List_fromArray(
			[
				A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Helper$c_frame,
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$regex('(([^`]+|(`[^`]+)|(``[^`]+))|\\n)+'),
					author$project$Lia$Parser$Helper$c_frame)),
				A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string('`'),
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$regex('[^`\n]+'),
					andre_dietrich$parser_combinators$Combine$string('`'))),
				andre_dietrich$parser_combinators$Combine$regex('[^),]+')
			])));
var author$project$Lia$Markdown$Macro$Parser$parameter_list = A2(
	andre_dietrich$parser_combinators$Combine$optional,
	_List_Nil,
	andre_dietrich$parser_combinators$Combine$parens(
		A2(
			andre_dietrich$parser_combinators$Combine$sepBy,
			andre_dietrich$parser_combinators$Combine$string(','),
			author$project$Lia$Markdown$Macro$Parser$parameter)));
var author$project$Lia$Parser$Helper$spaces = andre_dietrich$parser_combinators$Combine$regex('[\t ]*');
var author$project$Lia$Markdown$Macro$Parser$pattern = A2(
	andre_dietrich$parser_combinators$Combine$keep,
	andre_dietrich$parser_combinators$Combine$regex('@[\\w.]+'),
	author$project$Lia$Parser$Helper$spaces);
var author$project$Lia$Markdown$Macro$Parser$simple_macro = A2(
	andre_dietrich$parser_combinators$Combine$andMap,
	author$project$Lia$Markdown$Macro$Parser$parameter_list,
	A2(andre_dietrich$parser_combinators$Combine$map, elm$core$Tuple$pair, author$project$Lia$Markdown$Macro$Parser$pattern));
var author$project$Lia$Markdown$Macro$Parser$uid_update = function (state) {
	var def = state.bV;
	return _Utils_update(
		state,
		{
			bV: _Utils_update(
				def,
				{dh: def.dh + 1})
		});
};
var author$project$Lia$Markdown$Macro$Parser$uid_macro = A2(
	andre_dietrich$parser_combinators$Combine$onsuccess,
	_Utils_Tuple2('@uid', _List_Nil),
	A2(
		andre_dietrich$parser_combinators$Combine$keep,
		andre_dietrich$parser_combinators$Combine$modifyState(author$project$Lia$Markdown$Macro$Parser$uid_update),
		andre_dietrich$parser_combinators$Combine$string('@uid')));
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$String$lines = _String_lines;
var elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			elm$core$String$join,
			after,
			A2(elm$core$String$split, before, string));
	});
var author$project$Lia$Markdown$Macro$Parser$eval_parameter = F2(
	function (param, _n5) {
		var state = _n5.a;
		var i = _n5.b;
		var code = _n5.c;
		var _n6 = A2(author$project$Lia$Markdown$Macro$Parser$macro_parse, state, param);
		var new_state = _n6.a;
		var new_param = _n6.b;
		return _Utils_Tuple3(
			new_state,
			i + 1,
			A3(
				elm$core$String$replace,
				'@' + elm$core$String$fromInt(i),
				new_param,
				code));
	});
var author$project$Lia$Markdown$Macro$Parser$inject_macro = function (_n2) {
	var name = _n2.a;
	var params = _n2.b;
	var inject = function (state) {
		var _n3 = A2(author$project$Lia$Markdown$Macro$Parser$get, name, state.bV);
		if (!_n3.$) {
			var code = _n3.a;
			var code_ = _Utils_eq(state.cc, _List_Nil) ? code : A2(
				elm$core$String$join,
				'\n' + elm$core$String$concat(state.cc),
				elm$core$String$lines(code));
			var _n4 = A3(
				elm$core$List$foldl,
				author$project$Lia$Markdown$Macro$Parser$eval_parameter,
				_Utils_Tuple3(state, 0, code_),
				params);
			var new_state = _n4.a;
			var new_code = _n4.c;
			return A2(
				andre_dietrich$parser_combinators$Combine$keep,
				andre_dietrich$parser_combinators$Combine$succeed(0),
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$putState(new_state),
					andre_dietrich$parser_combinators$Combine$modifyStream(
						elm$core$Basics$append(new_code))));
		} else {
			return andre_dietrich$parser_combinators$Combine$fail('macro definition not found');
		}
	};
	return andre_dietrich$parser_combinators$Combine$withState(inject);
};
var author$project$Lia$Markdown$Macro$Parser$macro_parse = F2(
	function (defines, str) {
		var _n0 = A3(
			andre_dietrich$parser_combinators$Combine$runParser,
			A2(
				andre_dietrich$parser_combinators$Combine$map,
				elm$core$String$concat,
				andre_dietrich$parser_combinators$Combine$many1(
					A2(
						andre_dietrich$parser_combinators$Combine$or,
						andre_dietrich$parser_combinators$Combine$regex('@input[^@]+'),
						A2(
							andre_dietrich$parser_combinators$Combine$keep,
							andre_dietrich$parser_combinators$Combine$regex('[^@]+'),
							author$project$Lia$Markdown$Macro$Parser$cyclic$macro())))),
			defines,
			str);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var state = _n1.a;
			var s = _n1.c;
			return _Utils_Tuple2(state, s);
		} else {
			return _Utils_Tuple2(defines, str);
		}
	});
function author$project$Lia$Markdown$Macro$Parser$cyclic$macro() {
	return andre_dietrich$parser_combinators$Combine$skip(
		andre_dietrich$parser_combinators$Combine$maybe(
			andre_dietrich$parser_combinators$Combine$many1(
				andre_dietrich$parser_combinators$Combine$choice(
					_List_fromArray(
						[
							A2(andre_dietrich$parser_combinators$Combine$andThen, author$project$Lia$Markdown$Macro$Parser$inject_macro, author$project$Lia$Markdown$Macro$Parser$uid_macro),
							A2(andre_dietrich$parser_combinators$Combine$andThen, author$project$Lia$Markdown$Macro$Parser$inject_macro, author$project$Lia$Markdown$Macro$Parser$simple_macro),
							author$project$Lia$Markdown$Macro$Parser$cyclic$macro_listing()
						])))));
}
function author$project$Lia$Markdown$Macro$Parser$cyclic$macro_listing() {
	return A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		function (name) {
			return A2(
				andre_dietrich$parser_combinators$Combine$andThen,
				function (params) {
					return A2(
						andre_dietrich$parser_combinators$Combine$andThen,
						function (p) {
							return author$project$Lia$Markdown$Macro$Parser$inject_macro(
								_Utils_Tuple2(name, p));
						},
						A2(
							andre_dietrich$parser_combinators$Combine$map,
							elm$core$List$append(params),
							author$project$Lia$Markdown$Macro$Parser$code_block));
				},
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\n'),
					author$project$Lia$Markdown$Macro$Parser$parameter_list));
		},
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			author$project$Lia$Markdown$Macro$Parser$pattern,
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				andre_dietrich$parser_combinators$Combine$regex('[\t ]*[a-zA-Z0-9_]*[\t ]*'),
				author$project$Lia$Parser$Helper$c_frame)));
}
var author$project$Lia$Markdown$Macro$Parser$macro = author$project$Lia$Markdown$Macro$Parser$cyclic$macro();
author$project$Lia$Markdown$Macro$Parser$cyclic$macro = function () {
	return author$project$Lia$Markdown$Macro$Parser$macro;
};
var author$project$Lia$Markdown$Macro$Parser$macro_listing = author$project$Lia$Markdown$Macro$Parser$cyclic$macro_listing();
author$project$Lia$Markdown$Macro$Parser$cyclic$macro_listing = function () {
	return author$project$Lia$Markdown$Macro$Parser$macro_listing;
};
var author$project$Lia$Parser$Helper$spaces1 = andre_dietrich$parser_combinators$Combine$regex('[\t ]+');
var author$project$Lia$Markdown$Effect$Parser$hidden_comment = andre_dietrich$parser_combinators$Combine$skip(
	A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		author$project$Lia$Markdown$Effect$Parser$add_comment(false),
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			author$project$Lia$Markdown$Effect$Parser$reset_effect_number,
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				A2(
					andre_dietrich$parser_combinators$Combine$manyTill,
					andre_dietrich$parser_combinators$Combine$Char$anyChar,
					andre_dietrich$parser_combinators$Combine$string('-->')),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					andre_dietrich$parser_combinators$Combine$regex('}}--[\t ]*'),
					A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						andre_dietrich$parser_combinators$Combine$maybe(
							A2(
								andre_dietrich$parser_combinators$Combine$keep,
								andre_dietrich$parser_combinators$Combine$regex('[A-Za-z0-9 ]+'),
								A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Macro$Parser$macro, author$project$Lia$Parser$Helper$spaces1))),
						A2(
							andre_dietrich$parser_combinators$Combine$map,
							F3(
								function (i, voice, text) {
									return _Utils_Tuple3(
										i,
										voice,
										_List_fromArray(
											[
												A2(
												author$project$Lia$Markdown$Inline$Types$Chars,
												elm$core$String$trim(
													elm$core$String$fromList(text)),
												elm$core$Maybe$Nothing)
											]));
								}),
							A2(
								andre_dietrich$parser_combinators$Combine$keep,
								author$project$Lia$Markdown$Effect$Parser$effect_number,
								andre_dietrich$parser_combinators$Combine$regex('<!--[\t ]*--{{')))))))));
var author$project$Lia$Markdown$Inline$Parser$comments = andre_dietrich$parser_combinators$Combine$skip(
	andre_dietrich$parser_combinators$Combine$many(
		A2(
			andre_dietrich$parser_combinators$Combine$or,
			andre_dietrich$parser_combinators$Combine$skip(
				author$project$Lia$Markdown$Inline$Parser$comment(andre_dietrich$parser_combinators$Combine$Char$anyChar)),
			author$project$Lia$Markdown$Effect$Parser$hidden_comment)));
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var author$project$Lia$Markdown$Inline$Parser$annotations = A2(
	andre_dietrich$parser_combinators$Combine$ignore,
	author$project$Lia$Markdown$Inline$Parser$comments,
	andre_dietrich$parser_combinators$Combine$maybe(
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			A2(elm$core$Basics$composeR, elm$core$Dict$fromList, author$project$Lia$Markdown$Inline$Parser$attr_),
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Markdown$Inline$Parser$comment(author$project$Lia$Markdown$Inline$Parser$attribute),
				author$project$Lia$Parser$Helper$spaces))));
var author$project$Lia$Markdown$Inline$Types$Verbatim = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Parser$code = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Inline$Types$Verbatim,
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$string('`'),
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			andre_dietrich$parser_combinators$Combine$regex('[^`\\n]+'),
			andre_dietrich$parser_combinators$Combine$string('`'))));
var author$project$Lia$Markdown$Inline$Parser$email = A2(
	andre_dietrich$parser_combinators$Combine$map,
	elm$core$Basics$append('mailto:'),
	A2(
		andre_dietrich$parser_combinators$Combine$keep,
		andre_dietrich$parser_combinators$Combine$regex('[a-zA-Z0-9_.\\-]+@[a-zA-Z0-9_.\\-]+'),
		andre_dietrich$parser_combinators$Combine$maybe(
			andre_dietrich$parser_combinators$Combine$string('mailto:'))));
var author$project$Lia$Markdown$Effect$Model$add_javascript = F3(
	function (idx, script, model) {
		return _Utils_update(
			model,
			{
				aa: A3(
					elm$core$Dict$insert,
					idx,
					function () {
						var _n0 = A2(elm$core$Dict$get, idx, model.aa);
						if (!_n0.$) {
							var a = _n0.a;
							return A2(
								elm$core$List$append,
								a,
								_List_fromArray(
									[script]));
						} else {
							return _List_fromArray(
								[script]);
						}
					}(),
					model.aa)
			});
	});
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {bO: col, cC: problem, cN: row};
	});
var elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3(elm$parser$Parser$DeadEnd, p.cN, p.bO, p.cC);
};
var elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var elm$parser$Parser$Advanced$run = F2(
	function (_n0, src) {
		var parse = _n0;
		var _n1 = parse(
			{bO: 1, c: _List_Nil, d: 1, b: 0, cN: 1, a: src});
		if (!_n1.$) {
			var value = _n1.b;
			return elm$core$Result$Ok(value);
		} else {
			var bag = _n1.b;
			return elm$core$Result$Err(
				A2(elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var elm$parser$Parser$run = F2(
	function (parser, source) {
		var _n0 = A2(elm$parser$Parser$Advanced$run, parser, source);
		if (!_n0.$) {
			var a = _n0.a;
			return elm$core$Result$Ok(a);
		} else {
			var problems = _n0.a;
			return elm$core$Result$Err(
				A2(elm$core$List$map, elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var elm$parser$Parser$Advanced$Parser = elm$core$Basics$identity;
var elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _n0) {
		var parseA = _n0;
		return function (s0) {
			var _n1 = parseA(s0);
			if (_n1.$ === 1) {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				var _n2 = callback(a);
				var parseB = _n2;
				var _n3 = parseB(s1);
				if (_n3.$ === 1) {
					var p2 = _n3.a;
					var x = _n3.b;
					return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _n3.a;
					var b = _n3.b;
					var s2 = _n3.c;
					return A3(elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var elm$parser$Parser$andThen = elm$parser$Parser$Advanced$andThen;
var elm$parser$Parser$Advanced$backtrackable = function (_n0) {
	var parse = _n0;
	return function (s0) {
		var _n1 = parse(s0);
		if (_n1.$ === 1) {
			var x = _n1.b;
			return A2(elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _n1.b;
			var s1 = _n1.c;
			return A3(elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var elm$parser$Parser$backtrackable = elm$parser$Parser$Advanced$backtrackable;
var elm$parser$Parser$UnexpectedChar = {$: 11};
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {bO: col, dL: contextStack, cC: problem, cN: row};
	});
var elm$parser$Parser$Advanced$Empty = {$: 0};
var elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, s.cN, s.bO, x, s.c));
	});
var elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, s.b, s.a);
			return _Utils_eq(newOffset, -1) ? A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bO: 1, c: s.c, d: s.d, b: s.b + 1, cN: s.cN + 1, a: s.a}) : A3(
				elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bO: s.bO + 1, c: s.c, d: s.d, b: newOffset, cN: s.cN, a: s.a}));
		};
	});
var elm$parser$Parser$chompIf = function (isGood) {
	return A2(elm$parser$Parser$Advanced$chompIf, isGood, elm$parser$Parser$UnexpectedChar);
};
var elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.a);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.b, offset) < 0,
					0,
					{bO: col, c: s0.c, d: s0.d, b: offset, cN: row, a: s0.a});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5(elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.b, s.cN, s.bO, s);
	};
};
var elm$parser$Parser$chompWhile = elm$parser$Parser$Advanced$chompWhile;
var elm$parser$Parser$Advanced$map2 = F3(
	function (func, _n0, _n1) {
		var parseA = _n0;
		var parseB = _n1;
		return function (s0) {
			var _n2 = parseA(s0);
			if (_n2.$ === 1) {
				var p = _n2.a;
				var x = _n2.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _n2.a;
				var a = _n2.b;
				var s1 = _n2.c;
				var _n3 = parseB(s1);
				if (_n3.$ === 1) {
					var p2 = _n3.a;
					var x = _n3.b;
					return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _n3.a;
					var b = _n3.b;
					var s2 = _n3.c;
					return A3(
						elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$always, keepParser, ignoreParser);
	});
var elm$parser$Parser$ignorer = elm$parser$Parser$Advanced$ignorer;
var elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$apL, parseFunc, parseArg);
	});
var elm$parser$Parser$keeper = elm$parser$Parser$Advanced$keeper;
var elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2(elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _n1 = parse(s0);
				if (!_n1.$) {
					var step = _n1;
					return step;
				} else {
					var step = _n1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2(elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3(elm$parser$Parser$Advanced$oneOfHelp, s, elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var elm$parser$Parser$oneOf = elm$parser$Parser$Advanced$oneOf;
var elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3(elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var elm$parser$Parser$succeed = elm$parser$Parser$Advanced$succeed;
var hecrj$html_parser$Html$Parser$Element = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$Basics$not = _Basics_not;
var elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _n0) {
		var parse = _n0;
		return function (s0) {
			var _n1 = parse(s0);
			if (_n1.$ === 1) {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(
					elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3(elm$core$String$slice, s0.b, s1.b, s0.a),
						a),
					s1);
			}
		};
	});
var elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2(elm$parser$Parser$Advanced$mapChompedString, elm$core$Basics$always, parser);
};
var elm$parser$Parser$getChompedString = elm$parser$Parser$Advanced$getChompedString;
var elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var elm$parser$Parser$problem = function (msg) {
	return elm$parser$Parser$Advanced$problem(
		elm$parser$Parser$Problem(msg));
};
var hecrj$html_parser$Html$Parser$chompOneOrMore = function (fn) {
	return A2(
		elm$parser$Parser$ignorer,
		elm$parser$Parser$chompIf(fn),
		elm$parser$Parser$chompWhile(fn));
};
var hecrj$html_parser$Html$Parser$isSpaceCharacter = function (c) {
	return (c === ' ') || ((c === '\t') || ((c === '\n') || ((c === '\u000d') || ((c === '\u000c') || (c === '\u00a0')))));
};
var hecrj$html_parser$Html$Parser$closingTag = function (name) {
	var chompName = A2(
		elm$parser$Parser$andThen,
		function (closingName) {
			return _Utils_eq(
				elm$core$String$toLower(closingName),
				name) ? elm$parser$Parser$succeed(0) : elm$parser$Parser$problem('closing tag does not match opening tag: ' + name);
		},
		elm$parser$Parser$getChompedString(
			hecrj$html_parser$Html$Parser$chompOneOrMore(
				function (c) {
					return (!hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && (c !== '>');
				})));
	return A2(
		elm$parser$Parser$ignorer,
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$chompIf(
						elm$core$Basics$eq('<')),
					elm$parser$Parser$chompIf(
						elm$core$Basics$eq('/'))),
				chompName),
			elm$parser$Parser$chompWhile(hecrj$html_parser$Html$Parser$isSpaceCharacter)),
		elm$parser$Parser$chompIf(
			elm$core$Basics$eq('>')));
};
var elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$parser$Parser$toToken = function (str) {
	return A2(
		elm$parser$Parser$Advanced$Token,
		str,
		elm$parser$Parser$Expecting(str));
};
var elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var elm$parser$Parser$Advanced$chompUntil = function (_n0) {
	var str = _n0.a;
	var expecting = _n0.b;
	return function (s) {
		var _n1 = A5(elm$parser$Parser$Advanced$findSubString, str, s.b, s.cN, s.bO, s.a);
		var newOffset = _n1.a;
		var newRow = _n1.b;
		var newCol = _n1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A4(elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.c)) : A3(
			elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.b, newOffset) < 0,
			0,
			{bO: newCol, c: s.c, d: s.d, b: newOffset, cN: newRow, a: s.a});
	};
};
var elm$parser$Parser$chompUntil = function (str) {
	return elm$parser$Parser$Advanced$chompUntil(
		elm$parser$Parser$toToken(str));
};
var elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var elm$parser$Parser$Advanced$token = function (_n0) {
	var str = _n0.a;
	var expecting = _n0.b;
	var progress = !elm$core$String$isEmpty(str);
	return function (s) {
		var _n1 = A5(elm$parser$Parser$Advanced$isSubString, str, s.b, s.cN, s.bO, s.a);
		var newOffset = _n1.a;
		var newRow = _n1.b;
		var newCol = _n1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			elm$parser$Parser$Advanced$Bad,
			false,
			A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bO: newCol, c: s.c, d: s.d, b: newOffset, cN: newRow, a: s.a});
	};
};
var elm$parser$Parser$token = function (str) {
	return elm$parser$Parser$Advanced$token(
		elm$parser$Parser$toToken(str));
};
var hecrj$html_parser$Html$Parser$Comment = function (a) {
	return {$: 2, a: a};
};
var hecrj$html_parser$Html$Parser$comment = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$ignorer,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(hecrj$html_parser$Html$Parser$Comment),
			elm$parser$Parser$token('<!')),
		elm$parser$Parser$token('--')),
	A2(
		elm$parser$Parser$ignorer,
		elm$parser$Parser$getChompedString(
			elm$parser$Parser$chompUntil('-->')),
		elm$parser$Parser$token('-->')));
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var hecrj$html_parser$Html$Parser$voidElements = _List_fromArray(
	['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
var hecrj$html_parser$Html$Parser$isVoidElement = function (name) {
	return A2(elm$core$List$member, name, hecrj$html_parser$Html$Parser$voidElements);
};
var elm$parser$Parser$Done = function (a) {
	return {$: 1, a: a};
};
var elm$parser$Parser$Loop = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$Advanced$map = F2(
	function (func, _n0) {
		var parse = _n0;
		return function (s0) {
			var _n1 = parse(s0);
			if (!_n1.$) {
				var p = _n1.a;
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(
					elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var elm$parser$Parser$map = elm$parser$Parser$Advanced$map;
var elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var elm$parser$Parser$toAdvancedStep = function (step) {
	if (!step.$) {
		var s = step.a;
		return elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return elm$parser$Parser$Advanced$Done(a);
	}
};
var elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _n0 = callback(state);
			var parse = _n0;
			var _n1 = parse(s0);
			if (!_n1.$) {
				var p1 = _n1.a;
				var step = _n1.b;
				var s1 = _n1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3(elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4(elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					elm$parser$Parser$map,
					elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var hecrj$html_parser$Html$Parser$many = function (parser_) {
	return A2(
		elm$parser$Parser$loop,
		_List_Nil,
		function (list) {
			return elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						elm$parser$Parser$map,
						function (_new) {
							return elm$parser$Parser$Loop(
								A2(elm$core$List$cons, _new, list));
						},
						parser_),
						elm$parser$Parser$succeed(
						elm$parser$Parser$Done(
							elm$core$List$reverse(list)))
					]));
		});
};
var hecrj$html_parser$Html$Parser$isTagAttributeCharacter = function (c) {
	return (!hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && ((c !== '\"') && ((c !== '\'') && ((c !== '>') && ((c !== '/') && (c !== '=')))));
};
var hecrj$html_parser$Html$Parser$tagAttributeName = A2(
	elm$parser$Parser$map,
	elm$core$String$toLower,
	elm$parser$Parser$getChompedString(
		hecrj$html_parser$Html$Parser$chompOneOrMore(hecrj$html_parser$Html$Parser$isTagAttributeCharacter)));
var hecrj$html_parser$Html$Parser$chompSemicolon = elm$parser$Parser$chompIf(
	elm$core$Basics$eq(';'));
var hecrj$html_parser$Html$Parser$NamedCharacterReferences$dict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('Aacute', 'Á'),
			_Utils_Tuple2('aacute', 'á'),
			_Utils_Tuple2('Abreve', 'Ă'),
			_Utils_Tuple2('abreve', 'ă'),
			_Utils_Tuple2('ac', '∾'),
			_Utils_Tuple2('acd', '∿'),
			_Utils_Tuple2('acE', '∾̳'),
			_Utils_Tuple2('Acirc', 'Â'),
			_Utils_Tuple2('acirc', 'â'),
			_Utils_Tuple2('acute', '´'),
			_Utils_Tuple2('Acy', 'А'),
			_Utils_Tuple2('acy', 'а'),
			_Utils_Tuple2('AElig', 'Æ'),
			_Utils_Tuple2('aelig', 'æ'),
			_Utils_Tuple2('af', '\u2061'),
			_Utils_Tuple2('Afr', '\ud835\udd04'),
			_Utils_Tuple2('afr', '\ud835\udd1e'),
			_Utils_Tuple2('Agrave', 'À'),
			_Utils_Tuple2('agrave', 'à'),
			_Utils_Tuple2('alefsym', 'ℵ'),
			_Utils_Tuple2('aleph', 'ℵ'),
			_Utils_Tuple2('Alpha', 'Α'),
			_Utils_Tuple2('alpha', 'α'),
			_Utils_Tuple2('Amacr', 'Ā'),
			_Utils_Tuple2('amacr', 'ā'),
			_Utils_Tuple2('amalg', '⨿'),
			_Utils_Tuple2('amp', '&'),
			_Utils_Tuple2('AMP', '&'),
			_Utils_Tuple2('andand', '⩕'),
			_Utils_Tuple2('And', '⩓'),
			_Utils_Tuple2('and', '∧'),
			_Utils_Tuple2('andd', '⩜'),
			_Utils_Tuple2('andslope', '⩘'),
			_Utils_Tuple2('andv', '⩚'),
			_Utils_Tuple2('ang', '∠'),
			_Utils_Tuple2('ange', '⦤'),
			_Utils_Tuple2('angle', '∠'),
			_Utils_Tuple2('angmsdaa', '⦨'),
			_Utils_Tuple2('angmsdab', '⦩'),
			_Utils_Tuple2('angmsdac', '⦪'),
			_Utils_Tuple2('angmsdad', '⦫'),
			_Utils_Tuple2('angmsdae', '⦬'),
			_Utils_Tuple2('angmsdaf', '⦭'),
			_Utils_Tuple2('angmsdag', '⦮'),
			_Utils_Tuple2('angmsdah', '⦯'),
			_Utils_Tuple2('angmsd', '∡'),
			_Utils_Tuple2('angrt', '∟'),
			_Utils_Tuple2('angrtvb', '⊾'),
			_Utils_Tuple2('angrtvbd', '⦝'),
			_Utils_Tuple2('angsph', '∢'),
			_Utils_Tuple2('angst', 'Å'),
			_Utils_Tuple2('angzarr', '⍼'),
			_Utils_Tuple2('Aogon', 'Ą'),
			_Utils_Tuple2('aogon', 'ą'),
			_Utils_Tuple2('Aopf', '\ud835\udd38'),
			_Utils_Tuple2('aopf', '\ud835\udd52'),
			_Utils_Tuple2('apacir', '⩯'),
			_Utils_Tuple2('ap', '≈'),
			_Utils_Tuple2('apE', '⩰'),
			_Utils_Tuple2('ape', '≊'),
			_Utils_Tuple2('apid', '≋'),
			_Utils_Tuple2('apos', '\''),
			_Utils_Tuple2('ApplyFunction', '\u2061'),
			_Utils_Tuple2('approx', '≈'),
			_Utils_Tuple2('approxeq', '≊'),
			_Utils_Tuple2('Aring', 'Å'),
			_Utils_Tuple2('aring', 'å'),
			_Utils_Tuple2('Ascr', '\ud835\udc9c'),
			_Utils_Tuple2('ascr', '\ud835\udcb6'),
			_Utils_Tuple2('Assign', '≔'),
			_Utils_Tuple2('ast', '*'),
			_Utils_Tuple2('asymp', '≈'),
			_Utils_Tuple2('asympeq', '≍'),
			_Utils_Tuple2('Atilde', 'Ã'),
			_Utils_Tuple2('atilde', 'ã'),
			_Utils_Tuple2('Auml', 'Ä'),
			_Utils_Tuple2('auml', 'ä'),
			_Utils_Tuple2('awconint', '∳'),
			_Utils_Tuple2('awint', '⨑'),
			_Utils_Tuple2('backcong', '≌'),
			_Utils_Tuple2('backepsilon', '϶'),
			_Utils_Tuple2('backprime', '‵'),
			_Utils_Tuple2('backsim', '∽'),
			_Utils_Tuple2('backsimeq', '⋍'),
			_Utils_Tuple2('Backslash', '∖'),
			_Utils_Tuple2('Barv', '⫧'),
			_Utils_Tuple2('barvee', '⊽'),
			_Utils_Tuple2('barwed', '⌅'),
			_Utils_Tuple2('Barwed', '⌆'),
			_Utils_Tuple2('barwedge', '⌅'),
			_Utils_Tuple2('bbrk', '⎵'),
			_Utils_Tuple2('bbrktbrk', '⎶'),
			_Utils_Tuple2('bcong', '≌'),
			_Utils_Tuple2('Bcy', 'Б'),
			_Utils_Tuple2('bcy', 'б'),
			_Utils_Tuple2('bdquo', '„'),
			_Utils_Tuple2('becaus', '∵'),
			_Utils_Tuple2('because', '∵'),
			_Utils_Tuple2('Because', '∵'),
			_Utils_Tuple2('bemptyv', '⦰'),
			_Utils_Tuple2('bepsi', '϶'),
			_Utils_Tuple2('bernou', 'ℬ'),
			_Utils_Tuple2('Bernoullis', 'ℬ'),
			_Utils_Tuple2('Beta', 'Β'),
			_Utils_Tuple2('beta', 'β'),
			_Utils_Tuple2('beth', 'ℶ'),
			_Utils_Tuple2('between', '≬'),
			_Utils_Tuple2('Bfr', '\ud835\udd05'),
			_Utils_Tuple2('bfr', '\ud835\udd1f'),
			_Utils_Tuple2('bigcap', '⋂'),
			_Utils_Tuple2('bigcirc', '◯'),
			_Utils_Tuple2('bigcup', '⋃'),
			_Utils_Tuple2('bigodot', '⨀'),
			_Utils_Tuple2('bigoplus', '⨁'),
			_Utils_Tuple2('bigotimes', '⨂'),
			_Utils_Tuple2('bigsqcup', '⨆'),
			_Utils_Tuple2('bigstar', '★'),
			_Utils_Tuple2('bigtriangledown', '▽'),
			_Utils_Tuple2('bigtriangleup', '△'),
			_Utils_Tuple2('biguplus', '⨄'),
			_Utils_Tuple2('bigvee', '⋁'),
			_Utils_Tuple2('bigwedge', '⋀'),
			_Utils_Tuple2('bkarow', '⤍'),
			_Utils_Tuple2('blacklozenge', '⧫'),
			_Utils_Tuple2('blacksquare', '▪'),
			_Utils_Tuple2('blacktriangle', '▴'),
			_Utils_Tuple2('blacktriangledown', '▾'),
			_Utils_Tuple2('blacktriangleleft', '◂'),
			_Utils_Tuple2('blacktriangleright', '▸'),
			_Utils_Tuple2('blank', '␣'),
			_Utils_Tuple2('blk12', '▒'),
			_Utils_Tuple2('blk14', '░'),
			_Utils_Tuple2('blk34', '▓'),
			_Utils_Tuple2('block', '█'),
			_Utils_Tuple2('bne', '=⃥'),
			_Utils_Tuple2('bnequiv', '≡⃥'),
			_Utils_Tuple2('bNot', '⫭'),
			_Utils_Tuple2('bnot', '⌐'),
			_Utils_Tuple2('Bopf', '\ud835\udd39'),
			_Utils_Tuple2('bopf', '\ud835\udd53'),
			_Utils_Tuple2('bot', '⊥'),
			_Utils_Tuple2('bottom', '⊥'),
			_Utils_Tuple2('bowtie', '⋈'),
			_Utils_Tuple2('boxbox', '⧉'),
			_Utils_Tuple2('boxdl', '┐'),
			_Utils_Tuple2('boxdL', '╕'),
			_Utils_Tuple2('boxDl', '╖'),
			_Utils_Tuple2('boxDL', '╗'),
			_Utils_Tuple2('boxdr', '┌'),
			_Utils_Tuple2('boxdR', '╒'),
			_Utils_Tuple2('boxDr', '╓'),
			_Utils_Tuple2('boxDR', '╔'),
			_Utils_Tuple2('boxh', '─'),
			_Utils_Tuple2('boxH', '═'),
			_Utils_Tuple2('boxhd', '┬'),
			_Utils_Tuple2('boxHd', '╤'),
			_Utils_Tuple2('boxhD', '╥'),
			_Utils_Tuple2('boxHD', '╦'),
			_Utils_Tuple2('boxhu', '┴'),
			_Utils_Tuple2('boxHu', '╧'),
			_Utils_Tuple2('boxhU', '╨'),
			_Utils_Tuple2('boxHU', '╩'),
			_Utils_Tuple2('boxminus', '⊟'),
			_Utils_Tuple2('boxplus', '⊞'),
			_Utils_Tuple2('boxtimes', '⊠'),
			_Utils_Tuple2('boxul', '┘'),
			_Utils_Tuple2('boxuL', '╛'),
			_Utils_Tuple2('boxUl', '╜'),
			_Utils_Tuple2('boxUL', '╝'),
			_Utils_Tuple2('boxur', '└'),
			_Utils_Tuple2('boxuR', '╘'),
			_Utils_Tuple2('boxUr', '╙'),
			_Utils_Tuple2('boxUR', '╚'),
			_Utils_Tuple2('boxv', '│'),
			_Utils_Tuple2('boxV', '║'),
			_Utils_Tuple2('boxvh', '┼'),
			_Utils_Tuple2('boxvH', '╪'),
			_Utils_Tuple2('boxVh', '╫'),
			_Utils_Tuple2('boxVH', '╬'),
			_Utils_Tuple2('boxvl', '┤'),
			_Utils_Tuple2('boxvL', '╡'),
			_Utils_Tuple2('boxVl', '╢'),
			_Utils_Tuple2('boxVL', '╣'),
			_Utils_Tuple2('boxvr', '├'),
			_Utils_Tuple2('boxvR', '╞'),
			_Utils_Tuple2('boxVr', '╟'),
			_Utils_Tuple2('boxVR', '╠'),
			_Utils_Tuple2('bprime', '‵'),
			_Utils_Tuple2('breve', '˘'),
			_Utils_Tuple2('Breve', '˘'),
			_Utils_Tuple2('brvbar', '¦'),
			_Utils_Tuple2('bscr', '\ud835\udcb7'),
			_Utils_Tuple2('Bscr', 'ℬ'),
			_Utils_Tuple2('bsemi', '⁏'),
			_Utils_Tuple2('bsim', '∽'),
			_Utils_Tuple2('bsime', '⋍'),
			_Utils_Tuple2('bsolb', '⧅'),
			_Utils_Tuple2('bsol', '\\'),
			_Utils_Tuple2('bsolhsub', '⟈'),
			_Utils_Tuple2('bull', '•'),
			_Utils_Tuple2('bullet', '•'),
			_Utils_Tuple2('bump', '≎'),
			_Utils_Tuple2('bumpE', '⪮'),
			_Utils_Tuple2('bumpe', '≏'),
			_Utils_Tuple2('Bumpeq', '≎'),
			_Utils_Tuple2('bumpeq', '≏'),
			_Utils_Tuple2('Cacute', 'Ć'),
			_Utils_Tuple2('cacute', 'ć'),
			_Utils_Tuple2('capand', '⩄'),
			_Utils_Tuple2('capbrcup', '⩉'),
			_Utils_Tuple2('capcap', '⩋'),
			_Utils_Tuple2('cap', '∩'),
			_Utils_Tuple2('Cap', '⋒'),
			_Utils_Tuple2('capcup', '⩇'),
			_Utils_Tuple2('capdot', '⩀'),
			_Utils_Tuple2('CapitalDifferentialD', 'ⅅ'),
			_Utils_Tuple2('caps', '∩︀'),
			_Utils_Tuple2('caret', '⁁'),
			_Utils_Tuple2('caron', 'ˇ'),
			_Utils_Tuple2('Cayleys', 'ℭ'),
			_Utils_Tuple2('ccaps', '⩍'),
			_Utils_Tuple2('Ccaron', 'Č'),
			_Utils_Tuple2('ccaron', 'č'),
			_Utils_Tuple2('Ccedil', 'Ç'),
			_Utils_Tuple2('ccedil', 'ç'),
			_Utils_Tuple2('Ccirc', 'Ĉ'),
			_Utils_Tuple2('ccirc', 'ĉ'),
			_Utils_Tuple2('Cconint', '∰'),
			_Utils_Tuple2('ccups', '⩌'),
			_Utils_Tuple2('ccupssm', '⩐'),
			_Utils_Tuple2('Cdot', 'Ċ'),
			_Utils_Tuple2('cdot', 'ċ'),
			_Utils_Tuple2('cedil', '¸'),
			_Utils_Tuple2('Cedilla', '¸'),
			_Utils_Tuple2('cemptyv', '⦲'),
			_Utils_Tuple2('cent', '¢'),
			_Utils_Tuple2('centerdot', '·'),
			_Utils_Tuple2('CenterDot', '·'),
			_Utils_Tuple2('cfr', '\ud835\udd20'),
			_Utils_Tuple2('Cfr', 'ℭ'),
			_Utils_Tuple2('CHcy', 'Ч'),
			_Utils_Tuple2('chcy', 'ч'),
			_Utils_Tuple2('check', '✓'),
			_Utils_Tuple2('checkmark', '✓'),
			_Utils_Tuple2('Chi', 'Χ'),
			_Utils_Tuple2('chi', 'χ'),
			_Utils_Tuple2('circ', 'ˆ'),
			_Utils_Tuple2('circeq', '≗'),
			_Utils_Tuple2('circlearrowleft', '↺'),
			_Utils_Tuple2('circlearrowright', '↻'),
			_Utils_Tuple2('circledast', '⊛'),
			_Utils_Tuple2('circledcirc', '⊚'),
			_Utils_Tuple2('circleddash', '⊝'),
			_Utils_Tuple2('CircleDot', '⊙'),
			_Utils_Tuple2('circledR', '®'),
			_Utils_Tuple2('circledS', 'Ⓢ'),
			_Utils_Tuple2('CircleMinus', '⊖'),
			_Utils_Tuple2('CirclePlus', '⊕'),
			_Utils_Tuple2('CircleTimes', '⊗'),
			_Utils_Tuple2('cir', '○'),
			_Utils_Tuple2('cirE', '⧃'),
			_Utils_Tuple2('cire', '≗'),
			_Utils_Tuple2('cirfnint', '⨐'),
			_Utils_Tuple2('cirmid', '⫯'),
			_Utils_Tuple2('cirscir', '⧂'),
			_Utils_Tuple2('ClockwiseContourIntegral', '∲'),
			_Utils_Tuple2('CloseCurlyDoubleQuote', '”'),
			_Utils_Tuple2('CloseCurlyQuote', '’'),
			_Utils_Tuple2('clubs', '♣'),
			_Utils_Tuple2('clubsuit', '♣'),
			_Utils_Tuple2('colon', ':'),
			_Utils_Tuple2('Colon', '∷'),
			_Utils_Tuple2('Colone', '⩴'),
			_Utils_Tuple2('colone', '≔'),
			_Utils_Tuple2('coloneq', '≔'),
			_Utils_Tuple2('comma', ','),
			_Utils_Tuple2('commat', '@'),
			_Utils_Tuple2('comp', '∁'),
			_Utils_Tuple2('compfn', '∘'),
			_Utils_Tuple2('complement', '∁'),
			_Utils_Tuple2('complexes', 'ℂ'),
			_Utils_Tuple2('cong', '≅'),
			_Utils_Tuple2('congdot', '⩭'),
			_Utils_Tuple2('Congruent', '≡'),
			_Utils_Tuple2('conint', '∮'),
			_Utils_Tuple2('Conint', '∯'),
			_Utils_Tuple2('ContourIntegral', '∮'),
			_Utils_Tuple2('copf', '\ud835\udd54'),
			_Utils_Tuple2('Copf', 'ℂ'),
			_Utils_Tuple2('coprod', '∐'),
			_Utils_Tuple2('Coproduct', '∐'),
			_Utils_Tuple2('copy', '©'),
			_Utils_Tuple2('COPY', '©'),
			_Utils_Tuple2('copysr', '℗'),
			_Utils_Tuple2('CounterClockwiseContourIntegral', '∳'),
			_Utils_Tuple2('crarr', '↵'),
			_Utils_Tuple2('cross', '✗'),
			_Utils_Tuple2('Cross', '⨯'),
			_Utils_Tuple2('Cscr', '\ud835\udc9e'),
			_Utils_Tuple2('cscr', '\ud835\udcb8'),
			_Utils_Tuple2('csub', '⫏'),
			_Utils_Tuple2('csube', '⫑'),
			_Utils_Tuple2('csup', '⫐'),
			_Utils_Tuple2('csupe', '⫒'),
			_Utils_Tuple2('ctdot', '⋯'),
			_Utils_Tuple2('cudarrl', '⤸'),
			_Utils_Tuple2('cudarrr', '⤵'),
			_Utils_Tuple2('cuepr', '⋞'),
			_Utils_Tuple2('cuesc', '⋟'),
			_Utils_Tuple2('cularr', '↶'),
			_Utils_Tuple2('cularrp', '⤽'),
			_Utils_Tuple2('cupbrcap', '⩈'),
			_Utils_Tuple2('cupcap', '⩆'),
			_Utils_Tuple2('CupCap', '≍'),
			_Utils_Tuple2('cup', '∪'),
			_Utils_Tuple2('Cup', '⋓'),
			_Utils_Tuple2('cupcup', '⩊'),
			_Utils_Tuple2('cupdot', '⊍'),
			_Utils_Tuple2('cupor', '⩅'),
			_Utils_Tuple2('cups', '∪︀'),
			_Utils_Tuple2('curarr', '↷'),
			_Utils_Tuple2('curarrm', '⤼'),
			_Utils_Tuple2('curlyeqprec', '⋞'),
			_Utils_Tuple2('curlyeqsucc', '⋟'),
			_Utils_Tuple2('curlyvee', '⋎'),
			_Utils_Tuple2('curlywedge', '⋏'),
			_Utils_Tuple2('curren', '¤'),
			_Utils_Tuple2('curvearrowleft', '↶'),
			_Utils_Tuple2('curvearrowright', '↷'),
			_Utils_Tuple2('cuvee', '⋎'),
			_Utils_Tuple2('cuwed', '⋏'),
			_Utils_Tuple2('cwconint', '∲'),
			_Utils_Tuple2('cwint', '∱'),
			_Utils_Tuple2('cylcty', '⌭'),
			_Utils_Tuple2('dagger', '†'),
			_Utils_Tuple2('Dagger', '‡'),
			_Utils_Tuple2('daleth', 'ℸ'),
			_Utils_Tuple2('darr', '↓'),
			_Utils_Tuple2('Darr', '↡'),
			_Utils_Tuple2('dArr', '⇓'),
			_Utils_Tuple2('dash', '‐'),
			_Utils_Tuple2('Dashv', '⫤'),
			_Utils_Tuple2('dashv', '⊣'),
			_Utils_Tuple2('dbkarow', '⤏'),
			_Utils_Tuple2('dblac', '˝'),
			_Utils_Tuple2('Dcaron', 'Ď'),
			_Utils_Tuple2('dcaron', 'ď'),
			_Utils_Tuple2('Dcy', 'Д'),
			_Utils_Tuple2('dcy', 'д'),
			_Utils_Tuple2('ddagger', '‡'),
			_Utils_Tuple2('ddarr', '⇊'),
			_Utils_Tuple2('DD', 'ⅅ'),
			_Utils_Tuple2('dd', 'ⅆ'),
			_Utils_Tuple2('DDotrahd', '⤑'),
			_Utils_Tuple2('ddotseq', '⩷'),
			_Utils_Tuple2('deg', '°'),
			_Utils_Tuple2('Del', '∇'),
			_Utils_Tuple2('Delta', 'Δ'),
			_Utils_Tuple2('delta', 'δ'),
			_Utils_Tuple2('demptyv', '⦱'),
			_Utils_Tuple2('dfisht', '⥿'),
			_Utils_Tuple2('Dfr', '\ud835\udd07'),
			_Utils_Tuple2('dfr', '\ud835\udd21'),
			_Utils_Tuple2('dHar', '⥥'),
			_Utils_Tuple2('dharl', '⇃'),
			_Utils_Tuple2('dharr', '⇂'),
			_Utils_Tuple2('DiacriticalAcute', '´'),
			_Utils_Tuple2('DiacriticalDot', '˙'),
			_Utils_Tuple2('DiacriticalDoubleAcute', '˝'),
			_Utils_Tuple2('DiacriticalGrave', '`'),
			_Utils_Tuple2('DiacriticalTilde', '˜'),
			_Utils_Tuple2('diam', '⋄'),
			_Utils_Tuple2('diamond', '⋄'),
			_Utils_Tuple2('Diamond', '⋄'),
			_Utils_Tuple2('diamondsuit', '♦'),
			_Utils_Tuple2('diams', '♦'),
			_Utils_Tuple2('die', '¨'),
			_Utils_Tuple2('DifferentialD', 'ⅆ'),
			_Utils_Tuple2('digamma', 'ϝ'),
			_Utils_Tuple2('disin', '⋲'),
			_Utils_Tuple2('div', '÷'),
			_Utils_Tuple2('divide', '÷'),
			_Utils_Tuple2('divideontimes', '⋇'),
			_Utils_Tuple2('divonx', '⋇'),
			_Utils_Tuple2('DJcy', 'Ђ'),
			_Utils_Tuple2('djcy', 'ђ'),
			_Utils_Tuple2('dlcorn', '⌞'),
			_Utils_Tuple2('dlcrop', '⌍'),
			_Utils_Tuple2('dollar', '$'),
			_Utils_Tuple2('Dopf', '\ud835\udd3b'),
			_Utils_Tuple2('dopf', '\ud835\udd55'),
			_Utils_Tuple2('Dot', '¨'),
			_Utils_Tuple2('dot', '˙'),
			_Utils_Tuple2('DotDot', '⃜'),
			_Utils_Tuple2('doteq', '≐'),
			_Utils_Tuple2('doteqdot', '≑'),
			_Utils_Tuple2('DotEqual', '≐'),
			_Utils_Tuple2('dotminus', '∸'),
			_Utils_Tuple2('dotplus', '∔'),
			_Utils_Tuple2('dotsquare', '⊡'),
			_Utils_Tuple2('doublebarwedge', '⌆'),
			_Utils_Tuple2('DoubleContourIntegral', '∯'),
			_Utils_Tuple2('DoubleDot', '¨'),
			_Utils_Tuple2('DoubleDownArrow', '⇓'),
			_Utils_Tuple2('DoubleLeftArrow', '⇐'),
			_Utils_Tuple2('DoubleLeftRightArrow', '⇔'),
			_Utils_Tuple2('DoubleLeftTee', '⫤'),
			_Utils_Tuple2('DoubleLongLeftArrow', '⟸'),
			_Utils_Tuple2('DoubleLongLeftRightArrow', '⟺'),
			_Utils_Tuple2('DoubleLongRightArrow', '⟹'),
			_Utils_Tuple2('DoubleRightArrow', '⇒'),
			_Utils_Tuple2('DoubleRightTee', '⊨'),
			_Utils_Tuple2('DoubleUpArrow', '⇑'),
			_Utils_Tuple2('DoubleUpDownArrow', '⇕'),
			_Utils_Tuple2('DoubleVerticalBar', '∥'),
			_Utils_Tuple2('DownArrowBar', '⤓'),
			_Utils_Tuple2('downarrow', '↓'),
			_Utils_Tuple2('DownArrow', '↓'),
			_Utils_Tuple2('Downarrow', '⇓'),
			_Utils_Tuple2('DownArrowUpArrow', '⇵'),
			_Utils_Tuple2('DownBreve', '̑'),
			_Utils_Tuple2('downdownarrows', '⇊'),
			_Utils_Tuple2('downharpoonleft', '⇃'),
			_Utils_Tuple2('downharpoonright', '⇂'),
			_Utils_Tuple2('DownLeftRightVector', '⥐'),
			_Utils_Tuple2('DownLeftTeeVector', '⥞'),
			_Utils_Tuple2('DownLeftVectorBar', '⥖'),
			_Utils_Tuple2('DownLeftVector', '↽'),
			_Utils_Tuple2('DownRightTeeVector', '⥟'),
			_Utils_Tuple2('DownRightVectorBar', '⥗'),
			_Utils_Tuple2('DownRightVector', '⇁'),
			_Utils_Tuple2('DownTeeArrow', '↧'),
			_Utils_Tuple2('DownTee', '⊤'),
			_Utils_Tuple2('drbkarow', '⤐'),
			_Utils_Tuple2('drcorn', '⌟'),
			_Utils_Tuple2('drcrop', '⌌'),
			_Utils_Tuple2('Dscr', '\ud835\udc9f'),
			_Utils_Tuple2('dscr', '\ud835\udcb9'),
			_Utils_Tuple2('DScy', 'Ѕ'),
			_Utils_Tuple2('dscy', 'ѕ'),
			_Utils_Tuple2('dsol', '⧶'),
			_Utils_Tuple2('Dstrok', 'Đ'),
			_Utils_Tuple2('dstrok', 'đ'),
			_Utils_Tuple2('dtdot', '⋱'),
			_Utils_Tuple2('dtri', '▿'),
			_Utils_Tuple2('dtrif', '▾'),
			_Utils_Tuple2('duarr', '⇵'),
			_Utils_Tuple2('duhar', '⥯'),
			_Utils_Tuple2('dwangle', '⦦'),
			_Utils_Tuple2('DZcy', 'Џ'),
			_Utils_Tuple2('dzcy', 'џ'),
			_Utils_Tuple2('dzigrarr', '⟿'),
			_Utils_Tuple2('Eacute', 'É'),
			_Utils_Tuple2('eacute', 'é'),
			_Utils_Tuple2('easter', '⩮'),
			_Utils_Tuple2('Ecaron', 'Ě'),
			_Utils_Tuple2('ecaron', 'ě'),
			_Utils_Tuple2('Ecirc', 'Ê'),
			_Utils_Tuple2('ecirc', 'ê'),
			_Utils_Tuple2('ecir', '≖'),
			_Utils_Tuple2('ecolon', '≕'),
			_Utils_Tuple2('Ecy', 'Э'),
			_Utils_Tuple2('ecy', 'э'),
			_Utils_Tuple2('eDDot', '⩷'),
			_Utils_Tuple2('Edot', 'Ė'),
			_Utils_Tuple2('edot', 'ė'),
			_Utils_Tuple2('eDot', '≑'),
			_Utils_Tuple2('ee', 'ⅇ'),
			_Utils_Tuple2('efDot', '≒'),
			_Utils_Tuple2('Efr', '\ud835\udd08'),
			_Utils_Tuple2('efr', '\ud835\udd22'),
			_Utils_Tuple2('eg', '⪚'),
			_Utils_Tuple2('Egrave', 'È'),
			_Utils_Tuple2('egrave', 'è'),
			_Utils_Tuple2('egs', '⪖'),
			_Utils_Tuple2('egsdot', '⪘'),
			_Utils_Tuple2('el', '⪙'),
			_Utils_Tuple2('Element', '∈'),
			_Utils_Tuple2('elinters', '⏧'),
			_Utils_Tuple2('ell', 'ℓ'),
			_Utils_Tuple2('els', '⪕'),
			_Utils_Tuple2('elsdot', '⪗'),
			_Utils_Tuple2('Emacr', 'Ē'),
			_Utils_Tuple2('emacr', 'ē'),
			_Utils_Tuple2('empty', '∅'),
			_Utils_Tuple2('emptyset', '∅'),
			_Utils_Tuple2('EmptySmallSquare', '◻'),
			_Utils_Tuple2('emptyv', '∅'),
			_Utils_Tuple2('EmptyVerySmallSquare', '▫'),
			_Utils_Tuple2('emsp13', '\u2004'),
			_Utils_Tuple2('emsp14', '\u2005'),
			_Utils_Tuple2('emsp', '\u2003'),
			_Utils_Tuple2('ENG', 'Ŋ'),
			_Utils_Tuple2('eng', 'ŋ'),
			_Utils_Tuple2('ensp', '\u2002'),
			_Utils_Tuple2('Eogon', 'Ę'),
			_Utils_Tuple2('eogon', 'ę'),
			_Utils_Tuple2('Eopf', '\ud835\udd3c'),
			_Utils_Tuple2('eopf', '\ud835\udd56'),
			_Utils_Tuple2('epar', '⋕'),
			_Utils_Tuple2('eparsl', '⧣'),
			_Utils_Tuple2('eplus', '⩱'),
			_Utils_Tuple2('epsi', 'ε'),
			_Utils_Tuple2('Epsilon', 'Ε'),
			_Utils_Tuple2('epsilon', 'ε'),
			_Utils_Tuple2('epsiv', 'ϵ'),
			_Utils_Tuple2('eqcirc', '≖'),
			_Utils_Tuple2('eqcolon', '≕'),
			_Utils_Tuple2('eqsim', '≂'),
			_Utils_Tuple2('eqslantgtr', '⪖'),
			_Utils_Tuple2('eqslantless', '⪕'),
			_Utils_Tuple2('Equal', '⩵'),
			_Utils_Tuple2('equals', '='),
			_Utils_Tuple2('EqualTilde', '≂'),
			_Utils_Tuple2('equest', '≟'),
			_Utils_Tuple2('Equilibrium', '⇌'),
			_Utils_Tuple2('equiv', '≡'),
			_Utils_Tuple2('equivDD', '⩸'),
			_Utils_Tuple2('eqvparsl', '⧥'),
			_Utils_Tuple2('erarr', '⥱'),
			_Utils_Tuple2('erDot', '≓'),
			_Utils_Tuple2('escr', 'ℯ'),
			_Utils_Tuple2('Escr', 'ℰ'),
			_Utils_Tuple2('esdot', '≐'),
			_Utils_Tuple2('Esim', '⩳'),
			_Utils_Tuple2('esim', '≂'),
			_Utils_Tuple2('Eta', 'Η'),
			_Utils_Tuple2('eta', 'η'),
			_Utils_Tuple2('ETH', 'Ð'),
			_Utils_Tuple2('eth', 'ð'),
			_Utils_Tuple2('Euml', 'Ë'),
			_Utils_Tuple2('euml', 'ë'),
			_Utils_Tuple2('euro', '€'),
			_Utils_Tuple2('excl', '!'),
			_Utils_Tuple2('exist', '∃'),
			_Utils_Tuple2('Exists', '∃'),
			_Utils_Tuple2('expectation', 'ℰ'),
			_Utils_Tuple2('exponentiale', 'ⅇ'),
			_Utils_Tuple2('ExponentialE', 'ⅇ'),
			_Utils_Tuple2('fallingdotseq', '≒'),
			_Utils_Tuple2('Fcy', 'Ф'),
			_Utils_Tuple2('fcy', 'ф'),
			_Utils_Tuple2('female', '♀'),
			_Utils_Tuple2('ffilig', 'ﬃ'),
			_Utils_Tuple2('fflig', 'ﬀ'),
			_Utils_Tuple2('ffllig', 'ﬄ'),
			_Utils_Tuple2('Ffr', '\ud835\udd09'),
			_Utils_Tuple2('ffr', '\ud835\udd23'),
			_Utils_Tuple2('filig', 'ﬁ'),
			_Utils_Tuple2('FilledSmallSquare', '◼'),
			_Utils_Tuple2('FilledVerySmallSquare', '▪'),
			_Utils_Tuple2('fjlig', 'fj'),
			_Utils_Tuple2('flat', '♭'),
			_Utils_Tuple2('fllig', 'ﬂ'),
			_Utils_Tuple2('fltns', '▱'),
			_Utils_Tuple2('fnof', 'ƒ'),
			_Utils_Tuple2('Fopf', '\ud835\udd3d'),
			_Utils_Tuple2('fopf', '\ud835\udd57'),
			_Utils_Tuple2('forall', '∀'),
			_Utils_Tuple2('ForAll', '∀'),
			_Utils_Tuple2('fork', '⋔'),
			_Utils_Tuple2('forkv', '⫙'),
			_Utils_Tuple2('Fouriertrf', 'ℱ'),
			_Utils_Tuple2('fpartint', '⨍'),
			_Utils_Tuple2('frac12', '½'),
			_Utils_Tuple2('frac13', '⅓'),
			_Utils_Tuple2('frac14', '¼'),
			_Utils_Tuple2('frac15', '⅕'),
			_Utils_Tuple2('frac16', '⅙'),
			_Utils_Tuple2('frac18', '⅛'),
			_Utils_Tuple2('frac23', '⅔'),
			_Utils_Tuple2('frac25', '⅖'),
			_Utils_Tuple2('frac34', '¾'),
			_Utils_Tuple2('frac35', '⅗'),
			_Utils_Tuple2('frac38', '⅜'),
			_Utils_Tuple2('frac45', '⅘'),
			_Utils_Tuple2('frac56', '⅚'),
			_Utils_Tuple2('frac58', '⅝'),
			_Utils_Tuple2('frac78', '⅞'),
			_Utils_Tuple2('frasl', '⁄'),
			_Utils_Tuple2('frown', '⌢'),
			_Utils_Tuple2('fscr', '\ud835\udcbb'),
			_Utils_Tuple2('Fscr', 'ℱ'),
			_Utils_Tuple2('gacute', 'ǵ'),
			_Utils_Tuple2('Gamma', 'Γ'),
			_Utils_Tuple2('gamma', 'γ'),
			_Utils_Tuple2('Gammad', 'Ϝ'),
			_Utils_Tuple2('gammad', 'ϝ'),
			_Utils_Tuple2('gap', '⪆'),
			_Utils_Tuple2('Gbreve', 'Ğ'),
			_Utils_Tuple2('gbreve', 'ğ'),
			_Utils_Tuple2('Gcedil', 'Ģ'),
			_Utils_Tuple2('Gcirc', 'Ĝ'),
			_Utils_Tuple2('gcirc', 'ĝ'),
			_Utils_Tuple2('Gcy', 'Г'),
			_Utils_Tuple2('gcy', 'г'),
			_Utils_Tuple2('Gdot', 'Ġ'),
			_Utils_Tuple2('gdot', 'ġ'),
			_Utils_Tuple2('ge', '≥'),
			_Utils_Tuple2('gE', '≧'),
			_Utils_Tuple2('gEl', '⪌'),
			_Utils_Tuple2('gel', '⋛'),
			_Utils_Tuple2('geq', '≥'),
			_Utils_Tuple2('geqq', '≧'),
			_Utils_Tuple2('geqslant', '⩾'),
			_Utils_Tuple2('gescc', '⪩'),
			_Utils_Tuple2('ges', '⩾'),
			_Utils_Tuple2('gesdot', '⪀'),
			_Utils_Tuple2('gesdoto', '⪂'),
			_Utils_Tuple2('gesdotol', '⪄'),
			_Utils_Tuple2('gesl', '⋛︀'),
			_Utils_Tuple2('gesles', '⪔'),
			_Utils_Tuple2('Gfr', '\ud835\udd0a'),
			_Utils_Tuple2('gfr', '\ud835\udd24'),
			_Utils_Tuple2('gg', '≫'),
			_Utils_Tuple2('Gg', '⋙'),
			_Utils_Tuple2('ggg', '⋙'),
			_Utils_Tuple2('gimel', 'ℷ'),
			_Utils_Tuple2('GJcy', 'Ѓ'),
			_Utils_Tuple2('gjcy', 'ѓ'),
			_Utils_Tuple2('gla', '⪥'),
			_Utils_Tuple2('gl', '≷'),
			_Utils_Tuple2('glE', '⪒'),
			_Utils_Tuple2('glj', '⪤'),
			_Utils_Tuple2('gnap', '⪊'),
			_Utils_Tuple2('gnapprox', '⪊'),
			_Utils_Tuple2('gne', '⪈'),
			_Utils_Tuple2('gnE', '≩'),
			_Utils_Tuple2('gneq', '⪈'),
			_Utils_Tuple2('gneqq', '≩'),
			_Utils_Tuple2('gnsim', '⋧'),
			_Utils_Tuple2('Gopf', '\ud835\udd3e'),
			_Utils_Tuple2('gopf', '\ud835\udd58'),
			_Utils_Tuple2('grave', '`'),
			_Utils_Tuple2('GreaterEqual', '≥'),
			_Utils_Tuple2('GreaterEqualLess', '⋛'),
			_Utils_Tuple2('GreaterFullEqual', '≧'),
			_Utils_Tuple2('GreaterGreater', '⪢'),
			_Utils_Tuple2('GreaterLess', '≷'),
			_Utils_Tuple2('GreaterSlantEqual', '⩾'),
			_Utils_Tuple2('GreaterTilde', '≳'),
			_Utils_Tuple2('Gscr', '\ud835\udca2'),
			_Utils_Tuple2('gscr', 'ℊ'),
			_Utils_Tuple2('gsim', '≳'),
			_Utils_Tuple2('gsime', '⪎'),
			_Utils_Tuple2('gsiml', '⪐'),
			_Utils_Tuple2('gtcc', '⪧'),
			_Utils_Tuple2('gtcir', '⩺'),
			_Utils_Tuple2('gt', '>'),
			_Utils_Tuple2('GT', '>'),
			_Utils_Tuple2('Gt', '≫'),
			_Utils_Tuple2('gtdot', '⋗'),
			_Utils_Tuple2('gtlPar', '⦕'),
			_Utils_Tuple2('gtquest', '⩼'),
			_Utils_Tuple2('gtrapprox', '⪆'),
			_Utils_Tuple2('gtrarr', '⥸'),
			_Utils_Tuple2('gtrdot', '⋗'),
			_Utils_Tuple2('gtreqless', '⋛'),
			_Utils_Tuple2('gtreqqless', '⪌'),
			_Utils_Tuple2('gtrless', '≷'),
			_Utils_Tuple2('gtrsim', '≳'),
			_Utils_Tuple2('gvertneqq', '≩︀'),
			_Utils_Tuple2('gvnE', '≩︀'),
			_Utils_Tuple2('Hacek', 'ˇ'),
			_Utils_Tuple2('hairsp', '\u200a'),
			_Utils_Tuple2('half', '½'),
			_Utils_Tuple2('hamilt', 'ℋ'),
			_Utils_Tuple2('HARDcy', 'Ъ'),
			_Utils_Tuple2('hardcy', 'ъ'),
			_Utils_Tuple2('harrcir', '⥈'),
			_Utils_Tuple2('harr', '↔'),
			_Utils_Tuple2('hArr', '⇔'),
			_Utils_Tuple2('harrw', '↭'),
			_Utils_Tuple2('Hat', '^'),
			_Utils_Tuple2('hbar', 'ℏ'),
			_Utils_Tuple2('Hcirc', 'Ĥ'),
			_Utils_Tuple2('hcirc', 'ĥ'),
			_Utils_Tuple2('hearts', '♥'),
			_Utils_Tuple2('heartsuit', '♥'),
			_Utils_Tuple2('hellip', '…'),
			_Utils_Tuple2('hercon', '⊹'),
			_Utils_Tuple2('hfr', '\ud835\udd25'),
			_Utils_Tuple2('Hfr', 'ℌ'),
			_Utils_Tuple2('HilbertSpace', 'ℋ'),
			_Utils_Tuple2('hksearow', '⤥'),
			_Utils_Tuple2('hkswarow', '⤦'),
			_Utils_Tuple2('hoarr', '⇿'),
			_Utils_Tuple2('homtht', '∻'),
			_Utils_Tuple2('hookleftarrow', '↩'),
			_Utils_Tuple2('hookrightarrow', '↪'),
			_Utils_Tuple2('hopf', '\ud835\udd59'),
			_Utils_Tuple2('Hopf', 'ℍ'),
			_Utils_Tuple2('horbar', '―'),
			_Utils_Tuple2('HorizontalLine', '─'),
			_Utils_Tuple2('hscr', '\ud835\udcbd'),
			_Utils_Tuple2('Hscr', 'ℋ'),
			_Utils_Tuple2('hslash', 'ℏ'),
			_Utils_Tuple2('Hstrok', 'Ħ'),
			_Utils_Tuple2('hstrok', 'ħ'),
			_Utils_Tuple2('HumpDownHump', '≎'),
			_Utils_Tuple2('HumpEqual', '≏'),
			_Utils_Tuple2('hybull', '⁃'),
			_Utils_Tuple2('hyphen', '‐'),
			_Utils_Tuple2('Iacute', 'Í'),
			_Utils_Tuple2('iacute', 'í'),
			_Utils_Tuple2('ic', '\u2063'),
			_Utils_Tuple2('Icirc', 'Î'),
			_Utils_Tuple2('icirc', 'î'),
			_Utils_Tuple2('Icy', 'И'),
			_Utils_Tuple2('icy', 'и'),
			_Utils_Tuple2('Idot', 'İ'),
			_Utils_Tuple2('IEcy', 'Е'),
			_Utils_Tuple2('iecy', 'е'),
			_Utils_Tuple2('iexcl', '¡'),
			_Utils_Tuple2('iff', '⇔'),
			_Utils_Tuple2('ifr', '\ud835\udd26'),
			_Utils_Tuple2('Ifr', 'ℑ'),
			_Utils_Tuple2('Igrave', 'Ì'),
			_Utils_Tuple2('igrave', 'ì'),
			_Utils_Tuple2('ii', 'ⅈ'),
			_Utils_Tuple2('iiiint', '⨌'),
			_Utils_Tuple2('iiint', '∭'),
			_Utils_Tuple2('iinfin', '⧜'),
			_Utils_Tuple2('iiota', '℩'),
			_Utils_Tuple2('IJlig', 'Ĳ'),
			_Utils_Tuple2('ijlig', 'ĳ'),
			_Utils_Tuple2('Imacr', 'Ī'),
			_Utils_Tuple2('imacr', 'ī'),
			_Utils_Tuple2('image', 'ℑ'),
			_Utils_Tuple2('ImaginaryI', 'ⅈ'),
			_Utils_Tuple2('imagline', 'ℐ'),
			_Utils_Tuple2('imagpart', 'ℑ'),
			_Utils_Tuple2('imath', 'ı'),
			_Utils_Tuple2('Im', 'ℑ'),
			_Utils_Tuple2('imof', '⊷'),
			_Utils_Tuple2('imped', 'Ƶ'),
			_Utils_Tuple2('Implies', '⇒'),
			_Utils_Tuple2('incare', '℅'),
			_Utils_Tuple2('in', '∈'),
			_Utils_Tuple2('infin', '∞'),
			_Utils_Tuple2('infintie', '⧝'),
			_Utils_Tuple2('inodot', 'ı'),
			_Utils_Tuple2('intcal', '⊺'),
			_Utils_Tuple2('int', '∫'),
			_Utils_Tuple2('Int', '∬'),
			_Utils_Tuple2('integers', 'ℤ'),
			_Utils_Tuple2('Integral', '∫'),
			_Utils_Tuple2('intercal', '⊺'),
			_Utils_Tuple2('Intersection', '⋂'),
			_Utils_Tuple2('intlarhk', '⨗'),
			_Utils_Tuple2('intprod', '⨼'),
			_Utils_Tuple2('InvisibleComma', '\u2063'),
			_Utils_Tuple2('InvisibleTimes', '\u2062'),
			_Utils_Tuple2('IOcy', 'Ё'),
			_Utils_Tuple2('iocy', 'ё'),
			_Utils_Tuple2('Iogon', 'Į'),
			_Utils_Tuple2('iogon', 'į'),
			_Utils_Tuple2('Iopf', '\ud835\udd40'),
			_Utils_Tuple2('iopf', '\ud835\udd5a'),
			_Utils_Tuple2('Iota', 'Ι'),
			_Utils_Tuple2('iota', 'ι'),
			_Utils_Tuple2('iprod', '⨼'),
			_Utils_Tuple2('iquest', '¿'),
			_Utils_Tuple2('iscr', '\ud835\udcbe'),
			_Utils_Tuple2('Iscr', 'ℐ'),
			_Utils_Tuple2('isin', '∈'),
			_Utils_Tuple2('isindot', '⋵'),
			_Utils_Tuple2('isinE', '⋹'),
			_Utils_Tuple2('isins', '⋴'),
			_Utils_Tuple2('isinsv', '⋳'),
			_Utils_Tuple2('isinv', '∈'),
			_Utils_Tuple2('it', '\u2062'),
			_Utils_Tuple2('Itilde', 'Ĩ'),
			_Utils_Tuple2('itilde', 'ĩ'),
			_Utils_Tuple2('Iukcy', 'І'),
			_Utils_Tuple2('iukcy', 'і'),
			_Utils_Tuple2('Iuml', 'Ï'),
			_Utils_Tuple2('iuml', 'ï'),
			_Utils_Tuple2('Jcirc', 'Ĵ'),
			_Utils_Tuple2('jcirc', 'ĵ'),
			_Utils_Tuple2('Jcy', 'Й'),
			_Utils_Tuple2('jcy', 'й'),
			_Utils_Tuple2('Jfr', '\ud835\udd0d'),
			_Utils_Tuple2('jfr', '\ud835\udd27'),
			_Utils_Tuple2('jmath', 'ȷ'),
			_Utils_Tuple2('Jopf', '\ud835\udd41'),
			_Utils_Tuple2('jopf', '\ud835\udd5b'),
			_Utils_Tuple2('Jscr', '\ud835\udca5'),
			_Utils_Tuple2('jscr', '\ud835\udcbf'),
			_Utils_Tuple2('Jsercy', 'Ј'),
			_Utils_Tuple2('jsercy', 'ј'),
			_Utils_Tuple2('Jukcy', 'Є'),
			_Utils_Tuple2('jukcy', 'є'),
			_Utils_Tuple2('Kappa', 'Κ'),
			_Utils_Tuple2('kappa', 'κ'),
			_Utils_Tuple2('kappav', 'ϰ'),
			_Utils_Tuple2('Kcedil', 'Ķ'),
			_Utils_Tuple2('kcedil', 'ķ'),
			_Utils_Tuple2('Kcy', 'К'),
			_Utils_Tuple2('kcy', 'к'),
			_Utils_Tuple2('Kfr', '\ud835\udd0e'),
			_Utils_Tuple2('kfr', '\ud835\udd28'),
			_Utils_Tuple2('kgreen', 'ĸ'),
			_Utils_Tuple2('KHcy', 'Х'),
			_Utils_Tuple2('khcy', 'х'),
			_Utils_Tuple2('KJcy', 'Ќ'),
			_Utils_Tuple2('kjcy', 'ќ'),
			_Utils_Tuple2('Kopf', '\ud835\udd42'),
			_Utils_Tuple2('kopf', '\ud835\udd5c'),
			_Utils_Tuple2('Kscr', '\ud835\udca6'),
			_Utils_Tuple2('kscr', '\ud835\udcc0'),
			_Utils_Tuple2('lAarr', '⇚'),
			_Utils_Tuple2('Lacute', 'Ĺ'),
			_Utils_Tuple2('lacute', 'ĺ'),
			_Utils_Tuple2('laemptyv', '⦴'),
			_Utils_Tuple2('lagran', 'ℒ'),
			_Utils_Tuple2('Lambda', 'Λ'),
			_Utils_Tuple2('lambda', 'λ'),
			_Utils_Tuple2('lang', '⟨'),
			_Utils_Tuple2('Lang', '⟪'),
			_Utils_Tuple2('langd', '⦑'),
			_Utils_Tuple2('langle', '⟨'),
			_Utils_Tuple2('lap', '⪅'),
			_Utils_Tuple2('Laplacetrf', 'ℒ'),
			_Utils_Tuple2('laquo', '«'),
			_Utils_Tuple2('larrb', '⇤'),
			_Utils_Tuple2('larrbfs', '⤟'),
			_Utils_Tuple2('larr', '←'),
			_Utils_Tuple2('Larr', '↞'),
			_Utils_Tuple2('lArr', '⇐'),
			_Utils_Tuple2('larrfs', '⤝'),
			_Utils_Tuple2('larrhk', '↩'),
			_Utils_Tuple2('larrlp', '↫'),
			_Utils_Tuple2('larrpl', '⤹'),
			_Utils_Tuple2('larrsim', '⥳'),
			_Utils_Tuple2('larrtl', '↢'),
			_Utils_Tuple2('latail', '⤙'),
			_Utils_Tuple2('lAtail', '⤛'),
			_Utils_Tuple2('lat', '⪫'),
			_Utils_Tuple2('late', '⪭'),
			_Utils_Tuple2('lates', '⪭︀'),
			_Utils_Tuple2('lbarr', '⤌'),
			_Utils_Tuple2('lBarr', '⤎'),
			_Utils_Tuple2('lbbrk', '❲'),
			_Utils_Tuple2('lbrace', '{'),
			_Utils_Tuple2('lbrack', '['),
			_Utils_Tuple2('lbrke', '⦋'),
			_Utils_Tuple2('lbrksld', '⦏'),
			_Utils_Tuple2('lbrkslu', '⦍'),
			_Utils_Tuple2('Lcaron', 'Ľ'),
			_Utils_Tuple2('lcaron', 'ľ'),
			_Utils_Tuple2('Lcedil', 'Ļ'),
			_Utils_Tuple2('lcedil', 'ļ'),
			_Utils_Tuple2('lceil', '⌈'),
			_Utils_Tuple2('lcub', '{'),
			_Utils_Tuple2('Lcy', 'Л'),
			_Utils_Tuple2('lcy', 'л'),
			_Utils_Tuple2('ldca', '⤶'),
			_Utils_Tuple2('ldquo', '“'),
			_Utils_Tuple2('ldquor', '„'),
			_Utils_Tuple2('ldrdhar', '⥧'),
			_Utils_Tuple2('ldrushar', '⥋'),
			_Utils_Tuple2('ldsh', '↲'),
			_Utils_Tuple2('le', '≤'),
			_Utils_Tuple2('lE', '≦'),
			_Utils_Tuple2('LeftAngleBracket', '⟨'),
			_Utils_Tuple2('LeftArrowBar', '⇤'),
			_Utils_Tuple2('leftarrow', '←'),
			_Utils_Tuple2('LeftArrow', '←'),
			_Utils_Tuple2('Leftarrow', '⇐'),
			_Utils_Tuple2('LeftArrowRightArrow', '⇆'),
			_Utils_Tuple2('leftarrowtail', '↢'),
			_Utils_Tuple2('LeftCeiling', '⌈'),
			_Utils_Tuple2('LeftDoubleBracket', '⟦'),
			_Utils_Tuple2('LeftDownTeeVector', '⥡'),
			_Utils_Tuple2('LeftDownVectorBar', '⥙'),
			_Utils_Tuple2('LeftDownVector', '⇃'),
			_Utils_Tuple2('LeftFloor', '⌊'),
			_Utils_Tuple2('leftharpoondown', '↽'),
			_Utils_Tuple2('leftharpoonup', '↼'),
			_Utils_Tuple2('leftleftarrows', '⇇'),
			_Utils_Tuple2('leftrightarrow', '↔'),
			_Utils_Tuple2('LeftRightArrow', '↔'),
			_Utils_Tuple2('Leftrightarrow', '⇔'),
			_Utils_Tuple2('leftrightarrows', '⇆'),
			_Utils_Tuple2('leftrightharpoons', '⇋'),
			_Utils_Tuple2('leftrightsquigarrow', '↭'),
			_Utils_Tuple2('LeftRightVector', '⥎'),
			_Utils_Tuple2('LeftTeeArrow', '↤'),
			_Utils_Tuple2('LeftTee', '⊣'),
			_Utils_Tuple2('LeftTeeVector', '⥚'),
			_Utils_Tuple2('leftthreetimes', '⋋'),
			_Utils_Tuple2('LeftTriangleBar', '⧏'),
			_Utils_Tuple2('LeftTriangle', '⊲'),
			_Utils_Tuple2('LeftTriangleEqual', '⊴'),
			_Utils_Tuple2('LeftUpDownVector', '⥑'),
			_Utils_Tuple2('LeftUpTeeVector', '⥠'),
			_Utils_Tuple2('LeftUpVectorBar', '⥘'),
			_Utils_Tuple2('LeftUpVector', '↿'),
			_Utils_Tuple2('LeftVectorBar', '⥒'),
			_Utils_Tuple2('LeftVector', '↼'),
			_Utils_Tuple2('lEg', '⪋'),
			_Utils_Tuple2('leg', '⋚'),
			_Utils_Tuple2('leq', '≤'),
			_Utils_Tuple2('leqq', '≦'),
			_Utils_Tuple2('leqslant', '⩽'),
			_Utils_Tuple2('lescc', '⪨'),
			_Utils_Tuple2('les', '⩽'),
			_Utils_Tuple2('lesdot', '⩿'),
			_Utils_Tuple2('lesdoto', '⪁'),
			_Utils_Tuple2('lesdotor', '⪃'),
			_Utils_Tuple2('lesg', '⋚︀'),
			_Utils_Tuple2('lesges', '⪓'),
			_Utils_Tuple2('lessapprox', '⪅'),
			_Utils_Tuple2('lessdot', '⋖'),
			_Utils_Tuple2('lesseqgtr', '⋚'),
			_Utils_Tuple2('lesseqqgtr', '⪋'),
			_Utils_Tuple2('LessEqualGreater', '⋚'),
			_Utils_Tuple2('LessFullEqual', '≦'),
			_Utils_Tuple2('LessGreater', '≶'),
			_Utils_Tuple2('lessgtr', '≶'),
			_Utils_Tuple2('LessLess', '⪡'),
			_Utils_Tuple2('lesssim', '≲'),
			_Utils_Tuple2('LessSlantEqual', '⩽'),
			_Utils_Tuple2('LessTilde', '≲'),
			_Utils_Tuple2('lfisht', '⥼'),
			_Utils_Tuple2('lfloor', '⌊'),
			_Utils_Tuple2('Lfr', '\ud835\udd0f'),
			_Utils_Tuple2('lfr', '\ud835\udd29'),
			_Utils_Tuple2('lg', '≶'),
			_Utils_Tuple2('lgE', '⪑'),
			_Utils_Tuple2('lHar', '⥢'),
			_Utils_Tuple2('lhard', '↽'),
			_Utils_Tuple2('lharu', '↼'),
			_Utils_Tuple2('lharul', '⥪'),
			_Utils_Tuple2('lhblk', '▄'),
			_Utils_Tuple2('LJcy', 'Љ'),
			_Utils_Tuple2('ljcy', 'љ'),
			_Utils_Tuple2('llarr', '⇇'),
			_Utils_Tuple2('ll', '≪'),
			_Utils_Tuple2('Ll', '⋘'),
			_Utils_Tuple2('llcorner', '⌞'),
			_Utils_Tuple2('Lleftarrow', '⇚'),
			_Utils_Tuple2('llhard', '⥫'),
			_Utils_Tuple2('lltri', '◺'),
			_Utils_Tuple2('Lmidot', 'Ŀ'),
			_Utils_Tuple2('lmidot', 'ŀ'),
			_Utils_Tuple2('lmoustache', '⎰'),
			_Utils_Tuple2('lmoust', '⎰'),
			_Utils_Tuple2('lnap', '⪉'),
			_Utils_Tuple2('lnapprox', '⪉'),
			_Utils_Tuple2('lne', '⪇'),
			_Utils_Tuple2('lnE', '≨'),
			_Utils_Tuple2('lneq', '⪇'),
			_Utils_Tuple2('lneqq', '≨'),
			_Utils_Tuple2('lnsim', '⋦'),
			_Utils_Tuple2('loang', '⟬'),
			_Utils_Tuple2('loarr', '⇽'),
			_Utils_Tuple2('lobrk', '⟦'),
			_Utils_Tuple2('longleftarrow', '⟵'),
			_Utils_Tuple2('LongLeftArrow', '⟵'),
			_Utils_Tuple2('Longleftarrow', '⟸'),
			_Utils_Tuple2('longleftrightarrow', '⟷'),
			_Utils_Tuple2('LongLeftRightArrow', '⟷'),
			_Utils_Tuple2('Longleftrightarrow', '⟺'),
			_Utils_Tuple2('longmapsto', '⟼'),
			_Utils_Tuple2('longrightarrow', '⟶'),
			_Utils_Tuple2('LongRightArrow', '⟶'),
			_Utils_Tuple2('Longrightarrow', '⟹'),
			_Utils_Tuple2('looparrowleft', '↫'),
			_Utils_Tuple2('looparrowright', '↬'),
			_Utils_Tuple2('lopar', '⦅'),
			_Utils_Tuple2('Lopf', '\ud835\udd43'),
			_Utils_Tuple2('lopf', '\ud835\udd5d'),
			_Utils_Tuple2('loplus', '⨭'),
			_Utils_Tuple2('lotimes', '⨴'),
			_Utils_Tuple2('lowast', '∗'),
			_Utils_Tuple2('lowbar', '_'),
			_Utils_Tuple2('LowerLeftArrow', '↙'),
			_Utils_Tuple2('LowerRightArrow', '↘'),
			_Utils_Tuple2('loz', '◊'),
			_Utils_Tuple2('lozenge', '◊'),
			_Utils_Tuple2('lozf', '⧫'),
			_Utils_Tuple2('lpar', '('),
			_Utils_Tuple2('lparlt', '⦓'),
			_Utils_Tuple2('lrarr', '⇆'),
			_Utils_Tuple2('lrcorner', '⌟'),
			_Utils_Tuple2('lrhar', '⇋'),
			_Utils_Tuple2('lrhard', '⥭'),
			_Utils_Tuple2('lrm', '\u200e'),
			_Utils_Tuple2('lrtri', '⊿'),
			_Utils_Tuple2('lsaquo', '‹'),
			_Utils_Tuple2('lscr', '\ud835\udcc1'),
			_Utils_Tuple2('Lscr', 'ℒ'),
			_Utils_Tuple2('lsh', '↰'),
			_Utils_Tuple2('Lsh', '↰'),
			_Utils_Tuple2('lsim', '≲'),
			_Utils_Tuple2('lsime', '⪍'),
			_Utils_Tuple2('lsimg', '⪏'),
			_Utils_Tuple2('lsqb', '['),
			_Utils_Tuple2('lsquo', '‘'),
			_Utils_Tuple2('lsquor', '‚'),
			_Utils_Tuple2('Lstrok', 'Ł'),
			_Utils_Tuple2('lstrok', 'ł'),
			_Utils_Tuple2('ltcc', '⪦'),
			_Utils_Tuple2('ltcir', '⩹'),
			_Utils_Tuple2('lt', '<'),
			_Utils_Tuple2('LT', '<'),
			_Utils_Tuple2('Lt', '≪'),
			_Utils_Tuple2('ltdot', '⋖'),
			_Utils_Tuple2('lthree', '⋋'),
			_Utils_Tuple2('ltimes', '⋉'),
			_Utils_Tuple2('ltlarr', '⥶'),
			_Utils_Tuple2('ltquest', '⩻'),
			_Utils_Tuple2('ltri', '◃'),
			_Utils_Tuple2('ltrie', '⊴'),
			_Utils_Tuple2('ltrif', '◂'),
			_Utils_Tuple2('ltrPar', '⦖'),
			_Utils_Tuple2('lurdshar', '⥊'),
			_Utils_Tuple2('luruhar', '⥦'),
			_Utils_Tuple2('lvertneqq', '≨︀'),
			_Utils_Tuple2('lvnE', '≨︀'),
			_Utils_Tuple2('macr', '¯'),
			_Utils_Tuple2('male', '♂'),
			_Utils_Tuple2('malt', '✠'),
			_Utils_Tuple2('maltese', '✠'),
			_Utils_Tuple2('Map', '⤅'),
			_Utils_Tuple2('map', '↦'),
			_Utils_Tuple2('mapsto', '↦'),
			_Utils_Tuple2('mapstodown', '↧'),
			_Utils_Tuple2('mapstoleft', '↤'),
			_Utils_Tuple2('mapstoup', '↥'),
			_Utils_Tuple2('marker', '▮'),
			_Utils_Tuple2('mcomma', '⨩'),
			_Utils_Tuple2('Mcy', 'М'),
			_Utils_Tuple2('mcy', 'м'),
			_Utils_Tuple2('mdash', '—'),
			_Utils_Tuple2('mDDot', '∺'),
			_Utils_Tuple2('measuredangle', '∡'),
			_Utils_Tuple2('MediumSpace', '\u205f'),
			_Utils_Tuple2('Mellintrf', 'ℳ'),
			_Utils_Tuple2('Mfr', '\ud835\udd10'),
			_Utils_Tuple2('mfr', '\ud835\udd2a'),
			_Utils_Tuple2('mho', '℧'),
			_Utils_Tuple2('micro', 'µ'),
			_Utils_Tuple2('midast', '*'),
			_Utils_Tuple2('midcir', '⫰'),
			_Utils_Tuple2('mid', '∣'),
			_Utils_Tuple2('middot', '·'),
			_Utils_Tuple2('minusb', '⊟'),
			_Utils_Tuple2('minus', '−'),
			_Utils_Tuple2('minusd', '∸'),
			_Utils_Tuple2('minusdu', '⨪'),
			_Utils_Tuple2('MinusPlus', '∓'),
			_Utils_Tuple2('mlcp', '⫛'),
			_Utils_Tuple2('mldr', '…'),
			_Utils_Tuple2('mnplus', '∓'),
			_Utils_Tuple2('models', '⊧'),
			_Utils_Tuple2('Mopf', '\ud835\udd44'),
			_Utils_Tuple2('mopf', '\ud835\udd5e'),
			_Utils_Tuple2('mp', '∓'),
			_Utils_Tuple2('mscr', '\ud835\udcc2'),
			_Utils_Tuple2('Mscr', 'ℳ'),
			_Utils_Tuple2('mstpos', '∾'),
			_Utils_Tuple2('Mu', 'Μ'),
			_Utils_Tuple2('mu', 'μ'),
			_Utils_Tuple2('multimap', '⊸'),
			_Utils_Tuple2('mumap', '⊸'),
			_Utils_Tuple2('nabla', '∇'),
			_Utils_Tuple2('Nacute', 'Ń'),
			_Utils_Tuple2('nacute', 'ń'),
			_Utils_Tuple2('nang', '∠⃒'),
			_Utils_Tuple2('nap', '≉'),
			_Utils_Tuple2('napE', '⩰̸'),
			_Utils_Tuple2('napid', '≋̸'),
			_Utils_Tuple2('napos', 'ŉ'),
			_Utils_Tuple2('napprox', '≉'),
			_Utils_Tuple2('natural', '♮'),
			_Utils_Tuple2('naturals', 'ℕ'),
			_Utils_Tuple2('natur', '♮'),
			_Utils_Tuple2('nbsp', '\u00a0'),
			_Utils_Tuple2('nbump', '≎̸'),
			_Utils_Tuple2('nbumpe', '≏̸'),
			_Utils_Tuple2('ncap', '⩃'),
			_Utils_Tuple2('Ncaron', 'Ň'),
			_Utils_Tuple2('ncaron', 'ň'),
			_Utils_Tuple2('Ncedil', 'Ņ'),
			_Utils_Tuple2('ncedil', 'ņ'),
			_Utils_Tuple2('ncong', '≇'),
			_Utils_Tuple2('ncongdot', '⩭̸'),
			_Utils_Tuple2('ncup', '⩂'),
			_Utils_Tuple2('Ncy', 'Н'),
			_Utils_Tuple2('ncy', 'н'),
			_Utils_Tuple2('ndash', '–'),
			_Utils_Tuple2('nearhk', '⤤'),
			_Utils_Tuple2('nearr', '↗'),
			_Utils_Tuple2('neArr', '⇗'),
			_Utils_Tuple2('nearrow', '↗'),
			_Utils_Tuple2('ne', '≠'),
			_Utils_Tuple2('nedot', '≐̸'),
			_Utils_Tuple2('NegativeMediumSpace', '\u200b'),
			_Utils_Tuple2('NegativeThickSpace', '\u200b'),
			_Utils_Tuple2('NegativeThinSpace', '\u200b'),
			_Utils_Tuple2('NegativeVeryThinSpace', '\u200b'),
			_Utils_Tuple2('nequiv', '≢'),
			_Utils_Tuple2('nesear', '⤨'),
			_Utils_Tuple2('nesim', '≂̸'),
			_Utils_Tuple2('NestedGreaterGreater', '≫'),
			_Utils_Tuple2('NestedLessLess', '≪'),
			_Utils_Tuple2('NewLine', '\n'),
			_Utils_Tuple2('nexist', '∄'),
			_Utils_Tuple2('nexists', '∄'),
			_Utils_Tuple2('Nfr', '\ud835\udd11'),
			_Utils_Tuple2('nfr', '\ud835\udd2b'),
			_Utils_Tuple2('ngE', '≧̸'),
			_Utils_Tuple2('nge', '≱'),
			_Utils_Tuple2('ngeq', '≱'),
			_Utils_Tuple2('ngeqq', '≧̸'),
			_Utils_Tuple2('ngeqslant', '⩾̸'),
			_Utils_Tuple2('nges', '⩾̸'),
			_Utils_Tuple2('nGg', '⋙̸'),
			_Utils_Tuple2('ngsim', '≵'),
			_Utils_Tuple2('nGt', '≫⃒'),
			_Utils_Tuple2('ngt', '≯'),
			_Utils_Tuple2('ngtr', '≯'),
			_Utils_Tuple2('nGtv', '≫̸'),
			_Utils_Tuple2('nharr', '↮'),
			_Utils_Tuple2('nhArr', '⇎'),
			_Utils_Tuple2('nhpar', '⫲'),
			_Utils_Tuple2('ni', '∋'),
			_Utils_Tuple2('nis', '⋼'),
			_Utils_Tuple2('nisd', '⋺'),
			_Utils_Tuple2('niv', '∋'),
			_Utils_Tuple2('NJcy', 'Њ'),
			_Utils_Tuple2('njcy', 'њ'),
			_Utils_Tuple2('nlarr', '↚'),
			_Utils_Tuple2('nlArr', '⇍'),
			_Utils_Tuple2('nldr', '‥'),
			_Utils_Tuple2('nlE', '≦̸'),
			_Utils_Tuple2('nle', '≰'),
			_Utils_Tuple2('nleftarrow', '↚'),
			_Utils_Tuple2('nLeftarrow', '⇍'),
			_Utils_Tuple2('nleftrightarrow', '↮'),
			_Utils_Tuple2('nLeftrightarrow', '⇎'),
			_Utils_Tuple2('nleq', '≰'),
			_Utils_Tuple2('nleqq', '≦̸'),
			_Utils_Tuple2('nleqslant', '⩽̸'),
			_Utils_Tuple2('nles', '⩽̸'),
			_Utils_Tuple2('nless', '≮'),
			_Utils_Tuple2('nLl', '⋘̸'),
			_Utils_Tuple2('nlsim', '≴'),
			_Utils_Tuple2('nLt', '≪⃒'),
			_Utils_Tuple2('nlt', '≮'),
			_Utils_Tuple2('nltri', '⋪'),
			_Utils_Tuple2('nltrie', '⋬'),
			_Utils_Tuple2('nLtv', '≪̸'),
			_Utils_Tuple2('nmid', '∤'),
			_Utils_Tuple2('NoBreak', '\u2060'),
			_Utils_Tuple2('NonBreakingSpace', '\u00a0'),
			_Utils_Tuple2('nopf', '\ud835\udd5f'),
			_Utils_Tuple2('Nopf', 'ℕ'),
			_Utils_Tuple2('Not', '⫬'),
			_Utils_Tuple2('not', '¬'),
			_Utils_Tuple2('NotCongruent', '≢'),
			_Utils_Tuple2('NotCupCap', '≭'),
			_Utils_Tuple2('NotDoubleVerticalBar', '∦'),
			_Utils_Tuple2('NotElement', '∉'),
			_Utils_Tuple2('NotEqual', '≠'),
			_Utils_Tuple2('NotEqualTilde', '≂̸'),
			_Utils_Tuple2('NotExists', '∄'),
			_Utils_Tuple2('NotGreater', '≯'),
			_Utils_Tuple2('NotGreaterEqual', '≱'),
			_Utils_Tuple2('NotGreaterFullEqual', '≧̸'),
			_Utils_Tuple2('NotGreaterGreater', '≫̸'),
			_Utils_Tuple2('NotGreaterLess', '≹'),
			_Utils_Tuple2('NotGreaterSlantEqual', '⩾̸'),
			_Utils_Tuple2('NotGreaterTilde', '≵'),
			_Utils_Tuple2('NotHumpDownHump', '≎̸'),
			_Utils_Tuple2('NotHumpEqual', '≏̸'),
			_Utils_Tuple2('notin', '∉'),
			_Utils_Tuple2('notindot', '⋵̸'),
			_Utils_Tuple2('notinE', '⋹̸'),
			_Utils_Tuple2('notinva', '∉'),
			_Utils_Tuple2('notinvb', '⋷'),
			_Utils_Tuple2('notinvc', '⋶'),
			_Utils_Tuple2('NotLeftTriangleBar', '⧏̸'),
			_Utils_Tuple2('NotLeftTriangle', '⋪'),
			_Utils_Tuple2('NotLeftTriangleEqual', '⋬'),
			_Utils_Tuple2('NotLess', '≮'),
			_Utils_Tuple2('NotLessEqual', '≰'),
			_Utils_Tuple2('NotLessGreater', '≸'),
			_Utils_Tuple2('NotLessLess', '≪̸'),
			_Utils_Tuple2('NotLessSlantEqual', '⩽̸'),
			_Utils_Tuple2('NotLessTilde', '≴'),
			_Utils_Tuple2('NotNestedGreaterGreater', '⪢̸'),
			_Utils_Tuple2('NotNestedLessLess', '⪡̸'),
			_Utils_Tuple2('notni', '∌'),
			_Utils_Tuple2('notniva', '∌'),
			_Utils_Tuple2('notnivb', '⋾'),
			_Utils_Tuple2('notnivc', '⋽'),
			_Utils_Tuple2('NotPrecedes', '⊀'),
			_Utils_Tuple2('NotPrecedesEqual', '⪯̸'),
			_Utils_Tuple2('NotPrecedesSlantEqual', '⋠'),
			_Utils_Tuple2('NotReverseElement', '∌'),
			_Utils_Tuple2('NotRightTriangleBar', '⧐̸'),
			_Utils_Tuple2('NotRightTriangle', '⋫'),
			_Utils_Tuple2('NotRightTriangleEqual', '⋭'),
			_Utils_Tuple2('NotSquareSubset', '⊏̸'),
			_Utils_Tuple2('NotSquareSubsetEqual', '⋢'),
			_Utils_Tuple2('NotSquareSuperset', '⊐̸'),
			_Utils_Tuple2('NotSquareSupersetEqual', '⋣'),
			_Utils_Tuple2('NotSubset', '⊂⃒'),
			_Utils_Tuple2('NotSubsetEqual', '⊈'),
			_Utils_Tuple2('NotSucceeds', '⊁'),
			_Utils_Tuple2('NotSucceedsEqual', '⪰̸'),
			_Utils_Tuple2('NotSucceedsSlantEqual', '⋡'),
			_Utils_Tuple2('NotSucceedsTilde', '≿̸'),
			_Utils_Tuple2('NotSuperset', '⊃⃒'),
			_Utils_Tuple2('NotSupersetEqual', '⊉'),
			_Utils_Tuple2('NotTilde', '≁'),
			_Utils_Tuple2('NotTildeEqual', '≄'),
			_Utils_Tuple2('NotTildeFullEqual', '≇'),
			_Utils_Tuple2('NotTildeTilde', '≉'),
			_Utils_Tuple2('NotVerticalBar', '∤'),
			_Utils_Tuple2('nparallel', '∦'),
			_Utils_Tuple2('npar', '∦'),
			_Utils_Tuple2('nparsl', '⫽⃥'),
			_Utils_Tuple2('npart', '∂̸'),
			_Utils_Tuple2('npolint', '⨔'),
			_Utils_Tuple2('npr', '⊀'),
			_Utils_Tuple2('nprcue', '⋠'),
			_Utils_Tuple2('nprec', '⊀'),
			_Utils_Tuple2('npreceq', '⪯̸'),
			_Utils_Tuple2('npre', '⪯̸'),
			_Utils_Tuple2('nrarrc', '⤳̸'),
			_Utils_Tuple2('nrarr', '↛'),
			_Utils_Tuple2('nrArr', '⇏'),
			_Utils_Tuple2('nrarrw', '↝̸'),
			_Utils_Tuple2('nrightarrow', '↛'),
			_Utils_Tuple2('nRightarrow', '⇏'),
			_Utils_Tuple2('nrtri', '⋫'),
			_Utils_Tuple2('nrtrie', '⋭'),
			_Utils_Tuple2('nsc', '⊁'),
			_Utils_Tuple2('nsccue', '⋡'),
			_Utils_Tuple2('nsce', '⪰̸'),
			_Utils_Tuple2('Nscr', '\ud835\udca9'),
			_Utils_Tuple2('nscr', '\ud835\udcc3'),
			_Utils_Tuple2('nshortmid', '∤'),
			_Utils_Tuple2('nshortparallel', '∦'),
			_Utils_Tuple2('nsim', '≁'),
			_Utils_Tuple2('nsime', '≄'),
			_Utils_Tuple2('nsimeq', '≄'),
			_Utils_Tuple2('nsmid', '∤'),
			_Utils_Tuple2('nspar', '∦'),
			_Utils_Tuple2('nsqsube', '⋢'),
			_Utils_Tuple2('nsqsupe', '⋣'),
			_Utils_Tuple2('nsub', '⊄'),
			_Utils_Tuple2('nsubE', '⫅̸'),
			_Utils_Tuple2('nsube', '⊈'),
			_Utils_Tuple2('nsubset', '⊂⃒'),
			_Utils_Tuple2('nsubseteq', '⊈'),
			_Utils_Tuple2('nsubseteqq', '⫅̸'),
			_Utils_Tuple2('nsucc', '⊁'),
			_Utils_Tuple2('nsucceq', '⪰̸'),
			_Utils_Tuple2('nsup', '⊅'),
			_Utils_Tuple2('nsupE', '⫆̸'),
			_Utils_Tuple2('nsupe', '⊉'),
			_Utils_Tuple2('nsupset', '⊃⃒'),
			_Utils_Tuple2('nsupseteq', '⊉'),
			_Utils_Tuple2('nsupseteqq', '⫆̸'),
			_Utils_Tuple2('ntgl', '≹'),
			_Utils_Tuple2('Ntilde', 'Ñ'),
			_Utils_Tuple2('ntilde', 'ñ'),
			_Utils_Tuple2('ntlg', '≸'),
			_Utils_Tuple2('ntriangleleft', '⋪'),
			_Utils_Tuple2('ntrianglelefteq', '⋬'),
			_Utils_Tuple2('ntriangleright', '⋫'),
			_Utils_Tuple2('ntrianglerighteq', '⋭'),
			_Utils_Tuple2('Nu', 'Ν'),
			_Utils_Tuple2('nu', 'ν'),
			_Utils_Tuple2('num', '#'),
			_Utils_Tuple2('numero', '№'),
			_Utils_Tuple2('numsp', '\u2007'),
			_Utils_Tuple2('nvap', '≍⃒'),
			_Utils_Tuple2('nvdash', '⊬'),
			_Utils_Tuple2('nvDash', '⊭'),
			_Utils_Tuple2('nVdash', '⊮'),
			_Utils_Tuple2('nVDash', '⊯'),
			_Utils_Tuple2('nvge', '≥⃒'),
			_Utils_Tuple2('nvgt', '>⃒'),
			_Utils_Tuple2('nvHarr', '⤄'),
			_Utils_Tuple2('nvinfin', '⧞'),
			_Utils_Tuple2('nvlArr', '⤂'),
			_Utils_Tuple2('nvle', '≤⃒'),
			_Utils_Tuple2('nvlt', '<⃒'),
			_Utils_Tuple2('nvltrie', '⊴⃒'),
			_Utils_Tuple2('nvrArr', '⤃'),
			_Utils_Tuple2('nvrtrie', '⊵⃒'),
			_Utils_Tuple2('nvsim', '∼⃒'),
			_Utils_Tuple2('nwarhk', '⤣'),
			_Utils_Tuple2('nwarr', '↖'),
			_Utils_Tuple2('nwArr', '⇖'),
			_Utils_Tuple2('nwarrow', '↖'),
			_Utils_Tuple2('nwnear', '⤧'),
			_Utils_Tuple2('Oacute', 'Ó'),
			_Utils_Tuple2('oacute', 'ó'),
			_Utils_Tuple2('oast', '⊛'),
			_Utils_Tuple2('Ocirc', 'Ô'),
			_Utils_Tuple2('ocirc', 'ô'),
			_Utils_Tuple2('ocir', '⊚'),
			_Utils_Tuple2('Ocy', 'О'),
			_Utils_Tuple2('ocy', 'о'),
			_Utils_Tuple2('odash', '⊝'),
			_Utils_Tuple2('Odblac', 'Ő'),
			_Utils_Tuple2('odblac', 'ő'),
			_Utils_Tuple2('odiv', '⨸'),
			_Utils_Tuple2('odot', '⊙'),
			_Utils_Tuple2('odsold', '⦼'),
			_Utils_Tuple2('OElig', 'Œ'),
			_Utils_Tuple2('oelig', 'œ'),
			_Utils_Tuple2('ofcir', '⦿'),
			_Utils_Tuple2('Ofr', '\ud835\udd12'),
			_Utils_Tuple2('ofr', '\ud835\udd2c'),
			_Utils_Tuple2('ogon', '˛'),
			_Utils_Tuple2('Ograve', 'Ò'),
			_Utils_Tuple2('ograve', 'ò'),
			_Utils_Tuple2('ogt', '⧁'),
			_Utils_Tuple2('ohbar', '⦵'),
			_Utils_Tuple2('ohm', 'Ω'),
			_Utils_Tuple2('oint', '∮'),
			_Utils_Tuple2('olarr', '↺'),
			_Utils_Tuple2('olcir', '⦾'),
			_Utils_Tuple2('olcross', '⦻'),
			_Utils_Tuple2('oline', '‾'),
			_Utils_Tuple2('olt', '⧀'),
			_Utils_Tuple2('Omacr', 'Ō'),
			_Utils_Tuple2('omacr', 'ō'),
			_Utils_Tuple2('Omega', 'Ω'),
			_Utils_Tuple2('omega', 'ω'),
			_Utils_Tuple2('Omicron', 'Ο'),
			_Utils_Tuple2('omicron', 'ο'),
			_Utils_Tuple2('omid', '⦶'),
			_Utils_Tuple2('ominus', '⊖'),
			_Utils_Tuple2('Oopf', '\ud835\udd46'),
			_Utils_Tuple2('oopf', '\ud835\udd60'),
			_Utils_Tuple2('opar', '⦷'),
			_Utils_Tuple2('OpenCurlyDoubleQuote', '“'),
			_Utils_Tuple2('OpenCurlyQuote', '‘'),
			_Utils_Tuple2('operp', '⦹'),
			_Utils_Tuple2('oplus', '⊕'),
			_Utils_Tuple2('orarr', '↻'),
			_Utils_Tuple2('Or', '⩔'),
			_Utils_Tuple2('or', '∨'),
			_Utils_Tuple2('ord', '⩝'),
			_Utils_Tuple2('order', 'ℴ'),
			_Utils_Tuple2('orderof', 'ℴ'),
			_Utils_Tuple2('ordf', 'ª'),
			_Utils_Tuple2('ordm', 'º'),
			_Utils_Tuple2('origof', '⊶'),
			_Utils_Tuple2('oror', '⩖'),
			_Utils_Tuple2('orslope', '⩗'),
			_Utils_Tuple2('orv', '⩛'),
			_Utils_Tuple2('oS', 'Ⓢ'),
			_Utils_Tuple2('Oscr', '\ud835\udcaa'),
			_Utils_Tuple2('oscr', 'ℴ'),
			_Utils_Tuple2('Oslash', 'Ø'),
			_Utils_Tuple2('oslash', 'ø'),
			_Utils_Tuple2('osol', '⊘'),
			_Utils_Tuple2('Otilde', 'Õ'),
			_Utils_Tuple2('otilde', 'õ'),
			_Utils_Tuple2('otimesas', '⨶'),
			_Utils_Tuple2('Otimes', '⨷'),
			_Utils_Tuple2('otimes', '⊗'),
			_Utils_Tuple2('Ouml', 'Ö'),
			_Utils_Tuple2('ouml', 'ö'),
			_Utils_Tuple2('ovbar', '⌽'),
			_Utils_Tuple2('OverBar', '‾'),
			_Utils_Tuple2('OverBrace', '⏞'),
			_Utils_Tuple2('OverBracket', '⎴'),
			_Utils_Tuple2('OverParenthesis', '⏜'),
			_Utils_Tuple2('para', '¶'),
			_Utils_Tuple2('parallel', '∥'),
			_Utils_Tuple2('par', '∥'),
			_Utils_Tuple2('parsim', '⫳'),
			_Utils_Tuple2('parsl', '⫽'),
			_Utils_Tuple2('part', '∂'),
			_Utils_Tuple2('PartialD', '∂'),
			_Utils_Tuple2('Pcy', 'П'),
			_Utils_Tuple2('pcy', 'п'),
			_Utils_Tuple2('percnt', '%'),
			_Utils_Tuple2('period', '.'),
			_Utils_Tuple2('permil', '‰'),
			_Utils_Tuple2('perp', '⊥'),
			_Utils_Tuple2('pertenk', '‱'),
			_Utils_Tuple2('Pfr', '\ud835\udd13'),
			_Utils_Tuple2('pfr', '\ud835\udd2d'),
			_Utils_Tuple2('Phi', 'Φ'),
			_Utils_Tuple2('phi', 'φ'),
			_Utils_Tuple2('phiv', 'ϕ'),
			_Utils_Tuple2('phmmat', 'ℳ'),
			_Utils_Tuple2('phone', '☎'),
			_Utils_Tuple2('Pi', 'Π'),
			_Utils_Tuple2('pi', 'π'),
			_Utils_Tuple2('pitchfork', '⋔'),
			_Utils_Tuple2('piv', 'ϖ'),
			_Utils_Tuple2('planck', 'ℏ'),
			_Utils_Tuple2('planckh', 'ℎ'),
			_Utils_Tuple2('plankv', 'ℏ'),
			_Utils_Tuple2('plusacir', '⨣'),
			_Utils_Tuple2('plusb', '⊞'),
			_Utils_Tuple2('pluscir', '⨢'),
			_Utils_Tuple2('plus', '+'),
			_Utils_Tuple2('plusdo', '∔'),
			_Utils_Tuple2('plusdu', '⨥'),
			_Utils_Tuple2('pluse', '⩲'),
			_Utils_Tuple2('PlusMinus', '±'),
			_Utils_Tuple2('plusmn', '±'),
			_Utils_Tuple2('plussim', '⨦'),
			_Utils_Tuple2('plustwo', '⨧'),
			_Utils_Tuple2('pm', '±'),
			_Utils_Tuple2('Poincareplane', 'ℌ'),
			_Utils_Tuple2('pointint', '⨕'),
			_Utils_Tuple2('popf', '\ud835\udd61'),
			_Utils_Tuple2('Popf', 'ℙ'),
			_Utils_Tuple2('pound', '£'),
			_Utils_Tuple2('prap', '⪷'),
			_Utils_Tuple2('Pr', '⪻'),
			_Utils_Tuple2('pr', '≺'),
			_Utils_Tuple2('prcue', '≼'),
			_Utils_Tuple2('precapprox', '⪷'),
			_Utils_Tuple2('prec', '≺'),
			_Utils_Tuple2('preccurlyeq', '≼'),
			_Utils_Tuple2('Precedes', '≺'),
			_Utils_Tuple2('PrecedesEqual', '⪯'),
			_Utils_Tuple2('PrecedesSlantEqual', '≼'),
			_Utils_Tuple2('PrecedesTilde', '≾'),
			_Utils_Tuple2('preceq', '⪯'),
			_Utils_Tuple2('precnapprox', '⪹'),
			_Utils_Tuple2('precneqq', '⪵'),
			_Utils_Tuple2('precnsim', '⋨'),
			_Utils_Tuple2('pre', '⪯'),
			_Utils_Tuple2('prE', '⪳'),
			_Utils_Tuple2('precsim', '≾'),
			_Utils_Tuple2('prime', '′'),
			_Utils_Tuple2('Prime', '″'),
			_Utils_Tuple2('primes', 'ℙ'),
			_Utils_Tuple2('prnap', '⪹'),
			_Utils_Tuple2('prnE', '⪵'),
			_Utils_Tuple2('prnsim', '⋨'),
			_Utils_Tuple2('prod', '∏'),
			_Utils_Tuple2('Product', '∏'),
			_Utils_Tuple2('profalar', '⌮'),
			_Utils_Tuple2('profline', '⌒'),
			_Utils_Tuple2('profsurf', '⌓'),
			_Utils_Tuple2('prop', '∝'),
			_Utils_Tuple2('Proportional', '∝'),
			_Utils_Tuple2('Proportion', '∷'),
			_Utils_Tuple2('propto', '∝'),
			_Utils_Tuple2('prsim', '≾'),
			_Utils_Tuple2('prurel', '⊰'),
			_Utils_Tuple2('Pscr', '\ud835\udcab'),
			_Utils_Tuple2('pscr', '\ud835\udcc5'),
			_Utils_Tuple2('Psi', 'Ψ'),
			_Utils_Tuple2('psi', 'ψ'),
			_Utils_Tuple2('puncsp', '\u2008'),
			_Utils_Tuple2('Qfr', '\ud835\udd14'),
			_Utils_Tuple2('qfr', '\ud835\udd2e'),
			_Utils_Tuple2('qint', '⨌'),
			_Utils_Tuple2('qopf', '\ud835\udd62'),
			_Utils_Tuple2('Qopf', 'ℚ'),
			_Utils_Tuple2('qprime', '⁗'),
			_Utils_Tuple2('Qscr', '\ud835\udcac'),
			_Utils_Tuple2('qscr', '\ud835\udcc6'),
			_Utils_Tuple2('quaternions', 'ℍ'),
			_Utils_Tuple2('quatint', '⨖'),
			_Utils_Tuple2('quest', '?'),
			_Utils_Tuple2('questeq', '≟'),
			_Utils_Tuple2('quot', '\"'),
			_Utils_Tuple2('QUOT', '\"'),
			_Utils_Tuple2('rAarr', '⇛'),
			_Utils_Tuple2('race', '∽̱'),
			_Utils_Tuple2('Racute', 'Ŕ'),
			_Utils_Tuple2('racute', 'ŕ'),
			_Utils_Tuple2('radic', '√'),
			_Utils_Tuple2('raemptyv', '⦳'),
			_Utils_Tuple2('rang', '⟩'),
			_Utils_Tuple2('Rang', '⟫'),
			_Utils_Tuple2('rangd', '⦒'),
			_Utils_Tuple2('range', '⦥'),
			_Utils_Tuple2('rangle', '⟩'),
			_Utils_Tuple2('raquo', '»'),
			_Utils_Tuple2('rarrap', '⥵'),
			_Utils_Tuple2('rarrb', '⇥'),
			_Utils_Tuple2('rarrbfs', '⤠'),
			_Utils_Tuple2('rarrc', '⤳'),
			_Utils_Tuple2('rarr', '→'),
			_Utils_Tuple2('Rarr', '↠'),
			_Utils_Tuple2('rArr', '⇒'),
			_Utils_Tuple2('rarrfs', '⤞'),
			_Utils_Tuple2('rarrhk', '↪'),
			_Utils_Tuple2('rarrlp', '↬'),
			_Utils_Tuple2('rarrpl', '⥅'),
			_Utils_Tuple2('rarrsim', '⥴'),
			_Utils_Tuple2('Rarrtl', '⤖'),
			_Utils_Tuple2('rarrtl', '↣'),
			_Utils_Tuple2('rarrw', '↝'),
			_Utils_Tuple2('ratail', '⤚'),
			_Utils_Tuple2('rAtail', '⤜'),
			_Utils_Tuple2('ratio', '∶'),
			_Utils_Tuple2('rationals', 'ℚ'),
			_Utils_Tuple2('rbarr', '⤍'),
			_Utils_Tuple2('rBarr', '⤏'),
			_Utils_Tuple2('RBarr', '⤐'),
			_Utils_Tuple2('rbbrk', '❳'),
			_Utils_Tuple2('rbrace', '}'),
			_Utils_Tuple2('rbrack', ']'),
			_Utils_Tuple2('rbrke', '⦌'),
			_Utils_Tuple2('rbrksld', '⦎'),
			_Utils_Tuple2('rbrkslu', '⦐'),
			_Utils_Tuple2('Rcaron', 'Ř'),
			_Utils_Tuple2('rcaron', 'ř'),
			_Utils_Tuple2('Rcedil', 'Ŗ'),
			_Utils_Tuple2('rcedil', 'ŗ'),
			_Utils_Tuple2('rceil', '⌉'),
			_Utils_Tuple2('rcub', '}'),
			_Utils_Tuple2('Rcy', 'Р'),
			_Utils_Tuple2('rcy', 'р'),
			_Utils_Tuple2('rdca', '⤷'),
			_Utils_Tuple2('rdldhar', '⥩'),
			_Utils_Tuple2('rdquo', '”'),
			_Utils_Tuple2('rdquor', '”'),
			_Utils_Tuple2('rdsh', '↳'),
			_Utils_Tuple2('real', 'ℜ'),
			_Utils_Tuple2('realine', 'ℛ'),
			_Utils_Tuple2('realpart', 'ℜ'),
			_Utils_Tuple2('reals', 'ℝ'),
			_Utils_Tuple2('Re', 'ℜ'),
			_Utils_Tuple2('rect', '▭'),
			_Utils_Tuple2('reg', '®'),
			_Utils_Tuple2('REG', '®'),
			_Utils_Tuple2('ReverseElement', '∋'),
			_Utils_Tuple2('ReverseEquilibrium', '⇋'),
			_Utils_Tuple2('ReverseUpEquilibrium', '⥯'),
			_Utils_Tuple2('rfisht', '⥽'),
			_Utils_Tuple2('rfloor', '⌋'),
			_Utils_Tuple2('rfr', '\ud835\udd2f'),
			_Utils_Tuple2('Rfr', 'ℜ'),
			_Utils_Tuple2('rHar', '⥤'),
			_Utils_Tuple2('rhard', '⇁'),
			_Utils_Tuple2('rharu', '⇀'),
			_Utils_Tuple2('rharul', '⥬'),
			_Utils_Tuple2('Rho', 'Ρ'),
			_Utils_Tuple2('rho', 'ρ'),
			_Utils_Tuple2('rhov', 'ϱ'),
			_Utils_Tuple2('RightAngleBracket', '⟩'),
			_Utils_Tuple2('RightArrowBar', '⇥'),
			_Utils_Tuple2('rightarrow', '→'),
			_Utils_Tuple2('RightArrow', '→'),
			_Utils_Tuple2('Rightarrow', '⇒'),
			_Utils_Tuple2('RightArrowLeftArrow', '⇄'),
			_Utils_Tuple2('rightarrowtail', '↣'),
			_Utils_Tuple2('RightCeiling', '⌉'),
			_Utils_Tuple2('RightDoubleBracket', '⟧'),
			_Utils_Tuple2('RightDownTeeVector', '⥝'),
			_Utils_Tuple2('RightDownVectorBar', '⥕'),
			_Utils_Tuple2('RightDownVector', '⇂'),
			_Utils_Tuple2('RightFloor', '⌋'),
			_Utils_Tuple2('rightharpoondown', '⇁'),
			_Utils_Tuple2('rightharpoonup', '⇀'),
			_Utils_Tuple2('rightleftarrows', '⇄'),
			_Utils_Tuple2('rightleftharpoons', '⇌'),
			_Utils_Tuple2('rightrightarrows', '⇉'),
			_Utils_Tuple2('rightsquigarrow', '↝'),
			_Utils_Tuple2('RightTeeArrow', '↦'),
			_Utils_Tuple2('RightTee', '⊢'),
			_Utils_Tuple2('RightTeeVector', '⥛'),
			_Utils_Tuple2('rightthreetimes', '⋌'),
			_Utils_Tuple2('RightTriangleBar', '⧐'),
			_Utils_Tuple2('RightTriangle', '⊳'),
			_Utils_Tuple2('RightTriangleEqual', '⊵'),
			_Utils_Tuple2('RightUpDownVector', '⥏'),
			_Utils_Tuple2('RightUpTeeVector', '⥜'),
			_Utils_Tuple2('RightUpVectorBar', '⥔'),
			_Utils_Tuple2('RightUpVector', '↾'),
			_Utils_Tuple2('RightVectorBar', '⥓'),
			_Utils_Tuple2('RightVector', '⇀'),
			_Utils_Tuple2('ring', '˚'),
			_Utils_Tuple2('risingdotseq', '≓'),
			_Utils_Tuple2('rlarr', '⇄'),
			_Utils_Tuple2('rlhar', '⇌'),
			_Utils_Tuple2('rlm', '\u200f'),
			_Utils_Tuple2('rmoustache', '⎱'),
			_Utils_Tuple2('rmoust', '⎱'),
			_Utils_Tuple2('rnmid', '⫮'),
			_Utils_Tuple2('roang', '⟭'),
			_Utils_Tuple2('roarr', '⇾'),
			_Utils_Tuple2('robrk', '⟧'),
			_Utils_Tuple2('ropar', '⦆'),
			_Utils_Tuple2('ropf', '\ud835\udd63'),
			_Utils_Tuple2('Ropf', 'ℝ'),
			_Utils_Tuple2('roplus', '⨮'),
			_Utils_Tuple2('rotimes', '⨵'),
			_Utils_Tuple2('RoundImplies', '⥰'),
			_Utils_Tuple2('rpar', ')'),
			_Utils_Tuple2('rpargt', '⦔'),
			_Utils_Tuple2('rppolint', '⨒'),
			_Utils_Tuple2('rrarr', '⇉'),
			_Utils_Tuple2('Rrightarrow', '⇛'),
			_Utils_Tuple2('rsaquo', '›'),
			_Utils_Tuple2('rscr', '\ud835\udcc7'),
			_Utils_Tuple2('Rscr', 'ℛ'),
			_Utils_Tuple2('rsh', '↱'),
			_Utils_Tuple2('Rsh', '↱'),
			_Utils_Tuple2('rsqb', ']'),
			_Utils_Tuple2('rsquo', '’'),
			_Utils_Tuple2('rsquor', '’'),
			_Utils_Tuple2('rthree', '⋌'),
			_Utils_Tuple2('rtimes', '⋊'),
			_Utils_Tuple2('rtri', '▹'),
			_Utils_Tuple2('rtrie', '⊵'),
			_Utils_Tuple2('rtrif', '▸'),
			_Utils_Tuple2('rtriltri', '⧎'),
			_Utils_Tuple2('RuleDelayed', '⧴'),
			_Utils_Tuple2('ruluhar', '⥨'),
			_Utils_Tuple2('rx', '℞'),
			_Utils_Tuple2('Sacute', 'Ś'),
			_Utils_Tuple2('sacute', 'ś'),
			_Utils_Tuple2('sbquo', '‚'),
			_Utils_Tuple2('scap', '⪸'),
			_Utils_Tuple2('Scaron', 'Š'),
			_Utils_Tuple2('scaron', 'š'),
			_Utils_Tuple2('Sc', '⪼'),
			_Utils_Tuple2('sc', '≻'),
			_Utils_Tuple2('sccue', '≽'),
			_Utils_Tuple2('sce', '⪰'),
			_Utils_Tuple2('scE', '⪴'),
			_Utils_Tuple2('Scedil', 'Ş'),
			_Utils_Tuple2('scedil', 'ş'),
			_Utils_Tuple2('Scirc', 'Ŝ'),
			_Utils_Tuple2('scirc', 'ŝ'),
			_Utils_Tuple2('scnap', '⪺'),
			_Utils_Tuple2('scnE', '⪶'),
			_Utils_Tuple2('scnsim', '⋩'),
			_Utils_Tuple2('scpolint', '⨓'),
			_Utils_Tuple2('scsim', '≿'),
			_Utils_Tuple2('Scy', 'С'),
			_Utils_Tuple2('scy', 'с'),
			_Utils_Tuple2('sdotb', '⊡'),
			_Utils_Tuple2('sdot', '⋅'),
			_Utils_Tuple2('sdote', '⩦'),
			_Utils_Tuple2('searhk', '⤥'),
			_Utils_Tuple2('searr', '↘'),
			_Utils_Tuple2('seArr', '⇘'),
			_Utils_Tuple2('searrow', '↘'),
			_Utils_Tuple2('sect', '§'),
			_Utils_Tuple2('semi', ';'),
			_Utils_Tuple2('seswar', '⤩'),
			_Utils_Tuple2('setminus', '∖'),
			_Utils_Tuple2('setmn', '∖'),
			_Utils_Tuple2('sext', '✶'),
			_Utils_Tuple2('Sfr', '\ud835\udd16'),
			_Utils_Tuple2('sfr', '\ud835\udd30'),
			_Utils_Tuple2('sfrown', '⌢'),
			_Utils_Tuple2('sharp', '♯'),
			_Utils_Tuple2('SHCHcy', 'Щ'),
			_Utils_Tuple2('shchcy', 'щ'),
			_Utils_Tuple2('SHcy', 'Ш'),
			_Utils_Tuple2('shcy', 'ш'),
			_Utils_Tuple2('ShortDownArrow', '↓'),
			_Utils_Tuple2('ShortLeftArrow', '←'),
			_Utils_Tuple2('shortmid', '∣'),
			_Utils_Tuple2('shortparallel', '∥'),
			_Utils_Tuple2('ShortRightArrow', '→'),
			_Utils_Tuple2('ShortUpArrow', '↑'),
			_Utils_Tuple2('shy', '\u00ad'),
			_Utils_Tuple2('Sigma', 'Σ'),
			_Utils_Tuple2('sigma', 'σ'),
			_Utils_Tuple2('sigmaf', 'ς'),
			_Utils_Tuple2('sigmav', 'ς'),
			_Utils_Tuple2('sim', '∼'),
			_Utils_Tuple2('simdot', '⩪'),
			_Utils_Tuple2('sime', '≃'),
			_Utils_Tuple2('simeq', '≃'),
			_Utils_Tuple2('simg', '⪞'),
			_Utils_Tuple2('simgE', '⪠'),
			_Utils_Tuple2('siml', '⪝'),
			_Utils_Tuple2('simlE', '⪟'),
			_Utils_Tuple2('simne', '≆'),
			_Utils_Tuple2('simplus', '⨤'),
			_Utils_Tuple2('simrarr', '⥲'),
			_Utils_Tuple2('slarr', '←'),
			_Utils_Tuple2('SmallCircle', '∘'),
			_Utils_Tuple2('smallsetminus', '∖'),
			_Utils_Tuple2('smashp', '⨳'),
			_Utils_Tuple2('smeparsl', '⧤'),
			_Utils_Tuple2('smid', '∣'),
			_Utils_Tuple2('smile', '⌣'),
			_Utils_Tuple2('smt', '⪪'),
			_Utils_Tuple2('smte', '⪬'),
			_Utils_Tuple2('smtes', '⪬︀'),
			_Utils_Tuple2('SOFTcy', 'Ь'),
			_Utils_Tuple2('softcy', 'ь'),
			_Utils_Tuple2('solbar', '⌿'),
			_Utils_Tuple2('solb', '⧄'),
			_Utils_Tuple2('sol', '/'),
			_Utils_Tuple2('Sopf', '\ud835\udd4a'),
			_Utils_Tuple2('sopf', '\ud835\udd64'),
			_Utils_Tuple2('spades', '♠'),
			_Utils_Tuple2('spadesuit', '♠'),
			_Utils_Tuple2('spar', '∥'),
			_Utils_Tuple2('sqcap', '⊓'),
			_Utils_Tuple2('sqcaps', '⊓︀'),
			_Utils_Tuple2('sqcup', '⊔'),
			_Utils_Tuple2('sqcups', '⊔︀'),
			_Utils_Tuple2('Sqrt', '√'),
			_Utils_Tuple2('sqsub', '⊏'),
			_Utils_Tuple2('sqsube', '⊑'),
			_Utils_Tuple2('sqsubset', '⊏'),
			_Utils_Tuple2('sqsubseteq', '⊑'),
			_Utils_Tuple2('sqsup', '⊐'),
			_Utils_Tuple2('sqsupe', '⊒'),
			_Utils_Tuple2('sqsupset', '⊐'),
			_Utils_Tuple2('sqsupseteq', '⊒'),
			_Utils_Tuple2('square', '□'),
			_Utils_Tuple2('Square', '□'),
			_Utils_Tuple2('SquareIntersection', '⊓'),
			_Utils_Tuple2('SquareSubset', '⊏'),
			_Utils_Tuple2('SquareSubsetEqual', '⊑'),
			_Utils_Tuple2('SquareSuperset', '⊐'),
			_Utils_Tuple2('SquareSupersetEqual', '⊒'),
			_Utils_Tuple2('SquareUnion', '⊔'),
			_Utils_Tuple2('squarf', '▪'),
			_Utils_Tuple2('squ', '□'),
			_Utils_Tuple2('squf', '▪'),
			_Utils_Tuple2('srarr', '→'),
			_Utils_Tuple2('Sscr', '\ud835\udcae'),
			_Utils_Tuple2('sscr', '\ud835\udcc8'),
			_Utils_Tuple2('ssetmn', '∖'),
			_Utils_Tuple2('ssmile', '⌣'),
			_Utils_Tuple2('sstarf', '⋆'),
			_Utils_Tuple2('Star', '⋆'),
			_Utils_Tuple2('star', '☆'),
			_Utils_Tuple2('starf', '★'),
			_Utils_Tuple2('straightepsilon', 'ϵ'),
			_Utils_Tuple2('straightphi', 'ϕ'),
			_Utils_Tuple2('strns', '¯'),
			_Utils_Tuple2('sub', '⊂'),
			_Utils_Tuple2('Sub', '⋐'),
			_Utils_Tuple2('subdot', '⪽'),
			_Utils_Tuple2('subE', '⫅'),
			_Utils_Tuple2('sube', '⊆'),
			_Utils_Tuple2('subedot', '⫃'),
			_Utils_Tuple2('submult', '⫁'),
			_Utils_Tuple2('subnE', '⫋'),
			_Utils_Tuple2('subne', '⊊'),
			_Utils_Tuple2('subplus', '⪿'),
			_Utils_Tuple2('subrarr', '⥹'),
			_Utils_Tuple2('subset', '⊂'),
			_Utils_Tuple2('Subset', '⋐'),
			_Utils_Tuple2('subseteq', '⊆'),
			_Utils_Tuple2('subseteqq', '⫅'),
			_Utils_Tuple2('SubsetEqual', '⊆'),
			_Utils_Tuple2('subsetneq', '⊊'),
			_Utils_Tuple2('subsetneqq', '⫋'),
			_Utils_Tuple2('subsim', '⫇'),
			_Utils_Tuple2('subsub', '⫕'),
			_Utils_Tuple2('subsup', '⫓'),
			_Utils_Tuple2('succapprox', '⪸'),
			_Utils_Tuple2('succ', '≻'),
			_Utils_Tuple2('succcurlyeq', '≽'),
			_Utils_Tuple2('Succeeds', '≻'),
			_Utils_Tuple2('SucceedsEqual', '⪰'),
			_Utils_Tuple2('SucceedsSlantEqual', '≽'),
			_Utils_Tuple2('SucceedsTilde', '≿'),
			_Utils_Tuple2('succeq', '⪰'),
			_Utils_Tuple2('succnapprox', '⪺'),
			_Utils_Tuple2('succneqq', '⪶'),
			_Utils_Tuple2('succnsim', '⋩'),
			_Utils_Tuple2('succsim', '≿'),
			_Utils_Tuple2('SuchThat', '∋'),
			_Utils_Tuple2('sum', '∑'),
			_Utils_Tuple2('Sum', '∑'),
			_Utils_Tuple2('sung', '♪'),
			_Utils_Tuple2('sup1', '¹'),
			_Utils_Tuple2('sup2', '²'),
			_Utils_Tuple2('sup3', '³'),
			_Utils_Tuple2('sup', '⊃'),
			_Utils_Tuple2('Sup', '⋑'),
			_Utils_Tuple2('supdot', '⪾'),
			_Utils_Tuple2('supdsub', '⫘'),
			_Utils_Tuple2('supE', '⫆'),
			_Utils_Tuple2('supe', '⊇'),
			_Utils_Tuple2('supedot', '⫄'),
			_Utils_Tuple2('Superset', '⊃'),
			_Utils_Tuple2('SupersetEqual', '⊇'),
			_Utils_Tuple2('suphsol', '⟉'),
			_Utils_Tuple2('suphsub', '⫗'),
			_Utils_Tuple2('suplarr', '⥻'),
			_Utils_Tuple2('supmult', '⫂'),
			_Utils_Tuple2('supnE', '⫌'),
			_Utils_Tuple2('supne', '⊋'),
			_Utils_Tuple2('supplus', '⫀'),
			_Utils_Tuple2('supset', '⊃'),
			_Utils_Tuple2('Supset', '⋑'),
			_Utils_Tuple2('supseteq', '⊇'),
			_Utils_Tuple2('supseteqq', '⫆'),
			_Utils_Tuple2('supsetneq', '⊋'),
			_Utils_Tuple2('supsetneqq', '⫌'),
			_Utils_Tuple2('supsim', '⫈'),
			_Utils_Tuple2('supsub', '⫔'),
			_Utils_Tuple2('supsup', '⫖'),
			_Utils_Tuple2('swarhk', '⤦'),
			_Utils_Tuple2('swarr', '↙'),
			_Utils_Tuple2('swArr', '⇙'),
			_Utils_Tuple2('swarrow', '↙'),
			_Utils_Tuple2('swnwar', '⤪'),
			_Utils_Tuple2('szlig', 'ß'),
			_Utils_Tuple2('Tab', '\t'),
			_Utils_Tuple2('target', '⌖'),
			_Utils_Tuple2('Tau', 'Τ'),
			_Utils_Tuple2('tau', 'τ'),
			_Utils_Tuple2('tbrk', '⎴'),
			_Utils_Tuple2('Tcaron', 'Ť'),
			_Utils_Tuple2('tcaron', 'ť'),
			_Utils_Tuple2('Tcedil', 'Ţ'),
			_Utils_Tuple2('tcedil', 'ţ'),
			_Utils_Tuple2('Tcy', 'Т'),
			_Utils_Tuple2('tcy', 'т'),
			_Utils_Tuple2('tdot', '⃛'),
			_Utils_Tuple2('telrec', '⌕'),
			_Utils_Tuple2('Tfr', '\ud835\udd17'),
			_Utils_Tuple2('tfr', '\ud835\udd31'),
			_Utils_Tuple2('there4', '∴'),
			_Utils_Tuple2('therefore', '∴'),
			_Utils_Tuple2('Therefore', '∴'),
			_Utils_Tuple2('Theta', 'Θ'),
			_Utils_Tuple2('theta', 'θ'),
			_Utils_Tuple2('thetasym', 'ϑ'),
			_Utils_Tuple2('thetav', 'ϑ'),
			_Utils_Tuple2('thickapprox', '≈'),
			_Utils_Tuple2('thicksim', '∼'),
			_Utils_Tuple2('ThickSpace', '\u205f\u200a'),
			_Utils_Tuple2('ThinSpace', '\u2009'),
			_Utils_Tuple2('thinsp', '\u2009'),
			_Utils_Tuple2('thkap', '≈'),
			_Utils_Tuple2('thksim', '∼'),
			_Utils_Tuple2('THORN', 'Þ'),
			_Utils_Tuple2('thorn', 'þ'),
			_Utils_Tuple2('tilde', '˜'),
			_Utils_Tuple2('Tilde', '∼'),
			_Utils_Tuple2('TildeEqual', '≃'),
			_Utils_Tuple2('TildeFullEqual', '≅'),
			_Utils_Tuple2('TildeTilde', '≈'),
			_Utils_Tuple2('timesbar', '⨱'),
			_Utils_Tuple2('timesb', '⊠'),
			_Utils_Tuple2('times', '×'),
			_Utils_Tuple2('timesd', '⨰'),
			_Utils_Tuple2('tint', '∭'),
			_Utils_Tuple2('toea', '⤨'),
			_Utils_Tuple2('topbot', '⌶'),
			_Utils_Tuple2('topcir', '⫱'),
			_Utils_Tuple2('top', '⊤'),
			_Utils_Tuple2('Topf', '\ud835\udd4b'),
			_Utils_Tuple2('topf', '\ud835\udd65'),
			_Utils_Tuple2('topfork', '⫚'),
			_Utils_Tuple2('tosa', '⤩'),
			_Utils_Tuple2('tprime', '‴'),
			_Utils_Tuple2('trade', '™'),
			_Utils_Tuple2('TRADE', '™'),
			_Utils_Tuple2('triangle', '▵'),
			_Utils_Tuple2('triangledown', '▿'),
			_Utils_Tuple2('triangleleft', '◃'),
			_Utils_Tuple2('trianglelefteq', '⊴'),
			_Utils_Tuple2('triangleq', '≜'),
			_Utils_Tuple2('triangleright', '▹'),
			_Utils_Tuple2('trianglerighteq', '⊵'),
			_Utils_Tuple2('tridot', '◬'),
			_Utils_Tuple2('trie', '≜'),
			_Utils_Tuple2('triminus', '⨺'),
			_Utils_Tuple2('TripleDot', '⃛'),
			_Utils_Tuple2('triplus', '⨹'),
			_Utils_Tuple2('trisb', '⧍'),
			_Utils_Tuple2('tritime', '⨻'),
			_Utils_Tuple2('trpezium', '⏢'),
			_Utils_Tuple2('Tscr', '\ud835\udcaf'),
			_Utils_Tuple2('tscr', '\ud835\udcc9'),
			_Utils_Tuple2('TScy', 'Ц'),
			_Utils_Tuple2('tscy', 'ц'),
			_Utils_Tuple2('TSHcy', 'Ћ'),
			_Utils_Tuple2('tshcy', 'ћ'),
			_Utils_Tuple2('Tstrok', 'Ŧ'),
			_Utils_Tuple2('tstrok', 'ŧ'),
			_Utils_Tuple2('twixt', '≬'),
			_Utils_Tuple2('twoheadleftarrow', '↞'),
			_Utils_Tuple2('twoheadrightarrow', '↠'),
			_Utils_Tuple2('Uacute', 'Ú'),
			_Utils_Tuple2('uacute', 'ú'),
			_Utils_Tuple2('uarr', '↑'),
			_Utils_Tuple2('Uarr', '↟'),
			_Utils_Tuple2('uArr', '⇑'),
			_Utils_Tuple2('Uarrocir', '⥉'),
			_Utils_Tuple2('Ubrcy', 'Ў'),
			_Utils_Tuple2('ubrcy', 'ў'),
			_Utils_Tuple2('Ubreve', 'Ŭ'),
			_Utils_Tuple2('ubreve', 'ŭ'),
			_Utils_Tuple2('Ucirc', 'Û'),
			_Utils_Tuple2('ucirc', 'û'),
			_Utils_Tuple2('Ucy', 'У'),
			_Utils_Tuple2('ucy', 'у'),
			_Utils_Tuple2('udarr', '⇅'),
			_Utils_Tuple2('Udblac', 'Ű'),
			_Utils_Tuple2('udblac', 'ű'),
			_Utils_Tuple2('udhar', '⥮'),
			_Utils_Tuple2('ufisht', '⥾'),
			_Utils_Tuple2('Ufr', '\ud835\udd18'),
			_Utils_Tuple2('ufr', '\ud835\udd32'),
			_Utils_Tuple2('Ugrave', 'Ù'),
			_Utils_Tuple2('ugrave', 'ù'),
			_Utils_Tuple2('uHar', '⥣'),
			_Utils_Tuple2('uharl', '↿'),
			_Utils_Tuple2('uharr', '↾'),
			_Utils_Tuple2('uhblk', '▀'),
			_Utils_Tuple2('ulcorn', '⌜'),
			_Utils_Tuple2('ulcorner', '⌜'),
			_Utils_Tuple2('ulcrop', '⌏'),
			_Utils_Tuple2('ultri', '◸'),
			_Utils_Tuple2('Umacr', 'Ū'),
			_Utils_Tuple2('umacr', 'ū'),
			_Utils_Tuple2('uml', '¨'),
			_Utils_Tuple2('UnderBar', '_'),
			_Utils_Tuple2('UnderBrace', '⏟'),
			_Utils_Tuple2('UnderBracket', '⎵'),
			_Utils_Tuple2('UnderParenthesis', '⏝'),
			_Utils_Tuple2('Union', '⋃'),
			_Utils_Tuple2('UnionPlus', '⊎'),
			_Utils_Tuple2('Uogon', 'Ų'),
			_Utils_Tuple2('uogon', 'ų'),
			_Utils_Tuple2('Uopf', '\ud835\udd4c'),
			_Utils_Tuple2('uopf', '\ud835\udd66'),
			_Utils_Tuple2('UpArrowBar', '⤒'),
			_Utils_Tuple2('uparrow', '↑'),
			_Utils_Tuple2('UpArrow', '↑'),
			_Utils_Tuple2('Uparrow', '⇑'),
			_Utils_Tuple2('UpArrowDownArrow', '⇅'),
			_Utils_Tuple2('updownarrow', '↕'),
			_Utils_Tuple2('UpDownArrow', '↕'),
			_Utils_Tuple2('Updownarrow', '⇕'),
			_Utils_Tuple2('UpEquilibrium', '⥮'),
			_Utils_Tuple2('upharpoonleft', '↿'),
			_Utils_Tuple2('upharpoonright', '↾'),
			_Utils_Tuple2('uplus', '⊎'),
			_Utils_Tuple2('UpperLeftArrow', '↖'),
			_Utils_Tuple2('UpperRightArrow', '↗'),
			_Utils_Tuple2('upsi', 'υ'),
			_Utils_Tuple2('Upsi', 'ϒ'),
			_Utils_Tuple2('upsih', 'ϒ'),
			_Utils_Tuple2('Upsilon', 'Υ'),
			_Utils_Tuple2('upsilon', 'υ'),
			_Utils_Tuple2('UpTeeArrow', '↥'),
			_Utils_Tuple2('UpTee', '⊥'),
			_Utils_Tuple2('upuparrows', '⇈'),
			_Utils_Tuple2('urcorn', '⌝'),
			_Utils_Tuple2('urcorner', '⌝'),
			_Utils_Tuple2('urcrop', '⌎'),
			_Utils_Tuple2('Uring', 'Ů'),
			_Utils_Tuple2('uring', 'ů'),
			_Utils_Tuple2('urtri', '◹'),
			_Utils_Tuple2('Uscr', '\ud835\udcb0'),
			_Utils_Tuple2('uscr', '\ud835\udcca'),
			_Utils_Tuple2('utdot', '⋰'),
			_Utils_Tuple2('Utilde', 'Ũ'),
			_Utils_Tuple2('utilde', 'ũ'),
			_Utils_Tuple2('utri', '▵'),
			_Utils_Tuple2('utrif', '▴'),
			_Utils_Tuple2('uuarr', '⇈'),
			_Utils_Tuple2('Uuml', 'Ü'),
			_Utils_Tuple2('uuml', 'ü'),
			_Utils_Tuple2('uwangle', '⦧'),
			_Utils_Tuple2('vangrt', '⦜'),
			_Utils_Tuple2('varepsilon', 'ϵ'),
			_Utils_Tuple2('varkappa', 'ϰ'),
			_Utils_Tuple2('varnothing', '∅'),
			_Utils_Tuple2('varphi', 'ϕ'),
			_Utils_Tuple2('varpi', 'ϖ'),
			_Utils_Tuple2('varpropto', '∝'),
			_Utils_Tuple2('varr', '↕'),
			_Utils_Tuple2('vArr', '⇕'),
			_Utils_Tuple2('varrho', 'ϱ'),
			_Utils_Tuple2('varsigma', 'ς'),
			_Utils_Tuple2('varsubsetneq', '⊊︀'),
			_Utils_Tuple2('varsubsetneqq', '⫋︀'),
			_Utils_Tuple2('varsupsetneq', '⊋︀'),
			_Utils_Tuple2('varsupsetneqq', '⫌︀'),
			_Utils_Tuple2('vartheta', 'ϑ'),
			_Utils_Tuple2('vartriangleleft', '⊲'),
			_Utils_Tuple2('vartriangleright', '⊳'),
			_Utils_Tuple2('vBar', '⫨'),
			_Utils_Tuple2('Vbar', '⫫'),
			_Utils_Tuple2('vBarv', '⫩'),
			_Utils_Tuple2('Vcy', 'В'),
			_Utils_Tuple2('vcy', 'в'),
			_Utils_Tuple2('vdash', '⊢'),
			_Utils_Tuple2('vDash', '⊨'),
			_Utils_Tuple2('Vdash', '⊩'),
			_Utils_Tuple2('VDash', '⊫'),
			_Utils_Tuple2('Vdashl', '⫦'),
			_Utils_Tuple2('veebar', '⊻'),
			_Utils_Tuple2('vee', '∨'),
			_Utils_Tuple2('Vee', '⋁'),
			_Utils_Tuple2('veeeq', '≚'),
			_Utils_Tuple2('vellip', '⋮'),
			_Utils_Tuple2('verbar', '|'),
			_Utils_Tuple2('Verbar', '‖'),
			_Utils_Tuple2('vert', '|'),
			_Utils_Tuple2('Vert', '‖'),
			_Utils_Tuple2('VerticalBar', '∣'),
			_Utils_Tuple2('VerticalLine', '|'),
			_Utils_Tuple2('VerticalSeparator', '❘'),
			_Utils_Tuple2('VerticalTilde', '≀'),
			_Utils_Tuple2('VeryThinSpace', '\u200a'),
			_Utils_Tuple2('Vfr', '\ud835\udd19'),
			_Utils_Tuple2('vfr', '\ud835\udd33'),
			_Utils_Tuple2('vltri', '⊲'),
			_Utils_Tuple2('vnsub', '⊂⃒'),
			_Utils_Tuple2('vnsup', '⊃⃒'),
			_Utils_Tuple2('Vopf', '\ud835\udd4d'),
			_Utils_Tuple2('vopf', '\ud835\udd67'),
			_Utils_Tuple2('vprop', '∝'),
			_Utils_Tuple2('vrtri', '⊳'),
			_Utils_Tuple2('Vscr', '\ud835\udcb1'),
			_Utils_Tuple2('vscr', '\ud835\udccb'),
			_Utils_Tuple2('vsubnE', '⫋︀'),
			_Utils_Tuple2('vsubne', '⊊︀'),
			_Utils_Tuple2('vsupnE', '⫌︀'),
			_Utils_Tuple2('vsupne', '⊋︀'),
			_Utils_Tuple2('Vvdash', '⊪'),
			_Utils_Tuple2('vzigzag', '⦚'),
			_Utils_Tuple2('Wcirc', 'Ŵ'),
			_Utils_Tuple2('wcirc', 'ŵ'),
			_Utils_Tuple2('wedbar', '⩟'),
			_Utils_Tuple2('wedge', '∧'),
			_Utils_Tuple2('Wedge', '⋀'),
			_Utils_Tuple2('wedgeq', '≙'),
			_Utils_Tuple2('weierp', '℘'),
			_Utils_Tuple2('Wfr', '\ud835\udd1a'),
			_Utils_Tuple2('wfr', '\ud835\udd34'),
			_Utils_Tuple2('Wopf', '\ud835\udd4e'),
			_Utils_Tuple2('wopf', '\ud835\udd68'),
			_Utils_Tuple2('wp', '℘'),
			_Utils_Tuple2('wr', '≀'),
			_Utils_Tuple2('wreath', '≀'),
			_Utils_Tuple2('Wscr', '\ud835\udcb2'),
			_Utils_Tuple2('wscr', '\ud835\udccc'),
			_Utils_Tuple2('xcap', '⋂'),
			_Utils_Tuple2('xcirc', '◯'),
			_Utils_Tuple2('xcup', '⋃'),
			_Utils_Tuple2('xdtri', '▽'),
			_Utils_Tuple2('Xfr', '\ud835\udd1b'),
			_Utils_Tuple2('xfr', '\ud835\udd35'),
			_Utils_Tuple2('xharr', '⟷'),
			_Utils_Tuple2('xhArr', '⟺'),
			_Utils_Tuple2('Xi', 'Ξ'),
			_Utils_Tuple2('xi', 'ξ'),
			_Utils_Tuple2('xlarr', '⟵'),
			_Utils_Tuple2('xlArr', '⟸'),
			_Utils_Tuple2('xmap', '⟼'),
			_Utils_Tuple2('xnis', '⋻'),
			_Utils_Tuple2('xodot', '⨀'),
			_Utils_Tuple2('Xopf', '\ud835\udd4f'),
			_Utils_Tuple2('xopf', '\ud835\udd69'),
			_Utils_Tuple2('xoplus', '⨁'),
			_Utils_Tuple2('xotime', '⨂'),
			_Utils_Tuple2('xrarr', '⟶'),
			_Utils_Tuple2('xrArr', '⟹'),
			_Utils_Tuple2('Xscr', '\ud835\udcb3'),
			_Utils_Tuple2('xscr', '\ud835\udccd'),
			_Utils_Tuple2('xsqcup', '⨆'),
			_Utils_Tuple2('xuplus', '⨄'),
			_Utils_Tuple2('xutri', '△'),
			_Utils_Tuple2('xvee', '⋁'),
			_Utils_Tuple2('xwedge', '⋀'),
			_Utils_Tuple2('Yacute', 'Ý'),
			_Utils_Tuple2('yacute', 'ý'),
			_Utils_Tuple2('YAcy', 'Я'),
			_Utils_Tuple2('yacy', 'я'),
			_Utils_Tuple2('Ycirc', 'Ŷ'),
			_Utils_Tuple2('ycirc', 'ŷ'),
			_Utils_Tuple2('Ycy', 'Ы'),
			_Utils_Tuple2('ycy', 'ы'),
			_Utils_Tuple2('yen', '¥'),
			_Utils_Tuple2('Yfr', '\ud835\udd1c'),
			_Utils_Tuple2('yfr', '\ud835\udd36'),
			_Utils_Tuple2('YIcy', 'Ї'),
			_Utils_Tuple2('yicy', 'ї'),
			_Utils_Tuple2('Yopf', '\ud835\udd50'),
			_Utils_Tuple2('yopf', '\ud835\udd6a'),
			_Utils_Tuple2('Yscr', '\ud835\udcb4'),
			_Utils_Tuple2('yscr', '\ud835\udcce'),
			_Utils_Tuple2('YUcy', 'Ю'),
			_Utils_Tuple2('yucy', 'ю'),
			_Utils_Tuple2('yuml', 'ÿ'),
			_Utils_Tuple2('Yuml', 'Ÿ'),
			_Utils_Tuple2('Zacute', 'Ź'),
			_Utils_Tuple2('zacute', 'ź'),
			_Utils_Tuple2('Zcaron', 'Ž'),
			_Utils_Tuple2('zcaron', 'ž'),
			_Utils_Tuple2('Zcy', 'З'),
			_Utils_Tuple2('zcy', 'з'),
			_Utils_Tuple2('Zdot', 'Ż'),
			_Utils_Tuple2('zdot', 'ż'),
			_Utils_Tuple2('zeetrf', 'ℨ'),
			_Utils_Tuple2('ZeroWidthSpace', '\u200b'),
			_Utils_Tuple2('Zeta', 'Ζ'),
			_Utils_Tuple2('zeta', 'ζ'),
			_Utils_Tuple2('zfr', '\ud835\udd37'),
			_Utils_Tuple2('Zfr', 'ℨ'),
			_Utils_Tuple2('ZHcy', 'Ж'),
			_Utils_Tuple2('zhcy', 'ж'),
			_Utils_Tuple2('zigrarr', '⇝'),
			_Utils_Tuple2('zopf', '\ud835\udd6b'),
			_Utils_Tuple2('Zopf', 'ℤ'),
			_Utils_Tuple2('Zscr', '\ud835\udcb5'),
			_Utils_Tuple2('zscr', '\ud835\udccf'),
			_Utils_Tuple2('zwj', '\u200d'),
			_Utils_Tuple2('zwnj', '\u200c')
		]));
var hecrj$html_parser$Html$Parser$namedCharacterReference = A2(
	elm$parser$Parser$map,
	function (reference) {
		return A2(
			elm$core$Maybe$withDefault,
			'&' + (reference + ';'),
			A2(elm$core$Dict$get, reference, hecrj$html_parser$Html$Parser$NamedCharacterReferences$dict));
	},
	elm$parser$Parser$getChompedString(
		hecrj$html_parser$Html$Parser$chompOneOrMore(elm$core$Char$isAlpha)));
var elm$core$Char$fromCode = _Char_fromCode;
var elm$core$String$cons = _String_cons;
var elm$core$String$fromChar = function (_char) {
	return A2(elm$core$String$cons, _char, '');
};
var elm$parser$Parser$ExpectingInt = {$: 1};
var elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var elm$core$String$toFloat = _String_toFloat;
var elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {bO: s.bO + (newOffset - s.b), c: s.c, d: s.d, b: newOffset, cN: s.cN, a: s.a};
	});
var elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3(elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3(elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3(elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3(elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2(elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3(elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			elm$parser$Parser$Advanced$consumeExp,
			A2(elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2(elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _n0, s) {
		var endOffset = _n0.a;
		var n = _n0.b;
		if (handler.$ === 1) {
			var x = handler.a;
			return A2(
				elm$parser$Parser$Advanced$Bad,
				true,
				A2(elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.b, startOffset) < 0,
				A2(elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2(elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2(elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.a);
		if (floatOffset < 0) {
			return A2(
				elm$parser$Parser$Advanced$Bad,
				true,
				A4(elm$parser$Parser$Advanced$fromInfo, s.cN, s.bO - (floatOffset + s.b), invalid, s.c));
		} else {
			if (_Utils_eq(s.b, floatOffset)) {
				return A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5(elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.b, intPair, s);
				} else {
					if (floatSettings.$ === 1) {
						var x = floatSettings.a;
						return A2(
							elm$parser$Parser$Advanced$Bad,
							true,
							A2(elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _n1 = elm$core$String$toFloat(
							A3(elm$core$String$slice, s.b, floatOffset, s.a));
						if (_n1.$ === 1) {
							return A2(
								elm$parser$Parser$Advanced$Bad,
								true,
								A2(elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _n1.a;
							return A3(
								elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2(elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var elm$parser$Parser$Advanced$number = function (c) {
	return function (s) {
		if (A3(elm$parser$Parser$Advanced$isAsciiCode, 48, s.b, s.a)) {
			var zeroOffset = s.b + 1;
			var baseOffset = zeroOffset + 1;
			return A3(elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.a) ? A5(
				elm$parser$Parser$Advanced$finalizeInt,
				c.em,
				c.d7,
				baseOffset,
				A2(elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.a),
				s) : (A3(elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.a) ? A5(
				elm$parser$Parser$Advanced$finalizeInt,
				c.em,
				c.cx,
				baseOffset,
				A3(elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.a),
				s) : (A3(elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.a) ? A5(
				elm$parser$Parser$Advanced$finalizeInt,
				c.em,
				c.bI,
				baseOffset,
				A3(elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.a),
				s) : A6(
				elm$parser$Parser$Advanced$finalizeFloat,
				c.em,
				c.b0,
				c.ci,
				c.b1,
				_Utils_Tuple2(zeroOffset, 0),
				s)));
		} else {
			return A6(
				elm$parser$Parser$Advanced$finalizeFloat,
				c.em,
				c.b0,
				c.ci,
				c.b1,
				A3(elm$parser$Parser$Advanced$consumeBase, 10, s.b, s.a),
				s);
		}
	};
};
var elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return elm$parser$Parser$Advanced$number(
			{
				bI: elm$core$Result$Err(invalid),
				b0: expecting,
				b1: elm$core$Result$Err(invalid),
				d7: elm$core$Result$Err(invalid),
				ci: elm$core$Result$Ok(elm$core$Basics$identity),
				em: invalid,
				cx: elm$core$Result$Err(invalid)
			});
	});
var elm$parser$Parser$int = A2(elm$parser$Parser$Advanced$int, elm$parser$Parser$ExpectingInt, elm$parser$Parser$ExpectingInt);
var elm$core$Char$isHexDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return ((48 <= code) && (code <= 57)) || (((65 <= code) && (code <= 70)) || ((97 <= code) && (code <= 102)));
};
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var elm$core$Basics$pow = _Basics_pow;
var rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2(elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return elm$core$Result$Err(
							elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var rtfeldman$elm_hex$Hex$fromString = function (str) {
	if (elm$core$String$isEmpty(str)) {
		return elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2(elm$core$String$startsWith, '-', str)) {
				var list = A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					elm$core$List$tail(
						elm$core$String$toList(str)));
				return A2(
					elm$core$Result$map,
					elm$core$Basics$negate,
					A3(
						rtfeldman$elm_hex$Hex$fromStringHelp,
						elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					rtfeldman$elm_hex$Hex$fromStringHelp,
					elm$core$String$length(str) - 1,
					elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2(elm$core$Result$mapError, formatError, result);
	}
};
var hecrj$html_parser$Html$Parser$hexadecimal = A2(
	elm$parser$Parser$andThen,
	function (hex) {
		var _n0 = rtfeldman$elm_hex$Hex$fromString(
			elm$core$String$toLower(hex));
		if (!_n0.$) {
			var value = _n0.a;
			return elm$parser$Parser$succeed(value);
		} else {
			var error = _n0.a;
			return elm$parser$Parser$problem(error);
		}
	},
	elm$parser$Parser$getChompedString(
		hecrj$html_parser$Html$Parser$chompOneOrMore(elm$core$Char$isHexDigit)));
var hecrj$html_parser$Html$Parser$numericCharacterReference = function () {
	var codepoint = elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(elm$core$Basics$identity),
					elm$parser$Parser$chompIf(
						function (c) {
							return (c === 'x') || (c === 'X');
						})),
				hecrj$html_parser$Html$Parser$hexadecimal),
				A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(elm$core$Basics$identity),
					elm$parser$Parser$chompWhile(
						elm$core$Basics$eq('0'))),
				elm$parser$Parser$int)
			]));
	return A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			elm$parser$Parser$chompIf(
				elm$core$Basics$eq('#'))),
		A2(
			elm$parser$Parser$map,
			A2(elm$core$Basics$composeR, elm$core$Char$fromCode, elm$core$String$fromChar),
			codepoint));
}();
var hecrj$html_parser$Html$Parser$characterReference = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$ignorer,
		elm$parser$Parser$succeed(elm$core$Basics$identity),
		elm$parser$Parser$chompIf(
			elm$core$Basics$eq('&'))),
	elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$backtrackable(hecrj$html_parser$Html$Parser$namedCharacterReference),
				hecrj$html_parser$Html$Parser$chompSemicolon),
				A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$backtrackable(hecrj$html_parser$Html$Parser$numericCharacterReference),
				hecrj$html_parser$Html$Parser$chompSemicolon),
				elm$parser$Parser$succeed('&')
			])));
var hecrj$html_parser$Html$Parser$tagAttributeQuotedValue = function (quote) {
	var isQuotedValueChar = function (c) {
		return (!_Utils_eq(c, quote)) && (c !== '&');
	};
	return A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(elm$core$Basics$identity),
			elm$parser$Parser$chompIf(
				elm$core$Basics$eq(quote))),
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$map,
				elm$core$String$join(''),
				hecrj$html_parser$Html$Parser$many(
					elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								elm$parser$Parser$getChompedString(
								hecrj$html_parser$Html$Parser$chompOneOrMore(isQuotedValueChar)),
								hecrj$html_parser$Html$Parser$characterReference
							])))),
			elm$parser$Parser$chompIf(
				elm$core$Basics$eq(quote))));
};
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var hecrj$html_parser$Html$Parser$oneOrMore = F2(
	function (type_, parser_) {
		return A2(
			elm$parser$Parser$loop,
			_List_Nil,
			function (list) {
				return elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							elm$parser$Parser$map,
							function (_new) {
								return elm$parser$Parser$Loop(
									A2(elm$core$List$cons, _new, list));
							},
							parser_),
							elm$core$List$isEmpty(list) ? elm$parser$Parser$problem('expecting at least one ' + type_) : elm$parser$Parser$succeed(
							elm$parser$Parser$Done(
								elm$core$List$reverse(list)))
						]));
			});
	});
var hecrj$html_parser$Html$Parser$tagAttributeUnquotedValue = function () {
	var isUnquotedValueChar = function (c) {
		return (!hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && ((c !== '\"') && ((c !== '\'') && ((c !== '=') && ((c !== '<') && ((c !== '>') && ((c !== '`') && (c !== '&')))))));
	};
	return A2(
		elm$parser$Parser$map,
		elm$core$String$join(''),
		A2(
			hecrj$html_parser$Html$Parser$oneOrMore,
			'attribute value',
			elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						elm$parser$Parser$getChompedString(
						hecrj$html_parser$Html$Parser$chompOneOrMore(isUnquotedValueChar)),
						hecrj$html_parser$Html$Parser$characterReference
					]))));
}();
var hecrj$html_parser$Html$Parser$tagAttributeValue = elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(elm$core$Basics$identity),
					elm$parser$Parser$chompIf(
						elm$core$Basics$eq('='))),
				elm$parser$Parser$chompWhile(hecrj$html_parser$Html$Parser$isSpaceCharacter)),
			elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						hecrj$html_parser$Html$Parser$tagAttributeUnquotedValue,
						hecrj$html_parser$Html$Parser$tagAttributeQuotedValue('\"'),
						hecrj$html_parser$Html$Parser$tagAttributeQuotedValue('\'')
					]))),
			elm$parser$Parser$succeed('')
		]));
var hecrj$html_parser$Html$Parser$tagAttribute = A2(
	elm$parser$Parser$keeper,
	A2(
		elm$parser$Parser$keeper,
		elm$parser$Parser$succeed(elm$core$Tuple$pair),
		A2(
			elm$parser$Parser$ignorer,
			hecrj$html_parser$Html$Parser$tagAttributeName,
			elm$parser$Parser$chompWhile(hecrj$html_parser$Html$Parser$isSpaceCharacter))),
	A2(
		elm$parser$Parser$ignorer,
		hecrj$html_parser$Html$Parser$tagAttributeValue,
		elm$parser$Parser$chompWhile(hecrj$html_parser$Html$Parser$isSpaceCharacter)));
var hecrj$html_parser$Html$Parser$tagAttributes = hecrj$html_parser$Html$Parser$many(hecrj$html_parser$Html$Parser$tagAttribute);
var hecrj$html_parser$Html$Parser$tagName = A2(
	elm$parser$Parser$map,
	elm$core$String$toLower,
	elm$parser$Parser$getChompedString(
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$chompIf(elm$core$Char$isAlphaNum),
			elm$parser$Parser$chompWhile(
				function (c) {
					return elm$core$Char$isAlphaNum(c) || (c === '-');
				}))));
var hecrj$html_parser$Html$Parser$Text = function (a) {
	return {$: 0, a: a};
};
var hecrj$html_parser$Html$Parser$text = A2(
	elm$parser$Parser$map,
	A2(
		elm$core$Basics$composeR,
		elm$core$String$join(''),
		hecrj$html_parser$Html$Parser$Text),
	A2(
		hecrj$html_parser$Html$Parser$oneOrMore,
		'text element',
		elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					elm$parser$Parser$getChompedString(
					hecrj$html_parser$Html$Parser$chompOneOrMore(
						function (c) {
							return (c !== '<') && (c !== '&');
						})),
					hecrj$html_parser$Html$Parser$characterReference
				]))));
function hecrj$html_parser$Html$Parser$cyclic$node() {
	return elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				hecrj$html_parser$Html$Parser$text,
				hecrj$html_parser$Html$Parser$comment,
				hecrj$html_parser$Html$Parser$cyclic$element()
			]));
}
function hecrj$html_parser$Html$Parser$cyclic$element() {
	return A2(
		elm$parser$Parser$andThen,
		function (_n0) {
			var name = _n0.a;
			var attributes = _n0.b;
			return hecrj$html_parser$Html$Parser$isVoidElement(name) ? A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(
						A3(hecrj$html_parser$Html$Parser$Element, name, attributes, _List_Nil)),
					elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								elm$parser$Parser$chompIf(
								elm$core$Basics$eq('/')),
								elm$parser$Parser$succeed(0)
							]))),
				elm$parser$Parser$chompIf(
					elm$core$Basics$eq('>'))) : A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(
						A2(hecrj$html_parser$Html$Parser$Element, name, attributes)),
					elm$parser$Parser$chompIf(
						elm$core$Basics$eq('>'))),
				A2(
					elm$parser$Parser$ignorer,
					hecrj$html_parser$Html$Parser$many(
						elm$parser$Parser$backtrackable(
							hecrj$html_parser$Html$Parser$cyclic$node())),
					hecrj$html_parser$Html$Parser$closingTag(name)));
		},
		A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(elm$core$Tuple$pair),
					elm$parser$Parser$chompIf(
						elm$core$Basics$eq('<'))),
				A2(
					elm$parser$Parser$ignorer,
					hecrj$html_parser$Html$Parser$tagName,
					elm$parser$Parser$chompWhile(hecrj$html_parser$Html$Parser$isSpaceCharacter))),
			hecrj$html_parser$Html$Parser$tagAttributes));
}
var hecrj$html_parser$Html$Parser$node = hecrj$html_parser$Html$Parser$cyclic$node();
hecrj$html_parser$Html$Parser$cyclic$node = function () {
	return hecrj$html_parser$Html$Parser$node;
};
var hecrj$html_parser$Html$Parser$element = hecrj$html_parser$Html$Parser$cyclic$element();
hecrj$html_parser$Html$Parser$cyclic$element = function () {
	return hecrj$html_parser$Html$Parser$element;
};
var hecrj$html_parser$Html$Parser$run = function (str) {
	return elm$core$String$isEmpty(str) ? elm$core$Result$Ok(_List_Nil) : A2(
		elm$parser$Parser$run,
		A2(hecrj$html_parser$Html$Parser$oneOrMore, 'node', hecrj$html_parser$Html$Parser$node),
		str);
};
var author$project$Lia$Markdown$Inline$Parser$html_parse = function (str) {
	var _n0 = hecrj$html_parser$Html$Parser$run(str);
	if (!_n0.$) {
		var rslt = _n0.a;
		return andre_dietrich$parser_combinators$Combine$succeed(rslt);
	} else {
		return andre_dietrich$parser_combinators$Combine$fail('html parser failed');
	}
};
var author$project$Lia$Markdown$Inline$Types$HTML = function (a) {
	return {$: 11, a: a};
};
var author$project$Lia$Markdown$Inline$Parser$html_block = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Inline$Types$HTML,
	A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		author$project$Lia$Markdown$Inline$Parser$html_parse,
		andre_dietrich$parser_combinators$Combine$regex('<((\\w+|-)+)[\\s\\S]*?</\\1>')));
var author$project$Lia$Markdown$Inline$Parser$html_void = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Inline$Types$HTML,
	A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		author$project$Lia$Markdown$Inline$Parser$html_parse,
		andre_dietrich$parser_combinators$Combine$regex('<[^>\\n]*>')));
var author$project$Lia$Markdown$Inline$Parser$javascript = A2(
	andre_dietrich$parser_combinators$Combine$keep,
	author$project$Lia$Parser$Helper$stringTill(
		andre_dietrich$parser_combinators$Combine$string('</script>')),
	andre_dietrich$parser_combinators$Combine$string('<script>'));
var author$project$Lia$Markdown$Inline$Parser$html = function () {
	var state = function (script) {
		return andre_dietrich$parser_combinators$Combine$modifyState(
			function (s) {
				return _Utils_update(
					s,
					{
						M: A3(
							author$project$Lia$Markdown$Effect$Model$add_javascript,
							A2(
								elm$core$Maybe$withDefault,
								0,
								elm$core$List$head(s.aK)),
							script,
							s.M)
					});
			});
	};
	return andre_dietrich$parser_combinators$Combine$choice(
		_List_fromArray(
			[
				A2(
				andre_dietrich$parser_combinators$Combine$keep,
				andre_dietrich$parser_combinators$Combine$succeed(
					A2(author$project$Lia$Markdown$Inline$Types$Chars, '', elm$core$Maybe$Nothing)),
				A2(andre_dietrich$parser_combinators$Combine$andThen, state, author$project$Lia$Markdown$Inline$Parser$javascript)),
				author$project$Lia$Markdown$Inline$Parser$html_void,
				author$project$Lia$Markdown$Inline$Parser$html_block
			]));
}();
var author$project$Lia$Markdown$Inline$Parser$url = andre_dietrich$parser_combinators$Combine$regex('[a-zA-Z]+://(/)?[a-zA-Z0-9\\.\\-\\_]+\\.([a-z\\.]{2,6})[^ \\]\\)\t\n]*');
var author$project$Lia$Markdown$Inline$Types$Link = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Inline$Types$Ref = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Parser$inline_url = A2(
	andre_dietrich$parser_combinators$Combine$map,
	function (u) {
		return author$project$Lia$Markdown$Inline$Types$Ref(
			A3(
				author$project$Lia$Markdown$Inline$Types$Link,
				_List_fromArray(
					[
						A2(author$project$Lia$Markdown$Inline$Types$Chars, u, elm$core$Maybe$Nothing)
					]),
				u,
				''));
	},
	author$project$Lia$Markdown$Inline$Parser$url);
var author$project$Lia$Markdown$Inline$Parser$nicer_ref = F4(
	function (ref_type, info_string, url_string, title_string) {
		return A3(
			ref_type,
			info_string,
			url_string,
			elm$core$String$isEmpty(title_string) ? url_string : title_string);
	});
var author$project$Lia$Markdown$Inline$Parser$ref_title = A2(
	andre_dietrich$parser_combinators$Combine$optional,
	'',
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Parser$Helper$spaces,
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			author$project$Lia$Parser$Helper$stringTill(
				andre_dietrich$parser_combinators$Combine$string('\"')),
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string('\"'),
				author$project$Lia$Parser$Helper$spaces))));
var author$project$Lia$Markdown$Inline$Parser$ref_pattern = F3(
	function (ref_type, info_type, url_type) {
		return A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$string(')'),
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				author$project$Lia$Markdown$Inline$Parser$ref_title,
				A2(
					andre_dietrich$parser_combinators$Combine$andMap,
					url_type,
					A2(
						andre_dietrich$parser_combinators$Combine$ignore,
						andre_dietrich$parser_combinators$Combine$string('('),
						A2(
							andre_dietrich$parser_combinators$Combine$map,
							author$project$Lia$Markdown$Inline$Parser$nicer_ref(ref_type),
							info_type)))));
	});
var author$project$Lia$Parser$Context$searchIndex = andre_dietrich$parser_combinators$Combine$withState(
	function (state) {
		return andre_dietrich$parser_combinators$Combine$succeed(state.cT);
	});
var author$project$Lia$Markdown$Inline$Parser$ref_url_1 = andre_dietrich$parser_combinators$Combine$choice(
	_List_fromArray(
		[
			author$project$Lia$Markdown$Inline$Parser$url,
			A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			andre_dietrich$parser_combinators$Combine$regex('#[\\w-]+'),
			author$project$Lia$Parser$Context$searchIndex),
			A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			andre_dietrich$parser_combinators$Combine$regex('#\\S+'),
			author$project$Lia$Parser$Context$searchIndex),
			andre_dietrich$parser_combinators$Combine$regex('[^\\)\n \"]*')
		]));
var author$project$Lia$Markdown$Inline$Parser$ref_url_2 = A2(
	andre_dietrich$parser_combinators$Combine$or,
	author$project$Lia$Markdown$Inline$Parser$url,
	A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		andre_dietrich$parser_combinators$Combine$regex('[^\\)\n \"]*'),
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			elm$core$Basics$append,
			andre_dietrich$parser_combinators$Combine$withState(
				function (s) {
					return andre_dietrich$parser_combinators$Combine$succeed(s.bV.dx);
				}))));
var author$project$Lia$Markdown$Inline$Parser$combine = function (list) {
	combine:
	while (true) {
		if (!list.b) {
			return _List_Nil;
		} else {
			if (!list.b.b) {
				var xs = list.a;
				return _List_fromArray(
					[xs]);
			} else {
				var x1 = list.a;
				var _n1 = list.b;
				var x2 = _n1.a;
				var xs = _n1.b;
				var _n2 = _Utils_Tuple2(x1, x2);
				if ((((!_n2.a.$) && (_n2.a.b.$ === 1)) && (!_n2.b.$)) && (_n2.b.b.$ === 1)) {
					var _n3 = _n2.a;
					var str1 = _n3.a;
					var _n4 = _n3.b;
					var _n5 = _n2.b;
					var str2 = _n5.a;
					var _n6 = _n5.b;
					var $temp$list = A2(
						elm$core$List$cons,
						A2(
							author$project$Lia$Markdown$Inline$Types$Chars,
							_Utils_ap(str1, str2),
							elm$core$Maybe$Nothing),
						xs);
					list = $temp$list;
					continue combine;
				} else {
					return A2(
						elm$core$List$cons,
						x1,
						author$project$Lia$Markdown$Inline$Parser$combine(
							A2(elm$core$List$cons, x2, xs)));
				}
			}
		}
	}
};
var author$project$Lia$Markdown$Inline$Types$Container = F2(
	function (a, b) {
		return {$: 13, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Parser$toContainer = function (inline_list) {
	var _n0 = author$project$Lia$Markdown$Inline$Parser$combine(inline_list);
	if (_n0.b && (!_n0.b.b)) {
		var one = _n0.a;
		return one;
	} else {
		var moreThanOne = _n0;
		return A2(author$project$Lia$Markdown$Inline$Types$Container, moreThanOne, elm$core$Maybe$Nothing);
	}
};
var author$project$Lia$Markdown$Inline$Types$Formula = F3(
	function (a, b, c) {
		return {$: 8, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Inline$Parser$Formula$formula_block = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Inline$Types$Formula('true'),
	A2(
		andre_dietrich$parser_combinators$Combine$keep,
		author$project$Lia$Parser$Helper$stringTill(
			andre_dietrich$parser_combinators$Combine$string('$$')),
		andre_dietrich$parser_combinators$Combine$string('$$')));
var author$project$Lia$Markdown$Inline$Parser$Formula$formula_inline = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Inline$Types$Formula('false'),
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$string('$'),
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			andre_dietrich$parser_combinators$Combine$regex('[^\\n$]+'),
			andre_dietrich$parser_combinators$Combine$string('$'))));
var author$project$Lia$Markdown$Inline$Parser$Formula$formula = A2(andre_dietrich$parser_combinators$Combine$or, author$project$Lia$Markdown$Inline$Parser$Formula$formula_block, author$project$Lia$Markdown$Inline$Parser$Formula$formula_inline);
var author$project$Lia$Markdown$Inline$Types$Symbol = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Parser$Symbol$arrows = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Inline$Types$Symbol,
	andre_dietrich$parser_combinators$Combine$choice(
		_List_fromArray(
			[
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⟷',
				andre_dietrich$parser_combinators$Combine$string('<-->')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⟵',
				andre_dietrich$parser_combinators$Combine$string('<--')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⟶',
				andre_dietrich$parser_combinators$Combine$string('-->')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'↞',
				andre_dietrich$parser_combinators$Combine$string('<<-')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'↠',
				andre_dietrich$parser_combinators$Combine$string('->>')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'↔',
				andre_dietrich$parser_combinators$Combine$string('<->')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'↣',
				andre_dietrich$parser_combinators$Combine$string('>->')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'↢',
				andre_dietrich$parser_combinators$Combine$string('<-<')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'→',
				andre_dietrich$parser_combinators$Combine$string('->')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'←',
				andre_dietrich$parser_combinators$Combine$string('<-')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'↜',
				andre_dietrich$parser_combinators$Combine$string('<~')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'↝',
				andre_dietrich$parser_combinators$Combine$string('~>')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⟺',
				andre_dietrich$parser_combinators$Combine$string('<==>')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⟹',
				andre_dietrich$parser_combinators$Combine$string('==>')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⟸',
				andre_dietrich$parser_combinators$Combine$string('<==')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⇔',
				andre_dietrich$parser_combinators$Combine$string('<=>')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⇒',
				andre_dietrich$parser_combinators$Combine$string('=>')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'⇐',
				andre_dietrich$parser_combinators$Combine$string('<='))
			])));
var author$project$Lia$Markdown$Inline$Parser$Symbol$smileys = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Inline$Types$Symbol,
	andre_dietrich$parser_combinators$Combine$choice(
		_List_fromArray(
			[
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'🙂',
				andre_dietrich$parser_combinators$Combine$string(':-)')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😉',
				andre_dietrich$parser_combinators$Combine$string(';-)')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😀',
				andre_dietrich$parser_combinators$Combine$string(':-D')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😮',
				andre_dietrich$parser_combinators$Combine$string(':-O')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'🙁',
				andre_dietrich$parser_combinators$Combine$string(':-(')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😐',
				andre_dietrich$parser_combinators$Combine$string(':-|')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😕',
				andre_dietrich$parser_combinators$Combine$string(':-/')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😕',
				andre_dietrich$parser_combinators$Combine$string(':-\\')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😛',
				andre_dietrich$parser_combinators$Combine$string(':-P')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😛',
				andre_dietrich$parser_combinators$Combine$string(':-p')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😜',
				andre_dietrich$parser_combinators$Combine$string(';-P')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😜',
				andre_dietrich$parser_combinators$Combine$string(';-p')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😗',
				andre_dietrich$parser_combinators$Combine$string(':-*')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😘',
				andre_dietrich$parser_combinators$Combine$string(';-*')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😂',
				andre_dietrich$parser_combinators$Combine$string(':\')')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😢',
				andre_dietrich$parser_combinators$Combine$string(':\'(')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😭',
				andre_dietrich$parser_combinators$Combine$string(':\'[')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😠',
				andre_dietrich$parser_combinators$Combine$string(':-[')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😷',
				andre_dietrich$parser_combinators$Combine$string(':-#')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😷',
				andre_dietrich$parser_combinators$Combine$string(':-X')),
				A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				'😖',
				andre_dietrich$parser_combinators$Combine$string(':-§'))
			])));
var author$project$Lia$Markdown$Inline$Types$Audio = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Inline$Types$Bold = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Types$Image = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Inline$Types$Italic = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Types$Mail = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Inline$Types$Movie = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Inline$Types$Strike = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Types$Superscript = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Types$Underline = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var author$project$Lia$Markdown$Inline$Parser$between_ = function (str) {
	return A2(
		andre_dietrich$parser_combinators$Combine$map,
		author$project$Lia$Markdown$Inline$Parser$toContainer,
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			A2(
				andre_dietrich$parser_combinators$Combine$manyTill,
				author$project$Lia$Markdown$Inline$Parser$cyclic$inlines(),
				andre_dietrich$parser_combinators$Combine$string(str)),
			andre_dietrich$parser_combinators$Combine$string(str)));
};
function author$project$Lia$Markdown$Inline$Parser$cyclic$ref_video() {
	return A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$string(')'),
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			author$project$Lia$Markdown$Inline$Parser$ref_title,
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Inline$Multimedia$movie, author$project$Lia$Markdown$Inline$Parser$ref_url_2),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					andre_dietrich$parser_combinators$Combine$string('('),
					A2(
						andre_dietrich$parser_combinators$Combine$map,
						author$project$Lia$Markdown$Inline$Types$Movie,
						author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info())))));
}
function author$project$Lia$Markdown$Inline$Parser$cyclic$ref_audio() {
	return A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$string(')'),
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			author$project$Lia$Markdown$Inline$Parser$ref_title,
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Inline$Multimedia$audio, author$project$Lia$Markdown$Inline$Parser$ref_url_2),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					andre_dietrich$parser_combinators$Combine$string('('),
					A2(
						andre_dietrich$parser_combinators$Combine$map,
						author$project$Lia$Markdown$Inline$Types$Audio,
						author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info())))));
}
function author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info() {
	return A2(
		andre_dietrich$parser_combinators$Combine$keep,
		A2(
			andre_dietrich$parser_combinators$Combine$manyTill,
			author$project$Lia$Markdown$Inline$Parser$cyclic$inlines(),
			andre_dietrich$parser_combinators$Combine$string(']')),
		andre_dietrich$parser_combinators$Combine$string('['));
}
function author$project$Lia$Markdown$Inline$Parser$cyclic$inlines() {
	return andre_dietrich$parser_combinators$Combine$lazy(
		function (_n2) {
			return A2(
				andre_dietrich$parser_combinators$Combine$keep,
				A2(
					andre_dietrich$parser_combinators$Combine$or,
					author$project$Lia$Markdown$Inline$Parser$html,
					A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Inline$Parser$annotations, author$project$Lia$Markdown$Macro$Parser$macro),
						andre_dietrich$parser_combinators$Combine$choice(
							_List_fromArray(
								[
									author$project$Lia$Markdown$Inline$Parser$code,
									author$project$Lia$Markdown$Footnote$Parser$inline,
									author$project$Lia$Markdown$Inline$Parser$cyclic$reference(),
									author$project$Lia$Markdown$Inline$Parser$Formula$formula,
									author$project$Lia$Markdown$Effect$Parser$inline(
									author$project$Lia$Markdown$Inline$Parser$cyclic$inlines()),
									author$project$Lia$Markdown$Inline$Parser$cyclic$strings()
								])))),
				author$project$Lia$Markdown$Macro$Parser$macro);
		});
}
function author$project$Lia$Markdown$Inline$Parser$cyclic$reference() {
	return andre_dietrich$parser_combinators$Combine$lazy(
		function (_n1) {
			var movie = A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Markdown$Inline$Parser$cyclic$ref_video(),
				andre_dietrich$parser_combinators$Combine$string('!?'));
			var mail_ = A3(
				author$project$Lia$Markdown$Inline$Parser$ref_pattern,
				author$project$Lia$Markdown$Inline$Types$Mail,
				author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info(),
				author$project$Lia$Markdown$Inline$Parser$email);
			var link = A3(
				author$project$Lia$Markdown$Inline$Parser$ref_pattern,
				author$project$Lia$Markdown$Inline$Types$Link,
				author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info(),
				author$project$Lia$Markdown$Inline$Parser$ref_url_1);
			var image = A2(
				andre_dietrich$parser_combinators$Combine$keep,
				A3(
					author$project$Lia$Markdown$Inline$Parser$ref_pattern,
					author$project$Lia$Markdown$Inline$Types$Image,
					author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info(),
					author$project$Lia$Markdown$Inline$Parser$ref_url_2),
				andre_dietrich$parser_combinators$Combine$string('!'));
			var audio = A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Markdown$Inline$Parser$cyclic$ref_audio(),
				andre_dietrich$parser_combinators$Combine$string('?'));
			return A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Ref,
				andre_dietrich$parser_combinators$Combine$choice(
					_List_fromArray(
						[movie, audio, image, mail_, link])));
		});
}
function author$project$Lia$Markdown$Inline$Parser$cyclic$strings() {
	return andre_dietrich$parser_combinators$Combine$lazy(
		function (_n0) {
			var underline = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Underline,
				author$project$Lia$Markdown$Inline$Parser$between_('~~'));
			var superscript = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Superscript,
				author$project$Lia$Markdown$Inline$Parser$between_('^'));
			var strike = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Strike,
				author$project$Lia$Markdown$Inline$Parser$between_('~'));
			var italic = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Italic,
				A2(
					andre_dietrich$parser_combinators$Combine$or,
					author$project$Lia$Markdown$Inline$Parser$between_('*'),
					author$project$Lia$Markdown$Inline$Parser$between_('_')));
			var escape = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Chars,
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$regex('[\\^*_+-~`\\\\${}\\[\\]|#]'),
					andre_dietrich$parser_combinators$Combine$string('\\')));
			var characters = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Chars,
				andre_dietrich$parser_combinators$Combine$regex('[~:_;\\-<>=${}\\[\\]\\(\\) ]'));
			var bold = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Bold,
				A2(
					andre_dietrich$parser_combinators$Combine$or,
					author$project$Lia$Markdown$Inline$Parser$between_('**'),
					author$project$Lia$Markdown$Inline$Parser$between_('__')));
			var base2 = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Chars,
				andre_dietrich$parser_combinators$Combine$regex('[^\n|*|+]+'));
			var base = A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Inline$Types$Chars,
				andre_dietrich$parser_combinators$Combine$regex('[^*_~:;`!\\^\\[\\]\\(\\)|{}\\\\\\n\\-+<>=$ ]+'));
			return andre_dietrich$parser_combinators$Combine$choice(
				_List_fromArray(
					[author$project$Lia$Markdown$Inline$Parser$inline_url, base, author$project$Lia$Markdown$Inline$Parser$Symbol$arrows, author$project$Lia$Markdown$Inline$Parser$Symbol$smileys, escape, bold, italic, underline, strike, superscript, characters, base2]));
		});
}
var author$project$Lia$Markdown$Inline$Parser$ref_video = author$project$Lia$Markdown$Inline$Parser$cyclic$ref_video();
author$project$Lia$Markdown$Inline$Parser$cyclic$ref_video = function () {
	return author$project$Lia$Markdown$Inline$Parser$ref_video;
};
var author$project$Lia$Markdown$Inline$Parser$ref_audio = author$project$Lia$Markdown$Inline$Parser$cyclic$ref_audio();
author$project$Lia$Markdown$Inline$Parser$cyclic$ref_audio = function () {
	return author$project$Lia$Markdown$Inline$Parser$ref_audio;
};
var author$project$Lia$Markdown$Inline$Parser$ref_info = author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info();
author$project$Lia$Markdown$Inline$Parser$cyclic$ref_info = function () {
	return author$project$Lia$Markdown$Inline$Parser$ref_info;
};
var author$project$Lia$Markdown$Inline$Parser$inlines = author$project$Lia$Markdown$Inline$Parser$cyclic$inlines();
author$project$Lia$Markdown$Inline$Parser$cyclic$inlines = function () {
	return author$project$Lia$Markdown$Inline$Parser$inlines;
};
var author$project$Lia$Markdown$Inline$Parser$reference = author$project$Lia$Markdown$Inline$Parser$cyclic$reference();
author$project$Lia$Markdown$Inline$Parser$cyclic$reference = function () {
	return author$project$Lia$Markdown$Inline$Parser$reference;
};
var author$project$Lia$Markdown$Inline$Parser$strings = author$project$Lia$Markdown$Inline$Parser$cyclic$strings();
author$project$Lia$Markdown$Inline$Parser$cyclic$strings = function () {
	return author$project$Lia$Markdown$Inline$Parser$strings;
};
var author$project$Lia$Markdown$Effect$Model$Model = F4(
	function (visible, effects, comments, javascript) {
		return {aG: comments, dR: effects, aa: javascript, dj: visible};
	});
var author$project$Lia$Markdown$Effect$Model$init = A4(author$project$Lia$Markdown$Effect$Model$Model, 0, 0, elm$core$Dict$empty, elm$core$Dict$empty);
var author$project$Lia$Markdown$Footnote$Model$init = elm$core$Dict$empty;
var author$project$Lia$Parser$Context$init = F2(
	function (search_index, global) {
		return {
			aW: elm$core$Array$empty,
			bV: global,
			dO: false,
			M: author$project$Lia$Markdown$Effect$Model$init,
			aK: _List_fromArray(
				[0]),
			b5: author$project$Lia$Markdown$Footnote$Model$init,
			cc: _List_Nil,
			_: false,
			bi: elm$core$Array$empty,
			cT: search_index,
			bw: elm$core$Array$empty
		};
	});
var author$project$Lia$Definition$Parser$inline_parser = F2(
	function (defines, str) {
		var _n0 = A3(
			andre_dietrich$parser_combinators$Combine$runParser,
			andre_dietrich$parser_combinators$Combine$many1(author$project$Lia$Markdown$Inline$Parser$inlines),
			A2(author$project$Lia$Parser$Context$init, elm$core$Basics$identity, defines),
			A3(elm$core$String$replace, '\n', ' ', str));
		if (!_n0.$) {
			var _n1 = _n0.a;
			var rslt = _n1.c;
			return rslt;
		} else {
			return _List_Nil;
		}
	});
var author$project$Lia$Definition$Parser$set = function (fct) {
	return andre_dietrich$parser_combinators$Combine$modifyState(
		function (s) {
			return _Utils_update(
				s,
				{
					bV: fct(s.bV)
				});
		});
};
var andre_dietrich$parser_combinators$Combine$regexWith = F2(
	function (caseInsensitive, multiline) {
		return A2(
			elm$core$Basics$composeR,
			A2(
				andre_dietrich$parser_combinators$Combine$regexer,
				elm$regex$Regex$fromStringWith(
					{bL: caseInsensitive, cv: multiline}),
				function ($) {
					return $.ap;
				}),
			elm$core$Basics$identity);
	});
var author$project$Lia$Parser$Context$indentation_append = function (str) {
	return andre_dietrich$parser_combinators$Combine$modifyState(
		function (state) {
			return _Utils_update(
				state,
				{
					cc: A2(
						elm$core$List$append,
						state.cc,
						_List_fromArray(
							[str])),
					_: true
				});
		});
};
var author$project$Lia$Parser$Context$indentation_pop = andre_dietrich$parser_combinators$Combine$modifyState(
	function (state) {
		return _Utils_update(
			state,
			{
				cc: elm$core$List$reverse(
					A2(
						elm$core$List$drop,
						1,
						elm$core$List$reverse(state.cc))),
				_: false
			});
	});
var author$project$Lia$Parser$Context$indentation_skip = andre_dietrich$parser_combinators$Combine$modifyState(
	author$project$Lia$Parser$Context$skip_(true));
var elm$core$String$trimLeft = _String_trimLeft;
var elm$core$String$trimRight = _String_trimRight;
var author$project$Lia$Definition$Parser$ending = A2(
	andre_dietrich$parser_combinators$Combine$map,
	function (list) {
		return elm$core$String$trimRight(
			elm$core$String$concat(
				A2(elm$core$List$map, elm$core$String$trimLeft, list)));
	},
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Parser$Context$indentation_pop,
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			andre_dietrich$parser_combinators$Combine$many1(
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$regex('.+\\n'),
					author$project$Lia$Parser$Context$indentation)),
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Context$indentation_skip,
				author$project$Lia$Parser$Context$indentation_append('  ')))));
var author$project$Lia$Definition$Parser$store = F2(
	function (str, fn) {
		return A2(
			andre_dietrich$parser_combinators$Combine$keep,
			A2(
				andre_dietrich$parser_combinators$Combine$andThen,
				A2(elm$core$Basics$composeR, fn, author$project$Lia$Definition$Parser$set),
				author$project$Lia$Definition$Parser$ending),
			A3(andre_dietrich$parser_combinators$Combine$regexWith, true, false, str));
	});
var author$project$Lia$Definition$Types$Link = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Definition$Types$Script = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Definition$Types$toURL = F2(
	function (basis, url) {
		return A2(elm$core$String$startsWith, 'http', url) ? url : _Utils_ap(basis, url);
	});
var author$project$Lia$Definition$Types$append = F4(
	function (to, base, urls, list) {
		return A2(
			elm$core$List$append,
			list,
			A2(
				elm$core$List$map,
				A2(
					elm$core$Basics$composeR,
					author$project$Lia$Definition$Types$toURL(base),
					to),
				A2(elm$core$String$split, '\n', urls)));
	});
var author$project$Lia$Definition$Types$addToResources = F3(
	function (to, urls, def) {
		return _Utils_update(
			def,
			{
				aS: A4(author$project$Lia$Definition$Types$append, to, def.dx, urls, def.aS)
			});
	});
var author$project$Lia$Definition$Types$add_imports = F2(
	function (url, def) {
		return _Utils_update(
			def,
			{
				aM: A2(
					elm$core$List$append,
					def.aM,
					A2(
						elm$core$List$map,
						author$project$Lia$Definition$Types$toURL(def.dx),
						A2(elm$core$String$split, '\n', url)))
			});
	});
var elm$core$String$words = _String_words;
var author$project$Lia$Definition$Types$add_translation = F2(
	function (str, def) {
		var _n0 = elm$core$String$words(str);
		if ((_n0.b && _n0.b.b) && (!_n0.b.b.b)) {
			var lang = _n0.a;
			var _n1 = _n0.b;
			var url = _n1.a;
			return _Utils_update(
				def,
				{
					ay: A3(
						elm$core$Dict$insert,
						lang,
						A2(author$project$Lia$Definition$Types$toURL, def.dx, url),
						def.ay)
				});
		} else {
			return def;
		}
	});
var author$project$Lia$Markdown$Macro$Parser$add = F2(
	function (_n0, def) {
		var name = _n0.a;
		var code = _n0.b;
		return _Utils_update(
			def,
			{
				ao: A3(elm$core$Dict$insert, name, code, def.ao)
			});
	});
var author$project$Lia$Parser$Helper$newline = andre_dietrich$parser_combinators$Combine$string('\n');
var author$project$Lia$Settings$Model$Presentation = 1;
var author$project$Lia$Settings$Model$Slides = 0;
var author$project$Lia$Settings$Model$Textbook = 2;
var author$project$Lia$Definition$Parser$definition = andre_dietrich$parser_combinators$Combine$lazy(
	function (_n0) {
		var list = andre_dietrich$parser_combinators$Combine$choice(
			_List_fromArray(
				[
					A2(
					author$project$Lia$Definition$Parser$store,
					'author:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{dw: x});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'base:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{dx: x});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'comment:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{
									dI: A3(elm$core$String$replace, '\n', ' ', x)
								});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'attribute:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{
									bH: A2(
										elm$core$List$append,
										d.bH,
										_List_fromArray(
											[
												A2(author$project$Lia$Definition$Parser$inline_parser, d, x)
											]))
								});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'date:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{dM: x});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'email:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{dT: x});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'language:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{er: x});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'logo:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{ex: x});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'narrator:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{eE: x});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'script:',
					author$project$Lia$Definition$Types$addToResources(author$project$Lia$Definition$Types$Script)),
					A2(author$project$Lia$Definition$Parser$store, 'import:', author$project$Lia$Definition$Types$add_imports),
					A2(
					author$project$Lia$Definition$Parser$store,
					'link:',
					author$project$Lia$Definition$Types$addToResources(author$project$Lia$Definition$Types$Link)),
					A2(author$project$Lia$Definition$Parser$store, 'translation:', author$project$Lia$Definition$Types$add_translation),
					A2(
					author$project$Lia$Definition$Parser$store,
					'version:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{fn: x});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'dark:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{
									eu: function () {
										var _n1 = elm$core$String$toLower(x);
										switch (_n1) {
											case 'true':
												return elm$core$Maybe$Just(false);
											case 'false':
												return elm$core$Maybe$Just(true);
											default:
												return elm$core$Maybe$Nothing;
										}
									}()
								});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'mode:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{
									eA: function () {
										var _n2 = elm$core$String$toLower(x);
										switch (_n2) {
											case 'textbook':
												return elm$core$Maybe$Just(2);
											case 'presentation':
												return elm$core$Maybe$Just(1);
											case 'slides':
												return elm$core$Maybe$Just(0);
											default:
												return elm$core$Maybe$Nothing;
										}
									}()
								});
						})),
					A2(
					author$project$Lia$Definition$Parser$store,
					'debug:',
					F2(
						function (x, d) {
							return _Utils_update(
								d,
								{
									bT: (x === 'true') ? true : false
								});
						})),
					A2(
					andre_dietrich$parser_combinators$Combine$andThen,
					function (x) {
						return author$project$Lia$Definition$Parser$set(
							function (def) {
								return _Utils_update(
									def,
									{
										eP: elm$core$String$trim(x)
									});
							});
					},
					A2(
						andre_dietrich$parser_combinators$Combine$keep,
						author$project$Lia$Parser$Helper$stringTill(
							andre_dietrich$parser_combinators$Combine$string('\n@end')),
						andre_dietrich$parser_combinators$Combine$regex('@onload[\t ]*\\n'))),
					A2(
					andre_dietrich$parser_combinators$Combine$andThen,
					function (x) {
						return author$project$Lia$Definition$Parser$set(
							author$project$Lia$Markdown$Macro$Parser$add(x));
					},
					A2(
						andre_dietrich$parser_combinators$Combine$ignore,
						author$project$Lia$Parser$Helper$newline,
						A2(
							andre_dietrich$parser_combinators$Combine$andMap,
							andre_dietrich$parser_combinators$Combine$regex('.+'),
							A2(
								andre_dietrich$parser_combinators$Combine$map,
								elm$core$Tuple$pair,
								A2(
									andre_dietrich$parser_combinators$Combine$ignore,
									andre_dietrich$parser_combinators$Combine$regex('[\t ]*:[\t ]*'),
									author$project$Lia$Markdown$Macro$Parser$pattern))))),
					A2(
					andre_dietrich$parser_combinators$Combine$andThen,
					function (x) {
						return author$project$Lia$Definition$Parser$set(
							author$project$Lia$Markdown$Macro$Parser$add(x));
					},
					A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Parser$Helper$stringTill(
							andre_dietrich$parser_combinators$Combine$string('\n@end')),
						A2(
							andre_dietrich$parser_combinators$Combine$map,
							elm$core$Tuple$pair,
							A2(
								andre_dietrich$parser_combinators$Combine$ignore,
								andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\n'),
								author$project$Lia$Markdown$Macro$Parser$pattern))))
				]));
		return andre_dietrich$parser_combinators$Combine$skip(
			author$project$Lia$Markdown$Inline$Parser$comment(
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					andre_dietrich$parser_combinators$Combine$whitespace,
					andre_dietrich$parser_combinators$Combine$many1(
						A2(andre_dietrich$parser_combinators$Combine$keep, list, andre_dietrich$parser_combinators$Combine$whitespace)))));
	});
var author$project$Lia$Definition$Parser$parse = andre_dietrich$parser_combinators$Combine$lazy(
	function (_n0) {
		return andre_dietrich$parser_combinators$Combine$skip(
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$whitespace,
				andre_dietrich$parser_combinators$Combine$maybe(
					A2(
						andre_dietrich$parser_combinators$Combine$keep,
						andre_dietrich$parser_combinators$Combine$modifyState(
							function (s) {
								return _Utils_update(
									s,
									{dO: true});
							}),
						author$project$Lia$Definition$Parser$definition))));
	});
var author$project$Lia$Definition$Types$default = function (base) {
	return {bH: _List_Nil, dw: '', dx: base, dI: '', dM: '', bT: false, dT: '', aM: _List_Nil, er: 'en', eu: elm$core$Maybe$Nothing, ex: '', ao: elm$core$Dict$empty, eA: elm$core$Maybe$Nothing, eE: 'US English Male', eP: '', aS: _List_Nil, cV: -1, ay: elm$core$Dict$empty, dh: -1, fn: ''};
};
var andre_dietrich$parser_combinators$Combine$ParseLocation = F3(
	function (source, line, column) {
		return {dG: column, ev: line, e3: source};
	});
var andre_dietrich$parser_combinators$Combine$currentLocation = function (stream) {
	var find = F3(
		function (position, currentLine_, lines) {
			find:
			while (true) {
				if (!lines.b) {
					return A3(andre_dietrich$parser_combinators$Combine$ParseLocation, '', currentLine_, position);
				} else {
					var line = lines.a;
					var rest = lines.b;
					var length = elm$core$String$length(line);
					var lengthPlusNL = length + 1;
					if (_Utils_eq(position, length)) {
						return A3(andre_dietrich$parser_combinators$Combine$ParseLocation, line, currentLine_, position);
					} else {
						if (_Utils_cmp(position, length) > 0) {
							var $temp$position = position - lengthPlusNL,
								$temp$currentLine_ = currentLine_ + 1,
								$temp$lines = rest;
							position = $temp$position;
							currentLine_ = $temp$currentLine_;
							lines = $temp$lines;
							continue find;
						} else {
							return A3(andre_dietrich$parser_combinators$Combine$ParseLocation, line, currentLine_, position);
						}
					}
				}
			}
		});
	return A3(
		find,
		stream.K,
		0,
		A2(elm$core$String$split, '\n', stream.bQ));
};
var elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3(elm$core$String$repeatHelp, n, chunk, '');
	});
var elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				elm$core$String$repeat,
				n - elm$core$String$length(string),
				elm$core$String$fromChar(_char)),
			string);
	});
var author$project$Lia$Parser$Parser$formatError = F2(
	function (ms, stream) {
		var separator = '|> ';
		var separatorOffset = elm$core$String$length(separator);
		var location = andre_dietrich$parser_combinators$Combine$currentLocation(stream);
		var padding = (location.dG + separatorOffset) + 2;
		var expectationSeparator = '\n  * ';
		return 'Parse error around line:\\n\\n' + (elm$core$String$fromInt(location.ev) + (separator + (location.e3 + ('\\n' + (A3(elm$core$String$padLeft, padding, ' ', '^') + ('\\nI expected one of the following:\\n' + (expectationSeparator + A2(elm$core$String$join, expectationSeparator, ms))))))));
	});
var author$project$Lia$Parser$Parser$parse_defintion = F2(
	function (base, code) {
		var _n0 = A3(
			andre_dietrich$parser_combinators$Combine$runParser,
			author$project$Lia$Definition$Parser$parse,
			A2(
				author$project$Lia$Parser$Context$init,
				elm$core$Basics$identity,
				author$project$Lia$Definition$Types$default(base)),
			code);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var state = _n1.a;
			var data = _n1.b;
			return elm$core$Result$Ok(
				_Utils_Tuple2(state.bV, data.D));
		} else {
			var _n2 = _n0.a;
			var stream = _n2.b;
			var ms = _n2.c;
			return elm$core$Result$Err(
				A2(author$project$Lia$Parser$Parser$formatError, ms, stream));
		}
	});
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1);
	});
var author$project$Lia$Definition$Types$add_macros = F2(
	function (orig, temp) {
		return _Utils_update(
			orig,
			{
				bH: A2(elm$core$List$append, orig.bH, temp.bH),
				ao: A2(elm$core$Dict$union, orig.ao, temp.ao),
				eP: elm$core$String$trim(orig.eP + ('\n' + temp.eP))
			});
	});
var author$project$Port$Event$Event = F3(
	function (topic, section, message) {
		return {ey: message, cV: section, fi: topic};
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$Lia$Model$load_src = F2(
	function (old, _new) {
		var member = function (x) {
			return !A2(elm$core$List$member, x, old);
		};
		var to_load = A2(elm$core$List$filter, member, _new);
		return _Utils_Tuple2(
			A2(elm$core$List$append, old, to_load),
			A2(
				elm$core$List$map,
				function (res) {
					return A3(
						author$project$Port$Event$Event,
						'resource',
						0,
						A2(
							elm$json$Json$Encode$list,
							elm$json$Json$Encode$string,
							function () {
								if (res.$ === 1) {
									var url = res.a;
									return _List_fromArray(
										['script', url]);
								} else {
									var url = res.a;
									return _List_fromArray(
										['link', url]);
								}
							}()));
				},
				to_load));
	});
var author$project$Lia$Script$add_todos = F2(
	function (definition, model) {
		var _n0 = A2(author$project$Lia$Model$load_src, model.cL, definition.aS);
		var res = _n0.a;
		var events = _n0.b;
		return _Utils_update(
			model,
			{
				bW: A2(author$project$Lia$Definition$Types$add_macros, model.bW, definition),
				cL: res,
				de: A2(
					elm$core$List$append,
					model.de,
					elm$core$List$reverse(events))
			});
	});
var author$project$Translations$Bg = 0;
var author$project$Translations$De = 1;
var author$project$Translations$En = 2;
var author$project$Translations$Fa = 3;
var author$project$Translations$Hy = 4;
var author$project$Translations$Ua = 5;
var author$project$Translations$getLnFromCode = function (code) {
	switch (code) {
		case 'bg':
			return 0;
		case 'de':
			return 1;
		case 'en':
			return 2;
		case 'fa':
			return 3;
		case 'hy':
			return 4;
		case 'ua':
			return 5;
		default:
			return 2;
	}
};
var author$project$Lia$Script$init_script = F2(
	function (model, script) {
		var _n0 = A2(author$project$Lia$Parser$Parser$parse_defintion, model.cy, script);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var definition = _n1.a;
			var code = _n1.b;
			var settings = model.ai;
			return _Utils_Tuple3(
				A2(
					author$project$Lia$Script$add_todos,
					definition,
					_Utils_update(
						model,
						{
							bW: _Utils_update(
								definition,
								{bH: _List_Nil, aM: _List_Nil, aS: _List_Nil}),
							ai: _Utils_update(
								settings,
								{
									co: A2(elm$core$Maybe$withDefault, settings.co, definition.eu),
									eA: A2(elm$core$Maybe$withDefault, settings.eA, definition.eA)
								}),
							ay: author$project$Translations$getLnFromCode(definition.er)
						})),
				elm$core$Maybe$Just(code),
				definition.aM);
		} else {
			var msg = _n0.a;
			return _Utils_Tuple3(
				_Utils_update(
					model,
					{
						dU: elm$core$Maybe$Just(msg)
					}),
				elm$core$Maybe$Nothing,
				_List_Nil);
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$App$load_readme = F2(
	function (model, readme) {
		var _n0 = A2(
			author$project$Lia$Script$init_script,
			model.e,
			A3(elm$core$String$replace, '\u000d', '', readme));
		if (!_n0.b.$) {
			if (!_n0.c.b) {
				var lia = _n0.a;
				var code = _n0.b.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							W: elm$core$Maybe$Just(code),
							e: lia,
							aU: elm$core$String$length(code),
							t: A2(author$project$App$Parsing, true, 0)
						}),
					author$project$App$message(author$project$App$LiaParse));
			} else {
				var lia = _n0.a;
				var code = _n0.b.a;
				var templates = _n0.c;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							W: elm$core$Maybe$Just(code),
							e: lia,
							aU: elm$core$String$length(code),
							t: A2(
								author$project$App$Parsing,
								true,
								elm$core$List$length(templates))
						}),
					elm$core$Platform$Cmd$batch(
						A2(
							elm$core$List$cons,
							author$project$App$message(author$project$App$LiaParse),
							A2(
								elm$core$List$map,
								author$project$App$download(author$project$App$Load_Template_Result),
								templates))));
			}
		} else {
			var lia = _n0.a;
			var _n1 = _n0.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						t: author$project$App$Error(
							A2(elm$core$Maybe$withDefault, '', lia.dU))
					}),
				elm$core$Platform$Cmd$none);
		}
	});
var author$project$Lia$Index$Model$init = '';
var author$project$Lia$Settings$Json$settings = F9(
	function (model, toc, mode, theme, light, editor, font_size, sound, lang) {
		return _Utils_update(
			model,
			{bY: editor, b3: font_size, eq: lang, co: light, eA: mode, c0: sound, c9: toc, dc: theme});
	});
var elm$json$Json$Decode$fail = _Json_fail;
var elm$json$Json$Decode$succeed = _Json_succeed;
var author$project$Lia$Settings$Json$toMode = function (str) {
	switch (str) {
		case 'Textbook':
			return elm$json$Json$Decode$succeed(2);
		case 'Presentation':
			return elm$json$Json$Decode$succeed(1);
		case 'Slides':
			return elm$json$Json$Decode$succeed(0);
		default:
			return elm$json$Json$Decode$fail('unknown presentation mode');
	}
};
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$decodeValue = _Json_run;
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$map8 = _Json_map8;
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Lia$Settings$Json$toModel = F2(
	function (model, json) {
		return A2(
			elm$json$Json$Decode$decodeValue,
			A9(
				elm$json$Json$Decode$map8,
				author$project$Lia$Settings$Json$settings(model),
				A2(elm$json$Json$Decode$field, 'table_of_contents', elm$json$Json$Decode$bool),
				A2(
					elm$json$Json$Decode$andThen,
					author$project$Lia$Settings$Json$toMode,
					A2(elm$json$Json$Decode$field, 'mode', elm$json$Json$Decode$string)),
				A2(elm$json$Json$Decode$field, 'theme', elm$json$Json$Decode$string),
				A2(elm$json$Json$Decode$field, 'light', elm$json$Json$Decode$bool),
				A2(elm$json$Json$Decode$field, 'editor', elm$json$Json$Decode$string),
				A2(elm$json$Json$Decode$field, 'font_size', elm$json$Json$Decode$int),
				A2(elm$json$Json$Decode$field, 'sound', elm$json$Json$Decode$bool),
				A2(elm$json$Json$Decode$field, 'lang', elm$json$Json$Decode$string)),
			json);
	});
var author$project$Lia$Settings$Model$Buttons = F4(
	function (settings, informations, translations, share) {
		return {eh: informations, ai: settings, e1: share, fj: translations};
	});
var author$project$Lia$Settings$Model$init_buttons = A4(author$project$Lia$Settings$Model$Buttons, false, false, false, false);
var author$project$Lia$Settings$Model$init = function (mode) {
	return {bK: author$project$Lia$Settings$Model$init_buttons, bY: 'dreamweaver', b3: 100, cg: false, eq: 'default', co: true, eA: mode, c0: true, c3: false, c9: true, dc: 'default'};
};
var elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var author$project$Lia$Model$init = F5(
	function (settings, url, readme, origin, slide_number) {
		var _default = author$project$Lia$Settings$Model$init(1);
		return {
			bW: author$project$Lia$Definition$Types$default(url),
			dU: elm$core$Maybe$Nothing,
			ce: author$project$Lia$Index$Model$init,
			cy: origin,
			at: readme,
			cL: _List_Nil,
			cT: elm$core$Basics$identity,
			cW: function () {
				if (slide_number.$ === 1) {
					return 0;
				} else {
					var idx = slide_number.a;
					return ((idx - 1) > 0) ? (idx - 1) : 0;
				}
			}(),
			cX: elm$core$Array$empty,
			ai: A2(
				elm$core$Result$withDefault,
				_default,
				A2(author$project$Lia$Settings$Json$toModel, _default, settings)),
			dd: 'Lia',
			de: _List_Nil,
			ay: 2,
			bz: url
		};
	});
var author$project$Lia$Script$init = author$project$Lia$Model$init;
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$App$init = F3(
	function (flags, url, key) {
		var slide = A2(elm$core$Maybe$andThen, elm$core$String$toInt, url.a0);
		var _n0 = _Utils_Tuple3(url.ag, flags.aX, flags.bm);
		if (!_n0.a.$) {
			var query = _n0.a.a;
			return _Utils_Tuple2(
				A6(
					author$project$App$Model,
					key,
					url,
					author$project$App$Loading,
					A5(
						author$project$Lia$Script$init,
						flags.ai,
						author$project$App$get_base(url),
						query,
						author$project$App$get_origin(url.ag),
						slide),
					elm$core$Maybe$Nothing,
					0),
				A2(author$project$App$download, author$project$App$Load_ReadMe_Result, query));
		} else {
			if (!_n0.b.$) {
				var query = _n0.b.a;
				return _Utils_Tuple2(
					A6(
						author$project$App$Model,
						key,
						_Utils_update(
							url,
							{
								ag: elm$core$Maybe$Just(query)
							}),
						author$project$App$Loading,
						A5(
							author$project$Lia$Script$init,
							flags.ai,
							author$project$App$get_base(url),
							query,
							author$project$App$get_origin(url.ag),
							slide),
						elm$core$Maybe$Nothing,
						0),
					A2(author$project$App$download, author$project$App$Load_ReadMe_Result, query));
			} else {
				if (!_n0.c.$) {
					var script = _n0.c.a;
					return A2(
						author$project$App$load_readme,
						A6(
							author$project$App$Model,
							key,
							url,
							author$project$App$Idle,
							A5(author$project$Lia$Script$init, flags.ai, '', '', '', slide),
							elm$core$Maybe$Nothing,
							0),
						script);
				} else {
					return _Utils_Tuple2(
						A6(
							author$project$App$Model,
							key,
							url,
							author$project$App$Idle,
							A5(author$project$Lia$Script$init, flags.ai, '', '', '', slide),
							elm$core$Maybe$Nothing,
							0),
						elm$core$Platform$Cmd$none);
				}
			}
		}
	});
var author$project$App$LiaScript = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Update$FootnoteShow = function (a) {
	return {$: 5, a: a};
};
var author$project$Lia$Markdown$Update$footnote = _Platform_incomingPort('footnote', elm$json$Json$Decode$string);
var author$project$Lia$Markdown$Update$subscriptions = function (_n0) {
	return author$project$Lia$Markdown$Update$footnote(author$project$Lia$Markdown$Update$FootnoteShow);
};
var author$project$Lia$Update$Handle = function (a) {
	return {$: 7, a: a};
};
var author$project$Lia$Update$UpdateMarkdown = function (a) {
	return {$: 6, a: a};
};
var elm$json$Json$Decode$value = _Json_decodeValue;
var author$project$Lia$Update$event2elm = _Platform_incomingPort(
	'event2elm',
	A2(
		elm$json$Json$Decode$andThen,
		function (topic) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (section) {
					return A2(
						elm$json$Json$Decode$andThen,
						function (message) {
							return elm$json$Json$Decode$succeed(
								{ey: message, cV: section, fi: topic});
						},
						A2(elm$json$Json$Decode$field, 'message', elm$json$Json$Decode$value));
				},
				A2(elm$json$Json$Decode$field, 'section', elm$json$Json$Decode$int));
		},
		A2(elm$json$Json$Decode$field, 'topic', elm$json$Json$Decode$string)));
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_n0.$) {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var author$project$Lia$Update$get_active_section = function (model) {
	return A2(elm$core$Array$get, model.cW, model.cX);
};
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$map = _Platform_map;
var author$project$Lia$Update$subscriptions = function (model) {
	var _n0 = author$project$Lia$Update$get_active_section(model);
	if (!_n0.$) {
		var section = _n0.a;
		return elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					author$project$Lia$Update$event2elm(author$project$Lia$Update$Handle),
					A2(
					elm$core$Platform$Sub$map,
					author$project$Lia$Update$UpdateMarkdown,
					author$project$Lia$Markdown$Update$subscriptions(section))
				]));
	} else {
		return author$project$Lia$Update$event2elm(author$project$Lia$Update$Handle);
	}
};
var author$project$Lia$Script$subscriptions = function (model) {
	return author$project$Lia$Update$subscriptions(model);
};
var author$project$App$subscriptions = function (model) {
	return A2(
		elm$core$Platform$Sub$map,
		author$project$App$LiaScript,
		author$project$Lia$Script$subscriptions(model.e));
};
var author$project$App$LiaStart = {$: 1};
var author$project$App$parse_error = function (msg) {
	switch (msg.$) {
		case 0:
			var url = msg.a;
			return 'Bad Url ' + url;
		case 1:
			return 'Network timeout';
		case 3:
			var _int = msg.a;
			return 'Bad status ' + elm$core$String$fromInt(_int);
		case 2:
			return 'Network error';
		default:
			var body = msg.a;
			return 'Bad body ' + body;
	}
};
var author$project$App$Running = {$: 3};
var author$project$Lia$Script$generateIndex = F2(
	function (id, title) {
		return _Utils_Tuple2(
			'#' + A3(
				elm$core$String$replace,
				' ',
				'-',
				elm$core$String$toLower(title)),
			'#' + elm$core$String$fromInt(id + 1));
	});
var author$project$Lia$Script$get_title = function (sections) {
	return 'Lia: ' + elm$core$String$trim(
		A2(
			elm$core$Maybe$withDefault,
			'Lia',
			A2(
				elm$core$Maybe$map,
				author$project$Lia$Markdown$Inline$Stringify$stringify,
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.dd;
					},
					A2(elm$core$Array$get, 0, sections)))));
};
var author$project$Lia$Update$Load = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Index$Update$make_visible = function (section) {
	return _Utils_update(
		section,
		{dj: true});
};
var elm$core$String$contains = _String_contains;
var author$project$Lia$Index$Update$search = F2(
	function (pattern, section) {
		return _Utils_update(
			section,
			{
				dj: A2(elm$core$String$contains, pattern, section.W)
			});
	});
var elm$core$Elm$JsArray$map = _JsArray_map;
var elm$core$Array$map = F2(
	function (func, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = function (node) {
			if (!node.$) {
				var subTree = node.a;
				return elm$core$Array$SubTree(
					A2(elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return elm$core$Array$Leaf(
					A2(elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2(elm$core$Elm$JsArray$map, helper, tree),
			A2(elm$core$Elm$JsArray$map, func, tail));
	});
var author$project$Lia$Index$Update$scan = F2(
	function (sections, pattern) {
		var check = (pattern === '') ? author$project$Lia$Index$Update$make_visible : author$project$Lia$Index$Update$search(
			elm$core$String$toLower(pattern));
		return A2(elm$core$Array$map, check, sections);
	});
var author$project$Lia$Index$Update$update = F2(
	function (msg, sections) {
		var pattern = msg;
		return _Utils_Tuple2(
			pattern,
			A2(author$project$Lia$Index$Update$scan, sections, pattern));
	});
var author$project$Lia$Markdown$Effect$Update$has_next = function (model) {
	return _Utils_cmp(model.dj, model.dR) < 0;
};
var author$project$Lia$Markdown$Effect$Update$has_previous = function (model) {
	return model.dj > 0;
};
var author$project$Lia$Markdown$Code$Update$Handle = function (a) {
	return {$: 9, a: a};
};
var author$project$Lia$Markdown$Code$Update$handle = author$project$Lia$Markdown$Code$Update$Handle;
var author$project$Lia$Markdown$Quiz$Update$Handle = function (a) {
	return {$: 6, a: a};
};
var author$project$Lia$Markdown$Quiz$Update$handle = author$project$Lia$Markdown$Quiz$Update$Handle;
var author$project$Lia$Markdown$Survey$Update$Handle = function (a) {
	return {$: 6, a: a};
};
var author$project$Lia$Markdown$Survey$Update$handle = author$project$Lia$Markdown$Survey$Update$Handle;
var author$project$Lia$Markdown$Update$UpdateCode = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Update$UpdateQuiz = function (a) {
	return {$: 2, a: a};
};
var author$project$Lia$Markdown$Update$UpdateSurvey = function (a) {
	return {$: 3, a: a};
};
var author$project$Port$Eval$Eval = F3(
	function (ok, result, details) {
		return {aI: details, aq: ok, cM: result};
	});
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$json$Json$Decode$map3 = _Json_map3;
var author$project$Port$Eval$decoder = A4(
	elm$json$Json$Decode$map3,
	author$project$Port$Eval$Eval,
	A2(elm$json$Json$Decode$field, 'ok', elm$json$Json$Decode$bool),
	A2(elm$json$Json$Decode$field, 'result', elm$json$Json$Decode$string),
	A2(
		elm$json$Json$Decode$field,
		'details',
		elm$json$Json$Decode$list(elm$json$Json$Decode$value)));
var author$project$Port$Eval$decode = function (json) {
	var _n0 = A2(elm$json$Json$Decode$decodeValue, author$project$Port$Eval$decoder, json);
	if (!_n0.$) {
		var result = _n0.a;
		return result;
	} else {
		var info = _n0.a;
		return A3(
			author$project$Port$Eval$Eval,
			false,
			elm$json$Json$Decode$errorToString(info),
			_List_Nil);
	}
};
var author$project$Lia$Markdown$Code$Events$evalDecode = function (event) {
	return author$project$Port$Eval$decode(event.ey);
};
var elm$json$Json$Encode$int = _Json_wrap;
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var author$project$Port$Event$encode = function (_n0) {
	var topic = _n0.fi;
	var section = _n0.cV;
	var message = _n0.ey;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'topic',
				elm$json$Json$Encode$string(topic)),
				_Utils_Tuple2(
				'section',
				elm$json$Json$Encode$int(section)),
				_Utils_Tuple2('message', message)
			]));
};
var elm$json$Json$Encode$bool = _Json_wrap;
var author$project$Lia$Markdown$Code$Events$toggle = F4(
	function (message, id1, id2, value) {
		return _List_fromArray(
			[
				A3(
				author$project$Port$Event$Event,
				'flip',
				id1,
				author$project$Port$Event$encode(
					A3(
						author$project$Port$Event$Event,
						message,
						id2,
						elm$json$Json$Encode$bool(value))))
			]);
	});
var author$project$Lia$Markdown$Code$Events$flip_view = F3(
	function (id1, id2, file) {
		return A4(author$project$Lia$Markdown$Code$Events$toggle, 'view', id1, id2, file.dj);
	});
var author$project$Lia$Markdown$Code$Events$fullscreen = F3(
	function (id1, id2, file) {
		return A4(author$project$Lia$Markdown$Code$Events$toggle, 'fullscreen', id1, id2, file.d3);
	});
var author$project$Lia$Markdown$Code$Events$input = F2(
	function (idx, string) {
		return A3(
			author$project$Port$Event$Event,
			'input',
			idx,
			elm$json$Json$Encode$string(string));
	});
var author$project$Lia$Markdown$Code$Json$fromFile = function (file) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'lang',
				elm$json$Json$Encode$string(file.eq)),
				_Utils_Tuple2(
				'name',
				elm$json$Json$Encode$string(file.eC)),
				_Utils_Tuple2(
				'code',
				elm$json$Json$Encode$string(file.W)),
				_Utils_Tuple2(
				'visible',
				elm$json$Json$Encode$bool(file.dj)),
				_Utils_Tuple2(
				'fullscreen',
				elm$json$Json$Encode$bool(file.d3))
			]));
};
var author$project$Lia$Markdown$Code$Log$encLevel = function (level) {
	return elm$json$Json$Encode$int(
		function () {
			switch (level) {
				case 0:
					return -1;
				case 1:
					return 0;
				case 2:
					return 1;
				default:
					return 2;
			}
		}());
};
var author$project$Lia$Markdown$Code$Log$encMessage = function (_n0) {
	var level = _n0.ab;
	var text = _n0.aw;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'level',
				author$project$Lia$Markdown$Code$Log$encLevel(level)),
				_Utils_Tuple2(
				'text',
				elm$json$Json$Encode$string(text))
			]));
};
var author$project$Lia$Markdown$Code$Log$encode = function (log) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'ok',
				elm$json$Json$Encode$bool(log.aq)),
				_Utils_Tuple2(
				'level',
				author$project$Lia$Markdown$Code$Log$encLevel(log.ab)),
				_Utils_Tuple2(
				'messages',
				A2(elm$json$Json$Encode$list, author$project$Lia$Markdown$Code$Log$encMessage, log.O)),
				_Utils_Tuple2(
				'lines',
				elm$json$Json$Encode$int(log.ac)),
				_Utils_Tuple2(
				'details',
				A2(elm$json$Json$Encode$list, elm$core$Basics$identity, log.aI))
			]));
};
var elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var elm$core$Array$foldl = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldl,
			func,
			A3(elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var elm$json$Json$Encode$array = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$Array$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var author$project$Lia$Markdown$Code$Events$load = F2(
	function (idx, project) {
		return _Utils_Tuple2(
			project,
			_List_fromArray(
				[
					A3(
					author$project$Port$Event$Event,
					'load',
					idx,
					elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'file',
								A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Code$Json$fromFile, project.a$)),
								_Utils_Tuple2(
								'version_active',
								elm$json$Json$Encode$int(project.aV)),
								_Utils_Tuple2(
								'log',
								author$project$Lia$Markdown$Code$Log$encode(project.a9))
							])))
				]));
	});
var elm$json$Json$Encode$null = _Json_encodeNull;
var author$project$Lia$Markdown$Code$Events$stop = function (idx) {
	return _List_fromArray(
		[
			A3(author$project$Port$Event$Event, 'stop', idx, elm$json$Json$Encode$null)
		]);
};
var author$project$Lia$Markdown$Code$Json$fromVersion = function (_n0) {
	var hashes = _n0.a;
	var log = _n0.b;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'hashes',
				A2(elm$json$Json$Encode$list, elm$json$Json$Encode$string, hashes)),
				_Utils_Tuple2(
				'log',
				author$project$Lia$Markdown$Code$Log$encode(log))
			]));
};
var author$project$Lia$Markdown$Code$Events$version_update = F2(
	function (idx, project) {
		return _Utils_Tuple2(
			project,
			_List_fromArray(
				[
					A3(
					author$project$Port$Event$Event,
					'version_update',
					idx,
					elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'version_active',
								elm$json$Json$Encode$int(project.aV)),
								_Utils_Tuple2(
								'log',
								author$project$Lia$Markdown$Code$Log$encode(project.a9)),
								_Utils_Tuple2(
								'version',
								function () {
									var _n0 = A2(elm$core$Array$get, project.aV, project.fn);
									if (!_n0.$) {
										var version = _n0.a;
										return author$project$Lia$Markdown$Code$Json$fromVersion(version);
									} else {
										return elm$json$Json$Encode$null;
									}
								}())
							])))
				]));
	});
var author$project$Lia$Markdown$Code$Log$Debug = 0;
var author$project$Lia$Markdown$Code$Log$Message = F2(
	function (level, text) {
		return {ab: level, aw: text};
	});
var author$project$Lia$Markdown$Code$Log$add_ = F3(
	function (level, str, log) {
		var lines = elm$core$List$length(
			elm$core$String$lines(str));
		var _n0 = log.O;
		if (_n0.b) {
			var x = _n0.a;
			var xs = _n0.b;
			return _Utils_update(
				log,
				{
					ac: (log.ac + lines) - 1,
					O: _Utils_eq(x.ab, level) ? A2(
						elm$core$List$cons,
						_Utils_update(
							x,
							{
								aw: _Utils_ap(x.aw, str)
							}),
						xs) : A2(
						elm$core$List$cons,
						A2(author$project$Lia$Markdown$Code$Log$Message, level, str),
						A2(elm$core$List$cons, x, xs))
				});
		} else {
			return _Utils_update(
				log,
				{
					ac: lines,
					O: _List_fromArray(
						[
							A2(author$project$Lia$Markdown$Code$Log$Message, level, str)
						])
				});
		}
	});
var author$project$Lia$Markdown$Code$Log$add_Debug = author$project$Lia$Markdown$Code$Log$add_(0);
var author$project$Lia$Markdown$Code$Log$Error = 3;
var author$project$Lia$Markdown$Code$Log$add_Error = author$project$Lia$Markdown$Code$Log$add_(3);
var author$project$Lia$Markdown$Code$Log$Info = 1;
var author$project$Lia$Markdown$Code$Log$add_Info = author$project$Lia$Markdown$Code$Log$add_(1);
var author$project$Lia$Markdown$Code$Log$Warn = 2;
var author$project$Lia$Markdown$Code$Log$add_Warn = author$project$Lia$Markdown$Code$Log$add_(2);
var author$project$Lia$Markdown$Code$Log$Log = F5(
	function (ok, level, messages, lines, details) {
		return {aI: details, ab: level, ac: lines, O: messages, aq: ok};
	});
var author$project$Lia$Markdown$Code$Log$empty = A5(author$project$Lia$Markdown$Code$Log$Log, true, 0, _List_Nil, 0, _List_Nil);
var author$project$Lia$Markdown$Code$Terminal$Terminal = F3(
	function (input, history, history_value) {
		return {Z: history, I: history_value, D: input};
	});
var author$project$Lia$Markdown$Code$Terminal$init = A3(author$project$Lia$Markdown$Code$Terminal$Terminal, '', elm$core$Array$empty, 0);
var elm$core$Elm$JsArray$indexedMap = _JsArray_indexedMap;
var elm$core$Array$indexedMap = F2(
	function (func, _n0) {
		var len = _n0.a;
		var tree = _n0.c;
		var tail = _n0.d;
		var initialBuilder = {
			m: _List_Nil,
			k: 0,
			l: A3(
				elm$core$Elm$JsArray$indexedMap,
				func,
				elm$core$Array$tailIndex(len),
				tail)
		};
		var helper = F2(
			function (node, builder) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldl, helper, builder, subTree);
				} else {
					var leaf = node.a;
					var offset = builder.k * elm$core$Array$branchFactor;
					var mappedLeaf = elm$core$Array$Leaf(
						A3(elm$core$Elm$JsArray$indexedMap, func, offset, leaf));
					return {
						m: A2(elm$core$List$cons, mappedLeaf, builder.m),
						k: builder.k + 1,
						l: builder.l
					};
				}
			});
		return A2(
			elm$core$Array$builderToArray,
			true,
			A3(elm$core$Elm$JsArray$foldl, helper, initialBuilder, tree));
	});
var author$project$Lia$Markdown$Code$Types$loadVersion = F2(
	function (idx, project) {
		var _n0 = A2(elm$core$Array$get, idx, project.fn);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var hashes = _n1.a;
			var log = _n1.b;
			var get = function (h) {
				return A2(elm$core$Dict$get, h, project.eY);
			};
			var code = elm$core$Array$fromList(
				A2(elm$core$List$map, get, hashes));
			return _Utils_update(
				project,
				{
					a$: A2(
						elm$core$Array$indexedMap,
						F2(
							function (i, a) {
								return _Utils_update(
									a,
									{
										W: function () {
											var _n2 = A2(elm$core$Array$get, i, code);
											if ((!_n2.$) && (!_n2.a.$)) {
												var str = _n2.a.a;
												return str;
											} else {
												return a.W;
											}
										}()
									});
							}),
						project.a$),
					a9: log,
					aV: idx
				});
		} else {
			return project;
		}
	});
var elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = elm$core$Array$bitMask & (index >>> shift);
		var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (!_n0.$) {
			var subTree = _n0.a;
			var newSub = A4(elm$core$Array$setHelp, shift - elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				elm$core$Elm$JsArray$unsafeSet,
				pos,
				elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _n0.a;
			var newLeaf = A3(elm$core$Elm$JsArray$unsafeSet, elm$core$Array$bitMask & index, value, values);
			return A3(
				elm$core$Elm$JsArray$unsafeSet,
				pos,
				elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3(elm$core$Elm$JsArray$unsafeSet, elm$core$Array$bitMask & index, value, tail)) : A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4(elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var author$project$Lia$Markdown$Code$Update$clr = function (project) {
	var _n0 = A2(elm$core$Array$get, project.aV, project.fn);
	if (!_n0.$) {
		var _n1 = _n0.a;
		var code = _n1.a;
		return _Utils_update(
			project,
			{
				a9: author$project$Lia$Markdown$Code$Log$empty,
				fn: A3(
					elm$core$Array$set,
					project.aV,
					_Utils_Tuple2(code, author$project$Lia$Markdown$Code$Log$empty),
					project.fn)
			});
	} else {
		return project;
	}
};
var author$project$Port$Eval$replace_input = F2(
	function (_n0, into) {
		var _int = _n0.a;
		var insert = _n0.b;
		return A3(
			elm$core$String$replace,
			'@input(' + (elm$core$String$fromInt(_int) + ')'),
			insert,
			into);
	});
var author$project$Port$Eval$event = F3(
	function (id, code, replacement) {
		var replacement_0 = author$project$Lia$Utils$toJSstring(
			A2(
				elm$core$Maybe$withDefault,
				'',
				elm$core$List$head(replacement)));
		return A3(
			author$project$Port$Event$Event,
			'eval',
			id,
			elm$json$Json$Encode$string(
				A3(
					elm$core$String$replace,
					'@input',
					replacement_0,
					A3(
						elm$core$List$foldl,
						author$project$Port$Eval$replace_input,
						code,
						A2(
							elm$core$List$indexedMap,
							F2(
								function (i, r) {
									return _Utils_Tuple2(
										i,
										author$project$Lia$Utils$toJSstring(r));
								}),
							replacement)))));
	});
var author$project$Lia$Markdown$Code$Events$eval = F2(
	function (idx, project) {
		return _List_fromArray(
			[
				A3(
				author$project$Port$Eval$event,
				idx,
				project.dW,
				elm$core$Array$toList(
					A2(
						elm$core$Array$map,
						function ($) {
							return $.W;
						},
						project.a$)))
			]);
	});
var author$project$Lia$Markdown$Code$Update$eval = F2(
	function (idx, project) {
		return _Utils_Tuple2(
			_Utils_update(
				project,
				{cP: true}),
			A2(author$project$Lia$Markdown$Code$Events$eval, idx, project));
	});
var elm$json$Json$Encode$dict = F3(
	function (toKey, toValue, dictionary) {
		return _Json_wrap(
			A3(
				elm$core$Dict$foldl,
				F3(
					function (key, value, obj) {
						return A3(
							_Json_addField,
							toKey(key),
							toValue(value),
							obj);
					}),
				_Json_emptyObject(0),
				dictionary));
	});
var author$project$Lia$Markdown$Code$Events$version_append = F3(
	function (idx, project, repo_update) {
		return A3(
			author$project$Port$Event$Event,
			'version_append',
			idx,
			elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'version_active',
						elm$json$Json$Encode$int(project.aV)),
						_Utils_Tuple2(
						'log',
						author$project$Lia$Markdown$Code$Log$encode(project.a9)),
						_Utils_Tuple2(
						'file',
						A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Code$Json$fromFile, project.a$)),
						_Utils_Tuple2(
						'version',
						function () {
							var _n0 = A2(
								elm$core$Array$get,
								elm$core$Array$length(project.fn) - 1,
								project.fn);
							if (!_n0.$) {
								var version = _n0.a;
								return author$project$Lia$Markdown$Code$Json$fromVersion(version);
							} else {
								return elm$json$Json$Encode$null;
							}
						}()),
						_Utils_Tuple2(
						'repository',
						A3(elm$json$Json$Encode$dict, elm$core$Basics$identity, elm$json$Json$Encode$string, repo_update))
					])));
	});
var elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var elm$core$Bitwise$or = _Bitwise_or;
var elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			elm$core$Array$initialize,
			n,
			function (_n0) {
				return e;
			});
	});
var truqu$elm_md5$MD5$emptyWords = A2(elm$core$Array$repeat, 16, 0);
var truqu$elm_md5$MD5$addUnsigned = F2(
	function (x, y) {
		return 4294967295 & (x + y);
	});
var truqu$elm_md5$MD5$rotateLeft = F2(
	function (bits, input) {
		return (input << bits) | (input >>> (32 - bits));
	});
var truqu$elm_md5$MD5$cmn = F8(
	function (fun, a, b, c, d, x, s, ac) {
		return A2(
			truqu$elm_md5$MD5$addUnsigned,
			b,
			A2(
				truqu$elm_md5$MD5$rotateLeft,
				s,
				A2(
					truqu$elm_md5$MD5$addUnsigned,
					a,
					A2(
						truqu$elm_md5$MD5$addUnsigned,
						ac,
						A2(
							truqu$elm_md5$MD5$addUnsigned,
							A3(fun, b, c, d),
							x)))));
	});
var elm$core$Bitwise$xor = _Bitwise_xor;
var truqu$elm_md5$MD5$f = F3(
	function (x, y, z) {
		return z ^ (x & (y ^ z));
	});
var truqu$elm_md5$MD5$ff = F7(
	function (a, b, c, d, x, s, ac) {
		return A8(truqu$elm_md5$MD5$cmn, truqu$elm_md5$MD5$f, a, b, c, d, x, s, ac);
	});
var truqu$elm_md5$MD5$g = F3(
	function (x, y, z) {
		return y ^ (z & (x ^ y));
	});
var truqu$elm_md5$MD5$gg = F7(
	function (a, b, c, d, x, s, ac) {
		return A8(truqu$elm_md5$MD5$cmn, truqu$elm_md5$MD5$g, a, b, c, d, x, s, ac);
	});
var truqu$elm_md5$MD5$h = F3(
	function (x, y, z) {
		return z ^ (x ^ y);
	});
var truqu$elm_md5$MD5$hh = F7(
	function (a, b, c, d, x, s, ac) {
		return A8(truqu$elm_md5$MD5$cmn, truqu$elm_md5$MD5$h, a, b, c, d, x, s, ac);
	});
var elm$core$Bitwise$complement = _Bitwise_complement;
var truqu$elm_md5$MD5$i = F3(
	function (x, y, z) {
		return y ^ (x | (~z));
	});
var truqu$elm_md5$MD5$ii = F7(
	function (a, b, c, d, x, s, ac) {
		return A8(truqu$elm_md5$MD5$cmn, truqu$elm_md5$MD5$i, a, b, c, d, x, s, ac);
	});
var truqu$elm_md5$MD5$hex_ = F2(
	function (xs, acc) {
		var a = acc.aB;
		var b = acc.aE;
		var c = acc.aF;
		var d = acc.aH;
		if ((((((((((((((((xs.b && xs.b.b) && xs.b.b.b) && xs.b.b.b.b) && xs.b.b.b.b.b) && xs.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && xs.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b) && (!xs.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b)) {
			var x0 = xs.a;
			var _n1 = xs.b;
			var x1 = _n1.a;
			var _n2 = _n1.b;
			var x2 = _n2.a;
			var _n3 = _n2.b;
			var x3 = _n3.a;
			var _n4 = _n3.b;
			var x4 = _n4.a;
			var _n5 = _n4.b;
			var x5 = _n5.a;
			var _n6 = _n5.b;
			var x6 = _n6.a;
			var _n7 = _n6.b;
			var x7 = _n7.a;
			var _n8 = _n7.b;
			var x8 = _n8.a;
			var _n9 = _n8.b;
			var x9 = _n9.a;
			var _n10 = _n9.b;
			var x10 = _n10.a;
			var _n11 = _n10.b;
			var x11 = _n11.a;
			var _n12 = _n11.b;
			var x12 = _n12.a;
			var _n13 = _n12.b;
			var x13 = _n13.a;
			var _n14 = _n13.b;
			var x14 = _n14.a;
			var _n15 = _n14.b;
			var x15 = _n15.a;
			var s44 = 21;
			var s43 = 15;
			var s42 = 10;
			var s41 = 6;
			var s34 = 23;
			var s33 = 16;
			var s32 = 11;
			var s31 = 4;
			var s24 = 20;
			var s23 = 14;
			var s22 = 9;
			var s21 = 5;
			var s14 = 22;
			var s13 = 17;
			var s12 = 12;
			var s11 = 7;
			var d00 = d;
			var c00 = c;
			var b00 = b;
			var a00 = a;
			var a01 = A7(truqu$elm_md5$MD5$ff, a00, b00, c00, d00, x0, s11, 3614090360);
			var d01 = A7(truqu$elm_md5$MD5$ff, d00, a01, b00, c00, x1, s12, 3905402710);
			var c01 = A7(truqu$elm_md5$MD5$ff, c00, d01, a01, b00, x2, s13, 606105819);
			var b01 = A7(truqu$elm_md5$MD5$ff, b00, c01, d01, a01, x3, s14, 3250441966);
			var a02 = A7(truqu$elm_md5$MD5$ff, a01, b01, c01, d01, x4, s11, 4118548399);
			var d02 = A7(truqu$elm_md5$MD5$ff, d01, a02, b01, c01, x5, s12, 1200080426);
			var c02 = A7(truqu$elm_md5$MD5$ff, c01, d02, a02, b01, x6, s13, 2821735955);
			var b02 = A7(truqu$elm_md5$MD5$ff, b01, c02, d02, a02, x7, s14, 4249261313);
			var a03 = A7(truqu$elm_md5$MD5$ff, a02, b02, c02, d02, x8, s11, 1770035416);
			var d03 = A7(truqu$elm_md5$MD5$ff, d02, a03, b02, c02, x9, s12, 2336552879);
			var c03 = A7(truqu$elm_md5$MD5$ff, c02, d03, a03, b02, x10, s13, 4294925233);
			var b03 = A7(truqu$elm_md5$MD5$ff, b02, c03, d03, a03, x11, s14, 2304563134);
			var a04 = A7(truqu$elm_md5$MD5$ff, a03, b03, c03, d03, x12, s11, 1804603682);
			var d04 = A7(truqu$elm_md5$MD5$ff, d03, a04, b03, c03, x13, s12, 4254626195);
			var c04 = A7(truqu$elm_md5$MD5$ff, c03, d04, a04, b03, x14, s13, 2792965006);
			var b04 = A7(truqu$elm_md5$MD5$ff, b03, c04, d04, a04, x15, s14, 1236535329);
			var a05 = A7(truqu$elm_md5$MD5$gg, a04, b04, c04, d04, x1, s21, 4129170786);
			var d05 = A7(truqu$elm_md5$MD5$gg, d04, a05, b04, c04, x6, s22, 3225465664);
			var c05 = A7(truqu$elm_md5$MD5$gg, c04, d05, a05, b04, x11, s23, 643717713);
			var b05 = A7(truqu$elm_md5$MD5$gg, b04, c05, d05, a05, x0, s24, 3921069994);
			var a06 = A7(truqu$elm_md5$MD5$gg, a05, b05, c05, d05, x5, s21, 3593408605);
			var d06 = A7(truqu$elm_md5$MD5$gg, d05, a06, b05, c05, x10, s22, 38016083);
			var c06 = A7(truqu$elm_md5$MD5$gg, c05, d06, a06, b05, x15, s23, 3634488961);
			var b06 = A7(truqu$elm_md5$MD5$gg, b05, c06, d06, a06, x4, s24, 3889429448);
			var a07 = A7(truqu$elm_md5$MD5$gg, a06, b06, c06, d06, x9, s21, 568446438);
			var d07 = A7(truqu$elm_md5$MD5$gg, d06, a07, b06, c06, x14, s22, 3275163606);
			var c07 = A7(truqu$elm_md5$MD5$gg, c06, d07, a07, b06, x3, s23, 4107603335);
			var b07 = A7(truqu$elm_md5$MD5$gg, b06, c07, d07, a07, x8, s24, 1163531501);
			var a08 = A7(truqu$elm_md5$MD5$gg, a07, b07, c07, d07, x13, s21, 2850285829);
			var d08 = A7(truqu$elm_md5$MD5$gg, d07, a08, b07, c07, x2, s22, 4243563512);
			var c08 = A7(truqu$elm_md5$MD5$gg, c07, d08, a08, b07, x7, s23, 1735328473);
			var b08 = A7(truqu$elm_md5$MD5$gg, b07, c08, d08, a08, x12, s24, 2368359562);
			var a09 = A7(truqu$elm_md5$MD5$hh, a08, b08, c08, d08, x5, s31, 4294588738);
			var d09 = A7(truqu$elm_md5$MD5$hh, d08, a09, b08, c08, x8, s32, 2272392833);
			var c09 = A7(truqu$elm_md5$MD5$hh, c08, d09, a09, b08, x11, s33, 1839030562);
			var b09 = A7(truqu$elm_md5$MD5$hh, b08, c09, d09, a09, x14, s34, 4259657740);
			var a10 = A7(truqu$elm_md5$MD5$hh, a09, b09, c09, d09, x1, s31, 2763975236);
			var d10 = A7(truqu$elm_md5$MD5$hh, d09, a10, b09, c09, x4, s32, 1272893353);
			var c10 = A7(truqu$elm_md5$MD5$hh, c09, d10, a10, b09, x7, s33, 4139469664);
			var b10 = A7(truqu$elm_md5$MD5$hh, b09, c10, d10, a10, x10, s34, 3200236656);
			var a11 = A7(truqu$elm_md5$MD5$hh, a10, b10, c10, d10, x13, s31, 681279174);
			var d11 = A7(truqu$elm_md5$MD5$hh, d10, a11, b10, c10, x0, s32, 3936430074);
			var c11 = A7(truqu$elm_md5$MD5$hh, c10, d11, a11, b10, x3, s33, 3572445317);
			var b11 = A7(truqu$elm_md5$MD5$hh, b10, c11, d11, a11, x6, s34, 76029189);
			var a12 = A7(truqu$elm_md5$MD5$hh, a11, b11, c11, d11, x9, s31, 3654602809);
			var d12 = A7(truqu$elm_md5$MD5$hh, d11, a12, b11, c11, x12, s32, 3873151461);
			var c12 = A7(truqu$elm_md5$MD5$hh, c11, d12, a12, b11, x15, s33, 530742520);
			var b12 = A7(truqu$elm_md5$MD5$hh, b11, c12, d12, a12, x2, s34, 3299628645);
			var a13 = A7(truqu$elm_md5$MD5$ii, a12, b12, c12, d12, x0, s41, 4096336452);
			var d13 = A7(truqu$elm_md5$MD5$ii, d12, a13, b12, c12, x7, s42, 1126891415);
			var c13 = A7(truqu$elm_md5$MD5$ii, c12, d13, a13, b12, x14, s43, 2878612391);
			var b13 = A7(truqu$elm_md5$MD5$ii, b12, c13, d13, a13, x5, s44, 4237533241);
			var a14 = A7(truqu$elm_md5$MD5$ii, a13, b13, c13, d13, x12, s41, 1700485571);
			var d14 = A7(truqu$elm_md5$MD5$ii, d13, a14, b13, c13, x3, s42, 2399980690);
			var c14 = A7(truqu$elm_md5$MD5$ii, c13, d14, a14, b13, x10, s43, 4293915773);
			var b14 = A7(truqu$elm_md5$MD5$ii, b13, c14, d14, a14, x1, s44, 2240044497);
			var a15 = A7(truqu$elm_md5$MD5$ii, a14, b14, c14, d14, x8, s41, 1873313359);
			var d15 = A7(truqu$elm_md5$MD5$ii, d14, a15, b14, c14, x15, s42, 4264355552);
			var c15 = A7(truqu$elm_md5$MD5$ii, c14, d15, a15, b14, x6, s43, 2734768916);
			var b15 = A7(truqu$elm_md5$MD5$ii, b14, c15, d15, a15, x13, s44, 1309151649);
			var a16 = A7(truqu$elm_md5$MD5$ii, a15, b15, c15, d15, x4, s41, 4149444226);
			var d16 = A7(truqu$elm_md5$MD5$ii, d15, a16, b15, c15, x11, s42, 3174756917);
			var c16 = A7(truqu$elm_md5$MD5$ii, c15, d16, a16, b15, x2, s43, 718787259);
			var b16 = A7(truqu$elm_md5$MD5$ii, b15, c16, d16, a16, x9, s44, 3951481745);
			var b17 = A2(truqu$elm_md5$MD5$addUnsigned, b00, b16);
			var c17 = A2(truqu$elm_md5$MD5$addUnsigned, c00, c16);
			var d17 = A2(truqu$elm_md5$MD5$addUnsigned, d00, d16);
			var a17 = A2(truqu$elm_md5$MD5$addUnsigned, a00, a16);
			return {aB: a17, aE: b17, aF: c17, aH: d17};
		} else {
			return acc;
		}
	});
var truqu$elm_md5$MD5$iget = F2(
	function (index, array) {
		return A2(
			elm$core$Maybe$withDefault,
			0,
			A2(elm$core$Array$get, index, array));
	});
var truqu$elm_md5$MD5$consume = F2(
	function (_char, _n0) {
		var hashState = _n0.a;
		var _n1 = _n0.b;
		var byteCount = _n1.a;
		var words = _n1.b;
		var totalByteCount = _n0.c;
		var wordCount = (byteCount / 4) | 0;
		var oldWord = A2(truqu$elm_md5$MD5$iget, wordCount, words);
		var bytePosition = 8 * (byteCount % 4);
		var code = _char << bytePosition;
		var newWord = oldWord | code;
		var newWords = A3(elm$core$Array$set, wordCount, newWord, words);
		return (byteCount === 63) ? _Utils_Tuple3(
			A2(
				truqu$elm_md5$MD5$hex_,
				elm$core$Array$toList(newWords),
				hashState),
			_Utils_Tuple2(0, truqu$elm_md5$MD5$emptyWords),
			totalByteCount + 1) : _Utils_Tuple3(
			hashState,
			_Utils_Tuple2(byteCount + 1, newWords),
			totalByteCount + 1);
	});
var truqu$elm_md5$MD5$finishUp = function (_n0) {
	var hashState = _n0.a;
	var _n1 = _n0.b;
	var byteCount = _n1.a;
	var words = _n1.b;
	var totalByteCount = _n0.c;
	var wordCount = (byteCount / 4) | 0;
	var oldWord = A2(truqu$elm_md5$MD5$iget, wordCount, words);
	var bytePosition = 8 * (byteCount % 4);
	var code = 128 << bytePosition;
	var newWord = oldWord | code;
	var newWords = A3(elm$core$Array$set, wordCount, newWord, words);
	return (wordCount < 14) ? function (x) {
		return A2(truqu$elm_md5$MD5$hex_, x, hashState);
	}(
		elm$core$Array$toList(
			A3(
				elm$core$Array$set,
				15,
				totalByteCount >>> 29,
				A3(elm$core$Array$set, 14, totalByteCount << 3, newWords)))) : function (x) {
		return A2(
			truqu$elm_md5$MD5$hex_,
			x,
			A2(
				truqu$elm_md5$MD5$hex_,
				elm$core$Array$toList(newWords),
				hashState));
	}(
		elm$core$Array$toList(
			A3(
				elm$core$Array$set,
				15,
				totalByteCount >>> 29,
				A3(elm$core$Array$set, 14, totalByteCount << 3, truqu$elm_md5$MD5$emptyWords))));
};
var truqu$elm_md5$MD5$State = F4(
	function (a, b, c, d) {
		return {aB: a, aE: b, aF: c, aH: d};
	});
var truqu$elm_md5$MD5$initialHashState = A4(truqu$elm_md5$MD5$State, 1732584193, 4023233417, 2562383102, 271733878);
var elm$core$String$foldl = _String_foldl;
var zwilias$elm_utf_tools$String$UTF8$utf32ToUtf8 = F3(
	function (add, _char, acc) {
		return (_char < 128) ? A2(add, _char, acc) : ((_char < 2048) ? A2(
			add,
			128 | (63 & _char),
			A2(add, 192 | (_char >>> 6), acc)) : ((_char < 65536) ? A2(
			add,
			128 | (63 & _char),
			A2(
				add,
				128 | (63 & (_char >>> 6)),
				A2(add, 224 | (_char >>> 12), acc))) : A2(
			add,
			128 | (63 & _char),
			A2(
				add,
				128 | (63 & (_char >>> 6)),
				A2(
					add,
					128 | (63 & (_char >>> 12)),
					A2(add, 240 | (_char >>> 18), acc))))));
	});
var zwilias$elm_utf_tools$String$UTF8$foldl = F3(
	function (op, initialAcc, input) {
		return A3(
			elm$core$String$foldl,
			F2(
				function (_char, acc) {
					return A3(
						zwilias$elm_utf_tools$String$UTF8$utf32ToUtf8,
						op,
						elm$core$Char$toCode(_char),
						acc);
				}),
			initialAcc,
			input);
	});
var truqu$elm_md5$MD5$hash = function (input) {
	return truqu$elm_md5$MD5$finishUp(
		A3(
			zwilias$elm_utf_tools$String$UTF8$foldl,
			truqu$elm_md5$MD5$consume,
			_Utils_Tuple3(
				truqu$elm_md5$MD5$initialHashState,
				_Utils_Tuple2(0, truqu$elm_md5$MD5$emptyWords),
				0),
			input));
};
var truqu$elm_md5$MD5$bytes = function (string) {
	var _n0 = truqu$elm_md5$MD5$hash(string);
	var a = _n0.aB;
	var b = _n0.aE;
	var c = _n0.aF;
	var d = _n0.aH;
	return _List_fromArray(
		[a & 255, (a >>> 8) & 255, (a >>> 16) & 255, (a >>> 24) & 255, b & 255, (b >>> 8) & 255, (b >>> 16) & 255, (b >>> 24) & 255, c & 255, (c >>> 8) & 255, (c >>> 16) & 255, (c >>> 24) & 255, d & 255, (d >>> 8) & 255, (d >>> 16) & 255, (d >>> 24) & 255]);
};
var truqu$elm_md5$MD5$toHex = function (_byte) {
	switch (_byte) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return 'a';
		case 11:
			return 'b';
		case 12:
			return 'c';
		case 13:
			return 'd';
		case 14:
			return 'e';
		case 15:
			return 'f';
		default:
			return _Utils_ap(
				truqu$elm_md5$MD5$toHex((_byte / 16) | 0),
				truqu$elm_md5$MD5$toHex(_byte % 16));
	}
};
var truqu$elm_md5$MD5$hex = function (s) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (b, acc) {
				return _Utils_ap(
					acc,
					A3(
						elm$core$String$padLeft,
						2,
						'0',
						truqu$elm_md5$MD5$toHex(b)));
			}),
		'',
		truqu$elm_md5$MD5$bytes(s));
};
var author$project$Lia$Markdown$Code$Types$updateVersion = function (project) {
	var code = A2(
		elm$core$Array$map,
		function ($) {
			return $.W;
		},
		project.a$);
	var hashes = elm$core$Array$toList(
		A2(elm$core$Array$map, truqu$elm_md5$MD5$hex, code));
	if (A2(
		elm$core$Maybe$withDefault,
		false,
		A2(
			elm$core$Maybe$map,
			elm$core$Basics$neq(hashes),
			A2(
				elm$core$Maybe$map,
				elm$core$Tuple$first,
				A2(elm$core$Array$get, project.aV, project.fn))))) {
		var repository = A2(
			elm$core$Dict$union,
			project.eY,
			elm$core$Dict$fromList(
				A3(
					elm$core$List$map2,
					elm$core$Tuple$pair,
					hashes,
					elm$core$Array$toList(code))));
		return elm$core$Maybe$Just(
			_Utils_Tuple2(
				_Utils_update(
					project,
					{
						a9: author$project$Lia$Markdown$Code$Log$empty,
						eY: repository,
						fn: A2(
							elm$core$Array$push,
							_Utils_Tuple2(hashes, author$project$Lia$Markdown$Code$Log$empty),
							project.fn),
						aV: elm$core$Array$length(project.fn)
					}),
				A2(elm$core$Dict$diff, repository, project.eY)));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Lia$Markdown$Code$Update$is_version_new = F2(
	function (idx, _n0) {
		var project = _n0.a;
		var events = _n0.b;
		var _n1 = author$project$Lia$Markdown$Code$Types$updateVersion(project);
		if (!_n1.$) {
			var _n2 = _n1.a;
			var new_project = _n2.a;
			var repo_update = _n2.b;
			return _Utils_Tuple2(
				new_project,
				A2(
					elm$core$List$cons,
					A3(author$project$Lia$Markdown$Code$Events$version_append, idx, new_project, repo_update),
					events));
		} else {
			return _Utils_Tuple2(project, events);
		}
	});
var author$project$Lia$Markdown$Code$Update$logger = F3(
	function (fn, event_str, project) {
		var _n0 = _Utils_Tuple2(
			A2(elm$core$Array$get, project.aV, project.fn),
			A2(elm$json$Json$Decode$decodeValue, elm$json$Json$Decode$string, event_str));
		if ((!_n0.a.$) && (!_n0.b.$)) {
			var _n1 = _n0.a.a;
			var code = _n1.a;
			var str = _n0.b.a;
			return _Utils_update(
				project,
				{
					a9: A2(fn, str, project.a9),
					fn: A3(
						elm$core$Array$set,
						project.aV,
						_Utils_Tuple2(
							code,
							A2(fn, str, project.a9)),
						project.fn)
				});
		} else {
			return project;
		}
	});
var author$project$Lia$Markdown$Code$Update$maybe_project = F3(
	function (idx, f, model) {
		return A2(
			elm$core$Maybe$map,
			f,
			A2(elm$core$Array$get, idx, model));
	});
var author$project$Lia$Markdown$Code$Update$maybe_update = F3(
	function (idx, model, project) {
		if (!project.$) {
			var _n1 = project.a;
			var p = _n1.a;
			var logs = _n1.b;
			return _Utils_Tuple2(
				A3(elm$core$Array$set, idx, p, model),
				_Utils_eq(logs, _List_Nil) ? _List_Nil : logs);
		} else {
			return _Utils_Tuple2(model, _List_Nil);
		}
	});
var author$project$Lia$Markdown$Code$Json$fromProject = function (p) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'file',
				A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Code$Json$fromFile, p.a$)),
				_Utils_Tuple2(
				'version',
				A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Code$Json$fromVersion, p.fn)),
				_Utils_Tuple2(
				'version_active',
				elm$json$Json$Encode$int(p.aV)),
				_Utils_Tuple2(
				'log',
				author$project$Lia$Markdown$Code$Log$encode(p.a9)),
				_Utils_Tuple2(
				'repository',
				A3(elm$json$Json$Encode$dict, elm$core$Basics$identity, elm$json$Json$Encode$string, p.eY)),
				_Utils_Tuple2(
				'compact_view',
				elm$json$Json$Encode$bool(p.dJ))
			]));
};
var author$project$Lia$Markdown$Code$Json$fromVector = function (vector) {
	return A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Code$Json$fromProject, vector);
};
var author$project$Port$Event$store = function (message) {
	return A3(author$project$Port$Event$Event, 'store', -1, message);
};
var author$project$Lia$Markdown$Code$Events$store = function (model) {
	return author$project$Port$Event$store(
		author$project$Lia$Markdown$Code$Json$fromVector(model));
};
var author$project$Lia$Markdown$Code$Json$copy = F2(
	function (old, _new) {
		return _Utils_update(
			_new,
			{dW: old.dW});
	});
var author$project$Lia$Markdown$Code$Json$merge = F2(
	function (old, _new) {
		return elm$core$Array$fromList(
			A3(
				elm$core$List$map2,
				author$project$Lia$Markdown$Code$Json$copy,
				elm$core$Array$toList(old),
				elm$core$Array$toList(_new)));
	});
var author$project$Lia$Markdown$Code$Types$Project = function (file) {
	return function (focus) {
		return function (version) {
			return function (version_active) {
				return function (repository) {
					return function (evaluation) {
						return function (log) {
							return function (running) {
								return function (terminal) {
									return function (compact_view) {
										return {dJ: compact_view, dW: evaluation, a$: file, b2: focus, a9: log, eY: repository, cP: running, db: terminal, fn: version, aV: version_active};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var author$project$Lia$Markdown$Code$Json$project = F6(
	function (files, version, active, log, repository, compact) {
		return author$project$Lia$Markdown$Code$Types$Project(files)(-1)(version)(active)(repository)('')(log)(false)(elm$core$Maybe$Nothing)(compact);
	});
var author$project$Lia$Markdown$Code$Types$File = F5(
	function (lang, name, code, visible, fullscreen) {
		return {W: code, d3: fullscreen, eq: lang, eC: name, dj: visible};
	});
var elm$json$Json$Decode$map5 = _Json_map5;
var author$project$Lia$Markdown$Code$Json$toFile = A6(
	elm$json$Json$Decode$map5,
	author$project$Lia$Markdown$Code$Types$File,
	A2(elm$json$Json$Decode$field, 'lang', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'name', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'code', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'visible', elm$json$Json$Decode$bool),
	A2(elm$json$Json$Decode$field, 'fullscreen', elm$json$Json$Decode$bool));
var author$project$Lia$Markdown$Code$Log$decLevel = A2(
	elm$json$Json$Decode$andThen,
	function (_int) {
		return elm$json$Json$Decode$succeed(
			function () {
				switch (_int) {
					case 0:
						return 1;
					case 1:
						return 2;
					case 2:
						return 3;
					default:
						return 0;
				}
			}());
	},
	elm$json$Json$Decode$int);
var elm$json$Json$Decode$map2 = _Json_map2;
var author$project$Lia$Markdown$Code$Log$decMessage = A3(
	elm$json$Json$Decode$map2,
	author$project$Lia$Markdown$Code$Log$Message,
	A2(elm$json$Json$Decode$field, 'level', author$project$Lia$Markdown$Code$Log$decLevel),
	A2(elm$json$Json$Decode$field, 'text', elm$json$Json$Decode$string));
var author$project$Lia$Markdown$Code$Log$decoder = A6(
	elm$json$Json$Decode$map5,
	author$project$Lia$Markdown$Code$Log$Log,
	A2(elm$json$Json$Decode$field, 'ok', elm$json$Json$Decode$bool),
	A2(elm$json$Json$Decode$field, 'level', author$project$Lia$Markdown$Code$Log$decLevel),
	A2(
		elm$json$Json$Decode$field,
		'messages',
		elm$json$Json$Decode$list(author$project$Lia$Markdown$Code$Log$decMessage)),
	A2(elm$json$Json$Decode$field, 'lines', elm$json$Json$Decode$int),
	A2(
		elm$json$Json$Decode$field,
		'details',
		elm$json$Json$Decode$list(elm$json$Json$Decode$value)));
var author$project$Lia$Markdown$Code$Json$toVersion = A3(
	elm$json$Json$Decode$map2,
	elm$core$Tuple$pair,
	A2(
		elm$json$Json$Decode$field,
		'hashes',
		elm$json$Json$Decode$list(elm$json$Json$Decode$string)),
	A2(elm$json$Json$Decode$field, 'log', author$project$Lia$Markdown$Code$Log$decoder));
var elm$json$Json$Decode$array = _Json_decodeArray;
var elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		elm$json$Json$Decode$map,
		elm$core$Dict$fromList,
		elm$json$Json$Decode$keyValuePairs(decoder));
};
var elm$json$Json$Decode$map6 = _Json_map6;
var author$project$Lia$Markdown$Code$Json$toProject = A7(
	elm$json$Json$Decode$map6,
	author$project$Lia$Markdown$Code$Json$project,
	A2(
		elm$json$Json$Decode$field,
		'file',
		elm$json$Json$Decode$array(author$project$Lia$Markdown$Code$Json$toFile)),
	A2(
		elm$json$Json$Decode$field,
		'version',
		elm$json$Json$Decode$array(author$project$Lia$Markdown$Code$Json$toVersion)),
	A2(elm$json$Json$Decode$field, 'version_active', elm$json$Json$Decode$int),
	A2(elm$json$Json$Decode$field, 'log', author$project$Lia$Markdown$Code$Log$decoder),
	A2(
		elm$json$Json$Decode$field,
		'repository',
		elm$json$Json$Decode$dict(elm$json$Json$Decode$string)),
	A2(elm$json$Json$Decode$field, 'compact_view', elm$json$Json$Decode$bool));
var elm$json$Json$Decode$null = _Json_decodeNull;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$nullable = function (decoder) {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder)
			]));
};
var author$project$Lia$Markdown$Code$Json$toVector = function (json) {
	return A2(
		elm$json$Json$Decode$decodeValue,
		elm$json$Json$Decode$nullable(
			elm$json$Json$Decode$array(author$project$Lia$Markdown$Code$Json$toProject)),
		json);
};
var author$project$Lia$Markdown$Code$Update$restore = F2(
	function (json, model) {
		var _n0 = author$project$Lia$Markdown$Code$Json$toVector(json);
		if (!_n0.$) {
			if (!_n0.a.$) {
				var model_ = _n0.a.a;
				return _Utils_Tuple2(
					A2(author$project$Lia$Markdown$Code$Json$merge, model, model_),
					_List_Nil);
			} else {
				var _n1 = _n0.a;
				return _Utils_Tuple2(
					model,
					(!elm$core$Array$length(model)) ? _List_Nil : _List_fromArray(
						[
							author$project$Lia$Markdown$Code$Events$store(model)
						]));
			}
		} else {
			return _Utils_Tuple2(model, _List_Nil);
		}
	});
var author$project$Lia$Markdown$Code$Log$add_Eval = F2(
	function (_eval, log) {
		return (_eval.aq ? author$project$Lia$Markdown$Code$Log$add_Info(_eval.cM) : author$project$Lia$Markdown$Code$Log$add_Error(_eval.cM))(
			_Utils_update(
				log,
				{aI: _eval.aI, aq: _eval.aq}));
	});
var author$project$Lia$Markdown$Code$Update$set_result = F3(
	function (_continue, e, project) {
		var _n0 = A2(elm$core$Array$get, project.aV, project.fn);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var code = _n1.a;
			return _Utils_update(
				project,
				{
					a9: A2(author$project$Lia$Markdown$Code$Log$add_Eval, e, project.a9),
					cP: _continue ? project.cP : false,
					fn: A3(
						elm$core$Array$set,
						project.aV,
						_Utils_Tuple2(
							code,
							A2(author$project$Lia$Markdown$Code$Log$add_Eval, e, project.a9)),
						project.fn)
				});
		} else {
			return project;
		}
	});
var author$project$Lia$Markdown$Code$Update$stop = function (project) {
	var _n0 = A2(elm$core$Array$get, project.aV, project.fn);
	if (!_n0.$) {
		var _n1 = _n0.a;
		var code = _n1.a;
		return _Utils_update(
			project,
			{
				cP: false,
				db: elm$core$Maybe$Nothing,
				fn: A3(
					elm$core$Array$set,
					project.aV,
					_Utils_Tuple2(code, project.a9),
					project.fn)
			});
	} else {
		return project;
	}
};
var author$project$Lia$Markdown$Code$Update$update_file = F5(
	function (id_1, id_2, model, f, f_log) {
		var _n0 = A2(elm$core$Array$get, id_1, model);
		if (!_n0.$) {
			var project = _n0.a;
			var _n1 = A2(
				elm$core$Maybe$map,
				f,
				A2(elm$core$Array$get, id_2, project.a$));
			if (!_n1.$) {
				var file = _n1.a;
				return _Utils_Tuple2(
					A3(
						elm$core$Array$set,
						id_1,
						_Utils_update(
							project,
							{
								a$: A3(elm$core$Array$set, id_2, file, project.a$)
							}),
						model),
					f_log(file));
			} else {
				return _Utils_Tuple2(model, _List_Nil);
			}
		} else {
			return _Utils_Tuple2(model, _List_Nil);
		}
	});
var author$project$Lia$Markdown$Code$Terminal$print_to = function (terminal) {
	return (A2(
		elm$core$Maybe$withDefault,
		true,
		A2(
			elm$core$Maybe$map,
			function (h) {
				return !_Utils_eq(h, terminal.D);
			},
			A2(elm$core$Array$get, terminal.I, terminal.Z))) && (terminal.D !== '')) ? _Utils_update(
		terminal,
		{
			Z: A2(elm$core$Array$push, terminal.D, terminal.Z),
			I: elm$core$Array$length(terminal.Z) + 1,
			D: ''
		}) : _Utils_update(
		terminal,
		{I: terminal.I + 1, D: ''});
};
var author$project$Lia$Markdown$Code$Terminal$restore_input = F2(
	function (up, terminal) {
		var new_hist = up ? (terminal.I - 1) : (terminal.I + 1);
		var _n0 = A2(elm$core$Array$get, new_hist, terminal.Z);
		if (!_n0.$) {
			var str = _n0.a;
			return _Utils_update(
				terminal,
				{I: new_hist, D: str});
		} else {
			return terminal;
		}
	});
var author$project$Lia$Markdown$Code$Terminal$update = F2(
	function (msg, terminal) {
		if (!msg.$) {
			var key = msg.a;
			return (key === 13) ? _Utils_Tuple2(
				author$project$Lia$Markdown$Code$Terminal$print_to(terminal),
				elm$core$Maybe$Just(terminal.D + '\n')) : ((key === 38) ? _Utils_Tuple2(
				A2(author$project$Lia$Markdown$Code$Terminal$restore_input, true, terminal),
				elm$core$Maybe$Nothing) : ((key === 40) ? _Utils_Tuple2(
				A2(author$project$Lia$Markdown$Code$Terminal$restore_input, false, terminal),
				elm$core$Maybe$Nothing) : _Utils_Tuple2(terminal, elm$core$Maybe$Nothing)));
		} else {
			var str = msg.a;
			return _Utils_Tuple2(
				_Utils_update(
					terminal,
					{D: str}),
				elm$core$Maybe$Nothing);
		}
	});
var author$project$Lia$Markdown$Code$Update$update_terminal = F3(
	function (f, msg, project) {
		var _n0 = A2(
			elm$core$Maybe$map,
			author$project$Lia$Markdown$Code$Terminal$update(msg),
			project.db);
		if (!_n0.$) {
			if (_n0.a.b.$ === 1) {
				var _n1 = _n0.a;
				var terminal = _n1.a;
				var _n2 = _n1.b;
				return _Utils_Tuple2(
					_Utils_update(
						project,
						{
							db: elm$core$Maybe$Just(terminal)
						}),
					_List_Nil);
			} else {
				var _n3 = _n0.a;
				var terminal = _n3.a;
				var str = _n3.b.a;
				return _Utils_Tuple2(
					_Utils_update(
						project,
						{
							a9: A2(author$project$Lia$Markdown$Code$Log$add_Info, str, project.a9),
							db: elm$core$Maybe$Just(terminal)
						}),
					_List_fromArray(
						[
							f(str)
						]));
			}
		} else {
			return _Utils_Tuple2(project, _List_Nil);
		}
	});
var author$project$Lia$Markdown$Code$Update$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var idx = msg.a;
				return A3(
					author$project$Lia$Markdown$Code$Update$maybe_update,
					idx,
					model,
					A2(
						elm$core$Maybe$map,
						author$project$Lia$Markdown$Code$Update$is_version_new(idx),
						A3(
							author$project$Lia$Markdown$Code$Update$maybe_project,
							idx,
							author$project$Lia$Markdown$Code$Update$eval(idx),
							model)));
			case 2:
				var id_1 = msg.a;
				var id_2 = msg.b;
				var code_str = msg.c;
				return A5(
					author$project$Lia$Markdown$Code$Update$update_file,
					id_1,
					id_2,
					model,
					function (f) {
						return _Utils_update(
							f,
							{W: code_str});
					},
					function (_n1) {
						return _List_Nil;
					});
			case 3:
				var id_1 = msg.a;
				var id_2 = msg.b;
				return A5(
					author$project$Lia$Markdown$Code$Update$update_file,
					id_1,
					id_2,
					model,
					function (f) {
						return _Utils_update(
							f,
							{dj: !f.dj});
					},
					A2(author$project$Lia$Markdown$Code$Events$flip_view, id_1, id_2));
			case 4:
				var id_1 = msg.a;
				var id_2 = msg.b;
				return A5(
					author$project$Lia$Markdown$Code$Update$update_file,
					id_1,
					id_2,
					model,
					function (f) {
						return _Utils_update(
							f,
							{d3: !f.d3});
					},
					A2(author$project$Lia$Markdown$Code$Events$fullscreen, id_1, id_2));
			case 5:
				var idx = msg.a;
				var version = msg.b;
				return A3(
					author$project$Lia$Markdown$Code$Update$maybe_update,
					idx,
					model,
					A2(
						elm$core$Maybe$map,
						author$project$Lia$Markdown$Code$Events$load(idx),
						A3(
							author$project$Lia$Markdown$Code$Update$maybe_project,
							idx,
							author$project$Lia$Markdown$Code$Types$loadVersion(version),
							model)));
			case 6:
				var idx = msg.a;
				return A3(
					author$project$Lia$Markdown$Code$Update$maybe_update,
					idx,
					model,
					A2(
						elm$core$Maybe$map,
						author$project$Lia$Markdown$Code$Events$load(idx),
						A3(
							author$project$Lia$Markdown$Code$Update$maybe_project,
							idx,
							author$project$Lia$Markdown$Code$Types$loadVersion(0),
							model)));
			case 7:
				var idx = msg.a;
				var version = A2(
					elm$core$Maybe$withDefault,
					0,
					A3(
						author$project$Lia$Markdown$Code$Update$maybe_project,
						idx,
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.fn;
							},
							A2(
								elm$core$Basics$composeR,
								elm$core$Array$length,
								elm$core$Basics$add(-1))),
						model));
				return A3(
					author$project$Lia$Markdown$Code$Update$maybe_update,
					idx,
					model,
					A2(
						elm$core$Maybe$map,
						author$project$Lia$Markdown$Code$Events$load(idx),
						A3(
							author$project$Lia$Markdown$Code$Update$maybe_project,
							idx,
							author$project$Lia$Markdown$Code$Types$loadVersion(version),
							model)));
			case 9:
				var event = msg.a;
				var _n2 = event.fi;
				switch (_n2) {
					case 'eval':
						var e = author$project$Lia$Markdown$Code$Events$evalDecode(event);
						var _n3 = e.cM;
						switch (_n3) {
							case 'LIA: wait':
								return A3(
									author$project$Lia$Markdown$Code$Update$maybe_update,
									event.cV,
									model,
									A2(
										elm$core$Maybe$map,
										function (p) {
											return _Utils_Tuple2(p, _List_Nil);
										},
										A3(
											author$project$Lia$Markdown$Code$Update$maybe_project,
											event.cV,
											function (p) {
												return _Utils_update(
													p,
													{a9: author$project$Lia$Markdown$Code$Log$empty});
											},
											model)));
							case 'LIA: stop':
								return A3(
									author$project$Lia$Markdown$Code$Update$maybe_update,
									event.cV,
									model,
									A2(
										elm$core$Maybe$map,
										author$project$Lia$Markdown$Code$Events$version_update(event.cV),
										A3(author$project$Lia$Markdown$Code$Update$maybe_project, event.cV, author$project$Lia$Markdown$Code$Update$stop, model)));
							case 'LIA: clear':
								return A3(
									author$project$Lia$Markdown$Code$Update$maybe_update,
									event.cV,
									model,
									A2(
										elm$core$Maybe$map,
										function (p) {
											return _Utils_Tuple2(p, _List_Nil);
										},
										A3(author$project$Lia$Markdown$Code$Update$maybe_project, event.cV, author$project$Lia$Markdown$Code$Update$clr, model)));
							case 'LIA: terminal':
								return A3(
									author$project$Lia$Markdown$Code$Update$maybe_update,
									event.cV,
									model,
									A2(
										elm$core$Maybe$map,
										function (p) {
											return _Utils_Tuple2(p, _List_Nil);
										},
										A3(
											author$project$Lia$Markdown$Code$Update$maybe_project,
											event.cV,
											function (p) {
												return _Utils_update(
													p,
													{
														a9: e.aq ? author$project$Lia$Markdown$Code$Log$empty : p.a9,
														db: elm$core$Maybe$Just(author$project$Lia$Markdown$Code$Terminal$init)
													});
											},
											model)));
							default:
								return A3(
									author$project$Lia$Markdown$Code$Update$maybe_update,
									event.cV,
									model,
									A2(
										elm$core$Maybe$map,
										author$project$Lia$Markdown$Code$Events$version_update(event.cV),
										A3(
											author$project$Lia$Markdown$Code$Update$maybe_project,
											event.cV,
											A2(author$project$Lia$Markdown$Code$Update$set_result, false, e),
											model)));
						}
					case 'restore':
						return A2(author$project$Lia$Markdown$Code$Update$restore, event.ey, model);
					case 'debug':
						return A3(
							author$project$Lia$Markdown$Code$Update$maybe_update,
							event.cV,
							model,
							A2(
								elm$core$Maybe$map,
								function (p) {
									return _Utils_Tuple2(p, _List_Nil);
								},
								A3(
									author$project$Lia$Markdown$Code$Update$maybe_project,
									event.cV,
									A2(author$project$Lia$Markdown$Code$Update$logger, author$project$Lia$Markdown$Code$Log$add_Debug, event.ey),
									model)));
					case 'info':
						return A3(
							author$project$Lia$Markdown$Code$Update$maybe_update,
							event.cV,
							model,
							A2(
								elm$core$Maybe$map,
								function (p) {
									return _Utils_Tuple2(p, _List_Nil);
								},
								A3(
									author$project$Lia$Markdown$Code$Update$maybe_project,
									event.cV,
									A2(author$project$Lia$Markdown$Code$Update$logger, author$project$Lia$Markdown$Code$Log$add_Info, event.ey),
									model)));
					case 'warn':
						return A3(
							author$project$Lia$Markdown$Code$Update$maybe_update,
							event.cV,
							model,
							A2(
								elm$core$Maybe$map,
								function (p) {
									return _Utils_Tuple2(p, _List_Nil);
								},
								A3(
									author$project$Lia$Markdown$Code$Update$maybe_project,
									event.cV,
									A2(author$project$Lia$Markdown$Code$Update$logger, author$project$Lia$Markdown$Code$Log$add_Warn, event.ey),
									model)));
					case 'error':
						return A3(
							author$project$Lia$Markdown$Code$Update$maybe_update,
							event.cV,
							model,
							A2(
								elm$core$Maybe$map,
								function (p) {
									return _Utils_Tuple2(p, _List_Nil);
								},
								A3(
									author$project$Lia$Markdown$Code$Update$maybe_project,
									event.cV,
									A2(author$project$Lia$Markdown$Code$Update$logger, author$project$Lia$Markdown$Code$Log$add_Error, event.ey),
									model)));
					default:
						return _Utils_Tuple2(model, _List_Nil);
				}
			case 1:
				var idx = msg.a;
				return A3(
					author$project$Lia$Markdown$Code$Update$maybe_update,
					idx,
					model,
					A2(
						elm$core$Maybe$map,
						function (p) {
							return _Utils_Tuple2(
								p,
								author$project$Lia$Markdown$Code$Events$stop(idx));
						},
						A3(
							author$project$Lia$Markdown$Code$Update$maybe_project,
							idx,
							function (p) {
								return _Utils_update(
									p,
									{cP: false, db: elm$core$Maybe$Nothing});
							},
							model)));
			default:
				var idx = msg.a;
				var childMsg = msg.b;
				return A3(
					author$project$Lia$Markdown$Code$Update$maybe_update,
					idx,
					model,
					A3(
						author$project$Lia$Markdown$Code$Update$maybe_project,
						idx,
						A2(
							author$project$Lia$Markdown$Code$Update$update_terminal,
							author$project$Lia$Markdown$Code$Events$input(idx),
							childMsg),
						model));
		}
	});
var author$project$Lia$Markdown$Effect$Model$current_comment = function (model) {
	return A2(
		elm$core$Maybe$map,
		function (e) {
			return _Utils_Tuple2(e.dI, e.eE);
		},
		A2(elm$core$Dict$get, model.dj, model.aG));
};
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$sortBy = _List_sortBy;
var elm$core$List$sort = function (xs) {
	return A2(elm$core$List$sortBy, elm$core$Basics$identity, xs);
};
var author$project$Lia$Markdown$Effect$Model$get_all_javascript = function (model) {
	return elm$core$List$concat(
		A2(
			elm$core$List$map,
			function (_n0) {
				var v = _n0.b;
				return v;
			},
			elm$core$List$sort(
				elm$core$Dict$toList(model.aa))));
};
var author$project$Lia$Markdown$Effect$Model$get_javascript = function (model) {
	var _n0 = A2(elm$core$Dict$get, model.dj, model.aa);
	if (!_n0.$) {
		var a = _n0.a;
		return a;
	} else {
		return _List_Nil;
	}
};
var author$project$Lia$Markdown$Effect$Update$Rendered = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var author$project$Lia$Markdown$Effect$Update$Send = function (a) {
	return {$: 3, a: a};
};
var author$project$Lia$Markdown$Effect$Update$executeEvent = F2(
	function (delay, code) {
		return A3(
			author$project$Port$Event$Event,
			'execute',
			-1,
			elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'delay',
						elm$json$Json$Encode$int(delay)),
						_Utils_Tuple2(
						'code',
						elm$json$Json$Encode$string(code))
					])));
	});
var author$project$Port$TTS$cancel = A3(
	author$project$Port$Event$Event,
	'speak',
	-1,
	elm$json$Json$Encode$string('cancel'));
var author$project$Port$TTS$speak = F3(
	function (loud, voice, text) {
		return A3(
			author$project$Port$Event$Event,
			'speak',
			-1,
			A2(
				elm$json$Json$Encode$list,
				elm$json$Json$Encode$string,
				_List_fromArray(
					[
						voice,
						text,
						loud ? 'true' : 'false'
					])));
	});
var elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$Dom$NotFound = elm$core$Basics$identity;
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var elm$url$Url$File = 2;
var elm$url$Url$File2 = 3;
var elm$url$Url$Http = 0;
var elm$url$Url$Https = 1;
var elm$core$String$indexes = _String_indexes;
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {a0: fragment, b9: host, cz: path, cB: port_, cF: protocol, ag: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 1) {
						return elm$core$Maybe$Just(
							A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					if (!_n0.b.b.b) {
						var _n2 = _n0.b;
						var i = _n2.a;
						var _n3 = elm$core$String$toInt(
							A2(elm$core$String$dropLeft, i + 1, str));
						if (_n3.$ === 1) {
							return elm$core$Maybe$Just(
								A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
						} else {
							var port_ = _n3;
							return elm$core$Maybe$Just(
								A6(
									elm$url$Url$Url,
									protocol,
									A2(elm$core$String$left, i, str),
									port_,
									path,
									params,
									frag));
						}
					} else {
						return elm$core$Maybe$Nothing;
					}
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		0,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		1,
		A2(elm$core$String$dropLeft, 8, str)) : (A2(elm$core$String$startsWith, 'file:///', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		3,
		A2(elm$core$String$dropLeft, 8, str)) : (A2(elm$core$String$startsWith, 'file://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		2,
		A2(elm$core$String$dropLeft, 7, str)) : elm$core$Maybe$Nothing)));
};
var elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var author$project$Lia$Markdown$Effect$Update$execute = F4(
	function (sound, run_all, delay, model) {
		var javascript = run_all ? author$project$Lia$Markdown$Effect$Model$get_all_javascript(model) : author$project$Lia$Markdown$Effect$Model$get_javascript(model);
		return A3(
			author$project$Lia$Markdown$Effect$Update$update,
			sound,
			author$project$Lia$Markdown$Effect$Update$Send(
				A2(
					elm$core$List$cons,
					A3(
						author$project$Port$Event$Event,
						'persistent',
						-1,
						elm$json$Json$Encode$string('load')),
					A2(
						elm$core$List$map,
						author$project$Lia$Markdown$Effect$Update$executeEvent(delay),
						javascript))),
			model);
	});
var author$project$Lia$Markdown$Effect$Update$update = F3(
	function (sound, msg, model) {
		switch (msg.$) {
			case 0:
				var run_all_javascript = msg.a;
				return _Utils_Tuple3(
					model,
					A2(
						elm$core$Task$perform,
						author$project$Lia$Markdown$Effect$Update$Rendered(run_all_javascript),
						elm$browser$Browser$Dom$getViewport),
					_List_Nil);
			case 1:
				return author$project$Lia$Markdown$Effect$Update$has_next(model) ? A4(
					author$project$Lia$Markdown$Effect$Update$execute,
					sound,
					false,
					0,
					_Utils_update(
						model,
						{dj: model.dj + 1})) : _Utils_Tuple3(model, elm$core$Platform$Cmd$none, _List_Nil);
			case 2:
				return author$project$Lia$Markdown$Effect$Update$has_previous(model) ? A4(
					author$project$Lia$Markdown$Effect$Update$execute,
					sound,
					false,
					0,
					_Utils_update(
						model,
						{dj: model.dj - 1})) : _Utils_Tuple3(model, elm$core$Platform$Cmd$none, _List_Nil);
			case 3:
				var event = msg.a;
				var events = A2(
					elm$core$List$cons,
					A3(
						author$project$Port$Event$Event,
						'scrollTo',
						-1,
						elm$json$Json$Encode$string('focused')),
					event);
				return _Utils_Tuple3(
					model,
					elm$core$Platform$Cmd$none,
					function () {
						var _n1 = author$project$Lia$Markdown$Effect$Model$current_comment(model);
						if (!_n1.$) {
							var _n2 = _n1.a;
							var comment = _n2.a;
							var narrator = _n2.b;
							return A2(
								elm$core$List$cons,
								A3(author$project$Port$TTS$speak, sound, narrator, comment),
								events);
						} else {
							return A2(elm$core$List$cons, author$project$Port$TTS$cancel, events);
						}
					}());
			default:
				var run_all_javascript = msg.a;
				return A4(author$project$Lia$Markdown$Effect$Update$execute, sound, run_all_javascript, 0, model);
		}
	});
var author$project$Lia$Markdown$Quiz$Block$Update$toString = function (state) {
	if (!state.$) {
		var str = state.a;
		return str;
	} else {
		if (state.b.b && (!state.b.b.b)) {
			var _n1 = state.b;
			var i = _n1.a;
			return elm$core$String$fromInt(i);
		} else {
			return '';
		}
	}
};
var author$project$Lia$Markdown$Quiz$Block$Types$Select = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Lia$Markdown$Quiz$Block$Types$Text = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Quiz$Block$Json$toState = elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Quiz$Block$Types$Text,
			A2(elm$json$Json$Decode$field, 'Text', elm$json$Json$Decode$string)),
			A2(
			elm$json$Json$Decode$map,
			A2(
				elm$core$Basics$composeR,
				elm$core$List$singleton,
				author$project$Lia$Markdown$Quiz$Block$Types$Select(false)),
			A2(elm$json$Json$Decode$field, 'Select', elm$json$Json$Decode$int))
		]));
var author$project$Lia$Markdown$Quiz$Matrix$Json$uid = 'Matrix';
var author$project$Lia$Markdown$Quiz$Vector$Types$MultipleChoice = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Quiz$Vector$Types$SingleChoice = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Quiz$Vector$Json$toState = elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Quiz$Vector$Types$SingleChoice,
			A2(
				elm$json$Json$Decode$field,
				'SingleChoice',
				elm$json$Json$Decode$list(elm$json$Json$Decode$bool))),
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Quiz$Vector$Types$MultipleChoice,
			A2(
				elm$json$Json$Decode$field,
				'MultipleChoice',
				elm$json$Json$Decode$list(elm$json$Json$Decode$bool)))
		]));
var author$project$Lia$Markdown$Quiz$Matrix$Json$toState = A2(
	elm$json$Json$Decode$field,
	author$project$Lia$Markdown$Quiz$Matrix$Json$uid,
	elm$json$Json$Decode$array(author$project$Lia$Markdown$Quiz$Vector$Json$toState));
var author$project$Lia$Markdown$Quiz$Types$Block_State = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Quiz$Types$Empty_State = {$: 0};
var author$project$Lia$Markdown$Quiz$Types$Matrix_State = function (a) {
	return {$: 3, a: a};
};
var author$project$Lia$Markdown$Quiz$Types$Vector_State = function (a) {
	return {$: 2, a: a};
};
var author$project$Lia$Markdown$Quiz$Json$toState = elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(elm$json$Json$Decode$map, author$project$Lia$Markdown$Quiz$Types$Block_State, author$project$Lia$Markdown$Quiz$Block$Json$toState),
			A2(elm$json$Json$Decode$map, author$project$Lia$Markdown$Quiz$Types$Vector_State, author$project$Lia$Markdown$Quiz$Vector$Json$toState),
			A2(elm$json$Json$Decode$map, author$project$Lia$Markdown$Quiz$Types$Matrix_State, author$project$Lia$Markdown$Quiz$Matrix$Json$toState),
			A2(
			elm$json$Json$Decode$andThen,
			function (_n0) {
				return elm$json$Json$Decode$succeed(author$project$Lia$Markdown$Quiz$Types$Empty_State);
			},
			A2(elm$json$Json$Decode$field, 'Empty', elm$json$Json$Decode$value))
		]));
var author$project$Lia$Markdown$Quiz$Types$Element = F5(
	function (solved, state, trial, hint, error_msg) {
		return {dV: error_msg, d9: hint, e2: solved, t: state, fk: trial};
	});
var author$project$Lia$Markdown$Quiz$Types$Open = 0;
var author$project$Lia$Markdown$Quiz$Types$ReSolved = 2;
var author$project$Lia$Markdown$Quiz$Types$Solved = 1;
var author$project$Lia$Markdown$Quiz$Json$toElement = function () {
	var solved_decoder = function (i) {
		switch (i) {
			case 0:
				return elm$json$Json$Decode$succeed(0);
			case 1:
				return elm$json$Json$Decode$succeed(1);
			default:
				return elm$json$Json$Decode$succeed(2);
		}
	};
	return A6(
		elm$json$Json$Decode$map5,
		author$project$Lia$Markdown$Quiz$Types$Element,
		A2(
			elm$json$Json$Decode$andThen,
			solved_decoder,
			A2(elm$json$Json$Decode$field, 'solved', elm$json$Json$Decode$int)),
		A2(elm$json$Json$Decode$field, 'state', author$project$Lia$Markdown$Quiz$Json$toState),
		A2(elm$json$Json$Decode$field, 'trial', elm$json$Json$Decode$int),
		A2(elm$json$Json$Decode$field, 'hint', elm$json$Json$Decode$int),
		A2(elm$json$Json$Decode$field, 'error_msg', elm$json$Json$Decode$string));
}();
var author$project$Lia$Markdown$Quiz$Json$toVector = function (json) {
	return A2(
		elm$json$Json$Decode$decodeValue,
		elm$json$Json$Decode$array(author$project$Lia$Markdown$Quiz$Json$toElement),
		json);
};
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var author$project$Lia$Markdown$Quiz$Vector$Update$toString = function (state) {
	if (!state.$) {
		var list = state.a;
		return elm$core$String$fromInt(
			A2(
				elm$core$Maybe$withDefault,
				-1,
				A2(
					elm$core$Maybe$map,
					elm$core$Tuple$first,
					elm$core$List$head(
						A2(
							elm$core$List$filter,
							elm$core$Tuple$second,
							A2(elm$core$List$indexedMap, elm$core$Tuple$pair, list))))));
	} else {
		var values = state.a;
		return function (str) {
			return '[' + (str + ']');
		}(
			elm$core$String$concat(
				A2(
					elm$core$List$intersperse,
					',',
					A2(
						elm$core$List$map,
						function (s) {
							return s ? '1' : '0';
						},
						values))));
	}
};
var author$project$Lia$Markdown$Quiz$Matrix$Update$toString = function (state) {
	return function (str) {
		return '[' + (str + ']');
	}(
		elm$core$String$concat(
			A2(
				elm$core$List$intersperse,
				',',
				A2(
					elm$core$List$map,
					author$project$Lia$Markdown$Quiz$Vector$Update$toString,
					elm$core$Array$toList(state)))));
};
var author$project$Lia$Markdown$Quiz$Types$toState = function (quiz) {
	switch (quiz.$) {
		case 0:
			return author$project$Lia$Markdown$Quiz$Types$Empty_State;
		case 1:
			var q = quiz.a;
			return author$project$Lia$Markdown$Quiz$Types$Block_State(q.c$);
		case 2:
			var q = quiz.a;
			return author$project$Lia$Markdown$Quiz$Types$Vector_State(q.c$);
		default:
			var q = quiz.a;
			return author$project$Lia$Markdown$Quiz$Types$Matrix_State(q.c$);
	}
};
var author$project$Lia$Markdown$Quiz$Block$Types$comp = F2(
	function (quiz, state) {
		var _n0 = _Utils_Tuple2(quiz.c$, state);
		_n0$2:
		while (true) {
			if (!_n0.a.$) {
				if (!_n0.b.$) {
					var str1 = _n0.a.a;
					var str2 = _n0.b.a;
					return _Utils_eq(str1, str2);
				} else {
					break _n0$2;
				}
			} else {
				if (((_n0.b.$ === 1) && _n0.b.b.b) && (!_n0.b.b.b.b)) {
					var _n1 = _n0.a;
					var list = _n1.b;
					var _n2 = _n0.b;
					var _n3 = _n2.b;
					var i = _n3.a;
					return !elm$core$List$isEmpty(
						A2(
							elm$core$List$filter,
							elm$core$Basics$eq(i),
							list));
				} else {
					break _n0$2;
				}
			}
		}
		return false;
	});
var author$project$Lia$Markdown$Quiz$Vector$Types$Quiz = F2(
	function (options, solution) {
		return {eR: options, c$: solution};
	});
var author$project$Lia$Markdown$Quiz$Vector$Types$comp = F2(
	function (quiz, state) {
		var _n0 = _Utils_Tuple2(quiz.c$, state);
		_n0$2:
		while (true) {
			if (!_n0.a.$) {
				if (!_n0.b.$) {
					var list1 = _n0.a.a;
					var list2 = _n0.b.a;
					return A2(
						elm$core$List$any,
						elm$core$Basics$identity,
						A3(
							elm$core$List$map2,
							F2(
								function (l1, l2) {
									return l1 && l2;
								}),
							list1,
							list2));
				} else {
					break _n0$2;
				}
			} else {
				if (_n0.b.$ === 1) {
					var list1 = _n0.a.a;
					var list2 = _n0.b.a;
					return _Utils_eq(list1, list2);
				} else {
					break _n0$2;
				}
			}
		}
		return false;
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			elm$core$List$any,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, isOkay),
			list);
	});
var author$project$Lia$Markdown$Quiz$Matrix$Types$comp = F2(
	function (quiz, state) {
		var list2 = elm$core$Array$toList(state);
		var list1 = A2(
			elm$core$List$map,
			author$project$Lia$Markdown$Quiz$Vector$Types$Quiz(_List_Nil),
			elm$core$Array$toList(quiz.c$));
		return A2(
			elm$core$List$all,
			elm$core$Basics$identity,
			A3(elm$core$List$map2, author$project$Lia$Markdown$Quiz$Vector$Types$comp, list1, list2));
	});
var author$project$Lia$Markdown$Quiz$Types$comp = F2(
	function (quiz, state) {
		return function () {
			var _n0 = _Utils_Tuple2(quiz, state);
			_n0$3:
			while (true) {
				switch (_n0.a.$) {
					case 1:
						if (_n0.b.$ === 1) {
							var q = _n0.a.a;
							var s = _n0.b.a;
							return A2(author$project$Lia$Markdown$Quiz$Block$Types$comp, q, s);
						} else {
							break _n0$3;
						}
					case 2:
						if (_n0.b.$ === 2) {
							var q = _n0.a.a;
							var s = _n0.b.a;
							return A2(author$project$Lia$Markdown$Quiz$Vector$Types$comp, q, s);
						} else {
							break _n0$3;
						}
					case 3:
						if (_n0.b.$ === 3) {
							var q = _n0.a.a;
							var s = _n0.b.a;
							return A2(author$project$Lia$Markdown$Quiz$Matrix$Types$comp, q, s);
						} else {
							break _n0$3;
						}
					default:
						break _n0$3;
				}
			}
			return false;
		}() ? 1 : 0;
	});
var author$project$Lia$Markdown$Quiz$Update$check = F2(
	function (solution, e) {
		return _Utils_update(
			e,
			{
				e2: A2(author$project$Lia$Markdown$Quiz$Types$comp, solution, e.t),
				fk: e.fk + 1
			});
	});
var author$project$Lia$Markdown$Quiz$Update$evalEventDecoder = function (json) {
	var _eval = author$project$Port$Eval$decode(json);
	return _eval.aq ? ((_eval.cM === 'true') ? function (e) {
		return _Utils_update(
			e,
			{dV: '', e2: 1, fk: e.fk + 1});
	} : function (e) {
		return _Utils_update(
			e,
			{dV: '', e2: 0, fk: e.fk + 1});
	}) : function (e) {
		return _Utils_update(
			e,
			{dV: _eval.cM});
	};
};
var author$project$Lia$Markdown$Quiz$Block$Update$update = F2(
	function (msg, state) {
		var _n0 = _Utils_Tuple2(msg, state);
		_n0$3:
		while (true) {
			if (_n0.b.$ === 1) {
				switch (_n0.a.$) {
					case 1:
						var option = _n0.a.a;
						var _n1 = _n0.b;
						return A2(
							author$project$Lia$Markdown$Quiz$Block$Types$Select,
							false,
							_List_fromArray(
								[option]));
					case 0:
						var _n2 = _n0.a;
						var _n3 = _n0.b;
						var open = _n3.a;
						var id = _n3.b;
						return A2(author$project$Lia$Markdown$Quiz$Block$Types$Select, !open, id);
					default:
						break _n0$3;
				}
			} else {
				if (_n0.a.$ === 2) {
					var str = _n0.a.a;
					return author$project$Lia$Markdown$Quiz$Block$Types$Text(str);
				} else {
					break _n0$3;
				}
			}
		}
		return state;
	});
var author$project$Lia$Markdown$Quiz$Vector$Update$toggleMultiple = F2(
	function (id, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return A2(
				elm$core$List$cons,
				(!id) ? (!x) : x,
				A2(author$project$Lia$Markdown$Quiz$Vector$Update$toggleMultiple, id - 1, xs));
		}
	});
var author$project$Lia$Markdown$Quiz$Vector$Update$toggleSingle = F2(
	function (id, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var xs = list.b;
			return A2(
				elm$core$List$cons,
				(!id) ? true : false,
				A2(author$project$Lia$Markdown$Quiz$Vector$Update$toggleSingle, id - 1, xs));
		}
	});
var author$project$Lia$Markdown$Quiz$Vector$Update$toggle = F2(
	function (id, state) {
		if (!state.$) {
			var list = state.a;
			return author$project$Lia$Markdown$Quiz$Vector$Types$SingleChoice(
				A2(author$project$Lia$Markdown$Quiz$Vector$Update$toggleSingle, id, list));
		} else {
			var list = state.a;
			return author$project$Lia$Markdown$Quiz$Vector$Types$MultipleChoice(
				A2(author$project$Lia$Markdown$Quiz$Vector$Update$toggleMultiple, id, list));
		}
	});
var author$project$Lia$Markdown$Quiz$Matrix$Update$update = F2(
	function (msg, state) {
		var row_id = msg.a;
		var column_id = msg.b;
		var _n1 = A2(
			elm$core$Maybe$map,
			author$project$Lia$Markdown$Quiz$Vector$Update$toggle(column_id),
			A2(elm$core$Array$get, row_id, state));
		if (!_n1.$) {
			var row = _n1.a;
			return A3(elm$core$Array$set, row_id, row, state);
		} else {
			return state;
		}
	});
var author$project$Lia$Markdown$Quiz$Vector$Update$update = F2(
	function (msg, state) {
		var id = msg;
		return A2(author$project$Lia$Markdown$Quiz$Vector$Update$toggle, id, state);
	});
var author$project$Lia$Markdown$Quiz$Update$state_ = F2(
	function (msg, e) {
		return _Utils_update(
			e,
			{
				t: function () {
					var _n0 = _Utils_Tuple2(msg, e.t);
					_n0$3:
					while (true) {
						switch (_n0.a.$) {
							case 0:
								if (_n0.b.$ === 1) {
									var _n1 = _n0.a;
									var m = _n1.b;
									var s = _n0.b.a;
									return author$project$Lia$Markdown$Quiz$Types$Block_State(
										A2(author$project$Lia$Markdown$Quiz$Block$Update$update, m, s));
								} else {
									break _n0$3;
								}
							case 1:
								if (_n0.b.$ === 2) {
									var _n2 = _n0.a;
									var m = _n2.b;
									var s = _n0.b.a;
									return author$project$Lia$Markdown$Quiz$Types$Vector_State(
										A2(author$project$Lia$Markdown$Quiz$Vector$Update$update, m, s));
								} else {
									break _n0$3;
								}
							case 2:
								if (_n0.b.$ === 3) {
									var _n3 = _n0.a;
									var m = _n3.b;
									var s = _n0.b.a;
									return author$project$Lia$Markdown$Quiz$Types$Matrix_State(
										A2(author$project$Lia$Markdown$Quiz$Matrix$Update$update, m, s));
								} else {
									break _n0$3;
								}
							default:
								break _n0$3;
						}
					}
					return e.t;
				}()
			});
	});
var author$project$Lia$Markdown$Quiz$Block$Json$fromState = function (state) {
	return elm$json$Json$Encode$object(
		function () {
			if (!state.$) {
				var x = state.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'Text',
						elm$json$Json$Encode$string(x))
					]);
			} else {
				if (state.b.b && (!state.b.b.b)) {
					var _n1 = state.b;
					var x = _n1.a;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'Select',
							elm$json$Json$Encode$int(x))
						]);
				} else {
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'Select',
							elm$json$Json$Encode$int(-1))
						]);
				}
			}
		}());
};
var author$project$Lia$Markdown$Quiz$Vector$Json$fromState = function (state) {
	return elm$json$Json$Encode$object(
		function () {
			if (!state.$) {
				var list = state.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'SingleChoice',
						A2(elm$json$Json$Encode$list, elm$json$Json$Encode$bool, list))
					]);
			} else {
				var list = state.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'MultipleChoice',
						A2(elm$json$Json$Encode$list, elm$json$Json$Encode$bool, list))
					]);
			}
		}());
};
var author$project$Lia$Markdown$Quiz$Matrix$Json$fromState = function (state) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				author$project$Lia$Markdown$Quiz$Matrix$Json$uid,
				A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Quiz$Vector$Json$fromState, state))
			]));
};
var author$project$Lia$Markdown$Quiz$Json$fromState = function (state) {
	switch (state.$) {
		case 0:
			return elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2('Empty', elm$json$Json$Encode$null)
					]));
		case 1:
			var s = state.a;
			return author$project$Lia$Markdown$Quiz$Block$Json$fromState(s);
		case 2:
			var s = state.a;
			return author$project$Lia$Markdown$Quiz$Vector$Json$fromState(s);
		default:
			var s = state.a;
			return author$project$Lia$Markdown$Quiz$Matrix$Json$fromState(s);
	}
};
var author$project$Lia$Markdown$Quiz$Json$fromElement = function (element) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'solved',
				elm$json$Json$Encode$int(
					function () {
						var _n0 = element.e2;
						switch (_n0) {
							case 0:
								return 0;
							case 1:
								return 1;
							default:
								return -1;
						}
					}())),
				_Utils_Tuple2(
				'state',
				author$project$Lia$Markdown$Quiz$Json$fromState(element.t)),
				_Utils_Tuple2(
				'trial',
				elm$json$Json$Encode$int(element.fk)),
				_Utils_Tuple2(
				'hint',
				elm$json$Json$Encode$int(element.d9)),
				_Utils_Tuple2(
				'error_msg',
				elm$json$Json$Encode$string(element.dV))
			]));
};
var author$project$Lia$Markdown$Quiz$Json$fromVector = function (vector) {
	return A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Quiz$Json$fromElement, vector);
};
var author$project$Lia$Markdown$Quiz$Update$store = function (vector) {
	return _Utils_Tuple2(
		vector,
		elm$core$List$singleton(
			author$project$Port$Event$store(
				author$project$Lia$Markdown$Quiz$Json$fromVector(vector))));
};
var author$project$Lia$Markdown$Quiz$Update$get = F2(
	function (idx, vector) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if (!_n0.$) {
			var elem = _n0.a;
			return ((elem.e2 === 1) || (elem.e2 === 2)) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(elem);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Lia$Markdown$Quiz$Update$update_ = F3(
	function (idx, vector, f) {
		var _n0 = A2(author$project$Lia$Markdown$Quiz$Update$get, idx, vector);
		if (!_n0.$) {
			var elem = _n0.a;
			return A3(
				elm$core$Array$set,
				idx,
				f(elem),
				vector);
		} else {
			return vector;
		}
	});
var author$project$Lia$Markdown$Quiz$Update$update = F2(
	function (msg, vector) {
		switch (msg.$) {
			case 0:
				var id = msg.a;
				return _Utils_Tuple2(
					A3(
						author$project$Lia$Markdown$Quiz$Update$update_,
						id,
						vector,
						author$project$Lia$Markdown$Quiz$Update$state_(msg)),
					_List_Nil);
			case 1:
				var id = msg.a;
				return _Utils_Tuple2(
					A3(
						author$project$Lia$Markdown$Quiz$Update$update_,
						id,
						vector,
						author$project$Lia$Markdown$Quiz$Update$state_(msg)),
					_List_Nil);
			case 2:
				var id = msg.a;
				return _Utils_Tuple2(
					A3(
						author$project$Lia$Markdown$Quiz$Update$update_,
						id,
						vector,
						author$project$Lia$Markdown$Quiz$Update$state_(msg)),
					_List_Nil);
			case 3:
				if (msg.c.$ === 1) {
					var id = msg.a;
					var solution = msg.b;
					var _n1 = msg.c;
					return author$project$Lia$Markdown$Quiz$Update$store(
						A3(
							author$project$Lia$Markdown$Quiz$Update$update_,
							id,
							vector,
							author$project$Lia$Markdown$Quiz$Update$check(solution)));
				} else {
					var idx = msg.a;
					var code = msg.c.a;
					var state = function () {
						var _n2 = A2(
							elm$core$Maybe$map,
							function ($) {
								return $.t;
							},
							A2(elm$core$Array$get, idx, vector));
						_n2$3:
						while (true) {
							if (!_n2.$) {
								switch (_n2.a.$) {
									case 1:
										var b = _n2.a.a;
										return author$project$Lia$Markdown$Quiz$Block$Update$toString(b);
									case 2:
										var s = _n2.a.a;
										return author$project$Lia$Markdown$Quiz$Vector$Update$toString(s);
									case 3:
										var m = _n2.a.a;
										return author$project$Lia$Markdown$Quiz$Matrix$Update$toString(m);
									default:
										break _n2$3;
								}
							} else {
								break _n2$3;
							}
						}
						return '';
					}();
					return _Utils_Tuple2(
						vector,
						_List_fromArray(
							[
								A3(
								author$project$Port$Eval$event,
								idx,
								code,
								_List_fromArray(
									[state]))
							]));
				}
			case 4:
				var idx = msg.a;
				return author$project$Lia$Markdown$Quiz$Update$store(
					A3(
						author$project$Lia$Markdown$Quiz$Update$update_,
						idx,
						vector,
						function (e) {
							return _Utils_update(
								e,
								{d9: e.d9 + 1});
						}));
			case 5:
				var idx = msg.a;
				var solution = msg.b;
				return author$project$Lia$Markdown$Quiz$Update$store(
					A3(
						author$project$Lia$Markdown$Quiz$Update$update_,
						idx,
						vector,
						function (e) {
							return _Utils_update(
								e,
								{
									dV: '',
									e2: 2,
									t: author$project$Lia$Markdown$Quiz$Types$toState(solution)
								});
						}));
			default:
				var event = msg.a;
				var _n3 = event.fi;
				switch (_n3) {
					case 'eval':
						return author$project$Lia$Markdown$Quiz$Update$store(
							A3(
								author$project$Lia$Markdown$Quiz$Update$update_,
								event.cV,
								vector,
								author$project$Lia$Markdown$Quiz$Update$evalEventDecoder(event.ey)));
					case 'restore':
						return _Utils_Tuple2(
							A2(
								elm$core$Result$withDefault,
								vector,
								author$project$Lia$Markdown$Quiz$Json$toVector(event.ey)),
							_List_Nil);
					default:
						return _Utils_Tuple2(vector, _List_Nil);
				}
		}
	});
var author$project$Lia$Markdown$Survey$Json$dict2json = function (dict) {
	return elm$json$Json$Encode$object(
		A2(
			elm$core$List$map,
			function (_n0) {
				var s = _n0.a;
				var b = _n0.b;
				return _Utils_Tuple2(
					s,
					elm$json$Json$Encode$bool(b));
			},
			elm$core$Dict$toList(dict)));
};
var author$project$Lia$Markdown$Survey$Json$fromState = function (state) {
	return elm$json$Json$Encode$object(
		function () {
			switch (state.$) {
				case 0:
					var str = state.a;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'Text',
							elm$json$Json$Encode$string(str))
						]);
				case 1:
					var i = state.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							'Select',
							elm$json$Json$Encode$int(i))
						]);
				case 2:
					var single = state.a;
					var vector = state.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							single ? 'SingleChoice' : 'MultipleChoice',
							author$project$Lia$Markdown$Survey$Json$dict2json(vector))
						]);
				default:
					var single = state.a;
					var matrix = state.b;
					return _List_fromArray(
						[
							_Utils_Tuple2(
							single ? 'SingleChoiceMatrix' : 'MultipleChoiceMatrix',
							A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Survey$Json$dict2json, matrix))
						]);
			}
		}());
};
var author$project$Lia$Markdown$Survey$Json$fromElement = function (_n0) {
	var b = _n0.a;
	var state = _n0.b;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'submitted',
				elm$json$Json$Encode$bool(b)),
				_Utils_Tuple2(
				'state',
				author$project$Lia$Markdown$Survey$Json$fromState(state))
			]));
};
var author$project$Lia$Markdown$Survey$Json$fromVector = function (vector) {
	return A2(elm$json$Json$Encode$array, author$project$Lia$Markdown$Survey$Json$fromElement, vector);
};
var author$project$Lia$Markdown$Survey$Types$Matrix_State = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var author$project$Lia$Markdown$Survey$Types$Select_State = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Lia$Markdown$Survey$Types$Text_State = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Survey$Types$Vector_State = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$Lia$Markdown$Survey$Json$toState = elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Survey$Types$Text_State,
			A2(elm$json$Json$Decode$field, 'Text', elm$json$Json$Decode$string)),
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Survey$Types$Select_State(false),
			A2(elm$json$Json$Decode$field, 'Select', elm$json$Json$Decode$int)),
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Survey$Types$Vector_State(true),
			A2(
				elm$json$Json$Decode$field,
				'SingleChoice',
				elm$json$Json$Decode$dict(elm$json$Json$Decode$bool))),
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Survey$Types$Vector_State(false),
			A2(
				elm$json$Json$Decode$field,
				'MultipleChoice',
				elm$json$Json$Decode$dict(elm$json$Json$Decode$bool))),
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Survey$Types$Matrix_State(false),
			A2(
				elm$json$Json$Decode$field,
				'SingleChoiceMatrix',
				elm$json$Json$Decode$array(
					elm$json$Json$Decode$dict(elm$json$Json$Decode$bool)))),
			A2(
			elm$json$Json$Decode$map,
			author$project$Lia$Markdown$Survey$Types$Matrix_State(true),
			A2(
				elm$json$Json$Decode$field,
				'MultipleChoiceMatrix',
				elm$json$Json$Decode$array(
					elm$json$Json$Decode$dict(elm$json$Json$Decode$bool))))
		]));
var author$project$Lia$Markdown$Survey$Json$toElement = A3(
	elm$json$Json$Decode$map2,
	elm$core$Tuple$pair,
	A2(elm$json$Json$Decode$field, 'submitted', elm$json$Json$Decode$bool),
	A2(elm$json$Json$Decode$field, 'state', author$project$Lia$Markdown$Survey$Json$toState));
var author$project$Lia$Markdown$Survey$Json$toVector = function (json) {
	return A2(
		elm$json$Json$Decode$decodeValue,
		elm$json$Json$Decode$array(author$project$Lia$Markdown$Survey$Json$toElement),
		json);
};
var author$project$Lia$Markdown$Survey$Types$key_value_string = function (_n0) {
	var key = _n0.a;
	var value = _n0.b;
	return '\"' + (key + ('\": ' + (value ? '1' : '0')));
};
var author$project$Lia$Markdown$Survey$Types$toString = function (state) {
	switch (state.$) {
		case 0:
			var str = state.a;
			return str;
		case 1:
			var i = state.b;
			return elm$core$String$fromInt(i);
		case 2:
			var dict = state.b;
			return '{' + (elm$core$String$concat(
				A2(
					elm$core$List$intersperse,
					', ',
					A2(
						elm$core$List$map,
						author$project$Lia$Markdown$Survey$Types$key_value_string,
						elm$core$Dict$toList(dict)))) + '}');
		default:
			var array = state.b;
			return '[' + (elm$core$String$concat(
				A2(
					elm$core$List$intersperse,
					',\n',
					A2(
						elm$core$List$map,
						A2(
							elm$core$Basics$composeR,
							author$project$Lia$Markdown$Survey$Types$Vector_State(false),
							author$project$Lia$Markdown$Survey$Types$toString),
						elm$core$Array$toList(array)))) + ']');
	}
};
var author$project$Lia$Markdown$Survey$Update$Submit = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var author$project$Lia$Markdown$Survey$Update$submit = F2(
	function (vector, idx) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if ((!_n0.$) && (!_n0.a.a)) {
			var _n1 = _n0.a;
			var state = _n1.b;
			return A3(
				elm$core$Array$set,
				idx,
				_Utils_Tuple2(true, state),
				vector);
		} else {
			return vector;
		}
	});
var elm$core$Dict$values = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var author$project$Lia$Markdown$Survey$Update$submitable = F2(
	function (vector, idx) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if ((!_n0.$) && (!_n0.a.a)) {
			switch (_n0.a.b.$) {
				case 0:
					var _n1 = _n0.a;
					var state = _n1.b.a;
					return state !== '';
				case 1:
					var _n2 = _n0.a;
					var _n3 = _n2.b;
					var state = _n3.b;
					return !_Utils_eq(state, -1);
				case 2:
					var _n4 = _n0.a;
					var _n5 = _n4.b;
					var state = _n5.b;
					return function (s) {
						return s > 0;
					}(
						elm$core$List$length(
							A2(
								elm$core$List$filter,
								function (a) {
									return a;
								},
								elm$core$Dict$values(state))));
				default:
					var _n6 = _n0.a;
					var _n7 = _n6.b;
					var state = _n7.b;
					return A2(
						elm$core$List$all,
						function (a) {
							return elm$core$List$length(a) > 0;
						},
						A2(
							elm$core$List$map,
							function (l) {
								return A2(
									elm$core$List$filter,
									function (a) {
										return a;
									},
									l);
							},
							A2(
								elm$core$List$map,
								elm$core$Dict$values,
								elm$core$Array$toList(state))));
			}
		} else {
			return false;
		}
	});
var author$project$Lia$Markdown$Survey$Update$set_state = F3(
	function (vector, idx, state) {
		return A3(
			elm$core$Array$set,
			idx,
			_Utils_Tuple2(false, state),
			vector);
	});
var elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2(elm$core$Dict$map, func, left),
				A2(elm$core$Dict$map, func, right));
		}
	});
var author$project$Lia$Markdown$Survey$Update$update_matrix = F4(
	function (vector, col_id, row_id, _var) {
		var _n0 = A2(elm$core$Array$get, col_id, vector);
		if (((!_n0.$) && (!_n0.a.a)) && (_n0.a.b.$ === 3)) {
			if (!_n0.a.b.a) {
				var _n1 = _n0.a;
				var _n2 = _n1.b;
				var matrix = _n2.b;
				var row = A2(elm$core$Array$get, row_id, matrix);
				return A3(
					author$project$Lia$Markdown$Survey$Update$set_state,
					vector,
					col_id,
					A2(
						author$project$Lia$Markdown$Survey$Types$Matrix_State,
						false,
						A2(
							elm$core$Maybe$withDefault,
							matrix,
							A2(
								elm$core$Maybe$map,
								function (d) {
									return A3(elm$core$Array$set, row_id, d, matrix);
								},
								A2(
									elm$core$Maybe$map,
									function (d) {
										return A3(
											elm$core$Dict$update,
											_var,
											function (_n5) {
												return elm$core$Maybe$Just(true);
											},
											d);
									},
									A2(
										elm$core$Maybe$map,
										function (d) {
											return A2(
												elm$core$Dict$map,
												F2(
													function (_n3, _n4) {
														return false;
													}),
												d);
										},
										row))))));
			} else {
				var _n6 = _n0.a;
				var _n7 = _n6.b;
				var matrix = _n7.b;
				var row = A2(elm$core$Array$get, row_id, matrix);
				return A3(
					author$project$Lia$Markdown$Survey$Update$set_state,
					vector,
					col_id,
					A2(
						author$project$Lia$Markdown$Survey$Types$Matrix_State,
						true,
						A2(
							elm$core$Maybe$withDefault,
							matrix,
							A2(
								elm$core$Maybe$map,
								function (d) {
									return A3(elm$core$Array$set, row_id, d, matrix);
								},
								A2(
									elm$core$Maybe$map,
									function (d) {
										return A3(
											elm$core$Dict$update,
											_var,
											function (b) {
												return A2(elm$core$Maybe$map, elm$core$Basics$not, b);
											},
											d);
									},
									row)))));
			}
		} else {
			return vector;
		}
	});
var author$project$Lia$Markdown$Survey$Update$update_select = F3(
	function (vector, id, value) {
		var _n0 = A2(elm$core$Array$get, id, vector);
		if (((!_n0.$) && (!_n0.a.a)) && (_n0.a.b.$ === 1)) {
			var _n1 = _n0.a;
			var _n2 = _n1.b;
			return A3(
				author$project$Lia$Markdown$Survey$Update$set_state,
				vector,
				id,
				A2(author$project$Lia$Markdown$Survey$Types$Select_State, false, value));
		} else {
			return vector;
		}
	});
var author$project$Lia$Markdown$Survey$Update$update_select_chose = F2(
	function (vector, id) {
		var _n0 = A2(elm$core$Array$get, id, vector);
		if (((!_n0.$) && (!_n0.a.a)) && (_n0.a.b.$ === 1)) {
			var _n1 = _n0.a;
			var _n2 = _n1.b;
			var b = _n2.a;
			var value = _n2.b;
			return A3(
				author$project$Lia$Markdown$Survey$Update$set_state,
				vector,
				id,
				A2(author$project$Lia$Markdown$Survey$Types$Select_State, !b, value));
		} else {
			return vector;
		}
	});
var author$project$Lia$Markdown$Survey$Update$update_text = F3(
	function (vector, idx, str) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if (((!_n0.$) && (!_n0.a.a)) && (!_n0.a.b.$)) {
			var _n1 = _n0.a;
			return A3(
				author$project$Lia$Markdown$Survey$Update$set_state,
				vector,
				idx,
				author$project$Lia$Markdown$Survey$Types$Text_State(str));
		} else {
			return vector;
		}
	});
var author$project$Lia$Markdown$Survey$Update$update_vector = F3(
	function (vector, idx, _var) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if (((!_n0.$) && (!_n0.a.a)) && (_n0.a.b.$ === 2)) {
			if (!_n0.a.b.a) {
				var _n1 = _n0.a;
				var _n2 = _n1.b;
				var element = _n2.b;
				return A3(
					author$project$Lia$Markdown$Survey$Update$set_state,
					vector,
					idx,
					A2(
						author$project$Lia$Markdown$Survey$Types$Vector_State,
						false,
						A3(
							elm$core$Dict$update,
							_var,
							function (_n5) {
								return elm$core$Maybe$Just(true);
							},
							A2(
								elm$core$Dict$map,
								F2(
									function (_n3, _n4) {
										return false;
									}),
								element))));
			} else {
				var _n6 = _n0.a;
				var _n7 = _n6.b;
				var element = _n7.b;
				return A3(
					author$project$Lia$Markdown$Survey$Update$set_state,
					vector,
					idx,
					A2(
						author$project$Lia$Markdown$Survey$Types$Vector_State,
						true,
						A3(
							elm$core$Dict$update,
							_var,
							function (b) {
								return A2(elm$core$Maybe$map, elm$core$Basics$not, b);
							},
							element)));
			}
		} else {
			return vector;
		}
	});
var author$project$Lia$Markdown$Survey$Update$update = F2(
	function (msg, vector) {
		update:
		while (true) {
			switch (msg.$) {
				case 0:
					var idx = msg.a;
					var str = msg.b;
					return _Utils_Tuple2(
						A3(author$project$Lia$Markdown$Survey$Update$update_text, vector, idx, str),
						_List_Nil);
				case 1:
					var id = msg.a;
					var value = msg.b;
					return _Utils_Tuple2(
						A3(author$project$Lia$Markdown$Survey$Update$update_select, vector, id, value),
						_List_Nil);
				case 2:
					var id = msg.a;
					return _Utils_Tuple2(
						A2(author$project$Lia$Markdown$Survey$Update$update_select_chose, vector, id),
						_List_Nil);
				case 3:
					var idx = msg.a;
					var _var = msg.b;
					return _Utils_Tuple2(
						A3(author$project$Lia$Markdown$Survey$Update$update_vector, vector, idx, _var),
						_List_Nil);
				case 4:
					var idx = msg.a;
					var row = msg.b;
					var _var = msg.c;
					return _Utils_Tuple2(
						A4(author$project$Lia$Markdown$Survey$Update$update_matrix, vector, idx, row, _var),
						_List_Nil);
				case 5:
					if (msg.b.$ === 1) {
						var id = msg.a;
						var _n1 = msg.b;
						if (A2(author$project$Lia$Markdown$Survey$Update$submitable, vector, id)) {
							var new_vector = A2(author$project$Lia$Markdown$Survey$Update$submit, vector, id);
							return _Utils_Tuple2(
								new_vector,
								elm$core$List$singleton(
									author$project$Port$Event$store(
										author$project$Lia$Markdown$Survey$Json$fromVector(new_vector))));
						} else {
							return _Utils_Tuple2(vector, _List_Nil);
						}
					} else {
						var id = msg.a;
						var code = msg.b.a;
						var _n2 = A2(elm$core$Array$get, id, vector);
						if ((!_n2.$) && (!_n2.a.a)) {
							var _n3 = _n2.a;
							var state = _n3.b;
							return _Utils_Tuple2(
								vector,
								_List_fromArray(
									[
										A3(
										author$project$Port$Eval$event,
										id,
										code,
										_List_fromArray(
											[
												author$project$Lia$Markdown$Survey$Types$toString(state)
											]))
									]));
						} else {
							return _Utils_Tuple2(vector, _List_Nil);
						}
					}
				default:
					var event = msg.a;
					var _n4 = event.fi;
					switch (_n4) {
						case 'eval':
							if ('true' === author$project$Port$Eval$decode(event.ey).cM) {
								var $temp$msg = A2(author$project$Lia$Markdown$Survey$Update$Submit, event.cV, elm$core$Maybe$Nothing),
									$temp$vector = vector;
								msg = $temp$msg;
								vector = $temp$vector;
								continue update;
							} else {
								return _Utils_Tuple2(vector, _List_Nil);
							}
						case 'restore':
							return _Utils_Tuple2(
								A2(
									elm$core$Result$withDefault,
									vector,
									author$project$Lia$Markdown$Survey$Json$toVector(event.ey)),
								_List_Nil);
						default:
							return _Utils_Tuple2(vector, _List_Nil);
					}
			}
		}
	});
var author$project$Lia$Markdown$Update$UpdateEffect = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var author$project$Lia$Markdown$Update$send = F2(
	function (name, values) {
		return A2(
			elm$core$List$map,
			elm$core$Tuple$pair(name),
			values);
	});
var elm$core$Platform$Cmd$map = _Platform_map;
var author$project$Lia$Markdown$Update$update = F2(
	function (msg, section) {
		switch (msg.$) {
			case 0:
				var sound = msg.a;
				var childMsg = msg.b;
				var _n1 = A3(author$project$Lia$Markdown$Effect$Update$update, sound, childMsg, section.M);
				var effect_model = _n1.a;
				var cmd = _n1.b;
				var event = _n1.c;
				return _Utils_Tuple3(
					_Utils_update(
						section,
						{M: effect_model}),
					A2(
						elm$core$Platform$Cmd$map,
						author$project$Lia$Markdown$Update$UpdateEffect(sound),
						cmd),
					A2(
						author$project$Lia$Markdown$Update$send,
						'effect',
						A2(elm$core$List$map, author$project$Port$Event$encode, event)));
			case 1:
				var childMsg = msg.a;
				var _n2 = A2(author$project$Lia$Markdown$Code$Update$update, childMsg, section.aW);
				if (!_n2.b.b) {
					var vector = _n2.a;
					return _Utils_Tuple3(
						_Utils_update(
							section,
							{aW: vector}),
						elm$core$Platform$Cmd$none,
						_List_Nil);
				} else {
					var vector = _n2.a;
					var events = _n2.b;
					return _Utils_Tuple3(
						_Utils_update(
							section,
							{aW: vector}),
						elm$core$Platform$Cmd$none,
						A2(
							author$project$Lia$Markdown$Update$send,
							'code',
							A2(elm$core$List$map, author$project$Port$Event$encode, events)));
				}
			case 2:
				var childMsg = msg.a;
				var _n3 = A2(author$project$Lia$Markdown$Quiz$Update$update, childMsg, section.bi);
				var vector = _n3.a;
				var event = _n3.b;
				return _Utils_Tuple3(
					_Utils_update(
						section,
						{bi: vector}),
					elm$core$Platform$Cmd$none,
					A2(
						author$project$Lia$Markdown$Update$send,
						'quiz',
						A2(elm$core$List$map, author$project$Port$Event$encode, event)));
			case 3:
				var childMsg = msg.a;
				var _n4 = A2(author$project$Lia$Markdown$Survey$Update$update, childMsg, section.bw);
				var vector = _n4.a;
				var event = _n4.b;
				return _Utils_Tuple3(
					_Utils_update(
						section,
						{bw: vector}),
					elm$core$Platform$Cmd$none,
					A2(
						author$project$Lia$Markdown$Update$send,
						'survey',
						A2(elm$core$List$map, author$project$Port$Event$encode, event)));
			case 5:
				var key = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						section,
						{
							b4: elm$core$Maybe$Just(key)
						}),
					elm$core$Platform$Cmd$none,
					_List_Nil);
			default:
				return _Utils_Tuple3(
					_Utils_update(
						section,
						{b4: elm$core$Maybe$Nothing}),
					elm$core$Platform$Cmd$none,
					_List_Nil);
		}
	});
var author$project$Lia$Markdown$Update$handle = F3(
	function (topic, event, section) {
		switch (topic) {
			case 'code':
				return A2(
					author$project$Lia$Markdown$Update$update,
					author$project$Lia$Markdown$Update$UpdateCode(
						author$project$Lia$Markdown$Code$Update$handle(event)),
					section);
			case 'quiz':
				return A2(
					author$project$Lia$Markdown$Update$update,
					author$project$Lia$Markdown$Update$UpdateQuiz(
						author$project$Lia$Markdown$Quiz$Update$handle(event)),
					section);
			case 'survey':
				return A2(
					author$project$Lia$Markdown$Update$update,
					author$project$Lia$Markdown$Update$UpdateSurvey(
						author$project$Lia$Markdown$Survey$Update$handle(event)),
					section);
			default:
				return _Utils_Tuple3(section, elm$core$Platform$Cmd$none, _List_Nil);
		}
	});
var author$project$Lia$Markdown$Effect$Update$Init = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Effect$Update$init = function (run_all_javascript) {
	return author$project$Lia$Markdown$Effect$Update$Init(run_all_javascript);
};
var author$project$Lia$Markdown$Update$initEffect = F2(
	function (run_all_javascript, sound) {
		return author$project$Lia$Markdown$Update$update(
			A2(
				author$project$Lia$Markdown$Update$UpdateEffect,
				sound,
				author$project$Lia$Markdown$Effect$Update$init(run_all_javascript)));
	});
var author$project$Lia$Markdown$Effect$Update$Next = {$: 1};
var author$project$Lia$Markdown$Effect$Update$next = author$project$Lia$Markdown$Effect$Update$Next;
var author$project$Lia$Markdown$Update$nextEffect = function (sound) {
	return author$project$Lia$Markdown$Update$update(
		A2(author$project$Lia$Markdown$Update$UpdateEffect, sound, author$project$Lia$Markdown$Effect$Update$next));
};
var author$project$Lia$Markdown$Effect$Update$Previous = {$: 2};
var author$project$Lia$Markdown$Effect$Update$previous = author$project$Lia$Markdown$Effect$Update$Previous;
var author$project$Lia$Markdown$Update$previousEffect = function (sound) {
	return author$project$Lia$Markdown$Update$update(
		A2(author$project$Lia$Markdown$Update$UpdateEffect, sound, author$project$Lia$Markdown$Effect$Update$previous));
};
var author$project$Lia$Settings$Update$Handle = function (a) {
	return {$: 7, a: a};
};
var author$project$Lia$Settings$Update$handle = author$project$Lia$Settings$Update$Handle;
var author$project$Lia$Settings$Update$load = F2(
	function (model, json) {
		return A2(
			elm$core$Result$withDefault,
			model,
			A2(author$project$Lia$Settings$Json$toModel, model, json));
	});
var author$project$Lia$Settings$Json$fromMode = function (mode) {
	return elm$json$Json$Encode$string(
		function () {
			switch (mode) {
				case 2:
					return 'Textbook';
				case 1:
					return 'Presentation';
				default:
					return 'Slides';
			}
		}());
};
var author$project$Lia$Settings$Json$fromModel = function (model) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'table_of_contents',
				elm$json$Json$Encode$bool(model.c9)),
				_Utils_Tuple2(
				'mode',
				author$project$Lia$Settings$Json$fromMode(model.eA)),
				_Utils_Tuple2(
				'theme',
				elm$json$Json$Encode$string(model.dc)),
				_Utils_Tuple2(
				'light',
				elm$json$Json$Encode$bool(model.co)),
				_Utils_Tuple2(
				'editor',
				elm$json$Json$Encode$string(model.bY)),
				_Utils_Tuple2(
				'font_size',
				elm$json$Json$Encode$int(model.b3)),
				_Utils_Tuple2(
				'sound',
				elm$json$Json$Encode$bool(model.c0)),
				_Utils_Tuple2(
				'lang',
				elm$json$Json$Encode$string(model.eq))
			]));
};
var author$project$Lia$Settings$Update$log = function (model) {
	return _Utils_Tuple2(
		model,
		_List_fromArray(
			[
				A3(
				author$project$Port$Event$Event,
				'settings',
				-1,
				author$project$Lia$Settings$Json$fromModel(model))
			]));
};
var author$project$Lia$Settings$Update$no_log = function (model) {
	return _Utils_Tuple2(model, _List_Nil);
};
var author$project$Lia$Settings$Update$toggle = F2(
	function (toggle_button, buttons) {
		var new_buttons = author$project$Lia$Settings$Model$init_buttons;
		switch (toggle_button) {
			case 0:
				return _Utils_update(
					new_buttons,
					{ai: !buttons.ai});
			case 1:
				return _Utils_update(
					new_buttons,
					{fj: !buttons.fj});
			case 2:
				return _Utils_update(
					new_buttons,
					{eh: !buttons.eh});
			default:
				return _Utils_update(
					new_buttons,
					{e1: !buttons.e1});
		}
	});
var author$project$Port$TTS$Start = {$: 0};
var author$project$Port$TTS$Error = function (a) {
	return {$: 2, a: a};
};
var author$project$Port$TTS$Stop = {$: 1};
var author$project$Port$TTS$decode = function (json) {
	var _n0 = A2(elm$json$Json$Decode$decodeValue, elm$json$Json$Decode$string, json);
	if (!_n0.$) {
		switch (_n0.a) {
			case 'start':
				return author$project$Port$TTS$Start;
			case 'stop':
				return author$project$Port$TTS$Stop;
			default:
				var msg = _n0.a;
				return author$project$Port$TTS$Error(msg);
		}
	} else {
		var msg = _n0.a;
		return author$project$Port$TTS$Error(
			elm$json$Json$Decode$errorToString(msg));
	}
};
var author$project$Port$TTS$event = function (on) {
	return A3(
		author$project$Port$Event$Event,
		'effect',
		-1,
		author$project$Port$Event$encode(
			A3(
				author$project$Port$Event$Event,
				'speak',
				-1,
				elm$json$Json$Encode$string(
					on ? 'repeat' : 'cancel'))));
};
var author$project$Lia$Settings$Update$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 7:
				var event = msg.a;
				return author$project$Lia$Settings$Update$no_log(
					function () {
						var _n1 = event.fi;
						switch (_n1) {
							case 'init':
								return A2(
									author$project$Lia$Settings$Update$load,
									_Utils_update(
										model,
										{cg: true}),
									event.ey);
							case 'speak':
								return _Utils_update(
									model,
									{
										c3: _Utils_eq(
											author$project$Port$TTS$decode(event.ey),
											author$project$Port$TTS$Start)
									});
							default:
								return model;
						}
					}());
			case 0:
				switch (msg.a.$) {
					case 0:
						var _n2 = msg.a;
						return author$project$Lia$Settings$Update$log(
							_Utils_update(
								model,
								{bK: author$project$Lia$Settings$Model$init_buttons, c9: !model.c9}));
					case 1:
						var _n3 = msg.a;
						var _n4 = author$project$Lia$Settings$Update$log(
							_Utils_update(
								model,
								{c0: !model.c0}));
						var new_model = _n4.a;
						var events = _n4.b;
						return _Utils_Tuple2(
							new_model,
							A2(
								elm$core$List$cons,
								author$project$Port$TTS$event(new_model.c0),
								events));
					case 2:
						var _n5 = msg.a;
						return author$project$Lia$Settings$Update$log(
							_Utils_update(
								model,
								{co: !model.co}));
					default:
						var button = msg.a.a;
						return author$project$Lia$Settings$Update$no_log(
							_Utils_update(
								model,
								{
									bK: A2(author$project$Lia$Settings$Update$toggle, button, model.bK)
								}));
				}
			case 5:
				var _n6 = model.eA;
				switch (_n6) {
					case 1:
						return author$project$Lia$Settings$Update$log(
							_Utils_update(
								model,
								{eA: 0}));
					case 0:
						var _n7 = author$project$Lia$Settings$Update$log(
							_Utils_update(
								model,
								{eA: 2, c0: false}));
						var new_model = _n7.a;
						var events = _n7.b;
						return _Utils_Tuple2(
							new_model,
							A2(
								elm$core$List$cons,
								author$project$Port$TTS$event(new_model.c0),
								events));
					default:
						var _n8 = author$project$Lia$Settings$Update$log(
							_Utils_update(
								model,
								{eA: 1, c0: true}));
						var new_model = _n8.a;
						var events = _n8.b;
						return _Utils_Tuple2(
							new_model,
							A2(
								elm$core$List$cons,
								author$project$Port$TTS$event(new_model.c0),
								events));
				}
			case 1:
				var theme = msg.a;
				return author$project$Lia$Settings$Update$log(
					_Utils_update(
						model,
						{dc: theme}));
			case 2:
				var theme = msg.a;
				return author$project$Lia$Settings$Update$log(
					_Utils_update(
						model,
						{bY: theme}));
			case 4:
				var inc = msg.a;
				return author$project$Lia$Settings$Update$log(
					_Utils_update(
						model,
						{
							b3: inc ? (model.b3 + 10) : ((model.b3 <= 10) ? model.b3 : (model.b3 - 10))
						}));
			case 3:
				var lang = msg.a;
				return author$project$Lia$Settings$Update$log(
					_Utils_update(
						model,
						{eq: lang}));
			default:
				return _Utils_Tuple2(
					model,
					_List_fromArray(
						[
							A3(author$project$Port$Event$Event, 'reset', -1, elm$json$Json$Encode$null)
						]));
		}
	});
var author$project$Lia$Update$InitSection = {$: 1};
var author$project$Lia$Update$UpdateSettings = function (a) {
	return {$: 5, a: a};
};
var author$project$Lia$Update$event2js = _Platform_outgoingPort(
	'event2js',
	function ($) {
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'message',
					elm$core$Basics$identity($.ey)),
					_Utils_Tuple2(
					'section',
					elm$json$Json$Encode$int($.cV)),
					_Utils_Tuple2(
					'topic',
					elm$json$Json$Encode$string($.fi))
				]));
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var author$project$Lia$Markdown$Chart$Parser$magicMerge = F2(
	function (left, right) {
		return A6(
			elm$core$Dict$merge,
			elm$core$Dict$insert,
			F4(
				function (key, l, r, dict) {
					return A3(
						elm$core$Dict$insert,
						key,
						_Utils_ap(l, r),
						dict);
				}),
			elm$core$Dict$insert,
			left,
			right,
			elm$core$Dict$empty);
	});
var andre_dietrich$parser_combinators$Combine$Num$float = A2(
	andre_dietrich$parser_combinators$Combine$onerror,
	'expected a float',
	A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		andre_dietrich$parser_combinators$Combine$Num$unwrap,
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			elm$core$String$toFloat,
			andre_dietrich$parser_combinators$Combine$regex('-?(?:0|[1-9]\\d*)\\.\\d+'))));
var author$project$Lia$Markdown$Chart$Parser$number = A2(
	andre_dietrich$parser_combinators$Combine$or,
	andre_dietrich$parser_combinators$Combine$Num$float,
	A2(
		andre_dietrich$parser_combinators$Combine$map,
		elm$core$Basics$toFloat,
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			A2(
				andre_dietrich$parser_combinators$Combine$optional,
				'.',
				andre_dietrich$parser_combinators$Combine$string('.')),
			andre_dietrich$parser_combinators$Combine$Num$int)));
var elm$core$Set$Set_elm_builtin = elm$core$Basics$identity;
var elm$core$Set$empty = elm$core$Dict$empty;
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0;
		return A3(elm$core$Dict$insert, key, 0, dict);
	});
var elm$core$Set$fromList = function (list) {
	return A3(elm$core$List$foldl, elm$core$Set$insert, elm$core$Set$empty, list);
};
var elm$core$Set$remove = F2(
	function (key, _n0) {
		var dict = _n0;
		return A2(elm$core$Dict$remove, key, dict);
	});
var author$project$Lia$Markdown$Chart$Parser$row = function () {
	var indexes = F2(
		function (y_label, str) {
			return _Utils_Tuple2(
				function (w) {
					return (w === '') ? ' ' : w;
				}(
					elm$core$String$trim(y_label)),
				elm$core$Dict$fromList(
					A2(
						elm$core$List$map,
						function (c) {
							return _Utils_Tuple2(
								c,
								A2(
									elm$core$String$indexes,
									elm$core$String$fromChar(c),
									str));
						},
						elm$core$Set$toList(
							A2(
								elm$core$Set$remove,
								' ',
								elm$core$Set$fromList(
									elm$core$String$toList(str)))))));
		});
	return A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\n'),
			andre_dietrich$parser_combinators$Combine$regex('[ \\*a-zA-Z\\+#]*')),
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			indexes,
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string('|'),
				andre_dietrich$parser_combinators$Combine$regex('[^\n|]*'))));
}();
var author$project$Lia$Markdown$Chart$Parser$segmentation = F3(
	function (elements, i0, i1) {
		return _Utils_Tuple2(i0, (i1 - i0) / elements);
	});
var author$project$Lia$Markdown$Chart$Parser$unique = F2(
	function (start, list) {
		unique:
		while (true) {
			var _n0 = _Utils_Tuple2(list, start);
			if (_n0.a.b) {
				if (_n0.b.$ === 1) {
					var _n1 = _n0.a;
					var x = _n1.a;
					var xs = _n1.b;
					var _n2 = _n0.b;
					var $temp$start = elm$core$Maybe$Just(x),
						$temp$list = xs;
					start = $temp$start;
					list = $temp$list;
					continue unique;
				} else {
					var _n3 = _n0.a;
					var x = _n3.a;
					var xs = _n3.b;
					var s = _n0.b.a;
					if (_Utils_eq(x, s)) {
						return false;
					} else {
						var $temp$start = elm$core$Maybe$Just(x),
							$temp$list = xs;
						start = $temp$start;
						list = $temp$list;
						continue unique;
					}
				}
			} else {
				return true;
			}
		}
	});
var author$project$Lia$Markdown$Chart$Parser$x_axis = A2(
	andre_dietrich$parser_combinators$Combine$andMap,
	A2(
		andre_dietrich$parser_combinators$Combine$optional,
		1.0,
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\n'),
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Markdown$Chart$Parser$number,
				andre_dietrich$parser_combinators$Combine$regex('[\t ]*')))),
	A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		A2(
			andre_dietrich$parser_combinators$Combine$optional,
			'',
			andre_dietrich$parser_combinators$Combine$regex('[a-zA-Z_ .\\\\()\\-]+')),
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			A2(andre_dietrich$parser_combinators$Combine$optional, 0.0, author$project$Lia$Markdown$Chart$Parser$number),
			A2(
				andre_dietrich$parser_combinators$Combine$map,
				F4(
					function (e, x0, x_label, x1) {
						return _Utils_Tuple2(
							elm$core$String$trim(x_label),
							A3(
								author$project$Lia$Markdown$Chart$Parser$segmentation,
								elm$core$String$length(e),
								x0,
								x1));
					}),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\n[\t ]*'),
					A2(
						andre_dietrich$parser_combinators$Combine$keep,
						andre_dietrich$parser_combinators$Combine$regex('\\-+'),
						andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\+')))))));
var author$project$Lia$Markdown$Chart$Types$Chart = F4(
	function (title, y_label, x_label, diagrams) {
		return {dP: diagrams, dd: title, fs: x_label, fu: y_label};
	});
var author$project$Lia$Markdown$Chart$Types$Dots = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Chart$Types$Line = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Chart$Types$Point = F2(
	function (x, y) {
		return {dn: x, ft: y};
	});
var elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_n0, _n1) {
			var x = _n0.a;
			var y = _n0.b;
			var xs = _n1.a;
			var ys = _n1.b;
			return _Utils_Tuple2(
				A2(elm$core$List$cons, x, xs),
				A2(elm$core$List$cons, y, ys));
		});
	return A3(
		elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var author$project$Lia$Markdown$Chart$Parser$parse = function () {
	var chart = F5(
		function (title, y_max, rows, y_min, _n6) {
			var x_label = _n6.a;
			var _n7 = _n6.b;
			var x0 = _n7.a;
			var x_segment = _n7.b;
			var _n0 = A3(
				author$project$Lia$Markdown$Chart$Parser$segmentation,
				elm$core$List$length(rows),
				y_min,
				y_max);
			var y0 = _n0.a;
			var y_segment = _n0.b;
			var _n1 = elm$core$List$unzip(rows);
			var y_label = _n1.a;
			var data = _n1.b;
			return A4(
				author$project$Lia$Markdown$Chart$Types$Chart,
				title,
				elm$core$String$trim(
					elm$core$String$concat(y_label)),
				x_label,
				A2(
					elm$core$Dict$map,
					F2(
						function (_n5, v) {
							return A2(
								author$project$Lia$Markdown$Chart$Parser$unique,
								elm$core$Maybe$Nothing,
								A2(
									elm$core$List$map,
									function ($) {
										return $.dn;
									},
									v)) ? author$project$Lia$Markdown$Chart$Types$Line(v) : author$project$Lia$Markdown$Chart$Types$Dots(v);
						}),
					A2(
						elm$core$Dict$map,
						F2(
							function (_n4, v) {
								return A2(
									elm$core$List$sortBy,
									function ($) {
										return $.dn;
									},
									v);
							}),
						A3(
							elm$core$List$foldr,
							author$project$Lia$Markdown$Chart$Parser$magicMerge,
							elm$core$Dict$empty,
							A2(
								elm$core$List$map,
								function (_n2) {
									var y = _n2.a;
									var l = _n2.b;
									return A2(
										elm$core$Dict$map,
										F2(
											function (_n3, xs) {
												return A2(
													elm$core$List$map,
													function (x) {
														return A2(author$project$Lia$Markdown$Chart$Types$Point, (x * x_segment) + x0, (y * y_segment) + y0);
													},
													xs);
											}),
										l);
								},
								A2(
									elm$core$List$indexedMap,
									elm$core$Tuple$pair,
									elm$core$List$reverse(data)))))));
		});
	return A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		author$project$Lia$Markdown$Chart$Parser$x_axis,
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			A2(
				andre_dietrich$parser_combinators$Combine$optional,
				0.0,
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					author$project$Lia$Markdown$Chart$Parser$number,
					andre_dietrich$parser_combinators$Combine$regex('[\t ]*'))),
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				andre_dietrich$parser_combinators$Combine$many1(author$project$Lia$Markdown$Chart$Parser$row),
				A2(
					andre_dietrich$parser_combinators$Combine$andMap,
					A2(
						andre_dietrich$parser_combinators$Combine$optional,
						1.0,
						A2(
							andre_dietrich$parser_combinators$Combine$keep,
							author$project$Lia$Markdown$Chart$Parser$number,
							andre_dietrich$parser_combinators$Combine$regex('[\t ]*'))),
					A2(
						andre_dietrich$parser_combinators$Combine$map,
						chart,
						A2(
							andre_dietrich$parser_combinators$Combine$optional,
							'',
							andre_dietrich$parser_combinators$Combine$regex('[\t ]*[a-zA-Z0-9 .\\\\()\\-]+\\n')))))));
}();
var elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3(elm$core$String$slice, 0, -n, string);
	});
var author$project$Lia$Markdown$Code$Parser$code_body = function (len) {
	var control_frame = '`{' + (elm$core$String$fromInt(len) + '}');
	return A2(
		andre_dietrich$parser_combinators$Combine$map,
		A2(
			elm$core$Basics$composeR,
			elm$core$String$concat,
			elm$core$String$dropRight(1)),
		A2(
			andre_dietrich$parser_combinators$Combine$manyTill,
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				andre_dietrich$parser_combinators$Combine$regex('(?:.(?!' + (control_frame + '))*\\n')),
				andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation)),
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				andre_dietrich$parser_combinators$Combine$regex(control_frame),
				author$project$Lia$Parser$Context$indentation)));
};
var author$project$Lia$Markdown$Code$Parser$header = A2(
	andre_dietrich$parser_combinators$Combine$map,
	elm$core$String$toLower,
	A2(
		andre_dietrich$parser_combinators$Combine$keep,
		andre_dietrich$parser_combinators$Combine$regex('\\w*'),
		author$project$Lia$Parser$Helper$spaces));
var author$project$Lia$Markdown$Code$Parser$title = A2(
	andre_dietrich$parser_combinators$Combine$ignore,
	author$project$Lia$Parser$Helper$newline,
	A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		andre_dietrich$parser_combinators$Combine$regex('.*'),
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			elm$core$Tuple$pair,
			A2(
				andre_dietrich$parser_combinators$Combine$optional,
				true,
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$choice(
						_List_fromArray(
							[
								A2(
								andre_dietrich$parser_combinators$Combine$onsuccess,
								true,
								andre_dietrich$parser_combinators$Combine$string('+')),
								A2(
								andre_dietrich$parser_combinators$Combine$onsuccess,
								false,
								andre_dietrich$parser_combinators$Combine$string('-'))
							])),
					author$project$Lia$Parser$Helper$spaces)))));
var author$project$Lia$Markdown$Code$Types$Snippet = F3(
	function (lang, name, code) {
		return {W: code, eq: lang, eC: name};
	});
var author$project$Lia$Markdown$Code$Parser$listing = function () {
	var body = function (len) {
		return A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			author$project$Lia$Markdown$Code$Parser$code_body(len),
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				author$project$Lia$Markdown$Code$Parser$title,
				A2(
					andre_dietrich$parser_combinators$Combine$map,
					F3(
						function (h, _n0, c) {
							var v = _n0.a;
							var t = _n0.b;
							return _Utils_Tuple2(
								A3(
									author$project$Lia$Markdown$Code$Types$Snippet,
									h,
									elm$core$String$trim(t),
									c),
								v);
						}),
					author$project$Lia$Markdown$Code$Parser$header)));
	};
	return A2(andre_dietrich$parser_combinators$Combine$andThen, body, author$project$Lia$Parser$Helper$c_frame);
}();
var author$project$Lia$Markdown$Code$Types$Evaluate = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Code$Types$hash = function (file) {
	return _Utils_Tuple2(
		truqu$elm_md5$MD5$hex(file.W),
		file.W);
};
var author$project$Lia$Markdown$Code$Types$toFile = function (_n0) {
	var lang = _n0.a.eq;
	var name = _n0.a.eC;
	var code = _n0.a.W;
	var visible = _n0.b;
	return A5(author$project$Lia$Markdown$Code$Types$File, lang, name, code, visible, false);
};
var author$project$Lia$Markdown$Code$Types$initProject = F3(
	function (array, comment, output) {
		var files = A2(elm$core$Array$map, author$project$Lia$Markdown$Code$Types$toFile, array);
		var repository = elm$core$Array$toList(
			A2(elm$core$Array$map, author$project$Lia$Markdown$Code$Types$hash, files));
		return {
			dJ: false,
			dW: comment,
			a$: files,
			b2: -1,
			a9: output,
			eY: elm$core$Dict$fromList(repository),
			cP: false,
			db: elm$core$Maybe$Nothing,
			fn: elm$core$Array$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						A2(elm$core$List$map, elm$core$Tuple$first, repository),
						author$project$Lia$Markdown$Code$Log$empty)
					])),
			aV: 0
		};
	});
var elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var elm$core$Elm$JsArray$slice = _JsArray_slice;
var elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = elm$core$Elm$JsArray$length(tail);
		var notAppended = (elm$core$Array$branchFactor - elm$core$Elm$JsArray$length(builder.l)) - tailLen;
		var appended = A3(elm$core$Elm$JsArray$appendN, elm$core$Array$branchFactor, builder.l, tail);
		return (notAppended < 0) ? {
			m: A2(
				elm$core$List$cons,
				elm$core$Array$Leaf(appended),
				builder.m),
			k: builder.k + 1,
			l: A3(elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			m: A2(
				elm$core$List$cons,
				elm$core$Array$Leaf(appended),
				builder.m),
			k: builder.k + 1,
			l: elm$core$Elm$JsArray$empty
		} : {m: builder.m, k: builder.k, l: appended});
	});
var elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					elm$core$Array$Array_elm_builtin,
					len - from,
					elm$core$Array$shiftStep,
					elm$core$Elm$JsArray$empty,
					A3(
						elm$core$Elm$JsArray$slice,
						from - elm$core$Array$tailIndex(len),
						elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (!node.$) {
							var subTree = node.a;
							return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2(elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2(elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * elm$core$Array$branchFactor);
					var initialBuilder = {
						m: _List_Nil,
						k: 0,
						l: A3(
							elm$core$Elm$JsArray$slice,
							firstSlice,
							elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						elm$core$Array$builderToArray,
						true,
						A3(elm$core$List$foldl, elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = elm$core$Array$bitMask & (treeEnd >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_n0.$) {
				var sub = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _n0.a;
				return A3(elm$core$Elm$JsArray$slice, 0, elm$core$Array$bitMask & end, values);
			}
		}
	});
var elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (!_n0.$) {
					var sub = _n0.a;
					var $temp$oldShift = oldShift - elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = elm$core$Array$bitMask & (endIdx >>> shift);
		var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (!_n0.$) {
			var sub = _n0.a;
			var newSub = A3(elm$core$Array$sliceTree, shift - elm$core$Array$shiftStep, endIdx, sub);
			return (!elm$core$Elm$JsArray$length(newSub)) ? A3(elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				elm$core$Array$SubTree(newSub),
				A3(elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3(elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3(elm$core$Elm$JsArray$slice, 0, elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = elm$core$Array$tailIndex(end);
				var depth = elm$core$Basics$floor(
					A2(
						elm$core$Basics$logBase,
						elm$core$Array$branchFactor,
						A2(elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep);
				return A4(
					elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3(elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4(elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var elm$core$Array$translateIndex = F2(
	function (index, _n0) {
		var len = _n0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2(elm$core$Array$translateIndex, to, array);
		var correctFrom = A2(elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? elm$core$Array$empty : A2(
			elm$core$Array$sliceLeft,
			correctFrom,
			A2(elm$core$Array$sliceRight, correctTo, array));
	});
var author$project$Lia$Markdown$Code$Parser$evaluate = F2(
	function (lang_title_code, comment) {
		var ar = elm$core$Array$fromList(lang_title_code);
		var _n0 = function () {
			var _n1 = A2(
				elm$core$Array$get,
				elm$core$Array$length(ar) - 1,
				ar);
			if (!_n1.$) {
				var _n2 = _n1.a;
				var snippet = _n2.a;
				var vis = _n2.b;
				return (elm$core$String$toLower(snippet.eC) === '@output') ? _Utils_Tuple2(
					A2(
						author$project$Lia$Markdown$Code$Log$add_Eval,
						A3(author$project$Port$Eval$Eval, vis, snippet.W, _List_Nil),
						author$project$Lia$Markdown$Code$Log$empty),
					A3(elm$core$Array$slice, 0, -1, ar)) : _Utils_Tuple2(author$project$Lia$Markdown$Code$Log$empty, ar);
			} else {
				return _Utils_Tuple2(author$project$Lia$Markdown$Code$Log$empty, ar);
			}
		}();
		var output = _n0.a;
		var array = _n0.b;
		var add_state = function (s) {
			return _Utils_update(
				s,
				{
					aW: A2(
						elm$core$Array$push,
						A3(author$project$Lia$Markdown$Code$Types$initProject, array, comment, output),
						s.aW)
				});
		};
		return A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$modifyState(add_state),
			andre_dietrich$parser_combinators$Combine$withState(
				function (s) {
					return andre_dietrich$parser_combinators$Combine$succeed(
						author$project$Lia$Markdown$Code$Types$Evaluate(
							elm$core$Array$length(s.aW)));
				}));
	});
var author$project$Lia$Markdown$Code$Types$Highlight = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Code$Parser$result = function (_n0) {
	var lst = _n0.a;
	var script = _n0.b;
	if (!script.$) {
		var str = script.a;
		return A2(author$project$Lia$Markdown$Code$Parser$evaluate, lst, str);
	} else {
		return andre_dietrich$parser_combinators$Combine$succeed(
			author$project$Lia$Markdown$Code$Types$Highlight(
				A2(elm$core$List$map, elm$core$Tuple$first, lst)));
	}
};
var author$project$Lia$Markdown$Code$Parser$parse = A2(
	andre_dietrich$parser_combinators$Combine$andThen,
	author$project$Lia$Markdown$Code$Parser$result,
	A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		andre_dietrich$parser_combinators$Combine$maybe(
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Markdown$Inline$Parser$javascript,
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					author$project$Lia$Markdown$Macro$Parser$macro,
					A2(
						andre_dietrich$parser_combinators$Combine$ignore,
						andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation),
						andre_dietrich$parser_combinators$Combine$regex('[ \n]?'))))),
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			elm$core$Tuple$pair,
			A2(andre_dietrich$parser_combinators$Combine$sepBy1, author$project$Lia$Parser$Helper$newline, author$project$Lia$Markdown$Code$Parser$listing))));
var author$project$Lia$Parser$Helper$newlines1 = andre_dietrich$parser_combinators$Combine$regex('\\n+');
var author$project$Lia$Markdown$Effect$Parser$comment = function (paragraph) {
	return A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Markdown$Effect$Parser$reset_effect_number,
		A2(
			andre_dietrich$parser_combinators$Combine$andThen,
			author$project$Lia$Markdown$Effect$Parser$add_comment(true),
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				A2(andre_dietrich$parser_combinators$Combine$keep, paragraph, author$project$Lia$Parser$Context$indentation),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					andre_dietrich$parser_combinators$Combine$maybe(
						A2(andre_dietrich$parser_combinators$Combine$ignore, author$project$Lia$Parser$Context$indentation_skip, author$project$Lia$Parser$Helper$newlines1)),
					A2(
						andre_dietrich$parser_combinators$Combine$ignore,
						andre_dietrich$parser_combinators$Combine$regex('}}--[\t ]*'),
						A2(
							andre_dietrich$parser_combinators$Combine$andMap,
							andre_dietrich$parser_combinators$Combine$maybe(
								A2(
									andre_dietrich$parser_combinators$Combine$keep,
									andre_dietrich$parser_combinators$Combine$regex('[A-Za-z0-9 ]+'),
									A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Macro$Parser$macro, author$project$Lia$Parser$Helper$spaces1))),
							A2(
								andre_dietrich$parser_combinators$Combine$map,
								F3(
									function (a, b, c) {
										return _Utils_Tuple3(a, b, c);
									}),
								A2(
									andre_dietrich$parser_combinators$Combine$keep,
									author$project$Lia$Markdown$Effect$Parser$effect_number,
									andre_dietrich$parser_combinators$Combine$regex('[\t ]*--{{')))))))));
};
var author$project$Lia$Parser$Helper$newlines = andre_dietrich$parser_combinators$Combine$regex('\\n*');
var author$project$Lia$Markdown$Effect$Parser$multi = function (blocks) {
	return A2(
		andre_dietrich$parser_combinators$Combine$keep,
		A2(
			andre_dietrich$parser_combinators$Combine$manyTill,
			A2(andre_dietrich$parser_combinators$Combine$ignore, author$project$Lia$Parser$Helper$newlines, blocks),
			andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\*{3,}')),
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\*{3,}\\n+'),
			author$project$Lia$Parser$Context$indentation));
};
var author$project$Lia$Markdown$Effect$Parser$single = function (blocks) {
	return A2(andre_dietrich$parser_combinators$Combine$map, elm$core$List$singleton, blocks);
};
var author$project$Lia$Markdown$Effect$Parser$markdown = function (blocks) {
	return A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Markdown$Effect$Parser$reset_effect_number,
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			A2(
				andre_dietrich$parser_combinators$Combine$or,
				author$project$Lia$Markdown$Effect$Parser$multi(blocks),
				author$project$Lia$Markdown$Effect$Parser$single(blocks)),
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				A2(
					andre_dietrich$parser_combinators$Combine$or,
					andre_dietrich$parser_combinators$Combine$skip(
						andre_dietrich$parser_combinators$Combine$string('\n')),
					author$project$Lia$Parser$Context$indentation_skip),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					andre_dietrich$parser_combinators$Combine$regex('}}[\t ]*'),
					A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						A2(
							andre_dietrich$parser_combinators$Combine$optional,
							99999,
							A2(
								andre_dietrich$parser_combinators$Combine$keep,
								andre_dietrich$parser_combinators$Combine$Num$int,
								andre_dietrich$parser_combinators$Combine$regex('[\t ]*-[\t ]*'))),
						A2(
							andre_dietrich$parser_combinators$Combine$map,
							F3(
								function (a, b, c) {
									return _Utils_Tuple3(a, b, c);
								}),
							A2(
								andre_dietrich$parser_combinators$Combine$keep,
								author$project$Lia$Markdown$Effect$Parser$effect_number,
								andre_dietrich$parser_combinators$Combine$regex('[\t ]*{{'))))))));
};
var andre_dietrich$parser_combinators$Combine$sepEndBy1 = F2(
	function (sep, p) {
		return A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$maybe(sep),
			A2(andre_dietrich$parser_combinators$Combine$sepBy1, sep, p));
	});
var andre_dietrich$parser_combinators$Combine$sepEndBy = F2(
	function (sep, p) {
		return A2(
			andre_dietrich$parser_combinators$Combine$or,
			A2(andre_dietrich$parser_combinators$Combine$sepEndBy1, sep, p),
			andre_dietrich$parser_combinators$Combine$succeed(_List_Nil));
	});
var author$project$Lia$Markdown$Parser$md_annotations = andre_dietrich$parser_combinators$Combine$maybe(
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$maybe(
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Context$indentation,
				andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\n'))),
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			elm$core$Dict$fromList,
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				author$project$Lia$Markdown$Inline$Parser$comment(author$project$Lia$Markdown$Inline$Parser$attribute),
				A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Macro$Parser$macro, author$project$Lia$Parser$Helper$spaces)))));
var author$project$Lia$Markdown$Inline$Parser$append_space = function (list) {
	return A2(
		elm$core$List$append,
		list,
		_List_fromArray(
			[
				A2(author$project$Lia$Markdown$Inline$Types$Chars, ' ', elm$core$Maybe$Nothing)
			]));
};
var author$project$Lia$Markdown$Inline$Parser$line = A2(
	andre_dietrich$parser_combinators$Combine$map,
	A2(elm$core$Basics$composeR, author$project$Lia$Markdown$Inline$Parser$append_space, author$project$Lia$Markdown$Inline$Parser$combine),
	andre_dietrich$parser_combinators$Combine$many1(author$project$Lia$Markdown$Inline$Parser$inlines));
var author$project$Lia$Markdown$Parser$table_row = A2(
	andre_dietrich$parser_combinators$Combine$keep,
	A2(
		andre_dietrich$parser_combinators$Combine$manyTill,
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			author$project$Lia$Markdown$Inline$Parser$line,
			andre_dietrich$parser_combinators$Combine$string('|')),
		andre_dietrich$parser_combinators$Combine$regex('\\|[\t ]*\\n')),
	author$project$Lia$Parser$Context$indentation);
var author$project$Lia$Markdown$Types$Table = F4(
	function (a, b, c, d) {
		return {$: 5, a: a, b: b, c: c, d: d};
	});
var author$project$Lia$Markdown$Parser$formated_table = function () {
	var format = A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\n'),
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			A2(
				andre_dietrich$parser_combinators$Combine$sepEndBy,
				andre_dietrich$parser_combinators$Combine$string('|'),
				andre_dietrich$parser_combinators$Combine$choice(
					_List_fromArray(
						[
							A2(
							andre_dietrich$parser_combinators$Combine$onsuccess,
							'center',
							andre_dietrich$parser_combinators$Combine$regex('[\t ]*:-{3,}:[\t ]*')),
							A2(
							andre_dietrich$parser_combinators$Combine$onsuccess,
							'left',
							andre_dietrich$parser_combinators$Combine$regex('[\t ]*:-{3,}[\t ]*')),
							A2(
							andre_dietrich$parser_combinators$Combine$onsuccess,
							'right',
							andre_dietrich$parser_combinators$Combine$regex('[\t ]*-{3,}:[\t ]*')),
							A2(
							andre_dietrich$parser_combinators$Combine$onsuccess,
							'left',
							andre_dietrich$parser_combinators$Combine$regex('[\t ]*-{3,}[\t ]*'))
						]))),
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string('|'),
				author$project$Lia$Parser$Context$indentation)));
	return A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		andre_dietrich$parser_combinators$Combine$many(author$project$Lia$Markdown$Parser$table_row),
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			format,
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				author$project$Lia$Markdown$Parser$table_row,
				A2(
					andre_dietrich$parser_combinators$Combine$map,
					author$project$Lia$Markdown$Types$Table,
					A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Parser$md_annotations, author$project$Lia$Parser$Context$indentation_skip)))));
}();
var author$project$Lia$Markdown$Types$HLine = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Parser$horizontal_line = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Types$HLine,
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$regex('-{3,}'),
		author$project$Lia$Markdown$Parser$md_annotations));
var author$project$Lia$Markdown$Parser$paragraph = A2(
	andre_dietrich$parser_combinators$Combine$map,
	A2(elm$core$Basics$composeR, elm$core$List$concat, author$project$Lia$Markdown$Inline$Parser$combine),
	A2(
		andre_dietrich$parser_combinators$Combine$keep,
		andre_dietrich$parser_combinators$Combine$many1(
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Helper$newline,
				A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Inline$Parser$line, author$project$Lia$Parser$Context$indentation))),
		author$project$Lia$Parser$Context$indentation_skip));
var author$project$Lia$Markdown$Parser$simple_table = A2(
	andre_dietrich$parser_combinators$Combine$andMap,
	andre_dietrich$parser_combinators$Combine$many1(author$project$Lia$Markdown$Parser$table_row),
	A2(
		andre_dietrich$parser_combinators$Combine$map,
		F2(
			function (a, b) {
				return A4(author$project$Lia$Markdown$Types$Table, a, _List_Nil, _List_Nil, b);
			}),
		A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Parser$md_annotations, author$project$Lia$Parser$Context$indentation_skip)));
var author$project$Lia$Markdown$Parser$svgbody = function (len) {
	var control_frame = '`{' + (elm$core$String$fromInt(len) + ((len <= 8) ? '}' : ',}'));
	var ascii = (len <= 8) ? andre_dietrich$parser_combinators$Combine$regex('[\t ]*(ascii|art)[\t ]*\\n') : andre_dietrich$parser_combinators$Combine$regex('([\t ]*(ascii|art))?[\t ]*\\n');
	return A2(
		andre_dietrich$parser_combinators$Combine$keep,
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			A2(
				elm$core$Basics$composeR,
				elm$core$String$concat,
				elm$core$String$dropRight(1)),
			A2(
				andre_dietrich$parser_combinators$Combine$manyTill,
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$regex('(?:.(?!' + (control_frame + '))*\\n')),
					andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation)),
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$regex(control_frame),
					author$project$Lia$Parser$Context$indentation))),
		ascii);
};
var author$project$Lia$Markdown$Types$ASCII = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
	});
var author$project$Lia$Markdown$Parser$svgbob = A2(
	andre_dietrich$parser_combinators$Combine$andMap,
	A2(andre_dietrich$parser_combinators$Combine$andThen, author$project$Lia$Markdown$Parser$svgbody, author$project$Lia$Parser$Helper$c_frame),
	A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$ASCII, author$project$Lia$Markdown$Parser$md_annotations));
var author$project$Lia$Markdown$Effect$Model$set_annotation = F4(
	function (id1, id2, m, attr) {
		var _n0 = A2(elm$core$Dict$get, id1, m);
		if (!_n0.$) {
			var e = _n0.a;
			var _n1 = A2(elm$core$Array$get, id2, e.ad);
			if (!_n1.$) {
				var _n2 = _n1.a;
				var par = _n2.b;
				return A3(
					elm$core$Dict$insert,
					id1,
					_Utils_update(
						e,
						{
							ad: A3(
								elm$core$Array$set,
								id2,
								_Utils_Tuple2(attr, par),
								e.ad)
						}),
					m);
			} else {
				return m;
			}
		} else {
			return m;
		}
	});
var author$project$Lia$Markdown$Types$Comment = function (a) {
	return {$: 8, a: a};
};
var author$project$Lia$Markdown$Parser$to_comment = function (_n0) {
	var attr = _n0.a;
	var _n1 = _n0.b;
	var id1 = _n1.a;
	var id2 = _n1.b;
	return A2(
		andre_dietrich$parser_combinators$Combine$onsuccess,
		author$project$Lia$Markdown$Types$Comment(
			_Utils_Tuple2(id1, id2)),
		function () {
			if (!attr.$) {
				return andre_dietrich$parser_combinators$Combine$modifyState(
					function (s) {
						var e = s.M;
						return _Utils_update(
							s,
							{
								M: _Utils_update(
									e,
									{
										aG: A4(author$project$Lia$Markdown$Effect$Model$set_annotation, id1, id2, e.aG, attr)
									})
							});
					});
			} else {
				return andre_dietrich$parser_combinators$Combine$succeed(0);
			}
		}());
};
var author$project$Lia$Markdown$Inline$Parser$parse_inlines = F2(
	function (state, str) {
		var _n0 = A3(
			andre_dietrich$parser_combinators$Combine$runParser,
			author$project$Lia$Markdown$Inline$Parser$line,
			state,
			A3(elm$core$String$replace, '\n', ' ', str));
		if (!_n0.$) {
			var _n1 = _n0.a;
			var rslt = _n1.c;
			return rslt;
		} else {
			return _List_Nil;
		}
	});
var elm$core$String$endsWith = _String_endsWith;
var author$project$Lia$Markdown$Quiz$Block$Parser$check = F3(
	function (state, id, str) {
		var option = elm$core$String$trim(str);
		var inlines = author$project$Lia$Markdown$Inline$Parser$parse_inlines(state);
		return (A2(elm$core$String$startsWith, '(', option) && A2(elm$core$String$endsWith, ')', option)) ? _Utils_Tuple2(
			id,
			inlines(
				elm$core$String$trim(
					A3(elm$core$String$slice, 1, -1, option)))) : _Utils_Tuple2(
			-1,
			inlines(option));
	});
var author$project$Lia$Markdown$Quiz$Block$Types$Quiz = F2(
	function (options, solution) {
		return {eR: options, c$: solution};
	});
var author$project$Lia$Markdown$Quiz$Block$Parser$toSelect = function (list) {
	return andre_dietrich$parser_combinators$Combine$succeed(
		A2(
			author$project$Lia$Markdown$Quiz$Block$Types$Quiz,
			A2(elm$core$List$map, elm$core$Tuple$second, list),
			A2(
				author$project$Lia$Markdown$Quiz$Block$Types$Select,
				false,
				A2(
					elm$core$List$map,
					elm$core$Tuple$first,
					A2(
						elm$core$List$filter,
						A2(
							elm$core$Basics$composeR,
							elm$core$Tuple$first,
							elm$core$Basics$le(0)),
						list)))));
};
var author$project$Lia$Markdown$Quiz$Block$Parser$split = F2(
	function (str, state) {
		var _n0 = A2(elm$core$String$split, '|', str);
		if (_n0.b && (!_n0.b.b)) {
			var solution = _n0.a;
			return elm$core$String$isEmpty(
				elm$core$String$trim(
					A3(elm$core$String$replace, '_', ' ', solution))) ? andre_dietrich$parser_combinators$Combine$fail('') : andre_dietrich$parser_combinators$Combine$succeed(
				A2(
					author$project$Lia$Markdown$Quiz$Block$Types$Quiz,
					_List_Nil,
					author$project$Lia$Markdown$Quiz$Block$Types$Text(solution)));
		} else {
			var options = _n0;
			return author$project$Lia$Markdown$Quiz$Block$Parser$toSelect(
				A2(
					elm$core$List$indexedMap,
					author$project$Lia$Markdown$Quiz$Block$Parser$check(state),
					options));
		}
	});
var author$project$Lia$Markdown$Quiz$Block$Parser$parse = A2(
	andre_dietrich$parser_combinators$Combine$andThen,
	andre_dietrich$parser_combinators$Combine$withState,
	A2(
		andre_dietrich$parser_combinators$Combine$map,
		author$project$Lia$Markdown$Quiz$Block$Parser$split,
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			author$project$Lia$Parser$Helper$newline,
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string(']]'),
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$regex('[^\\]]+'),
					andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\[\\['))))));
var author$project$Lia$Markdown$Quiz$Matrix$Parser$inBrackets = A2(
	andre_dietrich$parser_combinators$Combine$keep,
	A2(
		andre_dietrich$parser_combinators$Combine$manyTill,
		author$project$Lia$Markdown$Inline$Parser$inlines,
		andre_dietrich$parser_combinators$Combine$regex('[ \\t]*\\][ \\t]*')),
	andre_dietrich$parser_combinators$Combine$regex('[ \\t]*\\[[ \\t]*'));
var author$project$Lia$Markdown$Quiz$Matrix$Parser$inParenthesis = A2(
	andre_dietrich$parser_combinators$Combine$keep,
	A2(
		andre_dietrich$parser_combinators$Combine$manyTill,
		author$project$Lia$Markdown$Inline$Parser$inlines,
		andre_dietrich$parser_combinators$Combine$regex('[ \\t]*\\)[ \\t]*')),
	andre_dietrich$parser_combinators$Combine$regex('[ \\t]*\\([ \\t]*'));
var author$project$Lia$Markdown$Quiz$Matrix$Parser$options = A2(andre_dietrich$parser_combinators$Combine$or, author$project$Lia$Markdown$Quiz$Matrix$Parser$inParenthesis, author$project$Lia$Markdown$Quiz$Matrix$Parser$inBrackets);
var author$project$Lia$Markdown$Quiz$Matrix$Parser$header = A2(
	andre_dietrich$parser_combinators$Combine$ignore,
	author$project$Lia$Parser$Helper$newline,
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$string(']'),
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			andre_dietrich$parser_combinators$Combine$many1(author$project$Lia$Markdown$Quiz$Matrix$Parser$options),
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string('['),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					author$project$Lia$Parser$Helper$spaces,
					andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation))))));
var author$project$Lia$Markdown$Quiz$Matrix$Types$Quiz = F3(
	function (headers, options, solution) {
		return {d6: headers, eR: options, c$: solution};
	});
var author$project$Lia$Markdown$Quiz$Matrix$Parser$quiz = F2(
	function (main, _n0) {
		var vector = _n0.a;
		var inline = _n0.b;
		return A3(
			author$project$Lia$Markdown$Quiz$Matrix$Types$Quiz,
			main,
			inline,
			elm$core$Array$fromList(vector));
	});
var author$project$Lia$Markdown$Quiz$Vector$Parser$elements = F2(
	function (_true, _false) {
		return A2(
			andre_dietrich$parser_combinators$Combine$or,
			A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				true,
				andre_dietrich$parser_combinators$Combine$string(_true)),
			A2(
				andre_dietrich$parser_combinators$Combine$onsuccess,
				false,
				andre_dietrich$parser_combinators$Combine$string(_false)));
	});
var author$project$Lia$Markdown$Quiz$Vector$Parser$multiple = A2(author$project$Lia$Markdown$Quiz$Vector$Parser$elements, '[X]', '[ ]');
var author$project$Lia$Markdown$Quiz$Matrix$Parser$multiple = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Quiz$Vector$Types$MultipleChoice,
	andre_dietrich$parser_combinators$Combine$many1(
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			author$project$Lia$Parser$Helper$spaces,
			A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Quiz$Vector$Parser$multiple, author$project$Lia$Parser$Helper$spaces))));
var author$project$Lia$Markdown$Quiz$Vector$Parser$single = A2(author$project$Lia$Markdown$Quiz$Vector$Parser$elements, '(X)', '( )');
var author$project$Lia$Markdown$Quiz$Matrix$Parser$single = A2(
	andre_dietrich$parser_combinators$Combine$map,
	author$project$Lia$Markdown$Quiz$Vector$Types$SingleChoice,
	andre_dietrich$parser_combinators$Combine$many1(
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			author$project$Lia$Parser$Helper$spaces,
			A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Quiz$Vector$Parser$single, author$project$Lia$Parser$Helper$spaces))));
var author$project$Lia$Markdown$Quiz$Vector$Parser$choices = function (parser) {
	return A2(
		andre_dietrich$parser_combinators$Combine$map,
		elm$core$List$unzip,
		andre_dietrich$parser_combinators$Combine$many1(
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Helper$newline,
				A2(
					andre_dietrich$parser_combinators$Combine$andMap,
					author$project$Lia$Markdown$Inline$Parser$line,
					A2(
						andre_dietrich$parser_combinators$Combine$ignore,
						andre_dietrich$parser_combinators$Combine$string(']'),
						A2(
							andre_dietrich$parser_combinators$Combine$map,
							elm$core$Tuple$pair,
							A2(
								andre_dietrich$parser_combinators$Combine$keep,
								parser,
								A2(
									andre_dietrich$parser_combinators$Combine$ignore,
									andre_dietrich$parser_combinators$Combine$string('['),
									A2(
										andre_dietrich$parser_combinators$Combine$ignore,
										author$project$Lia$Parser$Helper$spaces,
										andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation))))))))));
};
var author$project$Lia$Markdown$Quiz$Matrix$Parser$rows = author$project$Lia$Markdown$Quiz$Vector$Parser$choices(
	A2(andre_dietrich$parser_combinators$Combine$or, author$project$Lia$Markdown$Quiz$Matrix$Parser$single, author$project$Lia$Markdown$Quiz$Matrix$Parser$multiple));
var author$project$Lia$Markdown$Quiz$Matrix$Parser$parse = A2(
	andre_dietrich$parser_combinators$Combine$andMap,
	author$project$Lia$Markdown$Quiz$Matrix$Parser$rows,
	A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Quiz$Matrix$Parser$quiz, author$project$Lia$Markdown$Quiz$Matrix$Parser$header));
var author$project$Lia$Markdown$Quiz$Parser$get_counter = andre_dietrich$parser_combinators$Combine$withState(
	function (s) {
		return andre_dietrich$parser_combinators$Combine$succeed(
			elm$core$Array$length(s.bi));
	});
var author$project$Lia$Markdown$Quiz$Parser$hints = andre_dietrich$parser_combinators$Combine$many(
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Parser$Helper$newline,
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			author$project$Lia$Markdown$Inline$Parser$line,
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string('[[?]]'),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					author$project$Lia$Parser$Helper$spaces,
					andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation))))));
var author$project$Lia$Markdown$Quiz$Parser$maybeJS = A2(
	andre_dietrich$parser_combinators$Combine$keep,
	andre_dietrich$parser_combinators$Combine$maybe(
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			author$project$Lia$Parser$Helper$newline,
			A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Inline$Parser$javascript, author$project$Lia$Parser$Helper$spaces))),
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation),
		author$project$Lia$Markdown$Macro$Parser$macro));
var author$project$Lia$Markdown$Quiz$Types$Quiz = F4(
	function (quiz, id, hints, javascript) {
		return {ea: hints, ec: id, aa: javascript, eU: quiz};
	});
var author$project$Lia$Markdown$Quiz$Parser$adds = function (type_) {
	return A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		author$project$Lia$Markdown$Quiz$Parser$maybeJS,
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			author$project$Lia$Markdown$Quiz$Parser$hints,
			A2(
				andre_dietrich$parser_combinators$Combine$map,
				author$project$Lia$Markdown$Quiz$Types$Quiz(type_),
				author$project$Lia$Markdown$Quiz$Parser$get_counter)));
};
var author$project$Lia$Markdown$Quiz$Parser$empty = andre_dietrich$parser_combinators$Combine$skip(
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Parser$Helper$newline,
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$string('[[!]]'),
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Helper$spaces,
				andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation)))));
var author$project$Lia$Markdown$Quiz$Block$Types$initState = function (state) {
	if (!state.$) {
		return author$project$Lia$Markdown$Quiz$Block$Types$Text('');
	} else {
		return A2(
			author$project$Lia$Markdown$Quiz$Block$Types$Select,
			false,
			_List_fromArray(
				[-1]));
	}
};
var author$project$Lia$Markdown$Quiz$Vector$Types$initState = function (state) {
	if (!state.$) {
		var list = state.a;
		return author$project$Lia$Markdown$Quiz$Vector$Types$SingleChoice(
			A2(
				elm$core$List$map,
				function (_n1) {
					return false;
				},
				list));
	} else {
		var list = state.a;
		return author$project$Lia$Markdown$Quiz$Vector$Types$MultipleChoice(
			A2(
				elm$core$List$map,
				function (_n2) {
					return false;
				},
				list));
	}
};
var author$project$Lia$Markdown$Quiz$Matrix$Types$initState = elm$core$Array$map(author$project$Lia$Markdown$Quiz$Vector$Types$initState);
var author$project$Lia$Markdown$Quiz$Types$initState = function (quiz) {
	switch (quiz.$) {
		case 0:
			return author$project$Lia$Markdown$Quiz$Types$Empty_State;
		case 1:
			var q = quiz.a;
			return author$project$Lia$Markdown$Quiz$Types$Block_State(
				author$project$Lia$Markdown$Quiz$Block$Types$initState(q.c$));
		case 2:
			var q = quiz.a;
			return author$project$Lia$Markdown$Quiz$Types$Vector_State(
				author$project$Lia$Markdown$Quiz$Vector$Types$initState(q.c$));
		default:
			var q = quiz.a;
			return author$project$Lia$Markdown$Quiz$Types$Matrix_State(
				author$project$Lia$Markdown$Quiz$Matrix$Types$initState(q.c$));
	}
};
var author$project$Lia$Markdown$Quiz$Parser$modify_State = function (q) {
	var add_state = F2(
		function (e, s) {
			return _Utils_update(
				s,
				{
					bi: A2(
						elm$core$Array$push,
						A5(author$project$Lia$Markdown$Quiz$Types$Element, 0, e, 0, 0, ''),
						s.bi)
				});
		});
	return A2(
		andre_dietrich$parser_combinators$Combine$keep,
		andre_dietrich$parser_combinators$Combine$succeed(q),
		andre_dietrich$parser_combinators$Combine$modifyState(
			add_state(
				author$project$Lia$Markdown$Quiz$Types$initState(q.eU))));
};
var author$project$Lia$Markdown$Quiz$Types$Block_Type = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Quiz$Types$Empty_Type = {$: 0};
var author$project$Lia$Markdown$Quiz$Types$Matrix_Type = function (a) {
	return {$: 3, a: a};
};
var author$project$Lia$Markdown$Quiz$Types$Vector_Type = function (a) {
	return {$: 2, a: a};
};
var author$project$Lia$Markdown$Quiz$Vector$Parser$toQuiz = F2(
	function (fn, _n0) {
		var bools = _n0.a;
		var inlines = _n0.b;
		return A2(
			author$project$Lia$Markdown$Quiz$Vector$Types$Quiz,
			inlines,
			fn(bools));
	});
var author$project$Lia$Markdown$Quiz$Vector$Parser$parse = A2(
	andre_dietrich$parser_combinators$Combine$or,
	A2(
		andre_dietrich$parser_combinators$Combine$map,
		author$project$Lia$Markdown$Quiz$Vector$Parser$toQuiz(author$project$Lia$Markdown$Quiz$Vector$Types$SingleChoice),
		author$project$Lia$Markdown$Quiz$Vector$Parser$choices(author$project$Lia$Markdown$Quiz$Vector$Parser$single)),
	A2(
		andre_dietrich$parser_combinators$Combine$map,
		author$project$Lia$Markdown$Quiz$Vector$Parser$toQuiz(author$project$Lia$Markdown$Quiz$Vector$Types$MultipleChoice),
		author$project$Lia$Markdown$Quiz$Vector$Parser$choices(author$project$Lia$Markdown$Quiz$Vector$Parser$multiple)));
var author$project$Lia$Markdown$Quiz$Parser$parse = A2(
	andre_dietrich$parser_combinators$Combine$andThen,
	author$project$Lia$Markdown$Quiz$Parser$modify_State,
	A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		author$project$Lia$Markdown$Quiz$Parser$adds,
		andre_dietrich$parser_combinators$Combine$choice(
			_List_fromArray(
				[
					A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Quiz$Types$Matrix_Type, author$project$Lia$Markdown$Quiz$Matrix$Parser$parse),
					A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Quiz$Types$Vector_Type, author$project$Lia$Markdown$Quiz$Vector$Parser$parse),
					A2(andre_dietrich$parser_combinators$Combine$onsuccess, author$project$Lia$Markdown$Quiz$Types$Empty_Type, author$project$Lia$Markdown$Quiz$Parser$empty),
					A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Quiz$Types$Block_Type, author$project$Lia$Markdown$Quiz$Block$Parser$parse)
				]))));
var author$project$Lia$Markdown$Survey$Parser$add_state = F2(
	function (state, c) {
		return _Utils_update(
			c,
			{
				bw: A2(
					elm$core$Array$push,
					_Utils_Tuple2(false, state),
					c.bw)
			});
	});
var author$project$Lia$Markdown$Survey$Parser$modify_State = function (survey_) {
	var state = function () {
		var extractor = F2(
			function (fn, v) {
				return elm$core$Dict$fromList(
					A2(elm$core$List$map, fn, v));
			});
		var _n0 = survey_.e7;
		switch (_n0.$) {
			case 0:
				return author$project$Lia$Markdown$Survey$Types$Text_State('');
			case 1:
				return A2(author$project$Lia$Markdown$Survey$Types$Select_State, false, -1);
			case 2:
				var bool = _n0.a;
				var vars = _n0.b;
				return A2(
					author$project$Lia$Markdown$Survey$Types$Vector_State,
					bool,
					A2(
						extractor,
						function (_n1) {
							var v = _n1.a;
							return _Utils_Tuple2(v, false);
						},
						vars));
			default:
				var bool = _n0.a;
				var vars = _n0.c;
				var qs = _n0.d;
				return A2(
					author$project$Lia$Markdown$Survey$Types$Matrix_State,
					bool,
					A2(
						elm$core$Array$repeat,
						elm$core$List$length(qs),
						A2(
							extractor,
							function (v) {
								return _Utils_Tuple2(v, false);
							},
							vars)));
		}
	}();
	return A2(
		andre_dietrich$parser_combinators$Combine$keep,
		andre_dietrich$parser_combinators$Combine$succeed(survey_),
		andre_dietrich$parser_combinators$Combine$modifyState(
			author$project$Lia$Markdown$Survey$Parser$add_state(state)));
};
var andre_dietrich$parser_combinators$Combine$brackets = A2(
	andre_dietrich$parser_combinators$Combine$between,
	andre_dietrich$parser_combinators$Combine$string('['),
	andre_dietrich$parser_combinators$Combine$string(']'));
var author$project$Lia$Markdown$Survey$Parser$pattern = function (p) {
	return A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		andre_dietrich$parser_combinators$Combine$regex('][\t ]*'),
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			p,
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\['),
				andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation))));
};
var author$project$Lia$Markdown$Survey$Parser$header = F2(
	function (begin, end) {
		return A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			author$project$Lia$Parser$Helper$newline,
			author$project$Lia$Markdown$Survey$Parser$pattern(
				andre_dietrich$parser_combinators$Combine$many1(
					A2(
						andre_dietrich$parser_combinators$Combine$keep,
						A2(
							andre_dietrich$parser_combinators$Combine$manyTill,
							author$project$Lia$Markdown$Inline$Parser$inlines,
							andre_dietrich$parser_combinators$Combine$string(end)),
						andre_dietrich$parser_combinators$Combine$string(begin)))));
	});
var author$project$Lia$Markdown$Survey$Parser$questions = andre_dietrich$parser_combinators$Combine$many1(
	A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Parser$Helper$newline,
		A2(
			andre_dietrich$parser_combinators$Combine$keep,
			author$project$Lia$Markdown$Inline$Parser$line,
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\[[\t ]+\\]'),
				andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation)))));
var author$project$Lia$Markdown$Survey$Parser$text_lines = A2(
	andre_dietrich$parser_combinators$Combine$ignore,
	author$project$Lia$Parser$Helper$newline,
	A2(
		andre_dietrich$parser_combinators$Combine$map,
		elm$core$List$length,
		author$project$Lia$Markdown$Survey$Parser$pattern(
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$string(']'),
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$many1(
						andre_dietrich$parser_combinators$Combine$regex('_{3,}[\t ]*')),
					A2(
						andre_dietrich$parser_combinators$Combine$ignore,
						andre_dietrich$parser_combinators$Combine$string('['),
						A2(
							andre_dietrich$parser_combinators$Combine$ignore,
							author$project$Lia$Parser$Helper$spaces,
							andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation))))))));
var author$project$Lia$Markdown$Survey$Types$Matrix = F4(
	function (a, b, c, d) {
		return {$: 3, a: a, b: b, c: c, d: d};
	});
var author$project$Lia$Markdown$Survey$Parser$toMatrix = F2(
	function (bool, ids) {
		return A3(
			author$project$Lia$Markdown$Survey$Types$Matrix,
			bool,
			ids,
			A2(elm$core$List$map, author$project$Lia$Markdown$Inline$Stringify$stringify, ids));
	});
var author$project$Lia$Markdown$Survey$Types$Select = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Survey$Parser$toSelect = function (quiz) {
	var _n0 = quiz.c$;
	if ((_n0.$ === 1) && (!_n0.b.b)) {
		return andre_dietrich$parser_combinators$Combine$succeed(
			author$project$Lia$Markdown$Survey$Types$Select(quiz.eR));
	} else {
		return andre_dietrich$parser_combinators$Combine$fail('');
	}
};
var author$project$Lia$Markdown$Survey$Parser$id_str = andre_dietrich$parser_combinators$Combine$regex('\\w(\\w+| )*');
var author$project$Lia$Markdown$Survey$Parser$question = function (p) {
	return A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Parser$Helper$newline,
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			author$project$Lia$Markdown$Inline$Parser$line,
			A2(andre_dietrich$parser_combinators$Combine$map, elm$core$Tuple$pair, p)));
};
var author$project$Lia$Markdown$Survey$Parser$vector = function (p) {
	return andre_dietrich$parser_combinators$Combine$many1(
		author$project$Lia$Markdown$Survey$Parser$question(
			author$project$Lia$Markdown$Survey$Parser$pattern(
				p(author$project$Lia$Markdown$Survey$Parser$id_str))));
};
var author$project$Lia$Markdown$Survey$Types$Survey = F3(
	function (survey, id, javascript) {
		return {ec: id, aa: javascript, e7: survey};
	});
var author$project$Lia$Markdown$Survey$Types$Text = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Survey$Types$Vector = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$Lia$Markdown$Survey$Parser$survey = A2(
	andre_dietrich$parser_combinators$Combine$andMap,
	author$project$Lia$Markdown$Quiz$Parser$maybeJS,
	A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		andre_dietrich$parser_combinators$Combine$withState(
			A2(
				elm$core$Basics$composeR,
				function ($) {
					return $.bw;
				},
				A2(elm$core$Basics$composeR, elm$core$Array$length, andre_dietrich$parser_combinators$Combine$succeed))),
		A2(
			andre_dietrich$parser_combinators$Combine$map,
			author$project$Lia$Markdown$Survey$Types$Survey,
			andre_dietrich$parser_combinators$Combine$choice(
				_List_fromArray(
					[
						A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Survey$Types$Text, author$project$Lia$Markdown$Survey$Parser$text_lines),
						A2(andre_dietrich$parser_combinators$Combine$andThen, author$project$Lia$Markdown$Survey$Parser$toSelect, author$project$Lia$Markdown$Quiz$Block$Parser$parse),
						A2(
						andre_dietrich$parser_combinators$Combine$map,
						author$project$Lia$Markdown$Survey$Types$Vector(false),
						author$project$Lia$Markdown$Survey$Parser$vector(andre_dietrich$parser_combinators$Combine$parens)),
						A2(
						andre_dietrich$parser_combinators$Combine$map,
						author$project$Lia$Markdown$Survey$Types$Vector(true),
						author$project$Lia$Markdown$Survey$Parser$vector(andre_dietrich$parser_combinators$Combine$brackets)),
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Survey$Parser$questions,
						A2(
							andre_dietrich$parser_combinators$Combine$map,
							author$project$Lia$Markdown$Survey$Parser$toMatrix(false),
							A2(author$project$Lia$Markdown$Survey$Parser$header, '(', ')'))),
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Survey$Parser$questions,
						A2(
							andre_dietrich$parser_combinators$Combine$map,
							author$project$Lia$Markdown$Survey$Parser$toMatrix(true),
							A2(author$project$Lia$Markdown$Survey$Parser$header, '[', ']')))
					])))));
var author$project$Lia$Markdown$Survey$Parser$parse = A2(andre_dietrich$parser_combinators$Combine$andThen, author$project$Lia$Markdown$Survey$Parser$modify_State, author$project$Lia$Markdown$Survey$Parser$survey);
var author$project$Lia$Markdown$Types$BulletList = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var author$project$Lia$Markdown$Types$Chart = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var author$project$Lia$Markdown$Types$Code = F2(
	function (a, b) {
		return {$: 11, a: a, b: b};
	});
var author$project$Lia$Markdown$Types$Effect = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var author$project$Lia$Markdown$Types$OrderedList = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var author$project$Lia$Markdown$Types$Quiz = F3(
	function (a, b, c) {
		return {$: 6, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Types$Quote = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Lia$Markdown$Types$Survey = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
function author$project$Lia$Markdown$Parser$cyclic$unordered_list() {
	return A2(
		andre_dietrich$parser_combinators$Combine$map,
		elm$core$List$concat,
		andre_dietrich$parser_combinators$Combine$many1(
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Context$indentation_pop,
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$many1(
						A2(
							andre_dietrich$parser_combinators$Combine$keep,
							A2(
								andre_dietrich$parser_combinators$Combine$sepBy1,
								andre_dietrich$parser_combinators$Combine$regex('\\n?'),
								author$project$Lia$Markdown$Parser$cyclic$blocks()),
							andre_dietrich$parser_combinators$Combine$regex('[*+-] '))),
					author$project$Lia$Parser$Context$indentation_append('  ')))));
}
function author$project$Lia$Markdown$Parser$cyclic$solution() {
	var rslt = F3(
		function (e1, blocks_, e2) {
			return _Utils_Tuple2(blocks_, e2 - e1);
		});
	return andre_dietrich$parser_combinators$Combine$maybe(
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			andre_dietrich$parser_combinators$Combine$withState(
				function (s) {
					return andre_dietrich$parser_combinators$Combine$succeed(s.M.dR);
				}),
			A2(
				andre_dietrich$parser_combinators$Combine$andMap,
				A2(
					andre_dietrich$parser_combinators$Combine$manyTill,
					A2(
						andre_dietrich$parser_combinators$Combine$ignore,
						author$project$Lia$Parser$Helper$newlines,
						author$project$Lia$Markdown$Parser$cyclic$blocks()),
					andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\*{3,}[\t ]*')),
				A2(
					andre_dietrich$parser_combinators$Combine$map,
					rslt,
					A2(
						andre_dietrich$parser_combinators$Combine$keep,
						andre_dietrich$parser_combinators$Combine$withState(
							function (s) {
								return andre_dietrich$parser_combinators$Combine$succeed(s.M.dR);
							}),
						andre_dietrich$parser_combinators$Combine$regex('[\t ]*\\*{3,}[\t ]*\\n+'))))));
}
function author$project$Lia$Markdown$Parser$cyclic$quote() {
	return A2(
		andre_dietrich$parser_combinators$Combine$ignore,
		author$project$Lia$Parser$Context$indentation_pop,
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			A2(
				andre_dietrich$parser_combinators$Combine$keep,
				andre_dietrich$parser_combinators$Combine$many1(
					A2(
						andre_dietrich$parser_combinators$Combine$ignore,
						andre_dietrich$parser_combinators$Combine$regex('\\n?'),
						A2(
							andre_dietrich$parser_combinators$Combine$ignore,
							andre_dietrich$parser_combinators$Combine$maybe(author$project$Lia$Parser$Context$indentation),
							author$project$Lia$Markdown$Parser$cyclic$blocks()))),
				A2(
					andre_dietrich$parser_combinators$Combine$ignore,
					author$project$Lia$Parser$Context$indentation_append('> '),
					andre_dietrich$parser_combinators$Combine$string('> '))),
			A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$Quote, author$project$Lia$Markdown$Parser$md_annotations)));
}
function author$project$Lia$Markdown$Parser$cyclic$ordered_list() {
	return A2(
		andre_dietrich$parser_combinators$Combine$map,
		elm$core$List$concat,
		andre_dietrich$parser_combinators$Combine$many1(
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Context$indentation_pop,
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$many1(
						A2(
							andre_dietrich$parser_combinators$Combine$andMap,
							A2(
								andre_dietrich$parser_combinators$Combine$sepBy1,
								andre_dietrich$parser_combinators$Combine$regex('\\n?'),
								author$project$Lia$Markdown$Parser$cyclic$blocks()),
							A2(
								andre_dietrich$parser_combinators$Combine$ignore,
								andre_dietrich$parser_combinators$Combine$string('. '),
								A2(
									andre_dietrich$parser_combinators$Combine$map,
									elm$core$Tuple$pair,
									andre_dietrich$parser_combinators$Combine$regex('-?\\d+'))))),
					author$project$Lia$Parser$Context$indentation_append('   ')))));
}
function author$project$Lia$Markdown$Parser$cyclic$blocks() {
	return andre_dietrich$parser_combinators$Combine$lazy(
		function (_n0) {
			var b = andre_dietrich$parser_combinators$Combine$choice(
				_List_fromArray(
					[
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Effect$Parser$markdown(
							author$project$Lia$Markdown$Parser$cyclic$blocks()),
						A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$Effect, author$project$Lia$Markdown$Parser$md_annotations)),
						A2(
						andre_dietrich$parser_combinators$Combine$andThen,
						author$project$Lia$Markdown$Parser$to_comment,
						A2(
							andre_dietrich$parser_combinators$Combine$andMap,
							author$project$Lia$Markdown$Effect$Parser$comment(author$project$Lia$Markdown$Parser$paragraph),
							A2(andre_dietrich$parser_combinators$Combine$map, elm$core$Tuple$pair, author$project$Lia$Markdown$Parser$md_annotations))),
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Chart$Parser$parse,
						A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$Chart, author$project$Lia$Markdown$Parser$md_annotations)),
						author$project$Lia$Markdown$Parser$formated_table,
						author$project$Lia$Markdown$Parser$simple_table,
						author$project$Lia$Markdown$Parser$svgbob,
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Code$Parser$parse,
						A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$Code, author$project$Lia$Markdown$Parser$md_annotations)),
						author$project$Lia$Markdown$Parser$cyclic$quote(),
						author$project$Lia$Markdown$Parser$horizontal_line,
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Parser$cyclic$solution(),
						A2(
							andre_dietrich$parser_combinators$Combine$andMap,
							author$project$Lia$Markdown$Quiz$Parser$parse,
							A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$Quiz, author$project$Lia$Markdown$Parser$md_annotations))),
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Survey$Parser$parse,
						A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$Survey, author$project$Lia$Markdown$Parser$md_annotations)),
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Parser$cyclic$ordered_list(),
						A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$OrderedList, author$project$Lia$Markdown$Parser$md_annotations)),
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Parser$cyclic$unordered_list(),
						A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$BulletList, author$project$Lia$Markdown$Parser$md_annotations)),
						A2(
						andre_dietrich$parser_combinators$Combine$andMap,
						author$project$Lia$Markdown$Parser$paragraph,
						A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Markdown$Types$Paragraph, author$project$Lia$Markdown$Parser$md_annotations))
					]));
			return A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				andre_dietrich$parser_combinators$Combine$maybe(
					A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Effect$Parser$hidden_comment, andre_dietrich$parser_combinators$Combine$whitespace)),
				A2(
					andre_dietrich$parser_combinators$Combine$keep,
					b,
					A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Macro$Parser$macro, author$project$Lia$Parser$Context$indentation)));
		});
}
var author$project$Lia$Markdown$Parser$unordered_list = author$project$Lia$Markdown$Parser$cyclic$unordered_list();
author$project$Lia$Markdown$Parser$cyclic$unordered_list = function () {
	return author$project$Lia$Markdown$Parser$unordered_list;
};
var author$project$Lia$Markdown$Parser$solution = author$project$Lia$Markdown$Parser$cyclic$solution();
author$project$Lia$Markdown$Parser$cyclic$solution = function () {
	return author$project$Lia$Markdown$Parser$solution;
};
var author$project$Lia$Markdown$Parser$quote = author$project$Lia$Markdown$Parser$cyclic$quote();
author$project$Lia$Markdown$Parser$cyclic$quote = function () {
	return author$project$Lia$Markdown$Parser$quote;
};
var author$project$Lia$Markdown$Parser$ordered_list = author$project$Lia$Markdown$Parser$cyclic$ordered_list();
author$project$Lia$Markdown$Parser$cyclic$ordered_list = function () {
	return author$project$Lia$Markdown$Parser$ordered_list;
};
var author$project$Lia$Markdown$Parser$blocks = author$project$Lia$Markdown$Parser$cyclic$blocks();
author$project$Lia$Markdown$Parser$cyclic$blocks = function () {
	return author$project$Lia$Markdown$Parser$blocks;
};
var author$project$Lia$Markdown$Footnote$Parser$block = function (p) {
	return A2(
		andre_dietrich$parser_combinators$Combine$andThen,
		author$project$Lia$Markdown$Footnote$Parser$add_footnote,
		A2(
			andre_dietrich$parser_combinators$Combine$andMap,
			p,
			A2(
				andre_dietrich$parser_combinators$Combine$ignore,
				author$project$Lia$Parser$Context$indentation_append('   '),
				A2(
					andre_dietrich$parser_combinators$Combine$map,
					elm$core$Tuple$pair,
					A2(
						andre_dietrich$parser_combinators$Combine$keep,
						author$project$Lia$Parser$Helper$stringTill(
							andre_dietrich$parser_combinators$Combine$string(']:')),
						andre_dietrich$parser_combinators$Combine$string('[^'))))));
};
var author$project$Lia$Markdown$Parser$ident_blocks = A2(
	andre_dietrich$parser_combinators$Combine$ignore,
	author$project$Lia$Parser$Context$indentation_pop,
	andre_dietrich$parser_combinators$Combine$many1(
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			andre_dietrich$parser_combinators$Combine$regex('\\n?'),
			author$project$Lia$Markdown$Parser$blocks)));
var author$project$Lia$Markdown$Parser$footnotes = andre_dietrich$parser_combinators$Combine$skip(
	andre_dietrich$parser_combinators$Combine$many(
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			author$project$Lia$Parser$Helper$newlines,
			author$project$Lia$Markdown$Footnote$Parser$block(author$project$Lia$Markdown$Parser$ident_blocks))));
var author$project$Lia$Markdown$Parser$run = A2(
	andre_dietrich$parser_combinators$Combine$ignore,
	author$project$Lia$Markdown$Parser$footnotes,
	andre_dietrich$parser_combinators$Combine$many(
		A2(
			andre_dietrich$parser_combinators$Combine$ignore,
			author$project$Lia$Parser$Helper$newlines,
			A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Parser$blocks, author$project$Lia$Markdown$Parser$footnotes))));
var author$project$Lia$Parser$Parser$parse_section = F3(
	function (search_index, global, section) {
		var _n0 = A3(
			andre_dietrich$parser_combinators$Combine$runParser,
			A2(andre_dietrich$parser_combinators$Combine$keep, author$project$Lia$Markdown$Parser$run, author$project$Lia$Definition$Parser$parse),
			A2(
				author$project$Lia$Parser$Context$init,
				search_index,
				_Utils_update(
					global,
					{cV: section.cd})),
			section.W);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var state = _n1.a;
			var es = _n1.c;
			return elm$core$Result$Ok(
				_Utils_update(
					section,
					{
						dA: es,
						aW: state.aW,
						bW: state.dO ? elm$core$Maybe$Just(state.bV) : elm$core$Maybe$Nothing,
						M: state.M,
						dU: elm$core$Maybe$Nothing,
						b5: state.b5,
						eS: true,
						bi: state.bi,
						bw: state.bw,
						fp: true
					}));
		} else {
			var _n2 = _n0.a;
			var stream = _n2.b;
			var ms = _n2.c;
			return elm$core$Result$Err(
				A2(author$project$Lia$Parser$Parser$formatError, ms, stream));
		}
	});
var author$project$Lia$Update$add_load = F4(
	function (length, idx, vector, logs) {
		return (!length) ? logs : A2(
			elm$core$List$cons,
			A3(
				author$project$Port$Event$Event,
				'load',
				idx,
				elm$json$Json$Encode$string(vector)),
			logs);
	});
var author$project$Lia$Update$set_active_section = F2(
	function (model, section) {
		return _Utils_update(
			model,
			{
				cX: A3(elm$core$Array$set, model.cW, section, model.cX)
			});
	});
var author$project$Lia$Update$generate = function (model) {
	var _n0 = author$project$Lia$Update$get_active_section(model);
	if (!_n0.$) {
		var sec = _n0.a;
		var section = function () {
			if (sec.eS) {
				var effects = sec.M;
				return _Utils_update(
					sec,
					{
						M: _Utils_update(
							effects,
							{dj: 0})
					});
			} else {
				var _n2 = A3(author$project$Lia$Parser$Parser$parse_section, model.cT, model.bW, sec);
				if (!_n2.$) {
					var new_sec = _n2.a;
					return new_sec;
				} else {
					var msg = _n2.a;
					return _Utils_update(
						sec,
						{
							dA: _List_Nil,
							dU: elm$core$Maybe$Just(msg)
						});
				}
			}
		}();
		var _n1 = A2(
			author$project$Lia$Model$load_src,
			model.cL,
			A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.aS;
					},
					section.bW)));
		var resource = _n1.a;
		var logs = _n1.b;
		return A2(
			author$project$Lia$Update$set_active_section,
			_Utils_update(
				model,
				{
					cL: resource,
					de: A4(
						author$project$Lia$Update$add_load,
						elm$core$Array$length(section.bw),
						model.cW,
						'survey',
						A4(
							author$project$Lia$Update$add_load,
							elm$core$Array$length(section.aW),
							model.cW,
							'code',
							A4(
								author$project$Lia$Update$add_load,
								elm$core$Array$length(section.bi),
								model.cW,
								'quiz',
								A2(elm$core$List$append, logs, model.de))))
				}),
			section);
	} else {
		return model;
	}
};
var author$project$Lia$Update$send = F3(
	function (idx, events, cmd) {
		if (!events.b) {
			return A2(elm$core$Platform$Cmd$map, author$project$Lia$Update$UpdateMarkdown, cmd);
		} else {
			var list = events;
			return elm$core$Platform$Cmd$batch(
				A2(
					elm$core$List$cons,
					A2(elm$core$Platform$Cmd$map, author$project$Lia$Update$UpdateMarkdown, cmd),
					A2(
						elm$core$List$map,
						function (_n1) {
							var name = _n1.a;
							var json = _n1.b;
							return author$project$Lia$Update$event2js(
								A3(author$project$Port$Event$Event, name, idx, json));
						},
						list)));
		}
	});
var author$project$Port$Event$decode = function (json) {
	return A2(
		elm$json$Json$Decode$decodeValue,
		A4(
			elm$json$Json$Decode$map3,
			author$project$Port$Event$Event,
			A2(elm$json$Json$Decode$field, 'topic', elm$json$Json$Decode$string),
			A2(elm$json$Json$Decode$field, 'section', elm$json$Json$Decode$int),
			A2(elm$json$Json$Decode$field, 'message', elm$json$Json$Decode$value)),
		json);
};
var author$project$Lia$Update$update = F2(
	function (msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 0:
					var idx = msg.a;
					return ((_Utils_cmp(-1, idx) < 0) && (_Utils_cmp(
						idx,
						elm$core$Array$length(model.cX)) < 0)) ? _Utils_Tuple3(
						_Utils_update(
							model,
							{cW: idx}),
						author$project$Lia$Update$event2js(
							A3(
								author$project$Port$Event$Event,
								'persistent',
								idx,
								elm$json$Json$Encode$string('store'))),
						idx + 1) : _Utils_Tuple3(model, elm$core$Platform$Cmd$none, -1);
				case 5:
					var childMsg = msg.a;
					var _n1 = A2(author$project$Lia$Settings$Update$update, childMsg, model.ai);
					if (!_n1.b.b) {
						var settings = _n1.a;
						return _Utils_Tuple3(
							_Utils_update(
								model,
								{ai: settings}),
							elm$core$Platform$Cmd$none,
							-1);
					} else {
						var settings = _n1.a;
						var events = _n1.b;
						return _Utils_Tuple3(
							_Utils_update(
								model,
								{ai: settings}),
							elm$core$Platform$Cmd$batch(
								A2(elm$core$List$map, author$project$Lia$Update$event2js, events)),
							-1);
					}
				case 4:
					var childMsg = msg.a;
					var _n2 = A2(author$project$Lia$Index$Update$update, childMsg, model.cX);
					var index = _n2.a;
					var sections = _n2.b;
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{ce: index, cX: sections}),
						elm$core$Platform$Cmd$none,
						-1);
				case 7:
					var event = msg.a;
					var _n3 = event.fi;
					switch (_n3) {
						case 'settings':
							var _n4 = author$project$Port$Event$decode(event.ey);
							if (!_n4.$) {
								var e = _n4.a;
								var $temp$msg = author$project$Lia$Update$UpdateSettings(
									author$project$Lia$Settings$Update$handle(e)),
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							} else {
								return _Utils_Tuple3(model, elm$core$Platform$Cmd$none, -1);
							}
						case 'load':
							var $temp$msg = author$project$Lia$Update$InitSection,
								$temp$model = author$project$Lia$Update$generate(model);
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						case 'reset':
							return _Utils_Tuple3(
								model,
								author$project$Lia$Update$event2js(
									A3(author$project$Port$Event$Event, 'reset', -1, elm$json$Json$Encode$null)),
								-1);
						default:
							var _n5 = _Utils_Tuple2(
								A2(elm$core$Array$get, event.cV, model.cX),
								author$project$Port$Event$decode(event.ey));
							if ((!_n5.a.$) && (!_n5.b.$)) {
								var sec = _n5.a.a;
								var e = _n5.b.a;
								var _n6 = A3(author$project$Lia$Markdown$Update$handle, event.fi, e, sec);
								var sec_ = _n6.a;
								var cmd_ = _n6.b;
								var events = _n6.c;
								return _Utils_Tuple3(
									_Utils_update(
										model,
										{
											cX: A3(elm$core$Array$set, event.cV, sec_, model.cX)
										}),
									A3(author$project$Lia$Update$send, event.cV, events, cmd_),
									-1);
							} else {
								return _Utils_Tuple3(model, elm$core$Platform$Cmd$none, -1);
							}
					}
				default:
					var _n7 = _Utils_Tuple2(
						msg,
						author$project$Lia$Update$get_active_section(model));
					_n7$4:
					while (true) {
						if (!_n7.b.$) {
							switch (_n7.a.$) {
								case 6:
									var childMsg = _n7.a.a;
									var sec = _n7.b.a;
									var _n8 = A2(author$project$Lia$Markdown$Update$update, childMsg, sec);
									var section = _n8.a;
									var cmd = _n8.b;
									var log_ = _n8.c;
									return _Utils_Tuple3(
										A2(author$project$Lia$Update$set_active_section, model, section),
										A3(author$project$Lia$Update$send, model.cW, log_, cmd),
										-1);
								case 3:
									var _n9 = _n7.a;
									var sec = _n7.b.a;
									if ((model.ai.eA === 2) || (!author$project$Lia$Markdown$Effect$Update$has_next(sec.M))) {
										var $temp$msg = author$project$Lia$Update$Load(model.cW + 1),
											$temp$model = model;
										msg = $temp$msg;
										model = $temp$model;
										continue update;
									} else {
										var _n10 = A2(author$project$Lia$Markdown$Update$nextEffect, model.ai.c0, sec);
										var sec_ = _n10.a;
										var cmd_ = _n10.b;
										var log_ = _n10.c;
										return _Utils_Tuple3(
											A2(author$project$Lia$Update$set_active_section, model, sec_),
											A3(author$project$Lia$Update$send, model.cW, log_, cmd_),
											-1);
									}
								case 2:
									var _n11 = _n7.a;
									var sec = _n7.b.a;
									if ((model.ai.eA === 2) || (!author$project$Lia$Markdown$Effect$Update$has_previous(sec.M))) {
										var $temp$msg = author$project$Lia$Update$Load(model.cW - 1),
											$temp$model = model;
										msg = $temp$msg;
										model = $temp$model;
										continue update;
									} else {
										var _n12 = A2(author$project$Lia$Markdown$Update$previousEffect, model.ai.c0, sec);
										var sec_ = _n12.a;
										var cmd_ = _n12.b;
										var log_ = _n12.c;
										return _Utils_Tuple3(
											A2(author$project$Lia$Update$set_active_section, model, sec_),
											A3(author$project$Lia$Update$send, model.cW, log_, cmd_),
											-1);
									}
								case 1:
									var _n13 = _n7.a;
									var sec = _n7.b.a;
									var _n14 = function () {
										var _n15 = model.ai.eA;
										if (_n15 === 2) {
											return A3(author$project$Lia$Markdown$Update$initEffect, true, false, sec);
										} else {
											return A3(author$project$Lia$Markdown$Update$initEffect, false, model.ai.c0, sec);
										}
									}();
									var sec_ = _n14.a;
									var cmd_ = _n14.b;
									var log_ = _n14.c;
									return _Utils_Tuple3(
										A2(
											author$project$Lia$Update$set_active_section,
											_Utils_update(
												model,
												{de: _List_Nil}),
											sec_),
										elm$core$Platform$Cmd$batch(
											A2(
												elm$core$List$append,
												_List_fromArray(
													[
														author$project$Lia$Update$event2js(
														A3(author$project$Port$Event$Event, 'slide', model.cW, elm$json$Json$Encode$null)),
														A3(author$project$Lia$Update$send, model.cW, log_, cmd_)
													]),
												A2(elm$core$List$map, author$project$Lia$Update$event2js, model.de))),
										-1);
								default:
									break _n7$4;
							}
						} else {
							break _n7$4;
						}
					}
					return _Utils_Tuple3(model, elm$core$Platform$Cmd$none, -1);
			}
		}
	});
var author$project$Lia$Script$load_slide = F2(
	function (idx, model) {
		return A2(
			author$project$Lia$Update$update,
			author$project$Lia$Update$Load(idx),
			model);
	});
var author$project$Lia$Script$pages = A2(
	elm$core$Basics$composeR,
	function ($) {
		return $.cX;
	},
	elm$core$Array$length);
var author$project$Lia$Script$filterIndex = F2(
	function (str, _n0) {
		var idx = _n0.a;
		return _Utils_eq(str, idx);
	});
var author$project$Lia$Script$searchIndex = F2(
	function (index, str) {
		var fn = author$project$Lia$Script$filterIndex(
			elm$core$String$toLower(str));
		var _n0 = elm$core$List$head(
			A2(elm$core$List$filter, fn, index));
		if (!_n0.$) {
			var _n1 = _n0.a;
			var key = _n1.b;
			return key;
		} else {
			return str;
		}
	});
var author$project$Lia$Script$load_first_slide = function (model) {
	return A2(
		author$project$Lia$Script$load_slide,
		(_Utils_cmp(
			model.cW,
			author$project$Lia$Script$pages(model)) > 0) ? 0 : model.cW,
		_Utils_update(
			model,
			{
				cT: author$project$Lia$Script$searchIndex(
					A2(
						elm$core$List$indexedMap,
						author$project$Lia$Script$generateIndex,
						elm$core$Array$toList(
							A2(
								elm$core$Array$map,
								A2(
									elm$core$Basics$composeR,
									function ($) {
										return $.dd;
									},
									A2(elm$core$Basics$composeR, author$project$Lia$Markdown$Inline$Stringify$stringify, elm$core$String$trim)),
								model.cX)))),
				de: A2(
					elm$core$List$cons,
					A3(
						author$project$Port$Event$Event,
						'init',
						model.cW,
						A2(
							elm$json$Json$Encode$list,
							elm$json$Json$Encode$string,
							_List_fromArray(
								[
									author$project$Lia$Script$get_title(model.cX),
									model.at,
									elm$core$String$fromInt(
									A2(
										elm$core$Maybe$withDefault,
										0,
										elm$core$String$toInt(
											A2(
												elm$core$Maybe$withDefault,
												'0',
												elm$core$List$head(
													A2(elm$core$String$split, '.', model.bW.fn)))))),
									model.bW.eP,
									model.bW.dw,
									model.bW.dI,
									model.bW.ex
								]))),
					model.de)
			}));
};
var elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
var author$project$App$start = function (model) {
	var _n0 = author$project$Lia$Script$load_first_slide(model.e);
	var parsed = _n0.a;
	var cmd = _n0.b;
	var slide_number = _n0.c;
	return _Utils_Tuple2(
		_Utils_update(
			model,
			{e: parsed, t: author$project$App$Running}),
		(slide_number < 0) ? A2(elm$core$Platform$Cmd$map, author$project$App$LiaScript, cmd) : elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					A2(
					elm$browser$Browser$Navigation$replaceUrl,
					model.an,
					'#' + elm$core$String$fromInt(slide_number)),
					A2(elm$core$Platform$Cmd$map, author$project$App$LiaScript, cmd)
				])));
};
var author$project$Lia$Script$add_imports = F2(
	function (model, code) {
		var _n0 = A2(author$project$Lia$Parser$Parser$parse_defintion, model.bz, code);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var definition = _n1.a;
			return A2(author$project$Lia$Script$add_todos, definition, model);
		} else {
			return model;
		}
	});
var andre_dietrich$parser_combinators$Combine$currentColumn = A2(
	elm$core$Basics$composeR,
	andre_dietrich$parser_combinators$Combine$currentLocation,
	function ($) {
		return $.dG;
	});
var andre_dietrich$parser_combinators$Combine$withColumn = function (f) {
	return F2(
		function (state, stream) {
			return A3(
				andre_dietrich$parser_combinators$Combine$app,
				f(
					andre_dietrich$parser_combinators$Combine$currentColumn(stream)),
				state,
				stream);
		});
};
var author$project$Lia$Parser$Preprocessor$check = function (c) {
	return c ? andre_dietrich$parser_combinators$Combine$succeed(0) : andre_dietrich$parser_combinators$Combine$fail('');
};
var author$project$Lia$Parser$Preprocessor$body = A2(
	andre_dietrich$parser_combinators$Combine$map,
	elm$core$String$concat,
	andre_dietrich$parser_combinators$Combine$many(
		andre_dietrich$parser_combinators$Combine$choice(
			_List_fromArray(
				[
					andre_dietrich$parser_combinators$Combine$regex('(?:[^#`<]+|[\\x0D\n]+|<!--[\\S\\s]*?-->)'),
					andre_dietrich$parser_combinators$Combine$regex('(`{3,})[\\S\\s]*?\\1'),
					andre_dietrich$parser_combinators$Combine$regex('`.+?`'),
					andre_dietrich$parser_combinators$Combine$regex('(?:<([\\w+\\-]+)[\\S\\s]*?</\\2>|`|<)'),
					A2(
					andre_dietrich$parser_combinators$Combine$keep,
					andre_dietrich$parser_combinators$Combine$string('#'),
					andre_dietrich$parser_combinators$Combine$withColumn(author$project$Lia$Parser$Preprocessor$check))
				]))));
var author$project$Lia$Parser$Preprocessor$title_str = A2(andre_dietrich$parser_combinators$Combine$ignore, author$project$Lia$Parser$Helper$newline, author$project$Lia$Markdown$Inline$Parser$line);
var author$project$Lia$Parser$Preprocessor$title_tag = A2(
	andre_dietrich$parser_combinators$Combine$map,
	elm$core$String$length,
	andre_dietrich$parser_combinators$Combine$regex('#+'));
var author$project$Lia$Types$SectionBase = F3(
	function (identation, title, code) {
		return {W: code, cc: identation, dd: title};
	});
var author$project$Lia$Parser$Preprocessor$section = A2(
	andre_dietrich$parser_combinators$Combine$andMap,
	author$project$Lia$Parser$Preprocessor$body,
	A2(
		andre_dietrich$parser_combinators$Combine$andMap,
		author$project$Lia$Parser$Preprocessor$title_str,
		A2(andre_dietrich$parser_combinators$Combine$map, author$project$Lia$Types$SectionBase, author$project$Lia$Parser$Preprocessor$title_tag)));
var author$project$Lia$Parser$Parser$parse_titles = F2(
	function (defines, code) {
		var _n0 = A3(
			andre_dietrich$parser_combinators$Combine$runParser,
			author$project$Lia$Parser$Preprocessor$section,
			A2(author$project$Lia$Parser$Context$init, elm$core$Basics$identity, defines),
			code);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var data = _n1.b;
			var rslt = _n1.c;
			return elm$core$Result$Ok(
				_Utils_Tuple2(rslt, data.D));
		} else {
			var _n2 = _n0.a;
			var stream = _n2.b;
			var ms = _n2.c;
			return elm$core$Result$Err(
				A2(author$project$Lia$Parser$Parser$formatError, ms, stream));
		}
	});
var author$project$Lia$Types$init_section = F2(
	function (idx, base) {
		return {dA: _List_Nil, W: base.W, aW: elm$core$Array$empty, bW: elm$core$Maybe$Nothing, M: author$project$Lia$Markdown$Effect$Model$init, dU: elm$core$Maybe$Nothing, b4: elm$core$Maybe$Nothing, b5: author$project$Lia$Markdown$Footnote$Model$init, cd: idx, ee: base.cc, eS: false, bi: elm$core$Array$empty, bw: elm$core$Array$empty, dd: base.dd, dj: true, fp: true};
	});
var author$project$Lia$Script$parse_section = F2(
	function (model, code) {
		var _n0 = A2(author$project$Lia$Parser$Parser$parse_titles, model.bW, code);
		if (!_n0.$) {
			var _n1 = _n0.a;
			var sec = _n1.a;
			var rest = _n1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						cX: A2(
							elm$core$Array$push,
							A2(
								author$project$Lia$Types$init_section,
								author$project$Lia$Script$pages(model),
								sec),
							model.cX)
					}),
				elm$core$String$isEmpty(rest) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(rest));
		} else {
			var msg = _n0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						dU: elm$core$Maybe$Just(msg)
					}),
				elm$core$Maybe$Nothing);
		}
	});
var author$project$Lia$Script$update = author$project$Lia$Update$update;
var elm$browser$Browser$Navigation$load = _Browser_load;
var elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var elm$core$Basics$modBy = _Basics_modBy;
var author$project$App$parsing = function (model) {
	parsing:
	while (true) {
		var _n6 = model.t;
		_n6$2:
		while (true) {
			if (_n6.$ === 2) {
				if (!_n6.a) {
					if (!_n6.b) {
						return A2(author$project$App$update, author$project$App$LiaStart, model);
					} else {
						break _n6$2;
					}
				} else {
					var templates_to_load = _n6.b;
					var _n7 = model.W;
					if (_n7.$ === 1) {
						var $temp$model = _Utils_update(
							model,
							{
								t: A2(author$project$App$Parsing, false, templates_to_load)
							});
						model = $temp$model;
						continue parsing;
					} else {
						var code = _n7.a;
						var _n8 = A2(author$project$Lia$Script$parse_section, model.e, code);
						var lia = _n8.a;
						var remaining_code = _n8.b;
						var new_model = _Utils_update(
							model,
							{W: remaining_code, e: lia});
						if (!A2(
							elm$core$Basics$modBy,
							4,
							author$project$Lia$Script$pages(lia))) {
							return _Utils_Tuple2(
								new_model,
								author$project$App$message(author$project$App$LiaParse));
						} else {
							var $temp$model = new_model;
							model = $temp$model;
							continue parsing;
						}
					}
				}
			} else {
				break _n6$2;
			}
		}
		return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
	}
};
var author$project$App$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var childMsg = msg.a;
				var _n1 = A2(author$project$Lia$Script$update, childMsg, model.e);
				var lia = _n1.a;
				var cmd = _n1.b;
				var slide_number = _n1.c;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{e: lia}),
					(slide_number < 0) ? A2(elm$core$Platform$Cmd$map, author$project$App$LiaScript, cmd) : elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2(
								elm$browser$Browser$Navigation$pushUrl,
								model.an,
								'#' + elm$core$String$fromInt(slide_number)),
								A2(elm$core$Platform$Cmd$map, author$project$App$LiaScript, cmd)
							])));
			case 3:
				var urlRequest = msg.a;
				if (!urlRequest.$) {
					var url = urlRequest.a;
					return _Utils_Tuple2(
						model,
						_Utils_eq(url.ag, model.bz.ag) ? A2(
							elm$browser$Browser$Navigation$pushUrl,
							model.an,
							elm$url$Url$toString(url)) : elm$browser$Browser$Navigation$load(
							elm$url$Url$toString(url)));
				} else {
					var href = urlRequest.a;
					return _Utils_Tuple2(
						model,
						elm$browser$Browser$Navigation$load(href));
				}
			case 4:
				var url = msg.a;
				var _n3 = A2(elm$core$Maybe$andThen, elm$core$String$toInt, url.a0);
				if (!_n3.$) {
					var id = _n3.a;
					var _n4 = A2(author$project$Lia$Script$load_slide, id - 1, model.e);
					var lia = _n4.a;
					var cmd = _n4.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{e: lia}),
						A2(elm$core$Platform$Cmd$map, author$project$App$LiaScript, cmd));
				} else {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				}
			case 1:
				return author$project$App$start(model);
			case 2:
				return author$project$App$parsing(model);
			case 5:
				var url = msg.a;
				var lia = model.e;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							e: _Utils_update(
								lia,
								{at: url})
						}),
					elm$core$Platform$Cmd$none);
			case 6:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{t: author$project$App$Loading}),
					elm$core$Platform$Cmd$batch(
						_List_fromArray(
							[
								A2(elm$browser$Browser$Navigation$replaceUrl, model.an, '?' + model.e.at),
								A2(author$project$App$download, author$project$App$Load_ReadMe_Result, model.e.at)
							])));
			case 7:
				if (!msg.a.$) {
					var readme = msg.a.a;
					return A2(author$project$App$load_readme, model, readme);
				} else {
					var info = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								t: author$project$App$Error(
									author$project$App$parse_error(info))
							}),
						elm$core$Platform$Cmd$none);
				}
			default:
				if (!msg.a.$) {
					var template = msg.a.a;
					return author$project$App$parsing(
						_Utils_update(
							model,
							{
								e: A2(
									author$project$Lia$Script$add_imports,
									model.e,
									A3(elm$core$String$replace, '\u000d', '', template)),
								t: function () {
									var _n5 = model.t;
									if (_n5.$ === 2) {
										var b = _n5.a;
										var templates = _n5.b;
										return A2(author$project$App$Parsing, b, templates - 1);
									} else {
										return model.t;
									}
								}()
							}));
				} else {
					var info = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								t: author$project$App$Error(
									author$project$App$parse_error(info))
							}),
						elm$core$Platform$Cmd$none);
				}
		}
	});
var elm$html$Html$div = _VirtualDom_node('div');
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var author$project$App$base_div = elm$html$Html$div(
	_List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'width', '100%'),
			A2(elm$html$Html$Attributes$style, 'text-align', 'center'),
			A2(elm$html$Html$Attributes$style, 'top', '25%'),
			A2(elm$html$Html$Attributes$style, 'position', 'absolute')
		]));
var author$project$App$Input = function (a) {
	return {$: 5, a: a};
};
var author$project$App$Load = {$: 6};
var author$project$App$project_url = 'https://gitlab.com/Freinet/LiaScript';
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$input = _VirtualDom_node('input');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var elm$html$Html$Attributes$placeholder = elm$html$Html$Attributes$stringProperty('placeholder');
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var author$project$App$view_idle = function (url) {
	return author$project$App$base_div(
		_List_fromArray(
			[
				A2(
				elm$html$Html$h1,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text('Lia')
					])),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$input,
				_List_fromArray(
					[
						elm$html$Html$Attributes$placeholder('enter course URL'),
						elm$html$Html$Attributes$value(url),
						elm$html$Html$Events$onInput(author$project$App$Input)
					]),
				_List_Nil),
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('lia-btn'),
						elm$html$Html$Events$onClick(author$project$App$Load)
					]),
				_List_fromArray(
					[
						elm$html$Html$text('load URL')
					])),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$a,
				_List_fromArray(
					[
						elm$html$Html$Attributes$href(author$project$App$project_url)
					]),
				_List_fromArray(
					[
						elm$html$Html$text(author$project$App$project_url)
					]))
			]));
};
var author$project$Lia$Settings$View$design = function (model) {
	return _List_fromArray(
		[
			elm$html$Html$Attributes$class(
			'lia-canvas lia-theme-' + (model.dc + (' lia-variant-' + (model.co ? 'light' : 'dark')))),
			A2(
			elm$html$Html$Attributes$style,
			'font-size',
			elm$core$String$fromInt(model.b3) + '%')
		]);
};
var author$project$Lia$Definition$Types$get_translations = function (def) {
	return elm$core$Dict$toList(def.ay);
};
var author$project$Lia$Markdown$Effect$View$state = function (model) {
	return (!model.dR) ? '' : (' (' + (elm$core$String$fromInt(model.dj + 1) + ('/' + (elm$core$String$fromInt(model.dR + 1) + ')'))));
};
var elm$html$Html$span = _VirtualDom_node('span');
var author$project$Lia$Markdown$Effect$View$view = F3(
	function (viewer, idx, elements) {
		return A2(
			elm$core$List$cons,
			A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('lia-effect-circle')
					]),
				elm$core$List$singleton(
					elm$html$Html$text(
						elm$core$String$fromInt(idx)))),
			A2(
				elm$core$List$cons,
				elm$html$Html$text(' '),
				viewer(elements)));
	});
var author$project$Lia$Markdown$Footnote$View$braces = function (key) {
	return elm$html$Html$text('[' + (key + ']'));
};
var elm$html$Html$sup = _VirtualDom_node('sup');
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var author$project$Lia$Markdown$Footnote$View$inline = F2(
	function (key, attr) {
		return A2(
			elm$html$Html$sup,
			A2(
				elm$core$List$cons,
				A2(elm$html$Html$Attributes$attribute, 'onclick', 'showFootnote(\"' + (key + '\");')),
				A2(
					elm$core$List$cons,
					A2(elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					attr)),
			_List_fromArray(
				[
					author$project$Lia$Markdown$Footnote$View$braces(key)
				]));
	});
var author$project$Lia$Markdown$Inline$View$annotation = F2(
	function (cls, attr) {
		if (!attr.$) {
			var dict = attr.a;
			return A2(
				elm$core$List$map,
				function (_n2) {
					var key = _n2.a;
					var value = _n2.b;
					return A2(elm$html$Html$Attributes$attribute, key, value);
				},
				elm$core$Dict$toList(
					A3(
						elm$core$Dict$insert,
						'class',
						function () {
							var _n1 = A2(elm$core$Dict$get, 'class', dict);
							if (!_n1.$) {
								var c = _n1.a;
								return 'lia-inline ' + (cls + (' ' + c));
							} else {
								return 'lia-inline ' + cls;
							}
						}(),
						dict)));
		} else {
			return _List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-inline ' + cls)
				]);
		}
	});
var author$project$Lia$Markdown$Inline$View$attributes = function (attr) {
	if (!attr.$) {
		var dict = attr.a;
		return A2(
			elm$core$List$map,
			function (_n1) {
				var key = _n1.a;
				var value = _n1.b;
				return A2(elm$html$Html$Attributes$attribute, key, value);
			},
			elm$core$Dict$toList(dict));
	} else {
		return _List_Nil;
	}
};
var elm$html$Html$audio = _VirtualDom_node('audio');
var elm$html$Html$b = _VirtualDom_node('b');
var elm$html$Html$code = _VirtualDom_node('code');
var elm$html$Html$em = _VirtualDom_node('em');
var elm$html$Html$iframe = _VirtualDom_node('iframe');
var elm$html$Html$img = _VirtualDom_node('img');
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$html$Html$s = _VirtualDom_node('s');
var elm$html$Html$source = _VirtualDom_node('source');
var elm$html$Html$u = _VirtualDom_node('u');
var elm$html$Html$video = _VirtualDom_node('video');
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$controls = elm$html$Html$Attributes$boolProperty('controls');
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var elm$html$Html$Attributes$title = elm$html$Html$Attributes$stringProperty('title');
var hecrj$html_parser$Html$Parser$Util$toAttribute = function (_n0) {
	var name = _n0.a;
	var value = _n0.b;
	return A2(elm$html$Html$Attributes$attribute, name, value);
};
var hecrj$html_parser$Html$Parser$Util$toVirtualDom = function (nodes) {
	return A2(elm$core$List$map, hecrj$html_parser$Html$Parser$Util$toVirtualDomEach, nodes);
};
var hecrj$html_parser$Html$Parser$Util$toVirtualDomEach = function (node) {
	switch (node.$) {
		case 1:
			var name = node.a;
			var attrs = node.b;
			var children = node.c;
			return A3(
				elm$html$Html$node,
				name,
				A2(elm$core$List$map, hecrj$html_parser$Html$Parser$Util$toAttribute, attrs),
				hecrj$html_parser$Html$Parser$Util$toVirtualDom(children));
		case 0:
			var s = node.a;
			return elm$html$Html$text(s);
		default:
			return elm$html$Html$text('');
	}
};
var author$project$Lia$Markdown$Inline$View$reference = F3(
	function (visible, ref, attr) {
		switch (ref.$) {
			case 0:
				var alt_ = ref.a;
				var url_ = ref.b;
				var title_ = ref.c;
				return A5(author$project$Lia$Markdown$Inline$View$view_url, visible, alt_, url_, title_, attr);
			case 1:
				var alt_ = ref.a;
				var url_ = ref.b;
				var title_ = ref.c;
				return A5(author$project$Lia$Markdown$Inline$View$view_url, visible, alt_, url_, title_, attr);
			case 2:
				var alt_ = ref.a;
				var url_ = ref.b;
				var title_ = ref.c;
				return A2(
					elm$html$Html$img,
					A2(
						elm$core$List$cons,
						elm$html$Html$Attributes$src(url_),
						A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$title(title_),
							A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-image', attr))),
					A2(author$project$Lia$Markdown$Inline$View$viewer, visible, alt_));
			case 3:
				var alt_ = ref.a;
				var _n5 = ref.b;
				var tube = _n5.a;
				var url_ = _n5.b;
				var title_ = ref.c;
				return tube ? A2(
					elm$html$Html$iframe,
					A2(
						elm$core$List$cons,
						elm$html$Html$Attributes$src(url_),
						A2(
							elm$core$List$cons,
							A2(elm$html$Html$Attributes$attribute, 'allowfullscreen', ''),
							A2(
								elm$core$List$cons,
								A2(elm$html$Html$Attributes$attribute, 'allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'),
								A2(
									elm$core$List$cons,
									elm$html$Html$Attributes$title(title_),
									A2(
										elm$core$List$cons,
										A2(elm$html$Html$Attributes$style, 'width', '100%'),
										A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-audio', attr)))))),
					A2(author$project$Lia$Markdown$Inline$View$viewer, visible, alt_)) : A2(
					elm$html$Html$audio,
					A2(
						elm$core$List$cons,
						elm$html$Html$Attributes$controls(true),
						A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$title(title_),
							A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-audio', attr))),
					_List_fromArray(
						[
							A2(
							elm$html$Html$source,
							_List_fromArray(
								[
									elm$html$Html$Attributes$src(url_)
								]),
							_List_Nil),
							A2(
							elm$html$Html$span,
							_List_Nil,
							A2(author$project$Lia$Markdown$Inline$View$viewer, visible, alt_))
						]));
			default:
				var alt_ = ref.a;
				var _n6 = ref.b;
				var tube = _n6.a;
				var url_ = _n6.b;
				var title_ = ref.c;
				return tube ? A2(
					elm$html$Html$iframe,
					A2(
						elm$core$List$cons,
						elm$html$Html$Attributes$src(url_),
						A2(
							elm$core$List$cons,
							A2(elm$html$Html$Attributes$attribute, 'allowfullscreen', ''),
							A2(
								elm$core$List$cons,
								A2(elm$html$Html$Attributes$attribute, 'allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'),
								A2(
									elm$core$List$cons,
									elm$html$Html$Attributes$title(title_),
									A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-movie', attr))))),
					A2(author$project$Lia$Markdown$Inline$View$viewer, visible, alt_)) : A2(
					elm$html$Html$video,
					A2(
						elm$core$List$cons,
						elm$html$Html$Attributes$controls(true),
						A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$title(title_),
							A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-movie', attr))),
					_List_fromArray(
						[
							A2(
							elm$html$Html$source,
							_List_fromArray(
								[
									elm$html$Html$Attributes$src(url_)
								]),
							_List_Nil),
							A2(
							elm$html$Html$span,
							_List_Nil,
							A2(author$project$Lia$Markdown$Inline$View$viewer, visible, alt_))
						]));
		}
	});
var author$project$Lia$Markdown$Inline$View$view = F2(
	function (visible, element) {
		view:
		while (true) {
			switch (element.$) {
				case 2:
					var e = element.a;
					var attr = element.b;
					return A2(
						elm$html$Html$b,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-bold', attr),
						_List_fromArray(
							[
								A2(author$project$Lia$Markdown$Inline$View$view, visible, e)
							]));
				case 3:
					var e = element.a;
					var attr = element.b;
					return A2(
						elm$html$Html$em,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-italic', attr),
						_List_fromArray(
							[
								A2(author$project$Lia$Markdown$Inline$View$view, visible, e)
							]));
				case 4:
					var e = element.a;
					var attr = element.b;
					return A2(
						elm$html$Html$s,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-strike', attr),
						_List_fromArray(
							[
								A2(author$project$Lia$Markdown$Inline$View$view, visible, e)
							]));
				case 5:
					var e = element.a;
					var attr = element.b;
					return A2(
						elm$html$Html$u,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-underline', attr),
						_List_fromArray(
							[
								A2(author$project$Lia$Markdown$Inline$View$view, visible, e)
							]));
				case 6:
					var e = element.a;
					var attr = element.b;
					return A2(
						elm$html$Html$sup,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-superscript', attr),
						_List_fromArray(
							[
								A2(author$project$Lia$Markdown$Inline$View$view, visible, e)
							]));
				case 7:
					var e = element.a;
					var attr = element.b;
					return A2(
						elm$html$Html$code,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-code', attr),
						_List_fromArray(
							[
								elm$html$Html$text(e)
							]));
				case 9:
					var e = element.a;
					var attr = element.b;
					return A3(author$project$Lia$Markdown$Inline$View$reference, visible, e, attr);
				case 10:
					var e = element.a;
					var attr = element.b;
					return A2(
						author$project$Lia$Markdown$Footnote$View$inline,
						e,
						author$project$Lia$Markdown$Inline$View$attributes(attr));
				case 13:
					var list = element.a;
					var attr = element.b;
					return A2(
						elm$html$Html$span,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-container', attr),
						A2(
							elm$core$List$map,
							function (e) {
								return A2(author$project$Lia$Markdown$Inline$View$view, visible, e);
							},
							list));
				case 11:
					var list = element.a;
					return A2(
						elm$html$Html$span,
						_List_Nil,
						hecrj$html_parser$Html$Parser$Util$toVirtualDom(list));
				case 12:
					var id_in = element.a;
					var id_out = element.b;
					var e = element.c;
					var attr = element.d;
					return ((_Utils_cmp(id_in, visible) < 1) && (_Utils_cmp(id_out, visible) > 0)) ? A2(
						elm$html$Html$span,
						A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$id(
								elm$core$String$fromInt(id_in)),
							A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-effect-inline', attr)),
						A3(
							author$project$Lia$Markdown$Effect$View$view,
							author$project$Lia$Markdown$Inline$View$viewer(visible),
							id_in,
							e)) : elm$html$Html$text('');
				case 1:
					if (element.b.$ === 1) {
						var e = element.a;
						var _n3 = element.b;
						return elm$html$Html$text(e);
					} else {
						var e = element.a;
						var attr = element.b;
						var $temp$visible = visible,
							$temp$element = A2(
							author$project$Lia$Markdown$Inline$Types$Container,
							_List_fromArray(
								[
									A2(author$project$Lia$Markdown$Inline$Types$Symbol, e, elm$core$Maybe$Nothing)
								]),
							attr);
						visible = $temp$visible;
						element = $temp$element;
						continue view;
					}
				case 0:
					if (element.b.$ === 1) {
						var e = element.a;
						var _n1 = element.b;
						return elm$html$Html$text(e);
					} else {
						var e = element.a;
						var attr = element.b;
						var $temp$visible = visible,
							$temp$element = A2(
							author$project$Lia$Markdown$Inline$Types$Container,
							_List_fromArray(
								[
									A2(author$project$Lia$Markdown$Inline$Types$Chars, e, elm$core$Maybe$Nothing)
								]),
							attr);
						visible = $temp$visible;
						element = $temp$element;
						continue view;
					}
				default:
					if (element.c.$ === 1) {
						var mode = element.a;
						var e = element.b;
						var _n2 = element.c;
						return A3(
							elm$html$Html$node,
							'katex-formula',
							_List_fromArray(
								[
									A2(elm$html$Html$Attributes$attribute, 'displayMode', mode)
								]),
							_List_fromArray(
								[
									elm$html$Html$text(e)
								]));
					} else {
						var mode = element.a;
						var e = element.b;
						var attr = element.c;
						var $temp$visible = visible,
							$temp$element = A2(
							author$project$Lia$Markdown$Inline$Types$Container,
							_List_fromArray(
								[
									A3(author$project$Lia$Markdown$Inline$Types$Formula, mode, e, elm$core$Maybe$Nothing)
								]),
							attr);
						visible = $temp$visible;
						element = $temp$element;
						continue view;
					}
			}
		}
	});
var author$project$Lia$Markdown$Inline$View$view_url = F5(
	function (visible, alt_, url_, title_, attr) {
		return function (a) {
			return a(
				A2(author$project$Lia$Markdown$Inline$View$viewer, visible, alt_));
		}(
			elm$html$Html$a(
				A2(
					elm$core$List$append,
					A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-link', attr),
					_List_fromArray(
						[
							elm$html$Html$Attributes$href(url_),
							elm$html$Html$Attributes$title(title_)
						]))));
	});
var author$project$Lia$Markdown$Inline$View$viewer = F2(
	function (visible, elements) {
		return A2(
			elm$core$List$map,
			author$project$Lia$Markdown$Inline$View$view(visible),
			elements);
	});
var author$project$Lia$Markdown$View$Config = F6(
	function (mode, view, section, ace_theme, lang, light) {
		return {bE: ace_theme, eq: lang, co: light, eA: mode, cV: section, fo: view};
	});
var elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var author$project$Lia$Markdown$Footnote$Model$empty = elm$core$Dict$isEmpty;
var author$project$Lia$Markdown$Footnote$Model$toList = elm$core$Dict$toList;
var elm$html$Html$p = _VirtualDom_node('p');
var elm$html$Html$td = _VirtualDom_node('td');
var elm$html$Html$tr = _VirtualDom_node('tr');
var author$project$Lia$Markdown$Footnote$View$definition = F2(
	function (fn, _n0) {
		var key = _n0.a;
		var val = _n0.b;
		return A2(
			elm$html$Html$tr,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$attribute, 'valign', 'top'),
							A2(elm$html$Html$Attributes$style, 'padding-right', '10px')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									author$project$Lia$Markdown$Footnote$View$braces(key)
								]))
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$attribute, 'valign', 'top')
						]),
					A2(elm$core$List$map, fn, val))
				]));
	});
var elm$html$Html$table = _VirtualDom_node('table');
var elm$html$Html$Attributes$align = elm$html$Html$Attributes$stringProperty('align');
var author$project$Lia$Markdown$Footnote$View$block = F2(
	function (fn, model) {
		if (author$project$Lia$Markdown$Footnote$Model$empty(model)) {
			return elm$html$Html$text('');
		} else {
			var def = author$project$Lia$Markdown$Footnote$View$definition(fn);
			return A2(
				elm$html$Html$table,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'padding', '-10px'),
						A2(elm$html$Html$Attributes$style, 'border-top', '2px solid black'),
						A2(elm$html$Html$Attributes$style, '-ms-transform', 'scale(0.8, 0.8)'),
						A2(elm$html$Html$Attributes$style, '-ms-transform-origin', '0 50%'),
						A2(elm$html$Html$Attributes$style, '-webkit-transform', 'scale(0.8, 0.8)'),
						A2(elm$html$Html$Attributes$style, '-webkit-transform-origin-x', '0'),
						A2(elm$html$Html$Attributes$style, 'transform', 'scale(0.8, 0.8)'),
						A2(elm$html$Html$Attributes$style, 'transform-origin', '0 50%'),
						elm$html$Html$Attributes$align('left')
					]),
				A2(
					elm$core$List$map,
					def,
					author$project$Lia$Markdown$Footnote$Model$toList(model)));
		}
	});
var avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var avh4$elm_color$Color$rgb = F3(
	function (r, g, b) {
		return A4(avh4$elm_color$Color$RgbaSpace, r, g, b, 1.0);
	});
var andre_dietrich$elm_svgbob$SvgBob$default = {
	dt: 4.0,
	dF: A3(avh4$elm_color$Color$rgb, 0, 0, 0),
	d2: 14.0,
	ew: 1.0,
	fa: 16.0,
	fb: 8.0
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$vectorEffect = A2(elm$html$Html$Attributes$attribute, 'vector-effect', 'none');
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$marker = elm$svg$Svg$trustedNode('marker');
var elm$svg$Svg$path = elm$svg$Svg$trustedNode('path');
var elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var elm$svg$Svg$Attributes$markerHeight = _VirtualDom_attribute('markerHeight');
var elm$svg$Svg$Attributes$markerUnits = _VirtualDom_attribute('markerUnits');
var elm$svg$Svg$Attributes$markerWidth = _VirtualDom_attribute('markerWidth');
var elm$svg$Svg$Attributes$orient = _VirtualDom_attribute('orient');
var elm$svg$Svg$Attributes$refX = _VirtualDom_attribute('refX');
var elm$svg$Svg$Attributes$refY = _VirtualDom_attribute('refY');
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var andre_dietrich$elm_svgbob$SvgBob$Grid$arrowMarker = A2(
	elm$svg$Svg$marker,
	_List_fromArray(
		[
			elm$svg$Svg$Attributes$id('triangle'),
			elm$svg$Svg$Attributes$viewBox('0 0 14 14'),
			elm$svg$Svg$Attributes$refX('0'),
			elm$svg$Svg$Attributes$refY('5'),
			elm$svg$Svg$Attributes$markerUnits('strokeWidth'),
			elm$svg$Svg$Attributes$markerWidth('10'),
			elm$svg$Svg$Attributes$markerHeight('10'),
			elm$svg$Svg$Attributes$orient('auto')
		]),
	_List_fromArray(
		[
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$d('M 0 0 L 10 5 L 0 10 z'),
					andre_dietrich$elm_svgbob$SvgBob$Grid$vectorEffect
				]),
			_List_Nil)
		]));
var andre_dietrich$elm_svgbob$SvgBob$Types$Center = {$: 0};
var andre_dietrich$elm_svgbob$SvgBob$Types$East_ = function (a) {
	return {$: 2, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Types$Ext = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$North_ = function (a) {
	return {$: 6, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Types$South_ = function (a) {
	return {$: 4, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Types$West_ = function (a) {
	return {$: 8, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$moveExt = F2(
	function (n, dir) {
		switch (dir.$) {
			case 3:
				return andre_dietrich$elm_svgbob$SvgBob$Types$South_(n);
			case 4:
				var m = dir.a;
				return andre_dietrich$elm_svgbob$SvgBob$Types$South_(n * m);
			case 5:
				return andre_dietrich$elm_svgbob$SvgBob$Types$North_(n);
			case 6:
				var m = dir.a;
				return andre_dietrich$elm_svgbob$SvgBob$Types$North_(n * m);
			case 1:
				return andre_dietrich$elm_svgbob$SvgBob$Types$East_(n);
			case 2:
				var m = dir.a;
				return andre_dietrich$elm_svgbob$SvgBob$Types$East_(n * m);
			case 7:
				return andre_dietrich$elm_svgbob$SvgBob$Types$West_(n);
			case 8:
				var m = dir.a;
				return andre_dietrich$elm_svgbob$SvgBob$Types$West_(n * m);
			case 9:
				var dir1 = dir.a;
				var dir2 = dir.b;
				return A2(
					andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
					A2(andre_dietrich$elm_svgbob$SvgBob$Grid$moveExt, n, dir1),
					A2(andre_dietrich$elm_svgbob$SvgBob$Grid$moveExt, n, dir2));
			case 10:
				var m = dir.a;
				var dir1 = dir.b;
				var dir2 = dir.c;
				return A2(
					andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
					A2(andre_dietrich$elm_svgbob$SvgBob$Grid$moveExt, n * m, dir1),
					A2(andre_dietrich$elm_svgbob$SvgBob$Grid$moveExt, n * m, dir2));
			default:
				return andre_dietrich$elm_svgbob$SvgBob$Types$Center;
		}
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$textHeight = 16.0;
var andre_dietrich$elm_svgbob$SvgBob$Grid$textWidth = 8.0;
var andre_dietrich$elm_svgbob$SvgBob$Grid$move = F2(
	function (dir, pt) {
		switch (dir.$) {
			case 3:
				return _Utils_update(
					pt,
					{ft: pt.ft + (andre_dietrich$elm_svgbob$SvgBob$Grid$textHeight / 2)});
			case 4:
				var n = dir.a;
				return _Utils_update(
					pt,
					{ft: pt.ft + ((andre_dietrich$elm_svgbob$SvgBob$Grid$textHeight / 2) * n)});
			case 5:
				return _Utils_update(
					pt,
					{ft: pt.ft - (andre_dietrich$elm_svgbob$SvgBob$Grid$textHeight / 2)});
			case 6:
				var n = dir.a;
				return _Utils_update(
					pt,
					{ft: pt.ft - ((andre_dietrich$elm_svgbob$SvgBob$Grid$textHeight / 2) * n)});
			case 1:
				return _Utils_update(
					pt,
					{dn: pt.dn + (andre_dietrich$elm_svgbob$SvgBob$Grid$textWidth / 2)});
			case 2:
				var n = dir.a;
				return _Utils_update(
					pt,
					{dn: pt.dn + ((andre_dietrich$elm_svgbob$SvgBob$Grid$textWidth / 2) * n)});
			case 7:
				return _Utils_update(
					pt,
					{dn: pt.dn - (andre_dietrich$elm_svgbob$SvgBob$Grid$textWidth / 2)});
			case 8:
				var n = dir.a;
				return _Utils_update(
					pt,
					{dn: pt.dn - ((andre_dietrich$elm_svgbob$SvgBob$Grid$textWidth / 2) * n)});
			case 9:
				var dir1 = dir.a;
				var dir2 = dir.b;
				return A2(
					andre_dietrich$elm_svgbob$SvgBob$Grid$move,
					dir2,
					A2(andre_dietrich$elm_svgbob$SvgBob$Grid$move, dir1, pt));
			case 10:
				var n = dir.a;
				var dir1 = dir.b;
				var dir2 = dir.c;
				return A2(
					andre_dietrich$elm_svgbob$SvgBob$Grid$move,
					A2(andre_dietrich$elm_svgbob$SvgBob$Grid$moveExt, n, dir2),
					A2(
						andre_dietrich$elm_svgbob$SvgBob$Grid$move,
						A2(andre_dietrich$elm_svgbob$SvgBob$Grid$moveExt, n, dir1),
						pt));
			default:
				return pt;
		}
	});
var elm$core$String$fromFloat = _String_fromNumber;
var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var andre_dietrich$elm_svgbob$SvgBob$Grid$drawArc = F4(
	function (s, faktor, pos, dir) {
		var radius = s.dt * faktor;
		var pos2 = A2(andre_dietrich$elm_svgbob$SvgBob$Grid$move, dir, pos);
		return A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$d(
					A2(
						elm$core$String$join,
						' ',
						_List_fromArray(
							[
								'M',
								elm$core$String$fromFloat(pos.dn),
								elm$core$String$fromFloat(pos.ft),
								'A',
								elm$core$String$fromFloat(radius),
								elm$core$String$fromFloat(radius),
								'0',
								'0',
								'0',
								elm$core$String$fromFloat(pos2.dn),
								elm$core$String$fromFloat(pos2.ft)
							]))),
					elm$svg$Svg$Attributes$stroke('black'),
					elm$svg$Svg$Attributes$strokeWidth(
					elm$core$String$fromFloat(s.ew)),
					elm$svg$Svg$Attributes$fill('transparent'),
					andre_dietrich$elm_svgbob$SvgBob$Grid$vectorEffect
				]),
			_List_Nil);
	});
var avh4$elm_color$Color$toRgba = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	var a = _n0.d;
	return {ds: a, dz: b, d4: g, eW: r};
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$colorText = function (color) {
	var _n0 = avh4$elm_color$Color$toRgba(color);
	var red = _n0.eW;
	var green = _n0.d4;
	var blue = _n0.dz;
	var alpha = _n0.ds;
	return 'rgb(' + (elm$core$String$fromFloat(red) + (',' + (elm$core$String$fromFloat(green) + (',' + (elm$core$String$fromFloat(blue) + ')')))));
};
var andre_dietrich$elm_svgbob$SvgBob$Types$East = {$: 1};
var andre_dietrich$elm_svgbob$SvgBob$Types$Ext_ = F3(
	function (a, b, c) {
		return {$: 10, a: a, b: b, c: c};
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$North = {$: 5};
var andre_dietrich$elm_svgbob$SvgBob$Types$South = {$: 3};
var andre_dietrich$elm_svgbob$SvgBob$Types$West = {$: 7};
var andre_dietrich$elm_svgbob$SvgBob$Grid$opposite = function (dir) {
	switch (dir.$) {
		case 1:
			return andre_dietrich$elm_svgbob$SvgBob$Types$West;
		case 2:
			var n = dir.a;
			return andre_dietrich$elm_svgbob$SvgBob$Types$West_(n);
		case 7:
			return andre_dietrich$elm_svgbob$SvgBob$Types$East;
		case 8:
			var n = dir.a;
			return andre_dietrich$elm_svgbob$SvgBob$Types$East_(n);
		case 5:
			return andre_dietrich$elm_svgbob$SvgBob$Types$South;
		case 6:
			var n = dir.a;
			return andre_dietrich$elm_svgbob$SvgBob$Types$South_(n);
		case 3:
			return andre_dietrich$elm_svgbob$SvgBob$Types$North;
		case 4:
			var n = dir.a;
			return andre_dietrich$elm_svgbob$SvgBob$Types$North_(n);
		case 9:
			var dir1 = dir.a;
			var dir2 = dir.b;
			return A2(
				andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
				andre_dietrich$elm_svgbob$SvgBob$Grid$opposite(dir1),
				andre_dietrich$elm_svgbob$SvgBob$Grid$opposite(dir2));
		case 10:
			var n = dir.a;
			var dir1 = dir.b;
			var dir2 = dir.c;
			return A3(
				andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
				n,
				andre_dietrich$elm_svgbob$SvgBob$Grid$opposite(dir1),
				andre_dietrich$elm_svgbob$SvgBob$Grid$opposite(dir2));
		default:
			return dir;
	}
};
var elm$svg$Svg$line = elm$svg$Svg$trustedNode('line');
var elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var andre_dietrich$elm_svgbob$SvgBob$Grid$toLine = F3(
	function (misc, pos, dir) {
		var pos2 = A2(andre_dietrich$elm_svgbob$SvgBob$Grid$move, dir, pos);
		return A2(
			elm$svg$Svg$line,
			A2(
				elm$core$List$append,
				misc,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$x1(
						elm$core$String$fromFloat(pos.dn)),
						elm$svg$Svg$Attributes$x2(
						elm$core$String$fromFloat(pos2.dn)),
						elm$svg$Svg$Attributes$y1(
						elm$core$String$fromFloat(pos.ft)),
						elm$svg$Svg$Attributes$y2(
						elm$core$String$fromFloat(pos2.ft))
					])),
			_List_Nil);
	});
var elm$svg$Svg$Attributes$markerEnd = _VirtualDom_attribute('marker-end');
var elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var andre_dietrich$elm_svgbob$SvgBob$Grid$drawArrow = F3(
	function (settings, pos, dir) {
		return A3(
			andre_dietrich$elm_svgbob$SvgBob$Grid$toLine,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$style(
					'stroke: ' + (andre_dietrich$elm_svgbob$SvgBob$Grid$colorText(settings.dF) + (';stroke-width:' + elm$core$String$fromFloat(settings.ew)))),
					elm$svg$Svg$Attributes$markerEnd('url(#triangle)'),
					andre_dietrich$elm_svgbob$SvgBob$Grid$vectorEffect
				]),
			A2(andre_dietrich$elm_svgbob$SvgBob$Grid$move, dir, pos),
			andre_dietrich$elm_svgbob$SvgBob$Grid$opposite(dir));
	});
var elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var andre_dietrich$elm_svgbob$SvgBob$Grid$drawLineX = function (s) {
	return andre_dietrich$elm_svgbob$SvgBob$Grid$toLine(
		_List_fromArray(
			[
				elm$svg$Svg$Attributes$stroke(
				andre_dietrich$elm_svgbob$SvgBob$Grid$colorText(s.dF)),
				elm$svg$Svg$Attributes$strokeWidth(
				elm$core$String$fromFloat(s.ew)),
				elm$svg$Svg$Attributes$strokeLinecap('round'),
				elm$svg$Svg$Attributes$strokeLinejoin('mitter'),
				andre_dietrich$elm_svgbob$SvgBob$Grid$vectorEffect
			]));
};
var elm$svg$Svg$rect = elm$svg$Svg$trustedNode('rect');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var andre_dietrich$elm_svgbob$SvgBob$Grid$drawSquare = F2(
	function (settings, pos) {
		return A2(
			elm$svg$Svg$rect,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x(
					elm$core$String$fromFloat(pos.dn - 4)),
					elm$svg$Svg$Attributes$y(
					elm$core$String$fromFloat(pos.ft - 4)),
					elm$svg$Svg$Attributes$width('8'),
					elm$svg$Svg$Attributes$height('8')
				]),
			_List_Nil);
	});
var elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var elm$svg$Svg$node = elm$virtual_dom$VirtualDom$nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$text = elm$virtual_dom$VirtualDom$text;
var andre_dietrich$elm_svgbob$SvgBob$Grid$drawText = F3(
	function (s, pos, _char) {
		var pos2 = A2(
			andre_dietrich$elm_svgbob$SvgBob$Grid$move,
			A2(
				andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
				andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5),
				andre_dietrich$elm_svgbob$SvgBob$Types$West),
			pos);
		return A3(
			elm$svg$Svg$node,
			'text',
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x(
					elm$core$String$fromFloat(pos2.dn)),
					elm$svg$Svg$Attributes$y(
					elm$core$String$fromFloat(pos2.ft)),
					elm$svg$Svg$Attributes$style(
					'font-size:' + (elm$core$String$fromFloat(s.d2) + 'px;font-family:monospace'))
				]),
			_List_fromArray(
				[
					elm$svg$Svg$text(_char)
				]));
	});
var elm$svg$Svg$circle = elm$svg$Svg$trustedNode('circle');
var elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var andre_dietrich$elm_svgbob$SvgBob$Grid$draw = F3(
	function (settings, pos, element) {
		switch (element.$) {
			case 3:
				var dir = element.a;
				return _List_fromArray(
					[
						A3(andre_dietrich$elm_svgbob$SvgBob$Grid$drawArrow, settings, pos, dir)
					]);
			case 1:
				var _char = element.a;
				return _List_fromArray(
					[
						A3(andre_dietrich$elm_svgbob$SvgBob$Grid$drawText, settings, pos, _char)
					]);
			case 2:
				var start = element.a;
				var stop = element.b;
				return _List_fromArray(
					[
						A3(
						andre_dietrich$elm_svgbob$SvgBob$Grid$drawLineX,
						settings,
						A2(andre_dietrich$elm_svgbob$SvgBob$Grid$move, start, pos),
						stop)
					]);
			case 4:
				var faktor = element.a;
				var start = element.b;
				var stop = element.c;
				return _List_fromArray(
					[
						A4(
						andre_dietrich$elm_svgbob$SvgBob$Grid$drawArc,
						settings,
						faktor,
						A2(andre_dietrich$elm_svgbob$SvgBob$Grid$move, start, pos),
						stop)
					]);
			case 5:
				var elements = element.a;
				return elm$core$List$concat(
					A2(
						elm$core$List$map,
						A2(andre_dietrich$elm_svgbob$SvgBob$Grid$draw, settings, pos),
						elements));
			case 6:
				return _List_fromArray(
					[
						A2(andre_dietrich$elm_svgbob$SvgBob$Grid$drawSquare, settings, pos)
					]);
			case 7:
				var filled = element.a;
				return _List_fromArray(
					[
						A2(
						elm$svg$Svg$circle,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$cx(
								elm$core$String$fromFloat(pos.dn)),
								elm$svg$Svg$Attributes$cy(
								elm$core$String$fromFloat(pos.ft)),
								elm$svg$Svg$Attributes$r(
								elm$core$String$fromFloat(settings.dt)),
								elm$svg$Svg$Attributes$fill(
								filled ? 'black' : 'white'),
								elm$svg$Svg$Attributes$stroke('black'),
								elm$svg$Svg$Attributes$strokeWidth(
								elm$core$String$fromFloat(settings.ew))
							]),
						_List_Nil)
					]);
			default:
				return _List_Nil;
		}
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$apply = F2(
	function (matrix, list) {
		apply:
		while (true) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var _n1 = list.a;
				var if_ = _n1.a;
				var then_ = _n1.b;
				var fns = list.b;
				if (if_(matrix)) {
					return A2(
						elm$core$List$cons,
						then_,
						A2(andre_dietrich$elm_svgbob$SvgBob$Grid$apply, matrix, fns));
				} else {
					var $temp$matrix = matrix,
						$temp$list = fns;
					matrix = $temp$matrix;
					list = $temp$list;
					continue apply;
				}
			}
		}
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$Sequence = function (a) {
	return {$: 5, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Types$Text = function (a) {
	return {$: 1, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$sequenceWithDefault = F2(
	function (_char, list) {
		return _Utils_eq(list, _List_Nil) ? andre_dietrich$elm_svgbob$SvgBob$Types$Text(_char) : andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(list);
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$Corner = {$: 7};
var andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal = {$: 4};
var andre_dietrich$elm_svgbob$SvgBob$Types$Intersection = {$: 6};
var andre_dietrich$elm_svgbob$SvgBob$Types$Line = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft = {$: 10};
var andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight = {$: 9};
var andre_dietrich$elm_svgbob$SvgBob$Types$Vertical = {$: 2};
var andre_dietrich$elm_svgbob$SvgBob$Grid$intersection = F2(
	function (_char, matrix) {
		return A2(
			andre_dietrich$elm_svgbob$SvgBob$Grid$sequenceWithDefault,
			_char,
			A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$apply,
				matrix,
				_List_fromArray(
					[
						_Utils_Tuple2(
						function (_n0) {
							var north = _n0.h;
							return _Utils_eq(north, andre_dietrich$elm_svgbob$SvgBob$Types$Vertical) || (_Utils_eq(north, andre_dietrich$elm_svgbob$SvgBob$Types$Intersection) || _Utils_eq(north, andre_dietrich$elm_svgbob$SvgBob$Types$Corner));
						},
						A2(andre_dietrich$elm_svgbob$SvgBob$Types$Line, andre_dietrich$elm_svgbob$SvgBob$Types$Center, andre_dietrich$elm_svgbob$SvgBob$Types$North)),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(m.i, andre_dietrich$elm_svgbob$SvgBob$Types$Vertical) || (_Utils_eq(m.i, andre_dietrich$elm_svgbob$SvgBob$Types$Intersection) || _Utils_eq(m.i, andre_dietrich$elm_svgbob$SvgBob$Types$Corner));
						},
						A2(andre_dietrich$elm_svgbob$SvgBob$Types$Line, andre_dietrich$elm_svgbob$SvgBob$Types$Center, andre_dietrich$elm_svgbob$SvgBob$Types$South)),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.g;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal)),
						A2(andre_dietrich$elm_svgbob$SvgBob$Types$Line, andre_dietrich$elm_svgbob$SvgBob$Types$Center, andre_dietrich$elm_svgbob$SvgBob$Types$East)),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.j;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal)),
						A2(andre_dietrich$elm_svgbob$SvgBob$Types$Line, andre_dietrich$elm_svgbob$SvgBob$Types$Center, andre_dietrich$elm_svgbob$SvgBob$Types$West)),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.p;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							andre_dietrich$elm_svgbob$SvgBob$Types$Center,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$West))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.o;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							andre_dietrich$elm_svgbob$SvgBob$Types$Center,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.s;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							andre_dietrich$elm_svgbob$SvgBob$Types$Center,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.r;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							andre_dietrich$elm_svgbob$SvgBob$Types$Center,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East)))
					])));
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric = {$: 3};
var andre_dietrich$elm_svgbob$SvgBob$Types$Circle = function (a) {
	return {$: 7, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$circle = F3(
	function (filled, _char, m) {
		if (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric, m.j) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric, m.g)) {
			return andre_dietrich$elm_svgbob$SvgBob$Types$Text(_char);
		} else {
			var _n0 = A2(andre_dietrich$elm_svgbob$SvgBob$Grid$intersection, _char, m);
			if (_n0.$ === 5) {
				var list = _n0.a;
				return andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
					A2(
						elm$core$List$append,
						list,
						_List_fromArray(
							[
								andre_dietrich$elm_svgbob$SvgBob$Types$Circle(filled)
							])));
			} else {
				return andre_dietrich$elm_svgbob$SvgBob$Types$Text(_char);
			}
		}
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$Curve = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$closeCurve = F2(
	function (_char, matrix) {
		return A2(
			andre_dietrich$elm_svgbob$SvgBob$Grid$sequenceWithDefault,
			_char,
			A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$apply,
				matrix,
				_List_fromArray(
					[
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.p) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.s);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							andre_dietrich$elm_svgbob$SvgBob$Types$South,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$North))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.s);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$North)))
					])));
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$CloseCurve = {$: 1};
var andre_dietrich$elm_svgbob$SvgBob$Types$LowHorizontal = {$: 5};
var andre_dietrich$elm_svgbob$SvgBob$Types$OpenCurve = {$: 0};
var andre_dietrich$elm_svgbob$SvgBob$Grid$corner = F2(
	function (_char, matrix) {
		return A2(
			andre_dietrich$elm_svgbob$SvgBob$Grid$sequenceWithDefault,
			_char,
			A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$apply,
				matrix,
				_List_fromArray(
					[
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.j) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.g);
						},
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							andre_dietrich$elm_svgbob$SvgBob$Types$West,
							andre_dietrich$elm_svgbob$SvgBob$Types$East_(2))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.i);
						},
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							andre_dietrich$elm_svgbob$SvgBob$Types$North,
							andre_dietrich$elm_svgbob$SvgBob$Types$South_(2))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.o) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.s);
						},
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							andre_dietrich$elm_svgbob$SvgBob$Types$Center,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(2)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.s);
						},
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							A3(andre_dietrich$elm_svgbob$SvgBob$Types$Ext_, 2, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.r);
						},
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							A3(andre_dietrich$elm_svgbob$SvgBob$Types$Ext_, 2, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East))),
						_Utils_Tuple2(
						function (m) {
							return (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) || (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.h) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection, m.h))) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.j);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A3(
									andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
									1,
									andre_dietrich$elm_svgbob$SvgBob$Types$West,
									A2(
										andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
										andre_dietrich$elm_svgbob$SvgBob$Types$North_(0.5),
										andre_dietrich$elm_svgbob$SvgBob$Types$East)),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$North,
									andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5))
								]))),
						_Utils_Tuple2(
						function (m) {
							return (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) || (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.h) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection, m.h))) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.g);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A3(
									andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
									1,
									andre_dietrich$elm_svgbob$SvgBob$Types$North_(0.5),
									A2(
										andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
										andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5),
										andre_dietrich$elm_svgbob$SvgBob$Types$East)),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$North,
									andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5))
								]))),
						_Utils_Tuple2(
						function (m) {
							return (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.i) || (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.i) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection, m.i))) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.j);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A3(
									andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
									1,
									andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5),
									A2(
										andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
										andre_dietrich$elm_svgbob$SvgBob$Types$North_(0.5),
										andre_dietrich$elm_svgbob$SvgBob$Types$West)),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$South,
									andre_dietrich$elm_svgbob$SvgBob$Types$North_(0.5))
								]))),
						_Utils_Tuple2(
						function (m) {
							return (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) || (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.h) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection, m.h))) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$LowHorizontal, m.j);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A3(
									andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
									1,
									A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
									A2(
										andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
										andre_dietrich$elm_svgbob$SvgBob$Types$North_(0.5),
										andre_dietrich$elm_svgbob$SvgBob$Types$East)),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$North,
									andre_dietrich$elm_svgbob$SvgBob$Types$South_(1.5))
								]))),
						_Utils_Tuple2(
						function (m) {
							return (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.i) || (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.i) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection, m.i))) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$LowHorizontal, m.j);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							1,
							andre_dietrich$elm_svgbob$SvgBob$Types$South_(1.5),
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$North_(0.5),
								andre_dietrich$elm_svgbob$SvgBob$Types$West))),
						_Utils_Tuple2(
						function (m) {
							return (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.i) || (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.i) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection, m.i))) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$LowHorizontal, m.g);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							1,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5),
								andre_dietrich$elm_svgbob$SvgBob$Types$West))),
						_Utils_Tuple2(
						function (m) {
							return (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) || (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.h) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection, m.h))) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$LowHorizontal, m.g);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A3(
									andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
									1,
									andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5),
									A2(
										andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
										andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5),
										andre_dietrich$elm_svgbob$SvgBob$Types$East)),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$North,
									andre_dietrich$elm_svgbob$SvgBob$Types$South_(1.5))
								]))),
						_Utils_Tuple2(
						function (m) {
							return (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.i) || (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.i) || _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection, m.i))) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.g);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A3(
									andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
									1,
									andre_dietrich$elm_svgbob$SvgBob$Types$East,
									A2(
										andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
										andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.5),
										andre_dietrich$elm_svgbob$SvgBob$Types$West)),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$South,
									andre_dietrich$elm_svgbob$SvgBob$Types$North_(0.5))
								]))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.r) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.j);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							3,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								2,
								andre_dietrich$elm_svgbob$SvgBob$Types$North_(0.5),
								andre_dietrich$elm_svgbob$SvgBob$Types$West))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.j);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							3,
							andre_dietrich$elm_svgbob$SvgBob$Types$West,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(2)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.g);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							3,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(2)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.p) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.g);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							3,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(20)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.s) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.g);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							3,
							andre_dietrich$elm_svgbob$SvgBob$Types$East,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(2)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.s);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							8,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								2,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(0.5)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.r);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							8,
							andre_dietrich$elm_svgbob$SvgBob$Types$North,
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								2,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(0.5)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.i) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							8,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								2,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(0.5)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.i) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							8,
							andre_dietrich$elm_svgbob$SvgBob$Types$South,
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								2,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(0.5)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.g) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							2,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							andre_dietrich$elm_svgbob$SvgBob$Types$South)),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.j) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p);
						},
						A3(andre_dietrich$elm_svgbob$SvgBob$Types$Curve, 2, andre_dietrich$elm_svgbob$SvgBob$Types$West, andre_dietrich$elm_svgbob$SvgBob$Types$North)),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.j) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.s);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							2,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							andre_dietrich$elm_svgbob$SvgBob$Types$North)),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.g) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.r);
						},
						A3(andre_dietrich$elm_svgbob$SvgBob$Types$Curve, 2, andre_dietrich$elm_svgbob$SvgBob$Types$East, andre_dietrich$elm_svgbob$SvgBob$Types$South)),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$LowHorizontal, m.g) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							andre_dietrich$elm_svgbob$SvgBob$Types$South_(2))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$LowHorizontal, m.j) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							andre_dietrich$elm_svgbob$SvgBob$Types$North_(2))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal, m.j) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$CloseCurve, m.r);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(2)),
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(3)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$OpenCurve, m.s);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							andre_dietrich$elm_svgbob$SvgBob$Types$East,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(3)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$CloseCurve, m.r);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(2)),
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(3)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$OpenCurve, m.p);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(2)),
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(3)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$CloseCurve, m.o);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							andre_dietrich$elm_svgbob$SvgBob$Types$West,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(3)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A2(andre_dietrich$elm_svgbob$SvgBob$Types$Line, andre_dietrich$elm_svgbob$SvgBob$Types$Center, andre_dietrich$elm_svgbob$SvgBob$Types$North),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$Center,
									A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East))
								]))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A2(andre_dietrich$elm_svgbob$SvgBob$Types$Line, andre_dietrich$elm_svgbob$SvgBob$Types$Center, andre_dietrich$elm_svgbob$SvgBob$Types$North),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$Center,
									A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$West))
								]))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p);
						},
						andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
							_List_fromArray(
								[
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$Center,
									A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East)),
									A2(
									andre_dietrich$elm_svgbob$SvgBob$Types$Line,
									andre_dietrich$elm_svgbob$SvgBob$Types$Center,
									A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$West))
								])))
					])));
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$horizontal = F2(
	function (_char, matrix) {
		return A2(
			andre_dietrich$elm_svgbob$SvgBob$Grid$sequenceWithDefault,
			_char,
			A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$apply,
				matrix,
				_List_fromArray(
					[
						_Utils_Tuple2(
						function (m) {
							return (!_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric, m.j)) || (!_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric, m.g));
						},
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							andre_dietrich$elm_svgbob$SvgBob$Types$East,
							andre_dietrich$elm_svgbob$SvgBob$Types$West_(2)))
					])));
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$lowHorizontal = F2(
	function (_char, matrix) {
		return A2(
			andre_dietrich$elm_svgbob$SvgBob$Grid$sequenceWithDefault,
			_char,
			A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$apply,
				matrix,
				_List_fromArray(
					[
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.j;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							andre_dietrich$elm_svgbob$SvgBob$Types$West_(4))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.j;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							andre_dietrich$elm_svgbob$SvgBob$Types$West_(3))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.g;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							andre_dietrich$elm_svgbob$SvgBob$Types$East_(4))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.g;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							andre_dietrich$elm_svgbob$SvgBob$Types$East_(4))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.g;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							andre_dietrich$elm_svgbob$SvgBob$Types$East_(3))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.s;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(2)),
							andre_dietrich$elm_svgbob$SvgBob$Types$East_(3))),
						_Utils_Tuple2(
						A2(
							elm$core$Basics$composeR,
							function ($) {
								return $.r;
							},
							elm$core$Basics$eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical)),
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							andre_dietrich$elm_svgbob$SvgBob$Types$East_(3))),
						_Utils_Tuple2(
						function (m) {
							return (!_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric, m.j)) && (!_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric, m.g));
						},
						A2(
							andre_dietrich$elm_svgbob$SvgBob$Types$Line,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							andre_dietrich$elm_svgbob$SvgBob$Types$West_(2))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$OpenCurve, m.s);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							1,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West),
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								0.15,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(4)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$OpenCurve, m.j);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							1,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South_(0.75),
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(1.6)),
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								0.2,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(4)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$CloseCurve, m.r);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							1,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South_(1.15),
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(1.7)),
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								0.15,
								andre_dietrich$elm_svgbob$SvgBob$Types$North,
								andre_dietrich$elm_svgbob$SvgBob$Types$West_(4)))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$CloseCurve, m.g);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							1,
							A2(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext,
								andre_dietrich$elm_svgbob$SvgBob$Types$South,
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(1)),
							A3(
								andre_dietrich$elm_svgbob$SvgBob$Types$Ext_,
								0.2,
								andre_dietrich$elm_svgbob$SvgBob$Types$North_(2),
								andre_dietrich$elm_svgbob$SvgBob$Types$East_(4))))
					])));
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$openCurve = F2(
	function (_char, matrix) {
		return A2(
			andre_dietrich$elm_svgbob$SvgBob$Grid$sequenceWithDefault,
			_char,
			A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$apply,
				matrix,
				_List_fromArray(
					[
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.o) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Corner, m.r);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							andre_dietrich$elm_svgbob$SvgBob$Types$North,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$South))),
						_Utils_Tuple2(
						function (m) {
							return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o) && _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.r);
						},
						A3(
							andre_dietrich$elm_svgbob$SvgBob$Types$Curve,
							4,
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East),
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$South)))
					])));
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$Box = {$: 6};
var andre_dietrich$elm_svgbob$SvgBob$Types$Triangle = function (a) {
	return {$: 3, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$getElement = F2(
	function (m, _n0) {
		var _char = _n0.a;
		var elem = _n0.b;
		switch (elem.$) {
			case 2:
				return ((!_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric, m.j)) || (!_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric, m.g))) ? A2(
					andre_dietrich$elm_svgbob$SvgBob$Types$Line,
					andre_dietrich$elm_svgbob$SvgBob$Types$South,
					A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$North)) : andre_dietrich$elm_svgbob$SvgBob$Types$Text(_char);
			case 4:
				return A2(andre_dietrich$elm_svgbob$SvgBob$Grid$horizontal, _char, m);
			case 5:
				return A2(andre_dietrich$elm_svgbob$SvgBob$Grid$lowHorizontal, _char, m);
			case 6:
				return A2(andre_dietrich$elm_svgbob$SvgBob$Grid$intersection, _char, m);
			case 8:
				switch (elem.a.$) {
					case 3:
						var _n2 = elem.a;
						return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.h) ? andre_dietrich$elm_svgbob$SvgBob$Types$Triangle(andre_dietrich$elm_svgbob$SvgBob$Types$North) : (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.o) ? andre_dietrich$elm_svgbob$SvgBob$Types$Triangle(
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East)) : (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.p) ? andre_dietrich$elm_svgbob$SvgBob$Types$Triangle(
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$West)) : andre_dietrich$elm_svgbob$SvgBob$Types$Text(_char)));
					case 5:
						var _n3 = elem.a;
						return _Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical, m.i) ? andre_dietrich$elm_svgbob$SvgBob$Types$Triangle(andre_dietrich$elm_svgbob$SvgBob$Types$South) : (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight, m.s) ? andre_dietrich$elm_svgbob$SvgBob$Types$Triangle(
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West)) : (_Utils_eq(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft, m.r) ? andre_dietrich$elm_svgbob$SvgBob$Types$Triangle(
							A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East)) : andre_dietrich$elm_svgbob$SvgBob$Types$Text(_char)));
					default:
						var dir = elem.a;
						return andre_dietrich$elm_svgbob$SvgBob$Types$Triangle(dir);
				}
			case 7:
				return A2(andre_dietrich$elm_svgbob$SvgBob$Grid$corner, _char, m);
			case 9:
				return A2(
					andre_dietrich$elm_svgbob$SvgBob$Types$Line,
					A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$East),
					A3(andre_dietrich$elm_svgbob$SvgBob$Types$Ext_, 2, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$West));
			case 10:
				return A2(
					andre_dietrich$elm_svgbob$SvgBob$Types$Line,
					A2(andre_dietrich$elm_svgbob$SvgBob$Types$Ext, andre_dietrich$elm_svgbob$SvgBob$Types$South, andre_dietrich$elm_svgbob$SvgBob$Types$East),
					A3(andre_dietrich$elm_svgbob$SvgBob$Types$Ext_, 2, andre_dietrich$elm_svgbob$SvgBob$Types$North, andre_dietrich$elm_svgbob$SvgBob$Types$West));
			case 0:
				return A2(andre_dietrich$elm_svgbob$SvgBob$Grid$openCurve, _char, m);
			case 1:
				return A2(andre_dietrich$elm_svgbob$SvgBob$Grid$closeCurve, _char, m);
			case 11:
				var _n4 = A2(andre_dietrich$elm_svgbob$SvgBob$Grid$intersection, _char, m);
				if (_n4.$ === 5) {
					var list = _n4.a;
					return andre_dietrich$elm_svgbob$SvgBob$Types$Sequence(
						A2(elm$core$List$cons, andre_dietrich$elm_svgbob$SvgBob$Types$Box, list));
				} else {
					return andre_dietrich$elm_svgbob$SvgBob$Types$Text(_char);
				}
			case 13:
				var filled = elem.a;
				return A3(andre_dietrich$elm_svgbob$SvgBob$Grid$circle, filled, _char, m);
			default:
				return andre_dietrich$elm_svgbob$SvgBob$Types$Text(_char);
		}
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$None = {$: 12};
var andre_dietrich$elm_svgbob$SvgBob$Grid$get = F2(
	function (pos, dict) {
		return A2(
			elm$core$Maybe$withDefault,
			andre_dietrich$elm_svgbob$SvgBob$Types$None,
			A2(
				elm$core$Maybe$map,
				elm$core$Tuple$second,
				A2(elm$core$Dict$get, pos, dict)));
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$getMatrix = F3(
	function (x, y, dict) {
		return {
			g: A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$get,
				_Utils_Tuple2(x + 1, y),
				dict),
			h: A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$get,
				_Utils_Tuple2(x, y - 1),
				dict),
			o: A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$get,
				_Utils_Tuple2(x + 1, y - 1),
				dict),
			p: A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$get,
				_Utils_Tuple2(x - 1, y - 1),
				dict),
			i: A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$get,
				_Utils_Tuple2(x, y + 1),
				dict),
			r: A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$get,
				_Utils_Tuple2(x + 1, y + 1),
				dict),
			s: A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$get,
				_Utils_Tuple2(x - 1, y + 1),
				dict),
			j: A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$get,
				_Utils_Tuple2(x - 1, y),
				dict)
		};
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$measureX = function (x) {
	return x * andre_dietrich$elm_svgbob$SvgBob$Grid$textWidth;
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$measureY = function (y) {
	return y * andre_dietrich$elm_svgbob$SvgBob$Grid$textHeight;
};
var andre_dietrich$elm_svgbob$SvgBob$Types$Point = F2(
	function (x, y) {
		return {dn: x, ft: y};
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$drawElement = F3(
	function (dict, settings, _n0) {
		var _n1 = _n0.a;
		var x = _n1.a;
		var y = _n1.b;
		var _n2 = _n0.b;
		var _char = _n2.a;
		var element = _n2.b;
		var position = A2(
			andre_dietrich$elm_svgbob$SvgBob$Types$Point,
			andre_dietrich$elm_svgbob$SvgBob$Grid$measureX(x) + (andre_dietrich$elm_svgbob$SvgBob$Grid$textWidth / 2),
			andre_dietrich$elm_svgbob$SvgBob$Grid$measureY(y) + (andre_dietrich$elm_svgbob$SvgBob$Grid$textHeight / 2));
		return A3(
			andre_dietrich$elm_svgbob$SvgBob$Grid$draw,
			settings,
			position,
			A2(
				andre_dietrich$elm_svgbob$SvgBob$Grid$getElement,
				A3(andre_dietrich$elm_svgbob$SvgBob$Grid$getMatrix, x, y, dict),
				_Utils_Tuple2(_char, element)));
	});
var andre_dietrich$elm_svgbob$SvgBob$Types$Arrow = function (a) {
	return {$: 8, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Types$O = function (a) {
	return {$: 13, a: a};
};
var andre_dietrich$elm_svgbob$SvgBob$Types$Square = {$: 11};
var andre_dietrich$elm_svgbob$SvgBob$Grid$getScan = function (_char) {
	switch (_char) {
		case ' ':
			return elm$core$Maybe$Nothing;
		case '-':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Horizontal);
		case '_':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$LowHorizontal);
		case '+':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Intersection);
		case '.':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Corner);
		case '\'':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Corner);
		case ',':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Corner);
		case '`':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Corner);
		case '´':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Corner);
		case '>':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$Arrow(andre_dietrich$elm_svgbob$SvgBob$Types$West));
		case '<':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$Arrow(andre_dietrich$elm_svgbob$SvgBob$Types$East));
		case 'V':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$Arrow(andre_dietrich$elm_svgbob$SvgBob$Types$South));
		case 'v':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$Arrow(andre_dietrich$elm_svgbob$SvgBob$Types$South));
		case '^':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$Arrow(andre_dietrich$elm_svgbob$SvgBob$Types$North));
		case 'î':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$Arrow(andre_dietrich$elm_svgbob$SvgBob$Types$North));
		case '/':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$SlantRight);
		case '\\':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$SlantLeft);
		case '(':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$OpenCurve);
		case ')':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$CloseCurve);
		case '|':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Vertical);
		case '#':
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$Square);
		case 'O':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$O(false));
		case 'o':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$O(false));
		case '*':
			return elm$core$Maybe$Just(
				andre_dietrich$elm_svgbob$SvgBob$Types$O(true));
		default:
			var x = _char;
			return elm$core$Maybe$Just(andre_dietrich$elm_svgbob$SvgBob$Types$AlphaNumeric);
	}
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$scanElement = F3(
	function (y, _char, _n0) {
		var rslt = _n0.a;
		var x = _n0.b;
		var _n1 = andre_dietrich$elm_svgbob$SvgBob$Grid$getScan(_char);
		if (_n1.$ === 1) {
			return _Utils_Tuple2(rslt, x + 1);
		} else {
			var elem = _n1.a;
			return _Utils_Tuple2(
				A2(
					elm$core$List$cons,
					_Utils_Tuple2(
						_Utils_Tuple2(x, y),
						_Utils_Tuple2(_char, elem)),
					rslt),
				x + 1);
		}
	});
var andre_dietrich$elm_svgbob$SvgBob$Grid$scanLine = function (y) {
	return A2(
		elm$core$Basics$composeR,
		elm$core$String$trimRight,
		A2(
			elm$core$Basics$composeR,
			elm$core$String$split(''),
			A2(
				elm$core$Basics$composeR,
				A2(
					elm$core$List$foldl,
					andre_dietrich$elm_svgbob$SvgBob$Grid$scanElement(y),
					_Utils_Tuple2(_List_Nil, 0)),
				elm$core$Tuple$first)));
};
var andre_dietrich$elm_svgbob$SvgBob$Grid$drawPaths = function (model) {
	var elements = elm$core$List$concat(
		A2(elm$core$List$indexedMap, andre_dietrich$elm_svgbob$SvgBob$Grid$scanLine, model.ac));
	var dict = elm$core$Dict$fromList(elements);
	var fn = A2(andre_dietrich$elm_svgbob$SvgBob$Grid$drawElement, dict, model.ai);
	return elm$core$List$concat(
		A2(elm$core$List$map, fn, elements));
};
var elm$svg$Svg$defs = elm$svg$Svg$trustedNode('defs');
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var andre_dietrich$elm_svgbob$SvgBob$Grid$getSvg = F2(
	function (attr, model) {
		var gwidth = elm$core$String$fromFloat(
			andre_dietrich$elm_svgbob$SvgBob$Grid$measureX(model.dH) + 10);
		var gheight = elm$core$String$fromFloat(
			andre_dietrich$elm_svgbob$SvgBob$Grid$measureY(model.e$) + 10);
		return A2(
			elm$svg$Svg$svg,
			A2(
				elm$core$List$cons,
				elm$svg$Svg$Attributes$viewBox('0 0 ' + (gwidth + (' ' + gheight))),
				attr),
			A2(
				elm$core$List$cons,
				A2(
					elm$svg$Svg$defs,
					_List_Nil,
					_List_fromArray(
						[andre_dietrich$elm_svgbob$SvgBob$Grid$arrowMarker])),
				andre_dietrich$elm_svgbob$SvgBob$Grid$drawPaths(model)));
	});
var andre_dietrich$elm_svgbob$SvgBob$getSvg = andre_dietrich$elm_svgbob$SvgBob$Grid$getSvg;
var elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$max, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var andre_dietrich$elm_svgbob$SvgBob$Model$init = F2(
	function (settings, str) {
		var lines = elm$core$String$lines(str);
		var max = elm$core$List$maximum(
			A2(elm$core$List$map, elm$core$String$length, lines));
		return {
			dH: A2(elm$core$Maybe$withDefault, 0, max),
			ac: lines,
			e$: elm$core$List$length(lines),
			ai: settings
		};
	});
var andre_dietrich$elm_svgbob$SvgBob$init = andre_dietrich$elm_svgbob$SvgBob$Model$init;
var terezka$line_charts$Internal$Dots$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Dots$customAny = elm$core$Basics$identity;
var terezka$line_charts$LineChart$Dots$customAny = terezka$line_charts$Internal$Dots$customAny;
var terezka$line_charts$Internal$Dots$Full = {$: 3};
var terezka$line_charts$Internal$Dots$Style = elm$core$Basics$identity;
var terezka$line_charts$Internal$Dots$style = F2(
	function (radius, variety) {
		return {bj: radius, bA: variety};
	});
var terezka$line_charts$Internal$Dots$full = function (radius) {
	return A2(terezka$line_charts$Internal$Dots$style, radius, terezka$line_charts$Internal$Dots$Full);
};
var terezka$line_charts$LineChart$Dots$full = terezka$line_charts$Internal$Dots$full;
var author$project$Lia$Markdown$Chart$View$customDotsConfig = function () {
	var styleLegend = function (_n1) {
		return terezka$line_charts$LineChart$Dots$full(7);
	};
	var styleIndividual = function (_n0) {
		var small = _n0.b;
		return terezka$line_charts$LineChart$Dots$full(
			small ? 5 : 12);
	};
	return terezka$line_charts$LineChart$Dots$customAny(
		{eg: styleIndividual, es: styleLegend});
}();
var author$project$Lia$Markdown$Chart$View$dotSize = F2(
	function (c, points) {
		var small = elm$core$Char$isLower(c);
		return A2(
			elm$core$List$map,
			function (p) {
				return _Utils_Tuple2(p, small);
			},
			points);
	});
var terezka$line_charts$Internal$Dots$Circle = 1;
var terezka$line_charts$LineChart$Dots$circle = 1;
var terezka$line_charts$Internal$Dots$Cross = 5;
var terezka$line_charts$LineChart$Dots$cross = 5;
var terezka$line_charts$Internal$Dots$Plus = 6;
var terezka$line_charts$LineChart$Dots$plus = 6;
var terezka$line_charts$Internal$Dots$Square = 3;
var terezka$line_charts$LineChart$Dots$square = 3;
var terezka$line_charts$Internal$Dots$Triangle = 2;
var terezka$line_charts$LineChart$Dots$triangle = 2;
var author$project$Lia$Markdown$Chart$View$dotType = function (c) {
	switch (c) {
		case 't':
			return terezka$line_charts$LineChart$Dots$triangle;
		case 'T':
			return terezka$line_charts$LineChart$Dots$triangle;
		case 'A':
			return terezka$line_charts$LineChart$Dots$triangle;
		case 'v':
			return terezka$line_charts$LineChart$Dots$triangle;
		case 'V':
			return terezka$line_charts$LineChart$Dots$triangle;
		case '#':
			return terezka$line_charts$LineChart$Dots$square;
		case 'H':
			return terezka$line_charts$LineChart$Dots$square;
		case 'B':
			return terezka$line_charts$LineChart$Dots$square;
		case 'N':
			return terezka$line_charts$LineChart$Dots$square;
		case '+':
			return terezka$line_charts$LineChart$Dots$plus;
		case 'x':
			return terezka$line_charts$LineChart$Dots$cross;
		case 'X':
			return terezka$line_charts$LineChart$Dots$cross;
		default:
			return terezka$line_charts$LineChart$Dots$circle;
	}
};
var avh4$elm_color$Color$black = A4(avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var avh4$elm_color$Color$blue = A4(avh4$elm_color$Color$RgbaSpace, 52 / 255, 101 / 255, 164 / 255, 1.0);
var avh4$elm_color$Color$brown = A4(avh4$elm_color$Color$RgbaSpace, 193 / 255, 125 / 255, 17 / 255, 1.0);
var avh4$elm_color$Color$darkRed = A4(avh4$elm_color$Color$RgbaSpace, 164 / 255, 0 / 255, 0 / 255, 1.0);
var avh4$elm_color$Color$green = A4(avh4$elm_color$Color$RgbaSpace, 115 / 255, 210 / 255, 22 / 255, 1.0);
var avh4$elm_color$Color$grey = A4(avh4$elm_color$Color$RgbaSpace, 211 / 255, 215 / 255, 207 / 255, 1.0);
var avh4$elm_color$Color$orange = A4(avh4$elm_color$Color$RgbaSpace, 245 / 255, 121 / 255, 0 / 255, 1.0);
var avh4$elm_color$Color$scaleFrom255 = function (c) {
	return c / 255;
};
var avh4$elm_color$Color$rgb255 = F3(
	function (r, g, b) {
		return A4(
			avh4$elm_color$Color$RgbaSpace,
			avh4$elm_color$Color$scaleFrom255(r),
			avh4$elm_color$Color$scaleFrom255(g),
			avh4$elm_color$Color$scaleFrom255(b),
			1.0);
	});
var avh4$elm_color$Color$white = A4(avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
var avh4$elm_color$Color$yellow = A4(avh4$elm_color$Color$RgbaSpace, 237 / 255, 212 / 255, 0 / 255, 1.0);
var terezka$line_charts$LineChart$Colors$cyan = A3(avh4$elm_color$Color$rgb255, 0, 229, 255);
var terezka$line_charts$LineChart$Colors$pink = A3(avh4$elm_color$Color$rgb255, 245, 105, 215);
var terezka$line_charts$LineChart$Colors$purple = A3(avh4$elm_color$Color$rgb255, 156, 39, 176);
var terezka$line_charts$LineChart$Colors$red = A3(avh4$elm_color$Color$rgb255, 216, 27, 96);
var terezka$line_charts$LineChart$Colors$rust = A3(avh4$elm_color$Color$rgb255, 205, 102, 51);
var terezka$line_charts$LineChart$Colors$strongBlue = A3(avh4$elm_color$Color$rgb255, 89, 51, 204);
var terezka$line_charts$LineChart$Colors$teal = A3(avh4$elm_color$Color$rgb255, 29, 233, 182);
var author$project$Lia$Markdown$Chart$View$colors = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('*', avh4$elm_color$Color$black),
			_Utils_Tuple2('+', avh4$elm_color$Color$black),
			_Utils_Tuple2('x', avh4$elm_color$Color$black),
			_Utils_Tuple2(
			'a',
			A3(avh4$elm_color$Color$rgb255, 127, 255, 212)),
			_Utils_Tuple2('b', avh4$elm_color$Color$blue),
			_Utils_Tuple2('c', terezka$line_charts$LineChart$Colors$cyan),
			_Utils_Tuple2('d', avh4$elm_color$Color$darkRed),
			_Utils_Tuple2('e', avh4$elm_color$Color$grey),
			_Utils_Tuple2(
			'f',
			A3(avh4$elm_color$Color$rgb255, 230, 230, 250)),
			_Utils_Tuple2('g', avh4$elm_color$Color$green),
			_Utils_Tuple2(
			'h',
			A3(avh4$elm_color$Color$rgb255, 240, 255, 240)),
			_Utils_Tuple2(
			'i',
			A3(avh4$elm_color$Color$rgb255, 75, 0, 130)),
			_Utils_Tuple2('j', avh4$elm_color$Color$black),
			_Utils_Tuple2(
			'k',
			A3(avh4$elm_color$Color$rgb255, 240, 230, 140)),
			_Utils_Tuple2(
			'l',
			A3(avh4$elm_color$Color$rgb255, 230, 230, 250)),
			_Utils_Tuple2(
			'm',
			A3(avh4$elm_color$Color$rgb255, 255, 0, 255)),
			_Utils_Tuple2('n', avh4$elm_color$Color$brown),
			_Utils_Tuple2('o', avh4$elm_color$Color$orange),
			_Utils_Tuple2('p', terezka$line_charts$LineChart$Colors$pink),
			_Utils_Tuple2(
			'q',
			A3(avh4$elm_color$Color$rgb255, 0, 255, 255)),
			_Utils_Tuple2('r', terezka$line_charts$LineChart$Colors$red),
			_Utils_Tuple2('s', terezka$line_charts$LineChart$Colors$strongBlue),
			_Utils_Tuple2('t', terezka$line_charts$LineChart$Colors$teal),
			_Utils_Tuple2('u', terezka$line_charts$LineChart$Colors$rust),
			_Utils_Tuple2('v', terezka$line_charts$LineChart$Colors$purple),
			_Utils_Tuple2('w', avh4$elm_color$Color$white),
			_Utils_Tuple2('y', avh4$elm_color$Color$yellow),
			_Utils_Tuple2(
			'z',
			A3(avh4$elm_color$Color$rgb255, 240, 255, 255))
		]));
var elm$core$Char$toLower = _Char_toLower;
var author$project$Lia$Markdown$Chart$View$get_color = function (c) {
	return A2(
		elm$core$Maybe$withDefault,
		avh4$elm_color$Color$black,
		A2(
			elm$core$Dict$get,
			elm$core$Char$toLower(c),
			author$project$Lia$Markdown$Chart$View$colors));
};
var terezka$line_charts$Internal$Line$Series = elm$core$Basics$identity;
var terezka$line_charts$Internal$Line$SeriesConfig = F5(
	function (color, shape, dashing, label, data) {
		return {dF: color, bP: dashing, bQ: data, cl: label, cZ: shape};
	});
var terezka$line_charts$Internal$Line$dash = F5(
	function (color_, shape_, label_, dashing_, data_) {
		return A5(terezka$line_charts$Internal$Line$SeriesConfig, color_, shape_, dashing_, label_, data_);
	});
var terezka$line_charts$LineChart$dash = terezka$line_charts$Internal$Line$dash;
var terezka$line_charts$Internal$Line$line = F4(
	function (color_, shape_, label_, data_) {
		return A5(terezka$line_charts$Internal$Line$SeriesConfig, color_, shape_, _List_Nil, label_, data_);
	});
var terezka$line_charts$LineChart$line = terezka$line_charts$Internal$Line$line;
var author$project$Lia$Markdown$Chart$View$plot = function (config) {
	if (!config.b.$) {
		var c = config.a;
		var points = config.b.a;
		return A4(
			terezka$line_charts$LineChart$line,
			author$project$Lia$Markdown$Chart$View$get_color(c),
			author$project$Lia$Markdown$Chart$View$dotType(c),
			'',
			A2(author$project$Lia$Markdown$Chart$View$dotSize, c, points));
	} else {
		var c = config.a;
		var points = config.b.a;
		return A5(
			terezka$line_charts$LineChart$dash,
			author$project$Lia$Markdown$Chart$View$get_color(c),
			author$project$Lia$Markdown$Chart$View$dotType(c),
			'',
			_List_fromArray(
				[0, 50]),
			A2(author$project$Lia$Markdown$Chart$View$dotSize, c, points));
	}
};
var elm$svg$Svg$g = elm$svg$Svg$trustedNode('g');
var elm$core$Basics$round = _Basics_round;
var avh4$elm_color$Color$toCssString = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	var a = _n0.d;
	var roundTo = function (x) {
		return elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return elm$core$Basics$round(x * 10000) / 100;
	};
	return elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				elm$core$String$fromFloat(
				pct(r)),
				'%,',
				elm$core$String$fromFloat(
				pct(g)),
				'%,',
				elm$core$String$fromFloat(
				pct(b)),
				'%,',
				elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var elm$svg$Svg$text_ = elm$svg$Svg$trustedNode('text');
var elm$svg$Svg$tspan = elm$svg$Svg$trustedNode('tspan');
var terezka$line_charts$Internal$Svg$label = F2(
	function (color, string) {
		return A2(
			elm$svg$Svg$text_,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$fill(color),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$tspan,
					_List_Nil,
					_List_fromArray(
						[
							elm$svg$Svg$text(string)
						]))
				]));
	});
var terezka$line_charts$LineChart$Junk$label = function (color) {
	return terezka$line_charts$Internal$Svg$label(
		avh4$elm_color$Color$toCssString(color));
};
var terezka$line_charts$Internal$Svg$Transfrom = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var terezka$line_charts$Internal$Coordinate$lengthX = function (system) {
	return A2(elm$core$Basics$max, 1, (system.aL.aU.dm - system.aL.aN.cn) - system.aL.aN.e_);
};
var terezka$line_charts$Internal$Coordinate$reachX = function (system) {
	var diff = system.dn.cr - system.dn.aP;
	return (diff > 0) ? diff : 1;
};
var terezka$line_charts$LineChart$Coordinate$scaleSvgX = F2(
	function (system, value) {
		return (value * terezka$line_charts$Internal$Coordinate$lengthX(system)) / terezka$line_charts$Internal$Coordinate$reachX(system);
	});
var terezka$line_charts$LineChart$Coordinate$toSvgX = F2(
	function (system, value) {
		return A2(terezka$line_charts$LineChart$Coordinate$scaleSvgX, system, value - system.dn.aP) + system.aL.aN.cn;
	});
var terezka$line_charts$Internal$Coordinate$lengthY = function (system) {
	return A2(elm$core$Basics$max, 1, (system.aL.aU.b8 - system.aL.aN.dB) - system.aL.aN.df);
};
var terezka$line_charts$Internal$Coordinate$reachY = function (system) {
	var diff = system.ft.cr - system.ft.aP;
	return (diff > 0) ? diff : 1;
};
var terezka$line_charts$LineChart$Coordinate$scaleSvgY = F2(
	function (system, value) {
		return (value * terezka$line_charts$Internal$Coordinate$lengthY(system)) / terezka$line_charts$Internal$Coordinate$reachY(system);
	});
var terezka$line_charts$LineChart$Coordinate$toSvgY = F2(
	function (system, value) {
		return A2(terezka$line_charts$LineChart$Coordinate$scaleSvgY, system, system.ft.cr - value) + system.aL.aN.df;
	});
var terezka$line_charts$Internal$Svg$move = F3(
	function (system, x, y) {
		return A2(
			terezka$line_charts$Internal$Svg$Transfrom,
			A2(terezka$line_charts$LineChart$Coordinate$toSvgX, system, x),
			A2(terezka$line_charts$LineChart$Coordinate$toSvgY, system, y));
	});
var terezka$line_charts$LineChart$Junk$move = terezka$line_charts$Internal$Svg$move;
var terezka$line_charts$Internal$Svg$offset = F2(
	function (x, y) {
		return A2(terezka$line_charts$Internal$Svg$Transfrom, x, y);
	});
var terezka$line_charts$LineChart$Junk$offset = terezka$line_charts$Internal$Svg$offset;
var elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var terezka$line_charts$Internal$Svg$addPosition = F2(
	function (_n0, _n1) {
		var x = _n0.a;
		var y = _n0.b;
		var xf = _n1.a;
		var yf = _n1.b;
		return A2(terezka$line_charts$Internal$Svg$Transfrom, xf + x, yf + y);
	});
var terezka$line_charts$Internal$Svg$toPosition = A2(
	elm$core$List$foldr,
	terezka$line_charts$Internal$Svg$addPosition,
	A2(terezka$line_charts$Internal$Svg$Transfrom, 0, 0));
var terezka$line_charts$Internal$Svg$transform = function (translations) {
	var _n0 = terezka$line_charts$Internal$Svg$toPosition(translations);
	var x = _n0.a;
	var y = _n0.b;
	return elm$svg$Svg$Attributes$transform(
		'translate(' + (elm$core$String$fromFloat(x) + (', ' + (elm$core$String$fromFloat(y) + ')'))));
};
var terezka$line_charts$LineChart$Junk$transform = terezka$line_charts$Internal$Svg$transform;
var terezka$line_charts$LineChart$Junk$labelAt = F8(
	function (system, x, y, xo, yo, anchor, color, text) {
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					terezka$line_charts$LineChart$Junk$transform(
					_List_fromArray(
						[
							A3(terezka$line_charts$LineChart$Junk$move, system, x, y),
							A2(terezka$line_charts$LineChart$Junk$offset, xo, yo)
						])),
					elm$svg$Svg$Attributes$style('text-anchor: ' + (anchor + ';'))
				]),
			_List_fromArray(
				[
					A2(terezka$line_charts$LineChart$Junk$label, color, text)
				]));
	});
var author$project$Lia$Markdown$Chart$View$title = F2(
	function (str, system) {
		return {
			dq: _List_fromArray(
				[
					A8(terezka$line_charts$LineChart$Junk$labelAt, system, system.dn.cr / 2, system.ft.cr, 0, -5, 'middle', avh4$elm_color$Color$black, str)
				]),
			dy: _List_Nil,
			eb: _List_Nil
		};
	});
var elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var terezka$line_charts$Internal$Axis$variable = function (_n0) {
	var config = _n0;
	return config.T;
};
var elm$svg$Svg$Attributes$clipPath = _VirtualDom_attribute('clip-path');
var terezka$line_charts$Internal$Utils$toChartAreaId = function (id) {
	return 'chart__chart-area--' + id;
};
var terezka$line_charts$Internal$Svg$withinChartArea = function (_n0) {
	var id = _n0.ec;
	return elm$svg$Svg$Attributes$clipPath(
		'url(#' + (terezka$line_charts$Internal$Utils$toChartAreaId(id) + ')'));
};
var terezka$line_charts$Internal$Axis$attributesLine = F2(
	function (system, _n0) {
		var events = _n0.dX;
		var width = _n0.dm;
		var color = _n0.dF;
		return _Utils_ap(
			events,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$strokeWidth(
					elm$core$String$fromFloat(width)),
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(color)),
					terezka$line_charts$Internal$Svg$withinChartArea(system)
				]));
	});
var terezka$line_charts$Internal$Path$Line = function (a) {
	return {$: 1, a: a};
};
var terezka$line_charts$Internal$Path$Move = function (a) {
	return {$: 0, a: a};
};
var terezka$line_charts$Internal$Path$join = function (commands) {
	return A2(elm$core$String$join, ' ', commands);
};
var terezka$line_charts$Internal$Path$bool = function (bool_) {
	return bool_ ? '1' : '0';
};
var terezka$line_charts$Internal$Path$point = function (point_) {
	return elm$core$String$fromFloat(point_.dn) + (' ' + elm$core$String$fromFloat(point_.ft));
};
var terezka$line_charts$Internal$Path$points = function (points_) {
	return A2(
		elm$core$String$join,
		',',
		A2(elm$core$List$map, terezka$line_charts$Internal$Path$point, points_));
};
var terezka$line_charts$Internal$Path$toString = function (command) {
	switch (command.$) {
		case 9:
			return 'Z';
		case 0:
			var p = command.a;
			return 'M' + terezka$line_charts$Internal$Path$point(p);
		case 1:
			var p = command.a;
			return 'L' + terezka$line_charts$Internal$Path$point(p);
		case 2:
			var x = command.a;
			return 'H' + elm$core$String$fromFloat(x);
		case 3:
			var y = command.a;
			return 'V' + elm$core$String$fromFloat(y);
		case 4:
			var c1 = command.a;
			var c2 = command.b;
			var p = command.c;
			return 'C' + terezka$line_charts$Internal$Path$points(
				_List_fromArray(
					[c1, c2, p]));
		case 5:
			var c1 = command.a;
			var p = command.b;
			return 'Q' + terezka$line_charts$Internal$Path$points(
				_List_fromArray(
					[c1, p]));
		case 6:
			var c1 = command.a;
			var p = command.b;
			return 'Q' + terezka$line_charts$Internal$Path$points(
				_List_fromArray(
					[c1, p]));
		case 7:
			var p = command.a;
			return 'T' + terezka$line_charts$Internal$Path$point(p);
		default:
			var rx = command.a;
			var ry = command.b;
			var xAxisRotation = command.c;
			var largeArcFlag = command.d;
			var sweepFlag = command.e;
			var p = command.f;
			return 'A' + terezka$line_charts$Internal$Path$join(
				_List_fromArray(
					[
						elm$core$String$fromFloat(rx),
						elm$core$String$fromFloat(ry),
						elm$core$String$fromInt(xAxisRotation),
						terezka$line_charts$Internal$Path$bool(largeArcFlag),
						terezka$line_charts$Internal$Path$bool(sweepFlag),
						terezka$line_charts$Internal$Path$point(p)
					]));
	}
};
var terezka$line_charts$Internal$Path$Arc = F6(
	function (a, b, c, d, e, f) {
		return {$: 8, a: a, b: b, c: c, d: d, e: e, f: f};
	});
var terezka$line_charts$Internal$Path$Close = {$: 9};
var terezka$line_charts$Internal$Path$CubicBeziers = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var terezka$line_charts$Internal$Path$CubicBeziersShort = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var terezka$line_charts$Internal$Path$Horizontal = function (a) {
	return {$: 2, a: a};
};
var terezka$line_charts$Internal$Path$QuadraticBeziers = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var terezka$line_charts$Internal$Path$QuadraticBeziersShort = function (a) {
	return {$: 7, a: a};
};
var terezka$line_charts$Internal$Path$Vertical = function (a) {
	return {$: 3, a: a};
};
var terezka$line_charts$LineChart$Coordinate$toSvg = F2(
	function (system, point) {
		return {
			dn: A2(terezka$line_charts$LineChart$Coordinate$toSvgX, system, point.dn),
			ft: A2(terezka$line_charts$LineChart$Coordinate$toSvgY, system, point.ft)
		};
	});
var terezka$line_charts$Internal$Path$translate = F2(
	function (system, command) {
		switch (command.$) {
			case 0:
				var p = command.a;
				return terezka$line_charts$Internal$Path$Move(
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, p));
			case 1:
				var p = command.a;
				return terezka$line_charts$Internal$Path$Line(
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, p));
			case 2:
				var x = command.a;
				return terezka$line_charts$Internal$Path$Horizontal(
					A2(terezka$line_charts$LineChart$Coordinate$toSvgX, system, x));
			case 3:
				var y = command.a;
				return terezka$line_charts$Internal$Path$Vertical(
					A2(terezka$line_charts$LineChart$Coordinate$toSvgY, system, y));
			case 4:
				var c1 = command.a;
				var c2 = command.b;
				var p = command.c;
				return A3(
					terezka$line_charts$Internal$Path$CubicBeziers,
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, c1),
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, c2),
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, p));
			case 5:
				var c1 = command.a;
				var p = command.b;
				return A2(
					terezka$line_charts$Internal$Path$CubicBeziersShort,
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, c1),
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, p));
			case 6:
				var c1 = command.a;
				var p = command.b;
				return A2(
					terezka$line_charts$Internal$Path$QuadraticBeziers,
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, c1),
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, p));
			case 7:
				var p = command.a;
				return terezka$line_charts$Internal$Path$QuadraticBeziersShort(
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, p));
			case 8:
				var rx = command.a;
				var ry = command.b;
				var xAxisRotation = command.c;
				var largeArcFlag = command.d;
				var sweepFlag = command.e;
				var p = command.f;
				return A6(
					terezka$line_charts$Internal$Path$Arc,
					rx,
					ry,
					xAxisRotation,
					largeArcFlag,
					sweepFlag,
					A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, p));
			default:
				return terezka$line_charts$Internal$Path$Close;
		}
	});
var terezka$line_charts$Internal$Path$description = F2(
	function (system, commands) {
		return terezka$line_charts$Internal$Path$join(
			A2(
				elm$core$List$map,
				A2(
					elm$core$Basics$composeR,
					terezka$line_charts$Internal$Path$translate(system),
					terezka$line_charts$Internal$Path$toString),
				commands));
	});
var terezka$line_charts$Internal$Path$viewPath = function (attributes) {
	return A2(elm$svg$Svg$path, attributes, _List_Nil);
};
var terezka$line_charts$Internal$Path$view = F3(
	function (system, attributes, commands) {
		return terezka$line_charts$Internal$Path$viewPath(
			_Utils_ap(
				attributes,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$d(
						A2(terezka$line_charts$Internal$Path$description, system, commands))
					])));
	});
var terezka$line_charts$Internal$Utils$concat = F3(
	function (first, second, third) {
		return _Utils_ap(
			first,
			_Utils_ap(second, third));
	});
var terezka$line_charts$LineChart$Colors$gray = A3(avh4$elm_color$Color$rgb255, 163, 163, 163);
var terezka$line_charts$Internal$Svg$horizontal = F5(
	function (system, userAttributes, y, x1, x2) {
		var attributes = A3(
			terezka$line_charts$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(terezka$line_charts$LineChart$Colors$gray)),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			userAttributes,
			_List_Nil);
		return A3(
			terezka$line_charts$Internal$Path$view,
			system,
			attributes,
			_List_fromArray(
				[
					terezka$line_charts$Internal$Path$Move(
					{dn: x1, ft: y}),
					terezka$line_charts$Internal$Path$Line(
					{dn: x1, ft: y}),
					terezka$line_charts$Internal$Path$Line(
					{dn: x2, ft: y})
				]));
	});
var terezka$line_charts$Internal$Axis$viewHorizontalAxisLine = F3(
	function (system, axisPosition, config) {
		return A5(
			terezka$line_charts$Internal$Svg$horizontal,
			system,
			A2(terezka$line_charts$Internal$Axis$attributesLine, system, config),
			axisPosition,
			config.bu,
			config.b_);
	});
var terezka$line_charts$Internal$Axis$attributesTick = function (_n0) {
	var width = _n0.dm;
	var color = _n0.dF;
	return _List_fromArray(
		[
			elm$svg$Svg$Attributes$strokeWidth(
			elm$core$String$fromFloat(width)),
			elm$svg$Svg$Attributes$stroke(
			avh4$elm_color$Color$toCssString(color))
		]);
};
var terezka$line_charts$Internal$Axis$Tick$isPositive = function (direction) {
	if (direction === 1) {
		return true;
	} else {
		return false;
	}
};
var terezka$line_charts$Internal$Axis$lengthOfTick = function (_n0) {
	var length = _n0.a8;
	var direction = _n0.a_;
	return terezka$line_charts$Internal$Axis$Tick$isPositive(direction) ? (-length) : length;
};
var terezka$line_charts$Internal$Svg$Middle = 1;
var terezka$line_charts$Internal$Svg$anchorStyle = function (anchor) {
	var anchorString = function () {
		switch (anchor) {
			case 0:
				return 'start';
			case 1:
				return 'middle';
			default:
				return 'end';
		}
	}();
	return elm$svg$Svg$Attributes$style('text-anchor: ' + (anchorString + ';'));
};
var terezka$line_charts$Internal$Axis$viewHorizontalLabel = F4(
	function (system, _n0, position, view) {
		var direction = _n0.a_;
		var length = _n0.a8;
		var yOffset = terezka$line_charts$Internal$Axis$Tick$isPositive(direction) ? ((-5) - length) : (15 + length);
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					terezka$line_charts$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(terezka$line_charts$Internal$Svg$move, system, position.dn, position.ft),
							A2(terezka$line_charts$Internal$Svg$offset, 0, yOffset)
						])),
					terezka$line_charts$Internal$Svg$anchorStyle(1)
				]),
			_List_fromArray(
				[view]));
	});
var terezka$line_charts$Internal$Svg$xTick = F5(
	function (system, height, userAttributes, y, x) {
		var attributes = A3(
			terezka$line_charts$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(terezka$line_charts$LineChart$Colors$gray))
				]),
			userAttributes,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1(
					elm$core$String$fromFloat(
						A2(terezka$line_charts$LineChart$Coordinate$toSvgX, system, x))),
					elm$svg$Svg$Attributes$x2(
					elm$core$String$fromFloat(
						A2(terezka$line_charts$LineChart$Coordinate$toSvgX, system, x))),
					elm$svg$Svg$Attributes$y1(
					elm$core$String$fromFloat(
						A2(terezka$line_charts$LineChart$Coordinate$toSvgY, system, y))),
					elm$svg$Svg$Attributes$y2(
					elm$core$String$fromFloat(
						A2(terezka$line_charts$LineChart$Coordinate$toSvgY, system, y) + height))
				]));
		return A2(elm$svg$Svg$line, attributes, _List_Nil);
	});
var terezka$line_charts$Internal$Utils$viewMaybe = F2(
	function (a, view) {
		return A2(
			elm$core$Maybe$withDefault,
			elm$svg$Svg$text(''),
			A2(elm$core$Maybe$map, view, a));
	});
var terezka$line_charts$Internal$Axis$viewHorizontalTick = F3(
	function (system, point, tick) {
		var x = point.dn;
		var y = point.ft;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__tick')
				]),
			_List_fromArray(
				[
					A5(
					terezka$line_charts$Internal$Svg$xTick,
					system,
					terezka$line_charts$Internal$Axis$lengthOfTick(tick),
					terezka$line_charts$Internal$Axis$attributesTick(tick),
					y,
					x),
					A2(
					terezka$line_charts$Internal$Utils$viewMaybe,
					tick.cl,
					A3(terezka$line_charts$Internal$Axis$viewHorizontalLabel, system, tick, point))
				]));
	});
var terezka$line_charts$Internal$Svg$Start = 0;
var terezka$line_charts$Internal$Axis$viewHorizontalTitle = F3(
	function (system, at, _n0) {
		var title = _n0.dd;
		var position = at(
			A2(title.K, system.bC, system.dn));
		var _n1 = title.b;
		var xOffset = _n1.a;
		var yOffset = _n1.b;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__title'),
					terezka$line_charts$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(terezka$line_charts$Internal$Svg$move, system, position.dn, position.ft),
							A2(terezka$line_charts$Internal$Svg$offset, xOffset + 15, yOffset + 5)
						])),
					terezka$line_charts$Internal$Svg$anchorStyle(0)
				]),
			_List_fromArray(
				[title.fo]));
	});
var terezka$line_charts$Internal$Axis$Intersection$getY = function (_n0) {
	var func = _n0;
	return A2(
		elm$core$Basics$composeL,
		function ($) {
			return $.ft;
		},
		func);
};
var terezka$line_charts$Internal$Axis$Line$config = function (_n0) {
	var config_ = _n0;
	return config_;
};
var terezka$line_charts$Internal$Axis$Tick$properties = function (_n0) {
	var properties_ = _n0;
	return properties_;
};
var terezka$line_charts$Internal$Axis$Ticks$ticks = F3(
	function (dataRange, range, _n0) {
		var values = _n0;
		return A2(
			elm$core$List$map,
			terezka$line_charts$Internal$Axis$Tick$properties,
			A2(values, dataRange, range));
	});
var terezka$line_charts$Internal$Axis$Title$config = function (_n0) {
	var title = _n0;
	return title;
};
var terezka$line_charts$Internal$Axis$viewHorizontal = F3(
	function (system, intersection, _n0) {
		var config = _n0;
		var viewConfig = {
			ek: A2(terezka$line_charts$Internal$Axis$Intersection$getY, intersection, system),
			ev: A3(terezka$line_charts$Internal$Axis$Line$config, config.H, system.bC, system.dn),
			u: A3(terezka$line_charts$Internal$Axis$Ticks$ticks, system.bC, system.dn, config.u),
			dd: terezka$line_charts$Internal$Axis$Title$config(config.dd)
		};
		var viewAxisLine = A2(terezka$line_charts$Internal$Axis$viewHorizontalAxisLine, system, viewConfig.ek);
		var at = function (x) {
			return {dn: x, ft: viewConfig.ek};
		};
		var viewTick = function (tick) {
			return A3(
				terezka$line_charts$Internal$Axis$viewHorizontalTick,
				system,
				at(tick.K),
				tick);
		};
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__axis--horizontal')
				]),
			_List_fromArray(
				[
					A3(terezka$line_charts$Internal$Axis$viewHorizontalTitle, system, at, viewConfig),
					viewAxisLine(viewConfig.ev),
					A2(
					elm$svg$Svg$g,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$class('chart__ticks')
						]),
					A2(elm$core$List$map, viewTick, viewConfig.u))
				]));
	});
var terezka$line_charts$Internal$Svg$vertical = F5(
	function (system, userAttributes, x, y1, y2) {
		var attributes = A3(
			terezka$line_charts$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(terezka$line_charts$LineChart$Colors$gray)),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			userAttributes,
			_List_Nil);
		return A3(
			terezka$line_charts$Internal$Path$view,
			system,
			attributes,
			_List_fromArray(
				[
					terezka$line_charts$Internal$Path$Move(
					{dn: x, ft: y1}),
					terezka$line_charts$Internal$Path$Line(
					{dn: x, ft: y1}),
					terezka$line_charts$Internal$Path$Line(
					{dn: x, ft: y2})
				]));
	});
var terezka$line_charts$Internal$Axis$viewVerticalAxisLine = F3(
	function (system, axisPosition, config) {
		return A5(
			terezka$line_charts$Internal$Svg$vertical,
			system,
			A2(terezka$line_charts$Internal$Axis$attributesLine, system, config),
			axisPosition,
			config.bu,
			config.b_);
	});
var terezka$line_charts$Internal$Svg$End = 2;
var terezka$line_charts$Internal$Axis$viewVerticalLabel = F4(
	function (system, _n0, position, view) {
		var direction = _n0.a_;
		var length = _n0.a8;
		var xOffset = terezka$line_charts$Internal$Axis$Tick$isPositive(direction) ? (5 + length) : ((-5) - length);
		var anchor = terezka$line_charts$Internal$Axis$Tick$isPositive(direction) ? 0 : 2;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					terezka$line_charts$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(terezka$line_charts$Internal$Svg$move, system, position.dn, position.ft),
							A2(terezka$line_charts$Internal$Svg$offset, xOffset, 5)
						])),
					terezka$line_charts$Internal$Svg$anchorStyle(anchor)
				]),
			_List_fromArray(
				[view]));
	});
var terezka$line_charts$Internal$Svg$yTick = F5(
	function (system, width, userAttributes, x, y) {
		var attributes = A3(
			terezka$line_charts$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__tick'),
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(terezka$line_charts$LineChart$Colors$gray))
				]),
			userAttributes,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1(
					elm$core$String$fromFloat(
						A2(terezka$line_charts$LineChart$Coordinate$toSvgX, system, x))),
					elm$svg$Svg$Attributes$x2(
					elm$core$String$fromFloat(
						A2(terezka$line_charts$LineChart$Coordinate$toSvgX, system, x) - width)),
					elm$svg$Svg$Attributes$y1(
					elm$core$String$fromFloat(
						A2(terezka$line_charts$LineChart$Coordinate$toSvgY, system, y))),
					elm$svg$Svg$Attributes$y2(
					elm$core$String$fromFloat(
						A2(terezka$line_charts$LineChart$Coordinate$toSvgY, system, y)))
				]));
		return A2(elm$svg$Svg$line, attributes, _List_Nil);
	});
var terezka$line_charts$Internal$Axis$viewVerticalTick = F3(
	function (system, point, tick) {
		var x = point.dn;
		var y = point.ft;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__tick')
				]),
			_List_fromArray(
				[
					A5(
					terezka$line_charts$Internal$Svg$yTick,
					system,
					terezka$line_charts$Internal$Axis$lengthOfTick(tick),
					terezka$line_charts$Internal$Axis$attributesTick(tick),
					x,
					y),
					A2(
					terezka$line_charts$Internal$Utils$viewMaybe,
					tick.cl,
					A3(terezka$line_charts$Internal$Axis$viewVerticalLabel, system, tick, point))
				]));
	});
var terezka$line_charts$Internal$Axis$viewVerticalTitle = F3(
	function (system, at, _n0) {
		var title = _n0.dd;
		var position = at(
			A2(title.K, system.bD, system.ft));
		var _n1 = title.b;
		var xOffset = _n1.a;
		var yOffset = _n1.b;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__title'),
					terezka$line_charts$Internal$Svg$transform(
					_List_fromArray(
						[
							A3(terezka$line_charts$Internal$Svg$move, system, position.dn, position.ft),
							A2(terezka$line_charts$Internal$Svg$offset, xOffset + 2, yOffset - 10)
						])),
					terezka$line_charts$Internal$Svg$anchorStyle(2)
				]),
			_List_fromArray(
				[title.fo]));
	});
var terezka$line_charts$Internal$Axis$Intersection$getX = function (_n0) {
	var func = _n0;
	return A2(
		elm$core$Basics$composeL,
		function ($) {
			return $.dn;
		},
		func);
};
var terezka$line_charts$Internal$Axis$viewVertical = F3(
	function (system, intersection, _n0) {
		var config = _n0;
		var viewConfig = {
			ek: A2(terezka$line_charts$Internal$Axis$Intersection$getX, intersection, system),
			ev: A3(terezka$line_charts$Internal$Axis$Line$config, config.H, system.bD, system.ft),
			u: A3(terezka$line_charts$Internal$Axis$Ticks$ticks, system.bD, system.ft, config.u),
			dd: terezka$line_charts$Internal$Axis$Title$config(config.dd)
		};
		var viewAxisLine = A2(terezka$line_charts$Internal$Axis$viewVerticalAxisLine, system, viewConfig.ek);
		var at = function (y) {
			return {dn: viewConfig.ek, ft: y};
		};
		var viewTick = function (tick) {
			return A3(
				terezka$line_charts$Internal$Axis$viewVerticalTick,
				system,
				at(tick.K),
				tick);
		};
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__axis--vertical')
				]),
			_List_fromArray(
				[
					A3(terezka$line_charts$Internal$Axis$viewVerticalTitle, system, at, viewConfig),
					viewAxisLine(viewConfig.ev),
					A2(
					elm$svg$Svg$g,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$class('chart__ticks')
						]),
					A2(elm$core$List$map, viewTick, viewConfig.u))
				]));
	});
var terezka$line_charts$Internal$Container$properties = F2(
	function (f, _n0) {
		var properties_ = _n0;
		return f(properties_);
	});
var terezka$line_charts$Internal$Events$toContainerAttributes = F3(
	function (data, system, _n0) {
		var events = _n0;
		var order = function (_n1) {
			var outside = _n1.a;
			var event = _n1.b;
			return outside ? elm$core$Maybe$Just(
				A2(event, data, system)) : elm$core$Maybe$Nothing;
		};
		return A2(elm$core$List$filterMap, order, events);
	});
var terezka$line_charts$Internal$Axis$ticks = function (_n0) {
	var config = _n0;
	return config.u;
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var terezka$line_charts$Internal$Svg$gridDot = F3(
	function (radius, color, point) {
		return A2(
			elm$svg$Svg$circle,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$cx(
					elm$core$String$fromFloat(point.dn)),
					elm$svg$Svg$Attributes$cy(
					elm$core$String$fromFloat(point.ft)),
					elm$svg$Svg$Attributes$r(
					elm$core$String$fromFloat(radius)),
					elm$svg$Svg$Attributes$fill(
					avh4$elm_color$Color$toCssString(color))
				]),
			_List_Nil);
	});
var terezka$line_charts$LineChart$Coordinate$Point = F2(
	function (x, y) {
		return {dn: x, ft: y};
	});
var terezka$line_charts$Internal$Grid$viewDots = F5(
	function (system, verticals, horizontals, radius, color) {
		var dot = F2(
			function (x, y) {
				return A2(
					terezka$line_charts$LineChart$Coordinate$toSvg,
					system,
					A2(terezka$line_charts$LineChart$Coordinate$Point, x, y));
			});
		var dots_ = function (g) {
			return A2(
				elm$core$List$map,
				dot(g),
				horizontals);
		};
		var alldots = A2(elm$core$List$concatMap, dots_, verticals);
		return A2(
			elm$core$List$map,
			A2(terezka$line_charts$Internal$Svg$gridDot, radius, color),
			alldots);
	});
var terezka$line_charts$Internal$Svg$horizontalGrid = F3(
	function (system, userAttributes, y) {
		var attributes = A3(
			terezka$line_charts$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(terezka$line_charts$LineChart$Colors$gray)),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			userAttributes,
			_List_Nil);
		return A5(terezka$line_charts$Internal$Svg$horizontal, system, attributes, y, system.dn.aP, system.dn.cr);
	});
var terezka$line_charts$Internal$Svg$verticalGrid = F3(
	function (system, userAttributes, x) {
		var attributes = A3(
			terezka$line_charts$Internal$Utils$concat,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					avh4$elm_color$Color$toCssString(terezka$line_charts$LineChart$Colors$gray)),
					elm$svg$Svg$Attributes$style('pointer-events: none;')
				]),
			userAttributes,
			_List_Nil);
		return A5(terezka$line_charts$Internal$Svg$vertical, system, attributes, x, system.ft.aP, system.ft.cr);
	});
var terezka$line_charts$Internal$Grid$viewLines = F5(
	function (system, verticals, horizontals, width, color) {
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$strokeWidth(
				elm$core$String$fromFloat(width)),
				elm$svg$Svg$Attributes$stroke(
				avh4$elm_color$Color$toCssString(color))
			]);
		return _Utils_ap(
			A2(
				elm$core$List$map,
				A2(terezka$line_charts$Internal$Svg$horizontalGrid, system, attributes),
				horizontals),
			A2(
				elm$core$List$map,
				A2(terezka$line_charts$Internal$Svg$verticalGrid, system, attributes),
				verticals));
	});
var terezka$line_charts$Internal$Grid$view = F4(
	function (system, xAxis, yAxis, grid) {
		var hasGrid = function (tick) {
			return tick.d5 ? elm$core$Maybe$Just(tick.K) : elm$core$Maybe$Nothing;
		};
		var horizontals = A2(
			elm$core$List$filterMap,
			hasGrid,
			A3(
				terezka$line_charts$Internal$Axis$Ticks$ticks,
				system.bD,
				system.ft,
				terezka$line_charts$Internal$Axis$ticks(yAxis)));
		var verticals = A2(
			elm$core$List$filterMap,
			hasGrid,
			A3(
				terezka$line_charts$Internal$Axis$Ticks$ticks,
				system.bC,
				system.dn,
				terezka$line_charts$Internal$Axis$ticks(xAxis)));
		if (!grid.$) {
			var radius = grid.a;
			var color = grid.b;
			return A5(terezka$line_charts$Internal$Grid$viewDots, system, verticals, horizontals, radius, color);
		} else {
			var width = grid.a;
			var color = grid.b;
			return A5(terezka$line_charts$Internal$Grid$viewLines, system, verticals, horizontals, width, color);
		}
	});
var terezka$line_charts$Internal$Junk$addBelow = F2(
	function (below, layers) {
		return _Utils_update(
			layers,
			{
				dy: _Utils_ap(below, layers.dy)
			});
	});
var terezka$line_charts$Internal$Junk$getLayers = F5(
	function (series, toX, toY, system, _n0) {
		var toLayers = _n0;
		return A4(toLayers, series, toX, toY, system);
	});
var terezka$line_charts$Internal$Line$label = function (_n0) {
	var config = _n0;
	return config.cl;
};
var terezka$line_charts$Internal$Legends$viewFree = F5(
	function (system, placement, viewLabel, line, data) {
		var _n0 = function () {
			if (!placement) {
				return _Utils_Tuple3(data, 2, -10);
			} else {
				return _Utils_Tuple3(
					elm$core$List$reverse(data),
					0,
					10);
			}
		}();
		var orderedPoints = _n0.a;
		var anchor = _n0.b;
		var xOffset = _n0.c;
		var transform = function (_n3) {
			var x = _n3.dn;
			var y = _n3.ft;
			return terezka$line_charts$Internal$Svg$transform(
				_List_fromArray(
					[
						A3(terezka$line_charts$Internal$Svg$move, system, x, y),
						A2(terezka$line_charts$Internal$Svg$offset, xOffset, 3)
					]));
		};
		var viewLegend = function (_n2) {
			var point = _n2.eT;
			return A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						transform(point),
						terezka$line_charts$Internal$Svg$anchorStyle(anchor)
					]),
				_List_fromArray(
					[
						viewLabel(
						terezka$line_charts$Internal$Line$label(line))
					]));
		};
		return A2(
			terezka$line_charts$Internal$Utils$viewMaybe,
			elm$core$List$head(orderedPoints),
			viewLegend);
	});
var terezka$line_charts$Internal$Legends$viewFrees = F3(
	function (_n0, placement, view_) {
		var system = _n0.c8;
		var lines = _n0.ac;
		var data = _n0.bQ;
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__legends')
				]),
			A3(
				elm$core$List$map2,
				A3(terezka$line_charts$Internal$Legends$viewFree, system, placement, view_),
				lines,
				data));
	});
var terezka$line_charts$Internal$Data$Point = F2(
	function (x, y) {
		return {dn: x, ft: y};
	});
var elm$core$Basics$pi = _Basics_pi;
var elm$core$Basics$sqrt = _Basics_sqrt;
var elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var terezka$line_charts$Internal$Dots$varietyAttributes = F2(
	function (color, variety) {
		switch (variety.$) {
			case 0:
				var width = variety.a;
				return _List_fromArray(
					[
						elm$svg$Svg$Attributes$stroke(
						avh4$elm_color$Color$toCssString(color)),
						elm$svg$Svg$Attributes$strokeWidth(
						elm$core$String$fromInt(width)),
						elm$svg$Svg$Attributes$fill('white')
					]);
			case 2:
				var width = variety.a;
				var opacity = variety.b;
				return _List_fromArray(
					[
						elm$svg$Svg$Attributes$stroke(
						avh4$elm_color$Color$toCssString(color)),
						elm$svg$Svg$Attributes$strokeWidth(
						elm$core$String$fromInt(width)),
						elm$svg$Svg$Attributes$strokeOpacity(
						elm$core$String$fromFloat(opacity)),
						elm$svg$Svg$Attributes$fill(
						avh4$elm_color$Color$toCssString(color))
					]);
			case 1:
				var width = variety.a;
				return _List_fromArray(
					[
						elm$svg$Svg$Attributes$stroke('white'),
						elm$svg$Svg$Attributes$strokeWidth(
						elm$core$String$fromInt(width)),
						elm$svg$Svg$Attributes$fill(
						avh4$elm_color$Color$toCssString(color))
					]);
			default:
				return _List_fromArray(
					[
						elm$svg$Svg$Attributes$fill(
						avh4$elm_color$Color$toCssString(color))
					]);
		}
	});
var terezka$line_charts$Internal$Dots$viewCircle = F5(
	function (events, variety, color, area, point) {
		var radius = elm$core$Basics$sqrt(area / elm$core$Basics$pi);
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$cx(
				elm$core$String$fromFloat(point.dn)),
				elm$svg$Svg$Attributes$cy(
				elm$core$String$fromFloat(point.ft)),
				elm$svg$Svg$Attributes$r(
				elm$core$String$fromFloat(radius))
			]);
		return A2(
			elm$svg$Svg$circle,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(terezka$line_charts$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var terezka$line_charts$Internal$Dots$pathPlus = F2(
	function (area, point) {
		var side = elm$core$Basics$sqrt(area / 5);
		var r6 = side / 2;
		var r3 = side;
		var commands = _List_fromArray(
			[
				'M' + (elm$core$String$fromFloat(point.dn - r6) + (' ' + elm$core$String$fromFloat((point.ft - r3) - r6))),
				'v' + elm$core$String$fromFloat(r3),
				'h' + elm$core$String$fromFloat(-r3),
				'v' + elm$core$String$fromFloat(r3),
				'h' + elm$core$String$fromFloat(r3),
				'v' + elm$core$String$fromFloat(r3),
				'h' + elm$core$String$fromFloat(r3),
				'v' + elm$core$String$fromFloat(-r3),
				'h' + elm$core$String$fromFloat(r3),
				'v' + elm$core$String$fromFloat(-r3),
				'h' + elm$core$String$fromFloat(-r3),
				'v' + elm$core$String$fromFloat(-r3),
				'h' + elm$core$String$fromFloat(-r3),
				'v' + elm$core$String$fromFloat(r3)
			]);
		return A2(elm$core$String$join, ' ', commands);
	});
var terezka$line_charts$Internal$Dots$viewCross = F5(
	function (events, variety, color, area, point) {
		var rotation = 'rotate(45 ' + (elm$core$String$fromFloat(point.dn) + (' ' + (elm$core$String$fromFloat(point.ft) + ')')));
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$d(
				A2(terezka$line_charts$Internal$Dots$pathPlus, area, point)),
				elm$svg$Svg$Attributes$transform(rotation)
			]);
		return A2(
			elm$svg$Svg$path,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(terezka$line_charts$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var terezka$line_charts$Internal$Dots$viewDiamond = F5(
	function (events, variety, color, area, point) {
		var side = elm$core$Basics$sqrt(area);
		var rotation = 'rotate(45 ' + (elm$core$String$fromFloat(point.dn) + (' ' + (elm$core$String$fromFloat(point.ft) + ')')));
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$x(
				elm$core$String$fromFloat(point.dn - (side / 2))),
				elm$svg$Svg$Attributes$y(
				elm$core$String$fromFloat(point.ft - (side / 2))),
				elm$svg$Svg$Attributes$width(
				elm$core$String$fromFloat(side)),
				elm$svg$Svg$Attributes$height(
				elm$core$String$fromFloat(side)),
				elm$svg$Svg$Attributes$transform(rotation)
			]);
		return A2(
			elm$svg$Svg$rect,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(terezka$line_charts$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var terezka$line_charts$Internal$Dots$viewPlus = F5(
	function (events, variety, color, area, point) {
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$d(
				A2(terezka$line_charts$Internal$Dots$pathPlus, area, point))
			]);
		return A2(
			elm$svg$Svg$path,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(terezka$line_charts$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var terezka$line_charts$Internal$Dots$viewSquare = F5(
	function (events, variety, color, area, point) {
		var side = elm$core$Basics$sqrt(area);
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$x(
				elm$core$String$fromFloat(point.dn - (side / 2))),
				elm$svg$Svg$Attributes$y(
				elm$core$String$fromFloat(point.ft - (side / 2))),
				elm$svg$Svg$Attributes$width(
				elm$core$String$fromFloat(side)),
				elm$svg$Svg$Attributes$height(
				elm$core$String$fromFloat(side))
			]);
		return A2(
			elm$svg$Svg$rect,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(terezka$line_charts$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * elm$core$Basics$pi) / 180;
};
var elm$core$Basics$tan = _Basics_tan;
var terezka$line_charts$Internal$Dots$pathTriangle = F2(
	function (area, point) {
		var side = elm$core$Basics$sqrt(
			(area * 4) / elm$core$Basics$sqrt(3));
		var height = (elm$core$Basics$sqrt(3) * side) / 2;
		var fromMiddle = height - ((elm$core$Basics$tan(
			elm$core$Basics$degrees(30)) * side) / 2);
		var commands = _List_fromArray(
			[
				'M' + (elm$core$String$fromFloat(point.dn) + (' ' + elm$core$String$fromFloat(point.ft - fromMiddle))),
				'l' + (elm$core$String$fromFloat((-side) / 2) + (' ' + elm$core$String$fromFloat(height))),
				'h' + elm$core$String$fromFloat(side),
				'z'
			]);
		return A2(elm$core$String$join, ' ', commands);
	});
var terezka$line_charts$Internal$Dots$viewTriangle = F5(
	function (events, variety, color, area, point) {
		var attributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$d(
				A2(terezka$line_charts$Internal$Dots$pathTriangle, area, point))
			]);
		return A2(
			elm$svg$Svg$path,
			_Utils_ap(
				events,
				_Utils_ap(
					attributes,
					A2(terezka$line_charts$Internal$Dots$varietyAttributes, color, variety))),
			_List_Nil);
	});
var terezka$line_charts$Internal$Dots$viewShape = F5(
	function (system, _n0, shape, color, point) {
		var radius = _n0.bj;
		var variety = _n0.bA;
		var view_ = function () {
			switch (shape) {
				case 1:
					return terezka$line_charts$Internal$Dots$viewCircle;
				case 2:
					return terezka$line_charts$Internal$Dots$viewTriangle;
				case 3:
					return terezka$line_charts$Internal$Dots$viewSquare;
				case 4:
					return terezka$line_charts$Internal$Dots$viewDiamond;
				case 5:
					return terezka$line_charts$Internal$Dots$viewCross;
				case 6:
					return terezka$line_charts$Internal$Dots$viewPlus;
				default:
					return F5(
						function (_n2, _n3, _n4, _n5, _n6) {
							return elm$svg$Svg$text('');
						});
			}
		}();
		var size = (2 * elm$core$Basics$pi) * radius;
		var pointSvg = A2(terezka$line_charts$LineChart$Coordinate$toSvg, system, point);
		return A5(view_, _List_Nil, variety, color, size, pointSvg);
	});
var terezka$line_charts$Internal$Dots$viewSample = F5(
	function (_n0, shape, color, system, data) {
		var config = _n0;
		var _n1 = config.es(
			A2(
				elm$core$List$map,
				function ($) {
					return $.fm;
				},
				data));
		var style_ = _n1;
		return A4(terezka$line_charts$Internal$Dots$viewShape, system, style_, shape, color);
	});
var terezka$line_charts$Internal$Line$color = F3(
	function (_n0, _n1, data_) {
		var config = _n0;
		var line_ = _n1;
		var _n2 = config(
			A2(
				elm$core$List$map,
				function ($) {
					return $.fm;
				},
				data_));
		var style_ = _n2;
		return style_.dF(line_.dF);
	});
var terezka$line_charts$Internal$Line$shape = function (_n0) {
	var config = _n0;
	return config.cZ;
};
var elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var terezka$line_charts$Internal$Area$hasArea = function (config) {
	switch (config.$) {
		case 0:
			return false;
		case 1:
			return true;
		case 2:
			return true;
		default:
			return true;
	}
};
var terezka$line_charts$Internal$Area$opacity = function (config) {
	switch (config.$) {
		case 0:
			return 0;
		case 1:
			var opacity_ = config.a;
			return opacity_;
		case 2:
			var opacity_ = config.a;
			return opacity_;
		default:
			var opacity_ = config.a;
			return opacity_;
	}
};
var terezka$line_charts$Internal$Line$toAreaAttributes = F3(
	function (_n0, _n1, area) {
		var serie = _n0;
		var style_ = _n1;
		return _List_fromArray(
			[
				elm$svg$Svg$Attributes$class('chart__interpolation__area__fragment'),
				elm$svg$Svg$Attributes$fill(
				avh4$elm_color$Color$toCssString(
					style_.dF(serie.dF)))
			]);
	});
var elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var terezka$line_charts$Internal$Line$toSeriesAttributes = F2(
	function (_n0, _n1) {
		var serie = _n0;
		var style_ = _n1;
		return _List_fromArray(
			[
				elm$svg$Svg$Attributes$style('pointer-events: none;'),
				elm$svg$Svg$Attributes$class('chart__interpolation__line__fragment'),
				elm$svg$Svg$Attributes$stroke(
				avh4$elm_color$Color$toCssString(
					style_.dF(serie.dF))),
				elm$svg$Svg$Attributes$strokeWidth(
				elm$core$String$fromFloat(style_.dm)),
				elm$svg$Svg$Attributes$strokeDasharray(
				A2(
					elm$core$String$join,
					' ',
					A2(elm$core$List$map, elm$core$String$fromFloat, serie.bP))),
				elm$svg$Svg$Attributes$fill('transparent')
			]);
	});
var terezka$line_charts$Internal$Utils$viewIf = F2(
	function (condition, view) {
		return condition ? view(0) : elm$svg$Svg$text('');
	});
var terezka$line_charts$Internal$Line$viewSample = F5(
	function (_n0, line_, area, data_, sampleWidth) {
		var look = _n0;
		var style_ = look(
			A2(
				elm$core$List$map,
				function ($) {
					return $.fm;
				},
				data_));
		var sizeAttributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$x1('0'),
				elm$svg$Svg$Attributes$y1('0'),
				elm$svg$Svg$Attributes$x2(
				elm$core$String$fromFloat(sampleWidth)),
				elm$svg$Svg$Attributes$y2('0')
			]);
		var rectangleAttributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$x('0'),
				elm$svg$Svg$Attributes$y('0'),
				elm$svg$Svg$Attributes$height('9'),
				elm$svg$Svg$Attributes$width(
				elm$core$String$fromFloat(sampleWidth))
			]);
		var lineAttributes = A2(terezka$line_charts$Internal$Line$toSeriesAttributes, line_, style_);
		var areaAttributes = A2(
			elm$core$List$cons,
			elm$svg$Svg$Attributes$fillOpacity(
				elm$core$String$fromFloat(
					terezka$line_charts$Internal$Area$opacity(area))),
			A3(terezka$line_charts$Internal$Line$toAreaAttributes, line_, style_, area));
		var viewRectangle = function (_n1) {
			return A2(
				elm$svg$Svg$rect,
				_Utils_ap(areaAttributes, rectangleAttributes),
				_List_Nil);
		};
		return A2(
			elm$svg$Svg$g,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$line,
					_Utils_ap(lineAttributes, sizeAttributes),
					_List_Nil),
					A2(
					terezka$line_charts$Internal$Utils$viewIf,
					terezka$line_charts$Internal$Area$hasArea(area),
					viewRectangle)
				]));
	});
var terezka$line_charts$LineChart$Coordinate$scaleDataX = F2(
	function (system, value) {
		return (value * terezka$line_charts$Internal$Coordinate$reachX(system)) / terezka$line_charts$Internal$Coordinate$lengthX(system);
	});
var terezka$line_charts$LineChart$Coordinate$toDataX = F2(
	function (system, value) {
		return system.dn.aP + A2(terezka$line_charts$LineChart$Coordinate$scaleDataX, system, value - system.aL.aN.cn);
	});
var terezka$line_charts$LineChart$Coordinate$scaleDataY = F2(
	function (system, value) {
		return (value * terezka$line_charts$Internal$Coordinate$reachY(system)) / terezka$line_charts$Internal$Coordinate$lengthY(system);
	});
var terezka$line_charts$LineChart$Coordinate$toDataY = F2(
	function (system, value) {
		return system.ft.cr - A2(terezka$line_charts$LineChart$Coordinate$scaleDataY, system, value - system.aL.aN.df);
	});
var terezka$line_charts$LineChart$Coordinate$toData = F2(
	function (system, point) {
		return {
			dn: A2(terezka$line_charts$LineChart$Coordinate$toDataX, system, point.dn),
			ft: A2(terezka$line_charts$LineChart$Coordinate$toDataY, system, point.ft)
		};
	});
var terezka$line_charts$Internal$Legends$viewSample = F4(
	function (_n0, sampleWidth, line, data) {
		var system = _n0.c8;
		var lineConfig = _n0.cq;
		var dotsConfig = _n0.bX;
		var area = _n0.du;
		var shape = terezka$line_charts$Internal$Line$shape(line);
		var dotPosition = A2(
			terezka$line_charts$LineChart$Coordinate$toData,
			system,
			A2(terezka$line_charts$Internal$Data$Point, sampleWidth / 2, 0));
		var color = A3(terezka$line_charts$Internal$Line$color, lineConfig, line, data);
		return A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__sample')
				]),
			_List_fromArray(
				[
					A5(terezka$line_charts$Internal$Line$viewSample, lineConfig, line, area, data, sampleWidth),
					A6(terezka$line_charts$Internal$Dots$viewSample, dotsConfig, shape, color, system, data, dotPosition)
				]));
	});
var terezka$line_charts$Internal$Legends$viewGrouped = F3(
	function (_arguments, sampleWidth, container) {
		var toLegend = F2(
			function (line, data) {
				return {
					cl: terezka$line_charts$Internal$Line$label(line),
					bl: A4(terezka$line_charts$Internal$Legends$viewSample, _arguments, sampleWidth, line, data)
				};
			});
		var legends = A3(elm$core$List$map2, toLegend, _arguments.ac, _arguments.bQ);
		return A2(container, _arguments.c8, legends);
	});
var terezka$line_charts$Internal$Legends$view = function (_arguments) {
	var _n0 = _arguments.et;
	switch (_n0.$) {
		case 1:
			var placement = _n0.a;
			var view_ = _n0.b;
			return A3(terezka$line_charts$Internal$Legends$viewFrees, _arguments, placement, view_);
		case 2:
			var sampleWidth = _n0.a;
			var container = _n0.b;
			return A3(
				terezka$line_charts$Internal$Legends$viewGrouped,
				_arguments,
				sampleWidth,
				container(_arguments));
		default:
			return elm$svg$Svg$text('');
	}
};
var terezka$line_charts$Internal$Line$data = function (_n0) {
	var config = _n0;
	return config.bQ;
};
var terezka$line_charts$Internal$Area$opacityContainer = function (config) {
	switch (config.$) {
		case 0:
			return 1;
		case 1:
			var opacity_ = config.a;
			return 1;
		case 2:
			var opacity_ = config.a;
			return opacity_;
		default:
			var opacity_ = config.a;
			return opacity_;
	}
};
var elm$core$List$map3 = _List_map3;
var terezka$line_charts$Internal$Line$viewNormal = function (_n0) {
	var areas = _n0.a;
	var lines = _n0.b;
	var dots = _n0.c;
	var view_ = F3(
		function (area_, line_, dots_) {
			return A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('chart__line')
					]),
				_List_fromArray(
					[area_, line_, dots_]));
		});
	return A4(elm$core$List$map3, view_, areas, lines, dots);
};
var elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var terezka$line_charts$Internal$Data$isWithinRange = F2(
	function (system, point) {
		return _Utils_eq(
			A3(elm$core$Basics$clamp, system.dn.aP, system.dn.cr, point.dn),
			point.dn) && _Utils_eq(
			A3(elm$core$Basics$clamp, system.ft.aP, system.ft.cr, point.ft),
			point.ft);
	});
var elm$core$Tuple$mapFirst = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var elm$core$Tuple$mapSecond = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var terezka$line_charts$Internal$Interpolation$linear = elm$core$List$map(
	elm$core$List$map(terezka$line_charts$Internal$Path$Line));
var terezka$line_charts$Internal$Interpolation$First = {$: 0};
var terezka$line_charts$Internal$Interpolation$Previous = function (a) {
	return {$: 1, a: a};
};
var terezka$line_charts$Internal$Interpolation$monotoneCurve = F4(
	function (point0, point1, tangent0, tangent1) {
		var dx = (point1.dn - point0.dn) / 3;
		return A3(
			terezka$line_charts$Internal$Path$CubicBeziers,
			{dn: point0.dn + dx, ft: point0.ft + (dx * tangent0)},
			{dn: point1.dn - dx, ft: point1.ft - (dx * tangent1)},
			point1);
	});
var terezka$line_charts$Internal$Interpolation$slope2 = F3(
	function (point0, point1, t) {
		var h = point1.dn - point0.dn;
		return h ? ((((3 * (point1.ft - point0.ft)) / h) - t) / 2) : t;
	});
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var elm$core$Basics$isNaN = _Basics_isNaN;
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var terezka$line_charts$Internal$Interpolation$sign = function (x) {
	return (x < 0) ? (-1) : 1;
};
var terezka$line_charts$Internal$Interpolation$toH = F2(
	function (h0, h1) {
		return (!h0) ? ((h1 < 0) ? (0 * (-1)) : h1) : h0;
	});
var terezka$line_charts$Internal$Interpolation$slope3 = F3(
	function (point0, point1, point2) {
		var h1 = point2.dn - point1.dn;
		var h0 = point1.dn - point0.dn;
		var s0h = A2(terezka$line_charts$Internal$Interpolation$toH, h0, h1);
		var s0 = (point1.ft - point0.ft) / s0h;
		var s1h = A2(terezka$line_charts$Internal$Interpolation$toH, h1, h0);
		var s1 = (point2.ft - point1.ft) / s1h;
		var p = ((s0 * h1) + (s1 * h0)) / (h0 + h1);
		var slope = (terezka$line_charts$Internal$Interpolation$sign(s0) + terezka$line_charts$Internal$Interpolation$sign(s1)) * A2(
			elm$core$Basics$min,
			A2(
				elm$core$Basics$min,
				elm$core$Basics$abs(s0),
				elm$core$Basics$abs(s1)),
			0.5 * elm$core$Basics$abs(p));
		return elm$core$Basics$isNaN(slope) ? 0 : slope;
	});
var terezka$line_charts$Internal$Interpolation$monotonePart = F2(
	function (points, _n0) {
		var tangent = _n0.a;
		var commands = _n0.b;
		var _n1 = _Utils_Tuple2(tangent, points);
		_n1$4:
		while (true) {
			if (!_n1.a.$) {
				if (_n1.b.b && _n1.b.b.b) {
					if (_n1.b.b.b.b) {
						var _n2 = _n1.a;
						var _n3 = _n1.b;
						var p0 = _n3.a;
						var _n4 = _n3.b;
						var p1 = _n4.a;
						var _n5 = _n4.b;
						var p2 = _n5.a;
						var rest = _n5.b;
						var t1 = A3(terezka$line_charts$Internal$Interpolation$slope3, p0, p1, p2);
						var t0 = A3(terezka$line_charts$Internal$Interpolation$slope2, p0, p1, t1);
						return A2(
							terezka$line_charts$Internal$Interpolation$monotonePart,
							A2(
								elm$core$List$cons,
								p1,
								A2(elm$core$List$cons, p2, rest)),
							_Utils_Tuple2(
								terezka$line_charts$Internal$Interpolation$Previous(t1),
								_Utils_ap(
									commands,
									_List_fromArray(
										[
											A4(terezka$line_charts$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1)
										]))));
					} else {
						var _n9 = _n1.a;
						var _n10 = _n1.b;
						var p0 = _n10.a;
						var _n11 = _n10.b;
						var p1 = _n11.a;
						var t1 = A3(terezka$line_charts$Internal$Interpolation$slope3, p0, p1, p1);
						return _Utils_Tuple2(
							terezka$line_charts$Internal$Interpolation$Previous(t1),
							_Utils_ap(
								commands,
								_List_fromArray(
									[
										A4(terezka$line_charts$Internal$Interpolation$monotoneCurve, p0, p1, t1, t1),
										terezka$line_charts$Internal$Path$Line(p1)
									])));
					}
				} else {
					break _n1$4;
				}
			} else {
				if (_n1.b.b && _n1.b.b.b) {
					if (_n1.b.b.b.b) {
						var t0 = _n1.a.a;
						var _n6 = _n1.b;
						var p0 = _n6.a;
						var _n7 = _n6.b;
						var p1 = _n7.a;
						var _n8 = _n7.b;
						var p2 = _n8.a;
						var rest = _n8.b;
						var t1 = A3(terezka$line_charts$Internal$Interpolation$slope3, p0, p1, p2);
						return A2(
							terezka$line_charts$Internal$Interpolation$monotonePart,
							A2(
								elm$core$List$cons,
								p1,
								A2(elm$core$List$cons, p2, rest)),
							_Utils_Tuple2(
								terezka$line_charts$Internal$Interpolation$Previous(t1),
								_Utils_ap(
									commands,
									_List_fromArray(
										[
											A4(terezka$line_charts$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1)
										]))));
					} else {
						var t0 = _n1.a.a;
						var _n12 = _n1.b;
						var p0 = _n12.a;
						var _n13 = _n12.b;
						var p1 = _n13.a;
						var t1 = A3(terezka$line_charts$Internal$Interpolation$slope3, p0, p1, p1);
						return _Utils_Tuple2(
							terezka$line_charts$Internal$Interpolation$Previous(t1),
							_Utils_ap(
								commands,
								_List_fromArray(
									[
										A4(terezka$line_charts$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1),
										terezka$line_charts$Internal$Path$Line(p1)
									])));
					}
				} else {
					break _n1$4;
				}
			}
		}
		return _Utils_Tuple2(tangent, commands);
	});
var terezka$line_charts$Internal$Interpolation$monotoneSection = F2(
	function (points, _n0) {
		var tangent = _n0.a;
		var acc = _n0.b;
		var _n1 = function () {
			if (points.b) {
				var p0 = points.a;
				var rest = points.b;
				return A2(
					terezka$line_charts$Internal$Interpolation$monotonePart,
					A2(elm$core$List$cons, p0, rest),
					_Utils_Tuple2(
						tangent,
						_List_fromArray(
							[
								terezka$line_charts$Internal$Path$Line(p0)
							])));
			} else {
				return _Utils_Tuple2(tangent, _List_Nil);
			}
		}();
		var t0 = _n1.a;
		var commands = _n1.b;
		return _Utils_Tuple2(
			t0,
			A2(elm$core$List$cons, commands, acc));
	});
var terezka$line_charts$Internal$Interpolation$monotone = function (sections) {
	return A3(
		elm$core$List$foldr,
		terezka$line_charts$Internal$Interpolation$monotoneSection,
		_Utils_Tuple2(terezka$line_charts$Internal$Interpolation$First, _List_Nil),
		sections).b;
};
var terezka$line_charts$Internal$Interpolation$after = F2(
	function (a, b) {
		return _List_fromArray(
			[
				a,
				A2(terezka$line_charts$Internal$Data$Point, b.dn, a.ft),
				b
			]);
	});
var terezka$line_charts$Internal$Interpolation$stepped = function (sections) {
	var expand = F2(
		function (result, section) {
			expand:
			while (true) {
				if (section.a.b) {
					if (section.a.b.b) {
						var _n1 = section.a;
						var a = _n1.a;
						var _n2 = _n1.b;
						var b = _n2.a;
						var rest = _n2.b;
						var broken = section.b;
						var $temp$result = _Utils_ap(
							result,
							A2(terezka$line_charts$Internal$Interpolation$after, a, b)),
							$temp$section = _Utils_Tuple2(
							A2(elm$core$List$cons, b, rest),
							broken);
						result = $temp$result;
						section = $temp$section;
						continue expand;
					} else {
						if (!section.b.$) {
							var _n3 = section.a;
							var last = _n3.a;
							var broken = section.b.a;
							return _Utils_ap(
								result,
								_List_fromArray(
									[
										A2(terezka$line_charts$Internal$Data$Point, broken.dn, last.ft)
									]));
						} else {
							var _n4 = section.a;
							var last = _n4.a;
							var _n5 = section.b;
							return result;
						}
					}
				} else {
					return result;
				}
			}
		});
	return A2(
		elm$core$List$map,
		A2(
			elm$core$Basics$composeR,
			expand(_List_Nil),
			elm$core$List$map(terezka$line_charts$Internal$Path$Line)),
		sections);
};
var terezka$line_charts$Internal$Interpolation$toCommands = F2(
	function (interpolation, data) {
		var pointsSections = elm$core$List$map(
			A2(
				elm$core$Basics$composeR,
				elm$core$Tuple$mapFirst(
					elm$core$List$map(
						function ($) {
							return $.eT;
						})),
				elm$core$Tuple$mapSecond(
					elm$core$Maybe$map(
						function ($) {
							return $.eT;
						}))));
		var points = elm$core$List$map(
			A2(
				elm$core$Basics$composeR,
				elm$core$Tuple$first,
				elm$core$List$map(
					function ($) {
						return $.eT;
					})));
		switch (interpolation) {
			case 0:
				return terezka$line_charts$Internal$Interpolation$linear(
					points(data));
			case 1:
				return terezka$line_charts$Internal$Interpolation$monotone(
					points(data));
			default:
				return terezka$line_charts$Internal$Interpolation$stepped(
					pointsSections(data));
		}
	});
var terezka$line_charts$Internal$Area$opacitySingle = function (config) {
	switch (config.$) {
		case 0:
			return 0;
		case 1:
			var opacity_ = config.a;
			return opacity_;
		case 2:
			var opacity_ = config.a;
			return 1;
		default:
			var opacity_ = config.a;
			return 1;
	}
};
var terezka$line_charts$Internal$Path$toPoint = function (command) {
	switch (command.$) {
		case 9:
			return A2(terezka$line_charts$LineChart$Coordinate$Point, 0, 0);
		case 0:
			var p = command.a;
			return p;
		case 1:
			var p = command.a;
			return p;
		case 2:
			var x = command.a;
			return A2(terezka$line_charts$LineChart$Coordinate$Point, x, 0);
		case 3:
			var y = command.a;
			return A2(terezka$line_charts$LineChart$Coordinate$Point, 0, y);
		case 4:
			var c1 = command.a;
			var c2 = command.b;
			var p = command.c;
			return p;
		case 5:
			var c1 = command.a;
			var p = command.b;
			return p;
		case 6:
			var c1 = command.a;
			var p = command.b;
			return p;
		case 7:
			var p = command.a;
			return p;
		default:
			var rx = command.a;
			var ry = command.b;
			var xAxisRotation = command.c;
			var largeArcFlag = command.d;
			var sweepFlag = command.e;
			var p = command.f;
			return p;
	}
};
var terezka$line_charts$Internal$Utils$towardsZero = function (_n0) {
	var max = _n0.cr;
	var min = _n0.aP;
	return A3(elm$core$Basics$clamp, min, max, 0);
};
var terezka$line_charts$Internal$Utils$last = function (list) {
	return elm$core$List$head(
		A2(
			elm$core$List$drop,
			elm$core$List$length(list) - 1,
			list));
};
var terezka$line_charts$Internal$Utils$lastSafe = F2(
	function (first, rest) {
		return A2(
			elm$core$Maybe$withDefault,
			first,
			terezka$line_charts$Internal$Utils$last(rest));
	});
var terezka$line_charts$Internal$Utils$viewWithEdges = F2(
	function (stuff, view) {
		if (stuff.b) {
			var first = stuff.a;
			var rest = stuff.b;
			return A3(
				view,
				first,
				rest,
				A2(terezka$line_charts$Internal$Utils$lastSafe, first, rest));
		} else {
			return elm$svg$Svg$text('');
		}
	});
var terezka$line_charts$LineChart$Junk$withinChartArea = terezka$line_charts$Internal$Svg$withinChartArea;
var terezka$line_charts$Internal$Line$viewArea = F5(
	function (_n0, line_, style_, interpolation, data_) {
		var system = _n0.c8;
		var lineConfig = _n0.cq;
		var area = _n0.du;
		var ground = function (point) {
			return A2(
				terezka$line_charts$Internal$Data$Point,
				point.dn,
				terezka$line_charts$Internal$Utils$towardsZero(system.ft));
		};
		var commands = F3(
			function (first, middle, last) {
				return A3(
					terezka$line_charts$Internal$Utils$concat,
					_List_fromArray(
						[
							terezka$line_charts$Internal$Path$Move(
							ground(
								terezka$line_charts$Internal$Path$toPoint(first))),
							terezka$line_charts$Internal$Path$Line(
							terezka$line_charts$Internal$Path$toPoint(first))
						]),
					interpolation,
					_List_fromArray(
						[
							terezka$line_charts$Internal$Path$Line(
							ground(
								terezka$line_charts$Internal$Path$toPoint(last)))
						]));
			});
		var attributes = A2(
			elm$core$List$cons,
			terezka$line_charts$LineChart$Junk$withinChartArea(system),
			A2(
				elm$core$List$cons,
				elm$svg$Svg$Attributes$fillOpacity(
					elm$core$String$fromFloat(
						terezka$line_charts$Internal$Area$opacitySingle(area))),
				A3(terezka$line_charts$Internal$Line$toAreaAttributes, line_, style_, area)));
		return A2(
			terezka$line_charts$Internal$Utils$viewWithEdges,
			interpolation,
			F3(
				function (first, middle, last) {
					return A3(
						terezka$line_charts$Internal$Path$view,
						system,
						attributes,
						A3(commands, first, middle, last));
				}));
	});
var terezka$line_charts$Internal$Dots$view = F2(
	function (_n0, data) {
		var system = _n0.c8;
		var dotsConfig = _n0.bX;
		var shape = _n0.cZ;
		var color = _n0.dF;
		var _n1 = dotsConfig;
		var config = _n1;
		var _n2 = config.eg(data.fm);
		var style_ = _n2;
		return A5(terezka$line_charts$Internal$Dots$viewShape, system, style_, shape, color, data.eT);
	});
var terezka$line_charts$Internal$Line$viewDot = F3(
	function (_arguments, _n0, _n1) {
		var lineConfig = _n0;
		var style_ = _n1;
		return terezka$line_charts$Internal$Dots$view(
			{
				dF: style_.dF(lineConfig.dF),
				bX: _arguments.bX,
				cZ: lineConfig.cZ,
				c8: _arguments.c8
			});
	});
var terezka$line_charts$Internal$Utils$viewWithFirst = F2(
	function (stuff, view) {
		if (stuff.b) {
			var first = stuff.a;
			var rest = stuff.b;
			return A2(view, first, rest);
		} else {
			return elm$svg$Svg$text('');
		}
	});
var terezka$line_charts$Internal$Line$viewSeries = F5(
	function (_n0, line_, style_, interpolation, data_) {
		var system = _n0.c8;
		var lineConfig = _n0.cq;
		var attributes = A2(
			elm$core$List$cons,
			terezka$line_charts$LineChart$Junk$withinChartArea(system),
			A2(terezka$line_charts$Internal$Line$toSeriesAttributes, line_, style_));
		return A2(
			terezka$line_charts$Internal$Utils$viewWithFirst,
			data_,
			F2(
				function (first, _n1) {
					return A3(
						terezka$line_charts$Internal$Path$view,
						system,
						attributes,
						A2(
							elm$core$List$cons,
							terezka$line_charts$Internal$Path$Move(first.eT),
							interpolation));
				}));
	});
var terezka$line_charts$Internal$Utils$part = F4(
	function (isReal, points, current, parts) {
		part:
		while (true) {
			if (points.b) {
				var first = points.a;
				var rest = points.b;
				if (isReal(first)) {
					var $temp$isReal = isReal,
						$temp$points = rest,
						$temp$current = _Utils_ap(
						current,
						_List_fromArray(
							[first])),
						$temp$parts = parts;
					isReal = $temp$isReal;
					points = $temp$points;
					current = $temp$current;
					parts = $temp$parts;
					continue part;
				} else {
					var $temp$isReal = isReal,
						$temp$points = rest,
						$temp$current = _List_Nil,
						$temp$parts = A2(
						elm$core$List$cons,
						_Utils_Tuple2(
							current,
							elm$core$Maybe$Just(first)),
						parts);
					isReal = $temp$isReal;
					points = $temp$points;
					current = $temp$current;
					parts = $temp$parts;
					continue part;
				}
			} else {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(current, elm$core$Maybe$Nothing),
					parts);
			}
		}
	});
var terezka$line_charts$Internal$Line$viewSingle = F3(
	function (_arguments, line_, data_) {
		var style_ = function (_n1) {
			var look = _n1;
			return look(
				A2(
					elm$core$List$map,
					function ($) {
						return $.fm;
					},
					data_));
		}(_arguments.cq);
		var sections = A4(
			terezka$line_charts$Internal$Utils$part,
			function ($) {
				return $.eo;
			},
			data_,
			_List_Nil,
			_List_Nil);
		var parts = A2(elm$core$List$map, elm$core$Tuple$first, sections);
		var viewDots = A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__dots')
				]),
			A2(
				elm$core$List$map,
				A3(terezka$line_charts$Internal$Line$viewDot, _arguments, line_, style_),
				A2(
					elm$core$List$filter,
					A2(
						elm$core$Basics$composeL,
						terezka$line_charts$Internal$Data$isWithinRange(_arguments.c8),
						function ($) {
							return $.eT;
						}),
					elm$core$List$concat(parts))));
		var commands = A2(terezka$line_charts$Internal$Interpolation$toCommands, _arguments.ej, sections);
		var viewAreas = function (_n0) {
			return A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('chart__interpolation__area')
					]),
				A3(
					elm$core$List$map2,
					A3(terezka$line_charts$Internal$Line$viewArea, _arguments, line_, style_),
					commands,
					parts));
		};
		var viewSeriess = A2(
			elm$svg$Svg$g,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__interpolation__line')
				]),
			A3(
				elm$core$List$map2,
				A3(terezka$line_charts$Internal$Line$viewSeries, _arguments, line_, style_),
				commands,
				parts));
		return _Utils_Tuple3(
			A2(
				terezka$line_charts$Internal$Utils$viewIf,
				terezka$line_charts$Internal$Area$hasArea(_arguments.du),
				viewAreas),
			viewSeriess,
			viewDots);
	});
var terezka$line_charts$Internal$Line$viewStacked = F2(
	function (area, _n0) {
		var areas = _n0.a;
		var lines = _n0.b;
		var dots = _n0.c;
		var toList = F2(
			function (l, d) {
				return _List_fromArray(
					[l, d]);
			});
		var opacity = 'opacity: ' + elm$core$String$fromFloat(
			terezka$line_charts$Internal$Area$opacityContainer(area));
		var bottoms = elm$core$List$concat(
			A3(elm$core$List$map2, toList, lines, dots));
		return _List_fromArray(
			[
				A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('chart__bottoms'),
						elm$svg$Svg$Attributes$style(opacity)
					]),
				areas),
				A2(
				elm$svg$Svg$g,
				_List_fromArray(
					[
						elm$svg$Svg$Attributes$class('chart__tops')
					]),
				bottoms)
			]);
	});
var terezka$line_charts$Internal$Utils$unzip3 = function (pairs) {
	var step = F2(
		function (_n0, _n1) {
			var a = _n0.a;
			var b = _n0.b;
			var c = _n0.c;
			var aas = _n1.a;
			var bs = _n1.b;
			var cs = _n1.c;
			return _Utils_Tuple3(
				A2(elm$core$List$cons, a, aas),
				A2(elm$core$List$cons, b, bs),
				A2(elm$core$List$cons, c, cs));
		});
	return A3(
		elm$core$List$foldr,
		step,
		_Utils_Tuple3(_List_Nil, _List_Nil, _List_Nil),
		pairs);
};
var terezka$line_charts$Internal$Line$view = F3(
	function (_arguments, lines, datas) {
		var container = elm$svg$Svg$g(
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$class('chart__lines')
				]));
		var buildSeriesViews = (terezka$line_charts$Internal$Area$opacityContainer(_arguments.du) < 1) ? terezka$line_charts$Internal$Line$viewStacked(_arguments.du) : terezka$line_charts$Internal$Line$viewNormal;
		return container(
			buildSeriesViews(
				terezka$line_charts$Internal$Utils$unzip3(
					A3(
						elm$core$List$map2,
						terezka$line_charts$Internal$Line$viewSingle(_arguments),
						lines,
						datas))));
	});
var terezka$line_charts$Internal$Events$toChartAttributes = F3(
	function (data, system, _n0) {
		var events = _n0;
		var order = function (_n1) {
			var outside = _n1.a;
			var event = _n1.b;
			return outside ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
				A2(event, data, system));
		};
		return A2(elm$core$List$filterMap, order, events);
	});
var terezka$line_charts$LineChart$chartAreaAttributes = function (system) {
	return _List_fromArray(
		[
			elm$svg$Svg$Attributes$x(
			elm$core$String$fromFloat(system.aL.aN.cn)),
			elm$svg$Svg$Attributes$y(
			elm$core$String$fromFloat(system.aL.aN.df)),
			elm$svg$Svg$Attributes$width(
			elm$core$String$fromFloat(
				terezka$line_charts$Internal$Coordinate$lengthX(system))),
			elm$svg$Svg$Attributes$height(
			elm$core$String$fromFloat(
				terezka$line_charts$Internal$Coordinate$lengthY(system)))
		]);
};
var terezka$line_charts$LineChart$chartAreaPlatform = F3(
	function (config, data, system) {
		var attributes = elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						elm$svg$Svg$Attributes$fill('transparent')
					]),
					terezka$line_charts$LineChart$chartAreaAttributes(system),
					A3(terezka$line_charts$Internal$Events$toChartAttributes, data, system, config.dX)
				]));
		return A2(elm$svg$Svg$rect, attributes, _List_Nil);
	});
var elm$svg$Svg$clipPath = elm$svg$Svg$trustedNode('clipPath');
var terezka$line_charts$LineChart$clipPath = function (system) {
	return A2(
		elm$svg$Svg$clipPath,
		_List_fromArray(
			[
				elm$svg$Svg$Attributes$id(
				terezka$line_charts$Internal$Utils$toChartAreaId(system.ec))
			]),
		_List_fromArray(
			[
				A2(
				elm$svg$Svg$rect,
				terezka$line_charts$LineChart$chartAreaAttributes(system),
				_List_Nil)
			]));
};
var terezka$line_charts$Internal$Container$sizeStyles = F3(
	function (_n0, width, height) {
		var properties_ = _n0;
		var _n1 = properties_.aU;
		if (!_n1) {
			return _List_fromArray(
				[
					A2(
					elm$html$Html$Attributes$style,
					'height',
					elm$core$String$fromFloat(height) + 'px'),
					A2(
					elm$html$Html$Attributes$style,
					'width',
					elm$core$String$fromFloat(width) + 'px')
				]);
		} else {
			return _List_Nil;
		}
	});
var terezka$line_charts$LineChart$container = F4(
	function (config, _n0, junkHtml, plot) {
		var frame = _n0.aL;
		var userAttributes = A2(
			terezka$line_charts$Internal$Container$properties,
			function ($) {
				return $.aC;
			},
			config.dK);
		var sizeStyles = A3(terezka$line_charts$Internal$Container$sizeStyles, config.dK, frame.aU.dm, frame.aU.b8);
		var styles = A2(
			elm$core$List$cons,
			A2(elm$html$Html$Attributes$style, 'position', 'relative'),
			sizeStyles);
		return A2(
			elm$html$Html$div,
			_Utils_ap(styles, userAttributes),
			A2(elm$core$List$cons, plot, junkHtml));
	});
var terezka$line_charts$Internal$Data$Data = F3(
	function (user, point, isReal) {
		return {eo: isReal, eT: point, fm: user};
	});
var terezka$line_charts$LineChart$setY = F2(
	function (datum, y) {
		return A3(
			terezka$line_charts$Internal$Data$Data,
			datum.fm,
			A2(terezka$line_charts$Internal$Data$Point, datum.eT.dn, y),
			datum.eo);
	});
var terezka$line_charts$LineChart$normalize = function (datasets) {
	if (datasets.b) {
		var highest = datasets.a;
		var belows = datasets.b;
		var toPercentage = F2(
			function (highest_, datum) {
				return A2(terezka$line_charts$LineChart$setY, datum, (100 * datum.eT.ft) / highest_.eT.ft);
			});
		return A2(
			elm$core$List$map,
			A2(elm$core$List$map2, toPercentage, highest),
			A2(elm$core$List$cons, highest, belows));
	} else {
		return datasets;
	}
};
var terezka$line_charts$Internal$Utils$withFirst = F2(
	function (stuff, process) {
		if (stuff.b) {
			var first = stuff.a;
			var rest = stuff.b;
			return elm$core$Maybe$Just(
				A2(process, first, rest));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var terezka$line_charts$LineChart$addBelows = F2(
	function (alldata, dataBelowAll) {
		var add = F2(
			function (below, datum) {
				return A2(terezka$line_charts$LineChart$setY, below, below.eT.ft + datum.eT.ft);
			});
		var iterate = F4(
			function (datum0, dataTop, dataBelowTop, result) {
				iterate:
				while (true) {
					var _n0 = _Utils_Tuple2(dataTop, dataBelowTop);
					if (_n0.a.b) {
						if (_n0.b.b) {
							var _n1 = _n0.a;
							var datum1 = _n1.a;
							var data = _n1.b;
							var _n2 = _n0.b;
							var datumBelow = _n2.a;
							var dataBelow = _n2.b;
							if (_Utils_cmp(datum1.eT.dn, datumBelow.eT.dn) > 0) {
								if (datumBelow.eo) {
									var $temp$datum0 = datum0,
										$temp$dataTop = A2(elm$core$List$cons, datum1, data),
										$temp$dataBelowTop = dataBelow,
										$temp$result = A2(
										elm$core$List$cons,
										A2(add, datumBelow, datum0),
										result);
									datum0 = $temp$datum0;
									dataTop = $temp$dataTop;
									dataBelowTop = $temp$dataBelowTop;
									result = $temp$result;
									continue iterate;
								} else {
									var breakdata = _Utils_update(
										datum0,
										{eo: false});
									var $temp$datum0 = datum0,
										$temp$dataTop = A2(elm$core$List$cons, datum1, data),
										$temp$dataBelowTop = dataBelow,
										$temp$result = A2(
										elm$core$List$cons,
										A2(add, datumBelow, datum0),
										result);
									datum0 = $temp$datum0;
									dataTop = $temp$dataTop;
									dataBelowTop = $temp$dataBelowTop;
									result = $temp$result;
									continue iterate;
								}
							} else {
								var $temp$datum0 = datum1,
									$temp$dataTop = data,
									$temp$dataBelowTop = A2(elm$core$List$cons, datumBelow, dataBelow),
									$temp$result = result;
								datum0 = $temp$datum0;
								dataTop = $temp$dataTop;
								dataBelowTop = $temp$dataBelowTop;
								result = $temp$result;
								continue iterate;
							}
						} else {
							var _n4 = _n0.a;
							var datum1 = _n4.a;
							var data = _n4.b;
							return result;
						}
					} else {
						if (_n0.b.b) {
							var _n3 = _n0.b;
							var datumBelow = _n3.a;
							var dataBelow = _n3.b;
							if (_Utils_cmp(datum0.eT.dn, datumBelow.eT.dn) < 1) {
								var $temp$datum0 = datum0,
									$temp$dataTop = _List_Nil,
									$temp$dataBelowTop = dataBelow,
									$temp$result = A2(
									elm$core$List$cons,
									A2(add, datumBelow, datum0),
									result);
								datum0 = $temp$datum0;
								dataTop = $temp$dataTop;
								dataBelowTop = $temp$dataBelowTop;
								result = $temp$result;
								continue iterate;
							} else {
								var $temp$datum0 = datum0,
									$temp$dataTop = _List_Nil,
									$temp$dataBelowTop = dataBelow,
									$temp$result = A2(elm$core$List$cons, datumBelow, result);
								datum0 = $temp$datum0;
								dataTop = $temp$dataTop;
								dataBelowTop = $temp$dataBelowTop;
								result = $temp$result;
								continue iterate;
							}
						} else {
							return result;
						}
					}
				}
			});
		return elm$core$List$reverse(
			A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					terezka$line_charts$Internal$Utils$withFirst,
					alldata,
					F2(
						function (first, rest) {
							return A4(iterate, first, rest, dataBelowAll, _List_Nil);
						}))));
	});
var terezka$line_charts$LineChart$stack = function (dataset) {
	var stackBelows = F2(
		function (dataset_, result) {
			if (dataset_.b) {
				var data = dataset_.a;
				var belows = dataset_.b;
				return A2(
					stackBelows,
					belows,
					A2(
						elm$core$List$cons,
						A3(elm$core$List$foldl, terezka$line_charts$LineChart$addBelows, data, belows),
						result));
			} else {
				return result;
			}
		});
	return elm$core$List$reverse(
		A2(stackBelows, dataset, _List_Nil));
};
var terezka$line_charts$LineChart$toDataPoints = F2(
	function (config, lines) {
		var y = terezka$line_charts$Internal$Axis$variable(config.ft);
		var x = terezka$line_charts$Internal$Axis$variable(config.dn);
		var addPoint = function (datum) {
			var _n1 = _Utils_Tuple2(
				x(datum),
				y(datum));
			if (!_n1.a.$) {
				if (!_n1.b.$) {
					var x_ = _n1.a.a;
					var y_ = _n1.b.a;
					return elm$core$Maybe$Just(
						A3(
							terezka$line_charts$Internal$Data$Data,
							datum,
							A2(terezka$line_charts$Internal$Data$Point, x_, y_),
							true));
				} else {
					var x_ = _n1.a.a;
					var _n2 = _n1.b;
					return elm$core$Maybe$Just(
						A3(
							terezka$line_charts$Internal$Data$Data,
							datum,
							A2(terezka$line_charts$Internal$Data$Point, x_, 0),
							false));
				}
			} else {
				if (!_n1.b.$) {
					var _n3 = _n1.a;
					var y_ = _n1.b.a;
					return elm$core$Maybe$Nothing;
				} else {
					var _n4 = _n1.a;
					var _n5 = _n1.b;
					return elm$core$Maybe$Nothing;
				}
			}
		};
		var data = A2(
			elm$core$List$map,
			A2(
				elm$core$Basics$composeR,
				terezka$line_charts$Internal$Line$data,
				elm$core$List$filterMap(addPoint)),
			lines);
		var _n0 = config.du;
		switch (_n0.$) {
			case 0:
				return data;
			case 1:
				return data;
			case 2:
				return terezka$line_charts$LineChart$stack(data);
			default:
				return terezka$line_charts$LineChart$normalize(
					terezka$line_charts$LineChart$stack(data));
		}
	});
var terezka$line_charts$Internal$Axis$pixels = function (_n0) {
	var config = _n0;
	return config.R;
};
var terezka$line_charts$Internal$Axis$range = function (_n0) {
	var config = _n0;
	return config.S;
};
var terezka$line_charts$LineChart$Coordinate$Range = F2(
	function (min, max) {
		return {cr: max, aP: min};
	});
var terezka$line_charts$Internal$Axis$Range$applyX = F2(
	function (range, system) {
		switch (range.$) {
			case 0:
				var padMin = range.a;
				var padMax = range.b;
				var _n1 = system;
				var frame = _n1.aL;
				var _n2 = frame;
				var size = _n2.aU;
				var system_ = _Utils_update(
					system,
					{
						aL: _Utils_update(
							frame,
							{
								aU: _Utils_update(
									size,
									{
										dm: A2(elm$core$Basics$max, 1, (size.dm - padMin) - padMax)
									})
							})
					});
				var scale = terezka$line_charts$LineChart$Coordinate$scaleDataX(system_);
				return A2(
					terezka$line_charts$LineChart$Coordinate$Range,
					system.dn.aP - scale(padMin),
					system.dn.cr + scale(padMax));
			case 1:
				var min = range.a;
				var max = range.b;
				return A2(terezka$line_charts$LineChart$Coordinate$Range, min, max);
			default:
				var toRange = range.a;
				return toRange(system.dn);
		}
	});
var terezka$line_charts$Internal$Axis$Range$applyY = F2(
	function (range, system) {
		switch (range.$) {
			case 0:
				var padMin = range.a;
				var padMax = range.b;
				var _n1 = system;
				var frame = _n1.aL;
				var _n2 = frame;
				var size = _n2.aU;
				var system_ = _Utils_update(
					system,
					{
						aL: _Utils_update(
							frame,
							{
								aU: _Utils_update(
									size,
									{
										b8: A2(elm$core$Basics$max, 1, (size.b8 - padMin) - padMax)
									})
							})
					});
				var scale = terezka$line_charts$LineChart$Coordinate$scaleDataY(system_);
				return A2(
					terezka$line_charts$LineChart$Coordinate$Range,
					system.ft.aP - scale(padMin),
					system.ft.cr + scale(padMax));
			case 1:
				var min = range.a;
				var max = range.b;
				return A2(terezka$line_charts$LineChart$Coordinate$Range, min, max);
			default:
				var toRange = range.a;
				return toRange(system.ft);
		}
	});
var terezka$line_charts$Internal$Coordinate$Frame = F2(
	function (margin, size) {
		return {aN: margin, aU: size};
	});
var terezka$line_charts$Internal$Coordinate$Size = F2(
	function (width, height) {
		return {b8: height, dm: width};
	});
var terezka$line_charts$Internal$Coordinate$ground = function (range_) {
	return _Utils_update(
		range_,
		{
			aP: A2(elm$core$Basics$min, range_.aP, 0)
		});
};
var terezka$line_charts$Internal$Coordinate$maximum = function (toValue) {
	return A2(
		elm$core$Basics$composeR,
		elm$core$List$map(toValue),
		A2(
			elm$core$Basics$composeR,
			elm$core$List$maximum,
			elm$core$Maybe$withDefault(1)));
};
var elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$min, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var terezka$line_charts$Internal$Coordinate$minimum = function (toValue) {
	return A2(
		elm$core$Basics$composeR,
		elm$core$List$map(toValue),
		A2(
			elm$core$Basics$composeR,
			elm$core$List$minimum,
			elm$core$Maybe$withDefault(0)));
};
var terezka$line_charts$Internal$Coordinate$range = F2(
	function (toValue, data) {
		var range_ = {
			cr: A2(terezka$line_charts$Internal$Coordinate$maximum, toValue, data),
			aP: A2(terezka$line_charts$Internal$Coordinate$minimum, toValue, data)
		};
		return _Utils_eq(range_.aP, range_.cr) ? _Utils_update(
			range_,
			{cr: range_.cr + 1}) : range_;
	});
var terezka$line_charts$LineChart$toSystem = F2(
	function (config, data) {
		var yRange = A2(
			terezka$line_charts$Internal$Coordinate$range,
			A2(
				elm$core$Basics$composeR,
				function ($) {
					return $.eT;
				},
				function ($) {
					return $.ft;
				}),
			data);
		var xRange = A2(
			terezka$line_charts$Internal$Coordinate$range,
			A2(
				elm$core$Basics$composeR,
				function ($) {
					return $.eT;
				},
				function ($) {
					return $.dn;
				}),
			data);
		var size = A2(
			terezka$line_charts$Internal$Coordinate$Size,
			terezka$line_charts$Internal$Axis$pixels(config.dn),
			terezka$line_charts$Internal$Axis$pixels(config.ft));
		var hasArea = terezka$line_charts$Internal$Area$hasArea(config.du);
		var container_ = A2(terezka$line_charts$Internal$Container$properties, elm$core$Basics$identity, config.dK);
		var frame = A2(terezka$line_charts$Internal$Coordinate$Frame, container_.aN, size);
		var adjustDomainRange = function (domain) {
			return hasArea ? terezka$line_charts$Internal$Coordinate$ground(domain) : domain;
		};
		var system = {
			aL: frame,
			ec: container_.ec,
			dn: xRange,
			bC: xRange,
			ft: adjustDomainRange(yRange),
			bD: yRange
		};
		return _Utils_update(
			system,
			{
				dn: A2(
					terezka$line_charts$Internal$Axis$Range$applyX,
					terezka$line_charts$Internal$Axis$range(config.dn),
					system),
				ft: A2(
					terezka$line_charts$Internal$Axis$Range$applyY,
					terezka$line_charts$Internal$Axis$range(config.ft),
					system)
			});
	});
var terezka$line_charts$LineChart$viewBoxAttribute = function (_n0) {
	var frame = _n0.aL;
	return elm$svg$Svg$Attributes$viewBox(
		'0 0 ' + (elm$core$String$fromFloat(frame.aU.dm) + (' ' + elm$core$String$fromFloat(frame.aU.b8))));
};
var terezka$line_charts$LineChart$viewCustom = F2(
	function (config, lines) {
		var junkLineInfo = function (line_) {
			return _Utils_Tuple3(
				A3(terezka$line_charts$Internal$Line$color, config.ev, line_, _List_Nil),
				terezka$line_charts$Internal$Line$label(line_),
				terezka$line_charts$Internal$Line$data(line_));
		};
		var getJunk = A3(
			terezka$line_charts$Internal$Junk$getLayers,
			A2(elm$core$List$map, junkLineInfo, lines),
			terezka$line_charts$Internal$Axis$variable(config.dn),
			terezka$line_charts$Internal$Axis$variable(config.ft));
		var data = A2(terezka$line_charts$LineChart$toDataPoints, config, lines);
		var dataAll = elm$core$List$concat(data);
		var dataSafe = A2(
			elm$core$List$map,
			elm$core$List$filter(
				function ($) {
					return $.eo;
				}),
			data);
		var dataAllSafe = elm$core$List$concat(dataSafe);
		var system = A2(terezka$line_charts$LineChart$toSystem, config, dataAllSafe);
		var viewLines = terezka$line_charts$Internal$Line$view(
			{du: config.du, bX: config.dQ, ej: config.ej, cq: config.ev, c8: system});
		var viewLegends = terezka$line_charts$Internal$Legends$view(
			{
				du: config.du,
				bQ: dataSafe,
				bX: config.dQ,
				et: config.et,
				cq: config.ev,
				ac: lines,
				c8: system,
				dn: terezka$line_charts$Internal$Axis$variable(config.dn),
				ft: terezka$line_charts$Internal$Axis$variable(config.ft)
			});
		var attributes = elm$core$List$concat(
			_List_fromArray(
				[
					A2(
					terezka$line_charts$Internal$Container$properties,
					function ($) {
						return $.aD;
					},
					config.dK),
					A3(terezka$line_charts$Internal$Events$toContainerAttributes, dataAll, system, config.dX),
					_List_fromArray(
					[
						terezka$line_charts$LineChart$viewBoxAttribute(system)
					])
				]));
		var addGrid = terezka$line_charts$Internal$Junk$addBelow(
			A4(terezka$line_charts$Internal$Grid$view, system, config.dn, config.ft, config.d5));
		var junk = addGrid(
			A2(getJunk, system, config.ep));
		return A4(
			terezka$line_charts$LineChart$container,
			config,
			system,
			junk.eb,
			A2(
				elm$svg$Svg$svg,
				attributes,
				_List_fromArray(
					[
						A2(
						elm$svg$Svg$defs,
						_List_Nil,
						_List_fromArray(
							[
								terezka$line_charts$LineChart$clipPath(system)
							])),
						A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$class('chart__junk--below')
							]),
						junk.dy),
						A2(viewLines, lines, data),
						A3(terezka$line_charts$LineChart$chartAreaPlatform, config, dataAll, system),
						A3(terezka$line_charts$Internal$Axis$viewHorizontal, system, config.ek, config.dn),
						A3(terezka$line_charts$Internal$Axis$viewVertical, system, config.ek, config.ft),
						viewLegends,
						A2(
						elm$svg$Svg$g,
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$class('chart__junk--above')
							]),
						junk.dq)
					])));
	});
var terezka$line_charts$Internal$Area$None = {$: 0};
var terezka$line_charts$Internal$Area$none = terezka$line_charts$Internal$Area$None;
var terezka$line_charts$LineChart$Area$default = terezka$line_charts$Internal$Area$none;
var terezka$line_charts$Internal$Axis$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$custom = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$Line$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$Line$custom = elm$core$Basics$identity;
var terezka$line_charts$Internal$Coordinate$smallestRange = F2(
	function (data, range_) {
		return {
			cr: A2(elm$core$Basics$min, data.cr, range_.cr),
			aP: A2(elm$core$Basics$max, data.aP, range_.aP)
		};
	});
var terezka$line_charts$Internal$Axis$Line$rangeFrame = function (color) {
	return terezka$line_charts$Internal$Axis$Line$custom(
		F2(
			function (data, range) {
				var smallest = A2(terezka$line_charts$Internal$Coordinate$smallestRange, data, range);
				return {dF: color, b_: smallest.cr, dX: _List_Nil, bu: smallest.aP, dm: 1};
			}));
};
var terezka$line_charts$Internal$Axis$Range$Padded = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var terezka$line_charts$Internal$Axis$Range$padded = terezka$line_charts$Internal$Axis$Range$Padded;
var terezka$line_charts$Internal$Axis$Ticks$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$Ticks$custom = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$Title$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$Title$custom = F4(
	function (position, x, y, title) {
		return {
			b: _Utils_Tuple2(x, y),
			K: position,
			fo: title
		};
	});
var terezka$line_charts$Internal$Axis$Title$atPosition = F3(
	function (position, x, y) {
		return A2(
			elm$core$Basics$composeL,
			A3(terezka$line_charts$Internal$Axis$Title$custom, position, x, y),
			terezka$line_charts$Internal$Svg$label('inherit'));
	});
var terezka$line_charts$Internal$Axis$Title$atDataMax = function () {
	var position = F2(
		function (data, range) {
			return A2(elm$core$Basics$min, data.cr, range.cr);
		});
	return terezka$line_charts$Internal$Axis$Title$atPosition(position);
}();
var terezka$line_charts$Internal$Axis$Values$Around = function (a) {
	return {$: 1, a: a};
};
var terezka$line_charts$Internal$Axis$Values$around = terezka$line_charts$Internal$Axis$Values$Around;
var terezka$line_charts$Internal$Axis$Values$ceilingTo = F2(
	function (prec, number) {
		return prec * elm$core$Basics$ceiling(number / prec);
	});
var terezka$line_charts$Internal$Axis$Values$getBeginning = F2(
	function (min, interval) {
		var multiple = min / interval;
		return _Utils_eq(
			multiple,
			elm$core$Basics$round(multiple)) ? min : A2(terezka$line_charts$Internal$Axis$Values$ceilingTo, interval, min);
	});
var elm$core$Basics$isInfinite = _Basics_isInfinite;
var elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				elm$core$String$repeat,
				n - elm$core$String$length(string),
				elm$core$String$fromChar(_char)));
	});
var elm$core$String$reverse = _String_reverse;
var myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			elm$core$List$any,
			function (c) {
				return (c !== '0') && (c !== '.');
			},
			elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var myrho$elm_round$Round$increaseNum = function (_n0) {
	var head = _n0.a;
	var tail = _n0.b;
	if (head === '9') {
		var _n1 = elm$core$String$uncons(tail);
		if (_n1.$ === 1) {
			return '01';
		} else {
			var headtail = _n1.a;
			return A2(
				elm$core$String$cons,
				'0',
				myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			elm$core$String$cons,
			elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var myrho$elm_round$Round$splitComma = function (str) {
	var _n0 = A2(elm$core$String$split, '.', str);
	if (_n0.b) {
		if (_n0.b.b) {
			var before = _n0.a;
			var _n1 = _n0.b;
			var after = _n1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _n0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var myrho$elm_round$Round$toDecimal = function (fl) {
	var _n0 = A2(
		elm$core$String$split,
		'e',
		elm$core$String$fromFloat(
			elm$core$Basics$abs(fl)));
	if (_n0.b) {
		if (_n0.b.b) {
			var num = _n0.a;
			var _n1 = _n0.b;
			var exp = _n1.a;
			var e = A2(
				elm$core$Maybe$withDefault,
				0,
				elm$core$String$toInt(
					A2(elm$core$String$startsWith, '+', exp) ? A2(elm$core$String$dropLeft, 1, exp) : exp));
			var _n2 = myrho$elm_round$Round$splitComma(num);
			var before = _n2.a;
			var after = _n2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				elm$core$Maybe$withDefault,
				'0',
				A2(
					elm$core$Maybe$map,
					function (_n3) {
						var a = _n3.a;
						var b = _n3.b;
						return a + ('.' + b);
					},
					A2(
						elm$core$Maybe$map,
						elm$core$Tuple$mapFirst(elm$core$String$fromChar),
						elm$core$String$uncons(
							_Utils_ap(
								A2(
									elm$core$String$repeat,
									elm$core$Basics$abs(e),
									'0'),
								total))))) : A3(elm$core$String$padRight, e + 1, '0', total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _n0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if (elm$core$Basics$isInfinite(fl) || elm$core$Basics$isNaN(fl)) {
			return elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _n0 = myrho$elm_round$Round$splitComma(
				myrho$elm_round$Round$toDecimal(
					elm$core$Basics$abs(fl)));
			var before = _n0.a;
			var after = _n0.b;
			var r = elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2(elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					elm$core$String$padRight,
					r,
					'0',
					_Utils_ap(before, after)));
			var totalLen = elm$core$String$length(normalized);
			var roundDigitIndex = A2(elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3(elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3(elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? elm$core$String$reverse(
				A2(
					elm$core$Maybe$withDefault,
					'1',
					A2(
						elm$core$Maybe$map,
						myrho$elm_round$Round$increaseNum,
						elm$core$String$uncons(
							elm$core$String$reverse(remains))))) : remains;
			var numLen = elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					elm$core$String$repeat,
					elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				elm$core$String$length(after)) < 0) ? (A3(elm$core$String$slice, 0, numLen - s, num) + ('.' + A3(elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3(elm$core$String$padRight, s, '0', after))));
			return A2(myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var myrho$elm_round$Round$round = myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _n0 = elm$core$String$uncons(str);
			if (_n0.$ === 1) {
				return false;
			} else {
				if ('5' === _n0.a.a) {
					if (_n0.a.b === '') {
						var _n1 = _n0.a;
						return !signed;
					} else {
						var _n2 = _n0.a;
						return true;
					}
				} else {
					var _n3 = _n0.a;
					var _int = _n3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						elm$core$Char$toCode(_int));
				}
			}
		}));
var terezka$line_charts$Internal$Axis$Values$correctFloat = function (prec) {
	return A2(
		elm$core$Basics$composeR,
		myrho$elm_round$Round$round(prec),
		A2(
			elm$core$Basics$composeR,
			elm$core$String$toFloat,
			elm$core$Maybe$withDefault(0)));
};
var terezka$line_charts$Internal$Axis$Values$getMultiples = F3(
	function (magnitude, allowDecimals, hasTickAmount) {
		var defaults = hasTickAmount ? _List_fromArray(
			[1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) : _List_fromArray(
			[1, 2, 2.5, 5, 10]);
		return allowDecimals ? defaults : ((magnitude === 1) ? A2(
			elm$core$List$filter,
			function (n) {
				return _Utils_eq(
					elm$core$Basics$round(n),
					n);
			},
			defaults) : ((magnitude <= 0.1) ? _List_fromArray(
			[1 / magnitude]) : defaults));
	});
var terezka$line_charts$Internal$Axis$Values$getPrecision = function (number) {
	var _n0 = A2(
		elm$core$String$split,
		'e',
		elm$core$String$fromFloat(number));
	if ((_n0.b && _n0.b.b) && (!_n0.b.b.b)) {
		var before = _n0.a;
		var _n1 = _n0.b;
		var after = _n1.a;
		return elm$core$Basics$abs(
			A2(
				elm$core$Maybe$withDefault,
				0,
				elm$core$String$toInt(after)));
	} else {
		var _n2 = A2(
			elm$core$String$split,
			'.',
			elm$core$String$fromFloat(number));
		if ((_n2.b && _n2.b.b) && (!_n2.b.b.b)) {
			var before = _n2.a;
			var _n3 = _n2.b;
			var after = _n3.a;
			return elm$core$String$length(after);
		} else {
			return 0;
		}
	}
};
var elm$core$Basics$e = _Basics_e;
var terezka$line_charts$Internal$Utils$magnitude = function (num) {
	return A2(
		elm$core$Basics$pow,
		10,
		elm$core$Basics$floor(
			A2(elm$core$Basics$logBase, elm$core$Basics$e, num) / A2(elm$core$Basics$logBase, elm$core$Basics$e, 10)));
};
var terezka$line_charts$Internal$Axis$Values$getInterval = F3(
	function (intervalRaw, allowDecimals, hasTickAmount) {
		var magnitude = terezka$line_charts$Internal$Utils$magnitude(intervalRaw);
		var multiples = A3(terezka$line_charts$Internal$Axis$Values$getMultiples, magnitude, allowDecimals, hasTickAmount);
		var normalized = intervalRaw / magnitude;
		var findMultipleExact = function (multiples_) {
			findMultipleExact:
			while (true) {
				if (multiples_.b) {
					var m1 = multiples_.a;
					var rest = multiples_.b;
					if (_Utils_cmp(m1 * magnitude, intervalRaw) > -1) {
						return m1;
					} else {
						var $temp$multiples_ = rest;
						multiples_ = $temp$multiples_;
						continue findMultipleExact;
					}
				} else {
					return 1;
				}
			}
		};
		var findMultiple = function (multiples_) {
			findMultiple:
			while (true) {
				if (multiples_.b) {
					if (multiples_.b.b) {
						var m1 = multiples_.a;
						var _n2 = multiples_.b;
						var m2 = _n2.a;
						var rest = _n2.b;
						if (_Utils_cmp(normalized, (m1 + m2) / 2) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = A2(elm$core$List$cons, m2, rest);
							multiples_ = $temp$multiples_;
							continue findMultiple;
						}
					} else {
						var m1 = multiples_.a;
						var rest = multiples_.b;
						if (_Utils_cmp(normalized, m1) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = rest;
							multiples_ = $temp$multiples_;
							continue findMultiple;
						}
					}
				} else {
					return 1;
				}
			}
		};
		var multiple = hasTickAmount ? findMultipleExact(multiples) : findMultiple(multiples);
		var precision = terezka$line_charts$Internal$Axis$Values$getPrecision(magnitude) + terezka$line_charts$Internal$Axis$Values$getPrecision(multiple);
		return A2(terezka$line_charts$Internal$Axis$Values$correctFloat, precision, multiple * magnitude);
	});
var terezka$line_charts$Internal$Axis$Values$positions = F5(
	function (range, beginning, interval, m, acc) {
		positions:
		while (true) {
			var next = A2(
				terezka$line_charts$Internal$Axis$Values$correctFloat,
				terezka$line_charts$Internal$Axis$Values$getPrecision(interval),
				beginning + (m * interval));
			if (_Utils_cmp(next, range.cr) > 0) {
				return acc;
			} else {
				var $temp$range = range,
					$temp$beginning = beginning,
					$temp$interval = interval,
					$temp$m = m + 1,
					$temp$acc = _Utils_ap(
					acc,
					_List_fromArray(
						[next]));
				range = $temp$range;
				beginning = $temp$beginning;
				interval = $temp$interval;
				m = $temp$m;
				acc = $temp$acc;
				continue positions;
			}
		}
	});
var terezka$line_charts$Internal$Axis$Values$values = F4(
	function (allowDecimals, exact, amountRough, range) {
		var intervalRough = (range.cr - range.aP) / amountRough;
		var interval = A3(terezka$line_charts$Internal$Axis$Values$getInterval, intervalRough, allowDecimals, exact);
		var intervalSafe = (!interval) ? 1 : interval;
		var beginning = A2(terezka$line_charts$Internal$Axis$Values$getBeginning, range.aP, intervalSafe);
		var amountRoughSafe = (!amountRough) ? 1 : amountRough;
		return A5(terezka$line_charts$Internal$Axis$Values$positions, range, beginning, intervalSafe, 0, _List_Nil);
	});
var terezka$line_charts$Internal$Axis$Values$float = function (amount) {
	if (!amount.$) {
		var amount_ = amount.a;
		return A3(terezka$line_charts$Internal$Axis$Values$values, true, true, amount_);
	} else {
		var amount_ = amount.a;
		return A3(terezka$line_charts$Internal$Axis$Values$values, true, false, amount_);
	}
};
var terezka$line_charts$Internal$Axis$Tick$Negative = 0;
var terezka$line_charts$Internal$Axis$Tick$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$Tick$custom = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$Tick$float = function (n) {
	return terezka$line_charts$Internal$Axis$Tick$custom(
		{
			dF: terezka$line_charts$LineChart$Colors$gray,
			a_: 0,
			d5: true,
			cl: elm$core$Maybe$Just(
				A2(
					terezka$line_charts$Internal$Svg$label,
					'inherit',
					elm$core$String$fromFloat(n))),
			a8: 5,
			K: n,
			dm: 1
		});
};
var terezka$line_charts$LineChart$Axis$Tick$float = terezka$line_charts$Internal$Axis$Tick$float;
var terezka$line_charts$Internal$Axis$default = F3(
	function (pixels_, title_, variable_) {
		return terezka$line_charts$Internal$Axis$custom(
			{
				H: terezka$line_charts$Internal$Axis$Line$rangeFrame(terezka$line_charts$LineChart$Colors$gray),
				R: pixels_,
				S: A2(terezka$line_charts$Internal$Axis$Range$padded, 20, 20),
				u: terezka$line_charts$Internal$Axis$Ticks$custom(
					F2(
						function (data, range_) {
							var smallest = A2(terezka$line_charts$Internal$Coordinate$smallestRange, data, range_);
							var rangeSmall = smallest.cr - smallest.aP;
							var rangeLong = range_.cr - range_.aP;
							var diff = 1 - ((rangeLong - rangeSmall) / rangeLong);
							var amount = elm$core$Basics$round((diff * pixels_) / 90);
							return A2(
								elm$core$List$map,
								terezka$line_charts$LineChart$Axis$Tick$float,
								A2(
									terezka$line_charts$Internal$Axis$Values$float,
									terezka$line_charts$Internal$Axis$Values$around(amount),
									smallest));
						})),
				dd: A3(terezka$line_charts$Internal$Axis$Title$atDataMax, 0, 0, title_),
				T: A2(elm$core$Basics$composeL, elm$core$Maybe$Just, variable_)
			});
	});
var terezka$line_charts$LineChart$Axis$default = terezka$line_charts$Internal$Axis$default;
var terezka$line_charts$Internal$Axis$Intersection$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Axis$Intersection$custom = F2(
	function (toX, toY) {
		return function (_n0) {
			var x = _n0.dn;
			var y = _n0.ft;
			return A2(
				terezka$line_charts$Internal$Data$Point,
				toX(x),
				toY(y));
		};
	});
var terezka$line_charts$Internal$Axis$Intersection$default = A2(
	terezka$line_charts$Internal$Axis$Intersection$custom,
	function ($) {
		return $.aP;
	},
	function ($) {
		return $.aP;
	});
var terezka$line_charts$LineChart$Axis$Intersection$default = terezka$line_charts$Internal$Axis$Intersection$default;
var terezka$line_charts$Internal$Container$Margin = F4(
	function (top, right, bottom, left) {
		return {dB: bottom, cn: left, e_: right, df: top};
	});
var terezka$line_charts$Internal$Container$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Container$custom = elm$core$Basics$identity;
var terezka$line_charts$Internal$Container$Static = 0;
var terezka$line_charts$Internal$Container$static = 0;
var terezka$line_charts$Internal$Container$styled = F2(
	function (id, styles) {
		return terezka$line_charts$Internal$Container$custom(
			{
				aC: A2(
					elm$core$List$map,
					function (_n0) {
						var p = _n0.a;
						var v = _n0.b;
						return A2(elm$html$Html$Attributes$style, p, v);
					},
					styles),
				aD: _List_Nil,
				ec: id,
				aN: A4(terezka$line_charts$Internal$Container$Margin, 60, 140, 60, 80),
				aU: terezka$line_charts$Internal$Container$static
			});
	});
var terezka$line_charts$LineChart$Container$styled = terezka$line_charts$Internal$Container$styled;
var terezka$line_charts$Internal$Events$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Events$custom = elm$core$Basics$identity;
var terezka$line_charts$Internal$Events$default = terezka$line_charts$Internal$Events$custom(_List_Nil);
var terezka$line_charts$LineChart$Events$default = terezka$line_charts$Internal$Events$default;
var terezka$line_charts$Internal$Grid$Lines = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var terezka$line_charts$Internal$Grid$lines = terezka$line_charts$Internal$Grid$Lines;
var terezka$line_charts$LineChart$Colors$grayLightest = A3(avh4$elm_color$Color$rgb255, 243, 243, 243);
var terezka$line_charts$Internal$Grid$default = A2(terezka$line_charts$Internal$Grid$lines, 1, terezka$line_charts$LineChart$Colors$grayLightest);
var terezka$line_charts$LineChart$Grid$default = terezka$line_charts$Internal$Grid$default;
var terezka$line_charts$Internal$Interpolation$Monotone = 1;
var terezka$line_charts$LineChart$Interpolation$monotone = 1;
var terezka$line_charts$Internal$Junk$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Junk$custom = function (func) {
	return F3(
		function (_n0, _n1, _n2) {
			return func;
		});
};
var terezka$line_charts$LineChart$Junk$custom = terezka$line_charts$Internal$Junk$custom;
var terezka$line_charts$Internal$Legends$None = {$: 0};
var terezka$line_charts$Internal$Legends$none = terezka$line_charts$Internal$Legends$None;
var terezka$line_charts$LineChart$Legends$none = terezka$line_charts$Internal$Legends$none;
var terezka$line_charts$Internal$Line$Config = elm$core$Basics$identity;
var terezka$line_charts$Internal$Line$Style = elm$core$Basics$identity;
var terezka$line_charts$Internal$Line$style = F2(
	function (width, color_) {
		return {dF: color_, dm: width};
	});
var terezka$line_charts$Internal$Line$default = function (_n0) {
	return A2(terezka$line_charts$Internal$Line$style, 1, elm$core$Basics$identity);
};
var terezka$line_charts$LineChart$Line$default = terezka$line_charts$Internal$Line$default;
var author$project$Lia$Markdown$Chart$View$view = F2(
	function (attr, chart) {
		var list = A2(
			elm$core$List$map,
			author$project$Lia$Markdown$Chart$View$plot,
			elm$core$Dict$toList(chart.dP));
		return A2(
			elm$html$Html$div,
			A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-chart', attr),
			_List_fromArray(
				[
					A2(
					terezka$line_charts$LineChart$viewCustom,
					{
						du: terezka$line_charts$LineChart$Area$default,
						dK: A2(
							terezka$line_charts$LineChart$Container$styled,
							'lia-diagram',
							_List_fromArray(
								[
									_Utils_Tuple2('width', '100%'),
									_Utils_Tuple2('display', 'inline'),
									_Utils_Tuple2('font-family', 'monospace')
								])),
						dQ: author$project$Lia$Markdown$Chart$View$customDotsConfig,
						dX: terezka$line_charts$LineChart$Events$default,
						d5: terezka$line_charts$LineChart$Grid$default,
						ej: terezka$line_charts$LineChart$Interpolation$monotone,
						ek: terezka$line_charts$LineChart$Axis$Intersection$default,
						ep: terezka$line_charts$LineChart$Junk$custom(
							author$project$Lia$Markdown$Chart$View$title(chart.dd)),
						et: terezka$line_charts$LineChart$Legends$none,
						ev: terezka$line_charts$LineChart$Line$default,
						dn: A3(
							terezka$line_charts$LineChart$Axis$default,
							600,
							chart.fs,
							A2(
								elm$core$Basics$composeR,
								elm$core$Tuple$first,
								function ($) {
									return $.dn;
								})),
						ft: A3(
							terezka$line_charts$LineChart$Axis$default,
							450,
							chart.fu,
							A2(
								elm$core$Basics$composeR,
								elm$core$Tuple$first,
								function ($) {
									return $.ft;
								}))
					},
					list)
				]));
	});
var author$project$Lia$Markdown$Code$Terminal$Input = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Code$Terminal$KeyDown = function (a) {
	return {$: 0, a: a};
};
var elm$html$Html$Events$keyCode = A2(elm$json$Json$Decode$field, 'keyCode', elm$json$Json$Decode$int);
var author$project$Lia$Markdown$Code$Terminal$onKeyDown = function (tagger) {
	return A2(
		elm$html$Html$Events$on,
		'keydown',
		A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$keyCode));
};
var author$project$Lia$Markdown$Code$Terminal$view = function (terminal) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('lia-code-stdout'),
				A2(elm$html$Html$Attributes$style, 'margin-top', '-10px')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$code,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text('>> ')
					])),
				A2(
				elm$html$Html$input,
				_List_fromArray(
					[
						elm$html$Html$Events$onInput(author$project$Lia$Markdown$Code$Terminal$Input),
						author$project$Lia$Markdown$Code$Terminal$onKeyDown(author$project$Lia$Markdown$Code$Terminal$KeyDown),
						elm$html$Html$Attributes$value(terminal.D),
						A2(elm$html$Html$Attributes$style, 'background-color', 'black'),
						A2(elm$html$Html$Attributes$style, 'color', 'white'),
						A2(elm$html$Html$Attributes$style, 'border', '0'),
						A2(elm$html$Html$Attributes$style, 'width', 'calc(100% - 30px)')
					]),
				_List_Nil)
			]));
};
var author$project$Lia$Markdown$Code$Update$UpdateTerminal = F2(
	function (a, b) {
		return {$: 8, a: a, b: b};
	});
var author$project$Lia$Markdown$Code$View$div_ = elm$html$Html$div(
	_List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'margin-top', '16px'),
			A2(elm$html$Html$Attributes$style, 'margin-bottom', '16px')
		]));
var author$project$Lia$Markdown$Code$View$list_get = F2(
	function (idx, list) {
		list_get:
		while (true) {
			if (!list.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (!idx) {
					return elm$core$Maybe$Just(x);
				} else {
					var $temp$idx = idx - 1,
						$temp$list = xs;
					idx = $temp$idx;
					list = $temp$list;
					continue list_get;
				}
			}
		}
	});
var author$project$Lia$Markdown$Code$View$get_annotations = F2(
	function (log, file_id) {
		return A2(
			elm$core$Maybe$withDefault,
			elm$json$Json$Encode$null,
			A2(author$project$Lia$Markdown$Code$View$list_get, file_id, log.aI));
	});
var author$project$Lia$Markdown$Code$Editor$editor = function (attr) {
	return A2(
		elm$html$Html$node,
		'code-editor',
		A2(
			elm$core$List$cons,
			A2(elm$html$Html$Attributes$style, 'display', 'block'),
			attr));
};
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$property = elm$virtual_dom$VirtualDom$property;
var author$project$Lia$Markdown$Code$Editor$boolean = function (prop) {
	return A2(
		elm$core$Basics$composeR,
		elm$json$Json$Encode$bool,
		elm$html$Html$Attributes$property(prop));
};
var author$project$Lia$Markdown$Code$Editor$highlightActiveLine = author$project$Lia$Markdown$Code$Editor$boolean('highlightActiveLine');
var author$project$Lia$Markdown$Code$Editor$mode = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Encode$string,
	elm$html$Html$Attributes$property('mode'));
var author$project$Lia$Markdown$Code$Editor$readOnly = author$project$Lia$Markdown$Code$Editor$boolean('readOnly');
var author$project$Lia$Markdown$Code$Editor$showCursor = author$project$Lia$Markdown$Code$Editor$boolean('showCursor');
var author$project$Lia$Markdown$Code$Editor$showGutter = author$project$Lia$Markdown$Code$Editor$boolean('showGutter');
var author$project$Lia$Markdown$Code$Editor$showPrintMargin = author$project$Lia$Markdown$Code$Editor$boolean('showPrintMargin');
var author$project$Lia$Markdown$Code$Editor$tabSize = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Encode$int,
	elm$html$Html$Attributes$property('tabSize'));
var author$project$Lia$Markdown$Code$Editor$theme = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Encode$string,
	elm$html$Html$Attributes$property('theme'));
var author$project$Lia$Markdown$Code$Editor$useSoftTabs = author$project$Lia$Markdown$Code$Editor$boolean('useSoftTabs');
var author$project$Lia$Markdown$Code$Editor$value = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Encode$string,
	elm$html$Html$Attributes$property('value'));
var author$project$Lia$Markdown$Code$View$highlight = F5(
	function (theme, attr, lang, code, headless) {
		var top_border = headless ? '4px' : '0px';
		return A2(
			author$project$Lia$Markdown$Code$Editor$editor,
			A2(
				elm$core$List$append,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'border-bottom-left-radius', '4px'),
						A2(elm$html$Html$Attributes$style, 'border-bottom-right-radius', '4px'),
						A2(elm$html$Html$Attributes$style, 'border-top-left-radius', top_border),
						A2(elm$html$Html$Attributes$style, 'border-top-right-radius', top_border),
						A2(elm$html$Html$Attributes$style, 'border', '1px solid gray'),
						author$project$Lia$Markdown$Code$Editor$value(code),
						author$project$Lia$Markdown$Code$Editor$mode(lang),
						author$project$Lia$Markdown$Code$Editor$theme(theme),
						author$project$Lia$Markdown$Code$Editor$tabSize(2),
						author$project$Lia$Markdown$Code$Editor$useSoftTabs(false),
						author$project$Lia$Markdown$Code$Editor$readOnly(true),
						author$project$Lia$Markdown$Code$Editor$showCursor(false),
						author$project$Lia$Markdown$Code$Editor$highlightActiveLine(false),
						author$project$Lia$Markdown$Code$Editor$showGutter(false),
						author$project$Lia$Markdown$Code$Editor$showPrintMargin(false)
					]),
				author$project$Lia$Markdown$Inline$View$attributes(attr)),
			_List_Nil);
	});
var author$project$Lia$Markdown$Code$View$view_code = F3(
	function (theme, attr, snippet) {
		var headless = snippet.eC === '';
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					headless ? elm$html$Html$text('') : A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-accordion-dummy')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(snippet.eC)
						])),
					A5(author$project$Lia$Markdown$Code$View$highlight, theme, attr, snippet.eq, snippet.W, headless)
				]));
	});
var author$project$Lia$Markdown$Code$Update$Eval = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Markdown$Code$Update$First = function (a) {
	return {$: 6, a: a};
};
var author$project$Lia$Markdown$Code$Update$Last = function (a) {
	return {$: 7, a: a};
};
var author$project$Lia$Markdown$Code$Update$Load = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var author$project$Lia$Markdown$Code$Update$Stop = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Code$View$control_style = _List_fromArray(
	[
		A2(elm$html$Html$Attributes$style, 'padding-left', '5px'),
		A2(elm$html$Html$Attributes$style, 'padding-right', '5px'),
		A2(elm$html$Html$Attributes$style, 'float', 'right'),
		A2(elm$html$Html$Attributes$style, 'margin-right', '2px'),
		A2(elm$html$Html$Attributes$style, 'margin-left', '2px')
	]);
var author$project$Translations$codeExecute = function (lang) {
	switch (lang) {
		case 0:
			return 'Изпълни';
		case 1:
			return 'Ausführen';
		case 2:
			return 'Execute';
		case 3:
			return 'اجرا';
		case 4:
			return 'իրականացնել';
		default:
			return 'запустити';
	}
};
var author$project$Translations$codeFirst = function (lang) {
	switch (lang) {
		case 0:
			return 'Първа версия';
		case 1:
			return 'erste Version';
		case 2:
			return 'first version';
		case 3:
			return 'نسخه اولیه';
		case 4:
			return 'առաջին տարբերակը';
		default:
			return 'перша версія';
	}
};
var author$project$Translations$codeLast = function (lang) {
	switch (lang) {
		case 0:
			return 'Последна версия';
		case 1:
			return 'letzte Version';
		case 2:
			return 'last version';
		case 3:
			return 'آخرین نسخه';
		case 4:
			return 'վերջին տարբերակը';
		default:
			return 'остання версія';
	}
};
var author$project$Translations$codeNext = function (lang) {
	switch (lang) {
		case 0:
			return 'следваща версия';
		case 1:
			return 'eine Version vor';
		case 2:
			return 'next version';
		case 3:
			return 'نسخه بعدی';
		case 4:
			return 'հաջորդ տարբերակը';
		default:
			return 'наступна версія';
	}
};
var author$project$Translations$codePrev = function (lang) {
	switch (lang) {
		case 0:
			return 'Предишна версия';
		case 1:
			return 'eine Version zurück';
		case 2:
			return 'previous version';
		case 3:
			return 'نسخه قبلی';
		case 4:
			return 'նախորդ տարբերակը';
		default:
			return 'попередня версія';
	}
};
var author$project$Translations$codeRunning = function (lang) {
	switch (lang) {
		case 0:
			return 'Работещ';
		case 1:
			return 'wird ausgeführt';
		case 2:
			return 'is running';
		case 3:
			return 'در حال اجرا';
		case 4:
			return 'ընթանում է';
		default:
			return 'виконується';
	}
};
var elm$html$Html$Attributes$disabled = elm$html$Html$Attributes$boolProperty('disabled');
var author$project$Lia$Markdown$Code$View$view_control = F6(
	function (lang, idx, version_active, version_count, running, terminal) {
		var forward = running || (!version_active);
		var backward = running || _Utils_eq(version_active, version_count - 1);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'padding', '0px'),
					A2(elm$html$Html$Attributes$style, 'width', '100%')
				]),
			_List_fromArray(
				[
					function () {
					var _n0 = _Utils_Tuple2(running, terminal);
					if (_n0.a) {
						if (!_n0.b) {
							return A2(
								elm$html$Html$span,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('lia-btn lia-icon'),
										A2(elm$html$Html$Attributes$style, 'margin-left', '0px'),
										elm$html$Html$Attributes$title(
										author$project$Translations$codeRunning(lang)),
										elm$html$Html$Attributes$disabled(true)
									]),
								_List_fromArray(
									[
										A2(
										elm$html$Html$span,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('lia-icon rotating')
											]),
										_List_fromArray(
											[
												elm$html$Html$text('sync')
											]))
									]));
						} else {
							return A2(
								elm$html$Html$span,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('lia-btn lia-icon'),
										A2(elm$html$Html$Attributes$style, 'margin-left', '0px'),
										elm$html$Html$Attributes$title(
										author$project$Translations$codeRunning(lang)),
										elm$html$Html$Events$onClick(
										author$project$Lia$Markdown$Code$Update$Stop(idx))
									]),
								_List_fromArray(
									[
										elm$html$Html$text('stop')
									]));
						}
					} else {
						return A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-btn lia-icon'),
									elm$html$Html$Events$onClick(
									author$project$Lia$Markdown$Code$Update$Eval(idx)),
									A2(elm$html$Html$Attributes$style, 'margin-left', '0px'),
									elm$html$Html$Attributes$title(
									author$project$Translations$codeExecute(lang))
								]),
							_List_fromArray(
								[
									elm$html$Html$text('play_circle_filled')
								]));
					}
				}(),
					A2(
					elm$html$Html$button,
					A2(
						elm$core$List$append,
						author$project$Lia$Markdown$Code$View$control_style,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(
								author$project$Lia$Markdown$Code$Update$Last(idx)),
								elm$html$Html$Attributes$class('lia-btn lia-icon'),
								elm$html$Html$Attributes$title(
								author$project$Translations$codeLast(lang)),
								elm$html$Html$Attributes$disabled(backward)
							])),
					_List_fromArray(
						[
							elm$html$Html$text('last_page')
						])),
					A2(
					elm$html$Html$button,
					A2(
						elm$core$List$append,
						author$project$Lia$Markdown$Code$View$control_style,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(
								A2(author$project$Lia$Markdown$Code$Update$Load, idx, version_active + 1)),
								elm$html$Html$Attributes$class('lia-btn lia-icon'),
								elm$html$Html$Attributes$title(
								author$project$Translations$codeNext(lang)),
								elm$html$Html$Attributes$disabled(backward)
							])),
					_List_fromArray(
						[
							elm$html$Html$text('navigate_next')
						])),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-label'),
							A2(elm$html$Html$Attributes$style, 'float', 'right'),
							A2(elm$html$Html$Attributes$style, 'margin-top', '11px')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							elm$core$String$fromInt(version_active))
						])),
					A2(
					elm$html$Html$button,
					A2(
						elm$core$List$append,
						author$project$Lia$Markdown$Code$View$control_style,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(
								A2(author$project$Lia$Markdown$Code$Update$Load, idx, version_active - 1)),
								elm$html$Html$Attributes$class('lia-btn lia-icon'),
								elm$html$Html$Attributes$title(
								author$project$Translations$codePrev(lang)),
								elm$html$Html$Attributes$disabled(forward)
							])),
					_List_fromArray(
						[
							elm$html$Html$text('navigate_before')
						])),
					A2(
					elm$html$Html$button,
					A2(
						elm$core$List$append,
						author$project$Lia$Markdown$Code$View$control_style,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(
								author$project$Lia$Markdown$Code$Update$First(idx)),
								elm$html$Html$Attributes$class('lia-btn lia-icon'),
								elm$html$Html$Attributes$title(
								author$project$Translations$codeFirst(lang)),
								elm$html$Html$Attributes$disabled(forward)
							])),
					_List_fromArray(
						[
							elm$html$Html$text('first_page')
						]))
				]));
	});
var author$project$Lia$Markdown$Code$Update$FlipFullscreen = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var author$project$Lia$Markdown$Code$Update$FlipView = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var author$project$Lia$Markdown$Code$Editor$annotations = elm$html$Html$Attributes$property('annotations');
var author$project$Lia$Markdown$Code$Editor$enableBasicAutocompletion = author$project$Lia$Markdown$Code$Editor$boolean('enableBasicAutocompletion');
var author$project$Lia$Markdown$Code$Editor$enableLiveAutocompletion = author$project$Lia$Markdown$Code$Editor$boolean('enableLiveAutocompletion');
var author$project$Lia$Markdown$Code$Editor$enableSnippets = author$project$Lia$Markdown$Code$Editor$boolean('enableSnippets');
var author$project$Lia$Markdown$Code$Editor$extensions = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Encode$list(elm$json$Json$Encode$string),
	elm$html$Html$Attributes$property('extensions'));
var author$project$Lia$Markdown$Code$Editor$maxLines = A2(
	elm$core$Basics$composeR,
	elm$json$Json$Encode$int,
	elm$html$Html$Attributes$property('maxLines'));
var author$project$Lia$Markdown$Code$Editor$onChange = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'editorChanged',
		A2(
			elm$json$Json$Decode$map,
			msg,
			A2(
				elm$json$Json$Decode$at,
				_List_fromArray(
					['target', 'value']),
				elm$json$Json$Decode$string)));
};
var author$project$Lia$Markdown$Code$Update$Update = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Code$View$lines = function (code) {
	return elm$core$List$length(
		elm$core$String$lines(code));
};
var author$project$Lia$Markdown$Code$View$pixel = function (from_lines) {
	return (from_lines * 21) + 16;
};
var author$project$Lia$Markdown$Code$View$toStyle = F3(
	function (visible, headless, pix) {
		var top_border = headless ? '4px' : '0px';
		return _List_fromArray(
			[
				A2(
				elm$html$Html$Attributes$style,
				'max-height',
				visible ? (elm$core$String$fromInt(pix) + 'px') : '0px'),
				A2(elm$html$Html$Attributes$style, 'transition', 'max-height 0.25s ease-out'),
				A2(elm$html$Html$Attributes$style, 'border-bottom-left-radius', '4px'),
				A2(elm$html$Html$Attributes$style, 'border-bottom-right-radius', '4px'),
				A2(elm$html$Html$Attributes$style, 'border-top-left-radius', top_border),
				A2(elm$html$Html$Attributes$style, 'border-top-right-radius', top_border),
				A2(elm$html$Html$Attributes$style, 'border', '1px solid gray')
			]);
	});
var author$project$Lia$Markdown$Code$View$evaluate = F7(
	function (theme, attr, running, _n0, file, headless, errors) {
		var id_1 = _n0.a;
		var id_2 = _n0.b;
		var total_lines = author$project$Lia$Markdown$Code$View$lines(file.W);
		var max_lines = file.d3 ? total_lines : ((total_lines > 16) ? 16 : total_lines);
		return A2(
			author$project$Lia$Markdown$Code$Editor$editor,
			A2(
				elm$core$List$append,
				_List_fromArray(
					[
						author$project$Lia$Markdown$Code$Editor$onChange(
						A2(author$project$Lia$Markdown$Code$Update$Update, id_1, id_2)),
						author$project$Lia$Markdown$Code$Editor$value(file.W),
						author$project$Lia$Markdown$Code$Editor$mode(file.eq),
						author$project$Lia$Markdown$Code$Editor$theme(theme),
						author$project$Lia$Markdown$Code$Editor$maxLines(
						(max_lines > 16) ? (-1) : max_lines),
						author$project$Lia$Markdown$Code$Editor$readOnly(running),
						author$project$Lia$Markdown$Code$Editor$tabSize(2),
						author$project$Lia$Markdown$Code$Editor$useSoftTabs(false),
						author$project$Lia$Markdown$Code$Editor$annotations(errors),
						author$project$Lia$Markdown$Code$Editor$enableBasicAutocompletion(true),
						author$project$Lia$Markdown$Code$Editor$enableLiveAutocompletion(true),
						author$project$Lia$Markdown$Code$Editor$enableSnippets(true),
						author$project$Lia$Markdown$Code$Editor$extensions(
						_List_fromArray(
							['language_tools']))
					]),
				A2(
					elm$core$List$append,
					A3(
						author$project$Lia$Markdown$Code$View$toStyle,
						file.dj,
						headless,
						author$project$Lia$Markdown$Code$View$pixel(max_lines)),
					author$project$Lia$Markdown$Inline$View$attributes(attr))),
			_List_Nil);
	});
var author$project$Translations$codeMaximize = function (lang) {
	switch (lang) {
		case 0:
			return 'Максимизиране';
		case 1:
			return 'Darstellung maximieren';
		case 2:
			return 'maximize view';
		case 3:
			return 'بزرگ کردن پنجره';
		case 4:
			return 'բարձրագունել տեսքը';
		default:
			return 'зображення збільшити';
	}
};
var author$project$Translations$codeMinimize = function (lang) {
	switch (lang) {
		case 0:
			return 'Минимизиране';
		case 1:
			return 'Darstellung minimieren';
		case 2:
			return 'minimize view';
		case 3:
			return 'کوچک کردن پنجره';
		case 4:
			return 'նվազեցնել տեսքը';
		default:
			return 'зображення зменшити';
	}
};
var elm$html$Html$Attributes$classList = function (classes) {
	return elm$html$Html$Attributes$class(
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				elm$core$Tuple$first,
				A2(elm$core$List$filter, elm$core$Tuple$second, classes))));
};
var author$project$Lia$Markdown$Code$View$view_eval = F8(
	function (lang, theme, attr, running, errors, id_1, id_2, file) {
		var headless = file.eC === '';
		return A2(
			elm$html$Html$div,
			A2(author$project$Lia$Markdown$Inline$View$annotation, '', attr),
			_List_fromArray(
				[
					headless ? elm$html$Html$text('') : A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('lia-accordion', true),
									_Utils_Tuple2('active', file.dj)
								]))
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Events$onClick(
									A2(author$project$Lia$Markdown$Code$Update$FlipView, id_1, id_2)),
									A2(elm$html$Html$Attributes$style, 'width', 'calc(100% - 20px)'),
									A2(elm$html$Html$Attributes$style, 'display', 'inline-block')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$b,
									_List_Nil,
									_List_fromArray(
										[
											file.dj ? elm$html$Html$text(' + ') : elm$html$Html$text(' - ')
										])),
									elm$html$Html$text(file.eC)
								])),
							file.dj ? A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-accordion-min-max'),
									elm$html$Html$Events$onClick(
									A2(author$project$Lia$Markdown$Code$Update$FlipFullscreen, id_1, id_2)),
									elm$html$Html$Attributes$title(
									file.d3 ? author$project$Translations$codeMinimize(lang) : author$project$Translations$codeMaximize(lang))
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$b,
									_List_Nil,
									_List_fromArray(
										[
											file.d3 ? elm$html$Html$text('↥') : elm$html$Html$text('↧')
										]))
								])) : elm$html$Html$text('')
						])),
					A7(
					author$project$Lia$Markdown$Code$View$evaluate,
					theme,
					attr,
					running,
					_Utils_Tuple2(id_1, id_2),
					file,
					headless,
					errors(id_2))
				]));
	});
var author$project$Lia$Markdown$Code$Log$view_level = function (level) {
	return A2(
		elm$html$Html$Attributes$style,
		'color',
		function () {
			switch (level) {
				case 0:
					return 'lightblue';
				case 1:
					return 'white';
				case 2:
					return 'yellow';
				default:
					return 'red';
			}
		}());
};
var author$project$Lia$Markdown$Code$Log$view_message = function (_n0) {
	var level = _n0.ab;
	var text = _n0.aw;
	return A2(
		elm$html$Html$span,
		_List_fromArray(
			[
				author$project$Lia$Markdown$Code$Log$view_level(level)
			]),
		_List_fromArray(
			[
				elm$html$Html$text(text)
			]));
};
var author$project$Lia$Markdown$Code$Log$view = function (log) {
	return A2(
		elm$core$List$map,
		author$project$Lia$Markdown$Code$Log$view_message,
		elm$core$List$reverse(log.O));
};
var author$project$Lia$Markdown$Code$View$scroll_to_end = function (lines_) {
	return A2(
		elm$html$Html$Attributes$property,
		'scrollTop',
		elm$json$Json$Encode$string(
			elm$core$String$fromInt(14 + (14 * lines_))));
};
var elm$html$Html$pre = _VirtualDom_node('pre');
var author$project$Lia$Markdown$Code$View$view_result = function (log) {
	return (!log.ac) ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'margin-top', '8px')
			]),
		_List_Nil) : A2(
		elm$html$Html$pre,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('lia-code-stdout'),
				author$project$Lia$Markdown$Code$View$scroll_to_end(log.ac)
			]),
		author$project$Lia$Markdown$Code$Log$view(log));
};
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
var author$project$Lia$Markdown$Code$View$view = F5(
	function (lang, theme, attr, model, code) {
		if (!code.$) {
			var lang_title_code = code.a;
			return author$project$Lia$Markdown$Code$View$div_(
				A2(
					elm$core$List$map,
					A2(author$project$Lia$Markdown$Code$View$view_code, theme, attr),
					lang_title_code));
		} else {
			var id_1 = code.a;
			var _n1 = A2(elm$core$Array$get, id_1, model);
			if (!_n1.$) {
				var project = _n1.a;
				var errors = author$project$Lia$Markdown$Code$View$get_annotations(project.a9);
				return author$project$Lia$Markdown$Code$View$div_(
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_Nil,
							elm$core$Array$toList(
								A2(
									elm$core$Array$indexedMap,
									A6(author$project$Lia$Markdown$Code$View$view_eval, lang, theme, attr, project.cP, errors, id_1),
									project.a$))),
							A6(
							author$project$Lia$Markdown$Code$View$view_control,
							lang,
							id_1,
							project.aV,
							elm$core$Array$length(project.fn),
							project.cP,
							_Utils_eq(project.db, elm$core$Maybe$Nothing) ? false : true),
							author$project$Lia$Markdown$Code$View$view_result(project.a9),
							function () {
							var _n2 = project.db;
							if (_n2.$ === 1) {
								return elm$html$Html$text('');
							} else {
								var term = _n2.a;
								return A2(
									elm$html$Html$map,
									author$project$Lia$Markdown$Code$Update$UpdateTerminal(id_1),
									author$project$Lia$Markdown$Code$Terminal$view(term));
							}
						}()
						]));
			} else {
				return elm$html$Html$text('');
			}
		}
	});
var author$project$Lia$Markdown$Effect$Model$get_paragraph = F3(
	function (id1, id2, model) {
		var _n0 = A2(
			elm$core$Maybe$map,
			elm$core$Array$get(id2),
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.ad;
				},
				A2(elm$core$Dict$get, id1, model.aG)));
		if (!_n0.$) {
			var a = _n0.a;
			return a;
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Lia$Markdown$Effect$View$view_block = F3(
	function (viewer, idx, blocks) {
		return A2(
			elm$core$List$cons,
			A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('lia-effect-circle')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(idx))
					])),
			A2(elm$core$List$map, viewer, blocks));
	});
var author$project$Lia$Markdown$Quiz$Model$get_state = F2(
	function (vector, idx) {
		return A2(elm$core$Array$get, idx, vector);
	});
var author$project$Lia$Markdown$Quiz$Types$solved = function (e) {
	return e.e2;
};
var author$project$Lia$Markdown$Quiz$Block$Update$Toggle = {$: 0};
var author$project$Lia$Markdown$Inline$View$view_inf = author$project$Lia$Markdown$Inline$View$view(99999);
var author$project$Lia$Markdown$Quiz$Block$View$get_option = F2(
	function (id, list) {
		get_option:
		while (true) {
			var _n0 = _Utils_Tuple2(id, list);
			if (_n0.b.b) {
				if (!_n0.a) {
					var _n1 = _n0.b;
					var x = _n1.a;
					return A2(
						elm$html$Html$span,
						_List_Nil,
						A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, x));
				} else {
					var i = _n0.a;
					var _n2 = _n0.b;
					var xs = _n2.b;
					var $temp$id = i - 1,
						$temp$list = xs;
					id = $temp$id;
					list = $temp$list;
					continue get_option;
				}
			} else {
				return elm$html$Html$text('choose');
			}
		}
	});
var author$project$Lia$Markdown$Quiz$Block$Update$Choose = function (a) {
	return {$: 1, a: a};
};
var author$project$Lia$Markdown$Quiz$Block$View$option = F2(
	function (id, opt) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-dropdown-option'),
					elm$html$Html$Events$onClick(
					author$project$Lia$Markdown$Quiz$Block$Update$Choose(id))
				]),
			A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, opt));
	});
var author$project$Lia$Markdown$Quiz$Block$View$select = F4(
	function (solved, open, options, i) {
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-dropdown'),
							solved ? elm$html$Html$Attributes$disabled(true) : elm$html$Html$Events$onClick(author$project$Lia$Markdown$Quiz$Block$Update$Toggle)
						]),
					_List_fromArray(
						[
							A2(author$project$Lia$Markdown$Quiz$Block$View$get_option, i, options),
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-icon'),
									A2(elm$html$Html$Attributes$style, 'float', 'right')
								]),
							_List_fromArray(
								[
									open ? elm$html$Html$text('arrow_drop_down') : elm$html$Html$text('arrow_drop_up')
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-dropdown-options'),
							A2(
							elm$html$Html$Attributes$style,
							'max-height',
							open ? '2000px' : '0px')
						]),
					A2(elm$core$List$indexedMap, author$project$Lia$Markdown$Quiz$Block$View$option, options))
				]));
	});
var author$project$Lia$Markdown$Quiz$Block$Update$Input = function (a) {
	return {$: 2, a: a};
};
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var author$project$Lia$Markdown$Quiz$Block$View$text = F2(
	function (solved, state) {
		return A2(
			elm$html$Html$input,
			_List_fromArray(
				[
					elm$html$Html$Attributes$type_('input'),
					elm$html$Html$Attributes$class('lia-input'),
					elm$html$Html$Attributes$value(state),
					elm$html$Html$Attributes$disabled(solved),
					elm$html$Html$Events$onInput(author$project$Lia$Markdown$Quiz$Block$Update$Input)
				]),
			_List_Nil);
	});
var author$project$Lia$Markdown$Quiz$Block$View$view = F3(
	function (solved, quiz, state) {
		if (!state.$) {
			var str = state.a;
			return A2(author$project$Lia$Markdown$Quiz$Block$View$text, solved, str);
		} else {
			var open = state.a;
			var value = state.b;
			return A4(
				author$project$Lia$Markdown$Quiz$Block$View$select,
				solved,
				open,
				quiz.eR,
				A2(
					elm$core$Maybe$withDefault,
					-1,
					elm$core$List$head(value)));
		}
	});
var author$project$Lia$Markdown$Quiz$Matrix$View$add_text = F2(
	function (inline, toRow) {
		return A2(
			elm$html$Html$tr,
			_List_Nil,
			A2(
				elm$core$List$append,
				toRow,
				elm$core$List$singleton(
					A2(
						elm$html$Html$td,
						_List_Nil,
						A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, inline)))));
	});
var elm$html$Html$th = _VirtualDom_node('th');
var author$project$Lia$Markdown$Quiz$Matrix$View$th = function (inlines) {
	return A2(
		elm$html$Html$th,
		_List_fromArray(
			[
				elm$html$Html$Attributes$align('center')
			]),
		A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, inlines));
};
var author$project$Lia$Markdown$Quiz$Matrix$View$header = function (inlines) {
	return A2(
		elm$html$Html$tr,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('lia-label')
			]),
		A2(elm$core$List$map, author$project$Lia$Markdown$Quiz$Matrix$View$th, inlines));
};
var author$project$Lia$Markdown$Quiz$Matrix$Update$Toggle = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$html$Html$Attributes$checked = elm$html$Html$Attributes$boolProperty('checked');
var author$project$Lia$Markdown$Quiz$Matrix$View$check = F4(
	function (solved, row_id, column_id, value) {
		return A2(
			elm$html$Html$td,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-check-item')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$input,
							_List_fromArray(
								[
									elm$html$Html$Attributes$type_('checkbox'),
									elm$html$Html$Attributes$checked(value),
									solved ? elm$html$Html$Attributes$disabled(true) : elm$html$Html$Events$onClick(
									A2(author$project$Lia$Markdown$Quiz$Matrix$Update$Toggle, row_id, column_id))
								]),
							_List_Nil),
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-check-btn')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('check')
								]))
						]))
				]));
	});
var author$project$Lia$Markdown$Quiz$Matrix$View$radio = F4(
	function (solved, row_id, column_id, value) {
		return A2(
			elm$html$Html$td,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-radio-item')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$input,
							_List_fromArray(
								[
									elm$html$Html$Attributes$type_('radio'),
									elm$html$Html$Attributes$checked(value),
									solved ? elm$html$Html$Attributes$disabled(true) : elm$html$Html$Events$onClick(
									A2(author$project$Lia$Markdown$Quiz$Matrix$Update$Toggle, row_id, column_id))
								]),
							_List_Nil),
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-radio-btn')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('')
								]))
						]))
				]));
	});
var author$project$Lia$Markdown$Quiz$Matrix$View$tr = F3(
	function (solved, id, state) {
		if (!state.$) {
			var list = state.a;
			return A2(
				elm$core$List$indexedMap,
				A2(author$project$Lia$Markdown$Quiz$Matrix$View$radio, solved, id),
				list);
		} else {
			var list = state.a;
			return A2(
				elm$core$List$indexedMap,
				A2(author$project$Lia$Markdown$Quiz$Matrix$View$check, solved, id),
				list);
		}
	});
var author$project$Lia$Markdown$Quiz$Matrix$View$view = F3(
	function (solved, quiz, state) {
		return A2(
			elm$html$Html$table,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-survey-matrix')
				]),
			A2(
				elm$core$List$cons,
				author$project$Lia$Markdown$Quiz$Matrix$View$header(quiz.d6),
				A3(
					elm$core$List$map2,
					author$project$Lia$Markdown$Quiz$Matrix$View$add_text,
					quiz.eR,
					A2(
						elm$core$List$indexedMap,
						author$project$Lia$Markdown$Quiz$Matrix$View$tr(solved),
						elm$core$Array$toList(state)))));
	});
var author$project$Lia$Markdown$Quiz$Update$Block_Update = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var author$project$Lia$Markdown$Quiz$Update$Matrix_Update = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$Lia$Markdown$Quiz$Update$Vector_Update = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Lia$Markdown$Quiz$Vector$Update$Toggle = elm$core$Basics$identity;
var author$project$Lia$Markdown$Quiz$Vector$View$check = F3(
	function (solved, checked, _n0) {
		var id = _n0.a;
		var line = _n0.b;
		return A2(
			elm$html$Html$tr,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-check-item')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$attribute, 'valign', 'top'),
							elm$html$Html$Attributes$class('lia-label')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$input,
							_List_fromArray(
								[
									elm$html$Html$Attributes$type_('checkbox'),
									elm$html$Html$Attributes$checked(checked),
									solved ? elm$html$Html$Attributes$disabled(true) : elm$html$Html$Events$onClick(id)
								]),
							_List_Nil),
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-check-btn')
								]),
							_List_fromArray(
								[
									elm$html$Html$text('check')
								]))
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-label')
						]),
					A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, line))
				]));
	});
var author$project$Lia$Markdown$Quiz$Vector$View$radio = F3(
	function (solved, checked, _n0) {
		var id = _n0.a;
		var line = _n0.b;
		return A2(
			elm$html$Html$tr,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-radio-item')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$attribute, 'valign', 'top'),
							elm$html$Html$Attributes$class('lia-label')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$input,
							_List_fromArray(
								[
									elm$html$Html$Attributes$type_('radio'),
									elm$html$Html$Attributes$checked(checked),
									solved ? elm$html$Html$Attributes$disabled(true) : elm$html$Html$Events$onClick(id)
								]),
							_List_Nil),
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-radio-btn')
								]),
							_List_Nil)
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-label')
						]),
					A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, line))
				]));
	});
var author$project$Lia$Markdown$Quiz$Vector$View$table = F3(
	function (fn, inlines, bools) {
		return A2(
			elm$html$Html$table,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$attribute, 'cellspacing', '8')
				]),
			A3(
				elm$core$List$map2,
				fn,
				bools,
				A2(elm$core$List$indexedMap, elm$core$Tuple$pair, inlines)));
	});
var author$project$Lia$Markdown$Quiz$Vector$View$view = F3(
	function (solved, quiz, state) {
		var _n0 = _Utils_Tuple2(quiz.c$, state);
		_n0$2:
		while (true) {
			if (!_n0.a.$) {
				if (!_n0.b.$) {
					var list = _n0.b.a;
					return A3(
						author$project$Lia$Markdown$Quiz$Vector$View$table,
						author$project$Lia$Markdown$Quiz$Vector$View$radio(solved),
						quiz.eR,
						list);
				} else {
					break _n0$2;
				}
			} else {
				if (_n0.b.$ === 1) {
					var list = _n0.b.a;
					return A3(
						author$project$Lia$Markdown$Quiz$Vector$View$table,
						author$project$Lia$Markdown$Quiz$Vector$View$check(solved),
						quiz.eR,
						list);
				} else {
					break _n0$2;
				}
			}
		}
		return elm$html$Html$text('');
	});
var author$project$Lia$Markdown$Quiz$View$state_view = F3(
	function (solved, state, quiz) {
		var _n0 = _Utils_Tuple2(state, quiz.eU);
		_n0$3:
		while (true) {
			switch (_n0.a.$) {
				case 1:
					if (_n0.b.$ === 1) {
						var s = _n0.a.a;
						var q = _n0.b.a;
						return A2(
							elm$html$Html$map,
							author$project$Lia$Markdown$Quiz$Update$Block_Update(quiz.ec),
							A3(author$project$Lia$Markdown$Quiz$Block$View$view, solved, q, s));
					} else {
						break _n0$3;
					}
				case 2:
					if (_n0.b.$ === 2) {
						var s = _n0.a.a;
						var q = _n0.b.a;
						return A2(
							elm$html$Html$map,
							author$project$Lia$Markdown$Quiz$Update$Vector_Update(quiz.ec),
							A3(author$project$Lia$Markdown$Quiz$Vector$View$view, solved, q, s));
					} else {
						break _n0$3;
					}
				case 3:
					if (_n0.b.$ === 3) {
						var s = _n0.a.a;
						var q = _n0.b.a;
						return A2(
							elm$html$Html$map,
							author$project$Lia$Markdown$Quiz$Update$Matrix_Update(quiz.ec),
							A3(author$project$Lia$Markdown$Quiz$Matrix$View$view, solved, q, s));
					} else {
						break _n0$3;
					}
				default:
					break _n0$3;
			}
		}
		return elm$html$Html$text('');
	});
var author$project$Lia$Markdown$Quiz$Update$Check = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Quiz$Update$ShowSolution = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var author$project$Translations$quizCheck = function (lang) {
	switch (lang) {
		case 0:
			return 'Проверка';
		case 1:
			return 'Prüfen';
		case 2:
			return 'Check';
		case 3:
			return 'بررسی';
		case 4:
			return 'ստուգել';
		default:
			return 'перевірити';
	}
};
var author$project$Translations$quizChecked = function (lang) {
	switch (lang) {
		case 0:
			return 'Проверено';
		case 1:
			return 'Gelöst';
		case 2:
			return 'Checked';
		case 3:
			return 'بررسی شده';
		case 4:
			return 'ստուգված';
		default:
			return 'перевірено';
	}
};
var author$project$Translations$quizResolved = function (lang) {
	switch (lang) {
		case 0:
			return 'Решено';
		case 1:
			return 'Aufgelöst';
		case 2:
			return 'Resolved';
		case 3:
			return 'حل شده';
		case 4:
			return 'լուծված է ';
		default:
			return 'розв\'язано';
	}
};
var author$project$Lia$Markdown$Quiz$View$view_button = F4(
	function (lang, trials, solved, msg) {
		switch (solved) {
			case 0:
				return (!trials) ? A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-btn'),
							elm$html$Html$Events$onClick(msg)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$Translations$quizCheck(lang))
						])) : A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-btn'),
							elm$html$Html$Attributes$class('lia-failure'),
							elm$html$Html$Events$onClick(msg)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$Translations$quizCheck(lang) + (' ' + elm$core$String$fromInt(trials)))
						]));
			case 1:
				return A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-btn'),
							elm$html$Html$Attributes$class('lia-success'),
							elm$html$Html$Attributes$disabled(true)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$Translations$quizChecked(lang) + (' ' + elm$core$String$fromInt(trials)))
						]));
			default:
				return A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-btn'),
							elm$html$Html$Attributes$class('lia-warning'),
							elm$html$Html$Attributes$disabled(true)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$Translations$quizResolved(lang))
						]));
		}
	});
var author$project$Translations$quizSolution = function (lang) {
	switch (lang) {
		case 0:
			return 'Отговор';
		case 1:
			return 'zeige Lösung';
		case 2:
			return 'show solution';
		case 3:
			return 'نمایش راهکار';
		case 4:
			return 'ցույց տալ լուծումը';
		default:
			return 'показати розв\'язок';
	}
};
var author$project$Lia$Markdown$Quiz$View$view_button_solution = F3(
	function (lang, solution, msg) {
		return (!solution) ? A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-hint-btn'),
					elm$html$Html$Events$onClick(msg),
					elm$html$Html$Attributes$title(
					author$project$Translations$quizSolution(lang)),
					A2(elm$html$Html$Attributes$style, 'cursor', 'pointer')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('info')
				])) : elm$html$Html$text('');
	});
var author$project$Lia$Markdown$Quiz$Update$ShowHint = function (a) {
	return {$: 4, a: a};
};
var author$project$Lia$Markdown$Quiz$View$view_hints = F3(
	function (idx, counter, hints) {
		var v_hints = F2(
			function (h, c) {
				var _n0 = _Utils_Tuple2(h, c);
				if (!_n0.a.b) {
					return _List_Nil;
				} else {
					if (!_n0.b) {
						return _List_Nil;
					} else {
						var _n1 = _n0.a;
						var x = _n1.a;
						var xs = _n1.b;
						return A2(
							elm$core$List$cons,
							A2(
								elm$html$Html$p,
								_List_Nil,
								A2(
									elm$core$List$cons,
									A2(
										elm$html$Html$span,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('lia-icon')
											]),
										_List_fromArray(
											[
												elm$html$Html$text('lightbulb_outline')
											])),
									A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, x))),
							A2(v_hints, xs, c - 1));
					}
				}
			});
		return (_Utils_cmp(
			counter,
			elm$core$List$length(hints)) < 0) ? A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(' '),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-hint-btn'),
							elm$html$Html$Events$onClick(
							author$project$Lia$Markdown$Quiz$Update$ShowHint(idx)),
							elm$html$Html$Attributes$title('show hint'),
							A2(elm$html$Html$Attributes$style, 'cursor', 'pointer')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('help')
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-hints')
						]),
					A2(v_hints, hints, counter))
				])) : A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-hints')
				]),
			A2(v_hints, hints, counter));
	});
var author$project$Lia$Markdown$Quiz$View$view_quiz = F4(
	function (lang, state, quiz, fn) {
		return A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					(state.dV === '') ? elm$html$Html$text('') : A2(elm$html$Html$br, _List_Nil, _List_Nil),
					(state.dV === '') ? elm$html$Html$text('') : elm$html$Html$text(state.dV),
					fn,
					A4(
					author$project$Lia$Markdown$Quiz$View$view_button,
					lang,
					state.fk,
					state.e2,
					A3(author$project$Lia$Markdown$Quiz$Update$Check, quiz.ec, quiz.eU, quiz.aa)),
					_Utils_eq(quiz.eU, author$project$Lia$Markdown$Quiz$Types$Empty_Type) ? elm$html$Html$text('') : A3(
					author$project$Lia$Markdown$Quiz$View$view_button_solution,
					lang,
					state.e2,
					A2(author$project$Lia$Markdown$Quiz$Update$ShowSolution, quiz.ec, quiz.eU)),
					A3(author$project$Lia$Markdown$Quiz$View$view_hints, quiz.ec, state.d9, quiz.ea)
				]));
	});
var author$project$Lia$Markdown$Quiz$View$view = F3(
	function (lang, quiz, vector) {
		var _n0 = A2(author$project$Lia$Markdown$Quiz$Model$get_state, vector, quiz.ec);
		if (!_n0.$) {
			var elem = _n0.a;
			return A4(
				author$project$Lia$Markdown$Quiz$View$view_quiz,
				lang,
				elem,
				quiz,
				A3(
					author$project$Lia$Markdown$Quiz$View$state_view,
					author$project$Lia$Markdown$Quiz$Types$solved(elem),
					elem.t,
					quiz));
		} else {
			return elm$html$Html$text('');
		}
	});
var author$project$Lia$Markdown$Quiz$View$view_solution = F2(
	function (vector, quiz) {
		return A2(
			elm$core$Tuple$pair,
			_Utils_eq(quiz.eU, author$project$Lia$Markdown$Quiz$Types$Empty_Type),
			A2(
				elm$core$Maybe$withDefault,
				false,
				A2(
					elm$core$Maybe$map,
					author$project$Lia$Markdown$Quiz$Types$solved,
					A2(author$project$Lia$Markdown$Quiz$Model$get_state, vector, quiz.ec))));
	});
var author$project$Lia$Markdown$Survey$Model$get_matrix_state = F4(
	function (vector, idx, row, _var) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if ((!_n0.$) && (_n0.a.b.$ === 3)) {
			var _n1 = _n0.a;
			var _n2 = _n1.b;
			var matrix = _n2.b;
			return A2(
				elm$core$Maybe$withDefault,
				false,
				A2(
					elm$core$Maybe$andThen,
					function (d) {
						return A2(elm$core$Dict$get, _var, d);
					},
					A2(elm$core$Array$get, row, matrix)));
		} else {
			return false;
		}
	});
var author$project$Lia$Markdown$Survey$Model$get_select_state = F2(
	function (vector, id) {
		var _n0 = A2(elm$core$Array$get, id, vector);
		if ((!_n0.$) && (_n0.a.b.$ === 1)) {
			var _n1 = _n0.a;
			var _n2 = _n1.b;
			var open = _n2.a;
			var value = _n2.b;
			return _Utils_Tuple2(open, value);
		} else {
			return _Utils_Tuple2(false, -1);
		}
	});
var author$project$Lia$Markdown$Survey$Model$get_text_state = F2(
	function (vector, idx) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if ((!_n0.$) && (!_n0.a.b.$)) {
			var _n1 = _n0.a;
			var str = _n1.b.a;
			return str;
		} else {
			return '';
		}
	});
var author$project$Lia$Markdown$Survey$Model$get_vector_state = F3(
	function (vector, idx, _var) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if ((!_n0.$) && (_n0.a.b.$ === 2)) {
			var _n1 = _n0.a;
			var _n2 = _n1.b;
			var state = _n2.b;
			return A2(
				elm$core$Maybe$withDefault,
				false,
				A2(elm$core$Dict$get, _var, state));
		} else {
			return false;
		}
	});
var author$project$Lia$Markdown$Survey$Update$MatrixUpdate = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var author$project$Lia$Markdown$Survey$Update$VectorUpdate = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var author$project$Lia$Markdown$Survey$View$inline = function (elements) {
	return A2(
		elm$html$Html$span,
		_List_Nil,
		A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, elements));
};
var author$project$Lia$Markdown$Survey$View$input = F4(
	function (button, msg, checked, submitted) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(
					button ? 'lia-check-item' : 'lia-radio-item')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$type_(
							button ? 'checkbox' : 'radio'),
							elm$html$Html$Attributes$checked(checked),
							submitted ? elm$html$Html$Attributes$disabled(true) : elm$html$Html$Events$onClick(msg)
						]),
					_List_Nil),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							button ? 'lia-check-btn' : 'lia-radio-btn')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							button ? 'check' : '')
						]))
				]));
	});
var author$project$Lia$Markdown$Survey$View$matrix = F6(
	function (button, msg, fn, vars, submitted, _n0) {
		var row = _n0.a;
		var elements = _n0.b;
		var msgX = msg(row);
		var fnX = fn(row);
		return A2(
			elm$html$Html$tr,
			_List_Nil,
			A2(
				elm$core$List$append,
				A2(
					elm$core$List$map,
					function (_var) {
						return A2(
							elm$html$Html$td,
							_List_fromArray(
								[
									elm$html$Html$Attributes$align('center')
								]),
							_List_fromArray(
								[
									A4(
									author$project$Lia$Markdown$Survey$View$input,
									button,
									msgX(_var),
									fnX(_var),
									submitted)
								]));
					},
					vars),
				_List_fromArray(
					[
						A2(
						elm$html$Html$td,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Lia$Markdown$Survey$View$inline(elements)
							]))
					])));
	});
var author$project$Lia$Markdown$Survey$View$vector = F5(
	function (button, msg, fn, submitted, _n0) {
		var _var = _n0.a;
		var elements = _n0.b;
		return A2(
			elm$html$Html$table,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$attribute, 'cellspacing', '8')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							A2(elm$html$Html$Attributes$attribute, 'valign', 'top'),
							elm$html$Html$Attributes$class('lia-label')
						]),
					_List_fromArray(
						[
							A4(
							author$project$Lia$Markdown$Survey$View$input,
							button,
							msg(_var),
							fn(_var),
							submitted)
						])),
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-label')
						]),
					_List_fromArray(
						[
							author$project$Lia$Markdown$Survey$View$inline(elements)
						]))
				]));
	});
var elm$html$Html$thead = _VirtualDom_node('thead');
var author$project$Lia$Markdown$Survey$View$view_matrix = F5(
	function (header, vars, questions, fn, submitted) {
		var th = A2(
			elm$html$Html$thead,
			_List_Nil,
			A2(
				elm$core$List$map,
				A2(
					elm$core$Basics$composeR,
					elm$core$List$map(author$project$Lia$Markdown$Inline$View$view_inf),
					elm$html$Html$th(
						_List_fromArray(
							[
								elm$html$Html$Attributes$align('center')
							]))),
				header));
		var fnX = fn(submitted);
		return A2(
			elm$html$Html$table,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-survey-matrix')
				]),
			A2(
				elm$core$List$cons,
				th,
				A2(
					elm$core$List$map,
					fnX,
					A2(elm$core$List$indexedMap, elm$core$Tuple$pair, questions))));
	});
var author$project$Lia$Markdown$Survey$Update$SelectChose = function (a) {
	return {$: 2, a: a};
};
var author$project$Lia$Markdown$Survey$View$get_option = F2(
	function (id, list) {
		get_option:
		while (true) {
			var _n0 = _Utils_Tuple2(id, list);
			if (_n0.b.b) {
				if (!_n0.a) {
					var _n1 = _n0.b;
					var x = _n1.a;
					return A2(
						elm$html$Html$span,
						_List_Nil,
						A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, x));
				} else {
					var i = _n0.a;
					var _n2 = _n0.b;
					var xs = _n2.b;
					var $temp$id = i - 1,
						$temp$list = xs;
					id = $temp$id;
					list = $temp$list;
					continue get_option;
				}
			} else {
				return elm$html$Html$text('choose');
			}
		}
	});
var author$project$Lia$Markdown$Survey$Update$SelectUpdate = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Lia$Markdown$Survey$View$option = F3(
	function (id1, id2, opt) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-dropdown-option'),
					elm$html$Html$Events$onClick(
					A2(author$project$Lia$Markdown$Survey$Update$SelectUpdate, id1, id2))
				]),
			A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, opt));
	});
var author$project$Lia$Markdown$Survey$View$view_select = F5(
	function (lang, options, _n0, id, submitted) {
		var open = _n0.a;
		var value = _n0.b;
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-dropdown'),
							submitted ? elm$html$Html$Attributes$disabled(true) : elm$html$Html$Events$onClick(
							author$project$Lia$Markdown$Survey$Update$SelectChose(id))
						]),
					_List_fromArray(
						[
							A2(author$project$Lia$Markdown$Survey$View$get_option, value, options),
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-icon'),
									A2(elm$html$Html$Attributes$style, 'float', 'right')
								]),
							_List_fromArray(
								[
									open ? elm$html$Html$text('arrow_drop_down') : elm$html$Html$text('arrow_drop_up')
								]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-dropdown-options'),
							A2(
							elm$html$Html$Attributes$style,
							'max-height',
							open ? '2000px' : '0px')
						]),
					A2(
						elm$core$List$indexedMap,
						author$project$Lia$Markdown$Survey$View$option(id),
						options))
				]));
	});
var author$project$Lia$Markdown$Survey$Model$get_submission_state = F2(
	function (vector, idx) {
		var _n0 = A2(elm$core$Array$get, idx, vector);
		if ((!_n0.$) && _n0.a.a) {
			var _n1 = _n0.a;
			return true;
		} else {
			return false;
		}
	});
var author$project$Translations$surveySubmit = function (lang) {
	switch (lang) {
		case 0:
			return 'Изпрати';
		case 1:
			return 'Abschicken';
		case 2:
			return 'Submit';
		case 3:
			return 'ارسال';
		case 4:
			return 'ներկայացնել';
		default:
			return 'відіслати';
	}
};
var author$project$Translations$surveySubmitted = function (lang) {
	switch (lang) {
		case 0:
			return 'Благодаря';
		case 1:
			return 'Dankeshön';
		case 2:
			return 'Thanks';
		case 3:
			return 'تشکر';
		case 4:
			return 'շնորհակալություն';
		default:
			return 'дякую';
	}
};
var author$project$Lia$Markdown$Survey$View$submit_button = F4(
	function (lang, submitted, idx, javascript) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					submitted ? A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-btn'),
							elm$html$Html$Attributes$disabled(true)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$Translations$surveySubmitted(lang))
						])) : A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-btn'),
							elm$html$Html$Events$onClick(
							A2(author$project$Lia$Markdown$Survey$Update$Submit, idx, javascript))
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$Translations$surveySubmit(lang))
						]))
				]));
	});
var author$project$Lia$Markdown$Survey$View$view_survey = F5(
	function (lang, model, idx, javascript, fn) {
		var submitted = A2(author$project$Lia$Markdown$Survey$Model$get_submission_state, model, idx);
		return _List_fromArray(
			[
				fn(submitted),
				A4(author$project$Lia$Markdown$Survey$View$submit_button, lang, submitted, idx, javascript)
			]);
	});
var author$project$Lia$Markdown$Survey$Update$TextUpdate = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var author$project$Translations$surveyText = function (lang) {
	switch (lang) {
		case 0:
			return 'Въведете текст...';
		case 1:
			return 'Texteingabe ...';
		case 2:
			return 'Enter some text...';
		case 3:
			return 'لطفا متن وارد کنید';
		case 4:
			return 'Մուտքագրեք որոշ տեքստ';
		default:
			return 'Ввід тексту ...';
	}
};
var elm$html$Html$textarea = _VirtualDom_node('textarea');
var elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		elm$core$String$fromInt(n));
};
var author$project$Lia$Markdown$Survey$View$view_text = F5(
	function (lang, str, lines, idx, submitted) {
		var attr = _List_fromArray(
			[
				elm$html$Html$Events$onInput(
				author$project$Lia$Markdown$Survey$Update$TextUpdate(idx)),
				elm$html$Html$Attributes$class('lia-textarea'),
				elm$html$Html$Attributes$placeholder(
				author$project$Translations$surveyText(lang)),
				elm$html$Html$Attributes$value(str),
				elm$html$Html$Attributes$disabled(submitted)
			]);
		if (lines === 1) {
			return A2(elm$html$Html$input, attr, _List_Nil);
		} else {
			return A2(
				elm$html$Html$textarea,
				A2(
					elm$core$List$cons,
					elm$html$Html$Attributes$rows(lines),
					attr),
				_List_Nil);
		}
	});
var author$project$Lia$Markdown$Survey$View$view_vector = F3(
	function (questions, fn, submitted) {
		var fnX = fn(submitted);
		return A2(
			elm$html$Html$div,
			_List_Nil,
			A2(elm$core$List$map, fnX, questions));
	});
var author$project$Lia$Markdown$Survey$View$view = F4(
	function (lang, attr, survey, model) {
		return A2(
			elm$html$Html$p,
			A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-quiz lia-card', attr),
			function () {
				var _n0 = survey.e7;
				switch (_n0.$) {
					case 0:
						var lines = _n0.a;
						return A5(
							author$project$Lia$Markdown$Survey$View$view_survey,
							lang,
							model,
							survey.ec,
							survey.aa,
							A4(
								author$project$Lia$Markdown$Survey$View$view_text,
								lang,
								A2(author$project$Lia$Markdown$Survey$Model$get_text_state, model, survey.ec),
								lines,
								survey.ec));
					case 1:
						var inlines = _n0.a;
						return A5(
							author$project$Lia$Markdown$Survey$View$view_survey,
							lang,
							model,
							survey.ec,
							survey.aa,
							A4(
								author$project$Lia$Markdown$Survey$View$view_select,
								lang,
								inlines,
								A2(author$project$Lia$Markdown$Survey$Model$get_select_state, model, survey.ec),
								survey.ec));
					case 2:
						var button = _n0.a;
						var questions = _n0.b;
						return A5(
							author$project$Lia$Markdown$Survey$View$view_survey,
							lang,
							model,
							survey.ec,
							survey.aa,
							A2(
								author$project$Lia$Markdown$Survey$View$view_vector,
								questions,
								A3(
									author$project$Lia$Markdown$Survey$View$vector,
									button,
									author$project$Lia$Markdown$Survey$Update$VectorUpdate(survey.ec),
									A2(author$project$Lia$Markdown$Survey$Model$get_vector_state, model, survey.ec))));
					default:
						var button = _n0.a;
						var header = _n0.b;
						var vars = _n0.c;
						var questions = _n0.d;
						return A5(
							author$project$Lia$Markdown$Survey$View$view_survey,
							lang,
							model,
							survey.ec,
							survey.aa,
							A4(
								author$project$Lia$Markdown$Survey$View$view_matrix,
								header,
								vars,
								questions,
								A4(
									author$project$Lia$Markdown$Survey$View$matrix,
									button,
									author$project$Lia$Markdown$Survey$Update$MatrixUpdate(survey.ec),
									A2(author$project$Lia$Markdown$Survey$Model$get_matrix_state, model, survey.ec),
									vars)));
				}
			}());
	});
var author$project$Lia$Markdown$View$view_table = F5(
	function (config, attr, header, format, body) {
		var view_row = F2(
			function (fct, row) {
				return (_Utils_eq(header, _List_Nil) ? elm$core$List$map(
					function (r) {
						return A2(
							fct,
							_List_fromArray(
								[
									elm$html$Html$Attributes$align('left')
								]),
							config.fo(r));
					}) : A2(
					elm$core$List$map2,
					F2(
						function (f, r) {
							return A2(
								fct,
								_List_fromArray(
									[
										elm$html$Html$Attributes$align(f)
									]),
								config.fo(r));
						}),
					format))(row);
			});
		return A2(
			elm$html$Html$table,
			A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-table', attr),
			A2(
				elm$core$List$cons,
				A2(
					elm$html$Html$thead,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-inline lia-table-head')
						]),
					A2(view_row, elm$html$Html$th, header)),
				A2(
					elm$core$List$map,
					function (row) {
						return A2(
							elm$html$Html$tr,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-inline lia-table-row')
								]),
							A2(view_row, elm$html$Html$td, row));
					},
					body)));
	});
var elm$html$Html$blockquote = _VirtualDom_node('blockquote');
var elm$html$Html$hr = _VirtualDom_node('hr');
var elm$html$Html$li = _VirtualDom_node('li');
var elm$html$Html$ol = _VirtualDom_node('ol');
var elm$html$Html$ul = _VirtualDom_node('ul');
var author$project$Lia$Markdown$View$view_block = F2(
	function (config, block) {
		switch (block.$) {
			case 0:
				var attr = block.a;
				return A2(
					elm$html$Html$hr,
					A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-horiz-line', attr),
					_List_Nil);
			case 2:
				var attr = block.a;
				var elements = block.b;
				return A2(
					elm$html$Html$p,
					A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-paragraph', attr),
					config.fo(elements));
			case 7:
				var attr = block.a;
				var _n2 = block.b;
				var id_in = _n2.a;
				var id_out = _n2.b;
				var sub_blocks = _n2.c;
				return ((config.eA === 2) || ((_Utils_cmp(id_in, config.cV.M.dj) < 1) && (_Utils_cmp(id_out, config.cV.M.dj) > 0))) ? A2(
					elm$html$Html$div,
					A2(
						elm$core$List$cons,
						_Utils_eq(id_in, config.cV.M.dj) ? elm$html$Html$Attributes$id('focused') : elm$html$Html$Attributes$id(
							elm$core$String$fromInt(id_in)),
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-effect-inline', attr)),
					A3(
						author$project$Lia$Markdown$Effect$View$view_block,
						author$project$Lia$Markdown$View$view_block(config),
						id_in,
						sub_blocks)) : elm$html$Html$text('');
			case 3:
				var attr = block.a;
				var list = block.b;
				return A2(
					elm$html$Html$ul,
					A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-list lia-unordered', attr),
					A2(author$project$Lia$Markdown$View$view_bulletlist, config, list));
			case 4:
				var attr = block.a;
				var list = block.b;
				return A2(
					elm$html$Html$ol,
					A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-list lia-ordered', attr),
					A2(author$project$Lia$Markdown$View$view_list, config, list));
			case 5:
				var attr = block.a;
				var header = block.b;
				var format = block.c;
				var body = block.d;
				return A5(author$project$Lia$Markdown$View$view_table, config, attr, header, format, body);
			case 1:
				var attr = block.a;
				var elements = block.b;
				return A2(
					elm$html$Html$blockquote,
					A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-quote', attr),
					A2(
						elm$core$List$map,
						function (e) {
							return A2(author$project$Lia$Markdown$View$view_block, config, e);
						},
						elements));
			case 11:
				var attr = block.a;
				var code = block.b;
				return A2(
					elm$html$Html$map,
					author$project$Lia$Markdown$Update$UpdateCode,
					A5(author$project$Lia$Markdown$Code$View$view, config.eq, config.bE, attr, config.cV.aW, code));
			case 6:
				if (block.c.$ === 1) {
					var attr = block.a;
					var quiz = block.b;
					var _n3 = block.c;
					return A2(
						elm$html$Html$div,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-quiz lia-card', attr),
						_List_fromArray(
							[
								A2(
								elm$html$Html$map,
								author$project$Lia$Markdown$Update$UpdateQuiz,
								A3(author$project$Lia$Markdown$Quiz$View$view, config.eq, quiz, config.cV.bi))
							]));
				} else {
					var attr = block.a;
					var quiz = block.b;
					var _n4 = block.c.a;
					var answer = _n4.a;
					var hidden_effects = _n4.b;
					return A2(
						elm$html$Html$div,
						A2(author$project$Lia$Markdown$Inline$View$annotation, 'lia-quiz lia-card', attr),
						function () {
							var _n5 = A2(author$project$Lia$Markdown$Quiz$View$view_solution, config.cV.bi, quiz);
							if (_n5.b) {
								var empty = _n5.a;
								return A2(
									elm$core$List$append,
									_List_fromArray(
										[
											A2(
											elm$html$Html$map,
											author$project$Lia$Markdown$Update$UpdateQuiz,
											A3(author$project$Lia$Markdown$Quiz$View$view, config.eq, quiz, config.cV.bi))
										]),
									A2(
										elm$core$List$cons,
										empty ? elm$html$Html$text('') : A2(elm$html$Html$hr, _List_Nil, _List_Nil),
										A2(
											elm$core$List$map,
											author$project$Lia$Markdown$View$view_block(config),
											answer)));
							} else {
								return _List_fromArray(
									[
										A2(
										elm$html$Html$map,
										author$project$Lia$Markdown$Update$UpdateQuiz,
										A3(author$project$Lia$Markdown$Quiz$View$view, config.eq, quiz, config.cV.bi))
									]);
							}
						}());
				}
			case 9:
				var attr = block.a;
				var survey = block.b;
				return A2(
					elm$html$Html$map,
					author$project$Lia$Markdown$Update$UpdateSurvey,
					A4(author$project$Lia$Markdown$Survey$View$view, config.eq, attr, survey, config.cV.bw));
			case 8:
				var _n6 = block.a;
				var id1 = _n6.a;
				var id2 = _n6.b;
				var _n7 = _Utils_Tuple3(
					config.eA,
					_Utils_eq(id1, config.cV.M.dj),
					A3(author$project$Lia$Markdown$Effect$Model$get_paragraph, id1, id2, config.cV.M));
				if ((_n7.a === 2) && (!_n7.c.$)) {
					var _n8 = _n7.a;
					var _n9 = _n7.c.a;
					var attr = _n9.a;
					var par = _n9.b;
					return A2(
						author$project$Lia$Markdown$View$view_block,
						config,
						A2(author$project$Lia$Markdown$Types$Paragraph, attr, par));
				} else {
					return elm$html$Html$text('');
				}
			case 10:
				var attr = block.a;
				var chart = block.b;
				return A2(author$project$Lia$Markdown$Chart$View$view, attr, chart);
			default:
				var attr = block.a;
				var txt = block.b;
				return A2(
					andre_dietrich$elm_svgbob$SvgBob$getSvg,
					config.co ? author$project$Lia$Markdown$Inline$View$attributes(attr) : A2(
						elm$core$List$cons,
						elm$svg$Svg$Attributes$style('filter: invert(100%);'),
						A2(
							elm$core$List$cons,
							elm$svg$Svg$Attributes$style('-webkit-filter: invert(100%);'),
							author$project$Lia$Markdown$Inline$View$attributes(attr))),
					A2(andre_dietrich$elm_svgbob$SvgBob$init, andre_dietrich$elm_svgbob$SvgBob$default, txt));
		}
	});
var author$project$Lia$Markdown$View$view_bulletlist = F2(
	function (config, list) {
		var viewer = A2(
			elm$core$Basics$composeR,
			elm$core$List$map(
				author$project$Lia$Markdown$View$view_block(config)),
			elm$html$Html$li(_List_Nil));
		return A2(elm$core$List$map, viewer, list);
	});
var author$project$Lia$Markdown$View$view_list = F2(
	function (config, list) {
		var viewer = function (_n0) {
			var value = _n0.a;
			var sub_list = _n0.b;
			return A2(
				elm$html$Html$li,
				_List_fromArray(
					[
						elm$html$Html$Attributes$value(value)
					]),
				A2(
					elm$core$List$map,
					author$project$Lia$Markdown$View$view_block(config),
					sub_list));
		};
		return A2(elm$core$List$map, viewer, list);
	});
var author$project$Lia$Markdown$Footnote$Model$getNote = F2(
	function (model, key) {
		return A2(elm$core$Dict$get, key, model);
	});
var author$project$Lia$Markdown$Update$FootnoteHide = {$: 4};
var author$project$Lia$Markdown$View$view_footnote = F3(
	function (viewer, key, footnotes) {
		var _n0 = A2(
			elm$core$Maybe$andThen,
			author$project$Lia$Markdown$Footnote$Model$getNote(footnotes),
			key);
		if (!_n0.$) {
			var notes = _n0.a;
			return A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Events$onClick(author$project$Lia$Markdown$Update$FootnoteHide),
						A2(elm$html$Html$Attributes$style, 'position', 'fixed'),
						A2(elm$html$Html$Attributes$style, 'display', 'block'),
						A2(elm$html$Html$Attributes$style, 'width', '100%'),
						A2(elm$html$Html$Attributes$style, 'height', '100%'),
						A2(elm$html$Html$Attributes$style, 'top', '0'),
						A2(elm$html$Html$Attributes$style, 'left', '0'),
						A2(elm$html$Html$Attributes$style, 'right', '0'),
						A2(elm$html$Html$Attributes$style, 'bottom', '0'),
						A2(elm$html$Html$Attributes$style, 'background-color', 'rgba(0,0,0,0.6)'),
						A2(elm$html$Html$Attributes$style, 'z-index', '2'),
						A2(elm$html$Html$Attributes$style, 'cursor', 'pointer'),
						A2(elm$html$Html$Attributes$style, 'overflow', 'auto')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
								A2(elm$html$Html$Attributes$style, 'top', '50%'),
								A2(elm$html$Html$Attributes$style, 'left', '50%'),
								A2(elm$html$Html$Attributes$style, 'font-size', '20px'),
								A2(elm$html$Html$Attributes$style, 'color', 'white'),
								A2(elm$html$Html$Attributes$style, 'transform', 'translate(-50%,-50%)'),
								A2(elm$html$Html$Attributes$style, '-ms-transform', 'translate(-50%,-50%)')
							]),
						A2(elm$core$List$map, viewer, notes))
					]));
		} else {
			return elm$html$Html$text('');
		}
	});
var elm$html$Html$h2 = _VirtualDom_node('h2');
var elm$html$Html$h3 = _VirtualDom_node('h3');
var elm$html$Html$h4 = _VirtualDom_node('h4');
var elm$html$Html$h5 = _VirtualDom_node('h5');
var elm$html$Html$h6 = _VirtualDom_node('h6');
var elm$html$Html$header = _VirtualDom_node('header');
var author$project$Lia$Markdown$View$view_header = function (config) {
	return A2(
		elm$html$Html$header,
		_List_Nil,
		elm$core$List$singleton(
			function () {
				var _n0 = config.cV.ee;
				switch (_n0) {
					case 1:
						return elm$html$Html$h1(
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-inline lia-h1')
								]));
					case 2:
						return elm$html$Html$h2(
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-inline lia-h2')
								]));
					case 3:
						return elm$html$Html$h3(
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-inline lia-h3')
								]));
					case 4:
						return elm$html$Html$h4(
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-inline lia-h4')
								]));
					case 5:
						return elm$html$Html$h5(
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-inline lia-h5')
								]));
					default:
						return elm$html$Html$h6(
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-inline lia-h6')
								]));
				}
			}()(
				config.fo(config.cV.dd))));
};
var elm$html$Html$section = _VirtualDom_node('section');
var author$project$Lia$Markdown$View$view_body = F2(
	function (_n0, body) {
		var config = _n0.a;
		var footnote2show = _n0.b;
		var footnotes = _n0.c;
		return A2(
			elm$html$Html$section,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-content')
				]),
			function (s) {
				return (config.eA === 2) ? A2(
					elm$core$List$append,
					s,
					_List_fromArray(
						[
							A2(
							author$project$Lia$Markdown$Footnote$View$block,
							author$project$Lia$Markdown$View$view_block(config),
							footnotes)
						])) : s;
			}(
				A2(
					elm$core$List$cons,
					author$project$Lia$Markdown$View$view_header(config),
					A2(
						elm$core$List$cons,
						A3(
							author$project$Lia$Markdown$View$view_footnote,
							author$project$Lia$Markdown$View$view_block(config),
							footnote2show,
							footnotes),
						A2(
							elm$core$List$map,
							author$project$Lia$Markdown$View$view_block(config),
							body)))));
	});
var elm$virtual_dom$VirtualDom$lazy2 = _VirtualDom_lazy2;
var elm$html$Html$Lazy$lazy2 = elm$virtual_dom$VirtualDom$lazy2;
var author$project$Lia$Markdown$View$view = F5(
	function (lang, mode, section, ace_theme, light) {
		var config = A6(
			author$project$Lia$Markdown$View$Config,
			mode,
			author$project$Lia$Markdown$Inline$View$viewer(
				(mode === 2) ? 9999 : section.M.dj),
			section,
			ace_theme,
			lang,
			light);
		var _n0 = section.dU;
		if (!_n0.$) {
			var msg = _n0.a;
			return A2(
				elm$html$Html$section,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('lia-content')
					]),
				_List_fromArray(
					[
						author$project$Lia$Markdown$View$view_header(config),
						elm$html$Html$text(msg)
					]));
		} else {
			return A3(
				elm$html$Html$Lazy$lazy2,
				author$project$Lia$Markdown$View$view_body,
				_Utils_Tuple3(config, section.b4, section.b5),
				section.dA);
		}
	});
var author$project$Lia$Markdown$Effect$Model$current_paragraphs = function (model) {
	var _n0 = A2(elm$core$Dict$get, model.dj, model.aG);
	if (!_n0.$) {
		var e = _n0.a;
		return elm$core$Array$toList(e.ad);
	} else {
		return _List_Nil;
	}
};
var author$project$Translations$soundOff = function (lang) {
	switch (lang) {
		case 0:
			return 'Звук вкл.';
		case 1:
			return 'Sprecher aus';
		case 2:
			return 'Sound off';
		case 3:
			return 'صدا خاموش';
		case 4:
			return 'առանց ձայն';
		default:
			return 'вимкнений';
	}
};
var author$project$Translations$soundOn = function (lang) {
	switch (lang) {
		case 0:
			return 'Звук изкл.';
		case 1:
			return 'Sprecher an';
		case 2:
			return 'Sound on';
		case 3:
			return 'صدا روشن';
		case 4:
			return 'ձայնով';
		default:
			return 'увімкнений';
	}
};
var elm$html$Html$Attributes$alt = elm$html$Html$Attributes$stringProperty('alt');
var elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		elm$core$String$fromInt(n));
};
var elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		elm$core$String$fromInt(n));
};
var author$project$Lia$Markdown$Effect$View$responsive = F3(
	function (lang, sound, msg) {
		return A2(
			elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-btn lia-icon'),
							elm$html$Html$Events$onClick(msg),
							elm$html$Html$Attributes$title(
							sound ? author$project$Translations$soundOn(lang) : author$project$Translations$soundOff(lang))
						]),
					_List_fromArray(
						[
							sound ? elm$html$Html$text('volume_up') : elm$html$Html$text('volume_off')
						])),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$href('https://responsivevoice.org')
						]),
					_List_fromArray(
						[
							elm$html$Html$text('ResponsiveVoice-NonCommercial')
						])),
					elm$html$Html$text(' licensed under '),
					A2(
					elm$html$Html$a,
					_List_fromArray(
						[
							elm$html$Html$Attributes$href('https://creativecommons.org/licenses/by-nc-nd/4.0/')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$img,
							_List_fromArray(
								[
									elm$html$Html$Attributes$title('ResponsiveVoice Text To Speech'),
									elm$html$Html$Attributes$src('https://responsivevoice.org/wp-content/uploads/2014/08/95x15.png'),
									elm$html$Html$Attributes$alt('95x15'),
									elm$html$Html$Attributes$width(95),
									elm$html$Html$Attributes$height(15)
								]),
							_List_Nil)
						]))
				]));
	});
var author$project$Lia$Settings$Update$Sound = {$: 1};
var author$project$Lia$Settings$Update$Toggle = function (a) {
	return {$: 0, a: a};
};
var author$project$Lia$Settings$Update$toggle_sound = author$project$Lia$Settings$Update$Toggle(author$project$Lia$Settings$Update$Sound);
var elm$html$Html$footer = _VirtualDom_node('footer');
var author$project$Lia$View$view_footer = F4(
	function (lang, sound, mode, effects) {
		switch (mode) {
			case 0:
				return A2(
					elm$html$Html$footer,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-footer')
						]),
					A3(
						pilatch$flip$Flip$flip,
						elm$core$List$append,
						_List_fromArray(
							[
								A3(
								author$project$Lia$Markdown$Effect$View$responsive,
								lang,
								sound,
								author$project$Lia$Update$UpdateSettings(author$project$Lia$Settings$Update$toggle_sound))
							]),
						A2(
							elm$core$List$map,
							function (_n1) {
								var par = _n1.b;
								return A2(
									elm$html$Html$p,
									_List_Nil,
									A2(author$project$Lia$Markdown$Inline$View$viewer, 9999, par));
							},
							author$project$Lia$Markdown$Effect$Model$current_paragraphs(effects))));
			case 1:
				return A2(
					elm$html$Html$footer,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-footer')
						]),
					_List_fromArray(
						[
							A3(
							author$project$Lia$Markdown$Effect$View$responsive,
							lang,
							sound,
							author$project$Lia$Update$UpdateSettings(author$project$Lia$Settings$Update$toggle_sound))
						]));
			default:
				return elm$html$Html$text('');
		}
	});
var author$project$Lia$Settings$Update$SwitchMode = {$: 5};
var author$project$Translations$modePresentation = function (lang) {
	switch (lang) {
		case 0:
			return 'Режим: Презентация';
		case 1:
			return 'Modus: Präsentation';
		case 2:
			return 'Mode: Presentation';
		case 3:
			return 'سبک: ارائه';
		case 4:
			return 'կերպ: ներկայացում';
		default:
			return 'режим: презентація';
	}
};
var author$project$Translations$modeSlides = function (lang) {
	switch (lang) {
		case 0:
			return 'Режим: Слайдове';
		case 1:
			return 'Modus: Folien';
		case 2:
			return 'Mode: Slides';
		case 3:
			return 'سبک: اسلایدها';
		case 4:
			return 'կերպ: սլայդներ';
		default:
			return 'режим: слайди';
	}
};
var author$project$Translations$modeTextbook = function (lang) {
	switch (lang) {
		case 0:
			return 'Режим: Текст';
		case 1:
			return 'Modus: Lehrbuch';
		case 2:
			return 'Mode: Textbook';
		case 3:
			return 'سبک: کتاب';
		case 4:
			return 'կերպ: գիրք';
		default:
			return 'режим: навчальна книга';
	}
};
var author$project$Lia$Settings$View$switch_button_mode = F2(
	function (lang, mode) {
		return A2(
			elm$html$Html$button,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-btn lia-right'),
					elm$html$Html$Events$onClick(author$project$Lia$Settings$Update$SwitchMode),
					elm$html$Html$Attributes$title(
					function () {
						switch (mode) {
							case 0:
								return author$project$Translations$modeSlides(lang);
							case 1:
								return author$project$Translations$modePresentation(lang);
							default:
								return author$project$Translations$modeTextbook(lang);
						}
					}())
				]),
			_List_fromArray(
				[
					elm$html$Html$text(
					function () {
						switch (mode) {
							case 0:
								return 'visibility';
							case 1:
								return 'hearing';
							default:
								return 'book';
						}
					}())
				]));
	});
var author$project$Lia$Settings$Update$TableOfContents = {$: 0};
var author$project$Translations$baseToc = function (lang) {
	switch (lang) {
		case 0:
			return 'Съдържание (показване/скриване)';
		case 1:
			return 'Inhaltsverzeichnis (zeigen/verbergen)';
		case 2:
			return 'Table of Contents (show/hide)';
		case 3:
			return 'فهرست مطالب) نمایش/عدم نمایش)';
		case 4:
			return 'բովանդակություն (ցույց տալ / թաքցնել)';
		default:
			return 'зміст (показати/приховати)';
	}
};
var author$project$Lia$Settings$View$toggle_button_toc = function (lang) {
	return A2(
		elm$html$Html$button,
		_List_fromArray(
			[
				elm$html$Html$Events$onClick(
				author$project$Lia$Settings$Update$Toggle(author$project$Lia$Settings$Update$TableOfContents)),
				elm$html$Html$Attributes$title(
				author$project$Translations$baseToc(lang)),
				elm$html$Html$Attributes$class('lia-btn lia-toc-control lia-left')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('toc')
			]));
};
var author$project$Lia$Update$NextSection = {$: 3};
var author$project$Lia$Update$PrevSection = {$: 2};
var author$project$Lia$View$navButton = F3(
	function (str, title, msg) {
		return A2(
			elm$html$Html$button,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(msg),
					elm$html$Html$Attributes$title(title),
					elm$html$Html$Attributes$class('lia-btn lia-slide-control lia-left')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(str)
				]));
	});
var author$project$Translations$baseNext = function (lang) {
	switch (lang) {
		case 0:
			return 'Следващ';
		case 1:
			return 'weiter';
		case 2:
			return 'next';
		case 3:
			return 'بعدی';
		case 4:
			return 'հաջորդը';
		default:
			return 'далі';
	}
};
var author$project$Translations$basePrev = function (lang) {
	switch (lang) {
		case 0:
			return 'Предишен';
		case 1:
			return 'zurück';
		case 2:
			return 'previous';
		case 3:
			return 'قبلی';
		case 4:
			return 'նախորդը';
		default:
			return 'назад';
	}
};
var elm$html$Html$nav = _VirtualDom_node('nav');
var author$project$Lia$View$view_nav = F7(
	function (section_active, mode, lang, base, translations, speaking, state) {
		return A2(
			elm$html$Html$nav,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-toolbar')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$map,
					author$project$Lia$Update$UpdateSettings,
					author$project$Lia$Settings$View$toggle_button_toc(lang)),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-spacer')
						]),
					_List_Nil),
					A3(
					author$project$Lia$View$navButton,
					'navigate_before',
					author$project$Translations$basePrev(lang),
					author$project$Lia$Update$PrevSection),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-labeled lia-left')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$span,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('lia-label'),
									speaking ? A2(elm$html$Html$Attributes$style, 'text-decoration', 'underline') : A2(elm$html$Html$Attributes$style, '', '')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(
									elm$core$String$fromInt(section_active + 1)),
									elm$html$Html$text(
									function () {
										if (mode === 2) {
											return '';
										} else {
											return state;
										}
									}())
								]))
						])),
					A3(
					author$project$Lia$View$navButton,
					'navigate_next',
					author$project$Translations$baseNext(lang),
					author$project$Lia$Update$NextSection),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-spacer')
						]),
					_List_Nil),
					A2(
					elm$html$Html$map,
					author$project$Lia$Update$UpdateSettings,
					A2(author$project$Lia$Settings$View$switch_button_mode, lang, mode))
				]));
	});
var elm$html$Html$article = _VirtualDom_node('article');
var author$project$Lia$View$view_article = function (model) {
	return A2(
		elm$html$Html$article,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('lia-slide')
			]),
		function () {
			var _n0 = author$project$Lia$Update$get_active_section(model);
			if (!_n0.$) {
				var section = _n0.a;
				return _List_fromArray(
					[
						A7(
						author$project$Lia$View$view_nav,
						model.cW,
						model.ai.eA,
						model.ay,
						model.bz,
						author$project$Lia$Definition$Types$get_translations(model.bW),
						model.ai.c3,
						author$project$Lia$Markdown$Effect$View$state(section.M)),
						A2(
						elm$html$Html$map,
						author$project$Lia$Update$UpdateMarkdown,
						A5(author$project$Lia$Markdown$View$view, model.ay, model.ai.eA, section, model.ai.bY, model.ai.co)),
						A4(author$project$Lia$View$view_footer, model.ay, model.ai.c0, model.ai.eA, section.M)
					]);
			} else {
				return _List_fromArray(
					[
						elm$html$Html$text('')
					]);
			}
		}());
};
var author$project$Lia$Index$View$toc = F2(
	function (active, section) {
		return section.dj ? A2(
			elm$html$Html$a,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(
					'lia-toc-l' + (elm$core$String$fromInt(section.ee) + ((!_Utils_eq(section.dU, elm$core$Maybe$Nothing)) ? ' lia-error' : (_Utils_eq(active, section.cd) ? ' lia-active' : (section.fp ? '' : ' lia-not-visited'))))),
					elm$html$Html$Attributes$href(
					'#' + elm$core$String$fromInt(section.cd + 1))
				]),
			A2(author$project$Lia$Markdown$Inline$View$viewer, 9999, section.dd)) : elm$html$Html$text('');
	});
var author$project$Lia$Index$View$view = F2(
	function (active, sections) {
		var toc_ = author$project$Lia$Index$View$toc(active);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-content')
				]),
			A2(
				elm$core$List$map,
				toc_,
				elm$core$Array$toList(sections)));
	});
var author$project$Lia$Index$Update$ScanIndex = elm$core$Basics$identity;
var author$project$Translations$baseSearch = function (lang) {
	switch (lang) {
		case 0:
			return 'Търсене';
		case 1:
			return 'Suche';
		case 2:
			return 'Search';
		case 3:
			return 'جستجو';
		case 4:
			return 'փնտրել';
		default:
			return 'пошук';
	}
};
var author$project$Lia$Index$View$view_search = F2(
	function (lang, model) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-toolbar')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$type_('input'),
							elm$html$Html$Attributes$value(model),
							elm$html$Html$Attributes$class('lia-input'),
							elm$html$Html$Attributes$placeholder(
							author$project$Translations$baseSearch(lang)),
							A2(elm$html$Html$Attributes$style, 'max-width', '100%'),
							elm$html$Html$Events$onInput(elm$core$Basics$identity)
						]),
					_List_Nil)
				]));
	});
var author$project$Lia$Settings$Update$Button = function (a) {
	return {$: 3, a: a};
};
var author$project$Lia$Settings$Update$Informations = 2;
var author$project$Lia$Settings$Update$Settings = 0;
var author$project$Lia$Settings$Update$Share = 3;
var author$project$Lia$Settings$Update$Translations = 1;
var author$project$Lia$Settings$View$dropdown = F4(
	function (active, name, alt, msg) {
		return A2(
			elm$html$Html$button,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(msg),
					elm$html$Html$Attributes$class(
					'lia-btn lia-icon' + (active ? ' lia-selected' : '')),
					elm$html$Html$Attributes$title(alt),
					A2(elm$html$Html$Attributes$style, 'width', '42px'),
					A2(elm$html$Html$Attributes$style, 'padding', '0px')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(name)
				]));
	});
var author$project$Lia$Settings$View$menu_style = function (visible) {
	return _List_fromArray(
		[
			elm$html$Html$Attributes$class(
			'lia-slide-animation' + (visible ? ' lia-settings' : '')),
			A2(
			elm$html$Html$Attributes$style,
			'max-height',
			visible ? '256px' : '0px')
		]);
};
var author$project$Lia$Settings$View$qrCodeView = F2(
	function (visible, url) {
		return A2(
			elm$html$Html$div,
			author$project$Lia$Settings$View$menu_style(visible),
			_List_fromArray(
				[
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$img,
							_List_fromArray(
								[
									elm$html$Html$Attributes$src('https://api.qrserver.com/v1/create-qr-code/?size=222x222&data=' + url),
									A2(elm$html$Html$Attributes$style, 'width', '99%')
								]),
							_List_Nil)
						]))
				]));
	});
var author$project$Lia$Settings$View$bold = A2(
	elm$core$Basics$composeR,
	elm$html$Html$text,
	A2(
		elm$core$Basics$composeR,
		elm$core$List$singleton,
		elm$html$Html$b(_List_Nil)));
var author$project$Lia$Settings$View$span_block = elm$html$Html$span(
	_List_fromArray(
		[
			A2(elm$html$Html$Attributes$style, 'display', 'block')
		]));
var author$project$Lia$Settings$View$thanks = function (to) {
	return A2(
		elm$html$Html$span,
		_List_Nil,
		_List_fromArray(
			[
				A2(elm$html$Html$hr, _List_Nil, _List_Nil),
				author$project$Lia$Settings$View$span_block(
				A2(elm$core$List$map, author$project$Lia$Markdown$Inline$View$view_inf, to))
			]));
};
var author$project$Lia$Settings$View$view_attributes = function (thanks_to) {
	return A2(
		elm$html$Html$span,
		_List_Nil,
		A2(elm$core$List$map, author$project$Lia$Settings$View$thanks, thanks_to));
};
var author$project$Translations$infoAuthor = function (lang) {
	switch (lang) {
		case 0:
			return 'Автор: ';
		case 1:
			return 'Autor: ';
		case 2:
			return 'Author: ';
		case 3:
			return 'نویسنده: ';
		case 4:
			return 'հեղինակ: ';
		default:
			return 'автор: ';
	}
};
var author$project$Translations$infoDate = function (lang) {
	switch (lang) {
		case 0:
			return 'Дата: ';
		case 1:
			return 'Datum: ';
		case 2:
			return 'Date: ';
		case 3:
			return 'تاریخ: ';
		case 4:
			return 'ամսաթիվ: ';
		default:
			return 'дата: ';
	}
};
var author$project$Translations$infoEmail = function (lang) {
	switch (lang) {
		case 0:
			return 'eMail: ';
		case 1:
			return 'e-Mail: ';
		case 2:
			return 'eMail: ';
		case 3:
			return 'ایمیل: ';
		case 4:
			return 'էլ․ փոստ: ';
		default:
			return 'електронна пошта: ';
	}
};
var author$project$Translations$infoVersion = function (lang) {
	switch (lang) {
		case 0:
			return 'Версия: ';
		case 1:
			return 'Version: ';
		case 2:
			return 'Version: ';
		case 3:
			return 'نسخه: ';
		case 4:
			return 'տարբերակ: ';
		default:
			return 'версія: ';
	}
};
var author$project$Lia$Settings$View$view_information = F3(
	function (lang, visible, definition) {
		return A2(
			elm$html$Html$div,
			author$project$Lia$Settings$View$menu_style(visible),
			_List_fromArray(
				[
					elm$core$String$isEmpty(definition.dw) ? elm$html$Html$text('') : author$project$Lia$Settings$View$span_block(
					_List_fromArray(
						[
							author$project$Lia$Settings$View$bold(
							author$project$Translations$infoAuthor(lang)),
							elm$html$Html$text(definition.dw)
						])),
					elm$core$String$isEmpty(definition.dT) ? elm$html$Html$text('') : author$project$Lia$Settings$View$span_block(
					_List_fromArray(
						[
							author$project$Lia$Settings$View$bold(
							author$project$Translations$infoEmail(lang)),
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$href(definition.dT)
								]),
							_List_fromArray(
								[
									elm$html$Html$text(definition.dT)
								]))
						])),
					elm$core$String$isEmpty(definition.fn) ? elm$html$Html$text('') : author$project$Lia$Settings$View$span_block(
					_List_fromArray(
						[
							author$project$Lia$Settings$View$bold(
							author$project$Translations$infoVersion(lang)),
							elm$html$Html$text(definition.fn)
						])),
					elm$core$String$isEmpty(definition.dM) ? elm$html$Html$text('') : author$project$Lia$Settings$View$span_block(
					_List_fromArray(
						[
							author$project$Lia$Settings$View$bold(
							author$project$Translations$infoDate(lang)),
							elm$html$Html$text(definition.dM)
						])),
					elm$core$List$isEmpty(definition.bH) ? elm$html$Html$text('') : author$project$Lia$Settings$View$span_block(
					_List_fromArray(
						[
							author$project$Lia$Settings$View$bold('Attributes:'),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							author$project$Lia$Settings$View$view_attributes(definition.bH)
						]))
				]));
	});
var author$project$Lia$Settings$Update$ChangeTheme = function (a) {
	return {$: 1, a: a};
};
var elm$html$Html$label = _VirtualDom_node('label');
var elm$html$Html$Attributes$name = elm$html$Html$Attributes$stringProperty('name');
var author$project$Lia$Settings$View$check_list = F4(
	function (checked, label, text, dir) {
		return A2(
			elm$html$Html$label,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(label),
					A2(elm$html$Html$Attributes$style, 'float', dir)
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$type_('radio'),
							elm$html$Html$Attributes$name('toggle'),
							elm$html$Html$Attributes$checked(checked),
							elm$html$Html$Events$onClick(
							author$project$Lia$Settings$Update$ChangeTheme(label))
						]),
					_List_Nil),
					A2(
					elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(text)
						]))
				]));
	});
var author$project$Translations$cAmber = function (lang) {
	switch (lang) {
		case 0:
			return 'Кехлибар';
		case 1:
			return 'Bernstein';
		case 2:
			return 'Amber';
		case 3:
			return 'کهربایی';
		case 4:
			return 'սաթագույն';
		default:
			return 'бурштиновий';
	}
};
var author$project$Translations$cBlue = function (lang) {
	switch (lang) {
		case 0:
			return 'Синьо';
		case 1:
			return 'Blau';
		case 2:
			return 'Blue';
		case 3:
			return 'آبی';
		case 4:
			return 'կապույտ';
		default:
			return 'синій';
	}
};
var author$project$Translations$cDefault = function (lang) {
	switch (lang) {
		case 0:
			return 'Подразбиране';
		case 1:
			return 'Standard';
		case 2:
			return 'Default';
		case 3:
			return 'پیشفرض';
		case 4:
			return 'կանխադրված';
		default:
			return 'стандартний';
	}
};
var author$project$Translations$cGray = function (lang) {
	switch (lang) {
		case 0:
			return 'Сиво';
		case 1:
			return 'Grau';
		case 2:
			return 'Gray';
		case 3:
			return 'خاکستری';
		case 4:
			return 'մոխրագույն';
		default:
			return 'сірий';
	}
};
var author$project$Translations$cGreen = function (lang) {
	switch (lang) {
		case 0:
			return 'Зелено';
		case 1:
			return 'Grün';
		case 2:
			return 'Green';
		case 3:
			return 'سبز';
		case 4:
			return 'կանաչ';
		default:
			return 'зелений';
	}
};
var author$project$Translations$cPurple = function (lang) {
	switch (lang) {
		case 0:
			return 'Лилаво';
		case 1:
			return 'Violett';
		case 2:
			return 'Purple';
		case 3:
			return 'بنفش';
		case 4:
			return 'մանուշակագույն';
		default:
			return 'фіолетовий';
	}
};
var author$project$Lia$Settings$View$design_theme = F2(
	function (lang, theme) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('lia-color')
				]),
			A2(
				elm$core$List$map,
				function (_n0) {
					var c = _n0.a;
					var b = _n0.b;
					var text = _n0.c;
					return A4(
						author$project$Lia$Settings$View$check_list,
						_Utils_eq(c, theme),
						c,
						text,
						b);
				},
				_List_fromArray(
					[
						_Utils_Tuple3(
						'default',
						'left',
						author$project$Translations$cDefault(lang)),
						_Utils_Tuple3(
						'amber',
						'right',
						author$project$Translations$cAmber(lang)),
						_Utils_Tuple3(
						'blue',
						'left',
						author$project$Translations$cBlue(lang)),
						_Utils_Tuple3(
						'green',
						'right',
						author$project$Translations$cGreen(lang)),
						_Utils_Tuple3(
						'grey',
						'left',
						author$project$Translations$cGray(lang)),
						_Utils_Tuple3(
						'purple',
						'right',
						author$project$Translations$cPurple(lang))
					])));
	});
var author$project$Lia$Settings$Update$ChangeFontSize = function (a) {
	return {$: 4, a: a};
};
var author$project$Lia$Settings$View$navButton = F3(
	function (str, title, msg) {
		return A2(
			elm$html$Html$button,
			_List_fromArray(
				[
					elm$html$Html$Events$onClick(msg),
					elm$html$Html$Attributes$title(title),
					elm$html$Html$Attributes$class('lia-btn lia-slide-control lia-left')
				]),
			_List_fromArray(
				[
					elm$html$Html$text(str)
				]));
	});
var author$project$Translations$baseDec = function (lang) {
	switch (lang) {
		case 0:
			return 'Увеличаване';
		case 1:
			return 'verkleinern';
		case 2:
			return 'decrease';
		case 3:
			return 'افزودن';
		case 4:
			return 'նվազել';
		default:
			return 'зменшити';
	}
};
var author$project$Translations$baseFont = function (lang) {
	switch (lang) {
		case 0:
			return 'Шрифт';
		case 1:
			return 'Schrift';
		case 2:
			return 'Font';
		case 3:
			return 'فونت';
		case 4:
			return 'տառատեսակ';
		default:
			return 'шрифт';
	}
};
var author$project$Translations$baseInc = function (lang) {
	switch (lang) {
		case 0:
			return 'Намаляване';
		case 1:
			return 'vergrößern';
		case 2:
			return 'increase';
		case 3:
			return 'کاستن';
		case 4:
			return 'աճել';
		default:
			return 'збільшити';
	}
};
var author$project$Lia$Settings$View$inc_font_size = F2(
	function (lang, _int) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(
					author$project$Translations$baseFont(lang) + ':'),
					A3(
					author$project$Lia$Settings$View$navButton,
					'-',
					author$project$Translations$baseDec(lang),
					author$project$Lia$Settings$Update$ChangeFontSize(false)),
					elm$html$Html$text(
					elm$core$String$fromInt(_int) + '%'),
					A3(
					author$project$Lia$Settings$View$navButton,
					'+',
					author$project$Translations$baseInc(lang),
					author$project$Lia$Settings$Update$ChangeFontSize(true))
				]));
	});
var author$project$Lia$Settings$Update$Reset = {$: 6};
var author$project$Lia$Settings$View$reset = A2(
	elm$html$Html$button,
	_List_fromArray(
		[
			elm$html$Html$Events$onClick(author$project$Lia$Settings$Update$Reset)
		]),
	_List_fromArray(
		[
			elm$html$Html$text('reset course')
		]));
var author$project$Lia$Settings$Update$ChangeEditor = function (a) {
	return {$: 2, a: a};
};
var elm$html$Html$option = _VirtualDom_node('option');
var elm$html$Html$Attributes$selected = elm$html$Html$Attributes$boolProperty('selected');
var author$project$Lia$Settings$View$option = F2(
	function (current, _n0) {
		var val = _n0.a;
		var text = _n0.b;
		return A2(
			elm$html$Html$option,
			_List_fromArray(
				[
					elm$html$Html$Attributes$value(val),
					elm$html$Html$Attributes$selected(
					_Utils_eq(val, current))
				]),
			_List_fromArray(
				[
					elm$html$Html$text(text)
				]));
	});
var author$project$Translations$cBright = function (lang) {
	switch (lang) {
		case 0:
			return 'Светло';
		case 1:
			return 'Hell';
		case 2:
			return 'Bright';
		case 3:
			return 'روشن';
		case 4:
			return 'բաց';
		default:
			return 'світлий';
	}
};
var author$project$Translations$cDark = function (lang) {
	switch (lang) {
		case 0:
			return 'Тъмно';
		case 1:
			return 'Dunkel';
		case 2:
			return 'Dark';
		case 3:
			return 'تیره';
		case 4:
			return 'մուգ';
		default:
			return 'темний';
	}
};
var elm$html$Html$optgroup = _VirtualDom_node('optgroup');
var elm$html$Html$select = _VirtualDom_node('select');
var author$project$Lia$Settings$View$view_ace = F2(
	function (lang, theme) {
		var op = author$project$Lia$Settings$View$option(theme);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'display', 'inline-flex'),
					A2(elm$html$Html$Attributes$style, 'width', '99%')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$select,
					_List_fromArray(
						[
							elm$html$Html$Events$onInput(author$project$Lia$Settings$Update$ChangeEditor)
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$optgroup,
							_List_fromArray(
								[
									A2(
									elm$html$Html$Attributes$attribute,
									'label',
									author$project$Translations$cBright(lang))
								]),
							A2(
								elm$core$List$map,
								op,
								_List_fromArray(
									[
										_Utils_Tuple2('chrome', 'Chrome'),
										_Utils_Tuple2('clouds', 'Clouds'),
										_Utils_Tuple2('crimson_editor', 'Crimson Editor'),
										_Utils_Tuple2('dawn', 'Dawn'),
										_Utils_Tuple2('dreamweaver', 'Dreamweaver'),
										_Utils_Tuple2('eclipse', 'Eclipse'),
										_Utils_Tuple2('github', 'Github'),
										_Utils_Tuple2('iplastic', 'IPlastic'),
										_Utils_Tuple2('katzenmilch', 'KatzenMilch'),
										_Utils_Tuple2('kuroir', 'Kuroir'),
										_Utils_Tuple2('solarized_light', 'Solarized Light'),
										_Utils_Tuple2('sqlserver', 'SQL Server'),
										_Utils_Tuple2('textmate', 'TextMate'),
										_Utils_Tuple2('tomorrow', 'Tomorrow'),
										_Utils_Tuple2('xcode', 'XCode')
									]))),
							A2(
							elm$html$Html$optgroup,
							_List_fromArray(
								[
									A2(
									elm$html$Html$Attributes$attribute,
									'label',
									author$project$Translations$cDark(lang))
								]),
							A2(
								elm$core$List$map,
								op,
								_List_fromArray(
									[
										_Utils_Tuple2('ambiance', 'Ambiance'),
										_Utils_Tuple2('chaos', 'Chaos'),
										_Utils_Tuple2('clouds_midnight', 'Clouds Midnight'),
										_Utils_Tuple2('cobalt', 'Cobalt'),
										_Utils_Tuple2('dracula', 'Dracula'),
										_Utils_Tuple2('gob', 'Green on Black'),
										_Utils_Tuple2('gruvbox', 'Gruvbox'),
										_Utils_Tuple2('idle_fingers', 'idle Fingers'),
										_Utils_Tuple2('kr_theme', 'krTheme'),
										_Utils_Tuple2('merbivore', 'Merbivore'),
										_Utils_Tuple2('merbivore_soft', 'Merbivore Soft'),
										_Utils_Tuple2('mono_industrial', 'Mono Industrial'),
										_Utils_Tuple2('monokai', 'Monokai'),
										_Utils_Tuple2('pastel_on_dark', 'Pastel on dark'),
										_Utils_Tuple2('solarized_dark', 'Solarized Dark'),
										_Utils_Tuple2('terminal', 'Terminal'),
										_Utils_Tuple2('tomorrow_night', 'Tomorrow Night'),
										_Utils_Tuple2('tomorrow_night_blue', 'Tomorrow Night Blue'),
										_Utils_Tuple2('tomorrow_night_bright', 'Tomorrow Night Bright'),
										_Utils_Tuple2('tomorrow_night_eighties', 'Tomorrow Night 80s'),
										_Utils_Tuple2('twilight', 'Twilight'),
										_Utils_Tuple2('vibrant_ink', 'Vibrant Ink')
									])))
						]))
				]));
	});
var author$project$Lia$Settings$Update$Light = {$: 2};
var author$project$Lia$Settings$View$view_light = function (light) {
	return A2(
		elm$html$Html$span,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('lia-btn'),
				elm$html$Html$Events$onClick(
				author$project$Lia$Settings$Update$Toggle(author$project$Lia$Settings$Update$Light)),
				A2(elm$html$Html$Attributes$style, 'text-align', 'right')
			]),
		_List_fromArray(
			[
				light ? elm$html$Html$text('🌞') : elm$html$Html$text('🌝')
			]));
};
var author$project$Translations$cColor = function (lang) {
	switch (lang) {
		case 0:
			return 'Цвят';
		case 1:
			return 'Farbe';
		case 2:
			return 'Color';
		case 3:
			return 'رنگ';
		case 4:
			return 'գույն';
		default:
			return 'колір';
	}
};
var author$project$Lia$Settings$View$view_settings = F2(
	function (model, lang) {
		return A2(
			elm$html$Html$div,
			author$project$Lia$Settings$View$menu_style(model.bK.ai),
			_List_fromArray(
				[
					A2(
					elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							author$project$Translations$cColor(lang)),
							author$project$Lia$Settings$View$view_light(model.co),
							A2(author$project$Lia$Settings$View$design_theme, lang, model.dc),
							A2(author$project$Lia$Settings$View$view_ace, lang, model.bY),
							A2(author$project$Lia$Settings$View$inc_font_size, lang, model.b3),
							author$project$Lia$Settings$View$reset
						]))
				]));
	});
var author$project$Translations$no_translation = function (lang) {
	switch (lang) {
		case 0:
			return 'Без превод';
		case 1:
			return 'noch keine Übersetzungen vorhanden';
		case 2:
			return 'no translation yet';
		case 3:
			return 'در دست ترجمه';
		case 4:
			return 'դեռ թագմանություն չկա';
		default:
			return 'переклад відсутній';
	}
};
var author$project$Lia$Settings$View$view_translations = F4(
	function (lang, visible, base, list) {
		return A2(
			elm$html$Html$div,
			author$project$Lia$Settings$View$menu_style(visible),
			elm$core$List$isEmpty(list) ? _List_fromArray(
				[
					elm$html$Html$text(
					author$project$Translations$no_translation(lang))
				]) : A2(
				elm$core$List$map,
				function (_n0) {
					var lang_ = _n0.a;
					var url = _n0.b;
					return A2(
						elm$html$Html$a,
						_List_fromArray(
							[
								elm$html$Html$Attributes$href(
								_Utils_ap(base, url))
							]),
						_List_fromArray(
							[
								elm$html$Html$text(lang_),
								A2(elm$html$Html$br, _List_Nil, _List_Nil)
							]));
				},
				list));
	});
var author$project$Translations$confInformations = function (lang) {
	switch (lang) {
		case 0:
			return 'Информация';
		case 1:
			return 'Informationen';
		case 2:
			return 'Informations';
		case 3:
			return 'اطلاعات';
		case 4:
			return 'ինֆորմացիա';
		default:
			return 'інформація';
	}
};
var author$project$Translations$confSettings = function (lang) {
	switch (lang) {
		case 0:
			return 'Настройки';
		case 1:
			return 'Einstellungen';
		case 2:
			return 'Settings';
		case 3:
			return 'تنظیمات';
		case 4:
			return 'կարգավորումներ';
		default:
			return 'налаштування';
	}
};
var author$project$Translations$confShare = function (lang) {
	switch (lang) {
		case 0:
			return 'Споделяне';
		case 1:
			return 'Teilen';
		case 2:
			return 'Share';
		case 3:
			return 'اشتراک';
		case 4:
			return 'կիսվել';
		default:
			return 'поділитися';
	}
};
var author$project$Translations$confTranslations = function (lang) {
	switch (lang) {
		case 0:
			return 'Транслации';
		case 1:
			return 'Übersetzungen';
		case 2:
			return 'Translations';
		case 3:
			return 'ترجمه ها';
		case 4:
			return 'թարգմանություններ';
		default:
			return 'переклади';
	}
};
var elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var elm$html$Html$Lazy$lazy3 = elm$virtual_dom$VirtualDom$lazy3;
var author$project$Lia$Settings$View$view = F5(
	function (model, defines, url, origin, lang) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A3(elm$html$Html$Lazy$lazy2, author$project$Lia$Settings$View$view_settings, model, lang),
					A4(elm$html$Html$Lazy$lazy3, author$project$Lia$Settings$View$view_information, lang, model.bK.eh, defines),
					A4(
					author$project$Lia$Settings$View$view_translations,
					lang,
					model.bK.fj,
					origin + '?',
					author$project$Lia$Definition$Types$get_translations(defines)),
					A3(elm$html$Html$Lazy$lazy2, author$project$Lia$Settings$View$qrCodeView, model.bK.e1, url),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('lia-settings'),
							A2(elm$html$Html$Attributes$style, 'display', 'inline-flex'),
							A2(elm$html$Html$Attributes$style, 'width', '99%')
						]),
					_List_fromArray(
						[
							A4(
							author$project$Lia$Settings$View$dropdown,
							model.bK.ai,
							'settings',
							author$project$Translations$confSettings(lang),
							author$project$Lia$Settings$Update$Toggle(
								author$project$Lia$Settings$Update$Button(0))),
							A4(
							author$project$Lia$Settings$View$dropdown,
							model.bK.eh,
							'info',
							author$project$Translations$confInformations(lang),
							author$project$Lia$Settings$Update$Toggle(
								author$project$Lia$Settings$Update$Button(2))),
							A4(
							author$project$Lia$Settings$View$dropdown,
							model.bK.fj,
							'translate',
							author$project$Translations$confTranslations(lang),
							author$project$Lia$Settings$Update$Toggle(
								author$project$Lia$Settings$Update$Button(1))),
							A4(
							author$project$Lia$Settings$View$dropdown,
							model.bK.e1,
							'share',
							author$project$Translations$confShare(lang),
							author$project$Lia$Settings$Update$Toggle(
								author$project$Lia$Settings$Update$Button(3)))
						]))
				]));
	});
var author$project$Lia$Update$UpdateIndex = function (a) {
	return {$: 4, a: a};
};
var elm$html$Html$aside = _VirtualDom_node('aside');
var author$project$Lia$View$view_aside = function (model) {
	return A2(
		elm$html$Html$aside,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('lia-toc'),
				A2(
				elm$html$Html$Attributes$style,
				'max-width',
				model.ai.c9 ? '256px' : '0px')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$map,
				author$project$Lia$Update$UpdateIndex,
				A2(author$project$Lia$Index$View$view_search, model.ay, model.ce)),
				A2(author$project$Lia$Index$View$view, model.cW, model.cX),
				A2(
				elm$html$Html$map,
				author$project$Lia$Update$UpdateSettings,
				A5(
					author$project$Lia$Settings$View$view,
					model.ai,
					A2(
						elm$core$Maybe$withDefault,
						model.bW,
						A2(
							elm$core$Maybe$andThen,
							function ($) {
								return $.bW;
							},
							author$project$Lia$Update$get_active_section(model))),
					model.bz,
					model.cy,
					model.ay))
			]));
};
var author$project$Lia$View$view = function (model) {
	return A2(
		elm$html$Html$div,
		author$project$Lia$Settings$View$design(model.ai),
		_List_fromArray(
			[
				author$project$Lia$View$view_aside(model),
				author$project$Lia$View$view_article(model)
			]));
};
var author$project$Lia$Script$view = function (model) {
	return author$project$Lia$View$view(model);
};
var author$project$App$view = function (model) {
	return {
		dA: function () {
			var _n0 = model.t;
			switch (_n0.$) {
				case 3:
					return _List_fromArray(
						[
							A2(
							elm$html$Html$map,
							author$project$App$LiaScript,
							author$project$Lia$Script$view(model.e))
						]);
				case 0:
					return _List_fromArray(
						[
							author$project$App$view_idle(model.e.at)
						]);
				case 1:
					return _List_fromArray(
						[
							author$project$App$base_div(
							_List_fromArray(
								[
									A2(
									elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Loading')
										])),
									A2(elm$html$Html$br, _List_Nil, _List_Nil),
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('lds-dual-ring')
										]),
									_List_Nil)
								]))
						]);
				case 2:
					var percent = elm$core$String$length(
						A2(elm$core$Maybe$withDefault, '', model.W));
					return _List_fromArray(
						[
							author$project$App$base_div(
							_List_fromArray(
								[
									A2(
									elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text(
											'Parsing : ' + (A3(
												elm$core$String$slice,
												0,
												5,
												elm$core$String$fromFloat(100 - ((percent / model.aU) * 100))) + '%'))
										])),
									A2(elm$html$Html$br, _List_Nil, _List_Nil),
									A2(
									elm$html$Html$div,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('lds-dual-ring')
										]),
									_List_Nil)
								]))
						]);
				default:
					var info = _n0.a;
					return _List_fromArray(
						[
							author$project$App$base_div(
							_List_fromArray(
								[
									A2(
									elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text('Load failed')
										])),
									A2(
									elm$html$Html$h6,
									_List_Nil,
									_List_fromArray(
										[
											elm$html$Html$text(model.e.at)
										])),
									A2(
									elm$html$Html$p,
									_List_fromArray(
										[
											A2(elm$html$Html$Attributes$style, 'margin-left', '20%'),
											A2(elm$html$Html$Attributes$style, 'margin-right', '20%')
										]),
									_List_fromArray(
										[
											elm$html$Html$text(info)
										]))
								]))
						]);
			}
		}(),
		dd: model.e.dd
	};
};
var elm$browser$Browser$application = _Browser_application;
var author$project$App$main = elm$browser$Browser$application(
	{ei: author$project$App$init, eN: author$project$App$UrlChanged, eO: author$project$App$LinkClicked, e6: author$project$App$subscriptions, fl: author$project$App$update, fo: author$project$App$view});
_Platform_export({'App':{'init':author$project$App$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (spa) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (settings) {
					return A2(
						elm$json$Json$Decode$andThen,
						function (script) {
							return A2(
								elm$json$Json$Decode$andThen,
								function (debug) {
									return A2(
										elm$json$Json$Decode$andThen,
										function (course) {
											return elm$json$Json$Decode$succeed(
												{aX: course, bT: debug, bm: script, ai: settings, c1: spa});
										},
										A2(
											elm$json$Json$Decode$field,
											'course',
											elm$json$Json$Decode$oneOf(
												_List_fromArray(
													[
														elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
														A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, elm$json$Json$Decode$string)
													]))));
								},
								A2(elm$json$Json$Decode$field, 'debug', elm$json$Json$Decode$bool));
						},
						A2(
							elm$json$Json$Decode$field,
							'script',
							elm$json$Json$Decode$oneOf(
								_List_fromArray(
									[
										elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
										A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, elm$json$Json$Decode$string)
									]))));
				},
				A2(elm$json$Json$Decode$field, 'settings', elm$json$Json$Decode$value));
		},
		A2(elm$json$Json$Decode$field, 'spa', elm$json$Json$Decode$bool)))(0)}});}(this));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _javascript_liascript_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/liascript/index.js */ "./src/javascript/liascript/index.js");



if (document.getElementById('lia')) {
  if (true) {
    var app = new _javascript_liascript_index_js__WEBPACK_IMPORTED_MODULE_1__["LiaScript"](document.getElementById('lia'), false);
  } else { var app; }
}

/***/ }),

/***/ "./src/javascript/liascript/database.js":
/*!**********************************************!*\
  !*** ./src/javascript/liascript/database.js ***!
  \**********************************************/
/*! exports provided: LiaDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiaDB", function() { return LiaDB; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/javascript/liascript/logger.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LiaDB =
/*#__PURE__*/
function () {
  function LiaDB(uidDB, versionDB) {
    var send = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var channel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var init = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    _classCallCheck(this, LiaDB);

    this.channel = channel;
    this.send = send;
    this.versionDB = parseInt(versionDB);
    if (!this.versionDB || channel) return;
    this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    if (!this.indexedDB) {
      _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].warn('your browser does not support indexedDB');
      return;
    }

    this.uidDB = uidDB;
    this.versionDB = versionDB;
    var request = this.indexedDB.open(this.uidDB, this.versionDB);

    request.onupgradeneeded = function (event) {
      _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log('creating tables'); // The database did not previously exist, so create object stores and indexes.

      var settings = {
        keyPath: 'id',
        autoIncrement: false
      };
      var db = request.result;
      db.createObjectStore('quiz', settings);
      db.createObjectStore('code', settings);
      db.createObjectStore('survey', settings);

      if (init) {
        send(init);
      }
    };

    request.onsuccess = function (e) {
      if (init) {
        var db = request.result;
        var tx = db.transaction(init.topic, 'readonly');
        var store = tx.objectStore(init.topic);
        var item = store.get(init.section);

        item.onsuccess = function () {
          _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log('table', init.table, item.result);

          if (item.result) {
            init.message.message = item.result.data;
          }

          send(init);
        };

        item.onerror = function () {
          send(init);
        };
      }
    };
  }

  _createClass(LiaDB, [{
    key: "store",
    value: function store(event) {
      if (!this.versionDB) return;

      if (this.channel) {
        this.channel.push('lia', {
          store: event.topic,
          slide: event.section,
          data: event.message
        }).receive('ok', function (e) {
          _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log('ok', e);
        }).receive('error', function (e) {
          _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log('error', e);
        });
        return;
      }

      _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log("liaDB: event(store), table(".concat(event.topic, "), id(").concat(event.section, "), data(").concat(event.message, ")"));
      if (!this.indexedDB) return;
      var request = this.indexedDB.open(this.uidDB, this.versionDB);

      request.onsuccess = function (e) {
        var db = request.result;
        var tx = db.transaction(event.topic, 'readwrite');
        var store = tx.objectStore(event.topic);
        var item = {
          id: event.section,
          data: event.message,
          created: new Date().getTime()
        };
        store.put(item);

        tx.oncomplete = function () {
          // All requests have succeeded and the transaction has committed.
          _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log('stored data ...');
        };
      };
    }
  }, {
    key: "load",
    value: function load(event) {
      if (!this.versionDB) return;
      var send = this.send;

      if (this.channel) {
        this.channel.push('lia', {
          load: event.topic,
          slide: event.section
        }).receive('ok', function (e) {
          event.message = {
            topic: 'restore',
            section: -1,
            message: e.date
          };
          send(event);
        }).receive('error', function (e) {
          _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].error(e);
        });
        return;
      }

      if (!this.indexedDB) return;
      _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log('loading => ', event.topic, event.section);
      var request = this.indexedDB.open(this.uidDB, this.versionDB);

      request.onsuccess = function (e) {
        try {
          var db = request.result;
          var tx = db.transaction(event.topic, 'readonly');
          var store = tx.objectStore(event.topic);
          var item = store.get(event.section);

          item.onsuccess = function () {
            _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log('restore table', event.topic, item.result);

            if (item.result) {
              event.message = {
                topic: 'restore',
                section: -1,
                message: item.result.data
              };
              send(event);
            }
          };

          item.onerror = function () {
            _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].warn('data not found ...');

            if (event.topic === 'code') {
              event.message = {
                topic: 'restore',
                section: -1,
                message: null
              };
              send(event);
            }
          };
        } catch (e) {
          _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].error(e);
        }
      };
    }
  }, {
    key: "del",
    value: function del() {
      if (!this.versionDB) return;
      if (this.channel) return;
      if (!this.indexedDB) return;
      var request = this.indexedDB.deleteDatabase(this.uidDB);

      request.onerror = function (e) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].error('error deleting database:', this.uidDB);
      };

      request.onsuccess = function (e) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log('database deleted: ', this.uidDB);
        _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].log(e.result); // should be undefined
      };
    }
  }, {
    key: "update",
    value: function update(event, slide) {
      if (!this.versionDB) return;

      if (this.channel) {
        this.channel.push('lia', {
          update: event,
          slide: slide
        });
        return;
      }

      if (!this.indexedDB) return;
      var request = this.indexedDB.open(this.uidDB, this.versionDB);

      request.onsuccess = function (e) {
        try {
          var db = request.result;
          var tx = db.transaction('code', 'readwrite');
          var store = tx.objectStore('code');
          var item = store.get(slide);

          item.onsuccess = function () {
            var vector = item.result;

            if (vector) {
              var project = vector.data[event.section];

              switch (event.topic) {
                case 'flip':
                  {
                    if (event.message.topic === 'view') {
                      project.file[event.message.section].visible = event.message.message;
                    } else if (event.message.topic === 'fullscreen') {
                      project.file[event.message.section].fullscreen = event.message.message;
                    }

                    break;
                  }

                case 'load':
                  {
                    var e_ = event.message;
                    project.version_active = e_.version_active;
                    project.log = e_.log;
                    project.file = e_.file;
                    break;
                  }

                case 'version_update':
                  {
                    var _e_ = event.message;
                    project.version_active = _e_.version_active;
                    project.log = _e_.log;
                    project.version[_e_.version_active] = _e_.version;
                    break;
                  }

                case 'version_append':
                  {
                    var _e_2 = event.message;
                    project.version_active = _e_2.version_active;
                    project.log = _e_2.log;
                    project.file = _e_2.file;
                    project.version.push(_e_2.version);
                    project.repository = _objectSpread({}, project.repository, {}, _e_2.repository);
                    break;
                  }

                default:
                  {
                    _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].warn('unknown update cmd: ', event);
                  }
              }

              vector.data[event[1]] = project;
              store.put(vector);
            }
          };

          item.onerror = function () {
            _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].error('data not found ...');
          };
        } catch (e) {
          _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].error(e);
        }
      };
    }
  }]);

  return LiaDB;
}();

;


/***/ }),

/***/ "./src/javascript/liascript/events.js":
/*!********************************************!*\
  !*** ./src/javascript/liascript/events.js ***!
  \********************************************/
/*! exports provided: LiaEvents, lia_execute_event, lia_eval_event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiaEvents", function() { return LiaEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lia_execute_event", function() { return lia_execute_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lia_eval_event", function() { return lia_eval_event; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/javascript/liascript/logger.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // Basic class for handline Code-Errors

var LiaError =
/*#__PURE__*/
function (_Error) {
  _inherits(LiaError, _Error);

  function LiaError(message, files) {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LiaError);

    for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LiaError)).call.apply(_getPrototypeOf2, [this].concat(params)));

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), LiaError);
    }

    _this.message = message;
    _this.details = [];

    for (var i = 0; i < files; i++) {
      _this.details.push([]);
    }

    return _this;
  }

  _createClass(LiaError, [{
    key: "add_detail",
    value: function add_detail(fileId, msg, type, line, column) {
      this.details[fileId].push({
        row: line,
        column: column,
        text: msg,
        type: type
      });
    }
  }, {
    key: "get_detail",
    value: function get_detail(msg, type, line) {
      var column = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return {
        row: line,
        column: column,
        text: msg,
        type: type
      };
    } // sometimes you need to adjust the compile messages to fit into the
    // editor ... use this function to adapt the row parameters ...
    // file_id with 0 will apply the correction value to all files

  }, {
    key: "correct_lines",
    value: function correct_lines(fileId, by) {
      if (fileId == null) {
        for (var i = 0; i < this.details.length; i++) {
          this.correct_lines(i, by);
        }
      } else {
        this.details[fileId] = this.details[fileId].map(function (e) {
          e.line = e.line + by;
        });
      }
    }
  }]);

  return LiaError;
}(_wrapNativeSuper(Error));

;

var LiaEvents =
/*#__PURE__*/
function () {
  function LiaEvents() {
    _classCallCheck(this, LiaEvents);

    this.event = {};
    this.input = {};
  }

  _createClass(LiaEvents, [{
    key: "register",
    value: function register(name, fn) {
      this.event[name] = fn;
    }
  }, {
    key: "register_input",
    value: function register_input(id1, id2, name, fn) {
      if (this.input[id1] === undefined) {
        this.input[id1] = {};
      }

      if (this.input[id1][id2] === undefined) {
        this.input[id1][id2] = {};
      }

      this.input[id1][id2][name] = fn;
    }
  }, {
    key: "dispatch_input",
    value: function dispatch_input(event) {
      // id1, id2, name, msg) {
      try {
        this.input[event.section][event.message.section][event.message.topic](event.message.message);
      } catch (e) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].error('unable to dispatch message', event.message);
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(name, data) {
      if (this.event.hasOwnProperty(name)) {
        this.event[name](data);
      }
    }
  }, {
    key: "remove",
    value: function remove(name) {
      delete this.event[name];
    }
  }]);

  return LiaEvents;
}();

;

function getLineNumber(error) {
  try {
    // firefox
    var firefoxRegex = /<anonymous>:(\d+):\d+/;

    if (error.stack.match(firefoxRegex)) {
      var res = error.stack.match(firefoxRegex);
      return parseInt(res[1], 10);
    } // chrome


    var chromeRegex = /<anonymous>.+:(\d+):\d+/;

    if (error.stack.match(chromeRegex)) {
      var _res = error.stack.match(chromeRegex);

      return parseInt(_res[1], 10);
    }
  } catch (e) {}
}

;

function lia_eval(code, send) {
  try {
    var console = {
      debug: function debug() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return send.log('debug', '\n', args);
      },
      log: function log() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return send.log('info', '\n', args);
      },
      warn: function warn() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return send.log('warn', '\n', args);
      },
      error: function error() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return send.log('error', '\n', args);
      },
      clear: function clear() {
        return send.lia('LIA: clear');
      }
    };
    console.clear();
    send.lia(String(eval(code + '\n', send, console)));
  } catch (e) {
    if (e instanceof LiaError) {
      send.lia(e.message, e.details, false);
    } else {
      send.lia(e.message, [], false);
    }
  }
}

;

function lia_eval_event(send, channel, handler, event) {
  lia_eval(event.message.message, {
    lia: function lia(result) {
      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var ok = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      event.message.topic = 'eval';
      event.message.message = {
        result: result,
        details: details,
        ok: ok
      };
      send(event);
    },
    log: function log(topic, sep) {
      event.message.topic = topic;

      for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        args[_key6 - 2] = arguments[_key6];
      }

      event.message.message = list_to_string(sep, args);
      send(event);
    },
    service: websocket(channel),
    handle: function handle(name, fn) {
      var e1 = event.section;
      var e2 = event.message.section;
      handler.register_input(e1, e2, name, fn);
    },
    register: function register(name, fn) {
      handler.register(name, fn);
    }
  });
}

;

function list_to_string(sep, list) {
  var str = '';

  for (var i = 0; i < list[0].length; i++) {
    str += list[0][i].toString() + ' ';
  }

  return str + sep;
}

;

function lia_execute_event(event) {
  try {
    setTimeout(function () {
      eval(event.code);
    }, event.delay);
  } catch (e) {
    _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].error('exec => ', e);
  }
}

;

function websocket() {
  var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (channel) {
    return function (eventID, message) {
      return channel.push('lia', {
        event_id: eventID,
        message: message
      });
    };
  }
}

;


/***/ }),

/***/ "./src/javascript/liascript/index.js":
/*!*******************************************!*\
  !*** ./src/javascript/liascript/index.js ***!
  \*******************************************/
/*! exports provided: LiaScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiaScript", function() { return LiaScript; });
/* harmony import */ var _elm_App_elm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../elm/App.elm */ "./src/elm/App.elm");
/* harmony import */ var _elm_App_elm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elm_App_elm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./src/javascript/liascript/database.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/javascript/liascript/storage.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/javascript/liascript/events.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./src/javascript/liascript/settings.js");
/* harmony import */ var _persistent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persistent */ "./src/javascript/liascript/persistent.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger */ "./src/javascript/liascript/logger.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









function scrollIntoView(id, delay) {
  setTimeout(function (e) {
    try {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    } catch (e) {}
  }, delay);
}

;

function handleEffects(event, elmSend) {
  switch (event.topic) {
    case 'scrollTo':
      scrollIntoView(event.message, 350);
      break;

    case 'persistent':
      setTimeout(function (e) {
        _persistent__WEBPACK_IMPORTED_MODULE_5__["persistent"].load(event.section);
      }, 10);
      break;

    case 'execute':
      Object(_events__WEBPACK_IMPORTED_MODULE_3__["lia_execute_event"])(event.message);
      break;

    case 'speak':
      {
        var msg = {
          topic: 'settings',
          section: -1,
          message: {
            topic: 'speak',
            section: -1,
            message: 'stop'
          }
        };

        try {
          if (event.message === 'cancel') {
            responsiveVoice.cancel();
            msg.message.message = 'stop';
            elmSend(msg);
          } else if (event.message === 'repeat') {
            event.message = [ttsBackup[0], ttsBackup[1], 'true'];
            handleEffects(event, elmSend);
          } else {
            ttsBackup = event.message;

            if (event.message[2] === 'true') {
              responsiveVoice.speak(event.message[1], event.message[0], {
                onstart: function onstart(e) {
                  msg.message.message = 'start';
                  elmSend(msg);
                },
                onend: function onend(e) {
                  msg.message.message = 'stop';
                  elmSend(msg);
                },
                onerror: function onerror(e) {
                  msg.message.message = e.toString();
                  elmSend(msg);
                }
              });
            }
          }
        } catch (e) {
          msg.message.message = e.toString();
          elmSend(msg);
        }

        break;
      }

    default:
      _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].warn('effect missed', event);
  }
}

;

function meta(name, content) {
  if (content !== '') {
    var _meta = document.createElement('meta');

    _meta.name = name;
    _meta.content = content;
    document.getElementsByTagName('head')[0].appendChild(_meta);
  }
} // -----------------------------------------------------------------------------


var eventHandler = undefined;
var liaStorage = undefined;
var ttsBackup = undefined;

var LiaScript =
/*#__PURE__*/
function () {
  function LiaScript(elem) {
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var course = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var script = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var url = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var slide = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var spa = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
    var channel = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;

    _classCallCheck(this, LiaScript);

    if (debug) window.debug__ = true;
    eventHandler = new _events__WEBPACK_IMPORTED_MODULE_3__["LiaEvents"]();
    var settings = localStorage.getItem(_settings__WEBPACK_IMPORTED_MODULE_4__["SETTINGS"]);
    this.app = _elm_App_elm__WEBPACK_IMPORTED_MODULE_0__["Elm"].App.init({
      node: elem,
      flags: {
        course: course,
        script: script,
        debug: debug,
        spa: spa,
        settings: settings ? JSON.parse(settings) : settings
      }
    });
    var sendTo = this.app.ports.event2elm.send;

    var sender = function sender(msg) {
      _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].log('event2elm => ', msg);
      sendTo(msg);
    };

    this.initChannel(channel, sender);
    this.initEventSystem(this.app.ports.event2js.subscribe, sender);
    liaStorage = new _storage__WEBPACK_IMPORTED_MODULE_2__["LiaStorage"](channel);
  }

  _createClass(LiaScript, [{
    key: "initChannel",
    value: function initChannel(channel, send) {
      if (!channel) return;
      this.channel = channel;
      channel.on('service', function (e) {
        eventHandler.dispatch(e.event_id, e.message);
      });
      channel.join().receive('ok', function (e) {
        _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].log('joined to channel', e);
      }) // initSettings(send, e); })
      .receive('error', function (e) {
        _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].error('channel join => ', e);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.app.ports.event2elm.send({
        topic: 'reset',
        section: -1,
        message: null
      });
    }
  }, {
    key: "initEventSystem",
    value: function initEventSystem(jsSubscribe, elmSend) {
      _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].log('initEventSystem');
      var self = this;
      jsSubscribe(function (event) {
        _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].log('elm2js => ', event);

        switch (event.topic) {
          case 'slide':
            {
              // if(self.channel)
              //    self.channel.push('lia', { slide: event.section + 1 });
              var sec = document.getElementsByTagName('section')[0];

              if (sec) {
                sec.scrollTo(0, 0);
              }

              break;
            }

          case 'load':
            {
              self.db.load({
                topic: event.message,
                section: event.section,
                message: null
              });
              break;
            }

          case 'code':
            {
              switch (event.message.topic) {
                case 'eval':
                  Object(_events__WEBPACK_IMPORTED_MODULE_3__["lia_eval_event"])(elmSend, self.channel, eventHandler, event);
                  break;

                case 'store':
                  event.message = event.message.message;
                  self.db.store(event);
                  break;

                case 'input':
                  eventHandler.dispatch_input(event);
                  break;

                case 'stop':
                  eventHandler.dispatch_input(event);
                  break;

                default:
                  {
                    self.db.update(event.message, event.section);
                  }
              }

              break;
            }

          case 'quiz':
            {
              if (event.message.topic === 'store') {
                event.message = event.message.message;
                self.db.store(event);
              } else if (event.message.topic === 'eval') {
                Object(_events__WEBPACK_IMPORTED_MODULE_3__["lia_eval_event"])(elmSend, self.channel, eventHandler, event);
              }

              break;
            }

          case 'survey':
            {
              if (event.message.topic === 'store') {
                event.message = event.message.message;
                self.db.store(event);
              } else if (event.message.topic === 'eval') {
                Object(_events__WEBPACK_IMPORTED_MODULE_3__["lia_eval_event"])(elmSend, self.channel, eventHandler, event);
              }

              break;
            }

          case 'effect':
            handleEffects(event.message, elmSend);
            break;

          case _settings__WEBPACK_IMPORTED_MODULE_4__["SETTINGS"]:
            {
              // if (self.channel) {
              //  self.channel.push('lia', {settings: event.message});
              // } else {
              localStorage.setItem(_settings__WEBPACK_IMPORTED_MODULE_4__["SETTINGS"], JSON.stringify(event.message)); // }

              break;
            }

          case 'resource':
            {
              var elem = event.message[0];
              var url = event.message[1];
              _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].log('loading resource => ', elem, ':', url);

              try {
                var tag = document.createElement(elem);

                if (elem === 'link') {
                  tag.href = url;
                  tag.rel = 'stylesheet';
                } else {
                  tag.src = url;
                  tag.async = false;
                }

                document.head.appendChild(tag);
              } catch (e) {
                _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].error('loading resource => ', e.msg);
              }

              break;
            }

          case 'persistent':
            {
              if (event.message === 'store') {
                _persistent__WEBPACK_IMPORTED_MODULE_5__["persistent"].store(event.section);
                elmSend({
                  topic: 'load',
                  section: -1,
                  message: null
                });
              }

              break;
            }

          case 'init':
            {
              var _event$message = _slicedToArray(event.message, 7),
                  title = _event$message[0],
                  readme = _event$message[1],
                  version = _event$message[2],
                  onload = _event$message[3],
                  author = _event$message[4],
                  comment = _event$message[5],
                  logo = _event$message[6];

              self.db = new _database__WEBPACK_IMPORTED_MODULE_1__["LiaDB"](readme, version, elmSend, null, // self.channel,
              {
                topic: 'code',
                section: event.section,
                message: {
                  topic: 'restore',
                  section: -1,
                  message: null
                }
              });

              if (onload !== '') {
                Object(_events__WEBPACK_IMPORTED_MODULE_3__["lia_execute_event"])({
                  code: onload,
                  delay: 350
                });
              }

              meta('author', author);
              meta('og:description', comment);
              meta('og:title', title);
              meta('og:type', 'website');
              meta('og:url', '');
              meta('og:image', logo);
              break;
            }

          case 'reset':
            {
              self.db.del();

              if (!self.channel) {
                Object(_settings__WEBPACK_IMPORTED_MODULE_4__["initSettings"])(elmSend, null, true);
              }

              window.location.reload();
              break;
            }

          default:
            _logger__WEBPACK_IMPORTED_MODULE_6__["lia"].error('Command not found => ', event);
        }
      });
    }
  }]);

  return LiaScript;
}();

;


/***/ }),

/***/ "./src/javascript/liascript/logger.js":
/*!********************************************!*\
  !*** ./src/javascript/liascript/logger.js ***!
  \********************************************/
/*! exports provided: lia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lia", function() { return lia; });


var lia = {
  log: function log() {
    var _console;

    if (window.debug__) (_console = console).log.apply(_console, ['LiaLog: '].concat(Array.prototype.slice.call(arguments)));
  },
  warn: function warn() {
    var _console2;

    if (window.debug__) (_console2 = console).warn.apply(_console2, ['LiaWarn: '].concat(Array.prototype.slice.call(arguments)));
  },
  error: function error() {
    var _console3;

    (_console3 = console).error.apply(_console3, ['LiaError: '].concat(Array.prototype.slice.call(arguments)));
  }
};


/***/ }),

/***/ "./src/javascript/liascript/persistent.js":
/*!************************************************!*\
  !*** ./src/javascript/liascript/persistent.js ***!
  \************************************************/
/*! exports provided: persistent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistent", function() { return persistent; });


function swapElements(obj1, obj2) {
  // create marker element and insert it where obj1 is
  var temp = document.createElement('div');
  obj1.parentNode.insertBefore(temp, obj1); // move obj1 to right before obj2

  obj2.parentNode.insertBefore(obj1, obj2); // move obj2 to right before where obj1 used to be

  temp.parentNode.insertBefore(obj2, temp); // remove temporary marker node

  temp.parentNode.removeChild(temp);
}

var persistent = {
  bag: document.createElement('div'),
  section: -1,
  store: function store(section) {
    if (section === this.section) return;
    this.section = section;
    var elements = document.getElementsByClassName('persistent');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var e = _step.value;
        var temp = document.createElement('span');
        this.bag.appendChild(temp);
        swapElements(temp, e);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  load: function load(section) {
    var elements = document.getElementsByClassName('persistent');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var e = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.bag.childNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var b = _step3.value;

            if (b.id === e.id) {
              e.replaceWith(b);
              break;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
};


/***/ }),

/***/ "./src/javascript/liascript/settings.js":
/*!**********************************************!*\
  !*** ./src/javascript/liascript/settings.js ***!
  \**********************************************/
/*! exports provided: initSettings, SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSettings", function() { return initSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });


var SETTINGS = 'settings';

function initSettings(send, data) {
  var local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (data == null) {
    data = {
      table_of_contents: true,
      mode: 'Slides',
      theme: 'default',
      light: true,
      editor: 'dreamweaver',
      font_size: 100,
      sound: true,
      land: 'en'
    };
  }

  if (local) {
    localStorage.setItem(SETTINGS, JSON.stringify(data));
  }

  send({
    topic: SETTINGS,
    section: -1,
    message: {
      topic: 'init',
      section: -1,
      message: data
    }
  });
}

;


/***/ }),

/***/ "./src/javascript/liascript/storage.js":
/*!*********************************************!*\
  !*** ./src/javascript/liascript/storage.js ***!
  \*********************************************/
/*! exports provided: LiaStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiaStorage", function() { return LiaStorage; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/javascript/liascript/logger.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LiaStorage =
/*#__PURE__*/
function () {
  function LiaStorage() {
    var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, LiaStorage);

    if (!channel) return;
    this.channel = channel;

    this._init();
  }

  _createClass(LiaStorage, [{
    key: "_init",
    value: function _init() {
      if (!this.channel) return;
      var store = this._setLocal;
      this.channel.push('lia', {
        get_local_storage: []
      }).receive('ok', function (e) {
        store(e);
      }).receive('error', function (e) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["lia"].error('storing => ', e);
      });
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (typeof key === 'string') key = [key];
      var rslt = {};

      for (var i = 0; i < key.length; i++) {
        var value = localStorage.getItem(key[i]);
        rslt[key[i]] = value ? JSON.parse(value) : value;
      }

      return rslt;
    }
  }, {
    key: "setItems",
    value: function setItems(dict) {
      if (this.channel) {
        this.channel.push('lia', {
          set_local_storage: dict
        });
      }

      this._setLocal(dict);
    }
  }, {
    key: "_setLocal",
    value: function _setLocal(dict) {
      if (_typeof(dict) === 'object') {
        for (var _i = 0, _Object$entries = Object.entries(dict); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    }
  }]);

  return LiaStorage;
}();

;


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });