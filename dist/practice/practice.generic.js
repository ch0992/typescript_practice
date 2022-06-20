"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var merge = function (a, b) {
    return __assign(__assign({}, a), b);
};
var merged = merge({ foo: 1 }, { bar: 1 });
var merge2 = function (a, b) {
    return __assign(__assign({}, a), b);
};
var merged2 = merge2({ foo: 1 }, { bar: 1 });
var wrap = function (param) {
    return {
        param: param
    };
};
var wrapped = wrap(10);
