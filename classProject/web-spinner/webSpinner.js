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
                super.connectedCallback();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViU3Bpbm5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBT2hDLE1BQU0sYUFBYSxHQUVmO0lBQ0YsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ2hCLElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLENBQUM7Q0FDUixDQUFDO0FBTUssTUFBTSxLQUFNLFNBQVEseUNBQWE7SUFHdEMsWUFBWSxJQUFvQixFQUFFLEtBQWE7UUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFM0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUxqQiw2QkFBZSxJQUFJLEdBQUcsRUFBMEMsRUFBQztRQU8vRCxJQUFJLElBQUksS0FBSyxLQUFLO1lBQUUsMkJBQUksMEJBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFvQkQ7O09BRUc7SUFFSCxJQUFJLE9BQU87UUFDVCxPQUFPLDJCQUFJLDZDQUFjLE1BQWxCLElBQUksRUFBZSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSztRQUNmLDJCQUFJLDZDQUFjLE1BQWxCLElBQUksRUFBZSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBRUgsUUFBUTtRQUNOLE1BQU0sZUFBZSxHQUFHLDJCQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQ2pCLGVBQWUsS0FBSyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQXVCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBSSwwQkFBYSxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXpELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpCLE9BQU8sV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUVILE1BQU0sQ0FBQyxPQUFPLENBQ1osS0FBYSxFQUNiLFFBQXdCLEVBQ3hCLE1BQXNCO1FBRXRCLE9BQU8sS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7Ozs7T0FLRztJQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBYTtRQUMxQixPQUFPLElBQUksRUFBSyxDQUFDLEVBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUVILE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDL0QsQ0FBQztJQUVEOztPQUVHO0lBRUgsSUFBSSxRQUFRO1FBQ1YsT0FBTywyQkFBSSw2Q0FBYyxNQUFsQixJQUFJLEVBQWUsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQUs7UUFDaEIsMkJBQUksNkNBQWMsTUFBbEIsSUFBSSxFQUFlLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWE7UUFDMUIsT0FBTyxJQUFJLEVBQUssQ0FBQyxFQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7SUFFSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBRWpDLDJCQUFJLDBCQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBRUgsSUFBSSxJQUFJO1FBQ04sT0FBTywyQkFBSSw2Q0FBYyxNQUFsQixJQUFJLEVBQWUsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWiwyQkFBSSw2Q0FBYyxNQUFsQixJQUFJLEVBQWUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUVILElBQUksSUFBSTtRQUNOLE1BQU0sZUFBZSxHQUFHLDJCQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FDZixlQUFlLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQyxLQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMkJBQUksMEJBQWEsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV6RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzNDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFLLENBQUMsSUFBSSxDQUFDLEdBQW9CLENBQUMsS0FBSyxTQUFTLENBQ3hELENBQUM7UUFFRixJQUFJLFFBQVEsS0FBSyxTQUFTO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFN0QsT0FBTyxRQUF5QixDQUFDO0lBQ25DLENBQUM7SUFjRDs7O09BR0c7SUFFSCxNQUFNLEtBQUssYUFBYTtRQUN0QixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFFSCxJQUFJLEtBQUs7UUFDUCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUVILE1BQU0sQ0FBQyxJQUFJO1FBQ1QsT0FBTyxFQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7O3FJQTFNYSxJQUFvQztJQUNoRCxNQUFNLE1BQU0sR0FBRywyQkFBSSwwQkFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQyxJQUFJLE1BQU0sS0FBSyxTQUFTO1FBQUUsT0FBTyxNQUFNLENBQUM7SUFFeEMsTUFBTSxVQUFVLEdBQUcsRUFBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUxRCwyQkFBSSwwQkFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFeEMsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyxxREFFYSxJQUFvQyxFQUFFLEtBQWE7SUFDL0QsMkJBQUksMEJBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRW5DLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFpSkQ7OztHQUdHO0FBRUksVUFBSSxHQUFHO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLElBQUksRUFBRSxNQUFNO0NBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNbUI7QUFFaEMsTUFBTSxnQkFBZ0I7SUFtQnBCLFlBQVksSUFBWSxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsVUFBbUI7UUFsQjNFLDRDQUFpQjtRQUNqQiw2Q0FBa0I7UUFDbEIsK0NBQW9CO1FBQ3BCLGdEQUFxQjtRQWdCbkIsMkJBQUksNkJBQVksSUFBSSxPQUFDO1FBRXJCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3ZCLDJCQUFJLDhCQUFhLDJCQUFJLGdDQUFlLDJCQUFJLGlDQUFnQixJQUFJLG1CQUFDO1FBQy9ELENBQUM7YUFBTSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM5QiwyQkFBSSxpQ0FBZ0IsSUFBSSxPQUFDO1lBQ3pCLDJCQUFJLDhCQUFhLElBQUksT0FBQztZQUN0QiwyQkFBSSxnQ0FBZSxJQUFJLE9BQUM7UUFDMUIsQ0FBQzthQUFNLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLDJCQUFJLDhCQUFhLElBQUksT0FBQztZQUN0QiwyQkFBSSxnQ0FBZSxJQUFJLE9BQUM7WUFDeEIsMkJBQUksaUNBQWdCLElBQUksT0FBQztRQUMzQixDQUFDO2FBQU0sQ0FBQztZQUNOLDJCQUFJLDhCQUFhLElBQUksT0FBQztZQUN0QiwyQkFBSSxpQ0FBZ0IsSUFBSSxPQUFDO1lBQ3pCLDJCQUFJLGdDQUFlLFVBQVUsT0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sMkJBQUksaUNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSztRQUNmLDJCQUFJLDZCQUFZLEtBQUssT0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTywyQkFBSSxrQ0FBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLO1FBQ2hCLDJCQUFJLDhCQUFhLEtBQUssT0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTywyQkFBSSxvQ0FBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFLO1FBQ2xCLDJCQUFJLGdDQUFlLEtBQUssT0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTywyQkFBSSxxQ0FBYSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLFdBQVcsQ0FBQyxLQUFLO1FBQ25CLDJCQUFJLGlDQUFnQixLQUFLLE9BQUM7SUFDNUIsQ0FBQztDQUNGOztBQUVNLE1BQU0sWUFBYSxTQUFRLHlDQUF1QjtJQWN2RCxZQUFZLElBQVksRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFVBQW1CO1FBQ3pFLE1BQU0sSUFBSSxHQUNSLElBQUksS0FBSyxTQUFTO1lBQ2hCLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUM1QixDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVM7Z0JBQ3BCLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUztvQkFDMUIsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7b0JBQ3hDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLO1FBQ2YsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRW5DLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUU1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksUUFBUSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRXBDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUU3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksV0FBVyxDQUFDLEtBQUs7UUFDbkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRXZDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUVoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQUs7UUFDbEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXRDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUUvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFtQjtRQUN4QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S3FDO0FBRS9CLE1BQU0sU0FBVSxTQUFRLCtDQUFRO0lBQXZDOztRQUNFLDZCQUFXLEtBQUssRUFBQztJQVNuQixDQUFDO0lBUEMsSUFBSSxPQUFPO1FBQ1QsT0FBTywyQkFBSSwwQkFBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLO1FBQ2YsMkJBQUksc0JBQVksS0FBSyxPQUFDO0lBQ3hCLENBQUM7Q0FDRjs7QUFFTSxNQUFNLFlBQWEsU0FBUSxTQUFTO0lBR3pDLFlBQVksTUFBbUI7UUFDN0IsS0FBSyxFQUFFLENBQUM7UUFIVix1Q0FBcUI7UUFLbkIsMkJBQUksd0JBQVcsTUFBTSxPQUFDO1FBRXRCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVyQixLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFbEIsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixJQUFJLDJCQUFJLDRCQUFRLFlBQVksTUFBTTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWhELE1BQU0sWUFBWSxHQUFHLDJCQUFJLDRCQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUUxRCxPQUFPLCtDQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REQsU0FBUyxHQUFHLENBQUMsQ0FBUztJQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ1osUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBRU0sTUFBTSxLQUFLO0lBTWhCLFlBQ0UsUUFBeUIsRUFDekIsU0FBa0IsRUFDbEIsSUFBYSxFQUNiLEtBQWM7UUFUaEIsNkJBQWE7UUFXWCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLDJCQUFJLGNBQVEsUUFBUSxPQUFDO1FBQ3ZCLENBQUM7YUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU3QixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDM0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFN0QsMkJBQUksY0FBUSxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLFFBQVEsRUFBRSxPQUFDO1FBQzNELENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO1lBQ3JCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV4QixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDeEIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQWUsQ0FBQyxDQUFDO1lBRXRDLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFjLENBQUMsQ0FBQztZQUVwQyxNQUFNLFFBQVEsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2RCwyQkFBSSxjQUFRLElBQUksTUFBTSxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsUUFBUSxFQUFFLE9BQUM7UUFDM0QsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWEsRUFBRSxLQUFjO1FBQ3ZDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWE7UUFDN0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVk7UUFDakIsT0FBTywyQkFBSSxrQkFBSyxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sMkJBQUksa0JBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVksRUFBRSxLQUFjO1FBQ2pFLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHLENBQ1IsR0FBVyxFQUNYLFVBQWtCLEVBQ2xCLFNBQWlCLEVBQ2pCLEtBQWM7UUFFZCxPQUFPLElBQUksS0FBSyxDQUNkLE9BQU8sR0FBRyxJQUFJLFVBQVUsSUFBSSxTQUFTLEdBQ25DLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQ3hDLEdBQUcsQ0FDSixDQUFDO0lBQ0osQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRStCO0FBRU07QUFFdEMsTUFBTSxTQUFTO0lBSWIsWUFBWSxNQUFjLEVBQUUsS0FBWTtRQUh4QyxvQ0FBZ0I7UUFDaEIsbUNBQWM7UUFHWiwyQkFBSSxxQkFBVyxNQUFNLE9BQUM7UUFDdEIsMkJBQUksb0JBQVUsS0FBSyxPQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLDJCQUFJLHlCQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sMkJBQUksd0JBQU8sQ0FBQztJQUNyQixDQUFDO0NBQ0Y7O0FBRU0sTUFBTSxRQUFRO0lBQXJCO1FBQ0UsMEJBQXNCLEVBQUUsRUFBQztJQThDM0IsQ0FBQztJQTVDQyxZQUFZLENBQUMsTUFBYyxFQUFFLEtBQVk7UUFDdkMsMkJBQUksdUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFL0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRVMsVUFBVSxDQUFDLFFBQXdCO1FBQzNDLEtBQUssTUFBTSxJQUFJLElBQUksMkJBQUksdUJBQU8sRUFBRSxDQUFDO1lBQy9CLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQztJQUNILENBQUM7SUFFUyxjQUFjLENBQUMsVUFBOEI7UUFDckQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUV2QixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3pCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQzFDLDRCQUE0QixFQUM1QixNQUFNLENBQ1AsQ0FBQztZQUVGLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUUzRCxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFOUQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFpQyxFQUFFLEdBQUcsSUFBVztRQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sMkJBQUksdUJBQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNGOztBQUVNLE1BQU0sY0FBZSxTQUFRLFFBQVE7SUFPMUMsWUFBWSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQVBWLDhDQUFxQjtRQUNyQiw4Q0FBcUI7UUFDckIsNENBQW1CO1FBQ25CLDRDQUFtQjtRQUNuQiw4QkFBd0MsSUFBSSxFQUFDO1FBSzNDLDJCQUFJLCtCQUFnQixNQUFNLE9BQUM7UUFDM0IsMkJBQUksK0JBQWdCLE1BQU0sT0FBQztRQUMzQiwyQkFBSSw2QkFBYyxJQUFJLE9BQUM7UUFDdkIsMkJBQUksNkJBQWMsSUFBSSxPQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQ0osT0FBaUMsRUFDakMsT0FBZSxFQUNmLE9BQWUsRUFDZixXQUFtQixFQUNuQixZQUFvQjtRQUVwQixNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsV0FBVyxHQUFHLDJCQUFJLG1DQUFhLENBQUM7UUFDckQsTUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLFlBQVksR0FBRywyQkFBSSxtQ0FBYSxDQUFDO1FBQ3RELE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRyxXQUFXLEdBQUcsMkJBQUksaUNBQVcsQ0FBQztRQUNuRCxNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsWUFBWSxHQUFHLDJCQUFJLGlDQUFXLENBQUM7UUFFcEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLElBQUksMkJBQUksMkJBQUssS0FBSyxJQUFJO1lBQUUsT0FBTywyQkFBSSwyQkFBSyxDQUFDO1FBRXpDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQ3pDLDRCQUE0QixFQUM1QixnQkFBZ0IsQ0FDakIsQ0FBQztRQUVGLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLDJCQUFJLG1DQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUU1RCxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSwyQkFBSSxtQ0FBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFNUQsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsMkJBQUksaUNBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRTFELFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLDJCQUFJLGlDQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sQ0FBQywyQkFBSSx1QkFBUSxVQUFVLE9BQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7O0FBRU0sTUFBTSxjQUFlLFNBQVEsUUFBUTtJQVMxQyxZQUNFLE1BQU0sR0FBRyxDQUFDLEVBQ1YsTUFBTSxHQUFHLENBQUMsRUFDVixXQUFXLEdBQUcsQ0FBQyxFQUNmLElBQUksR0FBRyxDQUFDLEVBQ1IsSUFBSSxHQUFHLENBQUMsRUFDUixTQUFTLEdBQUcsQ0FBQztRQUViLEtBQUssRUFBRSxDQUFDO1FBaEJWLHlDQUFnQjtRQUNoQix5Q0FBZ0I7UUFDaEIsOENBQXFCO1FBQ3JCLHVDQUFjO1FBQ2QsdUNBQWM7UUFDZCw0Q0FBbUI7UUFDbkIsOEJBQXdDLElBQUksRUFBQztRQVkzQywyQkFBSSwwQkFBVyxNQUFNLE9BQUM7UUFDdEIsMkJBQUksMEJBQVcsTUFBTSxPQUFDO1FBQ3RCLDJCQUFJLCtCQUFnQixXQUFXLE9BQUM7UUFDaEMsMkJBQUksd0JBQVMsSUFBSSxPQUFDO1FBQ2xCLDJCQUFJLHdCQUFTLElBQUksT0FBQztRQUNsQiwyQkFBSSw2QkFBYyxTQUFTLE9BQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FDSixPQUFpQyxFQUNqQyxPQUFlLEVBQ2YsT0FBZSxFQUNmLFlBQW9CO1FBRXBCLE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRywyQkFBSSw4QkFBUSxHQUFHLFlBQVksQ0FBQztRQUNqRCxNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsMkJBQUksOEJBQVEsR0FBRyxZQUFZLENBQUM7UUFDakQsTUFBTSxFQUFFLEdBQUcsWUFBWSxHQUFHLDJCQUFJLG1DQUFhLENBQUM7UUFFNUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLDJCQUFJLDRCQUFNLEdBQUcsWUFBWSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRywyQkFBSSw0QkFBTSxHQUFHLFlBQVksQ0FBQztRQUMvQyxNQUFNLEVBQUUsR0FBRyxZQUFZLEdBQUcsMkJBQUksaUNBQVcsQ0FBQztRQUUxQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxJQUFJLDJCQUFJLDJCQUFLLEtBQUssSUFBSTtZQUFFLE9BQU8sMkJBQUksMkJBQUssQ0FBQztRQUV6QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUN6Qyw0QkFBNEIsRUFDNUIsZ0JBQWdCLENBQ2pCLENBQUM7UUFFRixVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSwyQkFBSSxtQ0FBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFNUQsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsMkJBQUksOEJBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXZELFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLDJCQUFJLDRCQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVyRCxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSwyQkFBSSw0QkFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFckQsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsMkJBQUksaUNBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEMsT0FBTyxDQUFDLDJCQUFJLHVCQUFRLFVBQVUsT0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRjs7QUFFTSxNQUFNLGVBQWdCLFNBQVEsUUFBUTtJQUkzQyxZQUNFLGFBQW9CLHlDQUFLLENBQUMsSUFBSSxFQUFFLEVBQ2hDLFNBQW1CLCtDQUFRLENBQUMsSUFBSSxFQUFFO1FBRWxDLEtBQUssRUFBRSxDQUFDO1FBUFYsOENBQW1CO1FBQ25CLDBDQUFrQjtRQVFoQiwyQkFBSSwrQkFBZSxVQUFVLE9BQUM7UUFDOUIsMkJBQUksMkJBQVcsTUFBTSxPQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBaUMsRUFBRSxNQUFnQjtRQUN4RCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLDJCQUFJLCtCQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsMkJBQUksK0JBQVEsQ0FBQyxDQUFDLENBQUM7UUFFcEMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUMxQywyQkFBSSxtQ0FBWSxDQUFDLE9BQU8sRUFDeEIsQ0FBQyxFQUNELENBQUMsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyT00sTUFBTSxlQUFlO0lBTTFCO1FBTEEsbUNBQVcsSUFBSSxHQUFHLEVBQVUsRUFBQztRQUM3QixvQ0FBWSxJQUFJLEdBQUcsRUFBVSxFQUFDO1FBQzlCLGdDQUFRLEVBQUUsRUFBQztRQUNYLGdDQUFRLEtBQUssRUFBQztRQUdaLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzQywyQkFBSSxnQ0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0IsMkJBQUkseUJBQVMsS0FBSyxDQUFDLEdBQUcsT0FBQztZQUV2QiwyQkFBSSx5QkFBUyxJQUFJLE9BQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDekMsMkJBQUksZ0NBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWhDLDJCQUFJLHlCQUFTLEtBQUssT0FBQztZQUVuQixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksMkJBQUksZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2dCQUNqRCxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNWLDJCQUFJLHlCQUFTLElBQUksT0FBQztvQkFFbEIsTUFBTTtnQkFDUixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixLQUFLLE1BQU0sR0FBRyxJQUFJLDJCQUFJLGlDQUFVLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsMkJBQUksZ0NBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUFFLDJCQUFJLGlDQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFRCxLQUFLLE1BQU0sR0FBRyxJQUFJLDJCQUFJLGdDQUFTLEVBQUUsQ0FBQztZQUNoQywyQkFBSSxpQ0FBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sMkJBQUksNkJBQU0sQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTywyQkFBSSw2QkFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLDJCQUFJLGdDQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxHQUFXO1FBQzNCLE9BQU8sMkJBQUksaUNBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RHFDO0FBRXRDLE1BQU0sV0FBVyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFFbEUsTUFBTSxTQUFVLFNBQVEsK0NBQVE7SUFBdkM7O1FBQ0Usa0NBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFDO1FBQ3BELDBCQUFRLEtBQUssRUFBQztJQWlCaEIsQ0FBQztJQWZDLElBQUksWUFBWTtRQUNkLE9BQU8sMkJBQUksK0JBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxZQUFZLENBQUMsS0FBSztRQUNwQiwyQkFBSSwyQkFBaUIsS0FBSyxPQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLDJCQUFJLHVCQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWiwyQkFBSSxtQkFBUyxLQUFLLE9BQUM7SUFDckIsQ0FBQztDQUNGOztBQUVNLE1BQU0sWUFBYSxTQUFRLFNBQVM7SUFJekMsWUFBWSxTQUErQixNQUFNO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBSlYseUNBQXFCO1FBQ3JCLHVDQUE4QjtRQUs1QiwyQkFBSSx3QkFBVyxNQUFNLE9BQUM7UUFFdEIsMkJBQUksMEJBQWEsSUFBSSxTQUFTLEVBQUUsT0FBQztRQUVqQyxNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUMzQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUFHLE1BQXFCLENBQUM7UUFFNUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3BELEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztZQUV4QyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBRXpDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyRCxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyRCxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFlBQVk7UUFDViwyQkFBSSw4QkFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXJELDJCQUFJLDhCQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFaEMsMkJBQUksOEJBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUxQiwyQkFBSSw4QkFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTywyQkFBSSw4QkFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLENBQUM7UUFDSCxJQUFJLDJCQUFJLDRCQUFRLFlBQVksTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuRCxNQUFNLFlBQVksR0FBRywyQkFBSSw0QkFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFMUQsT0FBTyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksQ0FBQztRQUNILElBQUksMkJBQUksNEJBQVEsWUFBWSxNQUFNO1lBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sWUFBWSxHQUFHLDJCQUFJLDRCQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUUxRCxPQUFPLEtBQUssQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkcrQjtBQWV6QixNQUFNLE1BQU07SUFRakIsTUFBTSxDQUFDLFNBQVMsQ0FDZCxJQUF5QixFQUN6QixRQUFpQixFQUNqQixRQUFpQixFQUNqQixRQUFpQjs7UUFFakIsTUFBTSxLQUFLLEdBQ1QsT0FBTyxJQUFJLEtBQUssUUFBUTtZQUN0QixDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQztnQkFDRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUU7Z0JBQ25DLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTthQUN4QyxDQUFDO1FBRVIsT0FBTyx5Q0FBSyxDQUFDLElBQUksQ0FDZixNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFLLENBQUMsS0FBSywwQ0FBRSxHQUFHLG1DQUFJLENBQUMsRUFBRSxpQkFBSyxDQUFDLEtBQUssMENBQUUsR0FBRyxtQ0FBSSxHQUFHLENBQUMsRUFDMUQsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQ3ZCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQztZQUNoRSxDQUFDLENBQUMsU0FBUztZQUNYLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxtQ0FBSSxDQUFDLEVBQUUsV0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLG1DQUFJLENBQUMsQ0FBQyxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQWFELE1BQU0sQ0FBQyxRQUFRLENBQ2IsSUFBd0IsRUFDeEIsTUFBZSxFQUNmLGFBQXNCLEVBQ3RCLGFBQXNCLEVBQ3RCLFlBQXFCLEVBQ3JCLFlBQXFCLEVBQ3JCLFFBQWlCLEVBQ2pCLFFBQWlCOztRQUVqQixNQUFNLE1BQU0sR0FDVixPQUFPLElBQUksS0FBSyxRQUFRO1lBQ3RCLENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDO2dCQUNFLEdBQUcsRUFBRTtvQkFDSCxHQUFHLEVBQUUsSUFBSTtvQkFDVCxHQUFHLEVBQUUsTUFBTTtpQkFDWjtnQkFDRCxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUU7Z0JBQ3RELFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRTtnQkFDbkQsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2FBQ3hDLENBQUM7UUFFUixPQUFPLHlDQUFLLENBQUMsR0FBRyxDQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQU0sQ0FBQyxHQUFHLDBDQUFFLEdBQUcsbUNBQUksQ0FBQyxFQUFFLGtCQUFNLENBQUMsR0FBRywwQ0FBRSxHQUFHLG1DQUFJLEdBQUcsQ0FBQyxFQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFNLENBQUMsVUFBVSwwQ0FBRSxHQUFHLG1DQUFJLENBQUMsRUFBRSxrQkFBTSxDQUFDLFVBQVUsMENBQUUsR0FBRyxtQ0FBSSxHQUFHLENBQUMsRUFDdEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBTSxDQUFDLFNBQVMsMENBQUUsR0FBRyxtQ0FBSSxDQUFDLEVBQUUsa0JBQU0sQ0FBQyxTQUFTLDBDQUFFLEdBQUcsbUNBQUksR0FBRyxDQUFDLEVBQ3BFLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUztZQUN4QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUM7WUFDbEUsQ0FBQyxDQUFDLFNBQVM7WUFDWCxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsbUNBQUksQ0FBQyxFQUFFLFlBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxtQ0FBSSxDQUFDLENBQUMsQ0FDL0QsQ0FBQztJQUNKLENBQUM7SUFhRCxNQUFNLENBQUMsUUFBUSxDQUNiLElBQXdCLEVBQ3hCLE1BQWUsRUFDZixRQUFpQixFQUNqQixRQUFpQixFQUNqQixPQUFnQixFQUNoQixPQUFnQixFQUNoQixRQUFpQixFQUNqQixRQUFpQjs7UUFFakIsTUFBTSxNQUFNLEdBQ1YsT0FBTyxJQUFJLEtBQUssUUFBUTtZQUN0QixDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQztnQkFDRSxHQUFHLEVBQUU7b0JBQ0gsR0FBRyxFQUFFLElBQUk7b0JBQ1QsR0FBRyxFQUFFLE1BQU07aUJBQ1o7Z0JBQ0QsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO2dCQUN2QyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7Z0JBQ3BDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTthQUN4QyxDQUFDO1FBRVIsT0FBTyx5Q0FBSyxDQUFDLEdBQUcsQ0FDZCxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFNLENBQUMsR0FBRywwQ0FBRSxHQUFHLG1DQUFJLENBQUMsRUFBRSxrQkFBTSxDQUFDLEdBQUcsMENBQUUsR0FBRyxtQ0FBSSxHQUFHLENBQUMsRUFDeEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBTSxDQUFDLEtBQUssMENBQUUsR0FBRyxtQ0FBSSxDQUFDLEVBQUUsa0JBQU0sQ0FBQyxLQUFLLDBDQUFFLEdBQUcsbUNBQUksR0FBRyxDQUFDLEVBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQU0sQ0FBQyxJQUFJLDBDQUFFLEdBQUcsbUNBQUksQ0FBQyxFQUFFLGtCQUFNLENBQUMsSUFBSSwwQ0FBRSxHQUFHLG1DQUFJLEdBQUcsQ0FBQyxFQUMxRCxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVM7WUFDeEIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxTQUFTO1lBQ1gsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLG1DQUFJLENBQUMsRUFBRSxZQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsbUNBQUksR0FBRyxDQUFDLENBQy9ELENBQUM7SUFDSixDQUFDO0lBSUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFZLEVBQUUsSUFBYTtRQUN0QyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqRSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFFLENBQWtCLEtBQVE7UUFDakMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQWM7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekorQjtBQUNNO0FBQ0E7QUFFL0IsTUFBTSxNQUFNO0lBTWpCLFlBQVksT0FBd0I7O1FBTHBDLHVCQUFRLG1EQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDdkIsd0JBQVMseUNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDdkIseUJBQVUsK0NBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQztRQUMxQixvQ0FBcUIsSUFBSSxHQUFHLEVBQXNDLEVBQUM7UUE0Qm5FLGlDQUFrQixHQUFHLEVBQUU7WUFDckIsMkJBQUksK0NBQWMsTUFBbEIsSUFBSSxDQUFnQixDQUFDO1FBQ3ZCLENBQUMsRUFBQztRQTNCQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsUUFBd0M7UUFDeEQsSUFBSSwyQkFBSSxpQ0FBbUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTztRQUVsRCxNQUFNLGNBQWMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMsMkJBQUksb0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QywyQkFBSSxzQkFBUSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRS9DLDJCQUFJLGlDQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG9CQUFvQixDQUFDLFFBQWdDO1FBQ25ELE1BQU0sTUFBTSxHQUFHLDJCQUFJLGlDQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRCxJQUFJLE1BQU0sS0FBSyxTQUFTO1lBQUUsT0FBTztRQUVqQywyQkFBSSxvQkFBTSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLDJCQUFJLHNCQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsMkJBQUksaUNBQW1CLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFZRCxJQUFJLElBQUk7UUFDTixPQUFPLDJCQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ1osSUFBSSwyQkFBSSxvQkFBTSxDQUFDLEtBQUssS0FBSyxLQUFLO1lBQUUsT0FBTztRQUV2QywyQkFBSSxvQkFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFekIsMkJBQUksK0NBQWMsTUFBbEIsSUFBSSxDQUFnQixDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLDJCQUFJLHFCQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUs7UUFDYixJQUFJLDJCQUFJLHFCQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFdEMsMkJBQUksaUJBQVUsS0FBSyxPQUFDO1FBRXBCLDJCQUFJLCtDQUFjLE1BQWxCLElBQUksQ0FBZ0IsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsT0FBTyxDQUNMLDRCQUFLLG9CQUFNLEtBQUssMkJBQUksb0JBQU07WUFDMUIsNEJBQUsscUJBQU8sQ0FBQyxNQUFNLENBQUMsMkJBQUkscUJBQU8sQ0FBQztZQUNoQyw0QkFBSyxzQkFBUSxDQUFDLE1BQU0sQ0FBQywyQkFBSSxzQkFBUSxDQUFDLENBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTywyQkFBSSxzQkFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ2QsSUFBSSwyQkFBSSxzQkFBUSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQzNCLDJCQUFJLHNCQUFRLENBQUMsb0JBQW9CLENBQUMsMkJBQUksOEJBQWdCLENBQUMsQ0FBQztZQUV4RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsMkJBQUksOEJBQWdCLENBQUMsQ0FBQztZQUU5QywyQkFBSSxrQkFBVyxLQUFLLE9BQUM7UUFDdkIsQ0FBQztRQUVELElBQUksQ0FBQywyQkFBSSxzQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hDLDJCQUFJLCtDQUFjLE1BQWxCLElBQUksQ0FBZ0IsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFpQztRQUN0QyxPQUFPLENBQUMsVUFBVSxHQUFHLDJCQUFJLG9CQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsMkJBQUkscUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxPQUFPLENBQUMsYUFBYSxHQUFHLDJCQUFJLHNCQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsMkJBQUksc0JBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGOztJQTdERyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksMkJBQUksaUNBQW1CLEVBQUUsQ0FBQztRQUNsRCxNQUFNLEVBQUUsQ0FBQztJQUNYLENBQUM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNJLE1BQU0sS0FBSztJQUloQixZQUFZLFlBQWU7UUFIM0IsMkJBQWEsSUFBSSxHQUFHLEVBQXFCLEVBQUM7UUFDMUMsK0JBQVU7UUFHUiwyQkFBSSxnQkFBVSxZQUFZLE9BQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBRUgsaUJBQWlCLENBQUMsUUFBMkI7UUFDM0MsMkJBQUksd0JBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUFJLHdCQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsb0JBQW9CLENBQUMsUUFBMkI7UUFDOUMsMkJBQUksd0JBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFakMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUFJLHdCQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRVMsWUFBWTtRQUNwQixLQUFLLE1BQU0sUUFBUSxJQUFJLDJCQUFJLHdCQUFXLEVBQUUsQ0FBQztZQUN2QyxRQUFRLENBQUMsMkJBQUksb0JBQU8sQ0FBQyxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFFSCxNQUFNLENBQUMsS0FBbUI7UUFDeEIsT0FBTywyQkFBSSxvQkFBTyxLQUFLLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUVILE9BQU8sQ0FBaUIsS0FBUSxFQUFFLGNBQWlDO1FBQ2pFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxLQUFLLEtBQUs7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFFakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEMsY0FBYyxDQUFDLDRCQUFLLG9CQUFPLENBQUMsQ0FBQztRQUU3QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUVILElBQUksS0FBSztRQUNQLE9BQU8sMkJBQUksb0JBQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsUUFBUTtRQUNoQixJQUFJLDJCQUFJLG9CQUFPLEtBQUssUUFBUTtZQUFFLE9BQU87UUFFckMsMkJBQUksZ0JBQVUsUUFBUSxPQUFDO1FBRXZCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUksTUFBUztJQUN0QyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlGTSxNQUFNLEtBQUs7O0FBQ1QsVUFBSSxHQUFHO0lBQ1osV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixNQUFNLEVBQUUsSUFBSTtJQUNaLEtBQUssRUFBRSxJQUFJO0lBQ1gsTUFBTSxFQUFFLElBQUk7SUFDWixNQUFNLEVBQUUsSUFBSTtJQUNaLHFCQUFxQixFQUFFLElBQUk7SUFDM0Isb0JBQW9CLEVBQUUsSUFBSTtDQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1htQjtBQUV6QixNQUFNLFlBQVk7SUFJdkIsWUFBWSxDQUFTLEVBQUUsQ0FBUztRQUhoQyxrQ0FBVztRQUNYLGtDQUFXO1FBR1QsMkJBQUksbUJBQU0sQ0FBQyxPQUFDO1FBQ1osMkJBQUksbUJBQU0sQ0FBQyxPQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQztRQUNILE9BQU8sMkJBQUksdUJBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSSxDQUFDLENBQUMsS0FBSztRQUNULDJCQUFJLG1CQUFNLEtBQUssT0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTywyQkFBSSx1QkFBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBQyxLQUFLO1FBQ1QsMkJBQUksbUJBQU0sS0FBSyxPQUFDO0lBQ2xCLENBQUM7Q0FDRjs7QUFFTSxNQUFNLFFBQVMsU0FBUSx5Q0FBbUI7SUFDL0MsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUlELE1BQU0sQ0FBQyxJQUF1QixFQUFFLElBQWE7UUFDM0MsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUN4RSxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHO1FBQ1IsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBSUQsS0FBSyxDQUFDLElBQXVCLEVBQUUsSUFBYTtRQUMxQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7WUFDMUIsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUlELElBQUksQ0FBQyxJQUF1QixFQUFFLElBQWE7UUFDekMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1lBQzFCLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxhQUFKLElBQUksY0FBSixJQUFJLEdBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3RCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEIsT0FBTyxHQUFHLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUM1QixPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDLENBQUMsS0FBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBRW5DLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUVyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFDLEtBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLO1lBQUUsT0FBTztRQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSTtRQUNULE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRzRCO0FBRXRCLE1BQU0sZ0JBQWlCLFNBQVEsc0ZBQW1DLENBQ3ZFLE9BQU8sQ0FDUjtDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BxRDtBQUl0QztBQUVaLE1BQU0sd0JBQXlCLFNBQVEsa0VBQWdCLENBQzVELDZFQUFtQyxDQUFDLEtBQUssQ0FBQyxDQUMzQztDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNkM7QUFDUTtBQUNGO0FBQ0g7QUFDUjtBQUVyQyxTQUFTLG1DQUFtQyxDQUVqRCxHQUFNOztJQUNOLFlBQU8sTUFBTSxrQkFBa0I7WUFHN0IsWUFBWSxHQUFHLElBQVc7Z0JBRjFCLDhDQUFtQztnQkFHakMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFNUMsMkJBQUksK0JBQVksT0FBTyxPQUFDO1lBQzFCLENBQUM7WUFFRCxRQUFRLENBQUMsT0FBd0M7Z0JBQy9DLE1BQU0sZ0JBQWdCLEdBQUcsNkRBQW1CLENBQzFDLGlFQUFxQixFQUNyQixPQUFPLENBQ1IsQ0FBQztnQkFFRixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUUzQyxPQUFPLGdCQUFnQixDQUFDO1lBQzFCLENBQUM7WUFFRCxrQkFBa0IsQ0FJaEIsa0JBQXFCLEVBQ3JCLE9BQTREO2dCQUU1RCxNQUFNLFVBQVUsR0FBRyx1QkFBdUIsQ0FBTyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUVyRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRTdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUVuQyxPQUFPLFVBQVUsQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBSSxPQUFPO2dCQUNULE9BQU8sMkJBQUksbUNBQVMsQ0FBQztZQUN2QixDQUFDO1lBRUQsSUFBSSxLQUFLO2dCQUNQLE9BQU8sMkJBQUksbUNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDN0IsQ0FBQztZQUVELElBQUksS0FBSyxDQUFDLFdBQWdDO2dCQUN4QyxNQUFNLENBQUMsTUFBTSxDQUFDLDJCQUFJLG1DQUFTLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCxHQUFHLENBQUMsT0FBbUM7Z0JBQ3JDLE1BQU0sZ0JBQWdCLEdBQUcsNkRBQW1CLENBQUMsNERBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXhFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBRTNDLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsQ0FBQztTQUNGOztXQUFDO0FBQ0osQ0FBQztBQXdCRCxNQUFNLG1CQUFtQixHQUFHLENBQzFCLEtBQWUsRUFDZixjQUFxQyxFQUNuQixFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBRTVDLFNBQVMsdUJBQXVCLENBR3JDLGtCQUFxQjtJQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFFekMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUU1QixNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBbUMsQ0FBQztJQUU1RCxTQUFTLGFBQWEsQ0FBQyxPQUE2QixFQUFFLEdBQUcsTUFBYTtRQUNwRSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFL0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU5QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFNUIsSUFBSSxLQUFLLFlBQVksaURBQUssRUFBRSxDQUFDO29CQUMzQixJQUFJLGVBQWUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTVDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBRXJDLE1BQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUM1RCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFFbkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBRS9DLGVBQWUsR0FBRyxPQUFPLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUVILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7cUJBQU0sQ0FBQztvQkFDTixNQUFNLFlBQVksR0FBRyxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUVyRSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1FBQzFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVztZQUNoQixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUV2RCxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxPQUFPLFlBQVksS0FBSyxVQUFVO29CQUNwQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXBDLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUV2RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFVBQVU7Z0JBQUUsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFFLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLO1lBQ3ZCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVuRCxJQUFJLGdCQUFnQixLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUNuQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQ3pDLGdCQUFnQixDQUFDLGNBQWMsQ0FDaEMsQ0FBQztZQUNKLENBQUM7WUFFRCxJQUFJLFdBQVcsSUFBSSxPQUFPLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxLQUFLLFlBQVksaURBQUssRUFBRSxDQUFDO29CQUMzQixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzlDLENBQUMsQ0FBQyxDQUFDO29CQUVILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFekQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFFNUMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCxJQUFJLEtBQUssWUFBWSxpREFBSyxFQUFFLENBQUM7Z0JBQzNCLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUV6RCxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUU1QyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FDRixDQUE4QyxDQUFDO0lBRWhELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUk7SUFDbkQsSUFBSSxVQUFVLEtBQUssU0FBUztRQUMxQixNQUFNLElBQUksS0FBSyxDQUNiLDhJQUE4SSxDQUMvSSxDQUFDO0lBRUosTUFBTSxjQUFjLEdBQUcsdUJBQXVCLENBQUMsZ0VBQXdCLENBQUMsQ0FBQztJQUV6RSxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUvQyxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xOd0Q7QUFJdEM7QUFFWixNQUFNLHdCQUF5QixTQUFRLGtFQUFnQixDQUM1RCw2RUFBbUMsQ0FBQyxHQUFHLENBQUMsQ0FDekM7Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFJdEM7QUFFWixNQUFNLG1CQUFvQixTQUFRLGtFQUFnQixDQUN2RCw2RUFBbUMsQ0FBQyxNQUFNLENBQUMsQ0FDNUM7Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSd0Q7QUFFckQsTUFBTSxpQkFBa0IsU0FBUSxXQUFXO0lBSWhELFlBQVksR0FBRyxJQUFXO1FBQ3hCLEtBQUssRUFBRSxDQUFDO1FBOENWLDRDQUFrQixJQUFJLEdBQUcsRUFBNEMsRUFBQztRQUV0RSxpREFBK0I7UUE5QzdCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQztRQUVyQiwyQkFBSSxrQ0FBZ0IsSUFBSSxLQUFLLENBQUMsRUFBc0IsRUFBRTtZQUNwRCxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQW9DO2dCQUN6QyxPQUFPLDhCQUFPLHlDQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQ0QsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFvQyxFQUFFLFFBQVE7Z0JBQ25ELE1BQU0sZUFBZSxHQUFHLDhCQUFPLHlDQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFL0QsSUFBSSxlQUFlLEtBQUssUUFBUTtvQkFBRSxPQUFPLElBQUksQ0FBQztnQkFFOUMsSUFBSSxlQUFlLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBRUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFOUMsOEJBQU8seUNBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFakQsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxPQUFDO0lBQ0wsQ0FBQztJQUVELHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUIsSUFDdEIsQ0FBQztJQUVKOztPQUVHO0lBQ0gsV0FBVyxDQUNULFlBQWUsRUFDZixPQUFrQztRQUVsQyxNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBTUQsSUFBSSxNQUFNO1FBQ1IsT0FBTywyQkFBSSxzQ0FBaUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsR0FBRztRQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsMkJBQUksc0NBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sMkJBQUksc0NBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFFSCxjQUFjLENBQ1osWUFBZSxFQUNmLFFBQWlCO1FBRWpCLE1BQU0sYUFBYSxHQUFHLHdFQUFnQixDQUFDLFlBQXNCLENBQUMsQ0FBQztRQUUvRCxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFL0QsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLElBQUkscUJBQXFCLEtBQUssV0FBVztZQUFFLE9BQU87UUFFbEQsSUFBSSxRQUFRLEtBQUssSUFBSTtZQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7O1lBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztBQXpGTSxvQ0FBa0IsR0FBYSxFQUFFLENBQUM7QUE0RnBDLFNBQVMsbUJBQW1CLENBQ2pDLFlBQWUsRUFDZixPQUFrQztJQUVsQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQW9CLENBQUM7SUFFNUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFaEMsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdpRDtBQUNOO0FBQ0k7QUFDSztBQU1yQjtBQUNpQztBQUVqRSxTQUFTLGdCQUFnQixDQUEwQyxJQUFPOztJQUN4RSxZQUFPLEtBQU0sU0FBUSxxREFBSyxDQUFDLElBQUksQ0FBQztZQUF6Qjs7Z0JBT0wsb0JBQVksdURBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQztnQkFDNUIsb0JBQVksdURBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQztZQXVEOUIsQ0FBQztZQXJEQzs7Ozs7ZUFLRztZQUNILElBQUksUUFBUTtnQkFDVixPQUFPLDJCQUFJLGlCQUFVLENBQUM7WUFDeEIsQ0FBQztZQUVELElBQUksUUFBUSxDQUFDLEtBQUs7Z0JBQ2hCLElBQUksMkJBQUksaUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBRXpDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsMkJBQUksYUFBYSxLQUFLLE9BQUMsQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFFRDs7Ozs7ZUFLRztZQUNILElBQUksUUFBUTtnQkFDVixPQUFPLDJCQUFJLGlCQUFVLENBQUM7WUFDeEIsQ0FBQztZQUVELElBQUksUUFBUSxDQUFDLEtBQUs7Z0JBQ2hCLElBQUksMkJBQUksaUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBRXpDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsMkJBQUksYUFBYSxLQUFLLE9BQUMsQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFFRCx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO2dCQUV2QixJQUFJLFFBQVEsS0FBSyxJQUFJO29CQUNuQixPQUFPLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUVsRSxRQUFRLElBQUksRUFBRSxDQUFDO29CQUNiLEtBQUssV0FBVzt3QkFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLHNFQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRCxPQUFPO29CQUVULEtBQUssV0FBVzt3QkFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLHNFQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRCxPQUFPO29CQUVUO3dCQUNFLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7WUFDSCxDQUFDO1NBQ0Y7OztRQTlEUSxxQkFBa0IsR0FBRztZQUMxQixHQUFHLElBQUksQ0FBQyxrQkFBa0I7WUFDMUIsV0FBVztZQUNYLFdBQVc7U0FDWDtXQTBERjtBQUNKLENBQUM7QUFFTSxNQUFNLG1CQUFvQixTQUFRLGdCQUFnQixDQUN2RCxzRUFBdUIsQ0FDeEI7SUFDQyxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sa0JBQTJCLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUErQjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZCLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUV4QyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDNUIsUUFBUSxDQUFDLENBQUMsRUFDVixRQUFRLENBQUMsQ0FBQyxFQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsUUFBUSxDQUFDLENBQUMsRUFDVixFQUFFLENBQUMsQ0FBQyxFQUNKLEVBQUUsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sY0FBZSxTQUFRLHFEQUFPLENBQ3pDLHlEQUFTLENBQUMsdURBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyx1RUFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FDL0Q7SUFDQyxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBK0I7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QixNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRTlDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUM1QixRQUFRLENBQUMsQ0FBQyxFQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsUUFBUSxDQUFDLENBQUMsRUFDVixRQUFRLENBQUMsQ0FBQyxFQUNWLEVBQUUsQ0FBQyxDQUFDLEVBQ0osRUFBRSxDQUFDLENBQUMsQ0FDTCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklGO0FBQ0g7QUFDRTtBQUUxQyxNQUFNLE9BQVEsU0FBUSx1REFBaUI7SUFBOUM7O1FBTUUsOEJBQThCLElBQUksRUFBQztJQTZDckMsQ0FBQztJQTNDQzs7O09BR0c7SUFDSCxJQUFJLE1BQU07UUFDUixNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRS9CLElBQUksYUFBYSxLQUFLLElBQUksSUFBSSxhQUFhLFlBQVksT0FBTyxLQUFLLEtBQUs7WUFDdEUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1FBRTVFLElBQUksYUFBYSxZQUFZLDBEQUFxQjtZQUFFLE9BQU8sYUFBYSxDQUFDO1FBRXpFLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxVQUFVO1FBQ1osT0FBTywyQkFBSSwyQkFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxPQUFPO1FBQ3BCLDJCQUFJLHVCQUFlLE9BQU8sT0FBQztJQUM3QixDQUFDO0lBSUQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQixDQUFDLE1BQWdCO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUNwRSxJQUFJLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUMxRCxDQUFDO1FBRUYsT0FBTyx1REFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEaUQ7QUFDQztBQUNNO0FBQ047QUFDVztBQUNHO0FBQzdCO0FBQ2tCO0FBSS9DLE1BQU0scUJBQXNCLFNBQVEsdUVBQXFCLENBQUMsNkNBQU8sQ0FBQztJQVF2RSxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFrQkQ7UUFDRSxLQUFLLEVBQUUsQ0FBQzs7UUFqQlYsMkNBQWEsS0FBSyxFQUFDO1FBQ25CLDRDQUF5QixNQUFNLEVBQUM7UUFDaEMsc0RBQTRCO1FBQzVCLGlEQUFtQztRQUNuQywyQ0FBcUIsQ0FBQyxFQUFDO1FBQ3ZCLDBEQUEwQjtRQUMxQix1Q0FBUyxDQUFDLEVBQUM7UUFDWCxpREFBbUIsSUFBSSw4REFBZSxFQUFFLEVBQUM7UUFDekMsK0NBQWlCLENBQUMsQ0FBQyxFQUFDO1FBQ3BCLHNEQUE0QjtRQUM1Qiw4Q0FBZ0IsSUFBSSxHQUFHLEVBQWUsRUFBQztRQUN2Qyw4Q0FBZ0IsSUFBSSxHQUFHLEVBQTZCLEVBQUM7UUFDckQsOENBQWdCLEtBQUssRUFBQztRQUN0QiwwQ0FBMkIsSUFBSSxFQUFDO1FBQ2hDLHlDQUFXLElBQUksR0FBRyxFQUFXLEVBQUM7UUFLNUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRXZELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvQixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhDLElBQUksT0FBTyxLQUFLLElBQUk7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXRELDJCQUFJLGtDQUFZLE9BQU8sT0FBQztRQUV4QiwyQkFBSSx1Q0FBaUIsSUFBSSx3REFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBQztRQUV0RCwyQkFBSSx1Q0FBaUIsSUFBSSx3REFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBQztRQUV0RCwyQkFBSSwyQ0FBcUIsTUFBTSxDQUFDLGdCQUFnQixPQUFDO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQixDQUNkLElBQVksRUFDWixRQUE0QyxFQUM1QyxPQUF1RDtRQUV2RCxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ2IsS0FBSyxTQUFTLENBQUM7WUFDZixLQUFLLE9BQU87Z0JBQ1YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2pELE1BQU07WUFDUjtnQkFDRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksS0FBSzs7UUFDUDs7OztVQUlFO1FBQ0YsT0FBTyxpQ0FBSSx1Q0FBVSxtQ0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxjQUFjLENBQ2pCLE9BQU8sRUFDUCxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUFJLG1DQUFhLEtBQUssT0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxTQUFTO1FBQ1gsT0FBTywyQkFBSSx3Q0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO1FBRXZCLElBQUksUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3RCLFFBQVEsSUFBSSxFQUFFLENBQUM7Z0JBQ2IsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsc0VBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlDLE1BQU07Z0JBRVIsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsc0VBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzlDLE1BQU07Z0JBRVIsS0FBSyxRQUFRO29CQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsc0VBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9DLE1BQU07Z0JBRVIsS0FBSyxZQUFZO29CQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsc0VBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xELE1BQU07WUFDVixDQUFDO1FBQ0gsQ0FBQztRQUVELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQUksVUFBVTtRQUNaLE9BQU8sMkJBQUkseUNBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBSztRQUNsQixJQUFJLDJCQUFJLHlDQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUFFLE9BQU87UUFFN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQywyQkFBSSxxQ0FBZSxLQUFLLE9BQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sdURBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLE1BQU0sQ0FBQyxnQkFBZ0IsT0FBTyxDQUFDO1FBRXZFLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFakQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSwyQkFBSSw0RUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRS9ELDJCQUFJLDRFQUFhLE1BQWpCLElBQUksQ0FBZSxDQUFDO1FBRXBCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU3RDs7OztVQUlFO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXLENBQ1QsWUFBZSxFQUNmLE9BQXlEO1FBRXpELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLDJCQUFJLDhDQUFpQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTywyQkFBSSxzQ0FBUyxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTywyQkFBSSwyQ0FBYyxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTywyQkFBSSwyQ0FBYyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLDJCQUFJLHNDQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxTQUFTO1FBQ1gsT0FBTywyQkFBSSx3Q0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLE9BQXVCO1FBQ3BDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBRTNCLElBQUksT0FBTyxLQUFLLElBQUk7WUFBRSxPQUFPO1FBRTdCLDJCQUFJLG9DQUFjLElBQUksT0FBQztRQUV2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sMkJBQUksb0NBQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQUcsSUFBNEM7UUFDckQsT0FBTywyQkFBSSw4Q0FBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsR0FBRyxJQUFzRDtRQUN6RSxPQUFPLDJCQUFJLDhDQUFpQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sMkJBQUksOENBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLDJCQUFJLDJDQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFrQjtRQUM3QiwyQkFBSSwyQ0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLDJCQUFJLDJDQUFjLElBQUksMkJBQUksc0NBQVMsQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVyRCwyQkFBSSx1Q0FBaUIsSUFBSSxPQUFDO1FBRTFCLHFCQUFxQixDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0IsMkJBQUksb0NBQWMsSUFBSSxHQUFHLDJCQUFJLDRDQUFlLE9BQUM7WUFFN0MsMkJBQUksd0NBQWtCLElBQUksT0FBQztZQUUzQiwyQkFBSSx1RUFBUSxNQUFaLElBQUksQ0FBVSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztJQUNqRCxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBSztRQUNiLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUVwQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxnQkFBZ0I7WUFBRSxPQUFPO1FBRTlELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUVoRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQztRQUUxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ2QsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRXBDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGdCQUFnQjtZQUFFLE9BQU87UUFFL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1FBRWpELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO1FBRTNDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxjQUFjLENBQ1osWUFBZSxFQUNmLFFBQWlCO1FBRWpCLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBZ0VELFFBQVEsQ0FBQyxTQUFvQztRQUMzQyxJQUFJLDJCQUFJLDJDQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUFFLE9BQU87UUFFOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV4RSwyQkFBSSwyQ0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBZUQsT0FBTyxDQUFDLE9BQWdCLEVBQUUsWUFBdUMsTUFBTTtRQUNyRSwyQkFBSSxzQ0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtZQUN2QywyQkFBSSxzQ0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5QixJQUFJLDJCQUFJLHNDQUFTLENBQUMsSUFBSSxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUExRkMsSUFBSSwyQkFBSSxzQ0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLDJCQUFJLHVDQUFpQixLQUFLLE9BQUM7UUFDM0IsT0FBTztJQUNULENBQUM7SUFFRCxPQUFPLDJCQUFJLDJDQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsTUFBTSxJQUFJLEdBQUcsMkJBQUksMkNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVoRCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUztZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFFdEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDJCQUFJLDJDQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRywyQkFBSSxzQ0FBUyxDQUFDO0lBRTlCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVmLFVBQUksQ0FBQyxVQUFVLHFEQUFHLDJCQUFJLG9DQUFPLENBQUMsQ0FBQztJQUUvQiwyQkFBSSx1Q0FBaUIsS0FBSyxPQUFDO0lBRTNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUVsRCxJQUFJLDJCQUFJLHlDQUFZLEtBQUssTUFBTSxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWYsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEIsT0FBTyxDQUFDLFNBQVMsR0FBRywyQkFBSSx5Q0FBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhELE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVwQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEtBQUssWUFBWSwrREFBc0IsRUFBRSxDQUFDO1lBQzVDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFbEIsMkJBQUksMkNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVsQywyQkFBSSw4Q0FBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVyQywyQkFBSSwyQ0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWxDLGdJQUFXLEVBQVgsSUFBYSxZQUFDO0lBRWQsSUFBSSwyQkFBSSx3Q0FBVztRQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMxQyxDQUFDO0lBV0MsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUVuRCxNQUFNLFVBQVUsR0FBRyxhQUFhLEdBQUcsMkJBQUksK0NBQWtCLENBQUM7SUFFMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDO0lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQztJQUVwQywyQkFBSSwyQ0FBcUIsYUFBYSxPQUFDO0lBRXZDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBM1lNLHdDQUFrQixHQUFhO0lBQ3BDLEdBQUcsNkNBQU8sQ0FBQyxrQkFBa0I7SUFDN0IsT0FBTztJQUNQLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtDQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ3QztBQUVBO0FBQ3NCO0FBQ2xCO0FBS2hCO0FBR2hDLFNBQVMsYUFBYSxDQUEyQixJQUFPOztJQUN0RCxZQUFPLEtBQU0sU0FBUSwyRUFBa0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1lBSXJELFlBQVksR0FBRyxJQUFXO2dCQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFKakIsc0JBQWMsaURBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQztnQkFDM0Isb0JBQVksaURBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBQztnQkFLckMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDMUIsQ0FBQztZQUVELE1BQU0sQ0FBQyxRQUErQjtnQkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztnQkFFakQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQ3RCLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsUUFBUSxDQUFDLENBQUMsRUFDVixLQUFLLEdBQUcsQ0FBQyxFQUNULE1BQU0sR0FBRyxDQUFDLEVBQ1YsQ0FBQyxFQUNELDJCQUFJLG1CQUFZLENBQUMsT0FBTyxFQUN4QiwyQkFBSSxpQkFBVSxDQUFDLE9BQU8sQ0FDdkIsQ0FBQztnQkFFRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFFRCxvQkFBb0IsQ0FDbEIsT0FBaUMsRUFDakMsUUFBd0I7Z0JBRXhCLE1BQU0sRUFDSixNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ2hCLEtBQUssRUFDTCxNQUFNLEdBQ1AsR0FBRyxJQUFJLENBQUM7Z0JBRVQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUzQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUVELElBQUksVUFBVTtnQkFDWixPQUFPLDJCQUFJLG1CQUFZLENBQUM7WUFDMUIsQ0FBQztZQUVELElBQUksVUFBVSxDQUFDLEtBQUs7Z0JBQ2xCLElBQUksMkJBQUksbUJBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBRTNDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsMkJBQUksZUFBZSxLQUFLLE9BQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFFRCxJQUFJLFFBQVE7Z0JBQ1YsT0FBTywyQkFBSSxpQkFBVSxDQUFDO1lBQ3hCLENBQUM7WUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLO2dCQUNoQixJQUFJLDJCQUFJLGlCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUV6QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLDJCQUFJLGFBQWEsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0Y7OztXQUFDO0FBQ0osQ0FBQztBQUVNLE1BQU0sZUFBZ0IsU0FBUSxhQUFhLENBQ2hELHlEQUFTLENBQUMscURBQU8sQ0FBQyx1RUFBd0IsQ0FBQyxDQUFDLENBQzdDO0lBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUUvQyxNQUFNLG9CQUFxQixTQUFRLGFBQWEsQ0FDckQsc0VBQXVCLENBQ3hCO0lBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0M7QUFDSjtBQUV2RCxNQUFNLGFBQWMsU0FBUSx1RUFBa0IsQ0FDbkQsdUVBQXdCLEVBQ3hCLEtBQUssQ0FDTjtJQUNDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDRjtBQUNLO0FBVXJCO0FBRXpCLE1BQU0saUJBQWtCLFNBQVEscURBQUssQ0FBQyxzRUFBdUIsQ0FBQztJQUNuRSxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUErQjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFFcEQsTUFBTSxZQUFhLFNBQVEseURBQVMsQ0FDekMscURBQUssQ0FBQyx1REFBTyxDQUFDLHVFQUF3QixDQUFDLENBQUMsQ0FDekM7SUFDQyxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV2QyxPQUFPLHVEQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBK0I7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QixNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUUxQixRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQkFBcUIsQ0FDbkIsT0FBaUMsRUFDakMsUUFBeUI7UUFFekIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG9CQUFvQixDQUNsQixPQUFpQyxFQUNqQyxRQUF3QjtRQUV4QixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxvQkFBb0IsQ0FDbEIsT0FBaUMsRUFDakMsUUFBd0I7UUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU3QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRlU7QUFNTjtBQUNJO0FBQ0g7QUFJZjtBQUNxQjtBQU0zQjtBQUNpQztBQUVqQjtBQUVoRCxTQUFTLHFCQUFxQixDQUEyQixJQUFPOztJQUM5RCxZQUFPLE1BQU0sU0FBVSxTQUFRLDJFQUFrQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7WUFBM0Q7O2dCQU1MLGtDQUFxQyxJQUFJLEVBQUM7Z0JBaUIxQyxnREFBOEIsR0FBRyxFQUFFO29CQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSwyQkFBSSwrQkFBYyxDQUFDLENBQUM7Z0JBQzFELENBQUMsRUFBQztZQTZFSixDQUFDO1lBOUZDLHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUI7O2dCQUV2QixJQUFJLElBQUksS0FBSyxlQUFlLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxRQUFRLEtBQUssSUFBSTt3QkFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt5QkFDM0MsSUFBSSxRQUFRLE1BQUssVUFBSSxDQUFDLFlBQVksMENBQUUsUUFBUSxFQUFFO3dCQUFFLE9BQU87O3dCQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLHNFQUFlLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRSxPQUFPO2dCQUNULENBQUM7Z0JBRUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0QsQ0FBQztZQUtEOztlQUVHO1lBQ0gsSUFBSSxZQUFZO2dCQUNkLE9BQU8sMkJBQUksK0JBQWMsQ0FBQztZQUM1QixDQUFDO1lBRUQsSUFBSSxZQUFZLENBQUMsS0FBbUM7Z0JBQ2xELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFFOUMsSUFBSSxLQUFLLEtBQUssbUJBQW1CO29CQUFFLE9BQU87Z0JBQzFDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNuQixJQUFJLG1CQUFtQixLQUFLLElBQUk7d0JBQUUsT0FBTztvQkFDekMsbUJBQW1CLENBQUMsb0JBQW9CLENBQ3RDLDJCQUFJLDZDQUE0QixDQUNqQyxDQUFDO29CQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsMkJBQUksMkJBQWlCLEtBQUssT0FBQyxDQUFDLENBQUM7b0JBRWxFLE9BQU87Z0JBQ1QsQ0FBQztnQkFDRCxNQUFNLGVBQWUsR0FDbkIsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLCtEQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFFOUQsSUFBSSxtQkFBbUIsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDakMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLDJCQUFJLDZDQUE0QixDQUFDLENBQUM7b0JBRXBFLElBQUksQ0FBQyxjQUFjLENBQ2pCLGNBQWMsRUFDZCxDQUFDLDJCQUFJLDJCQUFpQixlQUFlLE9BQUMsQ0FDdkMsQ0FBQztvQkFFRixPQUFPO2dCQUNULENBQUM7Z0JBRUQsMkJBQUksMkJBQWlCLGVBQWUsT0FBQztnQkFFckMsbUJBQW1CLENBQUMsT0FBTyxDQUN6QixlQUFlLEVBQ2YsMkJBQUksNkNBQTRCLENBQ2pDLENBQUM7WUFDSixDQUFDO1lBRUQsTUFBTSxDQUFDLFFBQStCO2dCQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV2QixNQUFNLEVBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUNqQixLQUFLLEVBQ0wsTUFBTSxHQUNQLEdBQUcsSUFBSSxDQUFDO2dCQUVULElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJO29CQUM1QixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzs7b0JBRTNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUN4QixDQUFDLEVBQ0QsQ0FBQyxFQUNELEtBQUssRUFDTCxNQUFNLEVBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FDNUIsQ0FBQztnQkFFSixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFFRCxvQkFBb0IsQ0FDbEIsT0FBaUMsRUFDakMsUUFBd0I7Z0JBRXhCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVyRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRTdCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNoRCxDQUFDO1NBQ0Y7OztRQXJHUSxxQkFBa0IsR0FBRztZQUMxQixHQUFHLDJFQUFrQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxrQkFBa0I7WUFDekQsZUFBZTtTQUNmO1dBa0dGO0FBQ0osQ0FBQztBQUVNLE1BQU0saUJBQWtCLFNBQVEscUJBQXFCLENBQzFELHlEQUFTLENBQUMscURBQU8sQ0FBQyx1RUFBd0IsQ0FBQyxDQUFDLENBQzdDO0lBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sc0JBQXVCLFNBQVEscUJBQXFCLENBQy9ELHNFQUF1QixDQUN4QjtJQUNDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFFOUQsTUFBTSxzQkFBdUIsU0FBUSx5REFBUyxDQUNuRCxxREFBTyxDQUNMLGlFQUFhLENBQ1gsK0RBQVksQ0FDViwyRUFBa0IsQ0FDaEIsNkRBQVcsQ0FBQyw2REFBbUIsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUMsRUFDekQsU0FBUyxDQUNWLENBQ0YsQ0FDRixDQUNGLENBQ0Y7SUFDQyxJQUFJLE1BQU07UUFDUixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQUs7UUFDZCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0S2Y7QUFFZ0M7QUFFNUM7QUFHN0IsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFPNUQsTUFBTSxzQkFBdUIsU0FBUSw2Q0FBTztJQVNqRCxZQUFZLEdBQUcsSUFBVztRQUN4QixLQUFLLEVBQUUsQ0FBQzs7UUFUVixxREFBc0IsS0FBSyxFQUFDO1FBQzVCLGlEQUFrQixJQUFJLEdBQUcsRUFBK0IsRUFBQztRQUN6RCw2Q0FBYyxJQUFJLHFEQUFTLEVBQUUsRUFBQztRQUM5QixpREFBa0IsSUFBSSxHQUFHLEVBQW1DLEVBQUM7UUFDN0QseUNBQXlCLElBQUksRUFBQztRQUM5Qiw0Q0FBYSxLQUFLLEVBQUM7UUFDbkIsdURBQW9ELEVBQUUsRUFBQztRQXFRdkQsdURBQWdELENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQywyQkFBSSxrQ0FBVyxRQUFRLE9BQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBQztJQW5RRixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsMkJBQUkscUNBQWMsSUFBSSxPQUFDO1FBRXZCLE9BQU8sMkJBQUksb0RBQXNCLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsTUFBTSxhQUFhLEdBQUcsMkJBQUksb0RBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFekQsSUFBSSxhQUFhLEtBQUssU0FBUztnQkFBRSxNQUFNO1lBRXZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQ2QsSUFBTyxFQUNQLFFBQStCLEVBQy9CLE9BQTJDO1FBRTNDLElBQUksQ0FBQywyQkFBSSx5Q0FBVyxFQUFFLENBQUM7WUFDckIsMkJBQUksb0RBQXNCLENBQUMsSUFBSSxDQUFDO2dCQUM5QixTQUFTLEVBQUUsSUFBSTtnQkFDZixRQUFRO2FBQ1QsQ0FBQyxDQUFDO1lBRUgsT0FBTztRQUNULENBQUM7UUFFRCxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ2IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQiwyQkFBSSw4Q0FBZ0IsQ0FBQyxHQUFHLENBQUMsUUFBdUMsQ0FBQyxDQUFDO2dCQUNsRSxNQUFNO1lBRVIsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxTQUFTLENBQUM7WUFDZixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLDJCQUFJLDhDQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUEyQyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU07WUFFUixLQUFLLFlBQVksQ0FBQztZQUNsQixLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2xDLDJCQUFJLDhDQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUEyQyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU07UUFDVixDQUFDO1FBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVcsQ0FDVCxZQUFlLEVBQ2YsT0FBeUQ7UUFFekQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILHFCQUFxQixDQUNuQixPQUFpQyxFQUNqQyxRQUF5QjtRQUV6QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CLENBQ2xCLE9BQWlDLEVBQ2pDLFFBQXdCO1FBRXhCLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQixDQUNsQixPQUFpQyxFQUNqQyxRQUF3QjtRQUV4QixNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQkFBbUIsQ0FDakIsSUFBTyxFQUNQLFFBQStCLEVBQy9CLE9BQTJDO1FBRTNDLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFDYixLQUFLLE9BQU87Z0JBQ1YsMkJBQUksOENBQWdCLENBQUMsTUFBTSxDQUFDLFFBQXVDLENBQUMsQ0FBQztnQkFDckUsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxZQUFZLENBQUM7WUFDbEIsS0FBSyxVQUFVLENBQUM7WUFDaEIsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxXQUFXO2dCQUNkLDJCQUFJLDhDQUFnQixDQUFDLE1BQU0sQ0FDekIsUUFBMkMsQ0FDNUMsQ0FBQztnQkFDRixNQUFNO1FBQ1YsQ0FBQztRQUVELEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sMkJBQUksa0RBQW9CLENBQUM7SUFDbEMsQ0FBQztJQXNFRDs7T0FFRztJQUNILGNBQWMsQ0FDWixZQUFlLEVBQ2YsUUFBaUI7UUFFakIsSUFBSSxDQUFDLDJCQUFJLGtEQUFvQixFQUFFLENBQUM7WUFDOUIsMkJBQUksOENBQXVCLElBQUksT0FBQztZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsUUFBK0I7O1FBQ3BDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBRXBDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVmLFVBQUksQ0FBQyxVQUFVLHFEQUFHLEtBQUssQ0FBQyxDQUFDO1FBRXpCLElBQUksMkJBQUksc0NBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQiwyQkFBSSxzQ0FBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLFFBQStCO1FBQzVDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLElBQUksS0FBSyxZQUFZLHNCQUFzQjtnQkFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFFSCxXQUFXLENBQUMsUUFBK0I7UUFDekMsMkJBQUksOENBQXVCLEtBQUssT0FBQztRQUVqQyxJQUFJLDJCQUFJLDhDQUFnQixDQUFDLElBQUk7WUFBRSwyQkFBSSw4RUFBYSxNQUFqQixJQUFJLEVBQWMsUUFBUSxDQUFDLENBQUM7UUFFM0QsSUFBSSwyQkFBSSw4Q0FBZ0IsQ0FBQyxJQUFJO1lBQUUsMkJBQUksOEVBQWEsTUFBakIsSUFBSSxFQUFjLFFBQVEsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBTUQ7O09BRUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLDJCQUFJLHNDQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQUs7UUFDZCxJQUFJLDJCQUFJLHNDQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxLQUFLLEtBQUssSUFBSTtnQkFBRSxPQUFPO1lBRTNCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQywyQkFBSSxvREFBc0IsQ0FBQyxDQUFDO1lBRXBELDJCQUFJLG9EQUFzQixNQUExQixJQUFJLEVBQXVCLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE9BQU87UUFDVCxDQUFDO2FBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDMUIsMkJBQUksc0NBQVEsQ0FBQyxvQkFBb0IsQ0FBQywyQkFBSSxvREFBc0IsQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXJDLE9BQU87UUFDVCxDQUFDO1FBRUQsMkJBQUksc0NBQVEsQ0FBQyxvQkFBb0IsQ0FBQywyQkFBSSxvREFBc0IsQ0FBQyxDQUFDO1FBRTlELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQywyQkFBSSxvREFBc0IsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQywyQkFBSSxzQ0FBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFBRSwyQkFBSSxvREFBc0IsTUFBMUIsSUFBSSxFQUF1QixLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7cWtCQTVKYyxRQUErQjtJQUMxQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBRWxFLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVyQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFekQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRSxJQUFJLE1BQU07UUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQyxxRkFFWSxRQUErQjtJQUMxQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUVwQywyQkFBSSwwQ0FBWSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO0lBRWhELDJCQUFJLDBDQUFZLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7SUFFaEQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FDbEMsMkJBQUksMENBQVksQ0FBQyxDQUFDLEVBQ2xCLDJCQUFJLDBDQUFZLENBQUMsQ0FBQyxDQUNuQixDQUFDO0lBRUYsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1osSUFBSSwyQkFBSSwwQ0FBWSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFFL0MsMkJBQUksMENBQVksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxPQUFPO0lBQ1QsQ0FBQztJQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUVoRCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFN0MsSUFDRSwyQkFBSSwwQ0FBWSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxnQkFBZ0I7UUFDMUQsMkJBQUksMENBQVksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCO1FBRTFELElBQUksQ0FBQyxhQUFhLENBQ2hCLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRTtZQUMxQixTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUMsQ0FDSCxDQUFDO0lBRUosSUFBSSxDQUFDLDJCQUFJLDBDQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRWpELDJCQUFJLDBDQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUNoRSxJQUFJLFdBQVcsS0FBSywyQkFBSSwwQ0FBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3pELElBQUksV0FBVztnQkFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2dCQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdEUsMkJBQUksMENBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQTRGSSxNQUFNLDRCQUE2QixTQUFRLHVFQUFxQixDQUNyRSxzQkFBc0IsQ0FDdkI7SUFDQyxNQUFNLENBQUMsUUFBK0I7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QixRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQUVNLE1BQU0sMkJBQTRCLFNBQVEsa0VBQWdCLENBQy9ELHNCQUFzQixDQUN2QjtDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlVd0M7QUFDQztBQUNHO0FBQ2lCO0FBQ0E7QUFHMUQsTUFBTSxhQUFjLFNBQVEsMkRBQU8sQ0FDeEMseURBQVMsQ0FBQyxzREFBTSxDQUFDLHNFQUF1QixDQUFDLENBQUMsQ0FDM0M7SUFGRDs7UUFHRSwrQkFBUyxLQUFLLEVBQUM7SUFpRGpCLENBQUM7SUE3Q0MsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtRQUV2QixJQUFJLElBQUksS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLFFBQVEsS0FBSyxJQUFJO2dCQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztnQkFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxzRUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBRUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sMkJBQUksNEJBQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBSztRQUNiLElBQUksMkJBQUksNEJBQU8sS0FBSyxLQUFLO1lBQUUsT0FBTztRQUVsQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLDJCQUFJLHdCQUFVLEtBQUssT0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUErQjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFFN0IsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXBCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9CLElBQUksMkJBQUksNEJBQU87WUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQscURBQXFEO0lBQ3JELGNBQWMsQ0FBQyxRQUErQixJQUFTLENBQUM7OztBQTlDakQsZ0NBQWtCLEdBQUcsQ0FBQyxHQUFHLHlDQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBaURyRSxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdESDtBQUNIO0FBRXJDLFNBQVMsbUJBQW1CLENBQ2pDLE1BQVMsRUFDVCxhQUFxQjs7SUFFckIsWUFBTyxNQUFNLG9CQUFxQixTQUFRLHVEQUFpQjtZQU96RCxZQUFZLEdBQUcsSUFBVztnQkFDeEIsS0FBSyxFQUFFLENBQUM7O2dCQUpWLDZDQUErQjtnQkFDL0Isc0NBQTZCLElBQUksRUFBQztnQkFLaEMsMkJBQUksOEJBQVMsUUFBUSxDQUFDLGVBQWUsQ0FDbkMsNEJBQTRCLEVBQzVCLE1BQU0sQ0FDUCxPQUFDO1lBQ0osQ0FBQztZQUVELGdCQUFnQixDQUNkLElBQThCLEVBQzlCLFFBQTRDLEVBQzVDLE9BQTJDO2dCQUUzQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBRUQsbUJBQW1CLENBQ2pCLElBQStCLEVBQy9CLFFBQTRDLEVBQzVDLE9BQTJDO2dCQUUzQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN2RSxDQUFDO1lBRUQsV0FBVyxDQUFpQixJQUFPOztnQkFDakMsSUFBSSxJQUFJLFlBQVksVUFBVSxFQUFFLENBQUM7b0JBQy9CLE1BQU0sS0FBSyxHQUFHLGlDQUFJLG1DQUFPLG1DQUFJLDJCQUFJLDBFQUFhLE1BQWpCLElBQUksQ0FBZSxDQUFDO29CQUVqRCxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsSUFBSSxJQUFJLFlBQVksRUFBb0IsRUFBRSxDQUFDO29CQUN6QyxNQUFNLEtBQUssR0FBRyxVQUFJLENBQUMsS0FBSyxtQ0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUU3QyxNQUFNLEtBQUssR0FBRyxpQ0FBSSxtQ0FBTyxtQ0FBSSwyQkFBSSwwRUFBYSxNQUFqQixJQUFJLENBQWUsQ0FBQztvQkFFakQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUVELHdCQUF3QixLQUFJLENBQUM7WUFpQjdCLGlCQUFpQjtnQkFDZiwyQkFBSSx5RUFBWSxNQUFoQixJQUFJLENBQWMsQ0FBQztZQUNyQixDQUFDO1lBNEJELElBQUksS0FBSztnQkFDUCxPQUFPLDJCQUFJLG1DQUFPLENBQUM7WUFDckIsQ0FBQztZQUVELElBQUksV0FBVztnQkFDYixPQUFPLDJCQUFJLGtDQUFNLENBQUM7WUFDcEIsQ0FBQztZQUVEOztlQUVHO1lBQ0gsa0JBQWtCLENBQUMsYUFBcUIsRUFBRSxLQUFhO2dCQUNyRCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUV2QixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNwRCxPQUFPO2dCQUNULENBQUM7Z0JBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUVELElBQUksZ0JBQWdCO2dCQUdsQixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUM7WUFFRCxJQUFJLFlBQVk7Z0JBQ2QsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBRXRDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNuQixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO29CQUV4QyxJQUFJLFdBQVcsS0FBSyxJQUFJO3dCQUFFLE9BQU8sSUFBSSxDQUFDO29CQUV0QyxJQUFJLFdBQVcsWUFBWSxhQUFhO3dCQUFFLE9BQU8sV0FBVyxDQUFDO2dCQUMvRCxDQUFDO2dCQUVELElBQUksYUFBYSxLQUFLLElBQUk7b0JBQUUsT0FBTyxJQUFJLENBQUM7Z0JBRXhDLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsR0FDbkQsYUFBcUMsQ0FBQztnQkFFeEMsSUFBSSxXQUFXLFlBQVksYUFBYTtvQkFBRSxPQUFPLFdBQVcsQ0FBQztnQkFFN0QsSUFBSSxVQUFVLFlBQVksYUFBYTtvQkFBRSxPQUFPLFVBQVUsQ0FBQztnQkFFM0QsT0FBUSxhQUFzQyxDQUFDLFlBQVksQ0FBQztZQUM5RCxDQUFDO1lBRUQsSUFBSSxzQkFBc0I7Z0JBQ3hCLElBQUksSUFBSSxZQUFZLHFEQUFnQjtvQkFBRSxPQUFPLElBQUksQ0FBQztnQkFFbEQsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFFL0IsSUFBSSxhQUFhLEtBQUssSUFBSTtvQkFBRSxPQUFPLGFBQWEsQ0FBQztnQkFFakQsTUFBTSxnQkFBZ0IsR0FBSSxhQUFzQztxQkFDN0Qsc0JBQXNCLENBQUM7Z0JBRTFCLElBQUksZ0JBQWdCLEtBQUssU0FBUztvQkFBRSxPQUFPLGdCQUFnQixDQUFDO2dCQUU1RCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7U0FDRjs7Ozs7O1lBN0dHLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFFL0IsSUFBSSxhQUFhLEtBQUssSUFBSTtnQkFBRSxPQUFPO1lBRW5DLE1BQU0sZ0JBQWdCLEdBQUcsYUFBcUMsQ0FBQztZQUUvRCxNQUFNLE1BQU0sR0FBRyxzQkFBZ0IsQ0FBQyxLQUFLLG1DQUFJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztZQUV0RSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksS0FBSyxLQUFLLElBQUk7Z0JBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O2dCQUNwRCxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7O1lBT0MsSUFBSSwyQkFBSSxtQ0FBTyxLQUFLLElBQUk7Z0JBQUUsT0FBTywyQkFBSSxtQ0FBTyxDQUFDO1lBRTdDLDJCQUFJLCtCQUFVLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLE9BQUM7WUFFMUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFM0MsSUFBSSxhQUFhLEtBQUssSUFBSTtnQkFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLDJCQUFJLG1DQUFPLENBQUMsQ0FBQztZQUVuRSwyQkFBSSxtQ0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFMUMsS0FBSyxNQUFNLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQ3hELElBQUksQ0FBQyxnQkFBZ0IsQ0FDdEIsRUFBRSxDQUFDO2dCQUNGLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUU5QyxJQUFJLEtBQUssS0FBSyxJQUFJO29CQUFFLFNBQVM7Z0JBRTdCLDJCQUFJLG1DQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFFdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUVELE9BQU8sMkJBQUksbUNBQU8sQ0FBQztRQUNyQixDQUFDO1FBN0ZNLHFCQUFrQixHQUFhLEVBQUc7UUFDbEMsTUFBRyxHQUFHLGFBQWM7V0ErSjNCO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekttRDtBQUNMO0FBQ3VCO0FBSS9ELE1BQU0sZ0JBQWlCLFNBQVEsd0RBQU8sQ0FDM0MsNkRBQVcsQ0FBQyw2REFBbUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FDbkQ7SUFGRDs7UUFHRSxpQ0FBUSxRQUFRLENBQUMsZUFBZSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxFQUFDO1FBQ3ZFLHNDQUFhLElBQUksR0FBRyxFQUFzQixFQUFDO0lBNEQ3QyxDQUFDO0lBMURDLGlCQUFpQjtRQUNmLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQywyQkFBSSw4QkFBTSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxlQUFlLENBQUMsUUFBa0I7UUFDaEMsSUFBSSwyQkFBSSxtQ0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUU5RCxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFbkIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBSSxtQ0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ3ZFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFL0MsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRWhDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUVyQywyQkFBSSw4QkFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV4QyxNQUFNLEVBQUUsR0FBRyxZQUFZLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFFckUsMkJBQUksbUNBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFckMsZUFBZSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFeEIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWpELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBRTdDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkQsY0FBYyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTFELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsY0FBYyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFFMUIsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztDQUNGOztBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFUDtBQUNBO0FBQ0k7QUFDa0I7QUFDdEI7QUFDQztBQUk3QyxNQUFNLElBQUssU0FBUSxxREFBTyxDQUN4Qix5REFBUyxDQUFDLHNEQUFNLENBQUMscURBQU8sQ0FBQyx1RUFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FDckQ7Q0FBRztBQUVHLE1BQU0sWUFBYSxTQUFRLElBQUk7SUFBdEM7O1FBY0UsOEJBQWlDLElBQUksRUFBQztRQUN0QyxpQ0FBdUMsSUFBSSxFQUFDO0lBOEg5QyxDQUFDO0lBbklDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUtEOzs7OztPQUtHO0lBQ0gsSUFBSSxLQUFLO1FBQ1AsT0FBTywyQkFBSSwyQkFBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsSUFBSSwyQkFBSSwyQkFBTyxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBRWxDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsMkJBQUksdUJBQVUsS0FBSyxPQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtRQUV2QixJQUFJLFFBQVEsS0FBSyxJQUFJO1lBQ25CLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFbEUsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNiLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQTJCLENBQUM7Z0JBQ3pDLE9BQU87WUFDVCxLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUE4QixDQUFDO2dCQUMvQyxPQUFPO1lBQ1Q7Z0JBQ0UsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sMkJBQUksOEJBQVUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSztRQUNoQixJQUFJLDJCQUFJLDhCQUFVLEtBQUssS0FBSztZQUFFLE9BQU87UUFFckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQywyQkFBSSwwQkFBYSxLQUFLLE9BQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxNQUFNLENBQUMsUUFBK0I7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDO1FBRTdCLElBQUksMkJBQUksMkJBQU8sS0FBSyxJQUFJO1lBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRywyQkFBSSwyQkFBTyxDQUFDO1FBRTFELElBQUksMkJBQUksOEJBQVUsS0FBSyxJQUFJO1lBQUUsT0FBTyxDQUFDLFlBQVksR0FBRywyQkFBSSw4QkFBVSxDQUFDO1FBRW5FLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJO1lBQ25ELE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5FLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJO1lBQ3JELE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0JBQW9CLENBQ2xCLE9BQWlDLEVBQ2pDLFFBQXdCOztRQUV4QixNQUFNLGFBQWEsR0FBRyxVQUFJLENBQUMsV0FBVyxtQ0FBSSxFQUFFLENBQUM7UUFFN0MsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4RCxNQUFNLEVBQ0osdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QixxQkFBcUIsRUFBRSxDQUFDLEVBQ3hCLHNCQUFzQixFQUFFLENBQUMsRUFDekIsS0FBSyxHQUNOLEdBQUcsWUFBWSxDQUFDO1FBRWpCLE1BQU0sTUFBTSxHQUFHLHdCQUF3QixHQUFHLHVCQUF1QixDQUFDO1FBRWxFLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELG9CQUFvQixDQUNsQixPQUFpQyxFQUNqQyxRQUF3Qjs7UUFFeEIsTUFBTSxhQUFhLEdBQUcsVUFBSSxDQUFDLFdBQVcsbUNBQUksRUFBRSxDQUFDO1FBRTdDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFeEQsTUFBTSxFQUNKLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0QixLQUFLLEdBQ04sR0FBRyxZQUFZLENBQUM7UUFFakIsTUFBTSxNQUFNLEdBQUcsdUJBQXVCLEdBQUcsd0JBQXdCLENBQUM7UUFFbEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sT0FBTyxHQUFHLHFCQUFxQixHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsc0JBQXNCLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVwRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxXQUFXLENBQUMsS0FBSztRQUNuQixJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssS0FBSztZQUFFLE9BQU87UUFFeEMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxREFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O0FBM0lNLCtCQUFrQixHQUFHO0lBQzFCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjtJQUMxQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixNQUFNO0lBQ04sU0FBUztDQUNWLENBQUM7QUF1SUosY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUprQjtBQUNKO0FBSWpDO0FBQ2U7QUFFckMsTUFBTSxhQUFjLFNBQVEsdUVBQWtCLENBQ25ELHVFQUF3QixFQUN4QixPQUFPLENBQ1I7SUFIRDs7O1FBUUUseUNBQW1CLENBQUMsQ0FBQyxFQUFDO0lBb0N4QixDQUFDO0lBeENDLE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUlELGlCQUFpQjtRQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFVRCxJQUFJO1FBQ0YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QywyQkFBSSw0REFBYSxNQUFqQixJQUFJLENBQWUsQ0FBQztRQUVwQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUMsMkJBQUksc0NBQWlCLENBQUMsQ0FBQztRQUVsRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOztZQUN4QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNGOztJQTdCRywyQkFBSSxrQ0FBb0IsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUU7UUFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxREFBWSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtZQUFFLDJCQUFJLDREQUFhLE1BQWpCLElBQUksQ0FBZSxDQUFDO0lBQ3JELENBQUMsQ0FBQyxPQUFDO0FBQ0wsQ0FBQztBQTBCSCxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUUzQyxNQUFNLGdCQUFpQixTQUFRLHNGQUFtQyxDQUN2RSxPQUFPLENBQ1I7Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEc0Q7QUFDc0I7QUFLNUM7QUFDcUI7QUFDaUI7QUFJcEM7QUFDbUI7QUFDRjtBQUtyQjtBQUVvQztBQVE5QjtBQUlBO0FBSUw7QUFDNkM7QUFJekUsU0FBUyxxQkFBcUIsQ0FBMkIsSUFBTztJQUNyRSxPQUFPLEtBQU0sU0FBUSxJQUFJO1FBQ3ZCOztXQUVHO1FBQ0gsTUFBTSxDQUFDLE9BQWlDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxtRUFBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRDs7V0FFRztRQUNILE9BQU8sQ0FBQyxPQUFrQztZQUN4QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMscUVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxLQUFLLENBQUMsT0FBZ0M7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGlFQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUlELFFBQVEsQ0FHTixJQUFRLEVBQUUsSUFBUztZQUNuQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUM3QixJQUFJLElBQUksS0FBSyxTQUFTO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFFNUQsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTFCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXhCLE9BQU8sS0FBSyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUVELE1BQU0sZUFBZSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDMUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUxQixJQUFJLEtBQUssS0FBSyxTQUFTO29CQUFFLE9BQU8sUUFBUSxDQUFDO2dCQUV6QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV4QixPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUM7WUFFRixPQUFPLGVBQWUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVEOztXQUVHO1FBQ0gsSUFBSSxDQUFDLE9BQStCO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQywrREFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFRDs7V0FFRztRQUNILFNBQVMsQ0FBQyxPQUFvQztZQUM1QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMseUVBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVEOztXQUVHO1FBQ0gsS0FBSyxDQUFDLE9BQWdDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxpRUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRDs7V0FFRztRQUNILElBQUksQ0FBQyxPQUErQjtZQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsK0RBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCxLQUFLLENBQUMsT0FBZ0M7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGlFQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxnQkFBZ0IsQ0FBMkIsSUFBTztJQUNoRSxPQUFPLEtBQU0sU0FBUSxJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxPQUFzQztZQUMzQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsd0VBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELE9BQU8sQ0FBQyxPQUF1QztZQUM3QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsMEVBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFvQztZQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsb0VBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELFNBQVMsQ0FBQyxPQUF5QztZQUNqRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsOEVBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxXQUFXLENBQWlDLElBQU87SUFDakUsT0FBTyxLQUFNLFNBQVEsSUFBSTtRQUN2Qjs7V0FFRztRQUNILHdCQUF3QixDQUN0QixZQUFlLEVBQ2YsT0FBa0M7WUFFbEMsTUFBTSxPQUFPLEdBQUcsc0VBQW1CLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELFNBQVMsQ0FBQyxPQUF5QztZQUNqRCxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyw4RUFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RSxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLGdCQUFnQixDQUc5QixrQkFBcUI7SUFDckIsT0FBTyxLQUFNLFNBQVEsa0JBQWtCO1FBQ3JDLEtBQUssQ0FBQyxPQUFzQztZQUMxQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvRUFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsU0FBUyxDQUNQLE9BQThDO1lBRTlDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtGQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFFRCxTQUFTLENBQ1AsT0FBOEM7WUFFOUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUZBQXdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELElBQUksQ0FBQyxPQUF5QztZQUM1QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5RUFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRUQsS0FBSyxDQUFDLE9BQXNDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9FQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVELENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTTZEO0FBRXZELFNBQVMsVUFBVSxDQUFxQyxJQUFPOztJQUNwRSxZQUFPLEtBQU0sU0FBUSxJQUFJO1lBQWxCOztnQkFHTCxpQkFBUyxHQUFHLEVBQUM7Z0JBQ2Isa0JBQVUsR0FBRyxFQUFDO1lBdURoQixDQUFDO1lBckRDOzs7OztlQUtHO1lBQ0gsSUFBSSxLQUFLO2dCQUNQLE9BQU8sMkJBQUksY0FBTyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO2dCQUNiLElBQUksMkJBQUksY0FBTyxLQUFLLEtBQUs7b0JBQUUsT0FBTztnQkFFbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQywyQkFBSSxVQUFVLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDdEQsQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsSUFBSSxNQUFNO2dCQUNSLE9BQU8sMkJBQUksZUFBUSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO2dCQUNkLElBQUksMkJBQUksZUFBUSxLQUFLLEtBQUs7b0JBQUUsT0FBTztnQkFFbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQywyQkFBSSxXQUFXLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUVELHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUI7Z0JBRXZCLElBQUksUUFBUSxLQUFLLElBQUk7b0JBQ25CLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRWxFLFFBQVEsSUFBSSxFQUFFLENBQUM7b0JBQ2IsS0FBSyxPQUFPO3dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsc0VBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlDLE9BQU87b0JBRVQsS0FBSyxRQUFRO3dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsc0VBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQy9DLE9BQU87b0JBRVQ7d0JBQ0UsT0FBTyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztZQUNILENBQUM7U0FDRjs7O1FBMURRLHFCQUFrQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRTtXQTBENUU7QUFDSixDQUFDO0FBRU0sU0FBUyxtQkFBbUIsQ0FFakMsSUFBTztJQUNQLE9BQU8sS0FBTSxTQUFRLElBQUk7UUFDdkIsaUJBQWlCO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRWhFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRCxJQUFJLE1BQU07WUFDUixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQztRQUVELElBQUksTUFBTSxDQUFDLEtBQUs7WUFDZCxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBRW5DLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXJCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsSUFBSSxLQUFLO1lBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1lBQ2IsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUVsQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUVwQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxhQUFhLENBQWlDLElBQU87SUFDbkUsT0FBTyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR3dDO0FBT1o7QUFLaUM7QUFFOUQsU0FBUyxRQUFRLENBQXFDLElBQU87O0lBQzNELFlBQU8sTUFBTSxRQUFTLFNBQVEsSUFBSTtZQUEzQjs7Z0JBR0wseUJBQTBCLElBQUksRUFBQztZQWdEakMsQ0FBQztZQTlDQzs7Ozs7OztlQU9HO1lBQ0gsSUFBSSxJQUFJO2dCQUNOLE9BQU8sMkJBQUksc0JBQU0sQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSztnQkFDWixJQUFJLDJCQUFJLHNCQUFNLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUVqQyxJQUNFLDJCQUFJLHNCQUFNLFlBQVksaURBQUs7b0JBQzNCLEtBQUssWUFBWSxpREFBSztvQkFDdEIsMkJBQUksc0JBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUV4QixPQUFPO2dCQUVULElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtvQkFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FDakIsTUFBTSxFQUNOLENBQUMsMkJBQUksa0JBQVMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpREFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUNsRSxDQUFDOztvQkFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLDJCQUFJLGtCQUFTLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUVELHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUI7Z0JBRXZCLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRSxDQUFDO29CQUNwQixJQUFJLFFBQVEsS0FBSyxJQUFJO3dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3lCQUNuQyxDQUFDO3dCQUNKLE1BQU0sU0FBUyxHQUFHLHNFQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUU1RCxJQUFJLFNBQVMsS0FBSyxVQUFVOzRCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUN0RCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0QsQ0FBQztTQUNGOztRQWxEUSxxQkFBa0IsR0FBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBRTtXQWtEM0U7QUFDSixDQUFDO0FBRU0sU0FBUyxPQUFPLENBQTBDLElBQU87SUFDdEUsT0FBTyxNQUFNLFFBQVMsU0FBUSxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxRQUErQjtZQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFFN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLGlEQUFLO2dCQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDcEUsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLHVEQUFRLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLDhEQUFlLEVBQUUsQ0FBQztvQkFDekMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckUsQ0FBQztxQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksNkRBQWMsRUFBRSxDQUFDO29CQUMvQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO3FCQUFNLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSw2REFBYyxFQUFFLENBQUM7b0JBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUVELFdBQVcsQ0FBQyxRQUErQjtZQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTTtnQkFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWxELEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxPQUFPLENBQWlDLElBQU87O0lBQzdELFlBQU8sS0FBTSxTQUFRLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFBNUI7OztZQXNDUCxDQUFDO1lBckNDLGlCQUFpQjtnQkFDZixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFFMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLHVEQUFRO29CQUFFLDJCQUFJLGlDQUFjLE1BQWxCLElBQUksRUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkUsQ0FBQztZQUVELElBQUksSUFBSTtnQkFDTixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDcEIsQ0FBQztZQUVELElBQUksSUFBSSxDQUFDLEtBQUs7O2dCQUNaLElBQUksWUFBSyxDQUFDLElBQUksMENBQUUsUUFBUSxFQUFFLE9BQUssS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsRUFBRTtvQkFBRSxPQUFPO2dCQUV6RCxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFFbkIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztnQkFFdEIsSUFBSSxJQUFJLEtBQUssSUFBSTtvQkFBRSxPQUFPO2dCQUUxQixJQUFJLElBQUksWUFBWSxpREFBSztvQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztxQkFDOUMsSUFBSSxJQUFJLFlBQVksdURBQVE7b0JBQUUsMkJBQUksaUNBQWMsTUFBbEIsSUFBSSxFQUFlLElBQUksQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFZRCxJQUFJLGdCQUFnQjtnQkFDbEIsdUNBQVksS0FBSyxDQUFDLGdCQUFnQixLQUFFLElBQUksRUFBRSxNQUFNLElBQUc7WUFDckQsQ0FBQztTQUNGOzsrQ0FiZSxRQUFrQjtZQUM5QixNQUFNLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFFeEMsSUFBSSxzQkFBc0IsS0FBSyxJQUFJO2dCQUFFLE9BQU87WUFFNUMsTUFBTSxVQUFVLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7V0FLRDtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkk2RDtBQUVyQjtBQUlsQyxNQUFNLGFBQWEsR0FBRyxnQ0FDeEIsaURBQUssQ0FBQyxJQUFJLEtBQ2IsU0FBUyxFQUFFLEtBQUssRUFDaEIsY0FBYyxFQUFFLElBQUksRUFDcEIsVUFBVSxFQUFFLElBQUksRUFDaEIsT0FBTyxFQUFFLElBQUksRUFDYixlQUFlLEVBQUUsSUFBSSxFQUNyQixVQUFVLEVBQUUsSUFBSSxFQUNoQixhQUFhLEVBQUUsTUFBTSxFQUNyQixrQkFBa0IsRUFBRSxLQUFLLEVBQ3pCLFFBQVEsRUFBRSxLQUFLLEVBQ2YsV0FBVyxFQUFFLEtBQUssRUFDbEIsbUJBQW1CLEVBQUUsSUFBSSxFQUN6QixjQUFjLEVBQUUsS0FBSyxHQUNiLENBQUM7QUFFWCxNQUFNLFVBQVUsR0FBRztJQUNqQixNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtJQUNoQixPQUFPLEVBQUUsU0FBUztDQUNWLENBQUM7QUFFSixTQUFTLE9BQU8sQ0FBMEMsSUFBTzs7SUFTdEUsTUFBTSxJQUFLLFNBQVEsSUFBSTtRQUF2Qjs7WUFVRSwyQkFBNkIsSUFBSSxFQUFDO1lBQ2xDLHdCQUFxQyxJQUFJLEVBQUM7WUFDMUMscUJBQXVCLElBQUksRUFBQztZQUM1Qix5QkFBMEIsSUFBSSxFQUFDO1lBQy9CLHdCQUFxQyxJQUFJLEVBQUM7WUFDMUMsMEJBQStCLElBQUksRUFBQztRQW1LdEMsQ0FBQztRQWpLQyx3QkFBd0IsQ0FDdEIsSUFBWSxFQUNaLFFBQXVCLEVBQ3ZCLFFBQXVCO1lBRXZCLElBQUksUUFBUSxLQUFLLElBQUk7Z0JBQ25CLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFbEUsUUFBUSxJQUFJLEVBQUUsQ0FBQztnQkFDYixLQUFLLE1BQU07b0JBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxzRUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0MsT0FBTztnQkFDVCxLQUFLLFNBQVM7b0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUE2QixDQUFDO29CQUM3QyxPQUFPO2dCQUNULEtBQUssYUFBYTtvQkFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7b0JBQzNCLE9BQU87Z0JBQ1QsS0FBSyxZQUFZO29CQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBcUIsQ0FBQztvQkFDdkMsT0FBTztnQkFDVCxLQUFLLFNBQVM7b0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUE2QixDQUFDO29CQUM3QyxPQUFPO2dCQUNUO29CQUNFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdELENBQUM7UUFDSCxDQUFDO1FBZ0JELElBQUksVUFBVTtZQUNaLE9BQU8sMkJBQUksd0JBQVksQ0FBQztRQUMxQixDQUFDO1FBRUQsSUFBSSxVQUFVLENBQUMsS0FBSztZQUNsQixJQUFJLDJCQUFJLHdCQUFZLEtBQUssS0FBSztnQkFBRSxPQUFPO1lBRXZDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsMkJBQUksb0JBQWUsS0FBSyxPQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBRUQsSUFBSSxTQUFTO1lBQ1gsT0FBTywyQkFBSSx1QkFBVyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxLQUFLO1lBQ2pCLElBQUksMkJBQUksdUJBQVcsS0FBSyxLQUFLO2dCQUFFLE9BQU87WUFFdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQywyQkFBSSxtQkFBYyxLQUFLLE9BQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxJQUFJLE9BQU87WUFDVCxPQUFPLDJCQUFJLHFCQUFTLENBQUM7UUFDdkIsQ0FBQztRQUVELElBQUksT0FBTyxDQUFDLEtBQUs7WUFDZixJQUFJLDJCQUFJLHFCQUFTLEtBQUssS0FBSztnQkFBRSxPQUFPO1lBRXBDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsMkJBQUksaUJBQVksS0FBSyxPQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQStCO1lBQ3BDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFFN0IsTUFBTSxLQUFLLEdBQUcsMkJBQUksdUJBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRywyQkFBSSx1QkFBVyxHQUFHLENBQUM7WUFFcEUsSUFBSSwyQkFBSSx3QkFBWSxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUM5QixJQUFJLDJCQUFJLGtCQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ3hCLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUVsRCxJQUFJLGNBQWMsS0FBSyxJQUFJO3dCQUN6QixNQUFNLElBQUksS0FBSyxDQUNiLDJDQUEyQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQzFELENBQUM7b0JBRUosTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGNBQWMsQ0FBQztvQkFFcEMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRywyQkFBSSxrQkFBTSxHQUFHLDJCQUFJLHNCQUFVLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQ3hFLENBQUM7WUFDSCxDQUFDO2lCQUFNLElBQUksMkJBQUksa0JBQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDL0IsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRXhELElBQUksYUFBYSxLQUFLLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ3ZELE1BQU0sSUFBSSxLQUFLLENBQ2IseUNBQXlDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FDeEQsQ0FBQztnQkFFSixNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWxDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsUUFBUSxJQUFJLDJCQUFJLHdCQUFZLEVBQUUsQ0FBQztZQUMzRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRywyQkFBSSxrQkFBTSxHQUFHLDJCQUFJLHNCQUFVLElBQ25ELDJCQUFJLHdCQUNOLEVBQUUsQ0FBQztZQUNMLENBQUM7WUFFRCxJQUFJLDJCQUFJLHFCQUFTLEtBQUssSUFBSTtnQkFBRSxPQUFPLENBQUMsV0FBVyxHQUFHLDJCQUFJLHFCQUFTLENBQUM7WUFFaEUsSUFBSSwyQkFBSSxxQkFBUyxLQUFLLElBQUk7Z0JBQUUsT0FBTyxDQUFDLFdBQVcsR0FBRywyQkFBSSxxQkFBUyxDQUFDO1lBRWhFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUVEOzs7Ozs7V0FNRztRQUNILElBQUksSUFBSTtZQUNOLE9BQU8sMkJBQUksa0JBQU0sQ0FBQztRQUNwQixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSztZQUNaLElBQUksMkJBQUksa0JBQU0sS0FBSyxLQUFLO2dCQUFFLE9BQU87WUFFakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQywyQkFBSSxjQUFTLEtBQUssT0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVEOzs7OztXQUtHO1FBQ0gsSUFBSSxRQUFRO1lBQ1YsT0FBTywyQkFBSSxzQkFBVSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFLO1lBQ2hCLElBQUksMkJBQUksc0JBQVUsS0FBSyxLQUFLO2dCQUFFLE9BQU87WUFFckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQywyQkFBSSxrQkFBYSxLQUFLLE9BQUMsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxJQUFJLFVBQVU7O1lBQ1osT0FBTyx1Q0FBSSxrQkFBTSwwQ0FBRSxRQUFRLEVBQUUsbUNBQUksRUFBRSxDQUFDO1FBQ3RDLENBQUM7UUFFRCxJQUFJLE9BQU87WUFDVCxPQUFPLDJCQUFJLHFCQUFTLENBQUM7UUFDdkIsQ0FBQztRQUVELElBQUksT0FBTyxDQUFDLEtBQUs7WUFDZixJQUFJLDJCQUFJLHFCQUFTLEtBQUssS0FBSztnQkFBRSxPQUFPO1lBRXBDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsMkJBQUksaUJBQVksS0FBSyxPQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDOzs7SUFoTE0sdUJBQWtCLEdBQUc7UUFDMUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCO1FBQzFCLE1BQU07UUFDTixTQUFTO1FBQ1QsYUFBYTtRQUNiLFlBQVk7UUFDWixTQUFTO0tBQ1YsQ0FBQztJQXNDSyxhQUFRLEdBQUcsYUFBYSxDQUFDO0lBRXpCLFlBQU8sR0FBeUM7UUFDckQsTUFBTSxFQUFFLFFBQVE7UUFDaEIsY0FBYyxFQUFFLGlCQUFpQjtRQUNqQyxjQUFjLEVBQUUsaUJBQWlCO1FBQ2pDLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsYUFBYSxFQUFFLGdCQUFnQjtLQUNoQyxDQUFDO0lBRUssVUFBSyxHQUFHLFVBQVUsQ0FBQztJQTBINUIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNOOEM7QUFFZTtBQUV2RCxTQUFTLEtBQUssQ0FBMEMsSUFBTzs7SUFDcEUsWUFBTyxLQUFNLFNBQVEsVUFBSTtZQUFsQjs7Z0JBR0wsY0FBTSx1REFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUM7WUE0QjlCLENBQUM7WUExQkM7Ozs7O2VBS0c7WUFDSCxJQUFJLEVBQUU7Z0JBQ0osT0FBTywyQkFBSSxXQUFJLENBQUM7WUFDbEIsQ0FBQztZQUVELElBQUksRUFBRSxDQUFDLEtBQUs7Z0JBQ1YsSUFBSSwyQkFBSSxXQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUVuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLDJCQUFJLE9BQU8sS0FBSyxPQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJO29CQUNwQyxJQUFJLENBQUMsRUFBRSxHQUFHLHNFQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUvQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzRCxDQUFDO1NBQ0Y7O1FBOUJRLHFCQUFrQixHQUFHLENBQUMsR0FBRyx5Q0FBd0IsRUFBRSxJQUFJLENBQUU7V0E4QmhFO0FBQ0osQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUEwQyxJQUFPOztJQUN0RSxZQUFPLEtBQU0sU0FBUSxVQUFJO1lBQWxCOztnQkFHTCxnQkFBUSx1REFBUSxDQUFDLElBQUksRUFBRSxFQUFDO1lBNEIxQixDQUFDO1lBMUJDOzs7OztlQUtHO1lBQ0gsSUFBSSxJQUFJO2dCQUNOLE9BQU8sMkJBQUksYUFBTSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLO2dCQUNaLElBQUksMkJBQUksYUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFFckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQywyQkFBSSxTQUFTLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUVELHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUI7Z0JBRXZCLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssSUFBSTtvQkFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxzRUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFakQsS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0QsQ0FBQztTQUNGOztRQTlCUSxxQkFBa0IsR0FBRyxDQUFDLEdBQUcseUNBQXdCLEVBQUUsTUFBTSxDQUFFO1dBOEJsRTtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNEQ7QUFHQztBQUV2RCxTQUFTLE1BQU0sQ0FBcUMsSUFBTzs7SUFDaEUsWUFBTyxLQUFNLFNBQVEsSUFBSTtZQUt2QixZQUFZLEdBQUcsSUFBVztnQkFDeEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBSGpCLGtCQUFVLElBQUksdURBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUM7Z0JBNEI3QixnQ0FBc0QsR0FBRyxFQUFFO29CQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSwyQkFBSSxlQUFRLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxFQUFDO2dCQXpCQSwyQkFBSSxlQUFRLENBQUMsaUJBQWlCLENBQUMsMkJBQUksNkJBQXNCLENBQUMsQ0FBQztZQUM3RCxDQUFDO1lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztvQkFDM0MsTUFBTSxXQUFXLEdBQUcsc0VBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQywyQkFBSSxlQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztnQkFDbkUsQ0FBQztnQkFFRCxPQUFPLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7WUFFRCxVQUFVLENBQUMsQ0FBUyxFQUFFLENBQVM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUUvQiwyQkFBSSxlQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsMkJBQUksZUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsQ0FBQztZQU1EOzs7OztlQUtHO1lBQ0gsSUFBSSxNQUFNO2dCQUNSLE9BQU8sMkJBQUksZUFBUSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO2dCQUNkLE1BQU0sT0FBTyxHQUFHLDJCQUFJLGVBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUFJLGVBQVEsQ0FBQyxDQUFDO2dCQUV4RCxPQUFPLENBQUMsQ0FBQywyQkFBSSxXQUFXLEtBQUssT0FBQyxFQUFFLDJCQUFJLDZCQUFzQixDQUFDLENBQUM7WUFDOUQsQ0FBQztTQUNGOzs7UUFqRFEscUJBQWtCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUU7V0FpRG5FO0FBQ0osQ0FBQztBQUVNLFNBQVMsZUFBZSxDQUU3QixJQUFPO0lBQ1AsT0FBTyxLQUFNLFNBQVEsSUFBSTtRQUN2QixpQkFBaUI7WUFDZixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBRUQsVUFBVSxDQUFDLENBQVMsRUFBRSxDQUFTO1lBQzdCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBRUQsSUFBSSxNQUFNO1lBQ1IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3RCLENBQUM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO1lBQ2QsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxhQUFhO1lBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxTQUFTLENBQWlDLElBQU87SUFDL0QsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RjhEO0FBQ1o7QUFJbkQsU0FBUyxtQkFBbUIsQ0FDMUIsSUFBTyxFQUNQLGFBQXFCOztJQUVyQixZQUFPLEtBQU0sU0FBUSx1REFBVSxDQUFDLCtDQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBdEM7O2dCQU1MLGtCQUFrQixhQUFhLEVBQUM7WUF3RGxDLENBQUM7WUF0REMsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQ3RCLElBQUksUUFBUSxLQUFLLElBQUk7d0JBQUUsT0FBTztvQkFFOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFrQixDQUFDO2dCQUNuQyxDQUFDO2dCQUVELE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQUVELElBQUksT0FBTztnQkFDVCxRQUFRLDJCQUFJLGVBQVEsRUFBRSxDQUFDO29CQUNyQixLQUFLLFNBQVM7d0JBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNyQixLQUFLLFFBQVE7d0JBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNyQixDQUFDO1lBRUQsSUFBSSxRQUFRO2dCQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBRUQsSUFBSSxNQUFNO2dCQUNSLFFBQVEsMkJBQUksZUFBUSxFQUFFLENBQUM7b0JBQ3JCLEtBQUssU0FBUzt3QkFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNELEtBQUssUUFBUTt3QkFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLENBQUM7WUFDSCxDQUFDO1lBRUQsSUFBSSxVQUFVO2dCQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBRUQsSUFBSSxXQUFXO2dCQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBRUQsSUFBSSxNQUFNO2dCQUNSLE9BQU8sMkJBQUksZUFBUSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO2dCQUNkLElBQUksMkJBQUksZUFBUSxLQUFLLEtBQUs7b0JBQUUsT0FBTztnQkFFbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQywyQkFBSSxXQUFXLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztTQUNGOztRQTdEUSxxQkFBa0IsR0FBRztZQUMxQixHQUFHLHVEQUFVLENBQUMsK0NBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtZQUM5QyxRQUFRO1NBQ1I7V0EwREY7QUFDSixDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FDaEMsSUFBTyxFQUNQLGFBQXFCO0lBRXJCLE9BQU8sS0FBTSxTQUFRLG1CQUFtQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7UUFDM0QscUJBQXFCLENBQ25CLE9BQWlDLEVBQ2pDLFFBQXlCO1lBRXpCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFFRCxvQkFBb0IsQ0FDbEIsT0FBaUMsRUFDakMsUUFBd0I7WUFFeEIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFFdEMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFMUMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVNLFNBQVMsa0JBQWtCLENBQ2hDLElBQU8sRUFDUCxhQUFxQjtJQUVyQixPQUFPLEtBQU0sU0FBUSx3REFBZSxDQUNsQyxnRUFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FDOUQ7UUFDQyxhQUFhO1lBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELElBQUksTUFBTTtZQUNSLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QixDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztZQUNkLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXJCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Ib0Q7QUFDWjtBQU1aO0FBR2lDO0FBSTlELFNBQVMsVUFBVSxDQUFxQyxJQUFPOztJQUM3RCxZQUFPLEtBQU0sU0FBUSxJQUFJO1lBQWxCOztnQkFPTCxrQkFBNEIsSUFBSSxFQUFDO2dCQUNqQyxxQkFBNEIsSUFBSSxFQUFDO1lBMEVuQyxDQUFDO1lBeEVDOzs7OztlQUtHO1lBQ0gsSUFBSSxTQUFTO2dCQUNYLE9BQU8sMkJBQUksa0JBQVcsQ0FBQztZQUN6QixDQUFDO1lBRUQsSUFBSSxTQUFTLENBQUMsS0FBSztnQkFDakIsSUFBSSwyQkFBSSxrQkFBVyxLQUFLLEtBQUs7b0JBQUUsT0FBTztnQkFFdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQywyQkFBSSxjQUFjLEtBQUssT0FBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVEOzs7Ozs7O2VBT0c7WUFDSCxJQUFJLE1BQU07Z0JBQ1IsT0FBTywyQkFBSSxlQUFRLENBQUM7WUFDdEIsQ0FBQztZQUVELElBQUksTUFBTSxDQUFDLEtBQUs7Z0JBQ2QsSUFBSSwyQkFBSSxlQUFRLEtBQUssS0FBSztvQkFBRSxPQUFPO2dCQUVuQyxJQUNFLDJCQUFJLGVBQVEsWUFBWSxpREFBSztvQkFDN0IsS0FBSyxZQUFZLGlEQUFLO29CQUN0QiwyQkFBSSxlQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFFMUIsT0FBTztnQkFFVCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7b0JBQzNCLElBQUksQ0FBQyxjQUFjLENBQ2pCLFFBQVEsRUFDUixDQUFDLDJCQUFJLFdBQVcsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpREFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBQyxDQUNwRSxDQUFDOztvQkFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLDJCQUFJLFdBQVcsS0FBSyxPQUFDLENBQUMsQ0FBQztZQUM3RCxDQUFDO1lBRUQsd0JBQXdCLENBQ3RCLElBQVksRUFDWixRQUF1QixFQUN2QixRQUF1QjtnQkFFdkIsUUFBUSxJQUFJLEVBQUUsQ0FBQztvQkFDYixLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsQ0FBQzs0QkFDQyxJQUFJLFFBQVEsS0FBSyxJQUFJO2dDQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lDQUNyQyxDQUFDO2dDQUNKLE1BQU0sV0FBVyxHQUFHLHNFQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dDQUM5RCxJQUFJLFdBQVcsS0FBSyxVQUFVO29DQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDOzRCQUM1RCxDQUFDO3dCQUNILENBQUM7d0JBQ0QsTUFBTTtvQkFDUixDQUFDO29CQUVELEtBQUssWUFBWTt3QkFDZixJQUFJLENBQUMsU0FBUzs0QkFDWixRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNFQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM5RCxNQUFNO29CQUVSO3dCQUNFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO1lBQ0gsQ0FBQztTQUNGOzs7UUFqRlEscUJBQWtCLEdBQWE7WUFDcEMsR0FBRyxJQUFJLENBQUMsa0JBQWtCO1lBQzFCLFFBQVE7WUFDUixZQUFZO1NBQ1o7V0E2RUY7QUFDSixDQUFDO0FBRU0sU0FBUyxTQUFTLENBQTBDLElBQU87SUFDeEUsT0FBTyxNQUFNLFVBQVcsU0FBUSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxRQUErQjtZQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFFN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLFlBQVksaURBQUs7b0JBQzlCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxZQUFZLHVEQUFRLEVBQUUsQ0FBQztvQkFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxZQUFZLDhEQUFlLEVBQUUsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQzlDLE9BQU8sRUFDUCxJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7b0JBQ0osQ0FBQzt5QkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLFlBQVksNkRBQWM7d0JBQzlDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUM3QyxPQUFPLEVBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDO3lCQUNDLElBQUksSUFBSSxDQUFDLE1BQU0sWUFBWSw2REFBYzt3QkFDNUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQzdDLE9BQU8sRUFDUCxJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7Z0JBQ04sQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSTtnQkFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEUsQ0FBQztRQUVELFdBQVcsQ0FBQyxRQUErQjtZQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTTtnQkFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXRELEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxTQUFTLENBQWlDLElBQU87O0lBQy9ELFlBQU8sS0FBTSxTQUFRLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFBOUI7OztZQTBEUCxDQUFDO1lBekRDLGlCQUFpQjtnQkFDZixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFFMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxZQUFZLHVEQUFRO29CQUFFLDJCQUFJLG1DQUFnQixNQUFwQixJQUFJLEVBQWlCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6RSxDQUFDO1lBRUQsSUFBSSxTQUFTO2dCQUNYLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUN6QixDQUFDO1lBRUQsSUFBSSxTQUFTLENBQUMsS0FBSztnQkFDakIsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUs7b0JBQUUsT0FBTztnQkFFdEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBRXhCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBRWxDLElBQUksU0FBUyxLQUFLLElBQUk7b0JBQUUsT0FBTztnQkFFL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNoRSxDQUFDO1lBRUQsSUFBSSxNQUFNO2dCQUNSLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN0QixDQUFDO1lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSzs7Z0JBQ2QsSUFBSSxZQUFLLENBQUMsTUFBTSwwQ0FBRSxRQUFRLEVBQUUsT0FBSyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUSxFQUFFO29CQUFFLE9BQU87Z0JBRTNELEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUVyQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUV4QixJQUFJLE1BQU0sS0FBSyxJQUFJO29CQUFFLE9BQU87Z0JBRTVCLElBQUksTUFBTSxZQUFZLGlEQUFLO29CQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3FCQUNsRCxJQUFJLE1BQU0sWUFBWSx1REFBUTtvQkFBRSwyQkFBSSxtQ0FBZ0IsTUFBcEIsSUFBSSxFQUFpQixNQUFNLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBWUQsSUFBSSxnQkFBZ0I7Z0JBQ2xCLHVDQUNLLEtBQUssQ0FBQyxnQkFBZ0IsS0FDekIsTUFBTSxFQUFFLFFBQVEsRUFDaEIsU0FBUyxFQUFFLGNBQWMsSUFDekI7WUFDSixDQUFDO1NBQ0Y7O21EQWpCaUIsUUFBa0I7WUFDaEMsTUFBTSxFQUFFLHNCQUFzQixFQUFFLEdBQUcsSUFBSSxDQUFDO1lBRXhDLElBQUksc0JBQXNCLEtBQUssSUFBSTtnQkFBRSxPQUFPO1lBRTVDLE1BQU0sVUFBVSxHQUFHLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVwRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMzRCxDQUFDO1dBU0Q7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE13QztBQUNvQjtBQU10QjtBQUd1QjtBQUNaO0FBRTNDLFNBQVMsYUFBYSxDQUFxQyxJQUFPOztJQUN2RSxZQUFPLE1BQU0sYUFBYyxTQUFRLElBQUk7WUFnQnJDLFlBQVksR0FBRyxJQUFXO2dCQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFQakIsZ0NBQVUsdURBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQztnQkFDMUIsK0JBQVMsaURBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQzFCLHlDQUFtQixpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDcEMsK0JBQVMsdURBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBQztnQkFDeEIsa0NBQVksdURBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQztnQkFrQjVCLDZDQUErQyxHQUFHLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLDJCQUFJLDRCQUFPLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxFQUFDO2dCQWdCRixvREFBOEIsQ0FBQyxDQUFDLEVBQUM7Z0JBRWpDLHVEQUF5RCxHQUFHLEVBQUU7b0JBQzVELDJCQUFJLDZDQUErQixXQUFXLENBQUMsR0FBRyxFQUFFLE9BQUM7b0JBRXJELElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLEVBQUM7Z0JBNEJGLDhDQUFzRCxHQUFHLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLDJCQUFJLDZCQUFRLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxFQUFDO2dCQXdGRiw2Q0FBcUQsR0FBRyxFQUFFO29CQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSwyQkFBSSw0QkFBTyxDQUFDLENBQUM7Z0JBQzVDLENBQUMsRUFBQztnQkE0QkYsNkNBQXVCLENBQUMsQ0FBQyxFQUFDO2dCQUUxQixnREFBd0QsR0FBRyxFQUFFO29CQUMzRCwyQkFBSSxzQ0FBd0IsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFDO29CQUU5QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSwyQkFBSSwrQkFBVSxDQUFDLENBQUM7Z0JBQ2xELENBQUMsRUFBQztnQkEvTEEsMkJBQUksNkJBQVEsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBSSwyQ0FBc0IsQ0FBQyxDQUFDO2dCQUUzRCwyQkFBSSw0QkFBTyxDQUFDLGlCQUFpQixDQUFDLDJCQUFJLDBDQUFxQixDQUFDLENBQUM7Z0JBRXpELDJCQUFJLHNDQUFpQixDQUFDLGlCQUFpQixDQUNyQywyQkFBSSxvREFBK0IsQ0FDcEMsQ0FBQztnQkFFRiwyQkFBSSw0QkFBTyxDQUFDLGlCQUFpQixDQUFDLDJCQUFJLDBDQUFxQixDQUFDLENBQUM7Z0JBRXpELDJCQUFJLCtCQUFVLENBQUMsaUJBQWlCLENBQUMsMkJBQUksNkNBQXdCLENBQUMsQ0FBQztZQUNqRSxDQUFDO1lBTUQ7Ozs7O2VBS0c7WUFDSCxJQUFJLEtBQUs7Z0JBQ1AsT0FBTywyQkFBSSw0QkFBTyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO2dCQUNiLDJCQUFJLDRCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsMkJBQUksd0JBQVUsS0FBSyxPQUFDLEVBQUUsMkJBQUksMENBQXFCLENBQUMsQ0FBQztZQUN4RSxDQUFDO1lBU0Q7Ozs7O2VBS0c7WUFDSCxJQUFJLGVBQWU7Z0JBQ2pCLE9BQU8sMkJBQUksc0NBQWlCLENBQUM7WUFDL0IsQ0FBQztZQUVELElBQUksZUFBZSxDQUFDLEtBQUs7Z0JBQ3ZCLDJCQUFJLHNDQUFpQixDQUFDLE9BQU8sQ0FDM0IsQ0FBQywyQkFBSSxrQ0FBb0IsS0FBSyxPQUFDLEVBQy9CLDJCQUFJLG9EQUErQixDQUNwQyxDQUFDO1lBQ0osQ0FBQztZQUVEOzs7OztlQUtHO1lBQ0gsSUFBSSxNQUFNO2dCQUNSLE9BQU8sMkJBQUksNkJBQVEsQ0FBQztZQUN0QixDQUFDO1lBTUQsSUFBSSxNQUFNLENBQUMsS0FBSztnQkFDZCwyQkFBSSw2QkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLDJCQUFJLHlCQUFXLEtBQUssT0FBQyxFQUFFLDJCQUFJLDJDQUFzQixDQUFDLENBQUM7WUFDM0UsQ0FBQztZQUVELGNBQWMsQ0FBQyxTQUFpQjtnQkFDOUIsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUU5QixJQUFJLDJCQUFJLHNDQUFpQixDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDeEMsTUFBTSxXQUFXLEdBQ2YsQ0FBQywyQkFBSSxzQ0FBaUIsQ0FBQywyQkFBSSw0QkFBTyxDQUFDLElBQUksQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLDJCQUFJLGlEQUE0QixDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQztvQkFFUCxJQUFJLFdBQVcsS0FBSyxDQUFDO3dCQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLDJCQUFJLDRCQUFPLENBQUMsQ0FBQzs7d0JBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsMkJBQUksNEJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUM7Z0JBQ25ELENBQUM7Z0JBRUQsSUFBSSwyQkFBSSwrQkFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksMkJBQUksK0JBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ3JELE1BQU0sYUFBYSxHQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsMkJBQUksMENBQXFCLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBRTlELElBQUksOERBQVUsQ0FBQywyQkFBSSw2QkFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLDhEQUFVLENBQUMsMkJBQUksNkJBQVEsRUFBRSxHQUFHLENBQUM7d0JBQ2hFLDJCQUFJLHlCQUFXLDJCQUFJLDZCQUFRLENBQUMsSUFBSSxFQUFFLE9BQUM7b0JBRXJDLElBQUksYUFBYSxLQUFLLENBQUM7d0JBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsMkJBQUksNkJBQVEsQ0FBQyxDQUFDOzt3QkFFbkUsSUFBSSxDQUFDLFVBQVUsQ0FDYiwyQkFBSSwrQkFBVSxDQUFDLENBQUMsR0FBRyxhQUFhLEVBQ2hDLDJCQUFJLCtCQUFVLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FDakMsQ0FBQztnQkFDTixDQUFDO1lBQ0gsQ0FBQztZQUVELHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUI7Z0JBRXZCLElBQUksUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUN0QixRQUFRLElBQUksRUFBRSxDQUFDO3dCQUNiLEtBQUssT0FBTzs0QkFDVixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQ0FBRSxPQUFPOzRCQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLHNFQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUM3QyxNQUFNO3dCQUNSLEtBQUssa0JBQWtCOzRCQUNyQixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRTtnQ0FBRSxPQUFPOzRCQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLHNFQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUN2RCxNQUFNO3dCQUNSLEtBQUssUUFBUTs0QkFDWCxJQUFJLDJCQUFJLDZCQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUTtnQ0FDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxzRUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDbkQsTUFBTTt3QkFDUixLQUFLLE9BQU87NEJBQ1YsTUFBTSxRQUFRLEdBQUcsc0VBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ3BELElBQUksQ0FBQywyQkFBSSw0QkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0NBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7NEJBQ3pELE1BQU07d0JBQ1IsS0FBSyxVQUFVOzRCQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsc0VBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ25ELE1BQU07b0JBQ1YsQ0FBQztnQkFDSCxDQUFDO2dCQUVELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFFRCxVQUFVLENBQUMsQ0FBUyxFQUFFLENBQVM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFBRSxPQUFPO2dCQUUvQiwyQkFBSSw2QkFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLDJCQUFJLDZCQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBRUQ7O2VBRUc7WUFDSCxlQUFlLENBQUMsS0FBWTtnQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxpREFBSyxDQUFDLE9BQU8sQ0FBQywyQkFBSSw0QkFBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQUVEOztlQUVHO1lBQ0gsc0JBQXNCLENBQUMsS0FBWTtnQkFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxpREFBSyxDQUFDLE9BQU8sQ0FBQywyQkFBSSw0QkFBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQU1EOzs7Ozs7O2VBT0c7WUFDSCxJQUFJLEtBQUs7Z0JBQ1AsT0FBTywyQkFBSSw0QkFBTyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxLQUF3QjtnQkFDaEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztvQkFDOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSx1REFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUV4QyxJQUFJLDJCQUFJLDRCQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFBRSxPQUFPO29CQUU1QyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLDJCQUFJLHdCQUFVLFdBQVcsT0FBQyxDQUFDLENBQUM7b0JBRTFELE9BQU87Z0JBQ1QsQ0FBQztnQkFFRCwyQkFBSSw0QkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLDJCQUFJLHdCQUFVLEtBQUssT0FBQyxFQUFFLDJCQUFJLDBDQUFxQixDQUFDLENBQUM7WUFDeEUsQ0FBQztZQVVEOzs7OztlQUtHO1lBQ0gsSUFBSSxRQUFRO2dCQUNWLE9BQU8sMkJBQUksK0JBQVUsQ0FBQztZQUN4QixDQUFDO1lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSztnQkFDaEIsMkJBQUksK0JBQVUsQ0FBQyxPQUFPLENBQ3BCLENBQUMsMkJBQUksMkJBQWEsS0FBSyxPQUFDLEVBQ3hCLDJCQUFJLDZDQUF3QixDQUM3QixDQUFDO1lBQ0osQ0FBQztTQUNGOzs7Ozs7Ozs7Ozs7O1FBbk9RLHFCQUFrQixHQUFhO1lBQ3BDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjtZQUMxQixPQUFPO1lBQ1Asa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixPQUFPO1lBQ1AsVUFBVTtTQUNWO1dBNE5GO0FBQ0osQ0FBQztBQUVELFNBQVMsWUFBWSxDQUVuQixJQUFPO0lBQ1AsT0FBTyxNQUFNLFlBQWEsU0FBUSxJQUFJO1FBQ3BDLE1BQU0sQ0FBQyxRQUErQjtZQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFFN0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVELFdBQVcsQ0FBQyxRQUErQjtZQUN6QyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUlNLE1BQU0sd0JBQXlCLFNBQVEsWUFBWSxDQUN4RCxhQUFhLENBQUMscUZBQTRCLENBQUMsQ0FDNUM7Q0FBRztBQUVHLE1BQU0sdUJBQXdCLFNBQVEsWUFBWSxDQUN2RCxhQUFhLENBQUMsb0ZBQTJCLENBQUMsQ0FDM0M7Q0FBRztBQUVHLFNBQVMsWUFBWSxDQUFpQyxJQUFPOztJQUNsRSxZQUFPLE1BQU0sc0JBQXVCLFNBQVEsYUFBYSxDQUFDLElBQUksQ0FBQztZQUF4RDs7O2dCQWFMLHNEQUF1QixHQUFHLEVBQUU7b0JBQzFCLDJCQUFJLDJGQUEwQixNQUE5QixJQUFJLENBQTRCLENBQUM7Z0JBQ25DLENBQUMsRUFBQztZQXFDSixDQUFDO1lBbkRDLElBQUksTUFBTTtnQkFDUixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdEIsQ0FBQztZQUVELElBQUksTUFBTSxDQUFDLEtBQUs7Z0JBQ2QsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFM0MsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBRXJCLElBQUksTUFBTTtvQkFBRSwyQkFBSSwyRkFBMEIsTUFBOUIsSUFBSSxDQUE0QixDQUFDO1lBQy9DLENBQUM7WUFNRCxJQUFJLEtBQUs7Z0JBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3JCLENBQUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO2dCQUNiLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUVwQixLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLDJCQUFJLG1EQUFxQixDQUFDLENBQUM7Z0JBRXpELElBQUksTUFBTTtvQkFBRSwyQkFBSSwyRkFBMEIsTUFBOUIsSUFBSSxDQUE0QixDQUFDO1lBQy9DLENBQUM7WUFFRCxpQkFBaUI7Z0JBQ2YsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBRTFCLDJCQUFJLDJGQUEwQixNQUE5QixJQUFJLENBQTRCLENBQUM7WUFDbkMsQ0FBQztTQWlCRjs7OztZQWRHLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFO2lCQUM5QixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQzNDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFDOUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekMsSUFBSSxTQUFTLENBQUMsVUFBVTtnQkFBRSxPQUFPO1lBRWpDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztZQUV2QyxJQUFJLENBQUMsa0JBQWtCLENBQ3JCLFdBQVcsRUFDWCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ3hDLENBQUM7UUFDSixDQUFDO1dBQ0Q7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMVV5QztBQUVuQyxTQUFTLE9BQU8sQ0FBaUMsSUFBTztJQUM3RCxPQUFPLEtBQU0sU0FBUSx1REFBVSxDQUFDLElBQUksQ0FBQztRQUNuQzs7V0FFRztRQUNILGNBQWM7WUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FDM0IsU0FBUyxFQUNULEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FDekMsQ0FBQztRQUNKLENBQUM7UUFFRCxJQUFJLE1BQU07WUFDUixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQztRQUVELElBQUksTUFBTSxDQUFDLEtBQUs7WUFDZCxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBRW5DLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXJCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRUQsSUFBSSxLQUFLO1lBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1lBQ2IsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUVsQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUVwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEM2RDtBQUNQO0FBR2hELFNBQVMsa0JBQWtCLENBR2hDLElBQU8sRUFBRSxRQUFXOztJQUNwQixZQUFPLEtBQU0sU0FBUSwwRUFBa0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO1lBT3RELFlBQVksR0FBRyxJQUFXO2dCQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFMakIsZ0NBQXdDO2dCQUN4QyxvQkFBWSxLQUFLLEVBQUM7Z0JBQ2xCLHFCQUFhLEtBQUssRUFBQztnQkFLakIsMkJBQUksaUJBQWlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQUM7WUFDeEQsQ0FBQztZQUVELHdCQUF3QixDQUN0QixJQUFZLEVBQ1osUUFBdUIsRUFDdkIsUUFBdUI7Z0JBRXZCLElBQUksUUFBUSxLQUFLLElBQUk7b0JBQ25CLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRWxFLFFBQVEsSUFBSSxFQUFFLENBQUM7b0JBQ2IsS0FBSyxRQUFRO3dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO3dCQUN2QixPQUFPO29CQUVULEtBQUssT0FBTzt3QkFDVixJQUFJLENBQUMsS0FBSyxHQUFHLHNFQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM5QyxPQUFPO29CQUVULEtBQUssUUFBUTt3QkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLHNFQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMvQyxPQUFPO29CQUVUO3dCQUNFLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7WUFDSCxDQUFDO1lBRUQsaUJBQWlCO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUNqQiwyQkFBSSxxQkFBYyxFQUNsQixRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FDMUMsQ0FBQztnQkFFRixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBRUQsSUFBSSxZQUFZO2dCQUNkLE9BQU8sMkJBQUkscUJBQWMsQ0FBQztZQUM1QixDQUFDO1lBRUQ7Ozs7O2VBS0c7WUFDSCxJQUFJLE1BQU07Z0JBQ1IsT0FBTywyQkFBSSxxQkFBYyxDQUFDLEdBQUcsQ0FBQztZQUNoQyxDQUFDO1lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztnQkFDZCxJQUFJLEtBQUssS0FBSywyQkFBSSxxQkFBYyxDQUFDLEdBQUc7b0JBQUUsT0FBTztnQkFFN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQywyQkFBSSxxQkFBYyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUVoRSwyQkFBSSxxQkFBYyxDQUFDLGdCQUFnQixDQUNqQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDdkMsR0FBRyxFQUFFO29CQUNILElBQUksMkJBQUksaUJBQVUsRUFBRSxDQUFDO3dCQUNuQixJQUFJLDJCQUFJLGtCQUFXOzRCQUFFLE9BQU87d0JBRTVCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzt3QkFFaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztvQkFDOUMsQ0FBQzt5QkFBTSxJQUFJLDJCQUFJLGtCQUFXLEVBQUUsQ0FBQzt3QkFDM0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO3dCQUVuRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO29CQUM3QyxDQUFDO3lCQUFNLENBQUM7d0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ2pDLENBQUM7Z0JBQ0gsQ0FBQyxDQUNGLENBQUM7WUFDSixDQUFDO1lBRUQsTUFBTSxDQUFDLFFBQStCO2dCQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV2QixRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDeEIsMkJBQUkscUJBQWMsRUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ2QsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7Z0JBRUYsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNkLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FDWixDQUFDO2dCQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUVELElBQUksVUFBVTtnQkFDWixPQUFPLDJCQUFJLHFCQUFjLFlBQVksZ0JBQWdCO29CQUNuRCxDQUFDLENBQUMsMkJBQUkscUJBQWMsQ0FBQyxZQUFZO29CQUNqQyxDQUFDLENBQUMsMkJBQUkscUJBQWMsQ0FBQyxVQUFVLENBQUM7WUFDcEMsQ0FBQztZQUVELElBQUksS0FBSztnQkFDUCxPQUFPLDJCQUFJLHFCQUFjLENBQUMsS0FBSyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO2dCQUNiLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXZDLElBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLO29CQUFFLE9BQU87Z0JBRXhDLDJCQUFJLGFBQWEsSUFBSSxPQUFDO2dCQUV0QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLDJCQUFJLHFCQUFjLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBRXhFLElBQUksMkJBQUksa0JBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFFckQsTUFBTSxVQUFVLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDO1lBQzVCLENBQUM7WUFFRCxJQUFJLFdBQVc7Z0JBQ2IsT0FBTywyQkFBSSxxQkFBYyxZQUFZLGdCQUFnQjtvQkFDbkQsQ0FBQyxDQUFDLDJCQUFJLHFCQUFjLENBQUMsYUFBYTtvQkFDbEMsQ0FBQyxDQUFDLDJCQUFJLHFCQUFjLENBQUMsV0FBVyxDQUFDO1lBQ3JDLENBQUM7WUFFRCxJQUFJLE1BQU07Z0JBQ1IsT0FBTywyQkFBSSxxQkFBYyxDQUFDLE1BQU0sQ0FBQztZQUNuQyxDQUFDO1lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSztnQkFDZCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV2QyxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUV6QywyQkFBSSxjQUFjLElBQUksT0FBQztnQkFFdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQywyQkFBSSxxQkFBYyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUUxRSxJQUFJLDJCQUFJLGlCQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBRXJELE1BQU0sV0FBVyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUU3QyxJQUFJLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQztZQUM1QixDQUFDO1NBQ0Y7Ozs7UUEvSlEscUJBQWtCLEdBQUcsQ0FBQyxHQUFHLHlDQUF3QixFQUFFLFFBQVEsQ0FBRTtXQStKcEU7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUt3RDtBQUNGO0FBQ2Q7QUFFTTtBQWtCL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQzNCLG1CQUFtQixNQUFNLENBQUMsTUFBTSxDQUFDLGlEQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQzFELENBQUM7QUFFRixNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7QUFFM0QsTUFBTSxlQUFlLEdBQXdCO0lBQ2xELE1BQU0sQ0FBQyxXQUFXO1FBQ2hCLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxPQUFPLENBQUMsV0FBVztRQUNqQixRQUFRLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLEtBQUssTUFBTTtnQkFDVCxPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssT0FBTztnQkFDVixPQUFPLEtBQUssQ0FBQztZQUNmO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLFdBQVcsY0FBYyxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFDRCxZQUFZLENBQUMsV0FBVztRQUN0QixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsRSxNQUFNLFlBQVksR0FBRyxJQUFJLCtEQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFOUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNELEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRCxRQUFRLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUM7Z0JBQ0osT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksaURBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLEtBQUssQ0FBQztnQkFDSixPQUFPLElBQUksaURBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsS0FBSyxDQUFDO2dCQUNKLE9BQU8sSUFBSSxpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsS0FBSyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxJQUFJLENBQ1YsU0FBUyxPQUFPLENBQUMsTUFBTSw0REFBNEQsQ0FDcEYsQ0FBQztZQUNKO2dCQUNFLE9BQU8sSUFBSSxpREFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7SUFDSCxDQUFDO0lBQ0QsZUFBZSxDQUFDLFdBQVc7UUFDekIsSUFBSSxXQUFXLEtBQUssTUFBTSxJQUFJLFdBQVcsS0FBSyxVQUFVO1lBQ3RELE9BQU8sV0FBVyxDQUFDO1FBRXJCLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsUUFBUSxDQUFDLFdBQVc7UUFDbEIsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5FLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFdkUsUUFBUSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sSUFBSSx1REFBUSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sSUFBSSx1REFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUssQ0FBQztnQkFDSixPQUFPLENBQUMsSUFBSSxDQUNWLFNBQVMsT0FBTyxDQUFDLE1BQU0sOERBQThELENBQ3RGLENBQUM7WUFDSjtnQkFDRSxPQUFPLElBQUksdURBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFDRCxLQUFLLENBQUMsV0FBVztRQUNmLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0MsSUFBSSxJQUFJLEtBQUssSUFBSTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFekUsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFtQixDQUFDO1FBRXZDLE9BQU8sSUFBSSxpREFBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0dLLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUNoRCxLQUFLLENBQUMsT0FBTyxDQUNYLGFBQWEsRUFDYixDQUFDLENBQUMsRUFBRSxlQUF1QixFQUFFLGNBQXNCLEVBQUUsRUFBRSxDQUNyRCxHQUFHLGVBQWUsSUFBSSxjQUFjLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FDdkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTEcsU0FBUyxVQUFVLENBQUMsR0FBTyxFQUFFLFdBQXdCO0lBQzFELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFckUsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDN0IsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QyxJQUFJLFNBQVMsS0FBSyxJQUFJO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQ2IscUNBQXFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUMzRCxDQUFDO1FBRUosT0FBTyxVQUFVLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLFVBQVUsQ0FBQyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFdEMsT0FBTyxVQUFVLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQztBQUN0QyxDQUFDOzs7Ozs7O1NDakJEO1NBQ0E7O1NBRUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7O1NBRUE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7Ozs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUU7QUFJNUI7QUFDRztBQUNNO0FBQ047QUFHYTtBQUNvQjtBQUNqQjtBQUlyQjtBQUM0QztBQU9uRDtBQUVjO0FBQ2U7QUFDSDtBQUNaO0FBTzFDLFNBQVMsS0FBSyxDQUFDLElBQVksRUFBRSxJQUFhO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXBFLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBRWxCLFNBQVMsSUFBSTtRQUNYLE1BQU0sTUFBTSxHQUFHO1lBQ2IsS0FBSztZQUNMLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxLQUFLLElBQUk7U0FDNUIsQ0FBQztRQUVGLEtBQUssSUFBSSxJQUFJLENBQUM7UUFFZCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsT0FBTztRQUNMLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNmLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUk7S0FDTCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsY0FBYyxDQUNyQixLQUFhLEVBQ2IsU0FBK0I7SUFFL0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQVFELGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLDBFQUFxQixDQUFDLENBQUM7QUF1QjNELE1BQU0sUUFBUSxHQUF1QztJQUNuRCxRQUFRLEVBQUU7UUFDUixhQUFhLEVBQUUsMEVBQXFCO1FBQ3BDLGNBQWM7UUFDZCxLQUFLLEVBQUU7WUFDTCxhQUFhLEVBQUUsaUVBQWE7WUFDNUIsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsc0JBQXNCO1NBQ3ZCO0tBQ0Y7Q0FDRixDQUFDO0FBaUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL2FuZ2xlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9ib3JkZXJSYWRpdXMudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL2NsaWNrLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9jb2xvci50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvZ3JhZGllbnQudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL2tleWJvYXJkLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9tb3VzZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvcmFuZG9tLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy9zaGFkb3cudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9jbGFzc2VzL3N0YXRlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvY2xhc3Nlcy91bml0cy50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2NsYXNzZXMvdmVjdG9yMmQudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy9hdWRpby9hdWRpby50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL2RvY3VtZW50L2NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL2RvY3VtZW50L2RvbUJhc2UudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy9kb2N1bWVudC9wYXJhZ3JhcGgudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy9kb2N1bWVudC9zcGFuLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvbWl4YWJsZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9iZXppZXIudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvYzJkQmFzZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvZWxsaXBzZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9pbWFnZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9saW5lLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL3JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL3NoYXBlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2UudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvc3ZnU1ZHLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvZWxlbWVudHMvdmlzdWFsL3RleHQudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9lbGVtZW50cy92aXN1YWwvdmlkZW8udHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvY2hpbGRyZW4udHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvZGltZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9maWxsLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL2ZvbnQudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvZnJvbVRvLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL29mZnNldC50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy9yZWN0YW5nbGVCb3VuZHMudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci8uL3NyYy9taXhpbnMvc3Ryb2tlLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyLy4vc3JjL21peGlucy92aWV3Qm94LnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvbWl4aW5zL3Zpc3VhbE1lZGlhLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvdXRsaXRpZXMvY2FtZWxUb0tlYmFiLnRzIiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvdXRsaXRpZXMvcmVhZE9ubHkudHMiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AY2FsZWJmb3NzL3dlYi1zcGlubmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGNhbGViZm9zcy93ZWItc3Bpbm5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BjYWxlYmZvc3Mvd2ViLXNwaW5uZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0TG9uZyA9IGtleW9mICh0eXBlb2YgQW5nbGUpW1widW5pdFwiXTtcclxuXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVW5pdFNob3J0ID1cclxuICAodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl1ba2V5b2YgKHR5cGVvZiBBbmdsZSlbXCJ1bml0XCJdXTtcclxuXHJcbmNvbnN0IHVuaXRzSW5DaXJjbGU6IHtcclxuICBbVSBpbiBBbmdsZVVuaXRTaG9ydF06IG51bWJlcjtcclxufSA9IHtcclxuICBkZWc6IDM2MCxcclxuICByYWQ6IE1hdGguUEkgKiAyLFxyXG4gIGdyYWQ6IDQwMCxcclxuICB0dXJuOiAxLFxyXG59O1xyXG5cclxudHlwZSBBbmdsZUNvbnZlcnRlciA9IHtcclxuICBbVSBpbiBrZXlvZiAodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl1dOiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQW5nbGUgZXh0ZW5kcyBTdGF0ZTxudW1iZXI+IGltcGxlbWVudHMgQW5nbGVDb252ZXJ0ZXIge1xyXG4gICNjb252ZXJzaW9ucyA9IG5ldyBNYXA8RXhjbHVkZTxBbmdsZVVuaXRTaG9ydCwgXCJyYWRcIj4sIG51bWJlcj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IodW5pdDogQW5nbGVVbml0U2hvcnQsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJhZGlhbnMgPSB1bml0ID09PSBcInJhZFwiID8gdmFsdWUgOiBBbmdsZS5jb252ZXJ0KHZhbHVlLCB1bml0LCBcInJhZFwiKTtcclxuXHJcbiAgICBzdXBlcihyYWRpYW5zKTtcclxuXHJcbiAgICBpZiAodW5pdCAhPT0gXCJyYWRcIikgdGhpcy4jY29udmVyc2lvbnMuc2V0KHVuaXQsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gICNnZXRDb252ZXJ0ZWQodW5pdDogRXhjbHVkZTxBbmdsZVVuaXRTaG9ydCwgXCJyYWRcIj4pIHtcclxuICAgIGNvbnN0IGNhY2hlZCA9IHRoaXMuI2NvbnZlcnNpb25zLmdldCh1bml0KTtcclxuXHJcbiAgICBpZiAoY2FjaGVkICE9PSB1bmRlZmluZWQpIHJldHVybiBjYWNoZWQ7XHJcblxyXG4gICAgY29uc3QgY29udmVyc2lvbiA9IEFuZ2xlLmNvbnZlcnQodGhpcy52YWx1ZSwgXCJyYWRcIiwgdW5pdCk7XHJcblxyXG4gICAgdGhpcy4jY29udmVyc2lvbnMuc2V0KHVuaXQsIGNvbnZlcnNpb24pO1xyXG5cclxuICAgIHJldHVybiBjb252ZXJzaW9uO1xyXG4gIH1cclxuXHJcbiAgI3NldENvbnZlcnRlZCh1bml0OiBFeGNsdWRlPEFuZ2xlVW5pdFNob3J0LCBcInJhZFwiPiwgdmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy4jY29udmVyc2lvbnMuc2V0KHVuaXQsIHZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnZhbHVlID0gQW5nbGUuY29udmVydCh2YWx1ZSwgdW5pdCwgXCJyYWRcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDdXJyZW50IHZhbHVlIGluIGRlZ3JlZXMuIDM2MCBkZWdyZWVzIGlzIGEgY29tcGxldGUgcm90YXRpb24uXHJcbiAgICovXHJcblxyXG4gIGdldCBkZWdyZWVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy4jZ2V0Q29udmVydGVkKFwiZGVnXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRlZ3JlZXModmFsdWUpIHtcclxuICAgIHRoaXMuI3NldENvbnZlcnRlZChcImRlZ1wiLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIGNvbnN0IGNvbnZlcnNpb25Db3VudCA9IHRoaXMuI2NvbnZlcnNpb25zLnNpemU7XHJcblxyXG4gICAgY29uc3QgW3VuaXQsIHZhbHVlXSA9XHJcbiAgICAgIGNvbnZlcnNpb25Db3VudCA9PT0gMFxyXG4gICAgICAgID8gW1wicmFkXCIgYXMgQW5nbGVVbml0U2hvcnQsIHRoaXMudmFsdWVdXHJcbiAgICAgICAgOiBBcnJheS5mcm9tKHRoaXMuI2NvbnZlcnNpb25zKVtjb252ZXJzaW9uQ291bnQgLSAxXTtcclxuXHJcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IE51bWJlci5pc0ludGVnZXIodmFsdWUpXHJcbiAgICAgID8gdmFsdWUudG9TdHJpbmcoKVxyXG4gICAgICA6IHZhbHVlLnRvUHJlY2lzaW9uKDIpO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZVN0cmluZyArIHVuaXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBhIG51bWJlciBmcm9tIG9uZSBhbmdsZSB1bml0IHRvIGFub3RoZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmFsdWUgYW5nbGUgbnVtYmVyIHRvIGNvbnZlcnRcclxuICAgKiBAcGFyYW0gdW5pdEZyb20gYW5nbGUgdW5pdCB0byBjb252ZXJ0IGZyb21cclxuICAgKiBAcGFyYW0gdW5pdFRvIHVuaXQgdG8gY29udmVydCB0b1xyXG4gICAqIEByZXR1cm5zIGNvbnZlcnRlZCB2YWx1ZVxyXG4gICAqL1xyXG5cclxuICBzdGF0aWMgY29udmVydChcclxuICAgIHZhbHVlOiBudW1iZXIsXHJcbiAgICB1bml0RnJvbTogQW5nbGVVbml0U2hvcnQsXHJcbiAgICB1bml0VG86IEFuZ2xlVW5pdFNob3J0XHJcbiAgKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB2YWx1ZSAqICh1bml0c0luQ2lyY2xlW3VuaXRUb10gLyB1bml0c0luQ2lyY2xlW3VuaXRGcm9tXSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEFuZ2xlIGZyb20gYSB2YWx1ZSBpbiBkZWdyZWVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZhbHVlIG51bWJlciBvZiBkZWdyZWVzXHJcbiAgICogQHJldHVybnNcclxuICAgKi9cclxuXHJcbiAgc3RhdGljIGRlZ3JlZXModmFsdWU6IG51bWJlcik6IEFuZ2xlIHtcclxuICAgIHJldHVybiBuZXcgQW5nbGUoQW5nbGUudW5pdC5kZWdyZWVzLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYW5vdGhlciBhbmdsZSByZXByZXNlbnRzIHRoZSBzYW1lIHZhbHVlIGFzIHRoaXMgb25lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG90aGVyIEFuZ2xlIHRvIGNvbXBhcmVcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBhbmdsZXMgYXJlIGVxdWFsLlxyXG4gICAqL1xyXG5cclxuICBlcXVhbHMob3RoZXI6IEFuZ2xlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3VwZXIuZXF1YWxzKG90aGVyKSB8fCB0aGlzLnJhZGlhbnMgPT09IG90aGVyLnJhZGlhbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDdXJyZW50IHZhbHVlIGluIGdyYWRpYW5zLiA0MDAgZ3JhZGlhbnMgaXMgYSBjb21wbGV0ZSByb3RhdGlvbi5cclxuICAgKi9cclxuXHJcbiAgZ2V0IGdyYWRpYW5zKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy4jZ2V0Q29udmVydGVkKFwiZ3JhZFwiKTtcclxuICB9XHJcblxyXG4gIHNldCBncmFkaWFucyh2YWx1ZSkge1xyXG4gICAgdGhpcy4jc2V0Q29udmVydGVkKFwiZ3JhZFwiLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEFuZ2xlIGZyb20gdmFsdWUgaW4gcmFkaWFucy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBudW1iZXIgb2YgcmFkaWFuc1xyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcblxyXG4gIHN0YXRpYyByYWRpYW5zKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgQW5nbGUoQW5nbGUudW5pdC5yYWRpYW5zLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDdXJyZW50IHZhbHVlIGluIHJhZGlhbnMuIDLPgCByYWRpYW5zIGlzIGEgY29tcGxldGUgcm90YXRpb24uXHJcbiAgICovXHJcblxyXG4gIGdldCByYWRpYW5zKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCByYWRpYW5zKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI2NvbnZlcnNpb25zLmNsZWFyKCk7XHJcblxyXG4gICAgc3VwZXIudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgdmFsdWUgaW4gdHVybnMuIDEgdHVybiBpcyBhIGNvbXBsZXRlIHJvdGF0aW9uLlxyXG4gICAqL1xyXG5cclxuICBnZXQgdHVybigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuI2dldENvbnZlcnRlZChcInR1cm5cIik7XHJcbiAgfVxyXG5cclxuICBzZXQgdHVybih2YWx1ZSkge1xyXG4gICAgdGhpcy4jc2V0Q29udmVydGVkKFwidHVyblwiLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3N0IHJlY2VudGx5IHVzZWQgYW5nbGUgdW5pdFxyXG4gICAqL1xyXG5cclxuICBnZXQgdW5pdCgpOiBBbmdsZVVuaXRMb25nIHtcclxuICAgIGNvbnN0IGNvbnZlcnNpb25Db3VudCA9IHRoaXMuI2NvbnZlcnNpb25zLnNpemU7XHJcblxyXG4gICAgY29uc3QgW3Nob3J0VW5pdF0gPVxyXG4gICAgICBjb252ZXJzaW9uQ291bnQgPT09IDBcclxuICAgICAgICA/IFtcInJhZFwiIGFzIEFuZ2xlVW5pdFNob3J0LCB0aGlzLnZhbHVlXVxyXG4gICAgICAgIDogQXJyYXkuZnJvbSh0aGlzLiNjb252ZXJzaW9ucylbY29udmVyc2lvbkNvdW50IC0gMV07XHJcblxyXG4gICAgY29uc3QgbG9uZ1VuaXQgPSBPYmplY3Qua2V5cyhBbmdsZS51bml0KS5maW5kKFxyXG4gICAgICAoa2V5KSA9PiBBbmdsZS51bml0W2tleSBhcyBBbmdsZVVuaXRMb25nXSA9PT0gc2hvcnRVbml0XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChsb25nVW5pdCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGFuZ2xlIHVuaXQ6ICR7c2hvcnRVbml0fWApO1xyXG5cclxuICAgIHJldHVybiBsb25nVW5pdCBhcyBBbmdsZVVuaXRMb25nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFwIG9mIGFuZ2xlIHVuaXRzLiBUaGUga2V5cyBhcmUgdGhlIGZ1bGwgbmFtZXMgb2YgdW5pdHMsIGFuZCB0aGVpclxyXG4gICAqIGNvcnJlc3BvbmRpbmcgdmFsdWUgaXMgdGhlIGFiYnJldmlhdGlvbiB1c2VkIGluIENTUyBhbmQgYXR0cmlidXRlIHZhbHVlcy5cclxuICAgKi9cclxuXHJcbiAgc3RhdGljIHVuaXQgPSB7XHJcbiAgICBkZWdyZWVzOiBcImRlZ1wiLFxyXG4gICAgcmFkaWFuczogXCJyYWRcIixcclxuICAgIGdyYWRpYW5zOiBcImdyYWRcIixcclxuICAgIHR1cm46IFwidHVyblwiLFxyXG4gIH0gYXMgY29uc3Q7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcCBvZiBhbmdsZSB1bml0IGFiYnJldmlhdGlvbnMgYW5kIHRoZSBjb3JyZXNwb25kaW5nIG51bWJlciBvZiB1bml0cyBpblxyXG4gICAqIGEgY29tcGxldGUgcm90YXRpb24uXHJcbiAgICovXHJcblxyXG4gIHN0YXRpYyBnZXQgdW5pdHNJbkNpcmNsZSgpOiB7IFt1bml0IGluIEFuZ2xlVW5pdFNob3J0XTogbnVtYmVyIH0ge1xyXG4gICAgcmV0dXJuIHVuaXRzSW5DaXJjbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gc3VwZXIudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWUpIHtcclxuICAgIHRoaXMucmFkaWFucyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBBbmdsZSB3aXRoIGEgdmFsdWUgb2YgMC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zXHJcbiAgICovXHJcblxyXG4gIHN0YXRpYyB6ZXJvKCk6IEFuZ2xlIHtcclxuICAgIHJldHVybiBBbmdsZS5yYWRpYW5zKDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG5jbGFzcyBCb3JkZXJSYWRpdXNCYXNlIHtcclxuICAjdG9wTGVmdDogbnVtYmVyO1xyXG4gICN0b3BSaWdodDogbnVtYmVyO1xyXG4gICNib3R0b21MZWZ0OiBudW1iZXI7XHJcbiAgI2JvdHRvbVJpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFsbDogbnVtYmVyKTtcclxuICBjb25zdHJ1Y3Rvcih0b3BMZWZ0QW5kQm90dG9tUmlnaHQ6IG51bWJlciwgdG9SaWdodEFuZEJvdHRvbUxlZnQ6IG51bWJlcik7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0b3BMZWZ0OiBudW1iZXIsXHJcbiAgICB0b3BSaWdodEFuZEJvdHRvbUxlZnQ6IG51bWJlcixcclxuICAgIGJvdHRvbVJpZ2h0OiBudW1iZXJcclxuICApO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdG9wTGVmdDogbnVtYmVyLFxyXG4gICAgdG9wUmlnaHQ6IG51bWJlcixcclxuICAgIGJvdHRvbVJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b21MZWZ0OiBudW1iZXJcclxuICApO1xyXG4gIGNvbnN0cnVjdG9yKGFyZzE6IG51bWJlciwgYXJnMj86IG51bWJlciwgYXJnMz86IG51bWJlciwgYm90dG9tTGVmdD86IG51bWJlcikge1xyXG4gICAgdGhpcy4jdG9wTGVmdCA9IGFyZzE7XHJcblxyXG4gICAgaWYgKGFyZzIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLiN0b3BSaWdodCA9IHRoaXMuI2JvdHRvbUxlZnQgPSB0aGlzLiNib3R0b21SaWdodCA9IGFyZzE7XHJcbiAgICB9IGVsc2UgaWYgKGFyZzMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLiNib3R0b21SaWdodCA9IGFyZzE7XHJcbiAgICAgIHRoaXMuI3RvcFJpZ2h0ID0gYXJnMjtcclxuICAgICAgdGhpcy4jYm90dG9tTGVmdCA9IGFyZzI7XHJcbiAgICB9IGVsc2UgaWYgKGJvdHRvbUxlZnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLiN0b3BSaWdodCA9IGFyZzI7XHJcbiAgICAgIHRoaXMuI2JvdHRvbUxlZnQgPSBhcmcyO1xyXG4gICAgICB0aGlzLiNib3R0b21SaWdodCA9IGFyZzM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiN0b3BSaWdodCA9IGFyZzI7XHJcbiAgICAgIHRoaXMuI2JvdHRvbVJpZ2h0ID0gYXJnMztcclxuICAgICAgdGhpcy4jYm90dG9tTGVmdCA9IGJvdHRvbUxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wTGVmdCgpIHtcclxuICAgIHJldHVybiB0aGlzLiN0b3BMZWZ0O1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvcExlZnQodmFsdWUpIHtcclxuICAgIHRoaXMuI3RvcExlZnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCB0b3BSaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLiN0b3BSaWdodDtcclxuICB9XHJcblxyXG4gIHNldCB0b3BSaWdodCh2YWx1ZSkge1xyXG4gICAgdGhpcy4jdG9wUmlnaHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBib3R0b21MZWZ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2JvdHRvbUxlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgYm90dG9tTGVmdCh2YWx1ZSkge1xyXG4gICAgdGhpcy4jYm90dG9tTGVmdCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJvdHRvbVJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2JvdHRvbVJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGJvdHRvbVJpZ2h0KHZhbHVlKSB7XHJcbiAgICB0aGlzLiNib3R0b21SaWdodCA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvcmRlclJhZGl1cyBleHRlbmRzIFN0YXRlPEJvcmRlclJhZGl1c0Jhc2U+IHtcclxuICBjb25zdHJ1Y3RvcihhbGw6IG51bWJlcik7XHJcbiAgY29uc3RydWN0b3IodG9wTGVmdEFuZEJvdHRvbVJpZ2h0OiBudW1iZXIsIHRvUmlnaHRBbmRCb3R0b21MZWZ0OiBudW1iZXIpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdG9wTGVmdDogbnVtYmVyLFxyXG4gICAgdG9wUmlnaHRBbmRCb3R0b21MZWZ0OiBudW1iZXIsXHJcbiAgICBib3R0b21SaWdodDogbnVtYmVyXHJcbiAgKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRvcExlZnQ6IG51bWJlcixcclxuICAgIHRvcFJpZ2h0OiBudW1iZXIsXHJcbiAgICBib3R0b21SaWdodDogbnVtYmVyLFxyXG4gICAgYm90dG9tTGVmdDogbnVtYmVyXHJcbiAgKTtcclxuICBjb25zdHJ1Y3RvcihhcmcxOiBudW1iZXIsIGFyZzI/OiBudW1iZXIsIGFyZzM/OiBudW1iZXIsIGJvdHRvbUxlZnQ/OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJhc2UgPVxyXG4gICAgICBhcmcyID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IG5ldyBCb3JkZXJSYWRpdXNCYXNlKGFyZzEpXHJcbiAgICAgICAgOiBhcmczID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IG5ldyBCb3JkZXJSYWRpdXNCYXNlKGFyZzEsIGFyZzIpXHJcbiAgICAgICAgOiBib3R0b21MZWZ0ID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IG5ldyBCb3JkZXJSYWRpdXNCYXNlKGFyZzEsIGFyZzIsIGFyZzMpXHJcbiAgICAgICAgOiBuZXcgQm9yZGVyUmFkaXVzQmFzZShhcmcxLCBhcmcyLCBhcmczLCBib3R0b21MZWZ0KTtcclxuXHJcbiAgICBzdXBlcihiYXNlKTtcclxuICB9XHJcblxyXG4gIGdldCB0b3BMZWZ0KCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbHVlLnRvcExlZnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdG9wTGVmdCh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnRvcExlZnQpIHJldHVybjtcclxuXHJcbiAgICBzdXBlci52YWx1ZS50b3BMZWZ0ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGdldCB0b3BSaWdodCgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZS50b3BSaWdodDtcclxuICB9XHJcblxyXG4gIHNldCB0b3BSaWdodCh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnRvcFJpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgc3VwZXIudmFsdWUudG9wUmlnaHQgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJvdHRvbVJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnZhbHVlLmJvdHRvbVJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGJvdHRvbVJpZ2h0KHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuYm90dG9tUmlnaHQpIHJldHVybjtcclxuXHJcbiAgICBzdXBlci52YWx1ZS5ib3R0b21SaWdodCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYm90dG9tTGVmdCgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZS5ib3R0b21MZWZ0O1xyXG4gIH1cclxuXHJcbiAgc2V0IGJvdHRvbUxlZnQodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5ib3R0b21MZWZ0KSByZXR1cm47XHJcblxyXG4gICAgc3VwZXIudmFsdWUuYm90dG9tTGVmdCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBlcXVhbHMob3RoZXI6IEJvcmRlclJhZGl1cykge1xyXG4gICAgY29uc3Qgb3RoZXJBcnJheSA9IG90aGVyLnRvQXJyYXkoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy50b0FycmF5KCkuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IG90aGVyQXJyYXlbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIHRvQXJyYXkoKSB7XHJcbiAgICByZXR1cm4gW3RoaXMudG9wTGVmdCwgdGhpcy50b3BSaWdodCwgdGhpcy5ib3R0b21SaWdodCwgdGhpcy5ib3R0b21MZWZ0XTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9BcnJheSgpLmpvaW4oXCIsIFwiKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiBzdXBlci52YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi92ZWN0b3IyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENsaWNrRGF0YSBleHRlbmRzIFZlY3RvcjJEIHtcclxuICAjY2xpY2tlZCA9IGZhbHNlO1xyXG5cclxuICBnZXQgY2xpY2tlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNjbGlja2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNsaWNrZWQodmFsdWUpIHtcclxuICAgIHRoaXMuI2NsaWNrZWQgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbGlja1RyYWNrZXIgZXh0ZW5kcyBDbGlja0RhdGEge1xyXG4gICN0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcclxuXHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBzdXBlci5jbGlja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHN1cGVyLnggPSBldmVudC54O1xyXG5cclxuICAgICAgc3VwZXIueSA9IGV2ZW50Lnk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkdmFuY2VGcmFtZSgpIHtcclxuICAgIHN1cGVyLmNsaWNrZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldCBjbGlja2VkKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLmNsaWNrZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcG9zaXRpb24oKTogVmVjdG9yMkQge1xyXG4gICAgaWYgKHRoaXMuI3RhcmdldCBpbnN0YW5jZW9mIFdpbmRvdykgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gdGhpcy4jdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIHJldHVybiBWZWN0b3IyRC54eShzdXBlci54IC0gYm91bmRpbmdSZWN0LngsIHN1cGVyLnkgLSBib3VuZGluZ1JlY3QueSk7XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLng7XHJcbiAgfVxyXG5cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIGhleChuOiBudW1iZXIpIHtcclxuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oTWF0aC5mbG9vcihuKSwgMjU1KSwgMClcclxuICAgIC50b1N0cmluZygxNilcclxuICAgIC5wYWRTdGFydCgyLCBcIjBcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvciB7XHJcbiAgI3N0cjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihncmF5OiBudW1iZXIsIGFscGhhPzogbnVtYmVyKTtcclxuICBjb25zdHJ1Y3RvcihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyLCBhbHBoYT86IG51bWJlcik7XHJcbiAgY29uc3RydWN0b3IoY29sb3JTdHJpbmc6IHN0cmluZyk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBmaXJzdEFyZzogbnVtYmVyIHwgc3RyaW5nLFxyXG4gICAgc2Vjb25kQXJnPzogbnVtYmVyLFxyXG4gICAgYmx1ZT86IG51bWJlcixcclxuICAgIGFscGhhPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRoaXMuI3N0ciA9IGZpcnN0QXJnO1xyXG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xyXG4gICAgICBjb25zdCBncmF5TnVtID0gZmlyc3RBcmc7XHJcbiAgICAgIGNvbnN0IGdyYXlIZXggPSBoZXgoZ3JheU51bSk7XHJcblxyXG4gICAgICBjb25zdCBhbHBoYU51bSA9IHNlY29uZEFyZztcclxuICAgICAgY29uc3QgYWxwaGFIZXggPSBhbHBoYU51bSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGhleChhbHBoYU51bSk7XHJcblxyXG4gICAgICB0aGlzLiNzdHIgPSBgIyR7Z3JheUhleH0ke2dyYXlIZXh9JHtncmF5SGV4fSR7YWxwaGFIZXh9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlZCA9IGZpcnN0QXJnO1xyXG4gICAgICBjb25zdCByZWRIZXggPSBoZXgocmVkKTtcclxuXHJcbiAgICAgIGNvbnN0IGdyZWVuID0gc2Vjb25kQXJnO1xyXG4gICAgICBjb25zdCBncmVlbkhleCA9IGhleChncmVlbiBhcyBudW1iZXIpO1xyXG5cclxuICAgICAgY29uc3QgYmx1ZUhleCA9IGhleChibHVlIGFzIG51bWJlcik7XHJcblxyXG4gICAgICBjb25zdCBhbHBoYUhleCA9IGFscGhhID09PSB1bmRlZmluZWQgPyBcIlwiIDogaGV4KGFscGhhKTtcclxuXHJcbiAgICAgIHRoaXMuI3N0ciA9IGAjJHtyZWRIZXh9JHtncmVlbkhleH0ke2JsdWVIZXh9JHthbHBoYUhleH1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdyYXkodmFsdWU6IG51bWJlciwgYWxwaGE/OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IodmFsdWUsIGFscGhhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZXF1YWxzKG90aGVyOiBDb2xvcikge1xyXG4gICAgcmV0dXJuIHRoaXMuI3N0ciA9PT0gb3RoZXIudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3N0cjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZ2IocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlciwgYWxwaGE/OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgQ29sb3IocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGhzbChcclxuICAgIGh1ZTogbnVtYmVyLFxyXG4gICAgc2F0dXJhdGlvbjogbnVtYmVyLFxyXG4gICAgbGlnaHRuZXNzOiBudW1iZXIsXHJcbiAgICBhbHBoYT86IG51bWJlclxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb2xvcihcclxuICAgICAgYGhzbCgke2h1ZX0gJHtzYXR1cmF0aW9ufSAke2xpZ2h0bmVzc30ke1xyXG4gICAgICAgIGFscGhhID09PSB1bmRlZmluZWQgPyBcIlwiIDogYCAvICR7YWxwaGF9YFxyXG4gICAgICB9KWBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEMyREJhc2UgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2MyZEJhc2VcIjtcclxuaW1wb3J0IHsgQW5nbGUgfSBmcm9tIFwiLi9hbmdsZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL2NvbG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4vdmVjdG9yMmRcIjtcclxuXHJcbmNsYXNzIENvbG9yU3RvcCB7XHJcbiAgI29mZnNldDogbnVtYmVyO1xyXG4gICNjb2xvcjogQ29sb3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9mZnNldDogbnVtYmVyLCBjb2xvcjogQ29sb3IpIHtcclxuICAgIHRoaXMuI29mZnNldCA9IG9mZnNldDtcclxuICAgIHRoaXMuI2NvbG9yID0gY29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgb2Zmc2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI29mZnNldDtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLiNjb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFkaWVudCB7XHJcbiAgI3N0b3BzOiBDb2xvclN0b3BbXSA9IFtdO1xyXG5cclxuICBhZGRDb2xvclN0b3Aob2Zmc2V0OiBudW1iZXIsIGNvbG9yOiBDb2xvcikge1xyXG4gICAgdGhpcy4jc3RvcHMucHVzaChuZXcgQ29sb3JTdG9wKG9mZnNldCwgY29sb3IpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhcHBseVN0b3BzKGdyYWRpZW50OiBDYW52YXNHcmFkaWVudCkge1xyXG4gICAgZm9yIChjb25zdCBzdG9wIG9mIHRoaXMuI3N0b3BzKSB7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChzdG9wLm9mZnNldCwgc3RvcC5jb2xvci50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkZWZpbmVTVkdTdG9wcyhkZWZpbml0aW9uOiBTVkdHcmFkaWVudEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHsgc3RvcHMgfSA9IHRoaXM7XHJcblxyXG4gICAgZm9yIChjb25zdCBzdG9wIG9mIHN0b3BzKSB7XHJcbiAgICAgIGNvbnN0IHN0b3BFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICBcInN0b3BcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgc3RvcEVsZW1lbnQuc2V0QXR0cmlidXRlKFwib2Zmc2V0XCIsIHN0b3Aub2Zmc2V0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgc3RvcEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3RvcC1jb2xvclwiLCBzdG9wLmNvbG9yLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgZGVmaW5pdGlvbi5hcHBlbmRDaGlsZChzdG9wRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCAuLi5hcmdzOiBhbnlbXSk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlJlbmRlciBjYWxsZWQgb24gYmFzZSBHcmFkaWVudCBjbGFzc1wiKTtcclxuICB9XHJcblxyXG4gIGdldCBzdG9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLiNzdG9wcztcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIFwiZ3JhZGllbnRcIjtcclxuICB9XHJcblxyXG4gIGdldCBzdmcoKTogU1ZHR3JhZGllbnRFbGVtZW50IHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgdHlwZSBvZiBncmFkaWVudCBpcyBub3QgeWV0IHN1cHBvcnRlZCBmb3IgU1ZHLlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lYXJHcmFkaWVudCBleHRlbmRzIEdyYWRpZW50IHtcclxuICAjY29sb3JTdGFydFg6IG51bWJlcjtcclxuICAjY29sb3JTdGFydFk6IG51bWJlcjtcclxuICAjY29sb3JFbmRYOiBudW1iZXI7XHJcbiAgI2NvbG9yRW5kWTogbnVtYmVyO1xyXG4gICNzdmc6IFNWR0xpbmVhckdyYWRpZW50RWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzdGFydFggPSAwLCBzdGFydFkgPSAwLCBlbmRYID0gMSwgZW5kWSA9IDEpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy4jY29sb3JTdGFydFggPSBzdGFydFg7XHJcbiAgICB0aGlzLiNjb2xvclN0YXJ0WSA9IHN0YXJ0WTtcclxuICAgIHRoaXMuI2NvbG9yRW5kWCA9IGVuZFg7XHJcbiAgICB0aGlzLiNjb2xvckVuZFkgPSBlbmRZO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgYm91bmRzWDogbnVtYmVyLFxyXG4gICAgYm91bmRzWTogbnVtYmVyLFxyXG4gICAgYm91bmRzV2lkdGg6IG51bWJlcixcclxuICAgIGJvdW5kc0hlaWdodDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCB4MCA9IGJvdW5kc1ggKyBib3VuZHNXaWR0aCAqIHRoaXMuI2NvbG9yU3RhcnRYO1xyXG4gICAgY29uc3QgeTAgPSBib3VuZHNZICsgYm91bmRzSGVpZ2h0ICogdGhpcy4jY29sb3JTdGFydFk7XHJcbiAgICBjb25zdCB4MSA9IGJvdW5kc1ggKyBib3VuZHNXaWR0aCAqIHRoaXMuI2NvbG9yRW5kWDtcclxuICAgIGNvbnN0IHkxID0gYm91bmRzWSArIGJvdW5kc0hlaWdodCAqIHRoaXMuI2NvbG9yRW5kWTtcclxuXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoeDAsIHkwLCB4MSwgeTEpO1xyXG5cclxuICAgIHRoaXMuYXBwbHlTdG9wcyhncmFkaWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHN2ZygpIHtcclxuICAgIGlmICh0aGlzLiNzdmcgIT09IG51bGwpIHJldHVybiB0aGlzLiNzdmc7XHJcblxyXG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxyXG4gICAgICBcImxpbmVhckdyYWRpZW50XCJcclxuICAgICk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCB0aGlzLiNjb2xvclN0YXJ0WC50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIHRoaXMuI2NvbG9yU3RhcnRZLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgdGhpcy4jY29sb3JFbmRYLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwieTJcIiwgdGhpcy4jY29sb3JFbmRZLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHRoaXMuZGVmaW5lU1ZHU3RvcHMoc3ZnRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuICh0aGlzLiNzdmcgPSBzdmdFbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSYWRpYWxHcmFkaWVudCBleHRlbmRzIEdyYWRpZW50IHtcclxuICAjc3RhcnRYOiBudW1iZXI7XHJcbiAgI3N0YXJ0WTogbnVtYmVyO1xyXG4gICNzdGFydFJhZGl1czogbnVtYmVyO1xyXG4gICNlbmRYOiBudW1iZXI7XHJcbiAgI2VuZFk6IG51bWJlcjtcclxuICAjZW5kUmFkaXVzOiBudW1iZXI7XHJcbiAgI3N2ZzogU1ZHUmFkaWFsR3JhZGllbnRFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgc3RhcnRYID0gMCxcclxuICAgIHN0YXJ0WSA9IDAsXHJcbiAgICBzdGFydFJhZGl1cyA9IDAsXHJcbiAgICBlbmRYID0gMCxcclxuICAgIGVuZFkgPSAwLFxyXG4gICAgZW5kUmFkaXVzID0gMVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLiNzdGFydFggPSBzdGFydFg7XHJcbiAgICB0aGlzLiNzdGFydFkgPSBzdGFydFk7XHJcbiAgICB0aGlzLiNzdGFydFJhZGl1cyA9IHN0YXJ0UmFkaXVzO1xyXG4gICAgdGhpcy4jZW5kWCA9IGVuZFg7XHJcbiAgICB0aGlzLiNlbmRZID0gZW5kWTtcclxuICAgIHRoaXMuI2VuZFJhZGl1cyA9IGVuZFJhZGl1cztcclxuICB9XHJcblxyXG4gIHJlbmRlcihcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGJvdW5kc1g6IG51bWJlcixcclxuICAgIGJvdW5kc1k6IG51bWJlcixcclxuICAgIGJvdW5kc1JhZGl1czogbnVtYmVyXHJcbiAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgY29uc3QgeDAgPSBib3VuZHNYICsgdGhpcy4jc3RhcnRYICogYm91bmRzUmFkaXVzO1xyXG4gICAgY29uc3QgeTAgPSBib3VuZHNZICsgdGhpcy4jc3RhcnRZICogYm91bmRzUmFkaXVzO1xyXG4gICAgY29uc3QgcjAgPSBib3VuZHNSYWRpdXMgKiB0aGlzLiNzdGFydFJhZGl1cztcclxuXHJcbiAgICBjb25zdCB4MSA9IGJvdW5kc1ggKyB0aGlzLiNlbmRYICogYm91bmRzUmFkaXVzO1xyXG4gICAgY29uc3QgeTEgPSBib3VuZHNZICsgdGhpcy4jZW5kWSAqIGJvdW5kc1JhZGl1cztcclxuICAgIGNvbnN0IHIxID0gYm91bmRzUmFkaXVzICogdGhpcy4jZW5kUmFkaXVzO1xyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4MCwgeTAsIHIwLCB4MSwgeTEsIHIxKTtcclxuXHJcbiAgICB0aGlzLmFwcGx5U3RvcHMoZ3JhZGllbnQpO1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudDtcclxuICB9XHJcblxyXG4gIGdldCBzdmcoKSB7XHJcbiAgICBpZiAodGhpcy4jc3ZnICE9PSBudWxsKSByZXR1cm4gdGhpcy4jc3ZnO1xyXG5cclxuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgXCJyYWRpYWxHcmFkaWVudFwiXHJcbiAgICApO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZnJcIiwgdGhpcy4jc3RhcnRSYWRpdXMudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJmeFwiLCB0aGlzLiNzdGFydFgudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjeFwiLCB0aGlzLiNlbmRYLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY3lcIiwgdGhpcy4jZW5kWS50b1N0cmluZygpKTtcclxuXHJcbiAgICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcInJcIiwgdGhpcy4jZW5kUmFkaXVzLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIHRoaXMuZGVmaW5lU1ZHU3RvcHMoc3ZnRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuICh0aGlzLiNzdmcgPSBzdmdFbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25pY2FsR3JhZGllbnQgZXh0ZW5kcyBHcmFkaWVudCB7XHJcbiAgI3N0YXJ0QW5nbGU6IEFuZ2xlO1xyXG4gICNvZmZzZXQ6IFZlY3RvcjJEO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHN0YXJ0QW5nbGU6IEFuZ2xlID0gQW5nbGUuemVybygpLFxyXG4gICAgb2Zmc2V0OiBWZWN0b3IyRCA9IFZlY3RvcjJELnplcm8oKVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLiNzdGFydEFuZ2xlID0gc3RhcnRBbmdsZTtcclxuICAgIHRoaXMuI29mZnNldCA9IG9mZnNldDtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNlbnRlcjogVmVjdG9yMkQpOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICBjb25zdCB4ID0gY2VudGVyLnggKyB0aGlzLiNvZmZzZXQueDtcclxuICAgIGNvbnN0IHkgPSBjZW50ZXIueSArIHRoaXMuI29mZnNldC55O1xyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVDb25pY0dyYWRpZW50KFxyXG4gICAgICB0aGlzLiNzdGFydEFuZ2xlLnJhZGlhbnMsXHJcbiAgICAgIHgsXHJcbiAgICAgIHlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5hcHBseVN0b3BzKGdyYWRpZW50KTtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEcmF3U3R5bGUgPSBDb2xvciB8IHN0cmluZyB8IEdyYWRpZW50IHwgTm9uZTtcclxuIiwiZXhwb3J0IGNsYXNzIEtleWJvYXJkVHJhY2tlciB7XHJcbiAgI2N1cnJlbnQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAjcHJldmlvdXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAjbGFzdCA9IFwiXCI7XHJcbiAgI2Rvd24gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuI2N1cnJlbnQuYWRkKGV2ZW50LmtleSk7XHJcblxyXG4gICAgICB0aGlzLiNsYXN0ID0gZXZlbnQua2V5O1xyXG5cclxuICAgICAgdGhpcy4jZG93biA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLiNjdXJyZW50LmRlbGV0ZShldmVudC5rZXkpO1xyXG5cclxuICAgICAgdGhpcy4jZG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBbXywgc3RhdGVdIG9mIHRoaXMuI2N1cnJlbnQuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICB0aGlzLiNkb3duID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWR2YW5jZUZyYW1lKCkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy4jcHJldmlvdXMpIHtcclxuICAgICAgaWYgKCF0aGlzLiNjdXJyZW50LmhhcyhrZXkpKSB0aGlzLiNwcmV2aW91cy5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLiNjdXJyZW50KSB7XHJcbiAgICAgIHRoaXMuI3ByZXZpb3VzLmFkZChrZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRvd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jZG93bjtcclxuICB9XHJcblxyXG4gIGdldCBsYXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2xhc3Q7XHJcbiAgfVxyXG5cclxuICBrZXlIZWxkKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY3VycmVudC5oYXMoa2V5KTtcclxuICB9XHJcblxyXG4gIGtleVByZXZpb3VzbHlIZWxkKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jcHJldmlvdXMuaGFzKGtleSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4vdmVjdG9yMmRcIjtcclxuXHJcbmNvbnN0IGJ1dHRvbk5hbWVzID0geyBsZWZ0OiAwLCByaWdodDogMSwgd2hlZWw6IDIsIGJhY2s6IDMsIGZvcndhcmQ6IDQgfTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZURhdGEgZXh0ZW5kcyBWZWN0b3IyRCB7XHJcbiAgI2J1dHRvblN0YXRlcyA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xyXG4gICNvdmVyID0gZmFsc2U7XHJcblxyXG4gIGdldCBidXR0b25TdGF0ZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jYnV0dG9uU3RhdGVzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGJ1dHRvblN0YXRlcyh2YWx1ZSkge1xyXG4gICAgdGhpcy4jYnV0dG9uU3RhdGVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgb3ZlcigpIHtcclxuICAgIHJldHVybiB0aGlzLiNvdmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0IG92ZXIodmFsdWUpIHtcclxuICAgIHRoaXMuI292ZXIgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZVRyYWNrZXIgZXh0ZW5kcyBNb3VzZURhdGEge1xyXG4gICNwcmV2aW91czogTW91c2VEYXRhO1xyXG4gICN0YXJnZXQ6IEhUTUxFbGVtZW50IHwgV2luZG93O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEhUTUxFbGVtZW50IHwgV2luZG93ID0gd2luZG93KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuI3RhcmdldCA9IHRhcmdldDtcclxuXHJcbiAgICB0aGlzLiNwcmV2aW91cyA9IG5ldyBNb3VzZURhdGEoKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQb3NpdGlvbiA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBzdXBlci54ID0gZXZlbnQueDtcclxuICAgICAgc3VwZXIueSA9IGV2ZW50Lnk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgdGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBzdXBlci5idXR0b25TdGF0ZXNbZXZlbnQuYnV0dG9uXSA9IHRydWU7XHJcblxyXG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBzdXBlci5idXR0b25TdGF0ZXNbZXZlbnQuYnV0dG9uXSA9IGZhbHNlO1xyXG5cclxuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgc3VwZXIub3ZlciA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBzdXBlci5vdmVyID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB1cGRhdGVQb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBhZHZhbmNlRnJhbWUoKSB7XHJcbiAgICB0aGlzLiNwcmV2aW91cy5idXR0b25TdGF0ZXMgPSBbLi4udGhpcy5idXR0b25TdGF0ZXNdO1xyXG5cclxuICAgIHRoaXMuI3ByZXZpb3VzLm92ZXIgPSB0aGlzLm92ZXI7XHJcblxyXG4gICAgdGhpcy4jcHJldmlvdXMueCA9IHRoaXMueDtcclxuXHJcbiAgICB0aGlzLiNwcmV2aW91cy55ID0gdGhpcy55O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJ1dHRvblN0YXRlcygpIHtcclxuICAgIHJldHVybiBzdXBlci5idXR0b25TdGF0ZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgb3ZlcigpIHtcclxuICAgIHJldHVybiBzdXBlci5vdmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByZXZpb3VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3ByZXZpb3VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHgoKSB7XHJcbiAgICBpZiAodGhpcy4jdGFyZ2V0IGluc3RhbmNlb2YgV2luZG93KSByZXR1cm4gc3VwZXIueDtcclxuXHJcbiAgICBjb25zdCBib3VuZGluZ1JlY3QgPSB0aGlzLiN0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHN1cGVyLnggLSBib3VuZGluZ1JlY3QueDtcclxuICB9XHJcblxyXG4gIGdldCB5KCkge1xyXG4gICAgaWYgKHRoaXMuI3RhcmdldCBpbnN0YW5jZW9mIFdpbmRvdykgcmV0dXJuIHN1cGVyLnk7XHJcblxyXG4gICAgY29uc3QgYm91bmRpbmdSZWN0ID0gdGhpcy4jdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIHJldHVybiBzdXBlci55IC0gYm91bmRpbmdSZWN0Lnk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vY29sb3JcIjtcclxuXHJcbnR5cGUgUHJvcGVydHlSYW5nZXM8UCBleHRlbmRzIHN0cmluZz4gPSB7XHJcbiAgW0tleSBpbiBQXT86IHtcclxuICAgIG1pbj86IG51bWJlcjtcclxuICAgIG1heD86IG51bWJlcjtcclxuICB9O1xyXG59O1xyXG5cclxudHlwZSBHcmF5UmFuZ2VzID0gUHJvcGVydHlSYW5nZXM8XCJ2YWx1ZVwiIHwgXCJhbHBoYVwiPjtcclxuXHJcbnR5cGUgSFNMUmFuZ2VzID0gUHJvcGVydHlSYW5nZXM8XCJodWVcIiB8IFwic2F0dXJhdGlvblwiIHwgXCJsaWdodG5lc3NcIiB8IFwiYWxwaGFcIj47XHJcblxyXG50eXBlIFJHQlJhbmdlcyA9IFByb3BlcnR5UmFuZ2VzPFwicmVkXCIgfCBcImdyZWVuXCIgfCBcImJsdWVcIiB8IFwiYWxwaGFcIj47XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZG9tIHtcclxuICBzdGF0aWMgY29sb3JHcmF5KHJhbmdlOiBHcmF5UmFuZ2VzKTogQ29sb3I7XHJcbiAgc3RhdGljIGNvbG9yR3JheShcclxuICAgIG1pblZhbHVlOiBudW1iZXIsXHJcbiAgICBtYXhWYWx1ZTogbnVtYmVyLFxyXG4gICAgbWluQWxwaGE/OiBudW1iZXIsXHJcbiAgICBtYXhBbHBoYT86IG51bWJlclxyXG4gICk6IENvbG9yO1xyXG4gIHN0YXRpYyBjb2xvckdyYXkoXHJcbiAgICBhcmcxOiBHcmF5UmFuZ2VzIHwgbnVtYmVyLFxyXG4gICAgbWF4VmFsdWU/OiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCByYW5nZTogR3JheVJhbmdlcyA9XHJcbiAgICAgIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgPyBhcmcxXHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB7IG1pbjogYXJnMSwgbWF4OiBtYXhWYWx1ZSB9LFxyXG4gICAgICAgICAgICBhbHBoYTogeyBtaW46IG1pbkFscGhhLCBtYXg6IG1heEFscGhhIH0sXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHJldHVybiBDb2xvci5ncmF5KFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlLnZhbHVlPy5taW4gPz8gMCwgcmFuZ2UudmFsdWU/Lm1heCA/PyAyNTUpLFxyXG4gICAgICByYW5nZS5hbHBoYSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgKHJhbmdlLmFscGhhLm1pbiA9PT0gdW5kZWZpbmVkICYmIHJhbmdlLmFscGhhLm1heCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgOiBSYW5kb20uZmxvYXQocmFuZ2UuYWxwaGEubWluID8/IDAsIHJhbmdlLmFscGhhLm1heCA/PyAxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb2xvckhTTChyYW5nZXM6IEhTTFJhbmdlcyk6IENvbG9yO1xyXG4gIHN0YXRpYyBjb2xvckhTTChcclxuICAgIG1pbkh1ZTogbnVtYmVyLFxyXG4gICAgbWF4SHVlOiBudW1iZXIsXHJcbiAgICBtaW5TYXR1cmF0aW9uOiBudW1iZXIsXHJcbiAgICBtYXhTYXR1cmF0aW9uOiBudW1iZXIsXHJcbiAgICBtaW5MaWdodG5lc3M6IG51bWJlcixcclxuICAgIG1heExpZ2h0bmVzczogbnVtYmVyLFxyXG4gICAgbWluQWxwaGE/OiBudW1iZXIsXHJcbiAgICBtYXhBbHBoYT86IG51bWJlclxyXG4gICk6IENvbG9yO1xyXG4gIHN0YXRpYyBjb2xvckhTTChcclxuICAgIGFyZzE6IEhTTFJhbmdlcyB8IG51bWJlcixcclxuICAgIG1heEh1ZT86IG51bWJlcixcclxuICAgIG1pblNhdHVyYXRpb24/OiBudW1iZXIsXHJcbiAgICBtYXhTYXR1cmF0aW9uPzogbnVtYmVyLFxyXG4gICAgbWluTGlnaHRuZXNzPzogbnVtYmVyLFxyXG4gICAgbWF4TGlnaHRuZXNzPzogbnVtYmVyLFxyXG4gICAgbWluQWxwaGE/OiBudW1iZXIsXHJcbiAgICBtYXhBbHBoYT86IG51bWJlclxyXG4gICkge1xyXG4gICAgY29uc3QgcmFuZ2VzOiBIU0xSYW5nZXMgPVxyXG4gICAgICB0eXBlb2YgYXJnMSA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgID8gYXJnMVxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICBodWU6IHtcclxuICAgICAgICAgICAgICBtaW46IGFyZzEsXHJcbiAgICAgICAgICAgICAgbWF4OiBtYXhIdWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNhdHVyYXRpb246IHsgbWluOiBtaW5TYXR1cmF0aW9uLCBtYXg6IG1heFNhdHVyYXRpb24gfSxcclxuICAgICAgICAgICAgbGlnaHRuZXNzOiB7IG1pbjogbWluTGlnaHRuZXNzLCBtYXg6IG1heExpZ2h0bmVzcyB9LFxyXG4gICAgICAgICAgICBhbHBoYTogeyBtaW46IG1pbkFscGhhLCBtYXg6IG1heEFscGhhIH0sXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHJldHVybiBDb2xvci5oc2woXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2VzLmh1ZT8ubWluID8/IDAsIHJhbmdlcy5odWU/Lm1heCA/PyAzNjApLFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlcy5zYXR1cmF0aW9uPy5taW4gPz8gMCwgcmFuZ2VzLnNhdHVyYXRpb24/Lm1heCA/PyAxMDApLFxyXG4gICAgICBSYW5kb20uaW50KHJhbmdlcy5saWdodG5lc3M/Lm1pbiA/PyAwLCByYW5nZXMubGlnaHRuZXNzPy5tYXggPz8gMTAwKSxcclxuICAgICAgcmFuZ2VzLmFscGhhID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAocmFuZ2VzLmFscGhhLm1pbiA9PT0gdW5kZWZpbmVkICYmIHJhbmdlcy5hbHBoYS5tYXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgIDogUmFuZG9tLmZsb2F0KHJhbmdlcy5hbHBoYS5taW4gPz8gMCwgcmFuZ2VzLmFscGhhLm1heCA/PyAxKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb2xvclJHQihyYW5nZXM6IFJHQlJhbmdlcyk6IENvbG9yO1xyXG4gIHN0YXRpYyBjb2xvclJHQihcclxuICAgIG1pblJlZDogbnVtYmVyLFxyXG4gICAgbWF4UmVkOiBudW1iZXIsXHJcbiAgICBtaW5HcmVlbjogbnVtYmVyLFxyXG4gICAgbWF4R3JlZW46IG51bWJlcixcclxuICAgIG1pbkJsdWU6IG51bWJlcixcclxuICAgIG1heEJsdWU6IG51bWJlcixcclxuICAgIG1pbkFscGhhPzogbnVtYmVyLFxyXG4gICAgbWF4QWxwaGE/OiBudW1iZXJcclxuICApOiBDb2xvcjtcclxuICBzdGF0aWMgY29sb3JSR0IoXHJcbiAgICBhcmcxOiBSR0JSYW5nZXMgfCBudW1iZXIsXHJcbiAgICBtYXhSZWQ/OiBudW1iZXIsXHJcbiAgICBtaW5HcmVlbj86IG51bWJlcixcclxuICAgIG1heEdyZWVuPzogbnVtYmVyLFxyXG4gICAgbWluQmx1ZT86IG51bWJlcixcclxuICAgIG1heEJsdWU/OiBudW1iZXIsXHJcbiAgICBtaW5BbHBoYT86IG51bWJlcixcclxuICAgIG1heEFscGhhPzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCByYW5nZXM6IFJHQlJhbmdlcyA9XHJcbiAgICAgIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgPyBhcmcxXHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIHJlZDoge1xyXG4gICAgICAgICAgICAgIG1pbjogYXJnMSxcclxuICAgICAgICAgICAgICBtYXg6IG1heFJlZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JlZW46IHsgbWluOiBtaW5HcmVlbiwgbWF4OiBtYXhHcmVlbiB9LFxyXG4gICAgICAgICAgICBibHVlOiB7IG1pbjogbWluQmx1ZSwgbWF4OiBtYXhCbHVlIH0sXHJcbiAgICAgICAgICAgIGFscGhhOiB7IG1pbjogbWluQWxwaGEsIG1heDogbWF4QWxwaGEgfSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENvbG9yLnJnYihcclxuICAgICAgUmFuZG9tLmludChyYW5nZXMucmVkPy5taW4gPz8gMCwgcmFuZ2VzLnJlZD8ubWF4ID8/IDI1NSksXHJcbiAgICAgIFJhbmRvbS5pbnQocmFuZ2VzLmdyZWVuPy5taW4gPz8gMCwgcmFuZ2VzLmdyZWVuPy5tYXggPz8gMjU1KSxcclxuICAgICAgUmFuZG9tLmludChyYW5nZXMuYmx1ZT8ubWluID8/IDAsIHJhbmdlcy5ibHVlPy5tYXggPz8gMjU1KSxcclxuICAgICAgcmFuZ2VzLmFscGhhID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAocmFuZ2VzLmFscGhhLm1pbiA9PT0gdW5kZWZpbmVkICYmIHJhbmdlcy5hbHBoYS5tYXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgIDogUmFuZG9tLmludChyYW5nZXMuYWxwaGEubWluID8/IDAsIHJhbmdlcy5hbHBoYS5tYXggPz8gMjU1KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmbG9hdChtYXg6IG51bWJlcik6IG51bWJlcjtcclxuICBzdGF0aWMgZmxvYXQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyO1xyXG4gIHN0YXRpYyBmbG9hdChhcmcxOiBudW1iZXIsIGFyZzI/OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IFttaW4sIG1heF0gPSBhcmcyID09PSB1bmRlZmluZWQgPyBbMCwgYXJnMV0gOiBbYXJnMSwgYXJnMl07XHJcblxyXG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvZjxUIGV4dGVuZHMgYW55W10+KGFycmF5OiBUKSB7XHJcbiAgICByZXR1cm4gYXJyYXlbUmFuZG9tLmludChhcnJheS5sZW5ndGgpXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbnQobWF4OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgc3RhdGljIGludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgc3RhdGljIGludCguLi5hcmdzOiBbbnVtYmVyXSkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoUmFuZG9tLmZsb2F0KC4uLmFyZ3MpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jb2xvclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4vdmVjdG9yMmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFkb3cge1xyXG4gICNibHVyID0gY3JlYXRlU3RhdGUoMCk7XHJcbiAgI2NvbG9yID0gQ29sb3IuZ3JheSgwKTtcclxuICAjb2Zmc2V0ID0gVmVjdG9yMkQuemVybygpO1xyXG4gICNjaGFuZ2VMaXN0ZW5lck1hcCA9IG5ldyBNYXA8Q2hhbmdlTGlzdGVuZXI8U2hhZG93PiwgKCkgPT4gdm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogUGFydGlhbDxTaGFkb3c+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXI6ICh1cGRhdGVkVmFsdWU6IFNoYWRvdykgPT4gdm9pZCkge1xyXG4gICAgaWYgKHRoaXMuI2NoYW5nZUxpc3RlbmVyTWFwLmhhcyhsaXN0ZW5lcikpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lckNhbGxlciA9ICgpID0+IGxpc3RlbmVyKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuI2JsdXIuYWRkQ2hhbmdlTGlzdGVuZXIobGlzdGVuZXJDYWxsZXIpO1xyXG4gICAgdGhpcy4jb2Zmc2V0LmFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyQ2FsbGVyKTtcclxuXHJcbiAgICB0aGlzLiNjaGFuZ2VMaXN0ZW5lck1hcC5zZXQobGlzdGVuZXIsIGxpc3RlbmVyQ2FsbGVyKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoYW5nZUxpc3RlbmVyKGxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxTaGFkb3c+KSB7XHJcbiAgICBjb25zdCBjYWxsZXIgPSB0aGlzLiNjaGFuZ2VMaXN0ZW5lck1hcC5nZXQobGlzdGVuZXIpO1xyXG5cclxuICAgIGlmIChjYWxsZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI2JsdXIucmVtb3ZlQ2hhbmdlTGlzdGVuZXIoY2FsbGVyKTtcclxuICAgIHRoaXMuI29mZnNldC5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihjYWxsZXIpO1xyXG5cclxuICAgIHRoaXMuI2NoYW5nZUxpc3RlbmVyTWFwLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICAjY2hhbmdlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLiNoYW5kbGVDaGFuZ2UoKTtcclxuICB9O1xyXG5cclxuICAjaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgZm9yIChjb25zdCBbXywgY2FsbGVyXSBvZiB0aGlzLiNjaGFuZ2VMaXN0ZW5lck1hcCkge1xyXG4gICAgICBjYWxsZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBibHVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2JsdXIudmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgYmx1cih2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2JsdXIudmFsdWUgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jYmx1ci52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuI2hhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbG9yKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jY29sb3IuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI2NvbG9yID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy4jaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBlcXVhbHMob3RoZXI6IFNoYWRvdykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgb3RoZXIuI2JsdXIgPT09IHRoaXMuI2JsdXIgJiZcclxuICAgICAgb3RoZXIuI2NvbG9yLmVxdWFscyh0aGlzLiNjb2xvcikgJiZcclxuICAgICAgb3RoZXIuI29mZnNldC5lcXVhbHModGhpcy4jb2Zmc2V0KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBvZmZzZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgc2V0IG9mZnNldCh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI29mZnNldCAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy4jb2Zmc2V0LnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuI2NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHZhbHVlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI2NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHRoaXMuI29mZnNldCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy4jb2Zmc2V0LmVxdWFscyh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy4jaGFuZGxlQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSB0aGlzLiNibHVyLnZhbHVlO1xyXG4gICAgY29udGV4dC5zaGFkb3dDb2xvciA9IHRoaXMuI2NvbG9yLnRvU3RyaW5nKCk7XHJcbiAgICBjb250ZXh0LnNoYWRvd09mZnNldFggPSB0aGlzLiNvZmZzZXQueDtcclxuICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IHRoaXMuI29mZnNldC55O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3RhdGU8VD4ge1xyXG4gICNsaXN0ZW5lcnMgPSBuZXcgU2V0PENoYW5nZUxpc3RlbmVyPFQ+PigpO1xyXG4gICN2YWx1ZTogVDtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlOiBUKSB7XHJcbiAgICB0aGlzLiN2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBsaXN0ZW5lciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBGdW5jdGlvbiB3aXRoIDEgcGFyYW1ldGVyOiB0aGUgY2hhbmdlZCB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIGxpc3RlbmVycyBjdXJyZW50bHkgcmVnaXN0ZXJlZFxyXG4gICAqL1xyXG5cclxuICBhZGRDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VD4pOiBDaGFuZ2VMaXN0ZW5lcjxUPltdIHtcclxuICAgIHRoaXMuI2xpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuI2xpc3RlbmVycyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBpcyBubyBsb25nZXIgY2FsbGVkIHdoZW4gdGhlIHZhbHVlXHJcbiAgICogY2hhbmdlc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIExpc3RlbmVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxyXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIGxpc3RlbmVycyBjdXJyZW50bHkgcmVnaXN0ZXJlZFxyXG4gICAqL1xyXG5cclxuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcihsaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VD4pOiBDaGFuZ2VMaXN0ZW5lcjxUPltdIHtcclxuICAgIHRoaXMuI2xpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuI2xpc3RlbmVycyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFuZGxlQ2hhbmdlKCkge1xyXG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLiNsaXN0ZW5lcnMpIHtcclxuICAgICAgbGlzdGVuZXIodGhpcy4jdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFub3RoZXIgU3RhdGUgcmVwcmVzZW50cyB0aGUgc2FtZSB2YWx1ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvdGhlciBTdGF0ZSBvZiBzYW1lIHR5cGVcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG5cclxuICBlcXVhbHMob3RoZXI6IFQgfCBTdGF0ZTxUPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuI3ZhbHVlID09PSBvdGhlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIG1vdmVzIGEgbGlzdGVuZXIgZnJvbSBvbmUgU3RhdGUgdG8gYW5vdGhlciBhbmQgcmV0dXJucyB0aGVcclxuICAgKiBvdGhlciBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvdGhlciBBbm90aGVyIFN0YXRlIG9mIHRoZSBzYW1lIHR5cGVcclxuICAgKiBAcGFyYW0gY2hhbmdlTGlzdGVuZXJcclxuICAgKiBAcmV0dXJuc1xyXG4gICAqL1xyXG5cclxuICByZXBsYWNlPE8gZXh0ZW5kcyB0aGlzPihvdGhlcjogTywgY2hhbmdlTGlzdGVuZXI6IENoYW5nZUxpc3RlbmVyPFQ+KTogTyB7XHJcbiAgICBpZiAodGhpcy5lcXVhbHMob3RoZXIpKSB7XHJcbiAgICAgIGlmICh0aGlzID09PSBvdGhlcikgcmV0dXJuIG90aGVyO1xyXG5cclxuICAgICAgdGhpcy5yZW1vdmVDaGFuZ2VMaXN0ZW5lcihjaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXIuYWRkQ2hhbmdlTGlzdGVuZXIoY2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgIGNoYW5nZUxpc3RlbmVyKG90aGVyLiN2YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG90aGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3VycmVudCB2YWx1ZSBzdG9yZWQgYnkgdGhpcyBTdGF0ZS5cclxuICAgKi9cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuI3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKG5ld1ZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jdmFsdWUgPT09IG5ld1ZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jdmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXRlPFQ+KHRhcmdldDogVCkge1xyXG4gIHJldHVybiBuZXcgU3RhdGUodGFyZ2V0KTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVW5pdHMge1xyXG4gIHN0YXRpYyBzaXplID0ge1xyXG4gICAgY2VudGltZXRlcnM6IFwiY21cIixcclxuICAgIG1pbGxpbWV0ZXJzOiBcIm1tXCIsXHJcbiAgICBxdWFydGVyTWlsbGltZXRlcnM6IFwiUVwiLFxyXG4gICAgaW5jaGVzOiBcImluXCIsXHJcbiAgICBwaWNhczogXCJwY1wiLFxyXG4gICAgcG9pbnRzOiBcInB0XCIsXHJcbiAgICBwaXhlbHM6IFwicHhcIixcclxuICAgIHBlcmNlbnRWaWV3cG9ydEhlaWdodDogXCJ2aFwiLFxyXG4gICAgcGVyY2VudFZpZXdwb3J0V2lkdGg6IFwidndcIixcclxuICB9IGFzIGNvbnN0O1xyXG59XHJcbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyREJhc2Uge1xyXG4gICN4OiBudW1iZXI7XHJcbiAgI3k6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuI3ggPSB4O1xyXG4gICAgdGhpcy4jeSA9IHk7XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLiN4O1xyXG4gIH1cclxuXHJcbiAgc2V0IHgodmFsdWUpIHtcclxuICAgIHRoaXMuI3ggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCB5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3k7XHJcbiAgfVxyXG5cclxuICBzZXQgeSh2YWx1ZSkge1xyXG4gICAgdGhpcy4jeSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjJEIGV4dGVuZHMgU3RhdGU8VmVjdG9yMkRCYXNlPiB7XHJcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSB4KSB7XHJcbiAgICBzdXBlcihuZXcgVmVjdG9yMkRCYXNlKHgsIHkpKTtcclxuICB9XHJcblxyXG4gIGNvcHkoKSB7XHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCwgdGhpcy55KTtcclxuICB9XHJcblxyXG4gIGVxdWFscyh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW47XHJcbiAgZXF1YWxzKG90aGVyOiBWZWN0b3IyRCk6IGJvb2xlYW47XHJcbiAgZXF1YWxzKGFyZzE6IFZlY3RvcjJEIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzEgPT09IFwibnVtYmVyXCIpIHJldHVybiB0aGlzLnggPT09IGFyZzEgJiYgdGhpcy55ID09PSBhcmcyO1xyXG4gICAgcmV0dXJuIHRoaXMueCA9PT0gYXJnMS54ICYmIHRoaXMueSA9PT0gYXJnMS55O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGludmVyc2UoKSB7XHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkoLXRoaXMueCwgLXRoaXMueSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgxKTtcclxuICB9XHJcblxyXG4gIG1pbnVzKHg6IG51bWJlciwgeTogbnVtYmVyKTogVmVjdG9yMkQ7XHJcbiAgbWludXMob3RoZXI6IFZlY3RvcjJEKTogVmVjdG9yMkQ7XHJcbiAgbWludXMoYXJnMTogVmVjdG9yMkQgfCBudW1iZXIsIGFyZzI/OiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgcmV0dXJuIFZlY3RvcjJELnh5KHRoaXMueCAtIGFyZzEsIHRoaXMueSAtIChhcmcyID8/IGFyZzEpKTtcclxuICAgIHJldHVybiBWZWN0b3IyRC54eSh0aGlzLnggLSBhcmcxLngsIHRoaXMueSAtIGFyZzEueSk7XHJcbiAgfVxyXG5cclxuICBwbHVzKHg6IG51bWJlciwgeTogbnVtYmVyKTogVmVjdG9yMkQ7XHJcbiAgcGx1cyhvdGhlcjogVmVjdG9yMkQpOiBWZWN0b3IyRDtcclxuICBwbHVzKGFyZzE6IFZlY3RvcjJEIHwgbnVtYmVyLCBhcmcyPzogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIGFyZzEgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgIHJldHVybiBWZWN0b3IyRC54eSh0aGlzLnggKyBhcmcxLCB0aGlzLnkgKyAoYXJnMiA/PyBhcmcxKSk7XHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkodGhpcy54ICsgYXJnMS54LCB0aGlzLnkgKyBhcmcxLnkpO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICBjb25zdCB4U3RyaW5nID0gTnVtYmVyLmlzSW50ZWdlcih0aGlzLngpXHJcbiAgICAgID8gdGhpcy54LnRvU3RyaW5nKClcclxuICAgICAgOiB0aGlzLngudG9GaXhlZCgxKTtcclxuICAgIGNvbnN0IHlTdHJpbmcgPSBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMueSlcclxuICAgICAgPyB0aGlzLnkudG9TdHJpbmcoKVxyXG4gICAgICA6IHRoaXMueS50b0ZpeGVkKDEpO1xyXG5cclxuICAgIHJldHVybiBgJHt4U3RyaW5nfSwgJHt5U3RyaW5nfWA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgeHkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMkQoeCwgeSk7XHJcbiAgfVxyXG5cclxuICBnZXQgeCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLng7XHJcbiAgfVxyXG5cclxuICBzZXQgeCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZS54ID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMudmFsdWUueCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLnk7XHJcbiAgfVxyXG5cclxuICBzZXQgeSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZS55ID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMudmFsdWUueSA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgemVybygpIHtcclxuICAgIHJldHVybiBuZXcgVmVjdG9yMkQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcixcclxuICBIVE1MRWxlbWVudENvbnRyb2xsZXIsXHJcbn0gZnJvbSBcIi4uL2RvY3VtZW50L2RvbUJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIVE1MQXVkaW9XcmFwcGVyIGV4dGVuZHMgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IoXHJcbiAgXCJhdWRpb1wiXHJcbikge31cclxuXHJcbmV4cG9ydCB0eXBlIEhUTUxBdWRpb0NvbnRyb2xsZXIgPSBIVE1MRWxlbWVudENvbnRyb2xsZXI8XHJcbiAgXCJhdWRpb1wiLFxyXG4gIEhUTUxBdWRpb1dyYXBwZXJcclxuPjtcclxuIiwiaW1wb3J0IHsgZG9jdW1lbnRDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvY2hpbGRyZW5cIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcixcclxuICBIVE1MRWxlbWVudENvbnRyb2xsZXIsXHJcbn0gZnJvbSBcIi4vZG9tQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29udGFpbmVyV3JhcHBlciBleHRlbmRzIGRvY3VtZW50Q2hpbGRyZW4oXHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IoXCJkaXZcIilcclxuKSB7fVxyXG5cclxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250YWluZXJDb250cm9sbGVyID0gSFRNTEVsZW1lbnRDb250cm9sbGVyPFxyXG4gIFwiZGl2XCIsXHJcbiAgRG9jdW1lbnRDb250YWluZXJXcmFwcGVyXHJcbj47XHJcbiIsImltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiLi4vbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vdmlzdWFsL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudENvbnRhaW5lcldyYXBwZXIgfSBmcm9tIFwiLi9jb250YWluZXJcIjtcclxuaW1wb3J0IHsgU1ZHU1ZHQ29udHJvbGxlciB9IGZyb20gXCIuLi92aXN1YWwvc3ZnU1ZHXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxcclxuICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXHJcbj4odGFnOiBUKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEhUTUxFbGVtZW50V3JhcHBlciB7XHJcbiAgICAjZWxlbWVudDogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcblxyXG4gICAgICB0aGlzLiNlbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMyRChvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRENhbnZhc0VsZW1lbnQ+KSB7XHJcbiAgICAgIGNvbnN0IGNhbnZhc0NvbnRyb2xsZXIgPSBjcmVhdGVDdXN0b21FbGVtZW50KFxyXG4gICAgICAgIENhbnZhczJEQ2FudmFzRWxlbWVudCxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzQ29udHJvbGxlcik7XHJcblxyXG4gICAgICByZXR1cm4gY2FudmFzQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVXcmFwcGVkQ2hpbGQ8XHJcbiAgICAgIFQgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAsXHJcbiAgICAgIFcgZXh0ZW5kcyBIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxUPlxyXG4gICAgPihcclxuICAgICAgV3JhcHBlckNvbnN0cnVjdG9yOiBXLFxyXG4gICAgICBvcHRpb25zPzogT3B0aW9uczxIVE1MRWxlbWVudENvbnRyb2xsZXI8VCwgSW5zdGFuY2VUeXBlPFc+Pj5cclxuICAgICk6IEhUTUxFbGVtZW50Q29udHJvbGxlcjxULCBJbnN0YW5jZVR5cGU8Vz4+IHtcclxuICAgICAgY29uc3QgY29udHJvbGxlciA9IGNyZWF0ZVdyYXBwZWRDb250cm9sbGVyPFQsIFc+KFdyYXBwZXJDb25zdHJ1Y3Rvcik7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udHJvbGxlci5lbGVtZW50KTtcclxuXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oY29udHJvbGxlciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0eWxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZWxlbWVudC5zdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3R5bGUoZGVjbGFyYXRpb246IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiNlbGVtZW50LnN0eWxlLCBkZWNsYXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnKG9wdGlvbnM/OiBPcHRpb25zPFNWR1NWR0NvbnRyb2xsZXI+KSB7XHJcbiAgICAgIGNvbnN0IHN2Z1NWR0NvbnRyb2xsZXIgPSBjcmVhdGVDdXN0b21FbGVtZW50KFNWR1NWR0NvbnRyb2xsZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHN2Z1NWR0NvbnRyb2xsZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIHN2Z1NWR0NvbnRyb2xsZXI7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8XHJcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcFxyXG4+ID0gUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3I8VD4+O1xyXG5cclxuZXhwb3J0IHR5cGUgVGVtcGxhdGVBcHBsaWVyPFxyXG4gIFQgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAsXHJcbiAgVyBleHRlbmRzIEluc3RhbmNlVHlwZTxIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxUPj5cclxuPiA9IChcclxuICBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSxcclxuICAuLi52YWx1ZXM6IGFueVtdXHJcbikgPT4gSFRNTEVsZW1lbnRDb250cm9sbGVyPFQsIFc+O1xyXG5cclxuZXhwb3J0IHR5cGUgSFRNTEVsZW1lbnRDb250cm9sbGVyPFxyXG4gIFQgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAsXHJcbiAgVyBleHRlbmRzIEluc3RhbmNlVHlwZTxIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxUPj5cclxuPiA9IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXSAmIFcgJiBUZW1wbGF0ZUFwcGxpZXI8VCwgVz47XHJcblxyXG50eXBlIFN0YXRlTGlzdGVuZXI8VD4gPSB7XHJcbiAgc3RhdGU6IFN0YXRlPFQ+O1xyXG4gIGNoYW5nZUxpc3RlbmVyOiAobmV3VmFsdWU6IFQpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVTdGF0ZUxpc3RlbmVyID0gPFQ+KFxyXG4gIHN0YXRlOiBTdGF0ZTxUPixcclxuICBjaGFuZ2VMaXN0ZW5lcjogKG5ld1ZhbHVlOiBUKSA9PiB2b2lkXHJcbik6IFN0YXRlTGlzdGVuZXI8VD4gPT4gKHsgc3RhdGUsIGNoYW5nZUxpc3RlbmVyIH0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZWRDb250cm9sbGVyPFxyXG4gIFQgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAsXHJcbiAgVyBleHRlbmRzIEhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yPFQ+XHJcbj4oV3JhcHBlckNvbnN0cnVjdG9yOiBXKTogSFRNTEVsZW1lbnRDb250cm9sbGVyPFQsIEluc3RhbmNlVHlwZTxXPj4ge1xyXG4gIGNvbnN0IHdyYXBwZXIgPSBuZXcgV3JhcHBlckNvbnN0cnVjdG9yKCk7XHJcblxyXG4gIGNvbnN0IHsgZWxlbWVudCB9ID0gd3JhcHBlcjtcclxuXHJcbiAgY29uc3Qgc3RhdGVNYXAgPSBuZXcgTWFwPFByb3BlcnR5S2V5LCBTdGF0ZUxpc3RlbmVyPGFueT4+KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGx5VGVtcGxhdGUoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogYW55W10pIHtcclxuICAgIGZvciAoY29uc3QgW2luZGV4LCBzdHJdIG9mIHN0cmluZ3MuZW50cmllcygpKSB7XHJcbiAgICAgIGNvbnN0IHRleHROb2RlID0gbmV3IFRleHQoc3RyKTtcclxuXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG5cclxuICAgICAgaWYgKGluZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2luZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU3RhdGUpIHtcclxuICAgICAgICAgIGxldCBtdXRhYmxlVGV4dE5vZGUgPSBuZXcgVGV4dCh2YWx1ZS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChtdXRhYmxlVGV4dE5vZGUpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHN0YXRlTGlzdGVuZXIgPSBjcmVhdGVTdGF0ZUxpc3RlbmVyKHZhbHVlLCAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGV4dCA9IG5ldyBUZXh0KG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld1RleHQsIG11dGFibGVUZXh0Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICBtdXRhYmxlVGV4dE5vZGUgPSBuZXdUZXh0O1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdmFsdWUuYWRkQ2hhbmdlTGlzdGVuZXIoc3RhdGVMaXN0ZW5lci5jaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG5laWdoYm9yTm9kZSA9IHZhbHVlIGluc3RhbmNlb2YgTm9kZSA/IHZhbHVlIDogbmV3IFRleHQodmFsdWUpO1xyXG5cclxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmVpZ2hib3JOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udHJvbGxlcjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgUHJveHkoYXBwbHlUZW1wbGF0ZSwge1xyXG4gICAgZ2V0KF8sIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXJWYWx1ZSA9IFJlZmxlY3QuZ2V0KHdyYXBwZXIsIHByb3BlcnR5S2V5KTtcclxuXHJcbiAgICAgIGlmICh3cmFwcGVyVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlclZhbHVlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICByZXR1cm4gd3JhcHBlclZhbHVlLmJpbmQod3JhcHBlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyVmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnRWYWx1ZSA9IFJlZmxlY3QuZ2V0KGVsZW1lbnQsIHByb3BlcnR5S2V5KTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudFZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBlbGVtZW50VmFsdWUuYmluZChlbGVtZW50KTtcclxuXHJcbiAgICAgIHJldHVybiBlbGVtZW50VmFsdWU7XHJcbiAgICB9LFxyXG4gICAgc2V0KF8sIHByb3BlcnR5S2V5LCB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBvbGRTdGF0ZUxpc3RlbmVyID0gc3RhdGVNYXAuZ2V0KHByb3BlcnR5S2V5KTtcclxuXHJcbiAgICAgIGlmIChvbGRTdGF0ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvbGRTdGF0ZUxpc3RlbmVyLnN0YXRlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKFxyXG4gICAgICAgICAgb2xkU3RhdGVMaXN0ZW5lci5jaGFuZ2VMaXN0ZW5lclxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcm9wZXJ0eUtleSBpbiB3cmFwcGVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU3RhdGUpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1N0YXRlTGlzdGVuZXIgPSBjcmVhdGVTdGF0ZUxpc3RlbmVyKHZhbHVlLCAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgUmVmbGVjdC5zZXQod3JhcHBlciwgcHJvcGVydHlLZXksIG5ld1ZhbHVlKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHZhbHVlLmFkZENoYW5nZUxpc3RlbmVyKG5ld1N0YXRlTGlzdGVuZXIuY2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAgIHN0YXRlTWFwLnNldChwcm9wZXJ0eUtleSwgbmV3U3RhdGVMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KHdyYXBwZXIsIHByb3BlcnR5S2V5LCB2YWx1ZS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQod3JhcHBlciwgcHJvcGVydHlLZXksIHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU3RhdGUpIHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZUxpc3RlbmVyID0gY3JlYXRlU3RhdGVMaXN0ZW5lcih2YWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBSZWZsZWN0LnNldChlbGVtZW50LCBwcm9wZXJ0eUtleSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YWx1ZS5hZGRDaGFuZ2VMaXN0ZW5lcihuZXdTdGF0ZUxpc3RlbmVyLmNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgc3RhdGVNYXAuc2V0KHByb3BlcnR5S2V5LCBuZXdTdGF0ZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Quc2V0KGVsZW1lbnQsIHByb3BlcnR5S2V5LCB2YWx1ZS52YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBSZWZsZWN0LnNldChlbGVtZW50LCBwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgfSxcclxuICB9KSBhcyBIVE1MRWxlbWVudENvbnRyb2xsZXI8VCwgSW5zdGFuY2VUeXBlPFc+PjtcclxuXHJcbiAgcmV0dXJuIGNvbnRyb2xsZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb290KHJvb3RQYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XHJcbiAgaWYgKHJvb3RQYXJlbnQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYFJvb3QgZWxlbWVudCdzIHBhcmVudCBpcyB1bmRlZmluZWQuIE1ha2Ugc3VyZSB5b3VyIHNjcmlwdCBydW5zIGFmdGVyIHRoZSBET00gY29udGVudCBsb2Fkcy4gWW91IGNhbiBkbyB0aGlzIGJ5IGFkZGluZyB0aGUgJ2RlZmVyJyBhdHRyaWJ1dGUuYFxyXG4gICAgKTtcclxuXHJcbiAgY29uc3Qgcm9vdENvbnRyb2xsZXIgPSBjcmVhdGVXcmFwcGVkQ29udHJvbGxlcihEb2N1bWVudENvbnRhaW5lcldyYXBwZXIpO1xyXG5cclxuICByb290UGFyZW50LmFwcGVuZENoaWxkKHJvb3RDb250cm9sbGVyLmVsZW1lbnQpO1xyXG5cclxuICByZXR1cm4gcm9vdENvbnRyb2xsZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgZG9jdW1lbnRDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvY2hpbGRyZW5cIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcixcclxuICBIVE1MRWxlbWVudENvbnRyb2xsZXIsXHJcbn0gZnJvbSBcIi4vZG9tQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50UGFyYWdyYXBoV3JhcHBlciBleHRlbmRzIGRvY3VtZW50Q2hpbGRyZW4oXHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IoXCJwXCIpXHJcbikge31cclxuXHJcbmV4cG9ydCB0eXBlIERvY3VtZW50UGFyYWdyYXBoQ29udHJvbGxlciA9IEhUTUxFbGVtZW50Q29udHJvbGxlcjxcclxuICBcInBcIixcclxuICBEb2N1bWVudFBhcmFncmFwaFdyYXBwZXJcclxuPjtcclxuIiwiaW1wb3J0IHsgZG9jdW1lbnRDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvY2hpbGRyZW5cIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcixcclxuICBIVE1MRWxlbWVudENvbnRyb2xsZXIsXHJcbn0gZnJvbSBcIi4vZG9tQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50U3BhbldyYXBwZXIgZXh0ZW5kcyBkb2N1bWVudENoaWxkcmVuKFxyXG4gIGNyZWF0ZUhUTUxFbGVtZW50V3JhcHBlckNvbnN0cnVjdG9yKFwic3BhblwiKVxyXG4pIHt9XHJcblxyXG5leHBvcnQgdHlwZSBEb2N1bWVudFNwYW5Db250cm9sbGVyID0gSFRNTEVsZW1lbnRDb250cm9sbGVyPFxyXG4gIFwic3BhblwiLFxyXG4gIERvY3VtZW50U3BhbldyYXBwZXJcclxuPjtcclxuIiwiaW1wb3J0IHsgY2FtZWxUb0tlYmFiQ2FzZSB9IGZyb20gXCIuLi91dGxpdGllcy9jYW1lbFRvS2ViYWJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21IVE1MRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHN0YXRpYyB0YWc6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy4jZXZlbnRzUHJveHkgPSBuZXcgUHJveHkoe30gYXMgRXZlbnRMaXN0ZW5lck1hcCwge1xyXG4gICAgICBnZXQoXywgZXZlbnROYW1lOiBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuI2V2ZW50TGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQoXywgZXZlbnROYW1lOiBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwLCBsaXN0ZW5lcikge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ZW5lciA9IGVsZW1lbnQuI2V2ZW50TGlzdGVuZXJzLmdldChldmVudE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudExpc3RlbmVyID09PSBsaXN0ZW5lcikgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY3VycmVudExpc3RlbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC4jZXZlbnRMaXN0ZW5lcnMuc2V0KGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBjcmVhdGVDaGlsZDxFIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihcclxuICAgIEVsZW1lbnRDbGFzczogRSxcclxuICAgIG9wdGlvbnM/OiBPcHRpb25zPEluc3RhbmNlVHlwZTxFPj5cclxuICApIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KEVsZW1lbnRDbGFzcywgb3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gICNldmVudExpc3RlbmVycyA9IG5ldyBNYXA8a2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCwgRXZlbnRMaXN0ZW5lcj4oKTtcclxuXHJcbiAgI2V2ZW50c1Byb3h5OiBFdmVudExpc3RlbmVyTWFwO1xyXG5cclxuICBnZXQgZXZlbnRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2V2ZW50c1Byb3h5IGFzIEV2ZW50TGlzdGVuZXJNYXA7XHJcbiAgfVxyXG5cclxuICBzZXQgZXZlbnRzKG1hcCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLiNldmVudHNQcm94eSwgbWFwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVyZmFjZSBmb3IgYWRkaW5nIGV2ZW50IGxpc3RlbmVycyB3aXRoIGFsdGVybmF0aXZlIHN5bnRheC4gRm9yIGV4YW1wbGUsXHJcbiAgICogZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlzdGVuZXIpIGJlY29tZXNcclxuICAgKiBlbGVtZW50Lmxpc3Rlbi5jbGljayhsaXN0ZW5lcikuXHJcbiAgICovXHJcbiAgZ2V0IGxpc3RlbigpOiBFdmVudExpc3RlbmVyTWFwIHtcclxuICAgIHJldHVybiB0aGlzLiNldmVudHNQcm94eTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcblxyXG4gIHJlZ2lzdGVyQ2hhbmdlPFAgZXh0ZW5kcyBrZXlvZiBXcml0ZWFibGU8dGhpcz4+KFxyXG4gICAgcHJvcGVydHlOYW1lOiBQLFxyXG4gICAgbmV3VmFsdWU6IHRoaXNbUF1cclxuICApIHtcclxuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBjYW1lbFRvS2ViYWJDYXNlKHByb3BlcnR5TmFtZSBhcyBzdHJpbmcpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRBdHRyaWJ1dGVWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKTtcclxuXHJcbiAgICBpZiAoY3VycmVudEF0dHJpYnV0ZVZhbHVlID09PSBzdHJpbmdWYWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHN0cmluZ1ZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21FbGVtZW50PEUgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KFxyXG4gIEVsZW1lbnRDbGFzczogRSxcclxuICBvcHRpb25zPzogT3B0aW9uczxJbnN0YW5jZVR5cGU8RT4+XHJcbikge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KEVsZW1lbnRDbGFzcy50YWcpIGFzIEluc3RhbmNlVHlwZTxFPjtcclxuXHJcbiAgT2JqZWN0LmFzc2lnbihlbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBjMmRGaWxsIH0gZnJvbSBcIi4uLy4uL21peGlucy9maWxsXCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7IGhhc0Zyb20sIGhhc1RvIH0gZnJvbSBcIi4uLy4uL21peGlucy9mcm9tVG9cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7XHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQsXHJcbiAgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkLFxyXG59IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGhhc0NvbnRyb2xQb2ludHM8QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgaGFzVG8oQmFzZSkge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcclxuICAgICAgLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwiY29udHJvbC1hXCIsXHJcbiAgICAgIFwiY29udHJvbC1iXCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNjb250cm9sQSA9IFZlY3RvcjJELnplcm8oKTtcclxuICAgICNjb250cm9sQiA9IFZlY3RvcjJELnplcm8oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRyb2xzIHRoZSBzaGFwZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJ2ZS5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0ciBjb250cm9sLWFcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBjb250cm9sQSgpOiBWZWN0b3IyRCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNjb250cm9sQTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY29udHJvbEEodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2NvbnRyb2xBLmVxdWFscyh2YWx1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJjb250cm9sQVwiLCAodGhpcy4jY29udHJvbEEgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udHJvbHMgdGhlIHNoYXBlIGF0IHRoZSBlbmQgb2YgdGhlIGN1cnZlLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyIGNvbnRyb2wtYlxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbnRyb2xCKCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2NvbnRyb2xCO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb250cm9sQih2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jY29udHJvbEIuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImNvbnRyb2xCXCIsICh0aGlzLiNjb250cm9sQiA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwiY29udHJvbC1hXCI6XHJcbiAgICAgICAgICB0aGlzLmNvbnRyb2xBID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSBcImNvbnRyb2wtYlwiOlxyXG4gICAgICAgICAgdGhpcy5jb250cm9sQiA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZUJlemllciBleHRlbmRzIGhhc0NvbnRyb2xQb2ludHMoXHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWRcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtc2hhcGUtYmV6aWVyXCIgYXMgY29uc3Q7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRyb2xBLCBjb250cm9sQiwgdG8gfSA9IHRoaXM7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICBjb250cm9sQS54LFxyXG4gICAgICBjb250cm9sQS55LFxyXG4gICAgICBjb250cm9sQi54LFxyXG4gICAgICBjb250cm9sQi55LFxyXG4gICAgICB0by54LFxyXG4gICAgICB0by55XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoY2FudmFzMkQpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXNoYXBlLWJlemllclwiLCBDYW52YXMyRFNoYXBlQmV6aWVyKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyREJlemllciBleHRlbmRzIGMyZEZpbGwoXHJcbiAgYzJkU3Ryb2tlKGhhc0Zyb20oaGFzQ29udHJvbFBvaW50cyhDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQpKSlcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtYmV6aWVyXCI7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRyb2xBLCBjb250cm9sQiwgZnJvbSwgdG8gfSA9IHRoaXM7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQuYmV6aWVyQ3VydmVUbyhcclxuICAgICAgY29udHJvbEEueCxcclxuICAgICAgY29udHJvbEEueSxcclxuICAgICAgY29udHJvbEIueCxcclxuICAgICAgY29udHJvbEIueSxcclxuICAgICAgdG8ueCxcclxuICAgICAgdG8ueVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1iZXppZXJcIiwgQ2FudmFzMkRCZXppZXIpO1xyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL21peGFibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQzJEQmFzZSBleHRlbmRzIEN1c3RvbUhUTUxFbGVtZW50IHtcclxuICAvKipcclxuICAgKiBUaGUgZWxlbWVudCdzIGN1c3RvbSBIVE1MIHRhZy4gVGhpcyBjYW4gYmUgcGFzc2VkIGludG8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpLlxyXG4gICAqL1xyXG4gIHN0YXRpYyB0YWc6IHN0cmluZztcclxuXHJcbiAgI2V2ZXJ5RnJhbWU6IFVwZGF0ZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIDxjMmQtY2FudmFzPiBlbGVtZW50IHRoYXQgaXMgcmVuZGVyaW5nIHRoaXMgZWxlbWVudC4gVGhlIDxjMmQtY2FudmFzPlxyXG4gICAqIHdpbGwgYmUgYW4gYW5jZXN0b3Igb2YgdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGdldCBjYW52YXMoKTogQ2FudmFzMkRDYW52YXNFbGVtZW50IHtcclxuICAgIGNvbnN0IHsgcGFyZW50RWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICBpZiAocGFyZW50RWxlbWVudCA9PT0gbnVsbCB8fCBwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQzJEQmFzZSA9PT0gZmFsc2UpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbnZhczJEIHJlbmRlcmFibGUgaXMgbm90IGEgY2hpbGQgb2YgYSBDYW52YXMyRENhbnZhc1wiKTtcclxuXHJcbiAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIENhbnZhczJEQ2FudmFzRWxlbWVudCkgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gY2FsbGVkIGJlZm9yZSByZW5kZXJpbmcuIFRoZSBmdW5jdGlvbiBoYXMgb25lIHBhcmFtZXRlcjogdGhlXHJcbiAgICogY3VycmVudCBmcmFtZSBudW1iZXIuXHJcbiAgICovXHJcbiAgZ2V0IGV2ZXJ5RnJhbWUoKTogVXBkYXRlciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuI2V2ZXJ5RnJhbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgZXZlcnlGcmFtZSh1cGRhdGVyKSB7XHJcbiAgICB0aGlzLiNldmVyeUZyYW1lID0gdXBkYXRlcjtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5xdWV1ZVJlbW92YWwodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY2FsZXMgYSB2ZWN0b3IgYnkgdGhlIGRldmljZSdzIHBpeGVsIHJhdGlvLlxyXG4gICAqL1xyXG4gIHNjYWxlQnlQaXhlbFJhdGlvKHZlY3RvcjogVmVjdG9yMkQpIHtcclxuICAgIGNvbnN0IHBvaW50ID0gbmV3IERPTVBvaW50UmVhZE9ubHkodmVjdG9yLngsIHZlY3Rvci55KS5tYXRyaXhUcmFuc2Zvcm0oXHJcbiAgICAgIG5ldyBET01NYXRyaXgoKS5zY2FsZShkZXZpY2VQaXhlbFJhdGlvLCBkZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvdmVjdG9yMmRcIjtcclxuaW1wb3J0IHsgQ2xpY2tUcmFja2VyIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvY2xpY2tcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRUcmFja2VyIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMva2V5Ym9hcmRcIjtcclxuaW1wb3J0IHsgTW91c2VUcmFja2VyIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvbW91c2VcIjtcclxuaW1wb3J0IHsgYzJkU3RhbmRhbG9uZUNoaWxkcmVuIH0gZnJvbSBcIi4uLy4uL21peGlucy9jaGlsZHJlblwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IEMyREJhc2UgfSBmcm9tIFwiLi9jMmRCYXNlXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmFzZVJlbmRlcmFibGUgfSBmcm9tIFwiLi9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IERyYXdTdHlsZSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL21peGFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBjMmRTdGFuZGFsb25lQ2hpbGRyZW4oQzJEQmFzZSkge1xyXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgLi4uQzJEQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICBcImFscGhhXCIsXHJcbiAgICBcIndpZHRoXCIsXHJcbiAgICBcImhlaWdodFwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kXCIsXHJcbiAgXTtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1jYW52YXNcIjtcclxuICB9XHJcblxyXG4gICNhbmltYXRpbmcgPSBmYWxzZTtcclxuICAjYmFja2dyb3VuZDogRHJhd1N0eWxlID0gXCJub25lXCI7XHJcbiAgI2NsaWNrVHJhY2tlcjogQ2xpY2tUcmFja2VyO1xyXG4gICNjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgI2RlbHRhVGltZTogbnVtYmVyID0gMDtcclxuICAjZGV2aWNlUGl4ZWxSYXRpbzogbnVtYmVyO1xyXG4gICNmcmFtZSA9IDA7XHJcbiAgI2tleWJvYXJkVHJhY2tlciA9IG5ldyBLZXlib2FyZFRyYWNrZXIoKTtcclxuICAjbGFzdEZyYW1lVGltZSA9IC0xO1xyXG4gICNtb3VzZVRyYWNrZXI6IE1vdXNlVHJhY2tlcjtcclxuICAjcmVtb3ZhbFF1ZXVlID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcclxuICAjcmVuZGVyRXZlbnRzID0gbmV3IFNldDxrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwPigpO1xyXG4gICNyZW5kZXJRdWV1ZWQgPSBmYWxzZTtcclxuICAjc2V0QWxwaGE6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICN3YWl0Rm9yID0gbmV3IFNldDxFbGVtZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XHJcblxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHJcbiAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIk51bGwgY29udGV4dFwiKTtcclxuXHJcbiAgICB0aGlzLiNjb250ZXh0ID0gY29udGV4dDtcclxuXHJcbiAgICB0aGlzLiNtb3VzZVRyYWNrZXIgPSBuZXcgTW91c2VUcmFja2VyKHRoaXMuZG9tQ2FudmFzKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja1RyYWNrZXIgPSBuZXcgQ2xpY2tUcmFja2VyKHRoaXMuZG9tQ2FudmFzKTtcclxuXHJcbiAgICB0aGlzLiNkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcclxuICAgIG9wdGlvbnM/OiBib29sZWFuIHwgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMgfCB1bmRlZmluZWRcclxuICApOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwia2V5ZG93blwiOlxyXG4gICAgICBjYXNlIFwia2V5dXBcIjpcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFuc3BhcmVuY3kgYXBwbGllZCB0byBhbGwgc2hhcGVzIGFuZCBpbWFnZXMgb24gdGhpcyBjYW52YXMuIDAuMCBpcyBmdWxseVxyXG4gICAqIHRyYW5zcGFyZW50LCBhbmQgMS4wIGlzIGZ1bGx5IG9wYXF1ZS4gVGhpcyBkb2VzIG5vdCBhcHBseSB0byB0aGUgYmFja2dyb3VuZC5cclxuICAgKi9cclxuICBnZXQgYWxwaGEoKTogbnVtYmVyIHtcclxuICAgIC8qIFxyXG4gICAgVGhlIHJlbmRlcmluZyBjb250ZXh0J3MgZ2xvYmFsQWxwaGEgcHJvcGVydHkgZG9lcyBub3QgcmV0YWluIHZhbHVlcyBzZXQgIFxyXG4gICAgYmVmb3JlIHRoZSBjYW52YXMgaXMgY29ubmVjdGVkLCBzbyB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBpcyBoZXJlIHRvIGFsbG93IHRoZSBcclxuICAgIHByb3BlcnR5IHRvIGJlIHNldCB3aGVuIGNyZWF0aW5nIHRoZSBjYW52YXMuXHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIHRoaXMuI3NldEFscGhhID8/IHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYTtcclxuICB9XHJcblxyXG4gIHNldCBhbHBoYSh2YWx1ZSkge1xyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcclxuICAgICAgXCJhbHBoYVwiLFxyXG4gICAgICAodGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gdGhpcy4jc2V0QWxwaGEgPSB2YWx1ZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnVlIGlmIHRoZSBjYW52YXMgaXMgcmVuZGVyaW5nIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBnZXQgYW5pbWF0aW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuI2FuaW1hdGluZztcclxuICB9XHJcblxyXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwiYWxwaGFcIjpcclxuICAgICAgICAgIHRoaXMuYWxwaGEgPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwid2lkdGhcIjpcclxuICAgICAgICAgIHRoaXMud2lkdGggPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiaGVpZ2h0XCI6XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJiYWNrZ3JvdW5kXCI6XHJcbiAgICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBhdHRyaWJ1dGVQYXJzZXIuQ29sb3IobmV3VmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBmcmFtZSwgdGhlIGNhbnZhcyByZW5kZXJzIGl0cyBiYWNrZ3JvdW5kIHVzaW5nXHJcbiAgICogdGhpcyBzdHlsZS4gSXQgbWF5IGJlIGEgQ29sb3Igb3IgR3JhZGllbnQuIFdoZW4gc2V0IHRvIFwibm9uZVwiLCB0aGUgY2FudmFzXHJcbiAgICogd2lsbCBub3QgcmVuZGVyIGEgYmFja2dyb3VuZC4gVGhpcyB3aWxsIHJlc3VsdCBpbiB0aGUgbmV4dCBmcmFtZSBiZWluZ1xyXG4gICAqIHJlbmRlcmVkIG9uIHRvcCBvZiB0aGUgbGFzdCBmcmFtZSdzIGNvbnRlbnRzLlxyXG4gICAqXHJcbiAgICogQGF0dHJcclxuICAgKiBAcmVmbGVjdFxyXG4gICAqL1xyXG4gIGdldCBiYWNrZ3JvdW5kKCk6IERyYXdTdHlsZSB7XHJcbiAgICByZXR1cm4gdGhpcy4jYmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIHNldCBiYWNrZ3JvdW5kKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jYmFja2dyb3VuZC50b1N0cmluZygpID09PSB2YWx1ZS50b1N0cmluZygpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImJhY2tncm91bmRcIiwgKHRoaXMuI2JhY2tncm91bmQgPSB2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2VudGVyIHBvaW50IG9mIHRoZSBjYW52YXMuXHJcbiAgICovXHJcbiAgZ2V0IGNlbnRlcigpOiBWZWN0b3IyRCB7XHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIGNvbnN0IHBpeGVsUmF0aW9RdWVyeSA9IGAocmVzb2x1dGlvbjogJHt3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb31kcHB4KWA7XHJcblxyXG4gICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwaXhlbFJhdGlvUXVlcnkpO1xyXG5cclxuICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy4jdXBkYXRlU2NhbGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy4jdXBkYXRlU2NhbGUoKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCB0aGlzLnF1ZXVlUmVuZGVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnF1ZXVlUmVuZGVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8qIFxyXG4gICAgVGhlIHJlbmRlcmluZyBjb250ZXh0J3MgZ2xvYmFsQWxwaGEgcHJvcGVydHkgZG9lcyBub3QgcmV0YWluIHZhbHVlcyBzZXQgIFxyXG4gICAgYmVmb3JlIHRoZSBjYW52YXMgaXMgY29ubmVjdGVkLCBzbyB0aGlzIGlzIGhlcmUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXHJcbiAgICBzZXQgd2hlbiBjcmVhdGluZyB0aGUgY2FudmFzLlxyXG4gICAgKi9cclxuICAgIHRoaXMuYWxwaGEgPSB0aGlzLmFscGhhO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hpbGQ8RSBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oXHJcbiAgICBFbGVtZW50Q2xhc3M6IEUsXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxXcml0ZWFibGU8SW5zdGFuY2VUeXBlPEU+Pj4gfCB1bmRlZmluZWRcclxuICApOiBJbnN0YW5jZVR5cGU8RT4ge1xyXG4gICAgY29uc3QgY2hpbGQgPSBzdXBlci5jcmVhdGVDaGlsZChFbGVtZW50Q2xhc3MsIG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMucXVldWVSZW5kZXIoKTtcclxuXHJcbiAgICByZXR1cm4gY2hpbGQ7XHJcbiAgfVxyXG5cclxuICBnZXQga2V5RG93bigpIHtcclxuICAgIHJldHVybiB0aGlzLiNrZXlib2FyZFRyYWNrZXIuZG93bjtcclxuICB9XHJcblxyXG4gIGdldCBkb21DYW52YXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY29udGV4dC5jYW52YXM7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xpY2tlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNjbGlja1RyYWNrZXIuY2xpY2tlZDtcclxuICB9XHJcblxyXG4gIGdldCBjbGlja1Bvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NsaWNrVHJhY2tlcjtcclxuICB9XHJcblxyXG4gIGdldCBjb250ZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2NvbnRleHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaW1lIHBhc3NlZCB0aGUgcHJldmlvdXMgYW5kIGN1cnJlbnQgZnJhbWUuXHJcbiAgICovXHJcbiAgZ2V0IGRlbHRhVGltZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNkZWx0YVRpbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZXZlcnlGcmFtZSgpIHtcclxuICAgIHJldHVybiBzdXBlci5ldmVyeUZyYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IGV2ZXJ5RnJhbWUodXBkYXRlcjogVXBkYXRlciB8IG51bGwpIHtcclxuICAgIHN1cGVyLmV2ZXJ5RnJhbWUgPSB1cGRhdGVyO1xyXG5cclxuICAgIGlmICh1cGRhdGVyID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy4jYW5pbWF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnF1ZXVlUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZnJhbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jZnJhbWU7XHJcbiAgfVxyXG5cclxuICBrZXlIZWxkKC4uLmFyZ3M6IFBhcmFtZXRlcnM8S2V5Ym9hcmRUcmFja2VyW1wia2V5SGVsZFwiXT4pIHtcclxuICAgIHJldHVybiB0aGlzLiNrZXlib2FyZFRyYWNrZXIua2V5SGVsZCguLi5hcmdzKTtcclxuICB9XHJcblxyXG4gIGtleVByZXZpb3VzbHlIZWxkKC4uLmFyZ3M6IFBhcmFtZXRlcnM8S2V5Ym9hcmRUcmFja2VyW1wia2V5UHJldmlvdXNseUhlbGRcIl0+KSB7XHJcbiAgICByZXR1cm4gdGhpcy4ja2V5Ym9hcmRUcmFja2VyLmtleVByZXZpb3VzbHlIZWxkKC4uLmFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhc3RLZXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4ja2V5Ym9hcmRUcmFja2VyLmxhc3Q7XHJcbiAgfVxyXG5cclxuICBnZXQgbW91c2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jbW91c2VUcmFja2VyO1xyXG4gIH1cclxuXHJcbiAgcXVldWVSZW1vdmFsKGNoaWxkOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy4jcmVtb3ZhbFF1ZXVlLmFkZChjaGlsZCk7XHJcblxyXG4gICAgdGhpcy5xdWV1ZVJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcXVldWVSZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy4jcmVuZGVyUXVldWVkIHx8IHRoaXMuI3dhaXRGb3Iuc2l6ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuI3JlbmRlclF1ZXVlZCA9IHRydWU7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuI2RlbHRhVGltZSA9IHRpbWUgLSB0aGlzLiNsYXN0RnJhbWVUaW1lO1xyXG5cclxuICAgICAgdGhpcy4jbGFzdEZyYW1lVGltZSA9IHRpbWU7XHJcblxyXG4gICAgICB0aGlzLiNyZW5kZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBjYW52YXMgZWxlbWVudCBpbiBwaXhlbHMgZGl2aWRlZCBieSB0aGUgZGV2aWNlJ3MgcGl4ZWwgcmF0aW8uXHJcbiAgICpcclxuICAgKiBAYXR0clxyXG4gICAqIEByZWZsZWN0XHJcbiAgICovXHJcbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kb21DYW52YXMud2lkdGggLyBkZXZpY2VQaXhlbFJhdGlvO1xyXG4gIH1cclxuXHJcbiAgc2V0IHdpZHRoKHZhbHVlKSB7XHJcbiAgICBjb25zdCB7IGRldmljZVBpeGVsUmF0aW8gfSA9IHdpbmRvdztcclxuXHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuZG9tQ2FudmFzLndpZHRoIC8gZGV2aWNlUGl4ZWxSYXRpbykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLndpZHRoID0gdmFsdWUgKiBkZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLnN0eWxlLndpZHRoID0gYCR7dmFsdWV9cHhgO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJ3aWR0aFwiLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBjYW52YXMgZWxlbWVudCBpbiBwaXhlbHMgZGl2aWRlZCBieSB0aGUgZGV2aWNlJ3MgcGl4ZWwgcmF0aW8uXHJcbiAgICpcclxuICAgKiBAYXR0clxyXG4gICAqIEByZWZsZWN0XHJcbiAgICovXHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZG9tQ2FudmFzLmhlaWdodCAvIGRldmljZVBpeGVsUmF0aW87XHJcbiAgfVxyXG5cclxuICBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICBjb25zdCB7IGRldmljZVBpeGVsUmF0aW8gfSA9IHdpbmRvdztcclxuXHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuZG9tQ2FudmFzLmhlaWdodCAvIGRldmljZVBpeGVsUmF0aW8pIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmRvbUNhbnZhcy5oZWlnaHQgPSB2YWx1ZSAqIGRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgdGhpcy5kb21DYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7dmFsdWV9cHhgO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJoZWlnaHRcIiwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJDaGFuZ2U8UCBleHRlbmRzIGtleW9mIHRoaXM+KFxyXG4gICAgcHJvcGVydHlOYW1lOiBQLFxyXG4gICAgbmV3VmFsdWU6IHRoaXNbUF1cclxuICApOiB2b2lkIHtcclxuICAgIHN1cGVyLnJlZ2lzdGVyQ2hhbmdlKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xyXG5cclxuICAgIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gICNyZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy4jd2FpdEZvci5zaXplKSB7XHJcbiAgICAgIHRoaXMuI3JlbmRlclF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuI3JlbW92YWxRdWV1ZS5zaXplKSB7XHJcbiAgICAgIGNvbnN0IG5leHQgPSB0aGlzLiNyZW1vdmFsUXVldWUudmFsdWVzKCkubmV4dCgpO1xyXG5cclxuICAgICAgaWYgKG5leHQudmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGb3VuZCB1bmRlZmluZWQgdmFsdWUgaW4gY2FudmFzJ3MgcmVtb3ZhbCBxdWV1ZS5cIik7XHJcblxyXG4gICAgICBjb25zdCBjaGlsZCA9IG5leHQudmFsdWU7XHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuXHJcbiAgICAgIHRoaXMuI3JlbW92YWxRdWV1ZS5kZWxldGUoY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLiNjb250ZXh0O1xyXG5cclxuICAgIGNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgIHRoaXMuZXZlcnlGcmFtZT8uKHRoaXMuI2ZyYW1lKTtcclxuXHJcbiAgICB0aGlzLiNyZW5kZXJRdWV1ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb250ZXh0LnNjYWxlKGRldmljZVBpeGVsUmF0aW8sIGRldmljZVBpeGVsUmF0aW8pO1xyXG5cclxuICAgIGlmICh0aGlzLiNiYWNrZ3JvdW5kICE9PSBcIm5vbmVcIikge1xyXG4gICAgICBjb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xyXG5cclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLiNiYWNrZ3JvdW5kLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGUpIHtcclxuICAgICAgICBjaGlsZC5yZW5kZXIodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICB0aGlzLiNjbGlja1RyYWNrZXIuYWR2YW5jZUZyYW1lKCk7XHJcblxyXG4gICAgdGhpcy4ja2V5Ym9hcmRUcmFja2VyLmFkdmFuY2VGcmFtZSgpO1xyXG5cclxuICAgIHRoaXMuI21vdXNlVHJhY2tlci5hZHZhbmNlRnJhbWUoKTtcclxuXHJcbiAgICB0aGlzLiNmcmFtZSsrO1xyXG5cclxuICAgIGlmICh0aGlzLiNhbmltYXRpbmcpIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck9uKGV2ZW50TmFtZToga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcCkge1xyXG4gICAgaWYgKHRoaXMuI3JlbmRlckV2ZW50cy5oYXMoZXZlbnROYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZG9tQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnF1ZXVlUmVuZGVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuI3JlbmRlckV2ZW50cy5hZGQoZXZlbnROYW1lKTtcclxuICB9XHJcblxyXG4gICN1cGRhdGVTY2FsZSgpIHtcclxuICAgIGNvbnN0IHsgZGV2aWNlUGl4ZWxSYXRpbzogbmV3UGl4ZWxSYXRpbyB9ID0gd2luZG93O1xyXG5cclxuICAgIGNvbnN0IHNjYWxlUmF0aW8gPSBuZXdQaXhlbFJhdGlvIC8gdGhpcy4jZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB0aGlzLmRvbUNhbnZhcy53aWR0aCAqPSBzY2FsZVJhdGlvO1xyXG4gICAgdGhpcy5kb21DYW52YXMuaGVpZ2h0ICo9IHNjYWxlUmF0aW87XHJcblxyXG4gICAgdGhpcy4jZGV2aWNlUGl4ZWxSYXRpbyA9IG5ld1BpeGVsUmF0aW87XHJcblxyXG4gICAgdGhpcy5xdWV1ZVJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgd2FpdEZvcihlbGVtZW50OiBFbGVtZW50LCBldmVudE5hbWU6IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXAgPSBcImxvYWRcIikge1xyXG4gICAgdGhpcy4jd2FpdEZvci5hZGQoZWxlbWVudCk7XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLiN3YWl0Rm9yLmRlbGV0ZShlbGVtZW50KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiN3YWl0Rm9yLnNpemUgPT09IDApIHRoaXMucXVldWVSZW5kZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmdsZSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IExpbmVhckdyYWRpZW50LCBSYWRpYWxHcmFkaWVudCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IGMyZEZpbGwgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZpbGxcIjtcclxuaW1wb3J0IHsgYzJkUmVjdGFuZ2xlQm91bmRzIH0gZnJvbSBcIi4uLy4uL21peGlucy9yZWN0YW5nbGVCb3VuZHNcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHtcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCxcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbiAgQzJEVHJhbnNmb3JtZWQsXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFbGxpcHNlPEIgZXh0ZW5kcyBDMkRUcmFuc2Zvcm1lZD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGMyZFJlY3RhbmdsZUJvdW5kcyhCYXNlLCBcImNlbnRlclwiKSB7XHJcbiAgICAjc3RhcnRBbmdsZSA9IEFuZ2xlLnplcm8oKTtcclxuICAgICNlbmRBbmdsZSA9IEFuZ2xlLnJhZGlhbnMoTWF0aC5QSSAqIDIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgc3VwZXIub3JpZ2luID0gXCJjZW50ZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY29uc3QgeyBvZmZzZXQ6IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzO1xyXG5cclxuICAgICAgY2FudmFzMkQuY29udGV4dC5lbGxpcHNlKFxyXG4gICAgICAgIHBvc2l0aW9uLngsXHJcbiAgICAgICAgcG9zaXRpb24ueSxcclxuICAgICAgICB3aWR0aCAvIDIsXHJcbiAgICAgICAgaGVpZ2h0IC8gMixcclxuICAgICAgICAwLFxyXG4gICAgICAgIHRoaXMuI3N0YXJ0QW5nbGUucmFkaWFucyxcclxuICAgICAgICB0aGlzLiNlbmRBbmdsZS5yYWRpYW5zXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICBncmFkaWVudDogUmFkaWFsR3JhZGllbnRcclxuICAgICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG9mZnNldDogeyB4LCB5IH0sXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICB9ID0gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpIC8gMjtcclxuXHJcbiAgICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeCwgeSwgcmFkaXVzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhcnRBbmdsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3N0YXJ0QW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXJ0QW5nbGUodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3N0YXJ0QW5nbGUuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInN0YXJ0QW5nbGVcIiwgKHRoaXMuI3N0YXJ0QW5nbGUgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmRBbmdsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI2VuZEFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBlbmRBbmdsZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jZW5kQW5nbGUuZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImVuZEFuZ2xlXCIsICh0aGlzLiNlbmRBbmdsZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJERWxsaXBzZSBleHRlbmRzIHJlbmRlckVsbGlwc2UoXHJcbiAgYzJkU3Ryb2tlKGMyZEZpbGwoQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkKSlcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtZWxsaXBzZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLWVsbGlwc2VcIiwgQ2FudmFzMkRFbGxpcHNlKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFNoYXBlRWxsaXBzZSBleHRlbmRzIHJlbmRlckVsbGlwc2UoXHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWRcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtc2hhcGUtZWxsaXBzZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXNoYXBlLWVsbGlwc2VcIiwgQ2FudmFzMkRTaGFwZUVsbGlwc2UpO1xyXG4iLCJpbXBvcnQgeyBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyByZW5kZXJzVmlzdWFsTWVkaWEgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3Zpc3VhbE1lZGlhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRJbWFnZSBleHRlbmRzIHJlbmRlcnNWaXN1YWxNZWRpYShcclxuICBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQsXHJcbiAgXCJpbWdcIlxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1pbWFnZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLWltYWdlXCIsIENhbnZhczJESW1hZ2UpO1xyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IGMyZFN0cm9rZSB9IGZyb20gXCIuLi8uLi9taXhpbnMvc3Ryb2tlXCI7XHJcbmltcG9ydCB7IGhhc0Zyb20sIGhhc1RvIH0gZnJvbSBcIi4uLy4uL21peGlucy9mcm9tVG9cIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIExpbmVhckdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG59IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgQzJEU2hhcGVQYXJ0VHJhbnNmb3JtZWQsXHJcbiAgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkLFxyXG59IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZUxpbmUgZXh0ZW5kcyBoYXNUbyhDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCkge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXNoYXBlLWxpbmVcIjtcclxuICB9XHJcblxyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNvbnN0IHsgdG8gfSA9IHRoaXM7XHJcblxyXG4gICAgY2FudmFzMkQuY29udGV4dC5saW5lVG8odG8ueCwgdG8ueSk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtc2hhcGUtbGluZVwiLCBDYW52YXMyRFNoYXBlTGluZSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRMaW5lIGV4dGVuZHMgYzJkU3Ryb2tlKFxyXG4gIGhhc1RvKGhhc0Zyb20oQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkKSlcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtbGluZVwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNlbnRlcigpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy50by54IC0gdGhpcy5mcm9tLng7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnRvLnkgLSB0aGlzLmZyb20ueTtcclxuXHJcbiAgICByZXR1cm4gVmVjdG9yMkQueHkodGhpcy5mcm9tLnggKyB3aWR0aCAvIDIsIHRoaXMuZnJvbS55ICsgaGVpZ2h0IC8gMik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0LmxpbmVUbyh0by54LCB0by55KTtcclxuXHJcbiAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbmljYWxHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBDb25pY2FsR3JhZGllbnRcclxuICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHRoaXMuY2VudGVyKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxpbmVhckdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IExpbmVhckdyYWRpZW50XHJcbiAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmZyb207XHJcblxyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnRvLnggLSB4O1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50by55IC0geTtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyUmFkaWFsR3JhZGllbnQoXHJcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICBncmFkaWVudDogUmFkaWFsR3JhZGllbnRcclxuICApOiBDYW52YXNHcmFkaWVudCB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMudG8ueCAtIHRoaXMuZnJvbS54O1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50by55IC0gdGhpcy5mcm9tLnk7XHJcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIDI7XHJcblxyXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmNlbnRlcjtcclxuXHJcbiAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgsIHksIHJhZGl1cyk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtbGluZVwiLCBDYW52YXMyRExpbmUpO1xyXG4iLCJpbXBvcnQgeyBCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ib3JkZXJSYWRpdXNcIjtcclxuaW1wb3J0IHtcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgc3ZnQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7IHN2Z0RpbWVuc2lvbnMgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgYzJkRmlsbCwgc3ZnRmlsbCB9IGZyb20gXCIuLi8uLi9taXhpbnMvZmlsbFwiO1xyXG5pbXBvcnQge1xyXG4gIGMyZFJlY3RhbmdsZUJvdW5kcyxcclxuICBzdmdSZWN0YW5nbGVCb3VuZHMsXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy9yZWN0YW5nbGVCb3VuZHNcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlLCBzdmdTdHJva2UgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N0cm9rZVwiO1xyXG5pbXBvcnQge1xyXG4gIEMyRFNoYXBlUGFydFRyYW5zZm9ybWVkLFxyXG4gIEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCxcclxuICBDMkRUcmFuc2Zvcm1lZCxcclxuICBzdmdUcmFuc2Zvcm0sXHJcbn0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU1ZHQ29udHJvbGxlciB9IGZyb20gXCIuL3N2Z0Jhc2VcIjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNhbnZhc1JlY3RhbmdsZTxCIGV4dGVuZHMgQzJEVHJhbnNmb3JtZWQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgYzJkUmVjdGFuZ2xlQm91bmRzKEJhc2UsIFwidG9wTGVmdFwiKSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xyXG4gICAgICAuLi5jMmRSZWN0YW5nbGVCb3VuZHMoQmFzZSwgXCJ0b3BMZWZ0XCIpLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJib3JkZXItcmFkaXVzXCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNib3JkZXJSYWRpdXM6IEJvcmRlclJhZGl1cyB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmFtZSA9PT0gXCJib3JkZXItcmFkaXVzXCIpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuYm9yZGVyUmFkaXVzID0gbnVsbDtcclxuICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5ib3JkZXJSYWRpdXM/LnRvU3RyaW5nKCkpIHJldHVybjtcclxuICAgICAgICBlbHNlIHRoaXMuYm9yZGVyUmFkaXVzID0gYXR0cmlidXRlUGFyc2VyLkJvcmRlclJhZGl1cyhuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAjYm9yZGVyUmFkaXVzQ2hhbmdlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJib3JkZXJSYWRpdXNcIiwgdGhpcy4jYm9yZGVyUmFkaXVzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGdldCBib3JkZXJSYWRpdXMoKTogQm9yZGVyUmFkaXVzIHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNib3JkZXJSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJvcmRlclJhZGl1cyh2YWx1ZTogQm9yZGVyUmFkaXVzIHwgbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50Qm9yZGVyUmFkaXVzID0gdGhpcy5ib3JkZXJSYWRpdXM7XHJcblxyXG4gICAgICBpZiAodmFsdWUgPT09IGN1cnJlbnRCb3JkZXJSYWRpdXMpIHJldHVybjtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRCb3JkZXJSYWRpdXMgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICBjdXJyZW50Qm9yZGVyUmFkaXVzLnJlbW92ZUNoYW5nZUxpc3RlbmVyKFxyXG4gICAgICAgICAgdGhpcy4jYm9yZGVyUmFkaXVzQ2hhbmdlTGlzdGVuZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYm9yZGVyUmFkaXVzXCIsICh0aGlzLiNib3JkZXJSYWRpdXMgPSB2YWx1ZSkpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV3Qm9yZGVyUmFkaXVzID1cclxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyBuZXcgQm9yZGVyUmFkaXVzKHZhbHVlKSA6IHZhbHVlO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRCb3JkZXJSYWRpdXMgPT09IG51bGwpIHtcclxuICAgICAgICBuZXdCb3JkZXJSYWRpdXMuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jYm9yZGVyUmFkaXVzQ2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFxyXG4gICAgICAgICAgXCJib3JkZXJSYWRpdXNcIixcclxuICAgICAgICAgICh0aGlzLiNib3JkZXJSYWRpdXMgPSBuZXdCb3JkZXJSYWRpdXMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiNib3JkZXJSYWRpdXMgPSBuZXdCb3JkZXJSYWRpdXM7XHJcblxyXG4gICAgICBjdXJyZW50Qm9yZGVyUmFkaXVzLnJlcGxhY2UoXHJcbiAgICAgICAgbmV3Qm9yZGVyUmFkaXVzLFxyXG4gICAgICAgIHRoaXMuI2JvcmRlclJhZGl1c0NoYW5nZUxpc3RlbmVyXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB0b3BMZWZ0OiB7IHgsIHkgfSxcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQsXHJcbiAgICAgIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYm9yZGVyUmFkaXVzID09PSBudWxsKVxyXG4gICAgICAgIGNhbnZhczJELmNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGNhbnZhczJELmNvbnRleHQucm91bmRSZWN0KFxyXG4gICAgICAgICAgeCxcclxuICAgICAgICAgIHksXHJcbiAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzLnRvQXJyYXkoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICBncmFkaWVudDogUmFkaWFsR3JhZGllbnRcclxuICAgICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpIC8gMjtcclxuXHJcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5jZW50ZXI7XHJcblxyXG4gICAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHgsIHksIHJhZGl1cyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEUmVjdGFuZ2xlIGV4dGVuZHMgcmVuZGVyQ2FudmFzUmVjdGFuZ2xlKFxyXG4gIGMyZFN0cm9rZShjMmRGaWxsKEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCkpXHJcbikge1xyXG4gIHN0YXRpYyBnZXQgdGFnKCkge1xyXG4gICAgcmV0dXJuIFwiYzJkLXJlY3RhbmdsZVwiO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXJlY3RhbmdsZVwiLCBDYW52YXMyRFJlY3RhbmdsZSk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSBleHRlbmRzIHJlbmRlckNhbnZhc1JlY3RhbmdsZShcclxuICBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZFxyXG4pIHtcclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC1zaGFwZS1yZWN0YW5nbGVcIjtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1zaGFwZS1yZWN0YW5nbGVcIiwgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSk7XHJcblxyXG5leHBvcnQgY2xhc3MgU1ZHUmVjdGFuZ2xlQ29udHJvbGxlciBleHRlbmRzIHN2Z1N0cm9rZShcclxuICBzdmdGaWxsKFxyXG4gICAgc3ZnRGltZW5zaW9ucyhcclxuICAgICAgc3ZnVHJhbnNmb3JtKFxyXG4gICAgICAgIHN2Z1JlY3RhbmdsZUJvdW5kcyhcclxuICAgICAgICAgIHN2Z0NoaWxkcmVuKGNyZWF0ZVNWR0NvbnRyb2xsZXIoXCJyZWN0XCIsIFwic3ZnLXJlY3RhbmdsZVwiKSksXHJcbiAgICAgICAgICBcInRvcExlZnRcIlxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIClcclxuKSB7XHJcbiAgZ2V0IG9yaWdpbigpIHtcclxuICAgIHJldHVybiBzdXBlci5vcmlnaW47XHJcbiAgfVxyXG5cclxuICBzZXQgb3JpZ2luKHZhbHVlKSB7XHJcbiAgICBzdXBlci5vcmlnaW4gPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN2Zy1yZWN0YW5nbGVcIiwgU1ZHUmVjdGFuZ2xlQ29udHJvbGxlcik7XHJcbiIsImltcG9ydCB7XHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIExpbmVhckdyYWRpZW50LFxyXG4gIFJhZGlhbEdyYWRpZW50LFxyXG59IGZyb20gXCIuLi8uLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IE1vdXNlRGF0YSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL21vdXNlXCI7XHJcbmltcG9ydCB7IFNoYWRvdyB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3NoYWRvd1wiO1xyXG5pbXBvcnQgeyBjMmRTaGFwZUNoaWxkcmVuLCBjMmRTdGFuZGFsb25lQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4vYzJkQmFzZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9taXhhYmxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlZEV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgYnViYmxlczogdHJ1ZSB9KTtcclxuXHJcbnR5cGUgUXVldWVkRXZlbnRMaXN0ZW5lcjxFIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcD4gPSB7XHJcbiAgZXZlbnROYW1lOiBFO1xyXG4gIGxpc3RlbmVyOiBUeXBlZEV2ZW50TGlzdGVuZXI8RT47XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSBleHRlbmRzIEMyREJhc2Uge1xyXG4gICNjaGFuZ2VkU2luY2VSZW5kZXIgPSBmYWxzZTtcclxuICAjY2xpY2tMaXN0ZW5lcnMgPSBuZXcgU2V0PFR5cGVkRXZlbnRMaXN0ZW5lcjxcImNsaWNrXCI+PigpO1xyXG4gICNsb2NhbE1vdXNlID0gbmV3IE1vdXNlRGF0YSgpO1xyXG4gICNtb3VzZUxpc3RlbmVycyA9IG5ldyBTZXQ8VHlwZWRFdmVudExpc3RlbmVyPFwibW91c2Vtb3ZlXCI+PigpO1xyXG4gICNzaGFkb3c6IFNoYWRvdyB8IG51bGwgPSBudWxsO1xyXG4gICNjb25uZWN0ZWQgPSBmYWxzZTtcclxuICAjcXVldWVkRXZlbnRMaXN0ZW5lcnM6IFF1ZXVlZEV2ZW50TGlzdGVuZXI8YW55PltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLiNjb25uZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgIHdoaWxlICh0aGlzLiNxdWV1ZWRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgZmlyc3RMaXN0ZW5lciA9IHRoaXMuI3F1ZXVlZEV2ZW50TGlzdGVuZXJzLnNoaWZ0KCk7XHJcblxyXG4gICAgICBpZiAoZmlyc3RMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSBicmVhaztcclxuXHJcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihmaXJzdExpc3RlbmVyLmV2ZW50TmFtZSwgZmlyc3RMaXN0ZW5lci5saXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXI8RSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXA+KFxyXG4gICAgdHlwZTogRSxcclxuICAgIGxpc3RlbmVyOiBUeXBlZEV2ZW50TGlzdGVuZXI8RT4sXHJcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuI2Nvbm5lY3RlZCkge1xyXG4gICAgICB0aGlzLiNxdWV1ZWRFdmVudExpc3RlbmVycy5wdXNoKHtcclxuICAgICAgICBldmVudE5hbWU6IHR5cGUsXHJcbiAgICAgICAgbGlzdGVuZXIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwiY2xpY2tcIjpcclxuICAgICAgICB0aGlzLmNhbnZhcy5yZW5kZXJPbih0eXBlKTtcclxuICAgICAgICB0aGlzLiNjbGlja0xpc3RlbmVycy5hZGQobGlzdGVuZXIgYXMgVHlwZWRFdmVudExpc3RlbmVyPFwiY2xpY2tcIj4pO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIm1vdXNlZG93blwiOlxyXG4gICAgICBjYXNlIFwibW91c2V1cFwiOlxyXG4gICAgICBjYXNlIFwibW91c2Vtb3ZlXCI6XHJcbiAgICAgICAgdGhpcy5jYW52YXMucmVuZGVyT24odHlwZSk7XHJcbiAgICAgICAgdGhpcy4jbW91c2VMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyIGFzIFR5cGVkRXZlbnRMaXN0ZW5lcjxcIm1vdXNlbW92ZVwiPik7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwibW91c2VlbnRlclwiOlxyXG4gICAgICBjYXNlIFwibW91c2VvdXRcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlb3ZlclwiOlxyXG4gICAgICAgIHRoaXMuY2FudmFzLnJlbmRlck9uKFwibW91c2Vtb3ZlXCIpO1xyXG4gICAgICAgIHRoaXMuI21vdXNlTGlzdGVuZXJzLmFkZChsaXN0ZW5lciBhcyBUeXBlZEV2ZW50TGlzdGVuZXI8XCJtb3VzZW1vdmVcIj4pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hpbGQ8RSBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oXHJcbiAgICBFbGVtZW50Q2xhc3M6IEUsXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxXcml0ZWFibGU8SW5zdGFuY2VUeXBlPEU+Pj4gfCB1bmRlZmluZWRcclxuICApOiBJbnN0YW5jZVR5cGU8RT4ge1xyXG4gICAgY29uc3QgY2hpbGQgPSBzdXBlci5jcmVhdGVDaGlsZChFbGVtZW50Q2xhc3MsIG9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VkRXZlbnQpO1xyXG5cclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVuZGVyQ29uaWNhbEdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IENvbmljYWxHcmFkaWVudFxyXG4gICkge1xyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB0aGlzLmNhbnZhcy5jZW50ZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZW5kZXJMaW5lYXJHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBMaW5lYXJHcmFkaWVudFxyXG4gICkge1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNhbnZhcztcclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbmRlclJhZGlhbEdyYWRpZW50KFxyXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgZ3JhZGllbnQ6IFJhZGlhbEdyYWRpZW50XHJcbiAgKSB7XHJcbiAgICBjb25zdCB7IGNlbnRlciwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5jYW52YXM7XHJcbiAgICBjb25zdCBjYW52YXNSYWRpdXMgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIDI7XHJcblxyXG4gICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCBjZW50ZXIueCwgY2VudGVyLnksIGNhbnZhc1JhZGl1cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI8RSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXA+KFxyXG4gICAgdHlwZTogRSxcclxuICAgIGxpc3RlbmVyOiBUeXBlZEV2ZW50TGlzdGVuZXI8RT4sXHJcbiAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zXHJcbiAgKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImNsaWNrXCI6XHJcbiAgICAgICAgdGhpcy4jY2xpY2tMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyIGFzIFR5cGVkRXZlbnRMaXN0ZW5lcjxcImNsaWNrXCI+KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm1vdXNlZG93blwiOlxyXG4gICAgICBjYXNlIFwibW91c2V1cFwiOlxyXG4gICAgICBjYXNlIFwibW91c2VlbnRlclwiOlxyXG4gICAgICBjYXNlIFwibW91c2VvdXRcIjpcclxuICAgICAgY2FzZSBcIm1vdXNlb3ZlclwiOlxyXG4gICAgICBjYXNlIFwibW91c2Vtb3ZlXCI6XHJcbiAgICAgICAgdGhpcy4jbW91c2VMaXN0ZW5lcnMuZGVsZXRlKFxyXG4gICAgICAgICAgbGlzdGVuZXIgYXMgVHlwZWRFdmVudExpc3RlbmVyPFwibW91c2Vtb3ZlXCI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgZ2V0IGNoYW5nZWRTaW5jZVJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLiNjaGFuZ2VkU2luY2VSZW5kZXI7XHJcbiAgfVxyXG5cclxuICAjaGFuZGxlQ2xpY2soY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb250ZXh0LCBjbGlja1Bvc2l0aW9uOiBjYW52YXNDbGljaywgY2xpY2tlZCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgaWYgKCFjbGlja2VkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZWxlbWVudENsaWNrID0gdGhpcy5zY2FsZUJ5UGl4ZWxSYXRpbyhjYW52YXNDbGljayk7XHJcblxyXG4gICAgY29uc3QgaW5QYXRoID0gY29udGV4dC5pc1BvaW50SW5QYXRoKGVsZW1lbnRDbGljay54LCBlbGVtZW50Q2xpY2sueSk7XHJcblxyXG4gICAgaWYgKGluUGF0aCkgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBQb2ludGVyRXZlbnQoXCJjbGlja1wiKSk7XHJcbiAgfVxyXG5cclxuICAjaGFuZGxlTW91c2UoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBjb250ZXh0LCBtb3VzZSB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgdGhpcy4jbG9jYWxNb3VzZS54ID0gbW91c2UueCAqIGRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgdGhpcy4jbG9jYWxNb3VzZS55ID0gbW91c2UueSAqIGRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgY29uc3QgaW5QYXRoID0gY29udGV4dC5pc1BvaW50SW5QYXRoKFxyXG4gICAgICB0aGlzLiNsb2NhbE1vdXNlLngsXHJcbiAgICAgIHRoaXMuI2xvY2FsTW91c2UueVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIWluUGF0aCkge1xyXG4gICAgICBpZiAodGhpcy4jbG9jYWxNb3VzZS5vdmVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VvdXRcIikpO1xyXG5cclxuICAgICAgICB0aGlzLiNsb2NhbE1vdXNlLm92ZXIgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlb3ZlclwiKSk7XHJcblxyXG4gICAgY29uc3QgbW92ZW1lbnRYID0gbW91c2UueCAtIG1vdXNlLnByZXZpb3VzLng7XHJcblxyXG4gICAgY29uc3QgbW92ZW1lbnRZID0gbW91c2UueSAtIG1vdXNlLnByZXZpb3VzLnk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLiNsb2NhbE1vdXNlLnggIT09IG1vdXNlLnByZXZpb3VzLnggKiBkZXZpY2VQaXhlbFJhdGlvIHx8XHJcbiAgICAgIHRoaXMuI2xvY2FsTW91c2UueSAhPT0gbW91c2UucHJldmlvdXMueSAqIGRldmljZVBpeGVsUmF0aW9cclxuICAgIClcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KFwibW91c2Vtb3ZlXCIsIHtcclxuICAgICAgICAgIG1vdmVtZW50WCxcclxuICAgICAgICAgIG1vdmVtZW50WSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIGlmICghdGhpcy4jbG9jYWxNb3VzZS5vdmVyKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlZW50ZXJcIikpO1xyXG5cclxuICAgICAgdGhpcy4jbG9jYWxNb3VzZS5vdmVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgYnV0dG9uU3RhdGVdIG9mIG1vdXNlLmJ1dHRvblN0YXRlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgaWYgKGJ1dHRvblN0YXRlICE9PSB0aGlzLiNsb2NhbE1vdXNlLmJ1dHRvblN0YXRlc1tpbmRleF0pIHtcclxuICAgICAgICBpZiAoYnV0dG9uU3RhdGUpXHJcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIiwgeyBidXR0b246IGluZGV4IH0pKTtcclxuICAgICAgICBlbHNlIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNldXBcIiwgeyBidXR0b246IGluZGV4IH0pKTtcclxuXHJcbiAgICAgICAgdGhpcy4jbG9jYWxNb3VzZS5idXR0b25TdGF0ZXNbaW5kZXhdID0gYnV0dG9uU3RhdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJDaGFuZ2U8UCBleHRlbmRzIGtleW9mIFdyaXRlYWJsZTx0aGlzPj4oXHJcbiAgICBwcm9wZXJ0eU5hbWU6IFAsXHJcbiAgICBuZXdWYWx1ZTogdGhpc1tQXVxyXG4gICkge1xyXG4gICAgaWYgKCF0aGlzLiNjaGFuZ2VkU2luY2VSZW5kZXIpIHtcclxuICAgICAgdGhpcy4jY2hhbmdlZFNpbmNlUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGNoYW5nZWRFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwZXIucmVnaXN0ZXJDaGFuZ2UocHJvcGVydHlOYW1lLCBuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IGNvbnRleHQsIGZyYW1lIH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICBjb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICB0aGlzLmV2ZXJ5RnJhbWU/LihmcmFtZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuI3NoYWRvdyAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLiNzaGFkb3cucmVuZGVyKGNvbnRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICByZW5kZXJDaGlsZHJlbihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KSB7XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcclxuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSkgY2hpbGQucmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcblxyXG4gIGFmdGVyUmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHRoaXMuI2NoYW5nZWRTaW5jZVJlbmRlciA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLiNjbGlja0xpc3RlbmVycy5zaXplKSB0aGlzLiNoYW5kbGVDbGljayhjYW52YXMyRCk7XHJcblxyXG4gICAgaWYgKHRoaXMuI21vdXNlTGlzdGVuZXJzLnNpemUpIHRoaXMuI2hhbmRsZU1vdXNlKGNhbnZhczJEKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhczJEKTtcclxuXHJcbiAgICBjYW52YXMyRC5jb250ZXh0LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gICNzaGFkb3dDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8U2hhZG93PiA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInNoYWRvd1wiLCAodGhpcy4jc2hhZG93ID0gbmV3VmFsdWUpKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBEcm9wIHNoYWRvdyByZW5kZXJlZCBiZWhpbmQgdGhlIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgZ2V0IHNoYWRvdygpOiBTaGFkb3cgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLiNzaGFkb3c7XHJcbiAgfVxyXG5cclxuICBzZXQgc2hhZG93KHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jc2hhZG93ID09PSBudWxsKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgdmFsdWUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jc2hhZG93Q2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgdGhpcy4jc2hhZG93Q2hhbmdlTGlzdGVuZXIodmFsdWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuI3NoYWRvdy5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2hhZG93XCIsIHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiNzaGFkb3cucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy4jc2hhZG93Q2hhbmdlTGlzdGVuZXIpO1xyXG5cclxuICAgIHZhbHVlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuI3NoYWRvd0NoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuI3NoYWRvdy5lcXVhbHModmFsdWUpKSB0aGlzLiNzaGFkb3dDaGFuZ2VMaXN0ZW5lcih2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTdGFuZGFsb25lUmVuZGVyYWJsZSBleHRlbmRzIGMyZFN0YW5kYWxvbmVDaGlsZHJlbihcclxuICBDYW52YXMyREJhc2VSZW5kZXJhYmxlXHJcbikge1xyXG4gIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KSB7XHJcbiAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgIGNhbnZhczJELmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZVBhcnRSZW5kZXJhYmxlIGV4dGVuZHMgYzJkU2hhcGVDaGlsZHJlbihcclxuICBDYW52YXMyREJhc2VSZW5kZXJhYmxlXHJcbikge31cclxuIiwiaW1wb3J0IHsgYzJkRmlsbCB9IGZyb20gXCIuLi8uLi9taXhpbnMvZmlsbFwiO1xyXG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL29mZnNldFwiO1xyXG5pbXBvcnQgeyBjMmRTdHJva2UgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3N0cm9rZVwiO1xyXG5pbXBvcnQgeyBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCB9IGZyb20gXCIuLi8uLi9taXhpbnMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzMkRTaGFwZSBleHRlbmRzIGMyZEZpbGwoXHJcbiAgYzJkU3Ryb2tlKG9mZnNldChDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCkpXHJcbikge1xyXG4gICNjbG9zZSA9IGZhbHNlO1xyXG5cclxuICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gWy4uLnN1cGVyLm9ic2VydmVkQXR0cmlidXRlcywgXCJjbG9zZVwiXTtcclxuXHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtc2hhcGVcIjtcclxuICB9XHJcblxyXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChuYW1lID09PSBcImNsb3NlXCIpIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB0aGlzLmNsb3NlID0gZmFsc2U7XHJcbiAgICAgIGVsc2UgdGhpcy5jbG9zZSA9IGF0dHJpYnV0ZVBhcnNlci5ib29sZWFuKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBjbG9zZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNjbG9zZTtcclxuICB9XHJcblxyXG4gIHNldCBjbG9zZSh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2Nsb3NlID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJjbG9zZVwiLCAodGhpcy4jY2xvc2UgPSB2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgIGNvbnRleHQubW92ZVRvKHRoaXMub2Zmc2V0LngsIHRoaXMub2Zmc2V0LnkpO1xyXG5cclxuICAgIHN1cGVyLnJlbmRlckNoaWxkcmVuKGNhbnZhczJEKTtcclxuXHJcbiAgICBpZiAodGhpcy4jY2xvc2UpIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGlzIGVtcHR5IHRvIHByZXZlbnQgZG91YmxlIHJlbmRlcmluZyBjaGlsZHJlblxyXG4gIHJlbmRlckNoaWxkcmVuKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHt9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImMyZC1zaGFwZVwiLCBDYW52YXMyRFNoYXBlKTtcclxuIiwiaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBTVkdTVkdDb250cm9sbGVyIH0gZnJvbSBcIi4vc3ZnU1ZHXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU1ZHQ29udHJvbGxlcjxUIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXA+KFxyXG4gIHN2Z1RhZzogVCxcclxuICBjb250cm9sbGVyVGFnOiBzdHJpbmdcclxuKSB7XHJcbiAgcmV0dXJuIGNsYXNzIFNWR0VsZW1lbnRDb250cm9sbGVyIGV4dGVuZHMgQ3VzdG9tSFRNTEVsZW1lbnQge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHN0YXRpYyB0YWcgPSBjb250cm9sbGVyVGFnO1xyXG5cclxuICAgICNtYWluOiBTVkdFbGVtZW50VGFnTmFtZU1hcFtUXTtcclxuICAgICNncm91cDogU1ZHR0VsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy4jbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXHJcbiAgICAgICAgc3ZnVGFnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgdHlwZToga2V5b2YgU1ZHRWxlbWVudEV2ZW50TWFwLFxyXG4gICAgICBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCxcclxuICAgICAgb3B0aW9ucz86IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1haW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIHR5cGU6IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXAsXHJcbiAgICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LFxyXG4gICAgICBvcHRpb25zPzogYm9vbGVhbiB8IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFpbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hpbGQ8VCBleHRlbmRzIE5vZGU+KG5vZGU6IFQpOiBUIHtcclxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLiNncm91cCA/PyB0aGlzLiNjcmVhdGVHcm91cCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZ3JvdXAuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgU1ZHRWxlbWVudENvbnRyb2xsZXIpIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IG5vZGUuZ3JvdXAgPz8gbm9kZS5tYWluRWxlbWVudDtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLiNncm91cCA/PyB0aGlzLiNjcmVhdGVHcm91cCgpO1xyXG5cclxuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN1cGVyLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpIHt9XHJcblxyXG4gICAgI2F0dGFjaE1haW4oKSB7XHJcbiAgICAgIGNvbnN0IHsgcGFyZW50RWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnRDb250cm9sbGVyID0gcGFyZW50RWxlbWVudCBhcyBTVkdFbGVtZW50Q29udHJvbGxlcjtcclxuXHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHBhcmVudENvbnRyb2xsZXIuZ3JvdXAgPz8gcGFyZW50Q29udHJvbGxlci5tYWluRWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IHsgZ3JvdXAgfSA9IHRoaXM7XHJcblxyXG4gICAgICBpZiAoZ3JvdXAgPT09IG51bGwpIHRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLm1haW5FbGVtZW50KTtcclxuICAgICAgZWxzZSB0YXJnZXQuYXBwZW5kQ2hpbGQoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICB0aGlzLiNhdHRhY2hNYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI2NyZWF0ZUdyb3VwKCkge1xyXG4gICAgICBpZiAodGhpcy4jZ3JvdXAgIT09IG51bGwpIHJldHVybiB0aGlzLiNncm91cDtcclxuXHJcbiAgICAgIHRoaXMuI2dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xyXG5cclxuICAgICAgY29uc3QgeyBwYXJlbnRFbGVtZW50IH0gPSB0aGlzLm1haW5FbGVtZW50O1xyXG5cclxuICAgICAgaWYgKHBhcmVudEVsZW1lbnQgIT09IG51bGwpIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4jZ3JvdXApO1xyXG5cclxuICAgICAgdGhpcy4jZ3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5tYWluRWxlbWVudCk7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eU5hbWUsIGF0dHJpYnV0ZU5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKFxyXG4gICAgICAgIHRoaXMuX3N0eWxlQXR0cmlidXRlc1xyXG4gICAgICApKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBSZWZsZWN0LmdldCh0aGlzLCBwcm9wZXJ0eU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICB0aGlzLiNncm91cC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgU3RyaW5nKHZhbHVlKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy4jZ3JvdXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdyb3VwKCk6IFNWR0dFbGVtZW50IHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNncm91cDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFpbkVsZW1lbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNtYWluO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3NldFN0eWxlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICBjb25zdCB7IGdyb3VwIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGdyb3VwID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ3JvdXAuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3N0eWxlQXR0cmlidXRlcygpOiB7XHJcbiAgICAgIFtLZXkgaW4ga2V5b2YgdGhpc10/OiBzdHJpbmc7XHJcbiAgICB9IHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdmdDb250YWluZXIoKTogU1ZHU1ZHRWxlbWVudCB8IG51bGwge1xyXG4gICAgICBjb25zdCB7IGdyb3VwLCBwYXJlbnRFbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGdyb3VwICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXBQYXJlbnQgPSBncm91cC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoZ3JvdXBQYXJlbnQgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoZ3JvdXBQYXJlbnQgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSByZXR1cm4gZ3JvdXBQYXJlbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0IHsgZ3JvdXA6IHBhcmVudEdyb3VwLCBtYWluRWxlbWVudDogcGFyZW50TWFpbiB9ID1cclxuICAgICAgICBwYXJlbnRFbGVtZW50IGFzIFNWR0VsZW1lbnRDb250cm9sbGVyO1xyXG5cclxuICAgICAgaWYgKHBhcmVudEdyb3VwIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCkgcmV0dXJuIHBhcmVudEdyb3VwO1xyXG5cclxuICAgICAgaWYgKHBhcmVudE1haW4gaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSByZXR1cm4gcGFyZW50TWFpbjtcclxuXHJcbiAgICAgIHJldHVybiAocGFyZW50RWxlbWVudCBhcyBTVkdFbGVtZW50Q29udHJvbGxlcikuc3ZnQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdmdDb250YWluZXJDb250cm9sbGVyKCk6IFNWR1NWR0NvbnRyb2xsZXIgfCBudWxsIHtcclxuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBTVkdTVkdDb250cm9sbGVyKSByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgIGNvbnN0IHsgcGFyZW50RWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsKSByZXR1cm4gcGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudENvbnRyb2xsZXIgPSAocGFyZW50RWxlbWVudCBhcyBTVkdFbGVtZW50Q29udHJvbGxlcilcclxuICAgICAgICAuc3ZnQ29udGFpbmVyQ29udHJvbGxlcjtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRDb250cm9sbGVyICE9PSB1bmRlZmluZWQpIHJldHVybiBwYXJlbnRDb250cm9sbGVyO1xyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU1ZHRWxlbWVudENvbnRyb2xsZXIgPSBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVTVkdDb250cm9sbGVyPjtcclxuIiwiaW1wb3J0IHsgc3ZnQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2NoaWxkcmVuXCI7XHJcbmltcG9ydCB7IHZpZXdCb3ggfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3ZpZXdCb3hcIjtcclxuaW1wb3J0IHsgY3JlYXRlU1ZHQ29udHJvbGxlciwgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IFNWR1JlY3RhbmdsZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgR3JhZGllbnQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNWR1NWR0NvbnRyb2xsZXIgZXh0ZW5kcyB2aWV3Qm94KFxyXG4gIHN2Z0NoaWxkcmVuKGNyZWF0ZVNWR0NvbnRyb2xsZXIoXCJzdmdcIiwgXCJzdmctc3ZnXCIpKVxyXG4pIHtcclxuICAjZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZGVmc1wiKTtcclxuICAjZ3JhZGllbnRzID0gbmV3IFNldDxTVkdHcmFkaWVudEVsZW1lbnQ+KCk7XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcImNsb3NlZFwiIH0pO1xyXG5cclxuICAgIHNoYWRvdy5hcHBlbmRDaGlsZCh0aGlzLm1haW5FbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLm1haW5FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuI2RlZnMpO1xyXG5cclxuICAgIHRoaXMuX3Jlc2l6ZVZpZXdCb3goKTtcclxuICB9XHJcblxyXG4gIF9kZWZpbmVHcmFkaWVudChncmFkaWVudDogR3JhZGllbnQpIHtcclxuICAgIGlmICh0aGlzLiNncmFkaWVudHMuaGFzKGdyYWRpZW50LnN2ZykpIHJldHVybiBncmFkaWVudC5zdmcuaWQ7XHJcblxyXG4gICAgY29uc3QgcGFkU3RhcnQgPSAyO1xyXG5cclxuICAgIGNvbnN0IGlkTnVtYmVyID0gQXJyYXkuZnJvbSh0aGlzLiNncmFkaWVudHMpLnJlZHVjZSgobWF4TnVtLCBncmFkaWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBudW1TdHJpbmcgPSBncmFkaWVudC5pZC5zbGljZSgtcGFkU3RhcnQpO1xyXG5cclxuICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQobnVtU3RyaW5nKTtcclxuXHJcbiAgICAgIHJldHVybiBNYXRoLm1heChtYXhOdW0sIG51bSk7XHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBjb25zdCBncmFkaWVudEVsZW1lbnQgPSBncmFkaWVudC5zdmc7XHJcblxyXG4gICAgdGhpcy4jZGVmcy5hcHBlbmRDaGlsZChncmFkaWVudEVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IGlkID0gYGdyYWRpZW50LSR7aWROdW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydChwYWRTdGFydCwgXCIwXCIpfWA7XHJcblxyXG4gICAgdGhpcy4jZ3JhZGllbnRzLmFkZChncmFkaWVudEVsZW1lbnQpO1xyXG5cclxuICAgIGdyYWRpZW50RWxlbWVudC5pZCA9IGlkO1xyXG5cclxuICAgIHJldHVybiBpZDtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkKGZpbGVuYW1lID0gXCJ3ZWJzcGlubmVyLnN2Z1wiKSB7XHJcbiAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XHJcbiAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIgMS4xXCIpO1xyXG5cclxuICAgIGNvbnN0IHN2Z1N0cmluZyA9IHRoaXMubWFpbkVsZW1lbnQub3V0ZXJIVE1MO1xyXG5cclxuICAgIGNvbnN0IGRvd25sb2FkQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gICAgZG93bmxvYWRBbmNob3IuZG93bmxvYWQgPSBmaWxlbmFtZTtcclxuXHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3N2Z1N0cmluZ10sIHsgdHlwZTogXCJpbWFnZS9zdmdcIiB9KTtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuICAgIGRvd25sb2FkQW5jaG9yLmhyZWYgPSB1cmw7XHJcblxyXG4gICAgZG93bmxvYWRBbmNob3IuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIGdldCBzdmdDb250YWluZXIoKTogU1ZHU1ZHRWxlbWVudCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMubWFpbkVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdmctc3ZnXCIsIFNWR1NWR0NvbnRyb2xsZXIpO1xyXG4iLCJpbXBvcnQgeyB1c2VGb250IH0gZnJvbSBcIi4uLy4uL21peGlucy9mb250XCI7XHJcbmltcG9ydCB7IGMyZEZpbGwgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2ZpbGxcIjtcclxuaW1wb3J0IHsgYzJkU3Ryb2tlIH0gZnJvbSBcIi4uLy4uL21peGlucy9zdHJva2VcIjtcclxuaW1wb3J0IHsgQzJEU3RhbmRhbG9uZVRyYW5zZm9ybWVkIH0gZnJvbSBcIi4uLy4uL21peGlucy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgY2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4vcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL29mZnNldFwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHsgTGluZWFyR3JhZGllbnQsIFJhZGlhbEdyYWRpZW50IH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuXHJcbmNsYXNzIEJhc2UgZXh0ZW5kcyBjMmRGaWxsKFxyXG4gIGMyZFN0cm9rZShvZmZzZXQodXNlRm9udChDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQpKSlcclxuKSB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhczJEVGV4dCBleHRlbmRzIEJhc2Uge1xyXG4gIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbXHJcbiAgICAuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgIFwic2l6ZVwiLFxyXG4gICAgXCJhbGlnblwiLFxyXG4gICAgXCJiYXNlbGluZVwiLFxyXG4gICAgXCJmb250XCIsXHJcbiAgICBcInN0cmV0Y2hcIixcclxuICBdO1xyXG5cclxuICBzdGF0aWMgZ2V0IHRhZygpIHtcclxuICAgIHJldHVybiBcImMyZC10ZXh0XCI7XHJcbiAgfVxyXG5cclxuICAjYWxpZ246IENhbnZhc1RleHRBbGlnbiB8IG51bGwgPSBudWxsO1xyXG4gICNiYXNlbGluZTogQ2FudmFzVGV4dEJhc2VsaW5lIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhvcml6b250YWwgYWxpZ25tZW50LiBPcHRpb25zIGFyZSBcImNlbnRlclwiLCBcImVuZFwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBvciBcInN0YXJ0XCIuXHJcbiAgICpcclxuICAgKiBAYXR0clxyXG4gICAqIEByZWZsZWN0XHJcbiAgICovXHJcbiAgZ2V0IGFsaWduKCk6IENhbnZhc1RleHRBbGlnbiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuI2FsaWduO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFsaWduKHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy4jYWxpZ24gPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImFsaWduXCIsICh0aGlzLiNhbGlnbiA9IHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXHJcbiAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgY2FzZSBcImFsaWduXCI6XHJcbiAgICAgICAgdGhpcy5hbGlnbiA9IG5ld1ZhbHVlIGFzIENhbnZhc1RleHRBbGlnbjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgXCJiYXNlbGluZVwiOlxyXG4gICAgICAgIHRoaXMuYmFzZWxpbmUgPSBuZXdWYWx1ZSBhcyBDYW52YXNUZXh0QmFzZWxpbmU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBiYXNlbGluZSgpIHtcclxuICAgIHJldHVybiB0aGlzLiNiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIHNldCBiYXNlbGluZSh2YWx1ZSkge1xyXG4gICAgaWYgKHRoaXMuI2Jhc2VsaW5lID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJiYXNlbGluZVwiLCAodGhpcy4jYmFzZWxpbmUgPSB2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSBjYW52YXMyRDtcclxuXHJcbiAgICBpZiAodGhpcy4jYWxpZ24gIT09IG51bGwpIGNvbnRleHQudGV4dEFsaWduID0gdGhpcy4jYWxpZ247XHJcblxyXG4gICAgaWYgKHRoaXMuI2Jhc2VsaW5lICE9PSBudWxsKSBjb250ZXh0LnRleHRCYXNlbGluZSA9IHRoaXMuI2Jhc2VsaW5lO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGwgIT09IFwibm9uZVwiICYmIHRoaXMudGV4dENvbnRlbnQgIT09IG51bGwpXHJcbiAgICAgIGNvbnRleHQuZmlsbFRleHQodGhpcy50ZXh0Q29udGVudCwgdGhpcy5vZmZzZXQueCwgdGhpcy5vZmZzZXQueSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3Ryb2tlICE9PSBcIm5vbmVcIiAmJiB0aGlzLnRleHRDb250ZW50ICE9PSBudWxsKVxyXG4gICAgICBjb250ZXh0LnN0cm9rZVRleHQodGhpcy50ZXh0Q29udGVudCwgdGhpcy5vZmZzZXQueCwgdGhpcy5vZmZzZXQueSk7XHJcblxyXG4gICAgdGhpcy5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjYW52YXMyRCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMaW5lYXJHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBMaW5lYXJHcmFkaWVudFxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHRleHRUb01lYXN1cmUgPSB0aGlzLnRleHRDb250ZW50ID8/IFwiXCI7XHJcblxyXG4gICAgY29uc3QgbWVhc3VyZW1lbnRzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0VG9NZWFzdXJlKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94QXNjZW50LFxyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveERlc2NlbnQsXHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94TGVmdDogeCxcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hSaWdodDogeSxcclxuICAgICAgd2lkdGgsXHJcbiAgICB9ID0gbWVhc3VyZW1lbnRzO1xyXG5cclxuICAgIGNvbnN0IGhlaWdodCA9IGFjdHVhbEJvdW5kaW5nQm94RGVzY2VudCArIGFjdHVhbEJvdW5kaW5nQm94QXNjZW50O1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJSYWRpYWxHcmFkaWVudChcclxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIGdyYWRpZW50OiBSYWRpYWxHcmFkaWVudFxyXG4gICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgIGNvbnN0IHRleHRUb01lYXN1cmUgPSB0aGlzLnRleHRDb250ZW50ID8/IFwiXCI7XHJcblxyXG4gICAgY29uc3QgbWVhc3VyZW1lbnRzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0VG9NZWFzdXJlKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94QXNjZW50LFxyXG4gICAgICBhY3R1YWxCb3VuZGluZ0JveERlc2NlbnQsXHJcbiAgICAgIGFjdHVhbEJvdW5kaW5nQm94TGVmdCxcclxuICAgICAgYWN0dWFsQm91bmRpbmdCb3hSaWdodCxcclxuICAgICAgd2lkdGgsXHJcbiAgICB9ID0gbWVhc3VyZW1lbnRzO1xyXG5cclxuICAgIGNvbnN0IGhlaWdodCA9IGFjdHVhbEJvdW5kaW5nQm94QXNjZW50ICsgYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50O1xyXG5cclxuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KGhlaWdodCwgd2lkdGgpIC8gMjtcclxuXHJcbiAgICBjb25zdCBjZW50ZXJYID0gYWN0dWFsQm91bmRpbmdCb3hMZWZ0ICsgd2lkdGggLyAyO1xyXG4gICAgY29uc3QgY2VudGVyWSA9IGFjdHVhbEJvdW5kaW5nQm94UmlnaHQgKyBoZWlnaHQgLyAyO1xyXG5cclxuICAgIHJldHVybiBncmFkaWVudC5yZW5kZXIoY29udGV4dCwgY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0Q29udGVudCgpIHtcclxuICAgIHJldHVybiBzdXBlci50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldCB0ZXh0Q29udGVudCh2YWx1ZSkge1xyXG4gICAgaWYgKHN1cGVyLnRleHRDb250ZW50ID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHN1cGVyLnRleHRDb250ZW50ID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGNoYW5nZWRFdmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtdGV4dFwiLCBDYW52YXMyRFRleHQpO1xyXG4iLCJpbXBvcnQgeyBDMkRTdGFuZGFsb25lVHJhbnNmb3JtZWQgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyByZW5kZXJzVmlzdWFsTWVkaWEgfSBmcm9tIFwiLi4vLi4vbWl4aW5zL3Zpc3VhbE1lZGlhXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlSFRNTEVsZW1lbnRXcmFwcGVyQ29uc3RydWN0b3IsXHJcbiAgSFRNTEVsZW1lbnRDb250cm9sbGVyLFxyXG59IGZyb20gXCIuLi9kb2N1bWVudC9kb21CYXNlXCI7XHJcbmltcG9ydCB7IGNoYW5nZWRFdmVudCB9IGZyb20gXCIuL3JlbmRlcmFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMyRFZpZGVvIGV4dGVuZHMgcmVuZGVyc1Zpc3VhbE1lZGlhKFxyXG4gIEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCxcclxuICBcInZpZGVvXCJcclxuKSB7XHJcbiAgc3RhdGljIGdldCB0YWcoKSB7XHJcbiAgICByZXR1cm4gXCJjMmQtdmlkZW9cIjtcclxuICB9XHJcblxyXG4gICNmcmFtZUNhbGxiYWNrSWQgPSAtMTtcclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgI2hhbmRsZUZyYW1lKCkge1xyXG4gICAgdGhpcy4jZnJhbWVDYWxsYmFja0lkID0gdGhpcy5tZWRpYUVsZW1lbnQucmVxdWVzdFZpZGVvRnJhbWVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VkRXZlbnQpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLm1lZGlhRWxlbWVudC5wYXVzZWQpIHRoaXMuI2hhbmRsZUZyYW1lKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBsYXkoKSB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5tZWRpYUVsZW1lbnQucGxheSgpO1xyXG5cclxuICAgIHRoaXMuI2hhbmRsZUZyYW1lKCk7XHJcblxyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG5cclxuICBwYXVzZSgpIHtcclxuICAgIHRoaXMubWVkaWFFbGVtZW50LmNhbmNlbFZpZGVvRnJhbWVDYWxsYmFjayh0aGlzLiNmcmFtZUNhbGxiYWNrSWQpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLm1lZGlhRWxlbWVudC5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhdXNlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lZGlhRWxlbWVudC5wYXVzZWQ7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVQbGF5KCkge1xyXG4gICAgaWYgKHRoaXMucGF1c2VkKSB0aGlzLnBsYXkoKTtcclxuICAgIGVsc2UgdGhpcy5wYXVzZSgpO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYzJkLXZpZGVvXCIsIENhbnZhczJEVmlkZW8pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhUTUxWaWRlb1dyYXBwZXIgZXh0ZW5kcyBjcmVhdGVIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcihcclxuICBcInZpZGVvXCJcclxuKSB7fVxyXG5cclxuZXhwb3J0IHR5cGUgSFRNTFZpZGVvQ29udHJvbGxlciA9IEhUTUxFbGVtZW50Q29udHJvbGxlcjxcclxuICBcInZpZGVvXCIsXHJcbiAgSFRNTFZpZGVvV3JhcHBlclxyXG4+O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCZXppZXIsIENhbnZhczJEU2hhcGVCZXppZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2JlemllclwiO1xyXG5pbXBvcnQgeyBDMkRCYXNlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jMmRCYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRFbGxpcHNlLFxyXG4gIENhbnZhczJEU2hhcGVFbGxpcHNlLFxyXG59IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvZWxsaXBzZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyREltYWdlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRExpbmUsIENhbnZhczJEU2hhcGVMaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9saW5lXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FudmFzMkRSZWN0YW5nbGUsXHJcbiAgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZSxcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRFNoYXBlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zaGFwZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRFRleHQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3RleHRcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyRFZpZGVvLFxyXG4gIEhUTUxWaWRlb0NvbnRyb2xsZXIsXHJcbiAgSFRNTFZpZGVvV3JhcHBlcixcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3ZpZGVvXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IFNWR1JlY3RhbmdsZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge1xyXG4gIEhUTUxFbGVtZW50Q29udHJvbGxlcixcclxuICBIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcixcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvZG9jdW1lbnQvZG9tQmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIERvY3VtZW50Q29udGFpbmVyQ29udHJvbGxlcixcclxuICBEb2N1bWVudENvbnRhaW5lcldyYXBwZXIsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL2RvY3VtZW50L2NvbnRhaW5lclwiO1xyXG5pbXBvcnQge1xyXG4gIERvY3VtZW50UGFyYWdyYXBoQ29udHJvbGxlcixcclxuICBEb2N1bWVudFBhcmFncmFwaFdyYXBwZXIsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL2RvY3VtZW50L3BhcmFncmFwaFwiO1xyXG5pbXBvcnQge1xyXG4gIERvY3VtZW50U3BhbkNvbnRyb2xsZXIsXHJcbiAgRG9jdW1lbnRTcGFuV3JhcHBlcixcclxufSBmcm9tIFwiLi4vZWxlbWVudHMvZG9jdW1lbnQvc3BhblwiO1xyXG5pbXBvcnQgeyBIVE1MQXVkaW9Db250cm9sbGVyLCBIVE1MQXVkaW9XcmFwcGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL2F1ZGlvL2F1ZGlvXCI7XHJcblxyXG50eXBlIE11bHRpcGxlQ2FsbGJhY2sgPSAoaW5kZXg6IG51bWJlcikgPT4gTm9kZSB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjMmRTdGFuZGFsb25lQ2hpbGRyZW48QiBleHRlbmRzIHR5cGVvZiBDMkRCYXNlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1iZXppZXI+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICBiZXppZXIob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRCZXppZXI+KTogQ2FudmFzMkRCZXppZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyREJlemllciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtZWxsaXBzZT5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIGVsbGlwc2Uob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRFbGxpcHNlPik6IENhbnZhczJERWxsaXBzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJERWxsaXBzZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtaW1hZ2U+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICBpbWFnZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyREltYWdlPik6IENhbnZhczJESW1hZ2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyREltYWdlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBsZShjYWxsYmFjazogTXVsdGlwbGVDYWxsYmFjayk6IE5vZGVbXTtcclxuICAgIG11bHRpcGxlKGNvdW50OiBudW1iZXIsIGNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gTm9kZSk6IE5vZGVbXTtcclxuICAgIG11bHRpcGxlPFxyXG4gICAgICBBMSBleHRlbmRzIG51bWJlciB8IE11bHRpcGxlQ2FsbGJhY2ssXHJcbiAgICAgIEEyIGV4dGVuZHMgQTEgZXh0ZW5kcyBudW1iZXIgPyAoaW5kZXg6IG51bWJlcikgPT4gTm9kZSA6IHVuZGVmaW5lZFxyXG4gICAgPihhcmcxOiBBMSwgYXJnMj86IEEyKTogTm9kZVtdIHtcclxuICAgICAgaWYgKHR5cGVvZiBhcmcxID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgaWYgKGFyZzIgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBjYWxsYmFja1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShhcmcxKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNoaWxkID0gYXJnMihpbmRleCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChjaGlsZCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZWN1cnNlQ2hpbGRyZW4gPSAoY2hpbGRyZW46IE5vZGVbXSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gYXJnMShpbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChjaGlsZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY2hpbGRyZW47XHJcblxyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVjdXJzZUNoaWxkcmVuKGNoaWxkcmVuLmNvbmNhdChjaGlsZCksIGluZGV4ICsgMSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gcmVjdXJzZUNoaWxkcmVuKFtdLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1saW5lPmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgbGluZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRExpbmU+KTogQ2FudmFzMkRMaW5lIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRMaW5lLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC1yZWN0YW5nbGU+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICByZWN0YW5nbGUob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRSZWN0YW5nbGU+KTogQ2FudmFzMkRSZWN0YW5nbGUge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFJlY3RhbmdsZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgYDxjMmQtc2hhcGU+YCBjaGlsZCBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAgICovXHJcbiAgICBzaGFwZShvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFNoYXBlPik6IENhbnZhczJEU2hhcGUge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFNoYXBlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC10ZXh0PmAgY2hpbGQgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqL1xyXG4gICAgdGV4dChvcHRpb25zPzogT3B0aW9uczxDYW52YXMyRFRleHQ+KTogQ2FudmFzMkRUZXh0IHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGQoQ2FudmFzMkRUZXh0LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBgPGMyZC12aWRlbz5gIGNoaWxkIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICAgKi9cclxuICAgIHZpZGVvKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEVmlkZW8+KTogQ2FudmFzMkRWaWRlbyB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEVmlkZW8sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjMmRTaGFwZUNoaWxkcmVuPEIgZXh0ZW5kcyB0eXBlb2YgQzJEQmFzZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgYmV6aWVyKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEU2hhcGVCZXppZXI+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEU2hhcGVCZXppZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsbGlwc2Uob3B0aW9ucz86IE9wdGlvbnM8Q2FudmFzMkRTaGFwZUVsbGlwc2U+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEU2hhcGVFbGxpcHNlLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5lKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEU2hhcGVMaW5lPikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZChDYW52YXMyRFNoYXBlTGluZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdGFuZ2xlKG9wdGlvbnM/OiBPcHRpb25zPENhbnZhczJEU2hhcGVSZWN0YW5nbGU+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUNoaWxkKENhbnZhczJEU2hhcGVSZWN0YW5nbGUsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdDaGlsZHJlbjxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU1ZHQ29udHJvbGxlckNoaWxkPEUgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlcj4oXHJcbiAgICAgIEVsZW1lbnRDbGFzczogRSxcclxuICAgICAgb3B0aW9ucz86IE9wdGlvbnM8SW5zdGFuY2VUeXBlPEU+PlxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KEVsZW1lbnRDbGFzcywgb3B0aW9ucyk7XHJcblxyXG4gICAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdGFuZ2xlKG9wdGlvbnM/OiBQYXJ0aWFsPFNWR1JlY3RhbmdsZUNvbnRyb2xsZXI+KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNWR0NvbnRyb2xsZXJDaGlsZChTVkdSZWN0YW5nbGVDb250cm9sbGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRDaGlsZHJlbjxcclxuICBUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwLFxyXG4gIFcgZXh0ZW5kcyBIVE1MRWxlbWVudFdyYXBwZXJDb25zdHJ1Y3RvcjxUPlxyXG4+KFdyYXBwZXJDb25zdHJ1Y3RvcjogVykge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFdyYXBwZXJDb25zdHJ1Y3RvciB7XHJcbiAgICBhdWRpbyhvcHRpb25zPzogT3B0aW9uczxIVE1MQXVkaW9Db250cm9sbGVyPik6IEhUTUxBdWRpb0NvbnRyb2xsZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVXcmFwcGVkQ2hpbGQoSFRNTEF1ZGlvV3JhcHBlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyKFxyXG4gICAgICBvcHRpb25zPzogT3B0aW9uczxEb2N1bWVudENvbnRhaW5lckNvbnRyb2xsZXI+XHJcbiAgICApOiBEb2N1bWVudENvbnRhaW5lckNvbnRyb2xsZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVXcmFwcGVkQ2hpbGQoRG9jdW1lbnRDb250YWluZXJXcmFwcGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJhZ3JhcGgoXHJcbiAgICAgIG9wdGlvbnM/OiBPcHRpb25zPERvY3VtZW50UGFyYWdyYXBoQ29udHJvbGxlcj5cclxuICAgICk6IERvY3VtZW50UGFyYWdyYXBoQ29udHJvbGxlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyYXBwZWRDaGlsZChEb2N1bWVudFBhcmFncmFwaFdyYXBwZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ob3B0aW9ucz86IE9wdGlvbnM8RG9jdW1lbnRTcGFuQ29udHJvbGxlcj4pOiBEb2N1bWVudFNwYW5Db250cm9sbGVyIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JhcHBlZENoaWxkKERvY3VtZW50U3BhbldyYXBwZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZGVvKG9wdGlvbnM/OiBPcHRpb25zPEhUTUxWaWRlb0NvbnRyb2xsZXI+KTogSFRNTFZpZGVvQ29udHJvbGxlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyYXBwZWRDaGlsZChIVE1MVmlkZW9XcmFwcGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpbWVuc2lvbnM8QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcywgXCJ3aWR0aFwiLCBcImhlaWdodFwiXTtcclxuXHJcbiAgICAjd2lkdGggPSAxMDA7XHJcbiAgICAjaGVpZ2h0ID0gMTAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWxlbWVudCdzIHdpZHRoIGluIHBpeGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLiN3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3dpZHRoID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIndpZHRoXCIsICh0aGlzLiN3aWR0aCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbGVtZW50J3MgaGVpZ2h0IGluIHBpeGVscy5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gdGhpcy4jaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2hlaWdodCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJoZWlnaHRcIiwgKHRoaXMuI2hlaWdodCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwid2lkdGhcIjpcclxuICAgICAgICAgIHRoaXMud2lkdGggPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY2FzZSBcImhlaWdodFwiOlxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBhdHRyaWJ1dGVQYXJzZXIubnVtYmVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRTVkdEaW1lbnNpb25zPFxyXG4gIEIgZXh0ZW5kcyBTVkdFbGVtZW50Q29udHJvbGxlciAmIFJldHVyblR5cGU8dHlwZW9mIGRpbWVuc2lvbnM+XHJcbj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgdGhpcy53aWR0aC50b1N0cmluZygpKTtcclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgdGhpcy5oZWlnaHQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodCh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHN1cGVyLmhlaWdodCkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIuaGVpZ2h0ID0gdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBzdXBlci53aWR0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIud2lkdGggPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN2Z0RpbWVuc2lvbnM8QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGV4dGVuZFNWR0RpbWVuc2lvbnMoZGltZW5zaW9ucyhCYXNlKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jb2xvclwiO1xyXG5pbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBEcmF3U3R5bGUsXHJcbiAgR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbn0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGJhc2VGaWxsPEIgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgRmlsbGFibGUgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gWy4uLkJhc2Uub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcImZpbGxcIl07XHJcblxyXG4gICAgI2ZpbGw6IERyYXdTdHlsZSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlbmRlcmluZyBzdHlsZSBpbnNpZGUgdGhlIGVsZW1lbnQuIFRoaXMgbWF5IGJlIGEgY29sb3Igb3IgZ3JhZGllbnQuXHJcbiAgICAgKiBXaGVuIHNldCB0byBudWxsLCB0aGUgcGFyZW50IGVsZW1lbnQncyBzdHlsZSBpcyB1c2VkLiBXaGVuXHJcbiAgICAgKiBzZXQgdG8gXCJub25lXCIsIHRoZSBpbnNpZGUgd2lsbCBiZSB0cmFuc3BhcmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGZpbGwoKTogRHJhd1N0eWxlIHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNmaWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmaWxsKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNmaWxsID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuI2ZpbGwgaW5zdGFuY2VvZiBDb2xvciAmJlxyXG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgQ29sb3IgJiZcclxuICAgICAgICB0aGlzLiNmaWxsLmVxdWFscyh2YWx1ZSlcclxuICAgICAgKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcclxuICAgICAgICAgIFwiZmlsbFwiLFxyXG4gICAgICAgICAgKHRoaXMuI2ZpbGwgPSB2YWx1ZSA9PT0gXCJub25lXCIgPyB2YWx1ZSA6IENvbG9yLmZyb21TdHJpbmcodmFsdWUpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZWdpc3RlckNoYW5nZShcImZpbGxcIiwgKHRoaXMuI2ZpbGwgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICkge1xyXG4gICAgICBpZiAobmFtZSA9PT0gXCJmaWxsXCIpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHRoaXMuZmlsbCA9IG51bGw7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxsVmFsdWUgPSBhdHRyaWJ1dGVQYXJzZXIuRmlsbFN0cm9rZVN0eWxlKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICBpZiAoZmlsbFZhbHVlICE9PSBcImdyYWRpZW50XCIpIHRoaXMuZmlsbCA9IGZpbGxWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjMmRGaWxsPEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBGaWxsYWJsZSBleHRlbmRzIGJhc2VGaWxsKEJhc2UpIHtcclxuICAgIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgICBjb25zdCB7IGNvbnRleHQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIENvbG9yKSBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZmlsbC50b1N0cmluZygpO1xyXG4gICAgICBlbHNlIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBHcmFkaWVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBDb25pY2FsR3JhZGllbnQpIHtcclxuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5yZW5kZXJDb25pY2FsR3JhZGllbnQoY29udGV4dCwgdGhpcy5maWxsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIExpbmVhckdyYWRpZW50KSB7XHJcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMucmVuZGVyTGluZWFyR3JhZGllbnQoY29udGV4dCwgdGhpcy5maWxsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsbCBpbnN0YW5jZW9mIFJhZGlhbEdyYWRpZW50KSB7XHJcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMucmVuZGVyUmFkaWFsR3JhZGllbnQoY29udGV4dCwgdGhpcy5maWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZnRlclJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLmZpbGwgIT09IFwibm9uZVwiKSBjYW52YXMyRC5jb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgIHN1cGVyLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ZnRmlsbDxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlRmlsbChCYXNlKSB7XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZpbGwgaW5zdGFuY2VvZiBHcmFkaWVudCkgdGhpcy4jZmlsbEdyYWRpZW50KHRoaXMuZmlsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbGwoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5maWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmaWxsKHZhbHVlKSB7XHJcbiAgICAgIGlmIChzdXBlci5maWxsPy50b1N0cmluZygpID09PSB2YWx1ZT8udG9TdHJpbmcoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIuZmlsbCA9IHZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgeyBmaWxsIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGZpbGwgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIGlmIChmaWxsIGluc3RhbmNlb2YgQ29sb3IpXHJcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJmaWxsXCIsIGZpbGwudG9TdHJpbmcoKSk7XHJcbiAgICAgIGVsc2UgaWYgKGZpbGwgaW5zdGFuY2VvZiBHcmFkaWVudCkgdGhpcy4jZmlsbEdyYWRpZW50KGZpbGwpO1xyXG4gICAgfVxyXG5cclxuICAgICNmaWxsR3JhZGllbnQoZ3JhZGllbnQ6IEdyYWRpZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgc3ZnQ29udGFpbmVyQ29udHJvbGxlciB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzdmdDb250YWluZXJDb250cm9sbGVyID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBncmFkaWVudElkID0gc3ZnQ29udGFpbmVyQ29udHJvbGxlci5fZGVmaW5lR3JhZGllbnQoZ3JhZGllbnQpO1xyXG5cclxuICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJmaWxsXCIsIGB1cmwoIyR7Z3JhZGllbnRJZH0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9zdHlsZUF0dHJpYnV0ZXMoKTogeyBbS2V5IGluIGtleW9mIHRoaXNdPzogc3RyaW5nIH0ge1xyXG4gICAgICByZXR1cm4geyAuLi5zdXBlci5fc3R5bGVBdHRyaWJ1dGVzLCBmaWxsOiBcImZpbGxcIiB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZSB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvcmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBhdHRyaWJ1dGVQYXJzZXIgfSBmcm9tIFwiLi4vdXRsaXRpZXMvYXR0cmlidXRlUGFyc2VyXCI7XHJcbmltcG9ydCB7IEFuZ2xlIH0gZnJvbSBcIi4uL2NsYXNzZXMvYW5nbGVcIjtcclxuaW1wb3J0IHsgVW5pdHMgfSBmcm9tIFwiLi4vY2xhc3Nlcy91bml0c1wiO1xyXG5pbXBvcnQgeyBNb3VzZVRyYWNrZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9tb3VzZVwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2NhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbnRTaXplVW5pdHMgPSB7XHJcbiAgLi4uVW5pdHMuc2l6ZSxcclxuICBjYXBIZWlnaHQ6IFwiY2FwXCIsXHJcbiAgY2hhcmFjdGVyV2lkdGg6IFwiY2hcIixcclxuICBjYWxjdWxhdGVkOiBcImVtXCIsXHJcbiAgeEhlaWdodDogXCJleFwiLFxyXG4gIGNoYXJhY3RlckhlaWdodDogXCJpY1wiLFxyXG4gIGxpbmVIZWlnaHQ6IFwibGhcIixcclxuICByb290Q2FwSGVpZ2h0OiBcInJjYXBcIixcclxuICByb290Q2hhcmFjdGVyV2lkdGg6IFwicmNoXCIsXHJcbiAgcm9vdFNpemU6IFwicmVtXCIsXHJcbiAgcm9vdFhIZWlnaHQ6IFwicmV4XCIsXHJcbiAgcm9vdENoYXJhY3RlckhlaWdodDogXCJpY1wiLFxyXG4gIHJvb3RMaW5lSGVpZ2h0OiBcInJsaFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuY29uc3QgZm9udFN0eWxlcyA9IHtcclxuICBub3JtYWw6IFwibm9ybWFsXCIsXHJcbiAgaXRhbGljOiBcIml0YWxpY1wiLFxyXG4gIG9ibGlxdWU6IFwib2JsaXF1ZVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvbnQ8QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgdHlwZSBGb250Q2xhc3MgPSB0eXBlb2YgRm9udDtcclxuXHJcbiAgdHlwZSBGb250U3R5bGUgPVxyXG4gICAgfCBGb250Q2xhc3NbXCJzdHlsZVwiXVtrZXlvZiBGb250Q2xhc3NbXCJzdHlsZVwiXV1cclxuICAgIHwgYG9ibGlxdWUgJHtudW1iZXJ9JHsodHlwZW9mIEFuZ2xlKVtcInVuaXRcIl1ba2V5b2YgKHR5cGVvZiBBbmdsZSlbXCJ1bml0XCJdXX1gO1xyXG5cclxuICB0eXBlIEZvbnRTaXplVW5pdCA9ICh0eXBlb2YgZm9udFNpemVVbml0cylba2V5b2YgdHlwZW9mIGZvbnRTaXplVW5pdHNdO1xyXG5cclxuICBjbGFzcyBGb250IGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xyXG4gICAgICAuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJzaXplXCIsXHJcbiAgICAgIFwic3RyZXRjaFwiLFxyXG4gICAgICBcImZvbnQtZmFtaWx5XCIsXHJcbiAgICAgIFwiZm9udC1zdHlsZVwiLFxyXG4gICAgICBcImtlcm5pbmdcIixcclxuICAgIF07XHJcblxyXG4gICAgI2ZvbnRGYW1pbHk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgI2tlcm5pbmc6IENhbnZhc0ZvbnRLZXJuaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAjc2l6ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAjc2l6ZVVuaXQ6IEZvbnRTaXplVW5pdCA9IFwicHhcIjtcclxuICAgICNzdHJldGNoOiBDYW52YXNGb250U3RyZXRjaCB8IG51bGwgPSBudWxsO1xyXG4gICAgI2ZvbnRTdHlsZTogRm9udFN0eWxlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlIFwic2l6ZVwiOlxyXG4gICAgICAgICAgdGhpcy5zaXplID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSBcInN0cmV0Y2hcIjpcclxuICAgICAgICAgIHRoaXMuc3RyZXRjaCA9IG5ld1ZhbHVlIGFzIENhbnZhc0ZvbnRTdHJldGNoO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgXCJmb250LWZhbWlseVwiOlxyXG4gICAgICAgICAgdGhpcy5mb250RmFtaWx5ID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY2FzZSBcImZvbnQtc3R5bGVcIjpcclxuICAgICAgICAgIHRoaXMuZm9udFN0eWxlID0gbmV3VmFsdWUgYXMgRm9udFN0eWxlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNhc2UgXCJrZXJuaW5nXCI6XHJcbiAgICAgICAgICB0aGlzLmtlcm5pbmcgPSBuZXdWYWx1ZSBhcyBDYW52YXNGb250S2VybmluZztcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2l6ZVVuaXQgPSBmb250U2l6ZVVuaXRzO1xyXG5cclxuICAgIHN0YXRpYyBzdHJldGNoOiB7IFtrZXk6IHN0cmluZ106IENhbnZhc0ZvbnRTdHJldGNoIH0gPSB7XHJcbiAgICAgIG5vcm1hbDogXCJub3JtYWxcIixcclxuICAgICAgdWx0cmFDb25kZW5zZWQ6IFwidWx0cmEtY29uZGVuc2VkXCIsXHJcbiAgICAgIGV4dHJhQ29uZGVuc2VkOiBcImV4dHJhLWNvbmRlbnNlZFwiLFxyXG4gICAgICBjb25kZW5zZWQ6IFwiY29uZGVuc2VkXCIsXHJcbiAgICAgIGV4cGFuZGVkOiBcImV4cGFuZGVkXCIsXHJcbiAgICAgIGV4dHJhRXhwYW5kZWQ6IFwiZXh0cmEtZXhwYW5kZWRcIixcclxuICAgICAgdWx0cmFFeHBhbmRlZDogXCJ1bHRyYS1leHBhbmRlZFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgc3R5bGUgPSBmb250U3R5bGVzO1xyXG5cclxuICAgIGdldCBmb250RmFtaWx5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZm9udEZhbWlseTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZm9udEZhbWlseSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jZm9udEZhbWlseSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJmb250RmFtaWx5XCIsICh0aGlzLiNmb250RmFtaWx5ID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZm9udFN0eWxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jZm9udFN0eWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmb250U3R5bGUodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI2ZvbnRTdHlsZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJmb250U3R5bGVcIiwgKHRoaXMuI2ZvbnRTdHlsZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGtlcm5pbmcoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNrZXJuaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBrZXJuaW5nKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNrZXJuaW5nID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImtlcm5pbmdcIiwgKHRoaXMuI2tlcm5pbmcgPSB2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHsgY29udGV4dCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuI2ZvbnRTdHlsZSA9PT0gbnVsbCA/IFwiXCIgOiBgJHt0aGlzLiNmb250U3R5bGV9IGA7XHJcblxyXG4gICAgICBpZiAodGhpcy4jZm9udEZhbWlseSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLiNzaXplICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBmb250RmFtbHlNYXRjaCA9IGNvbnRleHQuZm9udC5tYXRjaCgvXFxTKiQvKTtcclxuXHJcbiAgICAgICAgICBpZiAoZm9udEZhbWx5TWF0Y2ggPT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIGZhbWlseSBpbiBjdXJyZW50IGZvbnQ6ICR7Y29udGV4dC5mb250fWBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBbZm9udEZhbWlseV0gPSBmb250RmFtbHlNYXRjaDtcclxuXHJcbiAgICAgICAgICBjb250ZXh0LmZvbnQgPSBgJHtzdHlsZX0ke3RoaXMuI3NpemV9JHt0aGlzLiNzaXplVW5pdH0gJHtmb250RmFtaWx5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuI3NpemUgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBmb250U2l6ZU1hdGNoID0gY29udGV4dC5mb250Lm1hdGNoKC8oXFxTKSpcXHNcXFMqJC8pO1xyXG5cclxuICAgICAgICBpZiAoZm9udFNpemVNYXRjaCA9PT0gbnVsbCB8fCBmb250U2l6ZU1hdGNoWzBdLmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc2l6ZSBpbiBjdXJyZW50IGZvbnQ6ICR7Y29udGV4dC5mb250fWBcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gZm9udFNpemVNYXRjaFsxXTtcclxuXHJcbiAgICAgICAgY29udGV4dC5mb250ID0gYCR7c3R5bGV9JHtmb250U2l6ZX0gJHt0aGlzLiNmb250RmFtaWx5fWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGV4dC5mb250ID0gYCR7c3R5bGV9JHt0aGlzLiNzaXplfSR7dGhpcy4jc2l6ZVVuaXR9ICR7XHJcbiAgICAgICAgICB0aGlzLiNmb250RmFtaWx5XHJcbiAgICAgICAgfWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLiNzdHJldGNoICE9PSBudWxsKSBjb250ZXh0LmZvbnRTdHJldGNoID0gdGhpcy4jc3RyZXRjaDtcclxuXHJcbiAgICAgIGlmICh0aGlzLiNrZXJuaW5nICE9PSBudWxsKSBjb250ZXh0LmZvbnRLZXJuaW5nID0gdGhpcy4ja2VybmluZztcclxuXHJcbiAgICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb250IHNpemUgdXNpbmcgdGhlIGN1cnJlbnQgc2l6ZVVuaXQuIFdoZW4gc2V0IHRvIG51bGwsIHRoZSBsYXN0IHJlbmRlcmVkXHJcbiAgICAgKiBlbGVtZW50J3Mgc2V0dGluZyBpcyB1c2VkLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgc2l6ZSgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3NpemU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNpemUodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3NpemUgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2l6ZVwiLCAodGhpcy4jc2l6ZSA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbml0IGZvciBmb250IHNpemU6IFwiY21cIiB8IFwibW1cIiB8IFwiUVwiIHwgXCJpblwiIHwgXCJwY1wiIHwgXCJwdFwiIHwgXCJweFwiIHwgXCJ2aFwiIHxcclxuICAgICAqIFwidndcIiB8IFwiY2FwXCIgfCBcImNoXCIgfCBcImVtXCIgfCBcImV4XCIgfCBcImljXCIgfCBcImxoXCIgfCBcInJjYXBcIiB8IFwicmNoXCIgfCBcInJlbVwiIHxcclxuICAgICAqIFwicmV4XCIgfCBcInJsaFwiXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXQgc2l6ZVVuaXQoKTogRm9udFNpemVVbml0IHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3NpemVVbml0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzaXplVW5pdCh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jc2l6ZVVuaXQgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2l6ZVVuaXRcIiwgKHRoaXMuI3NpemVVbml0ID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZVN0cmluZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3NpemU/LnRvU3RyaW5nKCkgPz8gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RyZXRjaCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3N0cmV0Y2g7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0cmV0Y2godmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3N0cmV0Y2ggPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic3RyZXRjaFwiLCAodGhpcy4jc3RyZXRjaCA9IHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRm9udDtcclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmFzZVJlbmRlcmFibGUgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc1RvPEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsuLi5zdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMsIFwidG9cIl07XHJcblxyXG4gICAgI3RvID0gVmVjdG9yMkQueHkoMTAwLCAxMDApO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5kIHBvaW50IG9mIHRoZSBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCB0bygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3RvO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0byh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jdG8uZXF1YWxzKHZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInRvXCIsICh0aGlzLiN0byA9IHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuYW1lID09PSBcInRvXCIgJiYgbmV3VmFsdWUgIT09IG51bGwpXHJcbiAgICAgICAgdGhpcy50byA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzRnJvbTxCIGV4dGVuZHMgdHlwZW9mIENhbnZhczJEQmFzZVJlbmRlcmFibGU+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzLCBcImZyb21cIl07XHJcblxyXG4gICAgI2Zyb20gPSBWZWN0b3IyRC56ZXJvKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydGluZyBwb2ludCBvZiB0aGUgZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgYW5jaG9yLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgZnJvbSgpOiBWZWN0b3IyRCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNmcm9tO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmcm9tKHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLiNmcm9tLmVxdWFscyh2YWx1ZSkpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJmcm9tXCIsICh0aGlzLiNmcm9tID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5hbWUgPT09IFwiZnJvbVwiICYmIG5ld1ZhbHVlICE9PSBudWxsKVxyXG4gICAgICAgIHRoaXMuZnJvbSA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcblxyXG4gICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjJELCBWZWN0b3IyREJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy9taXhhYmxlXCI7XHJcbmltcG9ydCB7IFNWR0VsZW1lbnRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9zdmdCYXNlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXQ8QiBleHRlbmRzIHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudD4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFsuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcywgXCJvZmZzZXRcIl07XHJcblxyXG4gICAgI29mZnNldCA9IG5ldyBWZWN0b3IyRCgwLCAwKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBzdXBlciguLi5hcmdzKTtcclxuXHJcbiAgICAgIHRoaXMuI29mZnNldC5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNvZmZzZXRDaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSAhPT0gbnVsbCAmJiBuYW1lID09PSBcIm9mZnNldFwiKSB7XHJcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG4gICAgICAgIGlmICghdGhpcy4jb2Zmc2V0LmVxdWFscyhuZXdQb3NpdGlvbikpIHRoaXMub2Zmc2V0ID0gbmV3UG9zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlT2Zmc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgIGlmICh4ID09PSAwICYmIHkgPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuI29mZnNldC54ICs9IHg7XHJcbiAgICAgIHRoaXMuI29mZnNldC55ICs9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgI29mZnNldENoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxWZWN0b3IyREJhc2U+ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwib2Zmc2V0XCIsIHRoaXMuI29mZnNldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9zaXRpb24gb2YgdGhlIGVsZW1lbnQncyBvcmlnaW4gcmVsYXRpdmUgdG8gaXRzIGFuY2hvci5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IG9mZnNldCgpOiBWZWN0b3IyRCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG9mZnNldCh2YWx1ZSkge1xyXG4gICAgICBjb25zdCByZXBsYWNlID0gdGhpcy4jb2Zmc2V0LnJlcGxhY2UuYmluZCh0aGlzLiNvZmZzZXQpO1xyXG5cclxuICAgICAgcmVwbGFjZSgodGhpcy4jb2Zmc2V0ID0gdmFsdWUpLCB0aGlzLiNvZmZzZXRDaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZFNWR09mZnNldDxcclxuICBCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXIgJiBSZXR1cm5UeXBlPHR5cGVvZiBvZmZzZXQ+XHJcbj4oQmFzZTogQikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZU9mZnNldCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICBzdXBlci5tb3ZlT2Zmc2V0KHgsIHkpO1xyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlT2Zmc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9mZnNldCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLm9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb2Zmc2V0KHZhbHVlKSB7XHJcbiAgICAgIHN1cGVyLm9mZnNldCA9IHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlT2Zmc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZU9mZnNldCgpIHtcclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHRoaXMub2Zmc2V0LngudG9TdHJpbmcoKSk7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwieVwiLCB0aGlzLm9mZnNldC55LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdPZmZzZXQ8QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGV4dGVuZFNWR09mZnNldChvZmZzZXQoQmFzZSkpO1xyXG59XHJcbiIsImltcG9ydCB7IENvbmljYWxHcmFkaWVudCwgTGluZWFyR3JhZGllbnQgfSBmcm9tIFwiLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gXCIuLi9jbGFzc2VzL3ZlY3RvcjJkXCI7XHJcbmltcG9ydCB7IENhbnZhczJEQmFzZVJlbmRlcmFibGUgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvbWl4YWJsZVwiO1xyXG5pbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBleHRlbmRTVkdEaW1lbnNpb25zIH0gZnJvbSBcIi4vZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBleHRlbmRTVkdPZmZzZXQsIG9mZnNldCB9IGZyb20gXCIuL29mZnNldFwiO1xyXG5cclxudHlwZSBPcmlnaW4gPSBcImNlbnRlclwiIHwgXCJ0b3BMZWZ0XCI7XHJcblxyXG5mdW5jdGlvbiBiYXNlUmVjdGFuZ2xlQm91bmRzPEIgZXh0ZW5kcyB0eXBlb2YgQ3VzdG9tSFRNTEVsZW1lbnQ+KFxyXG4gIEJhc2U6IEIsXHJcbiAgZGVmYXVsdE9yaWdpbjogT3JpZ2luXHJcbikge1xyXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGRpbWVuc2lvbnMob2Zmc2V0KEJhc2UpKSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gW1xyXG4gICAgICAuLi5kaW1lbnNpb25zKG9mZnNldChCYXNlKSkub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgICBcIm9yaWdpblwiLFxyXG4gICAgXTtcclxuXHJcbiAgICAjb3JpZ2luOiBPcmlnaW4gPSBkZWZhdWx0T3JpZ2luO1xyXG5cclxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcclxuICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICBvbGRWYWx1ZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgbmV3VmFsdWU6IHN0cmluZyB8IG51bGxcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBpZiAobmFtZSA9PT0gXCJvcmlnaW5cIikge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG5ld1ZhbHVlIGFzIE9yaWdpbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3BMZWZ0KCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuI29yaWdpbikge1xyXG4gICAgICAgIGNhc2UgXCJ0b3BMZWZ0XCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XHJcbiAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0Lm1pbnVzKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLm9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9wUmlnaHQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvcExlZnQucGx1cyh0aGlzLndpZHRoLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2VudGVyKCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuI29yaWdpbikge1xyXG4gICAgICAgIGNhc2UgXCJ0b3BMZWZ0XCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQucGx1cyh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICBjYXNlIFwiY2VudGVyXCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm90dG9tTGVmdCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9wTGVmdC5wbHVzKDAsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm90dG9tUmlnaHQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvcFJpZ2h0LnBsdXMoMCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcmlnaW4oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNvcmlnaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG9yaWdpbih2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jb3JpZ2luID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcIm9yaWdpblwiLCAodGhpcy4jb3JpZ2luID0gdmFsdWUpKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYzJkUmVjdGFuZ2xlQm91bmRzPEIgZXh0ZW5kcyB0eXBlb2YgQ2FudmFzMkRCYXNlUmVuZGVyYWJsZT4oXHJcbiAgQmFzZTogQixcclxuICBkZWZhdWx0T3JpZ2luOiBPcmlnaW5cclxuKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZVJlY3RhbmdsZUJvdW5kcyhCYXNlLCBkZWZhdWx0T3JpZ2luKSB7XHJcbiAgICByZW5kZXJDb25pY2FsR3JhZGllbnQoXHJcbiAgICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgICAgZ3JhZGllbnQ6IENvbmljYWxHcmFkaWVudFxyXG4gICAgKTogQ2FudmFzR3JhZGllbnQge1xyXG4gICAgICByZXR1cm4gZ3JhZGllbnQucmVuZGVyKGNvbnRleHQsIHRoaXMuY2VudGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJMaW5lYXJHcmFkaWVudChcclxuICAgICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgICBncmFkaWVudDogTGluZWFyR3JhZGllbnRcclxuICAgICk6IENhbnZhc0dyYWRpZW50IHtcclxuICAgICAgY29uc3QgeyB4OiB4MCwgeTogeTAgfSA9IHRoaXMudG9wTGVmdDtcclxuXHJcbiAgICAgIGNvbnN0IHsgeDogeDEsIHk6IHkxIH0gPSB0aGlzLmJvdHRvbVJpZ2h0O1xyXG5cclxuICAgICAgcmV0dXJuIGdyYWRpZW50LnJlbmRlcihjb250ZXh0LCB4MCwgeTAsIHgxIC0geDAsIHkxIC0geTApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdmdSZWN0YW5nbGVCb3VuZHM8QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihcclxuICBCYXNlOiBCLFxyXG4gIGRlZmF1bHRPcmlnaW46IE9yaWdpblxyXG4pIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBleHRlbmRTVkdPZmZzZXQoXHJcbiAgICBleHRlbmRTVkdEaW1lbnNpb25zKGJhc2VSZWN0YW5nbGVCb3VuZHMoQmFzZSwgZGVmYXVsdE9yaWdpbikpXHJcbiAgKSB7XHJcbiAgICBfdXBkYXRlT2Zmc2V0KCkge1xyXG4gICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMudG9wTGVmdDtcclxuICAgICAgdGhpcy5tYWluRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgudG9TdHJpbmcoKSk7XHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwieVwiLCB5LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcmlnaW4oKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5vcmlnaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG9yaWdpbih2YWx1ZSkge1xyXG4gICAgICBzdXBlci5vcmlnaW4gPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZU9mZnNldCgpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTGluZWFyR3JhZGllbnQgfSBmcm9tIFwiLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuLi9jbGFzc2VzL2NvbG9yXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29uaWNhbEdyYWRpZW50LFxyXG4gIERyYXdTdHlsZSxcclxuICBHcmFkaWVudCxcclxuICBSYWRpYWxHcmFkaWVudCxcclxufSBmcm9tIFwiLi4vY2xhc3Nlcy9ncmFkaWVudFwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBDYW52YXMyREJhc2VSZW5kZXJhYmxlIH0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgQ3VzdG9tSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvbWl4YWJsZVwiO1xyXG5cclxuZnVuY3Rpb24gYmFzZVN0cm9rZTxCIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgLi4uQmFzZS5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIFwic3Ryb2tlXCIsXHJcbiAgICAgIFwibGluZS13aWR0aFwiLFxyXG4gICAgXTtcclxuXHJcbiAgICAjc3Ryb2tlOiBEcmF3U3R5bGUgfCBudWxsID0gbnVsbDtcclxuICAgICNsaW5lV2lkdGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lkdGggaW4gcGl4ZWxzIGZvciBkcmF3aW5nIGxpbmVzLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyIGxpbmUtd2lkdGhcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBsaW5lV2lkdGgoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNsaW5lV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxpbmVXaWR0aCh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy4jbGluZVdpZHRoID09PSB2YWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImxpbmVXaWR0aFwiLCAodGhpcy4jbGluZVdpZHRoID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZW5kZXJpbmcgc3R5bGUgZm9yIGxpbmVzLiBUaGlzIG1heSBiZSBhIGNvbG9yIG9yIGdyYWRpZW50LlxyXG4gICAgICogV2hlbiBzZXQgdG8gbnVsbCwgdGhlIHBhcmVudCBlbGVtZW50J3Mgc3R5bGUgaXMgdXNlZC4gV2hlblxyXG4gICAgICogc2V0IHRvIFwibm9uZVwiLCBubyBsaW5lcyB3aWxsIGJlIGRyYXduLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgc3Ryb2tlKCk6IERyYXdTdHlsZSB8IG51bGwge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc3Ryb2tlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHJva2UodmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuI3N0cm9rZSA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLiNzdHJva2UgaW5zdGFuY2VvZiBDb2xvciAmJlxyXG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgQ29sb3IgJiZcclxuICAgICAgICB0aGlzLiNzdHJva2UuZXF1YWxzKHZhbHVlKVxyXG4gICAgICApXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFxyXG4gICAgICAgICAgXCJzdHJva2VcIixcclxuICAgICAgICAgICh0aGlzLiNzdHJva2UgPSB2YWx1ZSA9PT0gXCJub25lXCIgPyB2YWx1ZSA6IENvbG9yLmZyb21TdHJpbmcodmFsdWUpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIGVsc2UgdGhpcy5yZWdpc3RlckNoYW5nZShcInN0cm9rZVwiLCAodGhpcy4jc3Ryb2tlID0gdmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApIHtcclxuICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5zdHJva2UgPSBudWxsO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBzdHJva2VWYWx1ZSA9IGF0dHJpYnV0ZVBhcnNlci5GaWxsU3Ryb2tlU3R5bGUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChzdHJva2VWYWx1ZSAhPT0gXCJncmFkaWVudFwiKSB0aGlzLnN0cm9rZSA9IHN0cm9rZVZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgXCJsaW5lLXdpZHRoXCI6XHJcbiAgICAgICAgICB0aGlzLmxpbmVXaWR0aCA9XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID09PSBudWxsID8gbnVsbCA6IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjMmRTdHJva2U8QiBleHRlbmRzIHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIFN0cm9rZWFibGUgZXh0ZW5kcyBiYXNlU3Ryb2tlKEJhc2UpIHtcclxuICAgIHJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIHN1cGVyLnJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgICBjb25zdCB7IGNvbnRleHQgfSA9IGNhbnZhczJEO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3Ryb2tlICE9PSBcIm5vbmVcIiAmJiB0aGlzLnN0cm9rZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0cm9rZSBpbnN0YW5jZW9mIENvbG9yKVxyXG4gICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zdHJva2UgaW5zdGFuY2VvZiBHcmFkaWVudCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc3Ryb2tlIGluc3RhbmNlb2YgQ29uaWNhbEdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnJlbmRlckNvbmljYWxHcmFkaWVudChcclxuICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgIHRoaXMuc3Ryb2tlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3Ryb2tlIGluc3RhbmNlb2YgTGluZWFyR3JhZGllbnQpXHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnJlbmRlckxpbmVhckdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgdGhpcy5zdHJva2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc3Ryb2tlIGluc3RhbmNlb2YgUmFkaWFsR3JhZGllbnQpXHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnJlbmRlclJhZGlhbEdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgdGhpcy5zdHJva2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmxpbmVXaWR0aCAhPT0gbnVsbCkgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlclJlbmRlcihjYW52YXMyRDogQ2FudmFzMkRDYW52YXNFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLnN0cm9rZSAhPT0gXCJub25lXCIpIGNhbnZhczJELmNvbnRleHQuc3Ryb2tlKCk7XHJcblxyXG4gICAgICBzdXBlci5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN2Z1N0cm9rZTxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlU3Ryb2tlKEJhc2UpIHtcclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3Ryb2tlIGluc3RhbmNlb2YgR3JhZGllbnQpIHRoaXMuI3N0cm9rZUdyYWRpZW50KHRoaXMuc3Ryb2tlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGluZVdpZHRoKCkge1xyXG4gICAgICByZXR1cm4gc3VwZXIubGluZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsaW5lV2lkdGgodmFsdWUpIHtcclxuICAgICAgaWYgKHN1cGVyLmxpbmVXaWR0aCA9PT0gdmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgIHN1cGVyLmxpbmVXaWR0aCA9IHZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgbGluZVdpZHRoID0gc3VwZXIubGluZVdpZHRoO1xyXG5cclxuICAgICAgaWYgKGxpbmVXaWR0aCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5fc2V0U3R5bGVBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgbGluZVdpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdHJva2UoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5zdHJva2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0cm9rZSh2YWx1ZSkge1xyXG4gICAgICBpZiAoc3VwZXIuc3Ryb2tlPy50b1N0cmluZygpID09PSB2YWx1ZT8udG9TdHJpbmcoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIuc3Ryb2tlID0gdmFsdWU7XHJcblxyXG4gICAgICBjb25zdCB7IHN0cm9rZSB9ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChzdHJva2UgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIGlmIChzdHJva2UgaW5zdGFuY2VvZiBDb2xvcilcclxuICAgICAgICB0aGlzLl9zZXRTdHlsZUF0dHJpYnV0ZShcInN0cm9rZVwiLCBzdHJva2UudG9TdHJpbmcoKSk7XHJcbiAgICAgIGVsc2UgaWYgKHN0cm9rZSBpbnN0YW5jZW9mIEdyYWRpZW50KSB0aGlzLiNzdHJva2VHcmFkaWVudChzdHJva2UpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdHJva2VHcmFkaWVudChncmFkaWVudDogR3JhZGllbnQpIHtcclxuICAgICAgY29uc3QgeyBzdmdDb250YWluZXJDb250cm9sbGVyIH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHN2Z0NvbnRhaW5lckNvbnRyb2xsZXIgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IGdyYWRpZW50SWQgPSBzdmdDb250YWluZXJDb250cm9sbGVyLl9kZWZpbmVHcmFkaWVudChncmFkaWVudCk7XHJcblxyXG4gICAgICB0aGlzLl9zZXRTdHlsZUF0dHJpYnV0ZShcInN0cm9rZVwiLCBgdXJsKCMke2dyYWRpZW50SWR9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBfc3R5bGVBdHRyaWJ1dGVzKCk6IHsgW0tleSBpbiBrZXlvZiB0aGlzXT86IHN0cmluZyB9IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdXBlci5fc3R5bGVBdHRyaWJ1dGVzLFxyXG4gICAgICAgIHN0cm9rZTogXCJzdHJva2VcIixcclxuICAgICAgICBsaW5lV2lkdGg6IFwic3Ryb2tlLXdpZHRoXCIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBbmdsZSB9IGZyb20gXCIuLi9jbGFzc2VzL2FuZ2xlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjJELCBWZWN0b3IyREJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBDYW52YXMyRENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL2NhbnZhc1wiO1xyXG5pbXBvcnQge1xyXG4gIENhbnZhczJEQmFzZVJlbmRlcmFibGUsXHJcbiAgQ2FudmFzMkRTaGFwZVBhcnRSZW5kZXJhYmxlLFxyXG4gIENhbnZhczJEU3RhbmRhbG9uZVJlbmRlcmFibGUsXHJcbn0gZnJvbSBcIi4uL2VsZW1lbnRzL3Zpc3VhbC9yZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IEN1c3RvbUhUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL21peGFibGVcIjtcclxuaW1wb3J0IHsgU1ZHRWxlbWVudENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZWxlbWVudHMvdmlzdWFsL3N2Z0Jhc2VcIjtcclxuaW1wb3J0IHsgYXR0cmlidXRlUGFyc2VyIH0gZnJvbSBcIi4uL3V0bGl0aWVzL2F0dHJpYnV0ZVBhcnNlclwiO1xyXG5pbXBvcnQgeyBpc1JlYWRPbmx5IH0gZnJvbSBcIi4uL3V0bGl0aWVzL3JlYWRPbmx5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFzZVRyYW5zZm9ybTxCIGV4dGVuZHMgdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50PihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEJhc2VUcmFuc2Zvcm0gZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAuLi5CYXNlLm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgXCJhbmdsZVwiLFxyXG4gICAgICBcImFuZ3VsYXItdmVsb2NpdHlcIixcclxuICAgICAgXCJhbmNob3JcIixcclxuICAgICAgXCJzY2FsZVwiLFxyXG4gICAgICBcInZlbG9jaXR5XCIsXHJcbiAgICBdO1xyXG5cclxuICAgICNhbmNob3IgPSBWZWN0b3IyRC56ZXJvKCk7XHJcbiAgICAjYW5nbGUgPSBBbmdsZS5yYWRpYW5zKDApO1xyXG4gICAgI2FuZ3VsYXJWZWxvY2l0eSA9IEFuZ2xlLnJhZGlhbnMoMCk7XHJcbiAgICAjc2NhbGUgPSBWZWN0b3IyRC5vbmUoKTtcclxuICAgICN2ZWxvY2l0eSA9IFZlY3RvcjJELnplcm8oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBzdXBlciguLi5hcmdzKTtcclxuXHJcbiAgICAgIHRoaXMuI2FuY2hvci5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNhbmNob3JDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICB0aGlzLiNhbmdsZS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiNhbmdsZUNoYW5nZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eS5hZGRDaGFuZ2VMaXN0ZW5lcihcclxuICAgICAgICB0aGlzLiNhbmd1bGFyVmVsb2NpdHlDaGFuZ2VMaXN0ZW5lclxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy4jc2NhbGUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jc2NhbGVDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICB0aGlzLiN2ZWxvY2l0eS5hZGRDaGFuZ2VMaXN0ZW5lcih0aGlzLiN2ZWxvY2l0eUNoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAjYW5nbGVDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8bnVtYmVyPiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImFuZ2xlXCIsIHRoaXMuI2FuZ2xlKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9ja3dpc2Ugcm90YXRpb24gb2YgdGhlIGVsZW1lbnQgYXJvdW5kIGl0cyBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBhbmdsZSgpOiBBbmdsZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYW5nbGUodmFsdWUpIHtcclxuICAgICAgdGhpcy4jYW5nbGUucmVwbGFjZSgodGhpcy4jYW5nbGUgPSB2YWx1ZSksIHRoaXMuI2FuZ2xlQ2hhbmdlTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICNhbmd1bGFyVmVsb2NpdHlDaGFuZ2VkVGltZSA9IC0xO1xyXG5cclxuICAgICNhbmd1bGFyVmVsb2NpdHlDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8bnVtYmVyPiA9ICgpID0+IHtcclxuICAgICAgdGhpcy4jYW5ndWxhclZlbG9jaXR5Q2hhbmdlZFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2UoXCJhbmd1bGFyVmVsb2NpdHlcIiwgdGhpcy5hbmd1bGFyVmVsb2NpdHkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvY2t3aXNlIHJvdGF0aW9uIHBlciBzZWNvbmQuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHIgYW5ndWxhci12ZWxvY2l0eVxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IGFuZ3VsYXJWZWxvY2l0eSgpOiBBbmdsZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNhbmd1bGFyVmVsb2NpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuZ3VsYXJWZWxvY2l0eSh2YWx1ZSkge1xyXG4gICAgICB0aGlzLiNhbmd1bGFyVmVsb2NpdHkucmVwbGFjZShcclxuICAgICAgICAodGhpcy4jYW5ndWxhclZlbG9jaXR5ID0gdmFsdWUpLFxyXG4gICAgICAgIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eUNoYW5nZUxpc3RlbmVyXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBwYXJlbnQncyBhbmNob3IuXHJcbiAgICAgKlxyXG4gICAgICogQGF0dHJcclxuICAgICAqIEByZWZsZWN0XHJcbiAgICAgKi9cclxuICAgIGdldCBhbmNob3IoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jYW5jaG9yO1xyXG4gICAgfVxyXG5cclxuICAgICNhbmNob3JDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VmVjdG9yMkRCYXNlPiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcImFuY2hvclwiLCB0aGlzLiNhbmNob3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXQgYW5jaG9yKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuI2FuY2hvci5yZXBsYWNlKCh0aGlzLiNhbmNob3IgPSB2YWx1ZSksIHRoaXMuI2FuY2hvckNoYW5nZUxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBfYXBwbHlNb3ZlbWVudChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiNhbmd1bGFyVmVsb2NpdHkucmFkaWFucyAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlQ2hhbmdlID1cclxuICAgICAgICAgICh0aGlzLiNhbmd1bGFyVmVsb2NpdHlbdGhpcy4jYW5nbGUudW5pdF0gKlxyXG4gICAgICAgICAgICBNYXRoLm1pbihkZWx0YVRpbWUsIG5vdyAtIHRoaXMuI2FuZ3VsYXJWZWxvY2l0eUNoYW5nZWRUaW1lKSkgL1xyXG4gICAgICAgICAgMTAwMDtcclxuXHJcbiAgICAgICAgaWYgKGFuZ2xlQ2hhbmdlID09PSAwKSB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiYW5nbGVcIiwgdGhpcy4jYW5nbGUpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5hbmdsZVt0aGlzLiNhbmdsZS51bml0XSArPSBhbmdsZUNoYW5nZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuI3ZlbG9jaXR5LnggIT09IDAgfHwgdGhpcy4jdmVsb2NpdHkueSAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5RGVsdGEgPVxyXG4gICAgICAgICAgTWF0aC5taW4oZGVsdGFUaW1lLCBub3cgLSB0aGlzLiN2ZWxvY2l0eUNoYW5nZWRUaW1lKSAvIDEwMDA7XHJcblxyXG4gICAgICAgIGlmIChpc1JlYWRPbmx5KHRoaXMuI2FuY2hvciwgXCJ4XCIpIHx8IGlzUmVhZE9ubHkodGhpcy4jYW5jaG9yLCBcInlcIikpXHJcbiAgICAgICAgICB0aGlzLiNhbmNob3IgPSB0aGlzLiNhbmNob3IuY29weSgpO1xyXG5cclxuICAgICAgICBpZiAodmVsb2NpdHlEZWx0YSA9PT0gMCkgdGhpcy5yZWdpc3RlckNoYW5nZShcImFuY2hvclwiLCB0aGlzLiNhbmNob3IpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMubW92ZUFuY2hvcihcclxuICAgICAgICAgICAgdGhpcy4jdmVsb2NpdHkueCAqIHZlbG9jaXR5RGVsdGEsXHJcbiAgICAgICAgICAgIHRoaXMuI3ZlbG9jaXR5LnkgKiB2ZWxvY2l0eURlbHRhXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKFxyXG4gICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgIG9sZFZhbHVlOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICBuZXdWYWx1ZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgY2FzZSBcImFuZ2xlXCI6XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5hbmdsZS50b1N0cmluZygpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBhdHRyaWJ1dGVQYXJzZXIuQW5nbGUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJhbmd1bGFyLXZlbG9jaXR5XCI6XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5hbmd1bGFyVmVsb2NpdHkudG9TdHJpbmcoKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eSA9IGF0dHJpYnV0ZVBhcnNlci5BbmdsZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImFuY2hvclwiOlxyXG4gICAgICAgICAgICBpZiAodGhpcy4jYW5jaG9yLnRvU3RyaW5nKCkgIT09IG5ld1ZhbHVlKVxyXG4gICAgICAgICAgICAgIHRoaXMuYW5jaG9yID0gYXR0cmlidXRlUGFyc2VyLlZlY3RvcjJEKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwic2NhbGVcIjpcclxuICAgICAgICAgICAgY29uc3QgbmV3U2NhbGUgPSBhdHRyaWJ1dGVQYXJzZXIuVmVjdG9yMkQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuI3NjYWxlLmVxdWFscyhuZXdTY2FsZSkpIHRoaXMuc2NhbGUgPSBuZXdTY2FsZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwidmVsb2NpdHlcIjpcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGF0dHJpYnV0ZVBhcnNlci5WZWN0b3IyRChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUFuY2hvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLiNhbmNob3IueCArPSB4O1xyXG4gICAgICB0aGlzLiNhbmNob3IueSArPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGFuZ2xlIC0gQW5nbGUgdG8gdHVybiB0aGUgZWxlbWVudCBpbiB0aGUgY2xvY2t3aXNlIGRpcmVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcm90YXRlQ2xvY2t3aXNlKGFuZ2xlOiBBbmdsZSkge1xyXG4gICAgICB0aGlzLmFuZ2xlID0gQW5nbGUucmFkaWFucyh0aGlzLiNhbmdsZS5yYWRpYW5zICsgYW5nbGUucmFkaWFucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYW5nbGUgLSBBbmdsZSB0byB0dXJuIHRoZSBlbGVtZW50IGluIHRoZSBjb3VudGVyY2xvY2t3aXNlIGRpcmVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcm90YXRlQ291bnRlcmNsb2Nrd2lzZShhbmdsZTogQW5nbGUpIHtcclxuICAgICAgdGhpcy5hbmdsZSA9IEFuZ2xlLnJhZGlhbnModGhpcy4jYW5nbGUucmFkaWFucyAtIGFuZ2xlLnJhZGlhbnMpO1xyXG4gICAgfVxyXG5cclxuICAgICNzY2FsZUNoYW5nZUxpc3RlbmVyOiBDaGFuZ2VMaXN0ZW5lcjxWZWN0b3IyREJhc2U+ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2NhbGVcIiwgdGhpcy4jc2NhbGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE11bHRpcGxpZXMgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgaW4gdGhlIHggYW5kIHkgZGlyZWN0aW9uLiBUaGlzIGFsc28gYWZmZWN0c1xyXG4gICAgICogbGluZSB3aWR0aC4gU2V0dGluZyBzY2FsZSB0byBhIG51bWJlciB3aWxsIHNldCBib3RoIHRoZSB4IGFuZCB5IHNjYWxlIHRvIHRoYXRcclxuICAgICAqIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqIEBhdHRyXHJcbiAgICAgKiBAcmVmbGVjdFxyXG4gICAgICovXHJcbiAgICBnZXQgc2NhbGUoKTogVmVjdG9yMkQge1xyXG4gICAgICByZXR1cm4gdGhpcy4jc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNjYWxlKHZhbHVlOiBWZWN0b3IyRCB8IG51bWJlcikge1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgY29uc3QgdmVjdG9yVmFsdWUgPSBuZXcgVmVjdG9yMkQodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4jc2NhbGUuZXF1YWxzKHZlY3RvclZhbHVlKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwic2NhbGVcIiwgKHRoaXMuI3NjYWxlID0gdmVjdG9yVmFsdWUpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiNzY2FsZS5yZXBsYWNlKCh0aGlzLiNzY2FsZSA9IHZhbHVlKSwgdGhpcy4jc2NhbGVDaGFuZ2VMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgI3ZlbG9jaXR5Q2hhbmdlZFRpbWUgPSAtMTtcclxuXHJcbiAgICAjdmVsb2NpdHlDaGFuZ2VMaXN0ZW5lcjogQ2hhbmdlTGlzdGVuZXI8VmVjdG9yMkRCYXNlPiA9ICgpID0+IHtcclxuICAgICAgdGhpcy4jdmVsb2NpdHlDaGFuZ2VkVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInZlbG9jaXR5XCIsIHRoaXMuI3ZlbG9jaXR5KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmNob3IgbW92ZW1lbnQgcGVyIHNlY29uZC5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHZlbG9jaXR5KCk6IFZlY3RvcjJEIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI3ZlbG9jaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB2ZWxvY2l0eSh2YWx1ZSkge1xyXG4gICAgICB0aGlzLiN2ZWxvY2l0eS5yZXBsYWNlKFxyXG4gICAgICAgICh0aGlzLiN2ZWxvY2l0eSA9IHZhbHVlKSxcclxuICAgICAgICB0aGlzLiN2ZWxvY2l0eUNoYW5nZUxpc3RlbmVyXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYzJkVHJhbnNmb3JtPFxyXG4gIEIgZXh0ZW5kcyBSZXR1cm5UeXBlPHR5cGVvZiBiYXNlVHJhbnNmb3JtPHR5cGVvZiBDYW52YXMyREJhc2VSZW5kZXJhYmxlPj5cclxuPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEMyRFRyYW5zZm9ybSBleHRlbmRzIEJhc2Uge1xyXG4gICAgcmVuZGVyKGNhbnZhczJEOiBDYW52YXMyRENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgc3VwZXIucmVuZGVyKGNhbnZhczJEKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgY29udGV4dCB9ID0gY2FudmFzMkQ7XHJcblxyXG4gICAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmFuY2hvci54LCB0aGlzLmFuY2hvci55KTtcclxuICAgICAgY29udGV4dC5yb3RhdGUodGhpcy5hbmdsZS5yYWRpYW5zKTtcclxuICAgICAgY29udGV4dC5zY2FsZSh0aGlzLnNjYWxlLngsIHRoaXMuc2NhbGUueSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJSZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5hZnRlclJlbmRlcihjYW52YXMyRCk7XHJcblxyXG4gICAgICB0aGlzLl9hcHBseU1vdmVtZW50KGNhbnZhczJELmRlbHRhVGltZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQzJEVHJhbnNmb3JtZWQgPSBSZXR1cm5UeXBlPHR5cGVvZiBjMmRUcmFuc2Zvcm0+O1xyXG5cclxuZXhwb3J0IGNsYXNzIEMyRFN0YW5kYWxvbmVUcmFuc2Zvcm1lZCBleHRlbmRzIGMyZFRyYW5zZm9ybShcclxuICBiYXNlVHJhbnNmb3JtKENhbnZhczJEU3RhbmRhbG9uZVJlbmRlcmFibGUpXHJcbikge31cclxuXHJcbmV4cG9ydCBjbGFzcyBDMkRTaGFwZVBhcnRUcmFuc2Zvcm1lZCBleHRlbmRzIGMyZFRyYW5zZm9ybShcclxuICBiYXNlVHJhbnNmb3JtKENhbnZhczJEU2hhcGVQYXJ0UmVuZGVyYWJsZSlcclxuKSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN2Z1RyYW5zZm9ybTxCIGV4dGVuZHMgU1ZHRWxlbWVudENvbnRyb2xsZXI+KEJhc2U6IEIpIHtcclxuICByZXR1cm4gY2xhc3MgU1ZHQ29udHJvbGxlclRyYW5zZm9ybSBleHRlbmRzIGJhc2VUcmFuc2Zvcm0oQmFzZSkge1xyXG4gICAgZ2V0IGFuY2hvcigpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmFuY2hvcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYW5jaG9yKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGNoYW5nZSA9ICFzdXBlci5hbmNob3IuZXF1YWxzKHZhbHVlKTtcclxuXHJcbiAgICAgIHN1cGVyLmFuY2hvciA9IHZhbHVlO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZSkgdGhpcy4jdXBkYXRlVHJhbnNmb3JtQXR0cmlidXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI2FuZ2xlQ2hhbmdlTGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuI3VwZGF0ZVRyYW5zZm9ybUF0dHJpYnV0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgYW5nbGUoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5hbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYW5nbGUodmFsdWUpIHtcclxuICAgICAgY29uc3QgY2hhbmdlID0gIXN1cGVyLmFuZ2xlLmVxdWFscyh2YWx1ZSk7XHJcblxyXG4gICAgICBzdXBlci5hbmdsZSA9IHZhbHVlO1xyXG5cclxuICAgICAgc3VwZXIuYW5nbGUuYWRkQ2hhbmdlTGlzdGVuZXIodGhpcy4jYW5nbGVDaGFuZ2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICBpZiAoY2hhbmdlKSB0aGlzLiN1cGRhdGVUcmFuc2Zvcm1BdHRyaWJ1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgIHRoaXMuI3VwZGF0ZVRyYW5zZm9ybUF0dHJpYnV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgICN1cGRhdGVUcmFuc2Zvcm1BdHRyaWJ1dGUoKSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ldyBET01NYXRyaXgoKVxyXG4gICAgICAgIC50cmFuc2xhdGVTZWxmKHRoaXMuYW5jaG9yLngsIHRoaXMuYW5jaG9yLnkpXHJcbiAgICAgICAgLnJvdGF0ZVNlbGYodGhpcy5hbmdsZS5kZWdyZWVzKVxyXG4gICAgICAgIC5zY2FsZVNlbGYodGhpcy5zY2FsZS54LCB0aGlzLnNjYWxlLnkpO1xyXG5cclxuICAgICAgaWYgKHRyYW5zZm9ybS5pc0lkZW50aXR5KSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIGUsIGYgfSA9IHRyYW5zZm9ybTtcclxuXHJcbiAgICAgIHRoaXMuX3NldFN0eWxlQXR0cmlidXRlKFxyXG4gICAgICAgIFwidHJhbnNmb3JtXCIsXHJcbiAgICAgICAgYG1hdHJpeCgke2F9ICR7Yn0gJHtjfSAke2R9ICR7ZX0gJHtmfSlgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBTVkdFbGVtZW50Q29udHJvbGxlciB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvc3ZnQmFzZVwiO1xyXG5pbXBvcnQgeyBkaW1lbnNpb25zIH0gZnJvbSBcIi4vZGltZW5zaW9uc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdCb3g8QiBleHRlbmRzIFNWR0VsZW1lbnRDb250cm9sbGVyPihCYXNlOiBCKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgZGltZW5zaW9ucyhCYXNlKSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9yZXNpemVWaWV3Qm94KCkge1xyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcInZpZXdCb3hcIixcclxuICAgICAgICBgJHswfSAkezB9ICR7dGhpcy53aWR0aH0gJHt0aGlzLmhlaWdodH1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gc3VwZXIuaGVpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgICBzdXBlci5oZWlnaHQgPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMuX3Jlc2l6ZVZpZXdCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBzdXBlci53aWR0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgc3VwZXIud2lkdGggPSB2YWx1ZTtcclxuXHJcbiAgICAgIHRoaXMuX3Jlc2l6ZVZpZXdCb3goKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi9lbGVtZW50cy92aXN1YWwvY2FudmFzXCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVBhcnNlciB9IGZyb20gXCIuLi91dGxpdGllcy9hdHRyaWJ1dGVQYXJzZXJcIjtcclxuaW1wb3J0IHsgYzJkUmVjdGFuZ2xlQm91bmRzIH0gZnJvbSBcIi4vcmVjdGFuZ2xlQm91bmRzXCI7XHJcbmltcG9ydCB7IEMyRFRyYW5zZm9ybWVkIH0gZnJvbSBcIi4vdHJhbnNmb3JtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyc1Zpc3VhbE1lZGlhPFxyXG4gIEIgZXh0ZW5kcyBDMkRUcmFuc2Zvcm1lZCxcclxuICBUIGV4dGVuZHMgXCJpbWdcIiB8IFwidmlkZW9cIlxyXG4+KEJhc2U6IEIsIG1lZGlhVGFnOiBUKSB7XHJcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYzJkUmVjdGFuZ2xlQm91bmRzKEJhc2UsIFwidG9wTGVmdFwiKSB7XHJcbiAgICBzdGF0aWMgb2JzZXJ2ZWRBdHRyaWJ1dGVzID0gWy4uLnN1cGVyLm9ic2VydmVkQXR0cmlidXRlcywgXCJzb3VyY2VcIl07XHJcblxyXG4gICAgI21lZGlhRWxlbWVudDogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdO1xyXG4gICAgI3dpZHRoU2V0ID0gZmFsc2U7XHJcbiAgICAjaGVpZ2h0U2V0ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgICB0aGlzLiNtZWRpYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG1lZGlhVGFnKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXHJcbiAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgb2xkVmFsdWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgIG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJzb3VyY2VcIjpcclxuICAgICAgICAgIHRoaXMuc291cmNlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGNhc2UgXCJ3aWR0aFwiOlxyXG4gICAgICAgICAgdGhpcy53aWR0aCA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYXNlIFwiaGVpZ2h0XCI6XHJcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IGF0dHJpYnV0ZVBhcnNlci5udW1iZXIobmV3VmFsdWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzLndhaXRGb3IoXHJcbiAgICAgICAgdGhpcy4jbWVkaWFFbGVtZW50LFxyXG4gICAgICAgIG1lZGlhVGFnID09PSBcInZpZGVvXCIgPyBcImNhbnBsYXlcIiA6IFwibG9hZFwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZWRpYUVsZW1lbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiNtZWRpYUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVUkwgb3IgbG9jYWwgcGF0aCB0byB0aGUgbWVkaWEgZmlsZSBzb3VyY2UgZm9yIHRoaXMgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAYXR0clxyXG4gICAgICogQHJlZmxlY3RcclxuICAgICAqL1xyXG4gICAgZ2V0IHNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWVkaWFFbGVtZW50LnNyYztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc291cmNlKHZhbHVlKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy4jbWVkaWFFbGVtZW50LnNyYykgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlckNoYW5nZShcInNvdXJjZVwiLCAodGhpcy4jbWVkaWFFbGVtZW50LnNyYyA9IHZhbHVlKSk7XHJcblxyXG4gICAgICB0aGlzLiNtZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBtZWRpYVRhZyA9PT0gXCJpbWdcIiA/IFwibG9hZFwiIDogXCJjYW5wbGF5XCIsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuI3dpZHRoU2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiNoZWlnaHRTZXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoUmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5tZWRpYVdpZHRoO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1lZGlhSGVpZ2h0ICogd2lkdGhSYXRpbztcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy4jaGVpZ2h0U2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodFJhdGlvID0gdGhpcy5oZWlnaHQgLyB0aGlzLm1lZGlhSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWVkaWFXaWR0aCAqIGhlaWdodFJhdGlvO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWVkaWFXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1lZGlhSGVpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY2FudmFzMkQ6IENhbnZhczJEQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICBzdXBlci5yZW5kZXIoY2FudmFzMkQpO1xyXG5cclxuICAgICAgY2FudmFzMkQuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy4jbWVkaWFFbGVtZW50LFxyXG4gICAgICAgIHRoaXMudG9wTGVmdC54LFxyXG4gICAgICAgIHRoaXMudG9wTGVmdC55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNhbnZhczJELmNvbnRleHQucmVjdChcclxuICAgICAgICB0aGlzLnRvcExlZnQueCxcclxuICAgICAgICB0aGlzLnRvcExlZnQueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmFmdGVyUmVuZGVyKGNhbnZhczJEKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWFXaWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnRcclxuICAgICAgICA/IHRoaXMuI21lZGlhRWxlbWVudC5uYXR1cmFsV2lkdGhcclxuICAgICAgICA6IHRoaXMuI21lZGlhRWxlbWVudC52aWRlb1dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuI21lZGlhRWxlbWVudC53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgICAgY29uc3Qgcm91bmRlZFZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAocm91bmRlZFZhbHVlID09PSB0aGlzLndpZHRoKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLiN3aWR0aFNldCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwid2lkdGhcIiwgKHRoaXMuI21lZGlhRWxlbWVudC53aWR0aCA9IHJvdW5kZWRWYWx1ZSkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuI2hlaWdodFNldCB8fCB0aGlzLm1lZGlhV2lkdGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHdpZHRoUmF0aW8gPSB2YWx1ZSAvIHRoaXMubWVkaWFXaWR0aDtcclxuXHJcbiAgICAgIHRoaXMuaGVpZ2h0ICo9IHdpZHRoUmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lZGlhSGVpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWVkaWFFbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudFxyXG4gICAgICAgID8gdGhpcy4jbWVkaWFFbGVtZW50Lm5hdHVyYWxIZWlnaHRcclxuICAgICAgICA6IHRoaXMuI21lZGlhRWxlbWVudC52aWRlb0hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4jbWVkaWFFbGVtZW50LmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHJvdW5kZWRWYWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG5cclxuICAgICAgaWYgKHJvdW5kZWRWYWx1ZSA9PT0gdGhpcy5oZWlnaHQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuI2hlaWdodFNldCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2hhbmdlKFwiaGVpZ2h0XCIsICh0aGlzLiNtZWRpYUVsZW1lbnQuaGVpZ2h0ID0gcm91bmRlZFZhbHVlKSk7XHJcblxyXG4gICAgICBpZiAodGhpcy4jd2lkdGhTZXQgfHwgdGhpcy5tZWRpYUhlaWdodCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgaGVpZ2h0UmF0aW8gPSB2YWx1ZSAvIHRoaXMubWVkaWFIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLndpZHRoICo9IGhlaWdodFJhdGlvO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5nbGUsIEFuZ2xlVW5pdFNob3J0IH0gZnJvbSBcIi4uL2NsYXNzZXMvYW5nbGVcIjtcclxuaW1wb3J0IHsgQm9yZGVyUmFkaXVzIH0gZnJvbSBcIi4uL2NsYXNzZXMvYm9yZGVyUmFkaXVzXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4uL2NsYXNzZXMvY29sb3JcIjtcclxuaW1wb3J0IHsgRHJhd1N0eWxlIH0gZnJvbSBcIi4uL2NsYXNzZXMvZ3JhZGllbnRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tIFwiLi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5cclxudHlwZSBBdHRyaWJ1dGVUeXBlTWFwID0ge1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIGJvb2xlYW46IGJvb2xlYW47XHJcbiAgQm9yZGVyUmFkaXVzOiBCb3JkZXJSYWRpdXM7XHJcbiAgQ29sb3I6IENvbG9yO1xyXG4gIEZpbGxTdHJva2VTdHlsZTogRHJhd1N0eWxlO1xyXG4gIFZlY3RvcjJEOiBWZWN0b3IyRDtcclxuICBBbmdsZTogQW5nbGU7XHJcbn07XHJcblxyXG50eXBlIEF0dHJpYnV0ZVR5cGVQYXJzZXIgPSB7XHJcbiAgW1R5cGUgaW4ga2V5b2YgQXR0cmlidXRlVHlwZU1hcF06IChcclxuICAgIHN0cmluZ1ZhbHVlOiBzdHJpbmdcclxuICApID0+IEF0dHJpYnV0ZVR5cGVNYXBbVHlwZV07XHJcbn07XHJcblxyXG5jb25zdCBhbmdsZU1hdGNoID0gbmV3IFJlZ0V4cChcclxuICBgKFtcXFxcZFxcXFwuXSspXFxcXHMqKCR7T2JqZWN0LnZhbHVlcyhBbmdsZS51bml0KS5qb2luKFwifFwiKX0pYFxyXG4pO1xyXG5cclxuY29uc3QgaW5jbHVkZXNOdW1iZXJzID0gKHN0cjogc3RyaW5nKSA9PiBzdHIubWF0Y2goL1xcZC8pICE9PSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZVBhcnNlcjogQXR0cmlidXRlVHlwZVBhcnNlciA9IHtcclxuICBudW1iZXIoc3RyaW5nVmFsdWUpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZ1ZhbHVlKTtcclxuICB9LFxyXG4gIGJvb2xlYW4oc3RyaW5nVmFsdWUpIHtcclxuICAgIHN3aXRjaCAoc3RyaW5nVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgY2FzZSBcInRydWVcIjpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2FzZSBcImZhbHNlXCI6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlICR7c3RyaW5nVmFsdWV9IGFzIGJvb2xlYW4uYCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBCb3JkZXJSYWRpdXMoc3RyaW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSBzdHJpbmdWYWx1ZS5zcGxpdChcIixcIik7XHJcblxyXG4gICAgY29uc3QgW2FyZzEsIGFyZzIsIGFyZzMsIGFyZzRdID0gYXJncy5tYXAoYXR0cmlidXRlUGFyc2VyLm51bWJlcik7XHJcblxyXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gbmV3IEJvcmRlclJhZGl1cyhhcmcxLCBhcmcyLCBhcmczLCBhcmc0KTtcclxuXHJcbiAgICByZXR1cm4gYm9yZGVyUmFkaXVzO1xyXG4gIH0sXHJcbiAgQ29sb3Ioc3RyaW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSBzdHJpbmdWYWx1ZS5zcGxpdChcIixcIik7XHJcblxyXG4gICAgY29uc3QgbnVtYmVycyA9IGFyZ3MubWFwKGF0dHJpYnV0ZVBhcnNlci5udW1iZXIpO1xyXG5cclxuICAgIHN3aXRjaCAobnVtYmVycy5sZW5ndGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBpc05hTihudW1iZXJzWzBdKSA/IG5ldyBDb2xvcihhcmdzWzBdKSA6IG5ldyBDb2xvcihudW1iZXJzWzBdKTtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IobnVtYmVyc1swXSwgbnVtYmVyc1sxXSk7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKG51bWJlcnNbMF0sIG51bWJlcnNbMV0sIG51bWJlcnNbMl0pO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgYEZvdW5kICR7bnVtYmVycy5sZW5ndGh9IGFyZ3VtZW50cyBwYXNzZWQgdG8gQ29sb3IgYXR0cmlidXRlLCBidXQgdGhlIG1heGltdW0gaXMgNGBcclxuICAgICAgICApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IobnVtYmVyc1swXSwgbnVtYmVyc1sxXSwgbnVtYmVyc1syXSwgbnVtYmVyc1szXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBGaWxsU3Ryb2tlU3R5bGUoc3RyaW5nVmFsdWUpIHtcclxuICAgIGlmIChzdHJpbmdWYWx1ZSA9PT0gXCJub25lXCIgfHwgc3RyaW5nVmFsdWUgPT09IFwiZ3JhZGllbnRcIilcclxuICAgICAgcmV0dXJuIHN0cmluZ1ZhbHVlO1xyXG5cclxuICAgIHJldHVybiBhdHRyaWJ1dGVQYXJzZXIuQ29sb3Ioc3RyaW5nVmFsdWUpO1xyXG4gIH0sXHJcbiAgVmVjdG9yMkQoc3RyaW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IG51bWJlcnMgPSBzdHJpbmdWYWx1ZS5zcGxpdChcIixcIikubWFwKGF0dHJpYnV0ZVBhcnNlci5udW1iZXIpO1xyXG5cclxuICAgIGlmIChudW1iZXJzLnNvbWUoTnVtYmVyLmlzTmFOKSkgdGhyb3cgbmV3IEVycm9yKGBOYU46ICR7c3RyaW5nVmFsdWV9YCk7XHJcblxyXG4gICAgc3dpdGNoIChudW1iZXJzLmxlbmd0aCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRChudW1iZXJzWzBdKTtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgIGBGb3VuZCAke251bWJlcnMubGVuZ3RofSBhcmd1bWVudHMgcGFzc2VkIHRvIFZlY3RvMkQgYXR0cmlidXRlLCBidXQgdGhlIG1heGltdW0gaXMgMmBcclxuICAgICAgICApO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQobnVtYmVyc1swXSwgbnVtYmVyc1sxXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBBbmdsZShzdHJpbmdWYWx1ZSkge1xyXG4gICAgY29uc3QgYXJncyA9IHN0cmluZ1ZhbHVlLm1hdGNoKGFuZ2xlTWF0Y2gpO1xyXG5cclxuICAgIGlmIChhcmdzID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuZ2xlIGFyZ3VtZW50cyBjb3VsZCBub3QgYmUgcGFyc2VkOiAke3N0cmluZ1ZhbHVlfWApO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlUGFyc2VyLm51bWJlcihhcmdzWzFdKTtcclxuXHJcbiAgICBjb25zdCB1bml0ID0gYXJnc1syXSBhcyBBbmdsZVVuaXRTaG9ydDtcclxuXHJcbiAgICByZXR1cm4gbmV3IEFuZ2xlKHVuaXQsIHZhbHVlKTtcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2FtZWxUb0tlYmFiQ2FzZSA9IChjYW1lbDogc3RyaW5nKSA9PlxyXG4gIGNhbWVsLnJlcGxhY2UoXHJcbiAgICAvKC4pKFtBLVpdKS9nLFxyXG4gICAgKF8sIGJlZm9yZUNoYXJhY3Rlcjogc3RyaW5nLCB1cHBlckNoYXJhY3Rlcjogc3RyaW5nKSA9PlxyXG4gICAgICBgJHtiZWZvcmVDaGFyYWN0ZXJ9LSR7dXBwZXJDaGFyYWN0ZXIudG9Mb3dlckNhc2UoKX1gXHJcbiAgKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZE9ubHkob2JqOiB7fSwgcHJvcGVydHlLZXk6IFByb3BlcnR5S2V5KSB7XHJcbiAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wZXJ0eUtleSk7XHJcblxyXG4gIGlmIChkZXNjcmlwdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xyXG5cclxuICAgIGlmIChwcm90b3R5cGUgPT09IG51bGwpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgQ291bGQgbm90IGZpbmQgcHJvcGVydHkgd2l0aCBrZXk6ICR7U3RyaW5nKHByb3BlcnR5S2V5KX1gXHJcbiAgICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGlzUmVhZE9ubHkocHJvdG90eXBlLCBwcm9wZXJ0eUtleSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZGVzY3JpcHRvci53cml0YWJsZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICByZXR1cm4gZGVzY3JpcHRvci5zZXQgPT09IHVuZGVmaW5lZDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENhbnZhczJEQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC9jYW52YXNcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyRFJlY3RhbmdsZSxcclxuICBDYW52YXMyRFNoYXBlUmVjdGFuZ2xlLFxyXG59IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC9yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9jbGFzc2VzL2NvbG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSBcIi4vY2xhc3Nlcy92ZWN0b3IyZFwiO1xyXG5pbXBvcnQgeyBBbmdsZSB9IGZyb20gXCIuL2NsYXNzZXMvYW5nbGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRUZXh0IH0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL3RleHRcIjtcclxuaW1wb3J0IHsgVW5pdHMgfSBmcm9tIFwiLi9jbGFzc2VzL3VuaXRzXCI7XHJcbmltcG9ydCB7IFN0YXRlLCBjcmVhdGVTdGF0ZSB9IGZyb20gXCIuL2NsYXNzZXMvc3RhdGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRMaW5lLCBDYW52YXMyRFNoYXBlTGluZSB9IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC9saW5lXCI7XHJcbmltcG9ydCB7IENhbnZhczJEU2hhcGUgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvc2hhcGVcIjtcclxuaW1wb3J0IHtcclxuICBDYW52YXMyREVsbGlwc2UsXHJcbiAgQ2FudmFzMkRTaGFwZUVsbGlwc2UsXHJcbn0gZnJvbSBcIi4vZWxlbWVudHMvdmlzdWFsL2VsbGlwc2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRCZXppZXIsIENhbnZhczJEU2hhcGVCZXppZXIgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvYmV6aWVyXCI7XHJcbmltcG9ydCB7IENhbnZhczJESW1hZ2UgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvaW1hZ2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzMkRWaWRlbyB9IGZyb20gXCIuL2VsZW1lbnRzL3Zpc3VhbC92aWRlb1wiO1xyXG5pbXBvcnQge1xyXG4gIENvbmljYWxHcmFkaWVudCxcclxuICBMaW5lYXJHcmFkaWVudCxcclxuICBSYWRpYWxHcmFkaWVudCxcclxufSBmcm9tIFwiLi9jbGFzc2VzL2dyYWRpZW50XCI7XHJcbmltcG9ydCB7IEMyREJhc2UgfSBmcm9tIFwiLi9lbGVtZW50cy92aXN1YWwvYzJkQmFzZVwiO1xyXG5pbXBvcnQgeyBTaGFkb3cgfSBmcm9tIFwiLi9jbGFzc2VzL3NoYWRvd1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcIi4vZWxlbWVudHMvZG9jdW1lbnQvZG9tQmFzZVwiO1xyXG5pbXBvcnQgeyBCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi9jbGFzc2VzL2JvcmRlclJhZGl1c1wiO1xyXG5pbXBvcnQgeyBSYW5kb20gfSBmcm9tIFwiLi9jbGFzc2VzL3JhbmRvbVwiO1xyXG5pbXBvcnQgeyBDdXN0b21IVE1MRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzL21peGFibGVcIjtcclxuXHJcbmV4cG9ydCB0eXBlIENTU0xlbmd0aFVuaXQgPSAodHlwZW9mIFVuaXRzLnNpemUpW2tleW9mIHR5cGVvZiBVbml0cy5zaXplXTtcclxuXHJcbmZ1bmN0aW9uIHJhbmdlKHN0b3A6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPjtcclxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQ6IG51bWJlciwgc3RvcDogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+O1xyXG5mdW5jdGlvbiByYW5nZShhcmcxOiBudW1iZXIsIGFyZzI/OiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xyXG4gIGNvbnN0IFtzdGFydCwgc3RvcF0gPSBhcmcyID09PSB1bmRlZmluZWQgPyBbMCwgYXJnMV0gOiBbYXJnMSwgYXJnMl07XHJcblxyXG4gIGNvbnN0IHN0ZXAgPSBzdG9wID4gc3RhcnQgPyAxIDogLTE7XHJcblxyXG4gIGxldCB2YWx1ZSA9IHN0YXJ0O1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCk6IEl0ZXJhdG9yUmVzdWx0PG51bWJlcj4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICB2YWx1ZSxcclxuICAgICAgZG9uZTogc3RhcnQgKyBzdGVwID09PSBzdG9wLFxyXG4gICAgfTtcclxuXHJcbiAgICB2YWx1ZSArPSBzdGVwO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIG5leHQsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTXVsdGlwbGU8UiBleHRlbmRzIE5vZGU+KFxyXG4gIGNvdW50OiBudW1iZXIsXHJcbiAgZ2VuZXJhdG9yOiAoaW5kZXg6IG51bWJlcikgPT4gUlxyXG4pIHtcclxuICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IGdlbmVyYXRvcihpbmRleCkpO1xyXG59XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XHJcbiAgICBkZWZpbmU8RSBleHRlbmRzIHR5cGVvZiBDMkRCYXNlPih0YWc6IEVbXCJ0YWdcIl0sIEVsZW1lbnRDbGFzczogRSk6IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjMmQtY2FudmFzXCIsIENhbnZhczJEQ2FudmFzRWxlbWVudCk7XHJcblxyXG5leHBvcnQgdHlwZSBXZWJTcGlubmVyRWxlbWVudCA9IHtcclxuICBDYW52YXMyRENhbnZhc0VsZW1lbnQ6IENhbnZhczJEQ2FudmFzRWxlbWVudDtcclxuICBDYW52YXMyREJlemllcjogQ2FudmFzMkRCZXppZXI7XHJcbiAgQ2FudmFzMkRFbGxpcHNlOiBDYW52YXMyREVsbGlwc2U7XHJcbiAgQ2FudmFzMkRJbWFnZTogQ2FudmFzMkRJbWFnZTtcclxuICBDYW52YXMyRExpbmU6IENhbnZhczJETGluZTtcclxuICBDYW52YXMyRFJlY3RhbmdsZTogQ2FudmFzMkRSZWN0YW5nbGU7XHJcbiAgQ2FudmFzMkRTaGFwZTogQ2FudmFzMkRTaGFwZTtcclxuICBDYW52YXMyRFNoYXBlQmV6aWVyOiBDYW52YXMyRFNoYXBlQmV6aWVyO1xyXG4gIENhbnZhczJEU2hhcGVFbGxpcHNlOiBDYW52YXMyRFNoYXBlRWxsaXBzZTtcclxuICBDYW52YXMyRFNoYXBlTGluZTogQ2FudmFzMkRTaGFwZUxpbmU7XHJcbiAgQ2FudmFzMkRTaGFwZVJlY3RhbmdsZTogQ2FudmFzMkRTaGFwZVJlY3RhbmdsZTtcclxuICBDYW52YXMyRFRleHQ6IENhbnZhczJEVGV4dDtcclxuICBDYW52YXMyRFZpZGVvOiBDYW52YXMyRFZpZGVvO1xyXG59O1xyXG5cclxudHlwZSBFbGVtZW50TWFwID0ge1xyXG4gIHBhcmVudEVsZW1lbnQ6IHR5cGVvZiBDdXN0b21IVE1MRWxlbWVudDtcclxuICBbbmFtZTogc3RyaW5nXTogdHlwZW9mIEN1c3RvbUhUTUxFbGVtZW50IHwgRWxlbWVudE1hcDtcclxufTtcclxuXHJcbmNvbnN0IGVsZW1lbnRzOiB7IFtjYXRlZ29yeTogc3RyaW5nXTogRWxlbWVudE1hcCB9ID0ge1xyXG4gIGNhbnZhczJEOiB7XHJcbiAgICBwYXJlbnRFbGVtZW50OiBDYW52YXMyRENhbnZhc0VsZW1lbnQsXHJcbiAgICBDYW52YXMyREJlemllcixcclxuICAgIHNoYXBlOiB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQ6IENhbnZhczJEU2hhcGUsXHJcbiAgICAgIENhbnZhczJEQmV6aWVyLFxyXG4gICAgICBDYW52YXMyRFNoYXBlRWxsaXBzZSxcclxuICAgICAgQ2FudmFzMkRTaGFwZUxpbmUsXHJcbiAgICAgIENhbnZhczJEU2hhcGVSZWN0YW5nbGUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZU11bHRpcGxlLFxyXG4gIEJvcmRlclJhZGl1cyxcclxuICBDb2xvcixcclxuICBWZWN0b3IyRCxcclxuICBBbmdsZSxcclxuICBTdGF0ZSxcclxuICBDb25pY2FsR3JhZGllbnQsXHJcbiAgTGluZWFyR3JhZGllbnQsXHJcbiAgUmFkaWFsR3JhZGllbnQsXHJcbiAgUmFuZG9tLFxyXG4gIFNoYWRvdyxcclxuICBjcmVhdGVTdGF0ZSxcclxuICBjcmVhdGVSb290LFxyXG4gIGVsZW1lbnRzIGFzIEVsZW1lbnRzLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=