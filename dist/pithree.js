var rl = (i) => {
  throw TypeError(i);
};
var Qr = (i, t, e) => t.has(i) || rl("Cannot " + e);
var A = (i, t, e) => (Qr(i, t, "read from private field"), e ? e.call(i) : t.get(i)), Tt = (i, t, e) => t.has(i) ? rl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), vt = (i, t, e, n) => (Qr(i, t, "write to private field"), n ? n.call(i, e) : t.set(i, e), e), ne = (i, t, e) => (Qr(i, t, "access private method"), e);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const No = "175", es = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ji = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, bh = 0, al = 1, Ah = 2, yc = 1, wh = 2, Un = 3, ri = 0, ze = 1, fn = 2, ii = 0, ns = 1, ol = 2, ll = 3, cl = 4, Rh = 5, xi = 100, Ch = 101, Ph = 102, Dh = 103, Lh = 104, Uh = 200, Ih = 201, Nh = 202, Fh = 203, za = 204, Ha = 205, Oh = 206, Bh = 207, zh = 208, Hh = 209, Gh = 210, kh = 211, Vh = 212, Wh = 213, Xh = 214, Ga = 0, ka = 1, Va = 2, gs = 3, Wa = 4, Xa = 5, Ya = 6, qa = 7, Ec = 0, Yh = 1, qh = 2, si = 0, jh = 1, Zh = 2, Kh = 3, $h = 4, Jh = 5, Qh = 6, tu = 7, Tc = 300, vs = 301, xs = 302, ja = 303, Za = 304, Xr = 306, Ka = 1e3, Si = 1001, $a = 1002, gn = 1003, eu = 1004, Ks = 1005, An = 1006, ta = 1007, yi = 1008, Xn = 1009, bc = 1010, Ac = 1011, Fs = 1012, Fo = 1013, wi = 1014, Gn = 1015, Vs = 1016, Oo = 1017, Bo = 1018, Os = 1020, wc = 35902, Rc = 1021, Cc = 1022, _n = 1023, Pc = 1024, Dc = 1025, Bs = 1026, zs = 1027, Lc = 1028, zo = 1029, Uc = 1030, Ho = 1031, Go = 1033, Ar = 33776, wr = 33777, Rr = 33778, Cr = 33779, Ja = 35840, Qa = 35841, to = 35842, eo = 35843, no = 36196, io = 37492, so = 37496, ro = 37808, ao = 37809, oo = 37810, lo = 37811, co = 37812, ho = 37813, uo = 37814, fo = 37815, po = 37816, mo = 37817, _o = 37818, go = 37819, vo = 37820, xo = 37821, Pr = 36492, Mo = 36494, So = 36495, Ic = 36283, yo = 36284, Eo = 36285, To = 36286, nu = 3200, iu = 3201, su = 0, ru = 1, ti = "", Je = "srgb", Ms = "srgb-linear", Ur = "linear", Qt = "srgb", Ii = 7680, hl = 519, au = 512, ou = 513, lu = 514, Nc = 515, cu = 516, hu = 517, uu = 518, du = 519, bo = 35044, ul = "300 es", kn = 2e3, Ir = 2001;
class Di {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(t, e) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(t, e) {
    const n = this._listeners;
    if (n === void 0) return;
    const s = n[t];
    if (s !== void 0) {
      const r = s.indexOf(e);
      r !== -1 && s.splice(r, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(t) {
    const e = this._listeners;
    if (e === void 0) return;
    const n = e[t.type];
    if (n !== void 0) {
      t.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++)
        s[r].call(this, t);
      t.target = null;
    }
  }
}
const Ce = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let dl = 1234567;
const Is = Math.PI / 180, Hs = 180 / Math.PI;
function Vn() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ce[i & 255] + Ce[i >> 8 & 255] + Ce[i >> 16 & 255] + Ce[i >> 24 & 255] + "-" + Ce[t & 255] + Ce[t >> 8 & 255] + "-" + Ce[t >> 16 & 15 | 64] + Ce[t >> 24 & 255] + "-" + Ce[e & 63 | 128] + Ce[e >> 8 & 255] + "-" + Ce[e >> 16 & 255] + Ce[e >> 24 & 255] + Ce[n & 255] + Ce[n >> 8 & 255] + Ce[n >> 16 & 255] + Ce[n >> 24 & 255]).toLowerCase();
}
function It(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ko(i, t) {
  return (i % t + t) % t;
}
function fu(i, t, e, n, s) {
  return n + (i - t) * (s - n) / (e - t);
}
function pu(i, t, e) {
  return i !== t ? (e - i) / (t - i) : 0;
}
function Ns(i, t, e) {
  return (1 - e) * i + e * t;
}
function mu(i, t, e, n) {
  return Ns(i, t, 1 - Math.exp(-e * n));
}
function _u(i, t = 1) {
  return t - Math.abs(ko(i, t * 2) - t);
}
function gu(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i));
}
function vu(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10));
}
function xu(i, t) {
  return i + Math.floor(Math.random() * (t - i + 1));
}
function Mu(i, t) {
  return i + Math.random() * (t - i);
}
function Su(i) {
  return i * (0.5 - Math.random());
}
function yu(i) {
  i !== void 0 && (dl = i);
  let t = dl += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Eu(i) {
  return i * Is;
}
function Tu(i) {
  return i * Hs;
}
function bu(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function Au(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function wu(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Ru(i, t, e, n, s) {
  const r = Math.cos, a = Math.sin, o = r(e / 2), l = a(e / 2), c = r((t + n) / 2), u = a((t + n) / 2), d = r((t - n) / 2), p = a((t - n) / 2), f = r((n - t) / 2), _ = a((n - t) / 2);
  switch (s) {
    case "XYX":
      i.set(o * u, l * d, l * p, o * c);
      break;
    case "YZY":
      i.set(l * p, o * u, l * d, o * c);
      break;
    case "ZXZ":
      i.set(l * d, l * p, o * u, o * c);
      break;
    case "XZX":
      i.set(o * u, l * _, l * f, o * c);
      break;
    case "YXY":
      i.set(l * f, o * u, l * _, o * c);
      break;
    case "ZYZ":
      i.set(l * _, l * f, o * u, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function pn(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function $t(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Fc = {
  DEG2RAD: Is,
  RAD2DEG: Hs,
  /**
   * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
   * (universally unique identifier).
   *
   * @static
   * @method
   * @return {string} The UUID.
   */
  generateUUID: Vn,
  /**
   * Clamps the given value between min and max.
   *
   * @static
   * @method
   * @param {number} value - The value to clamp.
   * @param {number} min - The min value.
   * @param {number} max - The max value.
   * @return {number} The clamped value.
   */
  clamp: It,
  /**
   * Computes the Euclidean modulo of the given parameters that
   * is `( ( n % m ) + m ) % m`.
   *
   * @static
   * @method
   * @param {number} n - The first parameter.
   * @param {number} m - The second parameter.
   * @return {number} The Euclidean modulo.
   */
  euclideanModulo: ko,
  /**
   * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
   * for the given value.
   *
   * @static
   * @method
   * @param {number} x - The value to be mapped.
   * @param {number} a1 - Minimum value for range A.
   * @param {number} a2 - Maximum value for range A.
   * @param {number} b1 - Minimum value for range B.
   * @param {number} b2 - Maximum value for range B.
   * @return {number} The mapped value.
   */
  mapLinear: fu,
  /**
   * Returns the percentage in the closed interval `[0, 1]` of the given value
   * between the start and end point.
   *
   * @static
   * @method
   * @param {number} x - The start point
   * @param {number} y - The end point.
   * @param {number} value - A value between start and end.
   * @return {number} The interpolation factor.
   */
  inverseLerp: pu,
  /**
   * Returns a value linearly interpolated from two known points based on the given interval -
   * `t = 0` will return `x` and `t = 1` will return `y`.
   *
   * @static
   * @method
   * @param {number} x - The start point
   * @param {number} y - The end point.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {number} The interpolated value.
   */
  lerp: Ns,
  /**
   * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
   * time to maintain frame rate independent movement. For details, see
   * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
   *
   * @static
   * @method
   * @param {number} x - The current point.
   * @param {number} y - The target point.
   * @param {number} lambda - A higher lambda value will make the movement more sudden,
   * and a lower value will make the movement more gradual.
   * @param {number} dt - Delta time in seconds.
   * @return {number} The interpolated value.
   */
  damp: mu,
  /**
   * Returns a value that alternates between `0` and the given `length` parameter.
   *
   * @static
   * @method
   * @param {number} x - The value to pingpong.
   * @param {number} [length=1] - The positive value the function will pingpong to.
   * @return {number} The alternated value.
   */
  pingpong: _u,
  /**
   * Returns a value in the range `[0,1]` that represents the percentage that `x` has
   * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
   * the `min` and `max`.
   *
   * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
   *
   * @static
   * @method
   * @param {number} x - The value to evaluate based on its position between min and max.
   * @param {number} min - The min value. Any x value below min will be `0`.
   * @param {number} max - The max value. Any x value above max will be `1`.
   * @return {number} The alternated value.
   */
  smoothstep: gu,
  /**
   * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
   * that has zero 1st and 2nd order derivatives at x=0 and x=1.
   *
   * @static
   * @method
   * @param {number} x - The value to evaluate based on its position between min and max.
   * @param {number} min - The min value. Any x value below min will be `0`.
   * @param {number} max - The max value. Any x value above max will be `1`.
   * @return {number} The alternated value.
   */
  smootherstep: vu,
  /**
   * Returns a random integer from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random integer.
   */
  randInt: xu,
  /**
   * Returns a random float from `<low, high>` interval.
   *
   * @static
   * @method
   * @param {number} low - The lower value boundary.
   * @param {number} high - The upper value boundary
   * @return {number} A random float.
   */
  randFloat: Mu,
  /**
   * Returns a random integer from `<-range/2, range/2>` interval.
   *
   * @static
   * @method
   * @param {number} range - Defines the value range.
   * @return {number} A random float.
   */
  randFloatSpread: Su,
  /**
   * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
   *
   * @static
   * @method
   * @param {number} [s] - The integer seed.
   * @return {number} A random float.
   */
  seededRandom: yu,
  /**
   * Converts degrees to radians.
   *
   * @static
   * @method
   * @param {number} degrees - A value in degrees.
   * @return {number} The converted value in radians.
   */
  degToRad: Eu,
  /**
   * Converts radians to degrees.
   *
   * @static
   * @method
   * @param {number} radians - A value in radians.
   * @return {number} The converted value in degrees.
   */
  radToDeg: Tu,
  /**
   * Returns `true` if the given number is a power of two.
   *
   * @static
   * @method
   * @param {number} value - The value to check.
   * @return {boolean} Whether the given number is a power of two or not.
   */
  isPowerOfTwo: bu,
  /**
   * Returns the smallest power of two that is greater than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The smallest power of two that is greater than or equal to the given number.
   */
  ceilPowerOfTwo: Au,
  /**
   * Returns the largest power of two that is less than or equal to the given number.
   *
   * @static
   * @method
   * @param {number} value - The value to find a POT for.
   * @return {number} The largest power of two that is less than or equal to the given number.
   */
  floorPowerOfTwo: wu,
  /**
   * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
   * defined by the given angles and order.
   *
   * Rotations are applied to the axes in the order specified by order:
   * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
   *
   * @static
   * @method
   * @param {Quaternion} q - The quaternion to set.
   * @param {number} a - The rotation applied to the first axis, in radians.
   * @param {number} b - The rotation applied to the second axis, in radians.
   * @param {number} c - The rotation applied to the third axis, in radians.
   * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
   */
  setQuaternionFromProperEuler: Ru,
  /**
   * Normalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The float value in the range `[0,1]` to normalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The normalize value.
   */
  normalize: $t,
  /**
   * Denormalizes the given value according to the given typed array.
   *
   * @static
   * @method
   * @param {number} value - The value to denormalize.
   * @param {TypedArray} array - The typed array that defines the data type of the value.
   * @return {number} The denormalize (float) value in the range `[0,1]`.
   */
  denormalize: pn
};
class Dt {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(t = 0, e = 0) {
    Dt.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6], this.y = s[1] * e + s[4] * n + s[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(t, e) {
    return this.x = It(this.x, t.x, e.x), this.y = It(this.y, t.y, e.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(t, e) {
    return this.x = It(this.x, t, e), this.y = It(this.y, t, e), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(It(n, t, e));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(It(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * s + t.x, this.y = r * s + a * n + t.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ut {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(t, e, n, s, r, a, o, l, c) {
    Ut.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, s, r, a, o, l, c);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(t, e, n, s, r, a, o, l, c) {
    const u = this.elements;
    return u[0] = t, u[1] = s, u[2] = o, u[3] = e, u[4] = r, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], d = n[7], p = n[2], f = n[5], _ = n[8], v = s[0], m = s[3], h = s[6], b = s[1], T = s[4], S = s[7], N = s[2], C = s[5], P = s[8];
    return r[0] = a * v + o * b + l * N, r[3] = a * m + o * T + l * C, r[6] = a * h + o * S + l * P, r[1] = c * v + u * b + d * N, r[4] = c * m + u * T + d * C, r[7] = c * h + u * S + d * P, r[2] = p * v + f * b + _ * N, r[5] = p * m + f * T + _ * C, r[8] = p * h + f * S + _ * P, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8];
    return e * a * u - e * o * c - n * r * u + n * o * l + s * r * c - s * a * l;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], d = u * a - o * c, p = o * l - u * r, f = c * r - a * l, _ = e * d + n * p + s * f;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / _;
    return t[0] = d * v, t[1] = (s * c - u * n) * v, t[2] = (o * n - s * a) * v, t[3] = p * v, t[4] = (u * e - s * l) * v, t[5] = (s * r - o * e) * v, t[6] = f * v, t[7] = (n * l - c * e) * v, t[8] = (a * e - n * r) * v, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(t, e, n, s, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + t,
      -s * c,
      s * l,
      -s * (-c * a + l * o) + o + e,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(t, e) {
    return this.premultiply(ea.makeScale(t, e)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(t) {
    return this.premultiply(ea.makeRotation(-t)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(t, e) {
    return this.premultiply(ea.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      n,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 9; s++)
      if (e[s] !== n[s]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ea = /* @__PURE__ */ new Ut();
function Oc(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535) return !0;
  return !1;
}
function Nr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Cu() {
  const i = Nr("canvas");
  return i.style.display = "block", i;
}
const fl = {};
function Dr(i) {
  i in fl || (fl[i] = !0, console.warn(i));
}
function Pu(i, t, e) {
  return new Promise(function(n, s) {
    function r() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
function Du(i) {
  const t = i.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Lu(i) {
  const t = i.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const pl = /* @__PURE__ */ new Ut().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), ml = /* @__PURE__ */ new Ut().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function Uu() {
  const i = {
    enabled: !0,
    workingColorSpace: Ms,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(s, r, a) {
      return this.enabled === !1 || r === a || !r || !a || (this.spaces[r].transfer === Qt && (s.r = Wn(s.r), s.g = Wn(s.g), s.b = Wn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Qt && (s.r = is(s.r), s.g = is(s.g), s.b = is(s.b))), s;
    },
    fromWorkingColorSpace: function(s, r) {
      return this.convert(s, this.workingColorSpace, r);
    },
    toWorkingColorSpace: function(s, r) {
      return this.convert(s, r, this.workingColorSpace);
    },
    getPrimaries: function(s) {
      return this.spaces[s].primaries;
    },
    getTransfer: function(s) {
      return s === ti ? Ur : this.spaces[s].transfer;
    },
    getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
      return s.fromArray(this.spaces[r].luminanceCoefficients);
    },
    define: function(s) {
      Object.assign(this.spaces, s);
    },
    // Internal APIs
    _getMatrix: function(s, r, a) {
      return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(s) {
      return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(s = this.workingColorSpace) {
      return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
    }
  }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [Ms]: {
      primaries: t,
      whitePoint: n,
      transfer: Ur,
      toXYZ: pl,
      fromXYZ: ml,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: Je },
      outputColorSpaceConfig: { drawingBufferColorSpace: Je }
    },
    [Je]: {
      primaries: t,
      whitePoint: n,
      transfer: Qt,
      toXYZ: pl,
      fromXYZ: ml,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: Je }
    }
  }), i;
}
const Xt = /* @__PURE__ */ Uu();
function Wn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function is(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Ni;
class Iu {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let n;
    if (t instanceof HTMLCanvasElement)
      n = t;
    else {
      Ni === void 0 && (Ni = Nr("canvas")), Ni.width = t.width, Ni.height = t.height;
      const s = Ni.getContext("2d");
      t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), n = Ni;
    }
    return n.toDataURL(e);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Nr("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++)
        r[a] = Wn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(Wn(e[n] / 255) * 255) : e[n] = Wn(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Nu = 0;
class Vo {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Nu++ }), this.uuid = Vn(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++)
          s[a].isDataTexture ? r.push(na(s[a].image)) : r.push(na(s[a]));
      } else
        r = na(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function na(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Iu.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Fu = 0;
class He extends Di {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(t = He.DEFAULT_IMAGE, e = He.DEFAULT_MAPPING, n = Si, s = Si, r = An, a = yi, o = _n, l = Xn, c = He.DEFAULT_ANISOTROPY, u = ti) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Fu++ }), this.uuid = Vn(), this.name = "", this.source = new Vo(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Dt(0, 0), this.repeat = new Dt(1, 1), this.center = new Dt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ut(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  /**
   * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(t) {
    if (this.mapping !== Tc) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case Ka:
          t.x = t.x - Math.floor(t.x);
          break;
        case Si:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case $a:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case Ka:
          t.y = t.y - Math.floor(t.y);
          break;
        case Si:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case $a:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
He.DEFAULT_IMAGE = null;
He.DEFAULT_MAPPING = Tc;
He.DEFAULT_ANISOTROPY = 1;
class se {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(t = 0, e = 0, n = 0, s = 1) {
    se.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = s;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(t, e, n, s) {
    return this.x = t, this.y = e, this.z = n, this.w = s, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(t) {
    return this.z = t, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(t) {
    return this.w = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(t) {
    let e, n, s, r;
    const l = t.elements, c = l[0], u = l[4], d = l[8], p = l[1], f = l[5], _ = l[9], v = l[2], m = l[6], h = l[10];
    if (Math.abs(u - p) < 0.01 && Math.abs(d - v) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(u + p) < 0.1 && Math.abs(d + v) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + f + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const T = (c + 1) / 2, S = (f + 1) / 2, N = (h + 1) / 2, C = (u + p) / 4, P = (d + v) / 4, F = (_ + m) / 4;
      return T > S && T > N ? T < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(T), s = C / n, r = P / n) : S > N ? S < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(S), n = C / s, r = F / s) : N < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(N), n = P / r, s = F / r), this.set(n, s, r, e), this;
    }
    let b = Math.sqrt((m - _) * (m - _) + (d - v) * (d - v) + (p - u) * (p - u));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (m - _) / b, this.y = (d - v) / b, this.z = (p - u) / b, this.w = Math.acos((c + f + h - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(t, e) {
    return this.x = It(this.x, t.x, e.x), this.y = It(this.y, t.y, e.y), this.z = It(this.z, t.z, e.z), this.w = It(this.w, t.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(t, e) {
    return this.x = It(this.x, t, e), this.y = It(this.y, t, e), this.z = It(this.z, t, e), this.w = It(this.w, t, e), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(It(n, t, e));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ou extends Di {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new se(0, 0, t, e), this.scissorTest = !1, this.viewport = new se(0, 0, t, e);
    const s = { width: t, height: e, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: An,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const r = new He(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = n.depthTexture, this.samples = n.samples;
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let s = 0, r = this.textures.length; s < r; s++)
        this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let e = 0, n = t.textures.length; e < n; e++) {
      this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
      const s = Object.assign({}, t.textures[e].image);
      this.textures[e].source = new Vo(s);
    }
    return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ri extends Ou {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class Bc extends He {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = gn, this.minFilter = gn, this.wrapR = Si, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Bu extends He {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = gn, this.minFilter = gn, this.wrapR = Si, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ci {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(t = 0, e = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = s;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed  in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor in the range `[0,1]`.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(t, e, n, s, r, a, o) {
    let l = n[s + 0], c = n[s + 1], u = n[s + 2], d = n[s + 3];
    const p = r[a + 0], f = r[a + 1], _ = r[a + 2], v = r[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = d;
      return;
    }
    if (o === 1) {
      t[e + 0] = p, t[e + 1] = f, t[e + 2] = _, t[e + 3] = v;
      return;
    }
    if (d !== v || l !== p || c !== f || u !== _) {
      let m = 1 - o;
      const h = l * p + c * f + u * _ + d * v, b = h >= 0 ? 1 : -1, T = 1 - h * h;
      if (T > Number.EPSILON) {
        const N = Math.sqrt(T), C = Math.atan2(N, h * b);
        m = Math.sin(m * C) / N, o = Math.sin(o * C) / N;
      }
      const S = o * b;
      if (l = l * m + p * S, c = c * m + f * S, u = u * m + _ * S, d = d * m + v * S, m === 1 - o) {
        const N = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        l *= N, c *= N, u *= N, d *= N;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = d;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(t, e, n, s, r, a) {
    const o = n[s], l = n[s + 1], c = n[s + 2], u = n[s + 3], d = r[a], p = r[a + 1], f = r[a + 2], _ = r[a + 3];
    return t[e] = o * _ + u * d + l * f - c * p, t[e + 1] = l * _ + u * p + c * d - o * f, t[e + 2] = c * _ + u * f + o * p - l * d, t[e + 3] = u * _ - o * d - l * p - c * f, t;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(t, e, n, s) {
    return this._x = t, this._y = e, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(t, e = !0) {
    const n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(s / 2), d = o(r / 2), p = l(n / 2), f = l(s / 2), _ = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = p * u * d + c * f * _, this._y = c * f * d - p * u * _, this._z = c * u * _ + p * f * d, this._w = c * u * d - p * f * _;
        break;
      case "YXZ":
        this._x = p * u * d + c * f * _, this._y = c * f * d - p * u * _, this._z = c * u * _ - p * f * d, this._w = c * u * d + p * f * _;
        break;
      case "ZXY":
        this._x = p * u * d - c * f * _, this._y = c * f * d + p * u * _, this._z = c * u * _ + p * f * d, this._w = c * u * d - p * f * _;
        break;
      case "ZYX":
        this._x = p * u * d - c * f * _, this._y = c * f * d + p * u * _, this._z = c * u * _ - p * f * d, this._w = c * u * d + p * f * _;
        break;
      case "YZX":
        this._x = p * u * d + c * f * _, this._y = c * f * d + p * u * _, this._z = c * u * _ - p * f * d, this._w = c * u * d - p * f * _;
        break;
      case "XZY":
        this._x = p * u * d - c * f * _, this._y = c * f * d - p * u * _, this._z = c * u * _ + p * f * d, this._w = c * u * d + p * f * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(t, e) {
    const n = e / 2, s = Math.sin(n);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], l = e[9], c = e[2], u = e[6], d = e[10], p = n + o + d;
    if (p > 0) {
      const f = 0.5 / Math.sqrt(p + 1);
      this._w = 0.25 / f, this._x = (u - l) * f, this._y = (r - c) * f, this._z = (a - s) * f;
    } else if (n > o && n > d) {
      const f = 2 * Math.sqrt(1 + n - o - d);
      this._w = (u - l) / f, this._x = 0.25 * f, this._y = (s + a) / f, this._z = (r + c) / f;
    } else if (o > d) {
      const f = 2 * Math.sqrt(1 + o - n - d);
      this._w = (r - c) / f, this._x = (s + a) / f, this._y = 0.25 * f, this._z = (l + u) / f;
    } else {
      const f = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - s) / f, this._x = (r + c) / f, this._y = (l + u) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    return 2 * Math.acos(Math.abs(It(this.dot(t), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const s = Math.min(1, e / n);
    return this.slerp(t, s), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(t, e) {
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, l = e._y, c = e._z, u = e._w;
    return this._x = n * u + a * o + s * c - r * l, this._y = s * u + a * l + r * o - n * c, this._z = r * u + a * c + n * l - s * o, this._w = a * u - n * o - s * l - r * c, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between quaternions.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, s = this._y, r = this._z, a = this._w;
    let o = a * t._w + n * t._x + s * t._y + r * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = s, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - e;
      return this._w = f * a + e * this._w, this._x = f * n + e * this._x, this._y = f * s + e * this._y, this._z = f * r + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), d = Math.sin((1 - e) * u) / c, p = Math.sin(e * u) / c;
    return this._w = a * d + this._w * p, this._x = n * d + this._x * p, this._y = s * d + this._y * p, this._z = r * d + this._z * p, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(
      s * Math.sin(t),
      s * Math.cos(t),
      r * Math.sin(e),
      r * Math.cos(e)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class w {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(t = 0, e = 0, n = 0) {
    w.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(t) {
    return this.x = t, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(t) {
    return this.y = t, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(t) {
    return this.z = t, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(t) {
    return this.applyQuaternion(_l.setFromEuler(t));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(t, e) {
    return this.applyQuaternion(_l.setFromAxisAngle(t, e));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * s, this.y = r[1] * e + r[4] * n + r[7] * s, this.z = r[2] * e + r[5] * n + r[8] * s, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(t) {
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * s - o * n), u = 2 * (o * e - r * s), d = 2 * (r * n - a * e);
    return this.x = e + l * c + a * d - o * u, this.y = n + l * u + o * c - r * d, this.z = s + l * d + r * u - a * c, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * s, this.y = r[1] * e + r[5] * n + r[9] * s, this.z = r[2] * e + r[6] * n + r[10] * s, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(t, e) {
    return this.x = It(this.x, t.x, e.x), this.y = It(this.y, t.y, e.y), this.z = It(this.z, t.z, e.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(t, e) {
    return this.x = It(this.x, t, e), this.y = It(this.y, t, e), this.z = It(this.z, t, e), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(It(n, t, e));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(t) {
    return this.crossVectors(this, t);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(t, e) {
    const n = t.x, s = t.y, r = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = s * l - r * o, this.y = r * a - n * l, this.z = n * o - s * a, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(t) {
    return ia.copy(this).projectOnVector(t), this.sub(ia);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(t) {
    return this.sub(ia.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(It(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, s = this.z - t.z;
    return e * e + n * n + s * s;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(t, e, n) {
    const s = Math.sin(e) * t;
    return this.x = s * Math.sin(n), this.y = Math.cos(e) * t, this.z = s * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = s, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ia = /* @__PURE__ */ new w(), _l = /* @__PURE__ */ new Ci();
class oi {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(t = new w(1 / 0, 1 / 0, 1 / 0), e = new w(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(sn.fromArray(t, e));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(sn.fromBufferAttribute(t, e));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(t, e) {
    const n = sn.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          t.isMesh === !0 ? t.getVertexPosition(a, sn) : sn.fromBufferAttribute(r, a), sn.applyMatrix4(t.matrixWorld), this.expandByPoint(sn);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), $s.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), $s.copy(n.boundingBox)), $s.applyMatrix4(t.matrixWorld), this.union($s);
    }
    const s = t.children;
    for (let r = 0, a = s.length; r < a; r++)
      this.expandByObject(s[r], e);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(t) {
    return this.clampPoint(t.center, sn), sn.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(bs), Js.subVectors(this.max, bs), Fi.subVectors(t.a, bs), Oi.subVectors(t.b, bs), Bi.subVectors(t.c, bs), jn.subVectors(Oi, Fi), Zn.subVectors(Bi, Oi), ui.subVectors(Fi, Bi);
    let e = [
      0,
      -jn.z,
      jn.y,
      0,
      -Zn.z,
      Zn.y,
      0,
      -ui.z,
      ui.y,
      jn.z,
      0,
      -jn.x,
      Zn.z,
      0,
      -Zn.x,
      ui.z,
      0,
      -ui.x,
      -jn.y,
      jn.x,
      0,
      -Zn.y,
      Zn.x,
      0,
      -ui.y,
      ui.x,
      0
    ];
    return !sa(e, Fi, Oi, Bi, Js) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !sa(e, Fi, Oi, Bi, Js)) ? !1 : (Qs.crossVectors(jn, Zn), e = [Qs.x, Qs.y, Qs.z], sa(e, Fi, Oi, Bi, Js));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(t) {
    return this.clampPoint(t, sn).distanceTo(t);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(sn).length() * 0.5), t;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Rn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Rn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Rn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Rn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Rn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Rn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Rn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Rn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Rn), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Rn = [
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w()
], sn = /* @__PURE__ */ new w(), $s = /* @__PURE__ */ new oi(), Fi = /* @__PURE__ */ new w(), Oi = /* @__PURE__ */ new w(), Bi = /* @__PURE__ */ new w(), jn = /* @__PURE__ */ new w(), Zn = /* @__PURE__ */ new w(), ui = /* @__PURE__ */ new w(), bs = /* @__PURE__ */ new w(), Js = /* @__PURE__ */ new w(), Qs = /* @__PURE__ */ new w(), di = /* @__PURE__ */ new w();
function sa(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    di.fromArray(i, r);
    const o = s.x * Math.abs(di.x) + s.y * Math.abs(di.y) + s.z * Math.abs(di.z), l = t.dot(di), c = e.dot(di), u = n.dot(di);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const zu = /* @__PURE__ */ new oi(), As = /* @__PURE__ */ new w(), ra = /* @__PURE__ */ new w();
let Li = class {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(t = new w(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : zu.setFromPoints(t).getCenter(n);
    let s = 0;
    for (let r = 0, a = t.length; r < a; r++)
      s = Math.max(s, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(s), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(t) {
    return this.center.add(t), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    As.subVectors(t, this.center);
    const e = As.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(As, s / n), this.radius += s;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (ra.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(As.copy(t.center).add(ra)), this.expandByPoint(As.copy(t.center).sub(ra))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
};
const Cn = /* @__PURE__ */ new w(), aa = /* @__PURE__ */ new w(), tr = /* @__PURE__ */ new w(), Kn = /* @__PURE__ */ new w(), oa = /* @__PURE__ */ new w(), er = /* @__PURE__ */ new w(), la = /* @__PURE__ */ new w();
class Wo {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(t = new w(), e = new w(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(t) {
    return this.origin.copy(this.at(t, Cn)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(t) {
    const e = Cn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Cn.copy(this.origin).addScaledVector(this.direction, e), Cn.distanceToSquared(t));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(t, e, n, s) {
    aa.copy(t).add(e).multiplyScalar(0.5), tr.copy(e).sub(t).normalize(), Kn.copy(this.origin).sub(aa);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(tr), o = Kn.dot(this.direction), l = -Kn.dot(tr), c = Kn.lengthSq(), u = Math.abs(1 - a * a);
    let d, p, f, _;
    if (u > 0)
      if (d = a * l - o, p = a * o - l, _ = r * u, d >= 0)
        if (p >= -_)
          if (p <= _) {
            const v = 1 / u;
            d *= v, p *= v, f = d * (d + a * p + 2 * o) + p * (a * d + p + 2 * l) + c;
          } else
            p = r, d = Math.max(0, -(a * p + o)), f = -d * d + p * (p + 2 * l) + c;
        else
          p = -r, d = Math.max(0, -(a * p + o)), f = -d * d + p * (p + 2 * l) + c;
      else
        p <= -_ ? (d = Math.max(0, -(-a * r + o)), p = d > 0 ? -r : Math.min(Math.max(-r, -l), r), f = -d * d + p * (p + 2 * l) + c) : p <= _ ? (d = 0, p = Math.min(Math.max(-r, -l), r), f = p * (p + 2 * l) + c) : (d = Math.max(0, -(a * r + o)), p = d > 0 ? r : Math.min(Math.max(-r, -l), r), f = -d * d + p * (p + 2 * l) + c);
    else
      p = a > 0 ? -r : r, d = Math.max(0, -(a * p + o)), f = -d * d + p * (p + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), s && s.copy(aa).addScaledVector(tr, p), f;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(t, e) {
    Cn.subVectors(t.center, this.origin);
    const n = Cn.dot(this.direction), s = Cn.dot(Cn) - n * n, r = t.radius * t.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(t, e) {
    let n, s, r, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, p = this.origin;
    return c >= 0 ? (n = (t.min.x - p.x) * c, s = (t.max.x - p.x) * c) : (n = (t.max.x - p.x) * c, s = (t.min.x - p.x) * c), u >= 0 ? (r = (t.min.y - p.y) * u, a = (t.max.y - p.y) * u) : (r = (t.max.y - p.y) * u, a = (t.min.y - p.y) * u), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), d >= 0 ? (o = (t.min.z - p.z) * d, l = (t.max.z - p.z) * d) : (o = (t.max.z - p.z) * d, l = (t.min.z - p.z) * d), n > l || o > s) || ((o > n || n !== n) && (n = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(t) {
    return this.intersectBox(t, Cn) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(t, e, n, s, r) {
    oa.subVectors(e, t), er.subVectors(n, t), la.crossVectors(oa, er);
    let a = this.direction.dot(la), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Kn.subVectors(this.origin, t);
    const l = o * this.direction.dot(er.crossVectors(Kn, er));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(oa.cross(Kn));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * Kn.dot(la);
    return u < 0 ? null : this.at(u / a, r);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class ae {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(t, e, n, s, r, a, o, l, c, u, d, p, f, _, v, m) {
    ae.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, s, r, a, o, l, c, u, d, p, f, _, v, m);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(t, e, n, s, r, a, o, l, c, u, d, p, f, _, v, m) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = s, h[1] = r, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = u, h[10] = d, h[14] = p, h[3] = f, h[7] = _, h[11] = v, h[15] = m, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new ae().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(t) {
    const e = this.elements, n = t.elements, s = 1 / zi.setFromMatrixColumn(t, 0).length(), r = 1 / zi.setFromMatrixColumn(t, 1).length(), a = 1 / zi.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page]{@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix}
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(s), c = Math.sin(s), u = Math.cos(r), d = Math.sin(r);
    if (t.order === "XYZ") {
      const p = a * u, f = a * d, _ = o * u, v = o * d;
      e[0] = l * u, e[4] = -l * d, e[8] = c, e[1] = f + _ * c, e[5] = p - v * c, e[9] = -o * l, e[2] = v - p * c, e[6] = _ + f * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const p = l * u, f = l * d, _ = c * u, v = c * d;
      e[0] = p + v * o, e[4] = _ * o - f, e[8] = a * c, e[1] = a * d, e[5] = a * u, e[9] = -o, e[2] = f * o - _, e[6] = v + p * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const p = l * u, f = l * d, _ = c * u, v = c * d;
      e[0] = p - v * o, e[4] = -a * d, e[8] = _ + f * o, e[1] = f + _ * o, e[5] = a * u, e[9] = v - p * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const p = a * u, f = a * d, _ = o * u, v = o * d;
      e[0] = l * u, e[4] = _ * c - f, e[8] = p * c + v, e[1] = l * d, e[5] = v * c + p, e[9] = f * c - _, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const p = a * l, f = a * c, _ = o * l, v = o * c;
      e[0] = l * u, e[4] = v - p * d, e[8] = _ * d + f, e[1] = d, e[5] = a * u, e[9] = -o * u, e[2] = -c * u, e[6] = f * d + _, e[10] = p - v * d;
    } else if (t.order === "XZY") {
      const p = a * l, f = a * c, _ = o * l, v = o * c;
      e[0] = l * u, e[4] = -d, e[8] = c * u, e[1] = p * d + v, e[5] = a * u, e[9] = f * d - _, e[2] = _ * d - f, e[6] = o * u, e[10] = v * d + p;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(t) {
    return this.compose(Hu, t, Gu);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(t, e, n) {
    const s = this.elements;
    return Ve.subVectors(t, e), Ve.lengthSq() === 0 && (Ve.z = 1), Ve.normalize(), $n.crossVectors(n, Ve), $n.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ve.x += 1e-4 : Ve.z += 1e-4, Ve.normalize(), $n.crossVectors(n, Ve)), $n.normalize(), nr.crossVectors(Ve, $n), s[0] = $n.x, s[4] = nr.x, s[8] = Ve.x, s[1] = $n.y, s[5] = nr.y, s[9] = Ve.y, s[2] = $n.z, s[6] = nr.z, s[10] = Ve.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], d = n[5], p = n[9], f = n[13], _ = n[2], v = n[6], m = n[10], h = n[14], b = n[3], T = n[7], S = n[11], N = n[15], C = s[0], P = s[4], F = s[8], y = s[12], M = s[1], D = s[5], G = s[9], z = s[13], W = s[2], K = s[6], X = s[10], tt = s[14], V = s[3], st = s[7], ut = s[11], Mt = s[15];
    return r[0] = a * C + o * M + l * W + c * V, r[4] = a * P + o * D + l * K + c * st, r[8] = a * F + o * G + l * X + c * ut, r[12] = a * y + o * z + l * tt + c * Mt, r[1] = u * C + d * M + p * W + f * V, r[5] = u * P + d * D + p * K + f * st, r[9] = u * F + d * G + p * X + f * ut, r[13] = u * y + d * z + p * tt + f * Mt, r[2] = _ * C + v * M + m * W + h * V, r[6] = _ * P + v * D + m * K + h * st, r[10] = _ * F + v * G + m * X + h * ut, r[14] = _ * y + v * z + m * tt + h * Mt, r[3] = b * C + T * M + S * W + N * V, r[7] = b * P + T * D + S * K + N * st, r[11] = b * F + T * G + S * X + N * ut, r[15] = b * y + T * z + S * tt + N * Mt, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], l = t[9], c = t[13], u = t[2], d = t[6], p = t[10], f = t[14], _ = t[3], v = t[7], m = t[11], h = t[15];
    return _ * (+r * l * d - s * c * d - r * o * p + n * c * p + s * o * f - n * l * f) + v * (+e * l * f - e * c * p + r * a * p - s * a * f + s * c * u - r * l * u) + m * (+e * c * d - e * o * f - r * a * d + n * a * f + r * o * u - n * c * u) + h * (-s * o * u - e * l * d + e * o * p + s * a * d - n * a * p + n * l * u);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(t, e, n) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], d = t[9], p = t[10], f = t[11], _ = t[12], v = t[13], m = t[14], h = t[15], b = d * m * c - v * p * c + v * l * f - o * m * f - d * l * h + o * p * h, T = _ * p * c - u * m * c - _ * l * f + a * m * f + u * l * h - a * p * h, S = u * v * c - _ * d * c + _ * o * f - a * v * f - u * o * h + a * d * h, N = _ * d * l - u * v * l - _ * o * p + a * v * p + u * o * m - a * d * m, C = e * b + n * T + s * S + r * N;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / C;
    return t[0] = b * P, t[1] = (v * p * r - d * m * r - v * s * f + n * m * f + d * s * h - n * p * h) * P, t[2] = (o * m * r - v * l * r + v * s * c - n * m * c - o * s * h + n * l * h) * P, t[3] = (d * l * r - o * p * r - d * s * c + n * p * c + o * s * f - n * l * f) * P, t[4] = T * P, t[5] = (u * m * r - _ * p * r + _ * s * f - e * m * f - u * s * h + e * p * h) * P, t[6] = (_ * l * r - a * m * r - _ * s * c + e * m * c + a * s * h - e * l * h) * P, t[7] = (a * p * r - u * l * r + u * s * c - e * p * c - a * s * f + e * l * f) * P, t[8] = S * P, t[9] = (_ * d * r - u * v * r - _ * n * f + e * v * f + u * n * h - e * d * h) * P, t[10] = (a * v * r - _ * o * r + _ * n * c - e * v * c - a * n * h + e * o * h) * P, t[11] = (u * o * r - a * d * r - u * n * c + e * d * c + a * n * f - e * o * f) * P, t[12] = N * P, t[13] = (u * v * s - _ * d * s + _ * n * p - e * v * p - u * n * m + e * d * m) * P, t[14] = (_ * o * s - a * v * s - _ * n * l + e * v * l + a * n * m - e * o * m) * P, t[15] = (a * d * s - u * o * s + u * n * l - e * d * l - a * n * p + e * o * p) * P, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z;
    return e[0] *= n, e[4] *= s, e[8] *= r, e[1] *= n, e[5] *= s, e[9] *= r, e[2] *= n, e[6] *= s, e[10] *= r, e[3] *= n, e[7] *= s, e[11] *= r, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, s));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here]{@link https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199}.
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, l = t.z, c = r * a, u = r * o;
    return this.set(
      c * a + n,
      c * o - s * l,
      c * l + s * o,
      0,
      c * o + s * l,
      u * o + n,
      u * l - s * a,
      0,
      c * l - s * o,
      u * l + s * a,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(t, e, n, s, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      t,
      1,
      a,
      0,
      e,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(t, e, n) {
    const s = this.elements, r = e._x, a = e._y, o = e._z, l = e._w, c = r + r, u = a + a, d = o + o, p = r * c, f = r * u, _ = r * d, v = a * u, m = a * d, h = o * d, b = l * c, T = l * u, S = l * d, N = n.x, C = n.y, P = n.z;
    return s[0] = (1 - (v + h)) * N, s[1] = (f + S) * N, s[2] = (_ - T) * N, s[3] = 0, s[4] = (f - S) * C, s[5] = (1 - (p + h)) * C, s[6] = (m + b) * C, s[7] = 0, s[8] = (_ + T) * P, s[9] = (m - b) * P, s[10] = (1 - (p + v)) * P, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(t, e, n) {
    const s = this.elements;
    let r = zi.set(s[0], s[1], s[2]).length();
    const a = zi.set(s[4], s[5], s[6]).length(), o = zi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], rn.copy(this);
    const c = 1 / r, u = 1 / a, d = 1 / o;
    return rn.elements[0] *= c, rn.elements[1] *= c, rn.elements[2] *= c, rn.elements[4] *= u, rn.elements[5] *= u, rn.elements[6] *= u, rn.elements[8] *= d, rn.elements[9] *= d, rn.elements[10] *= d, e.setFromRotationMatrix(rn), n.x = r, n.y = a, n.z = o, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(t, e, n, s, r, a, o = kn) {
    const l = this.elements, c = 2 * r / (e - t), u = 2 * r / (n - s), d = (e + t) / (e - t), p = (n + s) / (n - s);
    let f, _;
    if (o === kn)
      f = -(a + r) / (a - r), _ = -2 * a * r / (a - r);
    else if (o === Ir)
      f = -a / (a - r), _ = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(t, e, n, s, r, a, o = kn) {
    const l = this.elements, c = 1 / (e - t), u = 1 / (n - s), d = 1 / (a - r), p = (e + t) * c, f = (n + s) * u;
    let _, v;
    if (o === kn)
      _ = (a + r) * d, v = -2 * d;
    else if (o === Ir)
      _ = r * d, v = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -p, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 16; s++)
      if (e[s] !== n[s]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const zi = /* @__PURE__ */ new w(), rn = /* @__PURE__ */ new ae(), Hu = /* @__PURE__ */ new w(0, 0, 0), Gu = /* @__PURE__ */ new w(1, 1, 1), $n = /* @__PURE__ */ new w(), nr = /* @__PURE__ */ new w(), Ve = /* @__PURE__ */ new w(), gl = /* @__PURE__ */ new ae(), vl = /* @__PURE__ */ new Ci();
class Yn {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(t = 0, e = 0, n = 0, s = Yn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = s;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(t, e, n, s = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const s = t.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], u = s[9], d = s[2], p = s[6], f = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(It(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, f), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(p, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-It(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(It(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._y = Math.atan2(-d, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-It(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(p, f), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(It(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-It(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(t, e, n) {
    return gl.makeRotationFromQuaternion(t), this.setFromRotationMatrix(gl, e, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(t) {
    return vl.setFromEuler(this), this.setFromQuaternion(vl, t);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Yn.DEFAULT_ORDER = "XYZ";
class zc {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let ku = 0;
const xl = /* @__PURE__ */ new w(), Hi = /* @__PURE__ */ new Ci(), Pn = /* @__PURE__ */ new ae(), ir = /* @__PURE__ */ new w(), ws = /* @__PURE__ */ new w(), Vu = /* @__PURE__ */ new w(), Wu = /* @__PURE__ */ new Ci(), Ml = /* @__PURE__ */ new w(1, 0, 0), Sl = /* @__PURE__ */ new w(0, 1, 0), yl = /* @__PURE__ */ new w(0, 0, 1), El = { type: "added" }, Xu = { type: "removed" }, Gi = { type: "childadded", child: null }, ca = { type: "childremoved", child: null };
class De extends Di {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ku++ }), this.uuid = Vn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = De.DEFAULT_UP.clone();
    const t = new w(), e = new Yn(), n = new Ci(), s = new w(1, 1, 1);
    function r() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new ae()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Ut()
      }
    }), this.matrix = new ae(), this.matrixWorld = new ae(), this.matrixAutoUpdate = De.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new zc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(t, e) {
    return Hi.setFromAxisAngle(t, e), this.quaternion.multiply(Hi), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(t, e) {
    return Hi.setFromAxisAngle(t, e), this.quaternion.premultiply(Hi), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(t) {
    return this.rotateOnAxis(Ml, t);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(t) {
    return this.rotateOnAxis(Sl, t);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(t) {
    return this.rotateOnAxis(yl, t);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(t, e) {
    return xl.copy(t).applyQuaternion(this.quaternion), this.position.add(xl.multiplyScalar(e)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(t) {
    return this.translateOnAxis(Ml, t);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(t) {
    return this.translateOnAxis(Sl, t);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(t) {
    return this.translateOnAxis(yl, t);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's word space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Pn.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(t, e, n) {
    t.isVector3 ? ir.copy(t) : ir.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), ws.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Pn.lookAt(ws, ir, this.up) : Pn.lookAt(ir, ws, this.up), this.quaternion.setFromRotationMatrix(Pn), s && (Pn.extractRotation(s.matrixWorld), Hi.setFromRotationMatrix(Pn), this.quaternion.premultiply(Hi.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(El), Gi.child = t, this.dispatchEvent(Gi), Gi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Xu), ca.child = t, this.dispatchEvent(ca), ca.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Pn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Pn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Pn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(El), Gi.child = t, this.dispatchEvent(Gi), Gi.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++)
      s[r].getObjectsByProperty(t, e, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ws, t, Vu), t;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ws, Wu, t), t;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].traverse(t);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].traverseVisible(t);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].updateMatrixWorld(t);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++)
        s[r].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            r(t.shapes, d);
          }
        else
          r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(t.materials, this.material[l]));
        s.material = o;
      } else
        s.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++)
        s.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        s.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), u = a(t.images), d = a(t.shapes), p = a(t.skeletons), f = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), p.length > 0 && (n.skeletons = p), f.length > 0 && (n.animations = f), _.length > 0 && (n.nodes = _);
    }
    return n.object = s, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const s = t.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
De.DEFAULT_UP = /* @__PURE__ */ new w(0, 1, 0);
De.DEFAULT_MATRIX_AUTO_UPDATE = !0;
De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const an = /* @__PURE__ */ new w(), Dn = /* @__PURE__ */ new w(), ha = /* @__PURE__ */ new w(), Ln = /* @__PURE__ */ new w(), ki = /* @__PURE__ */ new w(), Vi = /* @__PURE__ */ new w(), Tl = /* @__PURE__ */ new w(), ua = /* @__PURE__ */ new w(), da = /* @__PURE__ */ new w(), fa = /* @__PURE__ */ new w(), pa = /* @__PURE__ */ new se(), ma = /* @__PURE__ */ new se(), _a = /* @__PURE__ */ new se();
class mn {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(t = new w(), e = new w(), n = new w()) {
    this.a = t, this.b = e, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(t, e, n, s) {
    s.subVectors(n, e), an.subVectors(t, e), s.cross(an);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(t, e, n, s, r) {
    an.subVectors(s, e), Dn.subVectors(n, e), ha.subVectors(t, e);
    const a = an.dot(an), o = an.dot(Dn), l = an.dot(ha), c = Dn.dot(Dn), u = Dn.dot(ha), d = a * c - o * o;
    if (d === 0)
      return r.set(0, 0, 0), null;
    const p = 1 / d, f = (c * l - o * u) * p, _ = (a * u - o * l) * p;
    return r.set(1 - f - _, _, f);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(t, e, n, s) {
    return this.getBarycoord(t, e, n, s, Ln) === null ? !1 : Ln.x >= 0 && Ln.y >= 0 && Ln.x + Ln.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(t, e, n, s, r, a, o, l) {
    return this.getBarycoord(t, e, n, s, Ln) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Ln.x), l.addScaledVector(a, Ln.y), l.addScaledVector(o, Ln.z), l);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(t, e, n, s, r, a) {
    return pa.setScalar(0), ma.setScalar(0), _a.setScalar(0), pa.fromBufferAttribute(t, e), ma.fromBufferAttribute(t, n), _a.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(pa, r.x), a.addScaledVector(ma, r.y), a.addScaledVector(_a, r.z), a;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(t, e, n, s) {
    return an.subVectors(n, e), Dn.subVectors(t, e), an.cross(Dn).dot(s) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(t, e, n, s) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[s]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(t, e, n, s) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, s), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return an.subVectors(this.c, this.b), Dn.subVectors(this.a, this.b), an.cross(Dn).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(t) {
    return mn.getNormal(this.a, this.b, this.c, t);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(t, e) {
    return mn.getBarycoord(t, this.a, this.b, this.c, e);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(t, e, n, s, r) {
    return mn.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(t) {
    return mn.containsPoint(t, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(t) {
    return mn.isFrontFacing(this.a, this.b, this.c, t);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(t, e) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    ki.subVectors(s, n), Vi.subVectors(r, n), ua.subVectors(t, n);
    const l = ki.dot(ua), c = Vi.dot(ua);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    da.subVectors(t, s);
    const u = ki.dot(da), d = Vi.dot(da);
    if (u >= 0 && d <= u)
      return e.copy(s);
    const p = l * d - u * c;
    if (p <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), e.copy(n).addScaledVector(ki, a);
    fa.subVectors(t, r);
    const f = ki.dot(fa), _ = Vi.dot(fa);
    if (_ >= 0 && f <= _)
      return e.copy(r);
    const v = f * c - l * _;
    if (v <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), e.copy(n).addScaledVector(Vi, o);
    const m = u * _ - f * d;
    if (m <= 0 && d - u >= 0 && f - _ >= 0)
      return Tl.subVectors(r, s), o = (d - u) / (d - u + (f - _)), e.copy(s).addScaledVector(Tl, o);
    const h = 1 / (m + v + p);
    return a = v * h, o = p * h, e.copy(n).addScaledVector(ki, a).addScaledVector(Vi, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Hc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Jn = { h: 0, s: 0, l: 0 }, sr = { h: 0, s: 0, l: 0 };
function ga(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class qt {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const s = t;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(t, e = Je) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Xt.toWorkingColorSpace(this, e), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(t, e, n, s = Xt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Xt.toWorkingColorSpace(this, s), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(t, e, n, s = Xt.workingColorSpace) {
    if (t = ko(t, 1), e = It(e, 0, 1), n = It(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = ga(a, r, t + 1 / 3), this.g = ga(a, r, t), this.b = ga(a, r, t - 1 / 3);
    }
    return Xt.toWorkingColorSpace(this, s), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(t, e = Je) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              e
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = s[1], a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          e
        );
      if (a === 6)
        return this.setHex(parseInt(r, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(t, e = Je) {
    const n = Hc[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(t) {
    return this.r = Wn(t.r), this.g = Wn(t.g), this.b = Wn(t.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(t) {
    return this.r = is(t.r), this.g = is(t.g), this.b = is(t.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(t = Je) {
    return Xt.fromWorkingColorSpace(Pe.copy(this), t), Math.round(It(Pe.r * 255, 0, 255)) * 65536 + Math.round(It(Pe.g * 255, 0, 255)) * 256 + Math.round(It(Pe.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(t = Je) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(t, e = Xt.workingColorSpace) {
    Xt.fromWorkingColorSpace(Pe.copy(this), e);
    const n = Pe.r, s = Pe.g, r = Pe.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let l, c;
    const u = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const d = a - o;
      switch (c = u <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          l = (s - r) / d + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / d + 2;
          break;
        case r:
          l = (n - s) / d + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = u, t;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(t, e = Xt.workingColorSpace) {
    return Xt.fromWorkingColorSpace(Pe.copy(this), e), t.r = Pe.r, t.g = Pe.g, t.b = Pe.b, t;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(t = Je) {
    Xt.fromWorkingColorSpace(Pe.copy(this), t);
    const e = Pe.r, n = Pe.g, s = Pe.b;
    return t !== Je ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(t, e, n) {
    return this.getHSL(Jn), this.setHSL(Jn.h + t, Jn.s + e, Jn.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(t, e) {
    this.getHSL(Jn), t.getHSL(sr);
    const n = Ns(Jn.h, sr.h, e), s = Ns(Jn.s, sr.s, e), r = Ns(Jn.l, sr.l, e);
    return this.setHSL(n, s, r), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(t) {
    const e = this.r, n = this.g, s = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * s, this.g = r[1] * e + r[4] * n + r[7] * s, this.b = r[2] * e + r[5] * n + r[8] * s, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Pe = /* @__PURE__ */ new qt();
qt.NAMES = Hc;
let Yu = 0;
class Ws extends Di {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Yu++ }), this.uuid = Vn(), this.name = "", this.type = "Material", this.blending = ns, this.side = ri, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = za, this.blendDst = Ha, this.blendEquation = xi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new qt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = gs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = hl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ii, this.stencilZFail = Ii, this.stencilZPass = Ii, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL]{@link https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language}.
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const s = this[e];
        if (s === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[e] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ns && (n.blending = this.blending), this.side !== ri && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== za && (n.blendSrc = this.blendSrc), this.blendDst !== Ha && (n.blendDst = this.blendDst), this.blendEquation !== xi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== gs && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== hl && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Ii && (n.stencilFail = this.stencilFail), this.stencilZFail !== Ii && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Ii && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (e) {
      const r = s(t.textures), a = s(t.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const s = e.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r)
        n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class li extends Ws {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new qt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Yn(), this.combine = Ec, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const _e = /* @__PURE__ */ new w(), rr = /* @__PURE__ */ new Dt();
let qu = 0;
class vn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: qu++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = bo, this.updateRanges = [], this.gpuType = Gn, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(t) {
    return this.usage = t, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[t + s] = e.array[n + s];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(t) {
    return this.array.set(t), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        rr.fromBufferAttribute(this, e), rr.applyMatrix3(t), this.setXY(e, rr.x, rr.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        _e.fromBufferAttribute(this, e), _e.applyMatrix3(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      _e.fromBufferAttribute(this, e), _e.applyMatrix4(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      _e.fromBufferAttribute(this, e), _e.applyNormalMatrix(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      _e.fromBufferAttribute(this, e), _e.transformDirection(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = pn(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(t, e, n) {
    return this.normalized && (n = $t(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = pn(e, this.array)), e;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = $t(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = pn(e, this.array)), e;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = $t(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = pn(e, this.array)), e;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = $t(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = pn(e, this.array)), e;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = $t(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = $t(e, this.array), n = $t(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(t, e, n, s) {
    return t *= this.itemSize, this.normalized && (e = $t(e, this.array), n = $t(n, this.array), s = $t(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(t, e, n, s, r) {
    return t *= this.itemSize, this.normalized && (e = $t(e, this.array), n = $t(n, this.array), s = $t(s, this.array), r = $t(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== bo && (t.usage = this.usage), t;
  }
}
class Gc extends vn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class kc extends vn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class pe extends vn {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let ju = 0;
const Ke = /* @__PURE__ */ new ae(), va = /* @__PURE__ */ new De(), Wi = /* @__PURE__ */ new w(), We = /* @__PURE__ */ new oi(), Rs = /* @__PURE__ */ new oi(), ye = /* @__PURE__ */ new w();
class Ge extends Di {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: ju++ }), this.uuid = Vn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Oc(t) ? kc : Gc)(t, 1) : this.index = t, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(t) {
    return this.indirect = t, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(t) {
    return this.attributes[t];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ut().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(t) {
    return Ke.makeRotationFromQuaternion(t), this.applyMatrix4(Ke), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(t) {
    return Ke.makeRotationX(t), this.applyMatrix4(Ke), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(t) {
    return Ke.makeRotationY(t), this.applyMatrix4(Ke), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(t) {
    return Ke.makeRotationZ(t), this.applyMatrix4(Ke), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(t, e, n) {
    return Ke.makeTranslation(t, e, n), this.applyMatrix4(Ke), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(t, e, n) {
    return Ke.makeScale(t, e, n), this.applyMatrix4(Ke), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(t) {
    return va.lookAt(t), va.updateMatrix(), this.applyMatrix4(va.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Wi).negate(), this.translate(Wi.x, Wi.y, Wi.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let s = 0, r = t.length; s < r; s++) {
        const a = t[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new pe(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let s = 0; s < n; s++) {
        const r = t[s];
        e.setXYZ(s, r.x, r.y, r.z || 0);
      }
      t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new oi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new w(-1 / 0, -1 / 0, -1 / 0),
        new w(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, s = e.length; n < s; n++) {
          const r = e[n];
          We.setFromBufferAttribute(r), this.morphTargetsRelative ? (ye.addVectors(this.boundingBox.min, We.min), this.boundingBox.expandByPoint(ye), ye.addVectors(this.boundingBox.max, We.max), this.boundingBox.expandByPoint(ye)) : (this.boundingBox.expandByPoint(We.min), this.boundingBox.expandByPoint(We.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Li());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new w(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (We.setFromBufferAttribute(t), e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r];
          Rs.setFromBufferAttribute(o), this.morphTargetsRelative ? (ye.addVectors(We.min, Rs.min), We.expandByPoint(ye), ye.addVectors(We.max, Rs.max), We.expandByPoint(ye)) : (We.expandByPoint(Rs.min), We.expandByPoint(Rs.max));
        }
      We.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++)
        ye.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(ye));
      if (e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            ye.fromBufferAttribute(o, c), l && (Wi.fromBufferAttribute(t, c), ye.add(Wi)), s = Math.max(s, n.distanceToSquared(ye));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, s = e.normal, r = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new vn(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let F = 0; F < n.count; F++)
      o[F] = new w(), l[F] = new w();
    const c = new w(), u = new w(), d = new w(), p = new Dt(), f = new Dt(), _ = new Dt(), v = new w(), m = new w();
    function h(F, y, M) {
      c.fromBufferAttribute(n, F), u.fromBufferAttribute(n, y), d.fromBufferAttribute(n, M), p.fromBufferAttribute(r, F), f.fromBufferAttribute(r, y), _.fromBufferAttribute(r, M), u.sub(c), d.sub(c), f.sub(p), _.sub(p);
      const D = 1 / (f.x * _.y - _.x * f.y);
      isFinite(D) && (v.copy(u).multiplyScalar(_.y).addScaledVector(d, -f.y).multiplyScalar(D), m.copy(d).multiplyScalar(f.x).addScaledVector(u, -_.x).multiplyScalar(D), o[F].add(v), o[y].add(v), o[M].add(v), l[F].add(m), l[y].add(m), l[M].add(m));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: t.count
    }]);
    for (let F = 0, y = b.length; F < y; ++F) {
      const M = b[F], D = M.start, G = M.count;
      for (let z = D, W = D + G; z < W; z += 3)
        h(
          t.getX(z + 0),
          t.getX(z + 1),
          t.getX(z + 2)
        );
    }
    const T = new w(), S = new w(), N = new w(), C = new w();
    function P(F) {
      N.fromBufferAttribute(s, F), C.copy(N);
      const y = o[F];
      T.copy(y), T.sub(N.multiplyScalar(N.dot(y))).normalize(), S.crossVectors(C, y);
      const D = S.dot(l[F]) < 0 ? -1 : 1;
      a.setXYZW(F, T.x, T.y, T.z, D);
    }
    for (let F = 0, y = b.length; F < y; ++F) {
      const M = b[F], D = M.start, G = M.count;
      for (let z = D, W = D + G; z < W; z += 3)
        P(t.getX(z + 0)), P(t.getX(z + 1)), P(t.getX(z + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new vn(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let p = 0, f = n.count; p < f; p++)
          n.setXYZ(p, 0, 0, 0);
      const s = new w(), r = new w(), a = new w(), o = new w(), l = new w(), c = new w(), u = new w(), d = new w();
      if (t)
        for (let p = 0, f = t.count; p < f; p += 3) {
          const _ = t.getX(p + 0), v = t.getX(p + 1), m = t.getX(p + 2);
          s.fromBufferAttribute(e, _), r.fromBufferAttribute(e, v), a.fromBufferAttribute(e, m), u.subVectors(a, r), d.subVectors(s, r), u.cross(d), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, m), o.add(u), l.add(u), c.add(u), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
        }
      else
        for (let p = 0, f = e.count; p < f; p += 3)
          s.fromBufferAttribute(e, p + 0), r.fromBufferAttribute(e, p + 1), a.fromBufferAttribute(e, p + 2), u.subVectors(a, r), d.subVectors(s, r), u.cross(d), n.setXYZ(p + 0, u.x, u.y, u.z), n.setXYZ(p + 1, u.x, u.y, u.z), n.setXYZ(p + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      ye.fromBufferAttribute(t, e), ye.normalize(), t.setXYZ(e, ye.x, ye.y, ye.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, u = o.itemSize, d = o.normalized, p = new c.constructor(l.length * u);
      let f = 0, _ = 0;
      for (let v = 0, m = l.length; v < m; v++) {
        o.isInterleavedBufferAttribute ? f = l[v] * o.data.stride + o.offset : f = l[v] * u;
        for (let h = 0; h < u; h++)
          p[_++] = c[f++];
      }
      return new vn(p, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Ge(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const l = s[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let u = 0, d = c.length; u < d; u++) {
        const p = c[u], f = t(p, n);
        l.push(f);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const s = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let d = 0, p = c.length; d < p; d++) {
        const f = c[d];
        u.push(f.toJSON(t.data));
      }
      u.length > 0 && (s[l] = u, r = !0);
    }
    r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), t;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone());
    const s = t.attributes;
    for (const c in s) {
      const u = s[c];
      this.setAttribute(c, u.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const u = [], d = r[c];
      for (let p = 0, f = d.length; p < f; p++)
        u.push(d[p].clone(e));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const d = a[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const bl = /* @__PURE__ */ new ae(), fi = /* @__PURE__ */ new Wo(), ar = /* @__PURE__ */ new Li(), Al = /* @__PURE__ */ new w(), or = /* @__PURE__ */ new w(), lr = /* @__PURE__ */ new w(), cr = /* @__PURE__ */ new w(), xa = /* @__PURE__ */ new w(), hr = /* @__PURE__ */ new w(), wl = /* @__PURE__ */ new w(), ur = /* @__PURE__ */ new w();
class fe extends De {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(t = new Ge(), e = new li()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(t, e) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const o = this.morphTargetInfluences;
    if (r && o) {
      hr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = o[l], d = r[l];
        u !== 0 && (xa.fromBufferAttribute(d, t), a ? hr.addScaledVector(xa, u) : hr.addScaledVector(xa.sub(e), u));
      }
      e.add(hr);
    }
    return e;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, e) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ar.copy(n.boundingSphere), ar.applyMatrix4(r), fi.copy(t.ray).recast(t.near), !(ar.containsPoint(fi.origin) === !1 && (fi.intersectSphere(ar, Al) === null || fi.origin.distanceToSquared(Al) > (t.far - t.near) ** 2)) && (bl.copy(r).invert(), fi.copy(t.ray).applyMatrix4(bl), !(n.boundingBox !== null && fi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, fi)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, d = r.attributes.normal, p = r.groups, f = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, v = p.length; _ < v; _++) {
          const m = p[_], h = a[m.materialIndex], b = Math.max(m.start, f.start), T = Math.min(o.count, Math.min(m.start + m.count, f.start + f.count));
          for (let S = b, N = T; S < N; S += 3) {
            const C = o.getX(S), P = o.getX(S + 1), F = o.getX(S + 2);
            s = dr(this, h, t, n, c, u, d, C, P, F), s && (s.faceIndex = Math.floor(S / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const _ = Math.max(0, f.start), v = Math.min(o.count, f.start + f.count);
        for (let m = _, h = v; m < h; m += 3) {
          const b = o.getX(m), T = o.getX(m + 1), S = o.getX(m + 2);
          s = dr(this, a, t, n, c, u, d, b, T, S), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, v = p.length; _ < v; _++) {
          const m = p[_], h = a[m.materialIndex], b = Math.max(m.start, f.start), T = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count));
          for (let S = b, N = T; S < N; S += 3) {
            const C = S, P = S + 1, F = S + 2;
            s = dr(this, h, t, n, c, u, d, C, P, F), s && (s.faceIndex = Math.floor(S / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const _ = Math.max(0, f.start), v = Math.min(l.count, f.start + f.count);
        for (let m = _, h = v; m < h; m += 3) {
          const b = m, T = m + 1, S = m + 2;
          s = dr(this, a, t, n, c, u, d, b, T, S), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
  }
}
function Zu(i, t, e, n, s, r, a, o) {
  let l;
  if (t.side === ze ? l = n.intersectTriangle(a, r, s, !0, o) : l = n.intersectTriangle(s, r, a, t.side === ri, o), l === null) return null;
  ur.copy(o), ur.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(ur);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: ur.clone(),
    object: i
  };
}
function dr(i, t, e, n, s, r, a, o, l, c) {
  i.getVertexPosition(o, or), i.getVertexPosition(l, lr), i.getVertexPosition(c, cr);
  const u = Zu(i, t, e, n, or, lr, cr, wl);
  if (u) {
    const d = new w();
    mn.getBarycoord(wl, or, lr, cr, d), s && (u.uv = mn.getInterpolatedAttribute(s, o, l, c, d, new Dt())), r && (u.uv1 = mn.getInterpolatedAttribute(r, o, l, c, d, new Dt())), a && (u.normal = mn.getInterpolatedAttribute(a, o, l, c, d, new w()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const p = {
      a: o,
      b: l,
      c,
      normal: new w(),
      materialIndex: 0
    };
    mn.getNormal(or, lr, cr, p.normal), u.face = p, u.barycoord = d;
  }
  return u;
}
class Xs extends Ge {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(t = 1, e = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: s,
      heightSegments: r,
      depthSegments: a
    };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], u = [], d = [];
    let p = 0, f = 0;
    _("z", "y", "x", -1, -1, n, e, t, a, r, 0), _("z", "y", "x", 1, -1, n, e, -t, a, r, 1), _("x", "z", "y", 1, 1, t, n, e, s, a, 2), _("x", "z", "y", 1, -1, t, n, -e, s, a, 3), _("x", "y", "z", 1, -1, t, e, n, s, r, 4), _("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new pe(c, 3)), this.setAttribute("normal", new pe(u, 3)), this.setAttribute("uv", new pe(d, 2));
    function _(v, m, h, b, T, S, N, C, P, F, y) {
      const M = S / P, D = N / F, G = S / 2, z = N / 2, W = C / 2, K = P + 1, X = F + 1;
      let tt = 0, V = 0;
      const st = new w();
      for (let ut = 0; ut < X; ut++) {
        const Mt = ut * D - z;
        for (let Ot = 0; Ot < K; Ot++) {
          const ee = Ot * M - G;
          st[v] = ee * b, st[m] = Mt * T, st[h] = W, c.push(st.x, st.y, st.z), st[v] = 0, st[m] = 0, st[h] = C > 0 ? 1 : -1, u.push(st.x, st.y, st.z), d.push(Ot / P), d.push(1 - ut / F), tt += 1;
        }
      }
      for (let ut = 0; ut < F; ut++)
        for (let Mt = 0; Mt < P; Mt++) {
          const Ot = p + Mt + K * ut, ee = p + Mt + K * (ut + 1), q = p + (Mt + 1) + K * (ut + 1), et = p + (Mt + 1) + K * ut;
          l.push(Ot, ee, et), l.push(ee, q, et), V += 6;
        }
      o.addGroup(f, V, y), f += V, p += tt;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Xs(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Ss(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const s = i[e][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = s.clone() : Array.isArray(s) ? t[e][n] = s.slice() : t[e][n] = s;
    }
  }
  return t;
}
function Ie(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = Ss(i[e]);
    for (const s in n)
      t[s] = n[s];
  }
  return t;
}
function Ku(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function Vc(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Xt.workingColorSpace;
}
const Xo = { clone: Ss, merge: Ie };
var $u = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Ju = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class qn extends Ws {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = $u, this.fragmentShader = Ju, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Ss(t.uniforms), this.uniformsGroups = Ku(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? e.uniforms[s] = {
        type: "t",
        value: a.toJSON(t).uuid
      } : a && a.isColor ? e.uniforms[s] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? e.uniforms[s] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? e.uniforms[s] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? e.uniforms[s] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? e.uniforms[s] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? e.uniforms[s] = {
        type: "m4",
        value: a.toArray()
      } : e.uniforms[s] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Wc extends De {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ae(), this.projectionMatrix = new ae(), this.projectionMatrixInverse = new ae(), this.coordinateSystem = kn;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qn = /* @__PURE__ */ new w(), Rl = /* @__PURE__ */ new Dt(), Cl = /* @__PURE__ */ new Dt();
class Qe extends Wc {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(t = 50, e = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Hs * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const t = Math.tan(Is * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return Hs * 2 * Math.atan(
      Math.tan(Is * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(t, e, n) {
    Qn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Qn.x, Qn.y).multiplyScalar(-t / Qn.z), Qn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Qn.x, Qn.y).multiplyScalar(-t / Qn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Rl, Cl), e.subVectors(Cl, Rl);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(t, e, n, s, r, a) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Is * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * s / l, e -= a.offsetY * n / c, s *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Xi = -90, Yi = 1;
class Qu extends De {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Qe(Xi, Yi, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Qe(Xi, Yi, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Qe(Xi, Yi, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Qe(Xi, Yi, t, e);
    o.layers = this.layers, this.add(o);
    const l = new Qe(Xi, Yi, t, e);
    l.layers = this.layers, this.add(l);
    const c = new Qe(Xi, Yi, t, e);
    c.layers = this.layers, this.add(c);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, l] = e;
    for (const c of e) this.remove(c);
    if (t === kn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === Ir)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e)
      this.add(c), c.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, u] = this.children, d = t.getRenderTarget(), p = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, l), t.setRenderTarget(n, 4, s), t.render(e, c), n.texture.generateMipmaps = v, t.setRenderTarget(n, 5, s), t.render(e, u), t.setRenderTarget(d, p, f), t.xr.enabled = _, n.texture.needsPMREMUpdate = !0;
  }
}
class Xc extends He {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(t = [], e = vs, n, s, r, a, o, l, c, u) {
    super(t, e, n, s, r, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class td extends Ri {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new Xc(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : An;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, s = new Xs(5, 5, 5), r = new qn({
      name: "CubemapFromEquirect",
      uniforms: Ss(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: ze,
      blending: ii
    });
    r.uniforms.tEquirect.value = e;
    const a = new fe(s, r), o = e.minFilter;
    return e.minFilter === yi && (e.minFilter = An), new Qu(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(t, e = !0, n = !0, s = !0) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, s);
    t.setRenderTarget(r);
  }
}
class Ps extends De {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const ed = { type: "move" };
class Ma {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new Ps(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ps(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new w(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new w()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new Ps(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new w(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new w()), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(t, e, n) {
    let s = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = !0;
        for (const v of t.hand.values()) {
          const m = e.getJointPose(v, n), h = this._getHandJoint(c, v);
          m !== null && (h.matrix.fromArray(m.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = m.radius), h.visible = m !== null;
        }
        const u = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], p = u.position.distanceTo(d.position), f = 0.02, _ = 5e-3;
        c.inputState.pinching && p > f + _ ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && p <= f - _ && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1, s.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(ed)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRHandJoint} inputjoint - The XR frame.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new Ps();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class nd extends De {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Yn(), this.environmentIntensity = 1, this.environmentRotation = new Yn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class id {
  /**
   * Constructs a new interleaved buffer.
   *
   * @param {TypedArray} array - A typed array with a shared buffer storing attribute data.
   * @param {number} stride - The number of typed-array elements per vertex.
   */
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = bo, this.updateRanges = [], this.version = 0, this.uuid = Vn();
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute array
   * data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  /**
   * Sets the usage of this interleaved buffer.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {InterleavedBuffer} A reference to this interleaved buffer.
   */
  setUsage(t) {
    return this.usage = t, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given interleaved buffer to this instance.
   *
   * @param {InterleavedBuffer} source - The interleaved buffer to copy.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  /**
   * Copies a vector from the given interleaved buffer to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this interleaved buffer.
   * @param {InterleavedBuffer} interleavedBuffer - The interleaved buffer to copy from.
   * @param {number} index2 - The source index into the given interleaved buffer.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let s = 0, r = this.stride; s < r; s++)
      this.array[t + s] = e.array[n + s];
    return this;
  }
  /**
   * Sets the given array data in the interleaved buffer.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this interleaved buffer's array.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  /**
   * Returns a new interleaved buffer with copied values from this instance.
   *
   * @param {Object} [data] - An object with shared array buffers that allows to retain shared structures.
   * @return {InterleavedBuffer} A clone of this instance.
   */
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the array data to the GPU. Can be used to perform clean-up operations after
   * the upload when data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  /**
   * Serializes the interleaved buffer into JSON.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized interleaved buffer.
   */
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Ue = /* @__PURE__ */ new w();
class ei {
  /**
   * Constructs a new interleaved buffer attribute.
   *
   * @param {InterleavedBuffer} interleavedBuffer - The buffer holding the interleaved data.
   * @param {number} itemSize - The item size.
   * @param {number} offset - The attribute offset into the buffer.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(t, e, n, s = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = s;
  }
  /**
   * The item count of this buffer attribute.
   *
   * @type {number}
   * @readonly
   */
  get count() {
    return this.data.count;
  }
  /**
   * The array holding the interleaved buffer attribute data.
   *
   * @type {TypedArray}
   */
  get array() {
    return this.data.array;
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Ue.fromBufferAttribute(this, e), Ue.applyMatrix4(t), this.setXYZ(e, Ue.x, Ue.y, Ue.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Ue.fromBufferAttribute(this, e), Ue.applyNormalMatrix(t), this.setXYZ(e, Ue.x, Ue.y, Ue.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Ue.fromBufferAttribute(this, e), Ue.transformDirection(t), this.setXYZ(e, Ue.x, Ue.y, Ue.z);
    return this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = pn(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setComponent(t, e, n) {
    return this.normalized && (n = $t(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setX(t, e) {
    return this.normalized && (e = $t(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setY(t, e) {
    return this.normalized && (e = $t(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setZ(t, e) {
    return this.normalized && (e = $t(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setW(t, e) {
    return this.normalized && (e = $t(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = pn(e, this.array)), e;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = pn(e, this.array)), e;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = pn(e, this.array)), e;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = pn(e, this.array)), e;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = $t(e, this.array), n = $t(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZ(t, e, n, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = $t(e, this.array), n = $t(n, this.array), s = $t(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = s, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZW(t, e, n, s, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = $t(e, this.array), n = $t(n, this.array), s = $t(s, this.array), r = $t(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = s, this.data.array[t + 3] = r, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An object with interleaved buffers that allows to retain the interleaved property.
   * @return {BufferAttribute|InterleavedBufferAttribute} A clone of this instance.
   */
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[s + r]);
      }
      return new vn(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ei(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[s + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const Sa = /* @__PURE__ */ new w(), sd = /* @__PURE__ */ new w(), rd = /* @__PURE__ */ new Ut();
let In = class {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(t = new w(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(t, e, n, s) {
    return this.normal.set(t, e, n), this.constant = s, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(t, e, n) {
    const s = Sa.subVectors(n, e).cross(sd.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectLine(t, e) {
    const n = t.delta(Sa), s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(t, e) {
    const n = e || rd.getNormalMatrix(t), s = this.coplanarPoint(Sa).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
};
const pi = /* @__PURE__ */ new Li(), fr = /* @__PURE__ */ new w();
class Yc {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(t = new In(), e = new In(), n = new In(), s = new In(), r = new In(), a = new In()) {
    this.planes = [t, e, n, s, r, a];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(t, e, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(t, e = kn) {
    const n = this.planes, s = t.elements, r = s[0], a = s[1], o = s[2], l = s[3], c = s[4], u = s[5], d = s[6], p = s[7], f = s[8], _ = s[9], v = s[10], m = s[11], h = s[12], b = s[13], T = s[14], S = s[15];
    if (n[0].setComponents(l - r, p - c, m - f, S - h).normalize(), n[1].setComponents(l + r, p + c, m + f, S + h).normalize(), n[2].setComponents(l + a, p + u, m + _, S + b).normalize(), n[3].setComponents(l - a, p - u, m - _, S - b).normalize(), n[4].setComponents(l - o, p - d, m - v, S - T).normalize(), e === kn)
      n[5].setComponents(l + o, p + d, m + v, S + T).normalize();
    else if (e === Ir)
      n[5].setComponents(o, d, v, T).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(pi);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(t) {
    return pi.center.set(0, 0, 0), pi.radius = 0.7071067811865476, pi.applyMatrix4(t.matrixWorld), this.intersectsSphere(pi);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(t) {
    const e = this.planes, n = t.center, s = -t.radius;
    for (let r = 0; r < 6; r++)
      if (e[r].distanceToPoint(n) < s)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = e[n];
      if (fr.x = s.normal.x > 0 ? t.max.x : t.min.x, fr.y = s.normal.y > 0 ? t.max.y : t.min.y, fr.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(fr) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Yo extends Ws {
  /**
   * Constructs a new line basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new qt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Fr = /* @__PURE__ */ new w(), Or = /* @__PURE__ */ new w(), Pl = /* @__PURE__ */ new ae(), Cs = /* @__PURE__ */ new Wo(), pr = /* @__PURE__ */ new Li(), ya = /* @__PURE__ */ new w(), Dl = /* @__PURE__ */ new w();
let qc = class extends De {
  /**
   * Constructs a new line.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(t = new Ge(), e = new Yo()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {Line} A reference to this line.
   */
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let s = 1, r = e.count; s < r; s++)
        Fr.fromBufferAttribute(e, s - 1), Or.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += Fr.distanceTo(Or);
      t.setAttribute("lineDistance", new pe(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), pr.copy(n.boundingSphere), pr.applyMatrix4(s), pr.radius += r, t.ray.intersectsSphere(pr) === !1) return;
    Pl.copy(s).invert(), Cs.copy(t.ray).applyMatrix4(Pl);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, p = n.attributes.position;
    if (u !== null) {
      const f = Math.max(0, a.start), _ = Math.min(u.count, a.start + a.count);
      for (let v = f, m = _ - 1; v < m; v += c) {
        const h = u.getX(v), b = u.getX(v + 1), T = mr(this, t, Cs, l, h, b, v);
        T && e.push(T);
      }
      if (this.isLineLoop) {
        const v = u.getX(_ - 1), m = u.getX(f), h = mr(this, t, Cs, l, v, m, _ - 1);
        h && e.push(h);
      }
    } else {
      const f = Math.max(0, a.start), _ = Math.min(p.count, a.start + a.count);
      for (let v = f, m = _ - 1; v < m; v += c) {
        const h = mr(this, t, Cs, l, v, v + 1, v);
        h && e.push(h);
      }
      if (this.isLineLoop) {
        const v = mr(this, t, Cs, l, _ - 1, f, _ - 1);
        v && e.push(v);
      }
    }
  }
  /**
   * Sets the values of {@link Line#morphTargetDictionary} and {@link Line#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
};
function mr(i, t, e, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (Fr.fromBufferAttribute(o, s), Or.fromBufferAttribute(o, r), e.distanceSqToSegment(Fr, Or, ya, Dl) > n) return;
  ya.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(ya);
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Dl.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const Ll = /* @__PURE__ */ new w(), Ul = /* @__PURE__ */ new w();
class ad extends qc {
  /**
   * Constructs a new line segments.
   *
   * @param {BufferGeometry} [geometry] - The line geometry.
   * @param {Material|Array<Material>} [material] - The line material.
   */
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let s = 0, r = e.count; s < r; s += 2)
        Ll.fromBufferAttribute(e, s), Ul.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + Ll.distanceTo(Ul);
      t.setAttribute("lineDistance", new pe(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class jc extends He {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   */
  constructor(t, e, n = wi, s, r, a, o = gn, l = gn, c, u = Bs) {
    if (u !== Bs && u !== zs)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super(null, s, r, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new Vo(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class od {
  /**
   * Constructs a new curve.
   */
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definition)
   * for the given interpolation factor.
   *
   * @abstract
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
  }
  /**
   * This method returns a vector in 2D or 3D space (depending on the curve definition)
   * for the given interpolation factor. Unlike {@link Curve#getPoint}, this method honors the length
   * of the curve which equidistant samples.
   *
   * @param {number} u - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The position on the curve. It can be a 2D or 3D vector depending on the curve definition.
   */
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  /**
   * This method samples the curve via {@link Curve#getPoint} and returns an array of points representing
   * the curve shape.
   *
   * @param {number} [divisions=5] - The number of divisions.
   * @return {Array<(Vector2|Vector3)>} An array holding the sampled curve values. The number of points is `divisions + 1`.
   */
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  /**
   * This method samples the curve via {@link Curve#getPointAt} and returns an array of points representing
   * the curve shape. Unlike {@link Curve#getPoints}, this method returns equi-spaced points across the entire
   * curve.
   *
   * @param {number} [divisions=5] - The number of divisions.
   * @return {Array<(Vector2|Vector3)>} An array holding the sampled curve values. The number of points is `divisions + 1`.
   */
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  /**
   * Returns the total arc length of the curve.
   *
   * @return {number} The length of the curve.
   */
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  /**
   * Returns an array of cumulative segment lengths of the curve.
   *
   * @param {number} [divisions=this.arcLengthDivisions] - The number of divisions.
   * @return {Array<number>} An array holding the cumulative segment lengths.
   */
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n, s = this.getPoint(0), r = 0;
    e.push(0);
    for (let a = 1; a <= t; a++)
      n = this.getPoint(a / t), r += n.distanceTo(s), e.push(r), s = n;
    return this.cacheArcLengths = e, e;
  }
  /**
   * Update the cumulative segment distance cache. The method must be called
   * every time curve parameters are changed. If an updated curve is part of a
   * composed curve like {@link CurvePath}, this method must be called on the
   * composed curve, too.
   */
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  /**
   * Given an interpolation factor in the range `[0,1]`, this method returns an updated
   * interpolation factor in the same range that can be ued to sample equidistant points
   * from a curve.
   *
   * @param {number} u - The interpolation factor.
   * @param {?number} distance - An optional distance on the curve.
   * @return {number} The updated interpolation factor.
   */
  getUtoTmapping(t, e = null) {
    const n = this.getLengths();
    let s = 0;
    const r = n.length;
    let a;
    e ? a = e : a = t * n[r - 1];
    let o = 0, l = r - 1, c;
    for (; o <= l; )
      if (s = Math.floor(o + (l - o) / 2), c = n[s] - a, c < 0)
        o = s + 1;
      else if (c > 0)
        l = s - 1;
      else {
        l = s;
        break;
      }
    if (s = l, n[s] === a)
      return s / (r - 1);
    const u = n[s], p = n[s + 1] - u, f = (a - u) / p;
    return (s + f) / (r - 1);
  }
  /**
   * Returns a unit vector tangent for the given interpolation factor.
   * If the derived curve does not implement its tangent derivation,
   * two points a small delta apart will be used to find its gradient
   * which seems to give a reasonable approximation.
   *
   * @param {number} t - The interpolation factor.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The tangent vector.
   */
  getTangent(t, e) {
    let s = t - 1e-4, r = t + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const a = this.getPoint(s), o = this.getPoint(r), l = e || (a.isVector2 ? new Dt() : new w());
    return l.copy(o).sub(a).normalize(), l;
  }
  /**
   * Same as {@link Curve#getTangent} but with equidistant samples.
   *
   * @param {number} u - The interpolation factor.
   * @param {(Vector2|Vector3)} [optionalTarget] - The optional target vector the result is written to.
   * @return {(Vector2|Vector3)} The tangent vector.
   * @see {@link Curve#getPointAt}
   */
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  /**
   * Generates the Frenet Frames. Requires a curve definition in 3D space. Used
   * in geometries like {@link TubeGeometry} or {@link ExtrudeGeometry}.
   *
   * @param {number} segments - The number of segments.
   * @param {boolean} [closed=false] - Whether the curve is closed or not.
   * @return {{tangents: Array<Vector3>, normals: Array<Vector3>, binormals: Array<Vector3>}} The Frenet Frames.
   */
  computeFrenetFrames(t, e = !1) {
    const n = new w(), s = [], r = [], a = [], o = new w(), l = new ae();
    for (let f = 0; f <= t; f++) {
      const _ = f / t;
      s[f] = this.getTangentAt(_, new w());
    }
    r[0] = new w(), a[0] = new w();
    let c = Number.MAX_VALUE;
    const u = Math.abs(s[0].x), d = Math.abs(s[0].y), p = Math.abs(s[0].z);
    u <= c && (c = u, n.set(1, 0, 0)), d <= c && (c = d, n.set(0, 1, 0)), p <= c && n.set(0, 0, 1), o.crossVectors(s[0], n).normalize(), r[0].crossVectors(s[0], o), a[0].crossVectors(s[0], r[0]);
    for (let f = 1; f <= t; f++) {
      if (r[f] = r[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(s[f - 1], s[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const _ = Math.acos(It(s[f - 1].dot(s[f]), -1, 1));
        r[f].applyMatrix4(l.makeRotationAxis(o, _));
      }
      a[f].crossVectors(s[f], r[f]);
    }
    if (e === !0) {
      let f = Math.acos(It(r[0].dot(r[t]), -1, 1));
      f /= t, s[0].dot(o.crossVectors(r[0], r[t])) > 0 && (f = -f);
      for (let _ = 1; _ <= t; _++)
        r[_].applyMatrix4(l.makeRotationAxis(s[_], f * _)), a[_].crossVectors(s[_], r[_]);
    }
    return {
      tangents: s,
      normals: r,
      binormals: a
    };
  }
  /**
   * Returns a new curve with copied values from this instance.
   *
   * @return {Curve} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given curve to this instance.
   *
   * @param {Curve} source - The curve to copy.
   * @return {Curve} A reference to this curve.
   */
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  /**
   * Serializes the curve into JSON.
   *
   * @return {Object} A JSON object representing the serialized curve.
   * @see {@link ObjectLoader#parse}
   */
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  /**
   * Deserializes the curve from the given JSON.
   *
   * @param {Object} json - The JSON holding the serialized curve.
   * @return {Curve} A reference to this curve.
   */
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class ld extends od {
  /**
   * Constructs a new ellipse curve.
   *
   * @param {number} [aX=0] - The X center of the ellipse.
   * @param {number} [aY=0] - The Y center of the ellipse.
   * @param {number} [xRadius=1] - The radius of the ellipse in the x direction.
   * @param {number} [yRadius=1] - The radius of the ellipse in the y direction.
   * @param {number} [aStartAngle=0] - The start angle of the curve in radians starting from the positive X axis.
   * @param {number} [aEndAngle=Math.PI*2] - The end angle of the curve in radians starting from the positive X axis.
   * @param {boolean} [aClockwise=false] - Whether the ellipse is drawn clockwise or not.
   * @param {number} [aRotation=0] - The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.
   */
  constructor(t = 0, e = 0, n = 1, s = 1, r = 0, a = Math.PI * 2, o = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  /**
   * Returns a point on the curve.
   *
   * @param {number} t - A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.
   * @param {Vector2} [optionalTarget] - The optional target vector the result is written to.
   * @return {Vector2} The position on the curve.
   */
  getPoint(t, e = new Dt()) {
    const n = e, s = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += s;
    for (; r > s; ) r -= s;
    r < Number.EPSILON && (a ? r = 0 : r = s), this.aClockwise === !0 && !a && (r === s ? r = -s : r = r - s);
    const o = this.aStartAngle + t * r;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation), d = Math.sin(this.aRotation), p = l - this.aX, f = c - this.aY;
      l = p * u - f * d + this.aX, c = p * d + f * u + this.aY;
    }
    return n.set(l, c);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Yr extends Ge {
  /**
   * Constructs a new cylinder geometry.
   *
   * @param {number} [radiusTop=1] - Radius of the cylinder at the top.
   * @param {number} [radiusBottom=1] - Radius of the cylinder at the bottom.
   * @param {number} [height=1] - Height of the cylinder.
   * @param {number} [radialSegments=32] - Number of segmented faces around the circumference of the cylinder.
   * @param {number} [heightSegments=1] - Number of rows of faces along the height of the cylinder.
   * @param {boolean} [openEnded=false] - Whether the base of the cylinder is open or capped.
   * @param {number} [thetaStart=0] - Start angle for first segment, in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta, of the circular sector, in radians.
   * The default value results in a complete cylinder.
   */
  constructor(t = 1, e = 1, n = 1, s = 32, r = 1, a = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: s,
      heightSegments: r,
      openEnded: a,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const u = [], d = [], p = [], f = [];
    let _ = 0;
    const v = [], m = n / 2;
    let h = 0;
    b(), a === !1 && (t > 0 && T(!0), e > 0 && T(!1)), this.setIndex(u), this.setAttribute("position", new pe(d, 3)), this.setAttribute("normal", new pe(p, 3)), this.setAttribute("uv", new pe(f, 2));
    function b() {
      const S = new w(), N = new w();
      let C = 0;
      const P = (e - t) / n;
      for (let F = 0; F <= r; F++) {
        const y = [], M = F / r, D = M * (e - t) + t;
        for (let G = 0; G <= s; G++) {
          const z = G / s, W = z * l + o, K = Math.sin(W), X = Math.cos(W);
          N.x = D * K, N.y = -M * n + m, N.z = D * X, d.push(N.x, N.y, N.z), S.set(K, P, X).normalize(), p.push(S.x, S.y, S.z), f.push(z, 1 - M), y.push(_++);
        }
        v.push(y);
      }
      for (let F = 0; F < s; F++)
        for (let y = 0; y < r; y++) {
          const M = v[y][F], D = v[y + 1][F], G = v[y + 1][F + 1], z = v[y][F + 1];
          (t > 0 || y !== 0) && (u.push(M, D, z), C += 3), (e > 0 || y !== r - 1) && (u.push(D, G, z), C += 3);
        }
      c.addGroup(h, C, 0), h += C;
    }
    function T(S) {
      const N = _, C = new Dt(), P = new w();
      let F = 0;
      const y = S === !0 ? t : e, M = S === !0 ? 1 : -1;
      for (let G = 1; G <= s; G++)
        d.push(0, m * M, 0), p.push(0, M, 0), f.push(0.5, 0.5), _++;
      const D = _;
      for (let G = 0; G <= s; G++) {
        const W = G / s * l + o, K = Math.cos(W), X = Math.sin(W);
        P.x = y * X, P.y = m * M, P.z = y * K, d.push(P.x, P.y, P.z), p.push(0, M, 0), C.x = K * 0.5 + 0.5, C.y = X * 0.5 * M + 0.5, f.push(C.x, C.y), _++;
      }
      for (let G = 0; G < s; G++) {
        const z = N + G, W = D + G;
        S === !0 ? u.push(W, W + 1, z) : u.push(W + 1, W, z), F += 3;
      }
      c.addGroup(h, F, S === !0 ? 1 : 2), h += F;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {CylinderGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Yr(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class qr extends Yr {
  /**
   * Constructs a new cone geometry.
   *
   * @param {number} [radius=1] - Radius of the cone base.
   * @param {number} [height=1] - Height of the cone.
   * @param {number} [radialSegments=32] - Number of segmented faces around the circumference of the cone.
   * @param {number} [heightSegments=1] - Number of rows of faces along the height of the cone.
   * @param {boolean} [openEnded=false] - Whether the base of the cone is open or capped.
   * @param {number} [thetaStart=0] - Start angle for first segment, in radians.
   * @param {number} [thetaLength=Math.PI*2] - The central angle, often called theta, of the circular sector, in radians.
   * The default value results in a complete cone.
   */
  constructor(t = 1, e = 1, n = 32, s = 1, r = !1, a = 0, o = Math.PI * 2) {
    super(0, t, e, n, s, r, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: n,
      heightSegments: s,
      openEnded: r,
      thetaStart: a,
      thetaLength: o
    };
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {ConeGeometry} A new instance.
   */
  static fromJSON(t) {
    return new qr(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class Ys extends Ge {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(t = 1, e = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: s
    };
    const r = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(s), c = o + 1, u = l + 1, d = t / o, p = e / l, f = [], _ = [], v = [], m = [];
    for (let h = 0; h < u; h++) {
      const b = h * p - a;
      for (let T = 0; T < c; T++) {
        const S = T * d - r;
        _.push(S, -b, 0), v.push(0, 0, 1), m.push(T / o), m.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let b = 0; b < o; b++) {
        const T = b + c * h, S = b + c * (h + 1), N = b + 1 + c * (h + 1), C = b + 1 + c * h;
        f.push(T, S, C), f.push(S, N, C);
      }
    this.setIndex(f), this.setAttribute("position", new pe(_, 3)), this.setAttribute("normal", new pe(v, 3)), this.setAttribute("uv", new pe(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(t) {
    return new Ys(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class jr extends Ge {
  /**
   * Constructs a new sphere geometry.
   *
   * @param {number} [radius=1] - The sphere radius.
   * @param {number} [widthSegments=32] - The number of horizontal segments. Minimum value is `3`.
   * @param {number} [heightSegments=16] - The number of vertical segments. Minimum value is `2`.
   * @param {number} [phiStart=0] - The horizontal starting angle in radians.
   * @param {number} [phiLength=Math.PI*2] - The horizontal sweep angle size.
   * @param {number} [thetaStart=0] - The vertical starting angle in radians.
   * @param {number} [thetaLength=Math.PI] - The vertical sweep angle size.
   */
  constructor(t = 1, e = 32, n = 16, s = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: s,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const u = [], d = new w(), p = new w(), f = [], _ = [], v = [], m = [];
    for (let h = 0; h <= n; h++) {
      const b = [], T = h / n;
      let S = 0;
      h === 0 && a === 0 ? S = 0.5 / e : h === n && l === Math.PI && (S = -0.5 / e);
      for (let N = 0; N <= e; N++) {
        const C = N / e;
        d.x = -t * Math.cos(s + C * r) * Math.sin(a + T * o), d.y = t * Math.cos(a + T * o), d.z = t * Math.sin(s + C * r) * Math.sin(a + T * o), _.push(d.x, d.y, d.z), p.copy(d).normalize(), v.push(p.x, p.y, p.z), m.push(C + S, 1 - T), b.push(c++);
      }
      u.push(b);
    }
    for (let h = 0; h < n; h++)
      for (let b = 0; b < e; b++) {
        const T = u[h][b + 1], S = u[h][b], N = u[h + 1][b], C = u[h + 1][b + 1];
        (h !== 0 || a > 0) && f.push(T, S, C), (h !== n - 1 || l < Math.PI) && f.push(S, N, C);
      }
    this.setIndex(f), this.setAttribute("position", new pe(_, 3)), this.setAttribute("normal", new pe(v, 3)), this.setAttribute("uv", new pe(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {SphereGeometry} A new instance.
   */
  static fromJSON(t) {
    return new jr(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class cd extends Ge {
  /**
   * Constructs a new wireframe geometry.
   *
   * @param {?BufferGeometry} [geometry=null] - The geometry.
   */
  constructor(t = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: t
    }, t !== null) {
      const e = [], n = /* @__PURE__ */ new Set(), s = new w(), r = new w();
      if (t.index !== null) {
        const a = t.attributes.position, o = t.index;
        let l = t.groups;
        l.length === 0 && (l = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let c = 0, u = l.length; c < u; ++c) {
          const d = l[c], p = d.start, f = d.count;
          for (let _ = p, v = p + f; _ < v; _ += 3)
            for (let m = 0; m < 3; m++) {
              const h = o.getX(_ + m), b = o.getX(_ + (m + 1) % 3);
              s.fromBufferAttribute(a, h), r.fromBufferAttribute(a, b), Il(s, r, n) === !0 && (e.push(s.x, s.y, s.z), e.push(r.x, r.y, r.z));
            }
        }
      } else {
        const a = t.attributes.position;
        for (let o = 0, l = a.count / 3; o < l; o++)
          for (let c = 0; c < 3; c++) {
            const u = 3 * o + c, d = 3 * o + (c + 1) % 3;
            s.fromBufferAttribute(a, u), r.fromBufferAttribute(a, d), Il(s, r, n) === !0 && (e.push(s.x, s.y, s.z), e.push(r.x, r.y, r.z));
          }
      }
      this.setAttribute("position", new pe(e, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
function Il(i, t, e) {
  const n = `${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`, s = `${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;
  return e.has(n) === !0 || e.has(s) === !0 ? !1 : (e.add(n), e.add(s), !0);
}
class hd extends Ws {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = nu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class ud extends Ws {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
class dd extends Wc {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(t = -1, e = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(t, e, n, s, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - t, a = n + t, o = s + e, l = s - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class fd extends Ge {
  /**
   * Constructs a new instanced buffer geometry.
   */
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(t) {
    return super.copy(t), this.instanceCount = t.instanceCount, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
  }
}
class pd extends Qe {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t, this.index = 0;
  }
}
class Ao extends id {
  /**
   * Constructs a new instanced interleaved buffer.
   *
   * @param {TypedArray} array - A typed array with a shared buffer storing attribute data.
   * @param {number} stride - The number of typed-array elements per vertex.
   * @param {number} [meshPerAttribute=1] - Defines how often a value of this interleaved buffer should be repeated.
   */
  constructor(t, e, n = 1) {
    super(t, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  clone(t) {
    const e = super.clone(t);
    return e.meshPerAttribute = this.meshPerAttribute, e;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
  }
}
class Nl {
  /**
   * Constructs a new spherical.
   *
   * @param {number} [radius=1] - The radius, or the Euclidean distance (straight-line distance) from the point to the origin.
   * @param {number} [phi=0] - The polar angle in radians from the y (up) axis.
   * @param {number} [theta=0] - The equator/azimuthal angle in radians around the y (up) axis.
   */
  constructor(t = 1, e = 0, n = 0) {
    this.radius = t, this.phi = e, this.theta = n;
  }
  /**
   * Sets the spherical components by copying the given values.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The polar angle.
   * @param {number} theta - The azimuthal angle.
   * @return {Spherical} A reference to this spherical.
   */
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  /**
   * Copies the values of the given spherical to this instance.
   *
   * @param {Spherical} other - The spherical to copy.
   * @return {Spherical} A reference to this spherical.
   */
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  /**
   * Restricts the polar angle [page:.phi phi] to be between `0.000001` and pi -
   * `0.000001`.
   *
   * @return {Spherical} A reference to this spherical.
   */
  makeSafe() {
    return this.phi = It(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  /**
   * Sets the spherical components from the given vector which is assumed to hold
   * Cartesian coordinates.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Spherical} A reference to this spherical.
   */
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  /**
   * Sets the spherical components from the given Cartesian coordinates.
   *
   * @param {number} x - The x value.
   * @param {number} y - The x value.
   * @param {number} z - The x value.
   * @return {Spherical} A reference to this spherical.
   */
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(It(e / this.radius, -1, 1))), this;
  }
  /**
   * Returns a new spherical with copied values from this instance.
   *
   * @return {Spherical} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const Fl = /* @__PURE__ */ new w(), _r = /* @__PURE__ */ new w();
class qo {
  /**
   * Constructs a new line segment.
   *
   * @param {Vector3} [start=(0,0,0)] - Start of the line segment.
   * @param {Vector3} [end=(0,0,0)] - End of the line segment.
   */
  constructor(t = new w(), e = new w()) {
    this.start = t, this.end = e;
  }
  /**
   * Sets the start and end values by copying the given vectors.
   *
   * @param {Vector3} start - The start point.
   * @param {Vector3} end - The end point.
   * @return {Line3} A reference to this line segment.
   */
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this;
  }
  /**
   * Copies the values of the given line segment to this instance.
   *
   * @param {Line3} line - The line segment to copy.
   * @return {Line3} A reference to this line segment.
   */
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this;
  }
  /**
   * Returns the center of the line segment.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  /**
   * Returns the delta vector of the line segment's start and end point.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The delta vector.
   */
  delta(t) {
    return t.subVectors(this.end, this.start);
  }
  /**
   * Returns the squared Euclidean distance between the line' start and end point.
   *
   * @return {number} The squared Euclidean distance.
   */
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  /**
   * Returns the Euclidean distance between the line' start and end point.
   *
   * @return {number} The Euclidean distance.
   */
  distance() {
    return this.start.distanceTo(this.end);
  }
  /**
   * Returns a vector at a certain position along the line segment.
   *
   * @param {number} t - A value between `[0,1]` to represent a position along the line segment.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The delta vector.
   */
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start);
  }
  /**
   * Returns a point parameter based on the closest point as projected on the line segment.
   *
   * @param {Vector3} point - The point for which to return a point parameter.
   * @param {boolean} clampToLine - Whether to clamp the result to the range `[0,1]` or not.
   * @return {number} The point parameter.
   */
  closestPointToPointParameter(t, e) {
    Fl.subVectors(t, this.start), _r.subVectors(this.end, this.start);
    const n = _r.dot(_r);
    let r = _r.dot(Fl) / n;
    return e && (r = It(r, 0, 1)), r;
  }
  /**
   * Returns the closets point on the line for a given point.
   *
   * @param {Vector3} point - The point to compute the closest point on the line for.
   * @param {boolean} clampToLine - Whether to clamp the result to the range `[0,1]` or not.
   * @param {Vector3} target -  The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the line.
   */
  closestPointToPoint(t, e, n) {
    const s = this.closestPointToPointParameter(t, e);
    return this.delta(n).multiplyScalar(s).add(this.start);
  }
  /**
   * Applies a 4x4 transformation matrix to this line segment.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Line3} A reference to this line segment.
   */
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
  }
  /**
   * Returns `true` if this line segment is equal with the given one.
   *
   * @param {Line3} line - The line segment to test for equality.
   * @return {boolean} Whether this line segment is equal with the given one.
   */
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end);
  }
  /**
   * Returns a new line segment with copied values from this instance.
   *
   * @return {Line3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ea extends ad {
  /**
   * Constructs a new grid helper.
   *
   * @param {number} [size=10] - The size of the grid.
   * @param {number} [divisions=10] - The number of divisions across the grid.
   * @param {number|Color|string} [color1=0x444444] - The color of the center line.
   * @param {number|Color|string} [color2=0x888888] - The color of the lines of the grid.
   */
  constructor(t = 10, e = 10, n = 4473924, s = 8947848) {
    n = new qt(n), s = new qt(s);
    const r = e / 2, a = t / e, o = t / 2, l = [], c = [];
    for (let p = 0, f = 0, _ = -o; p <= e; p++, _ += a) {
      l.push(-o, 0, _, o, 0, _), l.push(_, 0, -o, _, 0, o);
      const v = p === r ? n : s;
      v.toArray(c, f), f += 3, v.toArray(c, f), f += 3, v.toArray(c, f), f += 3, v.toArray(c, f), f += 3;
    }
    const u = new Ge();
    u.setAttribute("position", new pe(l, 3)), u.setAttribute("color", new pe(c, 3));
    const d = new Yo({ vertexColors: !0, toneMapped: !1 });
    super(u, d), this.type = "GridHelper";
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const Ol = /* @__PURE__ */ new w();
let gr, Ta;
class ba extends De {
  /**
   * Constructs a new arrow helper.
   *
   * @param {Vector3} [dir=(0, 0, 1)] - The (normalized) direction vector.
   * @param {Vector3} [origin=(0, 0, 0)] - Point at which the arrow starts.
   * @param {number} [length=1] - Length of the arrow in world units.
   * @param {(number|Color|string)} [color=0xffff00] - Color of the arrow.
   * @param {number} [headLength=length*0.2] - The length of the head of the arrow.
   * @param {number} [headWidth=headLength*0.2] - The width of the head of the arrow.
   */
  constructor(t = new w(0, 0, 1), e = new w(0, 0, 0), n = 1, s = 16776960, r = n * 0.2, a = r * 0.2) {
    super(), this.type = "ArrowHelper", gr === void 0 && (gr = new Ge(), gr.setAttribute("position", new pe([0, 0, 0, 0, 1, 0], 3)), Ta = new Yr(0, 0.5, 1, 5, 1), Ta.translate(0, -0.5, 0)), this.position.copy(e), this.line = new qc(gr, new Yo({ color: s, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new fe(Ta, new li({ color: s, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, a);
  }
  /**
   * Sets the direction of the helper.
   *
   * @param {Vector3} dir - The normalized direction vector.
   */
  setDirection(t) {
    if (t.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      Ol.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(Ol, e);
    }
  }
  /**
   * Sets the length of the helper.
   *
   * @param {number} length - Length of the arrow in world units.
   * @param {number} [headLength=length*0.2] - The length of the head of the arrow.
   * @param {number} [headWidth=headLength*0.2] - The width of the head of the arrow.
   */
  setLength(t, e = t * 0.2, n = e * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
  }
  /**
   * Sets the color of the helper.
   *
   * @param {number|Color|string} color - The color to set.
   */
  setColor(t) {
    this.line.material.color.set(t), this.cone.material.color.set(t);
  }
  copy(t) {
    return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   */
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class md extends Di {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  /**
   * Connects the controls to the DOM. This method has so called "side effects" since
   * it adds the module's event listeners to the DOM.
   *
   * @param {HTMLDOMElement} element - The DOM element to connect to.
   */
  connect(t) {
    if (t === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = t;
  }
  /**
   * Disconnects the controls from the DOM.
   */
  disconnect() {
  }
  /**
   * Call this method if you no longer want use to the controls. It frees all internal
   * resources and removes all event listeners.
   */
  dispose() {
  }
  /**
   * Controls should implement this method if they have to update their internal state
   * per simulation step.
   *
   * @param {number} [delta] - The time delta in seconds.
   */
  update() {
  }
}
function Bl(i, t, e, n) {
  const s = _d(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Rc:
      return i * t;
    case Pc:
      return i * t;
    case Dc:
      return i * t * 2;
    case Lc:
      return i * t / s.components * s.byteLength;
    case zo:
      return i * t / s.components * s.byteLength;
    case Uc:
      return i * t * 2 / s.components * s.byteLength;
    case Ho:
      return i * t * 2 / s.components * s.byteLength;
    case Cc:
      return i * t * 3 / s.components * s.byteLength;
    case _n:
      return i * t * 4 / s.components * s.byteLength;
    case Go:
      return i * t * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case Ar:
    case wr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Rr:
    case Cr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Qa:
    case eo:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case Ja:
    case to:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case no:
    case io:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case so:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case ro:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ao:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case oo:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case lo:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case co:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case ho:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case uo:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case fo:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case po:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case mo:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case _o:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case go:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case vo:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case xo:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Pr:
    case Mo:
    case So:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Ic:
    case yo:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case Eo:
    case To:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function _d(i) {
  switch (i) {
    case Xn:
    case bc:
      return { byteLength: 1, components: 1 };
    case Fs:
    case Ac:
    case Vs:
      return { byteLength: 2, components: 1 };
    case Oo:
    case Bo:
      return { byteLength: 2, components: 4 };
    case wi:
    case Fo:
    case Gn:
      return { byteLength: 4, components: 1 };
    case wc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: No
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = No);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function Zc() {
  let i = null, t = !1, e = null, n = null;
  function s(r, a) {
    e(r, a), n = i.requestAnimationFrame(s);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = i.requestAnimationFrame(s), t = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(r) {
      e = r;
    },
    setContext: function(r) {
      i = r;
    }
  };
}
function gd(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, l) {
    const c = o.array, u = o.usage, d = c.byteLength, p = i.createBuffer();
    i.bindBuffer(l, p), i.bufferData(l, c, u), o.onUploadCallback();
    let f;
    if (c instanceof Float32Array)
      f = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = i.HALF_FLOAT : f = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      f = i.SHORT;
    else if (c instanceof Uint32Array)
      f = i.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      f = i.INT;
    else if (c instanceof Int8Array)
      f = i.BYTE;
    else if (c instanceof Uint8Array)
      f = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      f = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: p,
      type: f,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function n(o, l, c) {
    const u = l.array, d = l.updateRanges;
    if (i.bindBuffer(c, o), d.length === 0)
      i.bufferSubData(c, 0, u);
    else {
      d.sort((f, _) => f.start - _.start);
      let p = 0;
      for (let f = 1; f < d.length; f++) {
        const _ = d[p], v = d[f];
        v.start <= _.start + _.count + 1 ? _.count = Math.max(
          _.count,
          v.start + v.count - _.start
        ) : (++p, d[p] = v);
      }
      d.length = p + 1;
      for (let f = 0, _ = d.length; f < _; f++) {
        const v = d[f];
        i.bufferSubData(
          c,
          v.start * u.BYTES_PER_ELEMENT,
          u,
          v.start,
          v.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (i.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = t.get(o);
      (!u || u.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = t.get(o);
    if (c === void 0)
      t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: s,
    remove: r,
    update: a
  };
}
var vd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, xd = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Md = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Sd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ed = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Td = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, bd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ad = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, wd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Rd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Cd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Pd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Dd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Ld = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ud = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Id = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Nd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Fd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Od = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Bd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, zd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Hd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Gd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, kd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Vd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Wd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Xd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Yd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, qd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, jd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Zd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Kd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, $d = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Jd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Qd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, tf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, ef = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, nf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, sf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, rf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, af = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, of = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, lf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, cf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, hf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, uf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, df = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ff = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, pf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, mf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, _f = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, gf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, vf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, xf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Mf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Sf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, yf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Ef = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Tf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, bf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Af = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, wf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Rf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Cf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Pf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Df = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Lf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Uf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, If = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Nf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ff = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Of = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Bf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, zf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Gf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, kf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Vf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Wf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Xf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Yf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, qf = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, jf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Zf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Kf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, $f = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Jf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Qf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, tp = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, ep = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, np = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, ip = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, sp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, rp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ap = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, op = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, lp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, cp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, hp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, up = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, dp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, fp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, pp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, mp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, _p = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, gp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const vp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, xp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Sp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ep = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Tp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, bp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Ap = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, wp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Rp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Cp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Pp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Dp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Lp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Up = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ip = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Np = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Fp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Op = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, zp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Hp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, kp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Vp = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Wp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, qp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, jp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Zp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Kp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, $p = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ft = {
  alphahash_fragment: vd,
  alphahash_pars_fragment: xd,
  alphamap_fragment: Md,
  alphamap_pars_fragment: Sd,
  alphatest_fragment: yd,
  alphatest_pars_fragment: Ed,
  aomap_fragment: Td,
  aomap_pars_fragment: bd,
  batching_pars_vertex: Ad,
  batching_vertex: wd,
  begin_vertex: Rd,
  beginnormal_vertex: Cd,
  bsdfs: Pd,
  iridescence_fragment: Dd,
  bumpmap_pars_fragment: Ld,
  clipping_planes_fragment: Ud,
  clipping_planes_pars_fragment: Id,
  clipping_planes_pars_vertex: Nd,
  clipping_planes_vertex: Fd,
  color_fragment: Od,
  color_pars_fragment: Bd,
  color_pars_vertex: zd,
  color_vertex: Hd,
  common: Gd,
  cube_uv_reflection_fragment: kd,
  defaultnormal_vertex: Vd,
  displacementmap_pars_vertex: Wd,
  displacementmap_vertex: Xd,
  emissivemap_fragment: Yd,
  emissivemap_pars_fragment: qd,
  colorspace_fragment: jd,
  colorspace_pars_fragment: Zd,
  envmap_fragment: Kd,
  envmap_common_pars_fragment: $d,
  envmap_pars_fragment: Jd,
  envmap_pars_vertex: Qd,
  envmap_physical_pars_fragment: uf,
  envmap_vertex: tf,
  fog_vertex: ef,
  fog_pars_vertex: nf,
  fog_fragment: sf,
  fog_pars_fragment: rf,
  gradientmap_pars_fragment: af,
  lightmap_pars_fragment: of,
  lights_lambert_fragment: lf,
  lights_lambert_pars_fragment: cf,
  lights_pars_begin: hf,
  lights_toon_fragment: df,
  lights_toon_pars_fragment: ff,
  lights_phong_fragment: pf,
  lights_phong_pars_fragment: mf,
  lights_physical_fragment: _f,
  lights_physical_pars_fragment: gf,
  lights_fragment_begin: vf,
  lights_fragment_maps: xf,
  lights_fragment_end: Mf,
  logdepthbuf_fragment: Sf,
  logdepthbuf_pars_fragment: yf,
  logdepthbuf_pars_vertex: Ef,
  logdepthbuf_vertex: Tf,
  map_fragment: bf,
  map_pars_fragment: Af,
  map_particle_fragment: wf,
  map_particle_pars_fragment: Rf,
  metalnessmap_fragment: Cf,
  metalnessmap_pars_fragment: Pf,
  morphinstance_vertex: Df,
  morphcolor_vertex: Lf,
  morphnormal_vertex: Uf,
  morphtarget_pars_vertex: If,
  morphtarget_vertex: Nf,
  normal_fragment_begin: Ff,
  normal_fragment_maps: Of,
  normal_pars_fragment: Bf,
  normal_pars_vertex: zf,
  normal_vertex: Hf,
  normalmap_pars_fragment: Gf,
  clearcoat_normal_fragment_begin: kf,
  clearcoat_normal_fragment_maps: Vf,
  clearcoat_pars_fragment: Wf,
  iridescence_pars_fragment: Xf,
  opaque_fragment: Yf,
  packing: qf,
  premultiplied_alpha_fragment: jf,
  project_vertex: Zf,
  dithering_fragment: Kf,
  dithering_pars_fragment: $f,
  roughnessmap_fragment: Jf,
  roughnessmap_pars_fragment: Qf,
  shadowmap_pars_fragment: tp,
  shadowmap_pars_vertex: ep,
  shadowmap_vertex: np,
  shadowmask_pars_fragment: ip,
  skinbase_vertex: sp,
  skinning_pars_vertex: rp,
  skinning_vertex: ap,
  skinnormal_vertex: op,
  specularmap_fragment: lp,
  specularmap_pars_fragment: cp,
  tonemapping_fragment: hp,
  tonemapping_pars_fragment: up,
  transmission_fragment: dp,
  transmission_pars_fragment: fp,
  uv_pars_fragment: pp,
  uv_pars_vertex: mp,
  uv_vertex: _p,
  worldpos_vertex: gp,
  background_vert: vp,
  background_frag: xp,
  backgroundCube_vert: Mp,
  backgroundCube_frag: Sp,
  cube_vert: yp,
  cube_frag: Ep,
  depth_vert: Tp,
  depth_frag: bp,
  distanceRGBA_vert: Ap,
  distanceRGBA_frag: wp,
  equirect_vert: Rp,
  equirect_frag: Cp,
  linedashed_vert: Pp,
  linedashed_frag: Dp,
  meshbasic_vert: Lp,
  meshbasic_frag: Up,
  meshlambert_vert: Ip,
  meshlambert_frag: Np,
  meshmatcap_vert: Fp,
  meshmatcap_frag: Op,
  meshnormal_vert: Bp,
  meshnormal_frag: zp,
  meshphong_vert: Hp,
  meshphong_frag: Gp,
  meshphysical_vert: kp,
  meshphysical_frag: Vp,
  meshtoon_vert: Wp,
  meshtoon_frag: Xp,
  points_vert: Yp,
  points_frag: qp,
  shadow_vert: jp,
  shadow_frag: Zp,
  sprite_vert: Kp,
  sprite_frag: $p
}, nt = {
  common: {
    diffuse: { value: /* @__PURE__ */ new qt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ut() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ut() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ut() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ut() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ut() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ut() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ut() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ut() },
    normalScale: { value: /* @__PURE__ */ new Dt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ut() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ut() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ut() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ut() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new qt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new qt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ut() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ut() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new qt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Dt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ut() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ut() },
    alphaTest: { value: 0 }
  }
}, Be = {
  basic: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.specularmap,
      nt.envmap,
      nt.aomap,
      nt.lightmap,
      nt.fog
    ]),
    vertexShader: Ft.meshbasic_vert,
    fragmentShader: Ft.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.specularmap,
      nt.envmap,
      nt.aomap,
      nt.lightmap,
      nt.emissivemap,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.fog,
      nt.lights,
      {
        emissive: { value: /* @__PURE__ */ new qt(0) }
      }
    ]),
    vertexShader: Ft.meshlambert_vert,
    fragmentShader: Ft.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.specularmap,
      nt.envmap,
      nt.aomap,
      nt.lightmap,
      nt.emissivemap,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.fog,
      nt.lights,
      {
        emissive: { value: /* @__PURE__ */ new qt(0) },
        specular: { value: /* @__PURE__ */ new qt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ft.meshphong_vert,
    fragmentShader: Ft.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.envmap,
      nt.aomap,
      nt.lightmap,
      nt.emissivemap,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.roughnessmap,
      nt.metalnessmap,
      nt.fog,
      nt.lights,
      {
        emissive: { value: /* @__PURE__ */ new qt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ft.meshphysical_vert,
    fragmentShader: Ft.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.aomap,
      nt.lightmap,
      nt.emissivemap,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.gradientmap,
      nt.fog,
      nt.lights,
      {
        emissive: { value: /* @__PURE__ */ new qt(0) }
      }
    ]),
    vertexShader: Ft.meshtoon_vert,
    fragmentShader: Ft.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      nt.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ft.meshmatcap_vert,
    fragmentShader: Ft.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ie([
      nt.points,
      nt.fog
    ]),
    vertexShader: Ft.points_vert,
    fragmentShader: Ft.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ft.linedashed_vert,
    fragmentShader: Ft.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.displacementmap
    ]),
    vertexShader: Ft.depth_vert,
    fragmentShader: Ft.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.bumpmap,
      nt.normalmap,
      nt.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ft.meshnormal_vert,
    fragmentShader: Ft.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ie([
      nt.sprite,
      nt.fog
    ]),
    vertexShader: Ft.sprite_vert,
    fragmentShader: Ft.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ut() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ft.background_vert,
    fragmentShader: Ft.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ut() }
    },
    vertexShader: Ft.backgroundCube_vert,
    fragmentShader: Ft.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ft.cube_vert,
    fragmentShader: Ft.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ft.equirect_vert,
    fragmentShader: Ft.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Ie([
      nt.common,
      nt.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new w() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ft.distanceRGBA_vert,
    fragmentShader: Ft.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ie([
      nt.lights,
      nt.fog,
      {
        color: { value: /* @__PURE__ */ new qt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ft.shadow_vert,
    fragmentShader: Ft.shadow_frag
  }
};
Be.physical = {
  uniforms: /* @__PURE__ */ Ie([
    Be.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ut() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ut() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Dt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ut() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ut() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ut() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new qt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ut() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ut() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ut() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Dt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ut() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new qt(0) },
      specularColor: { value: /* @__PURE__ */ new qt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ut() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ut() },
      anisotropyVector: { value: /* @__PURE__ */ new Dt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ut() }
    }
  ]),
  vertexShader: Ft.meshphysical_vert,
  fragmentShader: Ft.meshphysical_frag
};
const vr = { r: 0, b: 0, g: 0 }, mi = /* @__PURE__ */ new Yn(), Jp = /* @__PURE__ */ new ae();
function Qp(i, t, e, n, s, r, a) {
  const o = new qt(0);
  let l = r === !0 ? 0 : 1, c, u, d = null, p = 0, f = null;
  function _(T) {
    let S = T.isScene === !0 ? T.background : null;
    return S && S.isTexture && (S = (T.backgroundBlurriness > 0 ? e : t).get(S)), S;
  }
  function v(T) {
    let S = !1;
    const N = _(T);
    N === null ? h(o, l) : N && N.isColor && (h(N, 1), S = !0);
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || S) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(T, S) {
    const N = _(S);
    N && (N.isCubeTexture || N.mapping === Xr) ? (u === void 0 && (u = new fe(
      new Xs(1, 1, 1),
      new qn({
        name: "BackgroundCubeMaterial",
        uniforms: Ss(Be.backgroundCube.uniforms),
        vertexShader: Be.backgroundCube.vertexShader,
        fragmentShader: Be.backgroundCube.fragmentShader,
        side: ze,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(C, P, F) {
      this.matrixWorld.copyPosition(F.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(u)), mi.copy(S.backgroundRotation), mi.x *= -1, mi.y *= -1, mi.z *= -1, N.isCubeTexture && N.isRenderTargetTexture === !1 && (mi.y *= -1, mi.z *= -1), u.material.uniforms.envMap.value = N, u.material.uniforms.flipEnvMap.value = N.isCubeTexture && N.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(mi)), u.material.toneMapped = Xt.getTransfer(N.colorSpace) !== Qt, (d !== N || p !== N.version || f !== i.toneMapping) && (u.material.needsUpdate = !0, d = N, p = N.version, f = i.toneMapping), u.layers.enableAll(), T.unshift(u, u.geometry, u.material, 0, 0, null)) : N && N.isTexture && (c === void 0 && (c = new fe(
      new Ys(2, 2),
      new qn({
        name: "BackgroundMaterial",
        uniforms: Ss(Be.background.uniforms),
        vertexShader: Be.background.vertexShader,
        fragmentShader: Be.background.fragmentShader,
        side: ri,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(c)), c.material.uniforms.t2D.value = N, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = Xt.getTransfer(N.colorSpace) !== Qt, N.matrixAutoUpdate === !0 && N.updateMatrix(), c.material.uniforms.uvTransform.value.copy(N.matrix), (d !== N || p !== N.version || f !== i.toneMapping) && (c.material.needsUpdate = !0, d = N, p = N.version, f = i.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(T, S) {
    T.getRGB(vr, Vc(i)), n.buffers.color.setClear(vr.r, vr.g, vr.b, S, a);
  }
  function b() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(T, S = 1) {
      o.set(T), l = S, h(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(T) {
      l = T, h(o, l);
    },
    render: v,
    addToRenderList: m,
    dispose: b
  };
}
function tm(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = p(null);
  let r = s, a = !1;
  function o(M, D, G, z, W) {
    let K = !1;
    const X = d(z, G, D);
    r !== X && (r = X, c(r.object)), K = f(M, z, G, W), K && _(M, z, G, W), W !== null && t.update(W, i.ELEMENT_ARRAY_BUFFER), (K || a) && (a = !1, S(M, D, G, z), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(W).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(M) {
    return i.bindVertexArray(M);
  }
  function u(M) {
    return i.deleteVertexArray(M);
  }
  function d(M, D, G) {
    const z = G.wireframe === !0;
    let W = n[M.id];
    W === void 0 && (W = {}, n[M.id] = W);
    let K = W[D.id];
    K === void 0 && (K = {}, W[D.id] = K);
    let X = K[z];
    return X === void 0 && (X = p(l()), K[z] = X), X;
  }
  function p(M) {
    const D = [], G = [], z = [];
    for (let W = 0; W < e; W++)
      D[W] = 0, G[W] = 0, z[W] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: D,
      enabledAttributes: G,
      attributeDivisors: z,
      object: M,
      attributes: {},
      index: null
    };
  }
  function f(M, D, G, z) {
    const W = r.attributes, K = D.attributes;
    let X = 0;
    const tt = G.getAttributes();
    for (const V in tt)
      if (tt[V].location >= 0) {
        const ut = W[V];
        let Mt = K[V];
        if (Mt === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (Mt = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (Mt = M.instanceColor)), ut === void 0 || ut.attribute !== Mt || Mt && ut.data !== Mt.data) return !0;
        X++;
      }
    return r.attributesNum !== X || r.index !== z;
  }
  function _(M, D, G, z) {
    const W = {}, K = D.attributes;
    let X = 0;
    const tt = G.getAttributes();
    for (const V in tt)
      if (tt[V].location >= 0) {
        let ut = K[V];
        ut === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (ut = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (ut = M.instanceColor));
        const Mt = {};
        Mt.attribute = ut, ut && ut.data && (Mt.data = ut.data), W[V] = Mt, X++;
      }
    r.attributes = W, r.attributesNum = X, r.index = z;
  }
  function v() {
    const M = r.newAttributes;
    for (let D = 0, G = M.length; D < G; D++)
      M[D] = 0;
  }
  function m(M) {
    h(M, 0);
  }
  function h(M, D) {
    const G = r.newAttributes, z = r.enabledAttributes, W = r.attributeDivisors;
    G[M] = 1, z[M] === 0 && (i.enableVertexAttribArray(M), z[M] = 1), W[M] !== D && (i.vertexAttribDivisor(M, D), W[M] = D);
  }
  function b() {
    const M = r.newAttributes, D = r.enabledAttributes;
    for (let G = 0, z = D.length; G < z; G++)
      D[G] !== M[G] && (i.disableVertexAttribArray(G), D[G] = 0);
  }
  function T(M, D, G, z, W, K, X) {
    X === !0 ? i.vertexAttribIPointer(M, D, G, W, K) : i.vertexAttribPointer(M, D, G, z, W, K);
  }
  function S(M, D, G, z) {
    v();
    const W = z.attributes, K = G.getAttributes(), X = D.defaultAttributeValues;
    for (const tt in K) {
      const V = K[tt];
      if (V.location >= 0) {
        let st = W[tt];
        if (st === void 0 && (tt === "instanceMatrix" && M.instanceMatrix && (st = M.instanceMatrix), tt === "instanceColor" && M.instanceColor && (st = M.instanceColor)), st !== void 0) {
          const ut = st.normalized, Mt = st.itemSize, Ot = t.get(st);
          if (Ot === void 0) continue;
          const ee = Ot.buffer, q = Ot.type, et = Ot.bytesPerElement, _t = q === i.INT || q === i.UNSIGNED_INT || st.gpuType === Fo;
          if (st.isInterleavedBufferAttribute) {
            const rt = st.data, bt = rt.stride, Yt = st.offset;
            if (rt.isInstancedInterleavedBuffer) {
              for (let wt = 0; wt < V.locationSize; wt++)
                h(V.location + wt, rt.meshPerAttribute);
              M.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = rt.meshPerAttribute * rt.count);
            } else
              for (let wt = 0; wt < V.locationSize; wt++)
                m(V.location + wt);
            i.bindBuffer(i.ARRAY_BUFFER, ee);
            for (let wt = 0; wt < V.locationSize; wt++)
              T(
                V.location + wt,
                Mt / V.locationSize,
                q,
                ut,
                bt * et,
                (Yt + Mt / V.locationSize * wt) * et,
                _t
              );
          } else {
            if (st.isInstancedBufferAttribute) {
              for (let rt = 0; rt < V.locationSize; rt++)
                h(V.location + rt, st.meshPerAttribute);
              M.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = st.meshPerAttribute * st.count);
            } else
              for (let rt = 0; rt < V.locationSize; rt++)
                m(V.location + rt);
            i.bindBuffer(i.ARRAY_BUFFER, ee);
            for (let rt = 0; rt < V.locationSize; rt++)
              T(
                V.location + rt,
                Mt / V.locationSize,
                q,
                ut,
                Mt * et,
                Mt / V.locationSize * rt * et,
                _t
              );
          }
        } else if (X !== void 0) {
          const ut = X[tt];
          if (ut !== void 0)
            switch (ut.length) {
              case 2:
                i.vertexAttrib2fv(V.location, ut);
                break;
              case 3:
                i.vertexAttrib3fv(V.location, ut);
                break;
              case 4:
                i.vertexAttrib4fv(V.location, ut);
                break;
              default:
                i.vertexAttrib1fv(V.location, ut);
            }
        }
      }
    }
    b();
  }
  function N() {
    F();
    for (const M in n) {
      const D = n[M];
      for (const G in D) {
        const z = D[G];
        for (const W in z)
          u(z[W].object), delete z[W];
        delete D[G];
      }
      delete n[M];
    }
  }
  function C(M) {
    if (n[M.id] === void 0) return;
    const D = n[M.id];
    for (const G in D) {
      const z = D[G];
      for (const W in z)
        u(z[W].object), delete z[W];
      delete D[G];
    }
    delete n[M.id];
  }
  function P(M) {
    for (const D in n) {
      const G = n[D];
      if (G[M.id] === void 0) continue;
      const z = G[M.id];
      for (const W in z)
        u(z[W].object), delete z[W];
      delete G[M.id];
    }
  }
  function F() {
    y(), a = !0, r !== s && (r = s, c(r.object));
  }
  function y() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: o,
    reset: F,
    resetDefaultState: y,
    dispose: N,
    releaseStatesOfGeometry: C,
    releaseStatesOfProgram: P,
    initAttributes: v,
    enableAttribute: m,
    disableUnusedAttributes: b
  };
}
function em(i, t, e) {
  let n;
  function s(c) {
    n = c;
  }
  function r(c, u) {
    i.drawArrays(n, c, u), e.update(u, n, 1);
  }
  function a(c, u, d) {
    d !== 0 && (i.drawArraysInstanced(n, c, u, d), e.update(u, n, d));
  }
  function o(c, u, d) {
    if (d === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, d);
    let f = 0;
    for (let _ = 0; _ < d; _++)
      f += u[_];
    e.update(f, n, 1);
  }
  function l(c, u, d, p) {
    if (d === 0) return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null)
      for (let _ = 0; _ < c.length; _++)
        a(c[_], u[_], p[_]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, p, 0, d);
      let _ = 0;
      for (let v = 0; v < d; v++)
        _ += u[v] * p[v];
      e.update(_, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function nm(i, t, e, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const P = t.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      s = 0;
    return s;
  }
  function a(P) {
    return !(P !== _n && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(P) {
    const F = P === Vs && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(P !== Xn && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    P !== Gn && !F);
  }
  function l(P) {
    if (P === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      P = "mediump";
    }
    return P === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const d = e.logarithmicDepthBuffer === !0, p = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control"), f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), T = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), N = _ > 0, C = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: d,
    reverseDepthBuffer: p,
    maxTextures: f,
    maxVertexTextures: _,
    maxTextureSize: v,
    maxCubemapSize: m,
    maxAttributes: h,
    maxVertexUniforms: b,
    maxVaryings: T,
    maxFragmentUniforms: S,
    vertexTextures: N,
    maxSamples: C
  };
}
function im(i) {
  const t = this;
  let e = null, n = 0, s = !1, r = !1;
  const a = new In(), o = new Ut(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, p) {
    const f = d.length !== 0 || p || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = p, n = d.length, f;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(d, p) {
    e = u(d, p, 0);
  }, this.setState = function(d, p, f) {
    const _ = d.clippingPlanes, v = d.clipIntersection, m = d.clipShadows, h = i.get(d);
    if (!s || _ === null || _.length === 0 || r && !m)
      r ? u(null) : c();
    else {
      const b = r ? 0 : n, T = b * 4;
      let S = h.clippingState || null;
      l.value = S, S = u(_, p, T, f);
      for (let N = 0; N !== T; ++N)
        S[N] = e[N];
      h.clippingState = S, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function u(d, p, f, _) {
    const v = d !== null ? d.length : 0;
    let m = null;
    if (v !== 0) {
      if (m = l.value, _ !== !0 || m === null) {
        const h = f + v * 4, b = p.matrixWorldInverse;
        o.getNormalMatrix(b), (m === null || m.length < h) && (m = new Float32Array(h));
        for (let T = 0, S = f; T !== v; ++T, S += 4)
          a.copy(d[T]).applyMatrix4(b, o), a.normal.toArray(m, S), m[S + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return t.numPlanes = v, t.numIntersection = 0, m;
  }
}
function sm(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === ja ? a.mapping = vs : o === Za && (a.mapping = xs), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === ja || o === Za)
        if (t.has(a)) {
          const l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new td(l.height);
            return c.fromEquirectangularTexture(i, a), t.set(a, c), a.addEventListener("dispose", s), e(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
const Qi = 4, zl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Mi = 20, Aa = /* @__PURE__ */ new dd(), Hl = /* @__PURE__ */ new qt();
let wa = null, Ra = 0, Ca = 0, Pa = !1;
const gi = (1 + Math.sqrt(5)) / 2, qi = 1 / gi, Gl = [
  /* @__PURE__ */ new w(-gi, qi, 0),
  /* @__PURE__ */ new w(gi, qi, 0),
  /* @__PURE__ */ new w(-qi, 0, gi),
  /* @__PURE__ */ new w(qi, 0, gi),
  /* @__PURE__ */ new w(0, gi, -qi),
  /* @__PURE__ */ new w(0, gi, qi),
  /* @__PURE__ */ new w(-1, 1, -1),
  /* @__PURE__ */ new w(1, 1, -1),
  /* @__PURE__ */ new w(-1, 1, 1),
  /* @__PURE__ */ new w(1, 1, 1)
], rm = /* @__PURE__ */ new w();
class kl {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.renderTarget=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(t, e = 0, n = 0.1, s = 100, r = {}) {
    const {
      size: a = 256,
      position: o = rm
    } = r;
    wa = this._renderer.getRenderTarget(), Ra = this._renderer.getActiveCubeFace(), Ca = this._renderer.getActiveMipmapLevel(), Pa = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = !0, this._sceneToCubeUV(t, n, s, l, o), e > 0 && this._blur(l, 0, 0, e), this._applyPMREM(l), this._cleanup(l), l;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Xl(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Wl(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(wa, Ra, Ca), this._renderer.xr.enabled = Pa, t.scissorTest = !1, xr(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === vs || t.mapping === xs ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), wa = this._renderer.getRenderTarget(), Ra = this._renderer.getActiveCubeFace(), Ca = this._renderer.getActiveMipmapLevel(), Pa = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: An,
      minFilter: An,
      generateMipmaps: !1,
      type: Vs,
      format: _n,
      colorSpace: Ms,
      depthBuffer: !1
    }, s = Vl(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Vl(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = am(r)), this._blurMaterial = om(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new fe(this._lodPlanes[0], t);
    this._renderer.compile(e, Aa);
  }
  _sceneToCubeUV(t, e, n, s, r) {
    const l = new Qe(90, 1, e, n), c = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], d = this._renderer, p = d.autoClear, f = d.toneMapping;
    d.getClearColor(Hl), d.toneMapping = si, d.autoClear = !1;
    const _ = new li({
      name: "PMREM.Background",
      side: ze,
      depthWrite: !1,
      depthTest: !1
    }), v = new fe(new Xs(), _);
    let m = !1;
    const h = t.background;
    h ? h.isColor && (_.color.copy(h), t.background = null, m = !0) : (_.color.copy(Hl), m = !0);
    for (let b = 0; b < 6; b++) {
      const T = b % 3;
      T === 0 ? (l.up.set(0, c[b], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + u[b], r.y, r.z)) : T === 1 ? (l.up.set(0, 0, c[b]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + u[b], r.z)) : (l.up.set(0, c[b], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + u[b]));
      const S = this._cubeSize;
      xr(s, T * S, b > 2 ? S : 0, S, S), d.setRenderTarget(s), m && d.render(v, l), d.render(t, l);
    }
    v.geometry.dispose(), v.material.dispose(), d.toneMapping = f, d.autoClear = p, t.background = h;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === vs || t.mapping === xs;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Xl()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Wl());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new fe(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    xr(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, Aa);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Gl[(s - r - 1) % Gl.length];
      this._blur(t, r - 1, r, a, o);
    }
    e.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(t, e, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      a,
      e,
      n,
      s,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      t,
      n,
      n,
      s,
      "longitudinal",
      r
    );
  }
  _halfBlur(t, e, n, s, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, d = new fe(this._lodPlanes[s], c), p = c.uniforms, f = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Mi - 1), v = r / _, m = isFinite(r) ? 1 + Math.floor(u * v) : Mi;
    m > Mi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);
    const h = [];
    let b = 0;
    for (let P = 0; P < Mi; ++P) {
      const F = P / v, y = Math.exp(-F * F / 2);
      h.push(y), P === 0 ? b += y : P < m && (b += 2 * y);
    }
    for (let P = 0; P < h.length; P++)
      h[P] = h[P] / b;
    p.envMap.value = t.texture, p.samples.value = m, p.weights.value = h, p.latitudinal.value = a === "latitudinal", o && (p.poleAxis.value = o);
    const { _lodMax: T } = this;
    p.dTheta.value = _, p.mipInt.value = T - n;
    const S = this._sizeLods[s], N = 3 * S * (s > T - Qi ? s - T + Qi : 0), C = 4 * (this._cubeSize - S);
    xr(e, N, C, 3 * S, 2 * S), l.setRenderTarget(e), l.render(d, Aa);
  }
}
function am(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - Qi + 1 + zl.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let l = 1 / o;
    a > i - Qi ? l = zl[a - i + Qi - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, d = 1 + c, p = [u, u, d, u, d, d, u, u, d, d, u, d], f = 6, _ = 6, v = 3, m = 2, h = 1, b = new Float32Array(v * _ * f), T = new Float32Array(m * _ * f), S = new Float32Array(h * _ * f);
    for (let C = 0; C < f; C++) {
      const P = C % 3 * 2 / 3 - 1, F = C > 2 ? 0 : -1, y = [
        P,
        F,
        0,
        P + 2 / 3,
        F,
        0,
        P + 2 / 3,
        F + 1,
        0,
        P,
        F,
        0,
        P + 2 / 3,
        F + 1,
        0,
        P,
        F + 1,
        0
      ];
      b.set(y, v * _ * C), T.set(p, m * _ * C);
      const M = [C, C, C, C, C, C];
      S.set(M, h * _ * C);
    }
    const N = new Ge();
    N.setAttribute("position", new vn(b, v)), N.setAttribute("uv", new vn(T, m)), N.setAttribute("faceIndex", new vn(S, h)), t.push(N), s > Qi && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Vl(i, t, e) {
  const n = new Ri(i, t, e);
  return n.texture.mapping = Xr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function xr(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function om(i, t, e) {
  const n = new Float32Array(Mi), s = new w(0, 1, 0);
  return new qn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Mi,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: jo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: ii,
    depthTest: !1,
    depthWrite: !1
  });
}
function Wl() {
  return new qn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: jo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: ii,
    depthTest: !1,
    depthWrite: !1
  });
}
function Xl() {
  return new qn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: jo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: ii,
    depthTest: !1,
    depthWrite: !1
  });
}
function jo() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function lm(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === ja || l === Za, u = l === vs || l === xs;
      if (c || u) {
        let d = t.get(o);
        const p = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== p)
          return e === null && (e = new kl(i)), d = c ? e.fromEquirectangular(o, d) : e.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const f = o.image;
          return c && f && f.height > 0 || u && f && s(f) ? (e === null && (e = new kl(i)), d = c ? e.fromEquirectangular(o) : e.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), o.addEventListener("dispose", r), d.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function cm(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return t[n] = s, s;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const s = e(n);
      return s === null && Dr("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function hm(i, t, e, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const p = d.target;
    p.index !== null && t.remove(p.index);
    for (const _ in p.attributes)
      t.remove(p.attributes[_]);
    p.removeEventListener("dispose", a), delete s[p.id];
    const f = r.get(p);
    f && (t.remove(f), r.delete(p)), n.releaseStatesOfGeometry(p), p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount, e.memory.geometries--;
  }
  function o(d, p) {
    return s[p.id] === !0 || (p.addEventListener("dispose", a), s[p.id] = !0, e.memory.geometries++), p;
  }
  function l(d) {
    const p = d.attributes;
    for (const f in p)
      t.update(p[f], i.ARRAY_BUFFER);
  }
  function c(d) {
    const p = [], f = d.index, _ = d.attributes.position;
    let v = 0;
    if (f !== null) {
      const b = f.array;
      v = f.version;
      for (let T = 0, S = b.length; T < S; T += 3) {
        const N = b[T + 0], C = b[T + 1], P = b[T + 2];
        p.push(N, C, C, P, P, N);
      }
    } else if (_ !== void 0) {
      const b = _.array;
      v = _.version;
      for (let T = 0, S = b.length / 3 - 1; T < S; T += 3) {
        const N = T + 0, C = T + 1, P = T + 2;
        p.push(N, C, C, P, P, N);
      }
    } else
      return;
    const m = new (Oc(p) ? kc : Gc)(p, 1);
    m.version = v;
    const h = r.get(d);
    h && t.remove(h), r.set(d, m);
  }
  function u(d) {
    const p = r.get(d);
    if (p) {
      const f = d.index;
      f !== null && p.version < f.version && c(d);
    } else
      c(d);
    return r.get(d);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function um(i, t, e) {
  let n;
  function s(p) {
    n = p;
  }
  let r, a;
  function o(p) {
    r = p.type, a = p.bytesPerElement;
  }
  function l(p, f) {
    i.drawElements(n, f, r, p * a), e.update(f, n, 1);
  }
  function c(p, f, _) {
    _ !== 0 && (i.drawElementsInstanced(n, f, r, p * a, _), e.update(f, n, _));
  }
  function u(p, f, _) {
    if (_ === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, r, p, 0, _);
    let m = 0;
    for (let h = 0; h < _; h++)
      m += f[h];
    e.update(m, n, 1);
  }
  function d(p, f, _, v) {
    if (_ === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null)
      for (let h = 0; h < p.length; h++)
        c(p[h] / a, f[h], v[h]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, f, 0, r, p, 0, v, 0, _);
      let h = 0;
      for (let b = 0; b < _; b++)
        h += f[b] * v[b];
      e.update(h, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function dm(i) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case i.LINES:
        e.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * r;
        break;
      case i.POINTS:
        e.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n
  };
}
function fm(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new se();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let p = n.get(o);
    if (p === void 0 || p.count !== d) {
      let y = function() {
        P.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      p !== void 0 && p.texture.dispose();
      const f = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, v = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let T = 0;
      f === !0 && (T = 1), _ === !0 && (T = 2), v === !0 && (T = 3);
      let S = o.attributes.position.count * T, N = 1;
      S > t.maxTextureSize && (N = Math.ceil(S / t.maxTextureSize), S = t.maxTextureSize);
      const C = new Float32Array(S * N * 4 * d), P = new Bc(C, S, N, d);
      P.type = Gn, P.needsUpdate = !0;
      const F = T * 4;
      for (let M = 0; M < d; M++) {
        const D = m[M], G = h[M], z = b[M], W = S * N * 4 * M;
        for (let K = 0; K < D.count; K++) {
          const X = K * F;
          f === !0 && (s.fromBufferAttribute(D, K), C[W + X + 0] = s.x, C[W + X + 1] = s.y, C[W + X + 2] = s.z, C[W + X + 3] = 0), _ === !0 && (s.fromBufferAttribute(G, K), C[W + X + 4] = s.x, C[W + X + 5] = s.y, C[W + X + 6] = s.z, C[W + X + 7] = 0), v === !0 && (s.fromBufferAttribute(z, K), C[W + X + 8] = s.x, C[W + X + 9] = s.y, C[W + X + 10] = s.z, C[W + X + 11] = z.itemSize === 4 ? s.w : 1);
        }
      }
      p = {
        count: d,
        texture: P,
        size: new Dt(S, N)
      }, n.set(o, p), o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let f = 0;
      for (let v = 0; v < c.length; v++)
        f += c[v];
      const _ = o.morphTargetsRelative ? 1 : 1 - f;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", _), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", p.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
  }
  return {
    update: r
  };
}
function pm(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, u = l.geometry, d = t.get(l, u);
    if (s.get(d) !== c && (t.update(d), s.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), s.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const p = l.skeleton;
      s.get(p) !== c && (p.update(), s.set(p, c));
    }
    return d;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
const Kc = /* @__PURE__ */ new He(), Yl = /* @__PURE__ */ new jc(1, 1), $c = /* @__PURE__ */ new Bc(), Jc = /* @__PURE__ */ new Bu(), Qc = /* @__PURE__ */ new Xc(), ql = [], jl = [], Zl = new Float32Array(16), Kl = new Float32Array(9), $l = new Float32Array(4);
function Es(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = ql[s];
  if (r === void 0 && (r = new Float32Array(s), ql[s] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, i[a].toArray(r, o);
  }
  return r;
}
function Me(i, t) {
  if (i.length !== t.length) return !1;
  for (let e = 0, n = i.length; e < n; e++)
    if (i[e] !== t[e]) return !1;
  return !0;
}
function Se(i, t) {
  for (let e = 0, n = t.length; e < n; e++)
    i[e] = t[e];
}
function Zr(i, t) {
  let e = jl[t];
  e === void 0 && (e = new Int32Array(t), jl[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function mm(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function _m(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Me(e, t)) return;
    i.uniform2fv(this.addr, t), Se(e, t);
  }
}
function gm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (Me(e, t)) return;
    i.uniform3fv(this.addr, t), Se(e, t);
  }
}
function vm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Me(e, t)) return;
    i.uniform4fv(this.addr, t), Se(e, t);
  }
}
function xm(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Me(e, t)) return;
    i.uniformMatrix2fv(this.addr, !1, t), Se(e, t);
  } else {
    if (Me(e, n)) return;
    $l.set(n), i.uniformMatrix2fv(this.addr, !1, $l), Se(e, n);
  }
}
function Mm(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Me(e, t)) return;
    i.uniformMatrix3fv(this.addr, !1, t), Se(e, t);
  } else {
    if (Me(e, n)) return;
    Kl.set(n), i.uniformMatrix3fv(this.addr, !1, Kl), Se(e, n);
  }
}
function Sm(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Me(e, t)) return;
    i.uniformMatrix4fv(this.addr, !1, t), Se(e, t);
  } else {
    if (Me(e, n)) return;
    Zl.set(n), i.uniformMatrix4fv(this.addr, !1, Zl), Se(e, n);
  }
}
function ym(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function Em(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Me(e, t)) return;
    i.uniform2iv(this.addr, t), Se(e, t);
  }
}
function Tm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Me(e, t)) return;
    i.uniform3iv(this.addr, t), Se(e, t);
  }
}
function bm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Me(e, t)) return;
    i.uniform4iv(this.addr, t), Se(e, t);
  }
}
function Am(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function wm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Me(e, t)) return;
    i.uniform2uiv(this.addr, t), Se(e, t);
  }
}
function Rm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Me(e, t)) return;
    i.uniform3uiv(this.addr, t), Se(e, t);
  }
}
function Cm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Me(e, t)) return;
    i.uniform4uiv(this.addr, t), Se(e, t);
  }
}
function Pm(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (Yl.compareFunction = Nc, r = Yl) : r = Kc, e.setTexture2D(t || r, s);
}
function Dm(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || Jc, s);
}
function Lm(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || Qc, s);
}
function Um(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || $c, s);
}
function Im(i) {
  switch (i) {
    case 5126:
      return mm;
    // FLOAT
    case 35664:
      return _m;
    // _VEC2
    case 35665:
      return gm;
    // _VEC3
    case 35666:
      return vm;
    // _VEC4
    case 35674:
      return xm;
    // _MAT2
    case 35675:
      return Mm;
    // _MAT3
    case 35676:
      return Sm;
    // _MAT4
    case 5124:
    case 35670:
      return ym;
    // INT, BOOL
    case 35667:
    case 35671:
      return Em;
    // _VEC2
    case 35668:
    case 35672:
      return Tm;
    // _VEC3
    case 35669:
    case 35673:
      return bm;
    // _VEC4
    case 5125:
      return Am;
    // UINT
    case 36294:
      return wm;
    // _VEC2
    case 36295:
      return Rm;
    // _VEC3
    case 36296:
      return Cm;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Pm;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Dm;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Lm;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Um;
  }
}
function Nm(i, t) {
  i.uniform1fv(this.addr, t);
}
function Fm(i, t) {
  const e = Es(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function Om(i, t) {
  const e = Es(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Bm(i, t) {
  const e = Es(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function zm(i, t) {
  const e = Es(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function Hm(i, t) {
  const e = Es(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function Gm(i, t) {
  const e = Es(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function km(i, t) {
  i.uniform1iv(this.addr, t);
}
function Vm(i, t) {
  i.uniform2iv(this.addr, t);
}
function Wm(i, t) {
  i.uniform3iv(this.addr, t);
}
function Xm(i, t) {
  i.uniform4iv(this.addr, t);
}
function Ym(i, t) {
  i.uniform1uiv(this.addr, t);
}
function qm(i, t) {
  i.uniform2uiv(this.addr, t);
}
function jm(i, t) {
  i.uniform3uiv(this.addr, t);
}
function Zm(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Km(i, t, e) {
  const n = this.cache, s = t.length, r = Zr(e, s);
  Me(n, r) || (i.uniform1iv(this.addr, r), Se(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2D(t[a] || Kc, r[a]);
}
function $m(i, t, e) {
  const n = this.cache, s = t.length, r = Zr(e, s);
  Me(n, r) || (i.uniform1iv(this.addr, r), Se(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture3D(t[a] || Jc, r[a]);
}
function Jm(i, t, e) {
  const n = this.cache, s = t.length, r = Zr(e, s);
  Me(n, r) || (i.uniform1iv(this.addr, r), Se(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTextureCube(t[a] || Qc, r[a]);
}
function Qm(i, t, e) {
  const n = this.cache, s = t.length, r = Zr(e, s);
  Me(n, r) || (i.uniform1iv(this.addr, r), Se(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2DArray(t[a] || $c, r[a]);
}
function t_(i) {
  switch (i) {
    case 5126:
      return Nm;
    // FLOAT
    case 35664:
      return Fm;
    // _VEC2
    case 35665:
      return Om;
    // _VEC3
    case 35666:
      return Bm;
    // _VEC4
    case 35674:
      return zm;
    // _MAT2
    case 35675:
      return Hm;
    // _MAT3
    case 35676:
      return Gm;
    // _MAT4
    case 5124:
    case 35670:
      return km;
    // INT, BOOL
    case 35667:
    case 35671:
      return Vm;
    // _VEC2
    case 35668:
    case 35672:
      return Wm;
    // _VEC3
    case 35669:
    case 35673:
      return Xm;
    // _VEC4
    case 5125:
      return Ym;
    // UINT
    case 36294:
      return qm;
    // _VEC2
    case 36295:
      return jm;
    // _VEC3
    case 36296:
      return Zm;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Km;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return $m;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Jm;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Qm;
  }
}
class e_ {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Im(e.type);
  }
}
class n_ {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = t_(e.type);
  }
}
class i_ {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(t, e[o.id], n);
    }
  }
}
const Da = /(\w+)(\])?(\[|\.)?/g;
function Jl(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function s_(i, t, e) {
  const n = i.name, s = n.length;
  for (Da.lastIndex = 0; ; ) {
    const r = Da.exec(n), a = Da.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      Jl(e, c === void 0 ? new e_(o, i, t) : new n_(o, i, t));
      break;
    } else {
      let d = e.map[o];
      d === void 0 && (d = new i_(o), Jl(e, d)), e = d;
    }
  }
}
class Lr {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      s_(r, a, this);
    }
  }
  setValue(t, e, n, s) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, s);
  }
  setOptional(t, e, n) {
    const s = e[n];
    s !== void 0 && this.setValue(t, n, s);
  }
  static upload(t, e, n, s) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const o = e[r], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(t, l.value, s);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let s = 0, r = t.length; s !== r; ++s) {
      const a = t[s];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function Ql(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const r_ = 37297;
let a_ = 0;
function o_(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const tc = /* @__PURE__ */ new Ut();
function l_(i) {
  Xt._getMatrix(tc, Xt.workingColorSpace, i);
  const t = `mat3( ${tc.elements.map((e) => e.toFixed(4))} )`;
  switch (Xt.getTransfer(i)) {
    case Ur:
      return [t, "LinearTransferOETF"];
    case Qt:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function ec(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), s = i.getShaderInfoLog(t).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const a = parseInt(r[1]);
    return e.toUpperCase() + `

` + s + `

` + o_(i.getShaderSource(t), a);
  } else
    return s;
}
function c_(i, t) {
  const e = l_(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function h_(i, t) {
  let e;
  switch (t) {
    case jh:
      e = "Linear";
      break;
    case Zh:
      e = "Reinhard";
      break;
    case Kh:
      e = "Cineon";
      break;
    case $h:
      e = "ACESFilmic";
      break;
    case Qh:
      e = "AgX";
      break;
    case tu:
      e = "Neutral";
      break;
    case Jh:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const Mr = /* @__PURE__ */ new w();
function u_() {
  Xt.getLuminanceCoefficients(Mr);
  const i = Mr.x.toFixed(4), t = Mr.y.toFixed(4), e = Mr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function d_(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Ds).join(`
`);
}
function f_(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function p_(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(t, s), a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), e[a] = {
      type: r.type,
      location: i.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return e;
}
function Ds(i) {
  return i !== "";
}
function nc(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ic(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const m_ = /^[ \t]*#include +<([\w\d./]+)>/gm;
function wo(i) {
  return i.replace(m_, g_);
}
const __ = /* @__PURE__ */ new Map();
function g_(i, t) {
  let e = Ft[t];
  if (e === void 0) {
    const n = __.get(t);
    if (n !== void 0)
      e = Ft[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return wo(e);
}
const v_ = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function sc(i) {
  return i.replace(v_, x_);
}
function x_(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function rc(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function M_(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === yc ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === wh ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Un && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function S_(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case vs:
      case xs:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case Xr:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function y_(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case xs:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function E_(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Ec:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Yh:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case qh:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function T_(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function b_(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = M_(e), c = S_(e), u = y_(e), d = E_(e), p = T_(e), f = d_(e), _ = f_(r), v = s.createProgram();
  let m, h, b = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(Ds).join(`
`), m.length > 0 && (m += `
`), h = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(Ds).join(`
`), h.length > 0 && (h += `
`)) : (m = [
    rc(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _,
    e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    e.batching ? "#define USE_BATCHING" : "",
    e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + u : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    e.mapUv ? "#define MAP_UV " + e.mapUv : "",
    e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
    e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
    e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
    e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
    e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
    e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
    e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
    e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
    e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
    e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
    e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
    e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
    e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
    e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
    e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
    e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
    e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
    e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
    e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
    e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
    e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
    e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
    //
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Ds).join(`
`), h = [
    rc(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + c : "",
    e.envMap ? "#define " + u : "",
    e.envMap ? "#define " + d : "",
    p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
    p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
    p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.dispersion ? "#define USE_DISPERSION" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== si ? "#define TONE_MAPPING" : "",
    e.toneMapping !== si ? Ft.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== si ? h_("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Ft.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    c_("linearToOutputTexel", e.outputColorSpace),
    u_(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Ds).join(`
`)), a = wo(a), a = nc(a, e), a = ic(a, e), o = wo(o), o = nc(o, e), o = ic(o, e), a = sc(a), o = sc(o), e.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, m = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, h = [
    "#define varying in",
    e.glslVersion === ul ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === ul ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + h);
  const T = b + m + a, S = b + h + o, N = Ql(s, s.VERTEX_SHADER, T), C = Ql(s, s.FRAGMENT_SHADER, S);
  s.attachShader(v, N), s.attachShader(v, C), e.index0AttributeName !== void 0 ? s.bindAttribLocation(v, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v);
  function P(D) {
    if (i.debug.checkShaderErrors) {
      const G = s.getProgramInfoLog(v).trim(), z = s.getShaderInfoLog(N).trim(), W = s.getShaderInfoLog(C).trim();
      let K = !0, X = !0;
      if (s.getProgramParameter(v, s.LINK_STATUS) === !1)
        if (K = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, v, N, C);
        else {
          const tt = ec(s, N, "vertex"), V = ec(s, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(v, s.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + G + `
` + tt + `
` + V
          );
        }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (z === "" || W === "") && (X = !1);
      X && (D.diagnostics = {
        runnable: K,
        programLog: G,
        vertexShader: {
          log: z,
          prefix: m
        },
        fragmentShader: {
          log: W,
          prefix: h
        }
      });
    }
    s.deleteShader(N), s.deleteShader(C), F = new Lr(s, v), y = p_(s, v);
  }
  let F;
  this.getUniforms = function() {
    return F === void 0 && P(this), F;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && P(this), y;
  };
  let M = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = s.getProgramParameter(v, r_)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(v), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = a_++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = N, this.fragmentShader = C, this;
}
let A_ = 0;
class w_ {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, s = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(s) === !1 && (a.add(s), s.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new R_(t), e.set(t, n)), n;
  }
}
class R_ {
  constructor(t) {
    this.id = A_++, this.code = t, this.usedTimes = 0;
  }
}
function C_(i, t, e, n, s, r, a) {
  const o = new zc(), l = new w_(), c = /* @__PURE__ */ new Set(), u = [], d = s.logarithmicDepthBuffer, p = s.vertexTextures;
  let f = s.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function v(y) {
    return c.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function m(y, M, D, G, z) {
    const W = G.fog, K = z.geometry, X = y.isMeshStandardMaterial ? G.environment : null, tt = (y.isMeshStandardMaterial ? e : t).get(y.envMap || X), V = tt && tt.mapping === Xr ? tt.image.height : null, st = _[y.type];
    y.precision !== null && (f = s.getMaxPrecision(y.precision), f !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", f, "instead."));
    const ut = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, Mt = ut !== void 0 ? ut.length : 0;
    let Ot = 0;
    K.morphAttributes.position !== void 0 && (Ot = 1), K.morphAttributes.normal !== void 0 && (Ot = 2), K.morphAttributes.color !== void 0 && (Ot = 3);
    let ee, q, et, _t;
    if (st) {
      const Kt = Be[st];
      ee = Kt.vertexShader, q = Kt.fragmentShader;
    } else
      ee = y.vertexShader, q = y.fragmentShader, l.update(y), et = l.getVertexShaderID(y), _t = l.getFragmentShaderID(y);
    const rt = i.getRenderTarget(), bt = i.state.buffers.depth.getReversed(), Yt = z.isInstancedMesh === !0, wt = z.isBatchedMesh === !0, de = !!y.map, ce = !!y.matcap, Bt = !!tt, R = !!y.aoMap, qe = !!y.lightMap, Gt = !!y.bumpMap, zt = !!y.normalMap, St = !!y.displacementMap, re = !!y.emissiveMap, xt = !!y.metalnessMap, E = !!y.roughnessMap, g = y.anisotropy > 0, O = y.clearcoat > 0, j = y.dispersion > 0, $ = y.iridescence > 0, Y = y.sheen > 0, gt = y.transmission > 0, at = g && !!y.anisotropyMap, dt = O && !!y.clearcoatMap, kt = O && !!y.clearcoatNormalMap, Q = O && !!y.clearcoatRoughnessMap, ft = $ && !!y.iridescenceMap, At = $ && !!y.iridescenceThicknessMap, Ct = Y && !!y.sheenColorMap, pt = Y && !!y.sheenRoughnessMap, Ht = !!y.specularMap, Nt = !!y.specularColorMap, ie = !!y.specularIntensityMap, L = gt && !!y.transmissionMap, ot = gt && !!y.thicknessMap, k = !!y.gradientMap, Z = !!y.alphaMap, ct = y.alphaTest > 0, lt = !!y.alphaHash, Lt = !!y.extensions;
    let he = si;
    y.toneMapped && (rt === null || rt.isXRRenderTarget === !0) && (he = i.toneMapping);
    const Re = {
      shaderID: st,
      shaderType: y.type,
      shaderName: y.name,
      vertexShader: ee,
      fragmentShader: q,
      defines: y.defines,
      customVertexShaderID: et,
      customFragmentShaderID: _t,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: f,
      batching: wt,
      batchingColor: wt && z._colorsTexture !== null,
      instancing: Yt,
      instancingColor: Yt && z.instanceColor !== null,
      instancingMorph: Yt && z.morphTexture !== null,
      supportsVertexTextures: p,
      outputColorSpace: rt === null ? i.outputColorSpace : rt.isXRRenderTarget === !0 ? rt.texture.colorSpace : Ms,
      alphaToCoverage: !!y.alphaToCoverage,
      map: de,
      matcap: ce,
      envMap: Bt,
      envMapMode: Bt && tt.mapping,
      envMapCubeUVHeight: V,
      aoMap: R,
      lightMap: qe,
      bumpMap: Gt,
      normalMap: zt,
      displacementMap: p && St,
      emissiveMap: re,
      normalMapObjectSpace: zt && y.normalMapType === ru,
      normalMapTangentSpace: zt && y.normalMapType === su,
      metalnessMap: xt,
      roughnessMap: E,
      anisotropy: g,
      anisotropyMap: at,
      clearcoat: O,
      clearcoatMap: dt,
      clearcoatNormalMap: kt,
      clearcoatRoughnessMap: Q,
      dispersion: j,
      iridescence: $,
      iridescenceMap: ft,
      iridescenceThicknessMap: At,
      sheen: Y,
      sheenColorMap: Ct,
      sheenRoughnessMap: pt,
      specularMap: Ht,
      specularColorMap: Nt,
      specularIntensityMap: ie,
      transmission: gt,
      transmissionMap: L,
      thicknessMap: ot,
      gradientMap: k,
      opaque: y.transparent === !1 && y.blending === ns && y.alphaToCoverage === !1,
      alphaMap: Z,
      alphaTest: ct,
      alphaHash: lt,
      combine: y.combine,
      //
      mapUv: de && v(y.map.channel),
      aoMapUv: R && v(y.aoMap.channel),
      lightMapUv: qe && v(y.lightMap.channel),
      bumpMapUv: Gt && v(y.bumpMap.channel),
      normalMapUv: zt && v(y.normalMap.channel),
      displacementMapUv: St && v(y.displacementMap.channel),
      emissiveMapUv: re && v(y.emissiveMap.channel),
      metalnessMapUv: xt && v(y.metalnessMap.channel),
      roughnessMapUv: E && v(y.roughnessMap.channel),
      anisotropyMapUv: at && v(y.anisotropyMap.channel),
      clearcoatMapUv: dt && v(y.clearcoatMap.channel),
      clearcoatNormalMapUv: kt && v(y.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Q && v(y.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ft && v(y.iridescenceMap.channel),
      iridescenceThicknessMapUv: At && v(y.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ct && v(y.sheenColorMap.channel),
      sheenRoughnessMapUv: pt && v(y.sheenRoughnessMap.channel),
      specularMapUv: Ht && v(y.specularMap.channel),
      specularColorMapUv: Nt && v(y.specularColorMap.channel),
      specularIntensityMapUv: ie && v(y.specularIntensityMap.channel),
      transmissionMapUv: L && v(y.transmissionMap.channel),
      thicknessMapUv: ot && v(y.thicknessMap.channel),
      alphaMapUv: Z && v(y.alphaMap.channel),
      //
      vertexTangents: !!K.attributes.tangent && (zt || g),
      vertexColors: y.vertexColors,
      vertexAlphas: y.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4,
      pointsUvs: z.isPoints === !0 && !!K.attributes.uv && (de || Z),
      fog: !!W,
      useFog: y.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: y.flatShading === !0,
      sizeAttenuation: y.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reverseDepthBuffer: bt,
      skinning: z.isSkinnedMesh === !0,
      morphTargets: K.morphAttributes.position !== void 0,
      morphNormals: K.morphAttributes.normal !== void 0,
      morphColors: K.morphAttributes.color !== void 0,
      morphTargetsCount: Mt,
      morphTextureStride: Ot,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: he,
      decodeVideoTexture: de && y.map.isVideoTexture === !0 && Xt.getTransfer(y.map.colorSpace) === Qt,
      decodeVideoTextureEmissive: re && y.emissiveMap.isVideoTexture === !0 && Xt.getTransfer(y.emissiveMap.colorSpace) === Qt,
      premultipliedAlpha: y.premultipliedAlpha,
      doubleSided: y.side === fn,
      flipSided: y.side === ze,
      useDepthPacking: y.depthPacking >= 0,
      depthPacking: y.depthPacking || 0,
      index0AttributeName: y.index0AttributeName,
      extensionClipCullDistance: Lt && y.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Lt && y.extensions.multiDraw === !0 || wt) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: y.customProgramCacheKey()
    };
    return Re.vertexUv1s = c.has(1), Re.vertexUv2s = c.has(2), Re.vertexUv3s = c.has(3), c.clear(), Re;
  }
  function h(y) {
    const M = [];
    if (y.shaderID ? M.push(y.shaderID) : (M.push(y.customVertexShaderID), M.push(y.customFragmentShaderID)), y.defines !== void 0)
      for (const D in y.defines)
        M.push(D), M.push(y.defines[D]);
    return y.isRawShaderMaterial === !1 && (b(M, y), T(M, y), M.push(i.outputColorSpace)), M.push(y.customProgramCacheKey), M.join();
  }
  function b(y, M) {
    y.push(M.precision), y.push(M.outputColorSpace), y.push(M.envMapMode), y.push(M.envMapCubeUVHeight), y.push(M.mapUv), y.push(M.alphaMapUv), y.push(M.lightMapUv), y.push(M.aoMapUv), y.push(M.bumpMapUv), y.push(M.normalMapUv), y.push(M.displacementMapUv), y.push(M.emissiveMapUv), y.push(M.metalnessMapUv), y.push(M.roughnessMapUv), y.push(M.anisotropyMapUv), y.push(M.clearcoatMapUv), y.push(M.clearcoatNormalMapUv), y.push(M.clearcoatRoughnessMapUv), y.push(M.iridescenceMapUv), y.push(M.iridescenceThicknessMapUv), y.push(M.sheenColorMapUv), y.push(M.sheenRoughnessMapUv), y.push(M.specularMapUv), y.push(M.specularColorMapUv), y.push(M.specularIntensityMapUv), y.push(M.transmissionMapUv), y.push(M.thicknessMapUv), y.push(M.combine), y.push(M.fogExp2), y.push(M.sizeAttenuation), y.push(M.morphTargetsCount), y.push(M.morphAttributeCount), y.push(M.numDirLights), y.push(M.numPointLights), y.push(M.numSpotLights), y.push(M.numSpotLightMaps), y.push(M.numHemiLights), y.push(M.numRectAreaLights), y.push(M.numDirLightShadows), y.push(M.numPointLightShadows), y.push(M.numSpotLightShadows), y.push(M.numSpotLightShadowsWithMaps), y.push(M.numLightProbes), y.push(M.shadowMapType), y.push(M.toneMapping), y.push(M.numClippingPlanes), y.push(M.numClipIntersection), y.push(M.depthPacking);
  }
  function T(y, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), y.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), y.push(o.mask);
  }
  function S(y) {
    const M = _[y.type];
    let D;
    if (M) {
      const G = Be[M];
      D = Xo.clone(G.uniforms);
    } else
      D = y.uniforms;
    return D;
  }
  function N(y, M) {
    let D;
    for (let G = 0, z = u.length; G < z; G++) {
      const W = u[G];
      if (W.cacheKey === M) {
        D = W, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new b_(i, M, y, r), u.push(D)), D;
  }
  function C(y) {
    if (--y.usedTimes === 0) {
      const M = u.indexOf(y);
      u[M] = u[u.length - 1], u.pop(), y.destroy();
    }
  }
  function P(y) {
    l.remove(y);
  }
  function F() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: h,
    getUniforms: S,
    acquireProgram: N,
    releaseProgram: C,
    releaseShaderCache: P,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: F
  };
}
function P_() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, l) {
    i.get(a)[o] = l;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: e,
    remove: n,
    update: s,
    dispose: r
  };
}
function D_(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function ac(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function oc() {
  const i = [];
  let t = 0;
  const e = [], n = [], s = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, s.length = 0;
  }
  function a(d, p, f, _, v, m) {
    let h = i[t];
    return h === void 0 ? (h = {
      id: d.id,
      object: d,
      geometry: p,
      material: f,
      groupOrder: _,
      renderOrder: d.renderOrder,
      z: v,
      group: m
    }, i[t] = h) : (h.id = d.id, h.object = d, h.geometry = p, h.material = f, h.groupOrder = _, h.renderOrder = d.renderOrder, h.z = v, h.group = m), t++, h;
  }
  function o(d, p, f, _, v, m) {
    const h = a(d, p, f, _, v, m);
    f.transmission > 0 ? n.push(h) : f.transparent === !0 ? s.push(h) : e.push(h);
  }
  function l(d, p, f, _, v, m) {
    const h = a(d, p, f, _, v, m);
    f.transmission > 0 ? n.unshift(h) : f.transparent === !0 ? s.unshift(h) : e.unshift(h);
  }
  function c(d, p) {
    e.length > 1 && e.sort(d || D_), n.length > 1 && n.sort(p || ac), s.length > 1 && s.sort(p || ac);
  }
  function u() {
    for (let d = t, p = i.length; d < p; d++) {
      const f = i[d];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: s,
    init: r,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function L_() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new oc(), i.set(n, [a])) : s >= r.length ? (a = new oc(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function U_() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new w(),
            color: new qt()
          };
          break;
        case "SpotLight":
          e = {
            position: new w(),
            direction: new w(),
            color: new qt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new w(),
            color: new qt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new w(),
            skyColor: new qt(),
            groundColor: new qt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new qt(),
            position: new w(),
            halfWidth: new w(),
            halfHeight: new w()
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
function I_() {
  const i = {};
  return {
    get: function(t) {
      if (i[t.id] !== void 0)
        return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Dt()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Dt()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Dt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[t.id] = e, e;
    }
  };
}
let N_ = 0;
function F_(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function O_(i) {
  const t = new U_(), e = I_(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new w());
  const s = new w(), r = new ae(), a = new ae();
  function o(c) {
    let u = 0, d = 0, p = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let f = 0, _ = 0, v = 0, m = 0, h = 0, b = 0, T = 0, S = 0, N = 0, C = 0, P = 0;
    c.sort(F_);
    for (let y = 0, M = c.length; y < M; y++) {
      const D = c[y], G = D.color, z = D.intensity, W = D.distance, K = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        u += G.r * z, d += G.g * z, p += G.b * z;
      else if (D.isLightProbe) {
        for (let X = 0; X < 9; X++)
          n.probe[X].addScaledVector(D.sh.coefficients[X], z);
        P++;
      } else if (D.isDirectionalLight) {
        const X = t.get(D);
        if (X.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const tt = D.shadow, V = e.get(D);
          V.shadowIntensity = tt.intensity, V.shadowBias = tt.bias, V.shadowNormalBias = tt.normalBias, V.shadowRadius = tt.radius, V.shadowMapSize = tt.mapSize, n.directionalShadow[f] = V, n.directionalShadowMap[f] = K, n.directionalShadowMatrix[f] = D.shadow.matrix, b++;
        }
        n.directional[f] = X, f++;
      } else if (D.isSpotLight) {
        const X = t.get(D);
        X.position.setFromMatrixPosition(D.matrixWorld), X.color.copy(G).multiplyScalar(z), X.distance = W, X.coneCos = Math.cos(D.angle), X.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), X.decay = D.decay, n.spot[v] = X;
        const tt = D.shadow;
        if (D.map && (n.spotLightMap[N] = D.map, N++, tt.updateMatrices(D), D.castShadow && C++), n.spotLightMatrix[v] = tt.matrix, D.castShadow) {
          const V = e.get(D);
          V.shadowIntensity = tt.intensity, V.shadowBias = tt.bias, V.shadowNormalBias = tt.normalBias, V.shadowRadius = tt.radius, V.shadowMapSize = tt.mapSize, n.spotShadow[v] = V, n.spotShadowMap[v] = K, S++;
        }
        v++;
      } else if (D.isRectAreaLight) {
        const X = t.get(D);
        X.color.copy(G).multiplyScalar(z), X.halfWidth.set(D.width * 0.5, 0, 0), X.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[m] = X, m++;
      } else if (D.isPointLight) {
        const X = t.get(D);
        if (X.color.copy(D.color).multiplyScalar(D.intensity), X.distance = D.distance, X.decay = D.decay, D.castShadow) {
          const tt = D.shadow, V = e.get(D);
          V.shadowIntensity = tt.intensity, V.shadowBias = tt.bias, V.shadowNormalBias = tt.normalBias, V.shadowRadius = tt.radius, V.shadowMapSize = tt.mapSize, V.shadowCameraNear = tt.camera.near, V.shadowCameraFar = tt.camera.far, n.pointShadow[_] = V, n.pointShadowMap[_] = K, n.pointShadowMatrix[_] = D.shadow.matrix, T++;
        }
        n.point[_] = X, _++;
      } else if (D.isHemisphereLight) {
        const X = t.get(D);
        X.skyColor.copy(D.color).multiplyScalar(z), X.groundColor.copy(D.groundColor).multiplyScalar(z), n.hemi[h] = X, h++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = nt.LTC_FLOAT_1, n.rectAreaLTC2 = nt.LTC_FLOAT_2) : (n.rectAreaLTC1 = nt.LTC_HALF_1, n.rectAreaLTC2 = nt.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = p;
    const F = n.hash;
    (F.directionalLength !== f || F.pointLength !== _ || F.spotLength !== v || F.rectAreaLength !== m || F.hemiLength !== h || F.numDirectionalShadows !== b || F.numPointShadows !== T || F.numSpotShadows !== S || F.numSpotMaps !== N || F.numLightProbes !== P) && (n.directional.length = f, n.spot.length = v, n.rectArea.length = m, n.point.length = _, n.hemi.length = h, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = S + N - C, n.spotLightMap.length = N, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = P, F.directionalLength = f, F.pointLength = _, F.spotLength = v, F.rectAreaLength = m, F.hemiLength = h, F.numDirectionalShadows = b, F.numPointShadows = T, F.numSpotShadows = S, F.numSpotMaps = N, F.numLightProbes = P, n.version = N_++);
  }
  function l(c, u) {
    let d = 0, p = 0, f = 0, _ = 0, v = 0;
    const m = u.matrixWorldInverse;
    for (let h = 0, b = c.length; h < b; h++) {
      const T = c[h];
      if (T.isDirectionalLight) {
        const S = n.directional[d];
        S.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(m), d++;
      } else if (T.isSpotLight) {
        const S = n.spot[f];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), S.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(m), f++;
      } else if (T.isRectAreaLight) {
        const S = n.rectArea[_];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), a.identity(), r.copy(T.matrixWorld), r.premultiply(m), a.extractRotation(r), S.halfWidth.set(T.width * 0.5, 0, 0), S.halfHeight.set(0, T.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), _++;
      } else if (T.isPointLight) {
        const S = n.point[p];
        S.position.setFromMatrixPosition(T.matrixWorld), S.position.applyMatrix4(m), p++;
      } else if (T.isHemisphereLight) {
        const S = n.hemi[v];
        S.direction.setFromMatrixPosition(T.matrixWorld), S.direction.transformDirection(m), v++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function lc(i) {
  const t = new O_(i), e = [], n = [];
  function s(u) {
    c.camera = u, e.length = 0, n.length = 0;
  }
  function r(u) {
    e.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    t.setup(e);
  }
  function l(u) {
    t.setupView(e, u);
  }
  const c = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: s,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: r,
    pushShadow: a
  };
}
function B_(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new lc(i), t.set(s, [o])) : r >= a.length ? (o = new lc(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
const z_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, H_ = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function G_(i, t, e) {
  let n = new Yc();
  const s = new Dt(), r = new Dt(), a = new se(), o = new hd({ depthPacking: iu }), l = new ud(), c = {}, u = e.maxTextureSize, d = { [ri]: ze, [ze]: ri, [fn]: fn }, p = new qn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Dt() },
      radius: { value: 4 }
    },
    vertexShader: z_,
    fragmentShader: H_
  }), f = p.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const _ = new Ge();
  _.setAttribute(
    "position",
    new vn(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new fe(_, p), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = yc;
  let h = this.type;
  this.render = function(C, P, F) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || C.length === 0) return;
    const y = i.getRenderTarget(), M = i.getActiveCubeFace(), D = i.getActiveMipmapLevel(), G = i.state;
    G.setBlending(ii), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(!0), G.setScissorTest(!1);
    const z = h !== Un && this.type === Un, W = h === Un && this.type !== Un;
    for (let K = 0, X = C.length; K < X; K++) {
      const tt = C[K], V = tt.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", tt, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      s.copy(V.mapSize);
      const st = V.getFrameExtents();
      if (s.multiply(st), r.copy(V.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / st.x), s.x = r.x * st.x, V.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / st.y), s.y = r.y * st.y, V.mapSize.y = r.y)), V.map === null || z === !0 || W === !0) {
        const Mt = this.type !== Un ? { minFilter: gn, magFilter: gn } : {};
        V.map !== null && V.map.dispose(), V.map = new Ri(s.x, s.y, Mt), V.map.texture.name = tt.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(V.map), i.clear();
      const ut = V.getViewportCount();
      for (let Mt = 0; Mt < ut; Mt++) {
        const Ot = V.getViewport(Mt);
        a.set(
          r.x * Ot.x,
          r.y * Ot.y,
          r.x * Ot.z,
          r.y * Ot.w
        ), G.viewport(a), V.updateMatrices(tt, Mt), n = V.getFrustum(), S(P, F, V.camera, tt, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === Un && b(V, F), V.needsUpdate = !1;
    }
    h = this.type, m.needsUpdate = !1, i.setRenderTarget(y, M, D);
  };
  function b(C, P) {
    const F = t.update(v);
    p.defines.VSM_SAMPLES !== C.blurSamples && (p.defines.VSM_SAMPLES = C.blurSamples, f.defines.VSM_SAMPLES = C.blurSamples, p.needsUpdate = !0, f.needsUpdate = !0), C.mapPass === null && (C.mapPass = new Ri(s.x, s.y)), p.uniforms.shadow_pass.value = C.map.texture, p.uniforms.resolution.value = C.mapSize, p.uniforms.radius.value = C.radius, i.setRenderTarget(C.mapPass), i.clear(), i.renderBufferDirect(P, null, F, p, v, null), f.uniforms.shadow_pass.value = C.mapPass.texture, f.uniforms.resolution.value = C.mapSize, f.uniforms.radius.value = C.radius, i.setRenderTarget(C.map), i.clear(), i.renderBufferDirect(P, null, F, f, v, null);
  }
  function T(C, P, F, y) {
    let M = null;
    const D = F.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (D !== void 0)
      M = D;
    else if (M = F.isPointLight === !0 ? l : o, i.localClippingEnabled && P.clipShadows === !0 && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0) {
      const G = M.uuid, z = P.uuid;
      let W = c[G];
      W === void 0 && (W = {}, c[G] = W);
      let K = W[z];
      K === void 0 && (K = M.clone(), W[z] = K, P.addEventListener("dispose", N)), M = K;
    }
    if (M.visible = P.visible, M.wireframe = P.wireframe, y === Un ? M.side = P.shadowSide !== null ? P.shadowSide : P.side : M.side = P.shadowSide !== null ? P.shadowSide : d[P.side], M.alphaMap = P.alphaMap, M.alphaTest = P.alphaTest, M.map = P.map, M.clipShadows = P.clipShadows, M.clippingPlanes = P.clippingPlanes, M.clipIntersection = P.clipIntersection, M.displacementMap = P.displacementMap, M.displacementScale = P.displacementScale, M.displacementBias = P.displacementBias, M.wireframeLinewidth = P.wireframeLinewidth, M.linewidth = P.linewidth, F.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const G = i.properties.get(M);
      G.light = F;
    }
    return M;
  }
  function S(C, P, F, y, M) {
    if (C.visible === !1) return;
    if (C.layers.test(P.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && M === Un) && (!C.frustumCulled || n.intersectsObject(C))) {
      C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, C.matrixWorld);
      const z = t.update(C), W = C.material;
      if (Array.isArray(W)) {
        const K = z.groups;
        for (let X = 0, tt = K.length; X < tt; X++) {
          const V = K[X], st = W[V.materialIndex];
          if (st && st.visible) {
            const ut = T(C, st, y, M);
            C.onBeforeShadow(i, C, P, F, z, ut, V), i.renderBufferDirect(F, null, z, ut, C, V), C.onAfterShadow(i, C, P, F, z, ut, V);
          }
        }
      } else if (W.visible) {
        const K = T(C, W, y, M);
        C.onBeforeShadow(i, C, P, F, z, K, null), i.renderBufferDirect(F, null, z, K, C, null), C.onAfterShadow(i, C, P, F, z, K, null);
      }
    }
    const G = C.children;
    for (let z = 0, W = G.length; z < W; z++)
      S(G[z], P, F, y, M);
  }
  function N(C) {
    C.target.removeEventListener("dispose", N);
    for (const F in c) {
      const y = c[F], M = C.target.uuid;
      M in y && (y[M].dispose(), delete y[M]);
    }
  }
}
const k_ = {
  [Ga]: ka,
  [Va]: Ya,
  [Wa]: qa,
  [gs]: Xa,
  [ka]: Ga,
  [Ya]: Va,
  [qa]: Wa,
  [Xa]: gs
};
function V_(i, t) {
  function e() {
    let L = !1;
    const ot = new se();
    let k = null;
    const Z = new se(0, 0, 0, 0);
    return {
      setMask: function(ct) {
        k !== ct && !L && (i.colorMask(ct, ct, ct, ct), k = ct);
      },
      setLocked: function(ct) {
        L = ct;
      },
      setClear: function(ct, lt, Lt, he, Re) {
        Re === !0 && (ct *= he, lt *= he, Lt *= he), ot.set(ct, lt, Lt, he), Z.equals(ot) === !1 && (i.clearColor(ct, lt, Lt, he), Z.copy(ot));
      },
      reset: function() {
        L = !1, k = null, Z.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let L = !1, ot = !1, k = null, Z = null, ct = null;
    return {
      setReversed: function(lt) {
        if (ot !== lt) {
          const Lt = t.get("EXT_clip_control");
          lt ? Lt.clipControlEXT(Lt.LOWER_LEFT_EXT, Lt.ZERO_TO_ONE_EXT) : Lt.clipControlEXT(Lt.LOWER_LEFT_EXT, Lt.NEGATIVE_ONE_TO_ONE_EXT), ot = lt;
          const he = ct;
          ct = null, this.setClear(he);
        }
      },
      getReversed: function() {
        return ot;
      },
      setTest: function(lt) {
        lt ? rt(i.DEPTH_TEST) : bt(i.DEPTH_TEST);
      },
      setMask: function(lt) {
        k !== lt && !L && (i.depthMask(lt), k = lt);
      },
      setFunc: function(lt) {
        if (ot && (lt = k_[lt]), Z !== lt) {
          switch (lt) {
            case Ga:
              i.depthFunc(i.NEVER);
              break;
            case ka:
              i.depthFunc(i.ALWAYS);
              break;
            case Va:
              i.depthFunc(i.LESS);
              break;
            case gs:
              i.depthFunc(i.LEQUAL);
              break;
            case Wa:
              i.depthFunc(i.EQUAL);
              break;
            case Xa:
              i.depthFunc(i.GEQUAL);
              break;
            case Ya:
              i.depthFunc(i.GREATER);
              break;
            case qa:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          Z = lt;
        }
      },
      setLocked: function(lt) {
        L = lt;
      },
      setClear: function(lt) {
        ct !== lt && (ot && (lt = 1 - lt), i.clearDepth(lt), ct = lt);
      },
      reset: function() {
        L = !1, k = null, Z = null, ct = null, ot = !1;
      }
    };
  }
  function s() {
    let L = !1, ot = null, k = null, Z = null, ct = null, lt = null, Lt = null, he = null, Re = null;
    return {
      setTest: function(Kt) {
        L || (Kt ? rt(i.STENCIL_TEST) : bt(i.STENCIL_TEST));
      },
      setMask: function(Kt) {
        ot !== Kt && !L && (i.stencilMask(Kt), ot = Kt);
      },
      setFunc: function(Kt, en, wn) {
        (k !== Kt || Z !== en || ct !== wn) && (i.stencilFunc(Kt, en, wn), k = Kt, Z = en, ct = wn);
      },
      setOp: function(Kt, en, wn) {
        (lt !== Kt || Lt !== en || he !== wn) && (i.stencilOp(Kt, en, wn), lt = Kt, Lt = en, he = wn);
      },
      setLocked: function(Kt) {
        L = Kt;
      },
      setClear: function(Kt) {
        Re !== Kt && (i.clearStencil(Kt), Re = Kt);
      },
      reset: function() {
        L = !1, ot = null, k = null, Z = null, ct = null, lt = null, Lt = null, he = null, Re = null;
      }
    };
  }
  const r = new e(), a = new n(), o = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, p = /* @__PURE__ */ new WeakMap(), f = [], _ = null, v = !1, m = null, h = null, b = null, T = null, S = null, N = null, C = null, P = new qt(0, 0, 0), F = 0, y = !1, M = null, D = null, G = null, z = null, W = null;
  const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = !1, tt = 0;
  const V = i.getParameter(i.VERSION);
  V.indexOf("WebGL") !== -1 ? (tt = parseFloat(/^WebGL (\d)/.exec(V)[1]), X = tt >= 1) : V.indexOf("OpenGL ES") !== -1 && (tt = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), X = tt >= 2);
  let st = null, ut = {};
  const Mt = i.getParameter(i.SCISSOR_BOX), Ot = i.getParameter(i.VIEWPORT), ee = new se().fromArray(Mt), q = new se().fromArray(Ot);
  function et(L, ot, k, Z) {
    const ct = new Uint8Array(4), lt = i.createTexture();
    i.bindTexture(L, lt), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Lt = 0; Lt < k; Lt++)
      L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY ? i.texImage3D(ot, 0, i.RGBA, 1, 1, Z, 0, i.RGBA, i.UNSIGNED_BYTE, ct) : i.texImage2D(ot + Lt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ct);
    return lt;
  }
  const _t = {};
  _t[i.TEXTURE_2D] = et(i.TEXTURE_2D, i.TEXTURE_2D, 1), _t[i.TEXTURE_CUBE_MAP] = et(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), _t[i.TEXTURE_2D_ARRAY] = et(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), _t[i.TEXTURE_3D] = et(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), rt(i.DEPTH_TEST), a.setFunc(gs), Gt(!1), zt(al), rt(i.CULL_FACE), R(ii);
  function rt(L) {
    u[L] !== !0 && (i.enable(L), u[L] = !0);
  }
  function bt(L) {
    u[L] !== !1 && (i.disable(L), u[L] = !1);
  }
  function Yt(L, ot) {
    return d[L] !== ot ? (i.bindFramebuffer(L, ot), d[L] = ot, L === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = ot), L === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = ot), !0) : !1;
  }
  function wt(L, ot) {
    let k = f, Z = !1;
    if (L) {
      k = p.get(ot), k === void 0 && (k = [], p.set(ot, k));
      const ct = L.textures;
      if (k.length !== ct.length || k[0] !== i.COLOR_ATTACHMENT0) {
        for (let lt = 0, Lt = ct.length; lt < Lt; lt++)
          k[lt] = i.COLOR_ATTACHMENT0 + lt;
        k.length = ct.length, Z = !0;
      }
    } else
      k[0] !== i.BACK && (k[0] = i.BACK, Z = !0);
    Z && i.drawBuffers(k);
  }
  function de(L) {
    return _ !== L ? (i.useProgram(L), _ = L, !0) : !1;
  }
  const ce = {
    [xi]: i.FUNC_ADD,
    [Ch]: i.FUNC_SUBTRACT,
    [Ph]: i.FUNC_REVERSE_SUBTRACT
  };
  ce[Dh] = i.MIN, ce[Lh] = i.MAX;
  const Bt = {
    [Uh]: i.ZERO,
    [Ih]: i.ONE,
    [Nh]: i.SRC_COLOR,
    [za]: i.SRC_ALPHA,
    [Gh]: i.SRC_ALPHA_SATURATE,
    [zh]: i.DST_COLOR,
    [Oh]: i.DST_ALPHA,
    [Fh]: i.ONE_MINUS_SRC_COLOR,
    [Ha]: i.ONE_MINUS_SRC_ALPHA,
    [Hh]: i.ONE_MINUS_DST_COLOR,
    [Bh]: i.ONE_MINUS_DST_ALPHA,
    [kh]: i.CONSTANT_COLOR,
    [Vh]: i.ONE_MINUS_CONSTANT_COLOR,
    [Wh]: i.CONSTANT_ALPHA,
    [Xh]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function R(L, ot, k, Z, ct, lt, Lt, he, Re, Kt) {
    if (L === ii) {
      v === !0 && (bt(i.BLEND), v = !1);
      return;
    }
    if (v === !1 && (rt(i.BLEND), v = !0), L !== Rh) {
      if (L !== m || Kt !== y) {
        if ((h !== xi || S !== xi) && (i.blendEquation(i.FUNC_ADD), h = xi, S = xi), Kt)
          switch (L) {
            case ns:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ol:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case ll:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case cl:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case ns:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ol:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case ll:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case cl:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        b = null, T = null, N = null, C = null, P.set(0, 0, 0), F = 0, m = L, y = Kt;
      }
      return;
    }
    ct = ct || ot, lt = lt || k, Lt = Lt || Z, (ot !== h || ct !== S) && (i.blendEquationSeparate(ce[ot], ce[ct]), h = ot, S = ct), (k !== b || Z !== T || lt !== N || Lt !== C) && (i.blendFuncSeparate(Bt[k], Bt[Z], Bt[lt], Bt[Lt]), b = k, T = Z, N = lt, C = Lt), (he.equals(P) === !1 || Re !== F) && (i.blendColor(he.r, he.g, he.b, Re), P.copy(he), F = Re), m = L, y = !1;
  }
  function qe(L, ot) {
    L.side === fn ? bt(i.CULL_FACE) : rt(i.CULL_FACE);
    let k = L.side === ze;
    ot && (k = !k), Gt(k), L.blending === ns && L.transparent === !1 ? R(ii) : R(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), a.setFunc(L.depthFunc), a.setTest(L.depthTest), a.setMask(L.depthWrite), r.setMask(L.colorWrite);
    const Z = L.stencilWrite;
    o.setTest(Z), Z && (o.setMask(L.stencilWriteMask), o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), re(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? rt(i.SAMPLE_ALPHA_TO_COVERAGE) : bt(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Gt(L) {
    M !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = L);
  }
  function zt(L) {
    L !== bh ? (rt(i.CULL_FACE), L !== D && (L === al ? i.cullFace(i.BACK) : L === Ah ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : bt(i.CULL_FACE), D = L;
  }
  function St(L) {
    L !== G && (X && i.lineWidth(L), G = L);
  }
  function re(L, ot, k) {
    L ? (rt(i.POLYGON_OFFSET_FILL), (z !== ot || W !== k) && (i.polygonOffset(ot, k), z = ot, W = k)) : bt(i.POLYGON_OFFSET_FILL);
  }
  function xt(L) {
    L ? rt(i.SCISSOR_TEST) : bt(i.SCISSOR_TEST);
  }
  function E(L) {
    L === void 0 && (L = i.TEXTURE0 + K - 1), st !== L && (i.activeTexture(L), st = L);
  }
  function g(L, ot, k) {
    k === void 0 && (st === null ? k = i.TEXTURE0 + K - 1 : k = st);
    let Z = ut[k];
    Z === void 0 && (Z = { type: void 0, texture: void 0 }, ut[k] = Z), (Z.type !== L || Z.texture !== ot) && (st !== k && (i.activeTexture(k), st = k), i.bindTexture(L, ot || _t[L]), Z.type = L, Z.texture = ot);
  }
  function O() {
    const L = ut[st];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function j() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function $() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Y() {
    try {
      i.texSubImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function gt() {
    try {
      i.texSubImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function at() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function dt() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function kt() {
    try {
      i.texStorage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Q() {
    try {
      i.texStorage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ft() {
    try {
      i.texImage2D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function At() {
    try {
      i.texImage3D(...arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ct(L) {
    ee.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), ee.copy(L));
  }
  function pt(L) {
    q.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), q.copy(L));
  }
  function Ht(L, ot) {
    let k = c.get(ot);
    k === void 0 && (k = /* @__PURE__ */ new WeakMap(), c.set(ot, k));
    let Z = k.get(L);
    Z === void 0 && (Z = i.getUniformBlockIndex(ot, L.name), k.set(L, Z));
  }
  function Nt(L, ot) {
    const Z = c.get(ot).get(L);
    l.get(ot) !== Z && (i.uniformBlockBinding(ot, Z, L.__bindingPointIndex), l.set(ot, Z));
  }
  function ie() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, st = null, ut = {}, d = {}, p = /* @__PURE__ */ new WeakMap(), f = [], _ = null, v = !1, m = null, h = null, b = null, T = null, S = null, N = null, C = null, P = new qt(0, 0, 0), F = 0, y = !1, M = null, D = null, G = null, z = null, W = null, ee.set(0, 0, i.canvas.width, i.canvas.height), q.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: o
    },
    enable: rt,
    disable: bt,
    bindFramebuffer: Yt,
    drawBuffers: wt,
    useProgram: de,
    setBlending: R,
    setMaterial: qe,
    setFlipSided: Gt,
    setCullFace: zt,
    setLineWidth: St,
    setPolygonOffset: re,
    setScissorTest: xt,
    activeTexture: E,
    bindTexture: g,
    unbindTexture: O,
    compressedTexImage2D: j,
    compressedTexImage3D: $,
    texImage2D: ft,
    texImage3D: At,
    updateUBOMapping: Ht,
    uniformBlockBinding: Nt,
    texStorage2D: kt,
    texStorage3D: Q,
    texSubImage2D: Y,
    texSubImage3D: gt,
    compressedTexSubImage2D: at,
    compressedTexSubImage3D: dt,
    scissor: Ct,
    viewport: pt,
    reset: ie
  };
}
function W_(i, t, e, n, s, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Dt(), u = /* @__PURE__ */ new WeakMap();
  let d;
  const p = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(E, g) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, g)
    ) : Nr("canvas");
  }
  function v(E, g, O) {
    let j = 1;
    const $ = xt(E);
    if (($.width > O || $.height > O) && (j = O / Math.max($.width, $.height)), j < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const Y = Math.floor(j * $.width), gt = Math.floor(j * $.height);
        d === void 0 && (d = _(Y, gt));
        const at = g ? _(Y, gt) : d;
        return at.width = Y, at.height = gt, at.getContext("2d").drawImage(E, 0, 0, Y, gt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + Y + "x" + gt + ")."), at;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function h(E) {
    i.generateMipmap(E);
  }
  function b(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function T(E, g, O, j, $ = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let Y = g;
    if (g === i.RED && (O === i.FLOAT && (Y = i.R32F), O === i.HALF_FLOAT && (Y = i.R16F), O === i.UNSIGNED_BYTE && (Y = i.R8)), g === i.RED_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.R8UI), O === i.UNSIGNED_SHORT && (Y = i.R16UI), O === i.UNSIGNED_INT && (Y = i.R32UI), O === i.BYTE && (Y = i.R8I), O === i.SHORT && (Y = i.R16I), O === i.INT && (Y = i.R32I)), g === i.RG && (O === i.FLOAT && (Y = i.RG32F), O === i.HALF_FLOAT && (Y = i.RG16F), O === i.UNSIGNED_BYTE && (Y = i.RG8)), g === i.RG_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RG8UI), O === i.UNSIGNED_SHORT && (Y = i.RG16UI), O === i.UNSIGNED_INT && (Y = i.RG32UI), O === i.BYTE && (Y = i.RG8I), O === i.SHORT && (Y = i.RG16I), O === i.INT && (Y = i.RG32I)), g === i.RGB_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RGB8UI), O === i.UNSIGNED_SHORT && (Y = i.RGB16UI), O === i.UNSIGNED_INT && (Y = i.RGB32UI), O === i.BYTE && (Y = i.RGB8I), O === i.SHORT && (Y = i.RGB16I), O === i.INT && (Y = i.RGB32I)), g === i.RGBA_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RGBA8UI), O === i.UNSIGNED_SHORT && (Y = i.RGBA16UI), O === i.UNSIGNED_INT && (Y = i.RGBA32UI), O === i.BYTE && (Y = i.RGBA8I), O === i.SHORT && (Y = i.RGBA16I), O === i.INT && (Y = i.RGBA32I)), g === i.RGB && O === i.UNSIGNED_INT_5_9_9_9_REV && (Y = i.RGB9_E5), g === i.RGBA) {
      const gt = $ ? Ur : Xt.getTransfer(j);
      O === i.FLOAT && (Y = i.RGBA32F), O === i.HALF_FLOAT && (Y = i.RGBA16F), O === i.UNSIGNED_BYTE && (Y = gt === Qt ? i.SRGB8_ALPHA8 : i.RGBA8), O === i.UNSIGNED_SHORT_4_4_4_4 && (Y = i.RGBA4), O === i.UNSIGNED_SHORT_5_5_5_1 && (Y = i.RGB5_A1);
    }
    return (Y === i.R16F || Y === i.R32F || Y === i.RG16F || Y === i.RG32F || Y === i.RGBA16F || Y === i.RGBA32F) && t.get("EXT_color_buffer_float"), Y;
  }
  function S(E, g) {
    let O;
    return E ? g === null || g === wi || g === Os ? O = i.DEPTH24_STENCIL8 : g === Gn ? O = i.DEPTH32F_STENCIL8 : g === Fs && (O = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : g === null || g === wi || g === Os ? O = i.DEPTH_COMPONENT24 : g === Gn ? O = i.DEPTH_COMPONENT32F : g === Fs && (O = i.DEPTH_COMPONENT16), O;
  }
  function N(E, g) {
    return m(E) === !0 || E.isFramebufferTexture && E.minFilter !== gn && E.minFilter !== An ? Math.log2(Math.max(g.width, g.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? g.mipmaps.length : 1;
  }
  function C(E) {
    const g = E.target;
    g.removeEventListener("dispose", C), F(g), g.isVideoTexture && u.delete(g);
  }
  function P(E) {
    const g = E.target;
    g.removeEventListener("dispose", P), M(g);
  }
  function F(E) {
    const g = n.get(E);
    if (g.__webglInit === void 0) return;
    const O = E.source, j = p.get(O);
    if (j) {
      const $ = j[g.__cacheKey];
      $.usedTimes--, $.usedTimes === 0 && y(E), Object.keys(j).length === 0 && p.delete(O);
    }
    n.remove(E);
  }
  function y(E) {
    const g = n.get(E);
    i.deleteTexture(g.__webglTexture);
    const O = E.source, j = p.get(O);
    delete j[g.__cacheKey], a.memory.textures--;
  }
  function M(E) {
    const g = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget)
      for (let j = 0; j < 6; j++) {
        if (Array.isArray(g.__webglFramebuffer[j]))
          for (let $ = 0; $ < g.__webglFramebuffer[j].length; $++) i.deleteFramebuffer(g.__webglFramebuffer[j][$]);
        else
          i.deleteFramebuffer(g.__webglFramebuffer[j]);
        g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer[j]);
      }
    else {
      if (Array.isArray(g.__webglFramebuffer))
        for (let j = 0; j < g.__webglFramebuffer.length; j++) i.deleteFramebuffer(g.__webglFramebuffer[j]);
      else
        i.deleteFramebuffer(g.__webglFramebuffer);
      if (g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer), g.__webglMultisampledFramebuffer && i.deleteFramebuffer(g.__webglMultisampledFramebuffer), g.__webglColorRenderbuffer)
        for (let j = 0; j < g.__webglColorRenderbuffer.length; j++)
          g.__webglColorRenderbuffer[j] && i.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);
      g.__webglDepthRenderbuffer && i.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const O = E.textures;
    for (let j = 0, $ = O.length; j < $; j++) {
      const Y = n.get(O[j]);
      Y.__webglTexture && (i.deleteTexture(Y.__webglTexture), a.memory.textures--), n.remove(O[j]);
    }
    n.remove(E);
  }
  let D = 0;
  function G() {
    D = 0;
  }
  function z() {
    const E = D;
    return E >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + s.maxTextures), D += 1, E;
  }
  function W(E) {
    const g = [];
    return g.push(E.wrapS), g.push(E.wrapT), g.push(E.wrapR || 0), g.push(E.magFilter), g.push(E.minFilter), g.push(E.anisotropy), g.push(E.internalFormat), g.push(E.format), g.push(E.type), g.push(E.generateMipmaps), g.push(E.premultiplyAlpha), g.push(E.flipY), g.push(E.unpackAlignment), g.push(E.colorSpace), g.join();
  }
  function K(E, g) {
    const O = n.get(E);
    if (E.isVideoTexture && St(E), E.isRenderTargetTexture === !1 && E.version > 0 && O.__version !== E.version) {
      const j = E.image;
      if (j === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (j.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(O, E, g);
        return;
      }
    }
    e.bindTexture(i.TEXTURE_2D, O.__webglTexture, i.TEXTURE0 + g);
  }
  function X(E, g) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      q(O, E, g);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, O.__webglTexture, i.TEXTURE0 + g);
  }
  function tt(E, g) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      q(O, E, g);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, O.__webglTexture, i.TEXTURE0 + g);
  }
  function V(E, g) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      et(O, E, g);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + g);
  }
  const st = {
    [Ka]: i.REPEAT,
    [Si]: i.CLAMP_TO_EDGE,
    [$a]: i.MIRRORED_REPEAT
  }, ut = {
    [gn]: i.NEAREST,
    [eu]: i.NEAREST_MIPMAP_NEAREST,
    [Ks]: i.NEAREST_MIPMAP_LINEAR,
    [An]: i.LINEAR,
    [ta]: i.LINEAR_MIPMAP_NEAREST,
    [yi]: i.LINEAR_MIPMAP_LINEAR
  }, Mt = {
    [au]: i.NEVER,
    [du]: i.ALWAYS,
    [ou]: i.LESS,
    [Nc]: i.LEQUAL,
    [lu]: i.EQUAL,
    [uu]: i.GEQUAL,
    [cu]: i.GREATER,
    [hu]: i.NOTEQUAL
  };
  function Ot(E, g) {
    if (g.type === Gn && t.has("OES_texture_float_linear") === !1 && (g.magFilter === An || g.magFilter === ta || g.magFilter === Ks || g.magFilter === yi || g.minFilter === An || g.minFilter === ta || g.minFilter === Ks || g.minFilter === yi) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, st[g.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, st[g.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, st[g.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, ut[g.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, ut[g.minFilter]), g.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, Mt[g.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (g.magFilter === gn || g.minFilter !== Ks && g.minFilter !== yi || g.type === Gn && t.has("OES_texture_float_linear") === !1) return;
      if (g.anisotropy > 1 || n.get(g).__currentAnisotropy) {
        const O = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, s.getMaxAnisotropy())), n.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function ee(E, g) {
    let O = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, g.addEventListener("dispose", C));
    const j = g.source;
    let $ = p.get(j);
    $ === void 0 && ($ = {}, p.set(j, $));
    const Y = W(g);
    if (Y !== E.__cacheKey) {
      $[Y] === void 0 && ($[Y] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, O = !0), $[Y].usedTimes++;
      const gt = $[E.__cacheKey];
      gt !== void 0 && ($[E.__cacheKey].usedTimes--, gt.usedTimes === 0 && y(g)), E.__cacheKey = Y, E.__webglTexture = $[Y].texture;
    }
    return O;
  }
  function q(E, g, O) {
    let j = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && (j = i.TEXTURE_2D_ARRAY), g.isData3DTexture && (j = i.TEXTURE_3D);
    const $ = ee(E, g), Y = g.source;
    e.bindTexture(j, E.__webglTexture, i.TEXTURE0 + O);
    const gt = n.get(Y);
    if (Y.version !== gt.__version || $ === !0) {
      e.activeTexture(i.TEXTURE0 + O);
      const at = Xt.getPrimaries(Xt.workingColorSpace), dt = g.colorSpace === ti ? null : Xt.getPrimaries(g.colorSpace), kt = g.colorSpace === ti || at === dt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, kt);
      let Q = v(g.image, !1, s.maxTextureSize);
      Q = re(g, Q);
      const ft = r.convert(g.format, g.colorSpace), At = r.convert(g.type);
      let Ct = T(g.internalFormat, ft, At, g.colorSpace, g.isVideoTexture);
      Ot(j, g);
      let pt;
      const Ht = g.mipmaps, Nt = g.isVideoTexture !== !0, ie = gt.__version === void 0 || $ === !0, L = Y.dataReady, ot = N(g, Q);
      if (g.isDepthTexture)
        Ct = S(g.format === zs, g.type), ie && (Nt ? e.texStorage2D(i.TEXTURE_2D, 1, Ct, Q.width, Q.height) : e.texImage2D(i.TEXTURE_2D, 0, Ct, Q.width, Q.height, 0, ft, At, null));
      else if (g.isDataTexture)
        if (Ht.length > 0) {
          Nt && ie && e.texStorage2D(i.TEXTURE_2D, ot, Ct, Ht[0].width, Ht[0].height);
          for (let k = 0, Z = Ht.length; k < Z; k++)
            pt = Ht[k], Nt ? L && e.texSubImage2D(i.TEXTURE_2D, k, 0, 0, pt.width, pt.height, ft, At, pt.data) : e.texImage2D(i.TEXTURE_2D, k, Ct, pt.width, pt.height, 0, ft, At, pt.data);
          g.generateMipmaps = !1;
        } else
          Nt ? (ie && e.texStorage2D(i.TEXTURE_2D, ot, Ct, Q.width, Q.height), L && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, ft, At, Q.data)) : e.texImage2D(i.TEXTURE_2D, 0, Ct, Q.width, Q.height, 0, ft, At, Q.data);
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          Nt && ie && e.texStorage3D(i.TEXTURE_2D_ARRAY, ot, Ct, Ht[0].width, Ht[0].height, Q.depth);
          for (let k = 0, Z = Ht.length; k < Z; k++)
            if (pt = Ht[k], g.format !== _n)
              if (ft !== null)
                if (Nt) {
                  if (L)
                    if (g.layerUpdates.size > 0) {
                      const ct = Bl(pt.width, pt.height, g.format, g.type);
                      for (const lt of g.layerUpdates) {
                        const Lt = pt.data.subarray(
                          lt * ct / pt.data.BYTES_PER_ELEMENT,
                          (lt + 1) * ct / pt.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, k, 0, 0, lt, pt.width, pt.height, 1, ft, Lt);
                      }
                      g.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, k, 0, 0, 0, pt.width, pt.height, Q.depth, ft, pt.data);
                } else
                  e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, k, Ct, pt.width, pt.height, Q.depth, 0, pt.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Nt ? L && e.texSubImage3D(i.TEXTURE_2D_ARRAY, k, 0, 0, 0, pt.width, pt.height, Q.depth, ft, At, pt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, k, Ct, pt.width, pt.height, Q.depth, 0, ft, At, pt.data);
        } else {
          Nt && ie && e.texStorage2D(i.TEXTURE_2D, ot, Ct, Ht[0].width, Ht[0].height);
          for (let k = 0, Z = Ht.length; k < Z; k++)
            pt = Ht[k], g.format !== _n ? ft !== null ? Nt ? L && e.compressedTexSubImage2D(i.TEXTURE_2D, k, 0, 0, pt.width, pt.height, ft, pt.data) : e.compressedTexImage2D(i.TEXTURE_2D, k, Ct, pt.width, pt.height, 0, pt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Nt ? L && e.texSubImage2D(i.TEXTURE_2D, k, 0, 0, pt.width, pt.height, ft, At, pt.data) : e.texImage2D(i.TEXTURE_2D, k, Ct, pt.width, pt.height, 0, ft, At, pt.data);
        }
      else if (g.isDataArrayTexture)
        if (Nt) {
          if (ie && e.texStorage3D(i.TEXTURE_2D_ARRAY, ot, Ct, Q.width, Q.height, Q.depth), L)
            if (g.layerUpdates.size > 0) {
              const k = Bl(Q.width, Q.height, g.format, g.type);
              for (const Z of g.layerUpdates) {
                const ct = Q.data.subarray(
                  Z * k / Q.data.BYTES_PER_ELEMENT,
                  (Z + 1) * k / Q.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Z, Q.width, Q.height, 1, ft, At, ct);
              }
              g.clearLayerUpdates();
            } else
              e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, ft, At, Q.data);
        } else
          e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ct, Q.width, Q.height, Q.depth, 0, ft, At, Q.data);
      else if (g.isData3DTexture)
        Nt ? (ie && e.texStorage3D(i.TEXTURE_3D, ot, Ct, Q.width, Q.height, Q.depth), L && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, ft, At, Q.data)) : e.texImage3D(i.TEXTURE_3D, 0, Ct, Q.width, Q.height, Q.depth, 0, ft, At, Q.data);
      else if (g.isFramebufferTexture) {
        if (ie)
          if (Nt)
            e.texStorage2D(i.TEXTURE_2D, ot, Ct, Q.width, Q.height);
          else {
            let k = Q.width, Z = Q.height;
            for (let ct = 0; ct < ot; ct++)
              e.texImage2D(i.TEXTURE_2D, ct, Ct, k, Z, 0, ft, At, null), k >>= 1, Z >>= 1;
          }
      } else if (Ht.length > 0) {
        if (Nt && ie) {
          const k = xt(Ht[0]);
          e.texStorage2D(i.TEXTURE_2D, ot, Ct, k.width, k.height);
        }
        for (let k = 0, Z = Ht.length; k < Z; k++)
          pt = Ht[k], Nt ? L && e.texSubImage2D(i.TEXTURE_2D, k, 0, 0, ft, At, pt) : e.texImage2D(i.TEXTURE_2D, k, Ct, ft, At, pt);
        g.generateMipmaps = !1;
      } else if (Nt) {
        if (ie) {
          const k = xt(Q);
          e.texStorage2D(i.TEXTURE_2D, ot, Ct, k.width, k.height);
        }
        L && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ft, At, Q);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, Ct, ft, At, Q);
      m(g) && h(j), gt.__version = Y.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function et(E, g, O) {
    if (g.image.length !== 6) return;
    const j = ee(E, g), $ = g.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + O);
    const Y = n.get($);
    if ($.version !== Y.__version || j === !0) {
      e.activeTexture(i.TEXTURE0 + O);
      const gt = Xt.getPrimaries(Xt.workingColorSpace), at = g.colorSpace === ti ? null : Xt.getPrimaries(g.colorSpace), dt = g.colorSpace === ti || gt === at ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, dt);
      const kt = g.isCompressedTexture || g.image[0].isCompressedTexture, Q = g.image[0] && g.image[0].isDataTexture, ft = [];
      for (let Z = 0; Z < 6; Z++)
        !kt && !Q ? ft[Z] = v(g.image[Z], !0, s.maxCubemapSize) : ft[Z] = Q ? g.image[Z].image : g.image[Z], ft[Z] = re(g, ft[Z]);
      const At = ft[0], Ct = r.convert(g.format, g.colorSpace), pt = r.convert(g.type), Ht = T(g.internalFormat, Ct, pt, g.colorSpace), Nt = g.isVideoTexture !== !0, ie = Y.__version === void 0 || j === !0, L = $.dataReady;
      let ot = N(g, At);
      Ot(i.TEXTURE_CUBE_MAP, g);
      let k;
      if (kt) {
        Nt && ie && e.texStorage2D(i.TEXTURE_CUBE_MAP, ot, Ht, At.width, At.height);
        for (let Z = 0; Z < 6; Z++) {
          k = ft[Z].mipmaps;
          for (let ct = 0; ct < k.length; ct++) {
            const lt = k[ct];
            g.format !== _n ? Ct !== null ? Nt ? L && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct, 0, 0, lt.width, lt.height, Ct, lt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct, Ht, lt.width, lt.height, 0, lt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct, 0, 0, lt.width, lt.height, Ct, pt, lt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct, Ht, lt.width, lt.height, 0, Ct, pt, lt.data);
          }
        }
      } else {
        if (k = g.mipmaps, Nt && ie) {
          k.length > 0 && ot++;
          const Z = xt(ft[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, ot, Ht, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if (Q) {
            Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, ft[Z].width, ft[Z].height, Ct, pt, ft[Z].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ht, ft[Z].width, ft[Z].height, 0, Ct, pt, ft[Z].data);
            for (let ct = 0; ct < k.length; ct++) {
              const Lt = k[ct].image[Z].image;
              Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct + 1, 0, 0, Lt.width, Lt.height, Ct, pt, Lt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct + 1, Ht, Lt.width, Lt.height, 0, Ct, pt, Lt.data);
            }
          } else {
            Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, Ct, pt, ft[Z]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ht, Ct, pt, ft[Z]);
            for (let ct = 0; ct < k.length; ct++) {
              const lt = k[ct];
              Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct + 1, 0, 0, Ct, pt, lt.image[Z]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct + 1, Ht, Ct, pt, lt.image[Z]);
            }
          }
      }
      m(g) && h(i.TEXTURE_CUBE_MAP), Y.__version = $.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function _t(E, g, O, j, $, Y) {
    const gt = r.convert(O.format, O.colorSpace), at = r.convert(O.type), dt = T(O.internalFormat, gt, at, O.colorSpace), kt = n.get(g), Q = n.get(O);
    if (Q.__renderTarget = g, !kt.__hasExternalTextures) {
      const ft = Math.max(1, g.width >> Y), At = Math.max(1, g.height >> Y);
      $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY ? e.texImage3D($, Y, dt, ft, At, g.depth, 0, gt, at, null) : e.texImage2D($, Y, dt, ft, At, 0, gt, at, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, E), zt(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, j, $, Q.__webglTexture, 0, Gt(g)) : ($ === i.TEXTURE_2D || $ >= i.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, j, $, Q.__webglTexture, Y), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function rt(E, g, O) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), g.depthBuffer) {
      const j = g.depthTexture, $ = j && j.isDepthTexture ? j.type : null, Y = S(g.stencilBuffer, $), gt = g.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, at = Gt(g);
      zt(g) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, at, Y, g.width, g.height) : O ? i.renderbufferStorageMultisample(i.RENDERBUFFER, at, Y, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, Y, g.width, g.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, gt, i.RENDERBUFFER, E);
    } else {
      const j = g.textures;
      for (let $ = 0; $ < j.length; $++) {
        const Y = j[$], gt = r.convert(Y.format, Y.colorSpace), at = r.convert(Y.type), dt = T(Y.internalFormat, gt, at, Y.colorSpace), kt = Gt(g);
        O && zt(g) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, kt, dt, g.width, g.height) : zt(g) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, kt, dt, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, dt, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function bt(E, g) {
    if (g && g.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, E), !(g.depthTexture && g.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const j = n.get(g.depthTexture);
    j.__renderTarget = g, (!j.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = !0), K(g.depthTexture, 0);
    const $ = j.__webglTexture, Y = Gt(g);
    if (g.depthTexture.format === Bs)
      zt(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, Y) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else if (g.depthTexture.format === zs)
      zt(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, Y) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Yt(E) {
    const g = n.get(E), O = E.isWebGLCubeRenderTarget === !0;
    if (g.__boundDepthTexture !== E.depthTexture) {
      const j = E.depthTexture;
      if (g.__depthDisposeCallback && g.__depthDisposeCallback(), j) {
        const $ = () => {
          delete g.__boundDepthTexture, delete g.__depthDisposeCallback, j.removeEventListener("dispose", $);
        };
        j.addEventListener("dispose", $), g.__depthDisposeCallback = $;
      }
      g.__boundDepthTexture = j;
    }
    if (E.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (O) throw new Error("target.depthTexture not supported in Cube render targets");
      bt(g.__webglFramebuffer, E);
    } else if (O) {
      g.__webglDepthbuffer = [];
      for (let j = 0; j < 6; j++)
        if (e.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[j]), g.__webglDepthbuffer[j] === void 0)
          g.__webglDepthbuffer[j] = i.createRenderbuffer(), rt(g.__webglDepthbuffer[j], E, !1);
        else {
          const $ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Y = g.__webglDepthbuffer[j];
          i.bindRenderbuffer(i.RENDERBUFFER, Y), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, Y);
        }
    } else if (e.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer === void 0)
      g.__webglDepthbuffer = i.createRenderbuffer(), rt(g.__webglDepthbuffer, E, !1);
    else {
      const j = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, $ = g.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, $), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, $);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function wt(E, g, O) {
    const j = n.get(E);
    g !== void 0 && _t(j.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), O !== void 0 && Yt(E);
  }
  function de(E) {
    const g = E.texture, O = n.get(E), j = n.get(g);
    E.addEventListener("dispose", P);
    const $ = E.textures, Y = E.isWebGLCubeRenderTarget === !0, gt = $.length > 1;
    if (gt || (j.__webglTexture === void 0 && (j.__webglTexture = i.createTexture()), j.__version = g.version, a.memory.textures++), Y) {
      O.__webglFramebuffer = [];
      for (let at = 0; at < 6; at++)
        if (g.mipmaps && g.mipmaps.length > 0) {
          O.__webglFramebuffer[at] = [];
          for (let dt = 0; dt < g.mipmaps.length; dt++)
            O.__webglFramebuffer[at][dt] = i.createFramebuffer();
        } else
          O.__webglFramebuffer[at] = i.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let at = 0; at < g.mipmaps.length; at++)
          O.__webglFramebuffer[at] = i.createFramebuffer();
      } else
        O.__webglFramebuffer = i.createFramebuffer();
      if (gt)
        for (let at = 0, dt = $.length; at < dt; at++) {
          const kt = n.get($[at]);
          kt.__webglTexture === void 0 && (kt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (E.samples > 0 && zt(E) === !1) {
        O.__webglMultisampledFramebuffer = i.createFramebuffer(), O.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let at = 0; at < $.length; at++) {
          const dt = $[at];
          O.__webglColorRenderbuffer[at] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, O.__webglColorRenderbuffer[at]);
          const kt = r.convert(dt.format, dt.colorSpace), Q = r.convert(dt.type), ft = T(dt.internalFormat, kt, Q, dt.colorSpace, E.isXRRenderTarget === !0), At = Gt(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, At, ft, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + at, i.RENDERBUFFER, O.__webglColorRenderbuffer[at]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (O.__webglDepthRenderbuffer = i.createRenderbuffer(), rt(O.__webglDepthRenderbuffer, E, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, j.__webglTexture), Ot(i.TEXTURE_CUBE_MAP, g);
      for (let at = 0; at < 6; at++)
        if (g.mipmaps && g.mipmaps.length > 0)
          for (let dt = 0; dt < g.mipmaps.length; dt++)
            _t(O.__webglFramebuffer[at][dt], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + at, dt);
        else
          _t(O.__webglFramebuffer[at], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + at, 0);
      m(g) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (gt) {
      for (let at = 0, dt = $.length; at < dt; at++) {
        const kt = $[at], Q = n.get(kt);
        e.bindTexture(i.TEXTURE_2D, Q.__webglTexture), Ot(i.TEXTURE_2D, kt), _t(O.__webglFramebuffer, E, kt, i.COLOR_ATTACHMENT0 + at, i.TEXTURE_2D, 0), m(kt) && h(i.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let at = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (at = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(at, j.__webglTexture), Ot(at, g), g.mipmaps && g.mipmaps.length > 0)
        for (let dt = 0; dt < g.mipmaps.length; dt++)
          _t(O.__webglFramebuffer[dt], E, g, i.COLOR_ATTACHMENT0, at, dt);
      else
        _t(O.__webglFramebuffer, E, g, i.COLOR_ATTACHMENT0, at, 0);
      m(g) && h(at), e.unbindTexture();
    }
    E.depthBuffer && Yt(E);
  }
  function ce(E) {
    const g = E.textures;
    for (let O = 0, j = g.length; O < j; O++) {
      const $ = g[O];
      if (m($)) {
        const Y = b(E), gt = n.get($).__webglTexture;
        e.bindTexture(Y, gt), h(Y), e.unbindTexture();
      }
    }
  }
  const Bt = [], R = [];
  function qe(E) {
    if (E.samples > 0) {
      if (zt(E) === !1) {
        const g = E.textures, O = E.width, j = E.height;
        let $ = i.COLOR_BUFFER_BIT;
        const Y = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, gt = n.get(E), at = g.length > 1;
        if (at)
          for (let dt = 0; dt < g.length; dt++)
            e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + dt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + dt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, gt.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglFramebuffer);
        for (let dt = 0; dt < g.length; dt++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && ($ |= i.STENCIL_BUFFER_BIT)), at) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, gt.__webglColorRenderbuffer[dt]);
            const kt = n.get(g[dt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, kt, 0);
          }
          i.blitFramebuffer(0, 0, O, j, 0, 0, O, j, $, i.NEAREST), l === !0 && (Bt.length = 0, R.length = 0, Bt.push(i.COLOR_ATTACHMENT0 + dt), E.depthBuffer && E.resolveDepthBuffer === !1 && (Bt.push(Y), R.push(Y), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, R)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Bt));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), at)
          for (let dt = 0; dt < g.length; dt++) {
            e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + dt, i.RENDERBUFFER, gt.__webglColorRenderbuffer[dt]);
            const kt = n.get(g[dt]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + dt, i.TEXTURE_2D, kt, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        const g = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function Gt(E) {
    return Math.min(s.maxSamples, E.samples);
  }
  function zt(E) {
    const g = n.get(E);
    return E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && g.__useRenderToTexture !== !1;
  }
  function St(E) {
    const g = a.render.frame;
    u.get(E) !== g && (u.set(E, g), E.update());
  }
  function re(E, g) {
    const O = E.colorSpace, j = E.format, $ = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || O !== Ms && O !== ti && (Xt.getTransfer(O) === Qt ? (j !== _n || $ !== Xn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), g;
  }
  function xt(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = G, this.setTexture2D = K, this.setTexture2DArray = X, this.setTexture3D = tt, this.setTextureCube = V, this.rebindTextures = wt, this.setupRenderTarget = de, this.updateRenderTargetMipmap = ce, this.updateMultisampleRenderTarget = qe, this.setupDepthRenderbuffer = Yt, this.setupFrameBufferTexture = _t, this.useMultisampledRTT = zt;
}
function X_(i, t) {
  function e(n, s = ti) {
    let r;
    const a = Xt.getTransfer(s);
    if (n === Xn) return i.UNSIGNED_BYTE;
    if (n === Oo) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Bo) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === wc) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === bc) return i.BYTE;
    if (n === Ac) return i.SHORT;
    if (n === Fs) return i.UNSIGNED_SHORT;
    if (n === Fo) return i.INT;
    if (n === wi) return i.UNSIGNED_INT;
    if (n === Gn) return i.FLOAT;
    if (n === Vs) return i.HALF_FLOAT;
    if (n === Rc) return i.ALPHA;
    if (n === Cc) return i.RGB;
    if (n === _n) return i.RGBA;
    if (n === Pc) return i.LUMINANCE;
    if (n === Dc) return i.LUMINANCE_ALPHA;
    if (n === Bs) return i.DEPTH_COMPONENT;
    if (n === zs) return i.DEPTH_STENCIL;
    if (n === Lc) return i.RED;
    if (n === zo) return i.RED_INTEGER;
    if (n === Uc) return i.RG;
    if (n === Ho) return i.RG_INTEGER;
    if (n === Go) return i.RGBA_INTEGER;
    if (n === Ar || n === wr || n === Rr || n === Cr)
      if (a === Qt)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === Ar) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === wr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Rr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Cr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === Ar) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === wr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Rr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Cr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Ja || n === Qa || n === to || n === eo)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === Ja) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Qa) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === to) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === eo) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === no || n === io || n === so)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === no || n === io) return a === Qt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === so) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === ro || n === ao || n === oo || n === lo || n === co || n === ho || n === uo || n === fo || n === po || n === mo || n === _o || n === go || n === vo || n === xo)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === ro) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ao) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === oo) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === lo) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === co) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === ho) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === uo) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === fo) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === po) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === mo) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === _o) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === go) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === vo) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === xo) return a === Qt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Pr || n === Mo || n === So)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Pr) return a === Qt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Mo) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === So) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Ic || n === yo || n === Eo || n === To)
      if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Pr) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === yo) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Eo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === To) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Os ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const Y_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, q_ = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class j_ {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(t, e, n) {
    if (this.texture === null) {
      const s = new He(), r = t.properties.get(s);
      r.__webglTexture = e.texture, (e.depthNear !== n.depthNear || e.depthFar !== n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = s;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new qn({
        vertexShader: Y_,
        fragmentShader: q_,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new fe(new Ys(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?Texture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class Z_ extends Di {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, u = null, d = null, p = null, f = null, _ = null;
    const v = new j_(), m = e.getContextAttributes();
    let h = null, b = null;
    const T = [], S = [], N = new Dt();
    let C = null;
    const P = new Qe();
    P.viewport = new se();
    const F = new Qe();
    F.viewport = new se();
    const y = [P, F], M = new pd();
    let D = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let et = T[q];
      return et === void 0 && (et = new Ma(), T[q] = et), et.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let et = T[q];
      return et === void 0 && (et = new Ma(), T[q] = et), et.getGripSpace();
    }, this.getHand = function(q) {
      let et = T[q];
      return et === void 0 && (et = new Ma(), T[q] = et), et.getHandSpace();
    };
    function z(q) {
      const et = S.indexOf(q.inputSource);
      if (et === -1)
        return;
      const _t = T[et];
      _t !== void 0 && (_t.update(q.inputSource, q.frame, c || a), _t.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function W() {
      s.removeEventListener("select", z), s.removeEventListener("selectstart", z), s.removeEventListener("selectend", z), s.removeEventListener("squeeze", z), s.removeEventListener("squeezestart", z), s.removeEventListener("squeezeend", z), s.removeEventListener("end", W), s.removeEventListener("inputsourceschange", K);
      for (let q = 0; q < T.length; q++) {
        const et = S[q];
        et !== null && (S[q] = null, T[q].disconnect(et));
      }
      D = null, G = null, v.reset(), t.setRenderTarget(h), f = null, p = null, d = null, s = null, b = null, ee.stop(), n.isPresenting = !1, t.setPixelRatio(C), t.setSize(N.width, N.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      r = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      o = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(q) {
      c = q;
    }, this.getBaseLayer = function() {
      return p !== null ? p : f;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(q) {
      if (s = q, s !== null) {
        if (h = t.getRenderTarget(), s.addEventListener("select", z), s.addEventListener("selectstart", z), s.addEventListener("selectend", z), s.addEventListener("squeeze", z), s.addEventListener("squeezestart", z), s.addEventListener("squeezeend", z), s.addEventListener("end", W), s.addEventListener("inputsourceschange", K), m.xrCompatible !== !0 && await e.makeXRCompatible(), C = t.getPixelRatio(), t.getSize(N), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let _t = null, rt = null, bt = null;
          m.depth && (bt = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, _t = m.stencil ? zs : Bs, rt = m.stencil ? Os : wi);
          const Yt = {
            colorFormat: e.RGBA8,
            depthFormat: bt,
            scaleFactor: r
          };
          d = new XRWebGLBinding(s, e), p = d.createProjectionLayer(Yt), s.updateRenderState({ layers: [p] }), t.setPixelRatio(1), t.setSize(p.textureWidth, p.textureHeight, !1), b = new Ri(
            p.textureWidth,
            p.textureHeight,
            {
              format: _n,
              type: Xn,
              depthTexture: new jc(p.textureWidth, p.textureHeight, rt, void 0, void 0, void 0, void 0, void 0, void 0, _t),
              stencilBuffer: m.stencil,
              colorSpace: t.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        } else {
          const _t = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(s, e, _t), s.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, !1), b = new Ri(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: _n,
              type: Xn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: m.stencil,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        b.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), ee.setContext(s), ee.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return v.getDepthTexture();
    };
    function K(q) {
      for (let et = 0; et < q.removed.length; et++) {
        const _t = q.removed[et], rt = S.indexOf(_t);
        rt >= 0 && (S[rt] = null, T[rt].disconnect(_t));
      }
      for (let et = 0; et < q.added.length; et++) {
        const _t = q.added[et];
        let rt = S.indexOf(_t);
        if (rt === -1) {
          for (let Yt = 0; Yt < T.length; Yt++)
            if (Yt >= S.length) {
              S.push(_t), rt = Yt;
              break;
            } else if (S[Yt] === null) {
              S[Yt] = _t, rt = Yt;
              break;
            }
          if (rt === -1) break;
        }
        const bt = T[rt];
        bt && bt.connect(_t);
      }
    }
    const X = new w(), tt = new w();
    function V(q, et, _t) {
      X.setFromMatrixPosition(et.matrixWorld), tt.setFromMatrixPosition(_t.matrixWorld);
      const rt = X.distanceTo(tt), bt = et.projectionMatrix.elements, Yt = _t.projectionMatrix.elements, wt = bt[14] / (bt[10] - 1), de = bt[14] / (bt[10] + 1), ce = (bt[9] + 1) / bt[5], Bt = (bt[9] - 1) / bt[5], R = (bt[8] - 1) / bt[0], qe = (Yt[8] + 1) / Yt[0], Gt = wt * R, zt = wt * qe, St = rt / (-R + qe), re = St * -R;
      if (et.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(re), q.translateZ(St), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), bt[10] === -1)
        q.projectionMatrix.copy(et.projectionMatrix), q.projectionMatrixInverse.copy(et.projectionMatrixInverse);
      else {
        const xt = wt + St, E = de + St, g = Gt - re, O = zt + (rt - re), j = ce * de / E * xt, $ = Bt * de / E * xt;
        q.projectionMatrix.makePerspective(g, O, j, $, xt, E), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function st(q, et) {
      et === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(et.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (s === null) return;
      let et = q.near, _t = q.far;
      v.texture !== null && (v.depthNear > 0 && (et = v.depthNear), v.depthFar > 0 && (_t = v.depthFar)), M.near = F.near = P.near = et, M.far = F.far = P.far = _t, (D !== M.near || G !== M.far) && (s.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), D = M.near, G = M.far), P.layers.mask = q.layers.mask | 2, F.layers.mask = q.layers.mask | 4, M.layers.mask = P.layers.mask | F.layers.mask;
      const rt = q.parent, bt = M.cameras;
      st(M, rt);
      for (let Yt = 0; Yt < bt.length; Yt++)
        st(bt[Yt], rt);
      bt.length === 2 ? V(M, P, F) : M.projectionMatrix.copy(P.projectionMatrix), ut(q, M, rt);
    };
    function ut(q, et, _t) {
      _t === null ? q.matrix.copy(et.matrixWorld) : (q.matrix.copy(_t.matrixWorld), q.matrix.invert(), q.matrix.multiply(et.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy(et.projectionMatrix), q.projectionMatrixInverse.copy(et.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = Hs * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(p === null && f === null))
        return l;
    }, this.setFoveation = function(q) {
      l = q, p !== null && (p.fixedFoveation = q), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return v.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return v.getMesh(M);
    };
    let Mt = null;
    function Ot(q, et) {
      if (u = et.getViewerPose(c || a), _ = et, u !== null) {
        const _t = u.views;
        f !== null && (t.setRenderTargetFramebuffer(b, f.framebuffer), t.setRenderTarget(b));
        let rt = !1;
        _t.length !== M.cameras.length && (M.cameras.length = 0, rt = !0);
        for (let wt = 0; wt < _t.length; wt++) {
          const de = _t[wt];
          let ce = null;
          if (f !== null)
            ce = f.getViewport(de);
          else {
            const R = d.getViewSubImage(p, de);
            ce = R.viewport, wt === 0 && (t.setRenderTargetTextures(
              b,
              R.colorTexture,
              R.depthStencilTexture
            ), t.setRenderTarget(b));
          }
          let Bt = y[wt];
          Bt === void 0 && (Bt = new Qe(), Bt.layers.enable(wt), Bt.viewport = new se(), y[wt] = Bt), Bt.matrix.fromArray(de.transform.matrix), Bt.matrix.decompose(Bt.position, Bt.quaternion, Bt.scale), Bt.projectionMatrix.fromArray(de.projectionMatrix), Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(), Bt.viewport.set(ce.x, ce.y, ce.width, ce.height), wt === 0 && (M.matrix.copy(Bt.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), rt === !0 && M.cameras.push(Bt);
        }
        const bt = s.enabledFeatures;
        if (bt && bt.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && d) {
          const wt = d.getDepthInformation(_t[0]);
          wt && wt.isValid && wt.texture && v.init(t, wt, s.renderState);
        }
      }
      for (let _t = 0; _t < T.length; _t++) {
        const rt = S[_t], bt = T[_t];
        rt !== null && bt !== void 0 && bt.update(rt, et, c || a);
      }
      Mt && Mt(q, et), et.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: et }), _ = null;
    }
    const ee = new Zc();
    ee.setAnimationLoop(Ot), this.setAnimationLoop = function(q) {
      Mt = q;
    }, this.dispose = function() {
    };
  }
}
const _i = /* @__PURE__ */ new Yn(), K_ = /* @__PURE__ */ new ae();
function $_(i, t) {
  function e(m, h) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), h.value.copy(m.matrix);
  }
  function n(m, h) {
    h.color.getRGB(m.fogColor.value, Vc(i)), h.isFog ? (m.fogNear.value = h.near, m.fogFar.value = h.far) : h.isFogExp2 && (m.fogDensity.value = h.density);
  }
  function s(m, h, b, T, S) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? r(m, h) : h.isMeshToonMaterial ? (r(m, h), d(m, h)) : h.isMeshPhongMaterial ? (r(m, h), u(m, h)) : h.isMeshStandardMaterial ? (r(m, h), p(m, h), h.isMeshPhysicalMaterial && f(m, h, S)) : h.isMeshMatcapMaterial ? (r(m, h), _(m, h)) : h.isMeshDepthMaterial ? r(m, h) : h.isMeshDistanceMaterial ? (r(m, h), v(m, h)) : h.isMeshNormalMaterial ? r(m, h) : h.isLineBasicMaterial ? (a(m, h), h.isLineDashedMaterial && o(m, h)) : h.isPointsMaterial ? l(m, h, b, T) : h.isSpriteMaterial ? c(m, h) : h.isShadowMaterial ? (m.color.value.copy(h.color), m.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function r(m, h) {
    m.opacity.value = h.opacity, h.color && m.diffuse.value.copy(h.color), h.emissive && m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.bumpMap && (m.bumpMap.value = h.bumpMap, e(h.bumpMap, m.bumpMapTransform), m.bumpScale.value = h.bumpScale, h.side === ze && (m.bumpScale.value *= -1)), h.normalMap && (m.normalMap.value = h.normalMap, e(h.normalMap, m.normalMapTransform), m.normalScale.value.copy(h.normalScale), h.side === ze && m.normalScale.value.negate()), h.displacementMap && (m.displacementMap.value = h.displacementMap, e(h.displacementMap, m.displacementMapTransform), m.displacementScale.value = h.displacementScale, m.displacementBias.value = h.displacementBias), h.emissiveMap && (m.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, m.emissiveMapTransform)), h.specularMap && (m.specularMap.value = h.specularMap, e(h.specularMap, m.specularMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
    const b = t.get(h), T = b.envMap, S = b.envMapRotation;
    T && (m.envMap.value = T, _i.copy(S), _i.x *= -1, _i.y *= -1, _i.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (_i.y *= -1, _i.z *= -1), m.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(_i)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = h.reflectivity, m.ior.value = h.ior, m.refractionRatio.value = h.refractionRatio), h.lightMap && (m.lightMap.value = h.lightMap, m.lightMapIntensity.value = h.lightMapIntensity, e(h.lightMap, m.lightMapTransform)), h.aoMap && (m.aoMap.value = h.aoMap, m.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, m.aoMapTransform));
  }
  function a(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, h.map && (m.map.value = h.map, e(h.map, m.mapTransform));
  }
  function o(m, h) {
    m.dashSize.value = h.dashSize, m.totalSize.value = h.dashSize + h.gapSize, m.scale.value = h.scale;
  }
  function l(m, h, b, T) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.size.value = h.size * b, m.scale.value = T * 0.5, h.map && (m.map.value = h.map, e(h.map, m.uvTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function c(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.rotation.value = h.rotation, h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function u(m, h) {
    m.specular.value.copy(h.specular), m.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(m, h) {
    h.gradientMap && (m.gradientMap.value = h.gradientMap);
  }
  function p(m, h) {
    m.metalness.value = h.metalness, h.metalnessMap && (m.metalnessMap.value = h.metalnessMap, e(h.metalnessMap, m.metalnessMapTransform)), m.roughness.value = h.roughness, h.roughnessMap && (m.roughnessMap.value = h.roughnessMap, e(h.roughnessMap, m.roughnessMapTransform)), h.envMap && (m.envMapIntensity.value = h.envMapIntensity);
  }
  function f(m, h, b) {
    m.ior.value = h.ior, h.sheen > 0 && (m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), m.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (m.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, m.sheenColorMapTransform)), h.sheenRoughnessMap && (m.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, m.sheenRoughnessMapTransform))), h.clearcoat > 0 && (m.clearcoat.value = h.clearcoat, m.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (m.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, m.clearcoatMapTransform)), h.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (m.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === ze && m.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (m.dispersion.value = h.dispersion), h.iridescence > 0 && (m.iridescence.value = h.iridescence, m.iridescenceIOR.value = h.iridescenceIOR, m.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (m.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, m.iridescenceMapTransform)), h.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), h.transmission > 0 && (m.transmission.value = h.transmission, m.transmissionSamplerMap.value = b.texture, m.transmissionSamplerSize.value.set(b.width, b.height), h.transmissionMap && (m.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, m.transmissionMapTransform)), m.thickness.value = h.thickness, h.thicknessMap && (m.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = h.attenuationDistance, m.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (m.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (m.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = h.specularIntensity, m.specularColor.value.copy(h.specularColor), h.specularColorMap && (m.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, m.specularColorMapTransform)), h.specularIntensityMap && (m.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, h) {
    h.matcap && (m.matcap.value = h.matcap);
  }
  function v(m, h) {
    const b = t.get(h).light;
    m.referencePosition.value.setFromMatrixPosition(b.matrixWorld), m.nearDistance.value = b.shadow.camera.near, m.farDistance.value = b.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function J_(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(b, T) {
    const S = T.program;
    n.uniformBlockBinding(b, S);
  }
  function c(b, T) {
    let S = s[b.id];
    S === void 0 && (_(b), S = u(b), s[b.id] = S, b.addEventListener("dispose", m));
    const N = T.program;
    n.updateUBOMapping(b, N);
    const C = t.render.frame;
    r[b.id] !== C && (p(b), r[b.id] = C);
  }
  function u(b) {
    const T = d();
    b.__bindingPointIndex = T;
    const S = i.createBuffer(), N = b.__size, C = b.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, S), i.bufferData(i.UNIFORM_BUFFER, N, C), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, T, S), S;
  }
  function d() {
    for (let b = 0; b < o; b++)
      if (a.indexOf(b) === -1)
        return a.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function p(b) {
    const T = s[b.id], S = b.uniforms, N = b.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    for (let C = 0, P = S.length; C < P; C++) {
      const F = Array.isArray(S[C]) ? S[C] : [S[C]];
      for (let y = 0, M = F.length; y < M; y++) {
        const D = F[y];
        if (f(D, C, y, N) === !0) {
          const G = D.__offset, z = Array.isArray(D.value) ? D.value : [D.value];
          let W = 0;
          for (let K = 0; K < z.length; K++) {
            const X = z[K], tt = v(X);
            typeof X == "number" || typeof X == "boolean" ? (D.__data[0] = X, i.bufferSubData(i.UNIFORM_BUFFER, G + W, D.__data)) : X.isMatrix3 ? (D.__data[0] = X.elements[0], D.__data[1] = X.elements[1], D.__data[2] = X.elements[2], D.__data[3] = 0, D.__data[4] = X.elements[3], D.__data[5] = X.elements[4], D.__data[6] = X.elements[5], D.__data[7] = 0, D.__data[8] = X.elements[6], D.__data[9] = X.elements[7], D.__data[10] = X.elements[8], D.__data[11] = 0) : (X.toArray(D.__data, W), W += tt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, G, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(b, T, S, N) {
    const C = b.value, P = T + "_" + S;
    if (N[P] === void 0)
      return typeof C == "number" || typeof C == "boolean" ? N[P] = C : N[P] = C.clone(), !0;
    {
      const F = N[P];
      if (typeof C == "number" || typeof C == "boolean") {
        if (F !== C)
          return N[P] = C, !0;
      } else if (F.equals(C) === !1)
        return F.copy(C), !0;
    }
    return !1;
  }
  function _(b) {
    const T = b.uniforms;
    let S = 0;
    const N = 16;
    for (let P = 0, F = T.length; P < F; P++) {
      const y = Array.isArray(T[P]) ? T[P] : [T[P]];
      for (let M = 0, D = y.length; M < D; M++) {
        const G = y[M], z = Array.isArray(G.value) ? G.value : [G.value];
        for (let W = 0, K = z.length; W < K; W++) {
          const X = z[W], tt = v(X), V = S % N, st = V % tt.boundary, ut = V + st;
          S += st, ut !== 0 && N - ut < tt.storage && (S += N - ut), G.__data = new Float32Array(tt.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = S, S += tt.storage;
        }
      }
    }
    const C = S % N;
    return C > 0 && (S += N - C), b.__size = S, b.__cache = {}, this;
  }
  function v(b) {
    const T = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof b == "number" || typeof b == "boolean" ? (T.boundary = 4, T.storage = 4) : b.isVector2 ? (T.boundary = 8, T.storage = 8) : b.isVector3 || b.isColor ? (T.boundary = 16, T.storage = 12) : b.isVector4 ? (T.boundary = 16, T.storage = 16) : b.isMatrix3 ? (T.boundary = 48, T.storage = 48) : b.isMatrix4 ? (T.boundary = 64, T.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), T;
  }
  function m(b) {
    const T = b.target;
    T.removeEventListener("dispose", m);
    const S = a.indexOf(T.__bindingPointIndex);
    a.splice(S, 1), i.deleteBuffer(s[T.id]), delete s[T.id], delete r[T.id];
  }
  function h() {
    for (const b in s)
      i.deleteBuffer(s[b]);
    a = [], s = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
class Q_ {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(t = {}) {
    const {
      canvas: e = Cu(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reverseDepthBuffer: p = !1
    } = t;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else
      f = a;
    const _ = new Uint32Array(4), v = new Int32Array(4);
    let m = null, h = null;
    const b = [], T = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = si, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const S = this;
    let N = !1;
    this._outputColorSpace = Je;
    let C = 0, P = 0, F = null, y = -1, M = null;
    const D = new se(), G = new se();
    let z = null;
    const W = new qt(0);
    let K = 0, X = e.width, tt = e.height, V = 1, st = null, ut = null;
    const Mt = new se(0, 0, X, tt), Ot = new se(0, 0, X, tt);
    let ee = !1;
    const q = new Yc();
    let et = !1, _t = !1;
    const rt = new ae(), bt = new ae(), Yt = new w(), wt = new se(), de = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ce = !1;
    function Bt() {
      return F === null ? V : 1;
    }
    let R = n;
    function qe(x, U) {
      return e.getContext(x, U);
    }
    try {
      const x = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${No}`), e.addEventListener("webglcontextlost", Z, !1), e.addEventListener("webglcontextrestored", ct, !1), e.addEventListener("webglcontextcreationerror", lt, !1), R === null) {
        const U = "webgl2";
        if (R = qe(U, x), R === null)
          throw qe(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Gt, zt, St, re, xt, E, g, O, j, $, Y, gt, at, dt, kt, Q, ft, At, Ct, pt, Ht, Nt, ie, L;
    function ot() {
      Gt = new cm(R), Gt.init(), Nt = new X_(R, Gt), zt = new nm(R, Gt, t, Nt), St = new V_(R, Gt), zt.reverseDepthBuffer && p && St.buffers.depth.setReversed(!0), re = new dm(R), xt = new P_(), E = new W_(R, Gt, St, xt, zt, Nt, re), g = new sm(S), O = new lm(S), j = new gd(R), ie = new tm(R, j), $ = new hm(R, j, re, ie), Y = new pm(R, $, j, re), Ct = new fm(R, zt, E), Q = new im(xt), gt = new C_(S, g, O, Gt, zt, ie, Q), at = new $_(S, xt), dt = new L_(), kt = new B_(Gt), At = new Qp(S, g, O, St, Y, f, l), ft = new G_(S, Y, zt), L = new J_(R, re, zt, St), pt = new em(R, Gt, re), Ht = new um(R, Gt, re), re.programs = gt.programs, S.capabilities = zt, S.extensions = Gt, S.properties = xt, S.renderLists = dt, S.shadowMap = ft, S.state = St, S.info = re;
    }
    ot();
    const k = new Z_(S, R);
    this.xr = k, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Gt.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Gt.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (V = x, this.setSize(X, tt, !1));
    }, this.getSize = function(x) {
      return x.set(X, tt);
    }, this.setSize = function(x, U, B = !0) {
      if (k.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      X = x, tt = U, e.width = Math.floor(x * V), e.height = Math.floor(U * V), B === !0 && (e.style.width = x + "px", e.style.height = U + "px"), this.setViewport(0, 0, x, U);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(X * V, tt * V).floor();
    }, this.setDrawingBufferSize = function(x, U, B) {
      X = x, tt = U, V = B, e.width = Math.floor(x * B), e.height = Math.floor(U * B), this.setViewport(0, 0, x, U);
    }, this.getCurrentViewport = function(x) {
      return x.copy(D);
    }, this.getViewport = function(x) {
      return x.copy(Mt);
    }, this.setViewport = function(x, U, B, H) {
      x.isVector4 ? Mt.set(x.x, x.y, x.z, x.w) : Mt.set(x, U, B, H), St.viewport(D.copy(Mt).multiplyScalar(V).round());
    }, this.getScissor = function(x) {
      return x.copy(Ot);
    }, this.setScissor = function(x, U, B, H) {
      x.isVector4 ? Ot.set(x.x, x.y, x.z, x.w) : Ot.set(x, U, B, H), St.scissor(G.copy(Ot).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return ee;
    }, this.setScissorTest = function(x) {
      St.setScissorTest(ee = x);
    }, this.setOpaqueSort = function(x) {
      st = x;
    }, this.setTransparentSort = function(x) {
      ut = x;
    }, this.getClearColor = function(x) {
      return x.copy(At.getClearColor());
    }, this.setClearColor = function() {
      At.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return At.getClearAlpha();
    }, this.setClearAlpha = function() {
      At.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, U = !0, B = !0) {
      let H = 0;
      if (x) {
        let I = !1;
        if (F !== null) {
          const J = F.texture.format;
          I = J === Go || J === Ho || J === zo;
        }
        if (I) {
          const J = F.texture.type, it = J === Xn || J === wi || J === Fs || J === Os || J === Oo || J === Bo, ht = At.getClearColor(), mt = At.getClearAlpha(), Pt = ht.r, Rt = ht.g, yt = ht.b;
          it ? (_[0] = Pt, _[1] = Rt, _[2] = yt, _[3] = mt, R.clearBufferuiv(R.COLOR, 0, _)) : (v[0] = Pt, v[1] = Rt, v[2] = yt, v[3] = mt, R.clearBufferiv(R.COLOR, 0, v));
        } else
          H |= R.COLOR_BUFFER_BIT;
      }
      U && (H |= R.DEPTH_BUFFER_BIT), B && (H |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(H);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", Z, !1), e.removeEventListener("webglcontextrestored", ct, !1), e.removeEventListener("webglcontextcreationerror", lt, !1), At.dispose(), dt.dispose(), kt.dispose(), xt.dispose(), g.dispose(), O.dispose(), Y.dispose(), ie.dispose(), L.dispose(), gt.dispose(), k.dispose(), k.removeEventListener("sessionstart", Jo), k.removeEventListener("sessionend", Qo), ci.stop();
    };
    function Z(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), N = !0;
    }
    function ct() {
      console.log("THREE.WebGLRenderer: Context Restored."), N = !1;
      const x = re.autoReset, U = ft.enabled, B = ft.autoUpdate, H = ft.needsUpdate, I = ft.type;
      ot(), re.autoReset = x, ft.enabled = U, ft.autoUpdate = B, ft.needsUpdate = H, ft.type = I;
    }
    function lt(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Lt(x) {
      const U = x.target;
      U.removeEventListener("dispose", Lt), he(U);
    }
    function he(x) {
      Re(x), xt.remove(x);
    }
    function Re(x) {
      const U = xt.get(x).programs;
      U !== void 0 && (U.forEach(function(B) {
        gt.releaseProgram(B);
      }), x.isShaderMaterial && gt.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, U, B, H, I, J) {
      U === null && (U = de);
      const it = I.isMesh && I.matrixWorld.determinant() < 0, ht = xh(x, U, B, H, I);
      St.setMaterial(H, it);
      let mt = B.index, Pt = 1;
      if (H.wireframe === !0) {
        if (mt = $.getWireframeAttribute(B), mt === void 0) return;
        Pt = 2;
      }
      const Rt = B.drawRange, yt = B.attributes.position;
      let Vt = Rt.start * Pt, jt = (Rt.start + Rt.count) * Pt;
      J !== null && (Vt = Math.max(Vt, J.start * Pt), jt = Math.min(jt, (J.start + J.count) * Pt)), mt !== null ? (Vt = Math.max(Vt, 0), jt = Math.min(jt, mt.count)) : yt != null && (Vt = Math.max(Vt, 0), jt = Math.min(jt, yt.count));
      const me = jt - Vt;
      if (me < 0 || me === 1 / 0) return;
      ie.setup(I, H, ht, B, mt);
      let ue, Wt = pt;
      if (mt !== null && (ue = j.get(mt), Wt = Ht, Wt.setIndex(ue)), I.isMesh)
        H.wireframe === !0 ? (St.setLineWidth(H.wireframeLinewidth * Bt()), Wt.setMode(R.LINES)) : Wt.setMode(R.TRIANGLES);
      else if (I.isLine) {
        let Et = H.linewidth;
        Et === void 0 && (Et = 1), St.setLineWidth(Et * Bt()), I.isLineSegments ? Wt.setMode(R.LINES) : I.isLineLoop ? Wt.setMode(R.LINE_LOOP) : Wt.setMode(R.LINE_STRIP);
      } else I.isPoints ? Wt.setMode(R.POINTS) : I.isSprite && Wt.setMode(R.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          Dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Wt.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
        else if (Gt.get("WEBGL_multi_draw"))
          Wt.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
        else {
          const Et = I._multiDrawStarts, Ee = I._multiDrawCounts, Zt = I._multiDrawCount, nn = mt ? j.get(mt).bytesPerElement : 1, Ui = xt.get(H).currentProgram.getUniforms();
          for (let ke = 0; ke < Zt; ke++)
            Ui.setValue(R, "_gl_DrawID", ke), Wt.render(Et[ke] / nn, Ee[ke]);
        }
      else if (I.isInstancedMesh)
        Wt.renderInstances(Vt, me, I.count);
      else if (B.isInstancedBufferGeometry) {
        const Et = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, Ee = Math.min(B.instanceCount, Et);
        Wt.renderInstances(Vt, me, Ee);
      } else
        Wt.render(Vt, me);
    };
    function Kt(x, U, B) {
      x.transparent === !0 && x.side === fn && x.forceSinglePass === !1 ? (x.side = ze, x.needsUpdate = !0, Zs(x, U, B), x.side = ri, x.needsUpdate = !0, Zs(x, U, B), x.side = fn) : Zs(x, U, B);
    }
    this.compile = function(x, U, B = null) {
      B === null && (B = x), h = kt.get(B), h.init(U), T.push(h), B.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), x !== B && x.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), h.setupLights();
      const H = /* @__PURE__ */ new Set();
      return x.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite))
          return;
        const J = I.material;
        if (J)
          if (Array.isArray(J))
            for (let it = 0; it < J.length; it++) {
              const ht = J[it];
              Kt(ht, B, I), H.add(ht);
            }
          else
            Kt(J, B, I), H.add(J);
      }), h = T.pop(), H;
    }, this.compileAsync = function(x, U, B = null) {
      const H = this.compile(x, U, B);
      return new Promise((I) => {
        function J() {
          if (H.forEach(function(it) {
            xt.get(it).currentProgram.isReady() && H.delete(it);
          }), H.size === 0) {
            I(x);
            return;
          }
          setTimeout(J, 10);
        }
        Gt.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10);
      });
    };
    let en = null;
    function wn(x) {
      en && en(x);
    }
    function Jo() {
      ci.stop();
    }
    function Qo() {
      ci.start();
    }
    const ci = new Zc();
    ci.setAnimationLoop(wn), typeof self < "u" && ci.setContext(self), this.setAnimationLoop = function(x) {
      en = x, k.setAnimationLoop(x), x === null ? ci.stop() : ci.start();
    }, k.addEventListener("sessionstart", Jo), k.addEventListener("sessionend", Qo), this.render = function(x, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (N === !0) return;
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), k.enabled === !0 && k.isPresenting === !0 && (k.cameraAutoUpdate === !0 && k.updateCamera(U), U = k.getCamera()), x.isScene === !0 && x.onBeforeRender(S, x, U, F), h = kt.get(x, T.length), h.init(U), T.push(h), bt.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), q.setFromProjectionMatrix(bt), _t = this.localClippingEnabled, et = Q.init(this.clippingPlanes, _t), m = dt.get(x, b.length), m.init(), b.push(m), k.enabled === !0 && k.isPresenting === !0) {
        const J = S.xr.getDepthSensingMesh();
        J !== null && $r(J, U, -1 / 0, S.sortObjects);
      }
      $r(x, U, 0, S.sortObjects), m.finish(), S.sortObjects === !0 && m.sort(st, ut), ce = k.enabled === !1 || k.isPresenting === !1 || k.hasDepthSensing() === !1, ce && At.addToRenderList(m, x), this.info.render.frame++, et === !0 && Q.beginShadows();
      const B = h.state.shadowsArray;
      ft.render(B, x, U), et === !0 && Q.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const H = m.opaque, I = m.transmissive;
      if (h.setupLights(), U.isArrayCamera) {
        const J = U.cameras;
        if (I.length > 0)
          for (let it = 0, ht = J.length; it < ht; it++) {
            const mt = J[it];
            el(H, I, x, mt);
          }
        ce && At.render(x);
        for (let it = 0, ht = J.length; it < ht; it++) {
          const mt = J[it];
          tl(m, x, mt, mt.viewport);
        }
      } else
        I.length > 0 && el(H, I, x, U), ce && At.render(x), tl(m, x, U);
      F !== null && P === 0 && (E.updateMultisampleRenderTarget(F), E.updateRenderTargetMipmap(F)), x.isScene === !0 && x.onAfterRender(S, x, U), ie.resetDefaultState(), y = -1, M = null, T.pop(), T.length > 0 ? (h = T[T.length - 1], et === !0 && Q.setGlobalState(S.clippingPlanes, h.state.camera)) : h = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null;
    };
    function $r(x, U, B, H) {
      if (x.visible === !1) return;
      if (x.layers.test(U.layers)) {
        if (x.isGroup)
          B = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(U);
        else if (x.isLight)
          h.pushLight(x), x.castShadow && h.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || q.intersectsSprite(x)) {
            H && wt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(bt);
            const it = Y.update(x), ht = x.material;
            ht.visible && m.push(x, it, ht, B, wt.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || q.intersectsObject(x))) {
          const it = Y.update(x), ht = x.material;
          if (H && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), wt.copy(x.boundingSphere.center)) : (it.boundingSphere === null && it.computeBoundingSphere(), wt.copy(it.boundingSphere.center)), wt.applyMatrix4(x.matrixWorld).applyMatrix4(bt)), Array.isArray(ht)) {
            const mt = it.groups;
            for (let Pt = 0, Rt = mt.length; Pt < Rt; Pt++) {
              const yt = mt[Pt], Vt = ht[yt.materialIndex];
              Vt && Vt.visible && m.push(x, it, Vt, B, wt.z, yt);
            }
          } else ht.visible && m.push(x, it, ht, B, wt.z, null);
        }
      }
      const J = x.children;
      for (let it = 0, ht = J.length; it < ht; it++)
        $r(J[it], U, B, H);
    }
    function tl(x, U, B, H) {
      const I = x.opaque, J = x.transmissive, it = x.transparent;
      h.setupLightsView(B), et === !0 && Q.setGlobalState(S.clippingPlanes, B), H && St.viewport(D.copy(H)), I.length > 0 && js(I, U, B), J.length > 0 && js(J, U, B), it.length > 0 && js(it, U, B), St.buffers.depth.setTest(!0), St.buffers.depth.setMask(!0), St.buffers.color.setMask(!0), St.setPolygonOffset(!1);
    }
    function el(x, U, B, H) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      h.state.transmissionRenderTarget[H.id] === void 0 && (h.state.transmissionRenderTarget[H.id] = new Ri(1, 1, {
        generateMipmaps: !0,
        type: Gt.has("EXT_color_buffer_half_float") || Gt.has("EXT_color_buffer_float") ? Vs : Xn,
        minFilter: yi,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Xt.workingColorSpace
      }));
      const J = h.state.transmissionRenderTarget[H.id], it = H.viewport || D;
      J.setSize(it.z * S.transmissionResolutionScale, it.w * S.transmissionResolutionScale);
      const ht = S.getRenderTarget();
      S.setRenderTarget(J), S.getClearColor(W), K = S.getClearAlpha(), K < 1 && S.setClearColor(16777215, 0.5), S.clear(), ce && At.render(B);
      const mt = S.toneMapping;
      S.toneMapping = si;
      const Pt = H.viewport;
      if (H.viewport !== void 0 && (H.viewport = void 0), h.setupLightsView(H), et === !0 && Q.setGlobalState(S.clippingPlanes, H), js(x, B, H), E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J), Gt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Rt = !1;
        for (let yt = 0, Vt = U.length; yt < Vt; yt++) {
          const jt = U[yt], me = jt.object, ue = jt.geometry, Wt = jt.material, Et = jt.group;
          if (Wt.side === fn && me.layers.test(H.layers)) {
            const Ee = Wt.side;
            Wt.side = ze, Wt.needsUpdate = !0, nl(me, B, H, ue, Wt, Et), Wt.side = Ee, Wt.needsUpdate = !0, Rt = !0;
          }
        }
        Rt === !0 && (E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J));
      }
      S.setRenderTarget(ht), S.setClearColor(W, K), Pt !== void 0 && (H.viewport = Pt), S.toneMapping = mt;
    }
    function js(x, U, B) {
      const H = U.isScene === !0 ? U.overrideMaterial : null;
      for (let I = 0, J = x.length; I < J; I++) {
        const it = x[I], ht = it.object, mt = it.geometry, Pt = it.group;
        let Rt = it.material;
        Rt.allowOverride === !0 && H !== null && (Rt = H), ht.layers.test(B.layers) && nl(ht, U, B, mt, Rt, Pt);
      }
    }
    function nl(x, U, B, H, I, J) {
      x.onBeforeRender(S, U, B, H, I, J), x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), I.onBeforeRender(S, U, B, H, x, J), I.transparent === !0 && I.side === fn && I.forceSinglePass === !1 ? (I.side = ze, I.needsUpdate = !0, S.renderBufferDirect(B, U, H, I, x, J), I.side = ri, I.needsUpdate = !0, S.renderBufferDirect(B, U, H, I, x, J), I.side = fn) : S.renderBufferDirect(B, U, H, I, x, J), x.onAfterRender(S, U, B, H, I, J);
    }
    function Zs(x, U, B) {
      U.isScene !== !0 && (U = de);
      const H = xt.get(x), I = h.state.lights, J = h.state.shadowsArray, it = I.state.version, ht = gt.getParameters(x, I.state, J, U, B), mt = gt.getProgramCacheKey(ht);
      let Pt = H.programs;
      H.environment = x.isMeshStandardMaterial ? U.environment : null, H.fog = U.fog, H.envMap = (x.isMeshStandardMaterial ? O : g).get(x.envMap || H.environment), H.envMapRotation = H.environment !== null && x.envMap === null ? U.environmentRotation : x.envMapRotation, Pt === void 0 && (x.addEventListener("dispose", Lt), Pt = /* @__PURE__ */ new Map(), H.programs = Pt);
      let Rt = Pt.get(mt);
      if (Rt !== void 0) {
        if (H.currentProgram === Rt && H.lightsStateVersion === it)
          return sl(x, ht), Rt;
      } else
        ht.uniforms = gt.getUniforms(x), x.onBeforeCompile(ht, S), Rt = gt.acquireProgram(ht, mt), Pt.set(mt, Rt), H.uniforms = ht.uniforms;
      const yt = H.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (yt.clippingPlanes = Q.uniform), sl(x, ht), H.needsLights = Sh(x), H.lightsStateVersion = it, H.needsLights && (yt.ambientLightColor.value = I.state.ambient, yt.lightProbe.value = I.state.probe, yt.directionalLights.value = I.state.directional, yt.directionalLightShadows.value = I.state.directionalShadow, yt.spotLights.value = I.state.spot, yt.spotLightShadows.value = I.state.spotShadow, yt.rectAreaLights.value = I.state.rectArea, yt.ltc_1.value = I.state.rectAreaLTC1, yt.ltc_2.value = I.state.rectAreaLTC2, yt.pointLights.value = I.state.point, yt.pointLightShadows.value = I.state.pointShadow, yt.hemisphereLights.value = I.state.hemi, yt.directionalShadowMap.value = I.state.directionalShadowMap, yt.directionalShadowMatrix.value = I.state.directionalShadowMatrix, yt.spotShadowMap.value = I.state.spotShadowMap, yt.spotLightMatrix.value = I.state.spotLightMatrix, yt.spotLightMap.value = I.state.spotLightMap, yt.pointShadowMap.value = I.state.pointShadowMap, yt.pointShadowMatrix.value = I.state.pointShadowMatrix), H.currentProgram = Rt, H.uniformsList = null, Rt;
    }
    function il(x) {
      if (x.uniformsList === null) {
        const U = x.currentProgram.getUniforms();
        x.uniformsList = Lr.seqWithValue(U.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function sl(x, U) {
      const B = xt.get(x);
      B.outputColorSpace = U.outputColorSpace, B.batching = U.batching, B.batchingColor = U.batchingColor, B.instancing = U.instancing, B.instancingColor = U.instancingColor, B.instancingMorph = U.instancingMorph, B.skinning = U.skinning, B.morphTargets = U.morphTargets, B.morphNormals = U.morphNormals, B.morphColors = U.morphColors, B.morphTargetsCount = U.morphTargetsCount, B.numClippingPlanes = U.numClippingPlanes, B.numIntersection = U.numClipIntersection, B.vertexAlphas = U.vertexAlphas, B.vertexTangents = U.vertexTangents, B.toneMapping = U.toneMapping;
    }
    function xh(x, U, B, H, I) {
      U.isScene !== !0 && (U = de), E.resetTextureUnits();
      const J = U.fog, it = H.isMeshStandardMaterial ? U.environment : null, ht = F === null ? S.outputColorSpace : F.isXRRenderTarget === !0 ? F.texture.colorSpace : Ms, mt = (H.isMeshStandardMaterial ? O : g).get(H.envMap || it), Pt = H.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Rt = !!B.attributes.tangent && (!!H.normalMap || H.anisotropy > 0), yt = !!B.morphAttributes.position, Vt = !!B.morphAttributes.normal, jt = !!B.morphAttributes.color;
      let me = si;
      H.toneMapped && (F === null || F.isXRRenderTarget === !0) && (me = S.toneMapping);
      const ue = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Wt = ue !== void 0 ? ue.length : 0, Et = xt.get(H), Ee = h.state.lights;
      if (et === !0 && (_t === !0 || x !== M)) {
        const Le = x === M && H.id === y;
        Q.setState(H, x, Le);
      }
      let Zt = !1;
      H.version === Et.__version ? (Et.needsLights && Et.lightsStateVersion !== Ee.state.version || Et.outputColorSpace !== ht || I.isBatchedMesh && Et.batching === !1 || !I.isBatchedMesh && Et.batching === !0 || I.isBatchedMesh && Et.batchingColor === !0 && I.colorTexture === null || I.isBatchedMesh && Et.batchingColor === !1 && I.colorTexture !== null || I.isInstancedMesh && Et.instancing === !1 || !I.isInstancedMesh && Et.instancing === !0 || I.isSkinnedMesh && Et.skinning === !1 || !I.isSkinnedMesh && Et.skinning === !0 || I.isInstancedMesh && Et.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && Et.instancingColor === !1 && I.instanceColor !== null || I.isInstancedMesh && Et.instancingMorph === !0 && I.morphTexture === null || I.isInstancedMesh && Et.instancingMorph === !1 && I.morphTexture !== null || Et.envMap !== mt || H.fog === !0 && Et.fog !== J || Et.numClippingPlanes !== void 0 && (Et.numClippingPlanes !== Q.numPlanes || Et.numIntersection !== Q.numIntersection) || Et.vertexAlphas !== Pt || Et.vertexTangents !== Rt || Et.morphTargets !== yt || Et.morphNormals !== Vt || Et.morphColors !== jt || Et.toneMapping !== me || Et.morphTargetsCount !== Wt) && (Zt = !0) : (Zt = !0, Et.__version = H.version);
      let nn = Et.currentProgram;
      Zt === !0 && (nn = Zs(H, U, I));
      let Ui = !1, ke = !1, Ts = !1;
      const oe = nn.getUniforms(), je = Et.uniforms;
      if (St.useProgram(nn.program) && (Ui = !0, ke = !0, Ts = !0), H.id !== y && (y = H.id, ke = !0), Ui || M !== x) {
        St.buffers.depth.getReversed() ? (rt.copy(x.projectionMatrix), Du(rt), Lu(rt), oe.setValue(R, "projectionMatrix", rt)) : oe.setValue(R, "projectionMatrix", x.projectionMatrix), oe.setValue(R, "viewMatrix", x.matrixWorldInverse);
        const Ne = oe.map.cameraPosition;
        Ne !== void 0 && Ne.setValue(R, Yt.setFromMatrixPosition(x.matrixWorld)), zt.logarithmicDepthBuffer && oe.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && oe.setValue(R, "isOrthographic", x.isOrthographicCamera === !0), M !== x && (M = x, ke = !0, Ts = !0);
      }
      if (I.isSkinnedMesh) {
        oe.setOptional(R, I, "bindMatrix"), oe.setOptional(R, I, "bindMatrixInverse");
        const Le = I.skeleton;
        Le && (Le.boneTexture === null && Le.computeBoneTexture(), oe.setValue(R, "boneTexture", Le.boneTexture, E));
      }
      I.isBatchedMesh && (oe.setOptional(R, I, "batchingTexture"), oe.setValue(R, "batchingTexture", I._matricesTexture, E), oe.setOptional(R, I, "batchingIdTexture"), oe.setValue(R, "batchingIdTexture", I._indirectTexture, E), oe.setOptional(R, I, "batchingColorTexture"), I._colorsTexture !== null && oe.setValue(R, "batchingColorTexture", I._colorsTexture, E));
      const Ze = B.morphAttributes;
      if ((Ze.position !== void 0 || Ze.normal !== void 0 || Ze.color !== void 0) && Ct.update(I, B, nn), (ke || Et.receiveShadow !== I.receiveShadow) && (Et.receiveShadow = I.receiveShadow, oe.setValue(R, "receiveShadow", I.receiveShadow)), H.isMeshGouraudMaterial && H.envMap !== null && (je.envMap.value = mt, je.flipEnvMap.value = mt.isCubeTexture && mt.isRenderTargetTexture === !1 ? -1 : 1), H.isMeshStandardMaterial && H.envMap === null && U.environment !== null && (je.envMapIntensity.value = U.environmentIntensity), ke && (oe.setValue(R, "toneMappingExposure", S.toneMappingExposure), Et.needsLights && Mh(je, Ts), J && H.fog === !0 && at.refreshFogUniforms(je, J), at.refreshMaterialUniforms(je, H, V, tt, h.state.transmissionRenderTarget[x.id]), Lr.upload(R, il(Et), je, E)), H.isShaderMaterial && H.uniformsNeedUpdate === !0 && (Lr.upload(R, il(Et), je, E), H.uniformsNeedUpdate = !1), H.isSpriteMaterial && oe.setValue(R, "center", I.center), oe.setValue(R, "modelViewMatrix", I.modelViewMatrix), oe.setValue(R, "normalMatrix", I.normalMatrix), oe.setValue(R, "modelMatrix", I.matrixWorld), H.isShaderMaterial || H.isRawShaderMaterial) {
        const Le = H.uniformsGroups;
        for (let Ne = 0, Jr = Le.length; Ne < Jr; Ne++) {
          const hi = Le[Ne];
          L.update(hi, nn), L.bind(hi, nn);
        }
      }
      return nn;
    }
    function Mh(x, U) {
      x.ambientLightColor.needsUpdate = U, x.lightProbe.needsUpdate = U, x.directionalLights.needsUpdate = U, x.directionalLightShadows.needsUpdate = U, x.pointLights.needsUpdate = U, x.pointLightShadows.needsUpdate = U, x.spotLights.needsUpdate = U, x.spotLightShadows.needsUpdate = U, x.rectAreaLights.needsUpdate = U, x.hemisphereLights.needsUpdate = U;
    }
    function Sh(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return P;
    }, this.getRenderTarget = function() {
      return F;
    }, this.setRenderTargetTextures = function(x, U, B) {
      const H = xt.get(x);
      H.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, H.__autoAllocateDepthBuffer === !1 && (H.__useRenderToTexture = !1), xt.get(x.texture).__webglTexture = U, xt.get(x.depthTexture).__webglTexture = H.__autoAllocateDepthBuffer ? void 0 : B, H.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, U) {
      const B = xt.get(x);
      B.__webglFramebuffer = U, B.__useDefaultFramebuffer = U === void 0;
    };
    const yh = R.createFramebuffer();
    this.setRenderTarget = function(x, U = 0, B = 0) {
      F = x, C = U, P = B;
      let H = !0, I = null, J = !1, it = !1;
      if (x) {
        const mt = xt.get(x);
        if (mt.__useDefaultFramebuffer !== void 0)
          St.bindFramebuffer(R.FRAMEBUFFER, null), H = !1;
        else if (mt.__webglFramebuffer === void 0)
          E.setupRenderTarget(x);
        else if (mt.__hasExternalTextures)
          E.rebindTextures(x, xt.get(x.texture).__webglTexture, xt.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const yt = x.depthTexture;
          if (mt.__boundDepthTexture !== yt) {
            if (yt !== null && xt.has(yt) && (x.width !== yt.image.width || x.height !== yt.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(x);
          }
        }
        const Pt = x.texture;
        (Pt.isData3DTexture || Pt.isDataArrayTexture || Pt.isCompressedArrayTexture) && (it = !0);
        const Rt = xt.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Rt[U]) ? I = Rt[U][B] : I = Rt[U], J = !0) : x.samples > 0 && E.useMultisampledRTT(x) === !1 ? I = xt.get(x).__webglMultisampledFramebuffer : Array.isArray(Rt) ? I = Rt[B] : I = Rt, D.copy(x.viewport), G.copy(x.scissor), z = x.scissorTest;
      } else
        D.copy(Mt).multiplyScalar(V).floor(), G.copy(Ot).multiplyScalar(V).floor(), z = ee;
      if (B !== 0 && (I = yh), St.bindFramebuffer(R.FRAMEBUFFER, I) && H && St.drawBuffers(x, I), St.viewport(D), St.scissor(G), St.setScissorTest(z), J) {
        const mt = xt.get(x.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + U, mt.__webglTexture, B);
      } else if (it) {
        const mt = xt.get(x.texture), Pt = U;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, mt.__webglTexture, B, Pt);
      } else if (x !== null && B !== 0) {
        const mt = xt.get(x.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, mt.__webglTexture, B);
      }
      y = -1;
    }, this.readRenderTargetPixels = function(x, U, B, H, I, J, it) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ht = xt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && it !== void 0 && (ht = ht[it]), ht) {
        St.bindFramebuffer(R.FRAMEBUFFER, ht);
        try {
          const mt = x.texture, Pt = mt.format, Rt = mt.type;
          if (!zt.textureFormatReadable(Pt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!zt.textureTypeReadable(Rt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= x.width - H && B >= 0 && B <= x.height - I && R.readPixels(U, B, H, I, Nt.convert(Pt), Nt.convert(Rt), J);
        } finally {
          const mt = F !== null ? xt.get(F).__webglFramebuffer : null;
          St.bindFramebuffer(R.FRAMEBUFFER, mt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, U, B, H, I, J, it) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ht = xt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && it !== void 0 && (ht = ht[it]), ht)
        if (U >= 0 && U <= x.width - H && B >= 0 && B <= x.height - I) {
          St.bindFramebuffer(R.FRAMEBUFFER, ht);
          const mt = x.texture, Pt = mt.format, Rt = mt.type;
          if (!zt.textureFormatReadable(Pt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!zt.textureTypeReadable(Rt))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const yt = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, yt), R.bufferData(R.PIXEL_PACK_BUFFER, J.byteLength, R.STREAM_READ), R.readPixels(U, B, H, I, Nt.convert(Pt), Nt.convert(Rt), 0);
          const Vt = F !== null ? xt.get(F).__webglFramebuffer : null;
          St.bindFramebuffer(R.FRAMEBUFFER, Vt);
          const jt = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await Pu(R, jt, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, yt), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, J), R.deleteBuffer(yt), R.deleteSync(jt), J;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, U = null, B = 0) {
      const H = Math.pow(2, -B), I = Math.floor(x.image.width * H), J = Math.floor(x.image.height * H), it = U !== null ? U.x : 0, ht = U !== null ? U.y : 0;
      E.setTexture2D(x, 0), R.copyTexSubImage2D(R.TEXTURE_2D, B, 0, 0, it, ht, I, J), St.unbindTexture();
    };
    const Eh = R.createFramebuffer(), Th = R.createFramebuffer();
    this.copyTextureToTexture = function(x, U, B = null, H = null, I = 0, J = null) {
      J === null && (I !== 0 ? (Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), J = I, I = 0) : J = 0);
      let it, ht, mt, Pt, Rt, yt, Vt, jt, me;
      const ue = x.isCompressedTexture ? x.mipmaps[J] : x.image;
      if (B !== null)
        it = B.max.x - B.min.x, ht = B.max.y - B.min.y, mt = B.isBox3 ? B.max.z - B.min.z : 1, Pt = B.min.x, Rt = B.min.y, yt = B.isBox3 ? B.min.z : 0;
      else {
        const Ze = Math.pow(2, -I);
        it = Math.floor(ue.width * Ze), ht = Math.floor(ue.height * Ze), x.isDataArrayTexture ? mt = ue.depth : x.isData3DTexture ? mt = Math.floor(ue.depth * Ze) : mt = 1, Pt = 0, Rt = 0, yt = 0;
      }
      H !== null ? (Vt = H.x, jt = H.y, me = H.z) : (Vt = 0, jt = 0, me = 0);
      const Wt = Nt.convert(U.format), Et = Nt.convert(U.type);
      let Ee;
      U.isData3DTexture ? (E.setTexture3D(U, 0), Ee = R.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (E.setTexture2DArray(U, 0), Ee = R.TEXTURE_2D_ARRAY) : (E.setTexture2D(U, 0), Ee = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, U.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Zt = R.getParameter(R.UNPACK_ROW_LENGTH), nn = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Ui = R.getParameter(R.UNPACK_SKIP_PIXELS), ke = R.getParameter(R.UNPACK_SKIP_ROWS), Ts = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ue.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ue.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Pt), R.pixelStorei(R.UNPACK_SKIP_ROWS, Rt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, yt);
      const oe = x.isDataArrayTexture || x.isData3DTexture, je = U.isDataArrayTexture || U.isData3DTexture;
      if (x.isDepthTexture) {
        const Ze = xt.get(x), Le = xt.get(U), Ne = xt.get(Ze.__renderTarget), Jr = xt.get(Le.__renderTarget);
        St.bindFramebuffer(R.READ_FRAMEBUFFER, Ne.__webglFramebuffer), St.bindFramebuffer(R.DRAW_FRAMEBUFFER, Jr.__webglFramebuffer);
        for (let hi = 0; hi < mt; hi++)
          oe && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, xt.get(x).__webglTexture, I, yt + hi), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, xt.get(U).__webglTexture, J, me + hi)), R.blitFramebuffer(Pt, Rt, it, ht, Vt, jt, it, ht, R.DEPTH_BUFFER_BIT, R.NEAREST);
        St.bindFramebuffer(R.READ_FRAMEBUFFER, null), St.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || x.isRenderTargetTexture || xt.has(x)) {
        const Ze = xt.get(x), Le = xt.get(U);
        St.bindFramebuffer(R.READ_FRAMEBUFFER, Eh), St.bindFramebuffer(R.DRAW_FRAMEBUFFER, Th);
        for (let Ne = 0; Ne < mt; Ne++)
          oe ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Ze.__webglTexture, I, yt + Ne) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Ze.__webglTexture, I), je ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Le.__webglTexture, J, me + Ne) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Le.__webglTexture, J), I !== 0 ? R.blitFramebuffer(Pt, Rt, it, ht, Vt, jt, it, ht, R.COLOR_BUFFER_BIT, R.NEAREST) : je ? R.copyTexSubImage3D(Ee, J, Vt, jt, me + Ne, Pt, Rt, it, ht) : R.copyTexSubImage2D(Ee, J, Vt, jt, Pt, Rt, it, ht);
        St.bindFramebuffer(R.READ_FRAMEBUFFER, null), St.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else
        je ? x.isDataTexture || x.isData3DTexture ? R.texSubImage3D(Ee, J, Vt, jt, me, it, ht, mt, Wt, Et, ue.data) : U.isCompressedArrayTexture ? R.compressedTexSubImage3D(Ee, J, Vt, jt, me, it, ht, mt, Wt, ue.data) : R.texSubImage3D(Ee, J, Vt, jt, me, it, ht, mt, Wt, Et, ue) : x.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, J, Vt, jt, it, ht, Wt, Et, ue.data) : x.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, J, Vt, jt, ue.width, ue.height, Wt, ue.data) : R.texSubImage2D(R.TEXTURE_2D, J, Vt, jt, it, ht, Wt, Et, ue);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, Zt), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, nn), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ui), R.pixelStorei(R.UNPACK_SKIP_ROWS, ke), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Ts), J === 0 && U.generateMipmaps && R.generateMipmap(Ee), St.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, U, B = null, H = null, I = 0) {
      return Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, U, B, H, I);
    }, this.initRenderTarget = function(x) {
      xt.get(x).__webglFramebuffer === void 0 && E.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? E.setTextureCube(x, 0) : x.isData3DTexture ? E.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? E.setTexture2DArray(x, 0) : E.setTexture2D(x, 0), St.unbindTexture();
    }, this.resetState = function() {
      C = 0, P = 0, F = null, St.reset(), ie.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return kn;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = Xt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Xt._getUnpackColorSpace();
  }
}
const cc = { type: "change" }, Zo = { type: "start" }, th = { type: "end" }, Sr = new Wo(), hc = new In(), tg = Math.cos(70 * Fc.DEG2RAD), xe = new w(), Fe = 2 * Math.PI, te = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, La = 1e-6;
class eg extends md {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.state = te.NONE, this.target = new w(), this.cursor = new w(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: es.ROTATE, MIDDLE: es.DOLLY, RIGHT: es.PAN }, this.touches = { ONE: Ji.ROTATE, TWO: Ji.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new w(), this._lastQuaternion = new Ci(), this._lastTargetPosition = new w(), this._quat = new Ci().setFromUnitVectors(t.up, new w(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Nl(), this._sphericalDelta = new Nl(), this._scale = 1, this._panOffset = new w(), this._rotateStart = new Dt(), this._rotateEnd = new Dt(), this._rotateDelta = new Dt(), this._panStart = new Dt(), this._panEnd = new Dt(), this._panDelta = new Dt(), this._dollyStart = new Dt(), this._dollyEnd = new Dt(), this._dollyDelta = new Dt(), this._dollyDirection = new w(), this._mouse = new Dt(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = ig.bind(this), this._onPointerDown = ng.bind(this), this._onPointerUp = sg.bind(this), this._onContextMenu = ug.bind(this), this._onMouseWheel = og.bind(this), this._onKeyDown = lg.bind(this), this._onTouchStart = cg.bind(this), this._onTouchMove = hg.bind(this), this._onMouseDown = rg.bind(this), this._onMouseMove = ag.bind(this), this._interceptControlDown = dg.bind(this), this._interceptControlUp = fg.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  /**
   * Get the current vertical rotation, in radians.
   *
   * @return {number} The current vertical rotation, in radians.
   */
  getPolarAngle() {
    return this._spherical.phi;
  }
  /**
   * Get the current horizontal rotation, in radians.
   *
   * @return {number} The current horizontal rotation, in radians.
   */
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  /**
   * Returns the distance from the camera to the target.
   *
   * @return {number} The distance from the camera to the target.
   */
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  /**
   * Adds key event listeners to the given DOM element.
   * `window` is a recommended argument for using this method.
   *
   * @param {HTMLDOMElement} domElement - The DOM element
   */
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  /**
   * Removes the key event listener previously defined with `listenToKeyEvents()`.
   */
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  /**
   * Save the current state of the controls. This can later be recovered with `reset()`.
   */
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  /**
   * Reset the controls to their state from either the last time the `saveState()`
   * was called, or the initial state.
   */
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(cc), this.update(), this.state = te.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    xe.copy(e).sub(this.target), xe.applyQuaternion(this._quat), this._spherical.setFromVector3(xe), this.autoRotate && this.state === te.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Fe : n > Math.PI && (n -= Fe), s < -Math.PI ? s += Fe : s > Math.PI && (s -= Fe), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (xe.setFromSpherical(this._spherical), xe.applyQuaternion(this._quatInverse), e.copy(this.target).add(xe), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = xe.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new w(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new w(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = xe.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (Sr.origin.copy(this.object.position), Sr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Sr.direction)) < tg ? this.object.lookAt(this.target) : (hc.setFromNormalAndCoplanarPoint(this.object.up, this.target), Sr.intersectPlane(hc, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > La || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > La || this._lastTargetPosition.distanceToSquared(this.target) > La ? (this.dispatchEvent(cc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Fe / 60 * this.autoRotateSpeed * t : Fe / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    xe.setFromMatrixColumn(e, 0), xe.multiplyScalar(-t), this._panOffset.add(xe);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0 ? xe.setFromMatrixColumn(e, 1) : (xe.setFromMatrixColumn(e, 0), xe.crossVectors(this.object.up, xe)), xe.multiplyScalar(t), this._panOffset.add(xe);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      xe.copy(s).sub(this.target);
      let r = xe.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / n.clientHeight, this.object.matrix), this._panUp(2 * e * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), s = t - n.left, r = e - n.top, a = n.width, o = n.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Fe * this._rotateDelta.x / e.clientHeight), this._rotateUp(Fe * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = !1;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Fe * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = !0;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Fe * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = !0;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Fe * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = !0;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Fe * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = !0;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1)
      this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1)
      this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + n.x), r = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Fe * this._rotateDelta.x / e.clientHeight), this._rotateUp(Fe * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1)
      this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (t.pageX + e.x) * 0.5, o = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  // pointers
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) {
        this._pointers.splice(e, 1);
        return;
      }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) return !0;
    return !1;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new Dt(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  //
  _customWheelEvent(t) {
    const e = t.deltaMode, n = {
      clientX: t.clientX,
      clientY: t.clientY,
      deltaY: t.deltaY
    };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function ng(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function ig(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function sg(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(th), this.state = te.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function rg(i) {
  let t;
  switch (i.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case es.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = te.DOLLY;
      break;
    case es.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = te.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = te.ROTATE;
      }
      break;
    case es.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = te.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = te.PAN;
      }
      break;
    default:
      this.state = te.NONE;
  }
  this.state !== te.NONE && this.dispatchEvent(Zo);
}
function ag(i) {
  switch (this.state) {
    case te.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case te.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case te.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function og(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== te.NONE || (i.preventDefault(), this.dispatchEvent(Zo), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(th));
}
function lg(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function cg(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ji.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = te.TOUCH_ROTATE;
          break;
        case Ji.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = te.TOUCH_PAN;
          break;
        default:
          this.state = te.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ji.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = te.TOUCH_DOLLY_PAN;
          break;
        case Ji.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = te.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = te.NONE;
      }
      break;
    default:
      this.state = te.NONE;
  }
  this.state !== te.NONE && this.dispatchEvent(Zo);
}
function hg(i) {
  switch (this._trackPointer(i), this.state) {
    case te.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case te.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case te.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case te.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = te.NONE;
  }
}
function ug(i) {
  this.enabled !== !1 && i.preventDefault();
}
function dg(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function fg(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const uc = new oi(), yr = new w();
class eh extends fd {
  /**
   * Constructs a new line segments geometry.
   */
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const t = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], e = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new pe(t, 3)), this.setAttribute("uv", new pe(e, 2));
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {LineSegmentsGeometry} A reference to this instance.
   */
  applyMatrix4(t) {
    const e = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return e !== void 0 && (e.applyMatrix4(t), n.applyMatrix4(t), e.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Sets the given line positions for this geometry. The length must be a multiple of six since
   * each line segment is defined by a start end vertex in the pattern `(xyz xyz)`.
   *
   * @param {Float32Array|Array<number>} array - The position data to set.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  setPositions(t) {
    let e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    const n = new Ao(e, 6, 1);
    return this.setAttribute("instanceStart", new ei(n, 3, 0)), this.setAttribute("instanceEnd", new ei(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  /**
   * Sets the given line colors for this geometry. The length must be a multiple of six since
   * each line segment is defined by a start end color in the pattern `(rgb rgb)`.
   *
   * @param {Float32Array|Array<number>} array - The position data to set.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  setColors(t) {
    let e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    const n = new Ao(e, 6, 1);
    return this.setAttribute("instanceColorStart", new ei(n, 3, 0)), this.setAttribute("instanceColorEnd", new ei(n, 3, 3)), this;
  }
  /**
   * Setups this line segments geometry from the given wireframe geometry.
   *
   * @param {WireframeGeometry} geometry - The geometry that should be used as a data source for this geometry.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  fromWireframeGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  /**
   * Setups this line segments geometry from the given edges geometry.
   *
   * @param {EdgesGeometry} geometry - The geometry that should be used as a data source for this geometry.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  fromEdgesGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  /**
   * Setups this line segments geometry from the given mesh.
   *
   * @param {Mesh} mesh - The mesh geometry that should be used as a data source for this geometry.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  fromMesh(t) {
    return this.fromWireframeGeometry(new cd(t.geometry)), this;
  }
  /**
   * Setups this line segments geometry from the given line segments.
   *
   * @param {LineSegments} lineSegments - The line segments that should be used as a data source for this geometry.
   * Assumes the source geometry is not using indices.
   * @return {LineSegmentsGeometry} A reference to this geometry.
   */
  fromLineSegments(t) {
    const e = t.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new oi());
    const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    t !== void 0 && e !== void 0 && (this.boundingBox.setFromBufferAttribute(t), uc.setFromBufferAttribute(e), this.boundingBox.union(uc));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Li()), this.boundingBox === null && this.computeBoundingBox();
    const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    if (t !== void 0 && e !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++)
        yr.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(yr)), yr.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(yr));
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
}
nt.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new Dt(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
Be.line = {
  uniforms: Xo.merge([
    nt.common,
    nt.fog,
    nt.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
class Kr extends qn {
  /**
   * Constructs a new line segments geometry.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(t) {
    super({
      type: "LineMaterial",
      uniforms: Xo.clone(Be.line.uniforms),
      vertexShader: Be.line.vertexShader,
      fragmentShader: Be.line.fragmentShader,
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.setValues(t);
  }
  /**
   * The material's color.
   *
   * @type {Color}
   * @default (1,1,1)
   */
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(t) {
    this.uniforms.diffuse.value = t;
  }
  /**
   * Whether the material's sizes (width, dash gaps) are in world units.
   *
   * @type {boolean}
   * @default false
   */
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(t) {
    t === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  /**
   * Controls line thickness in CSS pixel units when `worldUnits` is `false` (default),
   * or in world units when `worldUnits` is `true`.
   *
   * @type {number}
   * @default 1
   */
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(t) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = t);
  }
  /**
   * Whether the line is dashed, or solid.
   *
   * @type {boolean}
   * @default false
   */
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(t) {
    t === !0 !== this.dashed && (this.needsUpdate = !0), t === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  /**
   * The scale of the dashes and gaps.
   *
   * @type {number}
   * @default 1
   */
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(t) {
    this.uniforms.dashScale.value = t;
  }
  /**
   * The size of the dash.
   *
   * @type {number}
   * @default 1
   */
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(t) {
    this.uniforms.dashSize.value = t;
  }
  /**
   * Where in the dash cycle the dash starts.
   *
   * @type {number}
   * @default 0
   */
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(t) {
    this.uniforms.dashOffset.value = t;
  }
  /**
   * The size of the gap.
   *
   * @type {number}
   * @default 0
   */
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(t) {
    this.uniforms.gapSize.value = t;
  }
  /**
   * The opacity.
   *
   * @type {number}
   * @default 1
   */
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(t) {
    this.uniforms && (this.uniforms.opacity.value = t);
  }
  /**
   * The size of the viewport, in screen pixels. This must be kept updated to make
   * screen-space rendering accurate.The `LineSegments2.onBeforeRender` callback
   * performs the update for visible objects.
   *
   * @type {Vector2}
   */
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(t) {
    this.uniforms.resolution.value.copy(t);
  }
  /**
   * Whether to use alphaToCoverage or not. When enabled, this can improve the
   * anti-aliasing of line edges when using MSAA.
   *
   * @type {boolean}
   */
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(t) {
    this.defines && (t === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), t === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
}
const Ua = new se(), dc = new w(), fc = new w(), Te = new se(), be = new se(), xn = new se(), Ia = new w(), Na = new ae(), Ae = new qo(), pc = new w(), Er = new oi(), Tr = new Li(), Mn = new se();
let bn, Ai;
function mc(i, t, e) {
  return Mn.set(0, 0, -t, 1).applyMatrix4(i.projectionMatrix), Mn.multiplyScalar(1 / Mn.w), Mn.x = Ai / e.width, Mn.y = Ai / e.height, Mn.applyMatrix4(i.projectionMatrixInverse), Mn.multiplyScalar(1 / Mn.w), Math.abs(Math.max(Mn.x, Mn.y));
}
function pg(i, t) {
  const e = i.matrixWorld, n = i.geometry, s = n.attributes.instanceStart, r = n.attributes.instanceEnd, a = Math.min(n.instanceCount, s.count);
  for (let o = 0, l = a; o < l; o++) {
    Ae.start.fromBufferAttribute(s, o), Ae.end.fromBufferAttribute(r, o), Ae.applyMatrix4(e);
    const c = new w(), u = new w();
    bn.distanceSqToSegment(Ae.start, Ae.end, u, c), u.distanceTo(c) < Ai * 0.5 && t.push({
      point: u,
      pointOnLine: c,
      distance: bn.origin.distanceTo(u),
      object: i,
      face: null,
      faceIndex: o,
      uv: null,
      uv1: null
    });
  }
}
function mg(i, t, e) {
  const n = t.projectionMatrix, r = i.material.resolution, a = i.matrixWorld, o = i.geometry, l = o.attributes.instanceStart, c = o.attributes.instanceEnd, u = Math.min(o.instanceCount, l.count), d = -t.near;
  bn.at(1, xn), xn.w = 1, xn.applyMatrix4(t.matrixWorldInverse), xn.applyMatrix4(n), xn.multiplyScalar(1 / xn.w), xn.x *= r.x / 2, xn.y *= r.y / 2, xn.z = 0, Ia.copy(xn), Na.multiplyMatrices(t.matrixWorldInverse, a);
  for (let p = 0, f = u; p < f; p++) {
    if (Te.fromBufferAttribute(l, p), be.fromBufferAttribute(c, p), Te.w = 1, be.w = 1, Te.applyMatrix4(Na), be.applyMatrix4(Na), Te.z > d && be.z > d)
      continue;
    if (Te.z > d) {
      const T = Te.z - be.z, S = (Te.z - d) / T;
      Te.lerp(be, S);
    } else if (be.z > d) {
      const T = be.z - Te.z, S = (be.z - d) / T;
      be.lerp(Te, S);
    }
    Te.applyMatrix4(n), be.applyMatrix4(n), Te.multiplyScalar(1 / Te.w), be.multiplyScalar(1 / be.w), Te.x *= r.x / 2, Te.y *= r.y / 2, be.x *= r.x / 2, be.y *= r.y / 2, Ae.start.copy(Te), Ae.start.z = 0, Ae.end.copy(be), Ae.end.z = 0;
    const v = Ae.closestPointToPointParameter(Ia, !0);
    Ae.at(v, pc);
    const m = Fc.lerp(Te.z, be.z, v), h = m >= -1 && m <= 1, b = Ia.distanceTo(pc) < Ai * 0.5;
    if (h && b) {
      Ae.start.fromBufferAttribute(l, p), Ae.end.fromBufferAttribute(c, p), Ae.start.applyMatrix4(a), Ae.end.applyMatrix4(a);
      const T = new w(), S = new w();
      bn.distanceSqToSegment(Ae.start, Ae.end, S, T), e.push({
        point: S,
        pointOnLine: T,
        distance: bn.origin.distanceTo(S),
        object: i,
        face: null,
        faceIndex: p,
        uv: null,
        uv1: null
      });
    }
  }
}
class _g extends fe {
  /**
   * Constructs a new wide line.
   *
   * @param {LineSegmentsGeometry} [geometry] - The line geometry.
   * @param {LineMaterial} [material] - The line material.
   */
  constructor(t = new eh(), e = new Kr({ color: Math.random() * 16777215 })) {
    super(t, e), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  /**
   * Computes an array of distance values which are necessary for rendering dashed lines.
   * For each vertex in the geometry, the method calculates the cumulative length from the
   * current point to the very beginning of the line.
   *
   * @return {LineSegments2} A reference to this instance.
   */
  computeLineDistances() {
    const t = this.geometry, e = t.attributes.instanceStart, n = t.attributes.instanceEnd, s = new Float32Array(2 * e.count);
    for (let a = 0, o = 0, l = e.count; a < l; a++, o += 2)
      dc.fromBufferAttribute(e, a), fc.fromBufferAttribute(n, a), s[o] = o === 0 ? 0 : s[o - 1], s[o + 1] = s[o] + dc.distanceTo(fc);
    const r = new Ao(s, 2, 1);
    return t.setAttribute("instanceDistanceStart", new ei(r, 1, 0)), t.setAttribute("instanceDistanceEnd", new ei(r, 1, 1)), this;
  }
  /**
   * Computes intersection points between a casted ray and this instance.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(t, e) {
    const n = this.material.worldUnits, s = t.camera;
    s === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const r = t.params.Line2 !== void 0 && t.params.Line2.threshold || 0;
    bn = t.ray;
    const a = this.matrixWorld, o = this.geometry, l = this.material;
    Ai = l.linewidth + r, o.boundingSphere === null && o.computeBoundingSphere(), Tr.copy(o.boundingSphere).applyMatrix4(a);
    let c;
    if (n)
      c = Ai * 0.5;
    else {
      const d = Math.max(s.near, Tr.distanceToPoint(bn.origin));
      c = mc(s, d, l.resolution);
    }
    if (Tr.radius += c, bn.intersectsSphere(Tr) === !1)
      return;
    o.boundingBox === null && o.computeBoundingBox(), Er.copy(o.boundingBox).applyMatrix4(a);
    let u;
    if (n)
      u = Ai * 0.5;
    else {
      const d = Math.max(s.near, Er.distanceToPoint(bn.origin));
      u = mc(s, d, l.resolution);
    }
    Er.expandByScalar(u), bn.intersectsBox(Er) !== !1 && (n ? pg(this, e) : mg(this, s, e));
  }
  onBeforeRender(t) {
    const e = this.material.uniforms;
    e && e.resolution && (t.getViewport(Ua), this.material.uniforms.resolution.value.set(Ua.z, Ua.w));
  }
}
class Ko extends eh {
  /**
   * Constructs a new line geometry.
   */
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  /**
   * Sets the given line positions for this geometry.
   *
   * @param {Float32Array|Array<number>} array - The position data to set.
   * @return {LineGeometry} A reference to this geometry.
   */
  setPositions(t) {
    const e = t.length - 3, n = new Float32Array(2 * e);
    for (let s = 0; s < e; s += 3)
      n[2 * s] = t[s], n[2 * s + 1] = t[s + 1], n[2 * s + 2] = t[s + 2], n[2 * s + 3] = t[s + 3], n[2 * s + 4] = t[s + 4], n[2 * s + 5] = t[s + 5];
    return super.setPositions(n), this;
  }
  /**
   * Sets the given line colors for this geometry.
   *
   * @param {Float32Array|Array<number>} array - The position data to set.
   * @return {LineGeometry} A reference to this geometry.
   */
  setColors(t) {
    const e = t.length - 3, n = new Float32Array(2 * e);
    for (let s = 0; s < e; s += 3)
      n[2 * s] = t[s], n[2 * s + 1] = t[s + 1], n[2 * s + 2] = t[s + 2], n[2 * s + 3] = t[s + 3], n[2 * s + 4] = t[s + 4], n[2 * s + 5] = t[s + 5];
    return super.setColors(n), this;
  }
  /**
   * Setups this line segments geometry from the given sequence of points.
   *
   * @param {Array<Vector3|Vector2>} points - An array of points in 2D or 3D space.
   * @return {LineGeometry} A reference to this geometry.
   */
  setFromPoints(t) {
    const e = t.length - 1, n = new Float32Array(6 * e);
    for (let s = 0; s < e; s++)
      n[6 * s] = t[s].x, n[6 * s + 1] = t[s].y, n[6 * s + 2] = t[s].z || 0, n[6 * s + 3] = t[s + 1].x, n[6 * s + 4] = t[s + 1].y, n[6 * s + 5] = t[s + 1].z || 0;
    return super.setPositions(n), this;
  }
  /**
   * Setups this line segments geometry from the given line.
   *
   * @param {Line} line - The line that should be used as a data source for this geometry.
   * @return {LineGeometry} A reference to this geometry.
   */
  fromLine(t) {
    const e = t.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
}
class nh extends _g {
  /**
   * Constructs a new wide line.
   *
   * @param {LineGeometry} [geometry] - The line geometry.
   * @param {LineMaterial} [material] - The line material.
   */
  constructor(t = new Ko(), e = new Kr({ color: Math.random() * 16777215 })) {
    super(t, e), this.isLine2 = !0, this.type = "Line2";
  }
}
class gg extends De {
  /**
   * Constructs a new CSS2D object.
   *
   * @param {DOMElement} [element] - The DOM element.
   */
  constructor(t = document.createElement("div")) {
    super(), this.isCSS2DObject = !0, this.element = t, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.center = new Dt(0.5, 0.5), this.addEventListener("removed", function() {
      this.traverse(function(e) {
        e.element instanceof e.element.ownerDocument.defaultView.Element && e.element.parentNode !== null && e.element.remove();
      });
    });
  }
  copy(t, e) {
    return super.copy(t, e), this.element = t.element.cloneNode(!0), this.center = t.center, this;
  }
}
const ji = new w(), _c = new ae(), gc = new ae(), vc = new w(), xc = new w();
class vg {
  /**
   * Constructs a new CSS2D renderer.
   *
   * @param {CSS2DRenderer~Parameters} [parameters] - The parameters.
   */
  constructor(t = {}) {
    const e = this;
    let n, s, r, a;
    const o = {
      objects: /* @__PURE__ */ new WeakMap()
    }, l = t.element !== void 0 ? t.element : document.createElement("div");
    l.style.overflow = "hidden", this.domElement = l, this.getSize = function() {
      return {
        width: n,
        height: s
      };
    }, this.render = function(_, v) {
      _.matrixWorldAutoUpdate === !0 && _.updateMatrixWorld(), v.parent === null && v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), _c.copy(v.matrixWorldInverse), gc.multiplyMatrices(v.projectionMatrix, _c), u(_, _, v), f(_);
    }, this.setSize = function(_, v) {
      n = _, s = v, r = n / 2, a = s / 2, l.style.width = _ + "px", l.style.height = v + "px";
    };
    function c(_) {
      _.isCSS2DObject && (_.element.style.display = "none");
      for (let v = 0, m = _.children.length; v < m; v++)
        c(_.children[v]);
    }
    function u(_, v, m) {
      if (_.visible === !1) {
        c(_);
        return;
      }
      if (_.isCSS2DObject) {
        ji.setFromMatrixPosition(_.matrixWorld), ji.applyMatrix4(gc);
        const h = ji.z >= -1 && ji.z <= 1 && _.layers.test(m.layers) === !0, b = _.element;
        b.style.display = h === !0 ? "" : "none", h === !0 && (_.onBeforeRender(e, v, m), b.style.transform = "translate(" + -100 * _.center.x + "%," + -100 * _.center.y + "%)translate(" + (ji.x * r + r) + "px," + (-ji.y * a + a) + "px)", b.parentNode !== l && l.appendChild(b), _.onAfterRender(e, v, m));
        const T = {
          distanceToCameraSquared: d(m, _)
        };
        o.objects.set(_, T);
      }
      for (let h = 0, b = _.children.length; h < b; h++)
        u(_.children[h], v, m);
    }
    function d(_, v) {
      return vc.setFromMatrixPosition(_.matrixWorld), xc.setFromMatrixPosition(v.matrixWorld), vc.distanceToSquared(xc);
    }
    function p(_) {
      const v = [];
      return _.traverseVisible(function(m) {
        m.isCSS2DObject && v.push(m);
      }), v;
    }
    function f(_) {
      const v = p(_).sort(function(h, b) {
        if (h.renderOrder !== b.renderOrder)
          return b.renderOrder - h.renderOrder;
        const T = o.objects.get(h).distanceToCameraSquared, S = o.objects.get(b).distanceToCameraSquared;
        return T - S;
      }), m = v.length;
      for (let h = 0, b = v.length; h < b; h++)
        v[h].element.style.zIndex = m - h;
    }
  }
}
var ss, Nn, $e, ai, Ro, Co;
class xg {
  constructor(t, e) {
    Tt(this, ai);
    Tt(this, ss);
    Tt(this, Nn);
    Tt(this, $e);
    vt(this, ss, t.mesh), vt(this, Nn, e), vt(this, $e, new gg(document.createElement("div"))), A(this, ss).add(A(this, $e)), e.asTeX ? ne(this, ai, Co).call(this, this.text) : ne(this, ai, Ro).call(this, this.text);
  }
  get mesh() {
    return A(this, $e);
  }
  get text() {
    return A(this, Nn).content ?? A(this, ss).name;
  }
  update(t, e) {
    return A(this, Nn).content = t, e !== void 0 && (A(this, Nn).asTeX = e), A(this, Nn).asTeX ? ne(this, ai, Co).call(this, t) : ne(this, ai, Ro).call(this, t), this;
  }
}
ss = new WeakMap(), Nn = new WeakMap(), $e = new WeakMap(), ai = new WeakSet(), Ro = function(t) {
  A(this, $e).element.textContent = t, A(this, $e).element.style.textAlign = "center", A(this, $e).center.set(0, 0);
}, Co = function(t) {
  A(this, $e).element.innerHTML = A(this, Nn).converter(t), A(this, $e).element.classList.add("katex-m-0"), A(this, $e).center.set(0, 1);
};
var rs, as, on, Ei, Ti;
class qs {
  constructor(t, e) {
    Tt(this, rs);
    Tt(this, as);
    Tt(this, on);
    Tt(this, Ei);
    Tt(this, Ti);
    vt(this, rs, t), vt(this, as, e), vt(this, Ti, {
      opacity: 1,
      color: "#000000"
    });
  }
  get scene() {
    return A(this, rs);
  }
  set scene(t) {
    vt(this, rs, t);
  }
  get name() {
    return A(this, as);
  }
  set name(t) {
    vt(this, as, t);
  }
  get appearance() {
    return A(this, Ti);
  }
  set appearance(t) {
    vt(this, Ti, t);
  }
  get mesh() {
    return A(this, on);
  }
  set mesh(t) {
    vt(this, on, t);
  }
  get line() {
  }
  get arrow() {
  }
  get label() {
    return A(this, Ei);
  }
  update() {
    return this.computed(), this;
  }
  color(t) {
    return A(this, on).traverse((e) => {
      e instanceof fe && e.material.color.set(t);
    }), this;
  }
  dash(t) {
    return A(this, on).traverse((e) => {
      if (e instanceof fe) {
        if (this.line === void 0)
          return;
        const n = e.material;
        n.dashed = !!t, typeof t != "boolean" && (n.dashScale = t), this.line.computeLineDistances();
      }
    }), this;
  }
  dot() {
    return this.dash(10);
  }
  mark() {
    return this.line === void 0 ? this : this.arrow === void 0 ? this : (this.arrow.visible = !0, this);
  }
  lineWidth(t) {
    return A(this, on).traverse((e) => {
      if (e instanceof fe) {
        if (this.line === void 0)
          return;
        const n = e.material;
        n.linewidth = t;
      }
    }), this;
  }
  fill(t, e) {
    return e === void 0 && (e = A(this, Ti).opacity), A(this, on).traverse((n) => {
      if (n instanceof fe) {
        const s = n.material;
        s.color.set(t), s.opacity = e;
      }
    }), this;
  }
  wire(t) {
    return A(this, on).traverse((e) => {
      if (e instanceof fe) {
        const n = e.material;
        n.wireframe = t === void 0 ? !n.wireframe : t;
      }
    }), this;
  }
  addLabel(t, e, n) {
    return A(this, Ei) === void 0 ? vt(this, Ei, new xg(this, {
      content: t,
      asTeX: e,
      converter: n
    })) : A(this, Ei).update(t, e), this;
  }
  hide() {
    return A(this, on).visible = !1, this;
  }
}
rs = new WeakMap(), as = new WeakMap(), on = new WeakMap(), Ei = new WeakMap(), Ti = new WeakMap();
var Fn, os, ls, ln, Pi, ih, Po;
class Br extends qs {
  constructor(e, n, s) {
    super(e, n);
    Tt(this, Pi);
    Tt(this, Fn);
    Tt(this, os);
    // XYZ
    Tt(this, ls);
    // XYZ
    Tt(this, ln);
    return vt(this, os, new w(0, 0, 0)), vt(this, ls, new w(0, 0, 1)), vt(this, Fn, Object.assign({
      type: "line"
    }, s)), this.appearance = Object.assign(
      {
        color: "black",
        width: 1,
        dashed: !1
      },
      s.appearance
    ), ne(this, Pi, ih).call(this), this;
  }
  get A() {
    return A(this, os);
  }
  get B() {
    return A(this, ls);
  }
  get direction() {
    return this.B.clone().sub(this.A).normalize();
  }
  get config() {
    return A(this, Fn);
  }
  get line() {
    return this.mesh;
  }
  get math() {
    return new qo(this.A, this.B);
  }
  computed() {
    var r;
    const e = A(this, Fn).type, n = new w(), s = new w();
    if (this.config.through)
      n.set(this.config.through.A.x, this.config.through.A.y, this.config.through.A.z), s.set(this.config.through.B.x, this.config.through.B.y, this.config.through.B.z);
    else if (this.config.plane) {
      const a = this.config.plane.normal;
      n.set(this.config.plane.point.x, this.config.plane.point.y, this.config.plane.point.z), s.set(n.x + a.x, n.y + a.y, n.z + a.z);
    } else if (this.config.parallel) {
      const a = this.config.parallel.direction;
      n.set(this.config.parallel.point.x, this.config.parallel.point.y, this.config.parallel.point.z), s.set(n.x + a.x, n.y + a.y, n.z + a.z);
    }
    if (vt(this, os, n.clone()), vt(this, ls, s.clone()), e === "ray" && s.sub(n).normalize().multiplyScalar(1e3), e === "line") {
      const a = s.clone().sub(n).normalize().multiplyScalar(1e3);
      n.sub(a), s.add(a);
    }
    if (e === "vector") {
      A(this, ln) || ne(this, Pi, Po).call(this);
      const a = ((r = A(this, Fn).arrow) == null ? void 0 : r.length) ?? 0.6;
      A(this, ln).translateX(this.B.x), A(this, ln).translateY(this.B.y), A(this, ln).translateZ(this.B.z), A(this, ln).translateOnAxis(this.direction, -a / 2), A(this, ln).quaternion.setFromUnitVectors(
        new w(0, 1, 0),
        this.direction
      );
    }
    this.line.geometry.setPositions([n.x, n.y, n.z, s.x, s.y, s.z]), this.line.computeLineDistances();
  }
}
Fn = new WeakMap(), os = new WeakMap(), ls = new WeakMap(), ln = new WeakMap(), Pi = new WeakSet(), ih = function() {
  const e = new Ko(), n = new Kr({
    color: this.appearance.color,
    linewidth: this.appearance.width,
    vertexColors: !1,
    dashed: !!this.appearance.dashed,
    alphaToCoverage: !0
  });
  this.mesh = new nh(e, n), this.mesh.scale.set(1, 1, 1), A(this, Fn).type === "vector" && ne(this, Pi, Po).call(this), this.scene.add(this.mesh), this.computed();
}, Po = function() {
  const e = Object.assign({
    width: 0.2,
    length: 0.6
  }, A(this, Fn).arrow);
  vt(this, ln, new fe(
    new qr(
      e.width,
      e.length,
      16
    ),
    new li({ color: this.appearance.color })
  )), this.mesh.add(A(this, ln));
};
var yn, Jt, On, Hr, sh;
class zr extends qs {
  constructor(e, n, s) {
    super(e, n);
    Tt(this, Hr);
    Tt(this, yn);
    Tt(this, Jt);
    Tt(this, On);
    return vt(this, Jt, s), vt(this, On, new In()), vt(this, yn, Object.assign({
      rotate: 0,
      width: 10,
      height: 10
    }, s.shape)), this.appearance = Object.assign(
      {
        opacity: 0.8,
        color: "lightblue"
      },
      s.appearance
    ), ne(this, Hr, sh).call(this), this;
  }
  get width() {
    return A(this, yn).width;
  }
  set width(e) {
    A(this, yn).width = e;
  }
  get height() {
    return A(this, yn).height;
  }
  set height(e) {
    A(this, yn).height = e;
  }
  get math() {
    return A(this, On);
  }
  computed() {
    var n, s;
    const e = new w();
    if (A(this, Jt).equation) {
      const [r] = A(this, Jt).equation.split("="), a = r.split(/(?=[+|-])/);
      let o = 0, l = 0, c = 0, u = 0;
      a.forEach((f) => {
        f.includes("x") ? o = f === "x" || f === "+x" ? 1 : f === "-x" ? -1 : Number(f.replace("x", "")) : f.includes("y") ? l = f === "y" || f === "+y" ? 1 : f === "-y" ? -1 : Number(f.replace("y", "")) : f.includes("z") ? c = f === "z" || f === "+z" ? 1 : f === "-z" ? -1 : Number(f.replace("z", "")) : u = Number(f);
      });
      let d = new w(0, 0, 0);
      c !== 0 ? d.z = -u / c : l !== 0 ? d.y = -u / l : o !== 0 && (d.x = -u / o);
      const p = new w(o, l, c).normalize();
      A(this, On).setFromNormalAndCoplanarPoint(p, d), e.set(d.x, d.y, d.z);
    } else if ((n = A(this, Jt).through) != null && n.A && A(this, Jt).through.B && A(this, Jt).through.C) {
      const r = new w(A(this, Jt).through.A.x, A(this, Jt).through.A.y, A(this, Jt).through.A.z), a = new w(A(this, Jt).through.B.x, A(this, Jt).through.B.y, A(this, Jt).through.B.z), o = new w(A(this, Jt).through.C.x, A(this, Jt).through.C.y, A(this, Jt).through.C.z);
      A(this, On).setFromCoplanarPoints(r, a, o), e.set(
        (r.x + a.x + o.x) / 3,
        (r.y + a.y + o.y) / 3,
        (r.z + a.z + o.z) / 3
      );
    } else if ((s = A(this, Jt).fromLine) != null && s.line && A(this, Jt).fromLine.point) {
      const r = A(this, Jt).fromLine.point.clone(), a = A(this, Jt).fromLine.line.clone(), o = new qo(
        r,
        r.clone().add(a)
      ), l = new w();
      o.delta(l).normalize(), A(this, On).setFromNormalAndCoplanarPoint(
        l,
        new w(A(this, Jt).fromLine.point.x, A(this, Jt).fromLine.point.y, A(this, Jt).fromLine.point.z)
      ), e.set(
        A(this, Jt).fromLine.point.x,
        A(this, Jt).fromLine.point.y,
        A(this, Jt).fromLine.point.z
      );
    }
    this.mesh.position.set(e.x, e.y, e.z), this.mesh.quaternion.setFromUnitVectors(new w(0, 0, 1), A(this, On).normal), A(this, yn).rotate > 0 && this.mesh.rotateZ(A(this, yn).rotate * Math.PI / 180);
  }
}
yn = new WeakMap(), Jt = new WeakMap(), On = new WeakMap(), Hr = new WeakSet(), sh = function() {
  const e = new Ys(this.width, this.height), n = new li({
    color: this.appearance.color,
    side: fn,
    wireframe: !1,
    transparent: !0,
    opacity: this.appearance.opacity
  });
  this.mesh = new fe(e, n), this.scene.add(this.mesh), this.computed();
};
var Bn, zn, Hn, ks, Gr, rh;
const kr = class kr extends qs {
  constructor(e, n, s) {
    super(e, n);
    Tt(this, Gr);
    Tt(this, Bn, 0);
    Tt(this, zn, 0);
    Tt(this, Hn, 0);
    Tt(this, ks);
    return s.color && (this.appearance.color = s.color), vt(this, ks, s), ne(this, Gr, rh).call(this), this;
  }
  get v3() {
    return new w(A(this, Bn), A(this, zn), A(this, Hn));
  }
  get x() {
    return A(this, Bn);
  }
  set x(e) {
    vt(this, Bn, e);
  }
  get y() {
    return A(this, zn);
  }
  set y(e) {
    vt(this, zn, e);
  }
  get z() {
    return A(this, Hn);
  }
  set z(e) {
    vt(this, Hn, e);
  }
  get config() {
    return A(this, ks);
  }
  computed() {
    if (this.config.coordinates)
      vt(this, Bn, this.config.coordinates.x), vt(this, zn, this.config.coordinates.y), vt(this, Hn, this.config.coordinates.z);
    else if (this.config.projection) {
      const { object: e, target: n } = this.config.projection;
      console.log(e, n);
      const s = new w();
      if (e instanceof kr && n instanceof Br) {
        const r = e.v3;
        n.math.closestPointToPoint(r, !1, s);
      }
      e instanceof kr && n instanceof zr && n.math.projectPoint(e.v3, s), vt(this, Bn, s.x), vt(this, zn, s.y), vt(this, Hn, s.z);
    }
    this.mesh.position.set(A(this, Bn), A(this, zn), A(this, Hn)), this.config.size && this.config.size > 0 && this.mesh.scale.set(this.config.size, this.config.size, this.config.size);
  }
};
Bn = new WeakMap(), zn = new WeakMap(), Hn = new WeakMap(), ks = new WeakMap(), Gr = new WeakSet(), rh = function() {
  const e = new jr(0.07, 16, 16), n = new li({ color: this.appearance.color });
  this.mesh = new fe(e, n), this.scene.add(this.mesh), this.computed();
};
let Gs = kr;
var ge, cs, hs, cn, us, En, ys, ah, oh;
class Mg extends qs {
  constructor(e, n, s) {
    super(e, n);
    Tt(this, ys);
    Tt(this, ge);
    Tt(this, cs);
    Tt(this, hs);
    Tt(this, cn);
    Tt(this, us);
    Tt(this, En);
    return vt(this, ge, Object.assign({}, s)), vt(this, cs, A(this, ge).start.clone().sub(A(this, ge).center)), vt(this, hs, A(this, ge).end.clone().sub(A(this, ge).center)), this.appearance = Object.assign(
      {
        color: "black",
        width: 1,
        dashed: !1
      },
      s.appearance
    ), ne(this, ys, ah).call(this), this;
  }
  get start() {
    return A(this, ge).start;
  }
  get end() {
    return A(this, ge).end;
  }
  get center() {
    return A(this, ge).center;
  }
  get config() {
    return A(this, ge);
  }
  get AB() {
    return A(this, cs);
  }
  get AC() {
    return A(this, hs);
  }
  get angle() {
    return A(this, cs).angleTo(A(this, hs));
  }
  get radius() {
    return A(this, ge).radius instanceof w ? A(this, ge).radius.clone().sub(A(this, ge).center).length() : isNaN(A(this, ge).radius) || A(this, ge).radius <= 0 ? 1 : A(this, ge).radius;
  }
  get line() {
    return A(this, us);
  }
  get arrow() {
    return A(this, cn);
  }
  computed() {
    this.mesh.position.set(this.center.x, this.center.y, this.center.z), this.mesh.quaternion.setFromUnitVectors(
      new w(0, 0, 1),
      this.AB.clone().cross(this.AC).normalize()
    );
    const e = A(this, En).getPoint(0), n = new w(e.x, e.y, 0);
    this.mesh.localToWorld(n), this.mesh.rotateZ(this.AB.angleTo(n.clone().sub(this.center))), this.line.computeLineDistances();
  }
}
ge = new WeakMap(), cs = new WeakMap(), hs = new WeakMap(), cn = new WeakMap(), us = new WeakMap(), En = new WeakMap(), ys = new WeakSet(), ah = function() {
  const e = new Ko();
  vt(this, En, new ld(0, 0, this.radius, this.radius, 0, this.angle, !1, 0));
  const n = [];
  A(this, En).getPoints(50).forEach((r) => {
    n.push(r.x, r.y, 0);
  }), e.setPositions(n);
  const s = new Kr({
    color: this.appearance.color,
    linewidth: this.appearance.width,
    vertexColors: !1,
    dashed: !!this.appearance.dashed,
    alphaToCoverage: !0
  });
  this.mesh = new Ps(), vt(this, us, new nh(e, s)), this.mesh.add(A(this, us)), ne(this, ys, oh).call(this), this.scene.add(this.mesh), this.computed();
}, oh = function() {
  const e = Object.assign({
    width: 0.05,
    length: 0.2
  }, A(this, ge).arrow);
  vt(this, cn, new fe(
    new qr(
      e.width,
      e.length,
      16
    ),
    new li({
      color: this.appearance.color
      // transparent: true,
      // opacity: 0.4
    })
  )), A(this, cn).position.set(A(this, En).getPoint(1).x, A(this, En).getPoint(1).y, 0);
  const n = A(this, En).getLength(), s = (n - e.length / 2) / n, r = A(this, En).getTangent(s);
  A(this, cn).translateX(-r.x * e.length / 2), A(this, cn).translateY(-r.y * e.length / 2), A(this, cn).quaternion.setFromUnitVectors(
    new w(0, 1, 0),
    new w(r.x, r.y, 0)
  ), this.mesh.add(A(this, cn)), A(this, cn).visible = A(this, ge).mark === !0;
};
var Vr, hn, bi, Wr, lh;
class Sg extends qs {
  constructor(e, n, s) {
    super(e, n);
    Tt(this, Wr);
    Tt(this, Vr);
    Tt(this, hn);
    Tt(this, bi);
    return vt(this, hn, s), vt(this, bi, new Li(
      new w(),
      1
    )), vt(this, Vr, Object.assign({
      segments: {
        width: 16,
        height: 16
      }
    }, s.shape)), this.appearance = Object.assign(
      {
        opacity: 0.8,
        color: "lightblue"
      },
      s.appearance
    ), ne(this, Wr, lh).call(this), this;
  }
  get center() {
    return A(this, bi).center;
  }
  get radius() {
    return A(this, bi).radius;
  }
  get math() {
    return A(this, bi);
  }
  computed() {
    if (A(this, hn).centerRadius) {
      const e = new w(
        A(this, hn).centerRadius.center.x,
        A(this, hn).centerRadius.center.y,
        A(this, hn).centerRadius.center.z
      ), n = A(this, hn).centerRadius.radius;
      this.mesh.position.set(e.x, e.y, e.z), this.mesh.scale.set(n, n, n);
    }
  }
}
Vr = new WeakMap(), hn = new WeakMap(), bi = new WeakMap(), Wr = new WeakSet(), lh = function() {
  var s, r;
  const e = new jr(1, ((s = A(this, hn).shape) == null ? void 0 : s.segments.width) ?? 16, ((r = A(this, hn).shape) == null ? void 0 : r.segments.height) ?? 16), n = new li({
    color: this.appearance.color,
    side: fn,
    wireframe: !1,
    transparent: !0,
    opacity: this.appearance.opacity
  });
  this.mesh = new fe(e, n), this.scene.add(this.mesh), this.computed();
};
var Oe, ds, Tn, un, dn, Xe, le, fs, ps, tn, ch, Do, Lo, hh;
class yg {
  constructor(t, e) {
    Tt(this, tn);
    Tt(this, Oe);
    Tt(this, ds);
    Tt(this, Tn);
    Tt(this, un);
    Tt(this, dn);
    Tt(this, Xe);
    Tt(this, le);
    Tt(this, fs);
    Tt(this, ps);
    let n;
    if (typeof t == "string") {
      if (n = document.getElementById(t), !n)
        throw new Error("Container not found");
    } else
      n = t;
    vt(this, Oe, document.createElement("div")), A(this, Oe).style.width = "100%", A(this, Oe).style.height = "100%", A(this, Oe).style.position = "relative", A(this, Oe).style.overflow = "hidden", n.appendChild(A(this, Oe)), vt(this, fs, {}), vt(this, ds, Object.assign({
      backgroundColor: "#ffffff"
    }, e)), e != null && e.converter ? vt(this, ps, e.converter) : vt(this, ps, (s) => s), ne(this, tn, ch).call(this), e != null && e.grid && ne(this, tn, Do).call(this), e != null && e.axis && ne(this, tn, Lo).call(this);
  }
  get container() {
    return A(this, Oe);
  }
  get config() {
    return A(this, ds);
  }
  get figures() {
    return A(this, fs);
  }
  get renderer() {
    return A(this, Tn);
  }
  get css2DRenderer() {
    return A(this, un);
  }
  get controls() {
    return A(this, dn);
  }
  get camera() {
    return A(this, Xe);
  }
  get scene() {
    return A(this, le);
  }
  get converter() {
    return A(this, ps);
  }
  get create() {
    return {
      point: (t, e) => {
        const n = new Gs(A(this, le), e, t);
        return this.figures[e] = n, n;
      },
      line: (t, e) => {
        const n = new Br(A(this, le), e, t);
        return this.figures[e] = n, n;
      },
      plane: (t, e) => {
        const n = new zr(A(this, le), e, t);
        return this.figures[e] = n, n;
      },
      arc: (t, e) => {
        const n = new Mg(A(this, le), e, t);
        return this.figures[e] = n, n;
      },
      sphere: (t, e) => {
        const n = new Sg(A(this, le), e, t);
        return this.figures[e] = n, n;
      }
    };
  }
  mount() {
    return A(this, Oe).appendChild(A(this, Tn).domElement), A(this, Oe).appendChild(A(this, un).domElement), A(this, Tn).setAnimationLoop(() => {
      ne(this, tn, hh).call(this);
    }), this.onResize(), this;
  }
  onResize() {
    const t = A(this, Oe).clientWidth, e = A(this, Oe).clientHeight;
    return A(this, Tn).setSize(t, e), A(this, un).setSize(t, e), A(this, Xe).aspect = t / e, A(this, Xe).updateProjectionMatrix(), this;
  }
  toggleGrid(t) {
    const e = A(this, le).getObjectByName("gridXY"), n = A(this, le).getObjectByName("gridYZ"), s = A(this, le).getObjectByName("gridXZ");
    t === void 0 && (e && n && s ? t = !e.visible : t = !1), e && n && s ? (e.visible = t, n.visible = t, s.visible = t) : t && ne(this, tn, Do).call(this);
  }
  toggleAxis(t) {
    const e = A(this, le).getObjectByName("axisX"), n = A(this, le).getObjectByName("axisY"), s = A(this, le).getObjectByName("axisZ");
    t === void 0 && (e && n && s ? t = !e.visible : t = !1), e && n && s ? (e.visible = t, n.visible = t, s.visible = t) : t && ne(this, tn, Lo).call(this);
  }
  clear() {
    Object.keys(this.figures).forEach((t) => {
      this.figures[t].label && this.figures[t].mesh.remove(this.figures[t].label.mesh), this.scene.remove(this.figures[t].mesh);
    }), vt(this, fs, {});
  }
  updateLayout() {
    return this;
  }
  update() {
    return Object.keys(this.figures).forEach((t) => {
      this.figures[t].update();
    }), this;
  }
}
Oe = new WeakMap(), ds = new WeakMap(), Tn = new WeakMap(), un = new WeakMap(), dn = new WeakMap(), Xe = new WeakMap(), le = new WeakMap(), fs = new WeakMap(), ps = new WeakMap(), tn = new WeakSet(), ch = function() {
  vt(this, Tn, new Q_({
    antialias: !0
  })), vt(this, un, new vg()), A(this, un).domElement.style.position = "absolute", A(this, un).domElement.style.top = "0px", A(this, Tn).setClearColor(A(this, ds).backgroundColor), vt(this, Xe, new Qe(20, 1, 0.1, 2e3)), A(this, Xe).up.set(0, 0, 1), A(this, Xe).lookAt(0, 0, 0), A(this, Xe).position.set(25, 15, 30), vt(this, dn, new eg(
    A(this, Xe),
    A(this, un).domElement
  )), A(this, dn).minDistance = 5, A(this, dn).maxDistance = 500, A(this, dn).enablePan = !0, A(this, dn).enableDamping = !0, A(this, dn).dampingFactor = 0.05, vt(this, le, new nd());
}, Do = function(t = { size: 20, division: 20, color1: 14540253, color2: 15658734 }) {
  const e = new Ea(t.size, t.division, t.color1, t.color2);
  e.name = "gridXY", e.rotation.x = Math.PI / 2, e.position.set(t.size / 2, t.size / 2, 0), A(this, le).add(e);
  const n = new Ea(t.size, t.division, t.color1, t.color2);
  n.name = "gridYZ", n.position.set(0, t.size / 2, t.size / 2), n.rotation.z = Math.PI / 2, A(this, le).add(n);
  const s = new Ea(t.size, t.division, t.color1, t.color2);
  s.name = "gridXZ", s.position.set(t.size / 2, 0, t.size / 2), A(this, le).add(s);
}, Lo = function(t = { length: 5, headLength: 0.4, headWidth: 0.2, color: void 0 }) {
  const e = new ba(
    new w(1, 0, 0),
    new w(0, 0, 0),
    t.length,
    t.color ?? 16711680,
    t.headLength,
    t.headWidth
  );
  e.name = "axisX";
  const n = new ba(
    new w(0, 1, 0),
    new w(0, 0, 0),
    t.length,
    t.color ?? 65280,
    t.headLength,
    t.headWidth
  );
  n.name = "axisY";
  const s = new ba(
    new w(0, 0, 1),
    new w(0, 0, 0),
    t.length,
    t.color ?? 255,
    t.headLength,
    t.headWidth
  );
  s.name = "axisZ", A(this, le).add(e), A(this, le).add(n), A(this, le).add(s);
}, hh = function() {
  A(this, dn).update(), A(this, Tn).render(A(this, le), A(this, Xe)), A(this, un).render(A(this, le), A(this, Xe));
};
var uh = (i) => {
  throw TypeError(i);
}, $o = (i, t, e) => t.has(i) || uh("Cannot " + e), Ye = (i, t, e) => ($o(i, t, "read from private field"), e ? e.call(i) : t.get(i)), Zi = (i, t, e) => t.has(i) ? uh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), Sn = (i, t, e, n) => ($o(i, t, "write to private field"), t.set(i, e), e), Fa = (i, t, e) => ($o(i, t, "access private method"), e);
function Ls(i) {
  if (i === "")
    return !0;
  if (!isNaN(Number(i)))
    return parseFloat(i);
  if (/^[-.\d]+\/[-.\d]+$/.exec(i)) {
    const [t, e] = i.split("/").map(Number);
    return t / e;
  }
  if (/^[-.\d]+;[-.\d]+$/.exec(i)) {
    const [t, e] = i.split(";").map(Number);
    return { x: t, y: e };
  }
  if (/^[-.\d]+:[-.\d]+(:[xy])?$/.exec(i)) {
    const [t, e, n] = i.split(":"), s = Number(t), r = Number(e);
    return {
      min: Math.min(s, r),
      max: Math.max(s, r),
      axis: n ?? "x"
    };
  }
  if (/^[-.\d]+:[-.\d]+:[.\d]+$/.exec(i)) {
    const [t, e, n] = i.split(":").map(Number), s = Number(t), r = Number(e), a = Number(n), o = (r - s) / 100;
    return {
      min: Math.min(t, e),
      max: Math.max(t, e),
      step: Math.max(a, o)
    };
  }
  return i.startsWith("[") && i.endsWith("]") ? i.slice(1, -1).split(",").map(Ls) : i;
}
function Oa(i, t) {
  return i.replace(new RegExp(`\\\\${t}`, "g"), "ESCAPESPLITTER").split(t).map((e) => e.replace("ESCAPESPLITTER", t));
}
function Eg(i) {
  if (!i.includes("="))
    return { key: i, value: "" };
  const [t, ...e] = i.split("=");
  return {
    key: t,
    value: e.join("=")
  };
}
var vi, Ki, ni, ts, $i, Us, dh, Uo;
class Tg {
  constructor(t) {
    Zi(this, Us), Zi(this, vi), Zi(this, Ki, "->"), Zi(this, ni, ","), Zi(this, ts, "/"), Zi(this, $i, []);
    var e, n, s;
    t && (Sn(this, vi, t.formatter ?? void 0), (e = t.splitter) != null && e.main && Sn(this, Ki, t.splitter.main), (n = t.splitter) != null && n.entry && Sn(this, ni, t.splitter.entry), (s = t.splitter) != null && s.parameter && Sn(this, ts, t.splitter.parameter), t.keys && Sn(this, $i, t.keys));
  }
  get splitter() {
    return {
      main: Ye(this, Ki),
      entry: Ye(this, ni),
      parameter: Ye(this, ts)
    };
  }
  set splitter_main(t) {
    Sn(this, Ki, t);
  }
  set splitter_entry(t) {
    Sn(this, ni, t);
  }
  set splitter_parameter(t) {
    Sn(this, ts, t);
  }
  get formatter() {
    return Ye(this, vi);
  }
  set formatter(t) {
    Sn(this, vi, t);
  }
  get keys() {
    return Ye(this, $i);
  }
  set keys(t) {
    Sn(this, $i, t);
  }
  parse(t) {
    const [e, n] = t.split(Ye(this, Ki)), s = Ye(this, vi) ? Ye(this, vi).call(this, e) : e.trim(), { name: r, key: a, values: o } = Fa(this, Us, dh).call(this, s), l = Fa(this, Us, Uo).call(this, n);
    return { name: r, key: a, values: o, parameters: l };
  }
  parameters(t, e) {
    return Fa(this, Us, Uo).call(this, t, e ?? Ye(this, $i));
  }
}
vi = /* @__PURE__ */ new WeakMap(), Ki = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakSet(), dh = function(i) {
  const [t, ...e] = i.split(" "), [n, s] = t.split("="), r = Oa(
    e.join(" "),
    Ye(this, ni)
  ).map((a) => Ls(a));
  return { name: n, key: s, values: r };
}, Uo = function(i, t) {
  if (i === void 0)
    return {};
  let e;
  if (t === void 0 || t.length === 0)
    e = Oa(i, Ye(this, ni));
  else {
    const s = Oa(i, Ye(this, ni)), r = t.map((a) => `${a}=`);
    e = [], s.forEach((a) => {
      if (t.includes(a))
        e.push(a);
      else if (a.includes("=")) {
        const o = a.split("=")[0] + "=";
        r.includes(o) && e.push(a);
      } else
        e[e.length - 1].includes("=") ? e[e.length - 1] += `,${a}` : e.push(a);
    });
  }
  const n = {};
  return e.forEach((s) => {
    const { key: r, value: a } = Eg(s);
    if (/^[-.\d]+\/[-.\d]+$/.exec(a)) {
      n[r] = {
        value: Ls(a),
        options: []
      };
      return;
    }
    const [o, ...l] = a.split(Ye(this, ts));
    n[r] = {
      value: Ls(o),
      options: l.map((c) => Ls(c))
    };
  }), n;
};
function Mc(i, t, e) {
  if (i.key === "pt")
    return {
      coordinates: {
        x: i.values[0],
        y: i.values[1],
        z: i.values[2]
      }
    };
  if (i.key === "proj") {
    const [n, s] = i.values, r = t[n], a = t[s];
    if (r === void 0)
      throw new Error(`Figure ${n} not found`);
    if (a === void 0)
      throw new Error(`Figure ${s} not found`);
    if (r instanceof Gs && (a instanceof Br || a instanceof zr) || r instanceof Br && a instanceof zr)
      return {
        projection: {
          object: r,
          target: a
        }
      };
  }
}
function br(i, t, e) {
  const [n, s] = i.values, r = t[n].v3, a = t[s].v3;
  if (!(r.x === void 0 || a.x === void 0)) {
    if (i.key === "line")
      return {
        type: "line",
        through: { A: r, B: a }
      };
    if (i.key === "seg")
      return {
        type: "segment",
        through: { A: r, B: a }
      };
    if (i.key === "ray")
      return {
        type: "ray",
        through: { A: r, B: a }
      };
    if (i.key === "vec")
      return {
        type: "vector",
        through: { A: r, B: a }
      };
  }
}
function bg(i, t, e) {
  if (i.values.length === 0)
    return;
  const n = {}, s = i.values[0];
  if (typeof s == "string" && s.includes("=0"))
    return i.values.length > 1 && (n.shape = Ba(i, 1)), n.equation = i.values[0], n;
  if (i.values.length >= 2) {
    const [d, p] = i.values, f = t[d].direction, _ = t[p].v3;
    i.values.length > 2 && (n.shape = Ba(i, 2)), (f !== void 0 || _ !== void 0) && (n.fromLine = {
      line: f,
      point: _
    });
  }
  const [r, a, o] = i.values;
  if (r === void 0 || a === void 0 || o === void 0)
    return;
  const l = t[r].v3, c = t[a].v3, u = t[o].v3;
  if (!(l.x === void 0 || c.x === void 0 || u.x === void 0))
    return i.values.length > 3 && (n.shape = Ba(i, 3)), {
      through: { A: l, B: c, C: u }
    };
}
function Ba(i, t) {
  const [e, n, s] = i.values.slice(t);
  return {
    width: e ?? 10,
    height: n ?? e,
    rotate: s ?? 0
  };
}
function Ag(i, t, e) {
  const [n, s, r, a] = i.values, o = t[n].v3, l = t[s].v3, c = t[r].v3, u = Object.hasOwn(t, a) ? t[a] : parseFloat(a);
  if (!(o.x === void 0 || l.x === void 0 || c.x === void 0))
    return {
      start: o,
      end: c,
      center: l,
      radius: u
    };
}
function wg(i, t, e) {
  if (i.values.length === 0)
    return;
  const n = {
    shape: {
      segments: {
        width: 32,
        height: 32
      }
    }
  }, [s, r, a, o] = i.values;
  return n.shape && (n.shape.segments = {
    width: +a > 12 ? +a : 32,
    height: +o > 12 ? +o : +a > 12 ? +a : 32
  }), n.centerRadius = {
    center: t[s].v3,
    radius: +r
  }, n;
}
const Rg = {
  pt: {
    name: "point",
    description: "Create a point",
    code: "A(3,4)",
    parameters: [],
    build: Mc,
    create: "point"
  },
  proj: {
    name: "projection",
    description: "Create a projection of a point on a line / plane",
    code: "proj A,d | proj d,p",
    parameters: [],
    build: Mc,
    create: "point"
  },
  line: {
    name: "line",
    description: "Create a line",
    code: "AB",
    parameters: [],
    build: br,
    create: "line"
  },
  seg: {
    name: "segment",
    description: "Create a segement",
    code: "AB.",
    parameters: [],
    build: br,
    create: "line"
  },
  ray: {
    name: "ray",
    description: "Create a ray",
    code: "AB[",
    parameters: [],
    build: br,
    create: "line"
  },
  vec: {
    name: "vector",
    description: "Create a vector",
    code: "vAB",
    parameters: [],
    build: br,
    create: "line"
  },
  plane: {
    name: "plane",
    description: "Create a plane",
    code: "A,B,C | n,A | ax+by+cz+d=0",
    parameters: [],
    build: bg,
    create: "plane"
  },
  arc: {
    name: "arc",
    description: "Create an arc",
    code: "a=arc A,B,C",
    parameters: [],
    build: Ag,
    create: "arc"
  },
  sphere: {
    name: "sphere",
    description: "Create a sphere",
    code: "s=sphere A,#[,#,#]",
    parameters: [],
    build: wg,
    create: "sphere"
  }
}, Sc = [
  "grid",
  "axis",
  "camera",
  "label",
  "tex",
  "points",
  "no-points"
];
var ms, ve, _s, we, fh, ph, Io, mh, _h, gh, vh;
class Ug extends yg {
  constructor(e, n) {
    super(e, {
      grid: !1,
      axis: !1,
      converter: n == null ? void 0 : n.converter
    });
    Tt(this, we);
    Tt(this, ms);
    Tt(this, ve);
    Tt(this, _s);
    vt(this, _s, new Tg({
      formatter: (s) => ne(this, we, _h).call(this, s),
      keys: Sc,
      splitter: {
        main: "->",
        entry: ",",
        parameter: "/"
      }
    })), vt(this, ve, {
      grid: !1,
      axis: !1,
      label: !1,
      tex: !1,
      "no-points": !1
    }), n != null && n.parameters && this.refreshLayout(n.parameters), vt(this, ms, []), n != null && n.code && ne(this, we, Io).call(this, n.code);
  }
  refreshLayout(e) {
    const n = A(this, _s).parameters(e ?? "", Sc);
    return n.grid ? A(this, ve).grid = n.grid.value : A(this, ve).grid = !1, this.toggleGrid(A(this, ve).grid), n.axis ? A(this, ve).axis = n.axis.value : A(this, ve).axis = !1, this.toggleAxis(A(this, ve).axis), n.label ? A(this, ve).label = n.label.value : A(this, ve).label = !1, n.tex ? A(this, ve).tex = n.tex.value : A(this, ve).tex = !1, n["no-points"] ? A(this, ve)["no-points"] = n["no-points"].value : A(this, ve)["no-points"] = !1, this;
  }
  refresh(e) {
    this.clear(), ne(this, we, Io).call(this, e);
  }
}
ms = new WeakMap(), ve = new WeakMap(), _s = new WeakMap(), we = new WeakSet(), fh = function(e) {
  const n = [];
  return e.split(`
`).map((r) => r.trim()).filter((r) => r.trim() !== "" && !r.startsWith("$")).forEach((r) => {
    const a = A(this, _s).parse(r);
    n.push(a);
  }), n;
}, ph = function(e) {
  let n = e, s = 1;
  for (; this.figures[n]; )
    n = `${e}_${s}`, s++;
  return n;
}, Io = function(e) {
  vt(this, ms, ne(this, we, fh).call(this, e));
  const n = Rg, s = this.create;
  return A(this, ms).forEach((r) => {
    r.name = ne(this, we, ph).call(this, r.name);
    let a;
    if (Object.hasOwn(n, r.key)) {
      const { build: o, create: l } = n[r.key];
      if (Object.hasOwn(s, l)) {
        const c = o(r, this.figures, A(this, ve)), u = s[l];
        c && (a = u(c, r.name));
      }
    }
    a ? (A(this, ve).label || A(this, ve).tex, a instanceof Gs && A(this, ve)["no-points"] && (r.parameters["!"] = { value: !0, options: [] }), ne(this, we, mh).call(this, r.parameters, a)) : (console.log("No object created"), console.log(r));
  }), this;
}, mh = function(e, n) {
  Object.keys(e).forEach((s) => {
    switch (s) {
      case "w":
        n.lineWidth(e[s].value);
        break;
      case "ultrathin":
        n.lineWidth(0.5);
        break;
      case "thin":
        n.lineWidth(0.75);
        break;
      case "thick":
        n.lineWidth(2.5);
        break;
      case "ultrathick":
        n.lineWidth(4);
        break;
      case "color":
        n.color(e[s].value);
        break;
      case "fill":
        n.fill(
          e[s].value,
          e[s].options[0]
        );
        break;
      case "wire":
        n.wire(!0);
        break;
      case "dash":
        e[s].value === !0 ? n.dash(!0) : n.dash(e[s].value);
        break;
      case "dot":
        n.dot();
        break;
      case "mark":
        n.mark();
        break;
      // Visibility
      case "hide":
      case "!":
        n.hide();
        break;
      // case '?':
      //     obj.label?.hide()
      //     break
      // Placement
      // case 'move':
      //     obj.move(options[key].value as XY)
      //     break
      // Label and text
      case "label":
      case "tex":
        n.addLabel(
          e[s].value === !0 ? n.name : e[s].value,
          s === "tex",
          (r) => this.converter(r)
        );
        break;
    }
  });
}, _h = function(e) {
  return /^[A-Z][0-9]*\(.*\)$/.exec(e) ? ne(this, we, gh).call(this, e) : /^[a-z][0-9]*=[v]?[A-Z][0-9]*[A-Z][0-9]*[.\[]?/.exec(e) ? ne(this, we, vh).call(this, e) : e;
}, // TO BE MOVED TO PI_PARSER
gh = function(e) {
  const n = e.split("(")[0], s = e.split("(")[1].split(")")[0].split(",");
  return `${n}=pt ` + s.join(",");
}, // TO BE MOVED TO PI_PARSER
vh = function(e) {
  const [n, ...s] = e.split("=");
  let r = s.join("="), a = r[0];
  a !== "v" && a !== "[" && (a = null);
  let o = r[r.length - 1];
  o !== "." && o !== "]" && o !== "[" && (o = null);
  let l = "line";
  a === "v" && o === null ? (r = r.slice(1), l = "vec") : a === null && o === "." || a === "[" && o === "]" ? (a === "[" && (r = r.slice(1)), r = r.slice(0, -1), l = "seg") : (a === "[" && o === "[" || a === null && o === "[" || a === "[" && o === null) && (a === "[" && (r = r.slice(1)), o === "[" && (r = r.slice(0, -1)), l = "ray");
  const c = r.split(/(?=[A-Z])/);
  return `${n}=${l} ${c[0]},${c[1]}`;
};
export {
  Ug as Pi3Draw,
  yg as Pi3Graph
};
