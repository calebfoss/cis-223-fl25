/******/ var __webpack_modules__ = ({

/***/ "./src/classes/angle.ts":
/*!******************************!*\
  !*** ./src/classes/angle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Angle: () => (/* binding */ Angle)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/classes/state.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Angle_instances, _a, _Angle_conversions, _Angle_getConverted, _Angle_setConverted;

const unitsInCircle = {
    deg: 360,
    rad: Math.PI * 2,
    grad: 400,
    turn: 1,
};
class Angle extends _state__WEBPACK_IMPORTED_MODULE_0__.State {
    constructor(unit, value) {
        const radians = unit === "rad" ? value : _a.convert(value, unit, "rad");
        super(radians);
        _Angle_instances.add(this);
        _Angle_conversions.set(this, new Map());
        if (unit !== "rad")
            __classPrivateFieldGet(this, _Angle_conversions, "f").set(unit, value);
    }
    get degrees() {
        return __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_getConverted).call(this, "deg");
    }
    set degrees(value) {
        __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_setConverted).call(this, "deg", value);
    }
    toString() {
        const conversionCount = __classPrivateFieldGet(this, _Angle_conversions, "f").size;
        const [unit, value] = conversionCount === 0
            ? ["rad", this.value]
            : Array.from(__classPrivateFieldGet(this, _Angle_conversions, "f"))[conversionCount - 1];
        const valueString = Number.isInteger(value)
            ? value.toString()
            : value.toPrecision(2);
        return valueString + unit;
    }
    static convert(value, unitFrom, unitTo) {
        return value * (unitsInCircle[unitTo] / unitsInCircle[unitFrom]);
    }
    static degrees(value) {
        return new _a(_a.unit.degrees, value);
    }
    equals(other) {
        return super.equals(other) || this.radians === other.radians;
    }
    get gradians() {
        return __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_getConverted).call(this, "grad");
    }
    set gradians(value) {
        __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_setConverted).call(this, "grad", value);
    }
    static radians(value) {
        return new _a(_a.unit.radians, value);
    }
    get radians() {
        return this.value;
    }
    set radians(value) {
        if (this.value === value)
            return;
        __classPrivateFieldGet(this, _Angle_conversions, "f").clear();
        super.value = value;
    }
    get turn() {
        return __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_getConverted).call(this, "turn");
    }
    set turn(value) {
        __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_setConverted).call(this, "turn", value);
    }
    get unit() {
        const conversionCount = __classPrivateFieldGet(this, _Angle_conversions, "f").size;
        const [shortUnit] = conversionCount === 0
            ? ["rad", this.value]
            : Array.from(__classPrivateFieldGet(this, _Angle_conversions, "f"))[conversionCount - 1];
        const longUnit = Object.keys(_a.unit).find((key) => _a.unit[key] === shortUnit);
        if (longUnit === undefined)
            throw new Error(`Could not find angle unit: ${shortUnit}`);
        return longUnit;
    }
    static get unitsInCircle() {
        return unitsInCircle;
    }
    get value() {
        return super.value;
    }
    set value(value) {
        this.radians = value;
    }
    static get zero() {
        return _a.radians(0);
    }
}
_a = Angle, _Angle_conversions = new WeakMap(), _Angle_instances = new WeakSet(), _Angle_getConverted = function _Angle_getConverted(unit) {
    const cached = __classPrivateFieldGet(this, _Angle_conversions, "f").get(unit);
    if (cached !== undefined)
        return cached;
    const conversion = _a.convert(this.value, "rad", unit);
    __classPrivateFieldGet(this, _Angle_conversions, "f").set(unit, conversion);
    return conversion;
}, _Angle_setConverted = function _Angle_setConverted(unit, value) {
    __classPrivateFieldGet(this, _Angle_conversions, "f").set(unit, value);
    this.value = _a.convert(value, unit, "rad");
};
Angle.unit = {
    degrees: "deg",
    radians: "rad",
    gradians: "grad",
    turn: "turn",
};


/***/ }),

/***/ "./src/classes/borderRadius.ts":
/*!*************************************!*\
  !*** ./src/classes/borderRadius.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BorderRadius: () => (/* binding */ BorderRadius)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/classes/state.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BorderRadiusBase_topLeft, _BorderRadiusBase_topRight, _BorderRadiusBase_bottomLeft, _BorderRadiusBase_bottomRight;

class BorderRadiusBase {
    constructor(arg1, arg2, arg3, bottomLeft) {
        _BorderRadiusBase_topLeft.set(this, void 0);
        _BorderRadiusBase_topRight.set(this, void 0);
        _BorderRadiusBase_bottomLeft.set(this, void 0);
        _BorderRadiusBase_bottomRight.set(this, void 0);
        __classPrivateFieldSet(this, _BorderRadiusBase_topLeft, arg1, "f");
        if (arg2 === undefined) {
            __classPrivateFieldSet(this, _BorderRadiusBase_topRight, __classPrivateFieldSet(this, _BorderRadiusBase_bottomLeft, __classPrivateFieldSet(this, _BorderRadiusBase_bottomRight, arg1, "f"), "f"), "f");
        }
        else if (arg3 === undefined) {
            __classPrivateFieldSet(this, _BorderRadiusBase_bottomRight, arg1, "f");
            __classPrivateFieldSet(this, _BorderRadiusBase_topRight, arg2, "f");
            __classPrivateFieldSet(this, _BorderRadiusBase_bottomLeft, arg2, "f");
        }
        else if (bottomLeft === undefined) {
            __classPrivateFieldSet(this, _BorderRadiusBase_topRight, arg2, "f");
            __classPrivateFieldSet(this, _BorderRadiusBase_bottomLeft, arg2, "f");
            __classPrivateFieldSet(this, _BorderRadiusBase_bottomRight, arg3, "f");
        }
        else {
            __classPrivateFieldSet(this, _BorderRadiusBase_topRight, arg2, "f");
            __classPrivateFieldSet(this, _BorderRadiusBase_bottomRight, arg3, "f");
            __classPrivateFieldSet(this, _BorderRadiusBase_bottomLeft, bottomLeft, "f");
        }
    }
    get topLeft() {
        return __classPrivateFieldGet(this, _BorderRadiusBase_topLeft, "f");
    }
    set topLeft(value) {
        __classPrivateFieldSet(this, _BorderRadiusBase_topLeft, value, "f");
    }
    get topRight() {
        return __classPrivateFieldGet(this, _BorderRadiusBase_topRight, "f");
    }
    set topRight(value) {
        __classPrivateFieldSet(this, _BorderRadiusBase_topRight, value, "f");
    }
    get bottomLeft() {
        return __classPrivateFieldGet(this, _BorderRadiusBase_bottomLeft, "f");
    }
    set bottomLeft(value) {
        __classPrivateFieldSet(this, _BorderRadiusBase_bottomLeft, value, "f");
    }
    get bottomRight() {
        return __classPrivateFieldGet(this, _BorderRadiusBase_bottomRight, "f");
    }
    set bottomRight(value) {
        __classPrivateFieldSet(this, _BorderRadiusBase_bottomRight, value, "f");
    }
}
_BorderRadiusBase_topLeft = new WeakMap(), _BorderRadiusBase_topRight = new WeakMap(), _BorderRadiusBase_bottomLeft = new WeakMap(), _BorderRadiusBase_bottomRight = new WeakMap();
class BorderRadius extends _state__WEBPACK_IMPORTED_MODULE_0__.State {
    constructor(arg1, arg2, arg3, bottomLeft) {
        const base = arg2 === undefined
            ? new BorderRadiusBase(arg1)
            : arg3 === undefined
                ? new BorderRadiusBase(arg1, arg2)
                : bottomLeft === undefined
                    ? new BorderRadiusBase(arg1, arg2, arg3)
                    : new BorderRadiusBase(arg1, arg2, arg3, bottomLeft);
        super(base);
    }
    get topLeft() {
        return super.value.topLeft;
    }
    set topLeft(value) {
        if (value === this.topLeft)
            return;
        super.value.topLeft = value;
        this.handleChange();
    }
    get topRight() {
        return super.value.topRight;
    }
    set topRight(value) {
        if (value === this.topRight)
            return;
        super.value.topRight = value;
        this.handleChange();
    }
    get bottomRight() {
        return super.value.bottomRight;
    }
    set bottomRight(value) {
        if (value === this.bottomRight)
            return;
        super.value.bottomRight = value;
        this.handleChange();
    }
    get bottomLeft() {
        return super.value.bottomLeft;
    }
    set bottomLeft(value) {
        if (value === this.bottomLeft)
            return;
        super.value.bottomLeft = value;
        this.handleChange();
    }
    equals(other) {
        const otherArray = other.toArray();
        return this.toArray().every((value, index) => value === otherArray[index]);
    }
    toArray() {
        return [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];
    }
    toString() {
        return this.toArray().join(", ");
    }
    get value() {
        return super.value;
    }
}


/***/ }),

/***/ "./src/classes/click.ts":
/*!******************************!*\
  !*** ./src/classes/click.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickData: () => (/* binding */ ClickData),
/* harmony export */   ClickTracker: () => (/* binding */ ClickTracker)
/* harmony export */ });
/* harmony import */ var _vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector2d */ "./src/classes/vector2d.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ClickData_clicked, _ClickTracker_target;

class ClickData extends _vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D {
    constructor() {
        super(...arguments);
        _ClickData_clicked.set(this, false);
    }
    get clicked() {
        return __classPrivateFieldGet(this, _ClickData_clicked, "f");
    }
    set clicked(value) {
        __classPrivateFieldSet(this, _ClickData_clicked, value, "f");
    }
}
_ClickData_clicked = new WeakMap();
class ClickTracker extends ClickData {
    constructor(target) {
        super();
        _ClickTracker_target.set(this, void 0);
        __classPrivateFieldSet(this, _ClickTracker_target, target, "f");
        target.addEventListener("click", (event) => {
            super.clicked = true;
            super.x = event.x;
            super.y = event.y;
        });
    }
    advanceFrame() {
        super.clicked = false;
    }
    get clicked() {
        return super.clicked;
    }
    get position() {
        if (__classPrivateFieldGet(this, _ClickTracker_target, "f") instanceof Window)
            return this;
        const boundingRect = __classPrivateFieldGet(this, _ClickTracker_target, "f").getBoundingClientRect();
        return _vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.xy(super.x - boundingRect.x, super.y - boundingRect.y);
    }
    get x() {
        return this.position.x;
    }
    get y() {
        return this.position.y;
    }
}
_ClickTracker_target = new WeakMap();


/***/ }),

/***/ "./src/classes/color.ts":
/*!******************************!*\
  !*** ./src/classes/color.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Color_str;
function hex(n) {
    return Math.max(Math.min(Math.floor(n), 255), 0)
        .toString(16)
        .padStart(2, "0");
}
class Color {
    constructor(firstArg, secondArg, blue, alpha) {
        _Color_str.set(this, void 0);
        if (typeof firstArg === "string") {
            __classPrivateFieldSet(this, _Color_str, firstArg, "f");
        }
        else if (arguments.length < 3) {
            const grayNum = firstArg;
            const grayHex = hex(grayNum);
            const alphaNum = secondArg;
            const alphaHex = alphaNum === undefined ? "" : hex(alphaNum);
            __classPrivateFieldSet(this, _Color_str, `#${grayHex}${grayHex}${grayHex}${alphaHex}`, "f");
        }
        else {
            const red = firstArg;
            const redHex = hex(red);
            const green = secondArg;
            const greenHex = hex(green);
            const blueHex = hex(blue);
            const alphaHex = alpha === undefined ? "" : hex(alpha);
            __classPrivateFieldSet(this, _Color_str, `#${redHex}${greenHex}${blueHex}${alphaHex}`, "f");
        }
    }
    static gray(value, alpha) {
        return new Color(value, alpha);
    }
    static fromString(value) {
        return new Color(value);
    }
    equals(other) {
        return __classPrivateFieldGet(this, _Color_str, "f") === other.toString();
    }
    toString() {
        return __classPrivateFieldGet(this, _Color_str, "f");
    }
    static get random() {
        return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
    }
    static rgb(red, green, blue, alpha) {
        return new Color(red, green, blue, alpha);
    }
    static hsl(hue, saturation, lightness, alpha) {
        return new Color(`hsl(${hue} ${saturation} ${lightness}${alpha === undefined ? "" : ` / ${alpha}`})`);
    }
}
_Color_str = new WeakMap();


/***/ }),

/***/ "./src/classes/gradient.ts":
/*!*********************************!*\
  !*** ./src/classes/gradient.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConicalGradient: () => (/* binding */ ConicalGradient),
/* harmony export */   Gradient: () => (/* binding */ Gradient),
/* harmony export */   LinearGradient: () => (/* binding */ LinearGradient),
/* harmony export */   RadialGradient: () => (/* binding */ RadialGradient)
/* harmony export */ });
/* harmony import */ var _angle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angle */ "./src/classes/angle.ts");
/* harmony import */ var _vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector2d */ "./src/classes/vector2d.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ColorStop_offset, _ColorStop_color, _Gradient_stops, _LinearGradient_colorStartX, _LinearGradient_colorStartY, _LinearGradient_colorEndX, _LinearGradient_colorEndY, _LinearGradient_svg, _RadialGradient_startX, _RadialGradient_startY, _RadialGradient_startRadius, _RadialGradient_endX, _RadialGradient_endY, _RadialGradient_endRadius, _RadialGradient_svg, _ConicalGradient_startAngle, _ConicalGradient_offset;


class ColorStop {
    constructor(offset, color) {
        _ColorStop_offset.set(this, void 0);
        _ColorStop_color.set(this, void 0);
        __classPrivateFieldSet(this, _ColorStop_offset, offset, "f");
        __classPrivateFieldSet(this, _ColorStop_color, color, "f");
    }
    get offset() {
        return __classPrivateFieldGet(this, _ColorStop_offset, "f");
    }
    get color() {
        return __classPrivateFieldGet(this, _ColorStop_color, "f");
    }
}
_ColorStop_offset = new WeakMap(), _ColorStop_color = new WeakMap();
class Gradient {
    constructor() {
        _Gradient_stops.set(this, []);
    }
    addColorStop(offset, color) {
        __classPrivateFieldGet(this, _Gradient_stops, "f").push(new ColorStop(offset, color));
        return this;
    }
    applyStops(gradient) {
        for (const stop of __classPrivateFieldGet(this, _Gradient_stops, "f")) {
            gradient.addColorStop(stop.offset, stop.color.toString());
        }
    }
    defineSVGStops(definition) {
        const { stops } = this;
        for (const stop of stops) {
            const stopElement = document.createElementNS("http://www.w3.org/2000/svg", "stop");
            stopElement.setAttribute("offset", stop.offset.toString());
            stopElement.setAttribute("stop-color", stop.color.toString());
            definition.appendChild(stopElement);
        }
    }
    render(context, ...args) {
        throw new Error("Render called on base Gradient class");
    }
    get stops() {
        return __classPrivateFieldGet(this, _Gradient_stops, "f");
    }
    toString() {
        return "gradient";
    }
    get svg() {
        throw new Error("This type of gradient is not yet supported for SVG.");
    }
}
_Gradient_stops = new WeakMap();
class LinearGradient extends Gradient {
    constructor(startX = 0, startY = 0, endX = 1, endY = 1) {
        super();
        _LinearGradient_colorStartX.set(this, void 0);
        _LinearGradient_colorStartY.set(this, void 0);
        _LinearGradient_colorEndX.set(this, void 0);
        _LinearGradient_colorEndY.set(this, void 0);
        _LinearGradient_svg.set(this, null);
        __classPrivateFieldSet(this, _LinearGradient_colorStartX, startX, "f");
        __classPrivateFieldSet(this, _LinearGradient_colorStartY, startY, "f");
        __classPrivateFieldSet(this, _LinearGradient_colorEndX, endX, "f");
        __classPrivateFieldSet(this, _LinearGradient_colorEndY, endY, "f");
    }
    render(context, boundsX, boundsY, boundsWidth, boundsHeight) {
        const x0 = boundsX + boundsWidth * __classPrivateFieldGet(this, _LinearGradient_colorStartX, "f");
        const y0 = boundsY + boundsHeight * __classPrivateFieldGet(this, _LinearGradient_colorStartY, "f");
        const x1 = boundsX + boundsWidth * __classPrivateFieldGet(this, _LinearGradient_colorEndX, "f");
        const y1 = boundsY + boundsHeight * __classPrivateFieldGet(this, _LinearGradient_colorEndY, "f");
        const gradient = context.createLinearGradient(x0, y0, x1, y1);
        this.applyStops(gradient);
        return gradient;
    }
    get svg() {
        if (__classPrivateFieldGet(this, _LinearGradient_svg, "f") !== null)
            return __classPrivateFieldGet(this, _LinearGradient_svg, "f");
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        svgElement.setAttribute("x1", __classPrivateFieldGet(this, _LinearGradient_colorStartX, "f").toString());
        svgElement.setAttribute("y1", __classPrivateFieldGet(this, _LinearGradient_colorStartY, "f").toString());
        svgElement.setAttribute("x2", __classPrivateFieldGet(this, _LinearGradient_colorEndX, "f").toString());
        svgElement.setAttribute("y2", __classPrivateFieldGet(this, _LinearGradient_colorEndY, "f").toString());
        this.defineSVGStops(svgElement);
        return (__classPrivateFieldSet(this, _LinearGradient_svg, svgElement, "f"));
    }
}
_LinearGradient_colorStartX = new WeakMap(), _LinearGradient_colorStartY = new WeakMap(), _LinearGradient_colorEndX = new WeakMap(), _LinearGradient_colorEndY = new WeakMap(), _LinearGradient_svg = new WeakMap();
class RadialGradient extends Gradient {
    constructor(startX = 0, startY = 0, startRadius = 0, endX = 0, endY = 0, endRadius = 1) {
        super();
        _RadialGradient_startX.set(this, void 0);
        _RadialGradient_startY.set(this, void 0);
        _RadialGradient_startRadius.set(this, void 0);
        _RadialGradient_endX.set(this, void 0);
        _RadialGradient_endY.set(this, void 0);
        _RadialGradient_endRadius.set(this, void 0);
        _RadialGradient_svg.set(this, null);
        __classPrivateFieldSet(this, _RadialGradient_startX, startX, "f");
        __classPrivateFieldSet(this, _RadialGradient_startY, startY, "f");
        __classPrivateFieldSet(this, _RadialGradient_startRadius, startRadius, "f");
        __classPrivateFieldSet(this, _RadialGradient_endX, endX, "f");
        __classPrivateFieldSet(this, _RadialGradient_endY, endY, "f");
        __classPrivateFieldSet(this, _RadialGradient_endRadius, endRadius, "f");
    }
    render(context, boundsX, boundsY, boundsRadius) {
        const x0 = boundsX + __classPrivateFieldGet(this, _RadialGradient_startX, "f") * boundsRadius;
        const y0 = boundsY + __classPrivateFieldGet(this, _RadialGradient_startY, "f") * boundsRadius;
        const r0 = boundsRadius * __classPrivateFieldGet(this, _RadialGradient_startRadius, "f");
        const x1 = boundsX + __classPrivateFieldGet(this, _RadialGradient_endX, "f") * boundsRadius;
        const y1 = boundsY + __classPrivateFieldGet(this, _RadialGradient_endY, "f") * boundsRadius;
        const r1 = boundsRadius * __classPrivateFieldGet(this, _RadialGradient_endRadius, "f");
        const gradient = context.createRadialGradient(x0, y0, r0, x1, y1, r1);
        this.applyStops(gradient);
        return gradient;
    }
    get svg() {
        if (__classPrivateFieldGet(this, _RadialGradient_svg, "f") !== null)
            return __classPrivateFieldGet(this, _RadialGradient_svg, "f");
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
        svgElement.setAttribute("fr", __classPrivateFieldGet(this, _RadialGradient_startRadius, "f").toString());
        svgElement.setAttribute("fx", __classPrivateFieldGet(this, _RadialGradient_startX, "f").toString());
        svgElement.setAttribute("cx", __classPrivateFieldGet(this, _RadialGradient_endX, "f").toString());
        svgElement.setAttribute("cy", __classPrivateFieldGet(this, _RadialGradient_endY, "f").toString());
        svgElement.setAttribute("r", __classPrivateFieldGet(this, _RadialGradient_endRadius, "f").toString());
        this.defineSVGStops(svgElement);
        return (__classPrivateFieldSet(this, _RadialGradient_svg, svgElement, "f"));
    }
}
_RadialGradient_startX = new WeakMap(), _RadialGradient_startY = new WeakMap(), _RadialGradient_startRadius = new WeakMap(), _RadialGradient_endX = new WeakMap(), _RadialGradient_endY = new WeakMap(), _RadialGradient_endRadius = new WeakMap(), _RadialGradient_svg = new WeakMap();
class ConicalGradient extends Gradient {
    constructor(startAngle = _angle__WEBPACK_IMPORTED_MODULE_0__.Angle.zero, offset = _vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D.zero) {
        super();
        _ConicalGradient_startAngle.set(this, void 0);
        _ConicalGradient_offset.set(this, void 0);
        __classPrivateFieldSet(this, _ConicalGradient_startAngle, startAngle, "f");
        __classPrivateFieldSet(this, _ConicalGradient_offset, offset, "f");
    }
    render(context, center) {
        const x = center.x + __classPrivateFieldGet(this, _ConicalGradient_offset, "f").x;
        const y = center.y + __classPrivateFieldGet(this, _ConicalGradient_offset, "f").y;
        const gradient = context.createConicGradient(__classPrivateFieldGet(this, _ConicalGradient_startAngle, "f").radians, x, y);
        this.applyStops(gradient);
        return gradient;
    }
}
_ConicalGradient_startAngle = new WeakMap(), _ConicalGradient_offset = new WeakMap();


/***/ }),

/***/ "./src/classes/keyboard.ts":
/*!*********************************!*\
  !*** ./src/classes/keyboard.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardTracker: () => (/* binding */ KeyboardTracker)
/* harmony export */ });
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _KeyboardTracker_current, _KeyboardTracker_previous, _KeyboardTracker_last, _KeyboardTracker_down;
class KeyboardTracker {
    constructor() {
        _KeyboardTracker_current.set(this, new Set());
        _KeyboardTracker_previous.set(this, new Set());
        _KeyboardTracker_last.set(this, "");
        _KeyboardTracker_down.set(this, false);
        window.addEventListener("keydown", (event) => {
            __classPrivateFieldGet(this, _KeyboardTracker_current, "f").add(event.key);
            __classPrivateFieldSet(this, _KeyboardTracker_last, event.key, "f");
            __classPrivateFieldSet(this, _KeyboardTracker_down, true, "f");
        });
        window.addEventListener("keyup", (event) => {
            __classPrivateFieldGet(this, _KeyboardTracker_current, "f").delete(event.key);
            __classPrivateFieldSet(this, _KeyboardTracker_down, false, "f");
            for (const [_, state] of __classPrivateFieldGet(this, _KeyboardTracker_current, "f").entries()) {
                if (state) {
                    __classPrivateFieldSet(this, _KeyboardTracker_down, true, "f");
                    break;
                }
            }
        });
    }
    advanceFrame() {
        for (const key of __classPrivateFieldGet(this, _KeyboardTracker_previous, "f")) {
            if (!__classPrivateFieldGet(this, _KeyboardTracker_current, "f").has(key))
                __classPrivateFieldGet(this, _KeyboardTracker_previous, "f").delete(key);
        }
        for (const key of __classPrivateFieldGet(this, _KeyboardTracker_current, "f")) {
            __classPrivateFieldGet(this, _KeyboardTracker_previous, "f").add(key);
        }
    }
    get down() {
        return __classPrivateFieldGet(this, _KeyboardTracker_down, "f");
    }
    get last() {
        return __classPrivateFieldGet(this, _KeyboardTracker_last, "f");
    }
    keyHeld(key) {
        return __classPrivateFieldGet(this, _KeyboardTracker_current, "f").has(key);
    }
    keyPreviouslyHeld(key) {
        return __classPrivateFieldGet(this, _KeyboardTracker_previous, "f").has(key);
    }
}
_KeyboardTracker_current = new WeakMap(), _KeyboardTracker_previous = new WeakMap(), _KeyboardTracker_last = new WeakMap(), _KeyboardTracker_down = new WeakMap();


/***/ }),

/***/ "./src/classes/mouse.ts":
/*!******************************!*\
  !*** ./src/classes/mouse.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseData: () => (/* binding */ MouseData),
/* harmony export */   MouseTracker: () => (/* binding */ MouseTracker)
/* harmony export */ });
/* harmony import */ var _vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector2d */ "./src/classes/vector2d.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MouseData_buttonStates, _MouseData_over, _MouseTracker_previous, _MouseTracker_target;

const buttonNames = { left: 0, right: 1, wheel: 2, back: 3, forward: 4 };
class MouseData extends _vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D {
    constructor() {
        super(...arguments);
        _MouseData_buttonStates.set(this, [false, false, false, false, false]);
        _MouseData_over.set(this, false);
    }
    get buttonStates() {
        return __classPrivateFieldGet(this, _MouseData_buttonStates, "f");
    }
    set buttonStates(value) {
        __classPrivateFieldSet(this, _MouseData_buttonStates, value, "f");
    }
    get over() {
        return __classPrivateFieldGet(this, _MouseData_over, "f");
    }
    set over(value) {
        __classPrivateFieldSet(this, _MouseData_over, value, "f");
    }
}
_MouseData_buttonStates = new WeakMap(), _MouseData_over = new WeakMap();
class MouseTracker extends MouseData {
    constructor(target = window) {
        super();
        _MouseTracker_previous.set(this, void 0);
        _MouseTracker_target.set(this, void 0);
        __classPrivateFieldSet(this, _MouseTracker_target, target, "f");
        __classPrivateFieldSet(this, _MouseTracker_previous, new MouseData(), "f");
        target.addEventListener("mousedown", (event) => {
            super.buttonStates[event.button] = true;
        });
        target.addEventListener("mouseup", (event) => {
            super.buttonStates[event.button] = false;
        });
        target.addEventListener("mouseenter", (event) => {
            super.over = true;
        });
        target.addEventListener("mouseleave", (event) => {
            super.over = false;
        });
        window.addEventListener("mousemove", (event) => {
            super.x = event.x;
            super.y = event.y;
        });
    }
    advanceFrame() {
        __classPrivateFieldGet(this, _MouseTracker_previous, "f").buttonStates = [...this.buttonStates];
        __classPrivateFieldGet(this, _MouseTracker_previous, "f").over = this.over;
        __classPrivateFieldGet(this, _MouseTracker_previous, "f").x = this.x;
        __classPrivateFieldGet(this, _MouseTracker_previous, "f").y = this.y;
    }
    get buttonStates() {
        return super.buttonStates;
    }
    get over() {
        return super.over;
    }
    get previous() {
        return __classPrivateFieldGet(this, _MouseTracker_previous, "f");
    }
    get x() {
        if (__classPrivateFieldGet(this, _MouseTracker_target, "f") instanceof Window)
            return super.x;
        const boundingRect = __classPrivateFieldGet(this, _MouseTracker_target, "f").getBoundingClientRect();
        return super.x - boundingRect.x;
    }
    get y() {
        if (__classPrivateFieldGet(this, _MouseTracker_target, "f") instanceof Window)
            return super.y;
        const boundingRect = __classPrivateFieldGet(this, _MouseTracker_target, "f").getBoundingClientRect();
        return super.y - boundingRect.y;
    }
}
_MouseTracker_previous = new WeakMap(), _MouseTracker_target = new WeakMap();


/***/ }),

/***/ "./src/classes/random.ts":
/*!*******************************!*\
  !*** ./src/classes/random.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Random: () => (/* binding */ Random)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./src/classes/color.ts");

class Random {
    static colorGray(arg1, maxValue, minAlpha, maxAlpha) {
        var _a, _b, _c, _d, _e, _f;
        const range = typeof arg1 === "object"
            ? arg1
            : {
                value: { min: arg1, max: maxValue },
                alpha: { min: minAlpha, max: maxAlpha },
            };
        return _color__WEBPACK_IMPORTED_MODULE_0__.Color.gray(Random.int((_b = (_a = range.value) === null || _a === void 0 ? void 0 : _a.min) !== null && _b !== void 0 ? _b : 0, (_d = (_c = range.value) === null || _c === void 0 ? void 0 : _c.max) !== null && _d !== void 0 ? _d : 255), range.alpha === undefined ||
            (range.alpha.min === undefined && range.alpha.max === undefined)
            ? undefined
            : Random.float((_e = range.alpha.min) !== null && _e !== void 0 ? _e : 0, (_f = range.alpha.max) !== null && _f !== void 0 ? _f : 1));
    }
    static colorHSL(arg1, maxHue, minSaturation, maxSaturation, minLightness, maxLightness, minAlpha, maxAlpha) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const ranges = typeof arg1 === "object"
            ? arg1
            : {
                hue: {
                    min: arg1,
                    max: maxHue,
                },
                saturation: { min: minSaturation, max: maxSaturation },
                lightness: { min: minLightness, max: maxLightness },
                alpha: { min: minAlpha, max: maxAlpha },
            };
        return _color__WEBPACK_IMPORTED_MODULE_0__.Color.hsl(Random.int((_b = (_a = ranges.hue) === null || _a === void 0 ? void 0 : _a.min) !== null && _b !== void 0 ? _b : 0, (_d = (_c = ranges.hue) === null || _c === void 0 ? void 0 : _c.max) !== null && _d !== void 0 ? _d : 360), Random.int((_f = (_e = ranges.saturation) === null || _e === void 0 ? void 0 : _e.min) !== null && _f !== void 0 ? _f : 0, (_h = (_g = ranges.saturation) === null || _g === void 0 ? void 0 : _g.max) !== null && _h !== void 0 ? _h : 100), Random.int((_k = (_j = ranges.lightness) === null || _j === void 0 ? void 0 : _j.min) !== null && _k !== void 0 ? _k : 0, (_m = (_l = ranges.lightness) === null || _l === void 0 ? void 0 : _l.max) !== null && _m !== void 0 ? _m : 100), ranges.alpha === undefined ||
            (ranges.alpha.min === undefined && ranges.alpha.max === undefined)
            ? undefined
            : Random.float((_o = ranges.alpha.min) !== null && _o !== void 0 ? _o : 0, (_p = ranges.alpha.max) !== null && _p !== void 0 ? _p : 1));
    }
    static colorRGB(arg1, maxRed, minGreen, maxGreen, minBlue, maxBlue, minAlpha, maxAlpha) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const ranges = typeof arg1 === "object"
            ? arg1
            : {
                red: {
                    min: arg1,
                    max: maxRed,
                },
                green: { min: minGreen, max: maxGreen },
                blue: { min: minBlue, max: maxBlue },
                alpha: { min: minAlpha, max: maxAlpha },
            };
        return _color__WEBPACK_IMPORTED_MODULE_0__.Color.rgb(Random.int((_b = (_a = ranges.red) === null || _a === void 0 ? void 0 : _a.min) !== null && _b !== void 0 ? _b : 0, (_d = (_c = ranges.red) === null || _c === void 0 ? void 0 : _c.max) !== null && _d !== void 0 ? _d : 255), Random.int((_f = (_e = ranges.green) === null || _e === void 0 ? void 0 : _e.min) !== null && _f !== void 0 ? _f : 0, (_h = (_g = ranges.green) === null || _g === void 0 ? void 0 : _g.max) !== null && _h !== void 0 ? _h : 255), Random.int((_k = (_j = ranges.blue) === null || _j === void 0 ? void 0 : _j.min) !== null && _k !== void 0 ? _k : 0, (_m = (_l = ranges.blue) === null || _l === void 0 ? void 0 : _l.max) !== null && _m !== void 0 ? _m : 255), ranges.alpha === undefined ||
            (ranges.alpha.min === undefined && ranges.alpha.max === undefined)
            ? undefined
            : Random.int((_o = ranges.alpha.min) !== null && _o !== void 0 ? _o : 0, (_p = ranges.alpha.max) !== null && _p !== void 0 ? _p : 255));
    }
    static float(arg1, arg2) {
        const [min, max] = arg2 === undefined ? [0, arg1] : [arg1, arg2];
        return min + Math.random() * (max - min);
    }
    static of(array) {
        return array[Random.int(array.length)];
    }
    static int(...args) {
        return Math.floor(Random.float(...args));
    }
}


/***/ }),

/***/ "./src/classes/shadow.ts":
/*!*******************************!*\
  !*** ./src/classes/shadow.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shadow: () => (/* binding */ Shadow)
/* harmony export */ });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./src/classes/color.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/classes/state.ts");
/* harmony import */ var _vector2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector2d */ "./src/classes/vector2d.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Shadow_instances, _Shadow_blur, _Shadow_color, _Shadow_offset, _Shadow_changeListenerMap, _Shadow_changeListener, _Shadow_handleChange;



class Shadow {
    constructor(options) {
        _Shadow_instances.add(this);
        _Shadow_blur.set(this, (0,_state__WEBPACK_IMPORTED_MODULE_1__.createState)(0));
        _Shadow_color.set(this, _color__WEBPACK_IMPORTED_MODULE_0__.Color.gray(0));
        _Shadow_offset.set(this, _vector2d__WEBPACK_IMPORTED_MODULE_2__.Vector2D.zero);
        _Shadow_changeListenerMap.set(this, new Map());
        _Shadow_changeListener.set(this, () => {
            __classPrivateFieldGet(this, _Shadow_instances, "m", _Shadow_handleChange).call(this);
        });
        Object.assign(this, options);
    }
    addChangeListener(listener) {
        if (__classPrivateFieldGet(this, _Shadow_changeListenerMap, "f").has(listener))
            return;
        const listenerCaller = () => listener(this);
        __classPrivateFieldGet(this, _Shadow_blur, "f").addChangeListener(listenerCaller);
        __classPrivateFieldGet(this, _Shadow_offset, "f").addChangeListener(listenerCaller);
        __classPrivateFieldGet(this, _Shadow_changeListenerMap, "f").set(listener, listenerCaller);
    }
    removeChangeListener(listener) {
        const caller = __classPrivateFieldGet(this, _Shadow_changeListenerMap, "f").get(listener);
        if (caller === undefined)
            return;
        __classPrivateFieldGet(this, _Shadow_blur, "f").removeChangeListener(caller);
        __classPrivateFieldGet(this, _Shadow_offset, "f").removeChangeListener(caller);
        __classPrivateFieldGet(this, _Shadow_changeListenerMap, "f").delete(listener);
    }
    get blur() {
        return __classPrivateFieldGet(this, _Shadow_blur, "f").value;
    }
    set blur(value) {
        if (__classPrivateFieldGet(this, _Shadow_blur, "f").value === value)
            return;
        __classPrivateFieldGet(this, _Shadow_blur, "f").value = value;
        __classPrivateFieldGet(this, _Shadow_instances, "m", _Shadow_handleChange).call(this);
    }
    get color() {
        return __classPrivateFieldGet(this, _Shadow_color, "f");
    }
    set color(value) {
        if (__classPrivateFieldGet(this, _Shadow_color, "f").equals(value))
            return;
        __classPrivateFieldSet(this, _Shadow_color, value, "f");
        __classPrivateFieldGet(this, _Shadow_instances, "m", _Shadow_handleChange).call(this);
    }
    equals(other) {
        return (__classPrivateFieldGet(other, _Shadow_blur, "f") === __classPrivateFieldGet(this, _Shadow_blur, "f") &&
            __classPrivateFieldGet(other, _Shadow_color, "f").equals(__classPrivateFieldGet(this, _Shadow_color, "f")) &&
            __classPrivateFieldGet(other, _Shadow_offset, "f").equals(__classPrivateFieldGet(this, _Shadow_offset, "f")));
    }
    get offset() {
        return __classPrivateFieldGet(this, _Shadow_offset, "f");
    }
    set offset(value) {
        if (__classPrivateFieldGet(this, _Shadow_offset, "f") !== value) {
            __classPrivateFieldGet(this, _Shadow_offset, "f").removeChangeListener(__classPrivateFieldGet(this, _Shadow_changeListener, "f"));
            value.addChangeListener(__classPrivateFieldGet(this, _Shadow_changeListener, "f"));
            __classPrivateFieldSet(this, _Shadow_offset, value, "f");
        }
        if (!__classPrivateFieldGet(this, _Shadow_offset, "f").equals(value)) {
            __classPrivateFieldGet(this, _Shadow_instances, "m", _Shadow_handleChange).call(this);
        }
    }
    render(context) {
        context.shadowBlur = __classPrivateFieldGet(this, _Shadow_blur, "f").value;
        context.shadowColor = __classPrivateFieldGet(this, _Shadow_color, "f").toString();
        context.shadowOffsetX = __classPrivateFieldGet(this, _Shadow_offset, "f").x;
        context.shadowOffsetY = __classPrivateFieldGet(this, _Shadow_offset, "f").y;
    }
}
_Shadow_blur = new WeakMap(), _Shadow_color = new WeakMap(), _Shadow_offset = new WeakMap(), _Shadow_changeListenerMap = new WeakMap(), _Shadow_changeListener = new WeakMap(), _Shadow_instances = new WeakSet(), _Shadow_handleChange = function _Shadow_handleChange() {
    for (const [_, caller] of __classPrivateFieldGet(this, _Shadow_changeListenerMap, "f")) {
        caller();
    }
};


/***/ }),

/***/ "./src/classes/state.ts":
/*!******************************!*\
  !*** ./src/classes/state.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   createState: () => (/* binding */ createState)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _State_listeners, _State_value;
class State {
    constructor(initialValue) {
        _State_listeners.set(this, new Set());
        _State_value.set(this, void 0);
        __classPrivateFieldSet(this, _State_value, initialValue, "f");
    }
    addChangeListener(listener) {
        __classPrivateFieldGet(this, _State_listeners, "f").add(listener);
        return Array.from(__classPrivateFieldGet(this, _State_listeners, "f"));
    }
    removeChangeListener(listener) {
        __classPrivateFieldGet(this, _State_listeners, "f").delete(listener);
        return Array.from(__classPrivateFieldGet(this, _State_listeners, "f"));
    }
    handleChange() {
        for (const listener of __classPrivateFieldGet(this, _State_listeners, "f")) {
            listener(__classPrivateFieldGet(this, _State_value, "f"));
        }
    }
    equals(other) {
        return __classPrivateFieldGet(this, _State_value, "f") === other;
    }
    replace(other, changeListener) {
        if (this.equals(other)) {
            if (this === other)
                return other;
            this.removeChangeListener(changeListener);
        }
        other.addChangeListener(changeListener);
        changeListener(__classPrivateFieldGet(other, _State_value, "f"));
        return other;
    }
    get value() {
        return __classPrivateFieldGet(this, _State_value, "f");
    }
    set value(newValue) {
        if (__classPrivateFieldGet(this, _State_value, "f") === newValue)
            return;
        __classPrivateFieldSet(this, _State_value, newValue, "f");
        this.handleChange();
    }
}
_State_listeners = new WeakMap(), _State_value = new WeakMap();
function createState(target) {
    return new State(target);
}


/***/ }),

/***/ "./src/classes/units.ts":
/*!******************************!*\
  !*** ./src/classes/units.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Units: () => (/* binding */ Units)
/* harmony export */ });
class Units {
}
Units.size = {
    centimeters: "cm",
    millimeters: "mm",
    quarterMillimeters: "Q",
    inches: "in",
    picas: "pc",
    points: "pt",
    pixels: "px",
    percentViewportHeight: "vh",
    percentViewportWidth: "vw",
};


/***/ }),

/***/ "./src/classes/vector2d.ts":
/*!*********************************!*\
  !*** ./src/classes/vector2d.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector2D: () => (/* binding */ Vector2D),
/* harmony export */   Vector2DBase: () => (/* binding */ Vector2DBase)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/classes/state.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vector2DBase_x, _Vector2DBase_y;

class Vector2DBase {
    constructor(x, y) {
        _Vector2DBase_x.set(this, void 0);
        _Vector2DBase_y.set(this, void 0);
        __classPrivateFieldSet(this, _Vector2DBase_x, x, "f");
        __classPrivateFieldSet(this, _Vector2DBase_y, y, "f");
    }
    get x() {
        return __classPrivateFieldGet(this, _Vector2DBase_x, "f");
    }
    set x(value) {
        __classPrivateFieldSet(this, _Vector2DBase_x, value, "f");
    }
    get y() {
        return __classPrivateFieldGet(this, _Vector2DBase_y, "f");
    }
    set y(value) {
        __classPrivateFieldSet(this, _Vector2DBase_y, value, "f");
    }
}
_Vector2DBase_x = new WeakMap(), _Vector2DBase_y = new WeakMap();
class Vector2D extends _state__WEBPACK_IMPORTED_MODULE_0__.State {
    constructor(x = 0, y = x) {
        super(new Vector2DBase(x, y));
    }
    copy() {
        return new Vector2D(this.x, this.y);
    }
    equals(arg1, arg2) {
        if (typeof arg1 === "number")
            return this.x === arg1 && this.y === arg2;
        return this.x === arg1.x && this.y === arg1.y;
    }
    get inverse() {
        return Vector2D.xy(-this.x, -this.y);
    }
    static get one() {
        return new Vector2D(1);
    }
    minus(arg1, arg2) {
        if (typeof arg1 === "number")
            return Vector2D.xy(this.x - arg1, this.y - (arg2 !== null && arg2 !== void 0 ? arg2 : arg1));
        return Vector2D.xy(this.x - arg1.x, this.y - arg1.y);
    }
    plus(arg1, arg2) {
        if (typeof arg1 === "number")
            return Vector2D.xy(this.x + arg1, this.y + (arg2 !== null && arg2 !== void 0 ? arg2 : arg1));
        return Vector2D.xy(this.x + arg1.x, this.y + arg1.y);
    }
    toString() {
        const xString = Number.isInteger(this.x)
            ? this.x.toString()
            : this.x.toPrecision(3);
        const yString = Number.isInteger(this.y)
            ? this.y.toString()
            : this.y.toPrecision(3);
        return `${xString}, ${yString}`;
    }
    static xy(x, y) {
        return new Vector2D(x, y);
    }
    get x() {
        return this.value.x;
    }
    set x(value) {
        if (this.value.x === value)
            return;
        this.value.x = value;
        this.handleChange();
    }
    get y() {
        return this.value.y;
    }
    set y(value) {
        if (this.value.y === value)
            return;
        this.value.y = value;
        this.handleChange();
    }
    static get zero() {
        return new Vector2D();
    }
}


/***/ }),

/***/ "./src/elements/audio/audio.ts":
/*!*************************************!*\
  !*** ./src/elements/audio/audio.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLAudioWrapper: () => (/* binding */ HTMLAudioWrapper)
/* harmony export */ });
/* harmony import */ var _document_domBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../document/domBase */ "./src/elements/document/domBase.ts");

class HTMLAudioWrapper extends (0,_document_domBase__WEBPACK_IMPORTED_MODULE_0__.createHTMLElementWrapperConstructor)("audio") {
}


/***/ }),

/***/ "./src/elements/document/container.ts":
/*!********************************************!*\
  !*** ./src/elements/document/container.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentContainerWrapper: () => (/* binding */ DocumentContainerWrapper)
/* harmony export */ });
/* harmony import */ var _mixins_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/children */ "./src/mixins/children.ts");
/* harmony import */ var _domBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domBase */ "./src/elements/document/domBase.ts");


class DocumentContainerWrapper extends (0,_mixins_children__WEBPACK_IMPORTED_MODULE_0__.documentChildren)((0,_domBase__WEBPACK_IMPORTED_MODULE_1__.createHTMLElementWrapperConstructor)("div")) {
}


/***/ }),

/***/ "./src/elements/document/domBase.ts":
/*!******************************************!*\
  !*** ./src/elements/document/domBase.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHTMLElementWrapperConstructor: () => (/* binding */ createHTMLElementWrapperConstructor),
/* harmony export */   createRoot: () => (/* binding */ createRoot),
/* harmony export */   createWrappedController: () => (/* binding */ createWrappedController)
/* harmony export */ });
/* harmony import */ var _mixable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixable */ "./src/elements/mixable.ts");
/* harmony import */ var _visual_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visual/canvas */ "./src/elements/visual/canvas.ts");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "./src/elements/document/container.ts");
/* harmony import */ var _visual_svgSVG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visual/svgSVG */ "./src/elements/visual/svgSVG.ts");
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/state */ "./src/classes/state.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};





function createHTMLElementWrapperConstructor(tag) {
    var _HTMLElementWrapper_element, _a;
    return _a = class HTMLElementWrapper {
            constructor(...args) {
                _HTMLElementWrapper_element.set(this, void 0);
                const element = document.createElement(tag);
                __classPrivateFieldSet(this, _HTMLElementWrapper_element, element, "f");
            }
            canvas2D(options) {
                const canvasController = (0,_mixable__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)(_visual_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas2DCanvasElement, options);
                this.element.appendChild(canvasController);
                return canvasController;
            }
            createWrappedChild(WrapperConstructor, options) {
                const controller = createWrappedController(WrapperConstructor);
                this.element.appendChild(controller.element);
                Object.assign(controller, options);
                return controller;
            }
            get element() {
                return __classPrivateFieldGet(this, _HTMLElementWrapper_element, "f");
            }
            get style() {
                return __classPrivateFieldGet(this, _HTMLElementWrapper_element, "f").style;
            }
            set style(declaration) {
                Object.assign(__classPrivateFieldGet(this, _HTMLElementWrapper_element, "f").style, declaration);
            }
            svg(options) {
                const svgSVGController = (0,_mixable__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)(_visual_svgSVG__WEBPACK_IMPORTED_MODULE_3__.SVGSVGController, options);
                this.element.appendChild(svgSVGController);
                return svgSVGController;
            }
        },
        _HTMLElementWrapper_element = new WeakMap(),
        _a;
}
const createStateListener = (state, changeListener) => ({ state, changeListener });
function createWrappedController(WrapperConstructor) {
    const wrapper = new WrapperConstructor();
    const { element } = wrapper;
    const stateMap = new Map();
    function applyTemplate(strings, ...values) {
        for (const [index, str] of strings.entries()) {
            const textNode = new Text(str);
            element.appendChild(textNode);
            if (index < values.length) {
                const value = values[index];
                if (value instanceof _classes_state__WEBPACK_IMPORTED_MODULE_4__.State) {
                    let mutableTextNode = new Text(value.value);
                    element.appendChild(mutableTextNode);
                    const stateListener = createStateListener(value, (newValue) => {
                        const newText = new Text(newValue);
                        element.replaceChild(newText, mutableTextNode);
                        mutableTextNode = newText;
                    });
                    value.addChangeListener(stateListener.changeListener);
                }
                else {
                    const neighborNode = value instanceof Node ? value : new Text(value);
                    element.appendChild(neighborNode);
                }
            }
        }
        return controller;
    }
    const controller = new Proxy(applyTemplate, {
        get(_, propertyKey) {
            const wrapperValue = Reflect.get(wrapper, propertyKey);
            if (wrapperValue !== undefined) {
                if (typeof wrapperValue === "function")
                    return wrapperValue.bind(wrapper);
                return wrapperValue;
            }
            const elementValue = Reflect.get(element, propertyKey);
            if (typeof elementValue === "function")
                return elementValue.bind(element);
            return elementValue;
        },
        set(_, propertyKey, value) {
            const oldStateListener = stateMap.get(propertyKey);
            if (oldStateListener !== undefined) {
                oldStateListener.state.removeChangeListener(oldStateListener.changeListener);
            }
            if (propertyKey in wrapper) {
                if (value instanceof _classes_state__WEBPACK_IMPORTED_MODULE_4__.State) {
                    const newStateListener = createStateListener(value, (newValue) => {
                        Reflect.set(wrapper, propertyKey, newValue);
                    });
                    value.addChangeListener(newStateListener.changeListener);
                    stateMap.set(propertyKey, newStateListener);
                    return Reflect.set(wrapper, propertyKey, value.value);
                }
                return Reflect.set(wrapper, propertyKey, value);
            }
            if (value instanceof _classes_state__WEBPACK_IMPORTED_MODULE_4__.State) {
                const newStateListener = createStateListener(value, (newValue) => {
                    Reflect.set(element, propertyKey, newValue);
                });
                value.addChangeListener(newStateListener.changeListener);
                stateMap.set(propertyKey, newStateListener);
                return Reflect.set(element, propertyKey, value.value);
            }
            return Reflect.set(element, propertyKey, value);
        },
    });
    return controller;
}
function createRoot(rootParent = document.body) {
    if (rootParent === undefined)
        throw new Error(`Root element's parent is undefined. Make sure your script runs after the DOM content loads. You can do this by adding the 'defer' attribute.`);
    const rootController = createWrappedController(_container__WEBPACK_IMPORTED_MODULE_2__.DocumentContainerWrapper);
    rootParent.appendChild(rootController.element);
    return rootController;
}


/***/ }),

/***/ "./src/elements/document/paragraph.ts":
/*!********************************************!*\
  !*** ./src/elements/document/paragraph.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentParagraphWrapper: () => (/* binding */ DocumentParagraphWrapper)
/* harmony export */ });
/* harmony import */ var _mixins_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/children */ "./src/mixins/children.ts");
/* harmony import */ var _domBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domBase */ "./src/elements/document/domBase.ts");


class DocumentParagraphWrapper extends (0,_mixins_children__WEBPACK_IMPORTED_MODULE_0__.documentChildren)((0,_domBase__WEBPACK_IMPORTED_MODULE_1__.createHTMLElementWrapperConstructor)("p")) {
}


/***/ }),

/***/ "./src/elements/document/span.ts":
/*!***************************************!*\
  !*** ./src/elements/document/span.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentSpanWrapper: () => (/* binding */ DocumentSpanWrapper)
/* harmony export */ });
/* harmony import */ var _mixins_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/children */ "./src/mixins/children.ts");
/* harmony import */ var _domBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domBase */ "./src/elements/document/domBase.ts");


class DocumentSpanWrapper extends (0,_mixins_children__WEBPACK_IMPORTED_MODULE_0__.documentChildren)((0,_domBase__WEBPACK_IMPORTED_MODULE_1__.createHTMLElementWrapperConstructor)("span")) {
}


/***/ }),

/***/ "./src/elements/mixable.ts":
/*!*********************************!*\
  !*** ./src/elements/mixable.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHTMLElement: () => (/* binding */ CustomHTMLElement),
/* harmony export */   createCustomElement: () => (/* binding */ createCustomElement)
/* harmony export */ });
/* harmony import */ var _utlities_camelToKebab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utlities/camelToKebab */ "./src/utlities/camelToKebab.ts");

class CustomHTMLElement extends HTMLElement {
    constructor(...args) {
        super();
    }
    attributeChangedCallback(name, oldValue, newValue) { }
    /**
     * @private
     */
    createChild(ElementClass, options) {
        const element = createCustomElement(ElementClass, options);
        this.appendChild(element);
        return element;
    }
    /**
     * @private
     */
    registerChange(propertyName, newValue) {
        const attributeName = (0,_utlities_camelToKebab__WEBPACK_IMPORTED_MODULE_0__.camelToKebabCase)(propertyName);
        const currentAttributeValue = this.getAttribute(attributeName);
        const stringValue = String(newValue);
        if (currentAttributeValue === stringValue)
            return;
        if (newValue === null)
            this.removeAttribute(attributeName);
        else
            this.setAttribute(attributeName, stringValue);
    }
}
CustomHTMLElement.observedAttributes = [];
function createCustomElement(ElementClass, options) {
    const element = document.createElement(ElementClass.tag);
    Object.assign(element, options);
    return element;
}


/***/ }),

/***/ "./src/elements/visual/bezier.ts":
/*!***************************************!*\
  !*** ./src/elements/visual/bezier.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DBezier: () => (/* binding */ Canvas2DBezier),
/* harmony export */   Canvas2DShapeBezier: () => (/* binding */ Canvas2DShapeBezier)
/* harmony export */ });
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _mixins_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/fill */ "./src/mixins/fill.ts");
/* harmony import */ var _mixins_stroke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/stroke */ "./src/mixins/stroke.ts");
/* harmony import */ var _mixins_fromTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/fromTo */ "./src/mixins/fromTo.ts");
/* harmony import */ var _mixins_transform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/transform */ "./src/mixins/transform.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};






function hasControlPoints(Base) {
    var _controlA, _controlB, _a;
    return _a = class extends (0,_mixins_fromTo__WEBPACK_IMPORTED_MODULE_3__.hasTo)(Base) {
            constructor() {
                super(...arguments);
                _controlA.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.zero);
                _controlB.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.zero);
            }
            /**
             * Controls the shape at the beginning of the curve.
             *
             * @attr control-a
             * @reflect
             */
            get controlA() {
                return __classPrivateFieldGet(this, _controlA, "f");
            }
            set controlA(value) {
                if (__classPrivateFieldGet(this, _controlA, "f").equals(value))
                    return;
                this.registerChange("controlA", (__classPrivateFieldSet(this, _controlA, value, "f")));
            }
            /**
             * Controls the shape at the end of the curve.
             *
             * @attr control-b
             * @reflect
             */
            get controlB() {
                return __classPrivateFieldGet(this, _controlB, "f");
            }
            set controlB(value) {
                if (__classPrivateFieldGet(this, _controlB, "f").equals(value))
                    return;
                this.registerChange("controlB", (__classPrivateFieldSet(this, _controlB, value, "f")));
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (newValue === null)
                    return super.attributeChangedCallback(name, oldValue, newValue);
                switch (name) {
                    case "control-a":
                        this.controlA = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_5__.attributeParser.Vector2D(newValue);
                        return;
                    case "control-b":
                        this.controlB = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_5__.attributeParser.Vector2D(newValue);
                        return;
                    default:
                        return super.attributeChangedCallback(name, oldValue, newValue);
                }
            }
        },
        _controlA = new WeakMap(),
        _controlB = new WeakMap(),
        _a.observedAttributes = [
            ...Base.observedAttributes,
            "control-a",
            "control-b",
        ],
        _a;
}
class Canvas2DShapeBezier extends hasControlPoints(_mixins_transform__WEBPACK_IMPORTED_MODULE_4__.C2DShapePartTransformed) {
    static get tag() {
        return "c2d-shape-bezier";
    }
    render(canvas2D) {
        super.render(canvas2D);
        const { controlA, controlB, to } = this;
        canvas2D.context.bezierCurveTo(controlA.x, controlA.y, controlB.x, controlB.y, to.x, to.y);
        this.afterRender(canvas2D);
    }
}
customElements.define("c2d-shape-bezier", Canvas2DShapeBezier);
class Canvas2DBezier extends (0,_mixins_fill__WEBPACK_IMPORTED_MODULE_1__.c2dFill)((0,_mixins_stroke__WEBPACK_IMPORTED_MODULE_2__.c2dStroke)((0,_mixins_fromTo__WEBPACK_IMPORTED_MODULE_3__.hasFrom)(hasControlPoints(_mixins_transform__WEBPACK_IMPORTED_MODULE_4__.C2DStandaloneTransformed)))) {
    static get tag() {
        return "c2d-bezier";
    }
    render(canvas2D) {
        super.render(canvas2D);
        const { controlA, controlB, from, to } = this;
        canvas2D.context.moveTo(from.x, from.y);
        canvas2D.context.bezierCurveTo(controlA.x, controlA.y, controlB.x, controlB.y, to.x, to.y);
        this.afterRender(canvas2D);
    }
}
customElements.define("c2d-bezier", Canvas2DBezier);


/***/ }),

/***/ "./src/elements/visual/c2dBase.ts":
/*!****************************************!*\
  !*** ./src/elements/visual/c2dBase.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C2DBase: () => (/* binding */ C2DBase)
/* harmony export */ });
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _mixable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixable */ "./src/elements/mixable.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ "./src/elements/visual/canvas.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _C2DBase_eventProxy, _C2DBase_everyFrame;



class C2DBase extends _mixable__WEBPACK_IMPORTED_MODULE_1__.CustomHTMLElement {
    constructor() {
        super(...arguments);
        _C2DBase_eventProxy.set(this, (() => {
            const element = this;
            return new Proxy({}, {
                get(_, eventName) {
                    return (listener) => element.addEventListener(eventName, listener);
                },
            });
        })());
        _C2DBase_everyFrame.set(this, null);
    }
    /**
     * The <c2d-canvas> element that is rendering this element. The <c2d-canvas>
     * will be an ancestor of this element.
     */
    get canvas() {
        const { parentElement } = this;
        if (parentElement === null || parentElement instanceof C2DBase === false)
            throw new Error("Canvas2D renderable is not a child of a Canvas2DCanvas");
        if (parentElement instanceof _canvas__WEBPACK_IMPORTED_MODULE_2__.Canvas2DCanvasElement)
            return parentElement;
        return parentElement.canvas;
    }
    /**
     * Function called before rendering. The function has one parameter: the
     * current frame number.
     */
    get everyFrame() {
        return __classPrivateFieldGet(this, _C2DBase_everyFrame, "f");
    }
    set everyFrame(updater) {
        __classPrivateFieldSet(this, _C2DBase_everyFrame, updater, "f");
    }
    /**
     * Interface for adding event listeners with alternative syntax. For example,
     * element.addEventListener("click", listener) becomes
     * element.listen.click(listener).
     */
    get listen() {
        return __classPrivateFieldGet(this, _C2DBase_eventProxy, "f");
    }
    /**
     * Scales a vector by the device's pixel ratio.
     */
    scaleByPixelRatio(vector) {
        const point = new DOMPointReadOnly(vector.x, vector.y).matrixTransform(new DOMMatrix().scale(devicePixelRatio, devicePixelRatio));
        return _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.xy(point.x, point.y);
    }
}
_C2DBase_eventProxy = new WeakMap(), _C2DBase_everyFrame = new WeakMap();


/***/ }),

/***/ "./src/elements/visual/canvas.ts":
/*!***************************************!*\
  !*** ./src/elements/visual/canvas.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DCanvasElement: () => (/* binding */ Canvas2DCanvasElement)
/* harmony export */ });
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _classes_click__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/click */ "./src/classes/click.ts");
/* harmony import */ var _classes_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/keyboard */ "./src/classes/keyboard.ts");
/* harmony import */ var _classes_mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/mouse */ "./src/classes/mouse.ts");
/* harmony import */ var _mixins_children__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/children */ "./src/mixins/children.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
/* harmony import */ var _c2dBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./c2dBase */ "./src/elements/visual/c2dBase.ts");
/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderable */ "./src/elements/visual/renderable.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Canvas2DCanvasElement_instances, _Canvas2DCanvasElement_animating, _Canvas2DCanvasElement_background, _Canvas2DCanvasElement_clickTracker, _Canvas2DCanvasElement_context, _Canvas2DCanvasElement_deltaTime, _Canvas2DCanvasElement_devicePixelRatio, _Canvas2DCanvasElement_frame, _Canvas2DCanvasElement_keyboardTracker, _Canvas2DCanvasElement_lastFrameTime, _Canvas2DCanvasElement_mouseTracker, _Canvas2DCanvasElement_renderEvents, _Canvas2DCanvasElement_renderQueued, _Canvas2DCanvasElement_setAlpha, _Canvas2DCanvasElement_waitFor, _Canvas2DCanvasElement_render, _Canvas2DCanvasElement_updateScale;








class Canvas2DCanvasElement extends (0,_mixins_children__WEBPACK_IMPORTED_MODULE_4__.c2dStandaloneChildren)(_c2dBase__WEBPACK_IMPORTED_MODULE_6__.C2DBase) {
    static get tag() {
        return "c2d-canvas";
    }
    constructor() {
        super();
        _Canvas2DCanvasElement_instances.add(this);
        _Canvas2DCanvasElement_animating.set(this, false);
        _Canvas2DCanvasElement_background.set(this, "none");
        _Canvas2DCanvasElement_clickTracker.set(this, void 0);
        _Canvas2DCanvasElement_context.set(this, void 0);
        _Canvas2DCanvasElement_deltaTime.set(this, 0);
        _Canvas2DCanvasElement_devicePixelRatio.set(this, void 0);
        _Canvas2DCanvasElement_frame.set(this, 0);
        _Canvas2DCanvasElement_keyboardTracker.set(this, new _classes_keyboard__WEBPACK_IMPORTED_MODULE_2__.KeyboardTracker());
        _Canvas2DCanvasElement_lastFrameTime.set(this, -1);
        _Canvas2DCanvasElement_mouseTracker.set(this, void 0);
        _Canvas2DCanvasElement_renderEvents.set(this, new Set());
        _Canvas2DCanvasElement_renderQueued.set(this, false);
        _Canvas2DCanvasElement_setAlpha.set(this, null);
        _Canvas2DCanvasElement_waitFor.set(this, new Set());
        const shadowRoot = this.attachShadow({ mode: "open" });
        const canvas = document.createElement("canvas");
        shadowRoot.appendChild(canvas);
        const context = canvas.getContext("2d");
        if (context === null)
            throw new Error("Null context");
        __classPrivateFieldSet(this, _Canvas2DCanvasElement_context, context, "f");
        __classPrivateFieldSet(this, _Canvas2DCanvasElement_mouseTracker, new _classes_mouse__WEBPACK_IMPORTED_MODULE_3__.MouseTracker(this.domCanvas), "f");
        __classPrivateFieldSet(this, _Canvas2DCanvasElement_clickTracker, new _classes_click__WEBPACK_IMPORTED_MODULE_1__.ClickTracker(this.domCanvas), "f");
        __classPrivateFieldSet(this, _Canvas2DCanvasElement_devicePixelRatio, window.devicePixelRatio, "f");
    }
    /**
     * @private
     */
    addEventListener(type, listener, options) {
        switch (type) {
            case "keydown":
            case "keyup":
                window.addEventListener(type, listener, options);
                break;
            default:
                super.addEventListener(type, listener, options);
        }
    }
    /**
     * Transparency applied to all shapes and images on this canvas. 0.0 is fully
     * transparent, and 1.0 is fully opaque. This does not apply to the background.
     */
    get alpha() {
        var _a;
        /*
        The rendering context's globalAlpha property does not retain values set
        before the canvas is connected, so the private property is here to allow the
        property to be set when creating the canvas.
        */
        return (_a = __classPrivateFieldGet(this, _Canvas2DCanvasElement_setAlpha, "f")) !== null && _a !== void 0 ? _a : this.context.globalAlpha;
    }
    set alpha(value) {
        this.registerChange("alpha", (this.context.globalAlpha = __classPrivateFieldSet(this, _Canvas2DCanvasElement_setAlpha, value, "f")));
    }
    /**
     * True if the canvas is rendering animation.
     */
    get animating() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_animating, "f");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== null) {
            switch (name) {
                case "alpha":
                    this.alpha = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_5__.attributeParser.number(newValue);
                    break;
                case "width":
                    this.width = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_5__.attributeParser.number(newValue);
                    break;
                case "height":
                    this.height = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_5__.attributeParser.number(newValue);
                    break;
                case "background":
                    this.background = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_5__.attributeParser.Color(newValue);
                    break;
            }
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    /**
     * At the beginning of each frame, the canvas renders its background using
     * this style. It may be a Color or Gradient. When set to "none", the canvas
     * will not render a background. This will result in the next frame being
     * rendered on top of the last frame's contents.
     *
     * @attr
     * @reflect
     */
    get background() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_background, "f");
    }
    set background(value) {
        if (__classPrivateFieldGet(this, _Canvas2DCanvasElement_background, "f").toString() === value.toString())
            return;
        this.registerChange("background", (__classPrivateFieldSet(this, _Canvas2DCanvasElement_background, value, "f")));
    }
    /**
     * Center point of the canvas.
     */
    get center() {
        return _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.xy(this.width / 2, this.height / 2);
    }
    connectedCallback() {
        const pixelRatioQuery = `(resolution: ${window.devicePixelRatio}dppx)`;
        const media = window.matchMedia(pixelRatioQuery);
        media.addEventListener("change", __classPrivateFieldGet(this, _Canvas2DCanvasElement_instances, "m", _Canvas2DCanvasElement_updateScale).bind(this));
        __classPrivateFieldGet(this, _Canvas2DCanvasElement_instances, "m", _Canvas2DCanvasElement_updateScale).call(this);
        document.addEventListener("DOMContentLoaded", this.queueRender.bind(this));
        this.addEventListener("change", this.queueRender.bind(this));
        /*
        The rendering context's globalAlpha property does not retain values set
        before the canvas is connected, so this is here to allow the property to be
        set when creating the canvas.
        */
        this.alpha = this.alpha;
    }
    get keyDown() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_keyboardTracker, "f").down;
    }
    get domCanvas() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_context, "f").canvas;
    }
    get clicked() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_clickTracker, "f").clicked;
    }
    get clickPosition() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_clickTracker, "f");
    }
    get context() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_context, "f");
    }
    /**
     * Time passed the previous and current frame.
     */
    get deltaTime() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_deltaTime, "f");
    }
    get everyFrame() {
        return super.everyFrame;
    }
    set everyFrame(updater) {
        super.everyFrame = updater;
        if (updater === null)
            return;
        __classPrivateFieldSet(this, _Canvas2DCanvasElement_animating, true, "f");
        this.queueRender();
    }
    get frame() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_frame, "f");
    }
    keyHeld(...args) {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_keyboardTracker, "f").keyHeld(...args);
    }
    keyPreviouslyHeld(...args) {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_keyboardTracker, "f").keyPreviouslyHeld(...args);
    }
    get lastKey() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_keyboardTracker, "f").last;
    }
    get mouse() {
        return __classPrivateFieldGet(this, _Canvas2DCanvasElement_mouseTracker, "f");
    }
    queueRender() {
        if (__classPrivateFieldGet(this, _Canvas2DCanvasElement_renderQueued, "f") || __classPrivateFieldGet(this, _Canvas2DCanvasElement_waitFor, "f").size)
            return;
        __classPrivateFieldSet(this, _Canvas2DCanvasElement_renderQueued, true, "f");
        requestAnimationFrame((time) => {
            __classPrivateFieldSet(this, _Canvas2DCanvasElement_deltaTime, time - __classPrivateFieldGet(this, _Canvas2DCanvasElement_lastFrameTime, "f"), "f");
            __classPrivateFieldSet(this, _Canvas2DCanvasElement_lastFrameTime, time, "f");
            __classPrivateFieldGet(this, _Canvas2DCanvasElement_instances, "m", _Canvas2DCanvasElement_render).call(this);
        });
    }
    /**
     * The width of the canvas element in pixels divided by the device's pixel ratio.
     *
     * @attr
     * @reflect
     */
    get width() {
        return this.domCanvas.width / devicePixelRatio;
    }
    set width(value) {
        const { devicePixelRatio } = window;
        if (value === this.domCanvas.width / devicePixelRatio)
            return;
        this.domCanvas.width = value * devicePixelRatio;
        this.registerChange("width", value);
    }
    /**
     * The height of the canvas element in pixels divided by the device's pixel ratio.
     *
     * @attr
     * @reflect
     */
    get height() {
        return this.domCanvas.height / devicePixelRatio;
    }
    set height(value) {
        const { devicePixelRatio } = window;
        if (value === this.domCanvas.height / devicePixelRatio)
            return;
        this.domCanvas.height = value * devicePixelRatio;
        this.registerChange("height", value);
    }
    registerChange(propertyName, newValue) {
        super.registerChange(propertyName, newValue);
        this.queueRender();
    }
    renderOn(eventName) {
        if (__classPrivateFieldGet(this, _Canvas2DCanvasElement_renderEvents, "f").has(eventName))
            return;
        this.domCanvas.addEventListener(eventName, this.queueRender.bind(this));
        __classPrivateFieldGet(this, _Canvas2DCanvasElement_renderEvents, "f").add(eventName);
    }
    waitFor(element, eventName = "load") {
        __classPrivateFieldGet(this, _Canvas2DCanvasElement_waitFor, "f").add(element);
        element.addEventListener(eventName, () => {
            __classPrivateFieldGet(this, _Canvas2DCanvasElement_waitFor, "f").delete(element);
            if (__classPrivateFieldGet(this, _Canvas2DCanvasElement_waitFor, "f").size === 0)
                this.queueRender();
        });
    }
}
_Canvas2DCanvasElement_animating = new WeakMap(), _Canvas2DCanvasElement_background = new WeakMap(), _Canvas2DCanvasElement_clickTracker = new WeakMap(), _Canvas2DCanvasElement_context = new WeakMap(), _Canvas2DCanvasElement_deltaTime = new WeakMap(), _Canvas2DCanvasElement_devicePixelRatio = new WeakMap(), _Canvas2DCanvasElement_frame = new WeakMap(), _Canvas2DCanvasElement_keyboardTracker = new WeakMap(), _Canvas2DCanvasElement_lastFrameTime = new WeakMap(), _Canvas2DCanvasElement_mouseTracker = new WeakMap(), _Canvas2DCanvasElement_renderEvents = new WeakMap(), _Canvas2DCanvasElement_renderQueued = new WeakMap(), _Canvas2DCanvasElement_setAlpha = new WeakMap(), _Canvas2DCanvasElement_waitFor = new WeakMap(), _Canvas2DCanvasElement_instances = new WeakSet(), _Canvas2DCanvasElement_render = function _Canvas2DCanvasElement_render() {
    var _a;
    var _b;
    if (__classPrivateFieldGet(this, _Canvas2DCanvasElement_waitFor, "f").size) {
        __classPrivateFieldSet(this, _Canvas2DCanvasElement_renderQueued, false, "f");
        return;
    }
    const context = __classPrivateFieldGet(this, _Canvas2DCanvasElement_context, "f");
    context.save();
    (_a = this.everyFrame) === null || _a === void 0 ? void 0 : _a.call(this, __classPrivateFieldGet(this, _Canvas2DCanvasElement_frame, "f"));
    __classPrivateFieldSet(this, _Canvas2DCanvasElement_renderQueued, false, "f");
    context.scale(devicePixelRatio, devicePixelRatio);
    if (__classPrivateFieldGet(this, _Canvas2DCanvasElement_background, "f") !== "none") {
        context.save();
        context.globalAlpha = 1;
        context.fillStyle = __classPrivateFieldGet(this, _Canvas2DCanvasElement_background, "f").toString();
        context.fillRect(0, 0, this.width, this.height);
        context.restore();
    }
    context.beginPath();
    for (const child of this.children) {
        if (child instanceof _renderable__WEBPACK_IMPORTED_MODULE_7__.Canvas2DBaseRenderable) {
            child.render(this);
        }
    }
    context.restore();
    __classPrivateFieldGet(this, _Canvas2DCanvasElement_clickTracker, "f").advanceFrame();
    __classPrivateFieldGet(this, _Canvas2DCanvasElement_keyboardTracker, "f").advanceFrame();
    __classPrivateFieldGet(this, _Canvas2DCanvasElement_mouseTracker, "f").advanceFrame();
    __classPrivateFieldSet(this, _Canvas2DCanvasElement_frame, (_b = __classPrivateFieldGet(this, _Canvas2DCanvasElement_frame, "f"), _b++, _b), "f");
    if (__classPrivateFieldGet(this, _Canvas2DCanvasElement_animating, "f"))
        this.queueRender();
}, _Canvas2DCanvasElement_updateScale = function _Canvas2DCanvasElement_updateScale() {
    const { devicePixelRatio: newPixelRatio } = window;
    const scaleRatio = newPixelRatio / __classPrivateFieldGet(this, _Canvas2DCanvasElement_devicePixelRatio, "f");
    this.domCanvas.width *= scaleRatio;
    this.domCanvas.height *= scaleRatio;
    this.domCanvas.style.scale = `${1 / newPixelRatio}`;
    __classPrivateFieldSet(this, _Canvas2DCanvasElement_devicePixelRatio, newPixelRatio, "f");
};
Canvas2DCanvasElement.observedAttributes = [
    ..._c2dBase__WEBPACK_IMPORTED_MODULE_6__.C2DBase.observedAttributes,
    "alpha",
    "width",
    "height",
    "background",
];


/***/ }),

/***/ "./src/elements/visual/ellipse.ts":
/*!****************************************!*\
  !*** ./src/elements/visual/ellipse.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DEllipse: () => (/* binding */ Canvas2DEllipse),
/* harmony export */   Canvas2DShapeEllipse: () => (/* binding */ Canvas2DShapeEllipse)
/* harmony export */ });
/* harmony import */ var _classes_angle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/angle */ "./src/classes/angle.ts");
/* harmony import */ var _mixins_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/fill */ "./src/mixins/fill.ts");
/* harmony import */ var _mixins_rectangleBounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/rectangleBounds */ "./src/mixins/rectangleBounds.ts");
/* harmony import */ var _mixins_stroke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/stroke */ "./src/mixins/stroke.ts");
/* harmony import */ var _mixins_transform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/transform */ "./src/mixins/transform.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};





function renderEllipse(Base) {
    var _startAngle, _endAngle, _a;
    return _a = class extends (0,_mixins_rectangleBounds__WEBPACK_IMPORTED_MODULE_2__.c2dRectangleBounds)(Base, "center") {
            constructor(...args) {
                super(...args);
                _startAngle.set(this, _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.zero);
                _endAngle.set(this, _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.radians(Math.PI * 2));
                super.origin = "center";
            }
            render(canvas2D) {
                super.render(canvas2D);
                const { offset: position, width, height } = this;
                canvas2D.context.ellipse(position.x, position.y, width / 2, height / 2, 0, __classPrivateFieldGet(this, _startAngle, "f").radians, __classPrivateFieldGet(this, _endAngle, "f").radians);
                this.afterRender(canvas2D);
            }
            renderRadialGradient(context, gradient) {
                const { offset: { x, y }, width, height, } = this;
                const radius = Math.max(width, height) / 2;
                return gradient.render(context, x, y, radius);
            }
            get startAngle() {
                return __classPrivateFieldGet(this, _startAngle, "f");
            }
            set startAngle(value) {
                if (__classPrivateFieldGet(this, _startAngle, "f").equals(value))
                    return;
                this.registerChange("startAngle", (__classPrivateFieldSet(this, _startAngle, value, "f")));
            }
            get endAngle() {
                return __classPrivateFieldGet(this, _endAngle, "f");
            }
            set endAngle(value) {
                if (__classPrivateFieldGet(this, _endAngle, "f").equals(value))
                    return;
                this.registerChange("endAngle", (__classPrivateFieldSet(this, _endAngle, value, "f")));
            }
        },
        _startAngle = new WeakMap(),
        _endAngle = new WeakMap(),
        _a;
}
class Canvas2DEllipse extends renderEllipse((0,_mixins_stroke__WEBPACK_IMPORTED_MODULE_3__.c2dStroke)((0,_mixins_fill__WEBPACK_IMPORTED_MODULE_1__.c2dFill)(_mixins_transform__WEBPACK_IMPORTED_MODULE_4__.C2DStandaloneTransformed))) {
    static get tag() {
        return "c2d-ellipse";
    }
}
customElements.define("c2d-ellipse", Canvas2DEllipse);
class Canvas2DShapeEllipse extends renderEllipse(_mixins_transform__WEBPACK_IMPORTED_MODULE_4__.C2DShapePartTransformed) {
    static get tag() {
        return "c2d-shape-ellipse";
    }
}
customElements.define("c2d-shape-ellipse", Canvas2DShapeEllipse);


/***/ }),

/***/ "./src/elements/visual/image.ts":
/*!**************************************!*\
  !*** ./src/elements/visual/image.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DImage: () => (/* binding */ Canvas2DImage)
/* harmony export */ });
/* harmony import */ var _mixins_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/transform */ "./src/mixins/transform.ts");
/* harmony import */ var _mixins_visualMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/visualMedia */ "./src/mixins/visualMedia.ts");


class Canvas2DImage extends (0,_mixins_visualMedia__WEBPACK_IMPORTED_MODULE_1__.rendersVisualMedia)(_mixins_transform__WEBPACK_IMPORTED_MODULE_0__.C2DStandaloneTransformed, "img") {
    static get tag() {
        return "c2d-image";
    }
}
customElements.define("c2d-image", Canvas2DImage);


/***/ }),

/***/ "./src/elements/visual/line.ts":
/*!*************************************!*\
  !*** ./src/elements/visual/line.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DLine: () => (/* binding */ Canvas2DLine),
/* harmony export */   Canvas2DShapeLine: () => (/* binding */ Canvas2DShapeLine)
/* harmony export */ });
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _mixins_stroke__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/stroke */ "./src/mixins/stroke.ts");
/* harmony import */ var _mixins_fromTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/fromTo */ "./src/mixins/fromTo.ts");
/* harmony import */ var _mixins_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/transform */ "./src/mixins/transform.ts");




class Canvas2DShapeLine extends (0,_mixins_fromTo__WEBPACK_IMPORTED_MODULE_2__.hasTo)(_mixins_transform__WEBPACK_IMPORTED_MODULE_3__.C2DShapePartTransformed) {
    static get tag() {
        return "c2d-shape-line";
    }
    render(canvas2D) {
        super.render(canvas2D);
        const { to } = this;
        canvas2D.context.lineTo(to.x, to.y);
        this.afterRender(canvas2D);
    }
}
customElements.define("c2d-shape-line", Canvas2DShapeLine);
class Canvas2DLine extends (0,_mixins_stroke__WEBPACK_IMPORTED_MODULE_1__.c2dStroke)((0,_mixins_fromTo__WEBPACK_IMPORTED_MODULE_2__.hasTo)((0,_mixins_fromTo__WEBPACK_IMPORTED_MODULE_2__.hasFrom)(_mixins_transform__WEBPACK_IMPORTED_MODULE_3__.C2DStandaloneTransformed))) {
    static get tag() {
        return "c2d-line";
    }
    get center() {
        const width = this.to.x - this.from.x;
        const height = this.to.y - this.from.y;
        return _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.xy(this.from.x + width / 2, this.from.y + height / 2);
    }
    render(canvas2D) {
        super.render(canvas2D);
        const { from, to } = this;
        canvas2D.context.moveTo(from.x, from.y);
        canvas2D.context.lineTo(to.x, to.y);
        this.afterRender(canvas2D);
    }
    renderConicalGradient(context, gradient) {
        return gradient.render(context, this.center);
    }
    renderLinearGradient(context, gradient) {
        const { x, y } = this.from;
        const width = this.to.x - x;
        const height = this.to.y - y;
        return gradient.render(context, x, y, width, height);
    }
    renderRadialGradient(context, gradient) {
        const width = this.to.x - this.from.x;
        const height = this.to.y - this.from.y;
        const radius = Math.max(width, height) / 2;
        const { x, y } = this.center;
        return gradient.render(context, x, y, radius);
    }
}
customElements.define("c2d-line", Canvas2DLine);


/***/ }),

/***/ "./src/elements/visual/rectangle.ts":
/*!******************************************!*\
  !*** ./src/elements/visual/rectangle.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DRectangle: () => (/* binding */ Canvas2DRectangle),
/* harmony export */   Canvas2DShapeRectangle: () => (/* binding */ Canvas2DShapeRectangle),
/* harmony export */   SVGRectangleController: () => (/* binding */ SVGRectangleController)
/* harmony export */ });
/* harmony import */ var _classes_borderRadius__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/borderRadius */ "./src/classes/borderRadius.ts");
/* harmony import */ var _mixins_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/children */ "./src/mixins/children.ts");
/* harmony import */ var _mixins_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/dimensions */ "./src/mixins/dimensions.ts");
/* harmony import */ var _mixins_fill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/fill */ "./src/mixins/fill.ts");
/* harmony import */ var _mixins_rectangleBounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/rectangleBounds */ "./src/mixins/rectangleBounds.ts");
/* harmony import */ var _mixins_stroke__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/stroke */ "./src/mixins/stroke.ts");
/* harmony import */ var _mixins_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/transform */ "./src/mixins/transform.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
/* harmony import */ var _svgBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svgBase */ "./src/elements/visual/svgBase.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};









function renderCanvasRectangle(Base) {
    var _Rectangle_borderRadius, _Rectangle_borderRadiusChangeListener, _a;
    return _a = class Rectangle extends (0,_mixins_rectangleBounds__WEBPACK_IMPORTED_MODULE_4__.c2dRectangleBounds)(Base, "topLeft") {
            constructor() {
                super(...arguments);
                _Rectangle_borderRadius.set(this, null);
                _Rectangle_borderRadiusChangeListener.set(this, () => {
                    this.registerChange("borderRadius", __classPrivateFieldGet(this, _Rectangle_borderRadius, "f"));
                });
            }
            attributeChangedCallback(name, oldValue, newValue) {
                var _b;
                if (name === "border-radius") {
                    if (newValue === null)
                        this.borderRadius = null;
                    else if (newValue === ((_b = this.borderRadius) === null || _b === void 0 ? void 0 : _b.toString()))
                        return;
                    else
                        this.borderRadius = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_7__.attributeParser.BorderRadius(newValue);
                    return;
                }
                super.attributeChangedCallback(name, oldValue, newValue);
            }
            /**
             *
             */
            get borderRadius() {
                return __classPrivateFieldGet(this, _Rectangle_borderRadius, "f");
            }
            set borderRadius(value) {
                const currentBorderRadius = this.borderRadius;
                if (value === currentBorderRadius)
                    return;
                if (value === null) {
                    if (currentBorderRadius === null)
                        return;
                    currentBorderRadius.removeChangeListener(__classPrivateFieldGet(this, _Rectangle_borderRadiusChangeListener, "f"));
                    this.registerChange("borderRadius", (__classPrivateFieldSet(this, _Rectangle_borderRadius, value, "f")));
                    return;
                }
                const newBorderRadius = typeof value === "number" ? new _classes_borderRadius__WEBPACK_IMPORTED_MODULE_0__.BorderRadius(value) : value;
                if (currentBorderRadius === null) {
                    newBorderRadius.addChangeListener(__classPrivateFieldGet(this, _Rectangle_borderRadiusChangeListener, "f"));
                    this.registerChange("borderRadius", (__classPrivateFieldSet(this, _Rectangle_borderRadius, newBorderRadius, "f")));
                    return;
                }
                __classPrivateFieldSet(this, _Rectangle_borderRadius, newBorderRadius, "f");
                currentBorderRadius.replace(newBorderRadius, __classPrivateFieldGet(this, _Rectangle_borderRadiusChangeListener, "f"));
            }
            render(canvas2D) {
                super.render(canvas2D);
                const { topLeft: { x, y }, width, height, } = this;
                if (this.borderRadius === null)
                    canvas2D.context.rect(x, y, width, height);
                else
                    canvas2D.context.roundRect(x, y, width, height, this.borderRadius.toArray());
                this.afterRender(canvas2D);
            }
            renderRadialGradient(context, gradient) {
                const radius = Math.max(this.width, this.height) / 2;
                const { x, y } = this.center;
                return gradient.render(context, x, y, radius);
            }
        },
        _Rectangle_borderRadius = new WeakMap(),
        _Rectangle_borderRadiusChangeListener = new WeakMap(),
        _a.observedAttributes = [
            ...(0,_mixins_rectangleBounds__WEBPACK_IMPORTED_MODULE_4__.c2dRectangleBounds)(Base, "topLeft").observedAttributes,
            "border-radius",
        ],
        _a;
}
class Canvas2DRectangle extends renderCanvasRectangle((0,_mixins_stroke__WEBPACK_IMPORTED_MODULE_5__.c2dStroke)((0,_mixins_fill__WEBPACK_IMPORTED_MODULE_3__.c2dFill)(_mixins_transform__WEBPACK_IMPORTED_MODULE_6__.C2DStandaloneTransformed))) {
    static get tag() {
        return "c2d-rectangle";
    }
}
customElements.define("c2d-rectangle", Canvas2DRectangle);
class Canvas2DShapeRectangle extends renderCanvasRectangle(_mixins_transform__WEBPACK_IMPORTED_MODULE_6__.C2DShapePartTransformed) {
    static get tag() {
        return "c2d-shape-rectangle";
    }
}
customElements.define("c2d-shape-rectangle", Canvas2DShapeRectangle);
class SVGRectangleController extends (0,_mixins_stroke__WEBPACK_IMPORTED_MODULE_5__.svgStroke)((0,_mixins_fill__WEBPACK_IMPORTED_MODULE_3__.svgFill)((0,_mixins_dimensions__WEBPACK_IMPORTED_MODULE_2__.svgDimensions)((0,_mixins_transform__WEBPACK_IMPORTED_MODULE_6__.svgTransform)((0,_mixins_rectangleBounds__WEBPACK_IMPORTED_MODULE_4__.svgRectangleBounds)((0,_mixins_children__WEBPACK_IMPORTED_MODULE_1__.svgChildren)((0,_svgBase__WEBPACK_IMPORTED_MODULE_8__.createSVGController)("rect", "svg-rectangle")), "topLeft"))))) {
    get origin() {
        return super.origin;
    }
    set origin(value) {
        super.origin = value;
    }
}
customElements.define("svg-rectangle", SVGRectangleController);


/***/ }),

/***/ "./src/elements/visual/renderable.ts":
/*!*******************************************!*\
  !*** ./src/elements/visual/renderable.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DBaseRenderable: () => (/* binding */ Canvas2DBaseRenderable),
/* harmony export */   Canvas2DShapePartRenderable: () => (/* binding */ Canvas2DShapePartRenderable),
/* harmony export */   Canvas2DStandaloneRenderable: () => (/* binding */ Canvas2DStandaloneRenderable),
/* harmony export */   changedEvent: () => (/* binding */ changedEvent)
/* harmony export */ });
/* harmony import */ var _classes_mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/mouse */ "./src/classes/mouse.ts");
/* harmony import */ var _mixins_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/children */ "./src/mixins/children.ts");
/* harmony import */ var _c2dBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c2dBase */ "./src/elements/visual/c2dBase.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Canvas2DBaseRenderable_instances, _Canvas2DBaseRenderable_changedSinceRender, _Canvas2DBaseRenderable_clickListeners, _Canvas2DBaseRenderable_localMouse, _Canvas2DBaseRenderable_mouseListeners, _Canvas2DBaseRenderable_shadow, _Canvas2DBaseRenderable_handleClick, _Canvas2DBaseRenderable_handleMouse, _Canvas2DBaseRenderable_shadowChangeListener;



const changedEvent = new Event("change", { bubbles: true });
class Canvas2DBaseRenderable extends _c2dBase__WEBPACK_IMPORTED_MODULE_2__.C2DBase {
    constructor(...args) {
        super();
        _Canvas2DBaseRenderable_instances.add(this);
        _Canvas2DBaseRenderable_changedSinceRender.set(this, false);
        _Canvas2DBaseRenderable_clickListeners.set(this, new Set());
        _Canvas2DBaseRenderable_localMouse.set(this, new _classes_mouse__WEBPACK_IMPORTED_MODULE_0__.MouseData());
        _Canvas2DBaseRenderable_mouseListeners.set(this, new Set());
        _Canvas2DBaseRenderable_shadow.set(this, null);
        _Canvas2DBaseRenderable_shadowChangeListener.set(this, (newValue) => {
            this.registerChange("shadow", (__classPrivateFieldSet(this, _Canvas2DBaseRenderable_shadow, newValue, "f")));
        });
    }
    /**
     * @private
     */
    addEventListener(type, listener, options) {
        switch (type) {
            case "click":
                this.canvas.renderOn(type);
                __classPrivateFieldGet(this, _Canvas2DBaseRenderable_clickListeners, "f").add(listener);
                break;
            case "mousedown":
            case "mouseup":
            case "mousemove":
                this.canvas.renderOn(type);
                __classPrivateFieldGet(this, _Canvas2DBaseRenderable_mouseListeners, "f").add(listener);
                break;
            case "mouseenter":
            case "mouseout":
            case "mouseover":
                this.canvas.renderOn("mousemove");
                __classPrivateFieldGet(this, _Canvas2DBaseRenderable_mouseListeners, "f").add(listener);
                break;
        }
        super.addEventListener(type, listener, options);
    }
    /**
     * @private
     */
    renderConicalGradient(context, gradient) {
        return gradient.render(context, this.canvas.center);
    }
    /**
     * @private
     */
    renderLinearGradient(context, gradient) {
        const { width, height } = this.canvas;
        return gradient.render(context, 0, 0, width, height);
    }
    /**
     * @private
     */
    renderRadialGradient(context, gradient) {
        const { center, width, height } = this.canvas;
        const canvasRadius = Math.max(width, height) / 2;
        return gradient.render(context, center.x, center.y, canvasRadius);
    }
    /**
     * @private
     */
    removeEventListener(type, listener, options) {
        switch (type) {
            case "click":
                __classPrivateFieldGet(this, _Canvas2DBaseRenderable_clickListeners, "f").delete(listener);
                break;
            case "mousedown":
            case "mouseup":
            case "mouseenter":
            case "mouseout":
            case "mouseover":
            case "mousemove":
                __classPrivateFieldGet(this, _Canvas2DBaseRenderable_mouseListeners, "f").delete(listener);
                break;
        }
        super.removeEventListener(type, listener, options);
    }
    /**
     * @private
     */
    get changedSinceRender() {
        return __classPrivateFieldGet(this, _Canvas2DBaseRenderable_changedSinceRender, "f");
    }
    /**
     * @private
     */
    registerChange(propertyName, newValue) {
        if (!__classPrivateFieldGet(this, _Canvas2DBaseRenderable_changedSinceRender, "f")) {
            __classPrivateFieldSet(this, _Canvas2DBaseRenderable_changedSinceRender, true, "f");
            this.dispatchEvent(changedEvent);
        }
        super.registerChange(propertyName, newValue);
    }
    /**
     * @private
     */
    render(canvas2D) {
        var _a;
        const { context, frame } = canvas2D;
        context.save();
        (_a = this.everyFrame) === null || _a === void 0 ? void 0 : _a.call(this, frame);
        if (__classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadow, "f") !== null) {
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadow, "f").render(context);
        }
    }
    /**
     * @private
     */
    renderChildren(canvas2D) {
        for (const child of this.children) {
            if (child instanceof Canvas2DBaseRenderable)
                child.render(canvas2D);
        }
    }
    /**
     * @private
     */
    afterRender(canvas2D) {
        __classPrivateFieldSet(this, _Canvas2DBaseRenderable_changedSinceRender, false, "f");
        if (__classPrivateFieldGet(this, _Canvas2DBaseRenderable_clickListeners, "f").size)
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_instances, "m", _Canvas2DBaseRenderable_handleClick).call(this, canvas2D);
        if (__classPrivateFieldGet(this, _Canvas2DBaseRenderable_mouseListeners, "f").size)
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_instances, "m", _Canvas2DBaseRenderable_handleMouse).call(this, canvas2D);
        this.renderChildren(canvas2D);
        canvas2D.context.restore();
    }
    /**
     * Drop shadow rendered behind the element.
     */
    get shadow() {
        return __classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadow, "f");
    }
    set shadow(value) {
        if (__classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadow, "f") === null) {
            if (value === null)
                return;
            value.addChangeListener(__classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadowChangeListener, "f"));
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadowChangeListener, "f").call(this, value);
            return;
        }
        else if (value === null) {
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadow, "f").removeChangeListener(__classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadowChangeListener, "f"));
            this.registerChange("shadow", value);
            return;
        }
        __classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadow, "f").removeChangeListener(__classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadowChangeListener, "f"));
        value.addChangeListener(__classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadowChangeListener, "f"));
        if (!__classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadow, "f").equals(value))
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_shadowChangeListener, "f").call(this, value);
    }
}
_Canvas2DBaseRenderable_changedSinceRender = new WeakMap(), _Canvas2DBaseRenderable_clickListeners = new WeakMap(), _Canvas2DBaseRenderable_localMouse = new WeakMap(), _Canvas2DBaseRenderable_mouseListeners = new WeakMap(), _Canvas2DBaseRenderable_shadow = new WeakMap(), _Canvas2DBaseRenderable_shadowChangeListener = new WeakMap(), _Canvas2DBaseRenderable_instances = new WeakSet(), _Canvas2DBaseRenderable_handleClick = function _Canvas2DBaseRenderable_handleClick(canvas2D) {
    const { context, clickPosition: canvasClick, clicked } = canvas2D;
    if (!clicked)
        return;
    const elementClick = this.scaleByPixelRatio(canvasClick);
    const inPath = context.isPointInPath(elementClick.x, elementClick.y);
    if (inPath)
        this.dispatchEvent(new PointerEvent("click"));
}, _Canvas2DBaseRenderable_handleMouse = function _Canvas2DBaseRenderable_handleMouse(canvas2D) {
    const { context, mouse } = canvas2D;
    const inPath = context.isPointInPath(mouse.x, mouse.y);
    if (!inPath) {
        if (__classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").over === true) {
            this.dispatchEvent(new MouseEvent("mouseout"));
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").over = false;
        }
        return;
    }
    this.dispatchEvent(new MouseEvent("mouseover"));
    if (!__classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").equals(mouse))
        this.dispatchEvent(new MouseEvent("mousemove"));
    if (!__classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").over) {
        this.dispatchEvent(new MouseEvent("mouseenter"));
        __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").over = true;
    }
    for (const [index, buttonState] of mouse.buttonStates.entries()) {
        if (buttonState !== __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").buttonStates[index]) {
            if (buttonState)
                this.dispatchEvent(new MouseEvent("mousedown", { button: index }));
            else
                this.dispatchEvent(new MouseEvent("mouseup", { button: index }));
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").buttonStates[index] = buttonState;
        }
    }
};
class Canvas2DStandaloneRenderable extends (0,_mixins_children__WEBPACK_IMPORTED_MODULE_1__.c2dStandaloneChildren)(Canvas2DBaseRenderable) {
    render(canvas2D) {
        super.render(canvas2D);
        canvas2D.context.beginPath();
    }
}
class Canvas2DShapePartRenderable extends (0,_mixins_children__WEBPACK_IMPORTED_MODULE_1__.c2dShapeChildren)(Canvas2DBaseRenderable) {
}


/***/ }),

/***/ "./src/elements/visual/shape.ts":
/*!**************************************!*\
  !*** ./src/elements/visual/shape.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DShape: () => (/* binding */ Canvas2DShape)
/* harmony export */ });
/* harmony import */ var _mixins_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/fill */ "./src/mixins/fill.ts");
/* harmony import */ var _mixins_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/offset */ "./src/mixins/offset.ts");
/* harmony import */ var _mixins_stroke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/stroke */ "./src/mixins/stroke.ts");
/* harmony import */ var _mixins_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/transform */ "./src/mixins/transform.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _b, _Canvas2DShape_close;





class Canvas2DShape extends (_b = (0,_mixins_fill__WEBPACK_IMPORTED_MODULE_0__.c2dFill)((0,_mixins_stroke__WEBPACK_IMPORTED_MODULE_2__.c2dStroke)((0,_mixins_offset__WEBPACK_IMPORTED_MODULE_1__.offset)(_mixins_transform__WEBPACK_IMPORTED_MODULE_3__.C2DShapePartTransformed)))) {
    constructor() {
        super(...arguments);
        _Canvas2DShape_close.set(this, false);
    }
    static get tag() {
        return "c2d-shape";
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "close") {
            if (newValue === null)
                this.close = false;
            else
                this.close = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_4__.attributeParser.boolean(newValue);
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    get close() {
        return __classPrivateFieldGet(this, _Canvas2DShape_close, "f");
    }
    set close(value) {
        if (__classPrivateFieldGet(this, _Canvas2DShape_close, "f") === value)
            return;
        this.registerChange("close", (__classPrivateFieldSet(this, _Canvas2DShape_close, value, "f")));
    }
    render(canvas2D) {
        super.render(canvas2D);
        const { context } = canvas2D;
        context.moveTo(this.offset.x, this.offset.y);
        super.renderChildren(canvas2D);
        if (__classPrivateFieldGet(this, _Canvas2DShape_close, "f"))
            context.closePath();
        this.afterRender(canvas2D);
    }
    // This is empty to prevent double rendering children
    renderChildren(canvas2D) { }
}
_a = Canvas2DShape, _Canvas2DShape_close = new WeakMap();
Canvas2DShape.observedAttributes = [...Reflect.get(_b, "observedAttributes", _a), "close"];
customElements.define("c2d-shape", Canvas2DShape);


/***/ }),

/***/ "./src/elements/visual/svgBase.ts":
/*!****************************************!*\
  !*** ./src/elements/visual/svgBase.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSVGController: () => (/* binding */ createSVGController)
/* harmony export */ });
/* harmony import */ var _mixable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixable */ "./src/elements/mixable.ts");
/* harmony import */ var _svgSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgSVG */ "./src/elements/visual/svgSVG.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};


function createSVGController(svgTag, controllerTag) {
    var _SVGElementController_instances, _SVGElementController_main, _SVGElementController_group, _SVGElementController_attachMain, _SVGElementController_createGroup, _a;
    return _a = class SVGElementController extends _mixable__WEBPACK_IMPORTED_MODULE_0__.CustomHTMLElement {
            constructor(...args) {
                super();
                _SVGElementController_instances.add(this);
                _SVGElementController_main.set(this, void 0);
                _SVGElementController_group.set(this, null);
                __classPrivateFieldSet(this, _SVGElementController_main, document.createElementNS("http://www.w3.org/2000/svg", svgTag), "f");
            }
            addEventListener(type, listener, options) {
                return this.mainElement.addEventListener(type, listener, options);
            }
            removeEventListener(type, listener, options) {
                return this.mainElement.removeEventListener(type, listener, options);
            }
            appendChild(node) {
                var _b, _c, _d;
                if (node instanceof SVGElement) {
                    const group = (_b = __classPrivateFieldGet(this, _SVGElementController_group, "f")) !== null && _b !== void 0 ? _b : __classPrivateFieldGet(this, _SVGElementController_instances, "m", _SVGElementController_createGroup).call(this);
                    return group.appendChild(node);
                }
                if (node instanceof _a) {
                    const child = (_c = node.group) !== null && _c !== void 0 ? _c : node.mainElement;
                    const group = (_d = __classPrivateFieldGet(this, _SVGElementController_group, "f")) !== null && _d !== void 0 ? _d : __classPrivateFieldGet(this, _SVGElementController_instances, "m", _SVGElementController_createGroup).call(this);
                    group.appendChild(child);
                }
                return super.appendChild(node);
            }
            attributeChangedCallback() { }
            connectedCallback() {
                __classPrivateFieldGet(this, _SVGElementController_instances, "m", _SVGElementController_attachMain).call(this);
            }
            get group() {
                return __classPrivateFieldGet(this, _SVGElementController_group, "f");
            }
            get mainElement() {
                return __classPrivateFieldGet(this, _SVGElementController_main, "f");
            }
            /**
             * @private
             */
            _setStyleAttribute(attributeName, value) {
                const { group } = this;
                if (group === null) {
                    this.mainElement.setAttribute(attributeName, value);
                    return;
                }
                group.setAttribute(attributeName, value);
            }
            get _styleAttributes() {
                return {};
            }
            get svgContainer() {
                const { group, parentElement } = this;
                if (group !== null) {
                    const groupParent = group.parentElement;
                    if (groupParent === null)
                        return null;
                    if (groupParent instanceof SVGSVGElement)
                        return groupParent;
                }
                if (parentElement === null)
                    return null;
                const { group: parentGroup, mainElement: parentMain } = parentElement;
                if (parentGroup instanceof SVGSVGElement)
                    return parentGroup;
                if (parentMain instanceof SVGSVGElement)
                    return parentMain;
                return parentElement.svgContainer;
            }
            get svgContainerController() {
                if (this instanceof _svgSVG__WEBPACK_IMPORTED_MODULE_1__.SVGSVGController)
                    return this;
                const { parentElement } = this;
                if (parentElement === null)
                    return parentElement;
                const parentController = parentElement
                    .svgContainerController;
                if (parentController !== undefined)
                    return parentController;
                return null;
            }
        },
        _SVGElementController_main = new WeakMap(),
        _SVGElementController_group = new WeakMap(),
        _SVGElementController_instances = new WeakSet(),
        _SVGElementController_attachMain = function _SVGElementController_attachMain() {
            var _b;
            const { parentElement } = this;
            if (parentElement === null)
                return;
            const parentController = parentElement;
            const target = (_b = parentController.group) !== null && _b !== void 0 ? _b : parentController.mainElement;
            const { group } = this;
            if (group === null)
                target.appendChild(this.mainElement);
            else
                target.appendChild(group);
        },
        _SVGElementController_createGroup = function _SVGElementController_createGroup() {
            if (__classPrivateFieldGet(this, _SVGElementController_group, "f") !== null)
                return __classPrivateFieldGet(this, _SVGElementController_group, "f");
            __classPrivateFieldSet(this, _SVGElementController_group, document.createElementNS("http://www.w3.org/2000/svg", "g"), "f");
            const { parentElement } = this.mainElement;
            if (parentElement !== null)
                parentElement.appendChild(__classPrivateFieldGet(this, _SVGElementController_group, "f"));
            __classPrivateFieldGet(this, _SVGElementController_group, "f").appendChild(this.mainElement);
            for (const [propertyName, attributeName] of Object.entries(this._styleAttributes)) {
                const value = Reflect.get(this, propertyName);
                if (value === null)
                    continue;
                __classPrivateFieldGet(this, _SVGElementController_group, "f").setAttribute(attributeName, String(value));
                this.mainElement.removeAttribute(attributeName);
            }
            return __classPrivateFieldGet(this, _SVGElementController_group, "f");
        },
        _a.observedAttributes = [],
        _a.tag = controllerTag,
        _a;
}


/***/ }),

/***/ "./src/elements/visual/svgSVG.ts":
/*!***************************************!*\
  !*** ./src/elements/visual/svgSVG.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGSVGController: () => (/* binding */ SVGSVGController)
/* harmony export */ });
/* harmony import */ var _mixins_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/children */ "./src/mixins/children.ts");
/* harmony import */ var _mixins_viewBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/viewBox */ "./src/mixins/viewBox.ts");
/* harmony import */ var _svgBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgBase */ "./src/elements/visual/svgBase.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SVGSVGController_defs, _SVGSVGController_gradients;



class SVGSVGController extends (0,_mixins_viewBox__WEBPACK_IMPORTED_MODULE_1__.viewBox)((0,_mixins_children__WEBPACK_IMPORTED_MODULE_0__.svgChildren)((0,_svgBase__WEBPACK_IMPORTED_MODULE_2__.createSVGController)("svg", "svg-svg"))) {
    constructor() {
        super(...arguments);
        _SVGSVGController_defs.set(this, document.createElementNS("http://www.w3.org/2000/svg", "defs"));
        _SVGSVGController_gradients.set(this, new Set());
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "closed" });
        shadow.appendChild(this.mainElement);
        this.mainElement.appendChild(__classPrivateFieldGet(this, _SVGSVGController_defs, "f"));
        this._resizeViewBox();
    }
    _defineGradient(gradient) {
        if (__classPrivateFieldGet(this, _SVGSVGController_gradients, "f").has(gradient.svg))
            return gradient.svg.id;
        const padStart = 2;
        const idNumber = Array.from(__classPrivateFieldGet(this, _SVGSVGController_gradients, "f")).reduce((maxNum, gradient) => {
            const numString = gradient.id.slice(-padStart);
            const num = parseInt(numString);
            return Math.max(maxNum, num);
        }, 0);
        const gradientElement = gradient.svg;
        __classPrivateFieldGet(this, _SVGSVGController_defs, "f").appendChild(gradientElement);
        const id = `gradient-${idNumber.toString().padStart(padStart, "0")}`;
        __classPrivateFieldGet(this, _SVGSVGController_gradients, "f").add(gradientElement);
        gradientElement.id = id;
        return id;
    }
    download(filename = "webspinner.svg") {
        this.mainElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.mainElement.setAttribute("version", " 1.1");
        const svgString = this.mainElement.outerHTML;
        const downloadAnchor = document.createElement("a");
        downloadAnchor.download = filename;
        const blob = new Blob([svgString], { type: "image/svg" });
        const url = URL.createObjectURL(blob);
        downloadAnchor.href = url;
        downloadAnchor.click();
    }
    get svgContainer() {
        return this.mainElement;
    }
}
_SVGSVGController_defs = new WeakMap(), _SVGSVGController_gradients = new WeakMap();
customElements.define("svg-svg", SVGSVGController);


/***/ }),

/***/ "./src/elements/visual/text.ts":
/*!*************************************!*\
  !*** ./src/elements/visual/text.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DText: () => (/* binding */ Canvas2DText)
/* harmony export */ });
/* harmony import */ var _mixins_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/font */ "./src/mixins/font.ts");
/* harmony import */ var _mixins_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/fill */ "./src/mixins/fill.ts");
/* harmony import */ var _mixins_stroke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/stroke */ "./src/mixins/stroke.ts");
/* harmony import */ var _mixins_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/transform */ "./src/mixins/transform.ts");
/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderable */ "./src/elements/visual/renderable.ts");
/* harmony import */ var _mixins_offset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/offset */ "./src/mixins/offset.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Canvas2DText_align, _Canvas2DText_baseline;






class Base extends (0,_mixins_fill__WEBPACK_IMPORTED_MODULE_1__.c2dFill)((0,_mixins_stroke__WEBPACK_IMPORTED_MODULE_2__.c2dStroke)((0,_mixins_offset__WEBPACK_IMPORTED_MODULE_5__.offset)((0,_mixins_font__WEBPACK_IMPORTED_MODULE_0__.useFont)(_mixins_transform__WEBPACK_IMPORTED_MODULE_3__.C2DStandaloneTransformed)))) {
}
class Canvas2DText extends Base {
    constructor() {
        super(...arguments);
        _Canvas2DText_align.set(this, null);
        _Canvas2DText_baseline.set(this, null);
    }
    static get tag() {
        return "c2d-text";
    }
    /**
     * Horizontal alignment. Options are "center", "end", "left", "right", or "start".
     *
     * @attr
     * @reflect
     */
    get align() {
        return __classPrivateFieldGet(this, _Canvas2DText_align, "f");
    }
    set align(value) {
        if (__classPrivateFieldGet(this, _Canvas2DText_align, "f") === value)
            return;
        this.registerChange("align", (__classPrivateFieldSet(this, _Canvas2DText_align, value, "f")));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === null)
            return super.attributeChangedCallback(name, oldValue, newValue);
        switch (name) {
            case "align":
                this.align = newValue;
                return;
            case "baseline":
                this.baseline = newValue;
                return;
            default:
                return super.attributeChangedCallback(name, oldValue, newValue);
        }
    }
    get baseline() {
        return __classPrivateFieldGet(this, _Canvas2DText_baseline, "f");
    }
    set baseline(value) {
        if (__classPrivateFieldGet(this, _Canvas2DText_baseline, "f") === value)
            return;
        this.registerChange("baseline", (__classPrivateFieldSet(this, _Canvas2DText_baseline, value, "f")));
    }
    render(canvas2D) {
        super.render(canvas2D);
        const { context } = canvas2D;
        if (__classPrivateFieldGet(this, _Canvas2DText_align, "f") !== null)
            context.textAlign = __classPrivateFieldGet(this, _Canvas2DText_align, "f");
        if (__classPrivateFieldGet(this, _Canvas2DText_baseline, "f") !== null)
            context.textBaseline = __classPrivateFieldGet(this, _Canvas2DText_baseline, "f");
        if (this.fill !== "none" && this.textContent !== null)
            context.fillText(this.textContent, this.offset.x, this.offset.y);
        if (this.stroke !== "none" && this.textContent !== null)
            context.strokeText(this.textContent, this.offset.x, this.offset.y);
        this.afterRender(canvas2D);
        this.renderChildren(canvas2D);
    }
    renderLinearGradient(context, gradient) {
        var _a;
        const textToMeasure = (_a = this.textContent) !== null && _a !== void 0 ? _a : "";
        const measurements = context.measureText(textToMeasure);
        const { actualBoundingBoxAscent, actualBoundingBoxDescent, actualBoundingBoxLeft: x, actualBoundingBoxRight: y, width, } = measurements;
        const height = actualBoundingBoxDescent + actualBoundingBoxAscent;
        return gradient.render(context, x, y, width, height);
    }
    renderRadialGradient(context, gradient) {
        var _a;
        const textToMeasure = (_a = this.textContent) !== null && _a !== void 0 ? _a : "";
        const measurements = context.measureText(textToMeasure);
        const { actualBoundingBoxAscent, actualBoundingBoxDescent, actualBoundingBoxLeft, actualBoundingBoxRight, width, } = measurements;
        const height = actualBoundingBoxAscent + actualBoundingBoxDescent;
        const radius = Math.max(height, width) / 2;
        const centerX = actualBoundingBoxLeft + width / 2;
        const centerY = actualBoundingBoxRight + height / 2;
        return gradient.render(context, centerX, centerY, radius);
    }
    get textContent() {
        return super.textContent;
    }
    set textContent(value) {
        if (super.textContent === value)
            return;
        super.textContent = value;
        this.dispatchEvent(_renderable__WEBPACK_IMPORTED_MODULE_4__.changedEvent);
    }
}
_Canvas2DText_align = new WeakMap(), _Canvas2DText_baseline = new WeakMap();
Canvas2DText.observedAttributes = [
    ...Base.observedAttributes,
    "size",
    "align",
    "baseline",
    "font",
    "stretch",
];
customElements.define("c2d-text", Canvas2DText);


/***/ }),

/***/ "./src/elements/visual/video.ts":
/*!**************************************!*\
  !*** ./src/elements/visual/video.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2DVideo: () => (/* binding */ Canvas2DVideo),
/* harmony export */   HTMLVideoWrapper: () => (/* binding */ HTMLVideoWrapper)
/* harmony export */ });
/* harmony import */ var _mixins_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/transform */ "./src/mixins/transform.ts");
/* harmony import */ var _mixins_visualMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/visualMedia */ "./src/mixins/visualMedia.ts");
/* harmony import */ var _document_domBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../document/domBase */ "./src/elements/document/domBase.ts");
/* harmony import */ var _renderable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderable */ "./src/elements/visual/renderable.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Canvas2DVideo_instances, _Canvas2DVideo_frameCallbackId, _Canvas2DVideo_handleFrame;




class Canvas2DVideo extends (0,_mixins_visualMedia__WEBPACK_IMPORTED_MODULE_1__.rendersVisualMedia)(_mixins_transform__WEBPACK_IMPORTED_MODULE_0__.C2DStandaloneTransformed, "video") {
    constructor() {
        super(...arguments);
        _Canvas2DVideo_instances.add(this);
        _Canvas2DVideo_frameCallbackId.set(this, -1);
    }
    static get tag() {
        return "c2d-video";
    }
    connectedCallback() {
        super.connectedCallback();
    }
    play() {
        const promise = this.mediaElement.play();
        __classPrivateFieldGet(this, _Canvas2DVideo_instances, "m", _Canvas2DVideo_handleFrame).call(this);
        return promise;
    }
    pause() {
        this.mediaElement.cancelVideoFrameCallback(__classPrivateFieldGet(this, _Canvas2DVideo_frameCallbackId, "f"));
        return this.mediaElement.pause();
    }
    get paused() {
        return this.mediaElement.paused;
    }
    togglePlay() {
        if (this.paused)
            this.play();
        else
            this.pause();
    }
}
_Canvas2DVideo_frameCallbackId = new WeakMap(), _Canvas2DVideo_instances = new WeakSet(), _Canvas2DVideo_handleFrame = function _Canvas2DVideo_handleFrame() {
    __classPrivateFieldSet(this, _Canvas2DVideo_frameCallbackId, this.mediaElement.requestVideoFrameCallback(() => {
        this.dispatchEvent(_renderable__WEBPACK_IMPORTED_MODULE_3__.changedEvent);
        if (!this.mediaElement.paused)
            __classPrivateFieldGet(this, _Canvas2DVideo_instances, "m", _Canvas2DVideo_handleFrame).call(this);
    }), "f");
};
customElements.define("c2d-video", Canvas2DVideo);
class HTMLVideoWrapper extends (0,_document_domBase__WEBPACK_IMPORTED_MODULE_2__.createHTMLElementWrapperConstructor)("video") {
}


/***/ }),

/***/ "./src/mixins/children.ts":
/*!********************************!*\
  !*** ./src/mixins/children.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c2dShapeChildren: () => (/* binding */ c2dShapeChildren),
/* harmony export */   c2dStandaloneChildren: () => (/* binding */ c2dStandaloneChildren),
/* harmony export */   documentChildren: () => (/* binding */ documentChildren),
/* harmony export */   svgChildren: () => (/* binding */ svgChildren)
/* harmony export */ });
/* harmony import */ var _elements_mixable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/mixable */ "./src/elements/mixable.ts");
/* harmony import */ var _elements_visual_bezier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/visual/bezier */ "./src/elements/visual/bezier.ts");
/* harmony import */ var _elements_visual_ellipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/visual/ellipse */ "./src/elements/visual/ellipse.ts");
/* harmony import */ var _elements_visual_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/visual/image */ "./src/elements/visual/image.ts");
/* harmony import */ var _elements_visual_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/visual/line */ "./src/elements/visual/line.ts");
/* harmony import */ var _elements_visual_rectangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/visual/rectangle */ "./src/elements/visual/rectangle.ts");
/* harmony import */ var _elements_visual_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/visual/shape */ "./src/elements/visual/shape.ts");
/* harmony import */ var _elements_visual_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/visual/text */ "./src/elements/visual/text.ts");
/* harmony import */ var _elements_visual_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/visual/video */ "./src/elements/visual/video.ts");
/* harmony import */ var _elements_document_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elements/document/container */ "./src/elements/document/container.ts");
/* harmony import */ var _elements_document_paragraph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/document/paragraph */ "./src/elements/document/paragraph.ts");
/* harmony import */ var _elements_document_span__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/document/span */ "./src/elements/document/span.ts");
/* harmony import */ var _elements_audio_audio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/audio/audio */ "./src/elements/audio/audio.ts");














function c2dStandaloneChildren(Base) {
    return class extends Base {
        /**
         * Creates a `<c2d-bezier>` child element and returns it.
         */
        bezier(options) {
            return this.createChild(_elements_visual_bezier__WEBPACK_IMPORTED_MODULE_1__.Canvas2DBezier, options);
        }
        /**
         * Creates a `<c2d-ellipse>` child element and returns it.
         */
        ellipse(options) {
            return this.createChild(_elements_visual_ellipse__WEBPACK_IMPORTED_MODULE_2__.Canvas2DEllipse, options);
        }
        /**
         * Creates a `<c2d-image>` child element and returns it.
         */
        image(options) {
            return this.createChild(_elements_visual_image__WEBPACK_IMPORTED_MODULE_3__.Canvas2DImage, options);
        }
        multiple(arg1, arg2) {
            if (typeof arg1 === "number") {
                if (arg2 === undefined)
                    throw new Error("Missing callback");
                return new Array(arg1).fill(0).map((_, index) => {
                    const child = arg2(index);
                    this.appendChild(child);
                    return child;
                });
            }
            const recurseChildren = (children, index) => {
                const child = arg1(index);
                if (child === undefined)
                    return children;
                this.appendChild(child);
                return recurseChildren(children.concat(child), index + 1);
            };
            return recurseChildren([], 0);
        }
        /**
         * Creates a `<c2d-line>` child element and returns it.
         */
        line(options) {
            return this.createChild(_elements_visual_line__WEBPACK_IMPORTED_MODULE_4__.Canvas2DLine, options);
        }
        /**
         * Creates a `<c2d-rectangle>` child element and returns it.
         */
        rectangle(options) {
            return this.createChild(_elements_visual_rectangle__WEBPACK_IMPORTED_MODULE_5__.Canvas2DRectangle, options);
        }
        /**
         * Creates a `<c2d-shape>` child element and returns it.
         */
        shape(options) {
            return this.createChild(_elements_visual_shape__WEBPACK_IMPORTED_MODULE_6__.Canvas2DShape, options);
        }
        /**
         * Creates a `<c2d-text>` child element and returns it.
         */
        text(options) {
            return this.createChild(_elements_visual_text__WEBPACK_IMPORTED_MODULE_7__.Canvas2DText, options);
        }
        /**
         * Creates a `<c2d-video>` child element and returns it.
         */
        video(options) {
            return this.createChild(_elements_visual_video__WEBPACK_IMPORTED_MODULE_8__.Canvas2DVideo, options);
        }
    };
}
function c2dShapeChildren(Base) {
    return class extends Base {
        bezier(options) {
            return this.createChild(_elements_visual_bezier__WEBPACK_IMPORTED_MODULE_1__.Canvas2DShapeBezier, options);
        }
        ellipse(options) {
            return this.createChild(_elements_visual_ellipse__WEBPACK_IMPORTED_MODULE_2__.Canvas2DShapeEllipse, options);
        }
        line(options) {
            return this.createChild(_elements_visual_line__WEBPACK_IMPORTED_MODULE_4__.Canvas2DShapeLine, options);
        }
        rectangle(options) {
            return this.createChild(_elements_visual_rectangle__WEBPACK_IMPORTED_MODULE_5__.Canvas2DShapeRectangle, options);
        }
    };
}
function svgChildren(Base) {
    return class extends Base {
        /**
         * @private
         */
        createSVGControllerChild(ElementClass, options) {
            const element = (0,_elements_mixable__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)(ElementClass, options);
            this.appendChild(element);
            return element;
        }
        rectangle(options) {
            return this.createSVGControllerChild(_elements_visual_rectangle__WEBPACK_IMPORTED_MODULE_5__.SVGRectangleController, options);
        }
    };
}
function documentChildren(WrapperConstructor) {
    return class extends WrapperConstructor {
        audio(options) {
            return this.createWrappedChild(_elements_audio_audio__WEBPACK_IMPORTED_MODULE_12__.HTMLAudioWrapper, options);
        }
        container(options) {
            return this.createWrappedChild(_elements_document_container__WEBPACK_IMPORTED_MODULE_9__.DocumentContainerWrapper, options);
        }
        paragraph(options) {
            return this.createWrappedChild(_elements_document_paragraph__WEBPACK_IMPORTED_MODULE_10__.DocumentParagraphWrapper, options);
        }
        span(options) {
            return this.createWrappedChild(_elements_document_span__WEBPACK_IMPORTED_MODULE_11__.DocumentSpanWrapper, options);
        }
        video(options) {
            return this.createWrappedChild(_elements_visual_video__WEBPACK_IMPORTED_MODULE_8__.HTMLVideoWrapper, options);
        }
    };
}


/***/ }),

/***/ "./src/mixins/dimensions.ts":
/*!**********************************!*\
  !*** ./src/mixins/dimensions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimensions: () => (/* binding */ dimensions),
/* harmony export */   extendSVGDimensions: () => (/* binding */ extendSVGDimensions),
/* harmony export */   svgDimensions: () => (/* binding */ svgDimensions)
/* harmony export */ });
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};

function dimensions(Base) {
    var _width, _height, _a;
    return _a = class extends Base {
            constructor() {
                super(...arguments);
                _width.set(this, 100);
                _height.set(this, 100);
            }
            /**
             * Element's width in pixels.
             *
             * @attr
             * @reflect
             */
            get width() {
                return __classPrivateFieldGet(this, _width, "f");
            }
            set width(value) {
                if (__classPrivateFieldGet(this, _width, "f") === value)
                    return;
                this.registerChange("width", (__classPrivateFieldSet(this, _width, value, "f")));
            }
            /**
             * Element's height in pixels.
             *
             * @attr
             * @reflect
             */
            get height() {
                return __classPrivateFieldGet(this, _height, "f");
            }
            set height(value) {
                if (__classPrivateFieldGet(this, _height, "f") === value)
                    return;
                this.registerChange("height", (__classPrivateFieldSet(this, _height, value, "f")));
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (newValue === null)
                    return super.attributeChangedCallback(name, oldValue, newValue);
                switch (name) {
                    case "width":
                        this.width = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_0__.attributeParser.number(newValue);
                        return;
                    case "height":
                        this.height = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_0__.attributeParser.number(newValue);
                        return;
                    default:
                        return super.attributeChangedCallback(name, oldValue, newValue);
                }
            }
        },
        _width = new WeakMap(),
        _height = new WeakMap(),
        _a.observedAttributes = [...Base.observedAttributes, "width", "height"],
        _a;
}
function extendSVGDimensions(Base) {
    return class extends Base {
        connectedCallback() {
            this.mainElement.setAttribute("width", this.width.toString());
            this.mainElement.setAttribute("height", this.height.toString());
            super.connectedCallback();
        }
        get height() {
            return super.height;
        }
        set height(value) {
            if (value === super.height)
                return;
            super.height = value;
            this.mainElement.setAttribute("height", value.toString());
        }
        get width() {
            return super.width;
        }
        set width(value) {
            if (value === super.width)
                return;
            super.width = value;
            this.mainElement.setAttribute("width", value.toString());
        }
    };
}
function svgDimensions(Base) {
    return extendSVGDimensions(dimensions(Base));
}


/***/ }),

/***/ "./src/mixins/fill.ts":
/*!****************************!*\
  !*** ./src/mixins/fill.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c2dFill: () => (/* binding */ c2dFill),
/* harmony export */   svgFill: () => (/* binding */ svgFill)
/* harmony export */ });
/* harmony import */ var _classes_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/color */ "./src/classes/color.ts");
/* harmony import */ var _classes_gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/gradient */ "./src/classes/gradient.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};



function baseFill(Base) {
    var _Fillable_fill, _a;
    return _a = class Fillable extends Base {
            constructor() {
                super(...arguments);
                _Fillable_fill.set(this, null);
            }
            /**
             * The rendering style inside the element. This may be a color or gradient.
             * When set to null, the parent element's style is used. When
             * set to "none", the inside will be transparent.
             *
             * @attr
             * @reflect
             */
            get fill() {
                return __classPrivateFieldGet(this, _Fillable_fill, "f");
            }
            set fill(value) {
                if (__classPrivateFieldGet(this, _Fillable_fill, "f") === value)
                    return;
                if (__classPrivateFieldGet(this, _Fillable_fill, "f") instanceof _classes_color__WEBPACK_IMPORTED_MODULE_0__.Color &&
                    value instanceof _classes_color__WEBPACK_IMPORTED_MODULE_0__.Color &&
                    __classPrivateFieldGet(this, _Fillable_fill, "f").equals(value))
                    return;
                if (typeof value === "string")
                    this.registerChange("fill", (__classPrivateFieldSet(this, _Fillable_fill, value === "none" ? value : _classes_color__WEBPACK_IMPORTED_MODULE_0__.Color.fromString(value), "f")));
                else
                    this.registerChange("fill", (__classPrivateFieldSet(this, _Fillable_fill, value, "f")));
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (name === "fill") {
                    if (newValue === null)
                        this.fill = null;
                    else {
                        const fillValue = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_2__.attributeParser.FillStrokeStyle(newValue);
                        if (fillValue !== "gradient")
                            this.fill = fillValue;
                    }
                }
                super.attributeChangedCallback(name, oldValue, newValue);
            }
        },
        _Fillable_fill = new WeakMap(),
        _a.observedAttributes = [...Base.observedAttributes, "fill"],
        _a;
}
function c2dFill(Base) {
    return class Fillable extends baseFill(Base) {
        render(canvas2D) {
            super.render(canvas2D);
            const { context } = canvas2D;
            if (this.fill instanceof _classes_color__WEBPACK_IMPORTED_MODULE_0__.Color)
                context.fillStyle = this.fill.toString();
            else if (this.fill instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_1__.Gradient) {
                if (this.fill instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_1__.ConicalGradient) {
                    context.fillStyle = this.renderConicalGradient(context, this.fill);
                }
                else if (this.fill instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_1__.LinearGradient) {
                    context.fillStyle = this.renderLinearGradient(context, this.fill);
                }
                else if (this.fill instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_1__.RadialGradient) {
                    context.fillStyle = this.renderRadialGradient(context, this.fill);
                }
            }
        }
        afterRender(canvas2D) {
            if (this.fill !== "none")
                canvas2D.context.fill();
            super.afterRender(canvas2D);
        }
    };
}
function svgFill(Base) {
    var _instances, _fillGradient, _a;
    return _a = class extends baseFill(Base) {
            constructor() {
                super(...arguments);
                _instances.add(this);
            }
            connectedCallback() {
                super.connectedCallback();
                if (this.fill instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_1__.Gradient)
                    __classPrivateFieldGet(this, _instances, "m", _fillGradient).call(this, this.fill);
            }
            get fill() {
                return super.fill;
            }
            set fill(value) {
                var _b;
                if (((_b = super.fill) === null || _b === void 0 ? void 0 : _b.toString()) === (value === null || value === void 0 ? void 0 : value.toString()))
                    return;
                super.fill = value;
                const { fill } = this;
                if (fill === null)
                    return;
                if (fill instanceof _classes_color__WEBPACK_IMPORTED_MODULE_0__.Color)
                    this._setStyleAttribute("fill", fill.toString());
                else if (fill instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_1__.Gradient)
                    __classPrivateFieldGet(this, _instances, "m", _fillGradient).call(this, fill);
            }
            get _styleAttributes() {
                return Object.assign(Object.assign({}, super._styleAttributes), { fill: "fill" });
            }
        },
        _instances = new WeakSet(),
        _fillGradient = function _fillGradient(gradient) {
            const { svgContainerController } = this;
            if (svgContainerController === null)
                return;
            const gradientId = svgContainerController._defineGradient(gradient);
            this._setStyleAttribute("fill", `url(#${gradientId})`);
        },
        _a;
}


/***/ }),

/***/ "./src/mixins/font.ts":
/*!****************************!*\
  !*** ./src/mixins/font.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontSizeUnits: () => (/* binding */ fontSizeUnits),
/* harmony export */   useFont: () => (/* binding */ useFont)
/* harmony export */ });
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
/* harmony import */ var _classes_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/units */ "./src/classes/units.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};


const fontSizeUnits = Object.assign(Object.assign({}, _classes_units__WEBPACK_IMPORTED_MODULE_1__.Units.size), { capHeight: "cap", characterWidth: "ch", calculated: "em", xHeight: "ex", characterHeight: "ic", lineHeight: "lh", rootCapHeight: "rcap", rootCharacterWidth: "rch", rootSize: "rem", rootXHeight: "rex", rootCharacterHeight: "ic", rootLineHeight: "rlh" });
const fontStyles = {
    normal: "normal",
    italic: "italic",
    oblique: "oblique",
};
function useFont(Base) {
    var _Font_fontFamily, _Font_kerning, _Font_size, _Font_sizeUnit, _Font_stretch, _Font_fontStyle;
    class Font extends Base {
        constructor() {
            super(...arguments);
            _Font_fontFamily.set(this, null);
            _Font_kerning.set(this, null);
            _Font_size.set(this, null);
            _Font_sizeUnit.set(this, "px");
            _Font_stretch.set(this, null);
            _Font_fontStyle.set(this, null);
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if (newValue === null)
                return super.attributeChangedCallback(name, oldValue, newValue);
            switch (name) {
                case "size":
                    this.size = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_0__.attributeParser.number(newValue);
                    return;
                case "stretch":
                    this.stretch = newValue;
                    return;
                case "font-family":
                    this.fontFamily = newValue;
                    return;
                case "font-style":
                    this.fontStyle = newValue;
                    return;
                case "kerning":
                    this.kerning = newValue;
                    return;
                default:
                    super.attributeChangedCallback(name, oldValue, newValue);
            }
        }
        get fontFamily() {
            return __classPrivateFieldGet(this, _Font_fontFamily, "f");
        }
        set fontFamily(value) {
            if (__classPrivateFieldGet(this, _Font_fontFamily, "f") === value)
                return;
            this.registerChange("fontFamily", (__classPrivateFieldSet(this, _Font_fontFamily, value, "f")));
        }
        get fontStyle() {
            return __classPrivateFieldGet(this, _Font_fontStyle, "f");
        }
        set fontStyle(value) {
            if (__classPrivateFieldGet(this, _Font_fontStyle, "f") === value)
                return;
            this.registerChange("fontStyle", (__classPrivateFieldSet(this, _Font_fontStyle, value, "f")));
        }
        get kerning() {
            return __classPrivateFieldGet(this, _Font_kerning, "f");
        }
        set kerning(value) {
            if (__classPrivateFieldGet(this, _Font_kerning, "f") === value)
                return;
            this.registerChange("kerning", (__classPrivateFieldSet(this, _Font_kerning, value, "f")));
        }
        render(canvas2D) {
            const { context } = canvas2D;
            const style = __classPrivateFieldGet(this, _Font_fontStyle, "f") === null ? "" : `${__classPrivateFieldGet(this, _Font_fontStyle, "f")} `;
            if (__classPrivateFieldGet(this, _Font_fontFamily, "f") === null) {
                if (__classPrivateFieldGet(this, _Font_size, "f") !== null) {
                    const fontFamlyMatch = context.font.match(/\S*$/);
                    if (fontFamlyMatch === null)
                        throw new Error(`Failed to parse family in current font: ${context.font}`);
                    const [fontFamily] = fontFamlyMatch;
                    context.font = `${style}${__classPrivateFieldGet(this, _Font_size, "f")}${__classPrivateFieldGet(this, _Font_sizeUnit, "f")} ${fontFamily}`;
                }
            }
            else if (__classPrivateFieldGet(this, _Font_size, "f") === null) {
                const fontSizeMatch = context.font.match(/(\S)*\s\S*$/);
                if (fontSizeMatch === null || fontSizeMatch[0].length < 2)
                    throw new Error(`Failed to parse size in current font: ${context.font}`);
                const fontSize = fontSizeMatch[1];
                context.font = `${style}${fontSize} ${__classPrivateFieldGet(this, _Font_fontFamily, "f")}`;
            }
            else {
                context.font = `${style}${__classPrivateFieldGet(this, _Font_size, "f")}${__classPrivateFieldGet(this, _Font_sizeUnit, "f")} ${__classPrivateFieldGet(this, _Font_fontFamily, "f")}`;
            }
            if (__classPrivateFieldGet(this, _Font_stretch, "f") !== null)
                context.fontStretch = __classPrivateFieldGet(this, _Font_stretch, "f");
            if (__classPrivateFieldGet(this, _Font_kerning, "f") !== null)
                context.fontKerning = __classPrivateFieldGet(this, _Font_kerning, "f");
            super.render(canvas2D);
        }
        /**
         * Font size using the current sizeUnit. When set to null, the last rendered
         * element's setting is used.
         *
         * @attr
         * @reflect
         */
        get size() {
            return __classPrivateFieldGet(this, _Font_size, "f");
        }
        set size(value) {
            if (__classPrivateFieldGet(this, _Font_size, "f") === value)
                return;
            this.registerChange("size", (__classPrivateFieldSet(this, _Font_size, value, "f")));
        }
        /**
         * Unit for font size: "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px" | "vh" |
         * "vw" | "cap" | "ch" | "em" | "ex" | "ic" | "lh" | "rcap" | "rch" | "rem" |
         * "rex" | "rlh"
         *
         */
        get sizeUnit() {
            return __classPrivateFieldGet(this, _Font_sizeUnit, "f");
        }
        set sizeUnit(value) {
            if (__classPrivateFieldGet(this, _Font_sizeUnit, "f") === value)
                return;
            this.registerChange("sizeUnit", (__classPrivateFieldSet(this, _Font_sizeUnit, value, "f")));
        }
        get sizeString() {
            var _a, _b;
            return (_b = (_a = __classPrivateFieldGet(this, _Font_size, "f")) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "";
        }
        get stretch() {
            return __classPrivateFieldGet(this, _Font_stretch, "f");
        }
        set stretch(value) {
            if (__classPrivateFieldGet(this, _Font_stretch, "f") === value)
                return;
            this.registerChange("stretch", (__classPrivateFieldSet(this, _Font_stretch, value, "f")));
        }
    }
    _Font_fontFamily = new WeakMap(), _Font_kerning = new WeakMap(), _Font_size = new WeakMap(), _Font_sizeUnit = new WeakMap(), _Font_stretch = new WeakMap(), _Font_fontStyle = new WeakMap();
    Font.observedAttributes = [
        ...Base.observedAttributes,
        "size",
        "stretch",
        "font-family",
        "font-style",
        "kerning",
    ];
    Font.sizeUnit = fontSizeUnits;
    Font.stretch = {
        normal: "normal",
        ultraCondensed: "ultra-condensed",
        extraCondensed: "extra-condensed",
        condensed: "condensed",
        expanded: "expanded",
        extraExpanded: "extra-expanded",
        ultraExpanded: "ultra-expanded",
    };
    Font.style = fontStyles;
    return Font;
}


/***/ }),

/***/ "./src/mixins/fromTo.ts":
/*!******************************!*\
  !*** ./src/mixins/fromTo.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasFrom: () => (/* binding */ hasFrom),
/* harmony export */   hasTo: () => (/* binding */ hasTo)
/* harmony export */ });
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};


function hasTo(Base) {
    var _a, _b, _to;
    return _a = class extends (_b = Base) {
            constructor() {
                super(...arguments);
                _to.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.xy(100, 100));
            }
            /**
             * End point of the element relative to its anchor.
             *
             * @attr
             * @reflect
             */
            get to() {
                return __classPrivateFieldGet(this, _to, "f");
            }
            set to(value) {
                if (__classPrivateFieldGet(this, _to, "f").equals(value))
                    return;
                this.registerChange("to", (__classPrivateFieldSet(this, _to, value, "f")));
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (name === "to" && newValue !== null)
                    this.to = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_1__.attributeParser.Vector2D(newValue);
                super.attributeChangedCallback(name, oldValue, newValue);
            }
        },
        _to = new WeakMap(),
        _a.observedAttributes = [...Reflect.get(_b, "observedAttributes", _a), "to"],
        _a;
}
function hasFrom(Base) {
    var _a, _b, _from;
    return _a = class extends (_b = Base) {
            constructor() {
                super(...arguments);
                _from.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.zero);
            }
            /**
             * Starting point of the element relative to its anchor.
             *
             * @attr
             * @reflect
             */
            get from() {
                return __classPrivateFieldGet(this, _from, "f");
            }
            set from(value) {
                if (__classPrivateFieldGet(this, _from, "f").equals(value))
                    return;
                this.registerChange("from", (__classPrivateFieldSet(this, _from, value, "f")));
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (name === "from" && newValue !== null)
                    this.from = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_1__.attributeParser.Vector2D(newValue);
                super.attributeChangedCallback(name, oldValue, newValue);
            }
        },
        _from = new WeakMap(),
        _a.observedAttributes = [...Reflect.get(_b, "observedAttributes", _a), "from"],
        _a;
}


/***/ }),

/***/ "./src/mixins/offset.ts":
/*!******************************!*\
  !*** ./src/mixins/offset.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extendSVGOffset: () => (/* binding */ extendSVGOffset),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   svgOffset: () => (/* binding */ svgOffset)
/* harmony export */ });
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};


function offset(Base) {
    var _offset, _offsetChangeListener, _a;
    return _a = class extends Base {
            constructor(...args) {
                super(...args);
                _offset.set(this, new _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0));
                _offsetChangeListener.set(this, () => {
                    this.registerChange("offset", __classPrivateFieldGet(this, _offset, "f"));
                });
                __classPrivateFieldGet(this, _offset, "f").addChangeListener(__classPrivateFieldGet(this, _offsetChangeListener, "f"));
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (newValue !== null && name === "offset") {
                    const newPosition = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_1__.attributeParser.Vector2D(newValue);
                    if (!__classPrivateFieldGet(this, _offset, "f").equals(newPosition))
                        this.offset = newPosition;
                }
                return super.attributeChangedCallback(name, oldValue, newValue);
            }
            moveOffset(x, y) {
                if (x === 0 && y === 0)
                    return;
                __classPrivateFieldGet(this, _offset, "f").x += x;
                __classPrivateFieldGet(this, _offset, "f").y += y;
            }
            /**
             * Position of the element's origin relative to its anchor.
             *
             * @attr
             * @reflect
             */
            get offset() {
                return __classPrivateFieldGet(this, _offset, "f");
            }
            set offset(value) {
                const replace = __classPrivateFieldGet(this, _offset, "f").replace.bind(__classPrivateFieldGet(this, _offset, "f"));
                replace((__classPrivateFieldSet(this, _offset, value, "f")), __classPrivateFieldGet(this, _offsetChangeListener, "f"));
            }
        },
        _offset = new WeakMap(),
        _offsetChangeListener = new WeakMap(),
        _a.observedAttributes = [...Base.observedAttributes, "offset"],
        _a;
}
function extendSVGOffset(Base) {
    return class extends Base {
        connectedCallback() {
            super.connectedCallback();
        }
        moveOffset(x, y) {
            super.moveOffset(x, y);
            this._updateOffset();
        }
        get offset() {
            return super.offset;
        }
        set offset(value) {
            super.offset = value;
            this._updateOffset();
        }
        _updateOffset() {
            this.mainElement.setAttribute("x", this.offset.x.toString());
            this.mainElement.setAttribute("y", this.offset.y.toString());
        }
    };
}
function svgOffset(Base) {
    return extendSVGOffset(offset(Base));
}


/***/ }),

/***/ "./src/mixins/rectangleBounds.ts":
/*!***************************************!*\
  !*** ./src/mixins/rectangleBounds.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c2dRectangleBounds: () => (/* binding */ c2dRectangleBounds),
/* harmony export */   svgRectangleBounds: () => (/* binding */ svgRectangleBounds)
/* harmony export */ });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./src/mixins/dimensions.ts");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offset */ "./src/mixins/offset.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};


function baseRectangleBounds(Base, defaultOrigin) {
    var _origin, _a;
    return _a = class extends (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.dimensions)((0,_offset__WEBPACK_IMPORTED_MODULE_1__.offset)(Base)) {
            constructor() {
                super(...arguments);
                _origin.set(this, defaultOrigin);
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (name === "origin") {
                    if (newValue === null)
                        return;
                    this.origin = newValue;
                }
                return super.attributeChangedCallback(name, oldValue, newValue);
            }
            get topLeft() {
                switch (__classPrivateFieldGet(this, _origin, "f")) {
                    case "topLeft":
                        return this.offset;
                    case "center":
                        return this.offset.minus(this.width / 2, this.height / 2);
                }
                return this.offset;
            }
            get topRight() {
                return this.topLeft.plus(this.width, 0);
            }
            get center() {
                switch (__classPrivateFieldGet(this, _origin, "f")) {
                    case "topLeft":
                        return this.offset.plus(this.width / 2, this.height / 2);
                    case "center":
                        return this.offset;
                }
            }
            get bottomLeft() {
                return this.topLeft.plus(0, this.height);
            }
            get bottomRight() {
                return this.topRight.plus(0, this.height);
            }
            get origin() {
                return __classPrivateFieldGet(this, _origin, "f");
            }
            set origin(value) {
                if (__classPrivateFieldGet(this, _origin, "f") === value)
                    return;
                this.registerChange("origin", (__classPrivateFieldSet(this, _origin, value, "f")));
            }
        },
        _origin = new WeakMap(),
        _a.observedAttributes = [
            ...(0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.dimensions)((0,_offset__WEBPACK_IMPORTED_MODULE_1__.offset)(Base)).observedAttributes,
            "origin",
        ],
        _a;
}
function c2dRectangleBounds(Base, defaultOrigin) {
    return class extends baseRectangleBounds(Base, defaultOrigin) {
        renderConicalGradient(context, gradient) {
            return gradient.render(context, this.center);
        }
        renderLinearGradient(context, gradient) {
            const { x: x0, y: y0 } = this.topLeft;
            const { x: x1, y: y1 } = this.bottomRight;
            return gradient.render(context, x0, y0, x1 - x0, y1 - y0);
        }
    };
}
function svgRectangleBounds(Base, defaultOrigin) {
    return class extends (0,_offset__WEBPACK_IMPORTED_MODULE_1__.extendSVGOffset)((0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.extendSVGDimensions)(baseRectangleBounds(Base, defaultOrigin))) {
        _updateOffset() {
            const { x, y } = this.topLeft;
            this.mainElement.setAttribute("x", x.toString());
            this.mainElement.setAttribute("y", y.toString());
        }
        get origin() {
            return super.origin;
        }
        set origin(value) {
            super.origin = value;
            this._updateOffset();
        }
    };
}


/***/ }),

/***/ "./src/mixins/stroke.ts":
/*!******************************!*\
  !*** ./src/mixins/stroke.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c2dStroke: () => (/* binding */ c2dStroke),
/* harmony export */   svgStroke: () => (/* binding */ svgStroke)
/* harmony export */ });
/* harmony import */ var _classes_gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/gradient */ "./src/classes/gradient.ts");
/* harmony import */ var _classes_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/color */ "./src/classes/color.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};




function baseStroke(Base) {
    var _stroke, _lineWidth, _a;
    return _a = class extends Base {
            constructor() {
                super(...arguments);
                _stroke.set(this, null);
                _lineWidth.set(this, null);
            }
            /**
             * Width in pixels for drawing lines.
             *
             * @attr line-width
             * @reflect
             */
            get lineWidth() {
                return __classPrivateFieldGet(this, _lineWidth, "f");
            }
            set lineWidth(value) {
                if (__classPrivateFieldGet(this, _lineWidth, "f") === value)
                    return;
                this.registerChange("lineWidth", (__classPrivateFieldSet(this, _lineWidth, value, "f")));
            }
            /**
             * The rendering style for lines. This may be a color or gradient.
             * When set to null, the parent element's style is used. When
             * set to "none", no lines will be drawn.
             *
             * @attr
             * @reflect
             */
            get stroke() {
                return __classPrivateFieldGet(this, _stroke, "f");
            }
            set stroke(value) {
                if (__classPrivateFieldGet(this, _stroke, "f") === value)
                    return;
                if (__classPrivateFieldGet(this, _stroke, "f") instanceof _classes_color__WEBPACK_IMPORTED_MODULE_1__.Color &&
                    value instanceof _classes_color__WEBPACK_IMPORTED_MODULE_1__.Color &&
                    __classPrivateFieldGet(this, _stroke, "f").equals(value))
                    return;
                if (typeof value === "string")
                    this.registerChange("stroke", (__classPrivateFieldSet(this, _stroke, value === "none" ? value : _classes_color__WEBPACK_IMPORTED_MODULE_1__.Color.fromString(value), "f")));
                else
                    this.registerChange("stroke", (__classPrivateFieldSet(this, _stroke, value, "f")));
            }
            attributeChangedCallback(name, oldValue, newValue) {
                switch (name) {
                    case "stroke": {
                        {
                            if (newValue === null)
                                this.stroke = null;
                            else {
                                const strokeValue = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_2__.attributeParser.FillStrokeStyle(newValue);
                                if (strokeValue !== "gradient")
                                    this.stroke = strokeValue;
                            }
                        }
                        break;
                    }
                    case "line-width":
                        this.lineWidth =
                            newValue === null ? null : _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_2__.attributeParser.number(newValue);
                        break;
                    default:
                        super.attributeChangedCallback(name, oldValue, newValue);
                }
            }
        },
        _stroke = new WeakMap(),
        _lineWidth = new WeakMap(),
        _a.observedAttributes = [
            ...Base.observedAttributes,
            "stroke",
            "line-width",
        ],
        _a;
}
function c2dStroke(Base) {
    return class Strokeable extends baseStroke(Base) {
        render(canvas2D) {
            super.render(canvas2D);
            const { context } = canvas2D;
            if (this.stroke !== "none" && this.stroke !== null) {
                if (this.stroke instanceof _classes_color__WEBPACK_IMPORTED_MODULE_1__.Color)
                    context.strokeStyle = this.stroke.toString();
                else if (this.stroke instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient) {
                    if (this.stroke instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_0__.ConicalGradient) {
                        context.strokeStyle = this.renderConicalGradient(context, this.stroke);
                    }
                    else if (this.stroke instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_0__.LinearGradient)
                        context.strokeStyle = this.renderLinearGradient(context, this.stroke);
                    else if (this.stroke instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_0__.RadialGradient)
                        context.strokeStyle = this.renderRadialGradient(context, this.stroke);
                }
            }
            if (this.lineWidth !== null)
                context.lineWidth = this.lineWidth;
        }
        afterRender(canvas2D) {
            if (this.stroke !== "none")
                canvas2D.context.stroke();
            super.afterRender(canvas2D);
        }
    };
}
function svgStroke(Base) {
    var _instances, _strokeGradient, _a;
    return _a = class extends baseStroke(Base) {
            constructor() {
                super(...arguments);
                _instances.add(this);
            }
            connectedCallback() {
                super.connectedCallback();
                if (this.stroke instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient)
                    __classPrivateFieldGet(this, _instances, "m", _strokeGradient).call(this, this.stroke);
            }
            get lineWidth() {
                return super.lineWidth;
            }
            set lineWidth(value) {
                if (super.lineWidth === value)
                    return;
                super.lineWidth = value;
                const lineWidth = super.lineWidth;
                if (lineWidth === null)
                    return;
                this._setStyleAttribute("stroke-width", lineWidth.toString());
            }
            get stroke() {
                return super.stroke;
            }
            set stroke(value) {
                var _b;
                if (((_b = super.stroke) === null || _b === void 0 ? void 0 : _b.toString()) === (value === null || value === void 0 ? void 0 : value.toString()))
                    return;
                super.stroke = value;
                const { stroke } = this;
                if (stroke === null)
                    return;
                if (stroke instanceof _classes_color__WEBPACK_IMPORTED_MODULE_1__.Color)
                    this._setStyleAttribute("stroke", stroke.toString());
                else if (stroke instanceof _classes_gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient)
                    __classPrivateFieldGet(this, _instances, "m", _strokeGradient).call(this, stroke);
            }
            get _styleAttributes() {
                return Object.assign(Object.assign({}, super._styleAttributes), { stroke: "stroke", lineWidth: "stroke-width" });
            }
        },
        _instances = new WeakSet(),
        _strokeGradient = function _strokeGradient(gradient) {
            const { svgContainerController } = this;
            if (svgContainerController === null)
                return;
            const gradientId = svgContainerController._defineGradient(gradient);
            this._setStyleAttribute("stroke", `url(#${gradientId})`);
        },
        _a;
}


/***/ }),

/***/ "./src/mixins/transform.ts":
/*!*********************************!*\
  !*** ./src/mixins/transform.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C2DShapePartTransformed: () => (/* binding */ C2DShapePartTransformed),
/* harmony export */   C2DStandaloneTransformed: () => (/* binding */ C2DStandaloneTransformed),
/* harmony export */   baseTransform: () => (/* binding */ baseTransform),
/* harmony export */   svgTransform: () => (/* binding */ svgTransform)
/* harmony export */ });
/* harmony import */ var _classes_angle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/angle */ "./src/classes/angle.ts");
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _elements_visual_renderable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/visual/renderable */ "./src/elements/visual/renderable.ts");
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
/* harmony import */ var _utlities_readOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utlities/readOnly */ "./src/utlities/readOnly.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};





function baseTransform(Base) {
    var _BaseTransform_anchor, _BaseTransform_angle, _BaseTransform_angularVelocity, _BaseTransform_scale, _BaseTransform_velocity, _BaseTransform_angleChangeListener, _BaseTransform_angularVelocityChangedTime, _BaseTransform_anchorChangeListener, _BaseTransform_velocityChangedTime, _a;
    return _a = class BaseTransform extends Base {
            constructor(...args) {
                super(...args);
                _BaseTransform_anchor.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D.zero);
                _BaseTransform_angle.set(this, _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.radians(0));
                _BaseTransform_angularVelocity.set(this, _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.radians(0));
                _BaseTransform_scale.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D.one);
                _BaseTransform_velocity.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D.zero);
                _BaseTransform_angleChangeListener.set(this, () => {
                    this.registerChange("angle", __classPrivateFieldGet(this, _BaseTransform_angle, "f"));
                });
                _BaseTransform_angularVelocityChangedTime.set(this, -1);
                _BaseTransform_anchorChangeListener.set(this, () => {
                    this.registerChange("anchor", __classPrivateFieldGet(this, _BaseTransform_anchor, "f"));
                });
                _BaseTransform_velocityChangedTime.set(this, -1);
                __classPrivateFieldGet(this, _BaseTransform_anchor, "f").addChangeListener(__classPrivateFieldGet(this, _BaseTransform_anchorChangeListener, "f"));
                __classPrivateFieldGet(this, _BaseTransform_angle, "f").addChangeListener(__classPrivateFieldGet(this, _BaseTransform_angleChangeListener, "f"));
            }
            /**
             * Clockwise rotation of the element around its anchor.
             *
             * @attr
             * @reflect
             */
            get angle() {
                return __classPrivateFieldGet(this, _BaseTransform_angle, "f");
            }
            set angle(value) {
                const replace = __classPrivateFieldGet(this, _BaseTransform_angle, "f").replace.bind(__classPrivateFieldGet(this, _BaseTransform_angle, "f"));
                replace((__classPrivateFieldSet(this, _BaseTransform_angle, value, "f")), __classPrivateFieldGet(this, _BaseTransform_angleChangeListener, "f"));
            }
            /**
             * Clockwise rotation per second.
             *
             * @attr angular-velocity
             * @reflect
             */
            get angularVelocity() {
                return __classPrivateFieldGet(this, _BaseTransform_angularVelocity, "f");
            }
            set angularVelocity(value) {
                if (__classPrivateFieldGet(this, _BaseTransform_angularVelocity, "f").equals(value)) {
                    return;
                }
                __classPrivateFieldSet(this, _BaseTransform_angularVelocityChangedTime, performance.now(), "f");
                this.registerChange("angularVelocity", (__classPrivateFieldSet(this, _BaseTransform_angularVelocity, value, "f")));
            }
            /**
             * Base position of the element relative to its parent's anchor.
             *
             * @attr
             * @reflect
             */
            get anchor() {
                return __classPrivateFieldGet(this, _BaseTransform_anchor, "f");
            }
            set anchor(value) {
                const replace = __classPrivateFieldGet(this, _BaseTransform_anchor, "f").replace.bind(__classPrivateFieldGet(this, _BaseTransform_anchor, "f"));
                replace((__classPrivateFieldSet(this, _BaseTransform_anchor, value, "f")), __classPrivateFieldGet(this, _BaseTransform_anchorChangeListener, "f"));
            }
            _applyMovement(deltaTime) {
                const now = performance.now();
                if (__classPrivateFieldGet(this, _BaseTransform_angularVelocity, "f").radians !== 0) {
                    const angleChange = (__classPrivateFieldGet(this, _BaseTransform_angularVelocity, "f")[__classPrivateFieldGet(this, _BaseTransform_angle, "f").unit] *
                        Math.min(deltaTime, now - __classPrivateFieldGet(this, _BaseTransform_angularVelocityChangedTime, "f"))) /
                        1000;
                    if (angleChange === 0)
                        this.registerChange("angle", __classPrivateFieldGet(this, _BaseTransform_angle, "f"));
                    else
                        this.angle[__classPrivateFieldGet(this, _BaseTransform_angle, "f").unit] += angleChange;
                }
                if (__classPrivateFieldGet(this, _BaseTransform_velocity, "f").x !== 0 || __classPrivateFieldGet(this, _BaseTransform_velocity, "f").y !== 0) {
                    const velocityDelta = Math.min(deltaTime, now - __classPrivateFieldGet(this, _BaseTransform_velocityChangedTime, "f")) / 1000;
                    if ((0,_utlities_readOnly__WEBPACK_IMPORTED_MODULE_4__.isReadOnly)(__classPrivateFieldGet(this, _BaseTransform_anchor, "f"), "x") || (0,_utlities_readOnly__WEBPACK_IMPORTED_MODULE_4__.isReadOnly)(__classPrivateFieldGet(this, _BaseTransform_anchor, "f"), "y"))
                        __classPrivateFieldSet(this, _BaseTransform_anchor, __classPrivateFieldGet(this, _BaseTransform_anchor, "f").copy(), "f");
                    if (velocityDelta === 0)
                        this.registerChange("anchor", __classPrivateFieldGet(this, _BaseTransform_anchor, "f"));
                    else
                        this.moveAnchor(__classPrivateFieldGet(this, _BaseTransform_velocity, "f").x * velocityDelta, __classPrivateFieldGet(this, _BaseTransform_velocity, "f").y * velocityDelta);
                }
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (newValue !== null) {
                    switch (name) {
                        case "angle":
                            if (newValue === this.angle.toString())
                                return;
                            this.angle = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_3__.attributeParser.Angle(newValue);
                            break;
                        case "angular-velocity":
                            if (newValue === this.angularVelocity.toString())
                                return;
                            this.angularVelocity = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_3__.attributeParser.Angle(newValue);
                            break;
                        case "anchor":
                            const newAnchor = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_3__.attributeParser.Vector2D(newValue);
                            if (!__classPrivateFieldGet(this, _BaseTransform_anchor, "f").equals(newAnchor))
                                this.anchor = newAnchor;
                            break;
                        case "scale":
                            const newScale = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_3__.attributeParser.Vector2D(newValue);
                            if (!__classPrivateFieldGet(this, _BaseTransform_scale, "f").equals(newScale))
                                this.scale = newScale;
                            break;
                        case "velocity":
                            this.velocity = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_3__.attributeParser.Vector2D(newValue);
                            break;
                    }
                }
                super.attributeChangedCallback(name, oldValue, newValue);
            }
            moveAnchor(x, y) {
                if (x === 0 && y === 0)
                    return;
                __classPrivateFieldGet(this, _BaseTransform_anchor, "f").x += x;
                __classPrivateFieldGet(this, _BaseTransform_anchor, "f").y += y;
            }
            /**
             * @param angle - Angle to turn the element in the clockwise direction.
             */
            rotateClockwise(angle) {
                this.angle = _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.radians(__classPrivateFieldGet(this, _BaseTransform_angle, "f").radians + angle.radians);
            }
            /**
             * @param angle - Angle to turn the element in the counterclockwise direction.
             */
            rotateCounterclockwise(angle) {
                this.angle = _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.radians(__classPrivateFieldGet(this, _BaseTransform_angle, "f").radians - angle.radians);
            }
            /**
             * Multiplies the size of the element in the x and y direction. This also affects
             * line width. Setting scale to a number will set both the x and y scale to that
             * value.
             *
             * @attr
             * @reflect
             */
            get scale() {
                return __classPrivateFieldGet(this, _BaseTransform_scale, "f");
            }
            set scale(value) {
                if (typeof value === "number") {
                    const vectorValue = new _classes_vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D(value);
                    if (__classPrivateFieldGet(this, _BaseTransform_scale, "f").equals(vectorValue))
                        return;
                    this.registerChange("scale", (__classPrivateFieldSet(this, _BaseTransform_scale, vectorValue, "f")));
                }
                else if (__classPrivateFieldGet(this, _BaseTransform_scale, "f").equals(value)) {
                    return;
                }
                else {
                    this.registerChange("scale", (__classPrivateFieldSet(this, _BaseTransform_scale, value, "f")));
                }
            }
            /**
             * Anchor movement per second.
             *
             * @attr
             * @reflect
             */
            get velocity() {
                return __classPrivateFieldGet(this, _BaseTransform_velocity, "f");
            }
            set velocity(value) {
                if (__classPrivateFieldGet(this, _BaseTransform_velocity, "f").equals(value))
                    return;
                this.registerChange("velocity", (__classPrivateFieldSet(this, _BaseTransform_velocity, value, "f")));
                __classPrivateFieldSet(this, _BaseTransform_velocityChangedTime, performance.now(), "f");
            }
        },
        _BaseTransform_anchor = new WeakMap(),
        _BaseTransform_angle = new WeakMap(),
        _BaseTransform_angularVelocity = new WeakMap(),
        _BaseTransform_scale = new WeakMap(),
        _BaseTransform_velocity = new WeakMap(),
        _BaseTransform_angleChangeListener = new WeakMap(),
        _BaseTransform_angularVelocityChangedTime = new WeakMap(),
        _BaseTransform_anchorChangeListener = new WeakMap(),
        _BaseTransform_velocityChangedTime = new WeakMap(),
        _a.observedAttributes = [
            ...Base.observedAttributes,
            "angle",
            "angular-velocity",
            "anchor",
            "scale",
            "velocity",
        ],
        _a;
}
function c2dTransform(Base) {
    return class C2DTransform extends Base {
        render(canvas2D) {
            super.render(canvas2D);
            const { context } = canvas2D;
            context.translate(this.anchor.x, this.anchor.y);
            context.rotate(this.angle.radians);
            context.scale(this.scale.x, this.scale.y);
        }
        afterRender(canvas2D) {
            super.afterRender(canvas2D);
            this._applyMovement(canvas2D.deltaTime);
        }
    };
}
class C2DStandaloneTransformed extends c2dTransform(baseTransform(_elements_visual_renderable__WEBPACK_IMPORTED_MODULE_2__.Canvas2DStandaloneRenderable)) {
}
class C2DShapePartTransformed extends c2dTransform(baseTransform(_elements_visual_renderable__WEBPACK_IMPORTED_MODULE_2__.Canvas2DShapePartRenderable)) {
}
function svgTransform(Base) {
    var _SVGControllerTransform_instances, _SVGControllerTransform_angleChangeListener, _SVGControllerTransform_updateTransformAttribute, _a;
    return _a = class SVGControllerTransform extends baseTransform(Base) {
            constructor() {
                super(...arguments);
                _SVGControllerTransform_instances.add(this);
                _SVGControllerTransform_angleChangeListener.set(this, () => {
                    __classPrivateFieldGet(this, _SVGControllerTransform_instances, "m", _SVGControllerTransform_updateTransformAttribute).call(this);
                });
            }
            get anchor() {
                return super.anchor;
            }
            set anchor(value) {
                const change = !super.anchor.equals(value);
                super.anchor = value;
                if (change)
                    __classPrivateFieldGet(this, _SVGControllerTransform_instances, "m", _SVGControllerTransform_updateTransformAttribute).call(this);
            }
            get angle() {
                return super.angle;
            }
            set angle(value) {
                const change = !super.angle.equals(value);
                super.angle = value;
                super.angle.addChangeListener(__classPrivateFieldGet(this, _SVGControllerTransform_angleChangeListener, "f"));
                if (change)
                    __classPrivateFieldGet(this, _SVGControllerTransform_instances, "m", _SVGControllerTransform_updateTransformAttribute).call(this);
            }
            connectedCallback() {
                super.connectedCallback();
                __classPrivateFieldGet(this, _SVGControllerTransform_instances, "m", _SVGControllerTransform_updateTransformAttribute).call(this);
            }
        },
        _SVGControllerTransform_angleChangeListener = new WeakMap(),
        _SVGControllerTransform_instances = new WeakSet(),
        _SVGControllerTransform_updateTransformAttribute = function _SVGControllerTransform_updateTransformAttribute() {
            const transform = new DOMMatrix()
                .translateSelf(this.anchor.x, this.anchor.y)
                .rotateSelf(this.angle.degrees)
                .scaleSelf(this.scale.x, this.scale.y);
            if (transform.isIdentity)
                return;
            const { a, b, c, d, e, f } = transform;
            this._setStyleAttribute("transform", `matrix(${a} ${b} ${c} ${d} ${e} ${f})`);
        },
        _a;
}


/***/ }),

/***/ "./src/mixins/viewBox.ts":
/*!*******************************!*\
  !*** ./src/mixins/viewBox.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewBox: () => (/* binding */ viewBox)
/* harmony export */ });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./src/mixins/dimensions.ts");

function viewBox(Base) {
    return class extends (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.dimensions)(Base) {
        /**
         * @private
         */
        _resizeViewBox() {
            this.mainElement.setAttribute("viewBox", `${0} ${0} ${this.width} ${this.height}`);
        }
        get height() {
            return super.height;
        }
        set height(value) {
            if (value === super.height)
                return;
            super.height = value;
            this._resizeViewBox();
        }
        get width() {
            return super.width;
        }
        set width(value) {
            if (value === super.width)
                return;
            super.width = value;
            this._resizeViewBox();
        }
    };
}


/***/ }),

/***/ "./src/mixins/visualMedia.ts":
/*!***********************************!*\
  !*** ./src/mixins/visualMedia.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rendersVisualMedia: () => (/* binding */ rendersVisualMedia)
/* harmony export */ });
/* harmony import */ var _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utlities/attributeParser */ "./src/utlities/attributeParser.ts");
/* harmony import */ var _rectangleBounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rectangleBounds */ "./src/mixins/rectangleBounds.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};


function rendersVisualMedia(Base, mediaTag) {
    var _a, _b, _mediaElement, _widthSet, _heightSet;
    return _a = class extends (_b = (0,_rectangleBounds__WEBPACK_IMPORTED_MODULE_1__.c2dRectangleBounds)(Base, "topLeft")) {
            constructor(...args) {
                super(...args);
                _mediaElement.set(this, void 0);
                _widthSet.set(this, false);
                _heightSet.set(this, false);
                __classPrivateFieldSet(this, _mediaElement, document.createElement(mediaTag), "f");
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (newValue === null)
                    return super.attributeChangedCallback(name, oldValue, newValue);
                switch (name) {
                    case "source":
                        this.source = newValue;
                        return;
                    case "width":
                        this.width = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_0__.attributeParser.number(newValue);
                        return;
                    case "height":
                        this.height = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_0__.attributeParser.number(newValue);
                        return;
                    default:
                        return super.attributeChangedCallback(name, oldValue, newValue);
                }
            }
            connectedCallback() {
                this.canvas.waitFor(__classPrivateFieldGet(this, _mediaElement, "f"), mediaTag === "video" ? "canplay" : "load");
            }
            get mediaElement() {
                return __classPrivateFieldGet(this, _mediaElement, "f");
            }
            /**
             * URL or local path to the media file source for this element.
             *
             * @attr
             * @reflect
             */
            get source() {
                return __classPrivateFieldGet(this, _mediaElement, "f").src;
            }
            set source(value) {
                if (value === __classPrivateFieldGet(this, _mediaElement, "f").src)
                    return;
                this.registerChange("source", (__classPrivateFieldGet(this, _mediaElement, "f").src = value));
                __classPrivateFieldGet(this, _mediaElement, "f").addEventListener(mediaTag === "img" ? "load" : "canplay", () => {
                    if (__classPrivateFieldGet(this, _widthSet, "f")) {
                        if (__classPrivateFieldGet(this, _heightSet, "f"))
                            return;
                        const widthRatio = this.width / this.mediaWidth;
                        this.height = this.mediaHeight * widthRatio;
                    }
                    else if (__classPrivateFieldGet(this, _heightSet, "f")) {
                        const heightRatio = this.height / this.mediaHeight;
                        this.width = this.mediaWidth * heightRatio;
                    }
                    else {
                        this.width = this.mediaWidth;
                        this.height = this.mediaHeight;
                    }
                });
            }
            render(canvas2D) {
                super.render(canvas2D);
                canvas2D.context.drawImage(__classPrivateFieldGet(this, _mediaElement, "f"), this.topLeft.x, this.topLeft.y, this.width, this.height);
                canvas2D.context.rect(this.topLeft.x, this.topLeft.y, this.width, this.height);
                this.afterRender(canvas2D);
            }
            get mediaWidth() {
                return __classPrivateFieldGet(this, _mediaElement, "f") instanceof HTMLImageElement
                    ? __classPrivateFieldGet(this, _mediaElement, "f").naturalWidth
                    : __classPrivateFieldGet(this, _mediaElement, "f").videoWidth;
            }
            get width() {
                return __classPrivateFieldGet(this, _mediaElement, "f").width;
            }
            set width(value) {
                const roundedValue = Math.floor(value);
                if (roundedValue === this.width)
                    return;
                __classPrivateFieldSet(this, _widthSet, true, "f");
                this.registerChange("width", (__classPrivateFieldGet(this, _mediaElement, "f").width = roundedValue));
                if (__classPrivateFieldGet(this, _heightSet, "f") || this.mediaWidth === 0)
                    return;
                const widthRatio = value / this.mediaWidth;
                this.height *= widthRatio;
            }
            get mediaHeight() {
                return __classPrivateFieldGet(this, _mediaElement, "f") instanceof HTMLImageElement
                    ? __classPrivateFieldGet(this, _mediaElement, "f").naturalHeight
                    : __classPrivateFieldGet(this, _mediaElement, "f").videoHeight;
            }
            get height() {
                return __classPrivateFieldGet(this, _mediaElement, "f").height;
            }
            set height(value) {
                const roundedValue = Math.round(value);
                if (roundedValue === this.height)
                    return;
                __classPrivateFieldSet(this, _heightSet, true, "f");
                this.registerChange("height", (__classPrivateFieldGet(this, _mediaElement, "f").height = roundedValue));
                if (__classPrivateFieldGet(this, _widthSet, "f") || this.mediaHeight === 0)
                    return;
                const heightRatio = value / this.mediaHeight;
                this.width *= heightRatio;
            }
        },
        _mediaElement = new WeakMap(),
        _widthSet = new WeakMap(),
        _heightSet = new WeakMap(),
        _a.observedAttributes = [...Reflect.get(_b, "observedAttributes", _a), "source"],
        _a;
}


/***/ }),

/***/ "./src/utlities/attributeParser.ts":
/*!*****************************************!*\
  !*** ./src/utlities/attributeParser.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attributeParser: () => (/* binding */ attributeParser)
/* harmony export */ });
/* harmony import */ var _classes_angle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/angle */ "./src/classes/angle.ts");
/* harmony import */ var _classes_borderRadius__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/borderRadius */ "./src/classes/borderRadius.ts");
/* harmony import */ var _classes_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/color */ "./src/classes/color.ts");
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/vector2d */ "./src/classes/vector2d.ts");




const angleMatch = new RegExp(`([\\d\\.]+)\\s*(${Object.values(_classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.unit).join("|")})`);
const includesNumbers = (str) => str.match(/\d/) !== null;
const attributeParser = {
    number(stringValue) {
        return parseFloat(stringValue);
    },
    boolean(stringValue) {
        switch (stringValue.trim().toLowerCase()) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                throw new Error(`Failed to parse ${stringValue} as boolean.`);
        }
    },
    BorderRadius(stringValue) {
        const args = stringValue.split(",");
        const [arg1, arg2, arg3, arg4] = args.map(attributeParser.number);
        const borderRadius = new _classes_borderRadius__WEBPACK_IMPORTED_MODULE_1__.BorderRadius(arg1, arg2, arg3, arg4);
        return borderRadius;
    },
    Color(stringValue) {
        const args = stringValue.split(",");
        const numbers = args.map(attributeParser.number);
        switch (numbers.length) {
            case 1:
                return isNaN(numbers[0]) ? new _classes_color__WEBPACK_IMPORTED_MODULE_2__.Color(args[0]) : new _classes_color__WEBPACK_IMPORTED_MODULE_2__.Color(numbers[0]);
            case 2:
                return new _classes_color__WEBPACK_IMPORTED_MODULE_2__.Color(numbers[0], numbers[1]);
            case 3:
                return new _classes_color__WEBPACK_IMPORTED_MODULE_2__.Color(numbers[0], numbers[1], numbers[2]);
            case 5:
                console.warn(`Found ${numbers.length} arguments passed to Color attribute, but the maximum is 4`);
            default:
                return new _classes_color__WEBPACK_IMPORTED_MODULE_2__.Color(numbers[0], numbers[1], numbers[2], numbers[3]);
        }
    },
    FillStrokeStyle(stringValue) {
        if (stringValue === "none" || stringValue === "gradient")
            return stringValue;
        return attributeParser.Color(stringValue);
    },
    Vector2D(stringValue) {
        const numbers = stringValue.split(",").map(attributeParser.number);
        if (numbers.some(Number.isNaN))
            throw new Error(`NaN: ${stringValue}`);
        switch (numbers.length) {
            case 0:
                return new _classes_vector2d__WEBPACK_IMPORTED_MODULE_3__.Vector2D();
            case 1:
                return new _classes_vector2d__WEBPACK_IMPORTED_MODULE_3__.Vector2D(numbers[0]);
            case 3:
                console.warn(`Found ${numbers.length} arguments passed to Vecto2D attribute, but the maximum is 2`);
            default:
                return new _classes_vector2d__WEBPACK_IMPORTED_MODULE_3__.Vector2D(numbers[0], numbers[1]);
        }
    },
    Angle(stringValue) {
        const args = stringValue.match(angleMatch);
        if (args === null)
            throw new Error(`Angle arguments could not be parsed: ${stringValue}`);
        const value = attributeParser.number(args[1]);
        const unit = args[2];
        return new _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle(unit, value);
    },
};


/***/ }),

/***/ "./src/utlities/camelToKebab.ts":
/*!**************************************!*\
  !*** ./src/utlities/camelToKebab.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToKebabCase: () => (/* binding */ camelToKebabCase)
/* harmony export */ });
const camelToKebabCase = (camel) => camel.replace(/(.)([A-Z])/g, (_, beforeCharacter, upperCharacter) => `${beforeCharacter}-${upperCharacter.toLowerCase()}`);


/***/ }),

/***/ "./src/utlities/readOnly.ts":
/*!**********************************!*\
  !*** ./src/utlities/readOnly.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadOnly: () => (/* binding */ isReadOnly)
/* harmony export */ });
function isReadOnly(obj, propertyKey) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propertyKey);
    if (descriptor === undefined) {
        const prototype = Object.getPrototypeOf(obj);
        if (prototype === null)
            throw new Error(`Could not find property with key: ${String(propertyKey)}`);
        return isReadOnly(prototype, propertyKey);
    }
    if (descriptor.writable)
        return false;
    return descriptor.set === undefined;
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Angle: () => (/* reexport safe */ _classes_angle__WEBPACK_IMPORTED_MODULE_3__.Angle),
/* harmony export */   BorderRadius: () => (/* reexport safe */ _classes_borderRadius__WEBPACK_IMPORTED_MODULE_8__.BorderRadius),
/* harmony export */   Color: () => (/* reexport safe */ _classes_color__WEBPACK_IMPORTED_MODULE_1__.Color),
/* harmony export */   ConicalGradient: () => (/* reexport safe */ _classes_gradient__WEBPACK_IMPORTED_MODULE_5__.ConicalGradient),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _classes_gradient__WEBPACK_IMPORTED_MODULE_5__.LinearGradient),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _classes_gradient__WEBPACK_IMPORTED_MODULE_5__.RadialGradient),
/* harmony export */   Random: () => (/* reexport safe */ _classes_random__WEBPACK_IMPORTED_MODULE_9__.Random),
/* harmony export */   Shadow: () => (/* reexport safe */ _classes_shadow__WEBPACK_IMPORTED_MODULE_6__.Shadow),
/* harmony export */   State: () => (/* reexport safe */ _classes_state__WEBPACK_IMPORTED_MODULE_4__.State),
/* harmony export */   Vector2D: () => (/* reexport safe */ _classes_vector2d__WEBPACK_IMPORTED_MODULE_2__.Vector2D),
/* harmony export */   createMultiple: () => (/* binding */ createMultiple),
/* harmony export */   createRoot: () => (/* reexport safe */ _elements_document_domBase__WEBPACK_IMPORTED_MODULE_7__.createRoot),
/* harmony export */   createState: () => (/* reexport safe */ _classes_state__WEBPACK_IMPORTED_MODULE_4__.createState)
/* harmony export */ });
/* harmony import */ var _elements_visual_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/visual/canvas */ "./src/elements/visual/canvas.ts");
/* harmony import */ var _classes_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/color */ "./src/classes/color.ts");
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _classes_angle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/angle */ "./src/classes/angle.ts");
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/state */ "./src/classes/state.ts");
/* harmony import */ var _classes_gradient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/gradient */ "./src/classes/gradient.ts");
/* harmony import */ var _classes_shadow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/shadow */ "./src/classes/shadow.ts");
/* harmony import */ var _elements_document_domBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/document/domBase */ "./src/elements/document/domBase.ts");
/* harmony import */ var _classes_borderRadius__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/borderRadius */ "./src/classes/borderRadius.ts");
/* harmony import */ var _classes_random__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/random */ "./src/classes/random.ts");










function range(arg1, arg2) {
    const [start, stop] = arg2 === undefined ? [0, arg1] : [arg1, arg2];
    const step = stop > start ? 1 : -1;
    let value = start;
    function next() {
        const result = {
            value,
            done: start + step === stop,
        };
        value += step;
        return result;
    }
    return {
        [Symbol.iterator]() {
            return this;
        },
        next,
    };
}
function createMultiple(count, generator) {
    return new Array(count).fill(0).map((_, index) => generator(index));
}
customElements.define("c2d-canvas", _elements_visual_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas2DCanvasElement);


})();

var __webpack_exports__Angle = __webpack_exports__.Angle;
var __webpack_exports__BorderRadius = __webpack_exports__.BorderRadius;
var __webpack_exports__Color = __webpack_exports__.Color;
var __webpack_exports__ConicalGradient = __webpack_exports__.ConicalGradient;
var __webpack_exports__LinearGradient = __webpack_exports__.LinearGradient;
var __webpack_exports__RadialGradient = __webpack_exports__.RadialGradient;
var __webpack_exports__Random = __webpack_exports__.Random;
var __webpack_exports__Shadow = __webpack_exports__.Shadow;
var __webpack_exports__State = __webpack_exports__.State;
var __webpack_exports__Vector2D = __webpack_exports__.Vector2D;
var __webpack_exports__createMultiple = __webpack_exports__.createMultiple;
var __webpack_exports__createRoot = __webpack_exports__.createRoot;
var __webpack_exports__createState = __webpack_exports__.createState;
export { __webpack_exports__Angle as Angle, __webpack_exports__BorderRadius as BorderRadius, __webpack_exports__Color as Color, __webpack_exports__ConicalGradient as ConicalGradient, __webpack_exports__LinearGradient as LinearGradient, __webpack_exports__RadialGradient as RadialGradient, __webpack_exports__Random as Random, __webpack_exports__Shadow as Shadow, __webpack_exports__State as State, __webpack_exports__Vector2D as Vector2D, __webpack_exports__createMultiple as createMultiple, __webpack_exports__createRoot as createRoot, __webpack_exports__createState as createState };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFRRCxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSwwRUFBcUIsQ0FBQyxDQUFDO0FBZ0N6RCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvYW5nbGUudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9ib3JkZXJSYWRpdXMudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9jbGljay50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL2NvbG9yLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvZ3JhZGllbnQudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL21vdXNlLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvcmFuZG9tLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvc2hhZG93LnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy91bml0cy50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL3ZlY3RvcjJkLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL2F1ZGlvL2F1ZGlvLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL2RvY3VtZW50L2NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy9kb2N1bWVudC9kb21CYXNlLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL2RvY3VtZW50L3BhcmFncmFwaC50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy9kb2N1bWVudC9zcGFuLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL21peGFibGUudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL2Jlemllci50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvYzJkQmFzZS50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvY2FudmFzLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9lbGxpcHNlLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9pbWFnZS50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvbGluZS50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvcmVjdGFuZ2xlLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9zaGFwZS50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZS50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvc3ZnU1ZHLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC90ZXh0LnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC92aWRlby50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvY2hpbGRyZW4udHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2RpbWVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2ZpbGwudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2Zyb21Uby50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvb2Zmc2V0LnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9yZWN0YW5nbGVCb3VuZHMudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL3N0cm9rZS50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy92aWV3Qm94LnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy92aXN1YWxNZWRpYS50cyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci8uL3NyYy91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvdXRsaXRpZXMvY2FtZWxUb0tlYmFiLnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyLy4vc3JjL3V0bGl0aWVzL3JlYWRPbmx5LnRzIiwid2VicGFjazovL3dlYi1zcGlubmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYi1zcGlubmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWItc3Bpbm5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYi1zcGlubmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViLXNwaW5uZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0TG9uZyA9IGtleW9mICh0eXBlb2YgQW5nbGUpW1widW5pdFwiXTtcclxuXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVW5pdFNob3J0ID1cclxuICAodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl1ba2V5b2YgKHR5cGVvZiBBbmdsZSlbXCJ1bml0XCJdXTtcclxuXHJcbmNvbnN0IHVuaXRzSW5DaXJjbGU6IHtcclxuICBbVSBpbiBBbmdsZVVuaXRTaG9ydF06IG51bWJlcjtcclxufSA9IHtcclxuICBkZWc6IDM2MCxcclxuICByYWQ6IE1hdGguUEkgKiAyLFxyXG4gIGdyYWQ6IDQwMCxcclxuICB0dXJuOiAxLFxyXG59O1xyXG5cclxudHlwZSBBbmdsZUNvbnZlcnRlciA9IHtcclxuICBbVSBpbiBrZXlvZiAodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl1dOiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQW5nbGUgZXh0ZW5kcyBTdGF0ZTxudW1iZXI+IGltcGxlbWVudHMgQW5nbGVDb252ZXJ0ZXIge1xyXG4gICNjb252ZXJzaW9ucyA9IG5ldyBNYXA8RXhjbHVkZTxBbmdsZVVuaXRTaG9ydCwgXCJyYWRcIj4sIG51bWJlcj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IodW5pdDogQW5nbGVVbml0U2hvcnQsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJhZGlhbnMgPSB1bml0ID09PSBcInJhZFwiID8gdmFsdWUgOiBBbmdsZS5jb252ZXJ0KHZhbHVlLCB1bml0LCBcInJhZFwiKTtcclxuXHJcbiAgICBzdXBlcihyYWRpYW5zKTtcclxuXHJcbiAgICBpZiAodW5pdCAhPT0gXCJyYWRcIikgdGhpcy4jY29udmVyc2lvbnMuc2V0KHVuaXQsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gICNnZXRDb252ZXJ0ZWQodW5pdDogRXhjbHVkZTxBbmdsZVVuaXRTaG9ydCwgXCJyYWRcIj4pIHtcclxuICAgIGNvbnN0IGNhY2hlZCA9IHRoaXMuI2NvbnZlcnNpb25zLmdldCh1bml0KTtcclxuXHJcbiAgICBpZiAoY2FjaGVkICE9PSB1bmRlZmluZWQpIHJldHVybiBjYWNoZWQ7XHJcblxyXG4gICAgY29uc3QgY29udmVyc2lvbiA9IEFuZ2xlLmNvbnZlcnQodGhpcy52YWx1ZSwgXCJyYWRcIiwgdW5pdCk7XHJcblxyXG4gICAgdGhpcy4jY29udmVyc2lvbnMuc2V0KHVuaXQsIGNvbnZlcnNpb24pO1xyXG5cclxuICAgIHJldHVybiBjb252ZXJzaW9uO1xyXG4gIH1cclxuXHJcbiAgI3NldENvbnZlcnRlZCh1bml0OiBFeGNsdWRlPEFuZ2xlVW5pdFNob3J0LCBcInJhZFwiPiwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy4jY29udmVyc2lvbnMuc2V0KHVuaXQsIHZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnZhbHVlID0gQW5nbGUuY29udmVydCh2YWx1ZSwgdW5pdCwgXCJyYWRcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVncmVlcygpIHtcclxuICAgIHJldHVybiB0aGlzLiNnZXRDb252ZXJ0ZWQoXCJkZWdcIik7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVncmVlcyh2YWx1ZSkge1xyXG4gICAgdGhpcy4jc2V0Q29udmVydGVkKFwiZGVnXCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgY29uc3QgY29udmVyc2lvbkNvdW50ID0gdGhpcy4jY29udmVyc2lvbnMuc2l6ZTtcclxuXHJcbiAgICBjb25zdCBbdW5pdCwgdmFsdWVdID1cclxuICAgICAgY29udmVyc2lvbkNvdW50ID09PSAwXHJcbiAgICAgICAgPyBbXCJyYWRcIiBhcyBBbmdsZVVuaXRTaG9ydCwgdGhpcy52YWx1ZV1cclxuICAgICAgICA6IEFycmF5LmZyb20odGhpcy4jY29udmVyc2lvbnMpW2NvbnZlcnNpb25Db3VudCAtIDFdO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSlcclxuICAgICAgPyB2YWx1ZS50b1N0cmluZygpXHJcbiAgICAgIDogdmFsdWUudG9QcmVjaXNpb24oMik7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlU3RyaW5nICsgdW5pdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb252ZXJ0KFxyXG4gICAgdmFsdWU6IG51bWJlcixcclxuICAgIHVuaXRGcm9tOiBBbmdsZVVuaXRTaG9ydCxcclxuICAgIHVuaXRUbzogQW5nbGVVbml0U2hvcnRcclxuICApIHtcclxuICAgIHJldHVybiB2YWx1ZSAqICh1bml0c0luQ2lyY2xlW3VuaXRUb10gLyB1bml0c0luQ2lyY2xlW3VuaXRGcm9tXSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVncmVlcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IEFuZ2xlKEFuZ2xlLnVuaXQuZGVncmVlcywgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZXF1YWxzKG90aGVyOiBBbmdsZSkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmVxdWFscyhvdGhlcikgfHwgdGhpcy5yYWRpYW5zID09PSBvdGhlci5yYWRpYW5zO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGdyYWRpYW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2dldENvbnZlcnRlZChcImdyYWRcIik7XHJcbiAgfVxyXG5cclxuICBzZXQgZ3JhZGlhbnModmFsdWUpIHtcclxuICAgIHRoaXMuI3NldENvbnZlcnRlZChcImdyYWRcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJhZGlhbnModmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBBbmdsZShBbmdsZS51bml0LnJhZGlhbnMsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCByYWRpYW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgcmFkaWFucyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiNjb252ZXJzaW9ucy5jbGVhcigpO1xyXG5cclxuICAgIHN1cGVyLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdHVybigpIHtcclxuICAgIHJldHVybiB0aGlzLiNnZXRDb252ZXJ0ZWQoXCJ0dXJuXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHR1cm4odmFsdWUpIHtcclxuICAgIHRoaXMuI3NldENvbnZlcnRlZChcInR1cm5cIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVuaXQoKTogQW5nbGVVbml0TG9uZyB7XHJcbiAgICBjb25zdCBjb252ZXJzaW9uQ291bnQgPSB0aGlzLiNjb252ZXJzaW9ucy5zaXplO1xyXG5cclxuICAgIGNvbnN0IFtzaG9ydFVuaXRdID1cclxuICAgICAgY29udmVyc2lvbkNvdW50ID09PSAwXHJcbiAgICAgICAgPyBbXCJyYWRcIiBhcyBBbmdsZVVuaXRTaG9ydCwgdGhpcy52YWx1ZV1cclxuICAgICAgICA6IEFycmF5LmZyb20odGhpcy4jY29udmVyc2lvbnMpW2NvbnZlcnNpb25Db3VudCAtIDFdO1xyXG5cclxuICAgIGNvbnN0IGxvbmdVbml0ID0gT2JqZWN0LmtleXMoQW5nbGUudW5pdCkuZmluZChcclxuICAgICAgKGtleSkgPT4gQW5nbGUudW5pdFtrZXkgYXMgQW5nbGVVbml0TG9uZ10gPT09IHNob3J0VW5pdFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobG9uZ1VuaXQgPT09IHVuZGVmaW5lZClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhbmdsZSB1bml0OiAke3Nob3J0VW5pdH1gKTtcclxuXHJcbiAgICByZXR1cm4gbG9uZ1VuaXQgYXMgQW5nbGVVbml0TG9uZztcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1bml0ID0ge1xyXG4gICAgZGVncmVlczogXCJkZWdcIixcclxuICAgIHJhZGlhbnM6IFwicmFkXCIsXHJcbiAgICBncmFkaWFuczogXCJncmFkXCIsXHJcbiAgICB0dXJuOiBcInR1cm5cIixcclxuICB9IGFzIGNvbnN0O1xyXG5cclxuICBzdGF0aWMgZ2V0IHVuaXRzSW5DaXJjbGUoKSB7XHJcbiAgICByZXR1cm4gdW5pdHNJbkNpcmNsZTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5yYWRpYW5zID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHplcm8oKSB7XHJcbiAgICByZXR1cm4gQW5nbGUucmFkaWFucygwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuY2xhc3MgQm9yZGVyUmFkaXVzQmFzZSB7XHJcbiAgI3RvcExlZnQ6IG51bWJlcjtcclxuICAjdG9wUmlnaHQ6IG51bWJlcjtcclxuICAjYm90dG9tTGVmdDogbnVtYmVyO1xyXG4gICNib3R0b21SaWdodDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhbGw6IG51bWJlcik7XHJcbiAgY29uc3RydWN0b3IodG9wTGVmdEFuZEJvdHRvbVJpZ2h0OiBudW1iZXIsIHRvUmlnaHRBbmRCb3R0b21MZWZ0OiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdG9wTGVmdDogbnVtYmVyLFxyXG4gICAgdG9wUmlnaHRBbmRCb3R0b21MZWZ0OiBudW1iZXIsXHJcbiAgICBib3R0b21SaWdodDogbnVtYmVyXHJcbiAgKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRvcExlZnQ6IG51bWJlcixcclxuICAgIHRvcFJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b21SaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tTGVmdDogbnVtYmVyXHJcbiAgKTtcclxuICBjb25zdHJ1Y3RvcihhcmcxOiBudW1iZXIsIGFyZzI/OiBudW1iZXIsIGFyZzM/OiBudW1iZXIsIGJvdHRvbUxlZnQ/OiBudW1iZXIpIHtcclxuICAgIHRoaXMuI3RvcExlZnQgPSBhcmcxO1xyXG5cclxuICAgIGlmIChhcmcyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy4jdG9wUmlnaHQgPSB0aGlzLiNib3R0b21MZWZ0ID0gdGhpcy4jYm90dG9tUmlnaHQgPSBhcmcxO1xyXG4gICAgfSBlbHNlIGlmIChhcmczID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy4jYm90dG9tUmlnaHQgPSBhcmcxO1xyXG4gICAgICB0aGlzLiN0b3BSaWdodCA9IGFyZzI7XHJcbiAgICAgIHRoaXMuI2JvdHRvbUxlZnQgPSBhcmcyO1xyXG4gICAgfSBlbHNlIGlmIChib3R0b21MZWZ0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy4jdG9wUmlnaHQgPSBhcmcyO1xyXG4gICAgICB0aGlzLiNib3R0b21MZWZ0ID0gYXJnMjtcclxuICAgICAgdGhpcy4jYm90dG9tUmlnaHQgPSBhcmczO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4jdG9wUmlnaHQgPSBhcmcyO1xyXG4gICAgICB0aGlzLiNib3R0b21SaWdodCA9IGFyZzM7XHJcbiAgICAgIHRoaXMuI2JvdHRvbUxlZnQgPSBib3R0b21MZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRvcExlZnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jdG9wTGVmdDtcclxuICB9XHJcblxyXG4gIHNldCB0b3BMZWZ0KHZhbHVlKSB7XHJcbiAgICB0aGlzLiN0b3BMZWZ0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wUmlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jdG9wUmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wUmlnaHQodmFsdWUpIHtcclxuICAgIHRoaXMuI3RvcFJpZ2h0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYm90dG9tTGVmdCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNib3R0b21MZWZ0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGJvdHRvbUxlZnQodmFsdWUpIHtcclxuICAgIHRoaXMuI2JvdHRvbUxlZnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBib3R0b21SaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNib3R0b21SaWdodDtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b21SaWdodCh2YWx1ZSkge1xyXG4gICAgdGhpcy4jYm90dG9tUmlnaHQgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3JkZXJSYWRpdXMgZXh0ZW5kcyBTdGF0ZTxCb3JkZXJSYWRpdXNCYXNlPiB7XHJcbiAgY29uc3RydWN0b3IoYWxsOiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKHRvcExlZnRBbmRCb3R0b21SaWdodDogbnVtYmVyLCB0b1JpZ2h0QW5kQm90dG9tTGVmdDogbnVtYmVyKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRvcExlZnQ6IG51bWJlcixcclxuICAgIHRvcFJpZ2h0QW5kQm90dG9tTGVmdDogbnVtYmVyLFxyXG4gICAgYm90dG9tUmlnaHQ6IG51bWJlclxyXG4gICk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0b3BMZWZ0OiBudW1iZXIsXHJcbiAgICB0b3BSaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tUmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbUxlZnQ6IG51bWJlclxyXG4gICk7XHJcbiAgY29uc3RydWN0b3IoYXJnMTogbnVtYmVyLCBhcmcyPzogbnVtYmVyLCBhcmczPzogbnVtYmVyLCBib3R0b21MZWZ0PzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBiYXNlID1cclxuICAgICAgYXJnMiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBuZXcgQm9yZGVyUmFkaXVzQmFzZShhcmcxKVxyXG4gICAgICAgIDogYXJnMyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBuZXcgQm9yZGVyUmFkaXVzQmFzZShhcmcxLCBhcmcyKVxyXG4gICAgICAgIDogYm90dG9tTGVmdCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBuZXcgQm9yZGVyUmFkaXVzQmFzZShhcmcxLCBhcmcyLCBhcmczKVxyXG4gICAgICAgIDogbmV3IEJvcmRlclJhZGl1c0Jhc2UoYXJnMSwgYXJnMiwgYXJnMywgYm90dG9tTGVmdCk7XHJcblxyXG4gICAgc3VwZXIoYmFzZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wTGVmdCgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZS50b3BMZWZ0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvcExlZnQodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy50b3BMZWZ0KSByZXR1cm47XHJcblxyXG4gICAgc3VwZXIudmFsdWUudG9wTGVmdCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wUmlnaHQoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWUudG9wUmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wUmlnaHQodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy50b3BSaWdodCkgcmV0dXJuO1xyXG5cclxuICAgIHN1cGVyLnZhbHVlLnRvcFJpZ2h0ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBib3R0b21SaWdodCgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZS5ib3R0b21SaWdodDtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b21SaWdodCh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLmJvdHRvbVJpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgc3VwZXIudmFsdWUuYm90dG9tUmlnaHQgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJvdHRvbUxlZnQoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWUuYm90dG9tTGVmdDtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b21MZWZ0KHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuYm90dG9tTGVmdCkgcmV0dXJuO1xyXG5cclxuICAgIHN1cGVyLnZhbHVlLmJvdHRvbUxlZnQgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZXF1YWxzKG90aGVyOiBCb3JkZXJSYWRpdXMpIHtcclxuICAgIGNvbnN0IG90aGVyQXJyYXkgPSBvdGhlci50b0FycmF5KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudG9BcnJheSgpLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBvdGhlckFycmF5W2luZGV4XSk7XHJcbiAgfVxyXG5cclxuICB0b0FycmF5KCkge1xyXG4gICAgcmV0dXJuIFt0aGlzLnRvcExlZnQsIHRoaXMudG9wUmlnaHQsIHRoaXMuYm90dG9tUmlnaHQsIHRoaXMuYm90dG9tTGVmdF07XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKS5qb2luKFwiLCBcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4vdmVjdG9yMmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGlja0RhdGEgZXh0ZW5kcyBWZWN0b3IyRCB7XHJcbiAgI2NsaWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGNsaWNrZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2xpY2tlZDtcclxuICB9XHJcblxyXG4gIHNldCBjbGlja2VkKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNjbGlja2VkID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpY2tUcmFja2VyIGV4dGVuZHMgQ2xpY2tEYXRhIHtcclxuICAjdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIuY2xpY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICBzdXBlci54ID0gZXZlbnQueDtcclxuXHJcbiAgICAgIHN1cGVyLnkgPSBldmVudC55O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZHZhbmNlRnJhbWUoKSB7XHJcbiAgICBzdXBlci5jbGlja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xpY2tlZCgpIHtcclxuICAgIHJldHVybiBzdXBlci5jbGlja2VkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBvc2l0aW9uKCk6IFZlY3RvcjJEIHtcclxuICAgIGlmICh0aGlzLiN0YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHRoaXMuI3RhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkoc3VwZXIueCAtIGJvdW5kaW5nUmVjdC54LCBzdXBlci55IC0gYm91bmRpbmdSZWN0LnkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55O1xyXG4gIH1cclxufVxyXG4iLCJmdW5jdGlvbiBoZXgobjogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKE1hdGguZmxvb3IobiksIDI1NSksIDApXHJcbiAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gICNzdHI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoZ3JheTogbnVtYmVyLCBhbHBoYT86IG51bWJlcik7XHJcbiAgY29uc3RydWN0b3IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgYWxwaGE/OiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKGNvbG9yU3RyaW5nOiBzdHJpbmcpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZmlyc3RBcmc6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHNlY29uZEFyZz86IG51bWJlcixcclxuICAgIGJsdWU/OiBudW1iZXIsXHJcbiAgICBhbHBoYT86IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0aGlzLiNzdHIgPSBmaXJzdEFyZztcclxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgY29uc3QgZ3JheU51bSA9IGZpcnN0QXJnO1xyXG4gICAgICBjb25zdCBncmF5SGV4ID0gaGV4KGdyYXlOdW0pO1xyXG5cclxuICAgICAgY29uc3QgYWxwaGFOdW0gPSBzZWNvbmRBcmc7XHJcbiAgICAgIGNvbnN0IGFscGhhSGV4ID0gYWxwaGFOdW0gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBoZXgoYWxwaGFOdW0pO1xyXG5cclxuICAgICAgdGhpcy4jc3RyID0gYCMke2dyYXlIZXh9JHtncmF5SGV4fSR7Z3JheUhleH0ke2FscGhhSGV4fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZWQgPSBmaXJzdEFyZztcclxuICAgICAgY29uc3QgcmVkSGV4ID0gaGV4KHJlZCk7XHJcblxyXG4gICAgICBjb25zdCBncmVlbiA9IHNlY29uZEFyZztcclxuICAgICAgY29uc3QgZ3JlZW5IZXggPSBoZXgoZ3JlZW4gYXMgbnVtYmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IGJsdWVIZXggPSBoZXgoYmx1ZSBhcyBudW1iZXIpO1xyXG5cclxuICAgICAgY29uc3QgYWxwaGFIZXggPSBhbHBoYSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGhleChhbHBoYSk7XHJcblxyXG4gICAgICB0aGlzLiNzdHIgPSBgIyR7cmVkSGV4fSR7Z3JlZW5IZXh9JHtibHVlSGV4fSR7YWxwaGFIZXh9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBncmF5KHZhbHVlOiBudW1iZXIsIGFscGhhPzogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHZhbHVlLCBhbHBoYSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbVN0cmluZyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGVxdWFscyhvdGhlcjogQ29sb3IpIHtcclxuICAgIHJldHVybiB0aGlzLiNzdHIgPT09IG90aGVyLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLiNzdHI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHJhbmRvbSgpIHtcclxuICAgIHJldHVybiBDb2xvci5yZ2IoXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTUsXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTUsXHJcbiAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmdiKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIsIGFscGhhPzogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoc2woXHJcbiAgICBodWU6IG51bWJlcixcclxuICAgIHNhdHVyYXRpb246IG51bWJlcixcclxuICAgIGxpZ2h0bmVzczogbnVtYmVyLFxyXG4gICAgYWxwaGE/OiBudW1iZXJcclxuICApIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoXHJcbiAgICAgIGBoc2woJHtodWV9ICR7c2F0dXJhdGlvbn0gJHtsaWdodG5lc3N9JHtcclxuICAgICAgICBhbHBoYSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGAgLyAke2FscGhhfWBcclxuICAgICAgfSlgXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jMmRCYXNlXCI7XHJcbmltcG9ydCB7IEFuZ2xlIH0gZnJvbSBcIi4vYW5nbGVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuL3ZlY3RvcjJkXCI7XHJcblxyXG5jbGFzcyBDb2xvclN0b3Age1xyXG4gICNvZmZzZXQ6IG51bWJlcjtcclxuICAjY29sb3I6IENvbG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvZmZzZXQ6IG51bWJlciwgY29sb3I6IENvbG9yKSB7XHJcbiAgICB0aGlzLiNvZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICB0aGlzLiNjb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9mZnNldCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNvZmZzZXQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhZGllbnQge1xyXG4gICNzdG9wczogQ29sb3JTdG9wW10gPSBbXTtcclxuXHJcbiAgYWRkQ29sb3JTdG9wKG9mZnNldDogbnVtYmVyLCBjb2xvcjogQ29sb3IpIHtcclxuICAgIHRoaXMuI3N0b3BzLnB1c2gobmV3IENvbG9yU3RvcChvZmZzZXQsIGNvbG9yKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYXBwbHlTdG9wcyhncmFkaWVudDogQ2FudmFzR3JhZGllbnQpIHtcclxuICAgIGZvciAoY29uc3Qgc3RvcCBvZiB0aGlzLiNzdG9wcykge1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3Aoc3RvcC5vZmZzZXQsIHN0b3AuY29sb3IudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZGVmaW5lU1ZHU3RvcHMoZGVmaW5pdGlvbjogU1ZHR3JhZGllbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IHN0b3BzIH0gPSB0aGlzO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3RvcCBvZiBzdG9wcykge1xyXG4gICAgICBjb25zdCBzdG9wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgXCJzdG9wXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHN0b3BFbGVtZW50LnNldEF0dHJpYnV0ZShcIm9mZnNldFwiLCBzdG9wLm9mZnNldC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgIHN0b3BFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0b3AtY29sb3JcIiwgc3RvcC5jb2xvci50b1N0cmluZygpKTtcclxuXHJcbiAgICAgIGRlZmluaXRpb24uYXBwZW5kQ2hpbGQoc3RvcEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgLi4uYXJnczogYW55W10pOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZW5kZXIgY2FsbGVkIG9uIGJhc2UgR3JhZGllbnQgY2xhc3NcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jc3RvcHM7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBcImdyYWRpZW50XCI7XHJcbiAgfVxyXG5cclxuICBnZXQgc3ZnKCk6IFNWR0dyYWRpZW50RWxlbWVudCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHR5cGUgb2YgZ3JhZGllbnQgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIFNWRy5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZWFyR3JhZGllbnQgZXh0ZW5kcyBHcmFkaWVudCB7XHJcbiAgI2NvbG9yU3RhcnRYOiBudW1iZXI7XHJcbiAgI2NvbG9yU3RhcnRZOiBudW1iZXI7XHJcbiAgI2NvbG9yRW5kWDogbnVtYmVyO1xyXG4gICNjb2xvckVuZFk6IG51bWJlcjtcclxuICAjc3ZnOiBTVkdMaW5lYXJHcmFkaWVudEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3RhcnRYID0gMCwgc3RhcnRZID0gMCwgZW5kWCA9IDEsIGVuZFkgPSAxKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuI2NvbG9yU3RhcnRYID0gc3RhcnRYO1xyXG4gICAgdGhpcy4jY29sb3JTdGFydFkgPSBzdGFydFk7XHJcbiAgICB0aGlzLiNjb2xvckVuZFggPSBlbmRYO1xyXG4gICAgdGhpcy4jY29sb3JFbmRZID0gZW5kWTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGJvdW5kc1g6IG51bWJlcixcclxuICAgIGJvdW5kc1k6IG51bWJlcixcclxuICAgIGJvdW5kc1dpZHRoOiBudW1iZXIsXHJcbiAgICBib3VuZHNIZWlnaHQ6IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3QgeDAgPSBib3VuZHNYICsgYm91bmRzV2lkdGggKiB0aGlzLiNjb2xvclN0YXJ0WDtcclxuICAgIGNvbnN0IHkwID0gYm91bmRzWSArIGJvdW5kc0hlaWdodCAqIHRoaXMuI2NvbG9yU3RhcnRZO1xyXG4gICAgY29uc3QgeDEgPSBib3VuZHNYICsgYm91bmRzV2lkdGggKiB0aGlzLiNjb2xvckVuZFg7XHJcbiAgICBjb25zdCB5MSA9IGJvdW5kc1kgKyBib3VuZHNIZWlnaHQgKiB0aGlzLiNjb2xvckVuZFk7XHJcblxyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHgwLCB5MCwgeDEsIHkxKTtcclxuXHJcbiAgICB0aGlzLmFwcGx5U3RvcHMoZ3JhZGllbnQpO1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudDtcclxuICB9XHJcblxyXG4gIGdldCBzdmcoKSB7XHJcbiAgICBpZiAodGhpcy4jc3ZnICE9PSBudWxsKSByZXR1cm4gdGhpcy4jc3ZnO1xyXG5cclxuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJsaW5lYXJHcmFkaWVudFwiXHJcbiAgICApO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgdGhpcy4jY29sb3JTdGFydFgudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCB0aGlzLiNjb2xvclN0YXJ0WS50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIHRoaXMuI2NvbG9yRW5kWC50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIHRoaXMuI2NvbG9yRW5kWS50b1N0cmluZygpKTtcclxuXHJcbiAgICB0aGlzLmRlZmluZVNWR1N0b3BzKHN2Z0VsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiAodGhpcy4jc3ZnID0gc3ZnRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmFkaWFsR3JhZGllbnQgZXh0ZW5kcyBHcmFkaWVudCB7XHJcbiAgI3N0YXJ0WDogbnVtYmVyO1xyXG4gICNzdGFydFk6IG51bWJlcjtcclxuICAjc3RhcnRSYWRpdXM6IG51bWJlcjtcclxuICAjZW5kWDogbnVtYmVyO1xyXG4gICNlbmRZOiBudW1iZXI7XHJcbiAgI2VuZFJhZGl1czogbnVtYmVyO1xyXG4gICNzdmc6IFNWR1JhZGlhbEdyYWRpZW50RWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHN0YXJ0WCA9IDAsXHJcbiAgICBzdGFydFkgPSAwLFxyXG4gICAgc3RhcnRSYWRpdXMgPSAwLFxyXG4gICAgZW5kWCA9IDAsXHJcbiAgICBlbmRZID0gMCxcclxuICAgIGVuZFJhZGl1cyA9IDFcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy4jc3RhcnRYID0gc3RhcnRYO1xyXG4gICAgdGhpcy4jc3RhcnRZID0gc3RhcnRZO1xyXG4gICAgdGhpcy4jc3RhcnRSYWRpdXMgPSBzdGFydFJhZGl1cztcclxuICAgIHRoaXMuI2VuZFggPSBlbmRYO1xyXG4gICAgdGhpcy4jZW5kWSA9IGVuZFk7XHJcbiAgICB0aGlzLiNlbmRSYWRpdXMgPSBlbmRSYWRpdXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBib3VuZHNYOiBudW1iZXIsXHJcbiAgICBib3VuZHNZOiBudW1iZXIsXHJcbiAgICBib3VuZHNSYWRpdXM6IG51bWJlclxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHgwID0gYm91bmRzWCArIHRoaXMuI3N0YXJ0WCAqIGJvdW5kc1JhZGl1cztcclxuICAgIGNvbnN0IHkwID0gYm91bmRzWSArIHRoaXMuI3N0YXJ0WSAqIGJvdW5kc1JhZGl1cztcclxuICAgIGNvbnN0IHIwID0gYm91bmRzUmFkaXVzICogdGhpcy4jc3RhcnRSYWRpdXM7XHJcblxyXG4gICAgY29uc3QgeDEgPSBib3VuZHNYICsgdGhpcy4jZW5kWCAqIGJvdW5kc1JhZGl1cztcclxuICAgIGNvbnN0IHkxID0gYm91bmRzWSArIHRoaXMuI2VuZFkgKiBib3VuZHNSYWRpdXM7XHJcbiAgICBjb25zdCByMSA9IGJvdW5kc1JhZGl1cyAqIHRoaXMuI2VuZFJhZGl1cztcclxuXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoeDAsIHkwLCByMCwgeDEsIHkxLCByMSk7XHJcblxyXG4gICAgdGhpcy5hcHBseVN0b3BzKGdyYWRpZW50KTtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgc3ZnKCkge1xyXG4gICAgaWYgKHRoaXMuI3N2ZyAhPT0gbnVsbCkgcmV0dXJuIHRoaXMuI3N2ZztcclxuXHJcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwicmFkaWFsR3JhZGllbnRcIlxyXG4gICAgKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImZyXCIsIHRoaXMuI3N0YXJ0UmFkaXVzLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZnhcIiwgdGhpcy4jc3RhcnRYLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY3hcIiwgdGhpcy4jZW5kWC50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImN5XCIsIHRoaXMuI2VuZFkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyXCIsIHRoaXMuI2VuZFJhZGl1cy50b1N0cmluZygpKTtcclxuXHJcbiAgICB0aGlzLmRlZmluZVNWR1N0b3BzKHN2Z0VsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiAodGhpcy4jc3ZnID0gc3ZnRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uaWNhbEdyYWRpZW50IGV4dGVuZHMgR3JhZGllbnQge1xyXG4gICNzdGFydEFuZ2xlOiBBbmdsZTtcclxuICAjb2Zmc2V0OiBWZWN0b3IyRDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzdGFydEFuZ2xlOiBBbmdsZSA9IEFuZ2xlLnplcm8sXHJcbiAgICBvZmZzZXQ6IFZlY3RvcjJEID0gVmVjdG9yMkQuemVyb1xyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLiNzdGFydEFuZ2xlID0gc3RhcnRBbmdsZTtcclxuICAgIHRoaXMuI29mZnNldCA9IG9mZnNldDtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNlbnRlcjogVmVjdG9yMkQpOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICBjb25zdCB4ID0gY2VudGVyLnggKyB0aGlzLiNvZmZzZXQueDtcclxuICAgIGNvbnN0IHkgPSBjZW50ZXIueSArIHRoaXMuI29mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVDb25pY0dyYWRpZW50KFxyXG4gICAgICB0aGlzLiNzdGFydEFuZ2xlLnJhZGlhbnMsXHJcbiAgICAgIHgsXHJcbiAgICAgIHlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5hcHBseVN0b3BzKGdyYWRpZW50KTtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEcmF3U3R5bGUgPSBDb2xvciB8IHN0cmluZyB8IEdyYWRpZW50IHwgTm9uZTtcclxuIiwiZXhwb3J0IGNsYXNzIEtleWJvYXJkVHJhY2tlciB7XHJcbiAgI2N1cnJlbnQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAjcHJldmlvdXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAjbGFzdCA9IFwiXCI7XHJcbiAgI2Rvd24gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuI2N1cnJlbnQuYWRkKGV2ZW50LmtleSk7XHJcblxyXG4gICAgICB0aGlzLiNsYXN0ID0gZXZlbnQua2V5O1xyXG5cclxuICAgICAgdGhpcy4jZG93biA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLiNjdXJyZW50LmRlbGV0ZShldmVudC5rZXkpO1xyXG5cclxuICAgICAgdGhpcy4jZG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBbXywgc3RhdGVdIG9mIHRoaXMuI2N1cnJlbnQuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICB0aGlzLiNkb3duID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWR2YW5jZUZyYW1lKCkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy4jcHJldmlvdXMpIHtcclxuICAgICAgaWYgKCF0aGlzLiNjdXJyZW50LmhhcyhrZXkpKSB0aGlzLiNwcmV2aW91cy5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLiNjdXJyZW50KSB7XHJcbiAgICAgIHRoaXMuI3ByZXZpb3VzLmFkZChrZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRvd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jZG93bjtcclxuICB9XHJcblxyXG4gIGdldCBsYXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2xhc3Q7XHJcbiAgfVxyXG5cclxuICBrZXlIZWxkKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY3VycmVudC5oYXMoa2V5KTtcclxuICB9XHJcblxyXG4gIGtleVByZXZpb3VzbHlIZWxkKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jcHJldmlvdXMuaGFzKGtleSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4vdmVjdG9yMmRcIjtcclxuXHJcbmNvbnN0IGJ1dHRvbk5hbWVzID0geyBsZWZ0OiAwLCByaWdodDogMSwgd2hlZWw6IDIsIGJhY2s6IDMsIGZvcndhcmQ6IDQgfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZURhdGEgZXh0ZW5kcyBWZWN0b3IyRCB7XHJcbiAgI2J1dHRvblN0YXRlcyA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG4gICNvdmVyID0gZmFsc2U7XHJcblxyXG4gIGdldCBidXR0b25TdGF0ZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jYnV0dG9uU3RhdGVzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGJ1dHRvblN0YXRlcyh2YWx1ZSkge1xyXG4gICAgdGhpcy4jYnV0dG9uU3RhdGVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgb3ZlcigpIHtcclxuICAgIHJldHVybiB0aGlzLiNvdmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0IG92ZXIodmFsdWUpIHtcclxuICAgIHRoaXMuI292ZXIgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZVRyYWNrZXIgZXh0ZW5kcyBNb3VzZURhdGEge1xyXG4gICNwcmV2aW91czogTW91c2VEYXRhO1xyXG4gICN0YXJnZXQ6IEhUTUxFbGVtZW50IHwgV2luZG93O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEhUTUxFbGVtZW50IHwgV2luZG93ID0gd2luZG93KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcclxuXHJcbiAgICB0aGlzLiNwcmV2aW91cyA9IG5ldyBNb3VzZURhdGEoKTtcclxuXHJcbiAgICAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBzdXBlci5idXR0b25TdGF0ZXNbZXZlbnQuYnV0dG9uXSA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIuYnV0dG9uU3RhdGVzW2V2ZW50LmJ1dHRvbl0gPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIub3ZlciA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHN1cGVyLm92ZXIgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBzdXBlci54ID0gZXZlbnQueDtcclxuICAgICAgc3VwZXIueSA9IGV2ZW50Lnk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkdmFuY2VGcmFtZSgpIHtcclxuICAgIHRoaXMuI3ByZXZpb3VzLmJ1dHRvblN0YXRlcyA9IFsuLi50aGlzLmJ1dHRvblN0YXRlc107XHJcblxyXG4gICAgdGhpcy4jcHJldmlvdXMub3ZlciA9IHRoaXMub3ZlcjtcclxuXHJcbiAgICB0aGlzLiNwcmV2aW91cy54ID0gdGhpcy54O1xyXG5cclxuICAgIHRoaXMuI3ByZXZpb3VzLnkgPSB0aGlzLnk7XHJcbiAgfVxyXG5cclxuICBnZXQgYnV0dG9uU3RhdGVzKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmJ1dHRvblN0YXRlcztcclxuICB9XHJcblxyXG4gIGdldCBvdmVyKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLm92ZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJldmlvdXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jcHJldmlvdXM7XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtcclxuICAgIGlmICh0aGlzLiN0YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cpIHJldHVybiBzdXBlci54O1xyXG5cclxuICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHRoaXMuI3RhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4gc3VwZXIueCAtIGJvdW5kaW5nUmVjdC54O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHkoKSB7XHJcbiAgICBpZiAodGhpcy4jdGFyZ2V0IGluc3RhbmNlb2YgV2luZG93KSByZXR1cm4gc3VwZXIueTtcclxuXHJcbiAgICBjb25zdCBib3VuZGluZ1JlY3QgPSB0aGlzLiN0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHN1cGVyLnkgLSBib3VuZGluZ1JlY3QueTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5cclxudHlwZSBQcm9wZXJ0eVJhbmdlczxQIGV4dGVuZHMgc3RyaW5nPiA9IHtcclxuICBbS2V5IGluIFBdPzoge1xyXG4gICAgbWluPzogbnVtYmVyO1xyXG4gICAgbWF4PzogbnVtYmVyO1xyXG4gIH07XHJcbn07XHJcblxyXG50eXBlIEdyYXlSYW5nZXMgPSBQcm9wZXJ0eVJhbmdlczxcInZhbHVlXCIgfCBcImFscGhhXCI+O1xyXG5cclxudHlwZSBIU0xSYW5nZXMgPSBQcm9wZXJ0eVJhbmdlczxcImh1ZVwiIHwgXCJzYXR1cmF0aW9uXCIgfCBcImxpZ2h0bmVzc1wiIHwgXCJhbHBoYVwiPjtcclxuXHJcbnR5cGUgUkdCUmFuZ2VzID0gUHJvcGVydHlSYW5nZXM8XCJyZWRcIiB8IFwiZ3JlZW5cIiB8IFwiYmx1ZVwiIHwgXCJhbHBoYVwiPjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb20ge1xyXG4gIHN0YXRpYyBjb2xvckdyYXkocmFuZ2U6IEdyYXlSYW5nZXMpOiBDb2xvcjtcclxuICBzdGF0aWMgY29sb3JHcmF5KFxyXG4gICAgbWluVmFsdWU6IG51bWJlcixcclxuICAgIG1heFZhbHVlOiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9yR3JheShcclxuICAgIGFyZzE6IEdyYXlSYW5nZXMgfCBudW1iZXIsXHJcbiAgICBtYXhWYWx1ZT86IG51bWJlcixcclxuICAgIG1pbkFscGhhPzogbnVtYmVyLFxyXG4gICAgbWF4QWxwaGE/OiBudW1iZXJcclxuICApIHtcclxuICAgIGNvbnN0IHJhbmdlOiBHcmF5UmFuZ2VzID1cclxuICAgICAgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IGFyZzFcclxuICAgICAgICA6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHsgbWluOiBhcmcxLCBtYXg6IG1heFZhbHVlIH0sXHJcbiAgICAgICAgICAgIGFscGhhOiB7IG1pbjogbWluQWxwaGEsIG1heDogbWF4QWxwaGEgfSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENvbG9yLmdyYXkoXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2UudmFsdWU/Lm1pbiA/PyAwLCByYW5nZS52YWx1ZT8ubWF4ID8/IDI1NSksXHJcbiAgICAgIHJhbmdlLmFscGhhID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAocmFuZ2UuYWxwaGEubWluID09PSB1bmRlZmluZWQgJiYgcmFuZ2UuYWxwaGEubWF4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IFJhbmRvbS5mbG9hdChyYW5nZS5hbHBoYS5taW4gPz8gMCwgcmFuZ2UuYWxwaGEubWF4ID8/IDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbG9ySFNMKHJhbmdlczogSFNMUmFuZ2VzKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9ySFNMKFxyXG4gICAgbWluSHVlOiBudW1iZXIsXHJcbiAgICBtYXhIdWU6IG51bWJlcixcclxuICAgIG1pblNhdHVyYXRpb246IG51bWJlcixcclxuICAgIG1heFNhdHVyYXRpb246IG51bWJlcixcclxuICAgIG1pbkxpZ2h0bmVzczogbnVtYmVyLFxyXG4gICAgbWF4TGlnaHRuZXNzOiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9ySFNMKFxyXG4gICAgYXJnMTogSFNMUmFuZ2VzIHwgbnVtYmVyLFxyXG4gICAgbWF4SHVlPzogbnVtYmVyLFxyXG4gICAgbWluU2F0dXJhdGlvbj86IG51bWJlcixcclxuICAgIG1heFNhdHVyYXRpb24/OiBudW1iZXIsXHJcbiAgICBtaW5MaWdodG5lc3M/OiBudW1iZXIsXHJcbiAgICBtYXhMaWdodG5lc3M/OiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCByYW5nZXM6IEhTTFJhbmdlcyA9XHJcbiAgICAgIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgPyBhcmcxXHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIGh1ZToge1xyXG4gICAgICAgICAgICAgIG1pbjogYXJnMSxcclxuICAgICAgICAgICAgICBtYXg6IG1heEh1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2F0dXJhdGlvbjogeyBtaW46IG1pblNhdHVyYXRpb24sIG1heDogbWF4U2F0dXJhdGlvbiB9LFxyXG4gICAgICAgICAgICBsaWdodG5lc3M6IHsgbWluOiBtaW5MaWdodG5lc3MsIG1heDogbWF4TGlnaHRuZXNzIH0sXHJcbiAgICAgICAgICAgIGFscGhhOiB7IG1pbjogbWluQWxwaGEsIG1heDogbWF4QWxwaGEgfSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENvbG9yLmhzbChcclxuICAgICAgUmFuZG9tLmludChyYW5nZXMuaHVlPy5taW4gPz8gMCwgcmFuZ2VzLmh1ZT8ubWF4ID8/IDM2MCksXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2VzLnNhdHVyYXRpb24/Lm1pbiA/PyAwLCByYW5nZXMuc2F0dXJhdGlvbj8ubWF4ID8/IDEwMCksXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2VzLmxpZ2h0bmVzcz8ubWluID8/IDAsIHJhbmdlcy5saWdodG5lc3M/Lm1heCA/PyAxMDApLFxyXG4gICAgICByYW5nZXMuYWxwaGEgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgIChyYW5nZXMuYWxwaGEubWluID09PSB1bmRlZmluZWQgJiYgcmFuZ2VzLmFscGhhLm1heCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgOiBSYW5kb20uZmxvYXQocmFuZ2VzLmFscGhhLm1pbiA/PyAwLCByYW5nZXMuYWxwaGEubWF4ID8/IDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbG9yUkdCKHJhbmdlczogUkdCUmFuZ2VzKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9yUkdCKFxyXG4gICAgbWluUmVkOiBudW1iZXIsXHJcbiAgICBtYXhSZWQ6IG51bWJlcixcclxuICAgIG1pbkdyZWVuOiBudW1iZXIsXHJcbiAgICBtYXhHcmVlbjogbnVtYmVyLFxyXG4gICAgbWluQmx1ZTogbnVtYmVyLFxyXG4gICAgbWF4Qmx1ZTogbnVtYmVyLFxyXG4gICAgbWluQWxwaGE/OiBudW1iZXIsXHJcbiAgICBtYXhBbHBoYT86IG51bWJlclxyXG4gICk6IENvbG9yO1xyXG4gIHN0YXRpYyBjb2xvclJHQihcclxuICAgIGFyZzE6IFJHQlJhbmdlcyB8IG51bWJlcixcclxuICAgIG1heFJlZD86IG51bWJlcixcclxuICAgIG1pbkdyZWVuPzogbnVtYmVyLFxyXG4gICAgbWF4R3JlZW4/OiBudW1iZXIsXHJcbiAgICBtaW5CbHVlPzogbnVtYmVyLFxyXG4gICAgbWF4Qmx1ZT86IG51bWJlcixcclxuICAgIG1pbkFscGhhPzogbnVtYmVyLFxyXG4gICAgbWF4QWxwaGE/OiBudW1iZXJcclxuICApIHtcclxuICAgIGNvbnN0IHJhbmdlczogUkdCUmFuZ2VzID1cclxuICAgICAgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IGFyZzFcclxuICAgICAgICA6IHtcclxuICAgICAgICAgICAgcmVkOiB7XHJcbiAgICAgICAgICAgICAgbWluOiBhcmcxLFxyXG4gICAgICAgICAgICAgIG1heDogbWF4UmVkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmVlbjogeyBtaW46IG1pbkdyZWVuLCBtYXg6IG1heEdyZWVuIH0sXHJcbiAgICAgICAgICAgIGJsdWU6IHsgbWluOiBtaW5CbHVlLCBtYXg6IG1heEJsdWUgfSxcclxuICAgICAgICAgICAgYWxwaGE6IHsgbWluOiBtaW5BbHBoYSwgbWF4OiBtYXhBbHBoYSB9LFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ29sb3IucmdiKFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlcy5yZWQ/Lm1pbiA/PyAwLCByYW5nZXMucmVkPy5tYXggPz8gMjU1KSxcclxuICAgICAgUmFuZG9tLmludChyYW5nZXMuZ3JlZW4/Lm1pbiA/PyAwLCByYW5nZXMuZ3JlZW4/Lm1heCA/PyAyNTUpLFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlcy5ibHVlPy5taW4gPz8gMCwgcmFuZ2VzLmJsdWU/Lm1heCA/PyAyNTUpLFxyXG4gICAgICByYW5nZXMuYWxwaGEgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgIChyYW5nZXMuYWxwaGEubWluID09PSB1bmRlZmluZWQgJiYgcmFuZ2VzLmFscGhhLm1heCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgOiBSYW5kb20uaW50KHJhbmdlcy5hbHBoYS5taW4gPz8gMCwgcmFuZ2VzLmFscGhhLm1heCA/PyAyNTUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZsb2F0KG1heDogbnVtYmVyKTogbnVtYmVyO1xyXG4gIHN0YXRpYyBmbG9hdChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgc3RhdGljIGZsb2F0KGFyZzE6IG51bWJlciwgYXJnMj86IG51bWJlcikge1xyXG4gICAgY29uc3QgW21pbiwgbWF4XSA9IGFyZzIgPT09IHVuZGVmaW5lZCA/IFswLCBhcmcxXSA6IFthcmcxLCBhcmcyXTtcclxuXHJcbiAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG9mPFQgZXh0ZW5kcyBhbnlbXT4oYXJyYXk6IFQpIHtcclxuICAgIHJldHVybiBhcnJheVtSYW5kb20uaW50KGFycmF5Lmxlbmd0aCldO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGludChtYXg6IG51bWJlcik6IG51bWJlcjtcclxuICBzdGF0aWMgaW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlcjtcclxuICBzdGF0aWMgaW50KC4uLmFyZ3M6IFtudW1iZXJdKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihSYW5kb20uZmxvYXQoLi4uYXJncykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL2NvbG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi92ZWN0b3IyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWRvdyB7XHJcbiAgI2JsdXIgPSBjcmVhdGVTdGF0ZSgwKTtcclxuICAjY29sb3IgPSBDb2xvci5ncmF5KDApO1xyXG4gICNvZmZzZXQgPSBWZWN0b3IyRC56ZXJvO1xyXG4gICNjaGFuZ2VMaXN0ZW5lck1hcCA9IG5ldyBNYXA8Q2hhbmdlTGlzdGVuZXI8U2hhZG93PiwgKCkgPT4gdm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogUGFydGlhbDxTaGFkb3c+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXI6ICh1cGRhdGVkVmFsdWU6IFNoYWRvdykgPT4gdm9pZCkge1xyXG4gICAgaWYgKHRoaXMuI2NoYW5nZUxpc3RlbmVyTWFwLmhhcyhsaXN0ZW5lcikpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lckNhbGxlciA9ICgpID0+IGxpc3RlbmVyKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuI2JsdXIuYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXJDYWxsZXIpO1xyXG4gICAgdGhpcy4jb2Zmc2V0LmFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyQ2FsbGVyKTtcclxuXHJcbiAgICB0aGlzLiNjaGFuZ2VMaXN0ZW5lck1hcC5zZXQobGlzdGVuZXIsIGxpc3RlbmVyQ2FsbGVyKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxTaGFkb3c+KSB7XHJcbiAgICBjb25zdCBjYWxsZXIgPSB0aGlzLiNjaGFuZ2VMaXN0ZW5lck1hcC5nZXQobGlzdGVuZXIpO1xyXG5cclxuICAgIGlmIChjYWxsZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI2JsdXIucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoY2FsbGVyKTtcclxuICAgIHRoaXMuI29mZnNldC5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihjYWxsZXIpO1xyXG5cclxuICAgIHRoaXMuI2NoYW5nZUxpc3RlbmVyTWFwLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICAjY2hhbmdlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLiNoYW5kbGVDaGFuZ2UoKTtcclxuICB9O1xyXG5cclxuICAjaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgZm9yIChjb25zdCBbXywgY2FsbGVyXSBvZiB0aGlzLiNjaGFuZ2VMaXN0ZW5lck1hcCkge1xyXG4gICAgICBjYWxsZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBibHVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2JsdXIudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgYmx1cih2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2JsdXIudmFsdWUgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jYmx1ci52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuI2hhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jY29sb3IuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI2NvbG9yID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy4jaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBlcXVhbHMob3RoZXI6IFNoYWRvdykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgb3RoZXIuI2JsdXIgPT09IHRoaXMuI2JsdXIgJiZcclxuICAgICAgb3RoZXIuI2NvbG9yLmVxdWFscyh0aGlzLiNjb2xvcikgJiZcclxuICAgICAgb3RoZXIuI29mZnNldC5lcXVhbHModGhpcy4jb2Zmc2V0KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBvZmZzZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgc2V0IG9mZnNldCh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI29mZnNldCAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy4jb2Zmc2V0LnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuI2NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHZhbHVlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI2NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHRoaXMuI29mZnNldCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy4jb2Zmc2V0LmVxdWFscyh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy4jaGFuZGxlQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSB0aGlzLiNibHVyLnZhbHVlO1xyXG4gICAgY29udGV4dC5zaGFkb3dDb2xvciA9IHRoaXMuI2NvbG9yLnRvU3RyaW5nKCk7XHJcbiAgICBjb250ZXh0LnNoYWRvd09mZnNldFggPSB0aGlzLiNvZmZzZXQueDtcclxuICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IHRoaXMuI29mZnNldC55O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3RhdGU8VD4ge1xyXG4gICNsaXN0ZW5lcnMgPSBuZXcgU2V0PENoYW5nZUxpc3RlbmVyPFQ+PigpO1xyXG4gICN2YWx1ZTogVDtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlOiBUKSB7XHJcbiAgICB0aGlzLiN2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcclxuICB9XHJcblxyXG4gIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxUPikge1xyXG4gICAgdGhpcy4jbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy4jbGlzdGVuZXJzKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxUPikge1xyXG4gICAgdGhpcy4jbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy4jbGlzdGVuZXJzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy4jbGlzdGVuZXJzKSB7XHJcbiAgICAgIGxpc3RlbmVyKHRoaXMuI3ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVxdWFscyhvdGhlcjogVCB8IFN0YXRlPFQ+KSB7XHJcbiAgICByZXR1cm4gdGhpcy4jdmFsdWUgPT09IG90aGVyO1xyXG4gIH1cclxuXHJcbiAgcmVwbGFjZTxPIGV4dGVuZHMgdGhpcz4ob3RoZXI6IE8sIGNoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxUPikge1xyXG4gICAgaWYgKHRoaXMuZXF1YWxzKG90aGVyKSkge1xyXG4gICAgICBpZiAodGhpcyA9PT0gb3RoZXIpIHJldHVybiBvdGhlcjtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoY2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyLmFkZENoYW5nZUxpc3RlbmVyKGNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICBjaGFuZ2VMaXN0ZW5lcihvdGhlci4jdmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBvdGhlcjtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiN2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZShuZXdWYWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI3ZhbHVlID09PSBuZXdWYWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI3ZhbHVlID0gbmV3VmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGF0ZTxUPih0YXJnZXQ6IFQpIHtcclxuICByZXR1cm4gbmV3IFN0YXRlKHRhcmdldCk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFVuaXRzIHtcclxuICBzdGF0aWMgc2l6ZSA9IHtcclxuICAgIGNlbnRpbWV0ZXJzOiBcImNtXCIsXHJcbiAgICBtaWxsaW1ldGVyczogXCJtbVwiLFxyXG4gICAgcXVhcnRlck1pbGxpbWV0ZXJzOiBcIlFcIixcclxuICAgIGluY2hlczogXCJpblwiLFxyXG4gICAgcGljYXM6IFwicGNcIixcclxuICAgIHBvaW50czogXCJwdFwiLFxyXG4gICAgcGl4ZWxzOiBcInB4XCIsXHJcbiAgICBwZXJjZW50Vmlld3BvcnRIZWlnaHQ6IFwidmhcIixcclxuICAgIHBlcmNlbnRWaWV3cG9ydFdpZHRoOiBcInZ3XCIsXHJcbiAgfSBhcyBjb25zdDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMkRCYXNlIHtcclxuICAjeDogbnVtYmVyO1xyXG4gICN5OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLiN4ID0geDtcclxuICAgIHRoaXMuI3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jeDtcclxuICB9XHJcblxyXG4gIHNldCB4KHZhbHVlKSB7XHJcbiAgICB0aGlzLiN4ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLiN5O1xyXG4gIH1cclxuXHJcbiAgc2V0IHkodmFsdWUpIHtcclxuICAgIHRoaXMuI3kgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyRCBleHRlbmRzIFN0YXRlPFZlY3RvcjJEQmFzZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0geCkge1xyXG4gICAgc3VwZXIobmV3IFZlY3RvcjJEQmFzZSh4LCB5KSk7XHJcbiAgfVxyXG5cclxuICBjb3B5KCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XHJcbiAgfVxyXG5cclxuICBlcXVhbHMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuO1xyXG4gIGVxdWFscyhvdGhlcjogVmVjdG9yMkQpOiBib29sZWFuO1xyXG4gIGVxdWFscyhhcmcxOiBWZWN0b3IyRCB8IG51bWJlciwgYXJnMj86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSByZXR1cm4gdGhpcy54ID09PSBhcmcxICYmIHRoaXMueSA9PT0gYXJnMjtcclxuICAgIHJldHVybiB0aGlzLnggPT09IGFyZzEueCAmJiB0aGlzLnkgPT09IGFyZzEueTtcclxuICB9XHJcblxyXG4gIGdldCBpbnZlcnNlKCkge1xyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KC10aGlzLngsIC10aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKDEpO1xyXG4gIH1cclxuXHJcbiAgbWludXMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBWZWN0b3IyRDtcclxuICBtaW51cyhvdGhlcjogVmVjdG9yMkQpOiBWZWN0b3IyRDtcclxuICBtaW51cyhhcmcxOiBWZWN0b3IyRCB8IG51bWJlciwgYXJnMj86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKVxyXG4gICAgICByZXR1cm4gVmVjdG9yMkQueHkodGhpcy54IC0gYXJnMSwgdGhpcy55IC0gKGFyZzIgPz8gYXJnMSkpO1xyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMueCAtIGFyZzEueCwgdGhpcy55IC0gYXJnMS55KTtcclxuICB9XHJcblxyXG4gIHBsdXMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBWZWN0b3IyRDtcclxuICBwbHVzKG90aGVyOiBWZWN0b3IyRCk6IFZlY3RvcjJEO1xyXG4gIHBsdXMoYXJnMTogVmVjdG9yMkQgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMueCArIGFyZzEsIHRoaXMueSArIChhcmcyID8/IGFyZzEpKTtcclxuICAgIHJldHVybiBWZWN0b3IyRC54eSh0aGlzLnggKyBhcmcxLngsIHRoaXMueSArIGFyZzEueSk7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIGNvbnN0IHhTdHJpbmcgPSBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMueClcclxuICAgICAgPyB0aGlzLngudG9TdHJpbmcoKVxyXG4gICAgICA6IHRoaXMueC50b1ByZWNpc2lvbigzKTtcclxuICAgIGNvbnN0IHlTdHJpbmcgPSBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMueSlcclxuICAgICAgPyB0aGlzLnkudG9TdHJpbmcoKVxyXG4gICAgICA6IHRoaXMueS50b1ByZWNpc2lvbigzKTtcclxuXHJcbiAgICByZXR1cm4gYCR7eFN0cmluZ30sICR7eVN0cmluZ31gO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHh5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS54O1xyXG4gIH1cclxuXHJcbiAgc2V0IHgodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudmFsdWUueCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnZhbHVlLnggPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS55O1xyXG4gIH1cclxuXHJcbiAgc2V0IHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudmFsdWUueSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnZhbHVlLnkgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB6ZXJvKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi4vZG9jdW1lbnQvZG9tQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhUTUxBdWRpb1dyYXBwZXIgZXh0ZW5kcyBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcclxuICBcImF1ZGlvXCJcclxuKSB7fVxyXG5cclxuZXhwb3J0IHR5cGUgSFRNTEF1ZGlvQ29udHJvbGxlciA9IEhUTUxFbGVtZW50Q29udHJvbGxlcjxcclxuICBcImF1ZGlvXCIsXHJcbiAgSFRNTEF1ZGlvV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBkb2N1bWVudENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi9kb21CYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRDb250YWluZXJXcmFwcGVyIGV4dGVuZHMgZG9jdW1lbnRDaGlsZHJlbihcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcImRpdlwiKVxyXG4pIHt9XHJcblxyXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRhaW5lckNvbnRyb2xsZXIgPSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgXCJkaXZcIixcclxuICBEb2N1bWVudENvbnRhaW5lcldyYXBwZXJcclxuPjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gXCIuLi9taXhhYmxlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi92aXN1YWwvY2FudmFzXCI7XHJcbmltcG9ydCB7IERvY3VtZW50Q29udGFpbmVyV3JhcHBlciB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBTVkdTVkdDb250cm9sbGVyIH0gZnJvbSBcIi4uL3Zpc3VhbC9zdmdTVkdcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFxyXG4gIFQgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcclxuPih0YWc6IFQpIHtcclxuICByZXR1cm4gY2xhc3MgSFRNTEVsZW1lbnRXcmFwcGVyIHtcclxuICAgICNlbGVtZW50OiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF07XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgIHRoaXMuI2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhczJEKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEQ2FudmFzRWxlbWVudD4pIHtcclxuICAgICAgY29uc3QgY2FudmFzQ29udHJvbGxlciA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoXHJcbiAgICAgICAgQ2FudmFzMkRDYW52YXNFbGVtZW50LFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNDb250cm9sbGVyKTtcclxuXHJcbiAgICAgIHJldHVybiBjYW52YXNDb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVdyYXBwZWRDaGlsZDxcclxuICAgICAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICAgICAgVyBleHRlbmRzIEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+XHJcbiAgICA+KFxyXG4gICAgICBXcmFwcGVyQ29uc3RydWN0b3I6IFcsXHJcbiAgICAgIG9wdGlvbnM/OiBPcHRpb25zPEhUTUxFbGVtZW50Q29udHJvbGxlcjxULCBJbnN0YW5jZVR5cGU8Vz4+PlxyXG4gICAgKTogSFRNTEVsZW1lbnRDb250cm9sbGVyPFQsIEluc3RhbmNlVHlwZTxXPj4ge1xyXG4gICAgICBjb25zdCBjb250cm9sbGVyID0gY3JlYXRlV3JhcHBlZENvbnRyb2xsZXI8VCwgVz4oV3JhcHBlckNvbnN0cnVjdG9yKTtcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250cm9sbGVyLmVsZW1lbnQpO1xyXG5cclxuICAgICAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHJldHVybiBjb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50LnN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHlsZShkZWNsYXJhdGlvbjogQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuI2VsZW1lbnQuc3R5bGUsIGRlY2xhcmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcob3B0aW9ucz86IE9wdGlvbnM8U1ZHU1ZHQ29udHJvbGxlcj4pIHtcclxuICAgICAgY29uc3Qgc3ZnU1ZHQ29udHJvbGxlciA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoU1ZHU1ZHQ29udHJvbGxlciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnU1ZHQ29udHJvbGxlcik7XHJcblxyXG4gICAgICByZXR1cm4gc3ZnU1ZHQ29udHJvbGxlcjtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxcclxuICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXHJcbj4gPSBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxUPj47XHJcblxyXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUFwcGxpZXI8XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICBXIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+PlxyXG4+ID0gKFxyXG4gIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LFxyXG4gIC4uLnZhbHVlczogYW55W11cclxuKSA9PiBIVE1MRWxlbWVudENvbnRyb2xsZXI8VCwgVz47XHJcblxyXG5leHBvcnQgdHlwZSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICBXIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+PlxyXG4+ID0gSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdICYgVyAmIFRlbXBsYXRlQXBwbGllcjxULCBXPjtcclxuXHJcbnR5cGUgU3RhdGVMaXN0ZW5lcjxUPiA9IHtcclxuICBzdGF0ZTogU3RhdGU8VD47XHJcbiAgY2hhbmdlTGlzdGVuZXI6IChuZXdWYWx1ZTogVCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVN0YXRlTGlzdGVuZXIgPSA8VD4oXHJcbiAgc3RhdGU6IFN0YXRlPFQ+LFxyXG4gIGNoYW5nZUxpc3RlbmVyOiAobmV3VmFsdWU6IFQpID0+IHZvaWRcclxuKTogU3RhdGVMaXN0ZW5lcjxUPiA9PiAoeyBzdGF0ZSwgY2hhbmdlTGlzdGVuZXIgfSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV3JhcHBlZENvbnRyb2xsZXI8XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICBXIGV4dGVuZHMgSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8VD5cclxuPihXcmFwcGVyQ29uc3RydWN0b3I6IFcpOiBIVE1MRWxlbWVudENvbnRyb2xsZXI8VCwgSW5zdGFuY2VUeXBlPFc+PiB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyQ29uc3RydWN0b3IoKTtcclxuXHJcbiAgY29uc3QgeyBlbGVtZW50IH0gPSB3cmFwcGVyO1xyXG5cclxuICBjb25zdCBzdGF0ZU1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFN0YXRlTGlzdGVuZXI8YW55Pj4oKTtcclxuXHJcbiAgZnVuY3Rpb24gYXBwbHlUZW1wbGF0ZShzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiBhbnlbXSkge1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHN0cl0gb2Ygc3RyaW5ncy5lbnRyaWVzKCkpIHtcclxuICAgICAgY29uc3QgdGV4dE5vZGUgPSBuZXcgVGV4dChzdHIpO1xyXG5cclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0ZSkge1xyXG4gICAgICAgICAgbGV0IG11dGFibGVUZXh0Tm9kZSA9IG5ldyBUZXh0KHZhbHVlLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG11dGFibGVUZXh0Tm9kZSk7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc3RhdGVMaXN0ZW5lciA9IGNyZWF0ZVN0YXRlTGlzdGVuZXIodmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUZXh0ID0gbmV3IFRleHQobmV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3VGV4dCwgbXV0YWJsZVRleHROb2RlKTtcclxuXHJcbiAgICAgICAgICAgIG11dGFibGVUZXh0Tm9kZSA9IG5ld1RleHQ7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB2YWx1ZS5hZGRDaGFuZ2VMaXN0ZW5lcihzdGF0ZUxpc3RlbmVyLmNoYW5nZUxpc3RlbmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbmVpZ2hib3JOb2RlID0gdmFsdWUgaW5zdGFuY2VvZiBOb2RlID8gdmFsdWUgOiBuZXcgVGV4dCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZWlnaGJvck5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb250cm9sbGVyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBQcm94eShhcHBseVRlbXBsYXRlLCB7XHJcbiAgICBnZXQoXywgcHJvcGVydHlLZXkpIHtcclxuICAgICAgY29uc3Qgd3JhcHBlclZhbHVlID0gUmVmbGVjdC5nZXQod3JhcHBlciwgcHJvcGVydHlLZXkpO1xyXG5cclxuICAgICAgaWYgKHdyYXBwZXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyVmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgIHJldHVybiB3cmFwcGVyVmFsdWUuYmluZCh3cmFwcGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXJWYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZWxlbWVudFZhbHVlID0gUmVmbGVjdC5nZXQoZWxlbWVudCwgcHJvcGVydHlLZXkpO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50VmFsdWUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGVsZW1lbnRWYWx1ZS5iaW5kKGVsZW1lbnQpO1xyXG5cclxuICAgICAgcmV0dXJuIGVsZW1lbnRWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBzZXQoXywgcHJvcGVydHlLZXksIHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG9sZFN0YXRlTGlzdGVuZXIgPSBzdGF0ZU1hcC5nZXQocHJvcGVydHlLZXkpO1xyXG5cclxuICAgICAgaWYgKG9sZFN0YXRlTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG9sZFN0YXRlTGlzdGVuZXIuc3RhdGUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoXHJcbiAgICAgICAgICBvbGRTdGF0ZUxpc3RlbmVyLmNoYW5nZUxpc3RlbmVyXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb3BlcnR5S2V5IGluIHdyYXBwZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0ZSkge1xyXG4gICAgICAgICAgY29uc3QgbmV3U3RhdGVMaXN0ZW5lciA9IGNyZWF0ZVN0YXRlTGlzdGVuZXIodmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBSZWZsZWN0LnNldCh3cmFwcGVyLCBwcm9wZXJ0eUtleSwgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdmFsdWUuYWRkQ2hhbmdlTGlzdGVuZXIobmV3U3RhdGVMaXN0ZW5lci5jaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgICAgc3RhdGVNYXAuc2V0KHByb3BlcnR5S2V5LCBuZXdTdGF0ZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQod3JhcHBlciwgcHJvcGVydHlLZXksIHZhbHVlLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LnNldCh3cmFwcGVyLCBwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlTGlzdGVuZXIgPSBjcmVhdGVTdGF0ZUxpc3RlbmVyKHZhbHVlLCAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgIFJlZmxlY3Quc2V0KGVsZW1lbnQsIHByb3BlcnR5S2V5LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhbHVlLmFkZENoYW5nZUxpc3RlbmVyKG5ld1N0YXRlTGlzdGVuZXIuY2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBzdGF0ZU1hcC5zZXQocHJvcGVydHlLZXksIG5ld1N0YXRlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQoZWxlbWVudCwgcHJvcGVydHlLZXksIHZhbHVlLnZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KGVsZW1lbnQsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gIH0pIGFzIEhUTUxFbGVtZW50Q29udHJvbGxlcjxULCBJbnN0YW5jZVR5cGU8Vz4+O1xyXG5cclxuICByZXR1cm4gY29udHJvbGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvb3Qocm9vdFBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcclxuICBpZiAocm9vdFBhcmVudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgUm9vdCBlbGVtZW50J3MgcGFyZW50IGlzIHVuZGVmaW5lZC4gTWFrZSBzdXJlIHlvdXIgc2NyaXB0IHJ1bnMgYWZ0ZXIgdGhlIERPTSBjb250ZW50IGxvYWRzLiBZb3UgY2FuIGRvIHRoaXMgYnkgYWRkaW5nIHRoZSAnZGVmZXInIGF0dHJpYnV0ZS5gXHJcbiAgICApO1xyXG5cclxuICBjb25zdCByb290Q29udHJvbGxlciA9IGNyZWF0ZVdyYXBwZWRDb250cm9sbGVyKERvY3VtZW50Q29udGFpbmVyV3JhcHBlcik7XHJcblxyXG4gIHJvb3RQYXJlbnQuYXBwZW5kQ2hpbGQocm9vdENvbnRyb2xsZXIuZWxlbWVudCk7XHJcblxyXG4gIHJldHVybiByb290Q29udHJvbGxlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBkb2N1bWVudENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi9kb21CYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRQYXJhZ3JhcGhXcmFwcGVyIGV4dGVuZHMgZG9jdW1lbnRDaGlsZHJlbihcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcInBcIilcclxuKSB7fVxyXG5cclxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQYXJhZ3JhcGhDb250cm9sbGVyID0gSFRNTEVsZW1lbnRDb250cm9sbGVyPFxyXG4gIFwicFwiLFxyXG4gIERvY3VtZW50UGFyYWdyYXBoV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBkb2N1bWVudENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi9kb21CYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRTcGFuV3JhcHBlciBleHRlbmRzIGRvY3VtZW50Q2hpbGRyZW4oXHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IoXCJzcGFuXCIpXHJcbikge31cclxuXHJcbmV4cG9ydCB0eXBlIERvY3VtZW50U3BhbkNvbnRyb2xsZXIgPSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgXCJzcGFuXCIsXHJcbiAgRG9jdW1lbnRTcGFuV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBjYW1lbFRvS2ViYWJDYXNlIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2NhbWVsVG9LZWJhYlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUhUTUxFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW107XHJcbiAgc3RhdGljIHRhZzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICApIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgY3JlYXRlQ2hpbGQ8RSBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oXHJcbiAgICBFbGVtZW50Q2xhc3M6IEUsXHJcbiAgICBvcHRpb25zPzogT3B0aW9uczxJbnN0YW5jZVR5cGU8RT4+XHJcbiAgKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChFbGVtZW50Q2xhc3MsIG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyQ2hhbmdlPFAgZXh0ZW5kcyBrZXlvZiBXcml0ZWFibGU8dGhpcz4+KFxyXG4gICAgcHJvcGVydHlOYW1lOiBQLFxyXG4gICAgbmV3VmFsdWU6IHRoaXNbUF1cclxuICApIHtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBjYW1lbFRvS2ViYWJDYXNlKHByb3BlcnR5TmFtZSBhcyBzdHJpbmcpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRBdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKTtcclxuXHJcbiAgICBpZiAoY3VycmVudEF0dHJpYnV0ZVZhbHVlID09PSBzdHJpbmdWYWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHN0cmluZ1ZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21FbGVtZW50PEUgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KFxyXG4gIEVsZW1lbnRDbGFzczogRSxcclxuICBvcHRpb25zPzogT3B0aW9uczxJbnN0YW5jZVR5cGU8RT4+XHJcbikge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KEVsZW1lbnRDbGFzcy50YWcpIGFzIEluc3RhbmNlVHlwZTxFPjtcclxuXHJcbiAgT2JqZWN0LmFzc2lnbihlbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBjMmRGaWxsIH0gZnJvbSBcIi4uLy4uL21peGlucy9maWxsXCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7IGhhc0Zyb20sIGhhc1RvIH0gZnJvbSBcIi4uLy4uL21peGlucy9mcm9tVG9cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7XHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQsXHJcbiAgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkLFxyXG59IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGhhc0NvbnRyb2xQb2ludHM8QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgaGFzVG8oQmFzZSkge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcclxuICAgICAgLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwiY29udHJvbC1hXCIsXHJcbiAgICAgIFwiY29udHJvbC1iXCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNjb250cm9sQSA9IFZlY3RvcjJELnplcm87XHJcbiAgICAjY29udHJvbEIgPSBWZWN0b3IyRC56ZXJvO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udHJvbHMgdGhlIHNoYXBlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnZlLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyIGNvbnRyb2wtYVxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbnRyb2xBKCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2NvbnRyb2xBO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb250cm9sQSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jY29udHJvbEEuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImNvbnRyb2xBXCIsICh0aGlzLiNjb250cm9sQSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250cm9scyB0aGUgc2hhcGUgYXQgdGhlIGVuZCBvZiB0aGUgY3VydmUuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHIgY29udHJvbC1iXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgY29udHJvbEIoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jY29udHJvbEI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGNvbnRyb2xCKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNjb250cm9sQi5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiY29udHJvbEJcIiwgKHRoaXMuI2NvbnRyb2xCID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb250cm9sLWFcIjpcclxuICAgICAgICAgIHRoaXMuY29udHJvbEEgPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIFwiY29udHJvbC1iXCI6XHJcbiAgICAgICAgICB0aGlzLmNvbnRyb2xCID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlQmV6aWVyIGV4dGVuZHMgaGFzQ29udHJvbFBvaW50cyhcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZFxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1zaGFwZS1iZXppZXJcIiBhcyBjb25zdDtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgY29udHJvbEEsIGNvbnRyb2xCLCB0byB9ID0gdGhpcztcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0LmJlemllckN1cnZlVG8oXHJcbiAgICAgIGNvbnRyb2xBLngsXHJcbiAgICAgIGNvbnRyb2xBLnksXHJcbiAgICAgIGNvbnRyb2xCLngsXHJcbiAgICAgIGNvbnRyb2xCLnksXHJcbiAgICAgIHRvLngsXHJcbiAgICAgIHRvLnlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtc2hhcGUtYmV6aWVyXCIsIENhbnZhczJEU2hhcGVCZXppZXIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEQmV6aWVyIGV4dGVuZHMgYzJkRmlsbChcclxuICBjMmRTdHJva2UoaGFzRnJvbShoYXNDb250cm9sUG9pbnRzKEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCkpKVxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1iZXppZXJcIjtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgY29udHJvbEEsIGNvbnRyb2xCLCBmcm9tLCB0byB9ID0gdGhpcztcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0Lm1vdmVUbyhmcm9tLngsIGZyb20ueSk7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICBjb250cm9sQS54LFxyXG4gICAgICBjb250cm9sQS55LFxyXG4gICAgICBjb250cm9sQi54LFxyXG4gICAgICBjb250cm9sQi55LFxyXG4gICAgICB0by54LFxyXG4gICAgICB0by55XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLWJlemllclwiLCBDYW52YXMyREJlemllcik7XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuXHJcbnR5cGUgRXZlbnRMaXN0ZW5lckFkZGVyID0ge1xyXG4gIHJlYWRvbmx5IFtFdmVudE5hbWUgaW4ga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcF06IChcclxuICAgIGxpc3RlbmVyOiBUeXBlZEV2ZW50TGlzdGVuZXI8RXZlbnROYW1lPlxyXG4gICkgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkRCYXNlIGV4dGVuZHMgQ3VzdG9tSFRNTEVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBlbGVtZW50J3MgY3VzdG9tIEhUTUwgdGFnLiBUaGlzIGNhbiBiZSBwYXNzZWQgaW50byBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCkuXHJcbiAgICovXHJcbiAgc3RhdGljIHRhZzogc3RyaW5nO1xyXG5cclxuICAjZXZlbnRQcm94eSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJveHkoe30gYXMgRXZlbnRMaXN0ZW5lckFkZGVyLCB7XHJcbiAgICAgIGdldDxFIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcD4oXzogbmV2ZXIsIGV2ZW50TmFtZTogRSkge1xyXG4gICAgICAgIHJldHVybiAobGlzdGVuZXI6IFR5cGVkRXZlbnRMaXN0ZW5lcjxFPikgPT5cclxuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pKCk7XHJcbiAgI2V2ZXJ5RnJhbWU6IFVwZGF0ZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIDxjMmQtY2FudmFzPiBlbGVtZW50IHRoYXQgaXMgcmVuZGVyaW5nIHRoaXMgZWxlbWVudC4gVGhlIDxjMmQtY2FudmFzPlxyXG4gICAqIHdpbGwgYmUgYW4gYW5jZXN0b3Igb2YgdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGdldCBjYW52YXMoKTogQ2FudmFzMkRDYW52YXNFbGVtZW50IHtcclxuICAgIGNvbnN0IHsgcGFyZW50RWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gbnVsbCB8fCBwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQzJEQmFzZSA9PT0gZmFsc2UpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbnZhczJEIHJlbmRlcmFibGUgaXMgbm90IGEgY2hpbGQgb2YgYSBDYW52YXMyRENhbnZhc1wiKTtcclxuXHJcbiAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIENhbnZhczJEQ2FudmFzRWxlbWVudCkgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gY2FsbGVkIGJlZm9yZSByZW5kZXJpbmcuIFRoZSBmdW5jdGlvbiBoYXMgb25lIHBhcmFtZXRlcjogdGhlXHJcbiAgICogY3VycmVudCBmcmFtZSBudW1iZXIuXHJcbiAgICovXHJcbiAgZ2V0IGV2ZXJ5RnJhbWUoKTogVXBkYXRlciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuI2V2ZXJ5RnJhbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgZXZlcnlGcmFtZSh1cGRhdGVyKSB7XHJcbiAgICB0aGlzLiNldmVyeUZyYW1lID0gdXBkYXRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVyZmFjZSBmb3IgYWRkaW5nIGV2ZW50IGxpc3RlbmVycyB3aXRoIGFsdGVybmF0aXZlIHN5bnRheC4gRm9yIGV4YW1wbGUsXHJcbiAgICogZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdGVuZXIpIGJlY29tZXNcclxuICAgKiBlbGVtZW50Lmxpc3Rlbi5jbGljayhsaXN0ZW5lcikuXHJcbiAgICovXHJcbiAgZ2V0IGxpc3RlbigpOiBFdmVudExpc3RlbmVyQWRkZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuI2V2ZW50UHJveHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2FsZXMgYSB2ZWN0b3IgYnkgdGhlIGRldmljZSdzIHBpeGVsIHJhdGlvLlxyXG4gICAqL1xyXG4gIHNjYWxlQnlQaXhlbFJhdGlvKHZlY3RvcjogVmVjdG9yMkQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gbmV3IERPTVBvaW50UmVhZE9ubHkodmVjdG9yLngsIHZlY3Rvci55KS5tYXRyaXhUcmFuc2Zvcm0oXHJcbiAgICAgIG5ldyBET01NYXRyaXgoKS5zY2FsZShkZXZpY2VQaXhlbFJhdGlvLCBkZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ2xpY2tUcmFja2VyIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvY2xpY2tcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRUcmFja2VyIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMva2V5Ym9hcmRcIjtcclxuaW1wb3J0IHsgTW91c2VUcmFja2VyIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvbW91c2VcIjtcclxuaW1wb3J0IHsgYzJkU3RhbmRhbG9uZUNoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IEMyREJhc2UgfSBmcm9tIFwiLi9jMmRCYXNlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmFzZVJlbmRlcmFibGUgfSBmcm9tIFwiLi9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IERyYXdTdHlsZSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRDYW52YXNFbGVtZW50IGV4dGVuZHMgYzJkU3RhbmRhbG9uZUNoaWxkcmVuKEMyREJhc2UpIHtcclxuICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgIC4uLkMyREJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgXCJhbHBoYVwiLFxyXG4gICAgXCJ3aWR0aFwiLFxyXG4gICAgXCJoZWlnaHRcIixcclxuICAgIFwiYmFja2dyb3VuZFwiLFxyXG4gIF07XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtY2FudmFzXCI7XHJcbiAgfVxyXG5cclxuICAjYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgI2JhY2tncm91bmQ6IERyYXdTdHlsZSA9IFwibm9uZVwiO1xyXG4gICNjbGlja1RyYWNrZXI6IENsaWNrVHJhY2tlcjtcclxuICAjY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICNkZWx0YVRpbWU6IG51bWJlciA9IDA7XHJcbiAgI2RldmljZVBpeGVsUmF0aW86IG51bWJlcjtcclxuICAjZnJhbWUgPSAwO1xyXG4gICNrZXlib2FyZFRyYWNrZXIgPSBuZXcgS2V5Ym9hcmRUcmFja2VyKCk7XHJcbiAgI2xhc3RGcmFtZVRpbWUgPSAtMTtcclxuICAjbW91c2VUcmFja2VyOiBNb3VzZVRyYWNrZXI7XHJcbiAgI3JlbmRlckV2ZW50cyA9IG5ldyBTZXQ8a2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcD4oKTtcclxuICAjcmVuZGVyUXVldWVkID0gZmFsc2U7XHJcbiAgI3NldEFscGhhOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAjd2FpdEZvciA9IG5ldyBTZXQ8RWxlbWVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xyXG5cclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJOdWxsIGNvbnRleHRcIik7XHJcblxyXG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XHJcblxyXG4gICAgdGhpcy4jbW91c2VUcmFja2VyID0gbmV3IE1vdXNlVHJhY2tlcih0aGlzLmRvbUNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2tUcmFja2VyID0gbmV3IENsaWNrVHJhY2tlcih0aGlzLmRvbUNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy4jZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBhZGRFdmVudExpc3RlbmVyKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXHJcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgdW5kZWZpbmVkXHJcbiAgKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImtleWRvd25cIjpcclxuICAgICAgY2FzZSBcImtleXVwXCI6XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhbnNwYXJlbmN5IGFwcGxpZWQgdG8gYWxsIHNoYXBlcyBhbmQgaW1hZ2VzIG9uIHRoaXMgY2FudmFzLiAwLjAgaXMgZnVsbHlcclxuICAgKiB0cmFuc3BhcmVudCwgYW5kIDEuMCBpcyBmdWxseSBvcGFxdWUuIFRoaXMgZG9lcyBub3QgYXBwbHkgdG8gdGhlIGJhY2tncm91bmQuXHJcbiAgICovXHJcbiAgZ2V0IGFscGhhKCk6IG51bWJlciB7XHJcbiAgICAvKiBcclxuICAgIFRoZSByZW5kZXJpbmcgY29udGV4dCdzIGdsb2JhbEFscGhhIHByb3BlcnR5IGRvZXMgbm90IHJldGFpbiB2YWx1ZXMgc2V0ICBcclxuICAgIGJlZm9yZSB0aGUgY2FudmFzIGlzIGNvbm5lY3RlZCwgc28gdGhlIHByaXZhdGUgcHJvcGVydHkgaXMgaGVyZSB0byBhbGxvdyB0aGUgXHJcbiAgICBwcm9wZXJ0eSB0byBiZSBzZXQgd2hlbiBjcmVhdGluZyB0aGUgY2FudmFzLlxyXG4gICAgKi9cclxuICAgIHJldHVybiB0aGlzLiNzZXRBbHBoYSA/PyB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGE7XHJcbiAgfVxyXG5cclxuICBzZXQgYWxwaGEodmFsdWUpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXHJcbiAgICAgIFwiYWxwaGFcIixcclxuICAgICAgKHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IHRoaXMuI3NldEFscGhhID0gdmFsdWUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJ1ZSBpZiB0aGUgY2FudmFzIGlzIHJlbmRlcmluZyBhbmltYXRpb24uXHJcbiAgICovXHJcbiAgZ2V0IGFuaW1hdGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLiNhbmltYXRpbmc7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcImFscGhhXCI6XHJcbiAgICAgICAgICB0aGlzLmFscGhhID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIndpZHRoXCI6XHJcbiAgICAgICAgICB0aGlzLndpZHRoID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcImhlaWdodFwiOlxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiYmFja2dyb3VuZFwiOlxyXG4gICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gYXR0cmlidXRlUGFyc2VyLkNvbG9yKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdCB0aGUgYmVnaW5uaW5nIG9mIGVhY2ggZnJhbWUsIHRoZSBjYW52YXMgcmVuZGVycyBpdHMgYmFja2dyb3VuZCB1c2luZ1xyXG4gICAqIHRoaXMgc3R5bGUuIEl0IG1heSBiZSBhIENvbG9yIG9yIEdyYWRpZW50LiBXaGVuIHNldCB0byBcIm5vbmVcIiwgdGhlIGNhbnZhc1xyXG4gICAqIHdpbGwgbm90IHJlbmRlciBhIGJhY2tncm91bmQuIFRoaXMgd2lsbCByZXN1bHQgaW4gdGhlIG5leHQgZnJhbWUgYmVpbmdcclxuICAgKiByZW5kZXJlZCBvbiB0b3Agb2YgdGhlIGxhc3QgZnJhbWUncyBjb250ZW50cy5cclxuICAgKlxyXG4gICAqIEBhdHRyXHJcbiAgICogQHJlZmxlY3RcclxuICAgKi9cclxuICBnZXQgYmFja2dyb3VuZCgpOiBEcmF3U3R5bGUge1xyXG4gICAgcmV0dXJuIHRoaXMuI2JhY2tncm91bmQ7XHJcbiAgfVxyXG5cclxuICBzZXQgYmFja2dyb3VuZCh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2JhY2tncm91bmQudG9TdHJpbmcoKSA9PT0gdmFsdWUudG9TdHJpbmcoKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJiYWNrZ3JvdW5kXCIsICh0aGlzLiNiYWNrZ3JvdW5kID0gdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENlbnRlciBwb2ludCBvZiB0aGUgY2FudmFzLlxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXIoKTogVmVjdG9yMkQge1xyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBjb25zdCBwaXhlbFJhdGlvUXVlcnkgPSBgKHJlc29sdXRpb246ICR7d2luZG93LmRldmljZVBpeGVsUmF0aW99ZHBweClgO1xyXG5cclxuICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGl4ZWxSYXRpb1F1ZXJ5KTtcclxuXHJcbiAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMuI3VwZGF0ZVNjYWxlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuI3VwZGF0ZVNjYWxlKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy5xdWV1ZVJlbmRlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5xdWV1ZVJlbmRlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvKiBcclxuICAgIFRoZSByZW5kZXJpbmcgY29udGV4dCdzIGdsb2JhbEFscGhhIHByb3BlcnR5IGRvZXMgbm90IHJldGFpbiB2YWx1ZXMgc2V0ICBcclxuICAgIGJlZm9yZSB0aGUgY2FudmFzIGlzIGNvbm5lY3RlZCwgc28gdGhpcyBpcyBoZXJlIHRvIGFsbG93IHRoZSBwcm9wZXJ0eSB0byBiZVxyXG4gICAgc2V0IHdoZW4gY3JlYXRpbmcgdGhlIGNhbnZhcy5cclxuICAgICovXHJcbiAgICB0aGlzLmFscGhhID0gdGhpcy5hbHBoYTtcclxuICB9XHJcblxyXG4gIGdldCBrZXlEb3duKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2tleWJvYXJkVHJhY2tlci5kb3duO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvbUNhbnZhcygpIHtcclxuICAgIHJldHVybiB0aGlzLiNjb250ZXh0LmNhbnZhcztcclxuICB9XHJcblxyXG4gIGdldCBjbGlja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NsaWNrVHJhY2tlci5jbGlja2VkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsaWNrUG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2xpY2tUcmFja2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY29udGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbWUgcGFzc2VkIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudCBmcmFtZS5cclxuICAgKi9cclxuICBnZXQgZGVsdGFUaW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2RlbHRhVGltZTtcclxuICB9XHJcblxyXG4gIGdldCBldmVyeUZyYW1lKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmV2ZXJ5RnJhbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgZXZlcnlGcmFtZSh1cGRhdGVyOiBVcGRhdGVyIHwgbnVsbCkge1xyXG4gICAgc3VwZXIuZXZlcnlGcmFtZSA9IHVwZGF0ZXI7XHJcblxyXG4gICAgaWYgKHVwZGF0ZXIgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiNhbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBmcmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNmcmFtZTtcclxuICB9XHJcblxyXG4gIGtleUhlbGQoLi4uYXJnczogUGFyYW1ldGVyczxLZXlib2FyZFRyYWNrZXJbXCJrZXlIZWxkXCJdPikge1xyXG4gICAgcmV0dXJuIHRoaXMuI2tleWJvYXJkVHJhY2tlci5rZXlIZWxkKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAga2V5UHJldmlvdXNseUhlbGQoLi4uYXJnczogUGFyYW1ldGVyczxLZXlib2FyZFRyYWNrZXJbXCJrZXlQcmV2aW91c2x5SGVsZFwiXT4pIHtcclxuICAgIHJldHVybiB0aGlzLiNrZXlib2FyZFRyYWNrZXIua2V5UHJldmlvdXNseUhlbGQoLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFzdEtleSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNrZXlib2FyZFRyYWNrZXIubGFzdDtcclxuICB9XHJcblxyXG4gIGdldCBtb3VzZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNtb3VzZVRyYWNrZXI7XHJcbiAgfVxyXG5cclxuICBxdWV1ZVJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLiNyZW5kZXJRdWV1ZWQgfHwgdGhpcy4jd2FpdEZvci5zaXplKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jcmVuZGVyUXVldWVkID0gdHJ1ZTtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHtcclxuICAgICAgdGhpcy4jZGVsdGFUaW1lID0gdGltZSAtIHRoaXMuI2xhc3RGcmFtZVRpbWU7XHJcblxyXG4gICAgICB0aGlzLiNsYXN0RnJhbWVUaW1lID0gdGltZTtcclxuXHJcbiAgICAgIHRoaXMuI3JlbmRlcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGNhbnZhcyBlbGVtZW50IGluIHBpeGVscyBkaXZpZGVkIGJ5IHRoZSBkZXZpY2UncyBwaXhlbCByYXRpby5cclxuICAgKlxyXG4gICAqIEBhdHRyXHJcbiAgICogQHJlZmxlY3RcclxuICAgKi9cclxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRvbUNhbnZhcy53aWR0aCAvIGRldmljZVBpeGVsUmF0aW87XHJcbiAgfVxyXG5cclxuICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbyB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5kb21DYW52YXMud2lkdGggLyBkZXZpY2VQaXhlbFJhdGlvKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5kb21DYW52YXMud2lkdGggPSB2YWx1ZSAqIGRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIndpZHRoXCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyBlbGVtZW50IGluIHBpeGVscyBkaXZpZGVkIGJ5IHRoZSBkZXZpY2UncyBwaXhlbCByYXRpby5cclxuICAgKlxyXG4gICAqIEBhdHRyXHJcbiAgICogQHJlZmxlY3RcclxuICAgKi9cclxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kb21DYW52YXMuaGVpZ2h0IC8gZGV2aWNlUGl4ZWxSYXRpbztcclxuICB9XHJcblxyXG4gIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbyB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5kb21DYW52YXMuaGVpZ2h0IC8gZGV2aWNlUGl4ZWxSYXRpbykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLmhlaWdodCA9IHZhbHVlICogZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiaGVpZ2h0XCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyQ2hhbmdlPFAgZXh0ZW5kcyBrZXlvZiB0aGlzPihcclxuICAgIHByb3BlcnR5TmFtZTogUCxcclxuICAgIG5ld1ZhbHVlOiB0aGlzW1BdXHJcbiAgKTogdm9pZCB7XHJcbiAgICBzdXBlci5yZWdpc3RlckNoYW5nZShwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnF1ZXVlUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICAjcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuI3dhaXRGb3Iuc2l6ZSkge1xyXG4gICAgICB0aGlzLiNyZW5kZXJRdWV1ZWQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLiNjb250ZXh0O1xyXG5cclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgIHRoaXMuZXZlcnlGcmFtZT8uKHRoaXMuI2ZyYW1lKTtcclxuXHJcbiAgICB0aGlzLiNyZW5kZXJRdWV1ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb250ZXh0LnNjYWxlKGRldmljZVBpeGVsUmF0aW8sIGRldmljZVBpeGVsUmF0aW8pO1xyXG5cclxuICAgIGlmICh0aGlzLiNiYWNrZ3JvdW5kICE9PSBcIm5vbmVcIikge1xyXG4gICAgICBjb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xyXG5cclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLiNiYWNrZ3JvdW5kLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGUpIHtcclxuICAgICAgICBjaGlsZC5yZW5kZXIodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja1RyYWNrZXIuYWR2YW5jZUZyYW1lKCk7XHJcblxyXG4gICAgdGhpcy4ja2V5Ym9hcmRUcmFja2VyLmFkdmFuY2VGcmFtZSgpO1xyXG5cclxuICAgIHRoaXMuI21vdXNlVHJhY2tlci5hZHZhbmNlRnJhbWUoKTtcclxuXHJcbiAgICB0aGlzLiNmcmFtZSsrO1xyXG5cclxuICAgIGlmICh0aGlzLiNhbmltYXRpbmcpIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck9uKGV2ZW50TmFtZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCkge1xyXG4gICAgaWYgKHRoaXMuI3JlbmRlckV2ZW50cy5oYXMoZXZlbnROYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnF1ZXVlUmVuZGVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuI3JlbmRlckV2ZW50cy5hZGQoZXZlbnROYW1lKTtcclxuICB9XHJcblxyXG4gICN1cGRhdGVTY2FsZSgpIHtcclxuICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbzogbmV3UGl4ZWxSYXRpbyB9ID0gd2luZG93O1xyXG5cclxuICAgIGNvbnN0IHNjYWxlUmF0aW8gPSBuZXdQaXhlbFJhdGlvIC8gdGhpcy4jZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB0aGlzLmRvbUNhbnZhcy53aWR0aCAqPSBzY2FsZVJhdGlvO1xyXG4gICAgdGhpcy5kb21DYW52YXMuaGVpZ2h0ICo9IHNjYWxlUmF0aW87XHJcblxyXG4gICAgdGhpcy5kb21DYW52YXMuc3R5bGUuc2NhbGUgPSBgJHsxIC8gbmV3UGl4ZWxSYXRpb31gO1xyXG5cclxuICAgIHRoaXMuI2RldmljZVBpeGVsUmF0aW8gPSBuZXdQaXhlbFJhdGlvO1xyXG4gIH1cclxuXHJcbiAgd2FpdEZvcihlbGVtZW50OiBFbGVtZW50LCBldmVudE5hbWU6IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXAgPSBcImxvYWRcIikge1xyXG4gICAgdGhpcy4jd2FpdEZvci5hZGQoZWxlbWVudCk7XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLiN3YWl0Rm9yLmRlbGV0ZShlbGVtZW50KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiN3YWl0Rm9yLnNpemUgPT09IDApIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmdsZSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IExpbmVhckdyYWRpZW50LCBSYWRpYWxHcmFkaWVudCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IGMyZEZpbGwgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZpbGxcIjtcclxuaW1wb3J0IHsgYzJkUmVjdGFuZ2xlQm91bmRzIH0gZnJvbSBcIi4uLy4uL21peGlucy9yZWN0YW5nbGVCb3VuZHNcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHtcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCxcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbiAgQzJEVHJhbnNmb3JtZWQsXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFbGxpcHNlPEIgZXh0ZW5kcyBDMkRUcmFuc2Zvcm1lZD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGMyZFJlY3RhbmdsZUJvdW5kcyhCYXNlLCBcImNlbnRlclwiKSB7XHJcbiAgICAjc3RhcnRBbmdsZSA9IEFuZ2xlLnplcm87XHJcbiAgICAjZW5kQW5nbGUgPSBBbmdsZS5yYWRpYW5zKE1hdGguUEkgKiAyKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBzdXBlciguLi5hcmdzKTtcclxuXHJcbiAgICAgIHN1cGVyLm9yaWdpbiA9IFwiY2VudGVyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgb2Zmc2V0OiBwb3NpdGlvbiwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGNhbnZhczJELmNvbnRleHQuZWxsaXBzZShcclxuICAgICAgICBwb3NpdGlvbi54LFxyXG4gICAgICAgIHBvc2l0aW9uLnksXHJcbiAgICAgICAgd2lkdGggLyAyLFxyXG4gICAgICAgIGhlaWdodCAvIDIsXHJcbiAgICAgICAgMCxcclxuICAgICAgICB0aGlzLiNzdGFydEFuZ2xlLnJhZGlhbnMsXHJcbiAgICAgICAgdGhpcy4jZW5kQW5nbGUucmFkaWFuc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUmFkaWFsR3JhZGllbnQoXHJcbiAgICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgZ3JhZGllbnQ6IFJhZGlhbEdyYWRpZW50XHJcbiAgICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBvZmZzZXQ6IHsgeCwgeSB9LFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodCxcclxuICAgICAgfSA9IHRoaXM7XHJcblxyXG4gICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIDI7XHJcblxyXG4gICAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgsIHksIHJhZGl1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXJ0QW5nbGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzdGFydEFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGFydEFuZ2xlKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNzdGFydEFuZ2xlLmVxdWFscyh2YWx1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzdGFydEFuZ2xlXCIsICh0aGlzLiNzdGFydEFuZ2xlID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZW5kQW5nbGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNlbmRBbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZW5kQW5nbGUodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2VuZEFuZ2xlLmVxdWFscyh2YWx1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJlbmRBbmdsZVwiLCAodGhpcy4jZW5kQW5nbGUgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyREVsbGlwc2UgZXh0ZW5kcyByZW5kZXJFbGxpcHNlKFxyXG4gIGMyZFN0cm9rZShjMmRGaWxsKEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCkpXHJcbikge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLWVsbGlwc2VcIjtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1lbGxpcHNlXCIsIENhbnZhczJERWxsaXBzZSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZUVsbGlwc2UgZXh0ZW5kcyByZW5kZXJFbGxpcHNlKFxyXG4gIEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkXHJcbikge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXNoYXBlLWVsbGlwc2VcIjtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1zaGFwZS1lbGxpcHNlXCIsIENhbnZhczJEU2hhcGVFbGxpcHNlKTtcclxuIiwiaW1wb3J0IHsgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkIH0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgcmVuZGVyc1Zpc3VhbE1lZGlhIH0gZnJvbSBcIi4uLy4uL21peGlucy92aXN1YWxNZWRpYVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJESW1hZ2UgZXh0ZW5kcyByZW5kZXJzVmlzdWFsTWVkaWEoXHJcbiAgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkLFxyXG4gIFwiaW1nXCJcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtaW1hZ2VcIjtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1pbWFnZVwiLCBDYW52YXMyREltYWdlKTtcclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBjMmRTdHJva2UgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N0cm9rZVwiO1xyXG5pbXBvcnQgeyBoYXNGcm9tLCBoYXNUbyB9IGZyb20gXCIuLi8uLi9taXhpbnMvZnJvbVRvXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBMaW5lYXJHcmFkaWVudCxcclxuICBSYWRpYWxHcmFkaWVudCxcclxufSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkLFxyXG4gIEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCxcclxufSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEU2hhcGVMaW5lIGV4dGVuZHMgaGFzVG8oQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQpIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1zaGFwZS1saW5lXCI7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IHRvIH0gPSB0aGlzO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQubGluZVRvKHRvLngsIHRvLnkpO1xyXG5cclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXNoYXBlLWxpbmVcIiwgQ2FudmFzMkRTaGFwZUxpbmUpO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJETGluZSBleHRlbmRzIGMyZFN0cm9rZShcclxuICBoYXNUbyhoYXNGcm9tKEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCkpXHJcbikge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLWxpbmVcIjtcclxuICB9XHJcblxyXG4gIGdldCBjZW50ZXIoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMudG8ueCAtIHRoaXMuZnJvbS54O1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50by55IC0gdGhpcy5mcm9tLnk7XHJcblxyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMuZnJvbS54ICsgd2lkdGggLyAyLCB0aGlzLmZyb20ueSArIGhlaWdodCAvIDIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gdGhpcztcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0Lm1vdmVUbyhmcm9tLngsIGZyb20ueSk7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5saW5lVG8odG8ueCwgdG8ueSk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb25pY2FsR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogQ29uaWNhbEdyYWRpZW50XHJcbiAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB0aGlzLmNlbnRlcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMaW5lYXJHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBMaW5lYXJHcmFkaWVudFxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5mcm9tO1xyXG5cclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy50by54IC0geDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudG8ueSAtIHk7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclJhZGlhbEdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IFJhZGlhbEdyYWRpZW50XHJcbiAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnRvLnggLSB0aGlzLmZyb20ueDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudG8ueSAtIHRoaXMuZnJvbS55O1xyXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyAyO1xyXG5cclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5jZW50ZXI7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB4LCB5LCByYWRpdXMpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLWxpbmVcIiwgQ2FudmFzMkRMaW5lKTtcclxuIiwiaW1wb3J0IHsgQm9yZGVyUmFkaXVzIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvYm9yZGVyUmFkaXVzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIExpbmVhckdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG59IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IHN2Z0NoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQgeyBzdmdEaW1lbnNpb25zIH0gZnJvbSBcIi4uLy4uL21peGlucy9kaW1lbnNpb25zXCI7XHJcbmltcG9ydCB7IGMyZEZpbGwsIHN2Z0ZpbGwgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZpbGxcIjtcclxuaW1wb3J0IHtcclxuICBjMmRSZWN0YW5nbGVCb3VuZHMsXHJcbiAgc3ZnUmVjdGFuZ2xlQm91bmRzLFxyXG59IGZyb20gXCIuLi8uLi9taXhpbnMvcmVjdGFuZ2xlQm91bmRzXCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSwgc3ZnU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHtcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCxcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbiAgQzJEVHJhbnNmb3JtZWQsXHJcbiAgc3ZnVHJhbnNmb3JtLFxyXG59IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNWR0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9zdmdCYXNlXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYW52YXNSZWN0YW5nbGU8QiBleHRlbmRzIEMyRFRyYW5zZm9ybWVkPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIGMyZFJlY3RhbmdsZUJvdW5kcyhCYXNlLCBcInRvcExlZnRcIikge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcclxuICAgICAgLi4uYzJkUmVjdGFuZ2xlQm91bmRzKEJhc2UsIFwidG9wTGVmdFwiKS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwiYm9yZGVyLXJhZGl1c1wiLFxyXG4gICAgXTtcclxuXHJcbiAgICAjYm9yZGVyUmFkaXVzOiBCb3JkZXJSYWRpdXMgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5hbWUgPT09IFwiYm9yZGVyLXJhZGl1c1wiKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB0aGlzLmJvcmRlclJhZGl1cyA9IG51bGw7XHJcbiAgICAgICAgZWxzZSBpZiAobmV3VmFsdWUgPT09IHRoaXMuYm9yZGVyUmFkaXVzPy50b1N0cmluZygpKSByZXR1cm47XHJcbiAgICAgICAgZWxzZSB0aGlzLmJvcmRlclJhZGl1cyA9IGF0dHJpYnV0ZVBhcnNlci5Cb3JkZXJSYWRpdXMobmV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgI2JvcmRlclJhZGl1c0NoYW5nZUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYm9yZGVyUmFkaXVzXCIsIHRoaXMuI2JvcmRlclJhZGl1cyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXQgYm9yZGVyUmFkaXVzKCk6IEJvcmRlclJhZGl1cyB8IG51bGwge1xyXG4gICAgICByZXR1cm4gdGhpcy4jYm9yZGVyUmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBib3JkZXJSYWRpdXModmFsdWU6IEJvcmRlclJhZGl1cyB8IG51bWJlciB8IG51bGwpIHtcclxuICAgICAgY29uc3QgY3VycmVudEJvcmRlclJhZGl1cyA9IHRoaXMuYm9yZGVyUmFkaXVzO1xyXG5cclxuICAgICAgaWYgKHZhbHVlID09PSBjdXJyZW50Qm9yZGVyUmFkaXVzKSByZXR1cm47XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Qm9yZGVyUmFkaXVzID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgY3VycmVudEJvcmRlclJhZGl1cy5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihcclxuICAgICAgICAgIHRoaXMuI2JvcmRlclJhZGl1c0NoYW5nZUxpc3RlbmVyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImJvcmRlclJhZGl1c1wiLCAodGhpcy4jYm9yZGVyUmFkaXVzID0gdmFsdWUpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5ld0JvcmRlclJhZGl1cyA9XHJcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiID8gbmV3IEJvcmRlclJhZGl1cyh2YWx1ZSkgOiB2YWx1ZTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50Qm9yZGVyUmFkaXVzID09PSBudWxsKSB7XHJcbiAgICAgICAgbmV3Qm9yZGVyUmFkaXVzLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI2JvcmRlclJhZGl1c0NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcclxuICAgICAgICAgIFwiYm9yZGVyUmFkaXVzXCIsXHJcbiAgICAgICAgICAodGhpcy4jYm9yZGVyUmFkaXVzID0gbmV3Qm9yZGVyUmFkaXVzKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4jYm9yZGVyUmFkaXVzID0gbmV3Qm9yZGVyUmFkaXVzO1xyXG5cclxuICAgICAgY3VycmVudEJvcmRlclJhZGl1cy5yZXBsYWNlKFxyXG4gICAgICAgIG5ld0JvcmRlclJhZGl1cyxcclxuICAgICAgICB0aGlzLiNib3JkZXJSYWRpdXNDaGFuZ2VMaXN0ZW5lclxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdG9wTGVmdDogeyB4LCB5IH0sXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmICh0aGlzLmJvcmRlclJhZGl1cyA9PT0gbnVsbClcclxuICAgICAgICBjYW52YXMyRC5jb250ZXh0LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBjYW52YXMyRC5jb250ZXh0LnJvdW5kUmVjdChcclxuICAgICAgICAgIHgsXHJcbiAgICAgICAgICB5LFxyXG4gICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICB0aGlzLmJvcmRlclJhZGl1cy50b0FycmF5KClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUmFkaWFsR3JhZGllbnQoXHJcbiAgICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgZ3JhZGllbnQ6IFJhZGlhbEdyYWRpZW50XHJcbiAgICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSAvIDI7XHJcblxyXG4gICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuY2VudGVyO1xyXG5cclxuICAgICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB4LCB5LCByYWRpdXMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFJlY3RhbmdsZSBleHRlbmRzIHJlbmRlckNhbnZhc1JlY3RhbmdsZShcclxuICBjMmRTdHJva2UoYzJkRmlsbChDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQpKVxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1yZWN0YW5nbGVcIjtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1yZWN0YW5nbGVcIiwgQ2FudmFzMkRSZWN0YW5nbGUpO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEU2hhcGVSZWN0YW5nbGUgZXh0ZW5kcyByZW5kZXJDYW52YXNSZWN0YW5nbGUoXHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWRcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtc2hhcGUtcmVjdGFuZ2xlXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtc2hhcGUtcmVjdGFuZ2xlXCIsIENhbnZhczJEU2hhcGVSZWN0YW5nbGUpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNWR1JlY3RhbmdsZUNvbnRyb2xsZXIgZXh0ZW5kcyBzdmdTdHJva2UoXHJcbiAgc3ZnRmlsbChcclxuICAgIHN2Z0RpbWVuc2lvbnMoXHJcbiAgICAgIHN2Z1RyYW5zZm9ybShcclxuICAgICAgICBzdmdSZWN0YW5nbGVCb3VuZHMoXHJcbiAgICAgICAgICBzdmdDaGlsZHJlbihjcmVhdGVTVkdDb250cm9sbGVyKFwicmVjdFwiLCBcInN2Zy1yZWN0YW5nbGVcIikpLFxyXG4gICAgICAgICAgXCJ0b3BMZWZ0XCJcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgIClcclxuICApXHJcbikge1xyXG4gIGdldCBvcmlnaW4oKSB7XHJcbiAgICByZXR1cm4gc3VwZXIub3JpZ2luO1xyXG4gIH1cclxuXHJcbiAgc2V0IG9yaWdpbih2YWx1ZSkge1xyXG4gICAgc3VwZXIub3JpZ2luID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdmctcmVjdGFuZ2xlXCIsIFNWR1JlY3RhbmdsZUNvbnRyb2xsZXIpO1xyXG4iLCJpbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBMaW5lYXJHcmFkaWVudCxcclxuICBSYWRpYWxHcmFkaWVudCxcclxufSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBNb3VzZURhdGEgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9tb3VzZVwiO1xyXG5pbXBvcnQgeyBTaGFkb3cgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9zaGFkb3dcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBjMmRTaGFwZUNoaWxkcmVuLCBjMmRTdGFuZGFsb25lQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4vYzJkQmFzZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRFNoYXBlIH0gZnJvbSBcIi4vc2hhcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VkRXZlbnQgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEQmFzZVJlbmRlcmFibGUgZXh0ZW5kcyBDMkRCYXNlIHtcclxuICAjY2hhbmdlZFNpbmNlUmVuZGVyID0gZmFsc2U7XHJcbiAgI2NsaWNrTGlzdGVuZXJzID0gbmV3IFNldDxFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0PigpO1xyXG4gICNsb2NhbE1vdXNlID0gbmV3IE1vdXNlRGF0YSgpO1xyXG4gICNtb3VzZUxpc3RlbmVycyA9IG5ldyBTZXQ8RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdD4oKTtcclxuICAjc2hhZG93OiBTaGFkb3cgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICB0eXBlOiBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwLFxyXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXHJcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zXHJcbiAgKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImNsaWNrXCI6XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVuZGVyT24odHlwZSk7XHJcbiAgICAgICAgdGhpcy4jY2xpY2tMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJtb3VzZWRvd25cIjpcclxuICAgICAgY2FzZSBcIm1vdXNldXBcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlbW92ZVwiOlxyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbmRlck9uKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuI21vdXNlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwibW91c2VlbnRlclwiOlxyXG4gICAgICBjYXNlIFwibW91c2VvdXRcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlb3ZlclwiOlxyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbmRlck9uKFwibW91c2Vtb3ZlXCIpO1xyXG4gICAgICAgIHRoaXMuI21vdXNlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbmRlckNvbmljYWxHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBDb25pY2FsR3JhZGllbnRcclxuICApIHtcclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgdGhpcy5jYW52YXMuY2VudGVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVuZGVyTGluZWFyR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogTGluZWFyR3JhZGllbnRcclxuICApIHtcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jYW52YXM7XHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBSYWRpYWxHcmFkaWVudFxyXG4gICkge1xyXG4gICAgY29uc3QgeyBjZW50ZXIsIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY2FudmFzO1xyXG4gICAgY29uc3QgY2FudmFzUmFkaXVzID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyAyO1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgY2VudGVyLngsIGNlbnRlci55LCBjYW52YXNSYWRpdXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgdHlwZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCxcclxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxyXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc1xyXG4gICk6IHZvaWQge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJjbGlja1wiOlxyXG4gICAgICAgIHRoaXMuI2NsaWNrTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJtb3VzZWRvd25cIjpcclxuICAgICAgY2FzZSBcIm1vdXNldXBcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlZW50ZXJcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlb3V0XCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZW92ZXJcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlbW92ZVwiOlxyXG4gICAgICAgIHRoaXMuI21vdXNlTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGdldCBjaGFuZ2VkU2luY2VSZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2hhbmdlZFNpbmNlUmVuZGVyO1xyXG4gIH1cclxuXHJcbiAgI2hhbmRsZUNsaWNrKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHsgY29udGV4dCwgY2xpY2tQb3NpdGlvbjogY2FudmFzQ2xpY2ssIGNsaWNrZWQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgIGlmICghY2xpY2tlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRDbGljayA9IHRoaXMuc2NhbGVCeVBpeGVsUmF0aW8oY2FudmFzQ2xpY2spO1xyXG5cclxuICAgIGNvbnN0IGluUGF0aCA9IGNvbnRleHQuaXNQb2ludEluUGF0aChlbGVtZW50Q2xpY2sueCwgZWxlbWVudENsaWNrLnkpO1xyXG5cclxuICAgIGlmIChpblBhdGgpIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgUG9pbnRlckV2ZW50KFwiY2xpY2tcIikpO1xyXG4gIH1cclxuXHJcbiAgI2hhbmRsZU1vdXNlKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHsgY29udGV4dCwgbW91c2UgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgIGNvbnN0IGluUGF0aCA9IGNvbnRleHQuaXNQb2ludEluUGF0aChtb3VzZS54LCBtb3VzZS55KTtcclxuXHJcbiAgICBpZiAoIWluUGF0aCkge1xyXG4gICAgICBpZiAodGhpcy4jbG9jYWxNb3VzZS5vdmVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VvdXRcIikpO1xyXG5cclxuICAgICAgICB0aGlzLiNsb2NhbE1vdXNlLm92ZXIgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlb3ZlclwiKSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLiNsb2NhbE1vdXNlLmVxdWFscyhtb3VzZSkpXHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlbW92ZVwiKSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLiNsb2NhbE1vdXNlLm92ZXIpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VlbnRlclwiKSk7XHJcblxyXG4gICAgICB0aGlzLiNsb2NhbE1vdXNlLm92ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgW2luZGV4LCBidXR0b25TdGF0ZV0gb2YgbW91c2UuYnV0dG9uU3RhdGVzLmVudHJpZXMoKSkge1xyXG4gICAgICBpZiAoYnV0dG9uU3RhdGUgIT09IHRoaXMuI2xvY2FsTW91c2UuYnV0dG9uU3RhdGVzW2luZGV4XSkge1xyXG4gICAgICAgIGlmIChidXR0b25TdGF0ZSlcclxuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7IGJ1dHRvbjogaW5kZXggfSkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLCB7IGJ1dHRvbjogaW5kZXggfSkpO1xyXG5cclxuICAgICAgICB0aGlzLiNsb2NhbE1vdXNlLmJ1dHRvblN0YXRlc1tpbmRleF0gPSBidXR0b25TdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZWdpc3RlckNoYW5nZTxQIGV4dGVuZHMga2V5b2YgV3JpdGVhYmxlPHRoaXM+PihcclxuICAgIHByb3BlcnR5TmFtZTogUCxcclxuICAgIG5ld1ZhbHVlOiB0aGlzW1BdXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMuI2NoYW5nZWRTaW5jZVJlbmRlcikge1xyXG4gICAgICB0aGlzLiNjaGFuZ2VkU2luY2VSZW5kZXIgPSB0cnVlO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlZEV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZWdpc3RlckNoYW5nZShwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHsgY29udGV4dCwgZnJhbWUgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgIHRoaXMuZXZlcnlGcmFtZT8uKGZyYW1lKTtcclxuXHJcbiAgICBpZiAodGhpcy4jc2hhZG93ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuI3NoYWRvdy5yZW5kZXIoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbmRlckNoaWxkcmVuKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlKSBjaGlsZC5yZW5kZXIoY2FudmFzMkQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuXHJcbiAgYWZ0ZXJSZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhpcy4jY2hhbmdlZFNpbmNlUmVuZGVyID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuI2NsaWNrTGlzdGVuZXJzLnNpemUpIHRoaXMuI2hhbmRsZUNsaWNrKGNhbnZhczJEKTtcclxuXHJcbiAgICBpZiAodGhpcy4jbW91c2VMaXN0ZW5lcnMuc2l6ZSkgdGhpcy4jaGFuZGxlTW91c2UoY2FudmFzMkQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzMkQpO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgI3NoYWRvd0NoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxTaGFkb3c+ID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2hhZG93XCIsICh0aGlzLiNzaGFkb3cgPSBuZXdWYWx1ZSkpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIERyb3Agc2hhZG93IHJlbmRlcmVkIGJlaGluZCB0aGUgZWxlbWVudC5cclxuICAgKi9cclxuICBnZXQgc2hhZG93KCk6IFNoYWRvdyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuI3NoYWRvdztcclxuICB9XHJcblxyXG4gIHNldCBzaGFkb3codmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNzaGFkb3cgPT09IG51bGwpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICB2YWx1ZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICB0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcih2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy4jc2hhZG93LnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuI3NoYWRvd0NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzaGFkb3dcIiwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuI3NoYWRvdy5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgdmFsdWUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jc2hhZG93Q2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgIGlmICghdGhpcy4jc2hhZG93LmVxdWFscyh2YWx1ZSkpIHRoaXMuI3NoYWRvd0NoYW5nZUxpc3RlbmVyKHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFN0YW5kYWxvbmVSZW5kZXJhYmxlIGV4dGVuZHMgYzJkU3RhbmRhbG9uZUNoaWxkcmVuKFxyXG4gIENhbnZhczJEQmFzZVJlbmRlcmFibGVcclxuKSB7XHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlUGFydFJlbmRlcmFibGUgZXh0ZW5kcyBjMmRTaGFwZUNoaWxkcmVuKFxyXG4gIENhbnZhczJEQmFzZVJlbmRlcmFibGVcclxuKSB7fVxyXG4iLCJpbXBvcnQgeyBjMmRGaWxsIH0gZnJvbSBcIi4uLy4uL21peGlucy9maWxsXCI7XHJcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gXCIuLi8uLi9taXhpbnMvb2Zmc2V0XCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7IEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkIH0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlIGV4dGVuZHMgYzJkRmlsbChcclxuICBjMmRTdHJva2Uob2Zmc2V0KEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkKSlcclxuKSB7XHJcbiAgI2Nsb3NlID0gZmFsc2U7XHJcblxyXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcImNsb3NlXCJdO1xyXG5cclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1zaGFwZVwiO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKG5hbWUgPT09IFwiY2xvc2VcIikge1xyXG4gICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuY2xvc2UgPSBmYWxzZTtcclxuICAgICAgZWxzZSB0aGlzLmNsb3NlID0gYXR0cmlidXRlUGFyc2VyLmJvb2xlYW4obmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsb3NlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2Nsb3NlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNsb3NlKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jY2xvc2UgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImNsb3NlXCIsICh0aGlzLiNjbG9zZSA9IHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgIGNvbnRleHQubW92ZVRvKHRoaXMub2Zmc2V0LngsIHRoaXMub2Zmc2V0LnkpO1xyXG5cclxuICAgIHN1cGVyLnJlbmRlckNoaWxkcmVuKGNhbnZhczJEKTtcclxuXHJcbiAgICBpZiAodGhpcy4jY2xvc2UpIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGlzIGVtcHR5IHRvIHByZXZlbnQgZG91YmxlIHJlbmRlcmluZyBjaGlsZHJlblxyXG4gIHJlbmRlckNoaWxkcmVuKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHt9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1zaGFwZVwiLCBDYW52YXMyRFNoYXBlKTtcclxuIiwiaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBTVkdTVkdDb250cm9sbGVyIH0gZnJvbSBcIi4vc3ZnU1ZHXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU1ZHQ29udHJvbGxlcjxUIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KFxyXG4gIHN2Z1RhZzogVCxcclxuICBjb250cm9sbGVyVGFnOiBzdHJpbmdcclxuKSB7XHJcbiAgcmV0dXJuIGNsYXNzIFNWR0VsZW1lbnRDb250cm9sbGVyIGV4dGVuZHMgQ3VzdG9tSFRNTEVsZW1lbnQge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHN0YXRpYyB0YWcgPSBjb250cm9sbGVyVGFnO1xyXG5cclxuICAgICNtYWluOiBTVkdFbGVtZW50VGFnTmFtZU1hcFtUXTtcclxuICAgICNncm91cDogU1ZHR0VsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy4jbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgc3ZnVGFnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgdHlwZToga2V5b2YgU1ZHRWxlbWVudEV2ZW50TWFwLFxyXG4gICAgICBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcclxuICAgICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1haW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIHR5cGU6IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXAsXHJcbiAgICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxyXG4gICAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFpbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hpbGQ8VCBleHRlbmRzIE5vZGU+KG5vZGU6IFQpOiBUIHtcclxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLiNncm91cCA/PyB0aGlzLiNjcmVhdGVHcm91cCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZ3JvdXAuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgU1ZHRWxlbWVudENvbnRyb2xsZXIpIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IG5vZGUuZ3JvdXAgPz8gbm9kZS5tYWluRWxlbWVudDtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLiNncm91cCA/PyB0aGlzLiNjcmVhdGVHcm91cCgpO1xyXG5cclxuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN1cGVyLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpIHt9XHJcblxyXG4gICAgI2F0dGFjaE1haW4oKSB7XHJcbiAgICAgIGNvbnN0IHsgcGFyZW50RWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnRDb250cm9sbGVyID0gcGFyZW50RWxlbWVudCBhcyBTVkdFbGVtZW50Q29udHJvbGxlcjtcclxuXHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHBhcmVudENvbnRyb2xsZXIuZ3JvdXAgPz8gcGFyZW50Q29udHJvbGxlci5tYWluRWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IHsgZ3JvdXAgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoZ3JvdXAgPT09IG51bGwpIHRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLm1haW5FbGVtZW50KTtcclxuICAgICAgZWxzZSB0YXJnZXQuYXBwZW5kQ2hpbGQoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICB0aGlzLiNhdHRhY2hNYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI2NyZWF0ZUdyb3VwKCkge1xyXG4gICAgICBpZiAodGhpcy4jZ3JvdXAgIT09IG51bGwpIHJldHVybiB0aGlzLiNncm91cDtcclxuXHJcbiAgICAgIHRoaXMuI2dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xyXG5cclxuICAgICAgY29uc3QgeyBwYXJlbnRFbGVtZW50IH0gPSB0aGlzLm1haW5FbGVtZW50O1xyXG5cclxuICAgICAgaWYgKHBhcmVudEVsZW1lbnQgIT09IG51bGwpIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4jZ3JvdXApO1xyXG5cclxuICAgICAgdGhpcy4jZ3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5tYWluRWxlbWVudCk7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eU5hbWUsIGF0dHJpYnV0ZU5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKFxyXG4gICAgICAgIHRoaXMuX3N0eWxlQXR0cmlidXRlc1xyXG4gICAgICApKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBSZWZsZWN0LmdldCh0aGlzLCBwcm9wZXJ0eU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICB0aGlzLiNncm91cC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgU3RyaW5nKHZhbHVlKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy4jZ3JvdXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdyb3VwKCk6IFNWR0dFbGVtZW50IHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNncm91cDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFpbkVsZW1lbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNtYWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3NldFN0eWxlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICBjb25zdCB7IGdyb3VwIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGdyb3VwID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3N0eWxlQXR0cmlidXRlcygpOiB7XHJcbiAgICAgIFtLZXkgaW4ga2V5b2YgdGhpc10/OiBzdHJpbmc7XHJcbiAgICB9IHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdmdDb250YWluZXIoKTogU1ZHU1ZHRWxlbWVudCB8IG51bGwge1xyXG4gICAgICBjb25zdCB7IGdyb3VwLCBwYXJlbnRFbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGdyb3VwICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBQYXJlbnQgPSBncm91cC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoZ3JvdXBQYXJlbnQgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoZ3JvdXBQYXJlbnQgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSByZXR1cm4gZ3JvdXBQYXJlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0IHsgZ3JvdXA6IHBhcmVudEdyb3VwLCBtYWluRWxlbWVudDogcGFyZW50TWFpbiB9ID1cclxuICAgICAgICBwYXJlbnRFbGVtZW50IGFzIFNWR0VsZW1lbnRDb250cm9sbGVyO1xyXG5cclxuICAgICAgaWYgKHBhcmVudEdyb3VwIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkgcmV0dXJuIHBhcmVudEdyb3VwO1xyXG5cclxuICAgICAgaWYgKHBhcmVudE1haW4gaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSByZXR1cm4gcGFyZW50TWFpbjtcclxuXHJcbiAgICAgIHJldHVybiAocGFyZW50RWxlbWVudCBhcyBTVkdFbGVtZW50Q29udHJvbGxlcikuc3ZnQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdmdDb250YWluZXJDb250cm9sbGVyKCk6IFNWR1NWR0NvbnRyb2xsZXIgfCBudWxsIHtcclxuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBTVkdTVkdDb250cm9sbGVyKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHsgcGFyZW50RWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsKSByZXR1cm4gcGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudENvbnRyb2xsZXIgPSAocGFyZW50RWxlbWVudCBhcyBTVkdFbGVtZW50Q29udHJvbGxlcilcclxuICAgICAgICAuc3ZnQ29udGFpbmVyQ29udHJvbGxlcjtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRDb250cm9sbGVyICE9PSB1bmRlZmluZWQpIHJldHVybiBwYXJlbnRDb250cm9sbGVyO1xyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU1ZHRWxlbWVudENvbnRyb2xsZXIgPSBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVTVkdDb250cm9sbGVyPjtcclxuIiwiaW1wb3J0IHsgc3ZnQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7IHZpZXdCb3ggfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3ZpZXdCb3hcIjtcclxuaW1wb3J0IHsgY3JlYXRlU1ZHQ29udHJvbGxlciwgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IFNWR1JlY3RhbmdsZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgR3JhZGllbnQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNWR1NWR0NvbnRyb2xsZXIgZXh0ZW5kcyB2aWV3Qm94KFxyXG4gIHN2Z0NoaWxkcmVuKGNyZWF0ZVNWR0NvbnRyb2xsZXIoXCJzdmdcIiwgXCJzdmctc3ZnXCIpKVxyXG4pIHtcclxuICAjZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZGVmc1wiKTtcclxuICAjZ3JhZGllbnRzID0gbmV3IFNldDxTVkdHcmFkaWVudEVsZW1lbnQ+KCk7XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcImNsb3NlZFwiIH0pO1xyXG5cclxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZCh0aGlzLm1haW5FbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLm1haW5FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuI2RlZnMpO1xyXG5cclxuICAgIHRoaXMuX3Jlc2l6ZVZpZXdCb3goKTtcclxuICB9XHJcblxyXG4gIF9kZWZpbmVHcmFkaWVudChncmFkaWVudDogR3JhZGllbnQpIHtcclxuICAgIGlmICh0aGlzLiNncmFkaWVudHMuaGFzKGdyYWRpZW50LnN2ZykpIHJldHVybiBncmFkaWVudC5zdmcuaWQ7XHJcblxyXG4gICAgY29uc3QgcGFkU3RhcnQgPSAyO1xyXG5cclxuICAgIGNvbnN0IGlkTnVtYmVyID0gQXJyYXkuZnJvbSh0aGlzLiNncmFkaWVudHMpLnJlZHVjZSgobWF4TnVtLCBncmFkaWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBudW1TdHJpbmcgPSBncmFkaWVudC5pZC5zbGljZSgtcGFkU3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQobnVtU3RyaW5nKTtcclxuXHJcbiAgICAgIHJldHVybiBNYXRoLm1heChtYXhOdW0sIG51bSk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBjb25zdCBncmFkaWVudEVsZW1lbnQgPSBncmFkaWVudC5zdmc7XHJcblxyXG4gICAgdGhpcy4jZGVmcy5hcHBlbmRDaGlsZChncmFkaWVudEVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IGlkID0gYGdyYWRpZW50LSR7aWROdW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydChwYWRTdGFydCwgXCIwXCIpfWA7XHJcblxyXG4gICAgdGhpcy4jZ3JhZGllbnRzLmFkZChncmFkaWVudEVsZW1lbnQpO1xyXG5cclxuICAgIGdyYWRpZW50RWxlbWVudC5pZCA9IGlkO1xyXG5cclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkKGZpbGVuYW1lID0gXCJ3ZWJzcGlubmVyLnN2Z1wiKSB7XHJcbiAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XHJcbiAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIgMS4xXCIpO1xyXG5cclxuICAgIGNvbnN0IHN2Z1N0cmluZyA9IHRoaXMubWFpbkVsZW1lbnQub3V0ZXJIVE1MO1xyXG5cclxuICAgIGNvbnN0IGRvd25sb2FkQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgZG93bmxvYWRBbmNob3IuZG93bmxvYWQgPSBmaWxlbmFtZTtcclxuXHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3N2Z1N0cmluZ10sIHsgdHlwZTogXCJpbWFnZS9zdmdcIiB9KTtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAgIGRvd25sb2FkQW5jaG9yLmhyZWYgPSB1cmw7XHJcblxyXG4gICAgZG93bmxvYWRBbmNob3IuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGdldCBzdmdDb250YWluZXIoKTogU1ZHU1ZHRWxlbWVudCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubWFpbkVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdmctc3ZnXCIsIFNWR1NWR0NvbnRyb2xsZXIpO1xyXG4iLCJpbXBvcnQgeyB1c2VGb250IH0gZnJvbSBcIi4uLy4uL21peGlucy9mb250XCI7XHJcbmltcG9ydCB7IGMyZEZpbGwgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZpbGxcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHsgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkIH0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgY2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4vcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL29mZnNldFwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHsgTGluZWFyR3JhZGllbnQsIFJhZGlhbEdyYWRpZW50IH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBjMmRGaWxsKFxyXG4gIGMyZFN0cm9rZShvZmZzZXQodXNlRm9udChDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQpKSlcclxuKSB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEVGV4dCBleHRlbmRzIEJhc2Uge1xyXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbXHJcbiAgICAuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgIFwic2l6ZVwiLFxyXG4gICAgXCJhbGlnblwiLFxyXG4gICAgXCJiYXNlbGluZVwiLFxyXG4gICAgXCJmb250XCIsXHJcbiAgICBcInN0cmV0Y2hcIixcclxuICBdO1xyXG5cclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC10ZXh0XCI7XHJcbiAgfVxyXG5cclxuICAjYWxpZ246IENhbnZhc1RleHRBbGlnbiB8IG51bGwgPSBudWxsO1xyXG4gICNiYXNlbGluZTogQ2FudmFzVGV4dEJhc2VsaW5lIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhvcml6b250YWwgYWxpZ25tZW50LiBPcHRpb25zIGFyZSBcImNlbnRlclwiLCBcImVuZFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBvciBcInN0YXJ0XCIuXHJcbiAgICpcclxuICAgKiBAYXR0clxyXG4gICAqIEByZWZsZWN0XHJcbiAgICovXHJcbiAgZ2V0IGFsaWduKCk6IENhbnZhc1RleHRBbGlnbiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuI2FsaWduO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFsaWduKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jYWxpZ24gPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImFsaWduXCIsICh0aGlzLiNhbGlnbiA9IHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXHJcbiAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgY2FzZSBcImFsaWduXCI6XHJcbiAgICAgICAgdGhpcy5hbGlnbiA9IG5ld1ZhbHVlIGFzIENhbnZhc1RleHRBbGlnbjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgXCJiYXNlbGluZVwiOlxyXG4gICAgICAgIHRoaXMuYmFzZWxpbmUgPSBuZXdWYWx1ZSBhcyBDYW52YXNUZXh0QmFzZWxpbmU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBiYXNlbGluZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIHNldCBiYXNlbGluZSh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2Jhc2VsaW5lID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJiYXNlbGluZVwiLCAodGhpcy4jYmFzZWxpbmUgPSB2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICBpZiAodGhpcy4jYWxpZ24gIT09IG51bGwpIGNvbnRleHQudGV4dEFsaWduID0gdGhpcy4jYWxpZ247XHJcblxyXG4gICAgaWYgKHRoaXMuI2Jhc2VsaW5lICE9PSBudWxsKSBjb250ZXh0LnRleHRCYXNlbGluZSA9IHRoaXMuI2Jhc2VsaW5lO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGwgIT09IFwibm9uZVwiICYmIHRoaXMudGV4dENvbnRlbnQgIT09IG51bGwpXHJcbiAgICAgIGNvbnRleHQuZmlsbFRleHQodGhpcy50ZXh0Q29udGVudCwgdGhpcy5vZmZzZXQueCwgdGhpcy5vZmZzZXQueSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3Ryb2tlICE9PSBcIm5vbmVcIiAmJiB0aGlzLnRleHRDb250ZW50ICE9PSBudWxsKVxyXG4gICAgICBjb250ZXh0LnN0cm9rZVRleHQodGhpcy50ZXh0Q29udGVudCwgdGhpcy5vZmZzZXQueCwgdGhpcy5vZmZzZXQueSk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjYW52YXMyRCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMaW5lYXJHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBMaW5lYXJHcmFkaWVudFxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHRleHRUb01lYXN1cmUgPSB0aGlzLnRleHRDb250ZW50ID8/IFwiXCI7XHJcblxyXG4gICAgY29uc3QgbWVhc3VyZW1lbnRzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0VG9NZWFzdXJlKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94QXNjZW50LFxyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveERlc2NlbnQsXHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94TGVmdDogeCxcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hSaWdodDogeSxcclxuICAgICAgd2lkdGgsXHJcbiAgICB9ID0gbWVhc3VyZW1lbnRzO1xyXG5cclxuICAgIGNvbnN0IGhlaWdodCA9IGFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCArIGFjdHVhbEJvdW5kaW5nQm94QXNjZW50O1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBSYWRpYWxHcmFkaWVudFxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHRleHRUb01lYXN1cmUgPSB0aGlzLnRleHRDb250ZW50ID8/IFwiXCI7XHJcblxyXG4gICAgY29uc3QgbWVhc3VyZW1lbnRzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0VG9NZWFzdXJlKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94QXNjZW50LFxyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveERlc2NlbnQsXHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94TGVmdCxcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hSaWdodCxcclxuICAgICAgd2lkdGgsXHJcbiAgICB9ID0gbWVhc3VyZW1lbnRzO1xyXG5cclxuICAgIGNvbnN0IGhlaWdodCA9IGFjdHVhbEJvdW5kaW5nQm94QXNjZW50ICsgYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50O1xyXG5cclxuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KGhlaWdodCwgd2lkdGgpIC8gMjtcclxuXHJcbiAgICBjb25zdCBjZW50ZXJYID0gYWN0dWFsQm91bmRpbmdCb3hMZWZ0ICsgd2lkdGggLyAyO1xyXG4gICAgY29uc3QgY2VudGVyWSA9IGFjdHVhbEJvdW5kaW5nQm94UmlnaHQgKyBoZWlnaHQgLyAyO1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0Q29udGVudCgpIHtcclxuICAgIHJldHVybiBzdXBlci50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldCB0ZXh0Q29udGVudCh2YWx1ZSkge1xyXG4gICAgaWYgKHN1cGVyLnRleHRDb250ZW50ID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHN1cGVyLnRleHRDb250ZW50ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGNoYW5nZWRFdmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtdGV4dFwiLCBDYW52YXMyRFRleHQpO1xyXG4iLCJpbXBvcnQgeyBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyByZW5kZXJzVmlzdWFsTWVkaWEgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3Zpc3VhbE1lZGlhXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IsXHJcbiAgSFRNTEVsZW1lbnRDb250cm9sbGVyLFxyXG59IGZyb20gXCIuLi9kb2N1bWVudC9kb21CYXNlXCI7XHJcbmltcG9ydCB7IGNoYW5nZWRFdmVudCB9IGZyb20gXCIuL3JlbmRlcmFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFZpZGVvIGV4dGVuZHMgcmVuZGVyc1Zpc3VhbE1lZGlhKFxyXG4gIEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCxcclxuICBcInZpZGVvXCJcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtdmlkZW9cIjtcclxuICB9XHJcblxyXG4gICNmcmFtZUNhbGxiYWNrSWQgPSAtMTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgI2hhbmRsZUZyYW1lKCkge1xyXG4gICAgdGhpcy4jZnJhbWVDYWxsYmFja0lkID0gdGhpcy5tZWRpYUVsZW1lbnQucmVxdWVzdFZpZGVvRnJhbWVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VkRXZlbnQpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLm1lZGlhRWxlbWVudC5wYXVzZWQpIHRoaXMuI2hhbmRsZUZyYW1lKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBsYXkoKSB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5tZWRpYUVsZW1lbnQucGxheSgpO1xyXG5cclxuICAgIHRoaXMuI2hhbmRsZUZyYW1lKCk7XHJcblxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG5cclxuICBwYXVzZSgpIHtcclxuICAgIHRoaXMubWVkaWFFbGVtZW50LmNhbmNlbFZpZGVvRnJhbWVDYWxsYmFjayh0aGlzLiNmcmFtZUNhbGxiYWNrSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLm1lZGlhRWxlbWVudC5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhdXNlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lZGlhRWxlbWVudC5wYXVzZWQ7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVQbGF5KCkge1xyXG4gICAgaWYgKHRoaXMucGF1c2VkKSB0aGlzLnBsYXkoKTtcclxuICAgIGVsc2UgdGhpcy5wYXVzZSgpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXZpZGVvXCIsIENhbnZhczJEVmlkZW8pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhUTUxWaWRlb1dyYXBwZXIgZXh0ZW5kcyBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcclxuICBcInZpZGVvXCJcclxuKSB7fVxyXG5cclxuZXhwb3J0IHR5cGUgSFRNTFZpZGVvQ29udHJvbGxlciA9IEhUTUxFbGVtZW50Q29udHJvbGxlcjxcclxuICBcInZpZGVvXCIsXHJcbiAgSFRNTFZpZGVvV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCZXppZXIsIENhbnZhczJEU2hhcGVCZXppZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2JlemllclwiO1xyXG5pbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jMmRCYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRFbGxpcHNlLFxyXG4gIENhbnZhczJEU2hhcGVFbGxpcHNlLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvZWxsaXBzZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREltYWdlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRExpbmUsIENhbnZhczJEU2hhcGVMaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9saW5lXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRSZWN0YW5nbGUsXHJcbiAgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSxcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRFNoYXBlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zaGFwZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRFRleHQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3RleHRcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyRFZpZGVvLFxyXG4gIEhUTUxWaWRlb0NvbnRyb2xsZXIsXHJcbiAgSFRNTFZpZGVvV3JhcHBlcixcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3ZpZGVvXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IFNWR1JlY3RhbmdsZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge1xyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxuICBIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcixcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvZG9jdW1lbnQvZG9tQmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIERvY3VtZW50Q29udGFpbmVyQ29udHJvbGxlcixcclxuICBEb2N1bWVudENvbnRhaW5lcldyYXBwZXIsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL2RvY3VtZW50L2NvbnRhaW5lclwiO1xyXG5pbXBvcnQge1xyXG4gIERvY3VtZW50UGFyYWdyYXBoQ29udHJvbGxlcixcclxuICBEb2N1bWVudFBhcmFncmFwaFdyYXBwZXIsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL2RvY3VtZW50L3BhcmFncmFwaFwiO1xyXG5pbXBvcnQge1xyXG4gIERvY3VtZW50U3BhbkNvbnRyb2xsZXIsXHJcbiAgRG9jdW1lbnRTcGFuV3JhcHBlcixcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvZG9jdW1lbnQvc3BhblwiO1xyXG5pbXBvcnQgeyBIVE1MQXVkaW9Db250cm9sbGVyLCBIVE1MQXVkaW9XcmFwcGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2F1ZGlvL2F1ZGlvXCI7XHJcblxyXG50eXBlIE11bHRpcGxlQ2FsbGJhY2sgPSAoaW5kZXg6IG51bWJlcikgPT4gTm9kZSB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjMmRTdGFuZGFsb25lQ2hpbGRyZW48QiBleHRlbmRzIHR5cGVvZiBDMkRCYXNlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1iZXppZXI+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICBiZXppZXIob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRCZXppZXI+KTogQ2FudmFzMkRCZXppZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyREJlemllciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtZWxsaXBzZT5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIGVsbGlwc2Uob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRFbGxpcHNlPik6IENhbnZhczJERWxsaXBzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJERWxsaXBzZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtaW1hZ2U+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICBpbWFnZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyREltYWdlPik6IENhbnZhczJESW1hZ2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyREltYWdlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBsZShjYWxsYmFjazogTXVsdGlwbGVDYWxsYmFjayk6IE5vZGVbXTtcclxuICAgIG11bHRpcGxlKGNvdW50OiBudW1iZXIsIGNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gTm9kZSk6IE5vZGVbXTtcclxuICAgIG11bHRpcGxlPFxyXG4gICAgICBBMSBleHRlbmRzIG51bWJlciB8IE11bHRpcGxlQ2FsbGJhY2ssXHJcbiAgICAgIEEyIGV4dGVuZHMgQTEgZXh0ZW5kcyBudW1iZXIgPyAoaW5kZXg6IG51bWJlcikgPT4gTm9kZSA6IHVuZGVmaW5lZFxyXG4gICAgPihhcmcxOiBBMSwgYXJnMj86IEEyKTogTm9kZVtdIHtcclxuICAgICAgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaWYgKGFyZzIgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBjYWxsYmFja1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShhcmcxKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkID0gYXJnMihpbmRleCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChjaGlsZCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZWN1cnNlQ2hpbGRyZW4gPSAoY2hpbGRyZW46IE5vZGVbXSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gYXJnMShpbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY2hpbGRyZW47XHJcblxyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVjdXJzZUNoaWxkcmVuKGNoaWxkcmVuLmNvbmNhdChjaGlsZCksIGluZGV4ICsgMSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gcmVjdXJzZUNoaWxkcmVuKFtdLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1saW5lPmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgbGluZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRExpbmU+KTogQ2FudmFzMkRMaW5lIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRMaW5lLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1yZWN0YW5nbGU+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICByZWN0YW5nbGUob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRSZWN0YW5nbGU+KTogQ2FudmFzMkRSZWN0YW5nbGUge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFJlY3RhbmdsZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtc2hhcGU+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICBzaGFwZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFNoYXBlPik6IENhbnZhczJEU2hhcGUge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFNoYXBlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC10ZXh0PmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgdGV4dChvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFRleHQ+KTogQ2FudmFzMkRUZXh0IHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRUZXh0LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC12aWRlbz5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIHZpZGVvKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEVmlkZW8+KTogQ2FudmFzMkRWaWRlbyB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEVmlkZW8sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjMmRTaGFwZUNoaWxkcmVuPEIgZXh0ZW5kcyB0eXBlb2YgQzJEQmFzZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgYmV6aWVyKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEU2hhcGVCZXppZXI+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEU2hhcGVCZXppZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsbGlwc2Uob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRTaGFwZUVsbGlwc2U+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEU2hhcGVFbGxpcHNlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5lKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEU2hhcGVMaW5lPikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFNoYXBlTGluZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdGFuZ2xlKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEU2hhcGVSZWN0YW5nbGU+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEU2hhcGVSZWN0YW5nbGUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdDaGlsZHJlbjxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU1ZHQ29udHJvbGxlckNoaWxkPEUgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oXHJcbiAgICAgIEVsZW1lbnRDbGFzczogRSxcclxuICAgICAgb3B0aW9ucz86IE9wdGlvbnM8SW5zdGFuY2VUeXBlPEU+PlxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KEVsZW1lbnRDbGFzcywgb3B0aW9ucyk7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdGFuZ2xlKG9wdGlvbnM/OiBQYXJ0aWFsPFNWR1JlY3RhbmdsZUNvbnRyb2xsZXI+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNWR0NvbnRyb2xsZXJDaGlsZChTVkdSZWN0YW5nbGVDb250cm9sbGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRDaGlsZHJlbjxcclxuICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwLFxyXG4gIFcgZXh0ZW5kcyBIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxUPlxyXG4+KFdyYXBwZXJDb25zdHJ1Y3RvcjogVykge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFdyYXBwZXJDb25zdHJ1Y3RvciB7XHJcbiAgICBhdWRpbyhvcHRpb25zPzogT3B0aW9uczxIVE1MQXVkaW9Db250cm9sbGVyPik6IEhUTUxBdWRpb0NvbnRyb2xsZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVXcmFwcGVkQ2hpbGQoSFRNTEF1ZGlvV3JhcHBlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyKFxyXG4gICAgICBvcHRpb25zPzogT3B0aW9uczxEb2N1bWVudENvbnRhaW5lckNvbnRyb2xsZXI+XHJcbiAgICApOiBEb2N1bWVudENvbnRhaW5lckNvbnRyb2xsZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVXcmFwcGVkQ2hpbGQoRG9jdW1lbnRDb250YWluZXJXcmFwcGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJhZ3JhcGgoXHJcbiAgICAgIG9wdGlvbnM/OiBPcHRpb25zPERvY3VtZW50UGFyYWdyYXBoQ29udHJvbGxlcj5cclxuICAgICk6IERvY3VtZW50UGFyYWdyYXBoQ29udHJvbGxlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyYXBwZWRDaGlsZChEb2N1bWVudFBhcmFncmFwaFdyYXBwZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ob3B0aW9ucz86IE9wdGlvbnM8RG9jdW1lbnRTcGFuQ29udHJvbGxlcj4pOiBEb2N1bWVudFNwYW5Db250cm9sbGVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JhcHBlZENoaWxkKERvY3VtZW50U3BhbldyYXBwZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZGVvKG9wdGlvbnM/OiBPcHRpb25zPEhUTUxWaWRlb0NvbnRyb2xsZXI+KTogSFRNTFZpZGVvQ29udHJvbGxlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyYXBwZWRDaGlsZChIVE1MVmlkZW9XcmFwcGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpbWVuc2lvbnM8QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcywgXCJ3aWR0aFwiLCBcImhlaWdodFwiXTtcclxuXHJcbiAgICAjd2lkdGggPSAxMDA7XHJcbiAgICAjaGVpZ2h0ID0gMTAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxlbWVudCdzIHdpZHRoIGluIHBpeGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLiN3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3dpZHRoID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIndpZHRoXCIsICh0aGlzLiN3aWR0aCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGVtZW50J3MgaGVpZ2h0IGluIHBpeGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy4jaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2hlaWdodCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJoZWlnaHRcIiwgKHRoaXMuI2hlaWdodCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwid2lkdGhcIjpcclxuICAgICAgICAgIHRoaXMud2lkdGggPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSBcImhlaWdodFwiOlxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRTVkdEaW1lbnNpb25zPFxyXG4gIEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlciAmIFJldHVyblR5cGU8dHlwZW9mIGRpbWVuc2lvbnM+XHJcbj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgdGhpcy53aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHN1cGVyLmhlaWdodCkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIuaGVpZ2h0ID0gdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBzdXBlci53aWR0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIud2lkdGggPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN2Z0RpbWVuc2lvbnM8QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGV4dGVuZFNWR0RpbWVuc2lvbnMoZGltZW5zaW9ucyhCYXNlKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jb2xvclwiO1xyXG5pbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBEcmF3U3R5bGUsXHJcbiAgR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGJhc2VGaWxsPEIgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgRmlsbGFibGUgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gWy4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcImZpbGxcIl07XHJcblxyXG4gICAgI2ZpbGw6IERyYXdTdHlsZSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlbmRlcmluZyBzdHlsZSBpbnNpZGUgdGhlIGVsZW1lbnQuIFRoaXMgbWF5IGJlIGEgY29sb3Igb3IgZ3JhZGllbnQuXHJcbiAgICAgKiBXaGVuIHNldCB0byBudWxsLCB0aGUgcGFyZW50IGVsZW1lbnQncyBzdHlsZSBpcyB1c2VkLiBXaGVuXHJcbiAgICAgKiBzZXQgdG8gXCJub25lXCIsIHRoZSBpbnNpZGUgd2lsbCBiZSB0cmFuc3BhcmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGZpbGwoKTogRHJhd1N0eWxlIHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNmaWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmaWxsKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNmaWxsID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuI2ZpbGwgaW5zdGFuY2VvZiBDb2xvciAmJlxyXG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgQ29sb3IgJiZcclxuICAgICAgICB0aGlzLiNmaWxsLmVxdWFscyh2YWx1ZSlcclxuICAgICAgKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcclxuICAgICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgICAgKHRoaXMuI2ZpbGwgPSB2YWx1ZSA9PT0gXCJub25lXCIgPyB2YWx1ZSA6IENvbG9yLmZyb21TdHJpbmcodmFsdWUpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZWdpc3RlckNoYW5nZShcImZpbGxcIiwgKHRoaXMuI2ZpbGwgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gXCJmaWxsXCIpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuZmlsbCA9IG51bGw7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxsVmFsdWUgPSBhdHRyaWJ1dGVQYXJzZXIuRmlsbFN0cm9rZVN0eWxlKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICBpZiAoZmlsbFZhbHVlICE9PSBcImdyYWRpZW50XCIpIHRoaXMuZmlsbCA9IGZpbGxWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjMmRGaWxsPEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBGaWxsYWJsZSBleHRlbmRzIGJhc2VGaWxsKEJhc2UpIHtcclxuICAgIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgICBjb25zdCB7IGNvbnRleHQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIENvbG9yKSBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbC50b1N0cmluZygpO1xyXG4gICAgICBlbHNlIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBHcmFkaWVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBDb25pY2FsR3JhZGllbnQpIHtcclxuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5yZW5kZXJDb25pY2FsR3JhZGllbnQoY29udGV4dCwgdGhpcy5maWxsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIExpbmVhckdyYWRpZW50KSB7XHJcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMucmVuZGVyTGluZWFyR3JhZGllbnQoY29udGV4dCwgdGhpcy5maWxsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIFJhZGlhbEdyYWRpZW50KSB7XHJcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMucmVuZGVyUmFkaWFsR3JhZGllbnQoY29udGV4dCwgdGhpcy5maWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZnRlclJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLmZpbGwgIT09IFwibm9uZVwiKSBjYW52YXMyRC5jb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgIHN1cGVyLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnRmlsbDxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlRmlsbChCYXNlKSB7XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBHcmFkaWVudCkgdGhpcy4jZmlsbEdyYWRpZW50KHRoaXMuZmlsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbGwoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5maWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmaWxsKHZhbHVlKSB7XHJcbiAgICAgIGlmIChzdXBlci5maWxsPy50b1N0cmluZygpID09PSB2YWx1ZT8udG9TdHJpbmcoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIuZmlsbCA9IHZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgeyBmaWxsIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGZpbGwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIGlmIChmaWxsIGluc3RhbmNlb2YgQ29sb3IpXHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJmaWxsXCIsIGZpbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgIGVsc2UgaWYgKGZpbGwgaW5zdGFuY2VvZiBHcmFkaWVudCkgdGhpcy4jZmlsbEdyYWRpZW50KGZpbGwpO1xyXG4gICAgfVxyXG5cclxuICAgICNmaWxsR3JhZGllbnQoZ3JhZGllbnQ6IEdyYWRpZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgc3ZnQ29udGFpbmVyQ29udHJvbGxlciB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzdmdDb250YWluZXJDb250cm9sbGVyID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBncmFkaWVudElkID0gc3ZnQ29udGFpbmVyQ29udHJvbGxlci5fZGVmaW5lR3JhZGllbnQoZ3JhZGllbnQpO1xyXG5cclxuICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJmaWxsXCIsIGB1cmwoIyR7Z3JhZGllbnRJZH0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zdHlsZUF0dHJpYnV0ZXMoKTogeyBbS2V5IGluIGtleW9mIHRoaXNdPzogc3RyaW5nIH0ge1xyXG4gICAgICByZXR1cm4geyAuLi5zdXBlci5fc3R5bGVBdHRyaWJ1dGVzLCBmaWxsOiBcImZpbGxcIiB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IEFuZ2xlIH0gZnJvbSBcIi4uL2NsYXNzZXMvYW5nbGVcIjtcclxuaW1wb3J0IHsgVW5pdHMgfSBmcm9tIFwiLi4vY2xhc3Nlcy91bml0c1wiO1xyXG5pbXBvcnQgeyBNb3VzZVRyYWNrZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb3VzZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2NhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbnRTaXplVW5pdHMgPSB7XHJcbiAgLi4uVW5pdHMuc2l6ZSxcclxuICBjYXBIZWlnaHQ6IFwiY2FwXCIsXHJcbiAgY2hhcmFjdGVyV2lkdGg6IFwiY2hcIixcclxuICBjYWxjdWxhdGVkOiBcImVtXCIsXHJcbiAgeEhlaWdodDogXCJleFwiLFxyXG4gIGNoYXJhY3RlckhlaWdodDogXCJpY1wiLFxyXG4gIGxpbmVIZWlnaHQ6IFwibGhcIixcclxuICByb290Q2FwSGVpZ2h0OiBcInJjYXBcIixcclxuICByb290Q2hhcmFjdGVyV2lkdGg6IFwicmNoXCIsXHJcbiAgcm9vdFNpemU6IFwicmVtXCIsXHJcbiAgcm9vdFhIZWlnaHQ6IFwicmV4XCIsXHJcbiAgcm9vdENoYXJhY3RlckhlaWdodDogXCJpY1wiLFxyXG4gIHJvb3RMaW5lSGVpZ2h0OiBcInJsaFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuY29uc3QgZm9udFN0eWxlcyA9IHtcclxuICBub3JtYWw6IFwibm9ybWFsXCIsXHJcbiAgaXRhbGljOiBcIml0YWxpY1wiLFxyXG4gIG9ibGlxdWU6IFwib2JsaXF1ZVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvbnQ8QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgdHlwZSBGb250Q2xhc3MgPSB0eXBlb2YgRm9udDtcclxuXHJcbiAgdHlwZSBGb250U3R5bGUgPVxyXG4gICAgfCBGb250Q2xhc3NbXCJzdHlsZVwiXVtrZXlvZiBGb250Q2xhc3NbXCJzdHlsZVwiXV1cclxuICAgIHwgYG9ibGlxdWUgJHtudW1iZXJ9JHsodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl1ba2V5b2YgKHR5cGVvZiBBbmdsZSlbXCJ1bml0XCJdXX1gO1xyXG5cclxuICB0eXBlIEZvbnRTaXplVW5pdCA9ICh0eXBlb2YgZm9udFNpemVVbml0cylba2V5b2YgdHlwZW9mIGZvbnRTaXplVW5pdHNdO1xyXG5cclxuICBjbGFzcyBGb250IGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xyXG4gICAgICAuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJzaXplXCIsXHJcbiAgICAgIFwic3RyZXRjaFwiLFxyXG4gICAgICBcImZvbnQtZmFtaWx5XCIsXHJcbiAgICAgIFwiZm9udC1zdHlsZVwiLFxyXG4gICAgICBcImtlcm5pbmdcIixcclxuICAgIF07XHJcblxyXG4gICAgI2ZvbnRGYW1pbHk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgI2tlcm5pbmc6IENhbnZhc0ZvbnRLZXJuaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAjc2l6ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAjc2l6ZVVuaXQ6IEZvbnRTaXplVW5pdCA9IFwicHhcIjtcclxuICAgICNzdHJldGNoOiBDYW52YXNGb250U3RyZXRjaCB8IG51bGwgPSBudWxsO1xyXG4gICAgI2ZvbnRTdHlsZTogRm9udFN0eWxlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwic2l6ZVwiOlxyXG4gICAgICAgICAgdGhpcy5zaXplID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSBcInN0cmV0Y2hcIjpcclxuICAgICAgICAgIHRoaXMuc3RyZXRjaCA9IG5ld1ZhbHVlIGFzIENhbnZhc0ZvbnRTdHJldGNoO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgXCJmb250LWZhbWlseVwiOlxyXG4gICAgICAgICAgdGhpcy5mb250RmFtaWx5ID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSBcImZvbnQtc3R5bGVcIjpcclxuICAgICAgICAgIHRoaXMuZm9udFN0eWxlID0gbmV3VmFsdWUgYXMgRm9udFN0eWxlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgXCJrZXJuaW5nXCI6XHJcbiAgICAgICAgICB0aGlzLmtlcm5pbmcgPSBuZXdWYWx1ZSBhcyBDYW52YXNGb250S2VybmluZztcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2l6ZVVuaXQgPSBmb250U2l6ZVVuaXRzO1xyXG5cclxuICAgIHN0YXRpYyBzdHJldGNoOiB7IFtrZXk6IHN0cmluZ106IENhbnZhc0ZvbnRTdHJldGNoIH0gPSB7XHJcbiAgICAgIG5vcm1hbDogXCJub3JtYWxcIixcclxuICAgICAgdWx0cmFDb25kZW5zZWQ6IFwidWx0cmEtY29uZGVuc2VkXCIsXHJcbiAgICAgIGV4dHJhQ29uZGVuc2VkOiBcImV4dHJhLWNvbmRlbnNlZFwiLFxyXG4gICAgICBjb25kZW5zZWQ6IFwiY29uZGVuc2VkXCIsXHJcbiAgICAgIGV4cGFuZGVkOiBcImV4cGFuZGVkXCIsXHJcbiAgICAgIGV4dHJhRXhwYW5kZWQ6IFwiZXh0cmEtZXhwYW5kZWRcIixcclxuICAgICAgdWx0cmFFeHBhbmRlZDogXCJ1bHRyYS1leHBhbmRlZFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgc3R5bGUgPSBmb250U3R5bGVzO1xyXG5cclxuICAgIGdldCBmb250RmFtaWx5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZm9udEZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZm9udEZhbWlseSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jZm9udEZhbWlseSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJmb250RmFtaWx5XCIsICh0aGlzLiNmb250RmFtaWx5ID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9udFN0eWxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZm9udFN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmb250U3R5bGUodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2ZvbnRTdHlsZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJmb250U3R5bGVcIiwgKHRoaXMuI2ZvbnRTdHlsZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGtlcm5pbmcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNrZXJuaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBrZXJuaW5nKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNrZXJuaW5nID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImtlcm5pbmdcIiwgKHRoaXMuI2tlcm5pbmcgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHsgY29udGV4dCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuI2ZvbnRTdHlsZSA9PT0gbnVsbCA/IFwiXCIgOiBgJHt0aGlzLiNmb250U3R5bGV9IGA7XHJcblxyXG4gICAgICBpZiAodGhpcy4jZm9udEZhbWlseSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLiNzaXplICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBmb250RmFtbHlNYXRjaCA9IGNvbnRleHQuZm9udC5tYXRjaCgvXFxTKiQvKTtcclxuXHJcbiAgICAgICAgICBpZiAoZm9udEZhbWx5TWF0Y2ggPT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIGZhbWlseSBpbiBjdXJyZW50IGZvbnQ6ICR7Y29udGV4dC5mb250fWBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBbZm9udEZhbWlseV0gPSBmb250RmFtbHlNYXRjaDtcclxuXHJcbiAgICAgICAgICBjb250ZXh0LmZvbnQgPSBgJHtzdHlsZX0ke3RoaXMuI3NpemV9JHt0aGlzLiNzaXplVW5pdH0gJHtmb250RmFtaWx5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuI3NpemUgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBmb250U2l6ZU1hdGNoID0gY29udGV4dC5mb250Lm1hdGNoKC8oXFxTKSpcXHNcXFMqJC8pO1xyXG5cclxuICAgICAgICBpZiAoZm9udFNpemVNYXRjaCA9PT0gbnVsbCB8fCBmb250U2l6ZU1hdGNoWzBdLmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc2l6ZSBpbiBjdXJyZW50IGZvbnQ6ICR7Y29udGV4dC5mb250fWBcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gZm9udFNpemVNYXRjaFsxXTtcclxuXHJcbiAgICAgICAgY29udGV4dC5mb250ID0gYCR7c3R5bGV9JHtmb250U2l6ZX0gJHt0aGlzLiNmb250RmFtaWx5fWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGV4dC5mb250ID0gYCR7c3R5bGV9JHt0aGlzLiNzaXplfSR7dGhpcy4jc2l6ZVVuaXR9ICR7XHJcbiAgICAgICAgICB0aGlzLiNmb250RmFtaWx5XHJcbiAgICAgICAgfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLiNzdHJldGNoICE9PSBudWxsKSBjb250ZXh0LmZvbnRTdHJldGNoID0gdGhpcy4jc3RyZXRjaDtcclxuXHJcbiAgICAgIGlmICh0aGlzLiNrZXJuaW5nICE9PSBudWxsKSBjb250ZXh0LmZvbnRLZXJuaW5nID0gdGhpcy4ja2VybmluZztcclxuXHJcbiAgICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb250IHNpemUgdXNpbmcgdGhlIGN1cnJlbnQgc2l6ZVVuaXQuIFdoZW4gc2V0IHRvIG51bGwsIHRoZSBsYXN0IHJlbmRlcmVkXHJcbiAgICAgKiBlbGVtZW50J3Mgc2V0dGluZyBpcyB1c2VkLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgc2l6ZSgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3NpemU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNpemUodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3NpemUgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2l6ZVwiLCAodGhpcy4jc2l6ZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbml0IGZvciBmb250IHNpemU6IFwiY21cIiB8IFwibW1cIiB8IFwiUVwiIHwgXCJpblwiIHwgXCJwY1wiIHwgXCJwdFwiIHwgXCJweFwiIHwgXCJ2aFwiIHxcclxuICAgICAqIFwidndcIiB8IFwiY2FwXCIgfCBcImNoXCIgfCBcImVtXCIgfCBcImV4XCIgfCBcImljXCIgfCBcImxoXCIgfCBcInJjYXBcIiB8IFwicmNoXCIgfCBcInJlbVwiIHxcclxuICAgICAqIFwicmV4XCIgfCBcInJsaFwiXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXQgc2l6ZVVuaXQoKTogRm9udFNpemVVbml0IHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3NpemVVbml0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzaXplVW5pdCh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jc2l6ZVVuaXQgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2l6ZVVuaXRcIiwgKHRoaXMuI3NpemVVbml0ID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZVN0cmluZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3NpemU/LnRvU3RyaW5nKCkgPz8gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RyZXRjaCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3N0cmV0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0cmV0Y2godmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3N0cmV0Y2ggPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic3RyZXRjaFwiLCAodGhpcy4jc3RyZXRjaCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRm9udDtcclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmFzZVJlbmRlcmFibGUgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc1RvPEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsuLi5zdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwidG9cIl07XHJcblxyXG4gICAgI3RvID0gVmVjdG9yMkQueHkoMTAwLCAxMDApO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5kIHBvaW50IG9mIHRoZSBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCB0bygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3RvO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0byh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jdG8uZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInRvXCIsICh0aGlzLiN0byA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuYW1lID09PSBcInRvXCIgJiYgbmV3VmFsdWUgIT09IG51bGwpXHJcbiAgICAgICAgdGhpcy50byA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzRnJvbTxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcImZyb21cIl07XHJcblxyXG4gICAgI2Zyb20gPSBWZWN0b3IyRC56ZXJvO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRpbmcgcG9pbnQgb2YgdGhlIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIGFuY2hvci5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGZyb20oKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZnJvbTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZnJvbSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jZnJvbS5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiZnJvbVwiLCAodGhpcy4jZnJvbSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuYW1lID09PSBcImZyb21cIiAmJiBuZXdWYWx1ZSAhPT0gbnVsbClcclxuICAgICAgICB0aGlzLmZyb20gPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG5cclxuICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCwgVmVjdG9yMkRCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0PEIgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwib2Zmc2V0XCJdO1xyXG5cclxuICAgICNvZmZzZXQgPSBuZXcgVmVjdG9yMkQoMCwgMCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgICB0aGlzLiNvZmZzZXQuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jb2Zmc2V0Q2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmV3VmFsdWUgIT09IG51bGwgJiYgbmFtZSA9PT0gXCJvZmZzZXRcIikge1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAoIXRoaXMuI29mZnNldC5lcXVhbHMobmV3UG9zaXRpb24pKSB0aGlzLm9mZnNldCA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZU9mZnNldCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLiNvZmZzZXQueCArPSB4O1xyXG4gICAgICB0aGlzLiNvZmZzZXQueSArPSB5O1xyXG4gICAgfVxyXG5cclxuICAgICNvZmZzZXRDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VmVjdG9yMkRCYXNlPiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIm9mZnNldFwiLCB0aGlzLiNvZmZzZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvc2l0aW9uIG9mIHRoZSBlbGVtZW50J3Mgb3JpZ2luIHJlbGF0aXZlIHRvIGl0cyBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBvZmZzZXQoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jb2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvZmZzZXQodmFsdWUpIHtcclxuICAgICAgY29uc3QgcmVwbGFjZSA9IHRoaXMuI29mZnNldC5yZXBsYWNlLmJpbmQodGhpcy4jb2Zmc2V0KTtcclxuXHJcbiAgICAgIHJlcGxhY2UoKHRoaXMuI29mZnNldCA9IHZhbHVlKSwgdGhpcy4jb2Zmc2V0Q2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRTVkdPZmZzZXQ8XHJcbiAgQiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyICYgUmV0dXJuVHlwZTx0eXBlb2Ygb2Zmc2V0PlxyXG4+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVPZmZzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgc3VwZXIubW92ZU9mZnNldCh4LCB5KTtcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZU9mZnNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvZmZzZXQoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5vZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG9mZnNldCh2YWx1ZSkge1xyXG4gICAgICBzdXBlci5vZmZzZXQgPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZU9mZnNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVPZmZzZXQoKSB7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwieFwiLCB0aGlzLm9mZnNldC54LnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInlcIiwgdGhpcy5vZmZzZXQueS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnT2Zmc2V0PEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBleHRlbmRTVkdPZmZzZXQob2Zmc2V0KEJhc2UpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb25pY2FsR3JhZGllbnQsIExpbmVhckdyYWRpZW50IH0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucywgZXh0ZW5kU1ZHRGltZW5zaW9ucyB9IGZyb20gXCIuL2RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgZXh0ZW5kU1ZHT2Zmc2V0LCBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXRcIjtcclxuXHJcbnR5cGUgT3JpZ2luID0gXCJjZW50ZXJcIiB8IFwidG9wTGVmdFwiO1xyXG5cclxuZnVuY3Rpb24gYmFzZVJlY3RhbmdsZUJvdW5kczxCIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihcclxuICBCYXNlOiBCLFxyXG4gIGRlZmF1bHRPcmlnaW46IE9yaWdpblxyXG4pIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBkaW1lbnNpb25zKG9mZnNldChCYXNlKSkge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcclxuICAgICAgLi4uZGltZW5zaW9ucyhvZmZzZXQoQmFzZSkpLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJvcmlnaW5cIixcclxuICAgIF07XHJcblxyXG4gICAgI29yaWdpbjogT3JpZ2luID0gZGVmYXVsdE9yaWdpbjtcclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5hbWUgPT09IFwib3JpZ2luXCIpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBuZXdWYWx1ZSBhcyBPcmlnaW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9wTGVmdCgpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLiNvcmlnaW4pIHtcclxuICAgICAgICBjYXNlIFwidG9wTGVmdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xyXG4gICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldC5taW51cyh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvcFJpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b3BMZWZ0LnBsdXModGhpcy53aWR0aCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNlbnRlcigpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLiNvcmlnaW4pIHtcclxuICAgICAgICBjYXNlIFwidG9wTGVmdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0LnBsdXModGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvdHRvbUxlZnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvcExlZnQucGx1cygwLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvdHRvbVJpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b3BSaWdodC5wbHVzKDAsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3JpZ2luKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jb3JpZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvcmlnaW4odmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI29yaWdpbiA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJvcmlnaW5cIiwgKHRoaXMuI29yaWdpbiA9IHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGMyZFJlY3RhbmdsZUJvdW5kczxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KFxyXG4gIEJhc2U6IEIsXHJcbiAgZGVmYXVsdE9yaWdpbjogT3JpZ2luXHJcbikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2VSZWN0YW5nbGVCb3VuZHMoQmFzZSwgZGVmYXVsdE9yaWdpbikge1xyXG4gICAgcmVuZGVyQ29uaWNhbEdyYWRpZW50KFxyXG4gICAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgIGdyYWRpZW50OiBDb25pY2FsR3JhZGllbnRcclxuICAgICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB0aGlzLmNlbnRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTGluZWFyR3JhZGllbnQoXHJcbiAgICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgZ3JhZGllbnQ6IExpbmVhckdyYWRpZW50XHJcbiAgICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICAgIGNvbnN0IHsgeDogeDAsIHk6IHkwIH0gPSB0aGlzLnRvcExlZnQ7XHJcblxyXG4gICAgICBjb25zdCB7IHg6IHgxLCB5OiB5MSB9ID0gdGhpcy5ib3R0b21SaWdodDtcclxuXHJcbiAgICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeDAsIHkwLCB4MSAtIHgwLCB5MSAtIHkwKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnUmVjdGFuZ2xlQm91bmRzPEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oXHJcbiAgQmFzZTogQixcclxuICBkZWZhdWx0T3JpZ2luOiBPcmlnaW5cclxuKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgZXh0ZW5kU1ZHT2Zmc2V0KFxyXG4gICAgZXh0ZW5kU1ZHRGltZW5zaW9ucyhiYXNlUmVjdGFuZ2xlQm91bmRzKEJhc2UsIGRlZmF1bHRPcmlnaW4pKVxyXG4gICkge1xyXG4gICAgX3VwZGF0ZU9mZnNldCgpIHtcclxuICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnRvcExlZnQ7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwieFwiLCB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInlcIiwgeS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3JpZ2luKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIub3JpZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvcmlnaW4odmFsdWUpIHtcclxuICAgICAgc3VwZXIub3JpZ2luID0gdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLl91cGRhdGVPZmZzZXQoKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jb2xvclwiO1xyXG5pbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBEcmF3U3R5bGUsXHJcbiAgR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuXHJcbmZ1bmN0aW9uIGJhc2VTdHJva2U8QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAgIC4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgICBcInN0cm9rZVwiLFxyXG4gICAgICBcImxpbmUtd2lkdGhcIixcclxuICAgIF07XHJcblxyXG4gICAgI3N0cm9rZTogRHJhd1N0eWxlIHwgbnVsbCA9IG51bGw7XHJcbiAgICAjbGluZVdpZHRoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpZHRoIGluIHBpeGVscyBmb3IgZHJhd2luZyBsaW5lcy5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0ciBsaW5lLXdpZHRoXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgbGluZVdpZHRoKCk6IG51bWJlciB8IG51bGwge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbGluZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsaW5lV2lkdGgodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2xpbmVXaWR0aCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJsaW5lV2lkdGhcIiwgKHRoaXMuI2xpbmVXaWR0aCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVuZGVyaW5nIHN0eWxlIGZvciBsaW5lcy4gVGhpcyBtYXkgYmUgYSBjb2xvciBvciBncmFkaWVudC5cclxuICAgICAqIFdoZW4gc2V0IHRvIG51bGwsIHRoZSBwYXJlbnQgZWxlbWVudCdzIHN0eWxlIGlzIHVzZWQuIFdoZW5cclxuICAgICAqIHNldCB0byBcIm5vbmVcIiwgbm8gbGluZXMgd2lsbCBiZSBkcmF3bi5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHN0cm9rZSgpOiBEcmF3U3R5bGUgfCBudWxsIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3N0cm9rZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3Ryb2tlKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNzdHJva2UgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy4jc3Ryb2tlIGluc3RhbmNlb2YgQ29sb3IgJiZcclxuICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIENvbG9yICYmXHJcbiAgICAgICAgdGhpcy4jc3Ryb2tlLmVxdWFscyh2YWx1ZSlcclxuICAgICAgKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcclxuICAgICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAodGhpcy4jc3Ryb2tlID0gdmFsdWUgPT09IFwibm9uZVwiID8gdmFsdWUgOiBDb2xvci5mcm9tU3RyaW5nKHZhbHVlKSlcclxuICAgICAgICApO1xyXG4gICAgICBlbHNlIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzdHJva2VcIiwgKHRoaXMuI3N0cm9rZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJzdHJva2VcIjoge1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuc3Ryb2tlID0gbnVsbDtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlVmFsdWUgPSBhdHRyaWJ1dGVQYXJzZXIuRmlsbFN0cm9rZVN0eWxlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAoc3Ryb2tlVmFsdWUgIT09IFwiZ3JhZGllbnRcIikgdGhpcy5zdHJva2UgPSBzdHJva2VWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFwibGluZS13aWR0aFwiOlxyXG4gICAgICAgICAgdGhpcy5saW5lV2lkdGggPVxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYzJkU3Ryb2tlPEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBTdHJva2VhYmxlIGV4dGVuZHMgYmFzZVN0cm9rZShCYXNlKSB7XHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN0cm9rZSAhPT0gXCJub25lXCIgJiYgdGhpcy5zdHJva2UgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5zdHJva2UgaW5zdGFuY2VvZiBDb2xvcilcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZS50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3Ryb2tlIGluc3RhbmNlb2YgR3JhZGllbnQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIENvbmljYWxHcmFkaWVudCkge1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5yZW5kZXJDb25pY2FsR3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICB0aGlzLnN0cm9rZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIExpbmVhckdyYWRpZW50KVxyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5yZW5kZXJMaW5lYXJHcmFkaWVudChcclxuICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgIHRoaXMuc3Ryb2tlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBlbHNlIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIFJhZGlhbEdyYWRpZW50KVxyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5yZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgIHRoaXMuc3Ryb2tlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5saW5lV2lkdGggIT09IG51bGwpIGNvbnRleHQubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJSZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5zdHJva2UgIT09IFwibm9uZVwiKSBjYW52YXMyRC5jb250ZXh0LnN0cm9rZSgpO1xyXG5cclxuICAgICAgc3VwZXIuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdTdHJva2U8QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZVN0cm9rZShCYXNlKSB7XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIEdyYWRpZW50KSB0aGlzLiNzdHJva2VHcmFkaWVudCh0aGlzLnN0cm9rZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxpbmVXaWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmxpbmVXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbGluZVdpZHRoKHZhbHVlKSB7XHJcbiAgICAgIGlmIChzdXBlci5saW5lV2lkdGggPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci5saW5lV2lkdGggPSB2YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IHN1cGVyLmxpbmVXaWR0aDtcclxuXHJcbiAgICAgIGlmIChsaW5lV2lkdGggPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuX3NldFN0eWxlQXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGxpbmVXaWR0aC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3Ryb2tlKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuc3Ryb2tlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHJva2UodmFsdWUpIHtcclxuICAgICAgaWYgKHN1cGVyLnN0cm9rZT8udG9TdHJpbmcoKSA9PT0gdmFsdWU/LnRvU3RyaW5nKCkpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLnN0cm9rZSA9IHZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgeyBzdHJva2UgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoc3Ryb2tlID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoc3Ryb2tlIGluc3RhbmNlb2YgQ29sb3IpXHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJzdHJva2VcIiwgc3Ryb2tlLnRvU3RyaW5nKCkpO1xyXG4gICAgICBlbHNlIGlmIChzdHJva2UgaW5zdGFuY2VvZiBHcmFkaWVudCkgdGhpcy4jc3Ryb2tlR3JhZGllbnQoc3Ryb2tlKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3Ryb2tlR3JhZGllbnQoZ3JhZGllbnQ6IEdyYWRpZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgc3ZnQ29udGFpbmVyQ29udHJvbGxlciB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzdmdDb250YWluZXJDb250cm9sbGVyID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBncmFkaWVudElkID0gc3ZnQ29udGFpbmVyQ29udHJvbGxlci5fZGVmaW5lR3JhZGllbnQoZ3JhZGllbnQpO1xyXG5cclxuICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJzdHJva2VcIiwgYHVybCgjJHtncmFkaWVudElkfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3N0eWxlQXR0cmlidXRlcygpOiB7IFtLZXkgaW4ga2V5b2YgdGhpc10/OiBzdHJpbmcgfSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3VwZXIuX3N0eWxlQXR0cmlidXRlcyxcclxuICAgICAgICBzdHJva2U6IFwic3Ryb2tlXCIsXHJcbiAgICAgICAgbGluZVdpZHRoOiBcInN0cm9rZS13aWR0aFwiLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5nbGUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9hbmdsZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCwgVmVjdG9yMkRCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyREJhc2VSZW5kZXJhYmxlLFxyXG4gIENhbnZhczJEU2hhcGVQYXJ0UmVuZGVyYWJsZSxcclxuICBDYW52YXMyRFN0YW5kYWxvbmVSZW5kZXJhYmxlLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuaW1wb3J0IHsgaXNSZWFkT25seSB9IGZyb20gXCIuLi91dGxpdGllcy9yZWFkT25seVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VUcmFuc2Zvcm08QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBCYXNlVHJhbnNmb3JtIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwiYW5nbGVcIixcclxuICAgICAgXCJhbmd1bGFyLXZlbG9jaXR5XCIsXHJcbiAgICAgIFwiYW5jaG9yXCIsXHJcbiAgICAgIFwic2NhbGVcIixcclxuICAgICAgXCJ2ZWxvY2l0eVwiLFxyXG4gICAgXTtcclxuXHJcbiAgICAjYW5jaG9yID0gVmVjdG9yMkQuemVybztcclxuICAgICNhbmdsZSA9IEFuZ2xlLnJhZGlhbnMoMCk7XHJcbiAgICAjYW5ndWxhclZlbG9jaXR5ID0gQW5nbGUucmFkaWFucygwKTtcclxuICAgICNzY2FsZSA9IFZlY3RvcjJELm9uZTtcclxuICAgICN2ZWxvY2l0eSA9IFZlY3RvcjJELnplcm87XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgICB0aGlzLiNhbmNob3IuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jYW5jaG9yQ2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgdGhpcy4jYW5nbGUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jYW5nbGVDaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgI2FuZ2xlQ2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPG51bWJlcj4gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJhbmdsZVwiLCB0aGlzLiNhbmdsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvY2t3aXNlIHJvdGF0aW9uIG9mIHRoZSBlbGVtZW50IGFyb3VuZCBpdHMgYW5jaG9yLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgYW5nbGUoKTogQW5nbGUge1xyXG4gICAgICByZXR1cm4gdGhpcy4jYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuZ2xlKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2UgPSB0aGlzLiNhbmdsZS5yZXBsYWNlLmJpbmQodGhpcy4jYW5nbGUpO1xyXG5cclxuICAgICAgcmVwbGFjZSgodGhpcy4jYW5nbGUgPSB2YWx1ZSksIHRoaXMuI2FuZ2xlQ2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICNhbmd1bGFyVmVsb2NpdHlDaGFuZ2VkVGltZSA9IC0xO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9ja3dpc2Ugcm90YXRpb24gcGVyIHNlY29uZC5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0ciBhbmd1bGFyLXZlbG9jaXR5XHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgYW5ndWxhclZlbG9jaXR5KCk6IEFuZ2xlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYW5ndWxhclZlbG9jaXR5KHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNhbmd1bGFyVmVsb2NpdHkuZXF1YWxzKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4jYW5ndWxhclZlbG9jaXR5Q2hhbmdlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJhbmd1bGFyVmVsb2NpdHlcIiwgKHRoaXMuI2FuZ3VsYXJWZWxvY2l0eSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBwYXJlbnQncyBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBhbmNob3IoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jYW5jaG9yO1xyXG4gICAgfVxyXG5cclxuICAgICNhbmNob3JDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VmVjdG9yMkRCYXNlPiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImFuY2hvclwiLCB0aGlzLiNhbmNob3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXQgYW5jaG9yKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2UgPSB0aGlzLiNhbmNob3IucmVwbGFjZS5iaW5kKHRoaXMuI2FuY2hvcik7XHJcblxyXG4gICAgICByZXBsYWNlKCh0aGlzLiNhbmNob3IgPSB2YWx1ZSksIHRoaXMuI2FuY2hvckNoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBfYXBwbHlNb3ZlbWVudChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiNhbmd1bGFyVmVsb2NpdHkucmFkaWFucyAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlQ2hhbmdlID1cclxuICAgICAgICAgICh0aGlzLiNhbmd1bGFyVmVsb2NpdHlbdGhpcy4jYW5nbGUudW5pdF0gKlxyXG4gICAgICAgICAgICBNYXRoLm1pbihkZWx0YVRpbWUsIG5vdyAtIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eUNoYW5nZWRUaW1lKSkgL1xyXG4gICAgICAgICAgMTAwMDtcclxuXHJcbiAgICAgICAgaWYgKGFuZ2xlQ2hhbmdlID09PSAwKSB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYW5nbGVcIiwgdGhpcy4jYW5nbGUpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5hbmdsZVt0aGlzLiNhbmdsZS51bml0XSArPSBhbmdsZUNoYW5nZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuI3ZlbG9jaXR5LnggIT09IDAgfHwgdGhpcy4jdmVsb2NpdHkueSAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5RGVsdGEgPVxyXG4gICAgICAgICAgTWF0aC5taW4oZGVsdGFUaW1lLCBub3cgLSB0aGlzLiN2ZWxvY2l0eUNoYW5nZWRUaW1lKSAvIDEwMDA7XHJcblxyXG4gICAgICAgIGlmIChpc1JlYWRPbmx5KHRoaXMuI2FuY2hvciwgXCJ4XCIpIHx8IGlzUmVhZE9ubHkodGhpcy4jYW5jaG9yLCBcInlcIikpXHJcbiAgICAgICAgICB0aGlzLiNhbmNob3IgPSB0aGlzLiNhbmNob3IuY29weSgpO1xyXG5cclxuICAgICAgICBpZiAodmVsb2NpdHlEZWx0YSA9PT0gMCkgdGhpcy5yZWdpc3RlckNoYW5nZShcImFuY2hvclwiLCB0aGlzLiNhbmNob3IpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMubW92ZUFuY2hvcihcclxuICAgICAgICAgICAgdGhpcy4jdmVsb2NpdHkueCAqIHZlbG9jaXR5RGVsdGEsXHJcbiAgICAgICAgICAgIHRoaXMuI3ZlbG9jaXR5LnkgKiB2ZWxvY2l0eURlbHRhXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgY2FzZSBcImFuZ2xlXCI6XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5hbmdsZS50b1N0cmluZygpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBhdHRyaWJ1dGVQYXJzZXIuQW5nbGUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJhbmd1bGFyLXZlbG9jaXR5XCI6XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5hbmd1bGFyVmVsb2NpdHkudG9TdHJpbmcoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eSA9IGF0dHJpYnV0ZVBhcnNlci5BbmdsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImFuY2hvclwiOlxyXG4gICAgICAgICAgICBjb25zdCBuZXdBbmNob3IgPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuI2FuY2hvci5lcXVhbHMobmV3QW5jaG9yKSkgdGhpcy5hbmNob3IgPSBuZXdBbmNob3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInNjYWxlXCI6XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjYWxlID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLiNzY2FsZS5lcXVhbHMobmV3U2NhbGUpKSB0aGlzLnNjYWxlID0gbmV3U2NhbGU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInZlbG9jaXR5XCI6XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVBbmNob3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy4jYW5jaG9yLnggKz0geDtcclxuICAgICAgdGhpcy4jYW5jaG9yLnkgKz0geTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBhbmdsZSAtIEFuZ2xlIHRvIHR1cm4gdGhlIGVsZW1lbnQgaW4gdGhlIGNsb2Nrd2lzZSBkaXJlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJvdGF0ZUNsb2Nrd2lzZShhbmdsZTogQW5nbGUpIHtcclxuICAgICAgdGhpcy5hbmdsZSA9IEFuZ2xlLnJhZGlhbnModGhpcy4jYW5nbGUucmFkaWFucyArIGFuZ2xlLnJhZGlhbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGFuZ2xlIC0gQW5nbGUgdG8gdHVybiB0aGUgZWxlbWVudCBpbiB0aGUgY291bnRlcmNsb2Nrd2lzZSBkaXJlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJvdGF0ZUNvdW50ZXJjbG9ja3dpc2UoYW5nbGU6IEFuZ2xlKSB7XHJcbiAgICAgIHRoaXMuYW5nbGUgPSBBbmdsZS5yYWRpYW5zKHRoaXMuI2FuZ2xlLnJhZGlhbnMgLSBhbmdsZS5yYWRpYW5zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE11bHRpcGxpZXMgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgaW4gdGhlIHggYW5kIHkgZGlyZWN0aW9uLiBUaGlzIGFsc28gYWZmZWN0c1xyXG4gICAgICogbGluZSB3aWR0aC4gU2V0dGluZyBzY2FsZSB0byBhIG51bWJlciB3aWxsIHNldCBib3RoIHRoZSB4IGFuZCB5IHNjYWxlIHRvIHRoYXRcclxuICAgICAqIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgc2NhbGUoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNjYWxlKHZhbHVlOiBWZWN0b3IyRCB8IG51bWJlcikge1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgY29uc3QgdmVjdG9yVmFsdWUgPSBuZXcgVmVjdG9yMkQodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4jc2NhbGUuZXF1YWxzKHZlY3RvclZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2NhbGVcIiwgKHRoaXMuI3NjYWxlID0gdmVjdG9yVmFsdWUpKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLiNzY2FsZS5lcXVhbHModmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzY2FsZVwiLCAodGhpcy4jc2NhbGUgPSB2YWx1ZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3ZlbG9jaXR5Q2hhbmdlZFRpbWUgPSAtMTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuY2hvciBtb3ZlbWVudCBwZXIgc2Vjb25kLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgdmVsb2NpdHkoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jdmVsb2NpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZlbG9jaXR5KHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiN2ZWxvY2l0eS5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwidmVsb2NpdHlcIiwgKHRoaXMuI3ZlbG9jaXR5ID0gdmFsdWUpKTtcclxuXHJcbiAgICAgIHRoaXMuI3ZlbG9jaXR5Q2hhbmdlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjMmRUcmFuc2Zvcm08XHJcbiAgQiBleHRlbmRzIFJldHVyblR5cGU8dHlwZW9mIGJhc2VUcmFuc2Zvcm08dHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+PlxyXG4+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgQzJEVHJhbnNmb3JtIGV4dGVuZHMgQmFzZSB7XHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMuYW5jaG9yLngsIHRoaXMuYW5jaG9yLnkpO1xyXG4gICAgICBjb250ZXh0LnJvdGF0ZSh0aGlzLmFuZ2xlLnJhZGlhbnMpO1xyXG4gICAgICBjb250ZXh0LnNjYWxlKHRoaXMuc2NhbGUueCwgdGhpcy5zY2FsZS55KTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlclJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIHRoaXMuX2FwcGx5TW92ZW1lbnQoY2FudmFzMkQuZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDMkRUcmFuc2Zvcm1lZCA9IFJldHVyblR5cGU8dHlwZW9mIGMyZFRyYW5zZm9ybT47XHJcblxyXG5leHBvcnQgY2xhc3MgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkIGV4dGVuZHMgYzJkVHJhbnNmb3JtKFxyXG4gIGJhc2VUcmFuc2Zvcm0oQ2FudmFzMkRTdGFuZGFsb25lUmVuZGVyYWJsZSlcclxuKSB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkIGV4dGVuZHMgYzJkVHJhbnNmb3JtKFxyXG4gIGJhc2VUcmFuc2Zvcm0oQ2FudmFzMkRTaGFwZVBhcnRSZW5kZXJhYmxlKVxyXG4pIHt9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnVHJhbnNmb3JtPEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBTVkdDb250cm9sbGVyVHJhbnNmb3JtIGV4dGVuZHMgYmFzZVRyYW5zZm9ybShCYXNlKSB7XHJcbiAgICBnZXQgYW5jaG9yKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuYW5jaG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhbmNob3IodmFsdWUpIHtcclxuICAgICAgY29uc3QgY2hhbmdlID0gIXN1cGVyLmFuY2hvci5lcXVhbHModmFsdWUpO1xyXG5cclxuICAgICAgc3VwZXIuYW5jaG9yID0gdmFsdWU7XHJcblxyXG4gICAgICBpZiAoY2hhbmdlKSB0aGlzLiN1cGRhdGVUcmFuc2Zvcm1BdHRyaWJ1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAjYW5nbGVDaGFuZ2VMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgdGhpcy4jdXBkYXRlVHJhbnNmb3JtQXR0cmlidXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBhbmdsZSgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhbmdsZSh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBjaGFuZ2UgPSAhc3VwZXIuYW5nbGUuZXF1YWxzKHZhbHVlKTtcclxuXHJcbiAgICAgIHN1cGVyLmFuZ2xlID0gdmFsdWU7XHJcblxyXG4gICAgICBzdXBlci5hbmdsZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNhbmdsZUNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIGlmIChjaGFuZ2UpIHRoaXMuI3VwZGF0ZVRyYW5zZm9ybUF0dHJpYnV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgICAgdGhpcy4jdXBkYXRlVHJhbnNmb3JtQXR0cmlidXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3VwZGF0ZVRyYW5zZm9ybUF0dHJpYnV0ZSgpIHtcclxuICAgICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IERPTU1hdHJpeCgpXHJcbiAgICAgICAgLnRyYW5zbGF0ZVNlbGYodGhpcy5hbmNob3IueCwgdGhpcy5hbmNob3IueSlcclxuICAgICAgICAucm90YXRlU2VsZih0aGlzLmFuZ2xlLmRlZ3JlZXMpXHJcbiAgICAgICAgLnNjYWxlU2VsZih0aGlzLnNjYWxlLngsIHRoaXMuc2NhbGUueSk7XHJcblxyXG4gICAgICBpZiAodHJhbnNmb3JtLmlzSWRlbnRpdHkpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgZSwgZiB9ID0gdHJhbnNmb3JtO1xyXG5cclxuICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcclxuICAgICAgICBgbWF0cml4KCR7YX0gJHtifSAke2N9ICR7ZH0gJHtlfSAke2Z9KWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMgfSBmcm9tIFwiLi9kaW1lbnNpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmlld0JveDxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBkaW1lbnNpb25zKEJhc2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3Jlc2l6ZVZpZXdCb3goKSB7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwidmlld0JveFwiLFxyXG4gICAgICAgIGAkezB9ICR7MH0gJHt0aGlzLndpZHRofSAke3RoaXMuaGVpZ2h0fWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBzdXBlci5oZWlnaHQpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLmhlaWdodCA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fcmVzaXplVmlld0JveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB3aWR0aCh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHN1cGVyLndpZHRoKSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci53aWR0aCA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fcmVzaXplVmlld0JveCgpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBjMmRSZWN0YW5nbGVCb3VuZHMgfSBmcm9tIFwiLi9yZWN0YW5nbGVCb3VuZHNcIjtcclxuaW1wb3J0IHsgQzJEVHJhbnNmb3JtZWQgfSBmcm9tIFwiLi90cmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJzVmlzdWFsTWVkaWE8XHJcbiAgQiBleHRlbmRzIEMyRFRyYW5zZm9ybWVkLFxyXG4gIFQgZXh0ZW5kcyBcImltZ1wiIHwgXCJ2aWRlb1wiXHJcbj4oQmFzZTogQiwgbWVkaWFUYWc6IFQpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjMmRSZWN0YW5nbGVCb3VuZHMoQmFzZSwgXCJ0b3BMZWZ0XCIpIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcInNvdXJjZVwiXTtcclxuXHJcbiAgICAjbWVkaWFFbGVtZW50OiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF07XHJcbiAgICAjd2lkdGhTZXQgPSBmYWxzZTtcclxuICAgICNoZWlnaHRTZXQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBzdXBlciguLi5hcmdzKTtcclxuXHJcbiAgICAgIHRoaXMuI21lZGlhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobWVkaWFUYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcInNvdXJjZVwiOlxyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSBcIndpZHRoXCI6XHJcbiAgICAgICAgICB0aGlzLndpZHRoID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNhc2UgXCJoZWlnaHRcIjpcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgdGhpcy5jYW52YXMud2FpdEZvcihcclxuICAgICAgICB0aGlzLiNtZWRpYUVsZW1lbnQsXHJcbiAgICAgICAgbWVkaWFUYWcgPT09IFwidmlkZW9cIiA/IFwiY2FucGxheVwiIDogXCJsb2FkXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWFFbGVtZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWVkaWFFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVVJMIG9yIGxvY2FsIHBhdGggdG8gdGhlIG1lZGlhIGZpbGUgc291cmNlIGZvciB0aGlzIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBzb3VyY2UoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudC5zcmM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNvdXJjZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHRoaXMuI21lZGlhRWxlbWVudC5zcmMpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzb3VyY2VcIiwgKHRoaXMuI21lZGlhRWxlbWVudC5zcmMgPSB2YWx1ZSkpO1xyXG5cclxuICAgICAgdGhpcy4jbWVkaWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgbWVkaWFUYWcgPT09IFwiaW1nXCIgPyBcImxvYWRcIiA6IFwiY2FucGxheVwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLiN3aWR0aFNldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4jaGVpZ2h0U2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aFJhdGlvID0gdGhpcy53aWR0aCAvIHRoaXMubWVkaWFXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tZWRpYUhlaWdodCAqIHdpZHRoUmF0aW87XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuI2hlaWdodFNldCkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHRSYXRpbyA9IHRoaXMuaGVpZ2h0IC8gdGhpcy5tZWRpYUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1lZGlhV2lkdGggKiBoZWlnaHRSYXRpbztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1lZGlhV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tZWRpYUhlaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIGNhbnZhczJELmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuI21lZGlhRWxlbWVudCxcclxuICAgICAgICB0aGlzLnRvcExlZnQueCxcclxuICAgICAgICB0aGlzLnRvcExlZnQueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjYW52YXMyRC5jb250ZXh0LnJlY3QoXHJcbiAgICAgICAgdGhpcy50b3BMZWZ0LngsXHJcbiAgICAgICAgdGhpcy50b3BMZWZ0LnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lZGlhV2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNtZWRpYUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50XHJcbiAgICAgICAgPyB0aGlzLiNtZWRpYUVsZW1lbnQubmF0dXJhbFdpZHRoXHJcbiAgICAgICAgOiB0aGlzLiNtZWRpYUVsZW1lbnQudmlkZW9XaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNtZWRpYUVsZW1lbnQud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJvdW5kZWRWYWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpO1xyXG5cclxuICAgICAgaWYgKHJvdW5kZWRWYWx1ZSA9PT0gdGhpcy53aWR0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy4jd2lkdGhTZXQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIndpZHRoXCIsICh0aGlzLiNtZWRpYUVsZW1lbnQud2lkdGggPSByb3VuZGVkVmFsdWUpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiNoZWlnaHRTZXQgfHwgdGhpcy5tZWRpYVdpZHRoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCB3aWR0aFJhdGlvID0gdmFsdWUgLyB0aGlzLm1lZGlhV2lkdGg7XHJcblxyXG4gICAgICB0aGlzLmhlaWdodCAqPSB3aWR0aFJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZWRpYUhlaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnRcclxuICAgICAgICA/IHRoaXMuI21lZGlhRWxlbWVudC5uYXR1cmFsSGVpZ2h0XHJcbiAgICAgICAgOiB0aGlzLiNtZWRpYUVsZW1lbnQudmlkZW9IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudC5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xyXG4gICAgICBjb25zdCByb3VuZGVkVmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuXHJcbiAgICAgIGlmIChyb3VuZGVkVmFsdWUgPT09IHRoaXMuaGVpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLiNoZWlnaHRTZXQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImhlaWdodFwiLCAodGhpcy4jbWVkaWFFbGVtZW50LmhlaWdodCA9IHJvdW5kZWRWYWx1ZSkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuI3dpZHRoU2V0IHx8IHRoaXMubWVkaWFIZWlnaHQgPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IGhlaWdodFJhdGlvID0gdmFsdWUgLyB0aGlzLm1lZGlhSGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy53aWR0aCAqPSBoZWlnaHRSYXRpbztcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEFuZ2xlLCBBbmdsZVVuaXRTaG9ydCB9IGZyb20gXCIuLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IEJvcmRlclJhZGl1cyB9IGZyb20gXCIuLi9jbGFzc2VzL2JvcmRlclJhZGl1c1wiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuLi9jbGFzc2VzL2NvbG9yXCI7XHJcbmltcG9ydCB7IERyYXdTdHlsZSB9IGZyb20gXCIuLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuXHJcbnR5cGUgQXR0cmlidXRlVHlwZU1hcCA9IHtcclxuICBudW1iZXI6IG51bWJlcjtcclxuICBib29sZWFuOiBib29sZWFuO1xyXG4gIEJvcmRlclJhZGl1czogQm9yZGVyUmFkaXVzO1xyXG4gIENvbG9yOiBDb2xvcjtcclxuICBGaWxsU3Ryb2tlU3R5bGU6IERyYXdTdHlsZTtcclxuICBWZWN0b3IyRDogVmVjdG9yMkQ7XHJcbiAgQW5nbGU6IEFuZ2xlO1xyXG59O1xyXG5cclxudHlwZSBBdHRyaWJ1dGVUeXBlUGFyc2VyID0ge1xyXG4gIFtUeXBlIGluIGtleW9mIEF0dHJpYnV0ZVR5cGVNYXBdOiAoXHJcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nXHJcbiAgKSA9PiBBdHRyaWJ1dGVUeXBlTWFwW1R5cGVdO1xyXG59O1xyXG5cclxuY29uc3QgYW5nbGVNYXRjaCA9IG5ldyBSZWdFeHAoXHJcbiAgYChbXFxcXGRcXFxcLl0rKVxcXFxzKigke09iamVjdC52YWx1ZXMoQW5nbGUudW5pdCkuam9pbihcInxcIil9KWBcclxuKTtcclxuXHJcbmNvbnN0IGluY2x1ZGVzTnVtYmVycyA9IChzdHI6IHN0cmluZykgPT4gc3RyLm1hdGNoKC9cXGQvKSAhPT0gbnVsbDtcclxuXHJcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVQYXJzZXI6IEF0dHJpYnV0ZVR5cGVQYXJzZXIgPSB7XHJcbiAgbnVtYmVyKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmdWYWx1ZSk7XHJcbiAgfSxcclxuICBib29sZWFuKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHN0cmluZ1ZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgXCJ0cnVlXCI6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNhc2UgXCJmYWxzZVwiOlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSAke3N0cmluZ1ZhbHVlfSBhcyBib29sZWFuLmApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgQm9yZGVyUmFkaXVzKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBjb25zdCBhcmdzID0gc3RyaW5nVmFsdWUuc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgIGNvbnN0IFthcmcxLCBhcmcyLCBhcmczLCBhcmc0XSA9IGFyZ3MubWFwKGF0dHJpYnV0ZVBhcnNlci5udW1iZXIpO1xyXG5cclxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IG5ldyBCb3JkZXJSYWRpdXMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCk7XHJcblxyXG4gICAgcmV0dXJuIGJvcmRlclJhZGl1cztcclxuICB9LFxyXG4gIENvbG9yKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBjb25zdCBhcmdzID0gc3RyaW5nVmFsdWUuc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgIGNvbnN0IG51bWJlcnMgPSBhcmdzLm1hcChhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKTtcclxuXHJcbiAgICBzd2l0Y2ggKG51bWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gaXNOYU4obnVtYmVyc1swXSkgPyBuZXcgQ29sb3IoYXJnc1swXSkgOiBuZXcgQ29sb3IobnVtYmVyc1swXSk7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0pO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihudW1iZXJzWzBdLCBudW1iZXJzWzFdLCBudW1iZXJzWzJdKTtcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIGBGb3VuZCAke251bWJlcnMubGVuZ3RofSBhcmd1bWVudHMgcGFzc2VkIHRvIENvbG9yIGF0dHJpYnV0ZSwgYnV0IHRoZSBtYXhpbXVtIGlzIDRgXHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0sIG51bWJlcnNbM10pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgRmlsbFN0cm9rZVN0eWxlKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBpZiAoc3RyaW5nVmFsdWUgPT09IFwibm9uZVwiIHx8IHN0cmluZ1ZhbHVlID09PSBcImdyYWRpZW50XCIpXHJcbiAgICAgIHJldHVybiBzdHJpbmdWYWx1ZTtcclxuXHJcbiAgICByZXR1cm4gYXR0cmlidXRlUGFyc2VyLkNvbG9yKHN0cmluZ1ZhbHVlKTtcclxuICB9LFxyXG4gIFZlY3RvcjJEKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBjb25zdCBudW1iZXJzID0gc3RyaW5nVmFsdWUuc3BsaXQoXCIsXCIpLm1hcChhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKTtcclxuXHJcbiAgICBpZiAobnVtYmVycy5zb21lKE51bWJlci5pc05hTikpIHRocm93IG5ldyBFcnJvcihgTmFOOiAke3N0cmluZ1ZhbHVlfWApO1xyXG5cclxuICAgIHN3aXRjaCAobnVtYmVycy5sZW5ndGgpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQoKTtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQobnVtYmVyc1swXSk7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBgRm91bmQgJHtudW1iZXJzLmxlbmd0aH0gYXJndW1lbnRzIHBhc3NlZCB0byBWZWN0bzJEIGF0dHJpYnV0ZSwgYnV0IHRoZSBtYXhpbXVtIGlzIDJgXHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKG51bWJlcnNbMF0sIG51bWJlcnNbMV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgQW5nbGUoc3RyaW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSBzdHJpbmdWYWx1ZS5tYXRjaChhbmdsZU1hdGNoKTtcclxuXHJcbiAgICBpZiAoYXJncyA9PT0gbnVsbClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbmdsZSBhcmd1bWVudHMgY291bGQgbm90IGJlIHBhcnNlZDogJHtzdHJpbmdWYWx1ZX1gKTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIoYXJnc1sxXSk7XHJcblxyXG4gICAgY29uc3QgdW5pdCA9IGFyZ3NbMl0gYXMgQW5nbGVVbml0U2hvcnQ7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBbmdsZSh1bml0LCB2YWx1ZSk7XHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNhbWVsVG9LZWJhYkNhc2UgPSAoY2FtZWw6IHN0cmluZykgPT5cclxuICBjYW1lbC5yZXBsYWNlKFxyXG4gICAgLyguKShbQS1aXSkvZyxcclxuICAgIChfLCBiZWZvcmVDaGFyYWN0ZXI6IHN0cmluZywgdXBwZXJDaGFyYWN0ZXI6IHN0cmluZykgPT5cclxuICAgICAgYCR7YmVmb3JlQ2hhcmFjdGVyfS0ke3VwcGVyQ2hhcmFjdGVyLnRvTG93ZXJDYXNlKCl9YFxyXG4gICk7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc1JlYWRPbmx5KG9iajoge30sIHByb3BlcnR5S2V5OiBQcm9wZXJ0eUtleSkge1xyXG4gIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcGVydHlLZXkpO1xyXG5cclxuICBpZiAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcclxuXHJcbiAgICBpZiAocHJvdG90eXBlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYENvdWxkIG5vdCBmaW5kIHByb3BlcnR5IHdpdGgga2V5OiAke1N0cmluZyhwcm9wZXJ0eUtleSl9YFxyXG4gICAgICApO1xyXG5cclxuICAgIHJldHVybiBpc1JlYWRPbmx5KHByb3RvdHlwZSwgcHJvcGVydHlLZXkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRlc2NyaXB0b3Iud3JpdGFibGUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIGRlc2NyaXB0b3Iuc2V0ID09PSB1bmRlZmluZWQ7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvY2FudmFzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRSZWN0YW5nbGUsXHJcbiAgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSxcclxufSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvcmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vY2xhc3Nlcy9jb2xvclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQW5nbGUgfSBmcm9tIFwiLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEVGV4dCB9IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC90ZXh0XCI7XHJcbmltcG9ydCB7IFVuaXRzIH0gZnJvbSBcIi4vY2xhc3Nlcy91bml0c1wiO1xyXG5pbXBvcnQgeyBTdGF0ZSwgY3JlYXRlU3RhdGUgfSBmcm9tIFwiLi9jbGFzc2VzL3N0YXRlXCI7XHJcbmltcG9ydCB7IENhbnZhczJETGluZSwgQ2FudmFzMkRTaGFwZUxpbmUgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvbGluZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRFNoYXBlIH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL3NoYXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRFbGxpcHNlLFxyXG4gIENhbnZhczJEU2hhcGVFbGxpcHNlLFxyXG59IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC9lbGxpcHNlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmV6aWVyLCBDYW52YXMyRFNoYXBlQmV6aWVyIH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL2JlemllclwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREltYWdlIH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL2ltYWdlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEVmlkZW8gfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvdmlkZW9cIjtcclxuaW1wb3J0IHtcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL2MyZEJhc2VcIjtcclxuaW1wb3J0IHsgU2hhZG93IH0gZnJvbSBcIi4vY2xhc3Nlcy9zaGFkb3dcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCIuL2VsZW1lbnRzL2RvY3VtZW50L2RvbUJhc2VcIjtcclxuaW1wb3J0IHsgQm9yZGVyUmFkaXVzIH0gZnJvbSBcIi4vY2xhc3Nlcy9ib3JkZXJSYWRpdXNcIjtcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSBcIi4vY2xhc3Nlcy9yYW5kb21cIjtcclxuXHJcbmV4cG9ydCB0eXBlIENTU0xlbmd0aFVuaXQgPSAodHlwZW9mIFVuaXRzLnNpemUpW2tleW9mIHR5cGVvZiBVbml0cy5zaXplXTtcclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0b3A6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPjtcclxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQ6IG51bWJlciwgc3RvcDogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+O1xyXG5mdW5jdGlvbiByYW5nZShhcmcxOiBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xyXG4gIGNvbnN0IFtzdGFydCwgc3RvcF0gPSBhcmcyID09PSB1bmRlZmluZWQgPyBbMCwgYXJnMV0gOiBbYXJnMSwgYXJnMl07XHJcblxyXG4gIGNvbnN0IHN0ZXAgPSBzdG9wID4gc3RhcnQgPyAxIDogLTE7XHJcblxyXG4gIGxldCB2YWx1ZSA9IHN0YXJ0O1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCk6IEl0ZXJhdG9yUmVzdWx0PG51bWJlcj4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICB2YWx1ZSxcclxuICAgICAgZG9uZTogc3RhcnQgKyBzdGVwID09PSBzdG9wLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YWx1ZSArPSBzdGVwO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIG5leHQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTXVsdGlwbGU8UiBleHRlbmRzIE5vZGU+KFxyXG4gIGNvdW50OiBudW1iZXIsXHJcbiAgZ2VuZXJhdG9yOiAoaW5kZXg6IG51bWJlcikgPT4gUlxyXG4pIHtcclxuICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IGdlbmVyYXRvcihpbmRleCkpO1xyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XHJcbiAgICBkZWZpbmU8RSBleHRlbmRzIHR5cGVvZiBDMkRCYXNlPih0YWc6IEVbXCJ0YWdcIl0sIEVsZW1lbnRDbGFzczogRSk6IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtY2FudmFzXCIsIENhbnZhczJEQ2FudmFzRWxlbWVudCk7XHJcblxyXG5leHBvcnQgdHlwZSBXZWJTcGlubmVyRWxlbWVudCA9IHtcclxuICBDYW52YXMyRENhbnZhc0VsZW1lbnQ6IENhbnZhczJEQ2FudmFzRWxlbWVudDtcclxuICBDYW52YXMyREJlemllcjogQ2FudmFzMkRCZXppZXI7XHJcbiAgQ2FudmFzMkRFbGxpcHNlOiBDYW52YXMyREVsbGlwc2U7XHJcbiAgQ2FudmFzMkRJbWFnZTogQ2FudmFzMkRJbWFnZTtcclxuICBDYW52YXMyRExpbmU6IENhbnZhczJETGluZTtcclxuICBDYW52YXMyRFJlY3RhbmdsZTogQ2FudmFzMkRSZWN0YW5nbGU7XHJcbiAgQ2FudmFzMkRTaGFwZTogQ2FudmFzMkRTaGFwZTtcclxuICBDYW52YXMyRFNoYXBlQmV6aWVyOiBDYW52YXMyRFNoYXBlQmV6aWVyO1xyXG4gIENhbnZhczJEU2hhcGVFbGxpcHNlOiBDYW52YXMyRFNoYXBlRWxsaXBzZTtcclxuICBDYW52YXMyRFNoYXBlTGluZTogQ2FudmFzMkRTaGFwZUxpbmU7XHJcbiAgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZTogQ2FudmFzMkRTaGFwZVJlY3RhbmdsZTtcclxuICBDYW52YXMyRFRleHQ6IENhbnZhczJEVGV4dDtcclxuICBDYW52YXMyRFZpZGVvOiBDYW52YXMyRFZpZGVvO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVNdWx0aXBsZSxcclxuICBCb3JkZXJSYWRpdXMsXHJcbiAgQ29sb3IsXHJcbiAgVmVjdG9yMkQsXHJcbiAgQW5nbGUsXHJcbiAgU3RhdGUsXHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIExpbmVhckdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG4gIFJhbmRvbSxcclxuICBTaGFkb3csXHJcbiAgY3JlYXRlU3RhdGUsXHJcbiAgY3JlYXRlUm9vdCxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9