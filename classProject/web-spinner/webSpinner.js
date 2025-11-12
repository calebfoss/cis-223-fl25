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
    /**
     * Current value in degrees. 360 degrees is a complete rotation.
     */
    get degrees() {
        return __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_getConverted).call(this, "deg");
    }
    set degrees(value) {
        __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_setConverted).call(this, "deg", value);
    }
    /**
     * @private
     */
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
    /**
     * Converts a number from one angle unit to another.
     *
     * @param value angle number to convert
     * @param unitFrom angle unit to convert from
     * @param unitTo unit to convert to
     * @returns converted value
     */
    static convert(value, unitFrom, unitTo) {
        return value * (unitsInCircle[unitTo] / unitsInCircle[unitFrom]);
    }
    /**
     * Creates a new Angle from a value in degrees.
     *
     * @param value number of degrees
     * @returns
     */
    static degrees(value) {
        return new _a(_a.unit.degrees, value);
    }
    /**
     * Checks if another angle represents the same value as this one.
     *
     * @param other Angle to compare
     * @returns True if the angles are equal.
     */
    equals(other) {
        return super.equals(other) || this.radians === other.radians;
    }
    /**
     * Current value in gradians. 400 gradians is a complete rotation.
     */
    get gradians() {
        return __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_getConverted).call(this, "grad");
    }
    set gradians(value) {
        __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_setConverted).call(this, "grad", value);
    }
    /**
     * Creates a new Angle from value in radians.
     *
     * @param value number of radians
     * @returns
     */
    static radians(value) {
        return new _a(_a.unit.radians, value);
    }
    /**
     * Current value in radians. 2π radians is a complete rotation.
     */
    get radians() {
        return this.value;
    }
    set radians(value) {
        if (this.value === value)
            return;
        __classPrivateFieldGet(this, _Angle_conversions, "f").clear();
        super.value = value;
    }
    /**
     * Current value in turns. 1 turn is a complete rotation.
     */
    get turn() {
        return __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_getConverted).call(this, "turn");
    }
    set turn(value) {
        __classPrivateFieldGet(this, _Angle_instances, "m", _Angle_setConverted).call(this, "turn", value);
    }
    /**
     * Most recently used angle unit
     */
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
    /**
     * Map of angle unit abbreviations and the corresponding number of units in
     * a complete rotation.
     */
    static get unitsInCircle() {
        return unitsInCircle;
    }
    /**
     * @private
     */
    get value() {
        return super.value;
    }
    set value(value) {
        this.radians = value;
    }
    /**
     * Creates a new Angle with a value of 0.
     *
     * @returns
     */
    static zero() {
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
/**
 * Map of angle units. The keys are the full names of units, and their
 * corresponding value is the abbreviation used in CSS and attribute values.
 */
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
    constructor(startAngle = _angle__WEBPACK_IMPORTED_MODULE_0__.Angle.zero(), offset = _vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D.zero()) {
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
        const updatePosition = (event) => {
            super.x = event.x;
            super.y = event.y;
        };
        const targetElement = target;
        targetElement.addEventListener("mousedown", (event) => {
            super.buttonStates[event.button] = true;
            updatePosition(event);
        });
        targetElement.addEventListener("mouseup", (event) => {
            super.buttonStates[event.button] = false;
            updatePosition(event);
        });
        targetElement.addEventListener("mouseenter", (event) => {
            super.over = true;
        });
        targetElement.addEventListener("mouseleave", (event) => {
            super.over = false;
        });
        window.addEventListener("mousemove", updatePosition);
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
        _Shadow_offset.set(this, _vector2d__WEBPACK_IMPORTED_MODULE_2__.Vector2D.zero());
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
    /**
     * Adds a listener function to be called when the value changes.
     *
     * @param listener Function with 1 parameter: the changed value
     * @returns Array of listeners currently registered
     */
    addChangeListener(listener) {
        __classPrivateFieldGet(this, _State_listeners, "f").add(listener);
        return Array.from(__classPrivateFieldGet(this, _State_listeners, "f"));
    }
    /**
     * Removes a listener function so that it is no longer called when the value
     * changes
     *
     * @param listener Listener function to remove
     * @returns Array of listeners currently registered
     */
    removeChangeListener(listener) {
        __classPrivateFieldGet(this, _State_listeners, "f").delete(listener);
        return Array.from(__classPrivateFieldGet(this, _State_listeners, "f"));
    }
    handleChange() {
        for (const listener of __classPrivateFieldGet(this, _State_listeners, "f")) {
            listener(__classPrivateFieldGet(this, _State_value, "f"));
        }
    }
    /**
     * Checks if another State represents the same value.
     *
     * @param other State of same type
     * @returns
     */
    equals(other) {
        return __classPrivateFieldGet(this, _State_value, "f") === other;
    }
    /**
     * This method moves a listener from one State to another and returns the
     * other state.
     *
     * @param other Another State of the same type
     * @param changeListener
     * @returns
     */
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
    /**
     * Current value stored by this State.
     */
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
    static one() {
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
            : this.x.toFixed(1);
        const yString = Number.isInteger(this.y)
            ? this.y.toString()
            : this.y.toFixed(1);
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
    static zero() {
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
var _CustomHTMLElement_eventListeners, _CustomHTMLElement_eventsProxy;

class CustomHTMLElement extends HTMLElement {
    constructor(...args) {
        super();
        _CustomHTMLElement_eventListeners.set(this, new Map());
        _CustomHTMLElement_eventsProxy.set(this, void 0);
        const element = this;
        __classPrivateFieldSet(this, _CustomHTMLElement_eventsProxy, new Proxy({}, {
            get(_, eventName) {
                return __classPrivateFieldGet(element, _CustomHTMLElement_eventListeners, "f").get(eventName);
            },
            set(_, eventName, listener) {
                const currentListener = __classPrivateFieldGet(element, _CustomHTMLElement_eventListeners, "f").get(eventName);
                if (currentListener === listener)
                    return true;
                if (currentListener !== undefined) {
                    element.removeEventListener(eventName, currentListener);
                }
                element.addEventListener(eventName, listener);
                __classPrivateFieldGet(element, _CustomHTMLElement_eventListeners, "f").set(eventName, listener);
                return true;
            },
        }), "f");
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
    get events() {
        return __classPrivateFieldGet(this, _CustomHTMLElement_eventsProxy, "f");
    }
    set events(map) {
        Object.assign(__classPrivateFieldGet(this, _CustomHTMLElement_eventsProxy, "f"), map);
    }
    /**
     * Interface for adding event listeners with alternative syntax. For example,
     * element.addEventListener("click", listener) becomes
     * element.listen.click(listener).
     */
    get listen() {
        return __classPrivateFieldGet(this, _CustomHTMLElement_eventsProxy, "f");
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
_CustomHTMLElement_eventListeners = new WeakMap(), _CustomHTMLElement_eventsProxy = new WeakMap();
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
                _controlA.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.zero());
                _controlB.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.zero());
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
var _C2DBase_everyFrame;



class C2DBase extends _mixable__WEBPACK_IMPORTED_MODULE_1__.CustomHTMLElement {
    constructor() {
        super(...arguments);
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
    remove() {
        this.canvas.queueRemoval(this);
    }
    /**
     * Scales a vector by the device's pixel ratio.
     */
    scaleByPixelRatio(vector) {
        const point = new DOMPointReadOnly(vector.x, vector.y).matrixTransform(new DOMMatrix().scale(devicePixelRatio, devicePixelRatio));
        return _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.xy(point.x, point.y);
    }
}
_C2DBase_everyFrame = new WeakMap();


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
var _Canvas2DCanvasElement_instances, _Canvas2DCanvasElement_animating, _Canvas2DCanvasElement_background, _Canvas2DCanvasElement_clickTracker, _Canvas2DCanvasElement_context, _Canvas2DCanvasElement_deltaTime, _Canvas2DCanvasElement_devicePixelRatio, _Canvas2DCanvasElement_frame, _Canvas2DCanvasElement_keyboardTracker, _Canvas2DCanvasElement_lastFrameTime, _Canvas2DCanvasElement_mouseTracker, _Canvas2DCanvasElement_removalQueue, _Canvas2DCanvasElement_renderEvents, _Canvas2DCanvasElement_renderQueued, _Canvas2DCanvasElement_setAlpha, _Canvas2DCanvasElement_waitFor, _Canvas2DCanvasElement_render, _Canvas2DCanvasElement_updateScale;








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
        _Canvas2DCanvasElement_removalQueue.set(this, new Set());
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
    createChild(ElementClass, options) {
        const child = super.createChild(ElementClass, options);
        this.queueRender();
        return child;
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
    queueRemoval(child) {
        __classPrivateFieldGet(this, _Canvas2DCanvasElement_removalQueue, "f").add(child);
        this.queueRender();
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
        this.domCanvas.style.width = `${value}px`;
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
        this.domCanvas.style.height = `${value}px`;
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
_Canvas2DCanvasElement_animating = new WeakMap(), _Canvas2DCanvasElement_background = new WeakMap(), _Canvas2DCanvasElement_clickTracker = new WeakMap(), _Canvas2DCanvasElement_context = new WeakMap(), _Canvas2DCanvasElement_deltaTime = new WeakMap(), _Canvas2DCanvasElement_devicePixelRatio = new WeakMap(), _Canvas2DCanvasElement_frame = new WeakMap(), _Canvas2DCanvasElement_keyboardTracker = new WeakMap(), _Canvas2DCanvasElement_lastFrameTime = new WeakMap(), _Canvas2DCanvasElement_mouseTracker = new WeakMap(), _Canvas2DCanvasElement_removalQueue = new WeakMap(), _Canvas2DCanvasElement_renderEvents = new WeakMap(), _Canvas2DCanvasElement_renderQueued = new WeakMap(), _Canvas2DCanvasElement_setAlpha = new WeakMap(), _Canvas2DCanvasElement_waitFor = new WeakMap(), _Canvas2DCanvasElement_instances = new WeakSet(), _Canvas2DCanvasElement_render = function _Canvas2DCanvasElement_render() {
    var _a;
    var _b;
    if (__classPrivateFieldGet(this, _Canvas2DCanvasElement_waitFor, "f").size) {
        __classPrivateFieldSet(this, _Canvas2DCanvasElement_renderQueued, false, "f");
        return;
    }
    while (__classPrivateFieldGet(this, _Canvas2DCanvasElement_removalQueue, "f").size) {
        const next = __classPrivateFieldGet(this, _Canvas2DCanvasElement_removalQueue, "f").values().next();
        if (next.value === undefined)
            throw new Error("Found undefined value in canvas's removal queue.");
        const child = next.value;
        this.removeChild(child);
        __classPrivateFieldGet(this, _Canvas2DCanvasElement_removalQueue, "f").delete(child);
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
    __classPrivateFieldSet(this, _Canvas2DCanvasElement_devicePixelRatio, newPixelRatio, "f");
    this.queueRender();
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
                _startAngle.set(this, _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.zero());
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
var _Canvas2DBaseRenderable_instances, _Canvas2DBaseRenderable_changedSinceRender, _Canvas2DBaseRenderable_clickListeners, _Canvas2DBaseRenderable_localMouse, _Canvas2DBaseRenderable_mouseListeners, _Canvas2DBaseRenderable_shadow, _Canvas2DBaseRenderable_connected, _Canvas2DBaseRenderable_queuedEventListeners, _Canvas2DBaseRenderable_handleClick, _Canvas2DBaseRenderable_handleMouse, _Canvas2DBaseRenderable_shadowChangeListener;



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
        _Canvas2DBaseRenderable_connected.set(this, false);
        _Canvas2DBaseRenderable_queuedEventListeners.set(this, []);
        _Canvas2DBaseRenderable_shadowChangeListener.set(this, (newValue) => {
            this.registerChange("shadow", (__classPrivateFieldSet(this, _Canvas2DBaseRenderable_shadow, newValue, "f")));
        });
    }
    connectedCallback() {
        __classPrivateFieldSet(this, _Canvas2DBaseRenderable_connected, true, "f");
        while (__classPrivateFieldGet(this, _Canvas2DBaseRenderable_queuedEventListeners, "f").length) {
            const firstListener = __classPrivateFieldGet(this, _Canvas2DBaseRenderable_queuedEventListeners, "f").shift();
            if (firstListener === undefined)
                break;
            this.addEventListener(firstListener.eventName, firstListener.listener);
        }
    }
    /**
     * @private
     */
    addEventListener(type, listener, options) {
        if (!__classPrivateFieldGet(this, _Canvas2DBaseRenderable_connected, "f")) {
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_queuedEventListeners, "f").push({
                eventName: type,
                listener,
            });
            return;
        }
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
    createChild(ElementClass, options) {
        const child = super.createChild(ElementClass, options);
        this.dispatchEvent(changedEvent);
        return child;
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
_Canvas2DBaseRenderable_changedSinceRender = new WeakMap(), _Canvas2DBaseRenderable_clickListeners = new WeakMap(), _Canvas2DBaseRenderable_localMouse = new WeakMap(), _Canvas2DBaseRenderable_mouseListeners = new WeakMap(), _Canvas2DBaseRenderable_shadow = new WeakMap(), _Canvas2DBaseRenderable_connected = new WeakMap(), _Canvas2DBaseRenderable_queuedEventListeners = new WeakMap(), _Canvas2DBaseRenderable_shadowChangeListener = new WeakMap(), _Canvas2DBaseRenderable_instances = new WeakSet(), _Canvas2DBaseRenderable_handleClick = function _Canvas2DBaseRenderable_handleClick(canvas2D) {
    const { context, clickPosition: canvasClick, clicked } = canvas2D;
    if (!clicked)
        return;
    const elementClick = this.scaleByPixelRatio(canvasClick);
    const inPath = context.isPointInPath(elementClick.x, elementClick.y);
    if (inPath)
        this.dispatchEvent(new PointerEvent("click"));
}, _Canvas2DBaseRenderable_handleMouse = function _Canvas2DBaseRenderable_handleMouse(canvas2D) {
    const { context, mouse } = canvas2D;
    __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").x = mouse.x * devicePixelRatio;
    __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").y = mouse.y * devicePixelRatio;
    const inPath = context.isPointInPath(__classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").x, __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").y);
    if (!inPath) {
        if (__classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").over === true) {
            this.dispatchEvent(new MouseEvent("mouseout"));
            __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").over = false;
        }
        return;
    }
    this.dispatchEvent(new MouseEvent("mouseover"));
    const movementX = mouse.x - mouse.previous.x;
    const movementY = mouse.y - mouse.previous.y;
    if (__classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").x !== mouse.previous.x * devicePixelRatio ||
        __classPrivateFieldGet(this, _Canvas2DBaseRenderable_localMouse, "f").y !== mouse.previous.y * devicePixelRatio)
        this.dispatchEvent(new MouseEvent("mousemove", {
            movementX,
            movementY,
        }));
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
        context.beginPath();
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
                _from.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_0__.Vector2D.zero());
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
    var _BaseTransform_anchor, _BaseTransform_angle, _BaseTransform_angularVelocity, _BaseTransform_scale, _BaseTransform_velocity, _BaseTransform_angleChangeListener, _BaseTransform_angularVelocityChangedTime, _BaseTransform_angularVelocityChangeListener, _BaseTransform_anchorChangeListener, _BaseTransform_scaleChangeListener, _BaseTransform_velocityChangedTime, _BaseTransform_velocityChangeListener, _a;
    return _a = class BaseTransform extends Base {
            constructor(...args) {
                super(...args);
                _BaseTransform_anchor.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D.zero());
                _BaseTransform_angle.set(this, _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.radians(0));
                _BaseTransform_angularVelocity.set(this, _classes_angle__WEBPACK_IMPORTED_MODULE_0__.Angle.radians(0));
                _BaseTransform_scale.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D.one());
                _BaseTransform_velocity.set(this, _classes_vector2d__WEBPACK_IMPORTED_MODULE_1__.Vector2D.zero());
                _BaseTransform_angleChangeListener.set(this, () => {
                    this.registerChange("angle", __classPrivateFieldGet(this, _BaseTransform_angle, "f"));
                });
                _BaseTransform_angularVelocityChangedTime.set(this, -1);
                _BaseTransform_angularVelocityChangeListener.set(this, () => {
                    __classPrivateFieldSet(this, _BaseTransform_angularVelocityChangedTime, performance.now(), "f");
                    this.registerChange("angularVelocity", this.angularVelocity);
                });
                _BaseTransform_anchorChangeListener.set(this, () => {
                    this.registerChange("anchor", __classPrivateFieldGet(this, _BaseTransform_anchor, "f"));
                });
                _BaseTransform_scaleChangeListener.set(this, () => {
                    this.registerChange("scale", __classPrivateFieldGet(this, _BaseTransform_scale, "f"));
                });
                _BaseTransform_velocityChangedTime.set(this, -1);
                _BaseTransform_velocityChangeListener.set(this, () => {
                    __classPrivateFieldSet(this, _BaseTransform_velocityChangedTime, performance.now(), "f");
                    this.registerChange("velocity", __classPrivateFieldGet(this, _BaseTransform_velocity, "f"));
                });
                __classPrivateFieldGet(this, _BaseTransform_anchor, "f").addChangeListener(__classPrivateFieldGet(this, _BaseTransform_anchorChangeListener, "f"));
                __classPrivateFieldGet(this, _BaseTransform_angle, "f").addChangeListener(__classPrivateFieldGet(this, _BaseTransform_angleChangeListener, "f"));
                __classPrivateFieldGet(this, _BaseTransform_angularVelocity, "f").addChangeListener(__classPrivateFieldGet(this, _BaseTransform_angularVelocityChangeListener, "f"));
                __classPrivateFieldGet(this, _BaseTransform_scale, "f").addChangeListener(__classPrivateFieldGet(this, _BaseTransform_scaleChangeListener, "f"));
                __classPrivateFieldGet(this, _BaseTransform_velocity, "f").addChangeListener(__classPrivateFieldGet(this, _BaseTransform_velocityChangeListener, "f"));
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
                __classPrivateFieldGet(this, _BaseTransform_angle, "f").replace((__classPrivateFieldSet(this, _BaseTransform_angle, value, "f")), __classPrivateFieldGet(this, _BaseTransform_angleChangeListener, "f"));
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
                __classPrivateFieldGet(this, _BaseTransform_angularVelocity, "f").replace((__classPrivateFieldSet(this, _BaseTransform_angularVelocity, value, "f")), __classPrivateFieldGet(this, _BaseTransform_angularVelocityChangeListener, "f"));
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
                __classPrivateFieldGet(this, _BaseTransform_anchor, "f").replace((__classPrivateFieldSet(this, _BaseTransform_anchor, value, "f")), __classPrivateFieldGet(this, _BaseTransform_anchorChangeListener, "f"));
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
                            if (__classPrivateFieldGet(this, _BaseTransform_anchor, "f").toString() !== newValue)
                                this.anchor = _utlities_attributeParser__WEBPACK_IMPORTED_MODULE_3__.attributeParser.Vector2D(newValue);
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
                    return;
                }
                __classPrivateFieldGet(this, _BaseTransform_scale, "f").replace((__classPrivateFieldSet(this, _BaseTransform_scale, value, "f")), __classPrivateFieldGet(this, _BaseTransform_scaleChangeListener, "f"));
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
                __classPrivateFieldGet(this, _BaseTransform_velocity, "f").replace((__classPrivateFieldSet(this, _BaseTransform_velocity, value, "f")), __classPrivateFieldGet(this, _BaseTransform_velocityChangeListener, "f"));
            }
        },
        _BaseTransform_anchor = new WeakMap(),
        _BaseTransform_angle = new WeakMap(),
        _BaseTransform_angularVelocity = new WeakMap(),
        _BaseTransform_scale = new WeakMap(),
        _BaseTransform_velocity = new WeakMap(),
        _BaseTransform_angleChangeListener = new WeakMap(),
        _BaseTransform_angularVelocityChangedTime = new WeakMap(),
        _BaseTransform_angularVelocityChangeListener = new WeakMap(),
        _BaseTransform_anchorChangeListener = new WeakMap(),
        _BaseTransform_scaleChangeListener = new WeakMap(),
        _BaseTransform_velocityChangedTime = new WeakMap(),
        _BaseTransform_velocityChangeListener = new WeakMap(),
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
/* harmony export */   Angle: () => (/* reexport safe */ _classes_angle__WEBPACK_IMPORTED_MODULE_4__.Angle),
/* harmony export */   BorderRadius: () => (/* reexport safe */ _classes_borderRadius__WEBPACK_IMPORTED_MODULE_13__.BorderRadius),
/* harmony export */   Color: () => (/* reexport safe */ _classes_color__WEBPACK_IMPORTED_MODULE_2__.Color),
/* harmony export */   ConicalGradient: () => (/* reexport safe */ _classes_gradient__WEBPACK_IMPORTED_MODULE_10__.ConicalGradient),
/* harmony export */   Elements: () => (/* binding */ elements),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _classes_gradient__WEBPACK_IMPORTED_MODULE_10__.LinearGradient),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _classes_gradient__WEBPACK_IMPORTED_MODULE_10__.RadialGradient),
/* harmony export */   Random: () => (/* reexport safe */ _classes_random__WEBPACK_IMPORTED_MODULE_14__.Random),
/* harmony export */   Shadow: () => (/* reexport safe */ _classes_shadow__WEBPACK_IMPORTED_MODULE_11__.Shadow),
/* harmony export */   State: () => (/* reexport safe */ _classes_state__WEBPACK_IMPORTED_MODULE_5__.State),
/* harmony export */   Vector2D: () => (/* reexport safe */ _classes_vector2d__WEBPACK_IMPORTED_MODULE_3__.Vector2D),
/* harmony export */   createMultiple: () => (/* binding */ createMultiple),
/* harmony export */   createRoot: () => (/* reexport safe */ _elements_document_domBase__WEBPACK_IMPORTED_MODULE_12__.createRoot),
/* harmony export */   createState: () => (/* reexport safe */ _classes_state__WEBPACK_IMPORTED_MODULE_5__.createState)
/* harmony export */ });
/* harmony import */ var _elements_visual_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/visual/canvas */ "./src/elements/visual/canvas.ts");
/* harmony import */ var _elements_visual_rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/visual/rectangle */ "./src/elements/visual/rectangle.ts");
/* harmony import */ var _classes_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/color */ "./src/classes/color.ts");
/* harmony import */ var _classes_vector2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/vector2d */ "./src/classes/vector2d.ts");
/* harmony import */ var _classes_angle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/angle */ "./src/classes/angle.ts");
/* harmony import */ var _classes_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/state */ "./src/classes/state.ts");
/* harmony import */ var _elements_visual_line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/visual/line */ "./src/elements/visual/line.ts");
/* harmony import */ var _elements_visual_shape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/visual/shape */ "./src/elements/visual/shape.ts");
/* harmony import */ var _elements_visual_ellipse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/visual/ellipse */ "./src/elements/visual/ellipse.ts");
/* harmony import */ var _elements_visual_bezier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/visual/bezier */ "./src/elements/visual/bezier.ts");
/* harmony import */ var _classes_gradient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/gradient */ "./src/classes/gradient.ts");
/* harmony import */ var _classes_shadow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes/shadow */ "./src/classes/shadow.ts");
/* harmony import */ var _elements_document_domBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/document/domBase */ "./src/elements/document/domBase.ts");
/* harmony import */ var _classes_borderRadius__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./classes/borderRadius */ "./src/classes/borderRadius.ts");
/* harmony import */ var _classes_random__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes/random */ "./src/classes/random.ts");















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
const elements = {
    canvas2D: {
        parentElement: _elements_visual_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas2DCanvasElement,
        Canvas2DBezier: _elements_visual_bezier__WEBPACK_IMPORTED_MODULE_9__.Canvas2DBezier,
        shape: {
            parentElement: _elements_visual_shape__WEBPACK_IMPORTED_MODULE_7__.Canvas2DShape,
            Canvas2DBezier: _elements_visual_bezier__WEBPACK_IMPORTED_MODULE_9__.Canvas2DBezier,
            Canvas2DShapeEllipse: _elements_visual_ellipse__WEBPACK_IMPORTED_MODULE_8__.Canvas2DShapeEllipse,
            Canvas2DShapeLine: _elements_visual_line__WEBPACK_IMPORTED_MODULE_6__.Canvas2DShapeLine,
            Canvas2DShapeRectangle: _elements_visual_rectangle__WEBPACK_IMPORTED_MODULE_1__.Canvas2DShapeRectangle,
        },
    },
};


})();

var __webpack_exports__Angle = __webpack_exports__.Angle;
var __webpack_exports__BorderRadius = __webpack_exports__.BorderRadius;
var __webpack_exports__Color = __webpack_exports__.Color;
var __webpack_exports__ConicalGradient = __webpack_exports__.ConicalGradient;
var __webpack_exports__Elements = __webpack_exports__.Elements;
var __webpack_exports__LinearGradient = __webpack_exports__.LinearGradient;
var __webpack_exports__RadialGradient = __webpack_exports__.RadialGradient;
var __webpack_exports__Random = __webpack_exports__.Random;
var __webpack_exports__Shadow = __webpack_exports__.Shadow;
var __webpack_exports__State = __webpack_exports__.State;
var __webpack_exports__Vector2D = __webpack_exports__.Vector2D;
var __webpack_exports__createMultiple = __webpack_exports__.createMultiple;
var __webpack_exports__createRoot = __webpack_exports__.createRoot;
var __webpack_exports__createState = __webpack_exports__.createState;
export { __webpack_exports__Angle as Angle, __webpack_exports__BorderRadius as BorderRadius, __webpack_exports__Color as Color, __webpack_exports__ConicalGradient as ConicalGradient, __webpack_exports__Elements as Elements, __webpack_exports__LinearGradient as LinearGradient, __webpack_exports__RadialGradient as RadialGradient, __webpack_exports__Random as Random, __webpack_exports__Shadow as Shadow, __webpack_exports__State as State, __webpack_exports__Vector2D as Vector2D, __webpack_exports__createMultiple as createMultiple, __webpack_exports__createRoot as createRoot, __webpack_exports__createState as createState };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtLQUNMLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQ3JCLEtBQWEsRUFDYixTQUErQjtJQUUvQixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBUUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsMEVBQXFCLENBQUMsQ0FBQztBQXVCM0QsTUFBTSxRQUFRLEdBQXVDO0lBQ25ELFFBQVEsRUFBRTtRQUNSLGFBQWEsRUFBRSwwRUFBcUI7UUFDcEMsY0FBYztRQUNkLEtBQUssRUFBRTtZQUNMLGFBQWEsRUFBRSxpRUFBYTtZQUM1QixjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQixzQkFBc0I7U0FDdkI7S0FDRjtDQUNGLENBQUM7QUFpQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvYW5nbGUudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL2JvcmRlclJhZGl1cy50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvY2xpY2sudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL2NvbG9yLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9ncmFkaWVudC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMva2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL21vdXNlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9yYW5kb20udHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL3NoYWRvdy50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL3VuaXRzLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy92ZWN0b3IyZC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL2F1ZGlvL2F1ZGlvLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvZG9jdW1lbnQvY29udGFpbmVyLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvZG9jdW1lbnQvZG9tQmFzZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL2RvY3VtZW50L3BhcmFncmFwaC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL2RvY3VtZW50L3NwYW4udHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy9taXhhYmxlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL2Jlemllci50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9jMmRCYXNlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9lbGxpcHNlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL2ltYWdlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL2xpbmUudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvcmVjdGFuZ2xlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL3JlbmRlcmFibGUudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9zdmdTVkcudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvdGV4dC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC92aWRlby50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9jaGlsZHJlbi50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9kaW1lbnNpb25zLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2ZpbGwudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvZm9udC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9mcm9tVG8udHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvb2Zmc2V0LnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL3JlY3RhbmdsZUJvdW5kcy50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9zdHJva2UudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL3ZpZXdCb3gudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvdmlzdWFsTWVkaWEudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy91dGxpdGllcy9jYW1lbFRvS2ViYWIudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy91dGxpdGllcy9yZWFkT25seS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBBbmdsZVVuaXRMb25nID0ga2V5b2YgKHR5cGVvZiBBbmdsZSlbXCJ1bml0XCJdO1xyXG5cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0U2hvcnQgPVxyXG4gICh0eXBlb2YgQW5nbGUpW1widW5pdFwiXVtrZXlvZiAodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl1dO1xyXG5cclxuY29uc3QgdW5pdHNJbkNpcmNsZToge1xyXG4gIFtVIGluIEFuZ2xlVW5pdFNob3J0XTogbnVtYmVyO1xyXG59ID0ge1xyXG4gIGRlZzogMzYwLFxyXG4gIHJhZDogTWF0aC5QSSAqIDIsXHJcbiAgZ3JhZDogNDAwLFxyXG4gIHR1cm46IDEsXHJcbn07XHJcblxyXG50eXBlIEFuZ2xlQ29udmVydGVyID0ge1xyXG4gIFtVIGluIGtleW9mICh0eXBlb2YgQW5nbGUpW1widW5pdFwiXV06IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmdsZSBleHRlbmRzIFN0YXRlPG51bWJlcj4gaW1wbGVtZW50cyBBbmdsZUNvbnZlcnRlciB7XHJcbiAgI2NvbnZlcnNpb25zID0gbmV3IE1hcDxFeGNsdWRlPEFuZ2xlVW5pdFNob3J0LCBcInJhZFwiPiwgbnVtYmVyPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih1bml0OiBBbmdsZVVuaXRTaG9ydCwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmFkaWFucyA9IHVuaXQgPT09IFwicmFkXCIgPyB2YWx1ZSA6IEFuZ2xlLmNvbnZlcnQodmFsdWUsIHVuaXQsIFwicmFkXCIpO1xyXG5cclxuICAgIHN1cGVyKHJhZGlhbnMpO1xyXG5cclxuICAgIGlmICh1bml0ICE9PSBcInJhZFwiKSB0aGlzLiNjb252ZXJzaW9ucy5zZXQodW5pdCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgI2dldENvbnZlcnRlZCh1bml0OiBFeGNsdWRlPEFuZ2xlVW5pdFNob3J0LCBcInJhZFwiPikge1xyXG4gICAgY29uc3QgY2FjaGVkID0gdGhpcy4jY29udmVyc2lvbnMuZ2V0KHVuaXQpO1xyXG5cclxuICAgIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGNhY2hlZDtcclxuXHJcbiAgICBjb25zdCBjb252ZXJzaW9uID0gQW5nbGUuY29udmVydCh0aGlzLnZhbHVlLCBcInJhZFwiLCB1bml0KTtcclxuXHJcbiAgICB0aGlzLiNjb252ZXJzaW9ucy5zZXQodW5pdCwgY29udmVyc2lvbik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnZlcnNpb247XHJcbiAgfVxyXG5cclxuICAjc2V0Q29udmVydGVkKHVuaXQ6IEV4Y2x1ZGU8QW5nbGVVbml0U2hvcnQsIFwicmFkXCI+LCB2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLiNjb252ZXJzaW9ucy5zZXQodW5pdCwgdmFsdWUpO1xyXG5cclxuICAgIHRoaXMudmFsdWUgPSBBbmdsZS5jb252ZXJ0KHZhbHVlLCB1bml0LCBcInJhZFwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgdmFsdWUgaW4gZGVncmVlcy4gMzYwIGRlZ3JlZXMgaXMgYSBjb21wbGV0ZSByb3RhdGlvbi5cclxuICAgKi9cclxuXHJcbiAgZ2V0IGRlZ3JlZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLiNnZXRDb252ZXJ0ZWQoXCJkZWdcIik7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVncmVlcyh2YWx1ZSkge1xyXG4gICAgdGhpcy4jc2V0Q29udmVydGVkKFwiZGVnXCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgY29uc3QgY29udmVyc2lvbkNvdW50ID0gdGhpcy4jY29udmVyc2lvbnMuc2l6ZTtcclxuXHJcbiAgICBjb25zdCBbdW5pdCwgdmFsdWVdID1cclxuICAgICAgY29udmVyc2lvbkNvdW50ID09PSAwXHJcbiAgICAgICAgPyBbXCJyYWRcIiBhcyBBbmdsZVVuaXRTaG9ydCwgdGhpcy52YWx1ZV1cclxuICAgICAgICA6IEFycmF5LmZyb20odGhpcy4jY29udmVyc2lvbnMpW2NvbnZlcnNpb25Db3VudCAtIDFdO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSlcclxuICAgICAgPyB2YWx1ZS50b1N0cmluZygpXHJcbiAgICAgIDogdmFsdWUudG9QcmVjaXNpb24oMik7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlU3RyaW5nICsgdW5pdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIGEgbnVtYmVyIGZyb20gb25lIGFuZ2xlIHVuaXQgdG8gYW5vdGhlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBhbmdsZSBudW1iZXIgdG8gY29udmVydFxyXG4gICAqIEBwYXJhbSB1bml0RnJvbSBhbmdsZSB1bml0IHRvIGNvbnZlcnQgZnJvbVxyXG4gICAqIEBwYXJhbSB1bml0VG8gdW5pdCB0byBjb252ZXJ0IHRvXHJcbiAgICogQHJldHVybnMgY29udmVydGVkIHZhbHVlXHJcbiAgICovXHJcblxyXG4gIHN0YXRpYyBjb252ZXJ0KFxyXG4gICAgdmFsdWU6IG51bWJlcixcclxuICAgIHVuaXRGcm9tOiBBbmdsZVVuaXRTaG9ydCxcclxuICAgIHVuaXRUbzogQW5nbGVVbml0U2hvcnRcclxuICApOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHZhbHVlICogKHVuaXRzSW5DaXJjbGVbdW5pdFRvXSAvIHVuaXRzSW5DaXJjbGVbdW5pdEZyb21dKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgQW5nbGUgZnJvbSBhIHZhbHVlIGluIGRlZ3JlZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmFsdWUgbnVtYmVyIG9mIGRlZ3JlZXNcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG5cclxuICBzdGF0aWMgZGVncmVlcyh2YWx1ZTogbnVtYmVyKTogQW5nbGUge1xyXG4gICAgcmV0dXJuIG5ldyBBbmdsZShBbmdsZS51bml0LmRlZ3JlZXMsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhbm90aGVyIGFuZ2xlIHJlcHJlc2VudHMgdGhlIHNhbWUgdmFsdWUgYXMgdGhpcyBvbmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3RoZXIgQW5nbGUgdG8gY29tcGFyZVxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGFuZ2xlcyBhcmUgZXF1YWwuXHJcbiAgICovXHJcblxyXG4gIGVxdWFscyhvdGhlcjogQW5nbGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzdXBlci5lcXVhbHMob3RoZXIpIHx8IHRoaXMucmFkaWFucyA9PT0gb3RoZXIucmFkaWFucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgdmFsdWUgaW4gZ3JhZGlhbnMuIDQwMCBncmFkaWFucyBpcyBhIGNvbXBsZXRlIHJvdGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICBnZXQgZ3JhZGlhbnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLiNnZXRDb252ZXJ0ZWQoXCJncmFkXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGdyYWRpYW5zKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNzZXRDb252ZXJ0ZWQoXCJncmFkXCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgQW5nbGUgZnJvbSB2YWx1ZSBpbiByYWRpYW5zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZhbHVlIG51bWJlciBvZiByYWRpYW5zXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuXHJcbiAgc3RhdGljIHJhZGlhbnModmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBBbmdsZShBbmdsZS51bml0LnJhZGlhbnMsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgdmFsdWUgaW4gcmFkaWFucy4gMs+AIHJhZGlhbnMgaXMgYSBjb21wbGV0ZSByb3RhdGlvbi5cclxuICAgKi9cclxuXHJcbiAgZ2V0IHJhZGlhbnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHJhZGlhbnModmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jY29udmVyc2lvbnMuY2xlYXIoKTtcclxuXHJcbiAgICBzdXBlci52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCB2YWx1ZSBpbiB0dXJucy4gMSB0dXJuIGlzIGEgY29tcGxldGUgcm90YXRpb24uXHJcbiAgICovXHJcblxyXG4gIGdldCB0dXJuKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy4jZ2V0Q29udmVydGVkKFwidHVyblwiKTtcclxuICB9XHJcblxyXG4gIHNldCB0dXJuKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNzZXRDb252ZXJ0ZWQoXCJ0dXJuXCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vc3QgcmVjZW50bHkgdXNlZCBhbmdsZSB1bml0XHJcbiAgICovXHJcblxyXG4gIGdldCB1bml0KCk6IEFuZ2xlVW5pdExvbmcge1xyXG4gICAgY29uc3QgY29udmVyc2lvbkNvdW50ID0gdGhpcy4jY29udmVyc2lvbnMuc2l6ZTtcclxuXHJcbiAgICBjb25zdCBbc2hvcnRVbml0XSA9XHJcbiAgICAgIGNvbnZlcnNpb25Db3VudCA9PT0gMFxyXG4gICAgICAgID8gW1wicmFkXCIgYXMgQW5nbGVVbml0U2hvcnQsIHRoaXMudmFsdWVdXHJcbiAgICAgICAgOiBBcnJheS5mcm9tKHRoaXMuI2NvbnZlcnNpb25zKVtjb252ZXJzaW9uQ291bnQgLSAxXTtcclxuXHJcbiAgICBjb25zdCBsb25nVW5pdCA9IE9iamVjdC5rZXlzKEFuZ2xlLnVuaXQpLmZpbmQoXHJcbiAgICAgIChrZXkpID0+IEFuZ2xlLnVuaXRba2V5IGFzIEFuZ2xlVW5pdExvbmddID09PSBzaG9ydFVuaXRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGxvbmdVbml0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYW5nbGUgdW5pdDogJHtzaG9ydFVuaXR9YCk7XHJcblxyXG4gICAgcmV0dXJuIGxvbmdVbml0IGFzIEFuZ2xlVW5pdExvbmc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXAgb2YgYW5nbGUgdW5pdHMuIFRoZSBrZXlzIGFyZSB0aGUgZnVsbCBuYW1lcyBvZiB1bml0cywgYW5kIHRoZWlyXHJcbiAgICogY29ycmVzcG9uZGluZyB2YWx1ZSBpcyB0aGUgYWJicmV2aWF0aW9uIHVzZWQgaW4gQ1NTIGFuZCBhdHRyaWJ1dGUgdmFsdWVzLlxyXG4gICAqL1xyXG5cclxuICBzdGF0aWMgdW5pdCA9IHtcclxuICAgIGRlZ3JlZXM6IFwiZGVnXCIsXHJcbiAgICByYWRpYW5zOiBcInJhZFwiLFxyXG4gICAgZ3JhZGlhbnM6IFwiZ3JhZFwiLFxyXG4gICAgdHVybjogXCJ0dXJuXCIsXHJcbiAgfSBhcyBjb25zdDtcclxuXHJcbiAgLyoqXHJcbiAgICogTWFwIG9mIGFuZ2xlIHVuaXQgYWJicmV2aWF0aW9ucyBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgbnVtYmVyIG9mIHVuaXRzIGluXHJcbiAgICogYSBjb21wbGV0ZSByb3RhdGlvbi5cclxuICAgKi9cclxuXHJcbiAgc3RhdGljIGdldCB1bml0c0luQ2lyY2xlKCk6IHsgW3VuaXQgaW4gQW5nbGVVbml0U2hvcnRdOiBudW1iZXIgfSB7XHJcbiAgICByZXR1cm4gdW5pdHNJbkNpcmNsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5yYWRpYW5zID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEFuZ2xlIHdpdGggYSB2YWx1ZSBvZiAwLlxyXG4gICAqXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuXHJcbiAgc3RhdGljIHplcm8oKTogQW5nbGUge1xyXG4gICAgcmV0dXJuIEFuZ2xlLnJhZGlhbnMoMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmNsYXNzIEJvcmRlclJhZGl1c0Jhc2Uge1xyXG4gICN0b3BMZWZ0OiBudW1iZXI7XHJcbiAgI3RvcFJpZ2h0OiBudW1iZXI7XHJcbiAgI2JvdHRvbUxlZnQ6IG51bWJlcjtcclxuICAjYm90dG9tUmlnaHQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoYWxsOiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKHRvcExlZnRBbmRCb3R0b21SaWdodDogbnVtYmVyLCB0b1JpZ2h0QW5kQm90dG9tTGVmdDogbnVtYmVyKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRvcExlZnQ6IG51bWJlcixcclxuICAgIHRvcFJpZ2h0QW5kQm90dG9tTGVmdDogbnVtYmVyLFxyXG4gICAgYm90dG9tUmlnaHQ6IG51bWJlclxyXG4gICk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0b3BMZWZ0OiBudW1iZXIsXHJcbiAgICB0b3BSaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tUmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbUxlZnQ6IG51bWJlclxyXG4gICk7XHJcbiAgY29uc3RydWN0b3IoYXJnMTogbnVtYmVyLCBhcmcyPzogbnVtYmVyLCBhcmczPzogbnVtYmVyLCBib3R0b21MZWZ0PzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLiN0b3BMZWZ0ID0gYXJnMTtcclxuXHJcbiAgICBpZiAoYXJnMiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuI3RvcFJpZ2h0ID0gdGhpcy4jYm90dG9tTGVmdCA9IHRoaXMuI2JvdHRvbVJpZ2h0ID0gYXJnMTtcclxuICAgIH0gZWxzZSBpZiAoYXJnMyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuI2JvdHRvbVJpZ2h0ID0gYXJnMTtcclxuICAgICAgdGhpcy4jdG9wUmlnaHQgPSBhcmcyO1xyXG4gICAgICB0aGlzLiNib3R0b21MZWZ0ID0gYXJnMjtcclxuICAgIH0gZWxzZSBpZiAoYm90dG9tTGVmdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuI3RvcFJpZ2h0ID0gYXJnMjtcclxuICAgICAgdGhpcy4jYm90dG9tTGVmdCA9IGFyZzI7XHJcbiAgICAgIHRoaXMuI2JvdHRvbVJpZ2h0ID0gYXJnMztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuI3RvcFJpZ2h0ID0gYXJnMjtcclxuICAgICAgdGhpcy4jYm90dG9tUmlnaHQgPSBhcmczO1xyXG4gICAgICB0aGlzLiNib3R0b21MZWZ0ID0gYm90dG9tTGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB0b3BMZWZ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3RvcExlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wTGVmdCh2YWx1ZSkge1xyXG4gICAgdGhpcy4jdG9wTGVmdCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvcFJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3RvcFJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvcFJpZ2h0KHZhbHVlKSB7XHJcbiAgICB0aGlzLiN0b3BSaWdodCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJvdHRvbUxlZnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jYm90dG9tTGVmdDtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b21MZWZ0KHZhbHVlKSB7XHJcbiAgICB0aGlzLiNib3R0b21MZWZ0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYm90dG9tUmlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jYm90dG9tUmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgYm90dG9tUmlnaHQodmFsdWUpIHtcclxuICAgIHRoaXMuI2JvdHRvbVJpZ2h0ID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9yZGVyUmFkaXVzIGV4dGVuZHMgU3RhdGU8Qm9yZGVyUmFkaXVzQmFzZT4ge1xyXG4gIGNvbnN0cnVjdG9yKGFsbDogbnVtYmVyKTtcclxuICBjb25zdHJ1Y3Rvcih0b3BMZWZ0QW5kQm90dG9tUmlnaHQ6IG51bWJlciwgdG9SaWdodEFuZEJvdHRvbUxlZnQ6IG51bWJlcik7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0b3BMZWZ0OiBudW1iZXIsXHJcbiAgICB0b3BSaWdodEFuZEJvdHRvbUxlZnQ6IG51bWJlcixcclxuICAgIGJvdHRvbVJpZ2h0OiBudW1iZXJcclxuICApO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdG9wTGVmdDogbnVtYmVyLFxyXG4gICAgdG9wUmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbVJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b21MZWZ0OiBudW1iZXJcclxuICApO1xyXG4gIGNvbnN0cnVjdG9yKGFyZzE6IG51bWJlciwgYXJnMj86IG51bWJlciwgYXJnMz86IG51bWJlciwgYm90dG9tTGVmdD86IG51bWJlcikge1xyXG4gICAgY29uc3QgYmFzZSA9XHJcbiAgICAgIGFyZzIgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gbmV3IEJvcmRlclJhZGl1c0Jhc2UoYXJnMSlcclxuICAgICAgICA6IGFyZzMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gbmV3IEJvcmRlclJhZGl1c0Jhc2UoYXJnMSwgYXJnMilcclxuICAgICAgICA6IGJvdHRvbUxlZnQgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gbmV3IEJvcmRlclJhZGl1c0Jhc2UoYXJnMSwgYXJnMiwgYXJnMylcclxuICAgICAgICA6IG5ldyBCb3JkZXJSYWRpdXNCYXNlKGFyZzEsIGFyZzIsIGFyZzMsIGJvdHRvbUxlZnQpO1xyXG5cclxuICAgIHN1cGVyKGJhc2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvcExlZnQoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWUudG9wTGVmdDtcclxuICB9XHJcblxyXG4gIHNldCB0b3BMZWZ0KHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMudG9wTGVmdCkgcmV0dXJuO1xyXG5cclxuICAgIHN1cGVyLnZhbHVlLnRvcExlZnQgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvcFJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbHVlLnRvcFJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvcFJpZ2h0KHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMudG9wUmlnaHQpIHJldHVybjtcclxuXHJcbiAgICBzdXBlci52YWx1ZS50b3BSaWdodCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYm90dG9tUmlnaHQoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWUuYm90dG9tUmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgYm90dG9tUmlnaHQodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5ib3R0b21SaWdodCkgcmV0dXJuO1xyXG5cclxuICAgIHN1cGVyLnZhbHVlLmJvdHRvbVJpZ2h0ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBib3R0b21MZWZ0KCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbHVlLmJvdHRvbUxlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgYm90dG9tTGVmdCh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLmJvdHRvbUxlZnQpIHJldHVybjtcclxuXHJcbiAgICBzdXBlci52YWx1ZS5ib3R0b21MZWZ0ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGVxdWFscyhvdGhlcjogQm9yZGVyUmFkaXVzKSB7XHJcbiAgICBjb25zdCBvdGhlckFycmF5ID0gb3RoZXIudG9BcnJheSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gb3RoZXJBcnJheVtpbmRleF0pO1xyXG4gIH1cclxuXHJcbiAgdG9BcnJheSgpIHtcclxuICAgIHJldHVybiBbdGhpcy50b3BMZWZ0LCB0aGlzLnRvcFJpZ2h0LCB0aGlzLmJvdHRvbVJpZ2h0LCB0aGlzLmJvdHRvbUxlZnRdO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0FycmF5KCkuam9pbihcIiwgXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuL3ZlY3RvcjJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpY2tEYXRhIGV4dGVuZHMgVmVjdG9yMkQge1xyXG4gICNjbGlja2VkID0gZmFsc2U7XHJcblxyXG4gIGdldCBjbGlja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NsaWNrZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgY2xpY2tlZCh2YWx1ZSkge1xyXG4gICAgdGhpcy4jY2xpY2tlZCA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsaWNrVHJhY2tlciBleHRlbmRzIENsaWNrRGF0YSB7XHJcbiAgI3RhcmdldDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHN1cGVyLmNsaWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgc3VwZXIueCA9IGV2ZW50Lng7XHJcblxyXG4gICAgICBzdXBlci55ID0gZXZlbnQueTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWR2YW5jZUZyYW1lKCkge1xyXG4gICAgc3VwZXIuY2xpY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsaWNrZWQoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIuY2xpY2tlZDtcclxuICB9XHJcblxyXG4gIGdldCBwb3NpdGlvbigpOiBWZWN0b3IyRCB7XHJcbiAgICBpZiAodGhpcy4jdGFyZ2V0IGluc3RhbmNlb2YgV2luZG93KSByZXR1cm4gdGhpcztcclxuXHJcbiAgICBjb25zdCBib3VuZGluZ1JlY3QgPSB0aGlzLiN0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KHN1cGVyLnggLSBib3VuZGluZ1JlY3QueCwgc3VwZXIueSAtIGJvdW5kaW5nUmVjdC55KTtcclxuICB9XHJcblxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueDtcclxuICB9XHJcblxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcclxuICB9XHJcbn1cclxuIiwiZnVuY3Rpb24gaGV4KG46IG51bWJlcikge1xyXG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihNYXRoLmZsb29yKG4pLCAyNTUpLCAwKVxyXG4gICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yIHtcclxuICAjc3RyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdyYXk6IG51bWJlciwgYWxwaGE/OiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIsIGFscGhhPzogbnVtYmVyKTtcclxuICBjb25zdHJ1Y3Rvcihjb2xvclN0cmluZzogc3RyaW5nKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGZpcnN0QXJnOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBzZWNvbmRBcmc/OiBudW1iZXIsXHJcbiAgICBibHVlPzogbnVtYmVyLFxyXG4gICAgYWxwaGE/OiBudW1iZXJcclxuICApIHtcclxuICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhpcy4jc3RyID0gZmlyc3RBcmc7XHJcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XHJcbiAgICAgIGNvbnN0IGdyYXlOdW0gPSBmaXJzdEFyZztcclxuICAgICAgY29uc3QgZ3JheUhleCA9IGhleChncmF5TnVtKTtcclxuXHJcbiAgICAgIGNvbnN0IGFscGhhTnVtID0gc2Vjb25kQXJnO1xyXG4gICAgICBjb25zdCBhbHBoYUhleCA9IGFscGhhTnVtID09PSB1bmRlZmluZWQgPyBcIlwiIDogaGV4KGFscGhhTnVtKTtcclxuXHJcbiAgICAgIHRoaXMuI3N0ciA9IGAjJHtncmF5SGV4fSR7Z3JheUhleH0ke2dyYXlIZXh9JHthbHBoYUhleH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmVkID0gZmlyc3RBcmc7XHJcbiAgICAgIGNvbnN0IHJlZEhleCA9IGhleChyZWQpO1xyXG5cclxuICAgICAgY29uc3QgZ3JlZW4gPSBzZWNvbmRBcmc7XHJcbiAgICAgIGNvbnN0IGdyZWVuSGV4ID0gaGV4KGdyZWVuIGFzIG51bWJlcik7XHJcblxyXG4gICAgICBjb25zdCBibHVlSGV4ID0gaGV4KGJsdWUgYXMgbnVtYmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IGFscGhhSGV4ID0gYWxwaGEgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBoZXgoYWxwaGEpO1xyXG5cclxuICAgICAgdGhpcy4jc3RyID0gYCMke3JlZEhleH0ke2dyZWVuSGV4fSR7Ymx1ZUhleH0ke2FscGhhSGV4fWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ3JheSh2YWx1ZTogbnVtYmVyLCBhbHBoYT86IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcih2YWx1ZSwgYWxwaGEpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21TdHJpbmcodmFsdWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBlcXVhbHMob3RoZXI6IENvbG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jc3RyID09PSBvdGhlci50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jc3RyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJnYihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyLCBhbHBoYT86IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcihyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaHNsKFxyXG4gICAgaHVlOiBudW1iZXIsXHJcbiAgICBzYXR1cmF0aW9uOiBudW1iZXIsXHJcbiAgICBsaWdodG5lc3M6IG51bWJlcixcclxuICAgIGFscGhhPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKFxyXG4gICAgICBgaHNsKCR7aHVlfSAke3NhdHVyYXRpb259ICR7bGlnaHRuZXNzfSR7XHJcbiAgICAgICAgYWxwaGEgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBgIC8gJHthbHBoYX1gXHJcbiAgICAgIH0pYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQzJEQmFzZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvYzJkQmFzZVwiO1xyXG5pbXBvcnQgeyBBbmdsZSB9IGZyb20gXCIuL2FuZ2xlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vY29sb3JcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi92ZWN0b3IyZFwiO1xyXG5cclxuY2xhc3MgQ29sb3JTdG9wIHtcclxuICAjb2Zmc2V0OiBudW1iZXI7XHJcbiAgI2NvbG9yOiBDb2xvcjtcclxuXHJcbiAgY29uc3RydWN0b3Iob2Zmc2V0OiBudW1iZXIsIGNvbG9yOiBDb2xvcikge1xyXG4gICAgdGhpcy4jb2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgdGhpcy4jY29sb3IgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIGdldCBvZmZzZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYWRpZW50IHtcclxuICAjc3RvcHM6IENvbG9yU3RvcFtdID0gW107XHJcblxyXG4gIGFkZENvbG9yU3RvcChvZmZzZXQ6IG51bWJlciwgY29sb3I6IENvbG9yKSB7XHJcbiAgICB0aGlzLiNzdG9wcy5wdXNoKG5ldyBDb2xvclN0b3Aob2Zmc2V0LCBjb2xvcikpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFwcGx5U3RvcHMoZ3JhZGllbnQ6IENhbnZhc0dyYWRpZW50KSB7XHJcbiAgICBmb3IgKGNvbnN0IHN0b3Agb2YgdGhpcy4jc3RvcHMpIHtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKHN0b3Aub2Zmc2V0LCBzdG9wLmNvbG9yLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlZmluZVNWR1N0b3BzKGRlZmluaXRpb246IFNWR0dyYWRpZW50RWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBzdG9wcyB9ID0gdGhpcztcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0b3Agb2Ygc3RvcHMpIHtcclxuICAgICAgY29uc3Qgc3RvcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgIFwic3RvcFwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzdG9wRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJvZmZzZXRcIiwgc3RvcC5vZmZzZXQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICBzdG9wRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdG9wLWNvbG9yXCIsIHN0b3AuY29sb3IudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICBkZWZpbml0aW9uLmFwcGVuZENoaWxkKHN0b3BFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIC4uLmFyZ3M6IGFueVtdKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVuZGVyIGNhbGxlZCBvbiBiYXNlIEdyYWRpZW50IGNsYXNzXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN0b3BzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3N0b3BzO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gXCJncmFkaWVudFwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN2ZygpOiBTVkdHcmFkaWVudEVsZW1lbnQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyB0eXBlIG9mIGdyYWRpZW50IGlzIG5vdCB5ZXQgc3VwcG9ydGVkIGZvciBTVkcuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmVhckdyYWRpZW50IGV4dGVuZHMgR3JhZGllbnQge1xyXG4gICNjb2xvclN0YXJ0WDogbnVtYmVyO1xyXG4gICNjb2xvclN0YXJ0WTogbnVtYmVyO1xyXG4gICNjb2xvckVuZFg6IG51bWJlcjtcclxuICAjY29sb3JFbmRZOiBudW1iZXI7XHJcbiAgI3N2ZzogU1ZHTGluZWFyR3JhZGllbnRFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHN0YXJ0WCA9IDAsIHN0YXJ0WSA9IDAsIGVuZFggPSAxLCBlbmRZID0gMSkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLiNjb2xvclN0YXJ0WCA9IHN0YXJ0WDtcclxuICAgIHRoaXMuI2NvbG9yU3RhcnRZID0gc3RhcnRZO1xyXG4gICAgdGhpcy4jY29sb3JFbmRYID0gZW5kWDtcclxuICAgIHRoaXMuI2NvbG9yRW5kWSA9IGVuZFk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBib3VuZHNYOiBudW1iZXIsXHJcbiAgICBib3VuZHNZOiBudW1iZXIsXHJcbiAgICBib3VuZHNXaWR0aDogbnVtYmVyLFxyXG4gICAgYm91bmRzSGVpZ2h0OiBudW1iZXJcclxuICApIHtcclxuICAgIGNvbnN0IHgwID0gYm91bmRzWCArIGJvdW5kc1dpZHRoICogdGhpcy4jY29sb3JTdGFydFg7XHJcbiAgICBjb25zdCB5MCA9IGJvdW5kc1kgKyBib3VuZHNIZWlnaHQgKiB0aGlzLiNjb2xvclN0YXJ0WTtcclxuICAgIGNvbnN0IHgxID0gYm91bmRzWCArIGJvdW5kc1dpZHRoICogdGhpcy4jY29sb3JFbmRYO1xyXG4gICAgY29uc3QgeTEgPSBib3VuZHNZICsgYm91bmRzSGVpZ2h0ICogdGhpcy4jY29sb3JFbmRZO1xyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCh4MCwgeTAsIHgxLCB5MSk7XHJcblxyXG4gICAgdGhpcy5hcHBseVN0b3BzKGdyYWRpZW50KTtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgc3ZnKCkge1xyXG4gICAgaWYgKHRoaXMuI3N2ZyAhPT0gbnVsbCkgcmV0dXJuIHRoaXMuI3N2ZztcclxuXHJcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwibGluZWFyR3JhZGllbnRcIlxyXG4gICAgKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcIngxXCIsIHRoaXMuI2NvbG9yU3RhcnRYLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwieTFcIiwgdGhpcy4jY29sb3JTdGFydFkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB0aGlzLiNjb2xvckVuZFgudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCB0aGlzLiNjb2xvckVuZFkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgdGhpcy5kZWZpbmVTVkdTdG9wcyhzdmdFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gKHRoaXMuI3N2ZyA9IHN2Z0VsZW1lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlhbEdyYWRpZW50IGV4dGVuZHMgR3JhZGllbnQge1xyXG4gICNzdGFydFg6IG51bWJlcjtcclxuICAjc3RhcnRZOiBudW1iZXI7XHJcbiAgI3N0YXJ0UmFkaXVzOiBudW1iZXI7XHJcbiAgI2VuZFg6IG51bWJlcjtcclxuICAjZW5kWTogbnVtYmVyO1xyXG4gICNlbmRSYWRpdXM6IG51bWJlcjtcclxuICAjc3ZnOiBTVkdSYWRpYWxHcmFkaWVudEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzdGFydFggPSAwLFxyXG4gICAgc3RhcnRZID0gMCxcclxuICAgIHN0YXJ0UmFkaXVzID0gMCxcclxuICAgIGVuZFggPSAwLFxyXG4gICAgZW5kWSA9IDAsXHJcbiAgICBlbmRSYWRpdXMgPSAxXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuI3N0YXJ0WCA9IHN0YXJ0WDtcclxuICAgIHRoaXMuI3N0YXJ0WSA9IHN0YXJ0WTtcclxuICAgIHRoaXMuI3N0YXJ0UmFkaXVzID0gc3RhcnRSYWRpdXM7XHJcbiAgICB0aGlzLiNlbmRYID0gZW5kWDtcclxuICAgIHRoaXMuI2VuZFkgPSBlbmRZO1xyXG4gICAgdGhpcy4jZW5kUmFkaXVzID0gZW5kUmFkaXVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgYm91bmRzWDogbnVtYmVyLFxyXG4gICAgYm91bmRzWTogbnVtYmVyLFxyXG4gICAgYm91bmRzUmFkaXVzOiBudW1iZXJcclxuICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICBjb25zdCB4MCA9IGJvdW5kc1ggKyB0aGlzLiNzdGFydFggKiBib3VuZHNSYWRpdXM7XHJcbiAgICBjb25zdCB5MCA9IGJvdW5kc1kgKyB0aGlzLiNzdGFydFkgKiBib3VuZHNSYWRpdXM7XHJcbiAgICBjb25zdCByMCA9IGJvdW5kc1JhZGl1cyAqIHRoaXMuI3N0YXJ0UmFkaXVzO1xyXG5cclxuICAgIGNvbnN0IHgxID0gYm91bmRzWCArIHRoaXMuI2VuZFggKiBib3VuZHNSYWRpdXM7XHJcbiAgICBjb25zdCB5MSA9IGJvdW5kc1kgKyB0aGlzLiNlbmRZICogYm91bmRzUmFkaXVzO1xyXG4gICAgY29uc3QgcjEgPSBib3VuZHNSYWRpdXMgKiB0aGlzLiNlbmRSYWRpdXM7XHJcblxyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgwLCB5MCwgcjAsIHgxLCB5MSwgcjEpO1xyXG5cclxuICAgIHRoaXMuYXBwbHlTdG9wcyhncmFkaWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN2ZygpIHtcclxuICAgIGlmICh0aGlzLiNzdmcgIT09IG51bGwpIHJldHVybiB0aGlzLiNzdmc7XHJcblxyXG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcInJhZGlhbEdyYWRpZW50XCJcclxuICAgICk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJmclwiLCB0aGlzLiNzdGFydFJhZGl1cy50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImZ4XCIsIHRoaXMuI3N0YXJ0WC50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImN4XCIsIHRoaXMuI2VuZFgudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjeVwiLCB0aGlzLiNlbmRZLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiclwiLCB0aGlzLiNlbmRSYWRpdXMudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgdGhpcy5kZWZpbmVTVkdTdG9wcyhzdmdFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gKHRoaXMuI3N2ZyA9IHN2Z0VsZW1lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmljYWxHcmFkaWVudCBleHRlbmRzIEdyYWRpZW50IHtcclxuICAjc3RhcnRBbmdsZTogQW5nbGU7XHJcbiAgI29mZnNldDogVmVjdG9yMkQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgc3RhcnRBbmdsZTogQW5nbGUgPSBBbmdsZS56ZXJvKCksXHJcbiAgICBvZmZzZXQ6IFZlY3RvcjJEID0gVmVjdG9yMkQuemVybygpXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuI3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlO1xyXG4gICAgdGhpcy4jb2Zmc2V0ID0gb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2VudGVyOiBWZWN0b3IyRCk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHggPSBjZW50ZXIueCArIHRoaXMuI29mZnNldC54O1xyXG4gICAgY29uc3QgeSA9IGNlbnRlci55ICsgdGhpcy4jb2Zmc2V0Lnk7XHJcblxyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUNvbmljR3JhZGllbnQoXHJcbiAgICAgIHRoaXMuI3N0YXJ0QW5nbGUucmFkaWFucyxcclxuICAgICAgeCxcclxuICAgICAgeVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFwcGx5U3RvcHMoZ3JhZGllbnQpO1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERyYXdTdHlsZSA9IENvbG9yIHwgc3RyaW5nIHwgR3JhZGllbnQgfCBOb25lO1xyXG4iLCJleHBvcnQgY2xhc3MgS2V5Ym9hcmRUcmFja2VyIHtcclxuICAjY3VycmVudCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICNwcmV2aW91cyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICNsYXN0ID0gXCJcIjtcclxuICAjZG93biA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy4jY3VycmVudC5hZGQoZXZlbnQua2V5KTtcclxuXHJcbiAgICAgIHRoaXMuI2xhc3QgPSBldmVudC5rZXk7XHJcblxyXG4gICAgICB0aGlzLiNkb3duID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuI2N1cnJlbnQuZGVsZXRlKGV2ZW50LmtleSk7XHJcblxyXG4gICAgICB0aGlzLiNkb3duID0gZmFsc2U7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IFtfLCBzdGF0ZV0gb2YgdGhpcy4jY3VycmVudC5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgIHRoaXMuI2Rvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZHZhbmNlRnJhbWUoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLiNwcmV2aW91cykge1xyXG4gICAgICBpZiAoIXRoaXMuI2N1cnJlbnQuaGFzKGtleSkpIHRoaXMuI3ByZXZpb3VzLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuI2N1cnJlbnQpIHtcclxuICAgICAgdGhpcy4jcHJldmlvdXMuYWRkKGtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZG93bigpIHtcclxuICAgIHJldHVybiB0aGlzLiNkb3duO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jbGFzdDtcclxuICB9XHJcblxyXG4gIGtleUhlbGQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLiNjdXJyZW50LmhhcyhrZXkpO1xyXG4gIH1cclxuXHJcbiAga2V5UHJldmlvdXNseUhlbGQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLiNwcmV2aW91cy5oYXMoa2V5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi92ZWN0b3IyZFwiO1xyXG5cclxuY29uc3QgYnV0dG9uTmFtZXMgPSB7IGxlZnQ6IDAsIHJpZ2h0OiAxLCB3aGVlbDogMiwgYmFjazogMywgZm9yd2FyZDogNCB9O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlRGF0YSBleHRlbmRzIFZlY3RvcjJEIHtcclxuICAjYnV0dG9uU3RhdGVzID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XHJcbiAgI292ZXIgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGJ1dHRvblN0YXRlcygpIHtcclxuICAgIHJldHVybiB0aGlzLiNidXR0b25TdGF0ZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgYnV0dG9uU3RhdGVzKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNidXR0b25TdGF0ZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBvdmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI292ZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgb3Zlcih2YWx1ZSkge1xyXG4gICAgdGhpcy4jb3ZlciA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlVHJhY2tlciBleHRlbmRzIE1vdXNlRGF0YSB7XHJcbiAgI3ByZXZpb3VzOiBNb3VzZURhdGE7XHJcbiAgI3RhcmdldDogSFRNTEVsZW1lbnQgfCBXaW5kb3c7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTEVsZW1lbnQgfCBXaW5kb3cgPSB3aW5kb3cpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy4jdGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuICAgIHRoaXMuI3ByZXZpb3VzID0gbmV3IE1vdXNlRGF0YSgpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHN1cGVyLnggPSBldmVudC54O1xyXG4gICAgICBzdXBlci55ID0gZXZlbnQueTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IHRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICB0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHN1cGVyLmJ1dHRvblN0YXRlc1tldmVudC5idXR0b25dID0gdHJ1ZTtcclxuXHJcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHN1cGVyLmJ1dHRvblN0YXRlc1tldmVudC5idXR0b25dID0gZmFsc2U7XHJcblxyXG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBzdXBlci5vdmVyID0gdHJ1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHN1cGVyLm92ZXIgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHVwZGF0ZVBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGFkdmFuY2VGcmFtZSgpIHtcclxuICAgIHRoaXMuI3ByZXZpb3VzLmJ1dHRvblN0YXRlcyA9IFsuLi50aGlzLmJ1dHRvblN0YXRlc107XHJcblxyXG4gICAgdGhpcy4jcHJldmlvdXMub3ZlciA9IHRoaXMub3ZlcjtcclxuXHJcbiAgICB0aGlzLiNwcmV2aW91cy54ID0gdGhpcy54O1xyXG5cclxuICAgIHRoaXMuI3ByZXZpb3VzLnkgPSB0aGlzLnk7XHJcbiAgfVxyXG5cclxuICBnZXQgYnV0dG9uU3RhdGVzKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmJ1dHRvblN0YXRlcztcclxuICB9XHJcblxyXG4gIGdldCBvdmVyKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLm92ZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJldmlvdXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jcHJldmlvdXM7XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtcclxuICAgIGlmICh0aGlzLiN0YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cpIHJldHVybiBzdXBlci54O1xyXG5cclxuICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHRoaXMuI3RhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4gc3VwZXIueCAtIGJvdW5kaW5nUmVjdC54O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHkoKSB7XHJcbiAgICBpZiAodGhpcy4jdGFyZ2V0IGluc3RhbmNlb2YgV2luZG93KSByZXR1cm4gc3VwZXIueTtcclxuXHJcbiAgICBjb25zdCBib3VuZGluZ1JlY3QgPSB0aGlzLiN0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHN1cGVyLnkgLSBib3VuZGluZ1JlY3QueTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5cclxudHlwZSBQcm9wZXJ0eVJhbmdlczxQIGV4dGVuZHMgc3RyaW5nPiA9IHtcclxuICBbS2V5IGluIFBdPzoge1xyXG4gICAgbWluPzogbnVtYmVyO1xyXG4gICAgbWF4PzogbnVtYmVyO1xyXG4gIH07XHJcbn07XHJcblxyXG50eXBlIEdyYXlSYW5nZXMgPSBQcm9wZXJ0eVJhbmdlczxcInZhbHVlXCIgfCBcImFscGhhXCI+O1xyXG5cclxudHlwZSBIU0xSYW5nZXMgPSBQcm9wZXJ0eVJhbmdlczxcImh1ZVwiIHwgXCJzYXR1cmF0aW9uXCIgfCBcImxpZ2h0bmVzc1wiIHwgXCJhbHBoYVwiPjtcclxuXHJcbnR5cGUgUkdCUmFuZ2VzID0gUHJvcGVydHlSYW5nZXM8XCJyZWRcIiB8IFwiZ3JlZW5cIiB8IFwiYmx1ZVwiIHwgXCJhbHBoYVwiPjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb20ge1xyXG4gIHN0YXRpYyBjb2xvckdyYXkocmFuZ2U6IEdyYXlSYW5nZXMpOiBDb2xvcjtcclxuICBzdGF0aWMgY29sb3JHcmF5KFxyXG4gICAgbWluVmFsdWU6IG51bWJlcixcclxuICAgIG1heFZhbHVlOiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9yR3JheShcclxuICAgIGFyZzE6IEdyYXlSYW5nZXMgfCBudW1iZXIsXHJcbiAgICBtYXhWYWx1ZT86IG51bWJlcixcclxuICAgIG1pbkFscGhhPzogbnVtYmVyLFxyXG4gICAgbWF4QWxwaGE/OiBudW1iZXJcclxuICApIHtcclxuICAgIGNvbnN0IHJhbmdlOiBHcmF5UmFuZ2VzID1cclxuICAgICAgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IGFyZzFcclxuICAgICAgICA6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHsgbWluOiBhcmcxLCBtYXg6IG1heFZhbHVlIH0sXHJcbiAgICAgICAgICAgIGFscGhhOiB7IG1pbjogbWluQWxwaGEsIG1heDogbWF4QWxwaGEgfSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENvbG9yLmdyYXkoXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2UudmFsdWU/Lm1pbiA/PyAwLCByYW5nZS52YWx1ZT8ubWF4ID8/IDI1NSksXHJcbiAgICAgIHJhbmdlLmFscGhhID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAocmFuZ2UuYWxwaGEubWluID09PSB1bmRlZmluZWQgJiYgcmFuZ2UuYWxwaGEubWF4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IFJhbmRvbS5mbG9hdChyYW5nZS5hbHBoYS5taW4gPz8gMCwgcmFuZ2UuYWxwaGEubWF4ID8/IDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbG9ySFNMKHJhbmdlczogSFNMUmFuZ2VzKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9ySFNMKFxyXG4gICAgbWluSHVlOiBudW1iZXIsXHJcbiAgICBtYXhIdWU6IG51bWJlcixcclxuICAgIG1pblNhdHVyYXRpb246IG51bWJlcixcclxuICAgIG1heFNhdHVyYXRpb246IG51bWJlcixcclxuICAgIG1pbkxpZ2h0bmVzczogbnVtYmVyLFxyXG4gICAgbWF4TGlnaHRuZXNzOiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9ySFNMKFxyXG4gICAgYXJnMTogSFNMUmFuZ2VzIHwgbnVtYmVyLFxyXG4gICAgbWF4SHVlPzogbnVtYmVyLFxyXG4gICAgbWluU2F0dXJhdGlvbj86IG51bWJlcixcclxuICAgIG1heFNhdHVyYXRpb24/OiBudW1iZXIsXHJcbiAgICBtaW5MaWdodG5lc3M/OiBudW1iZXIsXHJcbiAgICBtYXhMaWdodG5lc3M/OiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCByYW5nZXM6IEhTTFJhbmdlcyA9XHJcbiAgICAgIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgPyBhcmcxXHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIGh1ZToge1xyXG4gICAgICAgICAgICAgIG1pbjogYXJnMSxcclxuICAgICAgICAgICAgICBtYXg6IG1heEh1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2F0dXJhdGlvbjogeyBtaW46IG1pblNhdHVyYXRpb24sIG1heDogbWF4U2F0dXJhdGlvbiB9LFxyXG4gICAgICAgICAgICBsaWdodG5lc3M6IHsgbWluOiBtaW5MaWdodG5lc3MsIG1heDogbWF4TGlnaHRuZXNzIH0sXHJcbiAgICAgICAgICAgIGFscGhhOiB7IG1pbjogbWluQWxwaGEsIG1heDogbWF4QWxwaGEgfSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENvbG9yLmhzbChcclxuICAgICAgUmFuZG9tLmludChyYW5nZXMuaHVlPy5taW4gPz8gMCwgcmFuZ2VzLmh1ZT8ubWF4ID8/IDM2MCksXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2VzLnNhdHVyYXRpb24/Lm1pbiA/PyAwLCByYW5nZXMuc2F0dXJhdGlvbj8ubWF4ID8/IDEwMCksXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2VzLmxpZ2h0bmVzcz8ubWluID8/IDAsIHJhbmdlcy5saWdodG5lc3M/Lm1heCA/PyAxMDApLFxyXG4gICAgICByYW5nZXMuYWxwaGEgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgIChyYW5nZXMuYWxwaGEubWluID09PSB1bmRlZmluZWQgJiYgcmFuZ2VzLmFscGhhLm1heCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgOiBSYW5kb20uZmxvYXQocmFuZ2VzLmFscGhhLm1pbiA/PyAwLCByYW5nZXMuYWxwaGEubWF4ID8/IDEpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbG9yUkdCKHJhbmdlczogUkdCUmFuZ2VzKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9yUkdCKFxyXG4gICAgbWluUmVkOiBudW1iZXIsXHJcbiAgICBtYXhSZWQ6IG51bWJlcixcclxuICAgIG1pbkdyZWVuOiBudW1iZXIsXHJcbiAgICBtYXhHcmVlbjogbnVtYmVyLFxyXG4gICAgbWluQmx1ZTogbnVtYmVyLFxyXG4gICAgbWF4Qmx1ZTogbnVtYmVyLFxyXG4gICAgbWluQWxwaGE/OiBudW1iZXIsXHJcbiAgICBtYXhBbHBoYT86IG51bWJlclxyXG4gICk6IENvbG9yO1xyXG4gIHN0YXRpYyBjb2xvclJHQihcclxuICAgIGFyZzE6IFJHQlJhbmdlcyB8IG51bWJlcixcclxuICAgIG1heFJlZD86IG51bWJlcixcclxuICAgIG1pbkdyZWVuPzogbnVtYmVyLFxyXG4gICAgbWF4R3JlZW4/OiBudW1iZXIsXHJcbiAgICBtaW5CbHVlPzogbnVtYmVyLFxyXG4gICAgbWF4Qmx1ZT86IG51bWJlcixcclxuICAgIG1pbkFscGhhPzogbnVtYmVyLFxyXG4gICAgbWF4QWxwaGE/OiBudW1iZXJcclxuICApIHtcclxuICAgIGNvbnN0IHJhbmdlczogUkdCUmFuZ2VzID1cclxuICAgICAgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IGFyZzFcclxuICAgICAgICA6IHtcclxuICAgICAgICAgICAgcmVkOiB7XHJcbiAgICAgICAgICAgICAgbWluOiBhcmcxLFxyXG4gICAgICAgICAgICAgIG1heDogbWF4UmVkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmVlbjogeyBtaW46IG1pbkdyZWVuLCBtYXg6IG1heEdyZWVuIH0sXHJcbiAgICAgICAgICAgIGJsdWU6IHsgbWluOiBtaW5CbHVlLCBtYXg6IG1heEJsdWUgfSxcclxuICAgICAgICAgICAgYWxwaGE6IHsgbWluOiBtaW5BbHBoYSwgbWF4OiBtYXhBbHBoYSB9LFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ29sb3IucmdiKFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlcy5yZWQ/Lm1pbiA/PyAwLCByYW5nZXMucmVkPy5tYXggPz8gMjU1KSxcclxuICAgICAgUmFuZG9tLmludChyYW5nZXMuZ3JlZW4/Lm1pbiA/PyAwLCByYW5nZXMuZ3JlZW4/Lm1heCA/PyAyNTUpLFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlcy5ibHVlPy5taW4gPz8gMCwgcmFuZ2VzLmJsdWU/Lm1heCA/PyAyNTUpLFxyXG4gICAgICByYW5nZXMuYWxwaGEgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgIChyYW5nZXMuYWxwaGEubWluID09PSB1bmRlZmluZWQgJiYgcmFuZ2VzLmFscGhhLm1heCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgOiBSYW5kb20uaW50KHJhbmdlcy5hbHBoYS5taW4gPz8gMCwgcmFuZ2VzLmFscGhhLm1heCA/PyAyNTUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZsb2F0KG1heDogbnVtYmVyKTogbnVtYmVyO1xyXG4gIHN0YXRpYyBmbG9hdChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgc3RhdGljIGZsb2F0KGFyZzE6IG51bWJlciwgYXJnMj86IG51bWJlcikge1xyXG4gICAgY29uc3QgW21pbiwgbWF4XSA9IGFyZzIgPT09IHVuZGVmaW5lZCA/IFswLCBhcmcxXSA6IFthcmcxLCBhcmcyXTtcclxuXHJcbiAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG9mPFQgZXh0ZW5kcyBhbnlbXT4oYXJyYXk6IFQpIHtcclxuICAgIHJldHVybiBhcnJheVtSYW5kb20uaW50KGFycmF5Lmxlbmd0aCldO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGludChtYXg6IG51bWJlcik6IG51bWJlcjtcclxuICBzdGF0aWMgaW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlcjtcclxuICBzdGF0aWMgaW50KC4uLmFyZ3M6IFtudW1iZXJdKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihSYW5kb20uZmxvYXQoLi4uYXJncykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL2NvbG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi92ZWN0b3IyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWRvdyB7XHJcbiAgI2JsdXIgPSBjcmVhdGVTdGF0ZSgwKTtcclxuICAjY29sb3IgPSBDb2xvci5ncmF5KDApO1xyXG4gICNvZmZzZXQgPSBWZWN0b3IyRC56ZXJvKCk7XHJcbiAgI2NoYW5nZUxpc3RlbmVyTWFwID0gbmV3IE1hcDxDaGFuZ2VMaXN0ZW5lcjxTaGFkb3c+LCAoKSA9PiB2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYXJ0aWFsPFNoYWRvdz4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcjogKHVwZGF0ZWRWYWx1ZTogU2hhZG93KSA9PiB2b2lkKSB7XHJcbiAgICBpZiAodGhpcy4jY2hhbmdlTGlzdGVuZXJNYXAuaGFzKGxpc3RlbmVyKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxpc3RlbmVyQ2FsbGVyID0gKCkgPT4gbGlzdGVuZXIodGhpcyk7XHJcblxyXG4gICAgdGhpcy4jYmx1ci5hZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lckNhbGxlcik7XHJcbiAgICB0aGlzLiNvZmZzZXQuYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXJDYWxsZXIpO1xyXG5cclxuICAgIHRoaXMuI2NoYW5nZUxpc3RlbmVyTWFwLnNldChsaXN0ZW5lciwgbGlzdGVuZXJDYWxsZXIpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFNoYWRvdz4pIHtcclxuICAgIGNvbnN0IGNhbGxlciA9IHRoaXMuI2NoYW5nZUxpc3RlbmVyTWFwLmdldChsaXN0ZW5lcik7XHJcblxyXG4gICAgaWYgKGNhbGxlciA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jYmx1ci5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihjYWxsZXIpO1xyXG4gICAgdGhpcy4jb2Zmc2V0LnJlbW92ZUNoYW5nZUxpc3RlbmVyKGNhbGxlcik7XHJcblxyXG4gICAgdGhpcy4jY2hhbmdlTGlzdGVuZXJNYXAuZGVsZXRlKGxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gICNjaGFuZ2VMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIHRoaXMuI2hhbmRsZUNoYW5nZSgpO1xyXG4gIH07XHJcblxyXG4gICNoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtfLCBjYWxsZXJdIG9mIHRoaXMuI2NoYW5nZUxpc3RlbmVyTWFwKSB7XHJcbiAgICAgIGNhbGxlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGJsdXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jYmx1ci52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCBibHVyKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jYmx1ci52YWx1ZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiNibHVyLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy4jaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY29sb3I7XHJcbiAgfVxyXG5cclxuICBzZXQgY29sb3IodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNjb2xvci5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jY29sb3IgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLiNoYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGVxdWFscyhvdGhlcjogU2hhZG93KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBvdGhlci4jYmx1ciA9PT0gdGhpcy4jYmx1ciAmJlxyXG4gICAgICBvdGhlci4jY29sb3IuZXF1YWxzKHRoaXMuI2NvbG9yKSAmJlxyXG4gICAgICBvdGhlci4jb2Zmc2V0LmVxdWFscyh0aGlzLiNvZmZzZXQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9mZnNldCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNvZmZzZXQ7XHJcbiAgfVxyXG5cclxuICBzZXQgb2Zmc2V0KHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jb2Zmc2V0ICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLiNvZmZzZXQucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy4jY2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgdmFsdWUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jY2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgdGhpcy4jb2Zmc2V0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLiNvZmZzZXQuZXF1YWxzKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLiNoYW5kbGVDaGFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IHRoaXMuI2JsdXIudmFsdWU7XHJcbiAgICBjb250ZXh0LnNoYWRvd0NvbG9yID0gdGhpcy4jY29sb3IudG9TdHJpbmcoKTtcclxuICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IHRoaXMuI29mZnNldC54O1xyXG4gICAgY29udGV4dC5zaGFkb3dPZmZzZXRZID0gdGhpcy4jb2Zmc2V0Lnk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTdGF0ZTxUPiB7XHJcbiAgI2xpc3RlbmVycyA9IG5ldyBTZXQ8Q2hhbmdlTGlzdGVuZXI8VD4+KCk7XHJcbiAgI3ZhbHVlOiBUO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWU6IFQpIHtcclxuICAgIHRoaXMuI3ZhbHVlID0gaW5pdGlhbFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIEZ1bmN0aW9uIHdpdGggMSBwYXJhbWV0ZXI6IHRoZSBjaGFuZ2VkIHZhbHVlXHJcbiAgICogQHJldHVybnMgQXJyYXkgb2YgbGlzdGVuZXJzIGN1cnJlbnRseSByZWdpc3RlcmVkXHJcbiAgICovXHJcblxyXG4gIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxUPik6IENoYW5nZUxpc3RlbmVyPFQ+W10ge1xyXG4gICAgdGhpcy4jbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy4jbGlzdGVuZXJzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IGlzIG5vIGxvbmdlciBjYWxsZWQgd2hlbiB0aGUgdmFsdWVcclxuICAgKiBjaGFuZ2VzXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGlzdGVuZXIgTGlzdGVuZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXHJcbiAgICogQHJldHVybnMgQXJyYXkgb2YgbGlzdGVuZXJzIGN1cnJlbnRseSByZWdpc3RlcmVkXHJcbiAgICovXHJcblxyXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxUPik6IENoYW5nZUxpc3RlbmVyPFQ+W10ge1xyXG4gICAgdGhpcy4jbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy4jbGlzdGVuZXJzKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYW5kbGVDaGFuZ2UoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuI2xpc3RlbmVycykge1xyXG4gICAgICBsaXN0ZW5lcih0aGlzLiN2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYW5vdGhlciBTdGF0ZSByZXByZXNlbnRzIHRoZSBzYW1lIHZhbHVlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG90aGVyIFN0YXRlIG9mIHNhbWUgdHlwZVxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcblxyXG4gIGVxdWFscyhvdGhlcjogVCB8IFN0YXRlPFQ+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy4jdmFsdWUgPT09IG90aGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgbW92ZXMgYSBsaXN0ZW5lciBmcm9tIG9uZSBTdGF0ZSB0byBhbm90aGVyIGFuZCByZXR1cm5zIHRoZVxyXG4gICAqIG90aGVyIHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG90aGVyIEFub3RoZXIgU3RhdGUgb2YgdGhlIHNhbWUgdHlwZVxyXG4gICAqIEBwYXJhbSBjaGFuZ2VMaXN0ZW5lclxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcblxyXG4gIHJlcGxhY2U8TyBleHRlbmRzIHRoaXM+KG90aGVyOiBPLCBjaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VD4pOiBPIHtcclxuICAgIGlmICh0aGlzLmVxdWFscyhvdGhlcikpIHtcclxuICAgICAgaWYgKHRoaXMgPT09IG90aGVyKSByZXR1cm4gb3RoZXI7XHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNoYW5nZUxpc3RlbmVyKGNoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBvdGhlci5hZGRDaGFuZ2VMaXN0ZW5lcihjaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgY2hhbmdlTGlzdGVuZXIob3RoZXIuI3ZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDdXJyZW50IHZhbHVlIHN0b3JlZCBieSB0aGlzIFN0YXRlLlxyXG4gICAqL1xyXG5cclxuICBnZXQgdmFsdWUoKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy4jdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUobmV3VmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiN2YWx1ZSA9PT0gbmV3VmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiN2YWx1ZSA9IG5ld1ZhbHVlO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGU8VD4odGFyZ2V0OiBUKSB7XHJcbiAgcmV0dXJuIG5ldyBTdGF0ZSh0YXJnZXQpO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBVbml0cyB7XHJcbiAgc3RhdGljIHNpemUgPSB7XHJcbiAgICBjZW50aW1ldGVyczogXCJjbVwiLFxyXG4gICAgbWlsbGltZXRlcnM6IFwibW1cIixcclxuICAgIHF1YXJ0ZXJNaWxsaW1ldGVyczogXCJRXCIsXHJcbiAgICBpbmNoZXM6IFwiaW5cIixcclxuICAgIHBpY2FzOiBcInBjXCIsXHJcbiAgICBwb2ludHM6IFwicHRcIixcclxuICAgIHBpeGVsczogXCJweFwiLFxyXG4gICAgcGVyY2VudFZpZXdwb3J0SGVpZ2h0OiBcInZoXCIsXHJcbiAgICBwZXJjZW50Vmlld3BvcnRXaWR0aDogXCJ2d1wiLFxyXG4gIH0gYXMgY29uc3Q7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjJEQmFzZSB7XHJcbiAgI3g6IG51bWJlcjtcclxuICAjeTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy4jeCA9IHg7XHJcbiAgICB0aGlzLiN5ID0geTtcclxuICB9XHJcblxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3g7XHJcbiAgfVxyXG5cclxuICBzZXQgeCh2YWx1ZSkge1xyXG4gICAgdGhpcy4jeCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jeTtcclxuICB9XHJcblxyXG4gIHNldCB5KHZhbHVlKSB7XHJcbiAgICB0aGlzLiN5ID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMkQgZXh0ZW5kcyBTdGF0ZTxWZWN0b3IyREJhc2U+IHtcclxuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IHgpIHtcclxuICAgIHN1cGVyKG5ldyBWZWN0b3IyREJhc2UoeCwgeSkpO1xyXG4gIH1cclxuXHJcbiAgY29weSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgZXF1YWxzKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbjtcclxuICBlcXVhbHMob3RoZXI6IFZlY3RvcjJEKTogYm9vbGVhbjtcclxuICBlcXVhbHMoYXJnMTogVmVjdG9yMkQgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHRoaXMueCA9PT0gYXJnMSAmJiB0aGlzLnkgPT09IGFyZzI7XHJcbiAgICByZXR1cm4gdGhpcy54ID09PSBhcmcxLnggJiYgdGhpcy55ID09PSBhcmcxLnk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW52ZXJzZSgpIHtcclxuICAgIHJldHVybiBWZWN0b3IyRC54eSgtdGhpcy54LCAtdGhpcy55KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKDEpO1xyXG4gIH1cclxuXHJcbiAgbWludXMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBWZWN0b3IyRDtcclxuICBtaW51cyhvdGhlcjogVmVjdG9yMkQpOiBWZWN0b3IyRDtcclxuICBtaW51cyhhcmcxOiBWZWN0b3IyRCB8IG51bWJlciwgYXJnMj86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKVxyXG4gICAgICByZXR1cm4gVmVjdG9yMkQueHkodGhpcy54IC0gYXJnMSwgdGhpcy55IC0gKGFyZzIgPz8gYXJnMSkpO1xyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMueCAtIGFyZzEueCwgdGhpcy55IC0gYXJnMS55KTtcclxuICB9XHJcblxyXG4gIHBsdXMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBWZWN0b3IyRDtcclxuICBwbHVzKG90aGVyOiBWZWN0b3IyRCk6IFZlY3RvcjJEO1xyXG4gIHBsdXMoYXJnMTogVmVjdG9yMkQgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMueCArIGFyZzEsIHRoaXMueSArIChhcmcyID8/IGFyZzEpKTtcclxuICAgIHJldHVybiBWZWN0b3IyRC54eSh0aGlzLnggKyBhcmcxLngsIHRoaXMueSArIGFyZzEueSk7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIGNvbnN0IHhTdHJpbmcgPSBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMueClcclxuICAgICAgPyB0aGlzLngudG9TdHJpbmcoKVxyXG4gICAgICA6IHRoaXMueC50b0ZpeGVkKDEpO1xyXG4gICAgY29uc3QgeVN0cmluZyA9IE51bWJlci5pc0ludGVnZXIodGhpcy55KVxyXG4gICAgICA/IHRoaXMueS50b1N0cmluZygpXHJcbiAgICAgIDogdGhpcy55LnRvRml4ZWQoMSk7XHJcblxyXG4gICAgcmV0dXJuIGAke3hTdHJpbmd9LCAke3lTdHJpbmd9YDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB4eSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh4LCB5KTtcclxuICB9XHJcblxyXG4gIGdldCB4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUueDtcclxuICB9XHJcblxyXG4gIHNldCB4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlLnggPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy52YWx1ZS54ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUueTtcclxuICB9XHJcblxyXG4gIHNldCB5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlLnkgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy52YWx1ZS55ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB6ZXJvKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi4vZG9jdW1lbnQvZG9tQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhUTUxBdWRpb1dyYXBwZXIgZXh0ZW5kcyBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcclxuICBcImF1ZGlvXCJcclxuKSB7fVxyXG5cclxuZXhwb3J0IHR5cGUgSFRNTEF1ZGlvQ29udHJvbGxlciA9IEhUTUxFbGVtZW50Q29udHJvbGxlcjxcclxuICBcImF1ZGlvXCIsXHJcbiAgSFRNTEF1ZGlvV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBkb2N1bWVudENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi9kb21CYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRDb250YWluZXJXcmFwcGVyIGV4dGVuZHMgZG9jdW1lbnRDaGlsZHJlbihcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcImRpdlwiKVxyXG4pIHt9XHJcblxyXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRhaW5lckNvbnRyb2xsZXIgPSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgXCJkaXZcIixcclxuICBEb2N1bWVudENvbnRhaW5lcldyYXBwZXJcclxuPjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gXCIuLi9taXhhYmxlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi92aXN1YWwvY2FudmFzXCI7XHJcbmltcG9ydCB7IERvY3VtZW50Q29udGFpbmVyV3JhcHBlciB9IGZyb20gXCIuL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBTVkdTVkdDb250cm9sbGVyIH0gZnJvbSBcIi4uL3Zpc3VhbC9zdmdTVkdcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFxyXG4gIFQgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcclxuPih0YWc6IFQpIHtcclxuICByZXR1cm4gY2xhc3MgSFRNTEVsZW1lbnRXcmFwcGVyIHtcclxuICAgICNlbGVtZW50OiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF07XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgIHRoaXMuI2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhczJEKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEQ2FudmFzRWxlbWVudD4pIHtcclxuICAgICAgY29uc3QgY2FudmFzQ29udHJvbGxlciA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoXHJcbiAgICAgICAgQ2FudmFzMkRDYW52YXNFbGVtZW50LFxyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNDb250cm9sbGVyKTtcclxuXHJcbiAgICAgIHJldHVybiBjYW52YXNDb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVdyYXBwZWRDaGlsZDxcclxuICAgICAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICAgICAgVyBleHRlbmRzIEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+XHJcbiAgICA+KFxyXG4gICAgICBXcmFwcGVyQ29uc3RydWN0b3I6IFcsXHJcbiAgICAgIG9wdGlvbnM/OiBPcHRpb25zPEhUTUxFbGVtZW50Q29udHJvbGxlcjxULCBJbnN0YW5jZVR5cGU8Vz4+PlxyXG4gICAgKTogSFRNTEVsZW1lbnRDb250cm9sbGVyPFQsIEluc3RhbmNlVHlwZTxXPj4ge1xyXG4gICAgICBjb25zdCBjb250cm9sbGVyID0gY3JlYXRlV3JhcHBlZENvbnRyb2xsZXI8VCwgVz4oV3JhcHBlckNvbnN0cnVjdG9yKTtcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250cm9sbGVyLmVsZW1lbnQpO1xyXG5cclxuICAgICAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHJldHVybiBjb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50LnN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHlsZShkZWNsYXJhdGlvbjogQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuI2VsZW1lbnQuc3R5bGUsIGRlY2xhcmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcob3B0aW9ucz86IE9wdGlvbnM8U1ZHU1ZHQ29udHJvbGxlcj4pIHtcclxuICAgICAgY29uc3Qgc3ZnU1ZHQ29udHJvbGxlciA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoU1ZHU1ZHQ29udHJvbGxlciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnU1ZHQ29udHJvbGxlcik7XHJcblxyXG4gICAgICByZXR1cm4gc3ZnU1ZHQ29udHJvbGxlcjtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxcclxuICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXHJcbj4gPSBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxUPj47XHJcblxyXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUFwcGxpZXI8XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICBXIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+PlxyXG4+ID0gKFxyXG4gIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LFxyXG4gIC4uLnZhbHVlczogYW55W11cclxuKSA9PiBIVE1MRWxlbWVudENvbnRyb2xsZXI8VCwgVz47XHJcblxyXG5leHBvcnQgdHlwZSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICBXIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+PlxyXG4+ID0gSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdICYgVyAmIFRlbXBsYXRlQXBwbGllcjxULCBXPjtcclxuXHJcbnR5cGUgU3RhdGVMaXN0ZW5lcjxUPiA9IHtcclxuICBzdGF0ZTogU3RhdGU8VD47XHJcbiAgY2hhbmdlTGlzdGVuZXI6IChuZXdWYWx1ZTogVCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVN0YXRlTGlzdGVuZXIgPSA8VD4oXHJcbiAgc3RhdGU6IFN0YXRlPFQ+LFxyXG4gIGNoYW5nZUxpc3RlbmVyOiAobmV3VmFsdWU6IFQpID0+IHZvaWRcclxuKTogU3RhdGVMaXN0ZW5lcjxUPiA9PiAoeyBzdGF0ZSwgY2hhbmdlTGlzdGVuZXIgfSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV3JhcHBlZENvbnRyb2xsZXI8XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICBXIGV4dGVuZHMgSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8VD5cclxuPihXcmFwcGVyQ29uc3RydWN0b3I6IFcpOiBIVE1MRWxlbWVudENvbnRyb2xsZXI8VCwgSW5zdGFuY2VUeXBlPFc+PiB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyQ29uc3RydWN0b3IoKTtcclxuXHJcbiAgY29uc3QgeyBlbGVtZW50IH0gPSB3cmFwcGVyO1xyXG5cclxuICBjb25zdCBzdGF0ZU1hcCA9IG5ldyBNYXA8UHJvcGVydHlLZXksIFN0YXRlTGlzdGVuZXI8YW55Pj4oKTtcclxuXHJcbiAgZnVuY3Rpb24gYXBwbHlUZW1wbGF0ZShzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiBhbnlbXSkge1xyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHN0cl0gb2Ygc3RyaW5ncy5lbnRyaWVzKCkpIHtcclxuICAgICAgY29uc3QgdGV4dE5vZGUgPSBuZXcgVGV4dChzdHIpO1xyXG5cclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0ZSkge1xyXG4gICAgICAgICAgbGV0IG11dGFibGVUZXh0Tm9kZSA9IG5ldyBUZXh0KHZhbHVlLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG11dGFibGVUZXh0Tm9kZSk7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc3RhdGVMaXN0ZW5lciA9IGNyZWF0ZVN0YXRlTGlzdGVuZXIodmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUZXh0ID0gbmV3IFRleHQobmV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3VGV4dCwgbXV0YWJsZVRleHROb2RlKTtcclxuXHJcbiAgICAgICAgICAgIG11dGFibGVUZXh0Tm9kZSA9IG5ld1RleHQ7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB2YWx1ZS5hZGRDaGFuZ2VMaXN0ZW5lcihzdGF0ZUxpc3RlbmVyLmNoYW5nZUxpc3RlbmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbmVpZ2hib3JOb2RlID0gdmFsdWUgaW5zdGFuY2VvZiBOb2RlID8gdmFsdWUgOiBuZXcgVGV4dCh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZWlnaGJvck5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb250cm9sbGVyO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBQcm94eShhcHBseVRlbXBsYXRlLCB7XHJcbiAgICBnZXQoXywgcHJvcGVydHlLZXkpIHtcclxuICAgICAgY29uc3Qgd3JhcHBlclZhbHVlID0gUmVmbGVjdC5nZXQod3JhcHBlciwgcHJvcGVydHlLZXkpO1xyXG5cclxuICAgICAgaWYgKHdyYXBwZXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyVmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgIHJldHVybiB3cmFwcGVyVmFsdWUuYmluZCh3cmFwcGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXJWYWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZWxlbWVudFZhbHVlID0gUmVmbGVjdC5nZXQoZWxlbWVudCwgcHJvcGVydHlLZXkpO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50VmFsdWUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGVsZW1lbnRWYWx1ZS5iaW5kKGVsZW1lbnQpO1xyXG5cclxuICAgICAgcmV0dXJuIGVsZW1lbnRWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBzZXQoXywgcHJvcGVydHlLZXksIHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG9sZFN0YXRlTGlzdGVuZXIgPSBzdGF0ZU1hcC5nZXQocHJvcGVydHlLZXkpO1xyXG5cclxuICAgICAgaWYgKG9sZFN0YXRlTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG9sZFN0YXRlTGlzdGVuZXIuc3RhdGUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoXHJcbiAgICAgICAgICBvbGRTdGF0ZUxpc3RlbmVyLmNoYW5nZUxpc3RlbmVyXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb3BlcnR5S2V5IGluIHdyYXBwZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0ZSkge1xyXG4gICAgICAgICAgY29uc3QgbmV3U3RhdGVMaXN0ZW5lciA9IGNyZWF0ZVN0YXRlTGlzdGVuZXIodmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBSZWZsZWN0LnNldCh3cmFwcGVyLCBwcm9wZXJ0eUtleSwgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdmFsdWUuYWRkQ2hhbmdlTGlzdGVuZXIobmV3U3RhdGVMaXN0ZW5lci5jaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgICAgc3RhdGVNYXAuc2V0KHByb3BlcnR5S2V5LCBuZXdTdGF0ZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQod3JhcHBlciwgcHJvcGVydHlLZXksIHZhbHVlLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LnNldCh3cmFwcGVyLCBwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlTGlzdGVuZXIgPSBjcmVhdGVTdGF0ZUxpc3RlbmVyKHZhbHVlLCAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgIFJlZmxlY3Quc2V0KGVsZW1lbnQsIHByb3BlcnR5S2V5LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhbHVlLmFkZENoYW5nZUxpc3RlbmVyKG5ld1N0YXRlTGlzdGVuZXIuY2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBzdGF0ZU1hcC5zZXQocHJvcGVydHlLZXksIG5ld1N0YXRlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQoZWxlbWVudCwgcHJvcGVydHlLZXksIHZhbHVlLnZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KGVsZW1lbnQsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gIH0pIGFzIEhUTUxFbGVtZW50Q29udHJvbGxlcjxULCBJbnN0YW5jZVR5cGU8Vz4+O1xyXG5cclxuICByZXR1cm4gY29udHJvbGxlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvb3Qocm9vdFBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcclxuICBpZiAocm9vdFBhcmVudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgUm9vdCBlbGVtZW50J3MgcGFyZW50IGlzIHVuZGVmaW5lZC4gTWFrZSBzdXJlIHlvdXIgc2NyaXB0IHJ1bnMgYWZ0ZXIgdGhlIERPTSBjb250ZW50IGxvYWRzLiBZb3UgY2FuIGRvIHRoaXMgYnkgYWRkaW5nIHRoZSAnZGVmZXInIGF0dHJpYnV0ZS5gXHJcbiAgICApO1xyXG5cclxuICBjb25zdCByb290Q29udHJvbGxlciA9IGNyZWF0ZVdyYXBwZWRDb250cm9sbGVyKERvY3VtZW50Q29udGFpbmVyV3JhcHBlcik7XHJcblxyXG4gIHJvb3RQYXJlbnQuYXBwZW5kQ2hpbGQocm9vdENvbnRyb2xsZXIuZWxlbWVudCk7XHJcblxyXG4gIHJldHVybiByb290Q29udHJvbGxlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBkb2N1bWVudENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi9kb21CYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRQYXJhZ3JhcGhXcmFwcGVyIGV4dGVuZHMgZG9jdW1lbnRDaGlsZHJlbihcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcInBcIilcclxuKSB7fVxyXG5cclxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQYXJhZ3JhcGhDb250cm9sbGVyID0gSFRNTEVsZW1lbnRDb250cm9sbGVyPFxyXG4gIFwicFwiLFxyXG4gIERvY3VtZW50UGFyYWdyYXBoV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBkb2N1bWVudENoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi9kb21CYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRTcGFuV3JhcHBlciBleHRlbmRzIGRvY3VtZW50Q2hpbGRyZW4oXHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IoXCJzcGFuXCIpXHJcbikge31cclxuXHJcbmV4cG9ydCB0eXBlIERvY3VtZW50U3BhbkNvbnRyb2xsZXIgPSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgXCJzcGFuXCIsXHJcbiAgRG9jdW1lbnRTcGFuV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBjYW1lbFRvS2ViYWJDYXNlIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2NhbWVsVG9LZWJhYlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUhUTUxFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW107XHJcbiAgc3RhdGljIHRhZzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLiNldmVudHNQcm94eSA9IG5ldyBQcm94eSh7fSBhcyBFdmVudExpc3RlbmVyTWFwLCB7XHJcbiAgICAgIGdldChfLCBldmVudE5hbWU6IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXApIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC4jZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50TmFtZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldChfLCBldmVudE5hbWU6IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXAsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudExpc3RlbmVyID0gZWxlbWVudC4jZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50TGlzdGVuZXIgPT09IGxpc3RlbmVyKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjdXJyZW50TGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG5cclxuICAgICAgICBlbGVtZW50LiNldmVudExpc3RlbmVycy5zZXQoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGNyZWF0ZUNoaWxkPEUgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KFxyXG4gICAgRWxlbWVudENsYXNzOiBFLFxyXG4gICAgb3B0aW9ucz86IE9wdGlvbnM8SW5zdGFuY2VUeXBlPEU+PlxyXG4gICkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoRWxlbWVudENsYXNzLCBvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgI2V2ZW50TGlzdGVuZXJzID0gbmV3IE1hcDxrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwLCBFdmVudExpc3RlbmVyPigpO1xyXG5cclxuICAjZXZlbnRzUHJveHk6IEV2ZW50TGlzdGVuZXJNYXA7XHJcblxyXG4gIGdldCBldmVudHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jZXZlbnRzUHJveHkgYXMgRXZlbnRMaXN0ZW5lck1hcDtcclxuICB9XHJcblxyXG4gIHNldCBldmVudHMobWFwKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuI2V2ZW50c1Byb3h5LCBtYXApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZXJmYWNlIGZvciBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIHdpdGggYWx0ZXJuYXRpdmUgc3ludGF4LiBGb3IgZXhhbXBsZSxcclxuICAgKiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaXN0ZW5lcikgYmVjb21lc1xyXG4gICAqIGVsZW1lbnQubGlzdGVuLmNsaWNrKGxpc3RlbmVyKS5cclxuICAgKi9cclxuICBnZXQgbGlzdGVuKCk6IEV2ZW50TGlzdGVuZXJNYXAge1xyXG4gICAgcmV0dXJuIHRoaXMuI2V2ZW50c1Byb3h5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuXHJcbiAgcmVnaXN0ZXJDaGFuZ2U8UCBleHRlbmRzIGtleW9mIFdyaXRlYWJsZTx0aGlzPj4oXHJcbiAgICBwcm9wZXJ0eU5hbWU6IFAsXHJcbiAgICBuZXdWYWx1ZTogdGhpc1tQXVxyXG4gICkge1xyXG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGNhbWVsVG9LZWJhYkNhc2UocHJvcGVydHlOYW1lIGFzIHN0cmluZyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEF0dHJpYnV0ZVZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcblxyXG4gICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpO1xyXG5cclxuICAgIGlmIChjdXJyZW50QXR0cmlidXRlVmFsdWUgPT09IHN0cmluZ1ZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgc3RyaW5nVmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUVsZW1lbnQ8RSBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oXHJcbiAgRWxlbWVudENsYXNzOiBFLFxyXG4gIG9wdGlvbnM/OiBPcHRpb25zPEluc3RhbmNlVHlwZTxFPj5cclxuKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoRWxlbWVudENsYXNzLnRhZykgYXMgSW5zdGFuY2VUeXBlPEU+O1xyXG5cclxuICBPYmplY3QuYXNzaWduKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IGMyZEZpbGwgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZpbGxcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHsgaGFzRnJvbSwgaGFzVG8gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2Zyb21Ub1wiO1xyXG5pbXBvcnQgeyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIH0gZnJvbSBcIi4vcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHtcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCxcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5cclxuZnVuY3Rpb24gaGFzQ29udHJvbFBvaW50czxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBoYXNUbyhCYXNlKSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xyXG4gICAgICAuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJjb250cm9sLWFcIixcclxuICAgICAgXCJjb250cm9sLWJcIixcclxuICAgIF07XHJcblxyXG4gICAgI2NvbnRyb2xBID0gVmVjdG9yMkQuemVybygpO1xyXG4gICAgI2NvbnRyb2xCID0gVmVjdG9yMkQuemVybygpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udHJvbHMgdGhlIHNoYXBlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnZlLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyIGNvbnRyb2wtYVxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbnRyb2xBKCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2NvbnRyb2xBO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb250cm9sQSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jY29udHJvbEEuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImNvbnRyb2xBXCIsICh0aGlzLiNjb250cm9sQSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250cm9scyB0aGUgc2hhcGUgYXQgdGhlIGVuZCBvZiB0aGUgY3VydmUuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHIgY29udHJvbC1iXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgY29udHJvbEIoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jY29udHJvbEI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGNvbnRyb2xCKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNjb250cm9sQi5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiY29udHJvbEJcIiwgKHRoaXMuI2NvbnRyb2xCID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJjb250cm9sLWFcIjpcclxuICAgICAgICAgIHRoaXMuY29udHJvbEEgPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIFwiY29udHJvbC1iXCI6XHJcbiAgICAgICAgICB0aGlzLmNvbnRyb2xCID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlQmV6aWVyIGV4dGVuZHMgaGFzQ29udHJvbFBvaW50cyhcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZFxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1zaGFwZS1iZXppZXJcIiBhcyBjb25zdDtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgY29udHJvbEEsIGNvbnRyb2xCLCB0byB9ID0gdGhpcztcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0LmJlemllckN1cnZlVG8oXHJcbiAgICAgIGNvbnRyb2xBLngsXHJcbiAgICAgIGNvbnRyb2xBLnksXHJcbiAgICAgIGNvbnRyb2xCLngsXHJcbiAgICAgIGNvbnRyb2xCLnksXHJcbiAgICAgIHRvLngsXHJcbiAgICAgIHRvLnlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtc2hhcGUtYmV6aWVyXCIsIENhbnZhczJEU2hhcGVCZXppZXIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEQmV6aWVyIGV4dGVuZHMgYzJkRmlsbChcclxuICBjMmRTdHJva2UoaGFzRnJvbShoYXNDb250cm9sUG9pbnRzKEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCkpKVxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1iZXppZXJcIjtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgY29udHJvbEEsIGNvbnRyb2xCLCBmcm9tLCB0byB9ID0gdGhpcztcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0Lm1vdmVUbyhmcm9tLngsIGZyb20ueSk7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICBjb250cm9sQS54LFxyXG4gICAgICBjb250cm9sQS55LFxyXG4gICAgICBjb250cm9sQi54LFxyXG4gICAgICBjb250cm9sQi55LFxyXG4gICAgICB0by54LFxyXG4gICAgICB0by55XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLWJlemllclwiLCBDYW52YXMyREJlemllcik7XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkRCYXNlIGV4dGVuZHMgQ3VzdG9tSFRNTEVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBlbGVtZW50J3MgY3VzdG9tIEhUTUwgdGFnLiBUaGlzIGNhbiBiZSBwYXNzZWQgaW50byBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCkuXHJcbiAgICovXHJcbiAgc3RhdGljIHRhZzogc3RyaW5nO1xyXG5cclxuICAjZXZlcnlGcmFtZTogVXBkYXRlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgPGMyZC1jYW52YXM+IGVsZW1lbnQgdGhhdCBpcyByZW5kZXJpbmcgdGhpcyBlbGVtZW50LiBUaGUgPGMyZC1jYW52YXM+XHJcbiAgICogd2lsbCBiZSBhbiBhbmNlc3RvciBvZiB0aGlzIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgZ2V0IGNhbnZhcygpOiBDYW52YXMyRENhbnZhc0VsZW1lbnQge1xyXG4gICAgY29uc3QgeyBwYXJlbnRFbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsIHx8IHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBDMkRCYXNlID09PSBmYWxzZSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzMkQgcmVuZGVyYWJsZSBpcyBub3QgYSBjaGlsZCBvZiBhIENhbnZhczJEQ2FudmFzXCIpO1xyXG5cclxuICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ2FudmFzMkRDYW52YXNFbGVtZW50KSByZXR1cm4gcGFyZW50RWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudC5jYW52YXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiBjYWxsZWQgYmVmb3JlIHJlbmRlcmluZy4gVGhlIGZ1bmN0aW9uIGhhcyBvbmUgcGFyYW1ldGVyOiB0aGVcclxuICAgKiBjdXJyZW50IGZyYW1lIG51bWJlci5cclxuICAgKi9cclxuICBnZXQgZXZlcnlGcmFtZSgpOiBVcGRhdGVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy4jZXZlcnlGcmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBldmVyeUZyYW1lKHVwZGF0ZXIpIHtcclxuICAgIHRoaXMuI2V2ZXJ5RnJhbWUgPSB1cGRhdGVyO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMuY2FudmFzLnF1ZXVlUmVtb3ZhbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjYWxlcyBhIHZlY3RvciBieSB0aGUgZGV2aWNlJ3MgcGl4ZWwgcmF0aW8uXHJcbiAgICovXHJcbiAgc2NhbGVCeVBpeGVsUmF0aW8odmVjdG9yOiBWZWN0b3IyRCkge1xyXG4gICAgY29uc3QgcG9pbnQgPSBuZXcgRE9NUG9pbnRSZWFkT25seSh2ZWN0b3IueCwgdmVjdG9yLnkpLm1hdHJpeFRyYW5zZm9ybShcclxuICAgICAgbmV3IERPTU1hdHJpeCgpLnNjYWxlKGRldmljZVBpeGVsUmF0aW8sIGRldmljZVBpeGVsUmF0aW8pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBWZWN0b3IyRC54eShwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBDbGlja1RyYWNrZXIgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9jbGlja1wiO1xyXG5pbXBvcnQgeyBLZXlib2FyZFRyYWNrZXIgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9rZXlib2FyZFwiO1xyXG5pbXBvcnQgeyBNb3VzZVRyYWNrZXIgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9tb3VzZVwiO1xyXG5pbXBvcnQgeyBjMmRTdGFuZGFsb25lQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuaW1wb3J0IHsgQzJEQmFzZSB9IGZyb20gXCIuL2MyZEJhc2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgRHJhd1N0eWxlIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vbWl4YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEQ2FudmFzRWxlbWVudCBleHRlbmRzIGMyZFN0YW5kYWxvbmVDaGlsZHJlbihDMkRCYXNlKSB7XHJcbiAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAuLi5DMkRCYXNlLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgIFwiYWxwaGFcIixcclxuICAgIFwid2lkdGhcIixcclxuICAgIFwiaGVpZ2h0XCIsXHJcbiAgICBcImJhY2tncm91bmRcIixcclxuICBdO1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLWNhbnZhc1wiO1xyXG4gIH1cclxuXHJcbiAgI2FuaW1hdGluZyA9IGZhbHNlO1xyXG4gICNiYWNrZ3JvdW5kOiBEcmF3U3R5bGUgPSBcIm5vbmVcIjtcclxuICAjY2xpY2tUcmFja2VyOiBDbGlja1RyYWNrZXI7XHJcbiAgI2NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAjZGVsdGFUaW1lOiBudW1iZXIgPSAwO1xyXG4gICNkZXZpY2VQaXhlbFJhdGlvOiBudW1iZXI7XHJcbiAgI2ZyYW1lID0gMDtcclxuICAja2V5Ym9hcmRUcmFja2VyID0gbmV3IEtleWJvYXJkVHJhY2tlcigpO1xyXG4gICNsYXN0RnJhbWVUaW1lID0gLTE7XHJcbiAgI21vdXNlVHJhY2tlcjogTW91c2VUcmFja2VyO1xyXG4gICNyZW1vdmFsUXVldWUgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpO1xyXG4gICNyZW5kZXJFdmVudHMgPSBuZXcgU2V0PGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXA+KCk7XHJcbiAgI3JlbmRlclF1ZXVlZCA9IGZhbHNlO1xyXG4gICNzZXRBbHBoYTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgI3dhaXRGb3IgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcclxuXHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBpZiAoY29udGV4dCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKFwiTnVsbCBjb250ZXh0XCIpO1xyXG5cclxuICAgIHRoaXMuI2NvbnRleHQgPSBjb250ZXh0O1xyXG5cclxuICAgIHRoaXMuI21vdXNlVHJhY2tlciA9IG5ldyBNb3VzZVRyYWNrZXIodGhpcy5kb21DYW52YXMpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrVHJhY2tlciA9IG5ldyBDbGlja1RyYWNrZXIodGhpcy5kb21DYW52YXMpO1xyXG5cclxuICAgIHRoaXMuI2RldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxyXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9ucyB8IHVuZGVmaW5lZFxyXG4gICk6IHZvaWQge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJrZXlkb3duXCI6XHJcbiAgICAgIGNhc2UgXCJrZXl1cFwiOlxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzdXBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYW5zcGFyZW5jeSBhcHBsaWVkIHRvIGFsbCBzaGFwZXMgYW5kIGltYWdlcyBvbiB0aGlzIGNhbnZhcy4gMC4wIGlzIGZ1bGx5XHJcbiAgICogdHJhbnNwYXJlbnQsIGFuZCAxLjAgaXMgZnVsbHkgb3BhcXVlLiBUaGlzIGRvZXMgbm90IGFwcGx5IHRvIHRoZSBiYWNrZ3JvdW5kLlxyXG4gICAqL1xyXG4gIGdldCBhbHBoYSgpOiBudW1iZXIge1xyXG4gICAgLyogXHJcbiAgICBUaGUgcmVuZGVyaW5nIGNvbnRleHQncyBnbG9iYWxBbHBoYSBwcm9wZXJ0eSBkb2VzIG5vdCByZXRhaW4gdmFsdWVzIHNldCAgXHJcbiAgICBiZWZvcmUgdGhlIGNhbnZhcyBpcyBjb25uZWN0ZWQsIHNvIHRoZSBwcml2YXRlIHByb3BlcnR5IGlzIGhlcmUgdG8gYWxsb3cgdGhlIFxyXG4gICAgcHJvcGVydHkgdG8gYmUgc2V0IHdoZW4gY3JlYXRpbmcgdGhlIGNhbnZhcy5cclxuICAgICovXHJcbiAgICByZXR1cm4gdGhpcy4jc2V0QWxwaGEgPz8gdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFscGhhKHZhbHVlKSB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFxyXG4gICAgICBcImFscGhhXCIsXHJcbiAgICAgICh0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSB0aGlzLiNzZXRBbHBoYSA9IHZhbHVlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRydWUgaWYgdGhlIGNhbnZhcyBpcyByZW5kZXJpbmcgYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIGdldCBhbmltYXRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy4jYW5pbWF0aW5nO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJhbHBoYVwiOlxyXG4gICAgICAgICAgdGhpcy5hbHBoYSA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJ3aWR0aFwiOlxyXG4gICAgICAgICAgdGhpcy53aWR0aCA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJoZWlnaHRcIjpcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcImJhY2tncm91bmRcIjpcclxuICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IGF0dHJpYnV0ZVBhcnNlci5Db2xvcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXQgdGhlIGJlZ2lubmluZyBvZiBlYWNoIGZyYW1lLCB0aGUgY2FudmFzIHJlbmRlcnMgaXRzIGJhY2tncm91bmQgdXNpbmdcclxuICAgKiB0aGlzIHN0eWxlLiBJdCBtYXkgYmUgYSBDb2xvciBvciBHcmFkaWVudC4gV2hlbiBzZXQgdG8gXCJub25lXCIsIHRoZSBjYW52YXNcclxuICAgKiB3aWxsIG5vdCByZW5kZXIgYSBiYWNrZ3JvdW5kLiBUaGlzIHdpbGwgcmVzdWx0IGluIHRoZSBuZXh0IGZyYW1lIGJlaW5nXHJcbiAgICogcmVuZGVyZWQgb24gdG9wIG9mIHRoZSBsYXN0IGZyYW1lJ3MgY29udGVudHMuXHJcbiAgICpcclxuICAgKiBAYXR0clxyXG4gICAqIEByZWZsZWN0XHJcbiAgICovXHJcbiAgZ2V0IGJhY2tncm91bmQoKTogRHJhd1N0eWxlIHtcclxuICAgIHJldHVybiB0aGlzLiNiYWNrZ3JvdW5kO1xyXG4gIH1cclxuXHJcbiAgc2V0IGJhY2tncm91bmQodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNiYWNrZ3JvdW5kLnRvU3RyaW5nKCkgPT09IHZhbHVlLnRvU3RyaW5nKCkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYmFja2dyb3VuZFwiLCAodGhpcy4jYmFja2dyb3VuZCA9IHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDZW50ZXIgcG9pbnQgb2YgdGhlIGNhbnZhcy5cclxuICAgKi9cclxuICBnZXQgY2VudGVyKCk6IFZlY3RvcjJEIHtcclxuICAgIHJldHVybiBWZWN0b3IyRC54eSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgY29uc3QgcGl4ZWxSYXRpb1F1ZXJ5ID0gYChyZXNvbHV0aW9uOiAke3dpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfWRwcHgpYDtcclxuXHJcbiAgICBjb25zdCBtZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKHBpeGVsUmF0aW9RdWVyeSk7XHJcblxyXG4gICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLiN1cGRhdGVTY2FsZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLiN1cGRhdGVTY2FsZSgpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHRoaXMucXVldWVSZW5kZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMucXVldWVSZW5kZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLyogXHJcbiAgICBUaGUgcmVuZGVyaW5nIGNvbnRleHQncyBnbG9iYWxBbHBoYSBwcm9wZXJ0eSBkb2VzIG5vdCByZXRhaW4gdmFsdWVzIHNldCAgXHJcbiAgICBiZWZvcmUgdGhlIGNhbnZhcyBpcyBjb25uZWN0ZWQsIHNvIHRoaXMgaXMgaGVyZSB0byBhbGxvdyB0aGUgcHJvcGVydHkgdG8gYmVcclxuICAgIHNldCB3aGVuIGNyZWF0aW5nIHRoZSBjYW52YXMuXHJcbiAgICAqL1xyXG4gICAgdGhpcy5hbHBoYSA9IHRoaXMuYWxwaGE7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGlsZDxFIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihcclxuICAgIEVsZW1lbnRDbGFzczogRSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFdyaXRlYWJsZTxJbnN0YW5jZVR5cGU8RT4+PiB8IHVuZGVmaW5lZFxyXG4gICk6IEluc3RhbmNlVHlwZTxFPiB7XHJcbiAgICBjb25zdCBjaGlsZCA9IHN1cGVyLmNyZWF0ZUNoaWxkKEVsZW1lbnRDbGFzcywgb3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5xdWV1ZVJlbmRlcigpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9XHJcblxyXG4gIGdldCBrZXlEb3duKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2tleWJvYXJkVHJhY2tlci5kb3duO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvbUNhbnZhcygpIHtcclxuICAgIHJldHVybiB0aGlzLiNjb250ZXh0LmNhbnZhcztcclxuICB9XHJcblxyXG4gIGdldCBjbGlja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NsaWNrVHJhY2tlci5jbGlja2VkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsaWNrUG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2xpY2tUcmFja2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY29udGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbWUgcGFzc2VkIHRoZSBwcmV2aW91cyBhbmQgY3VycmVudCBmcmFtZS5cclxuICAgKi9cclxuICBnZXQgZGVsdGFUaW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2RlbHRhVGltZTtcclxuICB9XHJcblxyXG4gIGdldCBldmVyeUZyYW1lKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmV2ZXJ5RnJhbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgZXZlcnlGcmFtZSh1cGRhdGVyOiBVcGRhdGVyIHwgbnVsbCkge1xyXG4gICAgc3VwZXIuZXZlcnlGcmFtZSA9IHVwZGF0ZXI7XHJcblxyXG4gICAgaWYgKHVwZGF0ZXIgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiNhbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBmcmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNmcmFtZTtcclxuICB9XHJcblxyXG4gIGtleUhlbGQoLi4uYXJnczogUGFyYW1ldGVyczxLZXlib2FyZFRyYWNrZXJbXCJrZXlIZWxkXCJdPikge1xyXG4gICAgcmV0dXJuIHRoaXMuI2tleWJvYXJkVHJhY2tlci5rZXlIZWxkKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAga2V5UHJldmlvdXNseUhlbGQoLi4uYXJnczogUGFyYW1ldGVyczxLZXlib2FyZFRyYWNrZXJbXCJrZXlQcmV2aW91c2x5SGVsZFwiXT4pIHtcclxuICAgIHJldHVybiB0aGlzLiNrZXlib2FyZFRyYWNrZXIua2V5UHJldmlvdXNseUhlbGQoLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFzdEtleSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNrZXlib2FyZFRyYWNrZXIubGFzdDtcclxuICB9XHJcblxyXG4gIGdldCBtb3VzZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNtb3VzZVRyYWNrZXI7XHJcbiAgfVxyXG5cclxuICBxdWV1ZVJlbW92YWwoY2hpbGQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLiNyZW1vdmFsUXVldWUuYWRkKGNoaWxkKTtcclxuXHJcbiAgICB0aGlzLnF1ZXVlUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBxdWV1ZVJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLiNyZW5kZXJRdWV1ZWQgfHwgdGhpcy4jd2FpdEZvci5zaXplKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jcmVuZGVyUXVldWVkID0gdHJ1ZTtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHtcclxuICAgICAgdGhpcy4jZGVsdGFUaW1lID0gdGltZSAtIHRoaXMuI2xhc3RGcmFtZVRpbWU7XHJcblxyXG4gICAgICB0aGlzLiNsYXN0RnJhbWVUaW1lID0gdGltZTtcclxuXHJcbiAgICAgIHRoaXMuI3JlbmRlcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGNhbnZhcyBlbGVtZW50IGluIHBpeGVscyBkaXZpZGVkIGJ5IHRoZSBkZXZpY2UncyBwaXhlbCByYXRpby5cclxuICAgKlxyXG4gICAqIEBhdHRyXHJcbiAgICogQHJlZmxlY3RcclxuICAgKi9cclxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRvbUNhbnZhcy53aWR0aCAvIGRldmljZVBpeGVsUmF0aW87XHJcbiAgfVxyXG5cclxuICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbyB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5kb21DYW52YXMud2lkdGggLyBkZXZpY2VQaXhlbFJhdGlvKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5kb21DYW52YXMud2lkdGggPSB2YWx1ZSAqIGRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgdGhpcy5kb21DYW52YXMuc3R5bGUud2lkdGggPSBgJHt2YWx1ZX1weGA7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIndpZHRoXCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcyBlbGVtZW50IGluIHBpeGVscyBkaXZpZGVkIGJ5IHRoZSBkZXZpY2UncyBwaXhlbCByYXRpby5cclxuICAgKlxyXG4gICAqIEBhdHRyXHJcbiAgICogQHJlZmxlY3RcclxuICAgKi9cclxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kb21DYW52YXMuaGVpZ2h0IC8gZGV2aWNlUGl4ZWxSYXRpbztcclxuICB9XHJcblxyXG4gIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbyB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5kb21DYW52YXMuaGVpZ2h0IC8gZGV2aWNlUGl4ZWxSYXRpbykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLmhlaWdodCA9IHZhbHVlICogZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB0aGlzLmRvbUNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHt2YWx1ZX1weGA7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImhlaWdodFwiLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlckNoYW5nZTxQIGV4dGVuZHMga2V5b2YgdGhpcz4oXHJcbiAgICBwcm9wZXJ0eU5hbWU6IFAsXHJcbiAgICBuZXdWYWx1ZTogdGhpc1tQXVxyXG4gICk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVnaXN0ZXJDaGFuZ2UocHJvcGVydHlOYW1lLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgdGhpcy5xdWV1ZVJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgI3JlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLiN3YWl0Rm9yLnNpemUpIHtcclxuICAgICAgdGhpcy4jcmVuZGVyUXVldWVkID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAodGhpcy4jcmVtb3ZhbFF1ZXVlLnNpemUpIHtcclxuICAgICAgY29uc3QgbmV4dCA9IHRoaXMuI3JlbW92YWxRdWV1ZS52YWx1ZXMoKS5uZXh0KCk7XHJcblxyXG4gICAgICBpZiAobmV4dC52YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZvdW5kIHVuZGVmaW5lZCB2YWx1ZSBpbiBjYW52YXMncyByZW1vdmFsIHF1ZXVlLlwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoaWxkID0gbmV4dC52YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG5cclxuICAgICAgdGhpcy4jcmVtb3ZhbFF1ZXVlLmRlbGV0ZShjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuI2NvbnRleHQ7XHJcblxyXG4gICAgY29udGV4dC5zYXZlKCk7XHJcblxyXG4gICAgdGhpcy5ldmVyeUZyYW1lPy4odGhpcy4jZnJhbWUpO1xyXG5cclxuICAgIHRoaXMuI3JlbmRlclF1ZXVlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnRleHQuc2NhbGUoZGV2aWNlUGl4ZWxSYXRpbywgZGV2aWNlUGl4ZWxSYXRpbyk7XHJcblxyXG4gICAgaWYgKHRoaXMuI2JhY2tncm91bmQgIT09IFwibm9uZVwiKSB7XHJcbiAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XHJcblxyXG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuI2JhY2tncm91bmQudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSkge1xyXG4gICAgICAgIGNoaWxkLnJlbmRlcih0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG5cclxuICAgIHRoaXMuI2NsaWNrVHJhY2tlci5hZHZhbmNlRnJhbWUoKTtcclxuXHJcbiAgICB0aGlzLiNrZXlib2FyZFRyYWNrZXIuYWR2YW5jZUZyYW1lKCk7XHJcblxyXG4gICAgdGhpcy4jbW91c2VUcmFja2VyLmFkdmFuY2VGcmFtZSgpO1xyXG5cclxuICAgIHRoaXMuI2ZyYW1lKys7XHJcblxyXG4gICAgaWYgKHRoaXMuI2FuaW1hdGluZykgdGhpcy5xdWV1ZVJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyT24oZXZlbnROYW1lOiBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwKSB7XHJcbiAgICBpZiAodGhpcy4jcmVuZGVyRXZlbnRzLmhhcyhldmVudE5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5kb21DYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMucXVldWVSZW5kZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy4jcmVuZGVyRXZlbnRzLmFkZChldmVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgI3VwZGF0ZVNjYWxlKCkge1xyXG4gICAgY29uc3QgeyBkZXZpY2VQaXhlbFJhdGlvOiBuZXdQaXhlbFJhdGlvIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgY29uc3Qgc2NhbGVSYXRpbyA9IG5ld1BpeGVsUmF0aW8gLyB0aGlzLiNkZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLndpZHRoICo9IHNjYWxlUmF0aW87XHJcbiAgICB0aGlzLmRvbUNhbnZhcy5oZWlnaHQgKj0gc2NhbGVSYXRpbztcclxuXHJcbiAgICB0aGlzLiNkZXZpY2VQaXhlbFJhdGlvID0gbmV3UGl4ZWxSYXRpbztcclxuXHJcbiAgICB0aGlzLnF1ZXVlUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICB3YWl0Rm9yKGVsZW1lbnQ6IEVsZW1lbnQsIGV2ZW50TmFtZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCA9IFwibG9hZFwiKSB7XHJcbiAgICB0aGlzLiN3YWl0Rm9yLmFkZChlbGVtZW50KTtcclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuI3dhaXRGb3IuZGVsZXRlKGVsZW1lbnQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuI3dhaXRGb3Iuc2l6ZSA9PT0gMCkgdGhpcy5xdWV1ZVJlbmRlcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuZ2xlIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvYW5nbGVcIjtcclxuaW1wb3J0IHsgTGluZWFyR3JhZGllbnQsIFJhZGlhbEdyYWRpZW50IH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgYzJkRmlsbCB9IGZyb20gXCIuLi8uLi9taXhpbnMvZmlsbFwiO1xyXG5pbXBvcnQgeyBjMmRSZWN0YW5nbGVCb3VuZHMgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3JlY3RhbmdsZUJvdW5kc1wiO1xyXG5pbXBvcnQgeyBjMmRTdHJva2UgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N0cm9rZVwiO1xyXG5pbXBvcnQge1xyXG4gIEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkLFxyXG4gIEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCxcclxuICBDMkRUcmFuc2Zvcm1lZCxcclxufSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckVsbGlwc2U8QiBleHRlbmRzIEMyRFRyYW5zZm9ybWVkPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYzJkUmVjdGFuZ2xlQm91bmRzKEJhc2UsIFwiY2VudGVyXCIpIHtcclxuICAgICNzdGFydEFuZ2xlID0gQW5nbGUuemVybygpO1xyXG4gICAgI2VuZEFuZ2xlID0gQW5nbGUucmFkaWFucyhNYXRoLlBJICogMik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgICBzdXBlci5vcmlnaW4gPSBcImNlbnRlclwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgICBjb25zdCB7IG9mZnNldDogcG9zaXRpb24sIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXM7XHJcblxyXG4gICAgICBjYW52YXMyRC5jb250ZXh0LmVsbGlwc2UoXHJcbiAgICAgICAgcG9zaXRpb24ueCxcclxuICAgICAgICBwb3NpdGlvbi55LFxyXG4gICAgICAgIHdpZHRoIC8gMixcclxuICAgICAgICBoZWlnaHQgLyAyLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgdGhpcy4jc3RhcnRBbmdsZS5yYWRpYW5zLFxyXG4gICAgICAgIHRoaXMuI2VuZEFuZ2xlLnJhZGlhbnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJhZGlhbEdyYWRpZW50KFxyXG4gICAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgIGdyYWRpZW50OiBSYWRpYWxHcmFkaWVudFxyXG4gICAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgb2Zmc2V0OiB7IHgsIHkgfSxcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQsXHJcbiAgICAgIH0gPSB0aGlzO1xyXG5cclxuICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkgLyAyO1xyXG5cclxuICAgICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB4LCB5LCByYWRpdXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGFydEFuZ2xlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc3RhcnRBbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhcnRBbmdsZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jc3RhcnRBbmdsZS5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic3RhcnRBbmdsZVwiLCAodGhpcy4jc3RhcnRBbmdsZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVuZEFuZ2xlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZW5kQW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGVuZEFuZ2xlKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNlbmRBbmdsZS5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiZW5kQW5nbGVcIiwgKHRoaXMuI2VuZEFuZ2xlID0gdmFsdWUpKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRFbGxpcHNlIGV4dGVuZHMgcmVuZGVyRWxsaXBzZShcclxuICBjMmRTdHJva2UoYzJkRmlsbChDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQpKVxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1lbGxpcHNlXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtZWxsaXBzZVwiLCBDYW52YXMyREVsbGlwc2UpO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEU2hhcGVFbGxpcHNlIGV4dGVuZHMgcmVuZGVyRWxsaXBzZShcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZFxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1zaGFwZS1lbGxpcHNlXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtc2hhcGUtZWxsaXBzZVwiLCBDYW52YXMyRFNoYXBlRWxsaXBzZSk7XHJcbiIsImltcG9ydCB7IEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCB9IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IHJlbmRlcnNWaXN1YWxNZWRpYSB9IGZyb20gXCIuLi8uLi9taXhpbnMvdmlzdWFsTWVkaWFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyREltYWdlIGV4dGVuZHMgcmVuZGVyc1Zpc3VhbE1lZGlhKFxyXG4gIEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCxcclxuICBcImltZ1wiXHJcbikge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLWltYWdlXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtaW1hZ2VcIiwgQ2FudmFzMkRJbWFnZSk7XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHsgaGFzRnJvbSwgaGFzVG8gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2Zyb21Ub1wiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHtcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHtcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCxcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlTGluZSBleHRlbmRzIGhhc1RvKEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtc2hhcGUtbGluZVwiO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgY29uc3QgeyB0byB9ID0gdGhpcztcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0LmxpbmVUbyh0by54LCB0by55KTtcclxuXHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1zaGFwZS1saW5lXCIsIENhbnZhczJEU2hhcGVMaW5lKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRExpbmUgZXh0ZW5kcyBjMmRTdHJva2UoXHJcbiAgaGFzVG8oaGFzRnJvbShDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQpKVxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1saW5lXCI7XHJcbiAgfVxyXG5cclxuICBnZXQgY2VudGVyKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnRvLnggLSB0aGlzLmZyb20ueDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudG8ueSAtIHRoaXMuZnJvbS55O1xyXG5cclxuICAgIHJldHVybiBWZWN0b3IyRC54eSh0aGlzLmZyb20ueCArIHdpZHRoIC8gMiwgdGhpcy5mcm9tLnkgKyBoZWlnaHQgLyAyKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IHRoaXM7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQubGluZVRvKHRvLngsIHRvLnkpO1xyXG5cclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29uaWNhbEdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IENvbmljYWxHcmFkaWVudFxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgdGhpcy5jZW50ZXIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGluZWFyR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogTGluZWFyR3JhZGllbnRcclxuICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZnJvbTtcclxuXHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMudG8ueCAtIHg7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnRvLnkgLSB5O1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBSYWRpYWxHcmFkaWVudFxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy50by54IC0gdGhpcy5mcm9tLng7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnRvLnkgLSB0aGlzLmZyb20ueTtcclxuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gMjtcclxuXHJcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuY2VudGVyO1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeCwgeSwgcmFkaXVzKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1saW5lXCIsIENhbnZhczJETGluZSk7XHJcbiIsImltcG9ydCB7IEJvcmRlclJhZGl1cyB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2JvcmRlclJhZGl1c1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBMaW5lYXJHcmFkaWVudCxcclxuICBSYWRpYWxHcmFkaWVudCxcclxufSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBzdmdDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvY2hpbGRyZW5cIjtcclxuaW1wb3J0IHsgc3ZnRGltZW5zaW9ucyB9IGZyb20gXCIuLi8uLi9taXhpbnMvZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBjMmRGaWxsLCBzdmdGaWxsIH0gZnJvbSBcIi4uLy4uL21peGlucy9maWxsXCI7XHJcbmltcG9ydCB7XHJcbiAgYzJkUmVjdGFuZ2xlQm91bmRzLFxyXG4gIHN2Z1JlY3RhbmdsZUJvdW5kcyxcclxufSBmcm9tIFwiLi4vLi4vbWl4aW5zL3JlY3RhbmdsZUJvdW5kc1wiO1xyXG5pbXBvcnQgeyBjMmRTdHJva2UsIHN2Z1N0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7XHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQsXHJcbiAgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkLFxyXG4gIEMyRFRyYW5zZm9ybWVkLFxyXG4gIHN2Z1RyYW5zZm9ybSxcclxufSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTVkdDb250cm9sbGVyIH0gZnJvbSBcIi4vc3ZnQmFzZVwiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FudmFzUmVjdGFuZ2xlPEIgZXh0ZW5kcyBDMkRUcmFuc2Zvcm1lZD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBjMmRSZWN0YW5nbGVCb3VuZHMoQmFzZSwgXCJ0b3BMZWZ0XCIpIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbXHJcbiAgICAgIC4uLmMyZFJlY3RhbmdsZUJvdW5kcyhCYXNlLCBcInRvcExlZnRcIikub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgICBcImJvcmRlci1yYWRpdXNcIixcclxuICAgIF07XHJcblxyXG4gICAgI2JvcmRlclJhZGl1czogQm9yZGVyUmFkaXVzIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuYW1lID09PSBcImJvcmRlci1yYWRpdXNcIikge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5ib3JkZXJSYWRpdXMgPSBudWxsO1xyXG4gICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID09PSB0aGlzLmJvcmRlclJhZGl1cz8udG9TdHJpbmcoKSkgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgdGhpcy5ib3JkZXJSYWRpdXMgPSBhdHRyaWJ1dGVQYXJzZXIuQm9yZGVyUmFkaXVzKG5ld1ZhbHVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgICNib3JkZXJSYWRpdXNDaGFuZ2VMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImJvcmRlclJhZGl1c1wiLCB0aGlzLiNib3JkZXJSYWRpdXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ2V0IGJvcmRlclJhZGl1cygpOiBCb3JkZXJSYWRpdXMgfCBudWxsIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2JvcmRlclJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYm9yZGVyUmFkaXVzKHZhbHVlOiBCb3JkZXJSYWRpdXMgfCBudW1iZXIgfCBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRCb3JkZXJSYWRpdXMgPSB0aGlzLmJvcmRlclJhZGl1cztcclxuXHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gY3VycmVudEJvcmRlclJhZGl1cykgcmV0dXJuO1xyXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICBpZiAoY3VycmVudEJvcmRlclJhZGl1cyA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGN1cnJlbnRCb3JkZXJSYWRpdXMucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoXHJcbiAgICAgICAgICB0aGlzLiNib3JkZXJSYWRpdXNDaGFuZ2VMaXN0ZW5lclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJib3JkZXJSYWRpdXNcIiwgKHRoaXMuI2JvcmRlclJhZGl1cyA9IHZhbHVlKSk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdCb3JkZXJSYWRpdXMgPVxyXG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IG5ldyBCb3JkZXJSYWRpdXModmFsdWUpIDogdmFsdWU7XHJcblxyXG4gICAgICBpZiAoY3VycmVudEJvcmRlclJhZGl1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIG5ld0JvcmRlclJhZGl1cy5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNib3JkZXJSYWRpdXNDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXHJcbiAgICAgICAgICBcImJvcmRlclJhZGl1c1wiLFxyXG4gICAgICAgICAgKHRoaXMuI2JvcmRlclJhZGl1cyA9IG5ld0JvcmRlclJhZGl1cylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuI2JvcmRlclJhZGl1cyA9IG5ld0JvcmRlclJhZGl1cztcclxuXHJcbiAgICAgIGN1cnJlbnRCb3JkZXJSYWRpdXMucmVwbGFjZShcclxuICAgICAgICBuZXdCb3JkZXJSYWRpdXMsXHJcbiAgICAgICAgdGhpcy4jYm9yZGVyUmFkaXVzQ2hhbmdlTGlzdGVuZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRvcExlZnQ6IHsgeCwgeSB9LFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodCxcclxuICAgICAgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAodGhpcy5ib3JkZXJSYWRpdXMgPT09IG51bGwpXHJcbiAgICAgICAgY2FudmFzMkQuY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgY2FudmFzMkQuY29udGV4dC5yb3VuZFJlY3QoXHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeSxcclxuICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgdGhpcy5ib3JkZXJSYWRpdXMudG9BcnJheSgpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJhZGlhbEdyYWRpZW50KFxyXG4gICAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgIGdyYWRpZW50OiBSYWRpYWxHcmFkaWVudFxyXG4gICAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkgLyAyO1xyXG5cclxuICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmNlbnRlcjtcclxuXHJcbiAgICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeCwgeSwgcmFkaXVzKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRSZWN0YW5nbGUgZXh0ZW5kcyByZW5kZXJDYW52YXNSZWN0YW5nbGUoXHJcbiAgYzJkU3Ryb2tlKGMyZEZpbGwoQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkKSlcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtcmVjdGFuZ2xlXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtcmVjdGFuZ2xlXCIsIENhbnZhczJEUmVjdGFuZ2xlKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlUmVjdGFuZ2xlIGV4dGVuZHMgcmVuZGVyQ2FudmFzUmVjdGFuZ2xlKFxyXG4gIEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkXHJcbikge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXNoYXBlLXJlY3RhbmdsZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXNoYXBlLXJlY3RhbmdsZVwiLCBDYW52YXMyRFNoYXBlUmVjdGFuZ2xlKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTVkdSZWN0YW5nbGVDb250cm9sbGVyIGV4dGVuZHMgc3ZnU3Ryb2tlKFxyXG4gIHN2Z0ZpbGwoXHJcbiAgICBzdmdEaW1lbnNpb25zKFxyXG4gICAgICBzdmdUcmFuc2Zvcm0oXHJcbiAgICAgICAgc3ZnUmVjdGFuZ2xlQm91bmRzKFxyXG4gICAgICAgICAgc3ZnQ2hpbGRyZW4oY3JlYXRlU1ZHQ29udHJvbGxlcihcInJlY3RcIiwgXCJzdmctcmVjdGFuZ2xlXCIpKSxcclxuICAgICAgICAgIFwidG9wTGVmdFwiXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKVxyXG4pIHtcclxuICBnZXQgb3JpZ2luKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLm9yaWdpbjtcclxuICB9XHJcblxyXG4gIHNldCBvcmlnaW4odmFsdWUpIHtcclxuICAgIHN1cGVyLm9yaWdpbiA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3ZnLXJlY3RhbmdsZVwiLCBTVkdSZWN0YW5nbGVDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0IHtcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgTW91c2VEYXRhIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvbW91c2VcIjtcclxuaW1wb3J0IHsgU2hhZG93IH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvc2hhZG93XCI7XHJcbmltcG9ydCB7IGMyZFNoYXBlQ2hpbGRyZW4sIGMyZFN0YW5kYWxvbmVDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvY2hpbGRyZW5cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7IEMyREJhc2UgfSBmcm9tIFwiLi9jMmRCYXNlXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL21peGFibGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VkRXZlbnQgPSBuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBidWJibGVzOiB0cnVlIH0pO1xyXG5cclxudHlwZSBRdWV1ZWRFdmVudExpc3RlbmVyPEUgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwPiA9IHtcclxuICBldmVudE5hbWU6IEU7XHJcbiAgbGlzdGVuZXI6IFR5cGVkRXZlbnRMaXN0ZW5lcjxFPjtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIGV4dGVuZHMgQzJEQmFzZSB7XHJcbiAgI2NoYW5nZWRTaW5jZVJlbmRlciA9IGZhbHNlO1xyXG4gICNjbGlja0xpc3RlbmVycyA9IG5ldyBTZXQ8VHlwZWRFdmVudExpc3RlbmVyPFwiY2xpY2tcIj4+KCk7XHJcbiAgI2xvY2FsTW91c2UgPSBuZXcgTW91c2VEYXRhKCk7XHJcbiAgI21vdXNlTGlzdGVuZXJzID0gbmV3IFNldDxUeXBlZEV2ZW50TGlzdGVuZXI8XCJtb3VzZW1vdmVcIj4+KCk7XHJcbiAgI3NoYWRvdzogU2hhZG93IHwgbnVsbCA9IG51bGw7XHJcbiAgI2Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICNxdWV1ZWRFdmVudExpc3RlbmVyczogUXVldWVkRXZlbnRMaXN0ZW5lcjxhbnk+W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuI2Nvbm5lY3RlZCA9IHRydWU7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuI3F1ZXVlZEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBmaXJzdExpc3RlbmVyID0gdGhpcy4jcXVldWVkRXZlbnRMaXN0ZW5lcnMuc2hpZnQoKTtcclxuXHJcbiAgICAgIGlmIChmaXJzdExpc3RlbmVyID09PSB1bmRlZmluZWQpIGJyZWFrO1xyXG5cclxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZpcnN0TGlzdGVuZXIuZXZlbnROYW1lLCBmaXJzdExpc3RlbmVyLmxpc3RlbmVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcjxFIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcD4oXHJcbiAgICB0eXBlOiBFLFxyXG4gICAgbGlzdGVuZXI6IFR5cGVkRXZlbnRMaXN0ZW5lcjxFPixcclxuICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnNcclxuICApOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy4jY29ubmVjdGVkKSB7XHJcbiAgICAgIHRoaXMuI3F1ZXVlZEV2ZW50TGlzdGVuZXJzLnB1c2goe1xyXG4gICAgICAgIGV2ZW50TmFtZTogdHlwZSxcclxuICAgICAgICBsaXN0ZW5lcixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJjbGlja1wiOlxyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbmRlck9uKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuI2NsaWNrTGlzdGVuZXJzLmFkZChsaXN0ZW5lciBhcyBUeXBlZEV2ZW50TGlzdGVuZXI8XCJjbGlja1wiPik7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwibW91c2Vkb3duXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZXVwXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZW1vdmVcIjpcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW5kZXJPbih0eXBlKTtcclxuICAgICAgICB0aGlzLiNtb3VzZUxpc3RlbmVycy5hZGQobGlzdGVuZXIgYXMgVHlwZWRFdmVudExpc3RlbmVyPFwibW91c2Vtb3ZlXCI+KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJtb3VzZWVudGVyXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZW91dFwiOlxyXG4gICAgICBjYXNlIFwibW91c2VvdmVyXCI6XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVuZGVyT24oXCJtb3VzZW1vdmVcIik7XHJcbiAgICAgICAgdGhpcy4jbW91c2VMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyIGFzIFR5cGVkRXZlbnRMaXN0ZW5lcjxcIm1vdXNlbW92ZVwiPik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGlsZDxFIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihcclxuICAgIEVsZW1lbnRDbGFzczogRSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFdyaXRlYWJsZTxJbnN0YW5jZVR5cGU8RT4+PiB8IHVuZGVmaW5lZFxyXG4gICk6IEluc3RhbmNlVHlwZTxFPiB7XHJcbiAgICBjb25zdCBjaGlsZCA9IHN1cGVyLmNyZWF0ZUNoaWxkKEVsZW1lbnRDbGFzcywgb3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGNoYW5nZWRFdmVudCk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZW5kZXJDb25pY2FsR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogQ29uaWNhbEdyYWRpZW50XHJcbiAgKSB7XHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHRoaXMuY2FudmFzLmNlbnRlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbmRlckxpbmVhckdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IExpbmVhckdyYWRpZW50XHJcbiAgKSB7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuY2FudmFzO1xyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVuZGVyUmFkaWFsR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogUmFkaWFsR3JhZGllbnRcclxuICApIHtcclxuICAgIGNvbnN0IHsgY2VudGVyLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNhbnZhcztcclxuICAgIGNvbnN0IGNhbnZhc1JhZGl1cyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gMjtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIGNlbnRlci54LCBjZW50ZXIueSwgY2FudmFzUmFkaXVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjxFIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcD4oXHJcbiAgICB0eXBlOiBFLFxyXG4gICAgbGlzdGVuZXI6IFR5cGVkRXZlbnRMaXN0ZW5lcjxFPixcclxuICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnNcclxuICApOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwiY2xpY2tcIjpcclxuICAgICAgICB0aGlzLiNjbGlja0xpc3RlbmVycy5kZWxldGUobGlzdGVuZXIgYXMgVHlwZWRFdmVudExpc3RlbmVyPFwiY2xpY2tcIj4pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibW91c2Vkb3duXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZXVwXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZWVudGVyXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZW91dFwiOlxyXG4gICAgICBjYXNlIFwibW91c2VvdmVyXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZW1vdmVcIjpcclxuICAgICAgICB0aGlzLiNtb3VzZUxpc3RlbmVycy5kZWxldGUoXHJcbiAgICAgICAgICBsaXN0ZW5lciBhcyBUeXBlZEV2ZW50TGlzdGVuZXI8XCJtb3VzZW1vdmVcIj5cclxuICAgICAgICApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBnZXQgY2hhbmdlZFNpbmNlUmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NoYW5nZWRTaW5jZVJlbmRlcjtcclxuICB9XHJcblxyXG4gICNoYW5kbGVDbGljayhjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IGNvbnRleHQsIGNsaWNrUG9zaXRpb246IGNhbnZhc0NsaWNrLCBjbGlja2VkIH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICBpZiAoIWNsaWNrZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50Q2xpY2sgPSB0aGlzLnNjYWxlQnlQaXhlbFJhdGlvKGNhbnZhc0NsaWNrKTtcclxuXHJcbiAgICBjb25zdCBpblBhdGggPSBjb250ZXh0LmlzUG9pbnRJblBhdGgoZWxlbWVudENsaWNrLngsIGVsZW1lbnRDbGljay55KTtcclxuXHJcbiAgICBpZiAoaW5QYXRoKSB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IFBvaW50ZXJFdmVudChcImNsaWNrXCIpKTtcclxuICB9XHJcblxyXG4gICNoYW5kbGVNb3VzZShjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IGNvbnRleHQsIG1vdXNlIH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICB0aGlzLiNsb2NhbE1vdXNlLnggPSBtb3VzZS54ICogZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB0aGlzLiNsb2NhbE1vdXNlLnkgPSBtb3VzZS55ICogZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICBjb25zdCBpblBhdGggPSBjb250ZXh0LmlzUG9pbnRJblBhdGgoXHJcbiAgICAgIHRoaXMuI2xvY2FsTW91c2UueCxcclxuICAgICAgdGhpcy4jbG9jYWxNb3VzZS55XHJcbiAgICApO1xyXG5cclxuICAgIGlmICghaW5QYXRoKSB7XHJcbiAgICAgIGlmICh0aGlzLiNsb2NhbE1vdXNlLm92ZXIgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZW91dFwiKSk7XHJcblxyXG4gICAgICAgIHRoaXMuI2xvY2FsTW91c2Uub3ZlciA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VvdmVyXCIpKTtcclxuXHJcbiAgICBjb25zdCBtb3ZlbWVudFggPSBtb3VzZS54IC0gbW91c2UucHJldmlvdXMueDtcclxuXHJcbiAgICBjb25zdCBtb3ZlbWVudFkgPSBtb3VzZS55IC0gbW91c2UucHJldmlvdXMueTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuI2xvY2FsTW91c2UueCAhPT0gbW91c2UucHJldmlvdXMueCAqIGRldmljZVBpeGVsUmF0aW8gfHxcclxuICAgICAgdGhpcy4jbG9jYWxNb3VzZS55ICE9PSBtb3VzZS5wcmV2aW91cy55ICogZGV2aWNlUGl4ZWxSYXRpb1xyXG4gICAgKVxyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoXCJtb3VzZW1vdmVcIiwge1xyXG4gICAgICAgICAgbW92ZW1lbnRYLFxyXG4gICAgICAgICAgbW92ZW1lbnRZLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgaWYgKCF0aGlzLiNsb2NhbE1vdXNlLm92ZXIpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VlbnRlclwiKSk7XHJcblxyXG4gICAgICB0aGlzLiNsb2NhbE1vdXNlLm92ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgW2luZGV4LCBidXR0b25TdGF0ZV0gb2YgbW91c2UuYnV0dG9uU3RhdGVzLmVudHJpZXMoKSkge1xyXG4gICAgICBpZiAoYnV0dG9uU3RhdGUgIT09IHRoaXMuI2xvY2FsTW91c2UuYnV0dG9uU3RhdGVzW2luZGV4XSkge1xyXG4gICAgICAgIGlmIChidXR0b25TdGF0ZSlcclxuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZG93blwiLCB7IGJ1dHRvbjogaW5kZXggfSkpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2V1cFwiLCB7IGJ1dHRvbjogaW5kZXggfSkpO1xyXG5cclxuICAgICAgICB0aGlzLiNsb2NhbE1vdXNlLmJ1dHRvblN0YXRlc1tpbmRleF0gPSBidXR0b25TdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZWdpc3RlckNoYW5nZTxQIGV4dGVuZHMga2V5b2YgV3JpdGVhYmxlPHRoaXM+PihcclxuICAgIHByb3BlcnR5TmFtZTogUCxcclxuICAgIG5ld1ZhbHVlOiB0aGlzW1BdXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMuI2NoYW5nZWRTaW5jZVJlbmRlcikge1xyXG4gICAgICB0aGlzLiNjaGFuZ2VkU2luY2VSZW5kZXIgPSB0cnVlO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlZEV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZWdpc3RlckNoYW5nZShwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHsgY29udGV4dCwgZnJhbWUgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgIHRoaXMuZXZlcnlGcmFtZT8uKGZyYW1lKTtcclxuXHJcbiAgICBpZiAodGhpcy4jc2hhZG93ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuI3NoYWRvdy5yZW5kZXIoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbmRlckNoaWxkcmVuKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlKSBjaGlsZC5yZW5kZXIoY2FudmFzMkQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuXHJcbiAgYWZ0ZXJSZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhpcy4jY2hhbmdlZFNpbmNlUmVuZGVyID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuI2NsaWNrTGlzdGVuZXJzLnNpemUpIHRoaXMuI2hhbmRsZUNsaWNrKGNhbnZhczJEKTtcclxuXHJcbiAgICBpZiAodGhpcy4jbW91c2VMaXN0ZW5lcnMuc2l6ZSkgdGhpcy4jaGFuZGxlTW91c2UoY2FudmFzMkQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzMkQpO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgI3NoYWRvd0NoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxTaGFkb3c+ID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2hhZG93XCIsICh0aGlzLiNzaGFkb3cgPSBuZXdWYWx1ZSkpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIERyb3Agc2hhZG93IHJlbmRlcmVkIGJlaGluZCB0aGUgZWxlbWVudC5cclxuICAgKi9cclxuICBnZXQgc2hhZG93KCk6IFNoYWRvdyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuI3NoYWRvdztcclxuICB9XHJcblxyXG4gIHNldCBzaGFkb3codmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNzaGFkb3cgPT09IG51bGwpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICB2YWx1ZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICB0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcih2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy4jc2hhZG93LnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuI3NoYWRvd0NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzaGFkb3dcIiwgdmFsdWUpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuI3NoYWRvdy5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgdmFsdWUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jc2hhZG93Q2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgIGlmICghdGhpcy4jc2hhZG93LmVxdWFscyh2YWx1ZSkpIHRoaXMuI3NoYWRvd0NoYW5nZUxpc3RlbmVyKHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFN0YW5kYWxvbmVSZW5kZXJhYmxlIGV4dGVuZHMgYzJkU3RhbmRhbG9uZUNoaWxkcmVuKFxyXG4gIENhbnZhczJEQmFzZVJlbmRlcmFibGVcclxuKSB7XHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlUGFydFJlbmRlcmFibGUgZXh0ZW5kcyBjMmRTaGFwZUNoaWxkcmVuKFxyXG4gIENhbnZhczJEQmFzZVJlbmRlcmFibGVcclxuKSB7fVxyXG4iLCJpbXBvcnQgeyBjMmRGaWxsIH0gZnJvbSBcIi4uLy4uL21peGlucy9maWxsXCI7XHJcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gXCIuLi8uLi9taXhpbnMvb2Zmc2V0XCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7IEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkIH0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlIGV4dGVuZHMgYzJkRmlsbChcclxuICBjMmRTdHJva2Uob2Zmc2V0KEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkKSlcclxuKSB7XHJcbiAgI2Nsb3NlID0gZmFsc2U7XHJcblxyXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcImNsb3NlXCJdO1xyXG5cclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1zaGFwZVwiO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKG5hbWUgPT09IFwiY2xvc2VcIikge1xyXG4gICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuY2xvc2UgPSBmYWxzZTtcclxuICAgICAgZWxzZSB0aGlzLmNsb3NlID0gYXR0cmlidXRlUGFyc2VyLmJvb2xlYW4obmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsb3NlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2Nsb3NlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNsb3NlKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jY2xvc2UgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImNsb3NlXCIsICh0aGlzLiNjbG9zZSA9IHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgY29udGV4dC5tb3ZlVG8odGhpcy5vZmZzZXQueCwgdGhpcy5vZmZzZXQueSk7XHJcblxyXG4gICAgc3VwZXIucmVuZGVyQ2hpbGRyZW4oY2FudmFzMkQpO1xyXG5cclxuICAgIGlmICh0aGlzLiNjbG9zZSkgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICB9XHJcblxyXG4gIC8vIFRoaXMgaXMgZW1wdHkgdG8gcHJldmVudCBkb3VibGUgcmVuZGVyaW5nIGNoaWxkcmVuXHJcbiAgcmVuZGVyQ2hpbGRyZW4oY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge31cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXNoYXBlXCIsIENhbnZhczJEU2hhcGUpO1xyXG4iLCJpbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9taXhhYmxlXCI7XHJcbmltcG9ydCB7IFNWR1NWR0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9zdmdTVkdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTVkdDb250cm9sbGVyPFQgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcD4oXHJcbiAgc3ZnVGFnOiBULFxyXG4gIGNvbnRyb2xsZXJUYWc6IHN0cmluZ1xyXG4pIHtcclxuICByZXR1cm4gY2xhc3MgU1ZHRWxlbWVudENvbnRyb2xsZXIgZXh0ZW5kcyBDdXN0b21IVE1MRWxlbWVudCB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgc3RhdGljIHRhZyA9IGNvbnRyb2xsZXJUYWc7XHJcblxyXG4gICAgI21haW46IFNWR0VsZW1lbnRUYWdOYW1lTWFwW1RdO1xyXG4gICAgI2dyb3VwOiBTVkdHRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLiNtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICBzdmdUYWdcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICB0eXBlOiBrZXlvZiBTVkdFbGVtZW50RXZlbnRNYXAsXHJcbiAgICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxyXG4gICAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgdHlwZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCxcclxuICAgICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXHJcbiAgICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnNcclxuICAgICk6IHZvaWQge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYWluRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZDxUIGV4dGVuZHMgTm9kZT4obm9kZTogVCk6IFQge1xyXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuI2dyb3VwID8/IHRoaXMuI2NyZWF0ZUdyb3VwKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBncm91cC5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBTVkdFbGVtZW50Q29udHJvbGxlcikge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZS5ncm91cCA/PyBub2RlLm1haW5FbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuI2dyb3VwID8/IHRoaXMuI2NyZWF0ZUdyb3VwKCk7XHJcblxyXG4gICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3VwZXIuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCkge31cclxuXHJcbiAgICAjYXR0YWNoTWFpbigpIHtcclxuICAgICAgY29uc3QgeyBwYXJlbnRFbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudENvbnRyb2xsZXIgPSBwYXJlbnRFbGVtZW50IGFzIFNWR0VsZW1lbnRDb250cm9sbGVyO1xyXG5cclxuICAgICAgY29uc3QgdGFyZ2V0ID0gcGFyZW50Q29udHJvbGxlci5ncm91cCA/PyBwYXJlbnRDb250cm9sbGVyLm1haW5FbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgeyBncm91cCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChncm91cCA9PT0gbnVsbCkgdGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMubWFpbkVsZW1lbnQpO1xyXG4gICAgICBlbHNlIHRhcmdldC5hcHBlbmRDaGlsZChncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIHRoaXMuI2F0dGFjaE1haW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAjY3JlYXRlR3JvdXAoKSB7XHJcbiAgICAgIGlmICh0aGlzLiNncm91cCAhPT0gbnVsbCkgcmV0dXJuIHRoaXMuI2dyb3VwO1xyXG5cclxuICAgICAgdGhpcy4jZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XHJcblxyXG4gICAgICBjb25zdCB7IHBhcmVudEVsZW1lbnQgfSA9IHRoaXMubWFpbkVsZW1lbnQ7XHJcblxyXG4gICAgICBpZiAocGFyZW50RWxlbWVudCAhPT0gbnVsbCkgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiNncm91cCk7XHJcblxyXG4gICAgICB0aGlzLiNncm91cC5hcHBlbmRDaGlsZCh0aGlzLm1haW5FbGVtZW50KTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgW3Byb3BlcnR5TmFtZSwgYXR0cmlidXRlTmFtZV0gb2YgT2JqZWN0LmVudHJpZXMoXHJcbiAgICAgICAgdGhpcy5fc3R5bGVBdHRyaWJ1dGVzXHJcbiAgICAgICkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFJlZmxlY3QuZ2V0KHRoaXMsIHByb3BlcnR5TmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgY29udGludWU7XHJcblxyXG4gICAgICAgIHRoaXMuI2dyb3VwLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBTdHJpbmcodmFsdWUpKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLiNncm91cDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ3JvdXAoKTogU1ZHR0VsZW1lbnQgfCBudWxsIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2dyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtYWluRWxlbWVudCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21haW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfc2V0U3R5bGVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgIGNvbnN0IHsgZ3JvdXAgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoZ3JvdXAgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBncm91cC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBfc3R5bGVBdHRyaWJ1dGVzKCk6IHtcclxuICAgICAgW0tleSBpbiBrZXlvZiB0aGlzXT86IHN0cmluZztcclxuICAgIH0ge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN2Z0NvbnRhaW5lcigpOiBTVkdTVkdFbGVtZW50IHwgbnVsbCB7XHJcbiAgICAgIGNvbnN0IHsgZ3JvdXAsIHBhcmVudEVsZW1lbnQgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoZ3JvdXAgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBncm91cFBhcmVudCA9IGdyb3VwLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChncm91cFBhcmVudCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGlmIChncm91cFBhcmVudCBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQpIHJldHVybiBncm91cFBhcmVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgY29uc3QgeyBncm91cDogcGFyZW50R3JvdXAsIG1haW5FbGVtZW50OiBwYXJlbnRNYWluIH0gPVxyXG4gICAgICAgIHBhcmVudEVsZW1lbnQgYXMgU1ZHRWxlbWVudENvbnRyb2xsZXI7XHJcblxyXG4gICAgICBpZiAocGFyZW50R3JvdXAgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSByZXR1cm4gcGFyZW50R3JvdXA7XHJcblxyXG4gICAgICBpZiAocGFyZW50TWFpbiBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQpIHJldHVybiBwYXJlbnRNYWluO1xyXG5cclxuICAgICAgcmV0dXJuIChwYXJlbnRFbGVtZW50IGFzIFNWR0VsZW1lbnRDb250cm9sbGVyKS5zdmdDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN2Z0NvbnRhaW5lckNvbnRyb2xsZXIoKTogU1ZHU1ZHQ29udHJvbGxlciB8IG51bGwge1xyXG4gICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFNWR1NWR0NvbnRyb2xsZXIpIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgY29uc3QgeyBwYXJlbnRFbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IG51bGwpIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50Q29udHJvbGxlciA9IChwYXJlbnRFbGVtZW50IGFzIFNWR0VsZW1lbnRDb250cm9sbGVyKVxyXG4gICAgICAgIC5zdmdDb250YWluZXJDb250cm9sbGVyO1xyXG5cclxuICAgICAgaWYgKHBhcmVudENvbnRyb2xsZXIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHBhcmVudENvbnRyb2xsZXI7XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTVkdFbGVtZW50Q29udHJvbGxlciA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVNWR0NvbnRyb2xsZXI+O1xyXG4iLCJpbXBvcnQgeyBzdmdDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvY2hpbGRyZW5cIjtcclxuaW1wb3J0IHsgdmlld0JveCB9IGZyb20gXCIuLi8uLi9taXhpbnMvdmlld0JveFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTVkdDb250cm9sbGVyLCBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgU1ZHUmVjdGFuZ2xlQ29udHJvbGxlciB9IGZyb20gXCIuL3JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgeyBHcmFkaWVudCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU1ZHU1ZHQ29udHJvbGxlciBleHRlbmRzIHZpZXdCb3goXHJcbiAgc3ZnQ2hpbGRyZW4oY3JlYXRlU1ZHQ29udHJvbGxlcihcInN2Z1wiLCBcInN2Zy1zdmdcIikpXHJcbikge1xyXG4gICNkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJkZWZzXCIpO1xyXG4gICNncmFkaWVudHMgPSBuZXcgU2V0PFNWR0dyYWRpZW50RWxlbWVudD4oKTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwiY2xvc2VkXCIgfSk7XHJcblxyXG4gICAgc2hhZG93LmFwcGVuZENoaWxkKHRoaXMubWFpbkVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMubWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4jZGVmcyk7XHJcblxyXG4gICAgdGhpcy5fcmVzaXplVmlld0JveCgpO1xyXG4gIH1cclxuXHJcbiAgX2RlZmluZUdyYWRpZW50KGdyYWRpZW50OiBHcmFkaWVudCkge1xyXG4gICAgaWYgKHRoaXMuI2dyYWRpZW50cy5oYXMoZ3JhZGllbnQuc3ZnKSkgcmV0dXJuIGdyYWRpZW50LnN2Zy5pZDtcclxuXHJcbiAgICBjb25zdCBwYWRTdGFydCA9IDI7XHJcblxyXG4gICAgY29uc3QgaWROdW1iZXIgPSBBcnJheS5mcm9tKHRoaXMuI2dyYWRpZW50cykucmVkdWNlKChtYXhOdW0sIGdyYWRpZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IG51bVN0cmluZyA9IGdyYWRpZW50LmlkLnNsaWNlKC1wYWRTdGFydCk7XHJcblxyXG4gICAgICBjb25zdCBudW0gPSBwYXJzZUludChudW1TdHJpbmcpO1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGgubWF4KG1heE51bSwgbnVtKTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50RWxlbWVudCA9IGdyYWRpZW50LnN2ZztcclxuXHJcbiAgICB0aGlzLiNkZWZzLmFwcGVuZENoaWxkKGdyYWRpZW50RWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgaWQgPSBgZ3JhZGllbnQtJHtpZE51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KHBhZFN0YXJ0LCBcIjBcIil9YDtcclxuXHJcbiAgICB0aGlzLiNncmFkaWVudHMuYWRkKGdyYWRpZW50RWxlbWVudCk7XHJcblxyXG4gICAgZ3JhZGllbnRFbGVtZW50LmlkID0gaWQ7XHJcblxyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH1cclxuXHJcbiAgZG93bmxvYWQoZmlsZW5hbWUgPSBcIndlYnNwaW5uZXIuc3ZnXCIpIHtcclxuICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcclxuICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIiAxLjFcIik7XHJcblxyXG4gICAgY29uc3Qgc3ZnU3RyaW5nID0gdGhpcy5tYWluRWxlbWVudC5vdXRlckhUTUw7XHJcblxyXG4gICAgY29uc3QgZG93bmxvYWRBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICBkb3dubG9hZEFuY2hvci5kb3dubG9hZCA9IGZpbGVuYW1lO1xyXG5cclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbc3ZnU3RyaW5nXSwgeyB0eXBlOiBcImltYWdlL3N2Z1wiIH0pO1xyXG5cclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgZG93bmxvYWRBbmNob3IuaHJlZiA9IHVybDtcclxuXHJcbiAgICBkb3dubG9hZEFuY2hvci5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN2Z0NvbnRhaW5lcigpOiBTVkdTVkdFbGVtZW50IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5tYWluRWxlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN2Zy1zdmdcIiwgU1ZHU1ZHQ29udHJvbGxlcik7XHJcbiIsImltcG9ydCB7IHVzZUZvbnQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZvbnRcIjtcclxuaW1wb3J0IHsgYzJkRmlsbCB9IGZyb20gXCIuLi8uLi9taXhpbnMvZmlsbFwiO1xyXG5pbXBvcnQgeyBjMmRTdHJva2UgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N0cm9rZVwiO1xyXG5pbXBvcnQgeyBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gXCIuLi8uLi9taXhpbnMvb2Zmc2V0XCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBMaW5lYXJHcmFkaWVudCwgUmFkaWFsR3JhZGllbnQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5cclxuY2xhc3MgQmFzZSBleHRlbmRzIGMyZEZpbGwoXHJcbiAgYzJkU3Ryb2tlKG9mZnNldCh1c2VGb250KEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCkpKVxyXG4pIHt9XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRUZXh0IGV4dGVuZHMgQmFzZSB7XHJcbiAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcclxuICAgIC4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgXCJzaXplXCIsXHJcbiAgICBcImFsaWduXCIsXHJcbiAgICBcImJhc2VsaW5lXCIsXHJcbiAgICBcImZvbnRcIixcclxuICAgIFwic3RyZXRjaFwiLFxyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXRleHRcIjtcclxuICB9XHJcblxyXG4gICNhbGlnbjogQ2FudmFzVGV4dEFsaWduIHwgbnVsbCA9IG51bGw7XHJcbiAgI2Jhc2VsaW5lOiBDYW52YXNUZXh0QmFzZWxpbmUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogSG9yaXpvbnRhbCBhbGlnbm1lbnQuIE9wdGlvbnMgYXJlIFwiY2VudGVyXCIsIFwiZW5kXCIsIFwibGVmdFwiLCBcInJpZ2h0XCIsIG9yIFwic3RhcnRcIi5cclxuICAgKlxyXG4gICAqIEBhdHRyXHJcbiAgICogQHJlZmxlY3RcclxuICAgKi9cclxuICBnZXQgYWxpZ24oKTogQ2FudmFzVGV4dEFsaWduIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy4jYWxpZ247XHJcbiAgfVxyXG5cclxuICBzZXQgYWxpZ24odmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNhbGlnbiA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYWxpZ25cIiwgKHRoaXMuI2FsaWduID0gdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICBjYXNlIFwiYWxpZ25cIjpcclxuICAgICAgICB0aGlzLmFsaWduID0gbmV3VmFsdWUgYXMgQ2FudmFzVGV4dEFsaWduO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSBcImJhc2VsaW5lXCI6XHJcbiAgICAgICAgdGhpcy5iYXNlbGluZSA9IG5ld1ZhbHVlIGFzIENhbnZhc1RleHRCYXNlbGluZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGJhc2VsaW5lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2Jhc2VsaW5lO1xyXG4gIH1cclxuXHJcbiAgc2V0IGJhc2VsaW5lKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jYmFzZWxpbmUgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImJhc2VsaW5lXCIsICh0aGlzLiNiYXNlbGluZSA9IHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgIGlmICh0aGlzLiNhbGlnbiAhPT0gbnVsbCkgY29udGV4dC50ZXh0QWxpZ24gPSB0aGlzLiNhbGlnbjtcclxuXHJcbiAgICBpZiAodGhpcy4jYmFzZWxpbmUgIT09IG51bGwpIGNvbnRleHQudGV4dEJhc2VsaW5lID0gdGhpcy4jYmFzZWxpbmU7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsbCAhPT0gXCJub25lXCIgJiYgdGhpcy50ZXh0Q29udGVudCAhPT0gbnVsbClcclxuICAgICAgY29udGV4dC5maWxsVGV4dCh0aGlzLnRleHRDb250ZW50LCB0aGlzLm9mZnNldC54LCB0aGlzLm9mZnNldC55KTtcclxuXHJcbiAgICBpZiAodGhpcy5zdHJva2UgIT09IFwibm9uZVwiICYmIHRoaXMudGV4dENvbnRlbnQgIT09IG51bGwpXHJcbiAgICAgIGNvbnRleHQuc3Ryb2tlVGV4dCh0aGlzLnRleHRDb250ZW50LCB0aGlzLm9mZnNldC54LCB0aGlzLm9mZnNldC55KTtcclxuXHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhczJEKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxpbmVhckdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IExpbmVhckdyYWRpZW50XHJcbiAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgY29uc3QgdGV4dFRvTWVhc3VyZSA9IHRoaXMudGV4dENvbnRlbnQgPz8gXCJcIjtcclxuXHJcbiAgICBjb25zdCBtZWFzdXJlbWVudHMgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHRUb01lYXN1cmUpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQsXHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCxcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hMZWZ0OiB4LFxyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveFJpZ2h0OiB5LFxyXG4gICAgICB3aWR0aCxcclxuICAgIH0gPSBtZWFzdXJlbWVudHM7XHJcblxyXG4gICAgY29uc3QgaGVpZ2h0ID0gYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50ICsgYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclJhZGlhbEdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IFJhZGlhbEdyYWRpZW50XHJcbiAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgY29uc3QgdGV4dFRvTWVhc3VyZSA9IHRoaXMudGV4dENvbnRlbnQgPz8gXCJcIjtcclxuXHJcbiAgICBjb25zdCBtZWFzdXJlbWVudHMgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHRUb01lYXN1cmUpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQsXHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCxcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hMZWZ0LFxyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveFJpZ2h0LFxyXG4gICAgICB3aWR0aCxcclxuICAgIH0gPSBtZWFzdXJlbWVudHM7XHJcblxyXG4gICAgY29uc3QgaGVpZ2h0ID0gYWN0dWFsQm91bmRpbmdCb3hBc2NlbnQgKyBhY3R1YWxCb3VuZGluZ0JveERlc2NlbnQ7XHJcblxyXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgoaGVpZ2h0LCB3aWR0aCkgLyAyO1xyXG5cclxuICAgIGNvbnN0IGNlbnRlclggPSBhY3R1YWxCb3VuZGluZ0JveExlZnQgKyB3aWR0aCAvIDI7XHJcbiAgICBjb25zdCBjZW50ZXJZID0gYWN0dWFsQm91bmRpbmdCb3hSaWdodCArIGhlaWdodCAvIDI7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCBjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0IHRleHRDb250ZW50KHZhbHVlKSB7XHJcbiAgICBpZiAoc3VwZXIudGV4dENvbnRlbnQgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgc3VwZXIudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlZEV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC10ZXh0XCIsIENhbnZhczJEVGV4dCk7XHJcbiIsImltcG9ydCB7IEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCB9IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IHJlbmRlcnNWaXN1YWxNZWRpYSB9IGZyb20gXCIuLi8uLi9taXhpbnMvdmlzdWFsTWVkaWFcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcixcclxuICBIVE1MRWxlbWVudENvbnRyb2xsZXIsXHJcbn0gZnJvbSBcIi4uL2RvY3VtZW50L2RvbUJhc2VcIjtcclxuaW1wb3J0IHsgY2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4vcmVuZGVyYWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEVmlkZW8gZXh0ZW5kcyByZW5kZXJzVmlzdWFsTWVkaWEoXHJcbiAgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkLFxyXG4gIFwidmlkZW9cIlxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC12aWRlb1wiO1xyXG4gIH1cclxuXHJcbiAgI2ZyYW1lQ2FsbGJhY2tJZCA9IC0xO1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgfVxyXG5cclxuICAjaGFuZGxlRnJhbWUoKSB7XHJcbiAgICB0aGlzLiNmcmFtZUNhbGxiYWNrSWQgPSB0aGlzLm1lZGlhRWxlbWVudC5yZXF1ZXN0VmlkZW9GcmFtZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGNoYW5nZWRFdmVudCk7XHJcblxyXG4gICAgICBpZiAoIXRoaXMubWVkaWFFbGVtZW50LnBhdXNlZCkgdGhpcy4jaGFuZGxlRnJhbWUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGxheSgpIHtcclxuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm1lZGlhRWxlbWVudC5wbGF5KCk7XHJcblxyXG4gICAgdGhpcy4jaGFuZGxlRnJhbWUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuICB9XHJcblxyXG4gIHBhdXNlKCkge1xyXG4gICAgdGhpcy5tZWRpYUVsZW1lbnQuY2FuY2VsVmlkZW9GcmFtZUNhbGxiYWNrKHRoaXMuI2ZyYW1lQ2FsbGJhY2tJZCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubWVkaWFFbGVtZW50LnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGF1c2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVkaWFFbGVtZW50LnBhdXNlZDtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBsYXkoKSB7XHJcbiAgICBpZiAodGhpcy5wYXVzZWQpIHRoaXMucGxheSgpO1xyXG4gICAgZWxzZSB0aGlzLnBhdXNlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtdmlkZW9cIiwgQ2FudmFzMkRWaWRlbyk7XHJcblxyXG5leHBvcnQgY2xhc3MgSFRNTFZpZGVvV3JhcHBlciBleHRlbmRzIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yKFxyXG4gIFwidmlkZW9cIlxyXG4pIHt9XHJcblxyXG5leHBvcnQgdHlwZSBIVE1MVmlkZW9Db250cm9sbGVyID0gSFRNTEVsZW1lbnRDb250cm9sbGVyPFxyXG4gIFwidmlkZW9cIixcclxuICBIVE1MVmlkZW9XcmFwcGVyXHJcbj47XHJcbiIsImltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREJlemllciwgQ2FudmFzMkRTaGFwZUJlemllciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvYmV6aWVyXCI7XHJcbmltcG9ydCB7IEMyREJhc2UgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2MyZEJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyREVsbGlwc2UsXHJcbiAgQ2FudmFzMkRTaGFwZUVsbGlwc2UsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9lbGxpcHNlXCI7XHJcbmltcG9ydCB7IENhbnZhczJESW1hZ2UgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2ltYWdlXCI7XHJcbmltcG9ydCB7IENhbnZhczJETGluZSwgQ2FudmFzMkRTaGFwZUxpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2xpbmVcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyRFJlY3RhbmdsZSxcclxuICBDYW52YXMyRFNoYXBlUmVjdGFuZ2xlLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEU2hhcGUgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3NoYXBlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEVGV4dCB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvdGV4dFwiO1xyXG5pbXBvcnQge1xyXG4gIENhbnZhczJEVmlkZW8sXHJcbiAgSFRNTFZpZGVvQ29udHJvbGxlcixcclxuICBIVE1MVmlkZW9XcmFwcGVyLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvdmlkZW9cIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgU1ZHUmVjdGFuZ2xlQ29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7XHJcbiAgSFRNTEVsZW1lbnRDb250cm9sbGVyLFxyXG4gIEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy9kb2N1bWVudC9kb21CYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgRG9jdW1lbnRDb250YWluZXJDb250cm9sbGVyLFxyXG4gIERvY3VtZW50Q29udGFpbmVyV3JhcHBlcixcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvZG9jdW1lbnQvY29udGFpbmVyXCI7XHJcbmltcG9ydCB7XHJcbiAgRG9jdW1lbnRQYXJhZ3JhcGhDb250cm9sbGVyLFxyXG4gIERvY3VtZW50UGFyYWdyYXBoV3JhcHBlcixcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvZG9jdW1lbnQvcGFyYWdyYXBoXCI7XHJcbmltcG9ydCB7XHJcbiAgRG9jdW1lbnRTcGFuQ29udHJvbGxlcixcclxuICBEb2N1bWVudFNwYW5XcmFwcGVyLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy9kb2N1bWVudC9zcGFuXCI7XHJcbmltcG9ydCB7IEhUTUxBdWRpb0NvbnRyb2xsZXIsIEhUTUxBdWRpb1dyYXBwZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvYXVkaW8vYXVkaW9cIjtcclxuXHJcbnR5cGUgTXVsdGlwbGVDYWxsYmFjayA9IChpbmRleDogbnVtYmVyKSA9PiBOb2RlIHwgdW5kZWZpbmVkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGMyZFN0YW5kYWxvbmVDaGlsZHJlbjxCIGV4dGVuZHMgdHlwZW9mIEMyREJhc2U+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGA8YzJkLWJlemllcj5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIGJlemllcihvcHRpb25zPzogT3B0aW9uczxDYW52YXMyREJlemllcj4pOiBDYW52YXMyREJlemllciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEQmV6aWVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1lbGxpcHNlPmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgZWxsaXBzZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyREVsbGlwc2U+KTogQ2FudmFzMkRFbGxpcHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRFbGxpcHNlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1pbWFnZT5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIGltYWdlKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJESW1hZ2U+KTogQ2FudmFzMkRJbWFnZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJESW1hZ2UsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG11bHRpcGxlKGNhbGxiYWNrOiBNdWx0aXBsZUNhbGxiYWNrKTogTm9kZVtdO1xyXG4gICAgbXVsdGlwbGUoY291bnQ6IG51bWJlciwgY2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiBOb2RlKTogTm9kZVtdO1xyXG4gICAgbXVsdGlwbGU8XHJcbiAgICAgIEExIGV4dGVuZHMgbnVtYmVyIHwgTXVsdGlwbGVDYWxsYmFjayxcclxuICAgICAgQTIgZXh0ZW5kcyBBMSBleHRlbmRzIG51bWJlciA/IChpbmRleDogbnVtYmVyKSA9PiBOb2RlIDogdW5kZWZpbmVkXHJcbiAgICA+KGFyZzE6IEExLCBhcmcyPzogQTIpOiBOb2RlW10ge1xyXG4gICAgICBpZiAodHlwZW9mIGFyZzEgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBpZiAoYXJnMiA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGNhbGxiYWNrXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KGFyZzEpLmZpbGwoMCkubWFwKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBhcmcyKGluZGV4KTtcclxuXHJcbiAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlY3Vyc2VDaGlsZHJlbiA9IChjaGlsZHJlbjogTm9kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBhcmcxKGluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkID09PSB1bmRlZmluZWQpIHJldHVybiBjaGlsZHJlbjtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChjaGlsZCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWN1cnNlQ2hpbGRyZW4oY2hpbGRyZW4uY29uY2F0KGNoaWxkKSwgaW5kZXggKyAxKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiByZWN1cnNlQ2hpbGRyZW4oW10sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGA8YzJkLWxpbmU+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICBsaW5lKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJETGluZT4pOiBDYW52YXMyRExpbmUge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRExpbmUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGA8YzJkLXJlY3RhbmdsZT5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIHJlY3RhbmdsZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFJlY3RhbmdsZT4pOiBDYW52YXMyRFJlY3RhbmdsZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEUmVjdGFuZ2xlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1zaGFwZT5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIHNoYXBlKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEU2hhcGU+KTogQ2FudmFzMkRTaGFwZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEU2hhcGUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGA8YzJkLXRleHQ+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICB0ZXh0KG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEVGV4dD4pOiBDYW52YXMyRFRleHQge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFRleHQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGA8YzJkLXZpZGVvPmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgdmlkZW8ob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRWaWRlbz4pOiBDYW52YXMyRFZpZGVvIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRWaWRlbywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGMyZFNoYXBlQ2hpbGRyZW48QiBleHRlbmRzIHR5cGVvZiBDMkRCYXNlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBiZXppZXIob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRTaGFwZUJlemllcj4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRTaGFwZUJlemllciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxsaXBzZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFNoYXBlRWxsaXBzZT4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRTaGFwZUVsbGlwc2UsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmUob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRTaGFwZUxpbmU+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEU2hhcGVMaW5lLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZWN0YW5nbGUob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRTaGFwZVJlY3RhbmdsZT4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN2Z0NoaWxkcmVuPEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTVkdDb250cm9sbGVyQ2hpbGQ8RSBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihcclxuICAgICAgRWxlbWVudENsYXNzOiBFLFxyXG4gICAgICBvcHRpb25zPzogT3B0aW9uczxJbnN0YW5jZVR5cGU8RT4+XHJcbiAgICApIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoRWxlbWVudENsYXNzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZWN0YW5nbGUob3B0aW9ucz86IFBhcnRpYWw8U1ZHUmVjdGFuZ2xlQ29udHJvbGxlcj4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU1ZHQ29udHJvbGxlckNoaWxkKFNWR1JlY3RhbmdsZUNvbnRyb2xsZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkb2N1bWVudENoaWxkcmVuPFxyXG4gIFQgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAsXHJcbiAgVyBleHRlbmRzIEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+XHJcbj4oV3JhcHBlckNvbnN0cnVjdG9yOiBXKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgV3JhcHBlckNvbnN0cnVjdG9yIHtcclxuICAgIGF1ZGlvKG9wdGlvbnM/OiBPcHRpb25zPEhUTUxBdWRpb0NvbnRyb2xsZXI+KTogSFRNTEF1ZGlvQ29udHJvbGxlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyYXBwZWRDaGlsZChIVE1MQXVkaW9XcmFwcGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIoXHJcbiAgICAgIG9wdGlvbnM/OiBPcHRpb25zPERvY3VtZW50Q29udGFpbmVyQ29udHJvbGxlcj5cclxuICAgICk6IERvY3VtZW50Q29udGFpbmVyQ29udHJvbGxlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyYXBwZWRDaGlsZChEb2N1bWVudENvbnRhaW5lcldyYXBwZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmFncmFwaChcclxuICAgICAgb3B0aW9ucz86IE9wdGlvbnM8RG9jdW1lbnRQYXJhZ3JhcGhDb250cm9sbGVyPlxyXG4gICAgKTogRG9jdW1lbnRQYXJhZ3JhcGhDb250cm9sbGVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JhcHBlZENoaWxkKERvY3VtZW50UGFyYWdyYXBoV3JhcHBlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbihvcHRpb25zPzogT3B0aW9uczxEb2N1bWVudFNwYW5Db250cm9sbGVyPik6IERvY3VtZW50U3BhbkNvbnRyb2xsZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVXcmFwcGVkQ2hpbGQoRG9jdW1lbnRTcGFuV3JhcHBlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlkZW8ob3B0aW9ucz86IE9wdGlvbnM8SFRNTFZpZGVvQ29udHJvbGxlcj4pOiBIVE1MVmlkZW9Db250cm9sbGVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JhcHBlZENoaWxkKEhUTUxWaWRlb1dyYXBwZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGltZW5zaW9uczxCIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gWy4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCJdO1xyXG5cclxuICAgICN3aWR0aCA9IDEwMDtcclxuICAgICNoZWlnaHQgPSAxMDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGVtZW50J3Mgd2lkdGggaW4gcGl4ZWxzLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB3aWR0aCh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jd2lkdGggPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwid2lkdGhcIiwgKHRoaXMuI3dpZHRoID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsZW1lbnQncyBoZWlnaHQgaW4gcGl4ZWxzLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jaGVpZ2h0ID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImhlaWdodFwiLCAodGhpcy4jaGVpZ2h0ID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJ3aWR0aFwiOlxyXG4gICAgICAgICAgdGhpcy53aWR0aCA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIFwiaGVpZ2h0XCI6XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZFNWR0RpbWVuc2lvbnM8XHJcbiAgQiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyICYgUmV0dXJuVHlwZTx0eXBlb2YgZGltZW5zaW9ucz5cclxuPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB0aGlzLndpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCB0aGlzLmhlaWdodC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gc3VwZXIuaGVpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci5oZWlnaHQgPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB3aWR0aCh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHN1cGVyLndpZHRoKSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci53aWR0aCA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnRGltZW5zaW9uczxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gZXh0ZW5kU1ZHRGltZW5zaW9ucyhkaW1lbnNpb25zKEJhc2UpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuLi9jbGFzc2VzL2NvbG9yXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIERyYXdTdHlsZSxcclxuICBHcmFkaWVudCxcclxuICBMaW5lYXJHcmFkaWVudCxcclxuICBSYWRpYWxHcmFkaWVudCxcclxufSBmcm9tIFwiLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5cclxuZnVuY3Rpb24gYmFzZUZpbGw8QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBGaWxsYWJsZSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10gPSBbLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwiZmlsbFwiXTtcclxuXHJcbiAgICAjZmlsbDogRHJhd1N0eWxlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVuZGVyaW5nIHN0eWxlIGluc2lkZSB0aGUgZWxlbWVudC4gVGhpcyBtYXkgYmUgYSBjb2xvciBvciBncmFkaWVudC5cclxuICAgICAqIFdoZW4gc2V0IHRvIG51bGwsIHRoZSBwYXJlbnQgZWxlbWVudCdzIHN0eWxlIGlzIHVzZWQuIFdoZW5cclxuICAgICAqIHNldCB0byBcIm5vbmVcIiwgdGhlIGluc2lkZSB3aWxsIGJlIHRyYW5zcGFyZW50LlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgZmlsbCgpOiBEcmF3U3R5bGUgfCBudWxsIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2ZpbGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGZpbGwodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2ZpbGwgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy4jZmlsbCBpbnN0YW5jZW9mIENvbG9yICYmXHJcbiAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBDb2xvciAmJlxyXG4gICAgICAgIHRoaXMuI2ZpbGwuZXF1YWxzKHZhbHVlKVxyXG4gICAgICApXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFxyXG4gICAgICAgICAgXCJmaWxsXCIsXHJcbiAgICAgICAgICAodGhpcy4jZmlsbCA9IHZhbHVlID09PSBcIm5vbmVcIiA/IHZhbHVlIDogQ29sb3IuZnJvbVN0cmluZyh2YWx1ZSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgZWxzZSB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiZmlsbFwiLCAodGhpcy4jZmlsbCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChuYW1lID09PSBcImZpbGxcIikge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5maWxsID0gbnVsbDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGZpbGxWYWx1ZSA9IGF0dHJpYnV0ZVBhcnNlci5GaWxsU3Ryb2tlU3R5bGUobmV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgIGlmIChmaWxsVmFsdWUgIT09IFwiZ3JhZGllbnRcIikgdGhpcy5maWxsID0gZmlsbFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGMyZEZpbGw8QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEZpbGxhYmxlIGV4dGVuZHMgYmFzZUZpbGwoQmFzZSkge1xyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgY29udGV4dCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5maWxsIGluc3RhbmNlb2YgQ29sb3IpIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5maWxsLnRvU3RyaW5nKCk7XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIEdyYWRpZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIENvbmljYWxHcmFkaWVudCkge1xyXG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLnJlbmRlckNvbmljYWxHcmFkaWVudChjb250ZXh0LCB0aGlzLmZpbGwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWxsIGluc3RhbmNlb2YgTGluZWFyR3JhZGllbnQpIHtcclxuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5yZW5kZXJMaW5lYXJHcmFkaWVudChjb250ZXh0LCB0aGlzLmZpbGwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWxsIGluc3RhbmNlb2YgUmFkaWFsR3JhZGllbnQpIHtcclxuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5yZW5kZXJSYWRpYWxHcmFkaWVudChjb250ZXh0LCB0aGlzLmZpbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyUmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuZmlsbCAhPT0gXCJub25lXCIpIGNhbnZhczJELmNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgICAgc3VwZXIuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdGaWxsPEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2VGaWxsKEJhc2UpIHtcclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIEdyYWRpZW50KSB0aGlzLiNmaWxsR3JhZGllbnQodGhpcy5maWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmlsbCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmZpbGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGZpbGwodmFsdWUpIHtcclxuICAgICAgaWYgKHN1cGVyLmZpbGw/LnRvU3RyaW5nKCkgPT09IHZhbHVlPy50b1N0cmluZygpKSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci5maWxsID0gdmFsdWU7XHJcblxyXG4gICAgICBjb25zdCB7IGZpbGwgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoZmlsbCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKGZpbGwgaW5zdGFuY2VvZiBDb2xvcilcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZUF0dHJpYnV0ZShcImZpbGxcIiwgZmlsbC50b1N0cmluZygpKTtcclxuICAgICAgZWxzZSBpZiAoZmlsbCBpbnN0YW5jZW9mIEdyYWRpZW50KSB0aGlzLiNmaWxsR3JhZGllbnQoZmlsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgI2ZpbGxHcmFkaWVudChncmFkaWVudDogR3JhZGllbnQpIHtcclxuICAgICAgY29uc3QgeyBzdmdDb250YWluZXJDb250cm9sbGVyIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHN2Z0NvbnRhaW5lckNvbnRyb2xsZXIgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IGdyYWRpZW50SWQgPSBzdmdDb250YWluZXJDb250cm9sbGVyLl9kZWZpbmVHcmFkaWVudChncmFkaWVudCk7XHJcblxyXG4gICAgICB0aGlzLl9zZXRTdHlsZUF0dHJpYnV0ZShcImZpbGxcIiwgYHVybCgjJHtncmFkaWVudElkfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3N0eWxlQXR0cmlidXRlcygpOiB7IFtLZXkgaW4ga2V5b2YgdGhpc10/OiBzdHJpbmcgfSB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN1cGVyLl9zdHlsZUF0dHJpYnV0ZXMsIGZpbGw6IFwiZmlsbFwiIH07XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuaW1wb3J0IHsgQW5nbGUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9hbmdsZVwiO1xyXG5pbXBvcnQgeyBVbml0cyB9IGZyb20gXCIuLi9jbGFzc2VzL3VuaXRzXCI7XHJcbmltcG9ydCB7IE1vdXNlVHJhY2tlciB9IGZyb20gXCIuLi9jbGFzc2VzL21vdXNlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9udFNpemVVbml0cyA9IHtcclxuICAuLi5Vbml0cy5zaXplLFxyXG4gIGNhcEhlaWdodDogXCJjYXBcIixcclxuICBjaGFyYWN0ZXJXaWR0aDogXCJjaFwiLFxyXG4gIGNhbGN1bGF0ZWQ6IFwiZW1cIixcclxuICB4SGVpZ2h0OiBcImV4XCIsXHJcbiAgY2hhcmFjdGVySGVpZ2h0OiBcImljXCIsXHJcbiAgbGluZUhlaWdodDogXCJsaFwiLFxyXG4gIHJvb3RDYXBIZWlnaHQ6IFwicmNhcFwiLFxyXG4gIHJvb3RDaGFyYWN0ZXJXaWR0aDogXCJyY2hcIixcclxuICByb290U2l6ZTogXCJyZW1cIixcclxuICByb290WEhlaWdodDogXCJyZXhcIixcclxuICByb290Q2hhcmFjdGVySGVpZ2h0OiBcImljXCIsXHJcbiAgcm9vdExpbmVIZWlnaHQ6IFwicmxoXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBmb250U3R5bGVzID0ge1xyXG4gIG5vcm1hbDogXCJub3JtYWxcIixcclxuICBpdGFsaWM6IFwiaXRhbGljXCIsXHJcbiAgb2JsaXF1ZTogXCJvYmxpcXVlXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9udDxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KEJhc2U6IEIpIHtcclxuICB0eXBlIEZvbnRDbGFzcyA9IHR5cGVvZiBGb250O1xyXG5cclxuICB0eXBlIEZvbnRTdHlsZSA9XHJcbiAgICB8IEZvbnRDbGFzc1tcInN0eWxlXCJdW2tleW9mIEZvbnRDbGFzc1tcInN0eWxlXCJdXVxyXG4gICAgfCBgb2JsaXF1ZSAke251bWJlcn0keyh0eXBlb2YgQW5nbGUpW1widW5pdFwiXVtrZXlvZiAodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl1dfWA7XHJcblxyXG4gIHR5cGUgRm9udFNpemVVbml0ID0gKHR5cGVvZiBmb250U2l6ZVVuaXRzKVtrZXlvZiB0eXBlb2YgZm9udFNpemVVbml0c107XHJcblxyXG4gIGNsYXNzIEZvbnQgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbXHJcbiAgICAgIC4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgICBcInNpemVcIixcclxuICAgICAgXCJzdHJldGNoXCIsXHJcbiAgICAgIFwiZm9udC1mYW1pbHlcIixcclxuICAgICAgXCJmb250LXN0eWxlXCIsXHJcbiAgICAgIFwia2VybmluZ1wiLFxyXG4gICAgXTtcclxuXHJcbiAgICAjZm9udEZhbWlseTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAja2VybmluZzogQ2FudmFzRm9udEtlcm5pbmcgfCBudWxsID0gbnVsbDtcclxuICAgICNzaXplOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAgICNzaXplVW5pdDogRm9udFNpemVVbml0ID0gXCJweFwiO1xyXG4gICAgI3N0cmV0Y2g6IENhbnZhc0ZvbnRTdHJldGNoIHwgbnVsbCA9IG51bGw7XHJcbiAgICAjZm9udFN0eWxlOiBGb250U3R5bGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJzaXplXCI6XHJcbiAgICAgICAgICB0aGlzLnNpemUgPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlIFwic3RyZXRjaFwiOlxyXG4gICAgICAgICAgdGhpcy5zdHJldGNoID0gbmV3VmFsdWUgYXMgQ2FudmFzRm9udFN0cmV0Y2g7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSBcImZvbnQtZmFtaWx5XCI6XHJcbiAgICAgICAgICB0aGlzLmZvbnRGYW1pbHkgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlIFwiZm9udC1zdHlsZVwiOlxyXG4gICAgICAgICAgdGhpcy5mb250U3R5bGUgPSBuZXdWYWx1ZSBhcyBGb250U3R5bGU7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSBcImtlcm5pbmdcIjpcclxuICAgICAgICAgIHRoaXMua2VybmluZyA9IG5ld1ZhbHVlIGFzIENhbnZhc0ZvbnRLZXJuaW5nO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaXplVW5pdCA9IGZvbnRTaXplVW5pdHM7XHJcblxyXG4gICAgc3RhdGljIHN0cmV0Y2g6IHsgW2tleTogc3RyaW5nXTogQ2FudmFzRm9udFN0cmV0Y2ggfSA9IHtcclxuICAgICAgbm9ybWFsOiBcIm5vcm1hbFwiLFxyXG4gICAgICB1bHRyYUNvbmRlbnNlZDogXCJ1bHRyYS1jb25kZW5zZWRcIixcclxuICAgICAgZXh0cmFDb25kZW5zZWQ6IFwiZXh0cmEtY29uZGVuc2VkXCIsXHJcbiAgICAgIGNvbmRlbnNlZDogXCJjb25kZW5zZWRcIixcclxuICAgICAgZXhwYW5kZWQ6IFwiZXhwYW5kZWRcIixcclxuICAgICAgZXh0cmFFeHBhbmRlZDogXCJleHRyYS1leHBhbmRlZFwiLFxyXG4gICAgICB1bHRyYUV4cGFuZGVkOiBcInVsdHJhLWV4cGFuZGVkXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBzdHlsZSA9IGZvbnRTdHlsZXM7XHJcblxyXG4gICAgZ2V0IGZvbnRGYW1pbHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNmb250RmFtaWx5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmb250RmFtaWx5KHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNmb250RmFtaWx5ID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImZvbnRGYW1pbHlcIiwgKHRoaXMuI2ZvbnRGYW1pbHkgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb250U3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNmb250U3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGZvbnRTdHlsZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jZm9udFN0eWxlID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImZvbnRTdHlsZVwiLCAodGhpcy4jZm9udFN0eWxlID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQga2VybmluZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2tlcm5pbmc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGtlcm5pbmcodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2tlcm5pbmcgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwia2VybmluZ1wiLCAodGhpcy4ja2VybmluZyA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy4jZm9udFN0eWxlID09PSBudWxsID8gXCJcIiA6IGAke3RoaXMuI2ZvbnRTdHlsZX0gYDtcclxuXHJcbiAgICAgIGlmICh0aGlzLiNmb250RmFtaWx5ID09PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuI3NpemUgIT09IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IGZvbnRGYW1seU1hdGNoID0gY29udGV4dC5mb250Lm1hdGNoKC9cXFMqJC8pO1xyXG5cclxuICAgICAgICAgIGlmIChmb250RmFtbHlNYXRjaCA9PT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2UgZmFtaWx5IGluIGN1cnJlbnQgZm9udDogJHtjb250ZXh0LmZvbnR9YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnN0IFtmb250RmFtaWx5XSA9IGZvbnRGYW1seU1hdGNoO1xyXG5cclxuICAgICAgICAgIGNvbnRleHQuZm9udCA9IGAke3N0eWxlfSR7dGhpcy4jc2l6ZX0ke3RoaXMuI3NpemVVbml0fSAke2ZvbnRGYW1pbHl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jc2l6ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGZvbnRTaXplTWF0Y2ggPSBjb250ZXh0LmZvbnQubWF0Y2goLyhcXFMpKlxcc1xcUyokLyk7XHJcblxyXG4gICAgICAgIGlmIChmb250U2l6ZU1hdGNoID09PSBudWxsIHx8IGZvbnRTaXplTWF0Y2hbMF0ubGVuZ3RoIDwgMilcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzaXplIGluIGN1cnJlbnQgZm9udDogJHtjb250ZXh0LmZvbnR9YFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSBmb250U2l6ZU1hdGNoWzFdO1xyXG5cclxuICAgICAgICBjb250ZXh0LmZvbnQgPSBgJHtzdHlsZX0ke2ZvbnRTaXplfSAke3RoaXMuI2ZvbnRGYW1pbHl9YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZXh0LmZvbnQgPSBgJHtzdHlsZX0ke3RoaXMuI3NpemV9JHt0aGlzLiNzaXplVW5pdH0gJHtcclxuICAgICAgICAgIHRoaXMuI2ZvbnRGYW1pbHlcclxuICAgICAgICB9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuI3N0cmV0Y2ggIT09IG51bGwpIGNvbnRleHQuZm9udFN0cmV0Y2ggPSB0aGlzLiNzdHJldGNoO1xyXG5cclxuICAgICAgaWYgKHRoaXMuI2tlcm5pbmcgIT09IG51bGwpIGNvbnRleHQuZm9udEtlcm5pbmcgPSB0aGlzLiNrZXJuaW5nO1xyXG5cclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvbnQgc2l6ZSB1c2luZyB0aGUgY3VycmVudCBzaXplVW5pdC4gV2hlbiBzZXQgdG8gbnVsbCwgdGhlIGxhc3QgcmVuZGVyZWRcclxuICAgICAqIGVsZW1lbnQncyBzZXR0aW5nIGlzIHVzZWQuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBzaXplKCk6IG51bWJlciB8IG51bGwge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2l6ZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jc2l6ZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzaXplXCIsICh0aGlzLiNzaXplID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVuaXQgZm9yIGZvbnQgc2l6ZTogXCJjbVwiIHwgXCJtbVwiIHwgXCJRXCIgfCBcImluXCIgfCBcInBjXCIgfCBcInB0XCIgfCBcInB4XCIgfCBcInZoXCIgfFxyXG4gICAgICogXCJ2d1wiIHwgXCJjYXBcIiB8IFwiY2hcIiB8IFwiZW1cIiB8IFwiZXhcIiB8IFwiaWNcIiB8IFwibGhcIiB8IFwicmNhcFwiIHwgXCJyY2hcIiB8IFwicmVtXCIgfFxyXG4gICAgICogXCJyZXhcIiB8IFwicmxoXCJcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGdldCBzaXplVW5pdCgpOiBGb250U2l6ZVVuaXQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc2l6ZVVuaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNpemVVbml0KHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNzaXplVW5pdCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzaXplVW5pdFwiLCAodGhpcy4jc2l6ZVVuaXQgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaXplU3RyaW5nKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc2l6ZT8udG9TdHJpbmcoKSA/PyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdHJldGNoKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc3RyZXRjaDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RyZXRjaCh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jc3RyZXRjaCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzdHJldGNoXCIsICh0aGlzLiNzdHJldGNoID0gdmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBGb250O1xyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzVG88QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gWy4uLnN1cGVyLm9ic2VydmVkQXR0cmlidXRlcywgXCJ0b1wiXTtcclxuXHJcbiAgICAjdG8gPSBWZWN0b3IyRC54eSgxMDAsIDEwMCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmQgcG9pbnQgb2YgdGhlIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIGFuY2hvci5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHRvKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jdG87XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRvKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiN0by5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwidG9cIiwgKHRoaXMuI3RvID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5hbWUgPT09IFwidG9cIiAmJiBuZXdWYWx1ZSAhPT0gbnVsbClcclxuICAgICAgICB0aGlzLnRvID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNGcm9tPEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsuLi5zdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwiZnJvbVwiXTtcclxuXHJcbiAgICAjZnJvbSA9IFZlY3RvcjJELnplcm8oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0aW5nIHBvaW50IG9mIHRoZSBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBmcm9tKCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2Zyb207XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGZyb20odmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2Zyb20uZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImZyb21cIiwgKHRoaXMuI2Zyb20gPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmFtZSA9PT0gXCJmcm9tXCIgJiYgbmV3VmFsdWUgIT09IG51bGwpXHJcbiAgICAgICAgdGhpcy5mcm9tID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQsIFZlY3RvcjJEQmFzZSB9IGZyb20gXCIuLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldDxCIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gWy4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcIm9mZnNldFwiXTtcclxuXHJcbiAgICAjb2Zmc2V0ID0gbmV3IFZlY3RvcjJEKDAsIDApO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgdGhpcy4jb2Zmc2V0LmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI29mZnNldENoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlICE9PSBudWxsICYmIG5hbWUgPT09IFwib2Zmc2V0XCIpIHtcclxuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLiNvZmZzZXQuZXF1YWxzKG5ld1Bvc2l0aW9uKSkgdGhpcy5vZmZzZXQgPSBuZXdQb3NpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVPZmZzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy4jb2Zmc2V0LnggKz0geDtcclxuICAgICAgdGhpcy4jb2Zmc2V0LnkgKz0geTtcclxuICAgIH1cclxuXHJcbiAgICAjb2Zmc2V0Q2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFZlY3RvcjJEQmFzZT4gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJvZmZzZXRcIiwgdGhpcy4jb2Zmc2V0KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3NpdGlvbiBvZiB0aGUgZWxlbWVudCdzIG9yaWdpbiByZWxhdGl2ZSB0byBpdHMgYW5jaG9yLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgb2Zmc2V0KCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI29mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb2Zmc2V0KHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2UgPSB0aGlzLiNvZmZzZXQucmVwbGFjZS5iaW5kKHRoaXMuI29mZnNldCk7XHJcblxyXG4gICAgICByZXBsYWNlKCh0aGlzLiNvZmZzZXQgPSB2YWx1ZSksIHRoaXMuI29mZnNldENoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kU1ZHT2Zmc2V0PFxyXG4gIEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlciAmIFJldHVyblR5cGU8dHlwZW9mIG9mZnNldD5cclxuPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlT2Zmc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLm1vdmVPZmZzZXQoeCwgeSk7XHJcblxyXG4gICAgICB0aGlzLl91cGRhdGVPZmZzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb2Zmc2V0KCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIub2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvZmZzZXQodmFsdWUpIHtcclxuICAgICAgc3VwZXIub2Zmc2V0ID0gdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLl91cGRhdGVPZmZzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlT2Zmc2V0KCkge1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInhcIiwgdGhpcy5vZmZzZXQueC50b1N0cmluZygpKTtcclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHRoaXMub2Zmc2V0LnkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN2Z09mZnNldDxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gZXh0ZW5kU1ZHT2Zmc2V0KG9mZnNldChCYXNlKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uaWNhbEdyYWRpZW50LCBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCIuLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMsIGV4dGVuZFNWR0RpbWVuc2lvbnMgfSBmcm9tIFwiLi9kaW1lbnNpb25zXCI7XHJcbmltcG9ydCB7IGV4dGVuZFNWR09mZnNldCwgb2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0XCI7XHJcblxyXG50eXBlIE9yaWdpbiA9IFwiY2VudGVyXCIgfCBcInRvcExlZnRcIjtcclxuXHJcbmZ1bmN0aW9uIGJhc2VSZWN0YW5nbGVCb3VuZHM8QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oXHJcbiAgQmFzZTogQixcclxuICBkZWZhdWx0T3JpZ2luOiBPcmlnaW5cclxuKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgZGltZW5zaW9ucyhvZmZzZXQoQmFzZSkpIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbXHJcbiAgICAgIC4uLmRpbWVuc2lvbnMob2Zmc2V0KEJhc2UpKS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwib3JpZ2luXCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNvcmlnaW46IE9yaWdpbiA9IGRlZmF1bHRPcmlnaW47XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuYW1lID09PSBcIm9yaWdpblwiKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMub3JpZ2luID0gbmV3VmFsdWUgYXMgT3JpZ2luO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvcExlZnQoKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy4jb3JpZ2luKSB7XHJcbiAgICAgICAgY2FzZSBcInRvcExlZnRcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldDtcclxuICAgICAgICBjYXNlIFwiY2VudGVyXCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQubWludXModGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3BSaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9wTGVmdC5wbHVzKHRoaXMud2lkdGgsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjZW50ZXIoKSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy4jb3JpZ2luKSB7XHJcbiAgICAgICAgY2FzZSBcInRvcExlZnRcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldC5wbHVzKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBib3R0b21MZWZ0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b3BMZWZ0LnBsdXMoMCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBib3R0b21SaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9wUmlnaHQucGx1cygwLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9yaWdpbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI29yaWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb3JpZ2luKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNvcmlnaW4gPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwib3JpZ2luXCIsICh0aGlzLiNvcmlnaW4gPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjMmRSZWN0YW5nbGVCb3VuZHM8QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihcclxuICBCYXNlOiBCLFxyXG4gIGRlZmF1bHRPcmlnaW46IE9yaWdpblxyXG4pIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlUmVjdGFuZ2xlQm91bmRzKEJhc2UsIGRlZmF1bHRPcmlnaW4pIHtcclxuICAgIHJlbmRlckNvbmljYWxHcmFkaWVudChcclxuICAgICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICBncmFkaWVudDogQ29uaWNhbEdyYWRpZW50XHJcbiAgICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgdGhpcy5jZW50ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckxpbmVhckdyYWRpZW50KFxyXG4gICAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgIGdyYWRpZW50OiBMaW5lYXJHcmFkaWVudFxyXG4gICAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgICBjb25zdCB7IHg6IHgwLCB5OiB5MCB9ID0gdGhpcy50b3BMZWZ0O1xyXG5cclxuICAgICAgY29uc3QgeyB4OiB4MSwgeTogeTEgfSA9IHRoaXMuYm90dG9tUmlnaHQ7XHJcblxyXG4gICAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgwLCB5MCwgeDEgLSB4MCwgeTEgLSB5MCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN2Z1JlY3RhbmdsZUJvdW5kczxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KFxyXG4gIEJhc2U6IEIsXHJcbiAgZGVmYXVsdE9yaWdpbjogT3JpZ2luXHJcbikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGV4dGVuZFNWR09mZnNldChcclxuICAgIGV4dGVuZFNWR0RpbWVuc2lvbnMoYmFzZVJlY3RhbmdsZUJvdW5kcyhCYXNlLCBkZWZhdWx0T3JpZ2luKSlcclxuICApIHtcclxuICAgIF91cGRhdGVPZmZzZXQoKSB7XHJcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy50b3BMZWZ0O1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInhcIiwgeC50b1N0cmluZygpKTtcclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIHkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9yaWdpbigpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLm9yaWdpbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb3JpZ2luKHZhbHVlKSB7XHJcbiAgICAgIHN1cGVyLm9yaWdpbiA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlT2Zmc2V0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gXCIuLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4uL2NsYXNzZXMvY29sb3JcIjtcclxuaW1wb3J0IHtcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgRHJhd1N0eWxlLFxyXG4gIEdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG59IGZyb20gXCIuLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvY2FudmFzXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmFzZVJlbmRlcmFibGUgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcblxyXG5mdW5jdGlvbiBiYXNlU3Ryb2tlPEIgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJzdHJva2VcIixcclxuICAgICAgXCJsaW5lLXdpZHRoXCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNzdHJva2U6IERyYXdTdHlsZSB8IG51bGwgPSBudWxsO1xyXG4gICAgI2xpbmVXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaWR0aCBpbiBwaXhlbHMgZm9yIGRyYXdpbmcgbGluZXMuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHIgbGluZS13aWR0aFxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGxpbmVXaWR0aCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2xpbmVXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbGluZVdpZHRoKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNsaW5lV2lkdGggPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwibGluZVdpZHRoXCIsICh0aGlzLiNsaW5lV2lkdGggPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlbmRlcmluZyBzdHlsZSBmb3IgbGluZXMuIFRoaXMgbWF5IGJlIGEgY29sb3Igb3IgZ3JhZGllbnQuXHJcbiAgICAgKiBXaGVuIHNldCB0byBudWxsLCB0aGUgcGFyZW50IGVsZW1lbnQncyBzdHlsZSBpcyB1c2VkLiBXaGVuXHJcbiAgICAgKiBzZXQgdG8gXCJub25lXCIsIG5vIGxpbmVzIHdpbGwgYmUgZHJhd24uXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBzdHJva2UoKTogRHJhd1N0eWxlIHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzdHJva2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0cm9rZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jc3Ryb2tlID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuI3N0cm9rZSBpbnN0YW5jZW9mIENvbG9yICYmXHJcbiAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBDb2xvciAmJlxyXG4gICAgICAgIHRoaXMuI3N0cm9rZS5lcXVhbHModmFsdWUpXHJcbiAgICAgIClcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXHJcbiAgICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgICAgKHRoaXMuI3N0cm9rZSA9IHZhbHVlID09PSBcIm5vbmVcIiA/IHZhbHVlIDogQ29sb3IuZnJvbVN0cmluZyh2YWx1ZSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgZWxzZSB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic3Ryb2tlXCIsICh0aGlzLiNzdHJva2UgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICkge1xyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB0aGlzLnN0cm9rZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN0cm9rZVZhbHVlID0gYXR0cmlidXRlUGFyc2VyLkZpbGxTdHJva2VTdHlsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYgKHN0cm9rZVZhbHVlICE9PSBcImdyYWRpZW50XCIpIHRoaXMuc3Ryb2tlID0gc3Ryb2tlVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBcImxpbmUtd2lkdGhcIjpcclxuICAgICAgICAgIHRoaXMubGluZVdpZHRoID1cclxuICAgICAgICAgICAgbmV3VmFsdWUgPT09IG51bGwgPyBudWxsIDogYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGMyZFN0cm9rZTxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgU3Ryb2tlYWJsZSBleHRlbmRzIGJhc2VTdHJva2UoQmFzZSkge1xyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgY29udGV4dCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5zdHJva2UgIT09IFwibm9uZVwiICYmIHRoaXMuc3Ryb2tlICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3Ryb2tlIGluc3RhbmNlb2YgQ29sb3IpXHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdHJva2UudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIEdyYWRpZW50KSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zdHJva2UgaW5zdGFuY2VvZiBDb25pY2FsR3JhZGllbnQpIHtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMucmVuZGVyQ29uaWNhbEdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgdGhpcy5zdHJva2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHJva2UgaW5zdGFuY2VvZiBMaW5lYXJHcmFkaWVudClcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMucmVuZGVyTGluZWFyR3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICB0aGlzLnN0cm9rZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgZWxzZSBpZiAodGhpcy5zdHJva2UgaW5zdGFuY2VvZiBSYWRpYWxHcmFkaWVudClcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMucmVuZGVyUmFkaWFsR3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICB0aGlzLnN0cm9rZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMubGluZVdpZHRoICE9PSBudWxsKSBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyUmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgaWYgKHRoaXMuc3Ryb2tlICE9PSBcIm5vbmVcIikgY2FudmFzMkQuY29udGV4dC5zdHJva2UoKTtcclxuXHJcbiAgICAgIHN1cGVyLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnU3Ryb2tlPEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2VTdHJva2UoQmFzZSkge1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zdHJva2UgaW5zdGFuY2VvZiBHcmFkaWVudCkgdGhpcy4jc3Ryb2tlR3JhZGllbnQodGhpcy5zdHJva2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsaW5lV2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5saW5lV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxpbmVXaWR0aCh2YWx1ZSkge1xyXG4gICAgICBpZiAoc3VwZXIubGluZVdpZHRoID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIubGluZVdpZHRoID0gdmFsdWU7XHJcblxyXG4gICAgICBjb25zdCBsaW5lV2lkdGggPSBzdXBlci5saW5lV2lkdGg7XHJcblxyXG4gICAgICBpZiAobGluZVdpZHRoID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLl9zZXRTdHlsZUF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBsaW5lV2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0cm9rZSgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLnN0cm9rZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3Ryb2tlKHZhbHVlKSB7XHJcbiAgICAgIGlmIChzdXBlci5zdHJva2U/LnRvU3RyaW5nKCkgPT09IHZhbHVlPy50b1N0cmluZygpKSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci5zdHJva2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHsgc3Ryb2tlIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHN0cm9rZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKHN0cm9rZSBpbnN0YW5jZW9mIENvbG9yKVxyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlQXR0cmlidXRlKFwic3Ryb2tlXCIsIHN0cm9rZS50b1N0cmluZygpKTtcclxuICAgICAgZWxzZSBpZiAoc3Ryb2tlIGluc3RhbmNlb2YgR3JhZGllbnQpIHRoaXMuI3N0cm9rZUdyYWRpZW50KHN0cm9rZSk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0cm9rZUdyYWRpZW50KGdyYWRpZW50OiBHcmFkaWVudCkge1xyXG4gICAgICBjb25zdCB7IHN2Z0NvbnRhaW5lckNvbnRyb2xsZXIgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoc3ZnQ29udGFpbmVyQ29udHJvbGxlciA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgZ3JhZGllbnRJZCA9IHN2Z0NvbnRhaW5lckNvbnRyb2xsZXIuX2RlZmluZUdyYWRpZW50KGdyYWRpZW50KTtcclxuXHJcbiAgICAgIHRoaXMuX3NldFN0eWxlQXR0cmlidXRlKFwic3Ryb2tlXCIsIGB1cmwoIyR7Z3JhZGllbnRJZH0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zdHlsZUF0dHJpYnV0ZXMoKTogeyBbS2V5IGluIGtleW9mIHRoaXNdPzogc3RyaW5nIH0ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN1cGVyLl9zdHlsZUF0dHJpYnV0ZXMsXHJcbiAgICAgICAgc3Ryb2tlOiBcInN0cm9rZVwiLFxyXG4gICAgICAgIGxpbmVXaWR0aDogXCJzdHJva2Utd2lkdGhcIixcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEFuZ2xlIH0gZnJvbSBcIi4uL2NsYXNzZXMvYW5nbGVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQsIFZlY3RvcjJEQmFzZSB9IGZyb20gXCIuLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvY2FudmFzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSxcclxuICBDYW52YXMyRFNoYXBlUGFydFJlbmRlcmFibGUsXHJcbiAgQ2FudmFzMkRTdGFuZGFsb25lUmVuZGVyYWJsZSxcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IGlzUmVhZE9ubHkgfSBmcm9tIFwiLi4vdXRsaXRpZXMvcmVhZE9ubHlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlVHJhbnNmb3JtPEIgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgQmFzZVRyYW5zZm9ybSBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAgIC4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgICBcImFuZ2xlXCIsXHJcbiAgICAgIFwiYW5ndWxhci12ZWxvY2l0eVwiLFxyXG4gICAgICBcImFuY2hvclwiLFxyXG4gICAgICBcInNjYWxlXCIsXHJcbiAgICAgIFwidmVsb2NpdHlcIixcclxuICAgIF07XHJcblxyXG4gICAgI2FuY2hvciA9IFZlY3RvcjJELnplcm8oKTtcclxuICAgICNhbmdsZSA9IEFuZ2xlLnJhZGlhbnMoMCk7XHJcbiAgICAjYW5ndWxhclZlbG9jaXR5ID0gQW5nbGUucmFkaWFucygwKTtcclxuICAgICNzY2FsZSA9IFZlY3RvcjJELm9uZSgpO1xyXG4gICAgI3ZlbG9jaXR5ID0gVmVjdG9yMkQuemVybygpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgdGhpcy4jYW5jaG9yLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI2FuY2hvckNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHRoaXMuI2FuZ2xlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI2FuZ2xlQ2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgdGhpcy4jYW5ndWxhclZlbG9jaXR5LmFkZENoYW5nZUxpc3RlbmVyKFxyXG4gICAgICAgIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eUNoYW5nZUxpc3RlbmVyXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLiNzY2FsZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNzY2FsZUNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHRoaXMuI3ZlbG9jaXR5LmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI3ZlbG9jaXR5Q2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICNhbmdsZUNoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxudW1iZXI+ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYW5nbGVcIiwgdGhpcy4jYW5nbGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb2Nrd2lzZSByb3RhdGlvbiBvZiB0aGUgZWxlbWVudCBhcm91bmQgaXRzIGFuY2hvci5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGFuZ2xlKCk6IEFuZ2xlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2FuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhbmdsZSh2YWx1ZSkge1xyXG4gICAgICB0aGlzLiNhbmdsZS5yZXBsYWNlKCh0aGlzLiNhbmdsZSA9IHZhbHVlKSwgdGhpcy4jYW5nbGVDaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgI2FuZ3VsYXJWZWxvY2l0eUNoYW5nZWRUaW1lID0gLTE7XHJcblxyXG4gICAgI2FuZ3VsYXJWZWxvY2l0eUNoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxudW1iZXI+ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLiNhbmd1bGFyVmVsb2NpdHlDaGFuZ2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImFuZ3VsYXJWZWxvY2l0eVwiLCB0aGlzLmFuZ3VsYXJWZWxvY2l0eSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9ja3dpc2Ugcm90YXRpb24gcGVyIHNlY29uZC5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0ciBhbmd1bGFyLXZlbG9jaXR5XHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgYW5ndWxhclZlbG9jaXR5KCk6IEFuZ2xlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYW5ndWxhclZlbG9jaXR5KHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eS5yZXBsYWNlKFxyXG4gICAgICAgICh0aGlzLiNhbmd1bGFyVmVsb2NpdHkgPSB2YWx1ZSksXHJcbiAgICAgICAgdGhpcy4jYW5ndWxhclZlbG9jaXR5Q2hhbmdlTGlzdGVuZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIHBhcmVudCdzIGFuY2hvci5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGFuY2hvcigpOiBWZWN0b3IyRCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNhbmNob3I7XHJcbiAgICB9XHJcblxyXG4gICAgI2FuY2hvckNoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxWZWN0b3IyREJhc2U+ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYW5jaG9yXCIsIHRoaXMuI2FuY2hvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldCBhbmNob3IodmFsdWUpIHtcclxuICAgICAgdGhpcy4jYW5jaG9yLnJlcGxhY2UoKHRoaXMuI2FuY2hvciA9IHZhbHVlKSwgdGhpcy4jYW5jaG9yQ2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9hcHBseU1vdmVtZW50KGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuI2FuZ3VsYXJWZWxvY2l0eS5yYWRpYW5zICE9PSAwKSB7XHJcbiAgICAgICAgY29uc3QgYW5nbGVDaGFuZ2UgPVxyXG4gICAgICAgICAgKHRoaXMuI2FuZ3VsYXJWZWxvY2l0eVt0aGlzLiNhbmdsZS51bml0XSAqXHJcbiAgICAgICAgICAgIE1hdGgubWluKGRlbHRhVGltZSwgbm93IC0gdGhpcy4jYW5ndWxhclZlbG9jaXR5Q2hhbmdlZFRpbWUpKSAvXHJcbiAgICAgICAgICAxMDAwO1xyXG5cclxuICAgICAgICBpZiAoYW5nbGVDaGFuZ2UgPT09IDApIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJhbmdsZVwiLCB0aGlzLiNhbmdsZSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmFuZ2xlW3RoaXMuI2FuZ2xlLnVuaXRdICs9IGFuZ2xlQ2hhbmdlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy4jdmVsb2NpdHkueCAhPT0gMCB8fCB0aGlzLiN2ZWxvY2l0eS55ICE9PSAwKSB7XHJcbiAgICAgICAgY29uc3QgdmVsb2NpdHlEZWx0YSA9XHJcbiAgICAgICAgICBNYXRoLm1pbihkZWx0YVRpbWUsIG5vdyAtIHRoaXMuI3ZlbG9jaXR5Q2hhbmdlZFRpbWUpIC8gMTAwMDtcclxuXHJcbiAgICAgICAgaWYgKGlzUmVhZE9ubHkodGhpcy4jYW5jaG9yLCBcInhcIikgfHwgaXNSZWFkT25seSh0aGlzLiNhbmNob3IsIFwieVwiKSlcclxuICAgICAgICAgIHRoaXMuI2FuY2hvciA9IHRoaXMuI2FuY2hvci5jb3B5KCk7XHJcblxyXG4gICAgICAgIGlmICh2ZWxvY2l0eURlbHRhID09PSAwKSB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYW5jaG9yXCIsIHRoaXMuI2FuY2hvcik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGhpcy5tb3ZlQW5jaG9yKFxyXG4gICAgICAgICAgICB0aGlzLiN2ZWxvY2l0eS54ICogdmVsb2NpdHlEZWx0YSxcclxuICAgICAgICAgICAgdGhpcy4jdmVsb2NpdHkueSAqIHZlbG9jaXR5RGVsdGFcclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICBjYXNlIFwiYW5nbGVcIjpcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzLmFuZ2xlLnRvU3RyaW5nKCkpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IGF0dHJpYnV0ZVBhcnNlci5BbmdsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImFuZ3VsYXItdmVsb2NpdHlcIjpcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzLmFuZ3VsYXJWZWxvY2l0eS50b1N0cmluZygpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5ID0gYXR0cmlidXRlUGFyc2VyLkFuZ2xlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYW5jaG9yXCI6XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiNhbmNob3IudG9TdHJpbmcoKSAhPT0gbmV3VmFsdWUpXHJcbiAgICAgICAgICAgICAgdGhpcy5hbmNob3IgPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJzY2FsZVwiOlxyXG4gICAgICAgICAgICBjb25zdCBuZXdTY2FsZSA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy4jc2NhbGUuZXF1YWxzKG5ld1NjYWxlKSkgdGhpcy5zY2FsZSA9IG5ld1NjYWxlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJ2ZWxvY2l0eVwiOlxyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlQW5jaG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgIGlmICh4ID09PSAwICYmIHkgPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuI2FuY2hvci54ICs9IHg7XHJcbiAgICAgIHRoaXMuI2FuY2hvci55ICs9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYW5nbGUgLSBBbmdsZSB0byB0dXJuIHRoZSBlbGVtZW50IGluIHRoZSBjbG9ja3dpc2UgZGlyZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByb3RhdGVDbG9ja3dpc2UoYW5nbGU6IEFuZ2xlKSB7XHJcbiAgICAgIHRoaXMuYW5nbGUgPSBBbmdsZS5yYWRpYW5zKHRoaXMuI2FuZ2xlLnJhZGlhbnMgKyBhbmdsZS5yYWRpYW5zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBhbmdsZSAtIEFuZ2xlIHRvIHR1cm4gdGhlIGVsZW1lbnQgaW4gdGhlIGNvdW50ZXJjbG9ja3dpc2UgZGlyZWN0aW9uLlxyXG4gICAgICovXHJcbiAgICByb3RhdGVDb3VudGVyY2xvY2t3aXNlKGFuZ2xlOiBBbmdsZSkge1xyXG4gICAgICB0aGlzLmFuZ2xlID0gQW5nbGUucmFkaWFucyh0aGlzLiNhbmdsZS5yYWRpYW5zIC0gYW5nbGUucmFkaWFucyk7XHJcbiAgICB9XHJcblxyXG4gICAgI3NjYWxlQ2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFZlY3RvcjJEQmFzZT4gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzY2FsZVwiLCB0aGlzLiNzY2FsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTXVsdGlwbGllcyB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCBpbiB0aGUgeCBhbmQgeSBkaXJlY3Rpb24uIFRoaXMgYWxzbyBhZmZlY3RzXHJcbiAgICAgKiBsaW5lIHdpZHRoLiBTZXR0aW5nIHNjYWxlIHRvIGEgbnVtYmVyIHdpbGwgc2V0IGJvdGggdGhlIHggYW5kIHkgc2NhbGUgdG8gdGhhdFxyXG4gICAgICogdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBzY2FsZSgpOiBWZWN0b3IyRCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2NhbGUodmFsdWU6IFZlY3RvcjJEIHwgbnVtYmVyKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBjb25zdCB2ZWN0b3JWYWx1ZSA9IG5ldyBWZWN0b3IyRCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiNzY2FsZS5lcXVhbHModmVjdG9yVmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzY2FsZVwiLCAodGhpcy4jc2NhbGUgPSB2ZWN0b3JWYWx1ZSkpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuI3NjYWxlLnJlcGxhY2UoKHRoaXMuI3NjYWxlID0gdmFsdWUpLCB0aGlzLiNzY2FsZUNoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAjdmVsb2NpdHlDaGFuZ2VkVGltZSA9IC0xO1xyXG5cclxuICAgICN2ZWxvY2l0eUNoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxWZWN0b3IyREJhc2U+ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLiN2ZWxvY2l0eUNoYW5nZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwidmVsb2NpdHlcIiwgdGhpcy4jdmVsb2NpdHkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuY2hvciBtb3ZlbWVudCBwZXIgc2Vjb25kLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgdmVsb2NpdHkoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jdmVsb2NpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZlbG9jaXR5KHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuI3ZlbG9jaXR5LnJlcGxhY2UoXHJcbiAgICAgICAgKHRoaXMuI3ZlbG9jaXR5ID0gdmFsdWUpLFxyXG4gICAgICAgIHRoaXMuI3ZlbG9jaXR5Q2hhbmdlTGlzdGVuZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjMmRUcmFuc2Zvcm08XHJcbiAgQiBleHRlbmRzIFJldHVyblR5cGU8dHlwZW9mIGJhc2VUcmFuc2Zvcm08dHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+PlxyXG4+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgQzJEVHJhbnNmb3JtIGV4dGVuZHMgQmFzZSB7XHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMuYW5jaG9yLngsIHRoaXMuYW5jaG9yLnkpO1xyXG4gICAgICBjb250ZXh0LnJvdGF0ZSh0aGlzLmFuZ2xlLnJhZGlhbnMpO1xyXG4gICAgICBjb250ZXh0LnNjYWxlKHRoaXMuc2NhbGUueCwgdGhpcy5zY2FsZS55KTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlclJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIHRoaXMuX2FwcGx5TW92ZW1lbnQoY2FudmFzMkQuZGVsdGFUaW1lKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDMkRUcmFuc2Zvcm1lZCA9IFJldHVyblR5cGU8dHlwZW9mIGMyZFRyYW5zZm9ybT47XHJcblxyXG5leHBvcnQgY2xhc3MgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkIGV4dGVuZHMgYzJkVHJhbnNmb3JtKFxyXG4gIGJhc2VUcmFuc2Zvcm0oQ2FudmFzMkRTdGFuZGFsb25lUmVuZGVyYWJsZSlcclxuKSB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkIGV4dGVuZHMgYzJkVHJhbnNmb3JtKFxyXG4gIGJhc2VUcmFuc2Zvcm0oQ2FudmFzMkRTaGFwZVBhcnRSZW5kZXJhYmxlKVxyXG4pIHt9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnVHJhbnNmb3JtPEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBTVkdDb250cm9sbGVyVHJhbnNmb3JtIGV4dGVuZHMgYmFzZVRyYW5zZm9ybShCYXNlKSB7XHJcbiAgICBnZXQgYW5jaG9yKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuYW5jaG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhbmNob3IodmFsdWUpIHtcclxuICAgICAgY29uc3QgY2hhbmdlID0gIXN1cGVyLmFuY2hvci5lcXVhbHModmFsdWUpO1xyXG5cclxuICAgICAgc3VwZXIuYW5jaG9yID0gdmFsdWU7XHJcblxyXG4gICAgICBpZiAoY2hhbmdlKSB0aGlzLiN1cGRhdGVUcmFuc2Zvcm1BdHRyaWJ1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAjYW5nbGVDaGFuZ2VMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgdGhpcy4jdXBkYXRlVHJhbnNmb3JtQXR0cmlidXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBhbmdsZSgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhbmdsZSh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBjaGFuZ2UgPSAhc3VwZXIuYW5nbGUuZXF1YWxzKHZhbHVlKTtcclxuXHJcbiAgICAgIHN1cGVyLmFuZ2xlID0gdmFsdWU7XHJcblxyXG4gICAgICBzdXBlci5hbmdsZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNhbmdsZUNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIGlmIChjaGFuZ2UpIHRoaXMuI3VwZGF0ZVRyYW5zZm9ybUF0dHJpYnV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgICAgdGhpcy4jdXBkYXRlVHJhbnNmb3JtQXR0cmlidXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3VwZGF0ZVRyYW5zZm9ybUF0dHJpYnV0ZSgpIHtcclxuICAgICAgY29uc3QgdHJhbnNmb3JtID0gbmV3IERPTU1hdHJpeCgpXHJcbiAgICAgICAgLnRyYW5zbGF0ZVNlbGYodGhpcy5hbmNob3IueCwgdGhpcy5hbmNob3IueSlcclxuICAgICAgICAucm90YXRlU2VsZih0aGlzLmFuZ2xlLmRlZ3JlZXMpXHJcbiAgICAgICAgLnNjYWxlU2VsZih0aGlzLnNjYWxlLngsIHRoaXMuc2NhbGUueSk7XHJcblxyXG4gICAgICBpZiAodHJhbnNmb3JtLmlzSWRlbnRpdHkpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgZSwgZiB9ID0gdHJhbnNmb3JtO1xyXG5cclxuICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJ0cmFuc2Zvcm1cIixcclxuICAgICAgICBgbWF0cml4KCR7YX0gJHtifSAke2N9ICR7ZH0gJHtlfSAke2Z9KWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGRpbWVuc2lvbnMgfSBmcm9tIFwiLi9kaW1lbnNpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmlld0JveDxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBkaW1lbnNpb25zKEJhc2UpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3Jlc2l6ZVZpZXdCb3goKSB7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwidmlld0JveFwiLFxyXG4gICAgICAgIGAkezB9ICR7MH0gJHt0aGlzLndpZHRofSAke3RoaXMuaGVpZ2h0fWBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBzdXBlci5oZWlnaHQpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLmhlaWdodCA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fcmVzaXplVmlld0JveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB3aWR0aCh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHN1cGVyLndpZHRoKSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci53aWR0aCA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fcmVzaXplVmlld0JveCgpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBjMmRSZWN0YW5nbGVCb3VuZHMgfSBmcm9tIFwiLi9yZWN0YW5nbGVCb3VuZHNcIjtcclxuaW1wb3J0IHsgQzJEVHJhbnNmb3JtZWQgfSBmcm9tIFwiLi90cmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJzVmlzdWFsTWVkaWE8XHJcbiAgQiBleHRlbmRzIEMyRFRyYW5zZm9ybWVkLFxyXG4gIFQgZXh0ZW5kcyBcImltZ1wiIHwgXCJ2aWRlb1wiXHJcbj4oQmFzZTogQiwgbWVkaWFUYWc6IFQpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBjMmRSZWN0YW5nbGVCb3VuZHMoQmFzZSwgXCJ0b3BMZWZ0XCIpIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcInNvdXJjZVwiXTtcclxuXHJcbiAgICAjbWVkaWFFbGVtZW50OiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF07XHJcbiAgICAjd2lkdGhTZXQgPSBmYWxzZTtcclxuICAgICNoZWlnaHRTZXQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBzdXBlciguLi5hcmdzKTtcclxuXHJcbiAgICAgIHRoaXMuI21lZGlhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobWVkaWFUYWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcInNvdXJjZVwiOlxyXG4gICAgICAgICAgdGhpcy5zb3VyY2UgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSBcIndpZHRoXCI6XHJcbiAgICAgICAgICB0aGlzLndpZHRoID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNhc2UgXCJoZWlnaHRcIjpcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgdGhpcy5jYW52YXMud2FpdEZvcihcclxuICAgICAgICB0aGlzLiNtZWRpYUVsZW1lbnQsXHJcbiAgICAgICAgbWVkaWFUYWcgPT09IFwidmlkZW9cIiA/IFwiY2FucGxheVwiIDogXCJsb2FkXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWFFbGVtZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWVkaWFFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVVJMIG9yIGxvY2FsIHBhdGggdG8gdGhlIG1lZGlhIGZpbGUgc291cmNlIGZvciB0aGlzIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBzb3VyY2UoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudC5zcmM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNvdXJjZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHRoaXMuI21lZGlhRWxlbWVudC5zcmMpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzb3VyY2VcIiwgKHRoaXMuI21lZGlhRWxlbWVudC5zcmMgPSB2YWx1ZSkpO1xyXG5cclxuICAgICAgdGhpcy4jbWVkaWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgbWVkaWFUYWcgPT09IFwiaW1nXCIgPyBcImxvYWRcIiA6IFwiY2FucGxheVwiLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLiN3aWR0aFNldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4jaGVpZ2h0U2V0KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aFJhdGlvID0gdGhpcy53aWR0aCAvIHRoaXMubWVkaWFXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tZWRpYUhlaWdodCAqIHdpZHRoUmF0aW87XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuI2hlaWdodFNldCkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHRSYXRpbyA9IHRoaXMuaGVpZ2h0IC8gdGhpcy5tZWRpYUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1lZGlhV2lkdGggKiBoZWlnaHRSYXRpbztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1lZGlhV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tZWRpYUhlaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIGNhbnZhczJELmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuI21lZGlhRWxlbWVudCxcclxuICAgICAgICB0aGlzLnRvcExlZnQueCxcclxuICAgICAgICB0aGlzLnRvcExlZnQueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjYW52YXMyRC5jb250ZXh0LnJlY3QoXHJcbiAgICAgICAgdGhpcy50b3BMZWZ0LngsXHJcbiAgICAgICAgdGhpcy50b3BMZWZ0LnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lZGlhV2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNtZWRpYUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50XHJcbiAgICAgICAgPyB0aGlzLiNtZWRpYUVsZW1lbnQubmF0dXJhbFdpZHRoXHJcbiAgICAgICAgOiB0aGlzLiNtZWRpYUVsZW1lbnQudmlkZW9XaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNtZWRpYUVsZW1lbnQud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJvdW5kZWRWYWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpO1xyXG5cclxuICAgICAgaWYgKHJvdW5kZWRWYWx1ZSA9PT0gdGhpcy53aWR0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy4jd2lkdGhTZXQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIndpZHRoXCIsICh0aGlzLiNtZWRpYUVsZW1lbnQud2lkdGggPSByb3VuZGVkVmFsdWUpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiNoZWlnaHRTZXQgfHwgdGhpcy5tZWRpYVdpZHRoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCB3aWR0aFJhdGlvID0gdmFsdWUgLyB0aGlzLm1lZGlhV2lkdGg7XHJcblxyXG4gICAgICB0aGlzLmhlaWdodCAqPSB3aWR0aFJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZWRpYUhlaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnRcclxuICAgICAgICA/IHRoaXMuI21lZGlhRWxlbWVudC5uYXR1cmFsSGVpZ2h0XHJcbiAgICAgICAgOiB0aGlzLiNtZWRpYUVsZW1lbnQudmlkZW9IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudC5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xyXG4gICAgICBjb25zdCByb3VuZGVkVmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuXHJcbiAgICAgIGlmIChyb3VuZGVkVmFsdWUgPT09IHRoaXMuaGVpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLiNoZWlnaHRTZXQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImhlaWdodFwiLCAodGhpcy4jbWVkaWFFbGVtZW50LmhlaWdodCA9IHJvdW5kZWRWYWx1ZSkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuI3dpZHRoU2V0IHx8IHRoaXMubWVkaWFIZWlnaHQgPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IGhlaWdodFJhdGlvID0gdmFsdWUgLyB0aGlzLm1lZGlhSGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy53aWR0aCAqPSBoZWlnaHRSYXRpbztcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEFuZ2xlLCBBbmdsZVVuaXRTaG9ydCB9IGZyb20gXCIuLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IEJvcmRlclJhZGl1cyB9IGZyb20gXCIuLi9jbGFzc2VzL2JvcmRlclJhZGl1c1wiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuLi9jbGFzc2VzL2NvbG9yXCI7XHJcbmltcG9ydCB7IERyYXdTdHlsZSB9IGZyb20gXCIuLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuXHJcbnR5cGUgQXR0cmlidXRlVHlwZU1hcCA9IHtcclxuICBudW1iZXI6IG51bWJlcjtcclxuICBib29sZWFuOiBib29sZWFuO1xyXG4gIEJvcmRlclJhZGl1czogQm9yZGVyUmFkaXVzO1xyXG4gIENvbG9yOiBDb2xvcjtcclxuICBGaWxsU3Ryb2tlU3R5bGU6IERyYXdTdHlsZTtcclxuICBWZWN0b3IyRDogVmVjdG9yMkQ7XHJcbiAgQW5nbGU6IEFuZ2xlO1xyXG59O1xyXG5cclxudHlwZSBBdHRyaWJ1dGVUeXBlUGFyc2VyID0ge1xyXG4gIFtUeXBlIGluIGtleW9mIEF0dHJpYnV0ZVR5cGVNYXBdOiAoXHJcbiAgICBzdHJpbmdWYWx1ZTogc3RyaW5nXHJcbiAgKSA9PiBBdHRyaWJ1dGVUeXBlTWFwW1R5cGVdO1xyXG59O1xyXG5cclxuY29uc3QgYW5nbGVNYXRjaCA9IG5ldyBSZWdFeHAoXHJcbiAgYChbXFxcXGRcXFxcLl0rKVxcXFxzKigke09iamVjdC52YWx1ZXMoQW5nbGUudW5pdCkuam9pbihcInxcIil9KWBcclxuKTtcclxuXHJcbmNvbnN0IGluY2x1ZGVzTnVtYmVycyA9IChzdHI6IHN0cmluZykgPT4gc3RyLm1hdGNoKC9cXGQvKSAhPT0gbnVsbDtcclxuXHJcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVQYXJzZXI6IEF0dHJpYnV0ZVR5cGVQYXJzZXIgPSB7XHJcbiAgbnVtYmVyKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmdWYWx1ZSk7XHJcbiAgfSxcclxuICBib29sZWFuKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHN0cmluZ1ZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgXCJ0cnVlXCI6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNhc2UgXCJmYWxzZVwiOlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSAke3N0cmluZ1ZhbHVlfSBhcyBib29sZWFuLmApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgQm9yZGVyUmFkaXVzKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBjb25zdCBhcmdzID0gc3RyaW5nVmFsdWUuc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgIGNvbnN0IFthcmcxLCBhcmcyLCBhcmczLCBhcmc0XSA9IGFyZ3MubWFwKGF0dHJpYnV0ZVBhcnNlci5udW1iZXIpO1xyXG5cclxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IG5ldyBCb3JkZXJSYWRpdXMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCk7XHJcblxyXG4gICAgcmV0dXJuIGJvcmRlclJhZGl1cztcclxuICB9LFxyXG4gIENvbG9yKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBjb25zdCBhcmdzID0gc3RyaW5nVmFsdWUuc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgIGNvbnN0IG51bWJlcnMgPSBhcmdzLm1hcChhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKTtcclxuXHJcbiAgICBzd2l0Y2ggKG51bWJlcnMubGVuZ3RoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gaXNOYU4obnVtYmVyc1swXSkgPyBuZXcgQ29sb3IoYXJnc1swXSkgOiBuZXcgQ29sb3IobnVtYmVyc1swXSk7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0pO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihudW1iZXJzWzBdLCBudW1iZXJzWzFdLCBudW1iZXJzWzJdKTtcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIGBGb3VuZCAke251bWJlcnMubGVuZ3RofSBhcmd1bWVudHMgcGFzc2VkIHRvIENvbG9yIGF0dHJpYnV0ZSwgYnV0IHRoZSBtYXhpbXVtIGlzIDRgXHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0sIG51bWJlcnNbM10pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgRmlsbFN0cm9rZVN0eWxlKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBpZiAoc3RyaW5nVmFsdWUgPT09IFwibm9uZVwiIHx8IHN0cmluZ1ZhbHVlID09PSBcImdyYWRpZW50XCIpXHJcbiAgICAgIHJldHVybiBzdHJpbmdWYWx1ZTtcclxuXHJcbiAgICByZXR1cm4gYXR0cmlidXRlUGFyc2VyLkNvbG9yKHN0cmluZ1ZhbHVlKTtcclxuICB9LFxyXG4gIFZlY3RvcjJEKHN0cmluZ1ZhbHVlKSB7XHJcbiAgICBjb25zdCBudW1iZXJzID0gc3RyaW5nVmFsdWUuc3BsaXQoXCIsXCIpLm1hcChhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKTtcclxuXHJcbiAgICBpZiAobnVtYmVycy5zb21lKE51bWJlci5pc05hTikpIHRocm93IG5ldyBFcnJvcihgTmFOOiAke3N0cmluZ1ZhbHVlfWApO1xyXG5cclxuICAgIHN3aXRjaCAobnVtYmVycy5sZW5ndGgpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQoKTtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQobnVtYmVyc1swXSk7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICBgRm91bmQgJHtudW1iZXJzLmxlbmd0aH0gYXJndW1lbnRzIHBhc3NlZCB0byBWZWN0bzJEIGF0dHJpYnV0ZSwgYnV0IHRoZSBtYXhpbXVtIGlzIDJgXHJcbiAgICAgICAgKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKG51bWJlcnNbMF0sIG51bWJlcnNbMV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgQW5nbGUoc3RyaW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSBzdHJpbmdWYWx1ZS5tYXRjaChhbmdsZU1hdGNoKTtcclxuXHJcbiAgICBpZiAoYXJncyA9PT0gbnVsbClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbmdsZSBhcmd1bWVudHMgY291bGQgbm90IGJlIHBhcnNlZDogJHtzdHJpbmdWYWx1ZX1gKTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIoYXJnc1sxXSk7XHJcblxyXG4gICAgY29uc3QgdW5pdCA9IGFyZ3NbMl0gYXMgQW5nbGVVbml0U2hvcnQ7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBBbmdsZSh1bml0LCB2YWx1ZSk7XHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNhbWVsVG9LZWJhYkNhc2UgPSAoY2FtZWw6IHN0cmluZykgPT5cclxuICBjYW1lbC5yZXBsYWNlKFxyXG4gICAgLyguKShbQS1aXSkvZyxcclxuICAgIChfLCBiZWZvcmVDaGFyYWN0ZXI6IHN0cmluZywgdXBwZXJDaGFyYWN0ZXI6IHN0cmluZykgPT5cclxuICAgICAgYCR7YmVmb3JlQ2hhcmFjdGVyfS0ke3VwcGVyQ2hhcmFjdGVyLnRvTG93ZXJDYXNlKCl9YFxyXG4gICk7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc1JlYWRPbmx5KG9iajoge30sIHByb3BlcnR5S2V5OiBQcm9wZXJ0eUtleSkge1xyXG4gIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcGVydHlLZXkpO1xyXG5cclxuICBpZiAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcclxuXHJcbiAgICBpZiAocHJvdG90eXBlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYENvdWxkIG5vdCBmaW5kIHByb3BlcnR5IHdpdGgga2V5OiAke1N0cmluZyhwcm9wZXJ0eUtleSl9YFxyXG4gICAgICApO1xyXG5cclxuICAgIHJldHVybiBpc1JlYWRPbmx5KHByb3RvdHlwZSwgcHJvcGVydHlLZXkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRlc2NyaXB0b3Iud3JpdGFibGUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIGRlc2NyaXB0b3Iuc2V0ID09PSB1bmRlZmluZWQ7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvY2FudmFzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRSZWN0YW5nbGUsXHJcbiAgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSxcclxufSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvcmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vY2xhc3Nlcy9jb2xvclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQW5nbGUgfSBmcm9tIFwiLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEVGV4dCB9IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC90ZXh0XCI7XHJcbmltcG9ydCB7IFVuaXRzIH0gZnJvbSBcIi4vY2xhc3Nlcy91bml0c1wiO1xyXG5pbXBvcnQgeyBTdGF0ZSwgY3JlYXRlU3RhdGUgfSBmcm9tIFwiLi9jbGFzc2VzL3N0YXRlXCI7XHJcbmltcG9ydCB7IENhbnZhczJETGluZSwgQ2FudmFzMkRTaGFwZUxpbmUgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvbGluZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRFNoYXBlIH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL3NoYXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRFbGxpcHNlLFxyXG4gIENhbnZhczJEU2hhcGVFbGxpcHNlLFxyXG59IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC9lbGxpcHNlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmV6aWVyLCBDYW52YXMyRFNoYXBlQmV6aWVyIH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL2JlemllclwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREltYWdlIH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL2ltYWdlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEVmlkZW8gfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvdmlkZW9cIjtcclxuaW1wb3J0IHtcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL2MyZEJhc2VcIjtcclxuaW1wb3J0IHsgU2hhZG93IH0gZnJvbSBcIi4vY2xhc3Nlcy9zaGFkb3dcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCIuL2VsZW1lbnRzL2RvY3VtZW50L2RvbUJhc2VcIjtcclxuaW1wb3J0IHsgQm9yZGVyUmFkaXVzIH0gZnJvbSBcIi4vY2xhc3Nlcy9ib3JkZXJSYWRpdXNcIjtcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSBcIi4vY2xhc3Nlcy9yYW5kb21cIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBDU1NMZW5ndGhVbml0ID0gKHR5cGVvZiBVbml0cy5zaXplKVtrZXlvZiB0eXBlb2YgVW5pdHMuc2l6ZV07XHJcblxyXG5mdW5jdGlvbiByYW5nZShzdG9wOiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj47XHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0OiBudW1iZXIsIHN0b3A6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPjtcclxuZnVuY3Rpb24gcmFuZ2UoYXJnMTogbnVtYmVyLCBhcmcyPzogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+IHtcclxuICBjb25zdCBbc3RhcnQsIHN0b3BdID0gYXJnMiA9PT0gdW5kZWZpbmVkID8gWzAsIGFyZzFdIDogW2FyZzEsIGFyZzJdO1xyXG5cclxuICBjb25zdCBzdGVwID0gc3RvcCA+IHN0YXJ0ID8gMSA6IC0xO1xyXG5cclxuICBsZXQgdmFsdWUgPSBzdGFydDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpOiBJdGVyYXRvclJlc3VsdDxudW1iZXI+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGRvbmU6IHN0YXJ0ICsgc3RlcCA9PT0gc3RvcCxcclxuICAgIH07XHJcblxyXG4gICAgdmFsdWUgKz0gc3RlcDtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBuZXh0LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU11bHRpcGxlPFIgZXh0ZW5kcyBOb2RlPihcclxuICBjb3VudDogbnVtYmVyLFxyXG4gIGdlbmVyYXRvcjogKGluZGV4OiBudW1iZXIpID0+IFJcclxuKSB7XHJcbiAgcmV0dXJuIG5ldyBBcnJheShjb3VudCkuZmlsbCgwKS5tYXAoKF8sIGluZGV4KSA9PiBnZW5lcmF0b3IoaW5kZXgpKTtcclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBDdXN0b21FbGVtZW50UmVnaXN0cnkge1xyXG4gICAgZGVmaW5lPEUgZXh0ZW5kcyB0eXBlb2YgQzJEQmFzZT4odGFnOiBFW1widGFnXCJdLCBFbGVtZW50Q2xhc3M6IEUpOiB2b2lkO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLWNhbnZhc1wiLCBDYW52YXMyRENhbnZhc0VsZW1lbnQpO1xyXG5cclxuZXhwb3J0IHR5cGUgV2ViU3Bpbm5lckVsZW1lbnQgPSB7XHJcbiAgQ2FudmFzMkRDYW52YXNFbGVtZW50OiBDYW52YXMyRENhbnZhc0VsZW1lbnQ7XHJcbiAgQ2FudmFzMkRCZXppZXI6IENhbnZhczJEQmV6aWVyO1xyXG4gIENhbnZhczJERWxsaXBzZTogQ2FudmFzMkRFbGxpcHNlO1xyXG4gIENhbnZhczJESW1hZ2U6IENhbnZhczJESW1hZ2U7XHJcbiAgQ2FudmFzMkRMaW5lOiBDYW52YXMyRExpbmU7XHJcbiAgQ2FudmFzMkRSZWN0YW5nbGU6IENhbnZhczJEUmVjdGFuZ2xlO1xyXG4gIENhbnZhczJEU2hhcGU6IENhbnZhczJEU2hhcGU7XHJcbiAgQ2FudmFzMkRTaGFwZUJlemllcjogQ2FudmFzMkRTaGFwZUJlemllcjtcclxuICBDYW52YXMyRFNoYXBlRWxsaXBzZTogQ2FudmFzMkRTaGFwZUVsbGlwc2U7XHJcbiAgQ2FudmFzMkRTaGFwZUxpbmU6IENhbnZhczJEU2hhcGVMaW5lO1xyXG4gIENhbnZhczJEU2hhcGVSZWN0YW5nbGU6IENhbnZhczJEU2hhcGVSZWN0YW5nbGU7XHJcbiAgQ2FudmFzMkRUZXh0OiBDYW52YXMyRFRleHQ7XHJcbiAgQ2FudmFzMkRWaWRlbzogQ2FudmFzMkRWaWRlbztcclxufTtcclxuXHJcbnR5cGUgRWxlbWVudE1hcCA9IHtcclxuICBwYXJlbnRFbGVtZW50OiB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ7XHJcbiAgW25hbWU6IHN0cmluZ106IHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudCB8IEVsZW1lbnRNYXA7XHJcbn07XHJcblxyXG5jb25zdCBlbGVtZW50czogeyBbY2F0ZWdvcnk6IHN0cmluZ106IEVsZW1lbnRNYXAgfSA9IHtcclxuICBjYW52YXMyRDoge1xyXG4gICAgcGFyZW50RWxlbWVudDogQ2FudmFzMkRDYW52YXNFbGVtZW50LFxyXG4gICAgQ2FudmFzMkRCZXppZXIsXHJcbiAgICBzaGFwZToge1xyXG4gICAgICBwYXJlbnRFbGVtZW50OiBDYW52YXMyRFNoYXBlLFxyXG4gICAgICBDYW52YXMyREJlemllcixcclxuICAgICAgQ2FudmFzMkRTaGFwZUVsbGlwc2UsXHJcbiAgICAgIENhbnZhczJEU2hhcGVMaW5lLFxyXG4gICAgICBDYW52YXMyRFNoYXBlUmVjdGFuZ2xlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVNdWx0aXBsZSxcclxuICBCb3JkZXJSYWRpdXMsXHJcbiAgQ29sb3IsXHJcbiAgVmVjdG9yMkQsXHJcbiAgQW5nbGUsXHJcbiAgU3RhdGUsXHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIExpbmVhckdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG4gIFJhbmRvbSxcclxuICBTaGFkb3csXHJcbiAgY3JlYXRlU3RhdGUsXHJcbiAgY3JlYXRlUm9vdCxcclxuICBlbGVtZW50cyBhcyBFbGVtZW50cyxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9