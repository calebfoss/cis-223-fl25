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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViU3Bpbm5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBT2hDLE1BQU0sYUFBYSxHQUVmO0lBQ0YsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ2hCLElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLENBQUM7Q0FDUixDQUFDO0FBTUssTUFBTSxLQUFNLFNBQVEseUNBQWE7SUFHdEMsWUFBWSxJQUFvQixFQUFFLEtBQWE7UUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFM0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUxqQiw2QkFBZSxJQUFJLEdBQUcsRUFBMEMsRUFBQztRQU8vRCxJQUFJLElBQUksS0FBSyxLQUFLO1lBQUUsMkJBQUksMEJBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFvQkQ7O09BRUc7SUFFSCxJQUFJLE9BQU87UUFDVCxPQUFPLDJCQUFJLDZDQUFjLE1BQWxCLElBQUksRUFBZSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSztRQUNmLDJCQUFJLDZDQUFjLE1BQWxCLElBQUksRUFBZSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBRUgsUUFBUTtRQUNOLE1BQU0sZUFBZSxHQUFHLDJCQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQ2pCLGVBQWUsS0FBSyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQXVCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBSSwwQkFBYSxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXpELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpCLE9BQU8sV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUVILE1BQU0sQ0FBQyxPQUFPLENBQ1osS0FBYSxFQUNiLFFBQXdCLEVBQ3hCLE1BQXNCO1FBRXRCLE9BQU8sS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7Ozs7T0FLRztJQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBYTtRQUMxQixPQUFPLElBQUksRUFBSyxDQUFDLEVBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUVILE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDL0QsQ0FBQztJQUVEOztPQUVHO0lBRUgsSUFBSSxRQUFRO1FBQ1YsT0FBTywyQkFBSSw2Q0FBYyxNQUFsQixJQUFJLEVBQWUsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQUs7UUFDaEIsMkJBQUksNkNBQWMsTUFBbEIsSUFBSSxFQUFlLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWE7UUFDMUIsT0FBTyxJQUFJLEVBQUssQ0FBQyxFQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7SUFFSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBRWpDLDJCQUFJLDBCQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBRUgsSUFBSSxJQUFJO1FBQ04sT0FBTywyQkFBSSw2Q0FBYyxNQUFsQixJQUFJLEVBQWUsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWiwyQkFBSSw2Q0FBYyxNQUFsQixJQUFJLEVBQWUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUVILElBQUksSUFBSTtRQUNOLE1BQU0sZUFBZSxHQUFHLDJCQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FDZixlQUFlLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQyxLQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMkJBQUksMEJBQWEsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV6RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzNDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFLLENBQUMsSUFBSSxDQUFDLEdBQW9CLENBQUMsS0FBSyxTQUFTLENBQ3hELENBQUM7UUFFRixJQUFJLFFBQVEsS0FBSyxTQUFTO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFN0QsT0FBTyxRQUF5QixDQUFDO0lBQ25DLENBQUM7SUFjRDs7O09BR0c7SUFFSCxNQUFNLEtBQUssYUFBYTtRQUN0QixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFFSCxJQUFJLEtBQUs7UUFDUCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUVILE1BQU0sQ0FBQyxJQUFJO1FBQ1QsT0FBTyxFQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7O3FJQTFNYSxJQUFvQztJQUNoRCxNQUFNLE1BQU0sR0FBRywyQkFBSSwwQkFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQyxJQUFJLE1BQU0sS0FBSyxTQUFTO1FBQUUsT0FBTyxNQUFNLENBQUM7SUFFeEMsTUFBTSxVQUFVLEdBQUcsRUFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUxRCwyQkFBSSwwQkFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFeEMsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxxREFFYSxJQUFvQyxFQUFFLEtBQWE7SUFDL0QsMkJBQUksMEJBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRW5DLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFpSkQ7OztHQUdHO0FBRUksVUFBSSxHQUFHO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLElBQUksRUFBRSxNQUFNO0NBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNbUI7QUFFaEMsTUFBTSxnQkFBZ0I7SUFtQnBCLFlBQVksSUFBWSxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsVUFBbUI7UUFsQjNFLDRDQUFpQjtRQUNqQiw2Q0FBa0I7UUFDbEIsK0NBQW9CO1FBQ3BCLGdEQUFxQjtRQWdCbkIsMkJBQUksNkJBQVksSUFBSSxPQUFDO1FBRXJCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZCLDJCQUFJLDhCQUFhLDJCQUFJLGdDQUFlLDJCQUFJLGlDQUFnQixJQUFJLG1CQUFDO1FBQy9ELENBQUM7YUFBTSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM5QiwyQkFBSSxpQ0FBZ0IsSUFBSSxPQUFDO1lBQ3pCLDJCQUFJLDhCQUFhLElBQUksT0FBQztZQUN0QiwyQkFBSSxnQ0FBZSxJQUFJLE9BQUM7UUFDMUIsQ0FBQzthQUFNLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLDJCQUFJLDhCQUFhLElBQUksT0FBQztZQUN0QiwyQkFBSSxnQ0FBZSxJQUFJLE9BQUM7WUFDeEIsMkJBQUksaUNBQWdCLElBQUksT0FBQztRQUMzQixDQUFDO2FBQU0sQ0FBQztZQUNOLDJCQUFJLDhCQUFhLElBQUksT0FBQztZQUN0QiwyQkFBSSxpQ0FBZ0IsSUFBSSxPQUFDO1lBQ3pCLDJCQUFJLGdDQUFlLFVBQVUsT0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sMkJBQUksaUNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSztRQUNmLDJCQUFJLDZCQUFZLEtBQUssT0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTywyQkFBSSxrQ0FBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLO1FBQ2hCLDJCQUFJLDhCQUFhLEtBQUssT0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTywyQkFBSSxvQ0FBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFLO1FBQ2xCLDJCQUFJLGdDQUFlLEtBQUssT0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTywyQkFBSSxxQ0FBYSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLFdBQVcsQ0FBQyxLQUFLO1FBQ25CLDJCQUFJLGlDQUFnQixLQUFLLE9BQUM7SUFDNUIsQ0FBQztDQUNGOztBQUVNLE1BQU0sWUFBYSxTQUFRLHlDQUF1QjtJQWN2RCxZQUFZLElBQVksRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFVBQW1CO1FBQ3pFLE1BQU0sSUFBSSxHQUNSLElBQUksS0FBSyxTQUFTO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUM1QixDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVM7Z0JBQ3BCLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUztvQkFDMUIsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7b0JBQ3hDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLO1FBQ2YsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRW5DLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUU1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRXBDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUU3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksV0FBVyxDQUFDLEtBQUs7UUFDbkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRXZDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUVoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQUs7UUFDbEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXRDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUUvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFtQjtRQUN4QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S3FDO0FBRS9CLE1BQU0sU0FBVSxTQUFRLCtDQUFRO0lBQXZDOztRQUNFLDZCQUFXLEtBQUssRUFBQztJQVNuQixDQUFDO0lBUEMsSUFBSSxPQUFPO1FBQ1QsT0FBTywyQkFBSSwwQkFBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLO1FBQ2YsMkJBQUksc0JBQVksS0FBSyxPQUFDO0lBQ3hCLENBQUM7Q0FDRjs7QUFFTSxNQUFNLFlBQWEsU0FBUSxTQUFTO0lBR3pDLFlBQVksTUFBbUI7UUFDN0IsS0FBSyxFQUFFLENBQUM7UUFIVix1Q0FBcUI7UUFLbkIsMkJBQUksd0JBQVcsTUFBTSxPQUFDO1FBRXRCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVyQixLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFbEIsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixJQUFJLDJCQUFJLDRCQUFRLFlBQVksTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWhELE1BQU0sWUFBWSxHQUFHLDJCQUFJLDRCQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUUxRCxPQUFPLCtDQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REQsU0FBUyxHQUFHLENBQUMsQ0FBUztJQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ1osUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBRU0sTUFBTSxLQUFLO0lBTWhCLFlBQ0UsUUFBeUIsRUFDekIsU0FBa0IsRUFDbEIsSUFBYSxFQUNiLEtBQWM7UUFUaEIsNkJBQWE7UUFXWCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLDJCQUFJLGNBQVEsUUFBUSxPQUFDO1FBQ3ZCLENBQUM7YUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3QixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDM0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFN0QsMkJBQUksY0FBUSxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLFFBQVEsRUFBRSxPQUFDO1FBQzNELENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO1lBQ3JCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV4QixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDeEIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQWUsQ0FBQyxDQUFDO1lBRXRDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFjLENBQUMsQ0FBQztZQUVwQyxNQUFNLFFBQVEsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2RCwyQkFBSSxjQUFRLElBQUksTUFBTSxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsUUFBUSxFQUFFLE9BQUM7UUFDM0QsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWEsRUFBRSxLQUFjO1FBQ3ZDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWE7UUFDN0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVk7UUFDakIsT0FBTywyQkFBSSxrQkFBSyxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sMkJBQUksa0JBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxLQUFjO1FBQ2pFLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHLENBQ1IsR0FBVyxFQUNYLFVBQWtCLEVBQ2xCLFNBQWlCLEVBQ2pCLEtBQWM7UUFFZCxPQUFPLElBQUksS0FBSyxDQUNkLE9BQU8sR0FBRyxJQUFJLFVBQVUsSUFBSSxTQUFTLEdBQ25DLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQ3hDLEdBQUcsQ0FDSixDQUFDO0lBQ0osQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRStCO0FBRU07QUFFdEMsTUFBTSxTQUFTO0lBSWIsWUFBWSxNQUFjLEVBQUUsS0FBWTtRQUh4QyxvQ0FBZ0I7UUFDaEIsbUNBQWM7UUFHWiwyQkFBSSxxQkFBVyxNQUFNLE9BQUM7UUFDdEIsMkJBQUksb0JBQVUsS0FBSyxPQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLDJCQUFJLHlCQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sMkJBQUksd0JBQU8sQ0FBQztJQUNyQixDQUFDO0NBQ0Y7O0FBRU0sTUFBTSxRQUFRO0lBQXJCO1FBQ0UsMEJBQXNCLEVBQUUsRUFBQztJQThDM0IsQ0FBQztJQTVDQyxZQUFZLENBQUMsTUFBYyxFQUFFLEtBQVk7UUFDdkMsMkJBQUksdUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFL0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRVMsVUFBVSxDQUFDLFFBQXdCO1FBQzNDLEtBQUssTUFBTSxJQUFJLElBQUksMkJBQUksdUJBQU8sRUFBRSxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7SUFFUyxjQUFjLENBQUMsVUFBOEI7UUFDckQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUV2QixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3pCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQzFDLDRCQUE0QixFQUM1QixNQUFNLENBQ1AsQ0FBQztZQUVGLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUUzRCxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFOUQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFpQyxFQUFFLEdBQUcsSUFBVztRQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sMkJBQUksdUJBQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNGOztBQUVNLE1BQU0sY0FBZSxTQUFRLFFBQVE7SUFPMUMsWUFBWSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQVBWLDhDQUFxQjtRQUNyQiw4Q0FBcUI7UUFDckIsNENBQW1CO1FBQ25CLDRDQUFtQjtRQUNuQiw4QkFBd0MsSUFBSSxFQUFDO1FBSzNDLDJCQUFJLCtCQUFnQixNQUFNLE9BQUM7UUFDM0IsMkJBQUksK0JBQWdCLE1BQU0sT0FBQztRQUMzQiwyQkFBSSw2QkFBYyxJQUFJLE9BQUM7UUFDdkIsMkJBQUksNkJBQWMsSUFBSSxPQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQ0osT0FBaUMsRUFDakMsT0FBZSxFQUNmLE9BQWUsRUFDZixXQUFtQixFQUNuQixZQUFvQjtRQUVwQixNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsV0FBVyxHQUFHLDJCQUFJLG1DQUFhLENBQUM7UUFDckQsTUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLFlBQVksR0FBRywyQkFBSSxtQ0FBYSxDQUFDO1FBQ3RELE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRyxXQUFXLEdBQUcsMkJBQUksaUNBQVcsQ0FBQztRQUNuRCxNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsWUFBWSxHQUFHLDJCQUFJLGlDQUFXLENBQUM7UUFFcEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLElBQUksMkJBQUksMkJBQUssS0FBSyxJQUFJO1lBQUUsT0FBTywyQkFBSSwyQkFBSyxDQUFDO1FBRXpDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQ3pDLDRCQUE0QixFQUM1QixnQkFBZ0IsQ0FDakIsQ0FBQztRQUVGLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLDJCQUFJLG1DQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUU1RCxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSwyQkFBSSxtQ0FBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFNUQsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsMkJBQUksaUNBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRTFELFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLDJCQUFJLGlDQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sQ0FBQywyQkFBSSx1QkFBUSxVQUFVLE9BQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7O0FBRU0sTUFBTSxjQUFlLFNBQVEsUUFBUTtJQVMxQyxZQUNFLE1BQU0sR0FBRyxDQUFDLEVBQ1YsTUFBTSxHQUFHLENBQUMsRUFDVixXQUFXLEdBQUcsQ0FBQyxFQUNmLElBQUksR0FBRyxDQUFDLEVBQ1IsSUFBSSxHQUFHLENBQUMsRUFDUixTQUFTLEdBQUcsQ0FBQztRQUViLEtBQUssRUFBRSxDQUFDO1FBaEJWLHlDQUFnQjtRQUNoQix5Q0FBZ0I7UUFDaEIsOENBQXFCO1FBQ3JCLHVDQUFjO1FBQ2QsdUNBQWM7UUFDZCw0Q0FBbUI7UUFDbkIsOEJBQXdDLElBQUksRUFBQztRQVkzQywyQkFBSSwwQkFBVyxNQUFNLE9BQUM7UUFDdEIsMkJBQUksMEJBQVcsTUFBTSxPQUFDO1FBQ3RCLDJCQUFJLCtCQUFnQixXQUFXLE9BQUM7UUFDaEMsMkJBQUksd0JBQVMsSUFBSSxPQUFDO1FBQ2xCLDJCQUFJLHdCQUFTLElBQUksT0FBQztRQUNsQiwyQkFBSSw2QkFBYyxTQUFTLE9BQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FDSixPQUFpQyxFQUNqQyxPQUFlLEVBQ2YsT0FBZSxFQUNmLFlBQW9CO1FBRXBCLE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRywyQkFBSSw4QkFBUSxHQUFHLFlBQVksQ0FBQztRQUNqRCxNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsMkJBQUksOEJBQVEsR0FBRyxZQUFZLENBQUM7UUFDakQsTUFBTSxFQUFFLEdBQUcsWUFBWSxHQUFHLDJCQUFJLG1DQUFhLENBQUM7UUFFNUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLDJCQUFJLDRCQUFNLEdBQUcsWUFBWSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRywyQkFBSSw0QkFBTSxHQUFHLFlBQVksQ0FBQztRQUMvQyxNQUFNLEVBQUUsR0FBRyxZQUFZLEdBQUcsMkJBQUksaUNBQVcsQ0FBQztRQUUxQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxJQUFJLDJCQUFJLDJCQUFLLEtBQUssSUFBSTtZQUFFLE9BQU8sMkJBQUksMkJBQUssQ0FBQztRQUV6QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUN6Qyw0QkFBNEIsRUFDNUIsZ0JBQWdCLENBQ2pCLENBQUM7UUFFRixVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSwyQkFBSSxtQ0FBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFNUQsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsMkJBQUksOEJBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXZELFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLDJCQUFJLDRCQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVyRCxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSwyQkFBSSw0QkFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFckQsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsMkJBQUksaUNBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEMsT0FBTyxDQUFDLDJCQUFJLHVCQUFRLFVBQVUsT0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjs7QUFFTSxNQUFNLGVBQWdCLFNBQVEsUUFBUTtJQUkzQyxZQUNFLGFBQW9CLHlDQUFLLENBQUMsSUFBSSxFQUFFLEVBQ2hDLFNBQW1CLCtDQUFRLENBQUMsSUFBSSxFQUFFO1FBRWxDLEtBQUssRUFBRSxDQUFDO1FBUFYsOENBQW1CO1FBQ25CLDBDQUFrQjtRQVFoQiwyQkFBSSwrQkFBZSxVQUFVLE9BQUM7UUFDOUIsMkJBQUksMkJBQVcsTUFBTSxPQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBaUMsRUFBRSxNQUFnQjtRQUN4RCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLDJCQUFJLCtCQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsMkJBQUksK0JBQVEsQ0FBQyxDQUFDLENBQUM7UUFFcEMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUMxQywyQkFBSSxtQ0FBWSxDQUFDLE9BQU8sRUFDeEIsQ0FBQyxFQUNELENBQUMsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyT00sTUFBTSxlQUFlO0lBTTFCO1FBTEEsbUNBQVcsSUFBSSxHQUFHLEVBQVUsRUFBQztRQUM3QixvQ0FBWSxJQUFJLEdBQUcsRUFBVSxFQUFDO1FBQzlCLGdDQUFRLEVBQUUsRUFBQztRQUNYLGdDQUFRLEtBQUssRUFBQztRQUdaLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzQywyQkFBSSxnQ0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0IsMkJBQUkseUJBQVMsS0FBSyxDQUFDLEdBQUcsT0FBQztZQUV2QiwyQkFBSSx5QkFBUyxJQUFJLE9BQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDekMsMkJBQUksZ0NBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWhDLDJCQUFJLHlCQUFTLEtBQUssT0FBQztZQUVuQixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksMkJBQUksZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNWLDJCQUFJLHlCQUFTLElBQUksT0FBQztvQkFFbEIsTUFBTTtnQkFDUixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixLQUFLLE1BQU0sR0FBRyxJQUFJLDJCQUFJLGlDQUFVLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsMkJBQUksZ0NBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUFFLDJCQUFJLGlDQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFRCxLQUFLLE1BQU0sR0FBRyxJQUFJLDJCQUFJLGdDQUFTLEVBQUUsQ0FBQztZQUNoQywyQkFBSSxpQ0FBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sMkJBQUksNkJBQU0sQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTywyQkFBSSw2QkFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLDJCQUFJLGdDQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxHQUFXO1FBQzNCLE9BQU8sMkJBQUksaUNBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RHFDO0FBRXRDLE1BQU0sV0FBVyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFbEUsTUFBTSxTQUFVLFNBQVEsK0NBQVE7SUFBdkM7O1FBQ0Usa0NBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFDO1FBQ3BELDBCQUFRLEtBQUssRUFBQztJQWlCaEIsQ0FBQztJQWZDLElBQUksWUFBWTtRQUNkLE9BQU8sMkJBQUksK0JBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxZQUFZLENBQUMsS0FBSztRQUNwQiwyQkFBSSwyQkFBaUIsS0FBSyxPQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLDJCQUFJLHVCQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWiwyQkFBSSxtQkFBUyxLQUFLLE9BQUM7SUFDckIsQ0FBQztDQUNGOztBQUVNLE1BQU0sWUFBYSxTQUFRLFNBQVM7SUFJekMsWUFBWSxTQUErQixNQUFNO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBSlYseUNBQXFCO1FBQ3JCLHVDQUE4QjtRQUs1QiwyQkFBSSx3QkFBVyxNQUFNLE9BQUM7UUFFdEIsMkJBQUksMEJBQWEsSUFBSSxTQUFTLEVBQUUsT0FBQztRQUVqQyxNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUMzQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUFHLE1BQXFCLENBQUM7UUFFNUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3BELEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztZQUV4QyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBRXpDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyRCxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyRCxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFlBQVk7UUFDViwyQkFBSSw4QkFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXJELDJCQUFJLDhCQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFaEMsMkJBQUksOEJBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUxQiwyQkFBSSw4QkFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTywyQkFBSSw4QkFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLENBQUM7UUFDSCxJQUFJLDJCQUFJLDRCQUFRLFlBQVksTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuRCxNQUFNLFlBQVksR0FBRywyQkFBSSw0QkFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFMUQsT0FBTyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksQ0FBQztRQUNILElBQUksMkJBQUksNEJBQVEsWUFBWSxNQUFNO1lBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sWUFBWSxHQUFHLDJCQUFJLDRCQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUUxRCxPQUFPLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkcrQjtBQWV6QixNQUFNLE1BQU07SUFRakIsTUFBTSxDQUFDLFNBQVMsQ0FDZCxJQUF5QixFQUN6QixRQUFpQixFQUNqQixRQUFpQixFQUNqQixRQUFpQjs7UUFFakIsTUFBTSxLQUFLLEdBQ1QsT0FBTyxJQUFJLEtBQUssUUFBUTtZQUN0QixDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQztnQkFDRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUU7Z0JBQ25DLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTthQUN4QyxDQUFDO1FBRVIsT0FBTyx5Q0FBSyxDQUFDLElBQUksQ0FDZixNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFLLENBQUMsS0FBSywwQ0FBRSxHQUFHLG1DQUFJLENBQUMsRUFBRSxpQkFBSyxDQUFDLEtBQUssMENBQUUsR0FBRyxtQ0FBSSxHQUFHLENBQUMsRUFDMUQsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQ3ZCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQztZQUNoRSxDQUFDLENBQUMsU0FBUztZQUNYLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxtQ0FBSSxDQUFDLEVBQUUsV0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLG1DQUFJLENBQUMsQ0FBQyxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQWFELE1BQU0sQ0FBQyxRQUFRLENBQ2IsSUFBd0IsRUFDeEIsTUFBZSxFQUNmLGFBQXNCLEVBQ3RCLGFBQXNCLEVBQ3RCLFlBQXFCLEVBQ3JCLFlBQXFCLEVBQ3JCLFFBQWlCLEVBQ2pCLFFBQWlCOztRQUVqQixNQUFNLE1BQU0sR0FDVixPQUFPLElBQUksS0FBSyxRQUFRO1lBQ3RCLENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDO2dCQUNFLEdBQUcsRUFBRTtvQkFDSCxHQUFHLEVBQUUsSUFBSTtvQkFDVCxHQUFHLEVBQUUsTUFBTTtpQkFDWjtnQkFDRCxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUU7Z0JBQ3RELFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRTtnQkFDbkQsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2FBQ3hDLENBQUM7UUFFUixPQUFPLHlDQUFLLENBQUMsR0FBRyxDQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQU0sQ0FBQyxHQUFHLDBDQUFFLEdBQUcsbUNBQUksQ0FBQyxFQUFFLGtCQUFNLENBQUMsR0FBRywwQ0FBRSxHQUFHLG1DQUFJLEdBQUcsQ0FBQyxFQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFNLENBQUMsVUFBVSwwQ0FBRSxHQUFHLG1DQUFJLENBQUMsRUFBRSxrQkFBTSxDQUFDLFVBQVUsMENBQUUsR0FBRyxtQ0FBSSxHQUFHLENBQUMsRUFDdEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBTSxDQUFDLFNBQVMsMENBQUUsR0FBRyxtQ0FBSSxDQUFDLEVBQUUsa0JBQU0sQ0FBQyxTQUFTLDBDQUFFLEdBQUcsbUNBQUksR0FBRyxDQUFDLEVBQ3BFLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUztZQUN4QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUM7WUFDbEUsQ0FBQyxDQUFDLFNBQVM7WUFDWCxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsbUNBQUksQ0FBQyxFQUFFLFlBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxtQ0FBSSxDQUFDLENBQUMsQ0FDL0QsQ0FBQztJQUNKLENBQUM7SUFhRCxNQUFNLENBQUMsUUFBUSxDQUNiLElBQXdCLEVBQ3hCLE1BQWUsRUFDZixRQUFpQixFQUNqQixRQUFpQixFQUNqQixPQUFnQixFQUNoQixPQUFnQixFQUNoQixRQUFpQixFQUNqQixRQUFpQjs7UUFFakIsTUFBTSxNQUFNLEdBQ1YsT0FBTyxJQUFJLEtBQUssUUFBUTtZQUN0QixDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQztnQkFDRSxHQUFHLEVBQUU7b0JBQ0gsR0FBRyxFQUFFLElBQUk7b0JBQ1QsR0FBRyxFQUFFLE1BQU07aUJBQ1o7Z0JBQ0QsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUN2QyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7Z0JBQ3BDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTthQUN4QyxDQUFDO1FBRVIsT0FBTyx5Q0FBSyxDQUFDLEdBQUcsQ0FDZCxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFNLENBQUMsR0FBRywwQ0FBRSxHQUFHLG1DQUFJLENBQUMsRUFBRSxrQkFBTSxDQUFDLEdBQUcsMENBQUUsR0FBRyxtQ0FBSSxHQUFHLENBQUMsRUFDeEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBTSxDQUFDLEtBQUssMENBQUUsR0FBRyxtQ0FBSSxDQUFDLEVBQUUsa0JBQU0sQ0FBQyxLQUFLLDBDQUFFLEdBQUcsbUNBQUksR0FBRyxDQUFDLEVBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQU0sQ0FBQyxJQUFJLDBDQUFFLEdBQUcsbUNBQUksQ0FBQyxFQUFFLGtCQUFNLENBQUMsSUFBSSwwQ0FBRSxHQUFHLG1DQUFJLEdBQUcsQ0FBQyxFQUMxRCxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVM7WUFDeEIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxTQUFTO1lBQ1gsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLG1DQUFJLENBQUMsRUFBRSxZQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsbUNBQUksR0FBRyxDQUFDLENBQy9ELENBQUM7SUFDSixDQUFDO0lBSUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFZLEVBQUUsSUFBYTtRQUN0QyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqRSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFFLENBQWtCLEtBQVE7UUFDakMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekorQjtBQUNNO0FBQ0E7QUFFL0IsTUFBTSxNQUFNO0lBTWpCLFlBQVksT0FBd0I7O1FBTHBDLHVCQUFRLG1EQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDdkIsd0JBQVMseUNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDdkIseUJBQVUsK0NBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQztRQUMxQixvQ0FBcUIsSUFBSSxHQUFHLEVBQXNDLEVBQUM7UUE0Qm5FLGlDQUFrQixHQUFHLEVBQUU7WUFDckIsMkJBQUksK0NBQWMsTUFBbEIsSUFBSSxDQUFnQixDQUFDO1FBQ3ZCLENBQUMsRUFBQztRQTNCQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsUUFBd0M7UUFDeEQsSUFBSSwyQkFBSSxpQ0FBbUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTztRQUVsRCxNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMsMkJBQUksb0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QywyQkFBSSxzQkFBUSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRS9DLDJCQUFJLGlDQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG9CQUFvQixDQUFDLFFBQWdDO1FBQ25ELE1BQU0sTUFBTSxHQUFHLDJCQUFJLGlDQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRCxJQUFJLE1BQU0sS0FBSyxTQUFTO1lBQUUsT0FBTztRQUVqQywyQkFBSSxvQkFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLDJCQUFJLHNCQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsMkJBQUksaUNBQW1CLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFZRCxJQUFJLElBQUk7UUFDTixPQUFPLDJCQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ1osSUFBSSwyQkFBSSxvQkFBTSxDQUFDLEtBQUssS0FBSyxLQUFLO1lBQUUsT0FBTztRQUV2QywyQkFBSSxvQkFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFekIsMkJBQUksK0NBQWMsTUFBbEIsSUFBSSxDQUFnQixDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLDJCQUFJLHFCQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLDJCQUFJLHFCQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFdEMsMkJBQUksaUJBQVUsS0FBSyxPQUFDO1FBRXBCLDJCQUFJLCtDQUFjLE1BQWxCLElBQUksQ0FBZ0IsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsT0FBTyxDQUNMLDRCQUFLLG9CQUFNLEtBQUssMkJBQUksb0JBQU07WUFDMUIsNEJBQUsscUJBQU8sQ0FBQyxNQUFNLENBQUMsMkJBQUkscUJBQU8sQ0FBQztZQUNoQyw0QkFBSyxzQkFBUSxDQUFDLE1BQU0sQ0FBQywyQkFBSSxzQkFBUSxDQUFDLENBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTywyQkFBSSxzQkFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ2QsSUFBSSwyQkFBSSxzQkFBUSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQzNCLDJCQUFJLHNCQUFRLENBQUMsb0JBQW9CLENBQUMsMkJBQUksOEJBQWdCLENBQUMsQ0FBQztZQUV4RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsMkJBQUksOEJBQWdCLENBQUMsQ0FBQztZQUU5QywyQkFBSSxrQkFBVyxLQUFLLE9BQUM7UUFDdkIsQ0FBQztRQUVELElBQUksQ0FBQywyQkFBSSxzQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hDLDJCQUFJLCtDQUFjLE1BQWxCLElBQUksQ0FBZ0IsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFpQztRQUN0QyxPQUFPLENBQUMsVUFBVSxHQUFHLDJCQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsMkJBQUkscUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxPQUFPLENBQUMsYUFBYSxHQUFHLDJCQUFJLHNCQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsMkJBQUksc0JBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGOztJQTdERyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksMkJBQUksaUNBQW1CLEVBQUUsQ0FBQztRQUNsRCxNQUFNLEVBQUUsQ0FBQztJQUNYLENBQUM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNJLE1BQU0sS0FBSztJQUloQixZQUFZLFlBQWU7UUFIM0IsMkJBQWEsSUFBSSxHQUFHLEVBQXFCLEVBQUM7UUFDMUMsK0JBQVU7UUFHUiwyQkFBSSxnQkFBVSxZQUFZLE9BQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBRUgsaUJBQWlCLENBQUMsUUFBMkI7UUFDM0MsMkJBQUksd0JBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUFJLHdCQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsb0JBQW9CLENBQUMsUUFBMkI7UUFDOUMsMkJBQUksd0JBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFakMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUFJLHdCQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRVMsWUFBWTtRQUNwQixLQUFLLE1BQU0sUUFBUSxJQUFJLDJCQUFJLHdCQUFXLEVBQUUsQ0FBQztZQUN2QyxRQUFRLENBQUMsMkJBQUksb0JBQU8sQ0FBQyxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSCxNQUFNLENBQUMsS0FBbUI7UUFDeEIsT0FBTywyQkFBSSxvQkFBTyxLQUFLLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUVILE9BQU8sQ0FBaUIsS0FBUSxFQUFFLGNBQWlDO1FBQ2pFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxLQUFLLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFFakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEMsY0FBYyxDQUFDLDRCQUFLLG9CQUFPLENBQUMsQ0FBQztRQUU3QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUVILElBQUksS0FBSztRQUNQLE9BQU8sMkJBQUksb0JBQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsUUFBUTtRQUNoQixJQUFJLDJCQUFJLG9CQUFPLEtBQUssUUFBUTtZQUFFLE9BQU87UUFFckMsMkJBQUksZ0JBQVUsUUFBUSxPQUFDO1FBRXZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUksTUFBUztJQUN0QyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlGTSxNQUFNLEtBQUs7O0FBQ1QsVUFBSSxHQUFHO0lBQ1osV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixNQUFNLEVBQUUsSUFBSTtJQUNaLEtBQUssRUFBRSxJQUFJO0lBQ1gsTUFBTSxFQUFFLElBQUk7SUFDWixNQUFNLEVBQUUsSUFBSTtJQUNaLHFCQUFxQixFQUFFLElBQUk7SUFDM0Isb0JBQW9CLEVBQUUsSUFBSTtDQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1htQjtBQUV6QixNQUFNLFlBQVk7SUFJdkIsWUFBWSxDQUFTLEVBQUUsQ0FBUztRQUhoQyxrQ0FBVztRQUNYLGtDQUFXO1FBR1QsMkJBQUksbUJBQU0sQ0FBQyxPQUFDO1FBQ1osMkJBQUksbUJBQU0sQ0FBQyxPQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQztRQUNILE9BQU8sMkJBQUksdUJBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSSxDQUFDLENBQUMsS0FBSztRQUNULDJCQUFJLG1CQUFNLEtBQUssT0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTywyQkFBSSx1QkFBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBQyxLQUFLO1FBQ1QsMkJBQUksbUJBQU0sS0FBSyxPQUFDO0lBQ2xCLENBQUM7Q0FDRjs7QUFFTSxNQUFNLFFBQVMsU0FBUSx5Q0FBbUI7SUFDL0MsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUlELE1BQU0sQ0FBQyxJQUF1QixFQUFFLElBQWE7UUFDM0MsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHO1FBQ1IsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBSUQsS0FBSyxDQUFDLElBQXVCLEVBQUUsSUFBYTtRQUMxQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7WUFDMUIsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUlELElBQUksQ0FBQyxJQUF1QixFQUFFLElBQWE7UUFDekMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1lBQzFCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxhQUFKLElBQUksY0FBSixJQUFJLEdBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEIsT0FBTyxHQUFHLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUM1QixPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDLENBQUMsS0FBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBRW5DLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUVyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFDLEtBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLO1lBQUUsT0FBTztRQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSTtRQUNULE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRzRCO0FBRXRCLE1BQU0sZ0JBQWlCLFNBQVEsc0ZBQW1DLENBQ3ZFLE9BQU8sQ0FDUjtDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BxRDtBQUl0QztBQUVaLE1BQU0sd0JBQXlCLFNBQVEsa0VBQWdCLENBQzVELDZFQUFtQyxDQUFDLEtBQUssQ0FBQyxDQUMzQztDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNkM7QUFDUTtBQUNGO0FBQ0g7QUFDUjtBQUVyQyxTQUFTLG1DQUFtQyxDQUVqRCxHQUFNOztJQUNOLFlBQU8sTUFBTSxrQkFBa0I7WUFHN0IsWUFBWSxHQUFHLElBQVc7Z0JBRjFCLDhDQUFtQztnQkFHakMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFNUMsMkJBQUksK0JBQVksT0FBTyxPQUFDO1lBQzFCLENBQUM7WUFFRCxRQUFRLENBQUMsT0FBd0M7Z0JBQy9DLE1BQU0sZ0JBQWdCLEdBQUcsNkRBQW1CLENBQzFDLGlFQUFxQixFQUNyQixPQUFPLENBQ1IsQ0FBQztnQkFFRixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUUzQyxPQUFPLGdCQUFnQixDQUFDO1lBQzFCLENBQUM7WUFFRCxrQkFBa0IsQ0FJaEIsa0JBQXFCLEVBQ3JCLE9BQTREO2dCQUU1RCxNQUFNLFVBQVUsR0FBRyx1QkFBdUIsQ0FBTyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUVyRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRTdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUVuQyxPQUFPLFVBQVUsQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBSSxPQUFPO2dCQUNULE9BQU8sMkJBQUksbUNBQVMsQ0FBQztZQUN2QixDQUFDO1lBRUQsSUFBSSxLQUFLO2dCQUNQLE9BQU8sMkJBQUksbUNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDN0IsQ0FBQztZQUVELElBQUksS0FBSyxDQUFDLFdBQWdDO2dCQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLDJCQUFJLG1DQUFTLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCxHQUFHLENBQUMsT0FBbUM7Z0JBQ3JDLE1BQU0sZ0JBQWdCLEdBQUcsNkRBQW1CLENBQUMsNERBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXhFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBRTNDLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsQ0FBQztTQUNGOztXQUFDO0FBQ0osQ0FBQztBQXdCRCxNQUFNLG1CQUFtQixHQUFHLENBQzFCLEtBQWUsRUFDZixjQUFxQyxFQUNuQixFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBRTVDLFNBQVMsdUJBQXVCLENBR3JDLGtCQUFxQjtJQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFFekMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUU1QixNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBbUMsQ0FBQztJQUU1RCxTQUFTLGFBQWEsQ0FBQyxPQUE2QixFQUFFLEdBQUcsTUFBYTtRQUNwRSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFL0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU5QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFNUIsSUFBSSxLQUFLLFlBQVksaURBQUssRUFBRSxDQUFDO29CQUMzQixJQUFJLGVBQWUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTVDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXJDLE1BQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUM1RCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFFbkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBRS9DLGVBQWUsR0FBRyxPQUFPLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUVILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7cUJBQU0sQ0FBQztvQkFDTixNQUFNLFlBQVksR0FBRyxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUVyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1FBQzFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVztZQUNoQixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUV2RCxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxPQUFPLFlBQVksS0FBSyxVQUFVO29CQUNwQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXBDLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUV2RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFVBQVU7Z0JBQUUsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFFLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLO1lBQ3ZCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVuRCxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUNuQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQ3pDLGdCQUFnQixDQUFDLGNBQWMsQ0FDaEMsQ0FBQztZQUNKLENBQUM7WUFFRCxJQUFJLFdBQVcsSUFBSSxPQUFPLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxLQUFLLFlBQVksaURBQUssRUFBRSxDQUFDO29CQUMzQixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzlDLENBQUMsQ0FBQyxDQUFDO29CQUVILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFekQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFFNUMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCxJQUFJLEtBQUssWUFBWSxpREFBSyxFQUFFLENBQUM7Z0JBQzNCLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUV6RCxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUU1QyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FDRixDQUE4QyxDQUFDO0lBRWhELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUk7SUFDbkQsSUFBSSxVQUFVLEtBQUssU0FBUztRQUMxQixNQUFNLElBQUksS0FBSyxDQUNiLDhJQUE4SSxDQUMvSSxDQUFDO0lBRUosTUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsZ0VBQXdCLENBQUMsQ0FBQztJQUV6RSxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUvQyxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOd0Q7QUFJdEM7QUFFWixNQUFNLHdCQUF5QixTQUFRLGtFQUFnQixDQUM1RCw2RUFBbUMsQ0FBQyxHQUFHLENBQUMsQ0FDekM7Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFJdEM7QUFFWixNQUFNLG1CQUFvQixTQUFRLGtFQUFnQixDQUN2RCw2RUFBbUMsQ0FBQyxNQUFNLENBQUMsQ0FDNUM7Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSd0Q7QUFFckQsTUFBTSxpQkFBa0IsU0FBUSxXQUFXO0lBSWhELFlBQVksR0FBRyxJQUFXO1FBQ3hCLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUIsSUFDdEIsQ0FBQztJQUVKOztPQUVHO0lBQ0gsV0FBVyxDQUNULFlBQWUsRUFDZixPQUFrQztRQUVsQyxNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFFSCxjQUFjLENBQ1osWUFBZSxFQUNmLFFBQWlCO1FBRWpCLE1BQU0sYUFBYSxHQUFHLHdFQUFnQixDQUFDLFlBQXNCLENBQUMsQ0FBQztRQUUvRCxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFL0QsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLElBQUkscUJBQXFCLEtBQUssV0FBVztZQUFFLE9BQU87UUFFbEQsSUFBSSxRQUFRLEtBQUssSUFBSTtZQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7O1lBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0FBN0NNLG9DQUFrQixHQUFhLEVBQUUsQ0FBQztBQWdEcEMsU0FBUyxtQkFBbUIsQ0FDakMsWUFBZSxFQUNmLE9BQWtDO0lBRWxDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBb0IsQ0FBQztJQUU1RSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVoQyxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RGlEO0FBQ047QUFDSTtBQUNLO0FBTXJCO0FBQ2lDO0FBRWpFLFNBQVMsZ0JBQWdCLENBQTBDLElBQU87O0lBQ3hFLFlBQU8sS0FBTSxTQUFRLHFEQUFLLENBQUMsSUFBSSxDQUFDO1lBQXpCOztnQkFPTCxvQkFBWSx1REFBUSxDQUFDLElBQUksRUFBRSxFQUFDO2dCQUM1QixvQkFBWSx1REFBUSxDQUFDLElBQUksRUFBRSxFQUFDO1lBdUQ5QixDQUFDO1lBckRDOzs7OztlQUtHO1lBQ0gsSUFBSSxRQUFRO2dCQUNWLE9BQU8sMkJBQUksaUJBQVUsQ0FBQztZQUN4QixDQUFDO1lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSztnQkFDaEIsSUFBSSwyQkFBSSxpQkFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFFekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQywyQkFBSSxhQUFhLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsSUFBSSxRQUFRO2dCQUNWLE9BQU8sMkJBQUksaUJBQVUsQ0FBQztZQUN4QixDQUFDO1lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSztnQkFDaEIsSUFBSSwyQkFBSSxpQkFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFFekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQywyQkFBSSxhQUFhLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUVELHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUI7Z0JBRXZCLElBQUksUUFBUSxLQUFLLElBQUk7b0JBQ25CLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRWxFLFFBQVEsSUFBSSxFQUFFLENBQUM7b0JBQ2IsS0FBSyxXQUFXO3dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsc0VBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ25ELE9BQU87b0JBRVQsS0FBSyxXQUFXO3dCQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsc0VBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ25ELE9BQU87b0JBRVQ7d0JBQ0UsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztZQUNILENBQUM7U0FDRjs7O1FBOURRLHFCQUFrQixHQUFHO1lBQzFCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjtZQUMxQixXQUFXO1lBQ1gsV0FBVztTQUNYO1dBMERGO0FBQ0osQ0FBQztBQUVNLE1BQU0sbUJBQW9CLFNBQVEsZ0JBQWdCLENBQ3ZELHNFQUF1QixDQUN4QjtJQUNDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxrQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQStCO1FBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkIsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXhDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUM1QixRQUFRLENBQUMsQ0FBQyxFQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsUUFBUSxDQUFDLENBQUMsRUFDVixRQUFRLENBQUMsQ0FBQyxFQUNWLEVBQUUsQ0FBQyxDQUFDLEVBQ0osRUFBRSxDQUFDLENBQUMsQ0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxjQUFlLFNBQVEscURBQU8sQ0FDekMseURBQVMsQ0FBQyx1REFBTyxDQUFDLGdCQUFnQixDQUFDLHVFQUF3QixDQUFDLENBQUMsQ0FBQyxDQUMvRDtJQUNDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUErQjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZCLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFOUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQzVCLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsUUFBUSxDQUFDLENBQUMsRUFDVixRQUFRLENBQUMsQ0FBQyxFQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsRUFBRSxDQUFDLENBQUMsRUFDSixFQUFFLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUY7QUFDSDtBQUNFO0FBUTFDLE1BQU0sT0FBUSxTQUFRLHVEQUFpQjtJQUE5Qzs7UUFNRSw4QkFBYyxDQUFDLEdBQUcsRUFBRTtZQUNsQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxJQUFJLEtBQUssQ0FBQyxFQUF3QixFQUFFO2dCQUN6QyxHQUFHLENBQXNDLENBQVEsRUFBRSxTQUFZO29CQUM3RCxPQUFPLENBQUMsUUFBK0IsRUFBRSxFQUFFLENBQ3pDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsRUFBRSxFQUFDO1FBQ0wsOEJBQThCLElBQUksRUFBQztJQWdEckMsQ0FBQztJQTlDQzs7O09BR0c7SUFDSCxJQUFJLE1BQU07UUFDUixNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRS9CLElBQUksYUFBYSxLQUFLLElBQUksSUFBSSxhQUFhLFlBQVksT0FBTyxLQUFLLEtBQUs7WUFDdEUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1FBRTVFLElBQUksYUFBYSxZQUFZLDBEQUFxQjtZQUFFLE9BQU8sYUFBYSxDQUFDO1FBRXpFLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxVQUFVO1FBQ1osT0FBTywyQkFBSSwyQkFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxPQUFPO1FBQ3BCLDJCQUFJLHVCQUFlLE9BQU8sT0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sMkJBQUksMkJBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FBQyxNQUFnQjtRQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FDcEUsSUFBSSxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FDMUQsQ0FBQztRQUVGLE9BQU8sdURBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RWlEO0FBQ0M7QUFDTTtBQUNOO0FBQ1c7QUFDRztBQUM3QjtBQUNrQjtBQUkvQyxNQUFNLHFCQUFzQixTQUFRLHVFQUFxQixDQUFDLDZDQUFPLENBQUM7SUFRdkUsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBaUJEO1FBQ0UsS0FBSyxFQUFFLENBQUM7O1FBaEJWLDJDQUFhLEtBQUssRUFBQztRQUNuQiw0Q0FBeUIsTUFBTSxFQUFDO1FBQ2hDLHNEQUE0QjtRQUM1QixpREFBbUM7UUFDbkMsMkNBQXFCLENBQUMsRUFBQztRQUN2QiwwREFBMEI7UUFDMUIsdUNBQVMsQ0FBQyxFQUFDO1FBQ1gsaURBQW1CLElBQUksOERBQWUsRUFBRSxFQUFDO1FBQ3pDLCtDQUFpQixDQUFDLENBQUMsRUFBQztRQUNwQixzREFBNEI7UUFDNUIsOENBQWdCLElBQUksR0FBRyxFQUE2QixFQUFDO1FBQ3JELDhDQUFnQixLQUFLLEVBQUM7UUFDdEIsMENBQTJCLElBQUksRUFBQztRQUNoQyx5Q0FBVyxJQUFJLEdBQUcsRUFBVyxFQUFDO1FBSzVCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUV2RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhELFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJLE9BQU8sS0FBSyxJQUFJO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV0RCwyQkFBSSxrQ0FBWSxPQUFPLE9BQUM7UUFFeEIsMkJBQUksdUNBQWlCLElBQUksd0RBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQUM7UUFFdEQsMkJBQUksdUNBQWlCLElBQUksd0RBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQUM7UUFFdEQsMkJBQUksMkNBQXFCLE1BQU0sQ0FBQyxnQkFBZ0IsT0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0IsQ0FDZCxJQUFZLEVBQ1osUUFBNEMsRUFDNUMsT0FBdUQ7UUFFdkQsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNiLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxPQUFPO2dCQUNWLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxNQUFNO1lBQ1I7Z0JBQ0UsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLEtBQUs7O1FBQ1A7Ozs7VUFJRTtRQUNGLE9BQU8saUNBQUksdUNBQVUsbUNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDcEQsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsY0FBYyxDQUNqQixPQUFPLEVBQ1AsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRywyQkFBSSxtQ0FBYSxLQUFLLE9BQUMsQ0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksU0FBUztRQUNYLE9BQU8sMkJBQUksd0NBQVcsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtRQUV2QixJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN0QixRQUFRLElBQUksRUFBRSxDQUFDO2dCQUNiLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLHNFQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QyxNQUFNO2dCQUVSLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLHNFQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QyxNQUFNO2dCQUVSLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLHNFQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvQyxNQUFNO2dCQUVSLEtBQUssWUFBWTtvQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLHNFQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsRCxNQUFNO1lBQ1YsQ0FBQztRQUNILENBQUM7UUFFRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxJQUFJLFVBQVU7UUFDWixPQUFPLDJCQUFJLHlDQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQUs7UUFDbEIsSUFBSSwyQkFBSSx5Q0FBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1FBRTdELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsMkJBQUkscUNBQWUsS0FBSyxPQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLHVEQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE1BQU0sZUFBZSxHQUFHLGdCQUFnQixNQUFNLENBQUMsZ0JBQWdCLE9BQU8sQ0FBQztRQUV2RSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWpELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsMkJBQUksNEVBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUvRCwyQkFBSSw0RUFBYSxNQUFqQixJQUFJLENBQWUsQ0FBQztRQUVwQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFN0Q7Ozs7VUFJRTtRQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUNULFlBQWUsRUFDZixPQUF5RDtRQUV6RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTywyQkFBSSw4Q0FBaUIsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sMkJBQUksc0NBQVMsQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sMkJBQUksMkNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sMkJBQUksMkNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTywyQkFBSSxzQ0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksU0FBUztRQUNYLE9BQU8sMkJBQUksd0NBQVcsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxPQUF1QjtRQUNwQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUUzQixJQUFJLE9BQU8sS0FBSyxJQUFJO1lBQUUsT0FBTztRQUU3QiwyQkFBSSxvQ0FBYyxJQUFJLE9BQUM7UUFFdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLDJCQUFJLG9DQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFHLElBQTRDO1FBQ3JELE9BQU8sMkJBQUksOENBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQUcsSUFBc0Q7UUFDekUsT0FBTywyQkFBSSw4Q0FBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLDJCQUFJLDhDQUFpQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTywyQkFBSSwyQ0FBYyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSwyQkFBSSwyQ0FBYyxJQUFJLDJCQUFJLHNDQUFTLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFckQsMkJBQUksdUNBQWlCLElBQUksT0FBQztRQUUxQixxQkFBcUIsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzdCLDJCQUFJLG9DQUFjLElBQUksR0FBRywyQkFBSSw0Q0FBZSxPQUFDO1lBRTdDLDJCQUFJLHdDQUFrQixJQUFJLE9BQUM7WUFFM0IsMkJBQUksdUVBQVEsTUFBWixJQUFJLENBQVUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFDakQsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFFcEMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCO1lBQUUsT0FBTztRQUU5RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUM7UUFFMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztRQUNkLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUVwQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxnQkFBZ0I7WUFBRSxPQUFPO1FBRS9ELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUVqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztRQUUzQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsY0FBYyxDQUNaLFlBQWUsRUFDZixRQUFpQjtRQUVqQixLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQW1ERCxRQUFRLENBQUMsU0FBb0M7UUFDM0MsSUFBSSwyQkFBSSwyQ0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFBRSxPQUFPO1FBRTlDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFeEUsMkJBQUksMkNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQWVELE9BQU8sQ0FBQyxPQUFnQixFQUFFLFlBQXVDLE1BQU07UUFDckUsMkJBQUksc0NBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7WUFDdkMsMkJBQUksc0NBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUIsSUFBSSwyQkFBSSxzQ0FBUyxDQUFDLElBQUksS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBN0VDLElBQUksMkJBQUksc0NBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QiwyQkFBSSx1Q0FBaUIsS0FBSyxPQUFDO1FBQzNCLE9BQU87SUFDVCxDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsMkJBQUksc0NBQVMsQ0FBQztJQUU5QixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFZixVQUFJLENBQUMsVUFBVSxxREFBRywyQkFBSSxvQ0FBTyxDQUFDLENBQUM7SUFFL0IsMkJBQUksdUNBQWlCLEtBQUssT0FBQztJQUUzQixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFbEQsSUFBSSwyQkFBSSx5Q0FBWSxLQUFLLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVmLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsMkJBQUkseUNBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFcEIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsSUFBSSxLQUFLLFlBQVksK0RBQXNCLEVBQUUsQ0FBQztZQUM1QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRWxCLDJCQUFJLDJDQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFbEMsMkJBQUksOENBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFckMsMkJBQUksMkNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVsQyxnSUFBVyxFQUFYLElBQWEsWUFBQztJQUVkLElBQUksMkJBQUksd0NBQVc7UUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDMUMsQ0FBQztJQVdDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFFbkQsTUFBTSxVQUFVLEdBQUcsYUFBYSxHQUFHLDJCQUFJLCtDQUFrQixDQUFDO0lBRTFELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQztJQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUM7SUFFcEMsMkJBQUksMkNBQXFCLGFBQWEsT0FBQztJQUV2QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckIsQ0FBQztBQXZYTSx3Q0FBa0IsR0FBYTtJQUNwQyxHQUFHLDZDQUFPLENBQUMsa0JBQWtCO0lBQzdCLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7Q0FDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCd0M7QUFFQTtBQUNzQjtBQUNsQjtBQUtoQjtBQUdoQyxTQUFTLGFBQWEsQ0FBMkIsSUFBTzs7SUFDdEQsWUFBTyxLQUFNLFNBQVEsMkVBQWtCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztZQUlyRCxZQUFZLEdBQUcsSUFBVztnQkFDeEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBSmpCLHNCQUFjLGlEQUFLLENBQUMsSUFBSSxFQUFFLEVBQUM7Z0JBQzNCLG9CQUFZLGlEQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUM7Z0JBS3JDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQzFCLENBQUM7WUFFRCxNQUFNLENBQUMsUUFBK0I7Z0JBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXZCLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBRWpELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUN0QixRQUFRLENBQUMsQ0FBQyxFQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFNLEdBQUcsQ0FBQyxFQUNWLENBQUMsRUFDRCwyQkFBSSxtQkFBWSxDQUFDLE9BQU8sRUFDeEIsMkJBQUksaUJBQVUsQ0FBQyxPQUFPLENBQ3ZCLENBQUM7Z0JBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBRUQsb0JBQW9CLENBQ2xCLE9BQWlDLEVBQ2pDLFFBQXdCO2dCQUV4QixNQUFNLEVBQ0osTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUNoQixLQUFLLEVBQ0wsTUFBTSxHQUNQLEdBQUcsSUFBSSxDQUFDO2dCQUVULE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFM0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFFRCxJQUFJLFVBQVU7Z0JBQ1osT0FBTywyQkFBSSxtQkFBWSxDQUFDO1lBQzFCLENBQUM7WUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFLO2dCQUNsQixJQUFJLDJCQUFJLG1CQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUUzQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLDJCQUFJLGVBQWUsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDO1lBRUQsSUFBSSxRQUFRO2dCQUNWLE9BQU8sMkJBQUksaUJBQVUsQ0FBQztZQUN4QixDQUFDO1lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSztnQkFDaEIsSUFBSSwyQkFBSSxpQkFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFFekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQywyQkFBSSxhQUFhLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNGOzs7V0FBQztBQUNKLENBQUM7QUFFTSxNQUFNLGVBQWdCLFNBQVEsYUFBYSxDQUNoRCx5REFBUyxDQUFDLHFEQUFPLENBQUMsdUVBQXdCLENBQUMsQ0FBQyxDQUM3QztJQUNDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFFL0MsTUFBTSxvQkFBcUIsU0FBUSxhQUFhLENBQ3JELHNFQUF1QixDQUN4QjtJQUNDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdDO0FBQ0o7QUFFdkQsTUFBTSxhQUFjLFNBQVEsdUVBQWtCLENBQ25ELHVFQUF3QixFQUN4QixLQUFLLENBQ047SUFDQyxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0Y7QUFDSztBQVVyQjtBQUV6QixNQUFNLGlCQUFrQixTQUFRLHFEQUFLLENBQUMsc0VBQXVCLENBQUM7SUFDbkUsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBK0I7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRXBCLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBRXBELE1BQU0sWUFBYSxTQUFRLHlEQUFTLENBQ3pDLHFEQUFLLENBQUMsdURBQU8sQ0FBQyx1RUFBd0IsQ0FBQyxDQUFDLENBQ3pDO0lBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFdkMsT0FBTyx1REFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQStCO1FBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkIsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFMUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQscUJBQXFCLENBQ25CLE9BQWlDLEVBQ2pDLFFBQXlCO1FBRXpCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQkFBb0IsQ0FDbEIsT0FBaUMsRUFDakMsUUFBd0I7UUFFeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRTNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0JBQW9CLENBQ2xCLE9BQWlDLEVBQ2pDLFFBQXdCO1FBRXhCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFN0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZVO0FBTU47QUFDSTtBQUNIO0FBSWY7QUFDcUI7QUFNM0I7QUFDaUM7QUFFakI7QUFFaEQsU0FBUyxxQkFBcUIsQ0FBMkIsSUFBTzs7SUFDOUQsWUFBTyxNQUFNLFNBQVUsU0FBUSwyRUFBa0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO1lBQTNEOztnQkFNTCxrQ0FBcUMsSUFBSSxFQUFDO2dCQWlCMUMsZ0RBQThCLEdBQUcsRUFBRTtvQkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsMkJBQUksK0JBQWMsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDLEVBQUM7WUE2RUosQ0FBQztZQTlGQyx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCOztnQkFFdkIsSUFBSSxJQUFJLEtBQUssZUFBZSxFQUFFLENBQUM7b0JBQzdCLElBQUksUUFBUSxLQUFLLElBQUk7d0JBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7eUJBQzNDLElBQUksUUFBUSxNQUFLLFVBQUksQ0FBQyxZQUFZLDBDQUFFLFFBQVEsRUFBRTt3QkFBRSxPQUFPOzt3QkFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxzRUFBZSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEUsT0FBTztnQkFDVCxDQUFDO2dCQUVELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFLRDs7ZUFFRztZQUNILElBQUksWUFBWTtnQkFDZCxPQUFPLDJCQUFJLCtCQUFjLENBQUM7WUFDNUIsQ0FBQztZQUVELElBQUksWUFBWSxDQUFDLEtBQW1DO2dCQUNsRCxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBRTlDLElBQUksS0FBSyxLQUFLLG1CQUFtQjtvQkFBRSxPQUFPO2dCQUMxQyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxtQkFBbUIsS0FBSyxJQUFJO3dCQUFFLE9BQU87b0JBQ3pDLG1CQUFtQixDQUFDLG9CQUFvQixDQUN0QywyQkFBSSw2Q0FBNEIsQ0FDakMsQ0FBQztvQkFFRixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLDJCQUFJLDJCQUFpQixLQUFLLE9BQUMsQ0FBQyxDQUFDO29CQUVsRSxPQUFPO2dCQUNULENBQUM7Z0JBQ0QsTUFBTSxlQUFlLEdBQ25CLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSwrREFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBRTlELElBQUksbUJBQW1CLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2pDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBSSw2Q0FBNEIsQ0FBQyxDQUFDO29CQUVwRSxJQUFJLENBQUMsY0FBYyxDQUNqQixjQUFjLEVBQ2QsQ0FBQywyQkFBSSwyQkFBaUIsZUFBZSxPQUFDLENBQ3ZDLENBQUM7b0JBRUYsT0FBTztnQkFDVCxDQUFDO2dCQUVELDJCQUFJLDJCQUFpQixlQUFlLE9BQUM7Z0JBRXJDLG1CQUFtQixDQUFDLE9BQU8sQ0FDekIsZUFBZSxFQUNmLDJCQUFJLDZDQUE0QixDQUNqQyxDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU0sQ0FBQyxRQUErQjtnQkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFdkIsTUFBTSxFQUNKLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDakIsS0FBSyxFQUNMLE1BQU0sR0FDUCxHQUFHLElBQUksQ0FBQztnQkFFVCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSTtvQkFDNUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7O29CQUUzQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDeEIsQ0FBQyxFQUNELENBQUMsRUFDRCxLQUFLLEVBQ0wsTUFBTSxFQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQzVCLENBQUM7Z0JBRUosSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBRUQsb0JBQW9CLENBQ2xCLE9BQWlDLEVBQ2pDLFFBQXdCO2dCQUV4QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFckQsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUU3QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEQsQ0FBQztTQUNGOzs7UUFyR1EscUJBQWtCLEdBQUc7WUFDMUIsR0FBRywyRUFBa0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsa0JBQWtCO1lBQ3pELGVBQWU7U0FDZjtXQWtHRjtBQUNKLENBQUM7QUFFTSxNQUFNLGlCQUFrQixTQUFRLHFCQUFxQixDQUMxRCx5REFBUyxDQUFDLHFEQUFPLENBQUMsdUVBQXdCLENBQUMsQ0FBQyxDQUM3QztJQUNDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztDQUNGO0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUVuRCxNQUFNLHNCQUF1QixTQUFRLHFCQUFxQixDQUMvRCxzRUFBdUIsQ0FDeEI7SUFDQyxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0FBRTlELE1BQU0sc0JBQXVCLFNBQVEseURBQVMsQ0FDbkQscURBQU8sQ0FDTCxpRUFBYSxDQUNYLCtEQUFZLENBQ1YsMkVBQWtCLENBQ2hCLDZEQUFXLENBQUMsNkRBQW1CLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEVBQ3pELFNBQVMsQ0FDVixDQUNGLENBQ0YsQ0FDRixDQUNGO0lBQ0MsSUFBSSxNQUFNO1FBQ1IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ2QsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEtmO0FBR2dDO0FBRTVDO0FBSTdCLE1BQU0sWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTVELE1BQU0sc0JBQXVCLFNBQVEsNkNBQU87SUFPakQsWUFBWSxHQUFHLElBQVc7UUFDeEIsS0FBSyxFQUFFLENBQUM7O1FBUFYscURBQXNCLEtBQUssRUFBQztRQUM1QixpREFBa0IsSUFBSSxHQUFHLEVBQXNDLEVBQUM7UUFDaEUsNkNBQWMsSUFBSSxxREFBUyxFQUFFLEVBQUM7UUFDOUIsaURBQWtCLElBQUksR0FBRyxFQUFzQyxFQUFDO1FBQ2hFLHlDQUF5QixJQUFJLEVBQUM7UUEyTjlCLHVEQUFnRCxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsMkJBQUksa0NBQVcsUUFBUSxPQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLEVBQUM7SUF6TkYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQ2QsSUFBK0IsRUFDL0IsUUFBNEMsRUFDNUMsT0FBMkM7UUFFM0MsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNiLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsMkJBQUksOENBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNO1lBRVIsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxTQUFTLENBQUM7WUFDZixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLDJCQUFJLDhDQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsTUFBTTtZQUVSLEtBQUssWUFBWSxDQUFDO1lBQ2xCLEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssV0FBVztnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEMsMkJBQUksOENBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNO1FBQ1YsQ0FBQztRQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXLENBQ1QsWUFBZSxFQUNmLE9BQXlEO1FBRXpELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQkFBcUIsQ0FDbkIsT0FBaUMsRUFDakMsUUFBeUI7UUFFekIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQixDQUNsQixPQUFpQyxFQUNqQyxRQUF3QjtRQUV4QixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0IsQ0FDbEIsT0FBaUMsRUFDakMsUUFBd0I7UUFFeEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUJBQW1CLENBQ2pCLElBQStCLEVBQy9CLFFBQTRDLEVBQzVDLE9BQTJDO1FBRTNDLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDYixLQUFLLE9BQU87Z0JBQ1YsMkJBQUksOENBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxTQUFTLENBQUM7WUFDZixLQUFLLFlBQVksQ0FBQztZQUNsQixLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLFdBQVcsQ0FBQztZQUNqQixLQUFLLFdBQVc7Z0JBQ2QsMkJBQUksOENBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNO1FBQ1YsQ0FBQztRQUVELEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sMkJBQUksa0RBQW9CLENBQUM7SUFDbEMsQ0FBQztJQW1ERDs7T0FFRztJQUNILGNBQWMsQ0FDWixZQUFlLEVBQ2YsUUFBaUI7UUFFakIsSUFBSSxDQUFDLDJCQUFJLGtEQUFvQixFQUFFLENBQUM7WUFDOUIsMkJBQUksOENBQXVCLElBQUksT0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsUUFBK0I7O1FBQ3BDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBRXBDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVmLFVBQUksQ0FBQyxVQUFVLHFEQUFHLEtBQUssQ0FBQyxDQUFDO1FBRXpCLElBQUksMkJBQUksc0NBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQiwyQkFBSSxzQ0FBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLFFBQStCO1FBQzVDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLElBQUksS0FBSyxZQUFZLHNCQUFzQjtnQkFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFFSCxXQUFXLENBQUMsUUFBK0I7UUFDekMsMkJBQUksOENBQXVCLEtBQUssT0FBQztRQUVqQyxJQUFJLDJCQUFJLDhDQUFnQixDQUFDLElBQUk7WUFBRSwyQkFBSSw4RUFBYSxNQUFqQixJQUFJLEVBQWMsUUFBUSxDQUFDLENBQUM7UUFFM0QsSUFBSSwyQkFBSSw4Q0FBZ0IsQ0FBQyxJQUFJO1lBQUUsMkJBQUksOEVBQWEsTUFBakIsSUFBSSxFQUFjLFFBQVEsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBTUQ7O09BRUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLDJCQUFJLHNDQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQUs7UUFDZCxJQUFJLDJCQUFJLHNDQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxLQUFLLEtBQUssSUFBSTtnQkFBRSxPQUFPO1lBRTNCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQywyQkFBSSxvREFBc0IsQ0FBQyxDQUFDO1lBRXBELDJCQUFJLG9EQUFzQixNQUExQixJQUFJLEVBQXVCLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE9BQU87UUFDVCxDQUFDO2FBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDMUIsMkJBQUksc0NBQVEsQ0FBQyxvQkFBb0IsQ0FBQywyQkFBSSxvREFBc0IsQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXJDLE9BQU87UUFDVCxDQUFDO1FBRUQsMkJBQUksc0NBQVEsQ0FBQyxvQkFBb0IsQ0FBQywyQkFBSSxvREFBc0IsQ0FBQyxDQUFDO1FBRTlELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQywyQkFBSSxvREFBc0IsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQywyQkFBSSxzQ0FBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFBRSwyQkFBSSxvREFBc0IsTUFBMUIsSUFBSSxFQUF1QixLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7b2RBekljLFFBQStCO0lBQzFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFFbEUsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPO0lBRXJCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV6RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJFLElBQUksTUFBTTtRQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUM1RCxDQUFDLHFGQUVZLFFBQStCO0lBQzFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBRXBDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1osSUFBSSwyQkFBSSwwQ0FBWSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFFL0MsMkJBQUksMENBQVksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxPQUFPO0lBQ1QsQ0FBQztJQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUVoRCxJQUFJLENBQUMsMkJBQUksMENBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUVsRCxJQUFJLENBQUMsMkJBQUksMENBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFakQsMkJBQUksMENBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRCxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ2hFLElBQUksV0FBVyxLQUFLLDJCQUFJLDBDQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDekQsSUFBSSxXQUFXO2dCQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV0RSwyQkFBSSwwQ0FBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDckQsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBNEZJLE1BQU0sNEJBQTZCLFNBQVEsdUVBQXFCLENBQ3JFLHNCQUFzQixDQUN2QjtJQUNDLE1BQU0sQ0FBQyxRQUErQjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBRU0sTUFBTSwyQkFBNEIsU0FBUSxrRUFBZ0IsQ0FDL0Qsc0JBQXNCLENBQ3ZCO0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1J3QztBQUNDO0FBQ0c7QUFDaUI7QUFDQTtBQUcxRCxNQUFNLGFBQWMsU0FBUSwyREFBTyxDQUN4Qyx5REFBUyxDQUFDLHNEQUFNLENBQUMsc0VBQXVCLENBQUMsQ0FBQyxDQUMzQztJQUZEOztRQUdFLCtCQUFTLEtBQUssRUFBQztJQWlEakIsQ0FBQztJQTdDQyxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO1FBRXZCLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksUUFBUSxLQUFLLElBQUk7Z0JBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O2dCQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLHNFQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTywyQkFBSSw0QkFBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsSUFBSSwyQkFBSSw0QkFBTyxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBRWxDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsMkJBQUksd0JBQVUsS0FBSyxPQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQStCO1FBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkIsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUU3QixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0IsSUFBSSwyQkFBSSw0QkFBTztZQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxREFBcUQ7SUFDckQsY0FBYyxDQUFDLFFBQStCLElBQVMsQ0FBQzs7O0FBOUNqRCxnQ0FBa0IsR0FBRyxDQUFDLEdBQUcseUNBQXdCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFpRHJFLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RIO0FBQ0g7QUFFckMsU0FBUyxtQkFBbUIsQ0FDakMsTUFBUyxFQUNULGFBQXFCOztJQUVyQixZQUFPLE1BQU0sb0JBQXFCLFNBQVEsdURBQWlCO1lBT3pELFlBQVksR0FBRyxJQUFXO2dCQUN4QixLQUFLLEVBQUUsQ0FBQzs7Z0JBSlYsNkNBQStCO2dCQUMvQixzQ0FBNkIsSUFBSSxFQUFDO2dCQUtoQywyQkFBSSw4QkFBUyxRQUFRLENBQUMsZUFBZSxDQUNuQyw0QkFBNEIsRUFDNUIsTUFBTSxDQUNQLE9BQUM7WUFDSixDQUFDO1lBRUQsZ0JBQWdCLENBQ2QsSUFBOEIsRUFDOUIsUUFBNEMsRUFDNUMsT0FBMkM7Z0JBRTNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFFRCxtQkFBbUIsQ0FDakIsSUFBK0IsRUFDL0IsUUFBNEMsRUFDNUMsT0FBMkM7Z0JBRTNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7WUFFRCxXQUFXLENBQWlCLElBQU87O2dCQUNqQyxJQUFJLElBQUksWUFBWSxVQUFVLEVBQUUsQ0FBQztvQkFDL0IsTUFBTSxLQUFLLEdBQUcsaUNBQUksbUNBQU8sbUNBQUksMkJBQUksMEVBQWEsTUFBakIsSUFBSSxDQUFlLENBQUM7b0JBRWpELE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxJQUFJLElBQUksWUFBWSxFQUFvQixFQUFFLENBQUM7b0JBQ3pDLE1BQU0sS0FBSyxHQUFHLFVBQUksQ0FBQyxLQUFLLG1DQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBRTdDLE1BQU0sS0FBSyxHQUFHLGlDQUFJLG1DQUFPLG1DQUFJLDJCQUFJLDBFQUFhLE1BQWpCLElBQUksQ0FBZSxDQUFDO29CQUVqRCxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUNELE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBRUQsd0JBQXdCLEtBQUksQ0FBQztZQWlCN0IsaUJBQWlCO2dCQUNmLDJCQUFJLHlFQUFZLE1BQWhCLElBQUksQ0FBYyxDQUFDO1lBQ3JCLENBQUM7WUE0QkQsSUFBSSxLQUFLO2dCQUNQLE9BQU8sMkJBQUksbUNBQU8sQ0FBQztZQUNyQixDQUFDO1lBRUQsSUFBSSxXQUFXO2dCQUNiLE9BQU8sMkJBQUksa0NBQU0sQ0FBQztZQUNwQixDQUFDO1lBRUQ7O2VBRUc7WUFDSCxrQkFBa0IsQ0FBQyxhQUFxQixFQUFFLEtBQWE7Z0JBQ3JELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBRXZCLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3BELE9BQU87Z0JBQ1QsQ0FBQztnQkFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBRUQsSUFBSSxnQkFBZ0I7Z0JBR2xCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQztZQUVELElBQUksWUFBWTtnQkFDZCxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFFdEMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ25CLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7b0JBRXhDLElBQUksV0FBVyxLQUFLLElBQUk7d0JBQUUsT0FBTyxJQUFJLENBQUM7b0JBRXRDLElBQUksV0FBVyxZQUFZLGFBQWE7d0JBQUUsT0FBTyxXQUFXLENBQUM7Z0JBQy9ELENBQUM7Z0JBRUQsSUFBSSxhQUFhLEtBQUssSUFBSTtvQkFBRSxPQUFPLElBQUksQ0FBQztnQkFFeEMsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUNuRCxhQUFxQyxDQUFDO2dCQUV4QyxJQUFJLFdBQVcsWUFBWSxhQUFhO29CQUFFLE9BQU8sV0FBVyxDQUFDO2dCQUU3RCxJQUFJLFVBQVUsWUFBWSxhQUFhO29CQUFFLE9BQU8sVUFBVSxDQUFDO2dCQUUzRCxPQUFRLGFBQXNDLENBQUMsWUFBWSxDQUFDO1lBQzlELENBQUM7WUFFRCxJQUFJLHNCQUFzQjtnQkFDeEIsSUFBSSxJQUFJLFlBQVkscURBQWdCO29CQUFFLE9BQU8sSUFBSSxDQUFDO2dCQUVsRCxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUUvQixJQUFJLGFBQWEsS0FBSyxJQUFJO29CQUFFLE9BQU8sYUFBYSxDQUFDO2dCQUVqRCxNQUFNLGdCQUFnQixHQUFJLGFBQXNDO3FCQUM3RCxzQkFBc0IsQ0FBQztnQkFFMUIsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTO29CQUFFLE9BQU8sZ0JBQWdCLENBQUM7Z0JBRTVELE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztTQUNGOzs7Ozs7WUE3R0csTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQztZQUUvQixJQUFJLGFBQWEsS0FBSyxJQUFJO2dCQUFFLE9BQU87WUFFbkMsTUFBTSxnQkFBZ0IsR0FBRyxhQUFxQyxDQUFDO1lBRS9ELE1BQU0sTUFBTSxHQUFHLHNCQUFnQixDQUFDLEtBQUssbUNBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1lBRXRFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFFdkIsSUFBSSxLQUFLLEtBQUssSUFBSTtnQkFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Z0JBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7WUFPQyxJQUFJLDJCQUFJLG1DQUFPLEtBQUssSUFBSTtnQkFBRSxPQUFPLDJCQUFJLG1DQUFPLENBQUM7WUFFN0MsMkJBQUksK0JBQVUsUUFBUSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsT0FBQztZQUUxRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUUzQyxJQUFJLGFBQWEsS0FBSyxJQUFJO2dCQUFFLGFBQWEsQ0FBQyxXQUFXLENBQUMsMkJBQUksbUNBQU8sQ0FBQyxDQUFDO1lBRW5FLDJCQUFJLG1DQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUxQyxLQUFLLE1BQU0sQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FDeEQsSUFBSSxDQUFDLGdCQUFnQixDQUN0QixFQUFFLENBQUM7Z0JBQ0YsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBRTlDLElBQUksS0FBSyxLQUFLLElBQUk7b0JBQUUsU0FBUztnQkFFN0IsMkJBQUksbUNBQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUV2RCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBRUQsT0FBTywyQkFBSSxtQ0FBTyxDQUFDO1FBQ3JCLENBQUM7UUE3Rk0scUJBQWtCLEdBQWEsRUFBRztRQUNsQyxNQUFHLEdBQUcsYUFBYztXQStKM0I7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S21EO0FBQ0w7QUFDdUI7QUFJL0QsTUFBTSxnQkFBaUIsU0FBUSx3REFBTyxDQUMzQyw2REFBVyxDQUFDLDZEQUFtQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUNuRDtJQUZEOztRQUdFLGlDQUFRLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLEVBQUM7UUFDdkUsc0NBQWEsSUFBSSxHQUFHLEVBQXNCLEVBQUM7SUE0RDdDLENBQUM7SUExREMsaUJBQWlCO1FBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDJCQUFJLDhCQUFNLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxRQUFrQjtRQUNoQyxJQUFJLDJCQUFJLG1DQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBRTlELE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztRQUVuQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUFJLG1DQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDdkUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUvQyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFaEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBRXJDLDJCQUFJLDhCQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXhDLE1BQU0sRUFBRSxHQUFHLFlBQVksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUVyRSwyQkFBSSxtQ0FBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVyQyxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUV4QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxRQUFRLENBQUMsUUFBUSxHQUFHLGdCQUFnQjtRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFakQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFFN0MsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuRCxjQUFjLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUVuQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFMUQsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxjQUFjLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUUxQixjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7O0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVQO0FBQ0E7QUFDSTtBQUNrQjtBQUN0QjtBQUNDO0FBSTdDLE1BQU0sSUFBSyxTQUFRLHFEQUFPLENBQ3hCLHlEQUFTLENBQUMsc0RBQU0sQ0FBQyxxREFBTyxDQUFDLHVFQUF3QixDQUFDLENBQUMsQ0FBQyxDQUNyRDtDQUFHO0FBRUcsTUFBTSxZQUFhLFNBQVEsSUFBSTtJQUF0Qzs7UUFjRSw4QkFBaUMsSUFBSSxFQUFDO1FBQ3RDLGlDQUF1QyxJQUFJLEVBQUM7SUE4SDlDLENBQUM7SUFuSUMsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBS0Q7Ozs7O09BS0c7SUFDSCxJQUFJLEtBQUs7UUFDUCxPQUFPLDJCQUFJLDJCQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLDJCQUFJLDJCQUFPLEtBQUssS0FBSztZQUFFLE9BQU87UUFFbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQywyQkFBSSx1QkFBVSxLQUFLLE9BQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO1FBRXZCLElBQUksUUFBUSxLQUFLLElBQUk7WUFDbkIsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVsRSxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ2IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBMkIsQ0FBQztnQkFDekMsT0FBTztZQUNULEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQThCLENBQUM7Z0JBQy9DLE9BQU87WUFDVDtnQkFDRSxPQUFPLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTywyQkFBSSw4QkFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLO1FBQ2hCLElBQUksMkJBQUksOEJBQVUsS0FBSyxLQUFLO1lBQUUsT0FBTztRQUVyQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLDJCQUFJLDBCQUFhLEtBQUssT0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUErQjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFFN0IsSUFBSSwyQkFBSSwyQkFBTyxLQUFLLElBQUk7WUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLDJCQUFJLDJCQUFPLENBQUM7UUFFMUQsSUFBSSwyQkFBSSw4QkFBVSxLQUFLLElBQUk7WUFBRSxPQUFPLENBQUMsWUFBWSxHQUFHLDJCQUFJLDhCQUFVLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUk7WUFDbkQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUk7WUFDckQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQkFBb0IsQ0FDbEIsT0FBaUMsRUFDakMsUUFBd0I7O1FBRXhCLE1BQU0sYUFBYSxHQUFHLFVBQUksQ0FBQyxXQUFXLG1DQUFJLEVBQUUsQ0FBQztRQUU3QyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXhELE1BQU0sRUFDSix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLHFCQUFxQixFQUFFLENBQUMsRUFDeEIsc0JBQXNCLEVBQUUsQ0FBQyxFQUN6QixLQUFLLEdBQ04sR0FBRyxZQUFZLENBQUM7UUFFakIsTUFBTSxNQUFNLEdBQUcsd0JBQXdCLEdBQUcsdUJBQXVCLENBQUM7UUFFbEUsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0JBQW9CLENBQ2xCLE9BQWlDLEVBQ2pDLFFBQXdCOztRQUV4QixNQUFNLGFBQWEsR0FBRyxVQUFJLENBQUMsV0FBVyxtQ0FBSSxFQUFFLENBQUM7UUFFN0MsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4RCxNQUFNLEVBQ0osdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QixxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3RCLEtBQUssR0FDTixHQUFHLFlBQVksQ0FBQztRQUVqQixNQUFNLE1BQU0sR0FBRyx1QkFBdUIsR0FBRyx3QkFBd0IsQ0FBQztRQUVsRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0MsTUFBTSxPQUFPLEdBQUcscUJBQXFCLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsRCxNQUFNLE9BQU8sR0FBRyxzQkFBc0IsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXBELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLFdBQVcsQ0FBQyxLQUFLO1FBQ25CLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxLQUFLO1lBQUUsT0FBTztRQUV4QyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsYUFBYSxDQUFDLHFEQUFZLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7QUEzSU0sK0JBQWtCLEdBQUc7SUFDMUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCO0lBQzFCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLE1BQU07SUFDTixTQUFTO0NBQ1YsQ0FBQztBQXVJSixjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SmtCO0FBQ0o7QUFJakM7QUFDZTtBQUVyQyxNQUFNLGFBQWMsU0FBUSx1RUFBa0IsQ0FDbkQsdUVBQXdCLEVBQ3hCLE9BQU8sQ0FDUjtJQUhEOzs7UUFRRSx5Q0FBbUIsQ0FBQyxDQUFDLEVBQUM7SUFvQ3hCLENBQUM7SUF4Q0MsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBSUQsaUJBQWlCO1FBQ2YsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQVVELElBQUk7UUFDRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLDJCQUFJLDREQUFhLE1BQWpCLElBQUksQ0FBZSxDQUFDO1FBRXBCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQywyQkFBSSxzQ0FBaUIsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0Y7O0lBN0JHLDJCQUFJLGtDQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsRUFBRTtRQUN2RSxJQUFJLENBQUMsYUFBYSxDQUFDLHFEQUFZLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO1lBQUUsMkJBQUksNERBQWEsTUFBakIsSUFBSSxDQUFlLENBQUM7SUFDckQsQ0FBQyxDQUFDLE9BQUM7QUFDTCxDQUFDO0FBMEJILGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRTNDLE1BQU0sZ0JBQWlCLFNBQVEsc0ZBQW1DLENBQ3ZFLE9BQU8sQ0FDUjtDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURzRDtBQUNzQjtBQUs1QztBQUNxQjtBQUNpQjtBQUlwQztBQUNtQjtBQUNGO0FBS3JCO0FBRW9DO0FBUTlCO0FBSUE7QUFJTDtBQUM2QztBQUl6RSxTQUFTLHFCQUFxQixDQUEyQixJQUFPO0lBQ3JFLE9BQU8sS0FBTSxTQUFRLElBQUk7UUFDdkI7O1dBRUc7UUFDSCxNQUFNLENBQUMsT0FBaUM7WUFDdEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLG1FQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVEOztXQUVHO1FBQ0gsT0FBTyxDQUFDLE9BQWtDO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxxRUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFFRDs7V0FFRztRQUNILEtBQUssQ0FBQyxPQUFnQztZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsaUVBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBSUQsUUFBUSxDQUdOLElBQVEsRUFBRSxJQUFTO1lBQ25CLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQzdCLElBQUksSUFBSSxLQUFLLFNBQVM7b0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUU1RCxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQzlDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFeEIsT0FBTyxLQUFLLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEtBQWEsRUFBRSxFQUFFO2dCQUMxRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTFCLElBQUksS0FBSyxLQUFLLFNBQVM7b0JBQUUsT0FBTyxRQUFRLENBQUM7Z0JBRXpDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXhCLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQztZQUVGLE9BQU8sZUFBZSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxJQUFJLENBQUMsT0FBK0I7WUFDbEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLCtEQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVEOztXQUVHO1FBQ0gsU0FBUyxDQUFDLE9BQW9DO1lBQzVDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyx5RUFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxLQUFLLENBQUMsT0FBZ0M7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGlFQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVEOztXQUVHO1FBQ0gsSUFBSSxDQUFDLE9BQStCO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQywrREFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRDs7V0FFRztRQUNILEtBQUssQ0FBQyxPQUFnQztZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsaUVBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLGdCQUFnQixDQUEyQixJQUFPO0lBQ2hFLE9BQU8sS0FBTSxTQUFRLElBQUk7UUFDdkIsTUFBTSxDQUFDLE9BQXNDO1lBQzNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyx3RUFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQsT0FBTyxDQUFDLE9BQXVDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQywwRUFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQW9DO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxvRUFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBRUQsU0FBUyxDQUFDLE9BQXlDO1lBQ2pELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyw4RUFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLFdBQVcsQ0FBaUMsSUFBTztJQUNqRSxPQUFPLEtBQU0sU0FBUSxJQUFJO1FBQ3ZCOztXQUVHO1FBQ0gsd0JBQXdCLENBQ3RCLFlBQWUsRUFDZixPQUFrQztZQUVsQyxNQUFNLE9BQU8sR0FBRyxzRUFBbUIsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUxQixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBRUQsU0FBUyxDQUFDLE9BQXlDO1lBQ2pELE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLDhFQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hFLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVNLFNBQVMsZ0JBQWdCLENBRzlCLGtCQUFxQjtJQUNyQixPQUFPLEtBQU0sU0FBUSxrQkFBa0I7UUFDckMsS0FBSyxDQUFDLE9BQXNDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9FQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxTQUFTLENBQ1AsT0FBOEM7WUFFOUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0ZBQXdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELFNBQVMsQ0FDUCxPQUE4QztZQUU5QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtRkFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQXlDO1lBQzVDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHlFQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFFRCxLQUFLLENBQUMsT0FBc0M7WUFDMUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0VBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNNkQ7QUFFdkQsU0FBUyxVQUFVLENBQXFDLElBQU87O0lBQ3BFLFlBQU8sS0FBTSxTQUFRLElBQUk7WUFBbEI7O2dCQUdMLGlCQUFTLEdBQUcsRUFBQztnQkFDYixrQkFBVSxHQUFHLEVBQUM7WUF1RGhCLENBQUM7WUFyREM7Ozs7O2VBS0c7WUFDSCxJQUFJLEtBQUs7Z0JBQ1AsT0FBTywyQkFBSSxjQUFPLENBQUM7WUFDckIsQ0FBQztZQUVELElBQUksS0FBSyxDQUFDLEtBQUs7Z0JBQ2IsSUFBSSwyQkFBSSxjQUFPLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUVsQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLDJCQUFJLFVBQVUsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxJQUFJLE1BQU07Z0JBQ1IsT0FBTywyQkFBSSxlQUFRLENBQUM7WUFDdEIsQ0FBQztZQUVELElBQUksTUFBTSxDQUFDLEtBQUs7Z0JBQ2QsSUFBSSwyQkFBSSxlQUFRLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUVuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLDJCQUFJLFdBQVcsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsSUFBSSxRQUFRLEtBQUssSUFBSTtvQkFDbkIsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFbEUsUUFBUSxJQUFJLEVBQUUsQ0FBQztvQkFDYixLQUFLLE9BQU87d0JBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxzRUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDOUMsT0FBTztvQkFFVCxLQUFLLFFBQVE7d0JBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxzRUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDL0MsT0FBTztvQkFFVDt3QkFDRSxPQUFPLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO1lBQ0gsQ0FBQztTQUNGOzs7UUExRFEscUJBQWtCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFFO1dBMEQ1RTtBQUNKLENBQUM7QUFFTSxTQUFTLG1CQUFtQixDQUVqQyxJQUFPO0lBQ1AsT0FBTyxLQUFNLFNBQVEsSUFBSTtRQUN2QixpQkFBaUI7WUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFaEUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUVELElBQUksTUFBTTtZQUNSLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztZQUNkLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFFbkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxJQUFJLEtBQUs7WUFDUCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDckIsQ0FBQztRQUVELElBQUksS0FBSyxDQUFDLEtBQUs7WUFDYixJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBRWxDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRXBCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLGFBQWEsQ0FBaUMsSUFBTztJQUNuRSxPQUFPLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHd0M7QUFPWjtBQUtpQztBQUU5RCxTQUFTLFFBQVEsQ0FBcUMsSUFBTzs7SUFDM0QsWUFBTyxNQUFNLFFBQVMsU0FBUSxJQUFJO1lBQTNCOztnQkFHTCx5QkFBMEIsSUFBSSxFQUFDO1lBZ0RqQyxDQUFDO1lBOUNDOzs7Ozs7O2VBT0c7WUFDSCxJQUFJLElBQUk7Z0JBQ04sT0FBTywyQkFBSSxzQkFBTSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLO2dCQUNaLElBQUksMkJBQUksc0JBQU0sS0FBSyxLQUFLO29CQUFFLE9BQU87Z0JBRWpDLElBQ0UsMkJBQUksc0JBQU0sWUFBWSxpREFBSztvQkFDM0IsS0FBSyxZQUFZLGlEQUFLO29CQUN0QiwyQkFBSSxzQkFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBRXhCLE9BQU87Z0JBRVQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO29CQUMzQixJQUFJLENBQUMsY0FBYyxDQUNqQixNQUFNLEVBQ04sQ0FBQywyQkFBSSxrQkFBUyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGlEQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQ2xFLENBQUM7O29CQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsMkJBQUksa0JBQVMsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUM7b0JBQ3BCLElBQUksUUFBUSxLQUFLLElBQUk7d0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7eUJBQ25DLENBQUM7d0JBQ0osTUFBTSxTQUFTLEdBQUcsc0VBQWUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBRTVELElBQUksU0FBUyxLQUFLLFVBQVU7NEJBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3RELENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzRCxDQUFDO1NBQ0Y7O1FBbERRLHFCQUFrQixHQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFFO1dBa0QzRTtBQUNKLENBQUM7QUFFTSxTQUFTLE9BQU8sQ0FBMEMsSUFBTztJQUN0RSxPQUFPLE1BQU0sUUFBUyxTQUFRLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDMUMsTUFBTSxDQUFDLFFBQStCO1lBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkIsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUU3QixJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksaURBQUs7Z0JBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNwRSxJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksdURBQVEsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksOERBQWUsRUFBRSxDQUFDO29CQUN6QyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRSxDQUFDO3FCQUFNLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSw2REFBYyxFQUFFLENBQUM7b0JBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7cUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLDZEQUFjLEVBQUUsQ0FBQztvQkFDL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsV0FBVyxDQUFDLFFBQStCO1lBQ3pDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNO2dCQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFbEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLE9BQU8sQ0FBaUMsSUFBTzs7SUFDN0QsWUFBTyxLQUFNLFNBQVEsUUFBUSxDQUFDLElBQUksQ0FBQztZQUE1Qjs7O1lBc0NQLENBQUM7WUFyQ0MsaUJBQWlCO2dCQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUUxQixJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksdURBQVE7b0JBQUUsMkJBQUksaUNBQWMsTUFBbEIsSUFBSSxFQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRSxDQUFDO1lBRUQsSUFBSSxJQUFJO2dCQUNOLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSzs7Z0JBQ1osSUFBSSxZQUFLLENBQUMsSUFBSSwwQ0FBRSxRQUFRLEVBQUUsT0FBSyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUSxFQUFFO29CQUFFLE9BQU87Z0JBRXpELEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUVuQixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUV0QixJQUFJLElBQUksS0FBSyxJQUFJO29CQUFFLE9BQU87Z0JBRTFCLElBQUksSUFBSSxZQUFZLGlEQUFLO29CQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3FCQUM5QyxJQUFJLElBQUksWUFBWSx1REFBUTtvQkFBRSwyQkFBSSxpQ0FBYyxNQUFsQixJQUFJLEVBQWUsSUFBSSxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQVlELElBQUksZ0JBQWdCO2dCQUNsQix1Q0FBWSxLQUFLLENBQUMsZ0JBQWdCLEtBQUUsSUFBSSxFQUFFLE1BQU0sSUFBRztZQUNyRCxDQUFDO1NBQ0Y7OytDQWJlLFFBQWtCO1lBQzlCLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxHQUFHLElBQUksQ0FBQztZQUV4QyxJQUFJLHNCQUFzQixLQUFLLElBQUk7Z0JBQUUsT0FBTztZQUU1QyxNQUFNLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxRQUFRLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekQsQ0FBQztXQUtEO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2STZEO0FBRXJCO0FBSWxDLE1BQU0sYUFBYSxHQUFHLGdDQUN4QixpREFBSyxDQUFDLElBQUksS0FDYixTQUFTLEVBQUUsS0FBSyxFQUNoQixjQUFjLEVBQUUsSUFBSSxFQUNwQixVQUFVLEVBQUUsSUFBSSxFQUNoQixPQUFPLEVBQUUsSUFBSSxFQUNiLGVBQWUsRUFBRSxJQUFJLEVBQ3JCLFVBQVUsRUFBRSxJQUFJLEVBQ2hCLGFBQWEsRUFBRSxNQUFNLEVBQ3JCLGtCQUFrQixFQUFFLEtBQUssRUFDekIsUUFBUSxFQUFFLEtBQUssRUFDZixXQUFXLEVBQUUsS0FBSyxFQUNsQixtQkFBbUIsRUFBRSxJQUFJLEVBQ3pCLGNBQWMsRUFBRSxLQUFLLEdBQ2IsQ0FBQztBQUVYLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQztBQUVKLFNBQVMsT0FBTyxDQUEwQyxJQUFPOztJQVN0RSxNQUFNLElBQUssU0FBUSxJQUFJO1FBQXZCOztZQVVFLDJCQUE2QixJQUFJLEVBQUM7WUFDbEMsd0JBQXFDLElBQUksRUFBQztZQUMxQyxxQkFBdUIsSUFBSSxFQUFDO1lBQzVCLHlCQUEwQixJQUFJLEVBQUM7WUFDL0Isd0JBQXFDLElBQUksRUFBQztZQUMxQywwQkFBK0IsSUFBSSxFQUFDO1FBbUt0QyxDQUFDO1FBaktDLHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUI7WUFFdkIsSUFBSSxRQUFRLEtBQUssSUFBSTtnQkFDbkIsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVsRSxRQUFRLElBQUksRUFBRSxDQUFDO2dCQUNiLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLHNFQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3QyxPQUFPO2dCQUNULEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQTZCLENBQUM7b0JBQzdDLE9BQU87Z0JBQ1QsS0FBSyxhQUFhO29CQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztvQkFDM0IsT0FBTztnQkFDVCxLQUFLLFlBQVk7b0JBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFxQixDQUFDO29CQUN2QyxPQUFPO2dCQUNULEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQTZCLENBQUM7b0JBQzdDLE9BQU87Z0JBQ1Q7b0JBQ0UsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDN0QsQ0FBQztRQUNILENBQUM7UUFnQkQsSUFBSSxVQUFVO1lBQ1osT0FBTywyQkFBSSx3QkFBWSxDQUFDO1FBQzFCLENBQUM7UUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFLO1lBQ2xCLElBQUksMkJBQUksd0JBQVksS0FBSyxLQUFLO2dCQUFFLE9BQU87WUFFdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQywyQkFBSSxvQkFBZSxLQUFLLE9BQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxJQUFJLFNBQVM7WUFDWCxPQUFPLDJCQUFJLHVCQUFXLENBQUM7UUFDekIsQ0FBQztRQUVELElBQUksU0FBUyxDQUFDLEtBQUs7WUFDakIsSUFBSSwyQkFBSSx1QkFBVyxLQUFLLEtBQUs7Z0JBQUUsT0FBTztZQUV0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLDJCQUFJLG1CQUFjLEtBQUssT0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELElBQUksT0FBTztZQUNULE9BQU8sMkJBQUkscUJBQVMsQ0FBQztRQUN2QixDQUFDO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSztZQUNmLElBQUksMkJBQUkscUJBQVMsS0FBSyxLQUFLO2dCQUFFLE9BQU87WUFFcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQywyQkFBSSxpQkFBWSxLQUFLLE9BQUMsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFRCxNQUFNLENBQUMsUUFBK0I7WUFDcEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUU3QixNQUFNLEtBQUssR0FBRywyQkFBSSx1QkFBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLDJCQUFJLHVCQUFXLEdBQUcsQ0FBQztZQUVwRSxJQUFJLDJCQUFJLHdCQUFZLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQzlCLElBQUksMkJBQUksa0JBQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRWxELElBQUksY0FBYyxLQUFLLElBQUk7d0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQ2IsMkNBQTJDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FDMUQsQ0FBQztvQkFFSixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsY0FBYyxDQUFDO29CQUVwQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLDJCQUFJLGtCQUFNLEdBQUcsMkJBQUksc0JBQVUsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDeEUsQ0FBQztZQUNILENBQUM7aUJBQU0sSUFBSSwyQkFBSSxrQkFBTSxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUMvQixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFeEQsSUFBSSxhQUFhLEtBQUssSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDdkQsTUFBTSxJQUFJLEtBQUssQ0FDYix5Q0FBeUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUN4RCxDQUFDO2dCQUVKLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFbEMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxRQUFRLElBQUksMkJBQUksd0JBQVksRUFBRSxDQUFDO1lBQzNELENBQUM7aUJBQU0sQ0FBQztnQkFDTixPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLDJCQUFJLGtCQUFNLEdBQUcsMkJBQUksc0JBQVUsSUFDbkQsMkJBQUksd0JBQ04sRUFBRSxDQUFDO1lBQ0wsQ0FBQztZQUVELElBQUksMkJBQUkscUJBQVMsS0FBSyxJQUFJO2dCQUFFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsMkJBQUkscUJBQVMsQ0FBQztZQUVoRSxJQUFJLDJCQUFJLHFCQUFTLEtBQUssSUFBSTtnQkFBRSxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUFJLHFCQUFTLENBQUM7WUFFaEUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0gsSUFBSSxJQUFJO1lBQ04sT0FBTywyQkFBSSxrQkFBTSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQ1osSUFBSSwyQkFBSSxrQkFBTSxLQUFLLEtBQUs7Z0JBQUUsT0FBTztZQUVqQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLDJCQUFJLGNBQVMsS0FBSyxPQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCxJQUFJLFFBQVE7WUFDVixPQUFPLDJCQUFJLHNCQUFVLENBQUM7UUFDeEIsQ0FBQztRQUVELElBQUksUUFBUSxDQUFDLEtBQUs7WUFDaEIsSUFBSSwyQkFBSSxzQkFBVSxLQUFLLEtBQUs7Z0JBQUUsT0FBTztZQUVyQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLDJCQUFJLGtCQUFhLEtBQUssT0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELElBQUksVUFBVTs7WUFDWixPQUFPLHVDQUFJLGtCQUFNLDBDQUFFLFFBQVEsRUFBRSxtQ0FBSSxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUVELElBQUksT0FBTztZQUNULE9BQU8sMkJBQUkscUJBQVMsQ0FBQztRQUN2QixDQUFDO1FBRUQsSUFBSSxPQUFPLENBQUMsS0FBSztZQUNmLElBQUksMkJBQUkscUJBQVMsS0FBSyxLQUFLO2dCQUFFLE9BQU87WUFFcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQywyQkFBSSxpQkFBWSxLQUFLLE9BQUMsQ0FBQyxDQUFDO1FBQzFELENBQUM7OztJQWhMTSx1QkFBa0IsR0FBRztRQUMxQixHQUFHLElBQUksQ0FBQyxrQkFBa0I7UUFDMUIsTUFBTTtRQUNOLFNBQVM7UUFDVCxhQUFhO1FBQ2IsWUFBWTtRQUNaLFNBQVM7S0FDVixDQUFDO0lBc0NLLGFBQVEsR0FBRyxhQUFhLENBQUM7SUFFekIsWUFBTyxHQUF5QztRQUNyRCxNQUFNLEVBQUUsUUFBUTtRQUNoQixjQUFjLEVBQUUsaUJBQWlCO1FBQ2pDLGNBQWMsRUFBRSxpQkFBaUI7UUFDakMsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsYUFBYSxFQUFFLGdCQUFnQjtRQUMvQixhQUFhLEVBQUUsZ0JBQWdCO0tBQ2hDLENBQUM7SUFFSyxVQUFLLEdBQUcsVUFBVSxDQUFDO0lBMEg1QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM044QztBQUVlO0FBRXZELFNBQVMsS0FBSyxDQUEwQyxJQUFPOztJQUNwRSxZQUFPLEtBQU0sU0FBUSxVQUFJO1lBQWxCOztnQkFHTCxjQUFNLHVEQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQztZQTRCOUIsQ0FBQztZQTFCQzs7Ozs7ZUFLRztZQUNILElBQUksRUFBRTtnQkFDSixPQUFPLDJCQUFJLFdBQUksQ0FBQztZQUNsQixDQUFDO1lBRUQsSUFBSSxFQUFFLENBQUMsS0FBSztnQkFDVixJQUFJLDJCQUFJLFdBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBRW5DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsMkJBQUksT0FBTyxLQUFLLE9BQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFFRCx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO2dCQUV2QixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUk7b0JBQ3BDLElBQUksQ0FBQyxFQUFFLEdBQUcsc0VBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRS9DLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNELENBQUM7U0FDRjs7UUE5QlEscUJBQWtCLEdBQUcsQ0FBQyxHQUFHLHlDQUF3QixFQUFFLElBQUksQ0FBRTtXQThCaEU7QUFDSixDQUFDO0FBRU0sU0FBUyxPQUFPLENBQTBDLElBQU87O0lBQ3RFLFlBQU8sS0FBTSxTQUFRLFVBQUk7WUFBbEI7O2dCQUdMLGdCQUFRLHVEQUFRLENBQUMsSUFBSSxFQUFFLEVBQUM7WUE0QjFCLENBQUM7WUExQkM7Ozs7O2VBS0c7WUFDSCxJQUFJLElBQUk7Z0JBQ04sT0FBTywyQkFBSSxhQUFNLENBQUM7WUFDcEIsQ0FBQztZQUVELElBQUksSUFBSSxDQUFDLEtBQUs7Z0JBQ1osSUFBSSwyQkFBSSxhQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUVyQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLDJCQUFJLFNBQVMsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsSUFBSSxJQUFJLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxJQUFJO29CQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLHNFQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVqRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzRCxDQUFDO1NBQ0Y7O1FBOUJRLHFCQUFrQixHQUFHLENBQUMsR0FBRyx5Q0FBd0IsRUFBRSxNQUFNLENBQUU7V0E4QmxFO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEU0RDtBQUdDO0FBRXZELFNBQVMsTUFBTSxDQUFxQyxJQUFPOztJQUNoRSxZQUFPLEtBQU0sU0FBUSxJQUFJO1lBS3ZCLFlBQVksR0FBRyxJQUFXO2dCQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFIakIsa0JBQVUsSUFBSSx1REFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQztnQkE0QjdCLGdDQUFzRCxHQUFHLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLDJCQUFJLGVBQVEsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLEVBQUM7Z0JBekJBLDJCQUFJLGVBQVEsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBSSw2QkFBc0IsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFFRCx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO2dCQUV2QixJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUMzQyxNQUFNLFdBQVcsR0FBRyxzRUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLDJCQUFJLGVBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO3dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO2dCQUNuRSxDQUFDO2dCQUVELE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQUVELFVBQVUsQ0FBQyxDQUFTLEVBQUUsQ0FBUztnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBRS9CLDJCQUFJLGVBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQiwyQkFBSSxlQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBTUQ7Ozs7O2VBS0c7WUFDSCxJQUFJLE1BQU07Z0JBQ1IsT0FBTywyQkFBSSxlQUFRLENBQUM7WUFDdEIsQ0FBQztZQUVELElBQUksTUFBTSxDQUFDLEtBQUs7Z0JBQ2QsTUFBTSxPQUFPLEdBQUcsMkJBQUksZUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQUksZUFBUSxDQUFDLENBQUM7Z0JBRXhELE9BQU8sQ0FBQyxDQUFDLDJCQUFJLFdBQVcsS0FBSyxPQUFDLEVBQUUsMkJBQUksNkJBQXNCLENBQUMsQ0FBQztZQUM5RCxDQUFDO1NBQ0Y7OztRQWpEUSxxQkFBa0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBRTtXQWlEbkU7QUFDSixDQUFDO0FBRU0sU0FBUyxlQUFlLENBRTdCLElBQU87SUFDUCxPQUFPLEtBQU0sU0FBUSxJQUFJO1FBQ3ZCLGlCQUFpQjtZQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRCxVQUFVLENBQUMsQ0FBUyxFQUFFLENBQVM7WUFDN0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxJQUFJLE1BQU07WUFDUixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQztRQUVELElBQUksTUFBTSxDQUFDLEtBQUs7WUFDZCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUVyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQztRQUVELGFBQWE7WUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBaUMsSUFBTztJQUMvRCxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN2QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGOEQ7QUFDWjtBQUluRCxTQUFTLG1CQUFtQixDQUMxQixJQUFPLEVBQ1AsYUFBcUI7O0lBRXJCLFlBQU8sS0FBTSxTQUFRLHVEQUFVLENBQUMsK0NBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUF0Qzs7Z0JBTUwsa0JBQWtCLGFBQWEsRUFBQztZQXdEbEMsQ0FBQztZQXREQyx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO2dCQUV2QixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxRQUFRLEtBQUssSUFBSTt3QkFBRSxPQUFPO29CQUU5QixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQWtCLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBRUQsSUFBSSxPQUFPO2dCQUNULFFBQVEsMkJBQUksZUFBUSxFQUFFLENBQUM7b0JBQ3JCLEtBQUssU0FBUzt3QkFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3JCLEtBQUssUUFBUTt3QkFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JCLENBQUM7WUFFRCxJQUFJLFFBQVE7Z0JBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFFRCxJQUFJLE1BQU07Z0JBQ1IsUUFBUSwyQkFBSSxlQUFRLEVBQUUsQ0FBQztvQkFDckIsS0FBSyxTQUFTO3dCQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsS0FBSyxRQUFRO3dCQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLFVBQVU7Z0JBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxJQUFJLFdBQVc7Z0JBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFRCxJQUFJLE1BQU07Z0JBQ1IsT0FBTywyQkFBSSxlQUFRLENBQUM7WUFDdEIsQ0FBQztZQUVELElBQUksTUFBTSxDQUFDLEtBQUs7Z0JBQ2QsSUFBSSwyQkFBSSxlQUFRLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUVuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLDJCQUFJLFdBQVcsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1NBQ0Y7O1FBN0RRLHFCQUFrQixHQUFHO1lBQzFCLEdBQUcsdURBQVUsQ0FBQywrQ0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1lBQzlDLFFBQVE7U0FDUjtXQTBERjtBQUNKLENBQUM7QUFFTSxTQUFTLGtCQUFrQixDQUNoQyxJQUFPLEVBQ1AsYUFBcUI7SUFFckIsT0FBTyxLQUFNLFNBQVEsbUJBQW1CLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQztRQUMzRCxxQkFBcUIsQ0FDbkIsT0FBaUMsRUFDakMsUUFBeUI7WUFFekIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELG9CQUFvQixDQUNsQixPQUFpQyxFQUNqQyxRQUF3QjtZQUV4QixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUV0QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUUxQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FDaEMsSUFBTyxFQUNQLGFBQXFCO0lBRXJCLE9BQU8sS0FBTSxTQUFRLHdEQUFlLENBQ2xDLGdFQUFtQixDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUM5RDtRQUNDLGFBQWE7WUFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsSUFBSSxNQUFNO1lBQ1IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3RCLENBQUM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO1lBQ2QsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hvRDtBQUNaO0FBTVo7QUFHaUM7QUFJOUQsU0FBUyxVQUFVLENBQXFDLElBQU87O0lBQzdELFlBQU8sS0FBTSxTQUFRLElBQUk7WUFBbEI7O2dCQU9MLGtCQUE0QixJQUFJLEVBQUM7Z0JBQ2pDLHFCQUE0QixJQUFJLEVBQUM7WUEwRW5DLENBQUM7WUF4RUM7Ozs7O2VBS0c7WUFDSCxJQUFJLFNBQVM7Z0JBQ1gsT0FBTywyQkFBSSxrQkFBVyxDQUFDO1lBQ3pCLENBQUM7WUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLDJCQUFJLGtCQUFXLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUV0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLDJCQUFJLGNBQWMsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQ7Ozs7Ozs7ZUFPRztZQUNILElBQUksTUFBTTtnQkFDUixPQUFPLDJCQUFJLGVBQVEsQ0FBQztZQUN0QixDQUFDO1lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztnQkFDZCxJQUFJLDJCQUFJLGVBQVEsS0FBSyxLQUFLO29CQUFFLE9BQU87Z0JBRW5DLElBQ0UsMkJBQUksZUFBUSxZQUFZLGlEQUFLO29CQUM3QixLQUFLLFlBQVksaURBQUs7b0JBQ3RCLDJCQUFJLGVBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUUxQixPQUFPO2dCQUVULElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtvQkFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FDakIsUUFBUSxFQUNSLENBQUMsMkJBQUksV0FBVyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGlEQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFDLENBQ3BFLENBQUM7O29CQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsMkJBQUksV0FBVyxLQUFLLE9BQUMsQ0FBQyxDQUFDO1lBQzdELENBQUM7WUFFRCx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO2dCQUV2QixRQUFRLElBQUksRUFBRSxDQUFDO29CQUNiLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDZCxDQUFDOzRCQUNDLElBQUksUUFBUSxLQUFLLElBQUk7Z0NBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUNBQ3JDLENBQUM7Z0NBQ0osTUFBTSxXQUFXLEdBQUcsc0VBQWUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQzlELElBQUksV0FBVyxLQUFLLFVBQVU7b0NBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7NEJBQzVELENBQUM7d0JBQ0gsQ0FBQzt3QkFDRCxNQUFNO29CQUNSLENBQUM7b0JBRUQsS0FBSyxZQUFZO3dCQUNmLElBQUksQ0FBQyxTQUFTOzRCQUNaLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsc0VBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlELE1BQU07b0JBRVI7d0JBQ0UsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzdELENBQUM7WUFDSCxDQUFDO1NBQ0Y7OztRQWpGUSxxQkFBa0IsR0FBYTtZQUNwQyxHQUFHLElBQUksQ0FBQyxrQkFBa0I7WUFDMUIsUUFBUTtZQUNSLFlBQVk7U0FDWjtXQTZFRjtBQUNKLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBMEMsSUFBTztJQUN4RSxPQUFPLE1BQU0sVUFBVyxTQUFRLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDOUMsTUFBTSxDQUFDLFFBQStCO1lBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkIsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUU3QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sWUFBWSxpREFBSztvQkFDOUIsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLFlBQVksdURBQVEsRUFBRSxDQUFDO29CQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLFlBQVksOERBQWUsRUFBRSxDQUFDO3dCQUMzQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FDOUMsT0FBTyxFQUNQLElBQUksQ0FBQyxNQUFNLENBQ1osQ0FBQztvQkFDSixDQUFDO3lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sWUFBWSw2REFBYzt3QkFDOUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQzdDLE9BQU8sRUFDUCxJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7eUJBQ0MsSUFBSSxJQUFJLENBQUMsTUFBTSxZQUFZLDZEQUFjO3dCQUM1QyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDN0MsT0FBTyxFQUNQLElBQUksQ0FBQyxNQUFNLENBQ1osQ0FBQztnQkFDTixDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJO2dCQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsRSxDQUFDO1FBRUQsV0FBVyxDQUFDLFFBQStCO1lBQ3pDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNO2dCQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFdEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBaUMsSUFBTzs7SUFDL0QsWUFBTyxLQUFNLFNBQVEsVUFBVSxDQUFDLElBQUksQ0FBQztZQUE5Qjs7O1lBMERQLENBQUM7WUF6REMsaUJBQWlCO2dCQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUUxQixJQUFJLElBQUksQ0FBQyxNQUFNLFlBQVksdURBQVE7b0JBQUUsMkJBQUksbUNBQWdCLE1BQXBCLElBQUksRUFBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pFLENBQUM7WUFFRCxJQUFJLFNBQVM7Z0JBQ1gsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ3pCLENBQUM7WUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUV0QyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFFeEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztnQkFFbEMsSUFBSSxTQUFTLEtBQUssSUFBSTtvQkFBRSxPQUFPO2dCQUUvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFFRCxJQUFJLE1BQU07Z0JBQ1IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLOztnQkFDZCxJQUFJLFlBQUssQ0FBQyxNQUFNLDBDQUFFLFFBQVEsRUFBRSxPQUFLLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxRQUFRLEVBQUU7b0JBQUUsT0FBTztnQkFFM0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBRXJCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBRXhCLElBQUksTUFBTSxLQUFLLElBQUk7b0JBQUUsT0FBTztnQkFFNUIsSUFBSSxNQUFNLFlBQVksaURBQUs7b0JBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7cUJBQ2xELElBQUksTUFBTSxZQUFZLHVEQUFRO29CQUFFLDJCQUFJLG1DQUFnQixNQUFwQixJQUFJLEVBQWlCLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFZRCxJQUFJLGdCQUFnQjtnQkFDbEIsdUNBQ0ssS0FBSyxDQUFDLGdCQUFnQixLQUN6QixNQUFNLEVBQUUsUUFBUSxFQUNoQixTQUFTLEVBQUUsY0FBYyxJQUN6QjtZQUNKLENBQUM7U0FDRjs7bURBakJpQixRQUFrQjtZQUNoQyxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFFeEMsSUFBSSxzQkFBc0IsS0FBSyxJQUFJO2dCQUFFLE9BQU87WUFFNUMsTUFBTSxVQUFVLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzNELENBQUM7V0FTRDtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TXdDO0FBQ29CO0FBTXRCO0FBR3VCO0FBQ1o7QUFFM0MsU0FBUyxhQUFhLENBQXFDLElBQU87O0lBQ3ZFLFlBQU8sTUFBTSxhQUFjLFNBQVEsSUFBSTtZQWdCckMsWUFBWSxHQUFHLElBQVc7Z0JBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQVBqQixnQ0FBVSx1REFBUSxDQUFDLElBQUksRUFBRSxFQUFDO2dCQUMxQiwrQkFBUyxpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDMUIseUNBQW1CLGlEQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUNwQywrQkFBUyx1REFBUSxDQUFDLEdBQUcsRUFBRSxFQUFDO2dCQUN4QixrQ0FBWSx1REFBUSxDQUFDLElBQUksRUFBRSxFQUFDO2dCQWtCNUIsNkNBQStDLEdBQUcsRUFBRTtvQkFDbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsMkJBQUksNEJBQU8sQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLEVBQUM7Z0JBZ0JGLG9EQUE4QixDQUFDLENBQUMsRUFBQztnQkFFakMsdURBQXlELEdBQUcsRUFBRTtvQkFDNUQsMkJBQUksNkNBQStCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBQztvQkFFckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQy9ELENBQUMsRUFBQztnQkE0QkYsOENBQXNELEdBQUcsRUFBRTtvQkFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsMkJBQUksNkJBQVEsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLEVBQUM7Z0JBd0ZGLDZDQUFxRCxHQUFHLEVBQUU7b0JBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLDJCQUFJLDRCQUFPLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxFQUFDO2dCQTRCRiw2Q0FBdUIsQ0FBQyxDQUFDLEVBQUM7Z0JBRTFCLGdEQUF3RCxHQUFHLEVBQUU7b0JBQzNELDJCQUFJLHNDQUF3QixXQUFXLENBQUMsR0FBRyxFQUFFLE9BQUM7b0JBRTlDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLDJCQUFJLCtCQUFVLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxFQUFDO2dCQS9MQSwyQkFBSSw2QkFBUSxDQUFDLGlCQUFpQixDQUFDLDJCQUFJLDJDQUFzQixDQUFDLENBQUM7Z0JBRTNELDJCQUFJLDRCQUFPLENBQUMsaUJBQWlCLENBQUMsMkJBQUksMENBQXFCLENBQUMsQ0FBQztnQkFFekQsMkJBQUksc0NBQWlCLENBQUMsaUJBQWlCLENBQ3JDLDJCQUFJLG9EQUErQixDQUNwQyxDQUFDO2dCQUVGLDJCQUFJLDRCQUFPLENBQUMsaUJBQWlCLENBQUMsMkJBQUksMENBQXFCLENBQUMsQ0FBQztnQkFFekQsMkJBQUksK0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBSSw2Q0FBd0IsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFNRDs7Ozs7ZUFLRztZQUNILElBQUksS0FBSztnQkFDUCxPQUFPLDJCQUFJLDRCQUFPLENBQUM7WUFDckIsQ0FBQztZQUVELElBQUksS0FBSyxDQUFDLEtBQUs7Z0JBQ2IsMkJBQUksNEJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQywyQkFBSSx3QkFBVSxLQUFLLE9BQUMsRUFBRSwyQkFBSSwwQ0FBcUIsQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFTRDs7Ozs7ZUFLRztZQUNILElBQUksZUFBZTtnQkFDakIsT0FBTywyQkFBSSxzQ0FBaUIsQ0FBQztZQUMvQixDQUFDO1lBRUQsSUFBSSxlQUFlLENBQUMsS0FBSztnQkFDdkIsMkJBQUksc0NBQWlCLENBQUMsT0FBTyxDQUMzQixDQUFDLDJCQUFJLGtDQUFvQixLQUFLLE9BQUMsRUFDL0IsMkJBQUksb0RBQStCLENBQ3BDLENBQUM7WUFDSixDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxJQUFJLE1BQU07Z0JBQ1IsT0FBTywyQkFBSSw2QkFBUSxDQUFDO1lBQ3RCLENBQUM7WUFNRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO2dCQUNkLDJCQUFJLDZCQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsMkJBQUkseUJBQVcsS0FBSyxPQUFDLEVBQUUsMkJBQUksMkNBQXNCLENBQUMsQ0FBQztZQUMzRSxDQUFDO1lBRUQsY0FBYyxDQUFDLFNBQWlCO2dCQUM5QixNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRTlCLElBQUksMkJBQUksc0NBQWlCLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUN4QyxNQUFNLFdBQVcsR0FDZixDQUFDLDJCQUFJLHNDQUFpQixDQUFDLDJCQUFJLDRCQUFPLENBQUMsSUFBSSxDQUFDO3dCQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsMkJBQUksaURBQTRCLENBQUMsQ0FBQzt3QkFDOUQsSUFBSSxDQUFDO29CQUVQLElBQUksV0FBVyxLQUFLLENBQUM7d0JBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsMkJBQUksNEJBQU8sQ0FBQyxDQUFDOzt3QkFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBSSw0QkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQztnQkFDbkQsQ0FBQztnQkFFRCxJQUFJLDJCQUFJLCtCQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSwyQkFBSSwrQkFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDckQsTUFBTSxhQUFhLEdBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRywyQkFBSSwwQ0FBcUIsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFFOUQsSUFBSSw4REFBVSxDQUFDLDJCQUFJLDZCQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksOERBQVUsQ0FBQywyQkFBSSw2QkFBUSxFQUFFLEdBQUcsQ0FBQzt3QkFDaEUsMkJBQUkseUJBQVcsMkJBQUksNkJBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBQztvQkFFckMsSUFBSSxhQUFhLEtBQUssQ0FBQzt3QkFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSwyQkFBSSw2QkFBUSxDQUFDLENBQUM7O3dCQUVuRSxJQUFJLENBQUMsVUFBVSxDQUNiLDJCQUFJLCtCQUFVLENBQUMsQ0FBQyxHQUFHLGFBQWEsRUFDaEMsMkJBQUksK0JBQVUsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUNqQyxDQUFDO2dCQUNOLENBQUM7WUFDSCxDQUFDO1lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3RCLFFBQVEsSUFBSSxFQUFFLENBQUM7d0JBQ2IsS0FBSyxPQUFPOzRCQUNWLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dDQUFFLE9BQU87NEJBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsc0VBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQzdDLE1BQU07d0JBQ1IsS0FBSyxrQkFBa0I7NEJBQ3JCLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO2dDQUFFLE9BQU87NEJBQ3pELElBQUksQ0FBQyxlQUFlLEdBQUcsc0VBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ3ZELE1BQU07d0JBQ1IsS0FBSyxRQUFROzRCQUNYLElBQUksMkJBQUksNkJBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRO2dDQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLHNFQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNuRCxNQUFNO3dCQUNSLEtBQUssT0FBTzs0QkFDVixNQUFNLFFBQVEsR0FBRyxzRUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDcEQsSUFBSSxDQUFDLDJCQUFJLDRCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQ0FBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzs0QkFDekQsTUFBTTt3QkFDUixLQUFLLFVBQVU7NEJBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxzRUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDbkQsTUFBTTtvQkFDVixDQUFDO2dCQUNILENBQUM7Z0JBRUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0QsQ0FBQztZQUVELFVBQVUsQ0FBQyxDQUFTLEVBQUUsQ0FBUztnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBRS9CLDJCQUFJLDZCQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsMkJBQUksNkJBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUM7WUFFRDs7ZUFFRztZQUNILGVBQWUsQ0FBQyxLQUFZO2dCQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLGlEQUFLLENBQUMsT0FBTyxDQUFDLDJCQUFJLDRCQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBRUQ7O2VBRUc7WUFDSCxzQkFBc0IsQ0FBQyxLQUFZO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLGlEQUFLLENBQUMsT0FBTyxDQUFDLDJCQUFJLDRCQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBTUQ7Ozs7Ozs7ZUFPRztZQUNILElBQUksS0FBSztnQkFDUCxPQUFPLDJCQUFJLDRCQUFPLENBQUM7WUFDckIsQ0FBQztZQUVELElBQUksS0FBSyxDQUFDLEtBQXdCO2dCQUNoQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUM5QixNQUFNLFdBQVcsR0FBRyxJQUFJLHVEQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXhDLElBQUksMkJBQUksNEJBQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO3dCQUFFLE9BQU87b0JBRTVDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsMkJBQUksd0JBQVUsV0FBVyxPQUFDLENBQUMsQ0FBQztvQkFFMUQsT0FBTztnQkFDVCxDQUFDO2dCQUVELDJCQUFJLDRCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsMkJBQUksd0JBQVUsS0FBSyxPQUFDLEVBQUUsMkJBQUksMENBQXFCLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBVUQ7Ozs7O2VBS0c7WUFDSCxJQUFJLFFBQVE7Z0JBQ1YsT0FBTywyQkFBSSwrQkFBVSxDQUFDO1lBQ3hCLENBQUM7WUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLO2dCQUNoQiwyQkFBSSwrQkFBVSxDQUFDLE9BQU8sQ0FDcEIsQ0FBQywyQkFBSSwyQkFBYSxLQUFLLE9BQUMsRUFDeEIsMkJBQUksNkNBQXdCLENBQzdCLENBQUM7WUFDSixDQUFDO1NBQ0Y7Ozs7Ozs7Ozs7Ozs7UUFuT1EscUJBQWtCLEdBQWE7WUFDcEMsR0FBRyxJQUFJLENBQUMsa0JBQWtCO1lBQzFCLE9BQU87WUFDUCxrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLE9BQU87WUFDUCxVQUFVO1NBQ1Y7V0E0TkY7QUFDSixDQUFDO0FBRUQsU0FBUyxZQUFZLENBRW5CLElBQU87SUFDUCxPQUFPLE1BQU0sWUFBYSxTQUFRLElBQUk7UUFDcEMsTUFBTSxDQUFDLFFBQStCO1lBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkIsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUU3QixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQsV0FBVyxDQUFDLFFBQStCO1lBQ3pDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBSU0sTUFBTSx3QkFBeUIsU0FBUSxZQUFZLENBQ3hELGFBQWEsQ0FBQyxxRkFBNEIsQ0FBQyxDQUM1QztDQUFHO0FBRUcsTUFBTSx1QkFBd0IsU0FBUSxZQUFZLENBQ3ZELGFBQWEsQ0FBQyxvRkFBMkIsQ0FBQyxDQUMzQztDQUFHO0FBRUcsU0FBUyxZQUFZLENBQWlDLElBQU87O0lBQ2xFLFlBQU8sTUFBTSxzQkFBdUIsU0FBUSxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQXhEOzs7Z0JBYUwsc0RBQXVCLEdBQUcsRUFBRTtvQkFDMUIsMkJBQUksMkZBQTBCLE1BQTlCLElBQUksQ0FBNEIsQ0FBQztnQkFDbkMsQ0FBQyxFQUFDO1lBcUNKLENBQUM7WUFuREMsSUFBSSxNQUFNO2dCQUNSLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN0QixDQUFDO1lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztnQkFDZCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUzQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFFckIsSUFBSSxNQUFNO29CQUFFLDJCQUFJLDJGQUEwQixNQUE5QixJQUFJLENBQTRCLENBQUM7WUFDL0MsQ0FBQztZQU1ELElBQUksS0FBSztnQkFDUCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELElBQUksS0FBSyxDQUFDLEtBQUs7Z0JBQ2IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFMUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBRXBCLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsMkJBQUksbURBQXFCLENBQUMsQ0FBQztnQkFFekQsSUFBSSxNQUFNO29CQUFFLDJCQUFJLDJGQUEwQixNQUE5QixJQUFJLENBQTRCLENBQUM7WUFDL0MsQ0FBQztZQUVELGlCQUFpQjtnQkFDZixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFFMUIsMkJBQUksMkZBQTBCLE1BQTlCLElBQUksQ0FBNEIsQ0FBQztZQUNuQyxDQUFDO1NBaUJGOzs7O1lBZEcsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUU7aUJBQzlCLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDM0MsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QyxJQUFJLFNBQVMsQ0FBQyxVQUFVO2dCQUFFLE9BQU87WUFFakMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1lBRXZDLElBQUksQ0FBQyxrQkFBa0IsQ0FDckIsV0FBVyxFQUNYLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDeEMsQ0FBQztRQUNKLENBQUM7V0FDRDtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxVXlDO0FBRW5DLFNBQVMsT0FBTyxDQUFpQyxJQUFPO0lBQzdELE9BQU8sS0FBTSxTQUFRLHVEQUFVLENBQUMsSUFBSSxDQUFDO1FBQ25DOztXQUVHO1FBQ0gsY0FBYztZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUMzQixTQUFTLEVBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUN6QyxDQUFDO1FBQ0osQ0FBQztRQUVELElBQUksTUFBTTtZQUNSLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztZQUNkLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFFbkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLEtBQUs7WUFDUCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDckIsQ0FBQztRQUVELElBQUksS0FBSyxDQUFDLEtBQUs7WUFDYixJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBRWxDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRXBCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzZEO0FBQ1A7QUFHaEQsU0FBUyxrQkFBa0IsQ0FHaEMsSUFBTyxFQUFFLFFBQVc7O0lBQ3BCLFlBQU8sS0FBTSxTQUFRLDBFQUFrQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7WUFPdEQsWUFBWSxHQUFHLElBQVc7Z0JBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUxqQixnQ0FBd0M7Z0JBQ3hDLG9CQUFZLEtBQUssRUFBQztnQkFDbEIscUJBQWEsS0FBSyxFQUFDO2dCQUtqQiwyQkFBSSxpQkFBaUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBQztZQUN4RCxDQUFDO1lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsSUFBSSxRQUFRLEtBQUssSUFBSTtvQkFDbkIsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFbEUsUUFBUSxJQUFJLEVBQUUsQ0FBQztvQkFDYixLQUFLLFFBQVE7d0JBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7d0JBQ3ZCLE9BQU87b0JBRVQsS0FBSyxPQUFPO3dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsc0VBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlDLE9BQU87b0JBRVQsS0FBSyxRQUFRO3dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsc0VBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQy9DLE9BQU87b0JBRVQ7d0JBQ0UsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztZQUNILENBQUM7WUFFRCxpQkFBaUI7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ2pCLDJCQUFJLHFCQUFjLEVBQ2xCLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUMxQyxDQUFDO1lBQ0osQ0FBQztZQUVELElBQUksWUFBWTtnQkFDZCxPQUFPLDJCQUFJLHFCQUFjLENBQUM7WUFDNUIsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsSUFBSSxNQUFNO2dCQUNSLE9BQU8sMkJBQUkscUJBQWMsQ0FBQyxHQUFHLENBQUM7WUFDaEMsQ0FBQztZQUVELElBQUksTUFBTSxDQUFDLEtBQUs7Z0JBQ2QsSUFBSSxLQUFLLEtBQUssMkJBQUkscUJBQWMsQ0FBQyxHQUFHO29CQUFFLE9BQU87Z0JBRTdDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsMkJBQUkscUJBQWMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFFaEUsMkJBQUkscUJBQWMsQ0FBQyxnQkFBZ0IsQ0FDakMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ3ZDLEdBQUcsRUFBRTtvQkFDSCxJQUFJLDJCQUFJLGlCQUFVLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSwyQkFBSSxrQkFBVzs0QkFBRSxPQUFPO3dCQUU1QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBRWhELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7b0JBQzlDLENBQUM7eUJBQU0sSUFBSSwyQkFBSSxrQkFBVyxFQUFFLENBQUM7d0JBQzNCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFFbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztvQkFDN0MsQ0FBQzt5QkFBTSxDQUFDO3dCQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNqQyxDQUFDO2dCQUNILENBQUMsQ0FDRixDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU0sQ0FBQyxRQUErQjtnQkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ3hCLDJCQUFJLHFCQUFjLEVBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNkLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDO2dCQUVGLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDZCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxNQUFNLENBQ1osQ0FBQztnQkFFRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFFRCxJQUFJLFVBQVU7Z0JBQ1osT0FBTywyQkFBSSxxQkFBYyxZQUFZLGdCQUFnQjtvQkFDbkQsQ0FBQyxDQUFDLDJCQUFJLHFCQUFjLENBQUMsWUFBWTtvQkFDakMsQ0FBQyxDQUFDLDJCQUFJLHFCQUFjLENBQUMsVUFBVSxDQUFDO1lBQ3BDLENBQUM7WUFFRCxJQUFJLEtBQUs7Z0JBQ1AsT0FBTywyQkFBSSxxQkFBYyxDQUFDLEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBRUQsSUFBSSxLQUFLLENBQUMsS0FBSztnQkFDYixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV2QyxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSztvQkFBRSxPQUFPO2dCQUV4QywyQkFBSSxhQUFhLElBQUksT0FBQztnQkFFdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQywyQkFBSSxxQkFBYyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUV4RSxJQUFJLDJCQUFJLGtCQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBRXJELE1BQU0sVUFBVSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUUzQyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQztZQUM1QixDQUFDO1lBRUQsSUFBSSxXQUFXO2dCQUNiLE9BQU8sMkJBQUkscUJBQWMsWUFBWSxnQkFBZ0I7b0JBQ25ELENBQUMsQ0FBQywyQkFBSSxxQkFBYyxDQUFDLGFBQWE7b0JBQ2xDLENBQUMsQ0FBQywyQkFBSSxxQkFBYyxDQUFDLFdBQVcsQ0FBQztZQUNyQyxDQUFDO1lBRUQsSUFBSSxNQUFNO2dCQUNSLE9BQU8sMkJBQUkscUJBQWMsQ0FBQyxNQUFNLENBQUM7WUFDbkMsQ0FBQztZQUVELElBQUksTUFBTSxDQUFDLEtBQUs7Z0JBQ2QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU07b0JBQUUsT0FBTztnQkFFekMsMkJBQUksY0FBYyxJQUFJLE9BQUM7Z0JBRXZCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsMkJBQUkscUJBQWMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFFMUUsSUFBSSwyQkFBSSxpQkFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUVyRCxNQUFNLFdBQVcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUM7WUFDNUIsQ0FBQztTQUNGOzs7O1FBN0pRLHFCQUFrQixHQUFHLENBQUMsR0FBRyx5Q0FBd0IsRUFBRSxRQUFRLENBQUU7V0E2SnBFO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLd0Q7QUFDRjtBQUNkO0FBRU07QUFrQi9DLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUMzQixtQkFBbUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUMxRCxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO0FBRTNELE1BQU0sZUFBZSxHQUF3QjtJQUNsRCxNQUFNLENBQUMsV0FBVztRQUNoQixPQUFPLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLFdBQVc7UUFDakIsUUFBUSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxLQUFLLE1BQU07Z0JBQ1QsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLE9BQU87Z0JBQ1YsT0FBTyxLQUFLLENBQUM7WUFDZjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixXQUFXLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDSCxDQUFDO0lBQ0QsWUFBWSxDQUFDLFdBQVc7UUFDdEIsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEUsTUFBTSxZQUFZLEdBQUcsSUFBSSwrREFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxLQUFLLENBQUMsV0FBVztRQUNmLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakQsUUFBUSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGlEQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksaURBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxLQUFLLENBQUM7Z0JBQ0osT0FBTyxJQUFJLGlEQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQztnQkFDSixPQUFPLElBQUksaURBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssQ0FBQztnQkFDSixPQUFPLENBQUMsSUFBSSxDQUNWLFNBQVMsT0FBTyxDQUFDLE1BQU0sNERBQTRELENBQ3BGLENBQUM7WUFDSjtnQkFDRSxPQUFPLElBQUksaURBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDO0lBQ0gsQ0FBQztJQUNELGVBQWUsQ0FBQyxXQUFXO1FBQ3pCLElBQUksV0FBVyxLQUFLLE1BQU0sSUFBSSxXQUFXLEtBQUssVUFBVTtZQUN0RCxPQUFPLFdBQVcsQ0FBQztRQUVyQixPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELFFBQVEsQ0FBQyxXQUFXO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXZFLFFBQVEsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQztnQkFDSixPQUFPLElBQUksdURBQVEsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQztnQkFDSixPQUFPLElBQUksdURBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUM7Z0JBQ0osT0FBTyxDQUFDLElBQUksQ0FDVixTQUFTLE9BQU8sQ0FBQyxNQUFNLDhEQUE4RCxDQUN0RixDQUFDO1lBQ0o7Z0JBQ0UsT0FBTyxJQUFJLHVEQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDSCxDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNDLElBQUksSUFBSSxLQUFLLElBQUk7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXpFLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBbUIsQ0FBQztRQUV2QyxPQUFPLElBQUksaURBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNHSyxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDaEQsS0FBSyxDQUFDLE9BQU8sQ0FDWCxhQUFhLEVBQ2IsQ0FBQyxDQUFDLEVBQUUsZUFBdUIsRUFBRSxjQUFzQixFQUFFLEVBQUUsQ0FDckQsR0FBRyxlQUFlLElBQUksY0FBYyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQ3ZELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0xHLFNBQVMsVUFBVSxDQUFDLEdBQU8sRUFBRSxXQUF3QjtJQUMxRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXJFLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQzdCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0MsSUFBSSxTQUFTLEtBQUssSUFBSTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUNiLHFDQUFxQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDM0QsQ0FBQztRQUVKLE9BQU8sVUFBVSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXRDLE9BQU8sVUFBVSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUM7QUFDdEMsQ0FBQzs7Ozs7OztTQ2pCRDtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmlFO0FBSTVCO0FBQ0c7QUFDTTtBQUNOO0FBR2E7QUFDb0I7QUFDakI7QUFJckI7QUFDNEM7QUFPbkQ7QUFFYztBQUNlO0FBQ0g7QUFDWjtBQU8xQyxTQUFTLEtBQUssQ0FBQyxJQUFZLEVBQUUsSUFBYTtJQUN4QyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVwRSxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5DLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztJQUVsQixTQUFTLElBQUk7UUFDWCxNQUFNLE1BQU0sR0FBRztZQUNiLEtBQUs7WUFDTCxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUksS0FBSyxJQUFJO1NBQzVCLENBQUM7UUFFRixLQUFLLElBQUksSUFBSSxDQUFDO1FBRWQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELE9BQU87UUFDTCxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDZixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJO0tBQ0wsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FDckIsS0FBYSxFQUNiLFNBQStCO0lBRS9CLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFRRCxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSwwRUFBcUIsQ0FBQyxDQUFDO0FBdUIzRCxNQUFNLFFBQVEsR0FBdUM7SUFDbkQsUUFBUSxFQUFFO1FBQ1IsYUFBYSxFQUFFLDBFQUFxQjtRQUNwQyxjQUFjO1FBQ2QsS0FBSyxFQUFFO1lBQ0wsYUFBYSxFQUFFLGlFQUFhO1lBQzVCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtTQUN2QjtLQUNGO0NBQ0YsQ0FBQztBQWlCQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9hbmdsZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvYm9yZGVyUmFkaXVzLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9jbGljay50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvY29sb3IudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL2dyYWRpZW50LnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9rZXlib2FyZC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvbW91c2UudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL3JhbmRvbS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvc2hhZG93LnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9zdGF0ZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvdW5pdHMudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL3ZlY3RvcjJkLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvYXVkaW8vYXVkaW8udHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy9kb2N1bWVudC9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy9kb2N1bWVudC9kb21CYXNlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvZG9jdW1lbnQvcGFyYWdyYXBoLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvZG9jdW1lbnQvc3Bhbi50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL21peGFibGUudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvYmV6aWVyLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL2MyZEJhc2UudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvY2FudmFzLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL2VsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvbGluZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9yZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9zaGFwZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL3N2Z1NWRy50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC90ZXh0LnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL3ZpZGVvLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2NoaWxkcmVuLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2RpbWVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvZmlsbC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9mb250LnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2Zyb21Uby50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9vZmZzZXQudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvcmVjdGFuZ2xlQm91bmRzLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL3N0cm9rZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvdmlld0JveC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy92aXN1YWxNZWRpYS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlci50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL3V0bGl0aWVzL2NhbWVsVG9LZWJhYi50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL3V0bGl0aWVzL3JlYWRPbmx5LnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVW5pdExvbmcgPSBrZXlvZiAodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl07XHJcblxyXG5leHBvcnQgdHlwZSBBbmdsZVVuaXRTaG9ydCA9XHJcbiAgKHR5cGVvZiBBbmdsZSlbXCJ1bml0XCJdW2tleW9mICh0eXBlb2YgQW5nbGUpW1widW5pdFwiXV07XHJcblxyXG5jb25zdCB1bml0c0luQ2lyY2xlOiB7XHJcbiAgW1UgaW4gQW5nbGVVbml0U2hvcnRdOiBudW1iZXI7XHJcbn0gPSB7XHJcbiAgZGVnOiAzNjAsXHJcbiAgcmFkOiBNYXRoLlBJICogMixcclxuICBncmFkOiA0MDAsXHJcbiAgdHVybjogMSxcclxufTtcclxuXHJcbnR5cGUgQW5nbGVDb252ZXJ0ZXIgPSB7XHJcbiAgW1UgaW4ga2V5b2YgKHR5cGVvZiBBbmdsZSlbXCJ1bml0XCJdXTogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuZ2xlIGV4dGVuZHMgU3RhdGU8bnVtYmVyPiBpbXBsZW1lbnRzIEFuZ2xlQ29udmVydGVyIHtcclxuICAjY29udmVyc2lvbnMgPSBuZXcgTWFwPEV4Y2x1ZGU8QW5nbGVVbml0U2hvcnQsIFwicmFkXCI+LCBudW1iZXI+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHVuaXQ6IEFuZ2xlVW5pdFNob3J0LCB2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByYWRpYW5zID0gdW5pdCA9PT0gXCJyYWRcIiA/IHZhbHVlIDogQW5nbGUuY29udmVydCh2YWx1ZSwgdW5pdCwgXCJyYWRcIik7XHJcblxyXG4gICAgc3VwZXIocmFkaWFucyk7XHJcblxyXG4gICAgaWYgKHVuaXQgIT09IFwicmFkXCIpIHRoaXMuI2NvbnZlcnNpb25zLnNldCh1bml0LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAjZ2V0Q29udmVydGVkKHVuaXQ6IEV4Y2x1ZGU8QW5nbGVVbml0U2hvcnQsIFwicmFkXCI+KSB7XHJcbiAgICBjb25zdCBjYWNoZWQgPSB0aGlzLiNjb252ZXJzaW9ucy5nZXQodW5pdCk7XHJcblxyXG4gICAgaWYgKGNhY2hlZCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gY2FjaGVkO1xyXG5cclxuICAgIGNvbnN0IGNvbnZlcnNpb24gPSBBbmdsZS5jb252ZXJ0KHRoaXMudmFsdWUsIFwicmFkXCIsIHVuaXQpO1xyXG5cclxuICAgIHRoaXMuI2NvbnZlcnNpb25zLnNldCh1bml0LCBjb252ZXJzaW9uKTtcclxuXHJcbiAgICByZXR1cm4gY29udmVyc2lvbjtcclxuICB9XHJcblxyXG4gICNzZXRDb252ZXJ0ZWQodW5pdDogRXhjbHVkZTxBbmdsZVVuaXRTaG9ydCwgXCJyYWRcIj4sIHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuI2NvbnZlcnNpb25zLnNldCh1bml0LCB2YWx1ZSk7XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IEFuZ2xlLmNvbnZlcnQodmFsdWUsIHVuaXQsIFwicmFkXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCB2YWx1ZSBpbiBkZWdyZWVzLiAzNjAgZGVncmVlcyBpcyBhIGNvbXBsZXRlIHJvdGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICBnZXQgZGVncmVlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuI2dldENvbnZlcnRlZChcImRlZ1wiKTtcclxuICB9XHJcblxyXG4gIHNldCBkZWdyZWVzKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNzZXRDb252ZXJ0ZWQoXCJkZWdcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICBjb25zdCBjb252ZXJzaW9uQ291bnQgPSB0aGlzLiNjb252ZXJzaW9ucy5zaXplO1xyXG5cclxuICAgIGNvbnN0IFt1bml0LCB2YWx1ZV0gPVxyXG4gICAgICBjb252ZXJzaW9uQ291bnQgPT09IDBcclxuICAgICAgICA/IFtcInJhZFwiIGFzIEFuZ2xlVW5pdFNob3J0LCB0aGlzLnZhbHVlXVxyXG4gICAgICAgIDogQXJyYXkuZnJvbSh0aGlzLiNjb252ZXJzaW9ucylbY29udmVyc2lvbkNvdW50IC0gMV07XHJcblxyXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKVxyXG4gICAgICA/IHZhbHVlLnRvU3RyaW5nKClcclxuICAgICAgOiB2YWx1ZS50b1ByZWNpc2lvbigyKTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVTdHJpbmcgKyB1bml0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgYSBudW1iZXIgZnJvbSBvbmUgYW5nbGUgdW5pdCB0byBhbm90aGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZhbHVlIGFuZ2xlIG51bWJlciB0byBjb252ZXJ0XHJcbiAgICogQHBhcmFtIHVuaXRGcm9tIGFuZ2xlIHVuaXQgdG8gY29udmVydCBmcm9tXHJcbiAgICogQHBhcmFtIHVuaXRUbyB1bml0IHRvIGNvbnZlcnQgdG9cclxuICAgKiBAcmV0dXJucyBjb252ZXJ0ZWQgdmFsdWVcclxuICAgKi9cclxuXHJcbiAgc3RhdGljIGNvbnZlcnQoXHJcbiAgICB2YWx1ZTogbnVtYmVyLFxyXG4gICAgdW5pdEZyb206IEFuZ2xlVW5pdFNob3J0LFxyXG4gICAgdW5pdFRvOiBBbmdsZVVuaXRTaG9ydFxyXG4gICk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdmFsdWUgKiAodW5pdHNJbkNpcmNsZVt1bml0VG9dIC8gdW5pdHNJbkNpcmNsZVt1bml0RnJvbV0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBBbmdsZSBmcm9tIGEgdmFsdWUgaW4gZGVncmVlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBudW1iZXIgb2YgZGVncmVlc1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcblxyXG4gIHN0YXRpYyBkZWdyZWVzKHZhbHVlOiBudW1iZXIpOiBBbmdsZSB7XHJcbiAgICByZXR1cm4gbmV3IEFuZ2xlKEFuZ2xlLnVuaXQuZGVncmVlcywgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFub3RoZXIgYW5nbGUgcmVwcmVzZW50cyB0aGUgc2FtZSB2YWx1ZSBhcyB0aGlzIG9uZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvdGhlciBBbmdsZSB0byBjb21wYXJlXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgYW5nbGVzIGFyZSBlcXVhbC5cclxuICAgKi9cclxuXHJcbiAgZXF1YWxzKG90aGVyOiBBbmdsZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN1cGVyLmVxdWFscyhvdGhlcikgfHwgdGhpcy5yYWRpYW5zID09PSBvdGhlci5yYWRpYW5zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCB2YWx1ZSBpbiBncmFkaWFucy4gNDAwIGdyYWRpYW5zIGlzIGEgY29tcGxldGUgcm90YXRpb24uXHJcbiAgICovXHJcblxyXG4gIGdldCBncmFkaWFucygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuI2dldENvbnZlcnRlZChcImdyYWRcIik7XHJcbiAgfVxyXG5cclxuICBzZXQgZ3JhZGlhbnModmFsdWUpIHtcclxuICAgIHRoaXMuI3NldENvbnZlcnRlZChcImdyYWRcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBBbmdsZSBmcm9tIHZhbHVlIGluIHJhZGlhbnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmFsdWUgbnVtYmVyIG9mIHJhZGlhbnNcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG5cclxuICBzdGF0aWMgcmFkaWFucyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IEFuZ2xlKEFuZ2xlLnVuaXQucmFkaWFucywgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCB2YWx1ZSBpbiByYWRpYW5zLiAyz4AgcmFkaWFucyBpcyBhIGNvbXBsZXRlIHJvdGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICBnZXQgcmFkaWFucygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgcmFkaWFucyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiNjb252ZXJzaW9ucy5jbGVhcigpO1xyXG5cclxuICAgIHN1cGVyLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDdXJyZW50IHZhbHVlIGluIHR1cm5zLiAxIHR1cm4gaXMgYSBjb21wbGV0ZSByb3RhdGlvbi5cclxuICAgKi9cclxuXHJcbiAgZ2V0IHR1cm4oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLiNnZXRDb252ZXJ0ZWQoXCJ0dXJuXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHR1cm4odmFsdWUpIHtcclxuICAgIHRoaXMuI3NldENvbnZlcnRlZChcInR1cm5cIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW9zdCByZWNlbnRseSB1c2VkIGFuZ2xlIHVuaXRcclxuICAgKi9cclxuXHJcbiAgZ2V0IHVuaXQoKTogQW5nbGVVbml0TG9uZyB7XHJcbiAgICBjb25zdCBjb252ZXJzaW9uQ291bnQgPSB0aGlzLiNjb252ZXJzaW9ucy5zaXplO1xyXG5cclxuICAgIGNvbnN0IFtzaG9ydFVuaXRdID1cclxuICAgICAgY29udmVyc2lvbkNvdW50ID09PSAwXHJcbiAgICAgICAgPyBbXCJyYWRcIiBhcyBBbmdsZVVuaXRTaG9ydCwgdGhpcy52YWx1ZV1cclxuICAgICAgICA6IEFycmF5LmZyb20odGhpcy4jY29udmVyc2lvbnMpW2NvbnZlcnNpb25Db3VudCAtIDFdO1xyXG5cclxuICAgIGNvbnN0IGxvbmdVbml0ID0gT2JqZWN0LmtleXMoQW5nbGUudW5pdCkuZmluZChcclxuICAgICAgKGtleSkgPT4gQW5nbGUudW5pdFtrZXkgYXMgQW5nbGVVbml0TG9uZ10gPT09IHNob3J0VW5pdFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAobG9uZ1VuaXQgPT09IHVuZGVmaW5lZClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhbmdsZSB1bml0OiAke3Nob3J0VW5pdH1gKTtcclxuXHJcbiAgICByZXR1cm4gbG9uZ1VuaXQgYXMgQW5nbGVVbml0TG9uZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcCBvZiBhbmdsZSB1bml0cy4gVGhlIGtleXMgYXJlIHRoZSBmdWxsIG5hbWVzIG9mIHVuaXRzLCBhbmQgdGhlaXJcclxuICAgKiBjb3JyZXNwb25kaW5nIHZhbHVlIGlzIHRoZSBhYmJyZXZpYXRpb24gdXNlZCBpbiBDU1MgYW5kIGF0dHJpYnV0ZSB2YWx1ZXMuXHJcbiAgICovXHJcblxyXG4gIHN0YXRpYyB1bml0ID0ge1xyXG4gICAgZGVncmVlczogXCJkZWdcIixcclxuICAgIHJhZGlhbnM6IFwicmFkXCIsXHJcbiAgICBncmFkaWFuczogXCJncmFkXCIsXHJcbiAgICB0dXJuOiBcInR1cm5cIixcclxuICB9IGFzIGNvbnN0O1xyXG5cclxuICAvKipcclxuICAgKiBNYXAgb2YgYW5nbGUgdW5pdCBhYmJyZXZpYXRpb25zIGFuZCB0aGUgY29ycmVzcG9uZGluZyBudW1iZXIgb2YgdW5pdHMgaW5cclxuICAgKiBhIGNvbXBsZXRlIHJvdGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICBzdGF0aWMgZ2V0IHVuaXRzSW5DaXJjbGUoKTogeyBbdW5pdCBpbiBBbmdsZVVuaXRTaG9ydF06IG51bWJlciB9IHtcclxuICAgIHJldHVybiB1bml0c0luQ2lyY2xlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnJhZGlhbnMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgQW5nbGUgd2l0aCBhIHZhbHVlIG9mIDAuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG5cclxuICBzdGF0aWMgemVybygpOiBBbmdsZSB7XHJcbiAgICByZXR1cm4gQW5nbGUucmFkaWFucygwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuY2xhc3MgQm9yZGVyUmFkaXVzQmFzZSB7XHJcbiAgI3RvcExlZnQ6IG51bWJlcjtcclxuICAjdG9wUmlnaHQ6IG51bWJlcjtcclxuICAjYm90dG9tTGVmdDogbnVtYmVyO1xyXG4gICNib3R0b21SaWdodDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhbGw6IG51bWJlcik7XHJcbiAgY29uc3RydWN0b3IodG9wTGVmdEFuZEJvdHRvbVJpZ2h0OiBudW1iZXIsIHRvUmlnaHRBbmRCb3R0b21MZWZ0OiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdG9wTGVmdDogbnVtYmVyLFxyXG4gICAgdG9wUmlnaHRBbmRCb3R0b21MZWZ0OiBudW1iZXIsXHJcbiAgICBib3R0b21SaWdodDogbnVtYmVyXHJcbiAgKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRvcExlZnQ6IG51bWJlcixcclxuICAgIHRvcFJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b21SaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tTGVmdDogbnVtYmVyXHJcbiAgKTtcclxuICBjb25zdHJ1Y3RvcihhcmcxOiBudW1iZXIsIGFyZzI/OiBudW1iZXIsIGFyZzM/OiBudW1iZXIsIGJvdHRvbUxlZnQ/OiBudW1iZXIpIHtcclxuICAgIHRoaXMuI3RvcExlZnQgPSBhcmcxO1xyXG5cclxuICAgIGlmIChhcmcyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy4jdG9wUmlnaHQgPSB0aGlzLiNib3R0b21MZWZ0ID0gdGhpcy4jYm90dG9tUmlnaHQgPSBhcmcxO1xyXG4gICAgfSBlbHNlIGlmIChhcmczID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy4jYm90dG9tUmlnaHQgPSBhcmcxO1xyXG4gICAgICB0aGlzLiN0b3BSaWdodCA9IGFyZzI7XHJcbiAgICAgIHRoaXMuI2JvdHRvbUxlZnQgPSBhcmcyO1xyXG4gICAgfSBlbHNlIGlmIChib3R0b21MZWZ0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy4jdG9wUmlnaHQgPSBhcmcyO1xyXG4gICAgICB0aGlzLiNib3R0b21MZWZ0ID0gYXJnMjtcclxuICAgICAgdGhpcy4jYm90dG9tUmlnaHQgPSBhcmczO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4jdG9wUmlnaHQgPSBhcmcyO1xyXG4gICAgICB0aGlzLiNib3R0b21SaWdodCA9IGFyZzM7XHJcbiAgICAgIHRoaXMuI2JvdHRvbUxlZnQgPSBib3R0b21MZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRvcExlZnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jdG9wTGVmdDtcclxuICB9XHJcblxyXG4gIHNldCB0b3BMZWZ0KHZhbHVlKSB7XHJcbiAgICB0aGlzLiN0b3BMZWZ0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wUmlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jdG9wUmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wUmlnaHQodmFsdWUpIHtcclxuICAgIHRoaXMuI3RvcFJpZ2h0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYm90dG9tTGVmdCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNib3R0b21MZWZ0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGJvdHRvbUxlZnQodmFsdWUpIHtcclxuICAgIHRoaXMuI2JvdHRvbUxlZnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBib3R0b21SaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNib3R0b21SaWdodDtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b21SaWdodCh2YWx1ZSkge1xyXG4gICAgdGhpcy4jYm90dG9tUmlnaHQgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3JkZXJSYWRpdXMgZXh0ZW5kcyBTdGF0ZTxCb3JkZXJSYWRpdXNCYXNlPiB7XHJcbiAgY29uc3RydWN0b3IoYWxsOiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKHRvcExlZnRBbmRCb3R0b21SaWdodDogbnVtYmVyLCB0b1JpZ2h0QW5kQm90dG9tTGVmdDogbnVtYmVyKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRvcExlZnQ6IG51bWJlcixcclxuICAgIHRvcFJpZ2h0QW5kQm90dG9tTGVmdDogbnVtYmVyLFxyXG4gICAgYm90dG9tUmlnaHQ6IG51bWJlclxyXG4gICk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0b3BMZWZ0OiBudW1iZXIsXHJcbiAgICB0b3BSaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tUmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbUxlZnQ6IG51bWJlclxyXG4gICk7XHJcbiAgY29uc3RydWN0b3IoYXJnMTogbnVtYmVyLCBhcmcyPzogbnVtYmVyLCBhcmczPzogbnVtYmVyLCBib3R0b21MZWZ0PzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBiYXNlID1cclxuICAgICAgYXJnMiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBuZXcgQm9yZGVyUmFkaXVzQmFzZShhcmcxKVxyXG4gICAgICAgIDogYXJnMyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBuZXcgQm9yZGVyUmFkaXVzQmFzZShhcmcxLCBhcmcyKVxyXG4gICAgICAgIDogYm90dG9tTGVmdCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBuZXcgQm9yZGVyUmFkaXVzQmFzZShhcmcxLCBhcmcyLCBhcmczKVxyXG4gICAgICAgIDogbmV3IEJvcmRlclJhZGl1c0Jhc2UoYXJnMSwgYXJnMiwgYXJnMywgYm90dG9tTGVmdCk7XHJcblxyXG4gICAgc3VwZXIoYmFzZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wTGVmdCgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZS50b3BMZWZ0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvcExlZnQodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy50b3BMZWZ0KSByZXR1cm47XHJcblxyXG4gICAgc3VwZXIudmFsdWUudG9wTGVmdCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wUmlnaHQoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWUudG9wUmlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wUmlnaHQodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy50b3BSaWdodCkgcmV0dXJuO1xyXG5cclxuICAgIHN1cGVyLnZhbHVlLnRvcFJpZ2h0ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBib3R0b21SaWdodCgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZS5ib3R0b21SaWdodDtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b21SaWdodCh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLmJvdHRvbVJpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgc3VwZXIudmFsdWUuYm90dG9tUmlnaHQgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJvdHRvbUxlZnQoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWUuYm90dG9tTGVmdDtcclxuICB9XHJcblxyXG4gIHNldCBib3R0b21MZWZ0KHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuYm90dG9tTGVmdCkgcmV0dXJuO1xyXG5cclxuICAgIHN1cGVyLnZhbHVlLmJvdHRvbUxlZnQgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZXF1YWxzKG90aGVyOiBCb3JkZXJSYWRpdXMpIHtcclxuICAgIGNvbnN0IG90aGVyQXJyYXkgPSBvdGhlci50b0FycmF5KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudG9BcnJheSgpLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBvdGhlckFycmF5W2luZGV4XSk7XHJcbiAgfVxyXG5cclxuICB0b0FycmF5KCkge1xyXG4gICAgcmV0dXJuIFt0aGlzLnRvcExlZnQsIHRoaXMudG9wUmlnaHQsIHRoaXMuYm90dG9tUmlnaHQsIHRoaXMuYm90dG9tTGVmdF07XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKS5qb2luKFwiLCBcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4vdmVjdG9yMmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGlja0RhdGEgZXh0ZW5kcyBWZWN0b3IyRCB7XHJcbiAgI2NsaWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGNsaWNrZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2xpY2tlZDtcclxuICB9XHJcblxyXG4gIHNldCBjbGlja2VkKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNjbGlja2VkID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpY2tUcmFja2VyIGV4dGVuZHMgQ2xpY2tEYXRhIHtcclxuICAjdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIuY2xpY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICBzdXBlci54ID0gZXZlbnQueDtcclxuXHJcbiAgICAgIHN1cGVyLnkgPSBldmVudC55O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZHZhbmNlRnJhbWUoKSB7XHJcbiAgICBzdXBlci5jbGlja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xpY2tlZCgpIHtcclxuICAgIHJldHVybiBzdXBlci5jbGlja2VkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBvc2l0aW9uKCk6IFZlY3RvcjJEIHtcclxuICAgIGlmICh0aGlzLiN0YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cpIHJldHVybiB0aGlzO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHRoaXMuI3RhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkoc3VwZXIueCAtIGJvdW5kaW5nUmVjdC54LCBzdXBlci55IC0gYm91bmRpbmdSZWN0LnkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55O1xyXG4gIH1cclxufVxyXG4iLCJmdW5jdGlvbiBoZXgobjogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKE1hdGguZmxvb3IobiksIDI1NSksIDApXHJcbiAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3Ige1xyXG4gICNzdHI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoZ3JheTogbnVtYmVyLCBhbHBoYT86IG51bWJlcik7XHJcbiAgY29uc3RydWN0b3IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgYWxwaGE/OiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKGNvbG9yU3RyaW5nOiBzdHJpbmcpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZmlyc3RBcmc6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHNlY29uZEFyZz86IG51bWJlcixcclxuICAgIGJsdWU/OiBudW1iZXIsXHJcbiAgICBhbHBoYT86IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0aGlzLiNzdHIgPSBmaXJzdEFyZztcclxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgY29uc3QgZ3JheU51bSA9IGZpcnN0QXJnO1xyXG4gICAgICBjb25zdCBncmF5SGV4ID0gaGV4KGdyYXlOdW0pO1xyXG5cclxuICAgICAgY29uc3QgYWxwaGFOdW0gPSBzZWNvbmRBcmc7XHJcbiAgICAgIGNvbnN0IGFscGhhSGV4ID0gYWxwaGFOdW0gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBoZXgoYWxwaGFOdW0pO1xyXG5cclxuICAgICAgdGhpcy4jc3RyID0gYCMke2dyYXlIZXh9JHtncmF5SGV4fSR7Z3JheUhleH0ke2FscGhhSGV4fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZWQgPSBmaXJzdEFyZztcclxuICAgICAgY29uc3QgcmVkSGV4ID0gaGV4KHJlZCk7XHJcblxyXG4gICAgICBjb25zdCBncmVlbiA9IHNlY29uZEFyZztcclxuICAgICAgY29uc3QgZ3JlZW5IZXggPSBoZXgoZ3JlZW4gYXMgbnVtYmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IGJsdWVIZXggPSBoZXgoYmx1ZSBhcyBudW1iZXIpO1xyXG5cclxuICAgICAgY29uc3QgYWxwaGFIZXggPSBhbHBoYSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGhleChhbHBoYSk7XHJcblxyXG4gICAgICB0aGlzLiNzdHIgPSBgIyR7cmVkSGV4fSR7Z3JlZW5IZXh9JHtibHVlSGV4fSR7YWxwaGFIZXh9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBncmF5KHZhbHVlOiBudW1iZXIsIGFscGhhPzogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHZhbHVlLCBhbHBoYSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbVN0cmluZyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGVxdWFscyhvdGhlcjogQ29sb3IpIHtcclxuICAgIHJldHVybiB0aGlzLiNzdHIgPT09IG90aGVyLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLiNzdHI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmdiKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIsIGFscGhhPzogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yKHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoc2woXHJcbiAgICBodWU6IG51bWJlcixcclxuICAgIHNhdHVyYXRpb246IG51bWJlcixcclxuICAgIGxpZ2h0bmVzczogbnVtYmVyLFxyXG4gICAgYWxwaGE/OiBudW1iZXJcclxuICApIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IoXHJcbiAgICAgIGBoc2woJHtodWV9ICR7c2F0dXJhdGlvbn0gJHtsaWdodG5lc3N9JHtcclxuICAgICAgICBhbHBoYSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGAgLyAke2FscGhhfWBcclxuICAgICAgfSlgXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jMmRCYXNlXCI7XHJcbmltcG9ydCB7IEFuZ2xlIH0gZnJvbSBcIi4vYW5nbGVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuL3ZlY3RvcjJkXCI7XHJcblxyXG5jbGFzcyBDb2xvclN0b3Age1xyXG4gICNvZmZzZXQ6IG51bWJlcjtcclxuICAjY29sb3I6IENvbG9yO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvZmZzZXQ6IG51bWJlciwgY29sb3I6IENvbG9yKSB7XHJcbiAgICB0aGlzLiNvZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICB0aGlzLiNjb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9mZnNldCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNvZmZzZXQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhZGllbnQge1xyXG4gICNzdG9wczogQ29sb3JTdG9wW10gPSBbXTtcclxuXHJcbiAgYWRkQ29sb3JTdG9wKG9mZnNldDogbnVtYmVyLCBjb2xvcjogQ29sb3IpIHtcclxuICAgIHRoaXMuI3N0b3BzLnB1c2gobmV3IENvbG9yU3RvcChvZmZzZXQsIGNvbG9yKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYXBwbHlTdG9wcyhncmFkaWVudDogQ2FudmFzR3JhZGllbnQpIHtcclxuICAgIGZvciAoY29uc3Qgc3RvcCBvZiB0aGlzLiNzdG9wcykge1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3Aoc3RvcC5vZmZzZXQsIHN0b3AuY29sb3IudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZGVmaW5lU1ZHU3RvcHMoZGVmaW5pdGlvbjogU1ZHR3JhZGllbnRFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IHN0b3BzIH0gPSB0aGlzO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3RvcCBvZiBzdG9wcykge1xyXG4gICAgICBjb25zdCBzdG9wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgXCJzdG9wXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHN0b3BFbGVtZW50LnNldEF0dHJpYnV0ZShcIm9mZnNldFwiLCBzdG9wLm9mZnNldC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgIHN0b3BFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0b3AtY29sb3JcIiwgc3RvcC5jb2xvci50b1N0cmluZygpKTtcclxuXHJcbiAgICAgIGRlZmluaXRpb24uYXBwZW5kQ2hpbGQoc3RvcEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgLi4uYXJnczogYW55W10pOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZW5kZXIgY2FsbGVkIG9uIGJhc2UgR3JhZGllbnQgY2xhc3NcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RvcHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jc3RvcHM7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBcImdyYWRpZW50XCI7XHJcbiAgfVxyXG5cclxuICBnZXQgc3ZnKCk6IFNWR0dyYWRpZW50RWxlbWVudCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHR5cGUgb2YgZ3JhZGllbnQgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIFNWRy5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZWFyR3JhZGllbnQgZXh0ZW5kcyBHcmFkaWVudCB7XHJcbiAgI2NvbG9yU3RhcnRYOiBudW1iZXI7XHJcbiAgI2NvbG9yU3RhcnRZOiBudW1iZXI7XHJcbiAgI2NvbG9yRW5kWDogbnVtYmVyO1xyXG4gICNjb2xvckVuZFk6IG51bWJlcjtcclxuICAjc3ZnOiBTVkdMaW5lYXJHcmFkaWVudEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3RhcnRYID0gMCwgc3RhcnRZID0gMCwgZW5kWCA9IDEsIGVuZFkgPSAxKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuI2NvbG9yU3RhcnRYID0gc3RhcnRYO1xyXG4gICAgdGhpcy4jY29sb3JTdGFydFkgPSBzdGFydFk7XHJcbiAgICB0aGlzLiNjb2xvckVuZFggPSBlbmRYO1xyXG4gICAgdGhpcy4jY29sb3JFbmRZID0gZW5kWTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGJvdW5kc1g6IG51bWJlcixcclxuICAgIGJvdW5kc1k6IG51bWJlcixcclxuICAgIGJvdW5kc1dpZHRoOiBudW1iZXIsXHJcbiAgICBib3VuZHNIZWlnaHQ6IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3QgeDAgPSBib3VuZHNYICsgYm91bmRzV2lkdGggKiB0aGlzLiNjb2xvclN0YXJ0WDtcclxuICAgIGNvbnN0IHkwID0gYm91bmRzWSArIGJvdW5kc0hlaWdodCAqIHRoaXMuI2NvbG9yU3RhcnRZO1xyXG4gICAgY29uc3QgeDEgPSBib3VuZHNYICsgYm91bmRzV2lkdGggKiB0aGlzLiNjb2xvckVuZFg7XHJcbiAgICBjb25zdCB5MSA9IGJvdW5kc1kgKyBib3VuZHNIZWlnaHQgKiB0aGlzLiNjb2xvckVuZFk7XHJcblxyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KHgwLCB5MCwgeDEsIHkxKTtcclxuXHJcbiAgICB0aGlzLmFwcGx5U3RvcHMoZ3JhZGllbnQpO1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudDtcclxuICB9XHJcblxyXG4gIGdldCBzdmcoKSB7XHJcbiAgICBpZiAodGhpcy4jc3ZnICE9PSBudWxsKSByZXR1cm4gdGhpcy4jc3ZnO1xyXG5cclxuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJsaW5lYXJHcmFkaWVudFwiXHJcbiAgICApO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgdGhpcy4jY29sb3JTdGFydFgudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCB0aGlzLiNjb2xvclN0YXJ0WS50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIHRoaXMuI2NvbG9yRW5kWC50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcInkyXCIsIHRoaXMuI2NvbG9yRW5kWS50b1N0cmluZygpKTtcclxuXHJcbiAgICB0aGlzLmRlZmluZVNWR1N0b3BzKHN2Z0VsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiAodGhpcy4jc3ZnID0gc3ZnRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmFkaWFsR3JhZGllbnQgZXh0ZW5kcyBHcmFkaWVudCB7XHJcbiAgI3N0YXJ0WDogbnVtYmVyO1xyXG4gICNzdGFydFk6IG51bWJlcjtcclxuICAjc3RhcnRSYWRpdXM6IG51bWJlcjtcclxuICAjZW5kWDogbnVtYmVyO1xyXG4gICNlbmRZOiBudW1iZXI7XHJcbiAgI2VuZFJhZGl1czogbnVtYmVyO1xyXG4gICNzdmc6IFNWR1JhZGlhbEdyYWRpZW50RWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHN0YXJ0WCA9IDAsXHJcbiAgICBzdGFydFkgPSAwLFxyXG4gICAgc3RhcnRSYWRpdXMgPSAwLFxyXG4gICAgZW5kWCA9IDAsXHJcbiAgICBlbmRZID0gMCxcclxuICAgIGVuZFJhZGl1cyA9IDFcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy4jc3RhcnRYID0gc3RhcnRYO1xyXG4gICAgdGhpcy4jc3RhcnRZID0gc3RhcnRZO1xyXG4gICAgdGhpcy4jc3RhcnRSYWRpdXMgPSBzdGFydFJhZGl1cztcclxuICAgIHRoaXMuI2VuZFggPSBlbmRYO1xyXG4gICAgdGhpcy4jZW5kWSA9IGVuZFk7XHJcbiAgICB0aGlzLiNlbmRSYWRpdXMgPSBlbmRSYWRpdXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBib3VuZHNYOiBudW1iZXIsXHJcbiAgICBib3VuZHNZOiBudW1iZXIsXHJcbiAgICBib3VuZHNSYWRpdXM6IG51bWJlclxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHgwID0gYm91bmRzWCArIHRoaXMuI3N0YXJ0WCAqIGJvdW5kc1JhZGl1cztcclxuICAgIGNvbnN0IHkwID0gYm91bmRzWSArIHRoaXMuI3N0YXJ0WSAqIGJvdW5kc1JhZGl1cztcclxuICAgIGNvbnN0IHIwID0gYm91bmRzUmFkaXVzICogdGhpcy4jc3RhcnRSYWRpdXM7XHJcblxyXG4gICAgY29uc3QgeDEgPSBib3VuZHNYICsgdGhpcy4jZW5kWCAqIGJvdW5kc1JhZGl1cztcclxuICAgIGNvbnN0IHkxID0gYm91bmRzWSArIHRoaXMuI2VuZFkgKiBib3VuZHNSYWRpdXM7XHJcbiAgICBjb25zdCByMSA9IGJvdW5kc1JhZGl1cyAqIHRoaXMuI2VuZFJhZGl1cztcclxuXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoeDAsIHkwLCByMCwgeDEsIHkxLCByMSk7XHJcblxyXG4gICAgdGhpcy5hcHBseVN0b3BzKGdyYWRpZW50KTtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgc3ZnKCkge1xyXG4gICAgaWYgKHRoaXMuI3N2ZyAhPT0gbnVsbCkgcmV0dXJuIHRoaXMuI3N2ZztcclxuXHJcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgIFwicmFkaWFsR3JhZGllbnRcIlxyXG4gICAgKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImZyXCIsIHRoaXMuI3N0YXJ0UmFkaXVzLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZnhcIiwgdGhpcy4jc3RhcnRYLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY3hcIiwgdGhpcy4jZW5kWC50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImN5XCIsIHRoaXMuI2VuZFkudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyXCIsIHRoaXMuI2VuZFJhZGl1cy50b1N0cmluZygpKTtcclxuXHJcbiAgICB0aGlzLmRlZmluZVNWR1N0b3BzKHN2Z0VsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiAodGhpcy4jc3ZnID0gc3ZnRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uaWNhbEdyYWRpZW50IGV4dGVuZHMgR3JhZGllbnQge1xyXG4gICNzdGFydEFuZ2xlOiBBbmdsZTtcclxuICAjb2Zmc2V0OiBWZWN0b3IyRDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzdGFydEFuZ2xlOiBBbmdsZSA9IEFuZ2xlLnplcm8oKSxcclxuICAgIG9mZnNldDogVmVjdG9yMkQgPSBWZWN0b3IyRC56ZXJvKClcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy4jc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGU7XHJcbiAgICB0aGlzLiNvZmZzZXQgPSBvZmZzZXQ7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjZW50ZXI6IFZlY3RvcjJEKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgY29uc3QgeCA9IGNlbnRlci54ICsgdGhpcy4jb2Zmc2V0Lng7XHJcbiAgICBjb25zdCB5ID0gY2VudGVyLnkgKyB0aGlzLiNvZmZzZXQueTtcclxuXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlQ29uaWNHcmFkaWVudChcclxuICAgICAgdGhpcy4jc3RhcnRBbmdsZS5yYWRpYW5zLFxyXG4gICAgICB4LFxyXG4gICAgICB5XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYXBwbHlTdG9wcyhncmFkaWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRHJhd1N0eWxlID0gQ29sb3IgfCBzdHJpbmcgfCBHcmFkaWVudCB8IE5vbmU7XHJcbiIsImV4cG9ydCBjbGFzcyBLZXlib2FyZFRyYWNrZXIge1xyXG4gICNjdXJyZW50ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgI3ByZXZpb3VzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgI2xhc3QgPSBcIlwiO1xyXG4gICNkb3duID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLiNjdXJyZW50LmFkZChldmVudC5rZXkpO1xyXG5cclxuICAgICAgdGhpcy4jbGFzdCA9IGV2ZW50LmtleTtcclxuXHJcbiAgICAgIHRoaXMuI2Rvd24gPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy4jY3VycmVudC5kZWxldGUoZXZlbnQua2V5KTtcclxuXHJcbiAgICAgIHRoaXMuI2Rvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgW18sIHN0YXRlXSBvZiB0aGlzLiNjdXJyZW50LmVudHJpZXMoKSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy4jZG93biA9IHRydWU7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkdmFuY2VGcmFtZSgpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuI3ByZXZpb3VzKSB7XHJcbiAgICAgIGlmICghdGhpcy4jY3VycmVudC5oYXMoa2V5KSkgdGhpcy4jcHJldmlvdXMuZGVsZXRlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy4jY3VycmVudCkge1xyXG4gICAgICB0aGlzLiNwcmV2aW91cy5hZGQoa2V5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkb3duKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2Rvd247XHJcbiAgfVxyXG5cclxuICBnZXQgbGFzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNsYXN0O1xyXG4gIH1cclxuXHJcbiAga2V5SGVsZChrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuI2N1cnJlbnQuaGFzKGtleSk7XHJcbiAgfVxyXG5cclxuICBrZXlQcmV2aW91c2x5SGVsZChrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuI3ByZXZpb3VzLmhhcyhrZXkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuL3ZlY3RvcjJkXCI7XHJcblxyXG5jb25zdCBidXR0b25OYW1lcyA9IHsgbGVmdDogMCwgcmlnaHQ6IDEsIHdoZWVsOiAyLCBiYWNrOiAzLCBmb3J3YXJkOiA0IH07XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VEYXRhIGV4dGVuZHMgVmVjdG9yMkQge1xyXG4gICNidXR0b25TdGF0ZXMgPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcclxuICAjb3ZlciA9IGZhbHNlO1xyXG5cclxuICBnZXQgYnV0dG9uU3RhdGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2J1dHRvblN0YXRlcztcclxuICB9XHJcblxyXG4gIHNldCBidXR0b25TdGF0ZXModmFsdWUpIHtcclxuICAgIHRoaXMuI2J1dHRvblN0YXRlcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG92ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jb3ZlcjtcclxuICB9XHJcblxyXG4gIHNldCBvdmVyKHZhbHVlKSB7XHJcbiAgICB0aGlzLiNvdmVyID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VUcmFja2VyIGV4dGVuZHMgTW91c2VEYXRhIHtcclxuICAjcHJldmlvdXM6IE1vdXNlRGF0YTtcclxuICAjdGFyZ2V0OiBIVE1MRWxlbWVudCB8IFdpbmRvdztcclxuXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MRWxlbWVudCB8IFdpbmRvdyA9IHdpbmRvdykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLiN0YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgdGhpcy4jcHJldmlvdXMgPSBuZXcgTW91c2VEYXRhKCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUG9zaXRpb24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIueCA9IGV2ZW50Lng7XHJcbiAgICAgIHN1cGVyLnkgPSBldmVudC55O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIuYnV0dG9uU3RhdGVzW2V2ZW50LmJ1dHRvbl0gPSB0cnVlO1xyXG5cclxuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIuYnV0dG9uU3RhdGVzW2V2ZW50LmJ1dHRvbl0gPSBmYWxzZTtcclxuXHJcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHN1cGVyLm92ZXIgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIub3ZlciA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdXBkYXRlUG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgYWR2YW5jZUZyYW1lKCkge1xyXG4gICAgdGhpcy4jcHJldmlvdXMuYnV0dG9uU3RhdGVzID0gWy4uLnRoaXMuYnV0dG9uU3RhdGVzXTtcclxuXHJcbiAgICB0aGlzLiNwcmV2aW91cy5vdmVyID0gdGhpcy5vdmVyO1xyXG5cclxuICAgIHRoaXMuI3ByZXZpb3VzLnggPSB0aGlzLng7XHJcblxyXG4gICAgdGhpcy4jcHJldmlvdXMueSA9IHRoaXMueTtcclxuICB9XHJcblxyXG4gIGdldCBidXR0b25TdGF0ZXMoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIuYnV0dG9uU3RhdGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG92ZXIoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIub3ZlcjtcclxuICB9XHJcblxyXG4gIGdldCBwcmV2aW91cygpIHtcclxuICAgIHJldHVybiB0aGlzLiNwcmV2aW91cztcclxuICB9XHJcblxyXG4gIGdldCB4KCkge1xyXG4gICAgaWYgKHRoaXMuI3RhcmdldCBpbnN0YW5jZW9mIFdpbmRvdykgcmV0dXJuIHN1cGVyLng7XHJcblxyXG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gdGhpcy4jdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIHJldHVybiBzdXBlci54IC0gYm91bmRpbmdSZWN0Lng7XHJcbiAgfVxyXG5cclxuICBnZXQgeSgpIHtcclxuICAgIGlmICh0aGlzLiN0YXJnZXQgaW5zdGFuY2VvZiBXaW5kb3cpIHJldHVybiBzdXBlci55O1xyXG5cclxuICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IHRoaXMuI3RhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4gc3VwZXIueSAtIGJvdW5kaW5nUmVjdC55O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL2NvbG9yXCI7XHJcblxyXG50eXBlIFByb3BlcnR5UmFuZ2VzPFAgZXh0ZW5kcyBzdHJpbmc+ID0ge1xyXG4gIFtLZXkgaW4gUF0/OiB7XHJcbiAgICBtaW4/OiBudW1iZXI7XHJcbiAgICBtYXg/OiBudW1iZXI7XHJcbiAgfTtcclxufTtcclxuXHJcbnR5cGUgR3JheVJhbmdlcyA9IFByb3BlcnR5UmFuZ2VzPFwidmFsdWVcIiB8IFwiYWxwaGFcIj47XHJcblxyXG50eXBlIEhTTFJhbmdlcyA9IFByb3BlcnR5UmFuZ2VzPFwiaHVlXCIgfCBcInNhdHVyYXRpb25cIiB8IFwibGlnaHRuZXNzXCIgfCBcImFscGhhXCI+O1xyXG5cclxudHlwZSBSR0JSYW5nZXMgPSBQcm9wZXJ0eVJhbmdlczxcInJlZFwiIHwgXCJncmVlblwiIHwgXCJibHVlXCIgfCBcImFscGhhXCI+O1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmRvbSB7XHJcbiAgc3RhdGljIGNvbG9yR3JheShyYW5nZTogR3JheVJhbmdlcyk6IENvbG9yO1xyXG4gIHN0YXRpYyBjb2xvckdyYXkoXHJcbiAgICBtaW5WYWx1ZTogbnVtYmVyLFxyXG4gICAgbWF4VmFsdWU6IG51bWJlcixcclxuICAgIG1pbkFscGhhPzogbnVtYmVyLFxyXG4gICAgbWF4QWxwaGE/OiBudW1iZXJcclxuICApOiBDb2xvcjtcclxuICBzdGF0aWMgY29sb3JHcmF5KFxyXG4gICAgYXJnMTogR3JheVJhbmdlcyB8IG51bWJlcixcclxuICAgIG1heFZhbHVlPzogbnVtYmVyLFxyXG4gICAgbWluQWxwaGE/OiBudW1iZXIsXHJcbiAgICBtYXhBbHBoYT86IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3QgcmFuZ2U6IEdyYXlSYW5nZXMgPVxyXG4gICAgICB0eXBlb2YgYXJnMSA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gYXJnMVxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogeyBtaW46IGFyZzEsIG1heDogbWF4VmFsdWUgfSxcclxuICAgICAgICAgICAgYWxwaGE6IHsgbWluOiBtaW5BbHBoYSwgbWF4OiBtYXhBbHBoYSB9LFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ29sb3IuZ3JheShcclxuICAgICAgUmFuZG9tLmludChyYW5nZS52YWx1ZT8ubWluID8/IDAsIHJhbmdlLnZhbHVlPy5tYXggPz8gMjU1KSxcclxuICAgICAgcmFuZ2UuYWxwaGEgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgIChyYW5nZS5hbHBoYS5taW4gPT09IHVuZGVmaW5lZCAmJiByYW5nZS5hbHBoYS5tYXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgIDogUmFuZG9tLmZsb2F0KHJhbmdlLmFscGhhLm1pbiA/PyAwLCByYW5nZS5hbHBoYS5tYXggPz8gMSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29sb3JIU0wocmFuZ2VzOiBIU0xSYW5nZXMpOiBDb2xvcjtcclxuICBzdGF0aWMgY29sb3JIU0woXHJcbiAgICBtaW5IdWU6IG51bWJlcixcclxuICAgIG1heEh1ZTogbnVtYmVyLFxyXG4gICAgbWluU2F0dXJhdGlvbjogbnVtYmVyLFxyXG4gICAgbWF4U2F0dXJhdGlvbjogbnVtYmVyLFxyXG4gICAgbWluTGlnaHRuZXNzOiBudW1iZXIsXHJcbiAgICBtYXhMaWdodG5lc3M6IG51bWJlcixcclxuICAgIG1pbkFscGhhPzogbnVtYmVyLFxyXG4gICAgbWF4QWxwaGE/OiBudW1iZXJcclxuICApOiBDb2xvcjtcclxuICBzdGF0aWMgY29sb3JIU0woXHJcbiAgICBhcmcxOiBIU0xSYW5nZXMgfCBudW1iZXIsXHJcbiAgICBtYXhIdWU/OiBudW1iZXIsXHJcbiAgICBtaW5TYXR1cmF0aW9uPzogbnVtYmVyLFxyXG4gICAgbWF4U2F0dXJhdGlvbj86IG51bWJlcixcclxuICAgIG1pbkxpZ2h0bmVzcz86IG51bWJlcixcclxuICAgIG1heExpZ2h0bmVzcz86IG51bWJlcixcclxuICAgIG1pbkFscGhhPzogbnVtYmVyLFxyXG4gICAgbWF4QWxwaGE/OiBudW1iZXJcclxuICApIHtcclxuICAgIGNvbnN0IHJhbmdlczogSFNMUmFuZ2VzID1cclxuICAgICAgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCJcclxuICAgICAgICA/IGFyZzFcclxuICAgICAgICA6IHtcclxuICAgICAgICAgICAgaHVlOiB7XHJcbiAgICAgICAgICAgICAgbWluOiBhcmcxLFxyXG4gICAgICAgICAgICAgIG1heDogbWF4SHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzYXR1cmF0aW9uOiB7IG1pbjogbWluU2F0dXJhdGlvbiwgbWF4OiBtYXhTYXR1cmF0aW9uIH0sXHJcbiAgICAgICAgICAgIGxpZ2h0bmVzczogeyBtaW46IG1pbkxpZ2h0bmVzcywgbWF4OiBtYXhMaWdodG5lc3MgfSxcclxuICAgICAgICAgICAgYWxwaGE6IHsgbWluOiBtaW5BbHBoYSwgbWF4OiBtYXhBbHBoYSB9LFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ29sb3IuaHNsKFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlcy5odWU/Lm1pbiA/PyAwLCByYW5nZXMuaHVlPy5tYXggPz8gMzYwKSxcclxuICAgICAgUmFuZG9tLmludChyYW5nZXMuc2F0dXJhdGlvbj8ubWluID8/IDAsIHJhbmdlcy5zYXR1cmF0aW9uPy5tYXggPz8gMTAwKSxcclxuICAgICAgUmFuZG9tLmludChyYW5nZXMubGlnaHRuZXNzPy5taW4gPz8gMCwgcmFuZ2VzLmxpZ2h0bmVzcz8ubWF4ID8/IDEwMCksXHJcbiAgICAgIHJhbmdlcy5hbHBoYSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgKHJhbmdlcy5hbHBoYS5taW4gPT09IHVuZGVmaW5lZCAmJiByYW5nZXMuYWxwaGEubWF4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IFJhbmRvbS5mbG9hdChyYW5nZXMuYWxwaGEubWluID8/IDAsIHJhbmdlcy5hbHBoYS5tYXggPz8gMSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29sb3JSR0IocmFuZ2VzOiBSR0JSYW5nZXMpOiBDb2xvcjtcclxuICBzdGF0aWMgY29sb3JSR0IoXHJcbiAgICBtaW5SZWQ6IG51bWJlcixcclxuICAgIG1heFJlZDogbnVtYmVyLFxyXG4gICAgbWluR3JlZW46IG51bWJlcixcclxuICAgIG1heEdyZWVuOiBudW1iZXIsXHJcbiAgICBtaW5CbHVlOiBudW1iZXIsXHJcbiAgICBtYXhCbHVlOiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9yUkdCKFxyXG4gICAgYXJnMTogUkdCUmFuZ2VzIHwgbnVtYmVyLFxyXG4gICAgbWF4UmVkPzogbnVtYmVyLFxyXG4gICAgbWluR3JlZW4/OiBudW1iZXIsXHJcbiAgICBtYXhHcmVlbj86IG51bWJlcixcclxuICAgIG1pbkJsdWU/OiBudW1iZXIsXHJcbiAgICBtYXhCbHVlPzogbnVtYmVyLFxyXG4gICAgbWluQWxwaGE/OiBudW1iZXIsXHJcbiAgICBtYXhBbHBoYT86IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3QgcmFuZ2VzOiBSR0JSYW5nZXMgPVxyXG4gICAgICB0eXBlb2YgYXJnMSA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gYXJnMVxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICByZWQ6IHtcclxuICAgICAgICAgICAgICBtaW46IGFyZzEsXHJcbiAgICAgICAgICAgICAgbWF4OiBtYXhSZWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyZWVuOiB7IG1pbjogbWluR3JlZW4sIG1heDogbWF4R3JlZW4gfSxcclxuICAgICAgICAgICAgYmx1ZTogeyBtaW46IG1pbkJsdWUsIG1heDogbWF4Qmx1ZSB9LFxyXG4gICAgICAgICAgICBhbHBoYTogeyBtaW46IG1pbkFscGhhLCBtYXg6IG1heEFscGhhIH0sXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHJldHVybiBDb2xvci5yZ2IoXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2VzLnJlZD8ubWluID8/IDAsIHJhbmdlcy5yZWQ/Lm1heCA/PyAyNTUpLFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlcy5ncmVlbj8ubWluID8/IDAsIHJhbmdlcy5ncmVlbj8ubWF4ID8/IDI1NSksXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2VzLmJsdWU/Lm1pbiA/PyAwLCByYW5nZXMuYmx1ZT8ubWF4ID8/IDI1NSksXHJcbiAgICAgIHJhbmdlcy5hbHBoYSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgKHJhbmdlcy5hbHBoYS5taW4gPT09IHVuZGVmaW5lZCAmJiByYW5nZXMuYWxwaGEubWF4ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IFJhbmRvbS5pbnQocmFuZ2VzLmFscGhhLm1pbiA/PyAwLCByYW5nZXMuYWxwaGEubWF4ID8/IDI1NSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmxvYXQobWF4OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgc3RhdGljIGZsb2F0KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlcjtcclxuICBzdGF0aWMgZmxvYXQoYXJnMTogbnVtYmVyLCBhcmcyPzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBbbWluLCBtYXhdID0gYXJnMiA9PT0gdW5kZWZpbmVkID8gWzAsIGFyZzFdIDogW2FyZzEsIGFyZzJdO1xyXG5cclxuICAgIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb2Y8VCBleHRlbmRzIGFueVtdPihhcnJheTogVCkge1xyXG4gICAgcmV0dXJuIGFycmF5W1JhbmRvbS5pbnQoYXJyYXkubGVuZ3RoKV07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW50KG1heDogbnVtYmVyKTogbnVtYmVyO1xyXG4gIHN0YXRpYyBpbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyO1xyXG4gIHN0YXRpYyBpbnQoLi4uYXJnczogW251bWJlcl0pIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKFJhbmRvbS5mbG9hdCguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vY29sb3JcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuL3ZlY3RvcjJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhZG93IHtcclxuICAjYmx1ciA9IGNyZWF0ZVN0YXRlKDApO1xyXG4gICNjb2xvciA9IENvbG9yLmdyYXkoMCk7XHJcbiAgI29mZnNldCA9IFZlY3RvcjJELnplcm8oKTtcclxuICAjY2hhbmdlTGlzdGVuZXJNYXAgPSBuZXcgTWFwPENoYW5nZUxpc3RlbmVyPFNoYWRvdz4sICgpID0+IHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFBhcnRpYWw8U2hhZG93Pikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyOiAodXBkYXRlZFZhbHVlOiBTaGFkb3cpID0+IHZvaWQpIHtcclxuICAgIGlmICh0aGlzLiNjaGFuZ2VMaXN0ZW5lck1hcC5oYXMobGlzdGVuZXIpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbGlzdGVuZXJDYWxsZXIgPSAoKSA9PiBsaXN0ZW5lcih0aGlzKTtcclxuXHJcbiAgICB0aGlzLiNibHVyLmFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyQ2FsbGVyKTtcclxuICAgIHRoaXMuI29mZnNldC5hZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lckNhbGxlcik7XHJcblxyXG4gICAgdGhpcy4jY2hhbmdlTGlzdGVuZXJNYXAuc2V0KGxpc3RlbmVyLCBsaXN0ZW5lckNhbGxlcik7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8U2hhZG93Pikge1xyXG4gICAgY29uc3QgY2FsbGVyID0gdGhpcy4jY2hhbmdlTGlzdGVuZXJNYXAuZ2V0KGxpc3RlbmVyKTtcclxuXHJcbiAgICBpZiAoY2FsbGVyID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiNibHVyLnJlbW92ZUNoYW5nZUxpc3RlbmVyKGNhbGxlcik7XHJcbiAgICB0aGlzLiNvZmZzZXQucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoY2FsbGVyKTtcclxuXHJcbiAgICB0aGlzLiNjaGFuZ2VMaXN0ZW5lck1hcC5kZWxldGUobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgI2NoYW5nZUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy4jaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfTtcclxuXHJcbiAgI2hhbmRsZUNoYW5nZSgpIHtcclxuICAgIGZvciAoY29uc3QgW18sIGNhbGxlcl0gb2YgdGhpcy4jY2hhbmdlTGlzdGVuZXJNYXApIHtcclxuICAgICAgY2FsbGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYmx1cigpIHtcclxuICAgIHJldHVybiB0aGlzLiNibHVyLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGJsdXIodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNibHVyLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI2JsdXIudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLiNoYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLiNjb2xvcjtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcih2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2NvbG9yLmVxdWFscyh2YWx1ZSkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiNjb2xvciA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuI2hhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZXF1YWxzKG90aGVyOiBTaGFkb3cpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG90aGVyLiNibHVyID09PSB0aGlzLiNibHVyICYmXHJcbiAgICAgIG90aGVyLiNjb2xvci5lcXVhbHModGhpcy4jY29sb3IpICYmXHJcbiAgICAgIG90aGVyLiNvZmZzZXQuZXF1YWxzKHRoaXMuI29mZnNldClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgb2Zmc2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI29mZnNldDtcclxuICB9XHJcblxyXG4gIHNldCBvZmZzZXQodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNvZmZzZXQgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuI29mZnNldC5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLiNjaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICB2YWx1ZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNjaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICB0aGlzLiNvZmZzZXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuI29mZnNldC5lcXVhbHModmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuI2hhbmRsZUNoYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgY29udGV4dC5zaGFkb3dCbHVyID0gdGhpcy4jYmx1ci52YWx1ZTtcclxuICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSB0aGlzLiNjb2xvci50b1N0cmluZygpO1xyXG4gICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gdGhpcy4jb2Zmc2V0Lng7XHJcbiAgICBjb250ZXh0LnNoYWRvd09mZnNldFkgPSB0aGlzLiNvZmZzZXQueTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFN0YXRlPFQ+IHtcclxuICAjbGlzdGVuZXJzID0gbmV3IFNldDxDaGFuZ2VMaXN0ZW5lcjxUPj4oKTtcclxuICAjdmFsdWU6IFQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZTogVCkge1xyXG4gICAgdGhpcy4jdmFsdWUgPSBpbml0aWFsVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGlzdGVuZXIgRnVuY3Rpb24gd2l0aCAxIHBhcmFtZXRlcjogdGhlIGNoYW5nZWQgdmFsdWVcclxuICAgKiBAcmV0dXJucyBBcnJheSBvZiBsaXN0ZW5lcnMgY3VycmVudGx5IHJlZ2lzdGVyZWRcclxuICAgKi9cclxuXHJcbiAgYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFQ+KTogQ2hhbmdlTGlzdGVuZXI8VD5bXSB7XHJcbiAgICB0aGlzLiNsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLiNsaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgaXMgbm8gbG9uZ2VyIGNhbGxlZCB3aGVuIHRoZSB2YWx1ZVxyXG4gICAqIGNoYW5nZXNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBMaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmVcclxuICAgKiBAcmV0dXJucyBBcnJheSBvZiBsaXN0ZW5lcnMgY3VycmVudGx5IHJlZ2lzdGVyZWRcclxuICAgKi9cclxuXHJcbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFQ+KTogQ2hhbmdlTGlzdGVuZXI8VD5bXSB7XHJcbiAgICB0aGlzLiNsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLiNsaXN0ZW5lcnMpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhbmRsZUNoYW5nZSgpIHtcclxuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy4jbGlzdGVuZXJzKSB7XHJcbiAgICAgIGxpc3RlbmVyKHRoaXMuI3ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhbm90aGVyIFN0YXRlIHJlcHJlc2VudHMgdGhlIHNhbWUgdmFsdWUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3RoZXIgU3RhdGUgb2Ygc2FtZSB0eXBlXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuXHJcbiAgZXF1YWxzKG90aGVyOiBUIHwgU3RhdGU8VD4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLiN2YWx1ZSA9PT0gb3RoZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBtb3ZlcyBhIGxpc3RlbmVyIGZyb20gb25lIFN0YXRlIHRvIGFub3RoZXIgYW5kIHJldHVybnMgdGhlXHJcbiAgICogb3RoZXIgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3RoZXIgQW5vdGhlciBTdGF0ZSBvZiB0aGUgc2FtZSB0eXBlXHJcbiAgICogQHBhcmFtIGNoYW5nZUxpc3RlbmVyXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuXHJcbiAgcmVwbGFjZTxPIGV4dGVuZHMgdGhpcz4ob3RoZXI6IE8sIGNoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxUPik6IE8ge1xyXG4gICAgaWYgKHRoaXMuZXF1YWxzKG90aGVyKSkge1xyXG4gICAgICBpZiAodGhpcyA9PT0gb3RoZXIpIHJldHVybiBvdGhlcjtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoY2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyLmFkZENoYW5nZUxpc3RlbmVyKGNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICBjaGFuZ2VMaXN0ZW5lcihvdGhlci4jdmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBvdGhlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgdmFsdWUgc3RvcmVkIGJ5IHRoaXMgU3RhdGUuXHJcbiAgICovXHJcblxyXG4gIGdldCB2YWx1ZSgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLiN2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZShuZXdWYWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI3ZhbHVlID09PSBuZXdWYWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI3ZhbHVlID0gbmV3VmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGF0ZTxUPih0YXJnZXQ6IFQpIHtcclxuICByZXR1cm4gbmV3IFN0YXRlKHRhcmdldCk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFVuaXRzIHtcclxuICBzdGF0aWMgc2l6ZSA9IHtcclxuICAgIGNlbnRpbWV0ZXJzOiBcImNtXCIsXHJcbiAgICBtaWxsaW1ldGVyczogXCJtbVwiLFxyXG4gICAgcXVhcnRlck1pbGxpbWV0ZXJzOiBcIlFcIixcclxuICAgIGluY2hlczogXCJpblwiLFxyXG4gICAgcGljYXM6IFwicGNcIixcclxuICAgIHBvaW50czogXCJwdFwiLFxyXG4gICAgcGl4ZWxzOiBcInB4XCIsXHJcbiAgICBwZXJjZW50Vmlld3BvcnRIZWlnaHQ6IFwidmhcIixcclxuICAgIHBlcmNlbnRWaWV3cG9ydFdpZHRoOiBcInZ3XCIsXHJcbiAgfSBhcyBjb25zdDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMkRCYXNlIHtcclxuICAjeDogbnVtYmVyO1xyXG4gICN5OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLiN4ID0geDtcclxuICAgIHRoaXMuI3kgPSB5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jeDtcclxuICB9XHJcblxyXG4gIHNldCB4KHZhbHVlKSB7XHJcbiAgICB0aGlzLiN4ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLiN5O1xyXG4gIH1cclxuXHJcbiAgc2V0IHkodmFsdWUpIHtcclxuICAgIHRoaXMuI3kgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyRCBleHRlbmRzIFN0YXRlPFZlY3RvcjJEQmFzZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0geCkge1xyXG4gICAgc3VwZXIobmV3IFZlY3RvcjJEQmFzZSh4LCB5KSk7XHJcbiAgfVxyXG5cclxuICBjb3B5KCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XHJcbiAgfVxyXG5cclxuICBlcXVhbHMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuO1xyXG4gIGVxdWFscyhvdGhlcjogVmVjdG9yMkQpOiBib29sZWFuO1xyXG4gIGVxdWFscyhhcmcxOiBWZWN0b3IyRCB8IG51bWJlciwgYXJnMj86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSByZXR1cm4gdGhpcy54ID09PSBhcmcxICYmIHRoaXMueSA9PT0gYXJnMjtcclxuICAgIHJldHVybiB0aGlzLnggPT09IGFyZzEueCAmJiB0aGlzLnkgPT09IGFyZzEueTtcclxuICB9XHJcblxyXG4gIGdldCBpbnZlcnNlKCkge1xyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KC10aGlzLngsIC10aGlzLnkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMkQoMSk7XHJcbiAgfVxyXG5cclxuICBtaW51cyh4OiBudW1iZXIsIHk6IG51bWJlcik6IFZlY3RvcjJEO1xyXG4gIG1pbnVzKG90aGVyOiBWZWN0b3IyRCk6IFZlY3RvcjJEO1xyXG4gIG1pbnVzKGFyZzE6IFZlY3RvcjJEIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzEgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgIHJldHVybiBWZWN0b3IyRC54eSh0aGlzLnggLSBhcmcxLCB0aGlzLnkgLSAoYXJnMiA/PyBhcmcxKSk7XHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkodGhpcy54IC0gYXJnMS54LCB0aGlzLnkgLSBhcmcxLnkpO1xyXG4gIH1cclxuXHJcbiAgcGx1cyh4OiBudW1iZXIsIHk6IG51bWJlcik6IFZlY3RvcjJEO1xyXG4gIHBsdXMob3RoZXI6IFZlY3RvcjJEKTogVmVjdG9yMkQ7XHJcbiAgcGx1cyhhcmcxOiBWZWN0b3IyRCB8IG51bWJlciwgYXJnMj86IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKVxyXG4gICAgICByZXR1cm4gVmVjdG9yMkQueHkodGhpcy54ICsgYXJnMSwgdGhpcy55ICsgKGFyZzIgPz8gYXJnMSkpO1xyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMueCArIGFyZzEueCwgdGhpcy55ICsgYXJnMS55KTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgY29uc3QgeFN0cmluZyA9IE51bWJlci5pc0ludGVnZXIodGhpcy54KVxyXG4gICAgICA/IHRoaXMueC50b1N0cmluZygpXHJcbiAgICAgIDogdGhpcy54LnRvRml4ZWQoMSk7XHJcbiAgICBjb25zdCB5U3RyaW5nID0gTnVtYmVyLmlzSW50ZWdlcih0aGlzLnkpXHJcbiAgICAgID8gdGhpcy55LnRvU3RyaW5nKClcclxuICAgICAgOiB0aGlzLnkudG9GaXhlZCgxKTtcclxuXHJcbiAgICByZXR1cm4gYCR7eFN0cmluZ30sICR7eVN0cmluZ31gO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHh5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS54O1xyXG4gIH1cclxuXHJcbiAgc2V0IHgodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudmFsdWUueCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnZhbHVlLnggPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS55O1xyXG4gIH1cclxuXHJcbiAgc2V0IHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMudmFsdWUueSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnZhbHVlLnkgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHplcm8oKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IsXHJcbiAgSFRNTEVsZW1lbnRDb250cm9sbGVyLFxyXG59IGZyb20gXCIuLi9kb2N1bWVudC9kb21CYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSFRNTEF1ZGlvV3JhcHBlciBleHRlbmRzIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yKFxyXG4gIFwiYXVkaW9cIlxyXG4pIHt9XHJcblxyXG5leHBvcnQgdHlwZSBIVE1MQXVkaW9Db250cm9sbGVyID0gSFRNTEVsZW1lbnRDb250cm9sbGVyPFxyXG4gIFwiYXVkaW9cIixcclxuICBIVE1MQXVkaW9XcmFwcGVyXHJcbj47XHJcbiIsImltcG9ydCB7IGRvY3VtZW50Q2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IsXHJcbiAgSFRNTEVsZW1lbnRDb250cm9sbGVyLFxyXG59IGZyb20gXCIuL2RvbUJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudENvbnRhaW5lcldyYXBwZXIgZXh0ZW5kcyBkb2N1bWVudENoaWxkcmVuKFxyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yKFwiZGl2XCIpXHJcbikge31cclxuXHJcbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGFpbmVyQ29udHJvbGxlciA9IEhUTUxFbGVtZW50Q29udHJvbGxlcjxcclxuICBcImRpdlwiLFxyXG4gIERvY3VtZW50Q29udGFpbmVyV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSBcIi4uL21peGFibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRDb250YWluZXJXcmFwcGVyIH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFNWR1NWR0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vdmlzdWFsL3N2Z1NWR1wiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3N0YXRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcFxyXG4+KHRhZzogVCkge1xyXG4gIHJldHVybiBjbGFzcyBIVE1MRWxlbWVudFdyYXBwZXIge1xyXG4gICAgI2VsZW1lbnQ6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICAgICAgdGhpcy4jZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2FudmFzMkQob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRDYW52YXNFbGVtZW50Pikge1xyXG4gICAgICBjb25zdCBjYW52YXNDb250cm9sbGVyID0gY3JlYXRlQ3VzdG9tRWxlbWVudChcclxuICAgICAgICBDYW52YXMyRENhbnZhc0VsZW1lbnQsXHJcbiAgICAgICAgb3B0aW9uc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRyb2xsZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIGNhbnZhc0NvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlV3JhcHBlZENoaWxkPFxyXG4gICAgICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwLFxyXG4gICAgICBXIGV4dGVuZHMgSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8VD5cclxuICAgID4oXHJcbiAgICAgIFdyYXBwZXJDb25zdHJ1Y3RvcjogVyxcclxuICAgICAgb3B0aW9ucz86IE9wdGlvbnM8SFRNTEVsZW1lbnRDb250cm9sbGVyPFQsIEluc3RhbmNlVHlwZTxXPj4+XHJcbiAgICApOiBIVE1MRWxlbWVudENvbnRyb2xsZXI8VCwgSW5zdGFuY2VUeXBlPFc+PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBjcmVhdGVXcmFwcGVkQ29udHJvbGxlcjxULCBXPihXcmFwcGVyQ29uc3RydWN0b3IpO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRyb2xsZXIuZWxlbWVudCk7XHJcblxyXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRyb2xsZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQuc3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0eWxlKGRlY2xhcmF0aW9uOiBDU1NTdHlsZURlY2xhcmF0aW9uKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4jZWxlbWVudC5zdHlsZSwgZGVjbGFyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyhvcHRpb25zPzogT3B0aW9uczxTVkdTVkdDb250cm9sbGVyPikge1xyXG4gICAgICBjb25zdCBzdmdTVkdDb250cm9sbGVyID0gY3JlYXRlQ3VzdG9tRWxlbWVudChTVkdTVkdDb250cm9sbGVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzdmdTVkdDb250cm9sbGVyKTtcclxuXHJcbiAgICAgIHJldHVybiBzdmdTVkdDb250cm9sbGVyO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFxyXG4gIFQgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBcclxuPiA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+PjtcclxuXHJcbmV4cG9ydCB0eXBlIFRlbXBsYXRlQXBwbGllcjxcclxuICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwLFxyXG4gIFcgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8SFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8VD4+XHJcbj4gPSAoXHJcbiAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksXHJcbiAgLi4udmFsdWVzOiBhbnlbXVxyXG4pID0+IEhUTUxFbGVtZW50Q29udHJvbGxlcjxULCBXPjtcclxuXHJcbmV4cG9ydCB0eXBlIEhUTUxFbGVtZW50Q29udHJvbGxlcjxcclxuICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwLFxyXG4gIFcgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8SFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8VD4+XHJcbj4gPSBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF0gJiBXICYgVGVtcGxhdGVBcHBsaWVyPFQsIFc+O1xyXG5cclxudHlwZSBTdGF0ZUxpc3RlbmVyPFQ+ID0ge1xyXG4gIHN0YXRlOiBTdGF0ZTxUPjtcclxuICBjaGFuZ2VMaXN0ZW5lcjogKG5ld1ZhbHVlOiBUKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlU3RhdGVMaXN0ZW5lciA9IDxUPihcclxuICBzdGF0ZTogU3RhdGU8VD4sXHJcbiAgY2hhbmdlTGlzdGVuZXI6IChuZXdWYWx1ZTogVCkgPT4gdm9pZFxyXG4pOiBTdGF0ZUxpc3RlbmVyPFQ+ID0+ICh7IHN0YXRlLCBjaGFuZ2VMaXN0ZW5lciB9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXcmFwcGVkQ29udHJvbGxlcjxcclxuICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwLFxyXG4gIFcgZXh0ZW5kcyBIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxUPlxyXG4+KFdyYXBwZXJDb25zdHJ1Y3RvcjogVyk6IEhUTUxFbGVtZW50Q29udHJvbGxlcjxULCBJbnN0YW5jZVR5cGU8Vz4+IHtcclxuICBjb25zdCB3cmFwcGVyID0gbmV3IFdyYXBwZXJDb25zdHJ1Y3RvcigpO1xyXG5cclxuICBjb25zdCB7IGVsZW1lbnQgfSA9IHdyYXBwZXI7XHJcblxyXG4gIGNvbnN0IHN0YXRlTWFwID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgU3RhdGVMaXN0ZW5lcjxhbnk+PigpO1xyXG5cclxuICBmdW5jdGlvbiBhcHBseVRlbXBsYXRlKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IGFueVtdKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgc3RyXSBvZiBzdHJpbmdzLmVudHJpZXMoKSkge1xyXG4gICAgICBjb25zdCB0ZXh0Tm9kZSA9IG5ldyBUZXh0KHN0cik7XHJcblxyXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpbmRleF07XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0YXRlKSB7XHJcbiAgICAgICAgICBsZXQgbXV0YWJsZVRleHROb2RlID0gbmV3IFRleHQodmFsdWUudmFsdWUpO1xyXG5cclxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXV0YWJsZVRleHROb2RlKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzdGF0ZUxpc3RlbmVyID0gY3JlYXRlU3RhdGVMaXN0ZW5lcih2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RleHQgPSBuZXcgVGV4dChuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VDaGlsZChuZXdUZXh0LCBtdXRhYmxlVGV4dE5vZGUpO1xyXG5cclxuICAgICAgICAgICAgbXV0YWJsZVRleHROb2RlID0gbmV3VGV4dDtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHZhbHVlLmFkZENoYW5nZUxpc3RlbmVyKHN0YXRlTGlzdGVuZXIuY2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBuZWlnaGJvck5vZGUgPSB2YWx1ZSBpbnN0YW5jZW9mIE5vZGUgPyB2YWx1ZSA6IG5ldyBUZXh0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5laWdoYm9yTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRyb2xsZXI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IFByb3h5KGFwcGx5VGVtcGxhdGUsIHtcclxuICAgIGdldChfLCBwcm9wZXJ0eUtleSkge1xyXG4gICAgICBjb25zdCB3cmFwcGVyVmFsdWUgPSBSZWZsZWN0LmdldCh3cmFwcGVyLCBwcm9wZXJ0eUtleSk7XHJcblxyXG4gICAgICBpZiAod3JhcHBlclZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXJWYWx1ZS5iaW5kKHdyYXBwZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gd3JhcHBlclZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBlbGVtZW50VmFsdWUgPSBSZWZsZWN0LmdldChlbGVtZW50LCBwcm9wZXJ0eUtleSk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gZWxlbWVudFZhbHVlLmJpbmQoZWxlbWVudCk7XHJcblxyXG4gICAgICByZXR1cm4gZWxlbWVudFZhbHVlO1xyXG4gICAgfSxcclxuICAgIHNldChfLCBwcm9wZXJ0eUtleSwgdmFsdWUpIHtcclxuICAgICAgY29uc3Qgb2xkU3RhdGVMaXN0ZW5lciA9IHN0YXRlTWFwLmdldChwcm9wZXJ0eUtleSk7XHJcblxyXG4gICAgICBpZiAob2xkU3RhdGVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb2xkU3RhdGVMaXN0ZW5lci5zdGF0ZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihcclxuICAgICAgICAgIG9sZFN0YXRlTGlzdGVuZXIuY2hhbmdlTGlzdGVuZXJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJvcGVydHlLZXkgaW4gd3JhcHBlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0YXRlKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdTdGF0ZUxpc3RlbmVyID0gY3JlYXRlU3RhdGVMaXN0ZW5lcih2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIFJlZmxlY3Quc2V0KHdyYXBwZXIsIHByb3BlcnR5S2V5LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB2YWx1ZS5hZGRDaGFuZ2VMaXN0ZW5lcihuZXdTdGF0ZUxpc3RlbmVyLmNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgICBzdGF0ZU1hcC5zZXQocHJvcGVydHlLZXksIG5ld1N0YXRlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBSZWZsZWN0LnNldCh3cmFwcGVyLCBwcm9wZXJ0eUtleSwgdmFsdWUudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHdyYXBwZXIsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0YXRlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGVMaXN0ZW5lciA9IGNyZWF0ZVN0YXRlTGlzdGVuZXIodmFsdWUsIChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgUmVmbGVjdC5zZXQoZWxlbWVudCwgcHJvcGVydHlLZXksIG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFsdWUuYWRkQ2hhbmdlTGlzdGVuZXIobmV3U3RhdGVMaXN0ZW5lci5jaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIHN0YXRlTWFwLnNldChwcm9wZXJ0eUtleSwgbmV3U3RhdGVMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LnNldChlbGVtZW50LCBwcm9wZXJ0eUtleSwgdmFsdWUudmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gUmVmbGVjdC5zZXQoZWxlbWVudCwgcHJvcGVydHlLZXksIHZhbHVlKTtcclxuICAgIH0sXHJcbiAgfSkgYXMgSFRNTEVsZW1lbnRDb250cm9sbGVyPFQsIEluc3RhbmNlVHlwZTxXPj47XHJcblxyXG4gIHJldHVybiBjb250cm9sbGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm9vdChyb290UGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xyXG4gIGlmIChyb290UGFyZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBSb290IGVsZW1lbnQncyBwYXJlbnQgaXMgdW5kZWZpbmVkLiBNYWtlIHN1cmUgeW91ciBzY3JpcHQgcnVucyBhZnRlciB0aGUgRE9NIGNvbnRlbnQgbG9hZHMuIFlvdSBjYW4gZG8gdGhpcyBieSBhZGRpbmcgdGhlICdkZWZlcicgYXR0cmlidXRlLmBcclxuICAgICk7XHJcblxyXG4gIGNvbnN0IHJvb3RDb250cm9sbGVyID0gY3JlYXRlV3JhcHBlZENvbnRyb2xsZXIoRG9jdW1lbnRDb250YWluZXJXcmFwcGVyKTtcclxuXHJcbiAgcm9vdFBhcmVudC5hcHBlbmRDaGlsZChyb290Q29udHJvbGxlci5lbGVtZW50KTtcclxuXHJcbiAgcmV0dXJuIHJvb3RDb250cm9sbGVyO1xyXG59XHJcbiIsImltcG9ydCB7IGRvY3VtZW50Q2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IsXHJcbiAgSFRNTEVsZW1lbnRDb250cm9sbGVyLFxyXG59IGZyb20gXCIuL2RvbUJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFBhcmFncmFwaFdyYXBwZXIgZXh0ZW5kcyBkb2N1bWVudENoaWxkcmVuKFxyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yKFwicFwiKVxyXG4pIHt9XHJcblxyXG5leHBvcnQgdHlwZSBEb2N1bWVudFBhcmFncmFwaENvbnRyb2xsZXIgPSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgXCJwXCIsXHJcbiAgRG9jdW1lbnRQYXJhZ3JhcGhXcmFwcGVyXHJcbj47XHJcbiIsImltcG9ydCB7IGRvY3VtZW50Q2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IsXHJcbiAgSFRNTEVsZW1lbnRDb250cm9sbGVyLFxyXG59IGZyb20gXCIuL2RvbUJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFNwYW5XcmFwcGVyIGV4dGVuZHMgZG9jdW1lbnRDaGlsZHJlbihcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcInNwYW5cIilcclxuKSB7fVxyXG5cclxuZXhwb3J0IHR5cGUgRG9jdW1lbnRTcGFuQ29udHJvbGxlciA9IEhUTUxFbGVtZW50Q29udHJvbGxlcjxcclxuICBcInNwYW5cIixcclxuICBEb2N1bWVudFNwYW5XcmFwcGVyXHJcbj47XHJcbiIsImltcG9ydCB7IGNhbWVsVG9LZWJhYkNhc2UgfSBmcm9tIFwiLi4vdXRsaXRpZXMvY2FtZWxUb0tlYmFiXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tSFRNTEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10gPSBbXTtcclxuICBzdGF0aWMgdGFnOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBjcmVhdGVDaGlsZDxFIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihcclxuICAgIEVsZW1lbnRDbGFzczogRSxcclxuICAgIG9wdGlvbnM/OiBPcHRpb25zPEluc3RhbmNlVHlwZTxFPj5cclxuICApIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KEVsZW1lbnRDbGFzcywgb3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcblxyXG4gIHJlZ2lzdGVyQ2hhbmdlPFAgZXh0ZW5kcyBrZXlvZiBXcml0ZWFibGU8dGhpcz4+KFxyXG4gICAgcHJvcGVydHlOYW1lOiBQLFxyXG4gICAgbmV3VmFsdWU6IHRoaXNbUF1cclxuICApIHtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBjYW1lbFRvS2ViYWJDYXNlKHByb3BlcnR5TmFtZSBhcyBzdHJpbmcpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRBdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKTtcclxuXHJcbiAgICBpZiAoY3VycmVudEF0dHJpYnV0ZVZhbHVlID09PSBzdHJpbmdWYWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHN0cmluZ1ZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21FbGVtZW50PEUgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KFxyXG4gIEVsZW1lbnRDbGFzczogRSxcclxuICBvcHRpb25zPzogT3B0aW9uczxJbnN0YW5jZVR5cGU8RT4+XHJcbikge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KEVsZW1lbnRDbGFzcy50YWcpIGFzIEluc3RhbmNlVHlwZTxFPjtcclxuXHJcbiAgT2JqZWN0LmFzc2lnbihlbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBjMmRGaWxsIH0gZnJvbSBcIi4uLy4uL21peGlucy9maWxsXCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7IGhhc0Zyb20sIGhhc1RvIH0gZnJvbSBcIi4uLy4uL21peGlucy9mcm9tVG9cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7XHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQsXHJcbiAgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkLFxyXG59IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGhhc0NvbnRyb2xQb2ludHM8QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgaGFzVG8oQmFzZSkge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcclxuICAgICAgLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwiY29udHJvbC1hXCIsXHJcbiAgICAgIFwiY29udHJvbC1iXCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNjb250cm9sQSA9IFZlY3RvcjJELnplcm8oKTtcclxuICAgICNjb250cm9sQiA9IFZlY3RvcjJELnplcm8oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRyb2xzIHRoZSBzaGFwZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJ2ZS5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0ciBjb250cm9sLWFcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBjb250cm9sQSgpOiBWZWN0b3IyRCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNjb250cm9sQTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29udHJvbEEodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2NvbnRyb2xBLmVxdWFscyh2YWx1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJjb250cm9sQVwiLCAodGhpcy4jY29udHJvbEEgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udHJvbHMgdGhlIHNoYXBlIGF0IHRoZSBlbmQgb2YgdGhlIGN1cnZlLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyIGNvbnRyb2wtYlxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbnRyb2xCKCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2NvbnRyb2xCO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb250cm9sQih2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jY29udHJvbEIuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImNvbnRyb2xCXCIsICh0aGlzLiNjb250cm9sQiA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwiY29udHJvbC1hXCI6XHJcbiAgICAgICAgICB0aGlzLmNvbnRyb2xBID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSBcImNvbnRyb2wtYlwiOlxyXG4gICAgICAgICAgdGhpcy5jb250cm9sQiA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZUJlemllciBleHRlbmRzIGhhc0NvbnRyb2xQb2ludHMoXHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWRcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtc2hhcGUtYmV6aWVyXCIgYXMgY29uc3Q7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRyb2xBLCBjb250cm9sQiwgdG8gfSA9IHRoaXM7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICBjb250cm9sQS54LFxyXG4gICAgICBjb250cm9sQS55LFxyXG4gICAgICBjb250cm9sQi54LFxyXG4gICAgICBjb250cm9sQi55LFxyXG4gICAgICB0by54LFxyXG4gICAgICB0by55XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXNoYXBlLWJlemllclwiLCBDYW52YXMyRFNoYXBlQmV6aWVyKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyREJlemllciBleHRlbmRzIGMyZEZpbGwoXHJcbiAgYzJkU3Ryb2tlKGhhc0Zyb20oaGFzQ29udHJvbFBvaW50cyhDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQpKSlcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtYmV6aWVyXCI7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRyb2xBLCBjb250cm9sQiwgZnJvbSwgdG8gfSA9IHRoaXM7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQuYmV6aWVyQ3VydmVUbyhcclxuICAgICAgY29udHJvbEEueCxcclxuICAgICAgY29udHJvbEEueSxcclxuICAgICAgY29udHJvbEIueCxcclxuICAgICAgY29udHJvbEIueSxcclxuICAgICAgdG8ueCxcclxuICAgICAgdG8ueVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1iZXppZXJcIiwgQ2FudmFzMkRCZXppZXIpO1xyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL21peGFibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG50eXBlIEV2ZW50TGlzdGVuZXJBZGRlciA9IHtcclxuICByZWFkb25seSBbRXZlbnROYW1lIGluIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBdOiAoXHJcbiAgICBsaXN0ZW5lcjogVHlwZWRFdmVudExpc3RlbmVyPEV2ZW50TmFtZT5cclxuICApID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQzJEQmFzZSBleHRlbmRzIEN1c3RvbUhUTUxFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBUaGUgZWxlbWVudCdzIGN1c3RvbSBIVE1MIHRhZy4gVGhpcyBjYW4gYmUgcGFzc2VkIGludG8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpLlxyXG4gICAqL1xyXG4gIHN0YXRpYyB0YWc6IHN0cmluZztcclxuXHJcbiAgI2V2ZW50UHJveHkgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb3h5KHt9IGFzIEV2ZW50TGlzdGVuZXJBZGRlciwge1xyXG4gICAgICBnZXQ8RSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXA+KF86IG5ldmVyLCBldmVudE5hbWU6IEUpIHtcclxuICAgICAgICByZXR1cm4gKGxpc3RlbmVyOiBUeXBlZEV2ZW50TGlzdGVuZXI8RT4pID0+XHJcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KSgpO1xyXG4gICNldmVyeUZyYW1lOiBVcGRhdGVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSA8YzJkLWNhbnZhcz4gZWxlbWVudCB0aGF0IGlzIHJlbmRlcmluZyB0aGlzIGVsZW1lbnQuIFRoZSA8YzJkLWNhbnZhcz5cclxuICAgKiB3aWxsIGJlIGFuIGFuY2VzdG9yIG9mIHRoaXMgZWxlbWVudC5cclxuICAgKi9cclxuICBnZXQgY2FudmFzKCk6IENhbnZhczJEQ2FudmFzRWxlbWVudCB7XHJcbiAgICBjb25zdCB7IHBhcmVudEVsZW1lbnQgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IG51bGwgfHwgcGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIEMyREJhc2UgPT09IGZhbHNlKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW52YXMyRCByZW5kZXJhYmxlIGlzIG5vdCBhIGNoaWxkIG9mIGEgQ2FudmFzMkRDYW52YXNcIik7XHJcblxyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmNhbnZhcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgcmVuZGVyaW5nLiBUaGUgZnVuY3Rpb24gaGFzIG9uZSBwYXJhbWV0ZXI6IHRoZVxyXG4gICAqIGN1cnJlbnQgZnJhbWUgbnVtYmVyLlxyXG4gICAqL1xyXG4gIGdldCBldmVyeUZyYW1lKCk6IFVwZGF0ZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLiNldmVyeUZyYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IGV2ZXJ5RnJhbWUodXBkYXRlcikge1xyXG4gICAgdGhpcy4jZXZlcnlGcmFtZSA9IHVwZGF0ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnRlcmZhY2UgZm9yIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgd2l0aCBhbHRlcm5hdGl2ZSBzeW50YXguIEZvciBleGFtcGxlLFxyXG4gICAqIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpc3RlbmVyKSBiZWNvbWVzXHJcbiAgICogZWxlbWVudC5saXN0ZW4uY2xpY2sobGlzdGVuZXIpLlxyXG4gICAqL1xyXG4gIGdldCBsaXN0ZW4oKTogRXZlbnRMaXN0ZW5lckFkZGVyIHtcclxuICAgIHJldHVybiB0aGlzLiNldmVudFByb3h5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2NhbGVzIGEgdmVjdG9yIGJ5IHRoZSBkZXZpY2UncyBwaXhlbCByYXRpby5cclxuICAgKi9cclxuICBzY2FsZUJ5UGl4ZWxSYXRpbyh2ZWN0b3I6IFZlY3RvcjJEKSB7XHJcbiAgICBjb25zdCBwb2ludCA9IG5ldyBET01Qb2ludFJlYWRPbmx5KHZlY3Rvci54LCB2ZWN0b3IueSkubWF0cml4VHJhbnNmb3JtKFxyXG4gICAgICBuZXcgRE9NTWF0cml4KCkuc2NhbGUoZGV2aWNlUGl4ZWxSYXRpbywgZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KHBvaW50LngsIHBvaW50LnkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IENsaWNrVHJhY2tlciB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2NsaWNrXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkVHJhY2tlciB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2tleWJvYXJkXCI7XHJcbmltcG9ydCB7IE1vdXNlVHJhY2tlciB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL21vdXNlXCI7XHJcbmltcG9ydCB7IGMyZFN0YW5kYWxvbmVDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvY2hpbGRyZW5cIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4vYzJkQmFzZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIH0gZnJvbSBcIi4vcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBEcmF3U3R5bGUgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9taXhhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRDYW52YXNFbGVtZW50IGV4dGVuZHMgYzJkU3RhbmRhbG9uZUNoaWxkcmVuKEMyREJhc2UpIHtcclxuICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgIC4uLkMyREJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgXCJhbHBoYVwiLFxyXG4gICAgXCJ3aWR0aFwiLFxyXG4gICAgXCJoZWlnaHRcIixcclxuICAgIFwiYmFja2dyb3VuZFwiLFxyXG4gIF07XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtY2FudmFzXCI7XHJcbiAgfVxyXG5cclxuICAjYW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgI2JhY2tncm91bmQ6IERyYXdTdHlsZSA9IFwibm9uZVwiO1xyXG4gICNjbGlja1RyYWNrZXI6IENsaWNrVHJhY2tlcjtcclxuICAjY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICNkZWx0YVRpbWU6IG51bWJlciA9IDA7XHJcbiAgI2RldmljZVBpeGVsUmF0aW86IG51bWJlcjtcclxuICAjZnJhbWUgPSAwO1xyXG4gICNrZXlib2FyZFRyYWNrZXIgPSBuZXcgS2V5Ym9hcmRUcmFja2VyKCk7XHJcbiAgI2xhc3RGcmFtZVRpbWUgPSAtMTtcclxuICAjbW91c2VUcmFja2VyOiBNb3VzZVRyYWNrZXI7XHJcbiAgI3JlbmRlckV2ZW50cyA9IG5ldyBTZXQ8a2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcD4oKTtcclxuICAjcmVuZGVyUXVldWVkID0gZmFsc2U7XHJcbiAgI3NldEFscGhhOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICAjd2FpdEZvciA9IG5ldyBTZXQ8RWxlbWVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xyXG5cclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGlmIChjb250ZXh0ID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJOdWxsIGNvbnRleHRcIik7XHJcblxyXG4gICAgdGhpcy4jY29udGV4dCA9IGNvbnRleHQ7XHJcblxyXG4gICAgdGhpcy4jbW91c2VUcmFja2VyID0gbmV3IE1vdXNlVHJhY2tlcih0aGlzLmRvbUNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy4jY2xpY2tUcmFja2VyID0gbmV3IENsaWNrVHJhY2tlcih0aGlzLmRvbUNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy4jZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBhZGRFdmVudExpc3RlbmVyKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXHJcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zIHwgdW5kZWZpbmVkXHJcbiAgKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImtleWRvd25cIjpcclxuICAgICAgY2FzZSBcImtleXVwXCI6XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhbnNwYXJlbmN5IGFwcGxpZWQgdG8gYWxsIHNoYXBlcyBhbmQgaW1hZ2VzIG9uIHRoaXMgY2FudmFzLiAwLjAgaXMgZnVsbHlcclxuICAgKiB0cmFuc3BhcmVudCwgYW5kIDEuMCBpcyBmdWxseSBvcGFxdWUuIFRoaXMgZG9lcyBub3QgYXBwbHkgdG8gdGhlIGJhY2tncm91bmQuXHJcbiAgICovXHJcbiAgZ2V0IGFscGhhKCk6IG51bWJlciB7XHJcbiAgICAvKiBcclxuICAgIFRoZSByZW5kZXJpbmcgY29udGV4dCdzIGdsb2JhbEFscGhhIHByb3BlcnR5IGRvZXMgbm90IHJldGFpbiB2YWx1ZXMgc2V0ICBcclxuICAgIGJlZm9yZSB0aGUgY2FudmFzIGlzIGNvbm5lY3RlZCwgc28gdGhlIHByaXZhdGUgcHJvcGVydHkgaXMgaGVyZSB0byBhbGxvdyB0aGUgXHJcbiAgICBwcm9wZXJ0eSB0byBiZSBzZXQgd2hlbiBjcmVhdGluZyB0aGUgY2FudmFzLlxyXG4gICAgKi9cclxuICAgIHJldHVybiB0aGlzLiNzZXRBbHBoYSA/PyB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGE7XHJcbiAgfVxyXG5cclxuICBzZXQgYWxwaGEodmFsdWUpIHtcclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXHJcbiAgICAgIFwiYWxwaGFcIixcclxuICAgICAgKHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IHRoaXMuI3NldEFscGhhID0gdmFsdWUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJ1ZSBpZiB0aGUgY2FudmFzIGlzIHJlbmRlcmluZyBhbmltYXRpb24uXHJcbiAgICovXHJcbiAgZ2V0IGFuaW1hdGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLiNhbmltYXRpbmc7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcImFscGhhXCI6XHJcbiAgICAgICAgICB0aGlzLmFscGhhID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIndpZHRoXCI6XHJcbiAgICAgICAgICB0aGlzLndpZHRoID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcImhlaWdodFwiOlxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiYmFja2dyb3VuZFwiOlxyXG4gICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gYXR0cmlidXRlUGFyc2VyLkNvbG9yKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdCB0aGUgYmVnaW5uaW5nIG9mIGVhY2ggZnJhbWUsIHRoZSBjYW52YXMgcmVuZGVycyBpdHMgYmFja2dyb3VuZCB1c2luZ1xyXG4gICAqIHRoaXMgc3R5bGUuIEl0IG1heSBiZSBhIENvbG9yIG9yIEdyYWRpZW50LiBXaGVuIHNldCB0byBcIm5vbmVcIiwgdGhlIGNhbnZhc1xyXG4gICAqIHdpbGwgbm90IHJlbmRlciBhIGJhY2tncm91bmQuIFRoaXMgd2lsbCByZXN1bHQgaW4gdGhlIG5leHQgZnJhbWUgYmVpbmdcclxuICAgKiByZW5kZXJlZCBvbiB0b3Agb2YgdGhlIGxhc3QgZnJhbWUncyBjb250ZW50cy5cclxuICAgKlxyXG4gICAqIEBhdHRyXHJcbiAgICogQHJlZmxlY3RcclxuICAgKi9cclxuICBnZXQgYmFja2dyb3VuZCgpOiBEcmF3U3R5bGUge1xyXG4gICAgcmV0dXJuIHRoaXMuI2JhY2tncm91bmQ7XHJcbiAgfVxyXG5cclxuICBzZXQgYmFja2dyb3VuZCh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2JhY2tncm91bmQudG9TdHJpbmcoKSA9PT0gdmFsdWUudG9TdHJpbmcoKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJiYWNrZ3JvdW5kXCIsICh0aGlzLiNiYWNrZ3JvdW5kID0gdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENlbnRlciBwb2ludCBvZiB0aGUgY2FudmFzLlxyXG4gICAqL1xyXG4gIGdldCBjZW50ZXIoKTogVmVjdG9yMkQge1xyXG4gICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBjb25zdCBwaXhlbFJhdGlvUXVlcnkgPSBgKHJlc29sdXRpb246ICR7d2luZG93LmRldmljZVBpeGVsUmF0aW99ZHBweClgO1xyXG5cclxuICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGl4ZWxSYXRpb1F1ZXJ5KTtcclxuXHJcbiAgICBtZWRpYS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMuI3VwZGF0ZVNjYWxlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuI3VwZGF0ZVNjYWxlKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy5xdWV1ZVJlbmRlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5xdWV1ZVJlbmRlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvKiBcclxuICAgIFRoZSByZW5kZXJpbmcgY29udGV4dCdzIGdsb2JhbEFscGhhIHByb3BlcnR5IGRvZXMgbm90IHJldGFpbiB2YWx1ZXMgc2V0ICBcclxuICAgIGJlZm9yZSB0aGUgY2FudmFzIGlzIGNvbm5lY3RlZCwgc28gdGhpcyBpcyBoZXJlIHRvIGFsbG93IHRoZSBwcm9wZXJ0eSB0byBiZVxyXG4gICAgc2V0IHdoZW4gY3JlYXRpbmcgdGhlIGNhbnZhcy5cclxuICAgICovXHJcbiAgICB0aGlzLmFscGhhID0gdGhpcy5hbHBoYTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoaWxkPEUgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KFxyXG4gICAgRWxlbWVudENsYXNzOiBFLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8V3JpdGVhYmxlPEluc3RhbmNlVHlwZTxFPj4+IHwgdW5kZWZpbmVkXHJcbiAgKTogSW5zdGFuY2VUeXBlPEU+IHtcclxuICAgIGNvbnN0IGNoaWxkID0gc3VwZXIuY3JlYXRlQ2hpbGQoRWxlbWVudENsYXNzLCBvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnF1ZXVlUmVuZGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGtleURvd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy4ja2V5Ym9hcmRUcmFja2VyLmRvd247XHJcbiAgfVxyXG5cclxuICBnZXQgZG9tQ2FudmFzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbnRleHQuY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsaWNrZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2xpY2tUcmFja2VyLmNsaWNrZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xpY2tQb3NpdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLiNjbGlja1RyYWNrZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNjb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGltZSBwYXNzZWQgdGhlIHByZXZpb3VzIGFuZCBjdXJyZW50IGZyYW1lLlxyXG4gICAqL1xyXG4gIGdldCBkZWx0YVRpbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jZGVsdGFUaW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGV2ZXJ5RnJhbWUoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIuZXZlcnlGcmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBldmVyeUZyYW1lKHVwZGF0ZXI6IFVwZGF0ZXIgfCBudWxsKSB7XHJcbiAgICBzdXBlci5ldmVyeUZyYW1lID0gdXBkYXRlcjtcclxuXHJcbiAgICBpZiAodXBkYXRlciA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI2FuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5xdWV1ZVJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZyYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2ZyYW1lO1xyXG4gIH1cclxuXHJcbiAga2V5SGVsZCguLi5hcmdzOiBQYXJhbWV0ZXJzPEtleWJvYXJkVHJhY2tlcltcImtleUhlbGRcIl0+KSB7XHJcbiAgICByZXR1cm4gdGhpcy4ja2V5Ym9hcmRUcmFja2VyLmtleUhlbGQoLi4uYXJncyk7XHJcbiAgfVxyXG5cclxuICBrZXlQcmV2aW91c2x5SGVsZCguLi5hcmdzOiBQYXJhbWV0ZXJzPEtleWJvYXJkVHJhY2tlcltcImtleVByZXZpb3VzbHlIZWxkXCJdPikge1xyXG4gICAgcmV0dXJuIHRoaXMuI2tleWJvYXJkVHJhY2tlci5rZXlQcmV2aW91c2x5SGVsZCguLi5hcmdzKTtcclxuICB9XHJcblxyXG4gIGdldCBsYXN0S2V5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2tleWJvYXJkVHJhY2tlci5sYXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1vdXNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI21vdXNlVHJhY2tlcjtcclxuICB9XHJcblxyXG4gIHF1ZXVlUmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuI3JlbmRlclF1ZXVlZCB8fCB0aGlzLiN3YWl0Rm9yLnNpemUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLiNyZW5kZXJRdWV1ZWQgPSB0cnVlO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZSkgPT4ge1xyXG4gICAgICB0aGlzLiNkZWx0YVRpbWUgPSB0aW1lIC0gdGhpcy4jbGFzdEZyYW1lVGltZTtcclxuXHJcbiAgICAgIHRoaXMuI2xhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG5cclxuICAgICAgdGhpcy4jcmVuZGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIGVsZW1lbnQgaW4gcGl4ZWxzIGRpdmlkZWQgYnkgdGhlIGRldmljZSdzIHBpeGVsIHJhdGlvLlxyXG4gICAqXHJcbiAgICogQGF0dHJcclxuICAgKiBAcmVmbGVjdFxyXG4gICAqL1xyXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZG9tQ2FudmFzLndpZHRoIC8gZGV2aWNlUGl4ZWxSYXRpbztcclxuICB9XHJcblxyXG4gIHNldCB3aWR0aCh2YWx1ZSkge1xyXG4gICAgY29uc3QgeyBkZXZpY2VQaXhlbFJhdGlvIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLmRvbUNhbnZhcy53aWR0aCAvIGRldmljZVBpeGVsUmF0aW8pIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmRvbUNhbnZhcy53aWR0aCA9IHZhbHVlICogZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB0aGlzLmRvbUNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3ZhbHVlfXB4YDtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwid2lkdGhcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgY2FudmFzIGVsZW1lbnQgaW4gcGl4ZWxzIGRpdmlkZWQgYnkgdGhlIGRldmljZSdzIHBpeGVsIHJhdGlvLlxyXG4gICAqXHJcbiAgICogQGF0dHJcclxuICAgKiBAcmVmbGVjdFxyXG4gICAqL1xyXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmRvbUNhbnZhcy5oZWlnaHQgLyBkZXZpY2VQaXhlbFJhdGlvO1xyXG4gIH1cclxuXHJcbiAgc2V0IGhlaWdodCh2YWx1ZSkge1xyXG4gICAgY29uc3QgeyBkZXZpY2VQaXhlbFJhdGlvIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLmRvbUNhbnZhcy5oZWlnaHQgLyBkZXZpY2VQaXhlbFJhdGlvKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5kb21DYW52YXMuaGVpZ2h0ID0gdmFsdWUgKiBkZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLnN0eWxlLmhlaWdodCA9IGAke3ZhbHVlfXB4YDtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiaGVpZ2h0XCIsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyQ2hhbmdlPFAgZXh0ZW5kcyBrZXlvZiB0aGlzPihcclxuICAgIHByb3BlcnR5TmFtZTogUCxcclxuICAgIG5ld1ZhbHVlOiB0aGlzW1BdXHJcbiAgKTogdm9pZCB7XHJcbiAgICBzdXBlci5yZWdpc3RlckNoYW5nZShwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnF1ZXVlUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICAjcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuI3dhaXRGb3Iuc2l6ZSkge1xyXG4gICAgICB0aGlzLiNyZW5kZXJRdWV1ZWQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLiNjb250ZXh0O1xyXG5cclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgIHRoaXMuZXZlcnlGcmFtZT8uKHRoaXMuI2ZyYW1lKTtcclxuXHJcbiAgICB0aGlzLiNyZW5kZXJRdWV1ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb250ZXh0LnNjYWxlKGRldmljZVBpeGVsUmF0aW8sIGRldmljZVBpeGVsUmF0aW8pO1xyXG5cclxuICAgIGlmICh0aGlzLiNiYWNrZ3JvdW5kICE9PSBcIm5vbmVcIikge1xyXG4gICAgICBjb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xyXG5cclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLiNiYWNrZ3JvdW5kLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGUpIHtcclxuICAgICAgICBjaGlsZC5yZW5kZXIodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja1RyYWNrZXIuYWR2YW5jZUZyYW1lKCk7XHJcblxyXG4gICAgdGhpcy4ja2V5Ym9hcmRUcmFja2VyLmFkdmFuY2VGcmFtZSgpO1xyXG5cclxuICAgIHRoaXMuI21vdXNlVHJhY2tlci5hZHZhbmNlRnJhbWUoKTtcclxuXHJcbiAgICB0aGlzLiNmcmFtZSsrO1xyXG5cclxuICAgIGlmICh0aGlzLiNhbmltYXRpbmcpIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck9uKGV2ZW50TmFtZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCkge1xyXG4gICAgaWYgKHRoaXMuI3JlbmRlckV2ZW50cy5oYXMoZXZlbnROYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnF1ZXVlUmVuZGVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuI3JlbmRlckV2ZW50cy5hZGQoZXZlbnROYW1lKTtcclxuICB9XHJcblxyXG4gICN1cGRhdGVTY2FsZSgpIHtcclxuICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbzogbmV3UGl4ZWxSYXRpbyB9ID0gd2luZG93O1xyXG5cclxuICAgIGNvbnN0IHNjYWxlUmF0aW8gPSBuZXdQaXhlbFJhdGlvIC8gdGhpcy4jZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB0aGlzLmRvbUNhbnZhcy53aWR0aCAqPSBzY2FsZVJhdGlvO1xyXG4gICAgdGhpcy5kb21DYW52YXMuaGVpZ2h0ICo9IHNjYWxlUmF0aW87XHJcblxyXG4gICAgdGhpcy4jZGV2aWNlUGl4ZWxSYXRpbyA9IG5ld1BpeGVsUmF0aW87XHJcblxyXG4gICAgdGhpcy5xdWV1ZVJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgd2FpdEZvcihlbGVtZW50OiBFbGVtZW50LCBldmVudE5hbWU6IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXAgPSBcImxvYWRcIikge1xyXG4gICAgdGhpcy4jd2FpdEZvci5hZGQoZWxlbWVudCk7XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLiN3YWl0Rm9yLmRlbGV0ZShlbGVtZW50KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiN3YWl0Rm9yLnNpemUgPT09IDApIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmdsZSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IExpbmVhckdyYWRpZW50LCBSYWRpYWxHcmFkaWVudCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IGMyZEZpbGwgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZpbGxcIjtcclxuaW1wb3J0IHsgYzJkUmVjdGFuZ2xlQm91bmRzIH0gZnJvbSBcIi4uLy4uL21peGlucy9yZWN0YW5nbGVCb3VuZHNcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHtcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCxcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbiAgQzJEVHJhbnNmb3JtZWQsXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFbGxpcHNlPEIgZXh0ZW5kcyBDMkRUcmFuc2Zvcm1lZD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGMyZFJlY3RhbmdsZUJvdW5kcyhCYXNlLCBcImNlbnRlclwiKSB7XHJcbiAgICAjc3RhcnRBbmdsZSA9IEFuZ2xlLnplcm8oKTtcclxuICAgICNlbmRBbmdsZSA9IEFuZ2xlLnJhZGlhbnMoTWF0aC5QSSAqIDIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgc3VwZXIub3JpZ2luID0gXCJjZW50ZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY29uc3QgeyBvZmZzZXQ6IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzO1xyXG5cclxuICAgICAgY2FudmFzMkQuY29udGV4dC5lbGxpcHNlKFxyXG4gICAgICAgIHBvc2l0aW9uLngsXHJcbiAgICAgICAgcG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aCAvIDIsXHJcbiAgICAgICAgaGVpZ2h0IC8gMixcclxuICAgICAgICAwLFxyXG4gICAgICAgIHRoaXMuI3N0YXJ0QW5nbGUucmFkaWFucyxcclxuICAgICAgICB0aGlzLiNlbmRBbmdsZS5yYWRpYW5zXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICBncmFkaWVudDogUmFkaWFsR3JhZGllbnRcclxuICAgICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG9mZnNldDogeyB4LCB5IH0sXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICB9ID0gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gMjtcclxuXHJcbiAgICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeCwgeSwgcmFkaXVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhcnRBbmdsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3N0YXJ0QW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXJ0QW5nbGUodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3N0YXJ0QW5nbGUuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInN0YXJ0QW5nbGVcIiwgKHRoaXMuI3N0YXJ0QW5nbGUgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmRBbmdsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2VuZEFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBlbmRBbmdsZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jZW5kQW5nbGUuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImVuZEFuZ2xlXCIsICh0aGlzLiNlbmRBbmdsZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJERWxsaXBzZSBleHRlbmRzIHJlbmRlckVsbGlwc2UoXHJcbiAgYzJkU3Ryb2tlKGMyZEZpbGwoQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkKSlcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtZWxsaXBzZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLWVsbGlwc2VcIiwgQ2FudmFzMkRFbGxpcHNlKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlRWxsaXBzZSBleHRlbmRzIHJlbmRlckVsbGlwc2UoXHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWRcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtc2hhcGUtZWxsaXBzZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXNoYXBlLWVsbGlwc2VcIiwgQ2FudmFzMkRTaGFwZUVsbGlwc2UpO1xyXG4iLCJpbXBvcnQgeyBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyByZW5kZXJzVmlzdWFsTWVkaWEgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3Zpc3VhbE1lZGlhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRJbWFnZSBleHRlbmRzIHJlbmRlcnNWaXN1YWxNZWRpYShcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbiAgXCJpbWdcIlxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1pbWFnZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLWltYWdlXCIsIENhbnZhczJESW1hZ2UpO1xyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7IGhhc0Zyb20sIGhhc1RvIH0gZnJvbSBcIi4uLy4uL21peGlucy9mcm9tVG9cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIExpbmVhckdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG59IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQsXHJcbiAgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkLFxyXG59IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZUxpbmUgZXh0ZW5kcyBoYXNUbyhDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCkge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXNoYXBlLWxpbmVcIjtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgdG8gfSA9IHRoaXM7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5saW5lVG8odG8ueCwgdG8ueSk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtc2hhcGUtbGluZVwiLCBDYW52YXMyRFNoYXBlTGluZSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRMaW5lIGV4dGVuZHMgYzJkU3Ryb2tlKFxyXG4gIGhhc1RvKGhhc0Zyb20oQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkKSlcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtbGluZVwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNlbnRlcigpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy50by54IC0gdGhpcy5mcm9tLng7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnRvLnkgLSB0aGlzLmZyb20ueTtcclxuXHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkodGhpcy5mcm9tLnggKyB3aWR0aCAvIDIsIHRoaXMuZnJvbS55ICsgaGVpZ2h0IC8gMik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0LmxpbmVUbyh0by54LCB0by55KTtcclxuXHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbmljYWxHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBDb25pY2FsR3JhZGllbnRcclxuICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHRoaXMuY2VudGVyKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxpbmVhckdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IExpbmVhckdyYWRpZW50XHJcbiAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmZyb207XHJcblxyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnRvLnggLSB4O1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50by55IC0geTtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyUmFkaWFsR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogUmFkaWFsR3JhZGllbnRcclxuICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMudG8ueCAtIHRoaXMuZnJvbS54O1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50by55IC0gdGhpcy5mcm9tLnk7XHJcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIDI7XHJcblxyXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmNlbnRlcjtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgsIHksIHJhZGl1cyk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtbGluZVwiLCBDYW52YXMyRExpbmUpO1xyXG4iLCJpbXBvcnQgeyBCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ib3JkZXJSYWRpdXNcIjtcclxuaW1wb3J0IHtcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgc3ZnQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7IHN2Z0RpbWVuc2lvbnMgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgYzJkRmlsbCwgc3ZnRmlsbCB9IGZyb20gXCIuLi8uLi9taXhpbnMvZmlsbFwiO1xyXG5pbXBvcnQge1xyXG4gIGMyZFJlY3RhbmdsZUJvdW5kcyxcclxuICBzdmdSZWN0YW5nbGVCb3VuZHMsXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy9yZWN0YW5nbGVCb3VuZHNcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlLCBzdmdTdHJva2UgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N0cm9rZVwiO1xyXG5pbXBvcnQge1xyXG4gIEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkLFxyXG4gIEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCxcclxuICBDMkRUcmFuc2Zvcm1lZCxcclxuICBzdmdUcmFuc2Zvcm0sXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU1ZHQ29udHJvbGxlciB9IGZyb20gXCIuL3N2Z0Jhc2VcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNhbnZhc1JlY3RhbmdsZTxCIGV4dGVuZHMgQzJEVHJhbnNmb3JtZWQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgYzJkUmVjdGFuZ2xlQm91bmRzKEJhc2UsIFwidG9wTGVmdFwiKSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xyXG4gICAgICAuLi5jMmRSZWN0YW5nbGVCb3VuZHMoQmFzZSwgXCJ0b3BMZWZ0XCIpLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJib3JkZXItcmFkaXVzXCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNib3JkZXJSYWRpdXM6IEJvcmRlclJhZGl1cyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmFtZSA9PT0gXCJib3JkZXItcmFkaXVzXCIpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuYm9yZGVyUmFkaXVzID0gbnVsbDtcclxuICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5ib3JkZXJSYWRpdXM/LnRvU3RyaW5nKCkpIHJldHVybjtcclxuICAgICAgICBlbHNlIHRoaXMuYm9yZGVyUmFkaXVzID0gYXR0cmlidXRlUGFyc2VyLkJvcmRlclJhZGl1cyhuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAjYm9yZGVyUmFkaXVzQ2hhbmdlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJib3JkZXJSYWRpdXNcIiwgdGhpcy4jYm9yZGVyUmFkaXVzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGdldCBib3JkZXJSYWRpdXMoKTogQm9yZGVyUmFkaXVzIHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNib3JkZXJSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJvcmRlclJhZGl1cyh2YWx1ZTogQm9yZGVyUmFkaXVzIHwgbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50Qm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXM7XHJcblxyXG4gICAgICBpZiAodmFsdWUgPT09IGN1cnJlbnRCb3JkZXJSYWRpdXMpIHJldHVybjtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCb3JkZXJSYWRpdXMgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBjdXJyZW50Qm9yZGVyUmFkaXVzLnJlbW92ZUNoYW5nZUxpc3RlbmVyKFxyXG4gICAgICAgICAgdGhpcy4jYm9yZGVyUmFkaXVzQ2hhbmdlTGlzdGVuZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYm9yZGVyUmFkaXVzXCIsICh0aGlzLiNib3JkZXJSYWRpdXMgPSB2YWx1ZSkpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV3Qm9yZGVyUmFkaXVzID1cclxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyBuZXcgQm9yZGVyUmFkaXVzKHZhbHVlKSA6IHZhbHVlO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRCb3JkZXJSYWRpdXMgPT09IG51bGwpIHtcclxuICAgICAgICBuZXdCb3JkZXJSYWRpdXMuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jYm9yZGVyUmFkaXVzQ2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFxyXG4gICAgICAgICAgXCJib3JkZXJSYWRpdXNcIixcclxuICAgICAgICAgICh0aGlzLiNib3JkZXJSYWRpdXMgPSBuZXdCb3JkZXJSYWRpdXMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiNib3JkZXJSYWRpdXMgPSBuZXdCb3JkZXJSYWRpdXM7XHJcblxyXG4gICAgICBjdXJyZW50Qm9yZGVyUmFkaXVzLnJlcGxhY2UoXHJcbiAgICAgICAgbmV3Qm9yZGVyUmFkaXVzLFxyXG4gICAgICAgIHRoaXMuI2JvcmRlclJhZGl1c0NoYW5nZUxpc3RlbmVyXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB0b3BMZWZ0OiB7IHgsIHkgfSxcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQsXHJcbiAgICAgIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYm9yZGVyUmFkaXVzID09PSBudWxsKVxyXG4gICAgICAgIGNhbnZhczJELmNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGNhbnZhczJELmNvbnRleHQucm91bmRSZWN0KFxyXG4gICAgICAgICAgeCxcclxuICAgICAgICAgIHksXHJcbiAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzLnRvQXJyYXkoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICBncmFkaWVudDogUmFkaWFsR3JhZGllbnRcclxuICAgICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpIC8gMjtcclxuXHJcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5jZW50ZXI7XHJcblxyXG4gICAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgsIHksIHJhZGl1cyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEUmVjdGFuZ2xlIGV4dGVuZHMgcmVuZGVyQ2FudmFzUmVjdGFuZ2xlKFxyXG4gIGMyZFN0cm9rZShjMmRGaWxsKEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCkpXHJcbikge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXJlY3RhbmdsZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXJlY3RhbmdsZVwiLCBDYW52YXMyRFJlY3RhbmdsZSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSBleHRlbmRzIHJlbmRlckNhbnZhc1JlY3RhbmdsZShcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZFxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1zaGFwZS1yZWN0YW5nbGVcIjtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1zaGFwZS1yZWN0YW5nbGVcIiwgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSk7XHJcblxyXG5leHBvcnQgY2xhc3MgU1ZHUmVjdGFuZ2xlQ29udHJvbGxlciBleHRlbmRzIHN2Z1N0cm9rZShcclxuICBzdmdGaWxsKFxyXG4gICAgc3ZnRGltZW5zaW9ucyhcclxuICAgICAgc3ZnVHJhbnNmb3JtKFxyXG4gICAgICAgIHN2Z1JlY3RhbmdsZUJvdW5kcyhcclxuICAgICAgICAgIHN2Z0NoaWxkcmVuKGNyZWF0ZVNWR0NvbnRyb2xsZXIoXCJyZWN0XCIsIFwic3ZnLXJlY3RhbmdsZVwiKSksXHJcbiAgICAgICAgICBcInRvcExlZnRcIlxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIClcclxuKSB7XHJcbiAgZ2V0IG9yaWdpbigpIHtcclxuICAgIHJldHVybiBzdXBlci5vcmlnaW47XHJcbiAgfVxyXG5cclxuICBzZXQgb3JpZ2luKHZhbHVlKSB7XHJcbiAgICBzdXBlci5vcmlnaW4gPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN2Zy1yZWN0YW5nbGVcIiwgU1ZHUmVjdGFuZ2xlQ29udHJvbGxlcik7XHJcbiIsImltcG9ydCB7XHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIExpbmVhckdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG59IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IE1vdXNlRGF0YSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL21vdXNlXCI7XHJcbmltcG9ydCB7IFNoYWRvdyB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3NoYWRvd1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IGMyZFNoYXBlQ2hpbGRyZW4sIGMyZFN0YW5kYWxvbmVDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvY2hpbGRyZW5cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7IEMyREJhc2UgfSBmcm9tIFwiLi9jMmRCYXNlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEU2hhcGUgfSBmcm9tIFwiLi9zaGFwZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9taXhhYmxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSB9KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIGV4dGVuZHMgQzJEQmFzZSB7XHJcbiAgI2NoYW5nZWRTaW5jZVJlbmRlciA9IGZhbHNlO1xyXG4gICNjbGlja0xpc3RlbmVycyA9IG5ldyBTZXQ8RXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdD4oKTtcclxuICAjbG9jYWxNb3VzZSA9IG5ldyBNb3VzZURhdGEoKTtcclxuICAjbW91c2VMaXN0ZW5lcnMgPSBuZXcgU2V0PEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q+KCk7XHJcbiAgI3NoYWRvdzogU2hhZG93IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBhZGRFdmVudExpc3RlbmVyKFxyXG4gICAgdHlwZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCxcclxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxyXG4gICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc1xyXG4gICk6IHZvaWQge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJjbGlja1wiOlxyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbmRlck9uKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuI2NsaWNrTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwibW91c2Vkb3duXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZXVwXCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZW1vdmVcIjpcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW5kZXJPbih0eXBlKTtcclxuICAgICAgICB0aGlzLiNtb3VzZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIm1vdXNlZW50ZXJcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlb3V0XCI6XHJcbiAgICAgIGNhc2UgXCJtb3VzZW92ZXJcIjpcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW5kZXJPbihcIm1vdXNlbW92ZVwiKTtcclxuICAgICAgICB0aGlzLiNtb3VzZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hpbGQ8RSBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oXHJcbiAgICBFbGVtZW50Q2xhc3M6IEUsXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxXcml0ZWFibGU8SW5zdGFuY2VUeXBlPEU+Pj4gfCB1bmRlZmluZWRcclxuICApOiBJbnN0YW5jZVR5cGU8RT4ge1xyXG4gICAgY29uc3QgY2hpbGQgPSBzdXBlci5jcmVhdGVDaGlsZChFbGVtZW50Q2xhc3MsIG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VkRXZlbnQpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVuZGVyQ29uaWNhbEdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IENvbmljYWxHcmFkaWVudFxyXG4gICkge1xyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB0aGlzLmNhbnZhcy5jZW50ZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZW5kZXJMaW5lYXJHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBMaW5lYXJHcmFkaWVudFxyXG4gICkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNhbnZhcztcclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbmRlclJhZGlhbEdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IFJhZGlhbEdyYWRpZW50XHJcbiAgKSB7XHJcbiAgICBjb25zdCB7IGNlbnRlciwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jYW52YXM7XHJcbiAgICBjb25zdCBjYW52YXNSYWRpdXMgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIDI7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCBjZW50ZXIueCwgY2VudGVyLnksIGNhbnZhc1JhZGl1cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICB0eXBlOiBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwLFxyXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXHJcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zXHJcbiAgKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImNsaWNrXCI6XHJcbiAgICAgICAgdGhpcy4jY2xpY2tMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1vdXNlZG93blwiOlxyXG4gICAgICBjYXNlIFwibW91c2V1cFwiOlxyXG4gICAgICBjYXNlIFwibW91c2VlbnRlclwiOlxyXG4gICAgICBjYXNlIFwibW91c2VvdXRcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlb3ZlclwiOlxyXG4gICAgICBjYXNlIFwibW91c2Vtb3ZlXCI6XHJcbiAgICAgICAgdGhpcy4jbW91c2VMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgZ2V0IGNoYW5nZWRTaW5jZVJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLiNjaGFuZ2VkU2luY2VSZW5kZXI7XHJcbiAgfVxyXG5cclxuICAjaGFuZGxlQ2xpY2soY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb250ZXh0LCBjbGlja1Bvc2l0aW9uOiBjYW52YXNDbGljaywgY2xpY2tlZCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgaWYgKCFjbGlja2VkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZWxlbWVudENsaWNrID0gdGhpcy5zY2FsZUJ5UGl4ZWxSYXRpbyhjYW52YXNDbGljayk7XHJcblxyXG4gICAgY29uc3QgaW5QYXRoID0gY29udGV4dC5pc1BvaW50SW5QYXRoKGVsZW1lbnRDbGljay54LCBlbGVtZW50Q2xpY2sueSk7XHJcblxyXG4gICAgaWYgKGluUGF0aCkgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBQb2ludGVyRXZlbnQoXCJjbGlja1wiKSk7XHJcbiAgfVxyXG5cclxuICAjaGFuZGxlTW91c2UoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb250ZXh0LCBtb3VzZSB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgY29uc3QgaW5QYXRoID0gY29udGV4dC5pc1BvaW50SW5QYXRoKG1vdXNlLngsIG1vdXNlLnkpO1xyXG5cclxuICAgIGlmICghaW5QYXRoKSB7XHJcbiAgICAgIGlmICh0aGlzLiNsb2NhbE1vdXNlLm92ZXIgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZW91dFwiKSk7XHJcblxyXG4gICAgICAgIHRoaXMuI2xvY2FsTW91c2Uub3ZlciA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VvdmVyXCIpKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuI2xvY2FsTW91c2UuZXF1YWxzKG1vdXNlKSlcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vtb3ZlXCIpKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuI2xvY2FsTW91c2Uub3Zlcikge1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWVudGVyXCIpKTtcclxuXHJcbiAgICAgIHRoaXMuI2xvY2FsTW91c2Uub3ZlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBbaW5kZXgsIGJ1dHRvblN0YXRlXSBvZiBtb3VzZS5idXR0b25TdGF0ZXMuZW50cmllcygpKSB7XHJcbiAgICAgIGlmIChidXR0b25TdGF0ZSAhPT0gdGhpcy4jbG9jYWxNb3VzZS5idXR0b25TdGF0ZXNbaW5kZXhdKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvblN0YXRlKVxyXG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIHsgYnV0dG9uOiBpbmRleCB9KSk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHsgYnV0dG9uOiBpbmRleCB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuI2xvY2FsTW91c2UuYnV0dG9uU3RhdGVzW2luZGV4XSA9IGJ1dHRvblN0YXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyQ2hhbmdlPFAgZXh0ZW5kcyBrZXlvZiBXcml0ZWFibGU8dGhpcz4+KFxyXG4gICAgcHJvcGVydHlOYW1lOiBQLFxyXG4gICAgbmV3VmFsdWU6IHRoaXNbUF1cclxuICApIHtcclxuICAgIGlmICghdGhpcy4jY2hhbmdlZFNpbmNlUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuI2NoYW5nZWRTaW5jZVJlbmRlciA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VkRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLnJlZ2lzdGVyQ2hhbmdlKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb250ZXh0LCBmcmFtZSB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgY29udGV4dC5zYXZlKCk7XHJcblxyXG4gICAgdGhpcy5ldmVyeUZyYW1lPy4oZnJhbWUpO1xyXG5cclxuICAgIGlmICh0aGlzLiNzaGFkb3cgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy4jc2hhZG93LnJlbmRlcihjb250ZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVuZGVyQ2hpbGRyZW4oY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGUpIGNoaWxkLnJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG5cclxuICBhZnRlclJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KSB7XHJcbiAgICB0aGlzLiNjaGFuZ2VkU2luY2VSZW5kZXIgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy4jY2xpY2tMaXN0ZW5lcnMuc2l6ZSkgdGhpcy4jaGFuZGxlQ2xpY2soY2FudmFzMkQpO1xyXG5cclxuICAgIGlmICh0aGlzLiNtb3VzZUxpc3RlbmVycy5zaXplKSB0aGlzLiNoYW5kbGVNb3VzZShjYW52YXMyRCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjYW52YXMyRCk7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICAjc2hhZG93Q2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFNoYWRvdz4gPSAobmV3VmFsdWUpID0+IHtcclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzaGFkb3dcIiwgKHRoaXMuI3NoYWRvdyA9IG5ld1ZhbHVlKSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogRHJvcCBzaGFkb3cgcmVuZGVyZWQgYmVoaW5kIHRoZSBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGdldCBzaGFkb3coKTogU2hhZG93IHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy4jc2hhZG93O1xyXG4gIH1cclxuXHJcbiAgc2V0IHNoYWRvdyh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI3NoYWRvdyA9PT0gbnVsbCkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIHZhbHVlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI3NoYWRvd0NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHRoaXMuI3NoYWRvd0NoYW5nZUxpc3RlbmVyKHZhbHVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLiNzaGFkb3cucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy4jc2hhZG93Q2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInNoYWRvd1wiLCB2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jc2hhZG93LnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuI3NoYWRvd0NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICB2YWx1ZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgaWYgKCF0aGlzLiNzaGFkb3cuZXF1YWxzKHZhbHVlKSkgdGhpcy4jc2hhZG93Q2hhbmdlTGlzdGVuZXIodmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEU3RhbmRhbG9uZVJlbmRlcmFibGUgZXh0ZW5kcyBjMmRTdGFuZGFsb25lQ2hpbGRyZW4oXHJcbiAgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZVxyXG4pIHtcclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEU2hhcGVQYXJ0UmVuZGVyYWJsZSBleHRlbmRzIGMyZFNoYXBlQ2hpbGRyZW4oXHJcbiAgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZVxyXG4pIHt9XHJcbiIsImltcG9ydCB7IGMyZEZpbGwgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZpbGxcIjtcclxuaW1wb3J0IHsgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uL21peGlucy9vZmZzZXRcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHsgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEU2hhcGUgZXh0ZW5kcyBjMmRGaWxsKFxyXG4gIGMyZFN0cm9rZShvZmZzZXQoQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQpKVxyXG4pIHtcclxuICAjY2xvc2UgPSBmYWxzZTtcclxuXHJcbiAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsuLi5zdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwiY2xvc2VcIl07XHJcblxyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXNoYXBlXCI7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAobmFtZSA9PT0gXCJjbG9zZVwiKSB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5jbG9zZSA9IGZhbHNlO1xyXG4gICAgICBlbHNlIHRoaXMuY2xvc2UgPSBhdHRyaWJ1dGVQYXJzZXIuYm9vbGVhbihuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY2xvc2U7XHJcbiAgfVxyXG5cclxuICBzZXQgY2xvc2UodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNjbG9zZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiY2xvc2VcIiwgKHRoaXMuI2Nsb3NlID0gdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICBjb250ZXh0Lm1vdmVUbyh0aGlzLm9mZnNldC54LCB0aGlzLm9mZnNldC55KTtcclxuXHJcbiAgICBzdXBlci5yZW5kZXJDaGlsZHJlbihjYW52YXMyRCk7XHJcblxyXG4gICAgaWYgKHRoaXMuI2Nsb3NlKSBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhpcyBpcyBlbXB0eSB0byBwcmV2ZW50IGRvdWJsZSByZW5kZXJpbmcgY2hpbGRyZW5cclxuICByZW5kZXJDaGlsZHJlbihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7fVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtc2hhcGVcIiwgQ2FudmFzMkRTaGFwZSk7XHJcbiIsImltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL21peGFibGVcIjtcclxuaW1wb3J0IHsgU1ZHU1ZHQ29udHJvbGxlciB9IGZyb20gXCIuL3N2Z1NWR1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNWR0NvbnRyb2xsZXI8VCBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwPihcclxuICBzdmdUYWc6IFQsXHJcbiAgY29udHJvbGxlclRhZzogc3RyaW5nXHJcbikge1xyXG4gIHJldHVybiBjbGFzcyBTVkdFbGVtZW50Q29udHJvbGxlciBleHRlbmRzIEN1c3RvbUhUTUxFbGVtZW50IHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBzdGF0aWMgdGFnID0gY29udHJvbGxlclRhZztcclxuXHJcbiAgICAjbWFpbjogU1ZHRWxlbWVudFRhZ05hbWVNYXBbVF07XHJcbiAgICAjZ3JvdXA6IFNWR0dFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuI21haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICAgIHN2Z1RhZ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIHR5cGU6IGtleW9mIFNWR0VsZW1lbnRFdmVudE1hcCxcclxuICAgICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsXHJcbiAgICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnNcclxuICAgICk6IHZvaWQge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICB0eXBlOiBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwLFxyXG4gICAgICBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcclxuICAgICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1haW5FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkPFQgZXh0ZW5kcyBOb2RlPihub2RlOiBUKTogVCB7XHJcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy4jZ3JvdXAgPz8gdGhpcy4jY3JlYXRlR3JvdXAoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnRDb250cm9sbGVyKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmdyb3VwID8/IG5vZGUubWFpbkVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy4jZ3JvdXAgPz8gdGhpcy4jY3JlYXRlR3JvdXAoKTtcclxuXHJcbiAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdXBlci5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKSB7fVxyXG5cclxuICAgICNhdHRhY2hNYWluKCkge1xyXG4gICAgICBjb25zdCB7IHBhcmVudEVsZW1lbnQgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50Q29udHJvbGxlciA9IHBhcmVudEVsZW1lbnQgYXMgU1ZHRWxlbWVudENvbnRyb2xsZXI7XHJcblxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBwYXJlbnRDb250cm9sbGVyLmdyb3VwID8/IHBhcmVudENvbnRyb2xsZXIubWFpbkVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCB7IGdyb3VwIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGdyb3VwID09PSBudWxsKSB0YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5tYWluRWxlbWVudCk7XHJcbiAgICAgIGVsc2UgdGFyZ2V0LmFwcGVuZENoaWxkKGdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgdGhpcy4jYXR0YWNoTWFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgICNjcmVhdGVHcm91cCgpIHtcclxuICAgICAgaWYgKHRoaXMuI2dyb3VwICE9PSBudWxsKSByZXR1cm4gdGhpcy4jZ3JvdXA7XHJcblxyXG4gICAgICB0aGlzLiNncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgcGFyZW50RWxlbWVudCB9ID0gdGhpcy5tYWluRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRFbGVtZW50ICE9PSBudWxsKSBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuI2dyb3VwKTtcclxuXHJcbiAgICAgIHRoaXMuI2dyb3VwLmFwcGVuZENoaWxkKHRoaXMubWFpbkVsZW1lbnQpO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBbcHJvcGVydHlOYW1lLCBhdHRyaWJ1dGVOYW1lXSBvZiBPYmplY3QuZW50cmllcyhcclxuICAgICAgICB0aGlzLl9zdHlsZUF0dHJpYnV0ZXNcclxuICAgICAgKSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gUmVmbGVjdC5nZXQodGhpcywgcHJvcGVydHlOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgdGhpcy4jZ3JvdXAuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIFN0cmluZyh2YWx1ZSkpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW5FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuI2dyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBncm91cCgpOiBTVkdHRWxlbWVudCB8IG51bGwge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZ3JvdXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1haW5FbGVtZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWFpbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zZXRTdHlsZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgY29uc3QgeyBncm91cCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChncm91cCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdyb3VwLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zdHlsZUF0dHJpYnV0ZXMoKToge1xyXG4gICAgICBbS2V5IGluIGtleW9mIHRoaXNdPzogc3RyaW5nO1xyXG4gICAgfSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3ZnQ29udGFpbmVyKCk6IFNWR1NWR0VsZW1lbnQgfCBudWxsIHtcclxuICAgICAgY29uc3QgeyBncm91cCwgcGFyZW50RWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChncm91cCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwUGFyZW50ID0gZ3JvdXAucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKGdyb3VwUGFyZW50ID09PSBudWxsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGdyb3VwUGFyZW50IGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkgcmV0dXJuIGdyb3VwUGFyZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICBjb25zdCB7IGdyb3VwOiBwYXJlbnRHcm91cCwgbWFpbkVsZW1lbnQ6IHBhcmVudE1haW4gfSA9XHJcbiAgICAgICAgcGFyZW50RWxlbWVudCBhcyBTVkdFbGVtZW50Q29udHJvbGxlcjtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRHcm91cCBpbnN0YW5jZW9mIFNWR1NWR0VsZW1lbnQpIHJldHVybiBwYXJlbnRHcm91cDtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRNYWluIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkgcmV0dXJuIHBhcmVudE1haW47XHJcblxyXG4gICAgICByZXR1cm4gKHBhcmVudEVsZW1lbnQgYXMgU1ZHRWxlbWVudENvbnRyb2xsZXIpLnN2Z0NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3ZnQ29udGFpbmVyQ29udHJvbGxlcigpOiBTVkdTVkdDb250cm9sbGVyIHwgbnVsbCB7XHJcbiAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgU1ZHU1ZHQ29udHJvbGxlcikgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICBjb25zdCB7IHBhcmVudEVsZW1lbnQgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gbnVsbCkgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnRDb250cm9sbGVyID0gKHBhcmVudEVsZW1lbnQgYXMgU1ZHRWxlbWVudENvbnRyb2xsZXIpXHJcbiAgICAgICAgLnN2Z0NvbnRhaW5lckNvbnRyb2xsZXI7XHJcblxyXG4gICAgICBpZiAocGFyZW50Q29udHJvbGxlciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcGFyZW50Q29udHJvbGxlcjtcclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNWR0VsZW1lbnRDb250cm9sbGVyID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlU1ZHQ29udHJvbGxlcj47XHJcbiIsImltcG9ydCB7IHN2Z0NoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQgeyB2aWV3Qm94IH0gZnJvbSBcIi4uLy4uL21peGlucy92aWV3Qm94XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNWR0NvbnRyb2xsZXIsIFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4vc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBTVkdSZWN0YW5nbGVDb250cm9sbGVyIH0gZnJvbSBcIi4vcmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7IEdyYWRpZW50IH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTVkdTVkdDb250cm9sbGVyIGV4dGVuZHMgdmlld0JveChcclxuICBzdmdDaGlsZHJlbihjcmVhdGVTVkdDb250cm9sbGVyKFwic3ZnXCIsIFwic3ZnLXN2Z1wiKSlcclxuKSB7XHJcbiAgI2RlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImRlZnNcIik7XHJcbiAgI2dyYWRpZW50cyA9IG5ldyBTZXQ8U1ZHR3JhZGllbnRFbGVtZW50PigpO1xyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJjbG9zZWRcIiB9KTtcclxuXHJcbiAgICBzaGFkb3cuYXBwZW5kQ2hpbGQodGhpcy5tYWluRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5tYWluRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiNkZWZzKTtcclxuXHJcbiAgICB0aGlzLl9yZXNpemVWaWV3Qm94KCk7XHJcbiAgfVxyXG5cclxuICBfZGVmaW5lR3JhZGllbnQoZ3JhZGllbnQ6IEdyYWRpZW50KSB7XHJcbiAgICBpZiAodGhpcy4jZ3JhZGllbnRzLmhhcyhncmFkaWVudC5zdmcpKSByZXR1cm4gZ3JhZGllbnQuc3ZnLmlkO1xyXG5cclxuICAgIGNvbnN0IHBhZFN0YXJ0ID0gMjtcclxuXHJcbiAgICBjb25zdCBpZE51bWJlciA9IEFycmF5LmZyb20odGhpcy4jZ3JhZGllbnRzKS5yZWR1Y2UoKG1heE51bSwgZ3JhZGllbnQpID0+IHtcclxuICAgICAgY29uc3QgbnVtU3RyaW5nID0gZ3JhZGllbnQuaWQuc2xpY2UoLXBhZFN0YXJ0KTtcclxuXHJcbiAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KG51bVN0cmluZyk7XHJcblxyXG4gICAgICByZXR1cm4gTWF0aC5tYXgobWF4TnVtLCBudW0pO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgY29uc3QgZ3JhZGllbnRFbGVtZW50ID0gZ3JhZGllbnQuc3ZnO1xyXG5cclxuICAgIHRoaXMuI2RlZnMuYXBwZW5kQ2hpbGQoZ3JhZGllbnRFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCBpZCA9IGBncmFkaWVudC0ke2lkTnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQocGFkU3RhcnQsIFwiMFwiKX1gO1xyXG5cclxuICAgIHRoaXMuI2dyYWRpZW50cy5hZGQoZ3JhZGllbnRFbGVtZW50KTtcclxuXHJcbiAgICBncmFkaWVudEVsZW1lbnQuaWQgPSBpZDtcclxuXHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZChmaWxlbmFtZSA9IFwid2Vic3Bpbm5lci5zdmdcIikge1xyXG4gICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xyXG4gICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiIDEuMVwiKTtcclxuXHJcbiAgICBjb25zdCBzdmdTdHJpbmcgPSB0aGlzLm1haW5FbGVtZW50Lm91dGVySFRNTDtcclxuXHJcbiAgICBjb25zdCBkb3dubG9hZEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cclxuICAgIGRvd25sb2FkQW5jaG9yLmRvd25sb2FkID0gZmlsZW5hbWU7XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtzdmdTdHJpbmddLCB7IHR5cGU6IFwiaW1hZ2Uvc3ZnXCIgfSk7XHJcblxyXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICBkb3dubG9hZEFuY2hvci5ocmVmID0gdXJsO1xyXG5cclxuICAgIGRvd25sb2FkQW5jaG9yLmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc3ZnQ29udGFpbmVyKCk6IFNWR1NWR0VsZW1lbnQgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLm1haW5FbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3ZnLXN2Z1wiLCBTVkdTVkdDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0IHsgdXNlRm9udCB9IGZyb20gXCIuLi8uLi9taXhpbnMvZm9udFwiO1xyXG5pbXBvcnQgeyBjMmRGaWxsIH0gZnJvbSBcIi4uLy4uL21peGlucy9maWxsXCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7IEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCB9IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IGNoYW5nZWRFdmVudCB9IGZyb20gXCIuL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgb2Zmc2V0IH0gZnJvbSBcIi4uLy4uL21peGlucy9vZmZzZXRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7IExpbmVhckdyYWRpZW50LCBSYWRpYWxHcmFkaWVudCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcblxyXG5jbGFzcyBCYXNlIGV4dGVuZHMgYzJkRmlsbChcclxuICBjMmRTdHJva2Uob2Zmc2V0KHVzZUZvbnQoQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkKSkpXHJcbikge31cclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFRleHQgZXh0ZW5kcyBCYXNlIHtcclxuICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xyXG4gICAgLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICBcInNpemVcIixcclxuICAgIFwiYWxpZ25cIixcclxuICAgIFwiYmFzZWxpbmVcIixcclxuICAgIFwiZm9udFwiLFxyXG4gICAgXCJzdHJldGNoXCIsXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtdGV4dFwiO1xyXG4gIH1cclxuXHJcbiAgI2FsaWduOiBDYW52YXNUZXh0QWxpZ24gfCBudWxsID0gbnVsbDtcclxuICAjYmFzZWxpbmU6IENhbnZhc1RleHRCYXNlbGluZSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBIb3Jpem9udGFsIGFsaWdubWVudC4gT3B0aW9ucyBhcmUgXCJjZW50ZXJcIiwgXCJlbmRcIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgb3IgXCJzdGFydFwiLlxyXG4gICAqXHJcbiAgICogQGF0dHJcclxuICAgKiBAcmVmbGVjdFxyXG4gICAqL1xyXG4gIGdldCBhbGlnbigpOiBDYW52YXNUZXh0QWxpZ24gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLiNhbGlnbjtcclxuICB9XHJcblxyXG4gIHNldCBhbGlnbih2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2FsaWduID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJhbGlnblwiLCAodGhpcy4jYWxpZ24gPSB2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxyXG4gICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgIGNhc2UgXCJhbGlnblwiOlxyXG4gICAgICAgIHRoaXMuYWxpZ24gPSBuZXdWYWx1ZSBhcyBDYW52YXNUZXh0QWxpZ247XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjYXNlIFwiYmFzZWxpbmVcIjpcclxuICAgICAgICB0aGlzLmJhc2VsaW5lID0gbmV3VmFsdWUgYXMgQ2FudmFzVGV4dEJhc2VsaW5lO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYmFzZWxpbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jYmFzZWxpbmU7XHJcbiAgfVxyXG5cclxuICBzZXQgYmFzZWxpbmUodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLiNiYXNlbGluZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYmFzZWxpbmVcIiwgKHRoaXMuI2Jhc2VsaW5lID0gdmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgaWYgKHRoaXMuI2FsaWduICE9PSBudWxsKSBjb250ZXh0LnRleHRBbGlnbiA9IHRoaXMuI2FsaWduO1xyXG5cclxuICAgIGlmICh0aGlzLiNiYXNlbGluZSAhPT0gbnVsbCkgY29udGV4dC50ZXh0QmFzZWxpbmUgPSB0aGlzLiNiYXNlbGluZTtcclxuXHJcbiAgICBpZiAodGhpcy5maWxsICE9PSBcIm5vbmVcIiAmJiB0aGlzLnRleHRDb250ZW50ICE9PSBudWxsKVxyXG4gICAgICBjb250ZXh0LmZpbGxUZXh0KHRoaXMudGV4dENvbnRlbnQsIHRoaXMub2Zmc2V0LngsIHRoaXMub2Zmc2V0LnkpO1xyXG5cclxuICAgIGlmICh0aGlzLnN0cm9rZSAhPT0gXCJub25lXCIgJiYgdGhpcy50ZXh0Q29udGVudCAhPT0gbnVsbClcclxuICAgICAgY29udGV4dC5zdHJva2VUZXh0KHRoaXMudGV4dENvbnRlbnQsIHRoaXMub2Zmc2V0LngsIHRoaXMub2Zmc2V0LnkpO1xyXG5cclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzMkQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGluZWFyR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogTGluZWFyR3JhZGllbnRcclxuICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICBjb25zdCB0ZXh0VG9NZWFzdXJlID0gdGhpcy50ZXh0Q29udGVudCA/PyBcIlwiO1xyXG5cclxuICAgIGNvbnN0IG1lYXN1cmVtZW50cyA9IGNvbnRleHQubWVhc3VyZVRleHQodGV4dFRvTWVhc3VyZSk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveEFzY2VudCxcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50LFxyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveExlZnQ6IHgsXHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94UmlnaHQ6IHksXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgfSA9IG1lYXN1cmVtZW50cztcclxuXHJcbiAgICBjb25zdCBoZWlnaHQgPSBhY3R1YWxCb3VuZGluZ0JveERlc2NlbnQgKyBhY3R1YWxCb3VuZGluZ0JveEFzY2VudDtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyUmFkaWFsR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogUmFkaWFsR3JhZGllbnRcclxuICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICBjb25zdCB0ZXh0VG9NZWFzdXJlID0gdGhpcy50ZXh0Q29udGVudCA/PyBcIlwiO1xyXG5cclxuICAgIGNvbnN0IG1lYXN1cmVtZW50cyA9IGNvbnRleHQubWVhc3VyZVRleHQodGV4dFRvTWVhc3VyZSk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveEFzY2VudCxcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50LFxyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveExlZnQsXHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94UmlnaHQsXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgfSA9IG1lYXN1cmVtZW50cztcclxuXHJcbiAgICBjb25zdCBoZWlnaHQgPSBhY3R1YWxCb3VuZGluZ0JveEFzY2VudCArIGFjdHVhbEJvdW5kaW5nQm94RGVzY2VudDtcclxuXHJcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChoZWlnaHQsIHdpZHRoKSAvIDI7XHJcblxyXG4gICAgY29uc3QgY2VudGVyWCA9IGFjdHVhbEJvdW5kaW5nQm94TGVmdCArIHdpZHRoIC8gMjtcclxuICAgIGNvbnN0IGNlbnRlclkgPSBhY3R1YWxCb3VuZGluZ0JveFJpZ2h0ICsgaGVpZ2h0IC8gMjtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIGNlbnRlclgsIGNlbnRlclksIHJhZGl1cyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdGV4dENvbnRlbnQodmFsdWUpIHtcclxuICAgIGlmIChzdXBlci50ZXh0Q29udGVudCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICBzdXBlci50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VkRXZlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXRleHRcIiwgQ2FudmFzMkRUZXh0KTtcclxuIiwiaW1wb3J0IHsgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkIH0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgcmVuZGVyc1Zpc3VhbE1lZGlhIH0gZnJvbSBcIi4uLy4uL21peGlucy92aXN1YWxNZWRpYVwiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yLFxyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxufSBmcm9tIFwiLi4vZG9jdW1lbnQvZG9tQmFzZVwiO1xyXG5pbXBvcnQgeyBjaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi9yZW5kZXJhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRWaWRlbyBleHRlbmRzIHJlbmRlcnNWaXN1YWxNZWRpYShcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbiAgXCJ2aWRlb1wiXHJcbikge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXZpZGVvXCI7XHJcbiAgfVxyXG5cclxuICAjZnJhbWVDYWxsYmFja0lkID0gLTE7XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuICB9XHJcblxyXG4gICNoYW5kbGVGcmFtZSgpIHtcclxuICAgIHRoaXMuI2ZyYW1lQ2FsbGJhY2tJZCA9IHRoaXMubWVkaWFFbGVtZW50LnJlcXVlc3RWaWRlb0ZyYW1lQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY2hhbmdlZEV2ZW50KTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5tZWRpYUVsZW1lbnQucGF1c2VkKSB0aGlzLiNoYW5kbGVGcmFtZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwbGF5KCkge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMubWVkaWFFbGVtZW50LnBsYXkoKTtcclxuXHJcbiAgICB0aGlzLiNoYW5kbGVGcmFtZSgpO1xyXG5cclxuICAgIHJldHVybiBwcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgcGF1c2UoKSB7XHJcbiAgICB0aGlzLm1lZGlhRWxlbWVudC5jYW5jZWxWaWRlb0ZyYW1lQ2FsbGJhY2sodGhpcy4jZnJhbWVDYWxsYmFja0lkKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tZWRpYUVsZW1lbnQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIGdldCBwYXVzZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZWRpYUVsZW1lbnQucGF1c2VkO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGxheSgpIHtcclxuICAgIGlmICh0aGlzLnBhdXNlZCkgdGhpcy5wbGF5KCk7XHJcbiAgICBlbHNlIHRoaXMucGF1c2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC12aWRlb1wiLCBDYW52YXMyRFZpZGVvKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBIVE1MVmlkZW9XcmFwcGVyIGV4dGVuZHMgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IoXHJcbiAgXCJ2aWRlb1wiXHJcbikge31cclxuXHJcbmV4cG9ydCB0eXBlIEhUTUxWaWRlb0NvbnRyb2xsZXIgPSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgXCJ2aWRlb1wiLFxyXG4gIEhUTUxWaWRlb1dyYXBwZXJcclxuPjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmV6aWVyLCBDYW52YXMyRFNoYXBlQmV6aWVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9iZXppZXJcIjtcclxuaW1wb3J0IHsgQzJEQmFzZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvYzJkQmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIENhbnZhczJERWxsaXBzZSxcclxuICBDYW52YXMyRFNoYXBlRWxsaXBzZSxcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2VsbGlwc2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRJbWFnZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvaW1hZ2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRMaW5lLCBDYW52YXMyRFNoYXBlTGluZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvbGluZVwiO1xyXG5pbXBvcnQge1xyXG4gIENhbnZhczJEUmVjdGFuZ2xlLFxyXG4gIENhbnZhczJEU2hhcGVSZWN0YW5nbGUsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRTaGFwZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc2hhcGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRUZXh0IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC90ZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRWaWRlbyxcclxuICBIVE1MVmlkZW9Db250cm9sbGVyLFxyXG4gIEhUTUxWaWRlb1dyYXBwZXIsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC92aWRlb1wiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBTVkdSZWN0YW5nbGVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtcclxuICBIVE1MRWxlbWVudENvbnRyb2xsZXIsXHJcbiAgSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL2RvY3VtZW50L2RvbUJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBEb2N1bWVudENvbnRhaW5lckNvbnRyb2xsZXIsXHJcbiAgRG9jdW1lbnRDb250YWluZXJXcmFwcGVyLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy9kb2N1bWVudC9jb250YWluZXJcIjtcclxuaW1wb3J0IHtcclxuICBEb2N1bWVudFBhcmFncmFwaENvbnRyb2xsZXIsXHJcbiAgRG9jdW1lbnRQYXJhZ3JhcGhXcmFwcGVyLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy9kb2N1bWVudC9wYXJhZ3JhcGhcIjtcclxuaW1wb3J0IHtcclxuICBEb2N1bWVudFNwYW5Db250cm9sbGVyLFxyXG4gIERvY3VtZW50U3BhbldyYXBwZXIsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL2RvY3VtZW50L3NwYW5cIjtcclxuaW1wb3J0IHsgSFRNTEF1ZGlvQ29udHJvbGxlciwgSFRNTEF1ZGlvV3JhcHBlciB9IGZyb20gXCIuLi9lbGVtZW50cy9hdWRpby9hdWRpb1wiO1xyXG5cclxudHlwZSBNdWx0aXBsZUNhbGxiYWNrID0gKGluZGV4OiBudW1iZXIpID0+IE5vZGUgfCB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYzJkU3RhbmRhbG9uZUNoaWxkcmVuPEIgZXh0ZW5kcyB0eXBlb2YgQzJEQmFzZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtYmV6aWVyPmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgYmV6aWVyKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEQmV6aWVyPik6IENhbnZhczJEQmV6aWVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRCZXppZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGA8YzJkLWVsbGlwc2U+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICBlbGxpcHNlKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJERWxsaXBzZT4pOiBDYW52YXMyREVsbGlwc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyREVsbGlwc2UsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGA8YzJkLWltYWdlPmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgaW1hZ2Uob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRJbWFnZT4pOiBDYW52YXMyREltYWdlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRJbWFnZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbGUoY2FsbGJhY2s6IE11bHRpcGxlQ2FsbGJhY2spOiBOb2RlW107XHJcbiAgICBtdWx0aXBsZShjb3VudDogbnVtYmVyLCBjYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IE5vZGUpOiBOb2RlW107XHJcbiAgICBtdWx0aXBsZTxcclxuICAgICAgQTEgZXh0ZW5kcyBudW1iZXIgfCBNdWx0aXBsZUNhbGxiYWNrLFxyXG4gICAgICBBMiBleHRlbmRzIEExIGV4dGVuZHMgbnVtYmVyID8gKGluZGV4OiBudW1iZXIpID0+IE5vZGUgOiB1bmRlZmluZWRcclxuICAgID4oYXJnMTogQTEsIGFyZzI/OiBBMik6IE5vZGVbXSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIGlmIChhcmcyID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgY2FsbGJhY2tcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoYXJnMSkuZmlsbCgwKS5tYXAoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IGFyZzIoaW5kZXgpO1xyXG5cclxuICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVjdXJzZUNoaWxkcmVuID0gKGNoaWxkcmVuOiBOb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGFyZzEoaW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGNoaWxkcmVuO1xyXG5cclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2VDaGlsZHJlbihjaGlsZHJlbi5jb25jYXQoY2hpbGQpLCBpbmRleCArIDEpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIHJlY3Vyc2VDaGlsZHJlbihbXSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtbGluZT5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIGxpbmUob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRMaW5lPik6IENhbnZhczJETGluZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJETGluZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtcmVjdGFuZ2xlPmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgcmVjdGFuZ2xlKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEUmVjdGFuZ2xlPik6IENhbnZhczJEUmVjdGFuZ2xlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRSZWN0YW5nbGUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGA8YzJkLXNoYXBlPmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgc2hhcGUob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRTaGFwZT4pOiBDYW52YXMyRFNoYXBlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRTaGFwZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtdGV4dD5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIHRleHQob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRUZXh0Pik6IENhbnZhczJEVGV4dCB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEVGV4dCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtdmlkZW8+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICB2aWRlbyhvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFZpZGVvPik6IENhbnZhczJEVmlkZW8ge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFZpZGVvLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYzJkU2hhcGVDaGlsZHJlbjxCIGV4dGVuZHMgdHlwZW9mIEMyREJhc2U+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGJlemllcihvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFNoYXBlQmV6aWVyPikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFNoYXBlQmV6aWVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGxpcHNlKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEU2hhcGVFbGxpcHNlPikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFNoYXBlRWxsaXBzZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGluZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFNoYXBlTGluZT4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRTaGFwZUxpbmUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3RhbmdsZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFNoYXBlUmVjdGFuZ2xlPikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFNoYXBlUmVjdGFuZ2xlLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnQ2hpbGRyZW48QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNWR0NvbnRyb2xsZXJDaGlsZDxFIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KFxyXG4gICAgICBFbGVtZW50Q2xhc3M6IEUsXHJcbiAgICAgIG9wdGlvbnM/OiBPcHRpb25zPEluc3RhbmNlVHlwZTxFPj5cclxuICAgICkge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChFbGVtZW50Q2xhc3MsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3RhbmdsZShvcHRpb25zPzogUGFydGlhbDxTVkdSZWN0YW5nbGVDb250cm9sbGVyPikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVTVkdDb250cm9sbGVyQ2hpbGQoU1ZHUmVjdGFuZ2xlQ29udHJvbGxlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvY3VtZW50Q2hpbGRyZW48XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCxcclxuICBXIGV4dGVuZHMgSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8VD5cclxuPihXcmFwcGVyQ29uc3RydWN0b3I6IFcpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBXcmFwcGVyQ29uc3RydWN0b3Ige1xyXG4gICAgYXVkaW8ob3B0aW9ucz86IE9wdGlvbnM8SFRNTEF1ZGlvQ29udHJvbGxlcj4pOiBIVE1MQXVkaW9Db250cm9sbGVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JhcHBlZENoaWxkKEhUTUxBdWRpb1dyYXBwZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5lcihcclxuICAgICAgb3B0aW9ucz86IE9wdGlvbnM8RG9jdW1lbnRDb250YWluZXJDb250cm9sbGVyPlxyXG4gICAgKTogRG9jdW1lbnRDb250YWluZXJDb250cm9sbGVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JhcHBlZENoaWxkKERvY3VtZW50Q29udGFpbmVyV3JhcHBlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyYWdyYXBoKFxyXG4gICAgICBvcHRpb25zPzogT3B0aW9uczxEb2N1bWVudFBhcmFncmFwaENvbnRyb2xsZXI+XHJcbiAgICApOiBEb2N1bWVudFBhcmFncmFwaENvbnRyb2xsZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVXcmFwcGVkQ2hpbGQoRG9jdW1lbnRQYXJhZ3JhcGhXcmFwcGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuKG9wdGlvbnM/OiBPcHRpb25zPERvY3VtZW50U3BhbkNvbnRyb2xsZXI+KTogRG9jdW1lbnRTcGFuQ29udHJvbGxlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyYXBwZWRDaGlsZChEb2N1bWVudFNwYW5XcmFwcGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB2aWRlbyhvcHRpb25zPzogT3B0aW9uczxIVE1MVmlkZW9Db250cm9sbGVyPik6IEhUTUxWaWRlb0NvbnRyb2xsZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVXcmFwcGVkQ2hpbGQoSFRNTFZpZGVvV3JhcHBlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaW1lbnNpb25zPEIgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwid2lkdGhcIiwgXCJoZWlnaHRcIl07XHJcblxyXG4gICAgI3dpZHRoID0gMTAwO1xyXG4gICAgI2hlaWdodCA9IDEwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVsZW1lbnQncyB3aWR0aCBpbiBwaXhlbHMuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy4jd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiN3aWR0aCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJ3aWR0aFwiLCAodGhpcy4jd2lkdGggPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxlbWVudCdzIGhlaWdodCBpbiBwaXhlbHMuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNoZWlnaHQgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiaGVpZ2h0XCIsICh0aGlzLiNoZWlnaHQgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcIndpZHRoXCI6XHJcbiAgICAgICAgICB0aGlzLndpZHRoID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNhc2UgXCJoZWlnaHRcIjpcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kU1ZHRGltZW5zaW9uczxcclxuICBCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXIgJiBSZXR1cm5UeXBlPHR5cGVvZiBkaW1lbnNpb25zPlxyXG4+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHRoaXMud2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBzdXBlci5oZWlnaHQpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLmhlaWdodCA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gc3VwZXIud2lkdGgpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLndpZHRoID0gdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdEaW1lbnNpb25zPEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBleHRlbmRTVkdEaW1lbnNpb25zKGRpbWVuc2lvbnMoQmFzZSkpO1xyXG59XHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4uL2NsYXNzZXMvY29sb3JcIjtcclxuaW1wb3J0IHtcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgRHJhd1N0eWxlLFxyXG4gIEdyYWRpZW50LFxyXG4gIExpbmVhckdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG59IGZyb20gXCIuLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvY2FudmFzXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmFzZVJlbmRlcmFibGUgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcblxyXG5mdW5jdGlvbiBiYXNlRmlsbDxCIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEZpbGxhYmxlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFsuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcywgXCJmaWxsXCJdO1xyXG5cclxuICAgICNmaWxsOiBEcmF3U3R5bGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZW5kZXJpbmcgc3R5bGUgaW5zaWRlIHRoZSBlbGVtZW50LiBUaGlzIG1heSBiZSBhIGNvbG9yIG9yIGdyYWRpZW50LlxyXG4gICAgICogV2hlbiBzZXQgdG8gbnVsbCwgdGhlIHBhcmVudCBlbGVtZW50J3Mgc3R5bGUgaXMgdXNlZC4gV2hlblxyXG4gICAgICogc2V0IHRvIFwibm9uZVwiLCB0aGUgaW5zaWRlIHdpbGwgYmUgdHJhbnNwYXJlbnQuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBmaWxsKCk6IERyYXdTdHlsZSB8IG51bGwge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZmlsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZmlsbCh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jZmlsbCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLiNmaWxsIGluc3RhbmNlb2YgQ29sb3IgJiZcclxuICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIENvbG9yICYmXHJcbiAgICAgICAgdGhpcy4jZmlsbC5lcXVhbHModmFsdWUpXHJcbiAgICAgIClcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXHJcbiAgICAgICAgICBcImZpbGxcIixcclxuICAgICAgICAgICh0aGlzLiNmaWxsID0gdmFsdWUgPT09IFwibm9uZVwiID8gdmFsdWUgOiBDb2xvci5mcm9tU3RyaW5nKHZhbHVlKSlcclxuICAgICAgICApO1xyXG4gICAgICBlbHNlIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJmaWxsXCIsICh0aGlzLiNmaWxsID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApIHtcclxuICAgICAgaWYgKG5hbWUgPT09IFwiZmlsbFwiKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB0aGlzLmZpbGwgPSBudWxsO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZmlsbFZhbHVlID0gYXR0cmlidXRlUGFyc2VyLkZpbGxTdHJva2VTdHlsZShuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgaWYgKGZpbGxWYWx1ZSAhPT0gXCJncmFkaWVudFwiKSB0aGlzLmZpbGwgPSBmaWxsVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYzJkRmlsbDxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgRmlsbGFibGUgZXh0ZW5kcyBiYXNlRmlsbChCYXNlKSB7XHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBDb2xvcikgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmZpbGwudG9TdHJpbmcoKTtcclxuICAgICAgZWxzZSBpZiAodGhpcy5maWxsIGluc3RhbmNlb2YgR3JhZGllbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5maWxsIGluc3RhbmNlb2YgQ29uaWNhbEdyYWRpZW50KSB7XHJcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMucmVuZGVyQ29uaWNhbEdyYWRpZW50KGNvbnRleHQsIHRoaXMuZmlsbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBMaW5lYXJHcmFkaWVudCkge1xyXG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLnJlbmRlckxpbmVhckdyYWRpZW50KGNvbnRleHQsIHRoaXMuZmlsbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBSYWRpYWxHcmFkaWVudCkge1xyXG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLnJlbmRlclJhZGlhbEdyYWRpZW50KGNvbnRleHQsIHRoaXMuZmlsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJSZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5maWxsICE9PSBcIm5vbmVcIikgY2FudmFzMkQuY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICBzdXBlci5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN2Z0ZpbGw8QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZUZpbGwoQmFzZSkge1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5maWxsIGluc3RhbmNlb2YgR3JhZGllbnQpIHRoaXMuI2ZpbGxHcmFkaWVudCh0aGlzLmZpbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWxsKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuZmlsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZmlsbCh2YWx1ZSkge1xyXG4gICAgICBpZiAoc3VwZXIuZmlsbD8udG9TdHJpbmcoKSA9PT0gdmFsdWU/LnRvU3RyaW5nKCkpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLmZpbGwgPSB2YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZmlsbCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChmaWxsID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoZmlsbCBpbnN0YW5jZW9mIENvbG9yKVxyXG4gICAgICAgIHRoaXMuX3NldFN0eWxlQXR0cmlidXRlKFwiZmlsbFwiLCBmaWxsLnRvU3RyaW5nKCkpO1xyXG4gICAgICBlbHNlIGlmIChmaWxsIGluc3RhbmNlb2YgR3JhZGllbnQpIHRoaXMuI2ZpbGxHcmFkaWVudChmaWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAjZmlsbEdyYWRpZW50KGdyYWRpZW50OiBHcmFkaWVudCkge1xyXG4gICAgICBjb25zdCB7IHN2Z0NvbnRhaW5lckNvbnRyb2xsZXIgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoc3ZnQ29udGFpbmVyQ29udHJvbGxlciA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgZ3JhZGllbnRJZCA9IHN2Z0NvbnRhaW5lckNvbnRyb2xsZXIuX2RlZmluZUdyYWRpZW50KGdyYWRpZW50KTtcclxuXHJcbiAgICAgIHRoaXMuX3NldFN0eWxlQXR0cmlidXRlKFwiZmlsbFwiLCBgdXJsKCMke2dyYWRpZW50SWR9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBfc3R5bGVBdHRyaWJ1dGVzKCk6IHsgW0tleSBpbiBrZXlvZiB0aGlzXT86IHN0cmluZyB9IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3VwZXIuX3N0eWxlQXR0cmlidXRlcywgZmlsbDogXCJmaWxsXCIgfTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IENhbnZhczJEQmFzZVJlbmRlcmFibGUgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBBbmdsZSB9IGZyb20gXCIuLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IFVuaXRzIH0gZnJvbSBcIi4uL2NsYXNzZXMvdW5pdHNcIjtcclxuaW1wb3J0IHsgTW91c2VUcmFja2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvbW91c2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmb250U2l6ZVVuaXRzID0ge1xyXG4gIC4uLlVuaXRzLnNpemUsXHJcbiAgY2FwSGVpZ2h0OiBcImNhcFwiLFxyXG4gIGNoYXJhY3RlcldpZHRoOiBcImNoXCIsXHJcbiAgY2FsY3VsYXRlZDogXCJlbVwiLFxyXG4gIHhIZWlnaHQ6IFwiZXhcIixcclxuICBjaGFyYWN0ZXJIZWlnaHQ6IFwiaWNcIixcclxuICBsaW5lSGVpZ2h0OiBcImxoXCIsXHJcbiAgcm9vdENhcEhlaWdodDogXCJyY2FwXCIsXHJcbiAgcm9vdENoYXJhY3RlcldpZHRoOiBcInJjaFwiLFxyXG4gIHJvb3RTaXplOiBcInJlbVwiLFxyXG4gIHJvb3RYSGVpZ2h0OiBcInJleFwiLFxyXG4gIHJvb3RDaGFyYWN0ZXJIZWlnaHQ6IFwiaWNcIixcclxuICByb290TGluZUhlaWdodDogXCJybGhcIixcclxufSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGZvbnRTdHlsZXMgPSB7XHJcbiAgbm9ybWFsOiBcIm5vcm1hbFwiLFxyXG4gIGl0YWxpYzogXCJpdGFsaWNcIixcclxuICBvYmxpcXVlOiBcIm9ibGlxdWVcIixcclxufSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGb250PEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oQmFzZTogQikge1xyXG4gIHR5cGUgRm9udENsYXNzID0gdHlwZW9mIEZvbnQ7XHJcblxyXG4gIHR5cGUgRm9udFN0eWxlID1cclxuICAgIHwgRm9udENsYXNzW1wic3R5bGVcIl1ba2V5b2YgRm9udENsYXNzW1wic3R5bGVcIl1dXHJcbiAgICB8IGBvYmxpcXVlICR7bnVtYmVyfSR7KHR5cGVvZiBBbmdsZSlbXCJ1bml0XCJdW2tleW9mICh0eXBlb2YgQW5nbGUpW1widW5pdFwiXV19YDtcclxuXHJcbiAgdHlwZSBGb250U2l6ZVVuaXQgPSAodHlwZW9mIGZvbnRTaXplVW5pdHMpW2tleW9mIHR5cGVvZiBmb250U2l6ZVVuaXRzXTtcclxuXHJcbiAgY2xhc3MgRm9udCBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcclxuICAgICAgLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwic2l6ZVwiLFxyXG4gICAgICBcInN0cmV0Y2hcIixcclxuICAgICAgXCJmb250LWZhbWlseVwiLFxyXG4gICAgICBcImZvbnQtc3R5bGVcIixcclxuICAgICAgXCJrZXJuaW5nXCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNmb250RmFtaWx5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICNrZXJuaW5nOiBDYW52YXNGb250S2VybmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgI3NpemU6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgI3NpemVVbml0OiBGb250U2l6ZVVuaXQgPSBcInB4XCI7XHJcbiAgICAjc3RyZXRjaDogQ2FudmFzRm9udFN0cmV0Y2ggfCBudWxsID0gbnVsbDtcclxuICAgICNmb250U3R5bGU6IEZvbnRTdHlsZSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcInNpemVcIjpcclxuICAgICAgICAgIHRoaXMuc2l6ZSA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgXCJzdHJldGNoXCI6XHJcbiAgICAgICAgICB0aGlzLnN0cmV0Y2ggPSBuZXdWYWx1ZSBhcyBDYW52YXNGb250U3RyZXRjaDtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlIFwiZm9udC1mYW1pbHlcIjpcclxuICAgICAgICAgIHRoaXMuZm9udEZhbWlseSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgXCJmb250LXN0eWxlXCI6XHJcbiAgICAgICAgICB0aGlzLmZvbnRTdHlsZSA9IG5ld1ZhbHVlIGFzIEZvbnRTdHlsZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjYXNlIFwia2VybmluZ1wiOlxyXG4gICAgICAgICAgdGhpcy5rZXJuaW5nID0gbmV3VmFsdWUgYXMgQ2FudmFzRm9udEtlcm5pbmc7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNpemVVbml0ID0gZm9udFNpemVVbml0cztcclxuXHJcbiAgICBzdGF0aWMgc3RyZXRjaDogeyBba2V5OiBzdHJpbmddOiBDYW52YXNGb250U3RyZXRjaCB9ID0ge1xyXG4gICAgICBub3JtYWw6IFwibm9ybWFsXCIsXHJcbiAgICAgIHVsdHJhQ29uZGVuc2VkOiBcInVsdHJhLWNvbmRlbnNlZFwiLFxyXG4gICAgICBleHRyYUNvbmRlbnNlZDogXCJleHRyYS1jb25kZW5zZWRcIixcclxuICAgICAgY29uZGVuc2VkOiBcImNvbmRlbnNlZFwiLFxyXG4gICAgICBleHBhbmRlZDogXCJleHBhbmRlZFwiLFxyXG4gICAgICBleHRyYUV4cGFuZGVkOiBcImV4dHJhLWV4cGFuZGVkXCIsXHJcbiAgICAgIHVsdHJhRXhwYW5kZWQ6IFwidWx0cmEtZXhwYW5kZWRcIixcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIHN0eWxlID0gZm9udFN0eWxlcztcclxuXHJcbiAgICBnZXQgZm9udEZhbWlseSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2ZvbnRGYW1pbHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGZvbnRGYW1pbHkodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2ZvbnRGYW1pbHkgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiZm9udEZhbWlseVwiLCAodGhpcy4jZm9udEZhbWlseSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvbnRTdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2ZvbnRTdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZm9udFN0eWxlKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNmb250U3R5bGUgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiZm9udFN0eWxlXCIsICh0aGlzLiNmb250U3R5bGUgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBrZXJuaW5nKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4ja2VybmluZztcclxuICAgIH1cclxuXHJcbiAgICBzZXQga2VybmluZyh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4ja2VybmluZyA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJrZXJuaW5nXCIsICh0aGlzLiNrZXJuaW5nID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBjb25zdCB7IGNvbnRleHQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLiNmb250U3R5bGUgPT09IG51bGwgPyBcIlwiIDogYCR7dGhpcy4jZm9udFN0eWxlfSBgO1xyXG5cclxuICAgICAgaWYgKHRoaXMuI2ZvbnRGYW1pbHkgPT09IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy4jc2l6ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgZm9udEZhbWx5TWF0Y2ggPSBjb250ZXh0LmZvbnQubWF0Y2goL1xcUyokLyk7XHJcblxyXG4gICAgICAgICAgaWYgKGZvbnRGYW1seU1hdGNoID09PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBmYW1pbHkgaW4gY3VycmVudCBmb250OiAke2NvbnRleHQuZm9udH1gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgY29uc3QgW2ZvbnRGYW1pbHldID0gZm9udEZhbWx5TWF0Y2g7XHJcblxyXG4gICAgICAgICAgY29udGV4dC5mb250ID0gYCR7c3R5bGV9JHt0aGlzLiNzaXplfSR7dGhpcy4jc2l6ZVVuaXR9ICR7Zm9udEZhbWlseX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLiNzaXplID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZm9udFNpemVNYXRjaCA9IGNvbnRleHQuZm9udC5tYXRjaCgvKFxcUykqXFxzXFxTKiQvKTtcclxuXHJcbiAgICAgICAgaWYgKGZvbnRTaXplTWF0Y2ggPT09IG51bGwgfHwgZm9udFNpemVNYXRjaFswXS5sZW5ndGggPCAyKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNpemUgaW4gY3VycmVudCBmb250OiAke2NvbnRleHQuZm9udH1gXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBmb250U2l6ZSA9IGZvbnRTaXplTWF0Y2hbMV07XHJcblxyXG4gICAgICAgIGNvbnRleHQuZm9udCA9IGAke3N0eWxlfSR7Zm9udFNpemV9ICR7dGhpcy4jZm9udEZhbWlseX1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRleHQuZm9udCA9IGAke3N0eWxlfSR7dGhpcy4jc2l6ZX0ke3RoaXMuI3NpemVVbml0fSAke1xyXG4gICAgICAgICAgdGhpcy4jZm9udEZhbWlseVxyXG4gICAgICAgIH1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy4jc3RyZXRjaCAhPT0gbnVsbCkgY29udGV4dC5mb250U3RyZXRjaCA9IHRoaXMuI3N0cmV0Y2g7XHJcblxyXG4gICAgICBpZiAodGhpcy4ja2VybmluZyAhPT0gbnVsbCkgY29udGV4dC5mb250S2VybmluZyA9IHRoaXMuI2tlcm5pbmc7XHJcblxyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9udCBzaXplIHVzaW5nIHRoZSBjdXJyZW50IHNpemVVbml0LiBXaGVuIHNldCB0byBudWxsLCB0aGUgbGFzdCByZW5kZXJlZFxyXG4gICAgICogZWxlbWVudCdzIHNldHRpbmcgaXMgdXNlZC5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzaXplKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNzaXplID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInNpemVcIiwgKHRoaXMuI3NpemUgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5pdCBmb3IgZm9udCBzaXplOiBcImNtXCIgfCBcIm1tXCIgfCBcIlFcIiB8IFwiaW5cIiB8IFwicGNcIiB8IFwicHRcIiB8IFwicHhcIiB8IFwidmhcIiB8XHJcbiAgICAgKiBcInZ3XCIgfCBcImNhcFwiIHwgXCJjaFwiIHwgXCJlbVwiIHwgXCJleFwiIHwgXCJpY1wiIHwgXCJsaFwiIHwgXCJyY2FwXCIgfCBcInJjaFwiIHwgXCJyZW1cIiB8XHJcbiAgICAgKiBcInJleFwiIHwgXCJybGhcIlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ2V0IHNpemVVbml0KCk6IEZvbnRTaXplVW5pdCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzaXplVW5pdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2l6ZVVuaXQodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3NpemVVbml0ID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInNpemVVbml0XCIsICh0aGlzLiNzaXplVW5pdCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpemVTdHJpbmcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzaXplPy50b1N0cmluZygpID8/IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0cmV0Y2goKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNzdHJldGNoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHJldGNoKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNzdHJldGNoID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInN0cmV0Y2hcIiwgKHRoaXMuI3N0cmV0Y2ggPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEZvbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNUbzxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcInRvXCJdO1xyXG5cclxuICAgICN0byA9IFZlY3RvcjJELnh5KDEwMCwgMTAwKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuZCBwb2ludCBvZiB0aGUgZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgYW5jaG9yLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgdG8oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiN0bztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdG8odmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3RvLmVxdWFscyh2YWx1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJ0b1wiLCAodGhpcy4jdG8gPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmFtZSA9PT0gXCJ0b1wiICYmIG5ld1ZhbHVlICE9PSBudWxsKVxyXG4gICAgICAgIHRoaXMudG8gPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG5cclxuICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Zyb208QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gWy4uLnN1cGVyLm9ic2VydmVkQXR0cmlidXRlcywgXCJmcm9tXCJdO1xyXG5cclxuICAgICNmcm9tID0gVmVjdG9yMkQuemVybygpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRpbmcgcG9pbnQgb2YgdGhlIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIGFuY2hvci5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGZyb20oKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZnJvbTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZnJvbSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jZnJvbS5lcXVhbHModmFsdWUpKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiZnJvbVwiLCAodGhpcy4jZnJvbSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuYW1lID09PSBcImZyb21cIiAmJiBuZXdWYWx1ZSAhPT0gbnVsbClcclxuICAgICAgICB0aGlzLmZyb20gPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG5cclxuICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCwgVmVjdG9yMkRCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0PEIgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwib2Zmc2V0XCJdO1xyXG5cclxuICAgICNvZmZzZXQgPSBuZXcgVmVjdG9yMkQoMCwgMCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgICB0aGlzLiNvZmZzZXQuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jb2Zmc2V0Q2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmV3VmFsdWUgIT09IG51bGwgJiYgbmFtZSA9PT0gXCJvZmZzZXRcIikge1xyXG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAoIXRoaXMuI29mZnNldC5lcXVhbHMobmV3UG9zaXRpb24pKSB0aGlzLm9mZnNldCA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZU9mZnNldCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLiNvZmZzZXQueCArPSB4O1xyXG4gICAgICB0aGlzLiNvZmZzZXQueSArPSB5O1xyXG4gICAgfVxyXG5cclxuICAgICNvZmZzZXRDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VmVjdG9yMkRCYXNlPiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIm9mZnNldFwiLCB0aGlzLiNvZmZzZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvc2l0aW9uIG9mIHRoZSBlbGVtZW50J3Mgb3JpZ2luIHJlbGF0aXZlIHRvIGl0cyBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBvZmZzZXQoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jb2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvZmZzZXQodmFsdWUpIHtcclxuICAgICAgY29uc3QgcmVwbGFjZSA9IHRoaXMuI29mZnNldC5yZXBsYWNlLmJpbmQodGhpcy4jb2Zmc2V0KTtcclxuXHJcbiAgICAgIHJlcGxhY2UoKHRoaXMuI29mZnNldCA9IHZhbHVlKSwgdGhpcy4jb2Zmc2V0Q2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRTVkdPZmZzZXQ8XHJcbiAgQiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyICYgUmV0dXJuVHlwZTx0eXBlb2Ygb2Zmc2V0PlxyXG4+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVPZmZzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgc3VwZXIubW92ZU9mZnNldCh4LCB5KTtcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZU9mZnNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvZmZzZXQoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5vZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG9mZnNldCh2YWx1ZSkge1xyXG4gICAgICBzdXBlci5vZmZzZXQgPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZU9mZnNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVPZmZzZXQoKSB7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwieFwiLCB0aGlzLm9mZnNldC54LnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInlcIiwgdGhpcy5vZmZzZXQueS50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnT2Zmc2V0PEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBleHRlbmRTVkdPZmZzZXQob2Zmc2V0KEJhc2UpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb25pY2FsR3JhZGllbnQsIExpbmVhckdyYWRpZW50IH0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucywgZXh0ZW5kU1ZHRGltZW5zaW9ucyB9IGZyb20gXCIuL2RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgZXh0ZW5kU1ZHT2Zmc2V0LCBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXRcIjtcclxuXHJcbnR5cGUgT3JpZ2luID0gXCJjZW50ZXJcIiB8IFwidG9wTGVmdFwiO1xyXG5cclxuZnVuY3Rpb24gYmFzZVJlY3RhbmdsZUJvdW5kczxCIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihcclxuICBCYXNlOiBCLFxyXG4gIGRlZmF1bHRPcmlnaW46IE9yaWdpblxyXG4pIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBkaW1lbnNpb25zKG9mZnNldChCYXNlKSkge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcclxuICAgICAgLi4uZGltZW5zaW9ucyhvZmZzZXQoQmFzZSkpLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJvcmlnaW5cIixcclxuICAgIF07XHJcblxyXG4gICAgI29yaWdpbjogT3JpZ2luID0gZGVmYXVsdE9yaWdpbjtcclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5hbWUgPT09IFwib3JpZ2luXCIpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBuZXdWYWx1ZSBhcyBPcmlnaW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9wTGVmdCgpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLiNvcmlnaW4pIHtcclxuICAgICAgICBjYXNlIFwidG9wTGVmdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xyXG4gICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm9mZnNldC5taW51cyh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvcFJpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b3BMZWZ0LnBsdXModGhpcy53aWR0aCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNlbnRlcigpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLiNvcmlnaW4pIHtcclxuICAgICAgICBjYXNlIFwidG9wTGVmdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0LnBsdXModGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvdHRvbUxlZnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvcExlZnQucGx1cygwLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvdHRvbVJpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b3BSaWdodC5wbHVzKDAsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3JpZ2luKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jb3JpZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvcmlnaW4odmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI29yaWdpbiA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJvcmlnaW5cIiwgKHRoaXMuI29yaWdpbiA9IHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGMyZFJlY3RhbmdsZUJvdW5kczxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KFxyXG4gIEJhc2U6IEIsXHJcbiAgZGVmYXVsdE9yaWdpbjogT3JpZ2luXHJcbikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2VSZWN0YW5nbGVCb3VuZHMoQmFzZSwgZGVmYXVsdE9yaWdpbikge1xyXG4gICAgcmVuZGVyQ29uaWNhbEdyYWRpZW50KFxyXG4gICAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICAgIGdyYWRpZW50OiBDb25pY2FsR3JhZGllbnRcclxuICAgICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB0aGlzLmNlbnRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTGluZWFyR3JhZGllbnQoXHJcbiAgICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgZ3JhZGllbnQ6IExpbmVhckdyYWRpZW50XHJcbiAgICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICAgIGNvbnN0IHsgeDogeDAsIHk6IHkwIH0gPSB0aGlzLnRvcExlZnQ7XHJcblxyXG4gICAgICBjb25zdCB7IHg6IHgxLCB5OiB5MSB9ID0gdGhpcy5ib3R0b21SaWdodDtcclxuXHJcbiAgICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeDAsIHkwLCB4MSAtIHgwLCB5MSAtIHkwKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnUmVjdGFuZ2xlQm91bmRzPEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oXHJcbiAgQmFzZTogQixcclxuICBkZWZhdWx0T3JpZ2luOiBPcmlnaW5cclxuKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgZXh0ZW5kU1ZHT2Zmc2V0KFxyXG4gICAgZXh0ZW5kU1ZHRGltZW5zaW9ucyhiYXNlUmVjdGFuZ2xlQm91bmRzKEJhc2UsIGRlZmF1bHRPcmlnaW4pKVxyXG4gICkge1xyXG4gICAgX3VwZGF0ZU9mZnNldCgpIHtcclxuICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnRvcExlZnQ7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwieFwiLCB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInlcIiwgeS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3JpZ2luKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIub3JpZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvcmlnaW4odmFsdWUpIHtcclxuICAgICAgc3VwZXIub3JpZ2luID0gdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLl91cGRhdGVPZmZzZXQoKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IExpbmVhckdyYWRpZW50IH0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jb2xvclwiO1xyXG5pbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBEcmF3U3R5bGUsXHJcbiAgR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuXHJcbmZ1bmN0aW9uIGJhc2VTdHJva2U8QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10gPSBbXHJcbiAgICAgIC4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgICBcInN0cm9rZVwiLFxyXG4gICAgICBcImxpbmUtd2lkdGhcIixcclxuICAgIF07XHJcblxyXG4gICAgI3N0cm9rZTogRHJhd1N0eWxlIHwgbnVsbCA9IG51bGw7XHJcbiAgICAjbGluZVdpZHRoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpZHRoIGluIHBpeGVscyBmb3IgZHJhd2luZyBsaW5lcy5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0ciBsaW5lLXdpZHRoXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgbGluZVdpZHRoKCk6IG51bWJlciB8IG51bGwge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbGluZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsaW5lV2lkdGgodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2xpbmVXaWR0aCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJsaW5lV2lkdGhcIiwgKHRoaXMuI2xpbmVXaWR0aCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVuZGVyaW5nIHN0eWxlIGZvciBsaW5lcy4gVGhpcyBtYXkgYmUgYSBjb2xvciBvciBncmFkaWVudC5cclxuICAgICAqIFdoZW4gc2V0IHRvIG51bGwsIHRoZSBwYXJlbnQgZWxlbWVudCdzIHN0eWxlIGlzIHVzZWQuIFdoZW5cclxuICAgICAqIHNldCB0byBcIm5vbmVcIiwgbm8gbGluZXMgd2lsbCBiZSBkcmF3bi5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHN0cm9rZSgpOiBEcmF3U3R5bGUgfCBudWxsIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3N0cm9rZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3Ryb2tlKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNzdHJva2UgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy4jc3Ryb2tlIGluc3RhbmNlb2YgQ29sb3IgJiZcclxuICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIENvbG9yICYmXHJcbiAgICAgICAgdGhpcy4jc3Ryb2tlLmVxdWFscyh2YWx1ZSlcclxuICAgICAgKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcclxuICAgICAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgICAgICAodGhpcy4jc3Ryb2tlID0gdmFsdWUgPT09IFwibm9uZVwiID8gdmFsdWUgOiBDb2xvci5mcm9tU3RyaW5nKHZhbHVlKSlcclxuICAgICAgICApO1xyXG4gICAgICBlbHNlIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJzdHJva2VcIiwgKHRoaXMuI3N0cm9rZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJzdHJva2VcIjoge1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuc3Ryb2tlID0gbnVsbDtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3Ryb2tlVmFsdWUgPSBhdHRyaWJ1dGVQYXJzZXIuRmlsbFN0cm9rZVN0eWxlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICBpZiAoc3Ryb2tlVmFsdWUgIT09IFwiZ3JhZGllbnRcIikgdGhpcy5zdHJva2UgPSBzdHJva2VWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFwibGluZS13aWR0aFwiOlxyXG4gICAgICAgICAgdGhpcy5saW5lV2lkdGggPVxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYzJkU3Ryb2tlPEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBTdHJva2VhYmxlIGV4dGVuZHMgYmFzZVN0cm9rZShCYXNlKSB7XHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN0cm9rZSAhPT0gXCJub25lXCIgJiYgdGhpcy5zdHJva2UgIT09IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5zdHJva2UgaW5zdGFuY2VvZiBDb2xvcilcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZS50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3Ryb2tlIGluc3RhbmNlb2YgR3JhZGllbnQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIENvbmljYWxHcmFkaWVudCkge1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5yZW5kZXJDb25pY2FsR3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICB0aGlzLnN0cm9rZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIExpbmVhckdyYWRpZW50KVxyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5yZW5kZXJMaW5lYXJHcmFkaWVudChcclxuICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgIHRoaXMuc3Ryb2tlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBlbHNlIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIFJhZGlhbEdyYWRpZW50KVxyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5yZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgIHRoaXMuc3Ryb2tlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5saW5lV2lkdGggIT09IG51bGwpIGNvbnRleHQubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJSZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy5zdHJva2UgIT09IFwibm9uZVwiKSBjYW52YXMyRC5jb250ZXh0LnN0cm9rZSgpO1xyXG5cclxuICAgICAgc3VwZXIuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdTdHJva2U8QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZVN0cm9rZShCYXNlKSB7XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIEdyYWRpZW50KSB0aGlzLiNzdHJva2VHcmFkaWVudCh0aGlzLnN0cm9rZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxpbmVXaWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmxpbmVXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbGluZVdpZHRoKHZhbHVlKSB7XHJcbiAgICAgIGlmIChzdXBlci5saW5lV2lkdGggPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci5saW5lV2lkdGggPSB2YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IHN1cGVyLmxpbmVXaWR0aDtcclxuXHJcbiAgICAgIGlmIChsaW5lV2lkdGggPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuX3NldFN0eWxlQXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGxpbmVXaWR0aC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3Ryb2tlKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuc3Ryb2tlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHJva2UodmFsdWUpIHtcclxuICAgICAgaWYgKHN1cGVyLnN0cm9rZT8udG9TdHJpbmcoKSA9PT0gdmFsdWU/LnRvU3RyaW5nKCkpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLnN0cm9rZSA9IHZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgeyBzdHJva2UgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoc3Ryb2tlID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoc3Ryb2tlIGluc3RhbmNlb2YgQ29sb3IpXHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJzdHJva2VcIiwgc3Ryb2tlLnRvU3RyaW5nKCkpO1xyXG4gICAgICBlbHNlIGlmIChzdHJva2UgaW5zdGFuY2VvZiBHcmFkaWVudCkgdGhpcy4jc3Ryb2tlR3JhZGllbnQoc3Ryb2tlKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3Ryb2tlR3JhZGllbnQoZ3JhZGllbnQ6IEdyYWRpZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgc3ZnQ29udGFpbmVyQ29udHJvbGxlciB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzdmdDb250YWluZXJDb250cm9sbGVyID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBncmFkaWVudElkID0gc3ZnQ29udGFpbmVyQ29udHJvbGxlci5fZGVmaW5lR3JhZGllbnQoZ3JhZGllbnQpO1xyXG5cclxuICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJzdHJva2VcIiwgYHVybCgjJHtncmFkaWVudElkfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3N0eWxlQXR0cmlidXRlcygpOiB7IFtLZXkgaW4ga2V5b2YgdGhpc10/OiBzdHJpbmcgfSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3VwZXIuX3N0eWxlQXR0cmlidXRlcyxcclxuICAgICAgICBzdHJva2U6IFwic3Ryb2tlXCIsXHJcbiAgICAgICAgbGluZVdpZHRoOiBcInN0cm9rZS13aWR0aFwiLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5nbGUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9hbmdsZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCwgVmVjdG9yMkRCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyREJhc2VSZW5kZXJhYmxlLFxyXG4gIENhbnZhczJEU2hhcGVQYXJ0UmVuZGVyYWJsZSxcclxuICBDYW52YXMyRFN0YW5kYWxvbmVSZW5kZXJhYmxlLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuaW1wb3J0IHsgaXNSZWFkT25seSB9IGZyb20gXCIuLi91dGxpdGllcy9yZWFkT25seVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VUcmFuc2Zvcm08QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBCYXNlVHJhbnNmb3JtIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwiYW5nbGVcIixcclxuICAgICAgXCJhbmd1bGFyLXZlbG9jaXR5XCIsXHJcbiAgICAgIFwiYW5jaG9yXCIsXHJcbiAgICAgIFwic2NhbGVcIixcclxuICAgICAgXCJ2ZWxvY2l0eVwiLFxyXG4gICAgXTtcclxuXHJcbiAgICAjYW5jaG9yID0gVmVjdG9yMkQuemVybygpO1xyXG4gICAgI2FuZ2xlID0gQW5nbGUucmFkaWFucygwKTtcclxuICAgICNhbmd1bGFyVmVsb2NpdHkgPSBBbmdsZS5yYWRpYW5zKDApO1xyXG4gICAgI3NjYWxlID0gVmVjdG9yMkQub25lKCk7XHJcbiAgICAjdmVsb2NpdHkgPSBWZWN0b3IyRC56ZXJvKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgICB0aGlzLiNhbmNob3IuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jYW5jaG9yQ2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgdGhpcy4jYW5nbGUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jYW5nbGVDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICB0aGlzLiNhbmd1bGFyVmVsb2NpdHkuYWRkQ2hhbmdlTGlzdGVuZXIoXHJcbiAgICAgICAgdGhpcy4jYW5ndWxhclZlbG9jaXR5Q2hhbmdlTGlzdGVuZXJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuI3NjYWxlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI3NjYWxlQ2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgdGhpcy4jdmVsb2NpdHkuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jdmVsb2NpdHlDaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgI2FuZ2xlQ2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPG51bWJlcj4gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJhbmdsZVwiLCB0aGlzLiNhbmdsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvY2t3aXNlIHJvdGF0aW9uIG9mIHRoZSBlbGVtZW50IGFyb3VuZCBpdHMgYW5jaG9yLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgYW5nbGUoKTogQW5nbGUge1xyXG4gICAgICByZXR1cm4gdGhpcy4jYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuZ2xlKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuI2FuZ2xlLnJlcGxhY2UoKHRoaXMuI2FuZ2xlID0gdmFsdWUpLCB0aGlzLiNhbmdsZUNoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAjYW5ndWxhclZlbG9jaXR5Q2hhbmdlZFRpbWUgPSAtMTtcclxuXHJcbiAgICAjYW5ndWxhclZlbG9jaXR5Q2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPG51bWJlcj4gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eUNoYW5nZWRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYW5ndWxhclZlbG9jaXR5XCIsIHRoaXMuYW5ndWxhclZlbG9jaXR5KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsb2Nrd2lzZSByb3RhdGlvbiBwZXIgc2Vjb25kLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyIGFuZ3VsYXItdmVsb2NpdHlcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBhbmd1bGFyVmVsb2NpdHkoKTogQW5nbGUge1xyXG4gICAgICByZXR1cm4gdGhpcy4jYW5ndWxhclZlbG9jaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhbmd1bGFyVmVsb2NpdHkodmFsdWUpIHtcclxuICAgICAgdGhpcy4jYW5ndWxhclZlbG9jaXR5LnJlcGxhY2UoXHJcbiAgICAgICAgKHRoaXMuI2FuZ3VsYXJWZWxvY2l0eSA9IHZhbHVlKSxcclxuICAgICAgICB0aGlzLiNhbmd1bGFyVmVsb2NpdHlDaGFuZ2VMaXN0ZW5lclxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgcGFyZW50J3MgYW5jaG9yLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgYW5jaG9yKCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2FuY2hvcjtcclxuICAgIH1cclxuXHJcbiAgICAjYW5jaG9yQ2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFZlY3RvcjJEQmFzZT4gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJhbmNob3JcIiwgdGhpcy4jYW5jaG9yKTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0IGFuY2hvcih2YWx1ZSkge1xyXG4gICAgICB0aGlzLiNhbmNob3IucmVwbGFjZSgodGhpcy4jYW5jaG9yID0gdmFsdWUpLCB0aGlzLiNhbmNob3JDaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgX2FwcGx5TW92ZW1lbnQoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICBpZiAodGhpcy4jYW5ndWxhclZlbG9jaXR5LnJhZGlhbnMgIT09IDApIHtcclxuICAgICAgICBjb25zdCBhbmdsZUNoYW5nZSA9XHJcbiAgICAgICAgICAodGhpcy4jYW5ndWxhclZlbG9jaXR5W3RoaXMuI2FuZ2xlLnVuaXRdICpcclxuICAgICAgICAgICAgTWF0aC5taW4oZGVsdGFUaW1lLCBub3cgLSB0aGlzLiNhbmd1bGFyVmVsb2NpdHlDaGFuZ2VkVGltZSkpIC9cclxuICAgICAgICAgIDEwMDA7XHJcblxyXG4gICAgICAgIGlmIChhbmdsZUNoYW5nZSA9PT0gMCkgdGhpcy5yZWdpc3RlckNoYW5nZShcImFuZ2xlXCIsIHRoaXMuI2FuZ2xlKTtcclxuICAgICAgICBlbHNlIHRoaXMuYW5nbGVbdGhpcy4jYW5nbGUudW5pdF0gKz0gYW5nbGVDaGFuZ2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLiN2ZWxvY2l0eS54ICE9PSAwIHx8IHRoaXMuI3ZlbG9jaXR5LnkgIT09IDApIHtcclxuICAgICAgICBjb25zdCB2ZWxvY2l0eURlbHRhID1cclxuICAgICAgICAgIE1hdGgubWluKGRlbHRhVGltZSwgbm93IC0gdGhpcy4jdmVsb2NpdHlDaGFuZ2VkVGltZSkgLyAxMDAwO1xyXG5cclxuICAgICAgICBpZiAoaXNSZWFkT25seSh0aGlzLiNhbmNob3IsIFwieFwiKSB8fCBpc1JlYWRPbmx5KHRoaXMuI2FuY2hvciwgXCJ5XCIpKVxyXG4gICAgICAgICAgdGhpcy4jYW5jaG9yID0gdGhpcy4jYW5jaG9yLmNvcHkoKTtcclxuXHJcbiAgICAgICAgaWYgKHZlbG9jaXR5RGVsdGEgPT09IDApIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJhbmNob3JcIiwgdGhpcy4jYW5jaG9yKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB0aGlzLm1vdmVBbmNob3IoXHJcbiAgICAgICAgICAgIHRoaXMuI3ZlbG9jaXR5LnggKiB2ZWxvY2l0eURlbHRhLFxyXG4gICAgICAgICAgICB0aGlzLiN2ZWxvY2l0eS55ICogdmVsb2NpdHlEZWx0YVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgXCJhbmdsZVwiOlxyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuYW5nbGUudG9TdHJpbmcoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gYXR0cmlidXRlUGFyc2VyLkFuZ2xlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYW5ndWxhci12ZWxvY2l0eVwiOlxyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuYW5ndWxhclZlbG9jaXR5LnRvU3RyaW5nKCkpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5hbmd1bGFyVmVsb2NpdHkgPSBhdHRyaWJ1dGVQYXJzZXIuQW5nbGUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJhbmNob3JcIjpcclxuICAgICAgICAgICAgaWYgKHRoaXMuI2FuY2hvci50b1N0cmluZygpICE9PSBuZXdWYWx1ZSlcclxuICAgICAgICAgICAgICB0aGlzLmFuY2hvciA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInNjYWxlXCI6XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NjYWxlID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLiNzY2FsZS5lcXVhbHMobmV3U2NhbGUpKSB0aGlzLnNjYWxlID0gbmV3U2NhbGU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInZlbG9jaXR5XCI6XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVBbmNob3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgaWYgKHggPT09IDAgJiYgeSA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy4jYW5jaG9yLnggKz0geDtcclxuICAgICAgdGhpcy4jYW5jaG9yLnkgKz0geTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBhbmdsZSAtIEFuZ2xlIHRvIHR1cm4gdGhlIGVsZW1lbnQgaW4gdGhlIGNsb2Nrd2lzZSBkaXJlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJvdGF0ZUNsb2Nrd2lzZShhbmdsZTogQW5nbGUpIHtcclxuICAgICAgdGhpcy5hbmdsZSA9IEFuZ2xlLnJhZGlhbnModGhpcy4jYW5nbGUucmFkaWFucyArIGFuZ2xlLnJhZGlhbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGFuZ2xlIC0gQW5nbGUgdG8gdHVybiB0aGUgZWxlbWVudCBpbiB0aGUgY291bnRlcmNsb2Nrd2lzZSBkaXJlY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHJvdGF0ZUNvdW50ZXJjbG9ja3dpc2UoYW5nbGU6IEFuZ2xlKSB7XHJcbiAgICAgIHRoaXMuYW5nbGUgPSBBbmdsZS5yYWRpYW5zKHRoaXMuI2FuZ2xlLnJhZGlhbnMgLSBhbmdsZS5yYWRpYW5zKTtcclxuICAgIH1cclxuXHJcbiAgICAjc2NhbGVDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VmVjdG9yMkRCYXNlPiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInNjYWxlXCIsIHRoaXMuI3NjYWxlKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNdWx0aXBsaWVzIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50IGluIHRoZSB4IGFuZCB5IGRpcmVjdGlvbi4gVGhpcyBhbHNvIGFmZmVjdHNcclxuICAgICAqIGxpbmUgd2lkdGguIFNldHRpbmcgc2NhbGUgdG8gYSBudW1iZXIgd2lsbCBzZXQgYm90aCB0aGUgeCBhbmQgeSBzY2FsZSB0byB0aGF0XHJcbiAgICAgKiB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHNjYWxlKCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3NjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzY2FsZSh2YWx1ZTogVmVjdG9yMkQgfCBudW1iZXIpIHtcclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIGNvbnN0IHZlY3RvclZhbHVlID0gbmV3IFZlY3RvcjJEKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuI3NjYWxlLmVxdWFscyh2ZWN0b3JWYWx1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInNjYWxlXCIsICh0aGlzLiNzY2FsZSA9IHZlY3RvclZhbHVlKSk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4jc2NhbGUucmVwbGFjZSgodGhpcy4jc2NhbGUgPSB2YWx1ZSksIHRoaXMuI3NjYWxlQ2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICN2ZWxvY2l0eUNoYW5nZWRUaW1lID0gLTE7XHJcblxyXG4gICAgI3ZlbG9jaXR5Q2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFZlY3RvcjJEQmFzZT4gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuI3ZlbG9jaXR5Q2hhbmdlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJ2ZWxvY2l0eVwiLCB0aGlzLiN2ZWxvY2l0eSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW5jaG9yIG1vdmVtZW50IHBlciBzZWNvbmQuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCB2ZWxvY2l0eSgpOiBWZWN0b3IyRCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiN2ZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmVsb2NpdHkodmFsdWUpIHtcclxuICAgICAgdGhpcy4jdmVsb2NpdHkucmVwbGFjZShcclxuICAgICAgICAodGhpcy4jdmVsb2NpdHkgPSB2YWx1ZSksXHJcbiAgICAgICAgdGhpcy4jdmVsb2NpdHlDaGFuZ2VMaXN0ZW5lclxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGMyZFRyYW5zZm9ybTxcclxuICBCIGV4dGVuZHMgUmV0dXJuVHlwZTx0eXBlb2YgYmFzZVRyYW5zZm9ybTx0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4+XHJcbj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBDMkRUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlIHtcclxuICAgIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgICBjb25zdCB7IGNvbnRleHQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgICAgY29udGV4dC50cmFuc2xhdGUodGhpcy5hbmNob3IueCwgdGhpcy5hbmNob3IueSk7XHJcbiAgICAgIGNvbnRleHQucm90YXRlKHRoaXMuYW5nbGUucmFkaWFucyk7XHJcbiAgICAgIGNvbnRleHQuc2NhbGUodGhpcy5zY2FsZS54LCB0aGlzLnNjYWxlLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyUmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgdGhpcy5fYXBwbHlNb3ZlbWVudChjYW52YXMyRC5kZWx0YVRpbWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEMyRFRyYW5zZm9ybWVkID0gUmV0dXJuVHlwZTx0eXBlb2YgYzJkVHJhbnNmb3JtPjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQgZXh0ZW5kcyBjMmRUcmFuc2Zvcm0oXHJcbiAgYmFzZVRyYW5zZm9ybShDYW52YXMyRFN0YW5kYWxvbmVSZW5kZXJhYmxlKVxyXG4pIHt9XHJcblxyXG5leHBvcnQgY2xhc3MgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQgZXh0ZW5kcyBjMmRUcmFuc2Zvcm0oXHJcbiAgYmFzZVRyYW5zZm9ybShDYW52YXMyRFNoYXBlUGFydFJlbmRlcmFibGUpXHJcbikge31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdUcmFuc2Zvcm08QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIFNWR0NvbnRyb2xsZXJUcmFuc2Zvcm0gZXh0ZW5kcyBiYXNlVHJhbnNmb3JtKEJhc2UpIHtcclxuICAgIGdldCBhbmNob3IoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5hbmNob3I7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuY2hvcih2YWx1ZSkge1xyXG4gICAgICBjb25zdCBjaGFuZ2UgPSAhc3VwZXIuYW5jaG9yLmVxdWFscyh2YWx1ZSk7XHJcblxyXG4gICAgICBzdXBlci5hbmNob3IgPSB2YWx1ZTtcclxuXHJcbiAgICAgIGlmIChjaGFuZ2UpIHRoaXMuI3VwZGF0ZVRyYW5zZm9ybUF0dHJpYnV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgICNhbmdsZUNoYW5nZUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLiN1cGRhdGVUcmFuc2Zvcm1BdHRyaWJ1dGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0IGFuZ2xlKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIuYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuZ2xlKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGNoYW5nZSA9ICFzdXBlci5hbmdsZS5lcXVhbHModmFsdWUpO1xyXG5cclxuICAgICAgc3VwZXIuYW5nbGUgPSB2YWx1ZTtcclxuXHJcbiAgICAgIHN1cGVyLmFuZ2xlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI2FuZ2xlQ2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZSkgdGhpcy4jdXBkYXRlVHJhbnNmb3JtQXR0cmlidXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcblxyXG4gICAgICB0aGlzLiN1cGRhdGVUcmFuc2Zvcm1BdHRyaWJ1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAjdXBkYXRlVHJhbnNmb3JtQXR0cmlidXRlKCkge1xyXG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBuZXcgRE9NTWF0cml4KClcclxuICAgICAgICAudHJhbnNsYXRlU2VsZih0aGlzLmFuY2hvci54LCB0aGlzLmFuY2hvci55KVxyXG4gICAgICAgIC5yb3RhdGVTZWxmKHRoaXMuYW5nbGUuZGVncmVlcylcclxuICAgICAgICAuc2NhbGVTZWxmKHRoaXMuc2NhbGUueCwgdGhpcy5zY2FsZS55KTtcclxuXHJcbiAgICAgIGlmICh0cmFuc2Zvcm0uaXNJZGVudGl0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgeyBhLCBiLCBjLCBkLCBlLCBmIH0gPSB0cmFuc2Zvcm07XHJcblxyXG4gICAgICB0aGlzLl9zZXRTdHlsZUF0dHJpYnV0ZShcclxuICAgICAgICBcInRyYW5zZm9ybVwiLFxyXG4gICAgICAgIGBtYXRyaXgoJHthfSAke2J9ICR7Y30gJHtkfSAke2V9ICR7Zn0pYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgZGltZW5zaW9ucyB9IGZyb20gXCIuL2RpbWVuc2lvbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2aWV3Qm94PEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGRpbWVuc2lvbnMoQmFzZSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVzaXplVmlld0JveCgpIHtcclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJ2aWV3Qm94XCIsXHJcbiAgICAgICAgYCR7MH0gJHswfSAke3RoaXMud2lkdGh9ICR7dGhpcy5oZWlnaHR9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHN1cGVyLmhlaWdodCkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIuaGVpZ2h0ID0gdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLl9yZXNpemVWaWV3Qm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gc3VwZXIud2lkdGgpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLndpZHRoID0gdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLl9yZXNpemVWaWV3Qm94KCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IGMyZFJlY3RhbmdsZUJvdW5kcyB9IGZyb20gXCIuL3JlY3RhbmdsZUJvdW5kc1wiO1xyXG5pbXBvcnQgeyBDMkRUcmFuc2Zvcm1lZCB9IGZyb20gXCIuL3RyYW5zZm9ybVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcnNWaXN1YWxNZWRpYTxcclxuICBCIGV4dGVuZHMgQzJEVHJhbnNmb3JtZWQsXHJcbiAgVCBleHRlbmRzIFwiaW1nXCIgfCBcInZpZGVvXCJcclxuPihCYXNlOiBCLCBtZWRpYVRhZzogVCkge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGMyZFJlY3RhbmdsZUJvdW5kcyhCYXNlLCBcInRvcExlZnRcIikge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsuLi5zdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwic291cmNlXCJdO1xyXG5cclxuICAgICNtZWRpYUVsZW1lbnQ6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXTtcclxuICAgICN3aWR0aFNldCA9IGZhbHNlO1xyXG4gICAgI2hlaWdodFNldCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgdGhpcy4jbWVkaWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtZWRpYVRhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwic291cmNlXCI6XHJcbiAgICAgICAgICB0aGlzLnNvdXJjZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIFwid2lkdGhcIjpcclxuICAgICAgICAgIHRoaXMud2lkdGggPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSBcImhlaWdodFwiOlxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICB0aGlzLmNhbnZhcy53YWl0Rm9yKFxyXG4gICAgICAgIHRoaXMuI21lZGlhRWxlbWVudCxcclxuICAgICAgICBtZWRpYVRhZyA9PT0gXCJ2aWRlb1wiID8gXCJjYW5wbGF5XCIgOiBcImxvYWRcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZWRpYUVsZW1lbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNtZWRpYUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVUkwgb3IgbG9jYWwgcGF0aCB0byB0aGUgbWVkaWEgZmlsZSBzb3VyY2UgZm9yIHRoaXMgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWVkaWFFbGVtZW50LnNyYztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc291cmNlKHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy4jbWVkaWFFbGVtZW50LnNyYykgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInNvdXJjZVwiLCAodGhpcy4jbWVkaWFFbGVtZW50LnNyYyA9IHZhbHVlKSk7XHJcblxyXG4gICAgICB0aGlzLiNtZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBtZWRpYVRhZyA9PT0gXCJpbWdcIiA/IFwibG9hZFwiIDogXCJjYW5wbGF5XCIsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuI3dpZHRoU2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiNoZWlnaHRTZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoUmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5tZWRpYVdpZHRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1lZGlhSGVpZ2h0ICogd2lkdGhSYXRpbztcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy4jaGVpZ2h0U2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodFJhdGlvID0gdGhpcy5oZWlnaHQgLyB0aGlzLm1lZGlhSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWVkaWFXaWR0aCAqIGhlaWdodFJhdGlvO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWVkaWFXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1lZGlhSGVpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY2FudmFzMkQuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy4jbWVkaWFFbGVtZW50LFxyXG4gICAgICAgIHRoaXMudG9wTGVmdC54LFxyXG4gICAgICAgIHRoaXMudG9wTGVmdC55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNhbnZhczJELmNvbnRleHQucmVjdChcclxuICAgICAgICB0aGlzLnRvcExlZnQueCxcclxuICAgICAgICB0aGlzLnRvcExlZnQueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWFXaWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnRcclxuICAgICAgICA/IHRoaXMuI21lZGlhRWxlbWVudC5uYXR1cmFsV2lkdGhcclxuICAgICAgICA6IHRoaXMuI21lZGlhRWxlbWVudC52aWRlb1dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudC53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgY29uc3Qgcm91bmRlZFZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAocm91bmRlZFZhbHVlID09PSB0aGlzLndpZHRoKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLiN3aWR0aFNldCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwid2lkdGhcIiwgKHRoaXMuI21lZGlhRWxlbWVudC53aWR0aCA9IHJvdW5kZWRWYWx1ZSkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuI2hlaWdodFNldCB8fCB0aGlzLm1lZGlhV2lkdGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHdpZHRoUmF0aW8gPSB2YWx1ZSAvIHRoaXMubWVkaWFXaWR0aDtcclxuXHJcbiAgICAgIHRoaXMuaGVpZ2h0ICo9IHdpZHRoUmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lZGlhSGVpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWVkaWFFbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudFxyXG4gICAgICAgID8gdGhpcy4jbWVkaWFFbGVtZW50Lm5hdHVyYWxIZWlnaHRcclxuICAgICAgICA6IHRoaXMuI21lZGlhRWxlbWVudC52aWRlb0hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWVkaWFFbGVtZW50LmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJvdW5kZWRWYWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG5cclxuICAgICAgaWYgKHJvdW5kZWRWYWx1ZSA9PT0gdGhpcy5oZWlnaHQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuI2hlaWdodFNldCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiaGVpZ2h0XCIsICh0aGlzLiNtZWRpYUVsZW1lbnQuaGVpZ2h0ID0gcm91bmRlZFZhbHVlKSk7XHJcblxyXG4gICAgICBpZiAodGhpcy4jd2lkdGhTZXQgfHwgdGhpcy5tZWRpYUhlaWdodCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgaGVpZ2h0UmF0aW8gPSB2YWx1ZSAvIHRoaXMubWVkaWFIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLndpZHRoICo9IGhlaWdodFJhdGlvO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5nbGUsIEFuZ2xlVW5pdFNob3J0IH0gZnJvbSBcIi4uL2NsYXNzZXMvYW5nbGVcIjtcclxuaW1wb3J0IHsgQm9yZGVyUmFkaXVzIH0gZnJvbSBcIi4uL2NsYXNzZXMvYm9yZGVyUmFkaXVzXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4uL2NsYXNzZXMvY29sb3JcIjtcclxuaW1wb3J0IHsgRHJhd1N0eWxlIH0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5cclxudHlwZSBBdHRyaWJ1dGVUeXBlTWFwID0ge1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIGJvb2xlYW46IGJvb2xlYW47XHJcbiAgQm9yZGVyUmFkaXVzOiBCb3JkZXJSYWRpdXM7XHJcbiAgQ29sb3I6IENvbG9yO1xyXG4gIEZpbGxTdHJva2VTdHlsZTogRHJhd1N0eWxlO1xyXG4gIFZlY3RvcjJEOiBWZWN0b3IyRDtcclxuICBBbmdsZTogQW5nbGU7XHJcbn07XHJcblxyXG50eXBlIEF0dHJpYnV0ZVR5cGVQYXJzZXIgPSB7XHJcbiAgW1R5cGUgaW4ga2V5b2YgQXR0cmlidXRlVHlwZU1hcF06IChcclxuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmdcclxuICApID0+IEF0dHJpYnV0ZVR5cGVNYXBbVHlwZV07XHJcbn07XHJcblxyXG5jb25zdCBhbmdsZU1hdGNoID0gbmV3IFJlZ0V4cChcclxuICBgKFtcXFxcZFxcXFwuXSspXFxcXHMqKCR7T2JqZWN0LnZhbHVlcyhBbmdsZS51bml0KS5qb2luKFwifFwiKX0pYFxyXG4pO1xyXG5cclxuY29uc3QgaW5jbHVkZXNOdW1iZXJzID0gKHN0cjogc3RyaW5nKSA9PiBzdHIubWF0Y2goL1xcZC8pICE9PSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZVBhcnNlcjogQXR0cmlidXRlVHlwZVBhcnNlciA9IHtcclxuICBudW1iZXIoc3RyaW5nVmFsdWUpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZ1ZhbHVlKTtcclxuICB9LFxyXG4gIGJvb2xlYW4oc3RyaW5nVmFsdWUpIHtcclxuICAgIHN3aXRjaCAoc3RyaW5nVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgY2FzZSBcInRydWVcIjpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2FzZSBcImZhbHNlXCI6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlICR7c3RyaW5nVmFsdWV9IGFzIGJvb2xlYW4uYCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBCb3JkZXJSYWRpdXMoc3RyaW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSBzdHJpbmdWYWx1ZS5zcGxpdChcIixcIik7XHJcblxyXG4gICAgY29uc3QgW2FyZzEsIGFyZzIsIGFyZzMsIGFyZzRdID0gYXJncy5tYXAoYXR0cmlidXRlUGFyc2VyLm51bWJlcik7XHJcblxyXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gbmV3IEJvcmRlclJhZGl1cyhhcmcxLCBhcmcyLCBhcmczLCBhcmc0KTtcclxuXHJcbiAgICByZXR1cm4gYm9yZGVyUmFkaXVzO1xyXG4gIH0sXHJcbiAgQ29sb3Ioc3RyaW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSBzdHJpbmdWYWx1ZS5zcGxpdChcIixcIik7XHJcblxyXG4gICAgY29uc3QgbnVtYmVycyA9IGFyZ3MubWFwKGF0dHJpYnV0ZVBhcnNlci5udW1iZXIpO1xyXG5cclxuICAgIHN3aXRjaCAobnVtYmVycy5sZW5ndGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBpc05hTihudW1iZXJzWzBdKSA/IG5ldyBDb2xvcihhcmdzWzBdKSA6IG5ldyBDb2xvcihudW1iZXJzWzBdKTtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IobnVtYmVyc1swXSwgbnVtYmVyc1sxXSk7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgYEZvdW5kICR7bnVtYmVycy5sZW5ndGh9IGFyZ3VtZW50cyBwYXNzZWQgdG8gQ29sb3IgYXR0cmlidXRlLCBidXQgdGhlIG1heGltdW0gaXMgNGBcclxuICAgICAgICApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IobnVtYmVyc1swXSwgbnVtYmVyc1sxXSwgbnVtYmVyc1syXSwgbnVtYmVyc1szXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBGaWxsU3Ryb2tlU3R5bGUoc3RyaW5nVmFsdWUpIHtcclxuICAgIGlmIChzdHJpbmdWYWx1ZSA9PT0gXCJub25lXCIgfHwgc3RyaW5nVmFsdWUgPT09IFwiZ3JhZGllbnRcIilcclxuICAgICAgcmV0dXJuIHN0cmluZ1ZhbHVlO1xyXG5cclxuICAgIHJldHVybiBhdHRyaWJ1dGVQYXJzZXIuQ29sb3Ioc3RyaW5nVmFsdWUpO1xyXG4gIH0sXHJcbiAgVmVjdG9yMkQoc3RyaW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IG51bWJlcnMgPSBzdHJpbmdWYWx1ZS5zcGxpdChcIixcIikubWFwKGF0dHJpYnV0ZVBhcnNlci5udW1iZXIpO1xyXG5cclxuICAgIGlmIChudW1iZXJzLnNvbWUoTnVtYmVyLmlzTmFOKSkgdGhyb3cgbmV3IEVycm9yKGBOYU46ICR7c3RyaW5nVmFsdWV9YCk7XHJcblxyXG4gICAgc3dpdGNoIChudW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRChudW1iZXJzWzBdKTtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIGBGb3VuZCAke251bWJlcnMubGVuZ3RofSBhcmd1bWVudHMgcGFzc2VkIHRvIFZlY3RvMkQgYXR0cmlidXRlLCBidXQgdGhlIG1heGltdW0gaXMgMmBcclxuICAgICAgICApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQobnVtYmVyc1swXSwgbnVtYmVyc1sxXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBBbmdsZShzdHJpbmdWYWx1ZSkge1xyXG4gICAgY29uc3QgYXJncyA9IHN0cmluZ1ZhbHVlLm1hdGNoKGFuZ2xlTWF0Y2gpO1xyXG5cclxuICAgIGlmIChhcmdzID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuZ2xlIGFyZ3VtZW50cyBjb3VsZCBub3QgYmUgcGFyc2VkOiAke3N0cmluZ1ZhbHVlfWApO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihhcmdzWzFdKTtcclxuXHJcbiAgICBjb25zdCB1bml0ID0gYXJnc1syXSBhcyBBbmdsZVVuaXRTaG9ydDtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFuZ2xlKHVuaXQsIHZhbHVlKTtcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2FtZWxUb0tlYmFiQ2FzZSA9IChjYW1lbDogc3RyaW5nKSA9PlxyXG4gIGNhbWVsLnJlcGxhY2UoXHJcbiAgICAvKC4pKFtBLVpdKS9nLFxyXG4gICAgKF8sIGJlZm9yZUNoYXJhY3Rlcjogc3RyaW5nLCB1cHBlckNoYXJhY3Rlcjogc3RyaW5nKSA9PlxyXG4gICAgICBgJHtiZWZvcmVDaGFyYWN0ZXJ9LSR7dXBwZXJDaGFyYWN0ZXIudG9Mb3dlckNhc2UoKX1gXHJcbiAgKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZE9ubHkob2JqOiB7fSwgcHJvcGVydHlLZXk6IFByb3BlcnR5S2V5KSB7XHJcbiAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wZXJ0eUtleSk7XHJcblxyXG4gIGlmIChkZXNjcmlwdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xyXG5cclxuICAgIGlmIChwcm90b3R5cGUgPT09IG51bGwpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgQ291bGQgbm90IGZpbmQgcHJvcGVydHkgd2l0aCBrZXk6ICR7U3RyaW5nKHByb3BlcnR5S2V5KX1gXHJcbiAgICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGlzUmVhZE9ubHkocHJvdG90eXBlLCBwcm9wZXJ0eUtleSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZGVzY3JpcHRvci53cml0YWJsZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICByZXR1cm4gZGVzY3JpcHRvci5zZXQgPT09IHVuZGVmaW5lZDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyRFJlY3RhbmdsZSxcclxuICBDYW52YXMyRFNoYXBlUmVjdGFuZ2xlLFxyXG59IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC9yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jbGFzc2VzL2NvbG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBBbmdsZSB9IGZyb20gXCIuL2NsYXNzZXMvYW5nbGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRUZXh0IH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL3RleHRcIjtcclxuaW1wb3J0IHsgVW5pdHMgfSBmcm9tIFwiLi9jbGFzc2VzL3VuaXRzXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBjcmVhdGVTdGF0ZSB9IGZyb20gXCIuL2NsYXNzZXMvc3RhdGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRMaW5lLCBDYW52YXMyRFNoYXBlTGluZSB9IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC9saW5lXCI7XHJcbmltcG9ydCB7IENhbnZhczJEU2hhcGUgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvc2hhcGVcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyREVsbGlwc2UsXHJcbiAgQ2FudmFzMkRTaGFwZUVsbGlwc2UsXHJcbn0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL2VsbGlwc2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCZXppZXIsIENhbnZhczJEU2hhcGVCZXppZXIgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvYmV6aWVyXCI7XHJcbmltcG9ydCB7IENhbnZhczJESW1hZ2UgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvaW1hZ2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRWaWRlbyB9IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC92aWRlb1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBMaW5lYXJHcmFkaWVudCxcclxuICBSYWRpYWxHcmFkaWVudCxcclxufSBmcm9tIFwiLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IEMyREJhc2UgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvYzJkQmFzZVwiO1xyXG5pbXBvcnQgeyBTaGFkb3cgfSBmcm9tIFwiLi9jbGFzc2VzL3NoYWRvd1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcIi4vZWxlbWVudHMvZG9jdW1lbnQvZG9tQmFzZVwiO1xyXG5pbXBvcnQgeyBCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi9jbGFzc2VzL2JvcmRlclJhZGl1c1wiO1xyXG5pbXBvcnQgeyBSYW5kb20gfSBmcm9tIFwiLi9jbGFzc2VzL3JhbmRvbVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21peGFibGVcIjtcclxuXHJcbmV4cG9ydCB0eXBlIENTU0xlbmd0aFVuaXQgPSAodHlwZW9mIFVuaXRzLnNpemUpW2tleW9mIHR5cGVvZiBVbml0cy5zaXplXTtcclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0b3A6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPjtcclxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQ6IG51bWJlciwgc3RvcDogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+O1xyXG5mdW5jdGlvbiByYW5nZShhcmcxOiBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xyXG4gIGNvbnN0IFtzdGFydCwgc3RvcF0gPSBhcmcyID09PSB1bmRlZmluZWQgPyBbMCwgYXJnMV0gOiBbYXJnMSwgYXJnMl07XHJcblxyXG4gIGNvbnN0IHN0ZXAgPSBzdG9wID4gc3RhcnQgPyAxIDogLTE7XHJcblxyXG4gIGxldCB2YWx1ZSA9IHN0YXJ0O1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCk6IEl0ZXJhdG9yUmVzdWx0PG51bWJlcj4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICB2YWx1ZSxcclxuICAgICAgZG9uZTogc3RhcnQgKyBzdGVwID09PSBzdG9wLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YWx1ZSArPSBzdGVwO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIG5leHQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTXVsdGlwbGU8UiBleHRlbmRzIE5vZGU+KFxyXG4gIGNvdW50OiBudW1iZXIsXHJcbiAgZ2VuZXJhdG9yOiAoaW5kZXg6IG51bWJlcikgPT4gUlxyXG4pIHtcclxuICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IGdlbmVyYXRvcihpbmRleCkpO1xyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XHJcbiAgICBkZWZpbmU8RSBleHRlbmRzIHR5cGVvZiBDMkRCYXNlPih0YWc6IEVbXCJ0YWdcIl0sIEVsZW1lbnRDbGFzczogRSk6IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtY2FudmFzXCIsIENhbnZhczJEQ2FudmFzRWxlbWVudCk7XHJcblxyXG5leHBvcnQgdHlwZSBXZWJTcGlubmVyRWxlbWVudCA9IHtcclxuICBDYW52YXMyRENhbnZhc0VsZW1lbnQ6IENhbnZhczJEQ2FudmFzRWxlbWVudDtcclxuICBDYW52YXMyREJlemllcjogQ2FudmFzMkRCZXppZXI7XHJcbiAgQ2FudmFzMkRFbGxpcHNlOiBDYW52YXMyREVsbGlwc2U7XHJcbiAgQ2FudmFzMkRJbWFnZTogQ2FudmFzMkRJbWFnZTtcclxuICBDYW52YXMyRExpbmU6IENhbnZhczJETGluZTtcclxuICBDYW52YXMyRFJlY3RhbmdsZTogQ2FudmFzMkRSZWN0YW5nbGU7XHJcbiAgQ2FudmFzMkRTaGFwZTogQ2FudmFzMkRTaGFwZTtcclxuICBDYW52YXMyRFNoYXBlQmV6aWVyOiBDYW52YXMyRFNoYXBlQmV6aWVyO1xyXG4gIENhbnZhczJEU2hhcGVFbGxpcHNlOiBDYW52YXMyRFNoYXBlRWxsaXBzZTtcclxuICBDYW52YXMyRFNoYXBlTGluZTogQ2FudmFzMkRTaGFwZUxpbmU7XHJcbiAgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZTogQ2FudmFzMkRTaGFwZVJlY3RhbmdsZTtcclxuICBDYW52YXMyRFRleHQ6IENhbnZhczJEVGV4dDtcclxuICBDYW52YXMyRFZpZGVvOiBDYW52YXMyRFZpZGVvO1xyXG59O1xyXG5cclxudHlwZSBFbGVtZW50TWFwID0ge1xyXG4gIHBhcmVudEVsZW1lbnQ6IHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudDtcclxuICBbbmFtZTogc3RyaW5nXTogdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50IHwgRWxlbWVudE1hcDtcclxufTtcclxuXHJcbmNvbnN0IGVsZW1lbnRzOiB7IFtjYXRlZ29yeTogc3RyaW5nXTogRWxlbWVudE1hcCB9ID0ge1xyXG4gIGNhbnZhczJEOiB7XHJcbiAgICBwYXJlbnRFbGVtZW50OiBDYW52YXMyRENhbnZhc0VsZW1lbnQsXHJcbiAgICBDYW52YXMyREJlemllcixcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQ6IENhbnZhczJEU2hhcGUsXHJcbiAgICAgIENhbnZhczJEQmV6aWVyLFxyXG4gICAgICBDYW52YXMyRFNoYXBlRWxsaXBzZSxcclxuICAgICAgQ2FudmFzMkRTaGFwZUxpbmUsXHJcbiAgICAgIENhbnZhczJEU2hhcGVSZWN0YW5nbGUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZU11bHRpcGxlLFxyXG4gIEJvcmRlclJhZGl1cyxcclxuICBDb2xvcixcclxuICBWZWN0b3IyRCxcclxuICBBbmdsZSxcclxuICBTdGF0ZSxcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbiAgUmFuZG9tLFxyXG4gIFNoYWRvdyxcclxuICBjcmVhdGVTdGF0ZSxcclxuICBjcmVhdGVSb290LFxyXG4gIGVsZW1lbnRzIGFzIEVsZW1lbnRzLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=