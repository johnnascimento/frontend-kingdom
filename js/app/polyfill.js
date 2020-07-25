
define(function () {
    return {
        objectPolyfill: function() {
            if (!Object.assign) {
                Object.defineProperty(Object, 'assign', {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: function(target) {
                        'use strict';
                        if (target === undefined || target === null) {
                            throw new TypeError('Cannot convert first argument to object');
                        }

                        var to = Object(target);
                        for (var i = 1; i < arguments.length; i++) {
                            var nextSource = arguments[i];
                            if (nextSource === undefined || nextSource === null) {
                                continue;
                            }
                            nextSource = Object(nextSource);

                            var keysArray = Object.keys(Object(nextSource));
                            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                                var nextKey = keysArray[nextIndex];
                                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                                if (desc !== undefined && desc.enumerable) {
                                    to[nextKey] = nextSource[nextKey];
                                }
                            }
                        }
                        return to;
                    }
                });
            }
        },

        includesPolyfill: function() {
            if (!Array.prototype.includes) {
                Object.defineProperty(Array.prototype, 'includes', {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: function(searchElement, fromIndex) {
                        if (this == null) {
                            throw new TypeError('"this" is null or not defined');
                        }

                        var o = Object(this);
                        var len = o.length >>> 0;

                        if (len === 0) {
                            return false;
                        }

                        var n = fromIndex | 0;
                        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                        while (k < len) {
                            if (o[k] === searchElement) {
                                return true;
                            }
                            k++;
                        }

                        return false;
                    }
                });
            }
        },

        mapPolyfill: function() {
            if (!Array.prototype.map) {
                Array.prototype.map = function(callback, thisArg) {
                    var T, A, k;

                    if (this == null) {
                        throw new TypeError(' this is null or not defined');
                    }

                    var O = Object(this);
                    var len = O.length >>> 0;

                    if (typeof callback !== 'function') {
                        throw new TypeError(callback + ' is not a function');
                    }

                    if (arguments.length > 1) {
                        T = thisArg;
                    }

                    A = new Array(len);
                    k = 0;

                    while (k < len) {
                        var kValue, mappedValue;
                        if (k in O) {
                            kValue = O[k];
                            mappedValue = callback.call(T, kValue, k, O);
                            A[k] = mappedValue;
                        }

                        k++;
                    }

                    return A;
                };
            }
        },

        customEventsPolyfill: function() {
            if ( typeof window.CustomEvent === "function" ) return false;

            function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }

            CustomEvent.prototype = window.Event.prototype;

            window.CustomEvent = CustomEvent;
        }
    }
});