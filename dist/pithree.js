var Qo = (i) => {
  throw TypeError(i);
};
var Kr = (i, t, e) => t.has(i) || Qo("Cannot " + e);
var b = (i, t, e) => (Kr(i, t, "read from private field"), e ? e.call(i) : t.get(i)), xt = (i, t, e) => t.has(i) ? Qo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), ut = (i, t, e, n) => (Kr(i, t, "write to private field"), n ? n.call(i, e) : t.set(i, e), e), Kt = (i, t, e) => (Kr(i, t, "access private method"), e);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Do = "173", ts = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ji = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, vh = 1, mc = 1, xh = 2, Dn = 3, si = 0, ze = 1, dn = 2, ni = 0, es = 1, tl = 2, el = 3, nl = 4, Mh = 5, gi = 100, Sh = 101, yh = 102, Eh = 103, Th = 104, bh = 200, Ah = 201, wh = 202, Rh = 203, Na = 204, Fa = 205, Ch = 206, Ph = 207, Dh = 208, Lh = 209, Uh = 210, Ih = 211, Nh = 212, Fh = 213, Oh = 214, Oa = 0, Ba = 1, za = 2, gs = 3, Ha = 4, Ga = 5, Va = 6, ka = 7, _c = 0, Bh = 1, zh = 2, ii = 0, Hh = 1, Gh = 2, Vh = 3, kh = 4, Wh = 5, Xh = 6, Yh = 7, gc = 300, vs = 301, xs = 302, Wa = 303, Xa = 304, Vr = 306, Ya = 1e3, xi = 1001, qa = 1002, _n = 1003, qh = 1004, js = 1005, Tn = 1006, $r = 1007, Mi = 1008, Wn = 1009, vc = 1010, xc = 1011, Os = 1012, Lo = 1013, Ri = 1014, Hn = 1015, Gs = 1016, Uo = 1017, Io = 1018, Ms = 1020, Mc = 35902, Sc = 1021, yc = 1022, mn = 1023, Ec = 1024, Tc = 1025, ns = 1026, Ss = 1027, bc = 1028, No = 1029, Ac = 1030, Fo = 1031, Oo = 1033, Tr = 33776, br = 33777, Ar = 33778, wr = 33779, ja = 35840, Za = 35841, Ka = 35842, $a = 35843, Ja = 36196, Qa = 37492, to = 37496, eo = 37808, no = 37809, io = 37810, so = 37811, ro = 37812, ao = 37813, oo = 37814, lo = 37815, co = 37816, ho = 37817, uo = 37818, fo = 37819, po = 37820, mo = 37821, Rr = 36492, _o = 36494, go = 36495, wc = 36283, vo = 36284, xo = 36285, Mo = 36286, jh = 3200, Zh = 3201, Kh = 0, $h = 1, Qn = "", $e = "srgb", ys = "srgb-linear", Pr = "linear", te = "srgb", Fi = 7680, il = 519, Jh = 512, Qh = 513, tu = 514, Rc = 515, eu = 516, nu = 517, iu = 518, su = 519, So = 35044, sl = "300 es", Gn = 2e3, Dr = 2001;
class Ui {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    const n = this._listeners;
    if (n === void 0) return;
    const s = n[t];
    if (s !== void 0) {
      const r = s.indexOf(e);
      r !== -1 && s.splice(r, 1);
    }
  }
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
let rl = 1234567;
const Ns = Math.PI / 180, Bs = 180 / Math.PI;
function Vn() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ce[i & 255] + Ce[i >> 8 & 255] + Ce[i >> 16 & 255] + Ce[i >> 24 & 255] + "-" + Ce[t & 255] + Ce[t >> 8 & 255] + "-" + Ce[t >> 16 & 15 | 64] + Ce[t >> 24 & 255] + "-" + Ce[e & 63 | 128] + Ce[e >> 8 & 255] + "-" + Ce[e >> 16 & 255] + Ce[e >> 24 & 255] + Ce[n & 255] + Ce[n >> 8 & 255] + Ce[n >> 16 & 255] + Ce[n >> 24 & 255]).toLowerCase();
}
function It(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Bo(i, t) {
  return (i % t + t) % t;
}
function ru(i, t, e, n, s) {
  return n + (i - t) * (s - n) / (e - t);
}
function au(i, t, e) {
  return i !== t ? (e - i) / (t - i) : 0;
}
function Fs(i, t, e) {
  return (1 - e) * i + e * t;
}
function ou(i, t, e, n) {
  return Fs(i, t, 1 - Math.exp(-e * n));
}
function lu(i, t = 1) {
  return t - Math.abs(Bo(i, t * 2) - t);
}
function cu(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i));
}
function hu(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10));
}
function uu(i, t) {
  return i + Math.floor(Math.random() * (t - i + 1));
}
function du(i, t) {
  return i + Math.random() * (t - i);
}
function fu(i) {
  return i * (0.5 - Math.random());
}
function pu(i) {
  i !== void 0 && (rl = i);
  let t = rl += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function mu(i) {
  return i * Ns;
}
function _u(i) {
  return i * Bs;
}
function gu(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function vu(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function xu(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Mu(i, t, e, n, s) {
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
function fn(i, t) {
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
function Jt(i, t) {
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
const Cc = {
  DEG2RAD: Ns,
  RAD2DEG: Bs,
  generateUUID: Vn,
  clamp: It,
  euclideanModulo: Bo,
  mapLinear: ru,
  inverseLerp: au,
  lerp: Fs,
  damp: ou,
  pingpong: lu,
  smoothstep: cu,
  smootherstep: hu,
  randInt: uu,
  randFloat: du,
  randFloatSpread: fu,
  seededRandom: pu,
  degToRad: mu,
  radToDeg: _u,
  isPowerOfTwo: gu,
  ceilPowerOfTwo: vu,
  floorPowerOfTwo: xu,
  setQuaternionFromProperEuler: Mu,
  normalize: Jt,
  denormalize: fn
};
class Dt {
  constructor(t = 0, e = 0) {
    Dt.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
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
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6], this.y = s[1] * e + s[4] * n + s[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = It(this.x, t.x, e.x), this.y = It(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = It(this.x, t, e), this.y = It(this.y, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(It(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(It(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * s + t.x, this.y = r * s + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ut {
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
  set(t, e, n, s, r, a, o, l, c) {
    const u = this.elements;
    return u[0] = t, u[1] = s, u[2] = o, u[3] = e, u[4] = r, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
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
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
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
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], d = n[7], p = n[2], f = n[5], _ = n[8], v = s[0], m = s[3], h = s[6], A = s[1], T = s[4], y = s[7], N = s[2], C = s[5], P = s[8];
    return r[0] = a * v + o * A + l * N, r[3] = a * m + o * T + l * C, r[6] = a * h + o * y + l * P, r[1] = c * v + u * A + d * N, r[4] = c * m + u * T + d * C, r[7] = c * h + u * y + d * P, r[2] = p * v + f * A + _ * N, r[5] = p * m + f * T + _ * C, r[8] = p * h + f * y + _ * P, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8];
    return e * a * u - e * o * c - n * r * u + n * o * l + s * r * c - s * a * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], d = u * a - o * c, p = o * l - u * r, f = c * r - a * l, _ = e * d + n * p + s * f;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / _;
    return t[0] = d * v, t[1] = (s * c - u * n) * v, t[2] = (o * n - s * a) * v, t[3] = p * v, t[4] = (u * e - s * l) * v, t[5] = (s * r - o * e) * v, t[6] = f * v, t[7] = (n * l - c * e) * v, t[8] = (a * e - n * r) * v, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
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
  //
  scale(t, e) {
    return this.premultiply(Jr.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Jr.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Jr.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
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
  //
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 9; s++)
      if (e[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Jr = /* @__PURE__ */ new Ut();
function Pc(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535) return !0;
  return !1;
}
function Lr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Su() {
  const i = Lr("canvas");
  return i.style.display = "block", i;
}
const al = {};
function $i(i) {
  i in al || (al[i] = !0, console.warn(i));
}
function yu(i, t, e) {
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
function Eu(i) {
  const t = i.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Tu(i) {
  const t = i.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const ol = /* @__PURE__ */ new Ut().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), ll = /* @__PURE__ */ new Ut().set(
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
function bu() {
  const i = {
    enabled: !0,
    workingColorSpace: ys,
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
      return this.enabled === !1 || r === a || !r || !a || (this.spaces[r].transfer === te && (s.r = kn(s.r), s.g = kn(s.g), s.b = kn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === te && (s.r = is(s.r), s.g = is(s.g), s.b = is(s.b))), s;
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
      return s === Qn ? Pr : this.spaces[s].transfer;
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
    [ys]: {
      primaries: t,
      whitePoint: n,
      transfer: Pr,
      toXYZ: ol,
      fromXYZ: ll,
      luminanceCoefficients: e,
      workingColorSpaceConfig: { unpackColorSpace: $e },
      outputColorSpaceConfig: { drawingBufferColorSpace: $e }
    },
    [$e]: {
      primaries: t,
      whitePoint: n,
      transfer: te,
      toXYZ: ol,
      fromXYZ: ll,
      luminanceCoefficients: e,
      outputColorSpaceConfig: { drawingBufferColorSpace: $e }
    }
  }), i;
}
const Xt = /* @__PURE__ */ bu();
function kn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function is(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Oi;
class Au {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      Oi === void 0 && (Oi = Lr("canvas")), Oi.width = t.width, Oi.height = t.height;
      const n = Oi.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Oi;
    }
    return e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Lr("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++)
        r[a] = kn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(kn(e[n] / 255) * 255) : e[n] = kn(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let wu = 0;
class Dc {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: wu++ }), this.uuid = Vn(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
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
          s[a].isDataTexture ? r.push(Qr(s[a].image)) : r.push(Qr(s[a]));
      } else
        r = Qr(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Qr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Au.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ru = 0;
class He extends Ui {
  constructor(t = He.DEFAULT_IMAGE, e = He.DEFAULT_MAPPING, n = xi, s = xi, r = Tn, a = Mi, o = mn, l = Wn, c = He.DEFAULT_ANISOTROPY, u = Qn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ru++ }), this.uuid = Vn(), this.name = "", this.source = new Dc(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Dt(0, 0), this.repeat = new Dt(1, 1), this.center = new Dt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ut(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
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
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== gc) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case Ya:
          t.x = t.x - Math.floor(t.x);
          break;
        case xi:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case qa:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case Ya:
          t.y = t.y - Math.floor(t.y);
          break;
        case xi:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case qa:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
He.DEFAULT_IMAGE = null;
He.DEFAULT_MAPPING = gc;
He.DEFAULT_ANISOTROPY = 1;
class se {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    se.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, s) {
    return this.x = t, this.y = e, this.z = n, this.w = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
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
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, s, r;
    const l = t.elements, c = l[0], u = l[4], d = l[8], p = l[1], f = l[5], _ = l[9], v = l[2], m = l[6], h = l[10];
    if (Math.abs(u - p) < 0.01 && Math.abs(d - v) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(u + p) < 0.1 && Math.abs(d + v) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + f + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const T = (c + 1) / 2, y = (f + 1) / 2, N = (h + 1) / 2, C = (u + p) / 4, P = (d + v) / 4, F = (_ + m) / 4;
      return T > y && T > N ? T < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(T), s = C / n, r = P / n) : y > N ? y < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(y), n = C / s, r = F / s) : N < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(N), n = P / r, s = F / r), this.set(n, s, r, e), this;
    }
    let A = Math.sqrt((m - _) * (m - _) + (d - v) * (d - v) + (p - u) * (p - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (m - _) / A, this.y = (d - v) / A, this.z = (p - u) / A, this.w = Math.acos((c + f + h - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = It(this.x, t.x, e.x), this.y = It(this.y, t.y, e.y), this.z = It(this.z, t.z, e.z), this.w = It(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = It(this.x, t, e), this.y = It(this.y, t, e), this.z = It(this.z, t, e), this.w = It(this.w, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(It(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Cu extends Ui {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new se(0, 0, t, e), this.scissorTest = !1, this.viewport = new se(0, 0, t, e);
    const s = { width: t, height: e, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Tn,
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
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let s = 0, r = this.textures.length; s < r; s++)
        this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, s = t.textures.length; n < s; n++)
      this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0, this.textures[n].renderTarget = this;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new Dc(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Ci extends Cu {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class Lc extends He {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = _n, this.minFilter = _n, this.wrapR = xi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Pu extends He {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = _n, this.minFilter = _n, this.wrapR = xi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Pi {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = s;
  }
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
      const h = l * p + c * f + u * _ + d * v, A = h >= 0 ? 1 : -1, T = 1 - h * h;
      if (T > Number.EPSILON) {
        const N = Math.sqrt(T), C = Math.atan2(N, h * A);
        m = Math.sin(m * C) / N, o = Math.sin(o * C) / N;
      }
      const y = o * A;
      if (l = l * m + p * y, c = c * m + f * y, u = u * m + _ * y, d = d * m + v * y, m === 1 - o) {
        const N = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        l *= N, c *= N, u *= N, d *= N;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = d;
  }
  static multiplyQuaternionsFlat(t, e, n, s, r, a) {
    const o = n[s], l = n[s + 1], c = n[s + 2], u = n[s + 3], d = r[a], p = r[a + 1], f = r[a + 2], _ = r[a + 3];
    return t[e] = o * _ + u * d + l * f - c * p, t[e + 1] = l * _ + u * p + c * d - o * f, t[e + 2] = c * _ + u * f + o * p - l * d, t[e + 3] = u * _ - o * d - l * p - c * f, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, s) {
    return this._x = t, this._y = e, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
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
  setFromAxisAngle(t, e) {
    const n = e / 2, s = Math.sin(n);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
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
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(It(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const s = Math.min(1, e / n);
    return this.slerp(t, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, l = e._y, c = e._z, u = e._w;
    return this._x = n * u + a * o + s * c - r * l, this._y = s * u + a * l + r * o - n * c, this._z = r * u + a * c + n * l - s * o, this._w = a * u - n * o - s * l - r * c, this._onChangeCallback(), this;
  }
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
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(
      s * Math.sin(t),
      s * Math.cos(t),
      r * Math.sin(e),
      r * Math.cos(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
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
  constructor(t = 0, e = 0, n = 0) {
    w.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
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
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(cl.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(cl.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * s, this.y = r[1] * e + r[4] * n + r[7] * s, this.z = r[2] * e + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * s - o * n), u = 2 * (o * e - r * s), d = 2 * (r * n - a * e);
    return this.x = e + l * c + a * d - o * u, this.y = n + l * u + o * c - r * d, this.z = s + l * d + r * u - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * s, this.y = r[1] * e + r[5] * n + r[9] * s, this.z = r[2] * e + r[6] * n + r[10] * s, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = It(this.x, t.x, e.x), this.y = It(this.y, t.y, e.y), this.z = It(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = It(this.x, t, e), this.y = It(this.y, t, e), this.z = It(this.z, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(It(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, s = t.y, r = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = s * l - r * o, this.y = r * a - n * l, this.z = n * o - s * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return ta.copy(this).projectOnVector(t), this.sub(ta);
  }
  reflect(t) {
    return this.sub(ta.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(It(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, s = this.z - t.z;
    return e * e + n * n + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const s = Math.sin(e) * t;
    return this.x = s * Math.sin(n), this.y = Math.cos(e) * t, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ta = /* @__PURE__ */ new w(), cl = /* @__PURE__ */ new Pi();
class ai {
  constructor(t = new w(1 / 0, 1 / 0, 1 / 0), e = new w(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(nn.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(nn.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = nn.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          t.isMesh === !0 ? t.getVertexPosition(a, nn) : nn.fromBufferAttribute(r, a), nn.applyMatrix4(t.matrixWorld), this.expandByPoint(nn);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Zs.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Zs.copy(n.boundingBox)), Zs.applyMatrix4(t.matrixWorld), this.union(Zs);
    }
    const s = t.children;
    for (let r = 0, a = s.length; r < a; r++)
      this.expandByObject(s[r], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, nn), nn.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ws), Ks.subVectors(this.max, ws), Bi.subVectors(t.a, ws), zi.subVectors(t.b, ws), Hi.subVectors(t.c, ws), qn.subVectors(zi, Bi), jn.subVectors(Hi, zi), hi.subVectors(Bi, Hi);
    let e = [
      0,
      -qn.z,
      qn.y,
      0,
      -jn.z,
      jn.y,
      0,
      -hi.z,
      hi.y,
      qn.z,
      0,
      -qn.x,
      jn.z,
      0,
      -jn.x,
      hi.z,
      0,
      -hi.x,
      -qn.y,
      qn.x,
      0,
      -jn.y,
      jn.x,
      0,
      -hi.y,
      hi.x,
      0
    ];
    return !ea(e, Bi, zi, Hi, Ks) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ea(e, Bi, zi, Hi, Ks)) ? !1 : ($s.crossVectors(qn, jn), e = [$s.x, $s.y, $s.z], ea(e, Bi, zi, Hi, Ks));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, nn).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(nn).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (An[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), An[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), An[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), An[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), An[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), An[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), An[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), An[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(An), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const An = [
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w(),
  /* @__PURE__ */ new w()
], nn = /* @__PURE__ */ new w(), Zs = /* @__PURE__ */ new ai(), Bi = /* @__PURE__ */ new w(), zi = /* @__PURE__ */ new w(), Hi = /* @__PURE__ */ new w(), qn = /* @__PURE__ */ new w(), jn = /* @__PURE__ */ new w(), hi = /* @__PURE__ */ new w(), ws = /* @__PURE__ */ new w(), Ks = /* @__PURE__ */ new w(), $s = /* @__PURE__ */ new w(), ui = /* @__PURE__ */ new w();
function ea(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    ui.fromArray(i, r);
    const o = s.x * Math.abs(ui.x) + s.y * Math.abs(ui.y) + s.z * Math.abs(ui.z), l = t.dot(ui), c = e.dot(ui), u = n.dot(ui);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const Du = /* @__PURE__ */ new ai(), Rs = /* @__PURE__ */ new w(), na = /* @__PURE__ */ new w();
let Ii = class {
  constructor(t = new w(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Du.setFromPoints(t).getCenter(n);
    let s = 0;
    for (let r = 0, a = t.length; r < a; r++)
      s = Math.max(s, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    Rs.subVectors(t, this.center);
    const e = Rs.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Rs, s / n), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (na.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Rs.copy(t.center).add(na)), this.expandByPoint(Rs.copy(t.center).sub(na))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
const wn = /* @__PURE__ */ new w(), ia = /* @__PURE__ */ new w(), Js = /* @__PURE__ */ new w(), Zn = /* @__PURE__ */ new w(), sa = /* @__PURE__ */ new w(), Qs = /* @__PURE__ */ new w(), ra = /* @__PURE__ */ new w();
class zo {
  constructor(t = new w(), e = new w(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, wn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = wn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (wn.copy(this.origin).addScaledVector(this.direction, e), wn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, s) {
    ia.copy(t).add(e).multiplyScalar(0.5), Js.copy(e).sub(t).normalize(), Zn.copy(this.origin).sub(ia);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(Js), o = Zn.dot(this.direction), l = -Zn.dot(Js), c = Zn.lengthSq(), u = Math.abs(1 - a * a);
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
    return n && n.copy(this.origin).addScaledVector(this.direction, d), s && s.copy(ia).addScaledVector(Js, p), f;
  }
  intersectSphere(t, e) {
    wn.subVectors(t.center, this.origin);
    const n = wn.dot(this.direction), s = wn.dot(wn) - n * n, r = t.radius * t.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, s, r, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, p = this.origin;
    return c >= 0 ? (n = (t.min.x - p.x) * c, s = (t.max.x - p.x) * c) : (n = (t.max.x - p.x) * c, s = (t.min.x - p.x) * c), u >= 0 ? (r = (t.min.y - p.y) * u, a = (t.max.y - p.y) * u) : (r = (t.max.y - p.y) * u, a = (t.min.y - p.y) * u), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), d >= 0 ? (o = (t.min.z - p.z) * d, l = (t.max.z - p.z) * d) : (o = (t.max.z - p.z) * d, l = (t.min.z - p.z) * d), n > l || o > s) || ((o > n || n !== n) && (n = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, wn) !== null;
  }
  intersectTriangle(t, e, n, s, r) {
    sa.subVectors(e, t), Qs.subVectors(n, t), ra.crossVectors(sa, Qs);
    let a = this.direction.dot(ra), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Zn.subVectors(this.origin, t);
    const l = o * this.direction.dot(Qs.crossVectors(Zn, Qs));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(sa.cross(Zn));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * Zn.dot(ra);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ae {
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
  set(t, e, n, s, r, a, o, l, c, u, d, p, f, _, v, m) {
    const h = this.elements;
    return h[0] = t, h[4] = e, h[8] = n, h[12] = s, h[1] = r, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = u, h[10] = d, h[14] = p, h[3] = f, h[7] = _, h[11] = v, h[15] = m, this;
  }
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
  clone() {
    return new ae().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
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
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
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
  extractRotation(t) {
    const e = this.elements, n = t.elements, s = 1 / Gi.setFromMatrixColumn(t, 0).length(), r = 1 / Gi.setFromMatrixColumn(t, 1).length(), a = 1 / Gi.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
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
  makeRotationFromQuaternion(t) {
    return this.compose(Lu, t, Uu);
  }
  lookAt(t, e, n) {
    const s = this.elements;
    return ke.subVectors(t, e), ke.lengthSq() === 0 && (ke.z = 1), ke.normalize(), Kn.crossVectors(n, ke), Kn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ke.x += 1e-4 : ke.z += 1e-4, ke.normalize(), Kn.crossVectors(n, ke)), Kn.normalize(), tr.crossVectors(ke, Kn), s[0] = Kn.x, s[4] = tr.x, s[8] = ke.x, s[1] = Kn.y, s[5] = tr.y, s[9] = ke.y, s[2] = Kn.z, s[6] = tr.z, s[10] = ke.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], d = n[5], p = n[9], f = n[13], _ = n[2], v = n[6], m = n[10], h = n[14], A = n[3], T = n[7], y = n[11], N = n[15], C = s[0], P = s[4], F = s[8], S = s[12], M = s[1], D = s[5], G = s[9], H = s[13], W = s[2], K = s[6], X = s[10], tt = s[14], k = s[3], rt = s[7], dt = s[11], St = s[15];
    return r[0] = a * C + o * M + l * W + c * k, r[4] = a * P + o * D + l * K + c * rt, r[8] = a * F + o * G + l * X + c * dt, r[12] = a * S + o * H + l * tt + c * St, r[1] = u * C + d * M + p * W + f * k, r[5] = u * P + d * D + p * K + f * rt, r[9] = u * F + d * G + p * X + f * dt, r[13] = u * S + d * H + p * tt + f * St, r[2] = _ * C + v * M + m * W + h * k, r[6] = _ * P + v * D + m * K + h * rt, r[10] = _ * F + v * G + m * X + h * dt, r[14] = _ * S + v * H + m * tt + h * St, r[3] = A * C + T * M + y * W + N * k, r[7] = A * P + T * D + y * K + N * rt, r[11] = A * F + T * G + y * X + N * dt, r[15] = A * S + T * H + y * tt + N * St, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], l = t[9], c = t[13], u = t[2], d = t[6], p = t[10], f = t[14], _ = t[3], v = t[7], m = t[11], h = t[15];
    return _ * (+r * l * d - s * c * d - r * o * p + n * c * p + s * o * f - n * l * f) + v * (+e * l * f - e * c * p + r * a * p - s * a * f + s * c * u - r * l * u) + m * (+e * c * d - e * o * f - r * a * d + n * a * f + r * o * u - n * c * u) + h * (-s * o * u - e * l * d + e * o * p + s * a * d - n * a * p + n * l * u);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], d = t[9], p = t[10], f = t[11], _ = t[12], v = t[13], m = t[14], h = t[15], A = d * m * c - v * p * c + v * l * f - o * m * f - d * l * h + o * p * h, T = _ * p * c - u * m * c - _ * l * f + a * m * f + u * l * h - a * p * h, y = u * v * c - _ * d * c + _ * o * f - a * v * f - u * o * h + a * d * h, N = _ * d * l - u * v * l - _ * o * p + a * v * p + u * o * m - a * d * m, C = e * A + n * T + s * y + r * N;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / C;
    return t[0] = A * P, t[1] = (v * p * r - d * m * r - v * s * f + n * m * f + d * s * h - n * p * h) * P, t[2] = (o * m * r - v * l * r + v * s * c - n * m * c - o * s * h + n * l * h) * P, t[3] = (d * l * r - o * p * r - d * s * c + n * p * c + o * s * f - n * l * f) * P, t[4] = T * P, t[5] = (u * m * r - _ * p * r + _ * s * f - e * m * f - u * s * h + e * p * h) * P, t[6] = (_ * l * r - a * m * r - _ * s * c + e * m * c + a * s * h - e * l * h) * P, t[7] = (a * p * r - u * l * r + u * s * c - e * p * c - a * s * f + e * l * f) * P, t[8] = y * P, t[9] = (_ * d * r - u * v * r - _ * n * f + e * v * f + u * n * h - e * d * h) * P, t[10] = (a * v * r - _ * o * r + _ * n * c - e * v * c - a * n * h + e * o * h) * P, t[11] = (u * o * r - a * d * r - u * n * c + e * d * c + a * n * f - e * o * f) * P, t[12] = N * P, t[13] = (u * v * s - _ * d * s + _ * n * p - e * v * p - u * n * m + e * d * m) * P, t[14] = (_ * o * s - a * v * s - _ * n * l + e * v * l + a * n * m - e * o * m) * P, t[15] = (a * d * s - u * o * s + u * n * l - e * d * l - a * n * p + e * o * p) * P, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z;
    return e[0] *= n, e[4] *= s, e[8] *= r, e[1] *= n, e[5] *= s, e[9] *= r, e[2] *= n, e[6] *= s, e[10] *= r, e[3] *= n, e[7] *= s, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, s));
  }
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
  compose(t, e, n) {
    const s = this.elements, r = e._x, a = e._y, o = e._z, l = e._w, c = r + r, u = a + a, d = o + o, p = r * c, f = r * u, _ = r * d, v = a * u, m = a * d, h = o * d, A = l * c, T = l * u, y = l * d, N = n.x, C = n.y, P = n.z;
    return s[0] = (1 - (v + h)) * N, s[1] = (f + y) * N, s[2] = (_ - T) * N, s[3] = 0, s[4] = (f - y) * C, s[5] = (1 - (p + h)) * C, s[6] = (m + A) * C, s[7] = 0, s[8] = (_ + T) * P, s[9] = (m - A) * P, s[10] = (1 - (p + v)) * P, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, e, n) {
    const s = this.elements;
    let r = Gi.set(s[0], s[1], s[2]).length();
    const a = Gi.set(s[4], s[5], s[6]).length(), o = Gi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], sn.copy(this);
    const c = 1 / r, u = 1 / a, d = 1 / o;
    return sn.elements[0] *= c, sn.elements[1] *= c, sn.elements[2] *= c, sn.elements[4] *= u, sn.elements[5] *= u, sn.elements[6] *= u, sn.elements[8] *= d, sn.elements[9] *= d, sn.elements[10] *= d, e.setFromRotationMatrix(sn), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, s, r, a, o = Gn) {
    const l = this.elements, c = 2 * r / (e - t), u = 2 * r / (n - s), d = (e + t) / (e - t), p = (n + s) / (n - s);
    let f, _;
    if (o === Gn)
      f = -(a + r) / (a - r), _ = -2 * a * r / (a - r);
    else if (o === Dr)
      f = -a / (a - r), _ = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, s, r, a, o = Gn) {
    const l = this.elements, c = 1 / (e - t), u = 1 / (n - s), d = 1 / (a - r), p = (e + t) * c, f = (n + s) * u;
    let _, v;
    if (o === Gn)
      _ = (a + r) * d, v = -2 * d;
    else if (o === Dr)
      _ = r * d, v = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -p, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 16; s++)
      if (e[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const Gi = /* @__PURE__ */ new w(), sn = /* @__PURE__ */ new ae(), Lu = /* @__PURE__ */ new w(0, 0, 0), Uu = /* @__PURE__ */ new w(1, 1, 1), Kn = /* @__PURE__ */ new w(), tr = /* @__PURE__ */ new w(), ke = /* @__PURE__ */ new w(), hl = /* @__PURE__ */ new ae(), ul = /* @__PURE__ */ new Pi();
class Xn {
  constructor(t = 0, e = 0, n = 0, s = Xn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, s = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
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
  setFromQuaternion(t, e, n) {
    return hl.makeRotationFromQuaternion(t), this.setFromRotationMatrix(hl, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return ul.setFromEuler(this), this.setFromQuaternion(ul, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
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
Xn.DEFAULT_ORDER = "XYZ";
class Uc {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Iu = 0;
const dl = /* @__PURE__ */ new w(), Vi = /* @__PURE__ */ new Pi(), Rn = /* @__PURE__ */ new ae(), er = /* @__PURE__ */ new w(), Cs = /* @__PURE__ */ new w(), Nu = /* @__PURE__ */ new w(), Fu = /* @__PURE__ */ new Pi(), fl = /* @__PURE__ */ new w(1, 0, 0), pl = /* @__PURE__ */ new w(0, 1, 0), ml = /* @__PURE__ */ new w(0, 0, 1), _l = { type: "added" }, Ou = { type: "removed" }, ki = { type: "childadded", child: null }, aa = { type: "childremoved", child: null };
class De extends Ui {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Iu++ }), this.uuid = Vn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = De.DEFAULT_UP.clone();
    const t = new w(), e = new Xn(), n = new Pi(), s = new w(1, 1, 1);
    function r() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new ae()
      },
      normalMatrix: {
        value: new Ut()
      }
    }), this.matrix = new ae(), this.matrixWorld = new ae(), this.matrixAutoUpdate = De.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Uc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Vi.setFromAxisAngle(t, e), this.quaternion.multiply(Vi), this;
  }
  rotateOnWorldAxis(t, e) {
    return Vi.setFromAxisAngle(t, e), this.quaternion.premultiply(Vi), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(fl, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(pl, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(ml, t);
  }
  translateOnAxis(t, e) {
    return dl.copy(t).applyQuaternion(this.quaternion), this.position.add(dl.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(fl, t);
  }
  translateY(t) {
    return this.translateOnAxis(pl, t);
  }
  translateZ(t) {
    return this.translateOnAxis(ml, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Rn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? er.copy(t) : er.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), Cs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Rn.lookAt(Cs, er, this.up) : Rn.lookAt(er, Cs, this.up), this.quaternion.setFromRotationMatrix(Rn), s && (Rn.extractRotation(s.matrixWorld), Vi.setFromRotationMatrix(Rn), this.quaternion.premultiply(Vi.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(_l), ki.child = t, this.dispatchEvent(ki), ki.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Ou), aa.child = t, this.dispatchEvent(aa), aa.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Rn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Rn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Rn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(_l), ki.child = t, this.dispatchEvent(ki), ki.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++)
      s[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cs, t, Nu), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Cs, Fu, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++)
      e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++)
        s[r].updateWorldMatrix(!1, !0);
    }
  }
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
  clone(t) {
    return new this.constructor().copy(this, t);
  }
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
const rn = /* @__PURE__ */ new w(), Cn = /* @__PURE__ */ new w(), oa = /* @__PURE__ */ new w(), Pn = /* @__PURE__ */ new w(), Wi = /* @__PURE__ */ new w(), Xi = /* @__PURE__ */ new w(), gl = /* @__PURE__ */ new w(), la = /* @__PURE__ */ new w(), ca = /* @__PURE__ */ new w(), ha = /* @__PURE__ */ new w(), ua = /* @__PURE__ */ new se(), da = /* @__PURE__ */ new se(), fa = /* @__PURE__ */ new se();
class pn {
  constructor(t = new w(), e = new w(), n = new w()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, s) {
    s.subVectors(n, e), rn.subVectors(t, e), s.cross(rn);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, s, r) {
    rn.subVectors(s, e), Cn.subVectors(n, e), oa.subVectors(t, e);
    const a = rn.dot(rn), o = rn.dot(Cn), l = rn.dot(oa), c = Cn.dot(Cn), u = Cn.dot(oa), d = a * c - o * o;
    if (d === 0)
      return r.set(0, 0, 0), null;
    const p = 1 / d, f = (c * l - o * u) * p, _ = (a * u - o * l) * p;
    return r.set(1 - f - _, _, f);
  }
  static containsPoint(t, e, n, s) {
    return this.getBarycoord(t, e, n, s, Pn) === null ? !1 : Pn.x >= 0 && Pn.y >= 0 && Pn.x + Pn.y <= 1;
  }
  static getInterpolation(t, e, n, s, r, a, o, l) {
    return this.getBarycoord(t, e, n, s, Pn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Pn.x), l.addScaledVector(a, Pn.y), l.addScaledVector(o, Pn.z), l);
  }
  static getInterpolatedAttribute(t, e, n, s, r, a) {
    return ua.setScalar(0), da.setScalar(0), fa.setScalar(0), ua.fromBufferAttribute(t, e), da.fromBufferAttribute(t, n), fa.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(ua, r.x), a.addScaledVector(da, r.y), a.addScaledVector(fa, r.z), a;
  }
  static isFrontFacing(t, e, n, s) {
    return rn.subVectors(n, e), Cn.subVectors(t, e), rn.cross(Cn).dot(s) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, s) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[s]), this;
  }
  setFromAttributeAndIndices(t, e, n, s) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return rn.subVectors(this.c, this.b), Cn.subVectors(this.a, this.b), rn.cross(Cn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return pn.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return pn.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, s, r) {
    return pn.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
  }
  containsPoint(t) {
    return pn.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return pn.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    Wi.subVectors(s, n), Xi.subVectors(r, n), la.subVectors(t, n);
    const l = Wi.dot(la), c = Xi.dot(la);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    ca.subVectors(t, s);
    const u = Wi.dot(ca), d = Xi.dot(ca);
    if (u >= 0 && d <= u)
      return e.copy(s);
    const p = l * d - u * c;
    if (p <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), e.copy(n).addScaledVector(Wi, a);
    ha.subVectors(t, r);
    const f = Wi.dot(ha), _ = Xi.dot(ha);
    if (_ >= 0 && f <= _)
      return e.copy(r);
    const v = f * c - l * _;
    if (v <= 0 && c >= 0 && _ <= 0)
      return o = c / (c - _), e.copy(n).addScaledVector(Xi, o);
    const m = u * _ - f * d;
    if (m <= 0 && d - u >= 0 && f - _ >= 0)
      return gl.subVectors(r, s), o = (d - u) / (d - u + (f - _)), e.copy(s).addScaledVector(gl, o);
    const h = 1 / (m + v + p);
    return a = v * h, o = p * h, e.copy(n).addScaledVector(Wi, a).addScaledVector(Xi, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Ic = {
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
}, $n = { h: 0, s: 0, l: 0 }, nr = { h: 0, s: 0, l: 0 };
function pa(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class qt {
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const s = t;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = $e) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Xt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, s = Xt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Xt.toWorkingColorSpace(this, s), this;
  }
  setHSL(t, e, n, s = Xt.workingColorSpace) {
    if (t = Bo(t, 1), e = It(e, 0, 1), n = It(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = pa(a, r, t + 1 / 3), this.g = pa(a, r, t), this.b = pa(a, r, t - 1 / 3);
    }
    return Xt.toWorkingColorSpace(this, s), this;
  }
  setStyle(t, e = $e) {
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
  setColorName(t, e = $e) {
    const n = Ic[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = kn(t.r), this.g = kn(t.g), this.b = kn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = is(t.r), this.g = is(t.g), this.b = is(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = $e) {
    return Xt.fromWorkingColorSpace(Pe.copy(this), t), Math.round(It(Pe.r * 255, 0, 255)) * 65536 + Math.round(It(Pe.g * 255, 0, 255)) * 256 + Math.round(It(Pe.b * 255, 0, 255));
  }
  getHexString(t = $e) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
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
  getRGB(t, e = Xt.workingColorSpace) {
    return Xt.fromWorkingColorSpace(Pe.copy(this), e), t.r = Pe.r, t.g = Pe.g, t.b = Pe.b, t;
  }
  getStyle(t = $e) {
    Xt.fromWorkingColorSpace(Pe.copy(this), t);
    const e = Pe.r, n = Pe.g, s = Pe.b;
    return t !== $e ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL($n), this.setHSL($n.h + t, $n.s + e, $n.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL($n), t.getHSL(nr);
    const n = Fs($n.h, nr.h, e), s = Fs($n.s, nr.s, e), r = Fs($n.l, nr.l, e);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, s = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * s, this.g = r[1] * e + r[4] * n + r[7] * s, this.b = r[2] * e + r[5] * n + r[8] * s, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Pe = /* @__PURE__ */ new qt();
qt.NAMES = Ic;
let Bu = 0;
class Vs extends Ui {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Bu++ }), this.uuid = Vn(), this.name = "", this.type = "Material", this.blending = es, this.side = si, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Na, this.blendDst = Fa, this.blendEquation = gi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new qt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = gs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = il, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Fi, this.stencilZFail = Fi, this.stencilZPass = Fi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== es && (n.blending = this.blending), this.side !== si && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Na && (n.blendSrc = this.blendSrc), this.blendDst !== Fa && (n.blendDst = this.blendDst), this.blendEquation !== gi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== gs && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== il && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Fi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Fi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Fi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
  clone() {
    return new this.constructor().copy(this);
  }
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
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class oi extends Vs {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new qt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Xn(), this.combine = _c, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const _e = /* @__PURE__ */ new w(), ir = /* @__PURE__ */ new Dt();
let zu = 0;
class gn {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: zu++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = So, this.updateRanges = [], this.gpuType = Hn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++)
      this.array[t + s] = e.array[n + s];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        ir.fromBufferAttribute(this, e), ir.applyMatrix3(t), this.setXY(e, ir.x, ir.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        _e.fromBufferAttribute(this, e), _e.applyMatrix3(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      _e.fromBufferAttribute(this, e), _e.applyMatrix4(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      _e.fromBufferAttribute(this, e), _e.applyNormalMatrix(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      _e.fromBufferAttribute(this, e), _e.transformDirection(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = fn(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Jt(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = fn(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = fn(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = fn(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = fn(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, s) {
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), s = Jt(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
  }
  setXYZW(t, e, n, s, r) {
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), s = Jt(s, this.array), r = Jt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== So && (t.usage = this.usage), t;
  }
}
class Nc extends gn {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Fc extends gn {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class pe extends gn {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Hu = 0;
const Ze = /* @__PURE__ */ new ae(), ma = /* @__PURE__ */ new De(), Yi = /* @__PURE__ */ new w(), We = /* @__PURE__ */ new ai(), Ps = /* @__PURE__ */ new ai(), ye = /* @__PURE__ */ new w();
class Ge extends Ui {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Hu++ }), this.uuid = Vn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Pc(t) ? Fc : Nc)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
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
  applyQuaternion(t) {
    return Ze.makeRotationFromQuaternion(t), this.applyMatrix4(Ze), this;
  }
  rotateX(t) {
    return Ze.makeRotationX(t), this.applyMatrix4(Ze), this;
  }
  rotateY(t) {
    return Ze.makeRotationY(t), this.applyMatrix4(Ze), this;
  }
  rotateZ(t) {
    return Ze.makeRotationZ(t), this.applyMatrix4(Ze), this;
  }
  translate(t, e, n) {
    return Ze.makeTranslation(t, e, n), this.applyMatrix4(Ze), this;
  }
  scale(t, e, n) {
    return Ze.makeScale(t, e, n), this.applyMatrix4(Ze), this;
  }
  lookAt(t) {
    return ma.lookAt(t), ma.updateMatrix(), this.applyMatrix4(ma.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Yi).negate(), this.translate(Yi.x, Yi.y, Yi.z), this;
  }
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
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ai());
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
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ii());
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
          Ps.setFromBufferAttribute(o), this.morphTargetsRelative ? (ye.addVectors(We.min, Ps.min), We.expandByPoint(ye), ye.addVectors(We.max, Ps.max), We.expandByPoint(ye)) : (We.expandByPoint(Ps.min), We.expandByPoint(Ps.max));
        }
      We.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++)
        ye.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(ye));
      if (e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            ye.fromBufferAttribute(o, c), l && (Yi.fromBufferAttribute(t, c), ye.add(Yi)), s = Math.max(s, n.distanceToSquared(ye));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, s = e.normal, r = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new gn(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let F = 0; F < n.count; F++)
      o[F] = new w(), l[F] = new w();
    const c = new w(), u = new w(), d = new w(), p = new Dt(), f = new Dt(), _ = new Dt(), v = new w(), m = new w();
    function h(F, S, M) {
      c.fromBufferAttribute(n, F), u.fromBufferAttribute(n, S), d.fromBufferAttribute(n, M), p.fromBufferAttribute(r, F), f.fromBufferAttribute(r, S), _.fromBufferAttribute(r, M), u.sub(c), d.sub(c), f.sub(p), _.sub(p);
      const D = 1 / (f.x * _.y - _.x * f.y);
      isFinite(D) && (v.copy(u).multiplyScalar(_.y).addScaledVector(d, -f.y).multiplyScalar(D), m.copy(d).multiplyScalar(f.x).addScaledVector(u, -_.x).multiplyScalar(D), o[F].add(v), o[S].add(v), o[M].add(v), l[F].add(m), l[S].add(m), l[M].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: t.count
    }]);
    for (let F = 0, S = A.length; F < S; ++F) {
      const M = A[F], D = M.start, G = M.count;
      for (let H = D, W = D + G; H < W; H += 3)
        h(
          t.getX(H + 0),
          t.getX(H + 1),
          t.getX(H + 2)
        );
    }
    const T = new w(), y = new w(), N = new w(), C = new w();
    function P(F) {
      N.fromBufferAttribute(s, F), C.copy(N);
      const S = o[F];
      T.copy(S), T.sub(N.multiplyScalar(N.dot(S))).normalize(), y.crossVectors(C, S);
      const D = y.dot(l[F]) < 0 ? -1 : 1;
      a.setXYZW(F, T.x, T.y, T.z, D);
    }
    for (let F = 0, S = A.length; F < S; ++F) {
      const M = A[F], D = M.start, G = M.count;
      for (let H = D, W = D + G; H < W; H += 3)
        P(t.getX(H + 0)), P(t.getX(H + 1)), P(t.getX(H + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new gn(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
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
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      ye.fromBufferAttribute(t, e), ye.normalize(), t.setXYZ(e, ye.x, ye.y, ye.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, u = o.itemSize, d = o.normalized, p = new c.constructor(l.length * u);
      let f = 0, _ = 0;
      for (let v = 0, m = l.length; v < m; v++) {
        o.isInterleavedBufferAttribute ? f = l[v] * o.data.stride + o.offset : f = l[v] * u;
        for (let h = 0; h < u; h++)
          p[_++] = c[f++];
      }
      return new gn(p, u, d);
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
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
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
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const vl = /* @__PURE__ */ new ae(), di = /* @__PURE__ */ new zo(), sr = /* @__PURE__ */ new Ii(), xl = /* @__PURE__ */ new w(), rr = /* @__PURE__ */ new w(), ar = /* @__PURE__ */ new w(), or = /* @__PURE__ */ new w(), _a = /* @__PURE__ */ new w(), lr = /* @__PURE__ */ new w(), Ml = /* @__PURE__ */ new w(), cr = /* @__PURE__ */ new w();
class fe extends De {
  constructor(t = new Ge(), e = new oi()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
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
  getVertexPosition(t, e) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const o = this.morphTargetInfluences;
    if (r && o) {
      lr.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = o[l], d = r[l];
        u !== 0 && (_a.fromBufferAttribute(d, t), a ? lr.addScaledVector(_a, u) : lr.addScaledVector(_a.sub(e), u));
      }
      e.add(lr);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), sr.copy(n.boundingSphere), sr.applyMatrix4(r), di.copy(t.ray).recast(t.near), !(sr.containsPoint(di.origin) === !1 && (di.intersectSphere(sr, xl) === null || di.origin.distanceToSquared(xl) > (t.far - t.near) ** 2)) && (vl.copy(r).invert(), di.copy(t.ray).applyMatrix4(vl), !(n.boundingBox !== null && di.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, di)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, u = r.attributes.uv1, d = r.attributes.normal, p = r.groups, f = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let _ = 0, v = p.length; _ < v; _++) {
          const m = p[_], h = a[m.materialIndex], A = Math.max(m.start, f.start), T = Math.min(o.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = A, N = T; y < N; y += 3) {
            const C = o.getX(y), P = o.getX(y + 1), F = o.getX(y + 2);
            s = hr(this, h, t, n, c, u, d, C, P, F), s && (s.faceIndex = Math.floor(y / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const _ = Math.max(0, f.start), v = Math.min(o.count, f.start + f.count);
        for (let m = _, h = v; m < h; m += 3) {
          const A = o.getX(m), T = o.getX(m + 1), y = o.getX(m + 2);
          s = hr(this, a, t, n, c, u, d, A, T, y), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let _ = 0, v = p.length; _ < v; _++) {
          const m = p[_], h = a[m.materialIndex], A = Math.max(m.start, f.start), T = Math.min(l.count, Math.min(m.start + m.count, f.start + f.count));
          for (let y = A, N = T; y < N; y += 3) {
            const C = y, P = y + 1, F = y + 2;
            s = hr(this, h, t, n, c, u, d, C, P, F), s && (s.faceIndex = Math.floor(y / 3), s.face.materialIndex = m.materialIndex, e.push(s));
          }
        }
      else {
        const _ = Math.max(0, f.start), v = Math.min(l.count, f.start + f.count);
        for (let m = _, h = v; m < h; m += 3) {
          const A = m, T = m + 1, y = m + 2;
          s = hr(this, a, t, n, c, u, d, A, T, y), s && (s.faceIndex = Math.floor(m / 3), e.push(s));
        }
      }
  }
}
function Gu(i, t, e, n, s, r, a, o) {
  let l;
  if (t.side === ze ? l = n.intersectTriangle(a, r, s, !0, o) : l = n.intersectTriangle(s, r, a, t.side === si, o), l === null) return null;
  cr.copy(o), cr.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(cr);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: cr.clone(),
    object: i
  };
}
function hr(i, t, e, n, s, r, a, o, l, c) {
  i.getVertexPosition(o, rr), i.getVertexPosition(l, ar), i.getVertexPosition(c, or);
  const u = Gu(i, t, e, n, rr, ar, or, Ml);
  if (u) {
    const d = new w();
    pn.getBarycoord(Ml, rr, ar, or, d), s && (u.uv = pn.getInterpolatedAttribute(s, o, l, c, d, new Dt())), r && (u.uv1 = pn.getInterpolatedAttribute(r, o, l, c, d, new Dt())), a && (u.normal = pn.getInterpolatedAttribute(a, o, l, c, d, new w()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const p = {
      a: o,
      b: l,
      c,
      normal: new w(),
      materialIndex: 0
    };
    pn.getNormal(rr, ar, or, p.normal), u.face = p, u.barycoord = d;
  }
  return u;
}
class ks extends Ge {
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
    function _(v, m, h, A, T, y, N, C, P, F, S) {
      const M = y / P, D = N / F, G = y / 2, H = N / 2, W = C / 2, K = P + 1, X = F + 1;
      let tt = 0, k = 0;
      const rt = new w();
      for (let dt = 0; dt < X; dt++) {
        const St = dt * D - H;
        for (let Ot = 0; Ot < K; Ot++) {
          const ne = Ot * M - G;
          rt[v] = ne * A, rt[m] = St * T, rt[h] = W, c.push(rt.x, rt.y, rt.z), rt[v] = 0, rt[m] = 0, rt[h] = C > 0 ? 1 : -1, u.push(rt.x, rt.y, rt.z), d.push(Ot / P), d.push(1 - dt / F), tt += 1;
        }
      }
      for (let dt = 0; dt < F; dt++)
        for (let St = 0; St < P; St++) {
          const Ot = p + St + K * dt, ne = p + St + K * (dt + 1), q = p + (St + 1) + K * (dt + 1), et = p + (St + 1) + K * dt;
          l.push(Ot, ne, et), l.push(ne, q, et), k += 6;
        }
      o.addGroup(f, k, S), f += k, p += tt;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ks(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Es(i) {
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
    const n = Es(i[e]);
    for (const s in n)
      t[s] = n[s];
  }
  return t;
}
function Vu(i) {
  const t = [];
  for (let e = 0; e < i.length; e++)
    t.push(i[e].clone());
  return t;
}
function Oc(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Xt.workingColorSpace;
}
const Ho = { clone: Es, merge: Ie };
var ku = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Wu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Yn extends Vs {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ku, this.fragmentShader = Wu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Es(t.uniforms), this.uniformsGroups = Vu(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
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
class Bc extends De {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ae(), this.projectionMatrix = new ae(), this.projectionMatrixInverse = new ae(), this.coordinateSystem = Gn;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
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
const Jn = /* @__PURE__ */ new w(), Sl = /* @__PURE__ */ new Dt(), yl = /* @__PURE__ */ new Dt();
class Je extends Bc {
  constructor(t = 50, e = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Bs * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   *
   * @returns {number}
   */
  getFocalLength() {
    const t = Math.tan(Ns * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Bs * 2 * Math.atan(
      Math.tan(Ns * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance
   * @param {Vector2} minTarget
   * @param {Vector2} maxTarget
   */
  getViewBounds(t, e, n) {
    Jn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Jn.x, Jn.y).multiplyScalar(-t / Jn.z), Jn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Jn.x, Jn.y).multiplyScalar(-t / Jn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance
   * @param {Vector2} target - Vector2 target used to store result where x is width and y is height.
   * @returns {Vector2}
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, Sl, yl), e.subVectors(yl, Sl);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth
   * @param {number} fullHeight
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
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
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Ns * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
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
const qi = -90, ji = 1;
class Xu extends De {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Je(qi, ji, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Je(qi, ji, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Je(qi, ji, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Je(qi, ji, t, e);
    o.layers = this.layers, this.add(o);
    const l = new Je(qi, ji, t, e);
    l.layers = this.layers, this.add(l);
    const c = new Je(qi, ji, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, l] = e;
    for (const c of e) this.remove(c);
    if (t === Gn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === Dr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e)
      this.add(c), c.updateMatrixWorld();
  }
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
class zc extends He {
  constructor(t, e, n, s, r, a, o, l, c, u) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : vs, super(t, e, n, s, r, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Yu extends Ci {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new zc(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Tn;
  }
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
    }, s = new ks(5, 5, 5), r = new Yn({
      name: "CubemapFromEquirect",
      uniforms: Es(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: ze,
      blending: ni
    });
    r.uniforms.tEquirect.value = e;
    const a = new fe(s, r), o = e.minFilter;
    return e.minFilter === Mi && (e.minFilter = Tn), new Xu(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, s) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, s);
    t.setRenderTarget(r);
  }
}
class Ls extends De {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const qu = { type: "move" };
class ga {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ls(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ls(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new w(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new w()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ls(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new w(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new w()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
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
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1, s.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(qu)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new Ls();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class ju extends De {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Xn(), this.environmentIntensity = 1, this.environmentRotation = new Xn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Zu {
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = So, this.updateRanges = [], this.version = 0, this.uuid = Vn();
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let s = 0, r = this.stride; s < r; s++)
      this.array[t + s] = e.array[n + s];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Vn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
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
  constructor(t, e, n, s = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = s;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Ue.fromBufferAttribute(this, e), Ue.applyMatrix4(t), this.setXYZ(e, Ue.x, Ue.y, Ue.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Ue.fromBufferAttribute(this, e), Ue.applyNormalMatrix(t), this.setXYZ(e, Ue.x, Ue.y, Ue.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Ue.fromBufferAttribute(this, e), Ue.transformDirection(t), this.setXYZ(e, Ue.x, Ue.y, Ue.z);
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = fn(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Jt(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  setX(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = fn(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = fn(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = fn(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = fn(e, this.array)), e;
  }
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), s = Jt(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = s, this;
  }
  setXYZW(t, e, n, s, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), s = Jt(s, this.array), r = Jt(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = s, this.data.array[t + 3] = r, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[s + r]);
      }
      return new gn(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ei(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
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
const va = /* @__PURE__ */ new w(), Ku = /* @__PURE__ */ new w(), $u = /* @__PURE__ */ new Ut();
let Ln = class {
  constructor(t = new w(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, s) {
    return this.normal.set(t, e, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const s = va.subVectors(n, e).cross(Ku.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(va), s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || $u.getNormalMatrix(t), s = this.coplanarPoint(va).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
const fi = /* @__PURE__ */ new Ii(), ur = /* @__PURE__ */ new w();
class Hc {
  constructor(t = new Ln(), e = new Ln(), n = new Ln(), s = new Ln(), r = new Ln(), a = new Ln()) {
    this.planes = [t, e, n, s, r, a];
  }
  set(t, e, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = Gn) {
    const n = this.planes, s = t.elements, r = s[0], a = s[1], o = s[2], l = s[3], c = s[4], u = s[5], d = s[6], p = s[7], f = s[8], _ = s[9], v = s[10], m = s[11], h = s[12], A = s[13], T = s[14], y = s[15];
    if (n[0].setComponents(l - r, p - c, m - f, y - h).normalize(), n[1].setComponents(l + r, p + c, m + f, y + h).normalize(), n[2].setComponents(l + a, p + u, m + _, y + A).normalize(), n[3].setComponents(l - a, p - u, m - _, y - A).normalize(), n[4].setComponents(l - o, p - d, m - v, y - T).normalize(), e === Gn)
      n[5].setComponents(l + o, p + d, m + v, y + T).normalize();
    else if (e === Dr)
      n[5].setComponents(o, d, v, T).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(fi);
  }
  intersectsSprite(t) {
    return fi.center.set(0, 0, 0), fi.radius = 0.7071067811865476, fi.applyMatrix4(t.matrixWorld), this.intersectsSphere(fi);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, s = -t.radius;
    for (let r = 0; r < 6; r++)
      if (e[r].distanceToPoint(n) < s)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = e[n];
      if (ur.x = s.normal.x > 0 ? t.max.x : t.min.x, ur.y = s.normal.y > 0 ? t.max.y : t.min.y, ur.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(ur) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Go extends Vs {
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new qt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Ur = /* @__PURE__ */ new w(), Ir = /* @__PURE__ */ new w(), El = /* @__PURE__ */ new ae(), Ds = /* @__PURE__ */ new zo(), dr = /* @__PURE__ */ new Ii(), xa = /* @__PURE__ */ new w(), Tl = /* @__PURE__ */ new w();
let Gc = class extends De {
  constructor(t = new Ge(), e = new Go()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let s = 1, r = e.count; s < r; s++)
        Ur.fromBufferAttribute(e, s - 1), Ir.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += Ur.distanceTo(Ir);
      t.setAttribute("lineDistance", new pe(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), dr.copy(n.boundingSphere), dr.applyMatrix4(s), dr.radius += r, t.ray.intersectsSphere(dr) === !1) return;
    El.copy(s).invert(), Ds.copy(t.ray).applyMatrix4(El);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, p = n.attributes.position;
    if (u !== null) {
      const f = Math.max(0, a.start), _ = Math.min(u.count, a.start + a.count);
      for (let v = f, m = _ - 1; v < m; v += c) {
        const h = u.getX(v), A = u.getX(v + 1), T = fr(this, t, Ds, l, h, A, v);
        T && e.push(T);
      }
      if (this.isLineLoop) {
        const v = u.getX(_ - 1), m = u.getX(f), h = fr(this, t, Ds, l, v, m, _ - 1);
        h && e.push(h);
      }
    } else {
      const f = Math.max(0, a.start), _ = Math.min(p.count, a.start + a.count);
      for (let v = f, m = _ - 1; v < m; v += c) {
        const h = fr(this, t, Ds, l, v, v + 1, v);
        h && e.push(h);
      }
      if (this.isLineLoop) {
        const v = fr(this, t, Ds, l, _ - 1, f, _ - 1);
        v && e.push(v);
      }
    }
  }
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
function fr(i, t, e, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (Ur.fromBufferAttribute(o, s), Ir.fromBufferAttribute(o, r), e.distanceSqToSegment(Ur, Ir, xa, Tl) > n) return;
  xa.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(xa);
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Tl.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i
    };
}
const bl = /* @__PURE__ */ new w(), Al = /* @__PURE__ */ new w();
class Ju extends Gc {
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let s = 0, r = e.count; s < r; s += 2)
        bl.fromBufferAttribute(e, s), Al.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + bl.distanceTo(Al);
      t.setAttribute("lineDistance", new pe(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Vc extends He {
  constructor(t, e, n, s, r, a, o, l, c, u = ns) {
    if (u !== ns && u !== Ss)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === ns && (n = Ri), n === void 0 && u === Ss && (n = Ms), super(null, s, r, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : _n, this.minFilter = l !== void 0 ? l : _n, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class Qu {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  // Get sequence of points using getPoint( t )
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  // Get total curve arc length
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  // Get list of cumulative segment lengths
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
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(t, e) {
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
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, e) {
    let s = t - 1e-4, r = t + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const a = this.getPoint(s), o = this.getPoint(r), l = e || (a.isVector2 ? new Dt() : new w());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
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
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
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
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class td extends Qu {
  constructor(t = 0, e = 0, n = 1, s = 1, r = 0, a = Math.PI * 2, o = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
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
class kr extends Ge {
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
    A(), a === !1 && (t > 0 && T(!0), e > 0 && T(!1)), this.setIndex(u), this.setAttribute("position", new pe(d, 3)), this.setAttribute("normal", new pe(p, 3)), this.setAttribute("uv", new pe(f, 2));
    function A() {
      const y = new w(), N = new w();
      let C = 0;
      const P = (e - t) / n;
      for (let F = 0; F <= r; F++) {
        const S = [], M = F / r, D = M * (e - t) + t;
        for (let G = 0; G <= s; G++) {
          const H = G / s, W = H * l + o, K = Math.sin(W), X = Math.cos(W);
          N.x = D * K, N.y = -M * n + m, N.z = D * X, d.push(N.x, N.y, N.z), y.set(K, P, X).normalize(), p.push(y.x, y.y, y.z), f.push(H, 1 - M), S.push(_++);
        }
        v.push(S);
      }
      for (let F = 0; F < s; F++)
        for (let S = 0; S < r; S++) {
          const M = v[S][F], D = v[S + 1][F], G = v[S + 1][F + 1], H = v[S][F + 1];
          (t > 0 || S !== 0) && (u.push(M, D, H), C += 3), (e > 0 || S !== r - 1) && (u.push(D, G, H), C += 3);
        }
      c.addGroup(h, C, 0), h += C;
    }
    function T(y) {
      const N = _, C = new Dt(), P = new w();
      let F = 0;
      const S = y === !0 ? t : e, M = y === !0 ? 1 : -1;
      for (let G = 1; G <= s; G++)
        d.push(0, m * M, 0), p.push(0, M, 0), f.push(0.5, 0.5), _++;
      const D = _;
      for (let G = 0; G <= s; G++) {
        const W = G / s * l + o, K = Math.cos(W), X = Math.sin(W);
        P.x = S * X, P.y = m * M, P.z = S * K, d.push(P.x, P.y, P.z), p.push(0, M, 0), C.x = K * 0.5 + 0.5, C.y = X * 0.5 * M + 0.5, f.push(C.x, C.y), _++;
      }
      for (let G = 0; G < s; G++) {
        const H = N + G, W = D + G;
        y === !0 ? u.push(W, W + 1, H) : u.push(W + 1, W, H), F += 3;
      }
      c.addGroup(h, F, y === !0 ? 1 : 2), h += F;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new kr(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class Wr extends kr {
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
  static fromJSON(t) {
    return new Wr(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class Ws extends Ge {
  constructor(t = 1, e = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: s
    };
    const r = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(s), c = o + 1, u = l + 1, d = t / o, p = e / l, f = [], _ = [], v = [], m = [];
    for (let h = 0; h < u; h++) {
      const A = h * p - a;
      for (let T = 0; T < c; T++) {
        const y = T * d - r;
        _.push(y, -A, 0), v.push(0, 0, 1), m.push(T / o), m.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++)
      for (let A = 0; A < o; A++) {
        const T = A + c * h, y = A + c * (h + 1), N = A + 1 + c * (h + 1), C = A + 1 + c * h;
        f.push(T, y, C), f.push(y, N, C);
      }
    this.setIndex(f), this.setAttribute("position", new pe(_, 3)), this.setAttribute("normal", new pe(v, 3)), this.setAttribute("uv", new pe(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ws(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Xr extends Ge {
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
      const A = [], T = h / n;
      let y = 0;
      h === 0 && a === 0 ? y = 0.5 / e : h === n && l === Math.PI && (y = -0.5 / e);
      for (let N = 0; N <= e; N++) {
        const C = N / e;
        d.x = -t * Math.cos(s + C * r) * Math.sin(a + T * o), d.y = t * Math.cos(a + T * o), d.z = t * Math.sin(s + C * r) * Math.sin(a + T * o), _.push(d.x, d.y, d.z), p.copy(d).normalize(), v.push(p.x, p.y, p.z), m.push(C + y, 1 - T), A.push(c++);
      }
      u.push(A);
    }
    for (let h = 0; h < n; h++)
      for (let A = 0; A < e; A++) {
        const T = u[h][A + 1], y = u[h][A], N = u[h + 1][A], C = u[h + 1][A + 1];
        (h !== 0 || a > 0) && f.push(T, y, C), (h !== n - 1 || l < Math.PI) && f.push(y, N, C);
      }
    this.setIndex(f), this.setAttribute("position", new pe(_, 3)), this.setAttribute("normal", new pe(v, 3)), this.setAttribute("uv", new pe(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Xr(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class ed extends Ge {
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
              const h = o.getX(_ + m), A = o.getX(_ + (m + 1) % 3);
              s.fromBufferAttribute(a, h), r.fromBufferAttribute(a, A), wl(s, r, n) === !0 && (e.push(s.x, s.y, s.z), e.push(r.x, r.y, r.z));
            }
        }
      } else {
        const a = t.attributes.position;
        for (let o = 0, l = a.count / 3; o < l; o++)
          for (let c = 0; c < 3; c++) {
            const u = 3 * o + c, d = 3 * o + (c + 1) % 3;
            s.fromBufferAttribute(a, u), r.fromBufferAttribute(a, d), wl(s, r, n) === !0 && (e.push(s.x, s.y, s.z), e.push(r.x, r.y, r.z));
          }
      }
      this.setAttribute("position", new pe(e, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
function wl(i, t, e) {
  const n = `${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`, s = `${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;
  return e.has(n) === !0 || e.has(s) === !0 ? !1 : (e.add(n), e.add(s), !0);
}
class nd extends Vs {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = jh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class id extends Vs {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
class sd extends Bc {
  constructor(t = -1, e = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
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
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
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
class rd extends Ge {
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
class ad extends Je {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t, this.index = 0;
  }
}
class yo extends Zu {
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
class Rl {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = It(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(It(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Cl = /* @__PURE__ */ new w(), pr = /* @__PURE__ */ new w();
class Vo {
  constructor(t = new w(), e = new w()) {
    this.start = t, this.end = e;
  }
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this;
  }
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this;
  }
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(t) {
    return t.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start);
  }
  closestPointToPointParameter(t, e) {
    Cl.subVectors(t, this.start), pr.subVectors(this.end, this.start);
    const n = pr.dot(pr);
    let r = pr.dot(Cl) / n;
    return e && (r = It(r, 0, 1)), r;
  }
  closestPointToPoint(t, e, n) {
    const s = this.closestPointToPointParameter(t, e);
    return this.delta(n).multiplyScalar(s).add(this.start);
  }
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
  }
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ma extends Ju {
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
    const d = new Go({ vertexColors: !0, toneMapped: !1 });
    super(u, d), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const Pl = /* @__PURE__ */ new w();
let mr, Sa;
class ya extends De {
  // dir is assumed to be normalized
  constructor(t = new w(0, 0, 1), e = new w(0, 0, 0), n = 1, s = 16776960, r = n * 0.2, a = r * 0.2) {
    super(), this.type = "ArrowHelper", mr === void 0 && (mr = new Ge(), mr.setAttribute("position", new pe([0, 0, 0, 0, 1, 0], 3)), Sa = new kr(0, 0.5, 1, 5, 1), Sa.translate(0, -0.5, 0)), this.position.copy(e), this.line = new Gc(mr, new Go({ color: s, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new fe(Sa, new oi({ color: s, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, a);
  }
  setDirection(t) {
    if (t.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      Pl.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(Pl, e);
    }
  }
  setLength(t, e = t * 0.2, n = e * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
  }
  setColor(t) {
    this.line.material.color.set(t), this.cone.material.color.set(t);
  }
  copy(t) {
    return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class od extends Ui {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Dl(i, t, e, n) {
  const s = ld(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Sc:
      return i * t;
    case Ec:
      return i * t;
    case Tc:
      return i * t * 2;
    case bc:
      return i * t / s.components * s.byteLength;
    case No:
      return i * t / s.components * s.byteLength;
    case Ac:
      return i * t * 2 / s.components * s.byteLength;
    case Fo:
      return i * t * 2 / s.components * s.byteLength;
    case yc:
      return i * t * 3 / s.components * s.byteLength;
    case mn:
      return i * t * 4 / s.components * s.byteLength;
    case Oo:
      return i * t * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case Tr:
    case br:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ar:
    case wr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case Za:
    case $a:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case ja:
    case Ka:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Ja:
    case Qa:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case to:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case eo:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case no:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case io:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case so:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case ro:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case ao:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case oo:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case lo:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case co:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case ho:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case uo:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case fo:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case po:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case mo:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Rr:
    case _o:
    case go:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case wc:
    case vo:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case xo:
    case Mo:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function ld(i) {
  switch (i) {
    case Wn:
    case vc:
      return { byteLength: 1, components: 1 };
    case Os:
    case xc:
    case Gs:
      return { byteLength: 2, components: 1 };
    case Uo:
    case Io:
      return { byteLength: 2, components: 4 };
    case Ri:
    case Lo:
    case Hn:
      return { byteLength: 4, components: 1 };
    case Mc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Do
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Do);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function kc() {
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
function cd(i) {
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
var hd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ud = `#ifdef USE_ALPHAHASH
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
#endif`, dd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, fd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, pd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, md = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, _d = `#ifdef USE_AOMAP
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
#endif`, gd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, vd = `#ifdef USE_BATCHING
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
#endif`, xd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Md = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Sd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, yd = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Ed = `#ifdef USE_IRIDESCENCE
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
#endif`, Td = `#ifdef USE_BUMPMAP
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
#endif`, bd = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Ad = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, wd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Rd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Cd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Pd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Dd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Ld = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Ud = `#define PI 3.141592653589793
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
} // validated`, Id = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Nd = `vec3 transformedNormal = objectNormal;
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
#endif`, Fd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Od = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Bd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, zd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Hd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Gd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Vd = `#ifdef USE_ENVMAP
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
#endif`, kd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Wd = `#ifdef USE_ENVMAP
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
#endif`, Xd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Yd = `#ifdef USE_ENVMAP
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
#endif`, qd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, jd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Zd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Kd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, $d = `#ifdef USE_GRADIENTMAP
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
}`, Jd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Qd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, tf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ef = `uniform bool receiveShadow;
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
#endif`, nf = `#ifdef USE_ENVMAP
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
#endif`, sf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, rf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, af = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, of = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, lf = `PhysicalMaterial material;
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
#endif`, cf = `struct PhysicalMaterial {
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
}`, hf = `
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
#endif`, uf = `#if defined( RE_IndirectDiffuse )
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
#endif`, df = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ff = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, pf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, mf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, _f = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, gf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, vf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Mf = `#if defined( USE_POINTS_UV )
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
#endif`, Sf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, yf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ef = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Tf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, bf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Af = `#ifdef USE_MORPHTARGETS
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
#endif`, wf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Rf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Cf = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Pf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Df = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Lf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Uf = `#ifdef USE_NORMALMAP
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
#endif`, If = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Nf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ff = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Of = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Bf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, zf = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Hf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Gf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Vf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, kf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Wf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Xf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Yf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, qf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, jf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Zf = `float getShadowMask() {
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
}`, Kf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, $f = `#ifdef USE_SKINNING
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
#endif`, Jf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Qf = `#ifdef USE_SKINNING
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
#endif`, tp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ep = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, np = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ip = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, sp = `#ifdef USE_TRANSMISSION
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
#endif`, rp = `#ifdef USE_TRANSMISSION
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
#endif`, ap = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, op = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, lp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, cp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const hp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, up = `uniform sampler2D t2D;
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
}`, dp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, fp = `#ifdef ENVMAP_TYPE_CUBE
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
}`, pp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, mp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, _p = `#include <common>
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
}`, gp = `#if DEPTH_PACKING == 3200
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
}`, vp = `#define DISTANCE
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
}`, xp = `#define DISTANCE
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
}`, Mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Sp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yp = `uniform float scale;
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
}`, Ep = `uniform vec3 diffuse;
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
}`, Tp = `#include <common>
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
}`, bp = `uniform vec3 diffuse;
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
}`, Ap = `#define LAMBERT
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
}`, wp = `#define LAMBERT
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
}`, Rp = `#define MATCAP
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
}`, Cp = `#define MATCAP
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
}`, Pp = `#define NORMAL
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
}`, Dp = `#define NORMAL
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
}`, Lp = `#define PHONG
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
}`, Up = `#define PHONG
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
}`, Ip = `#define STANDARD
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
}`, Np = `#define STANDARD
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
}`, Fp = `#define TOON
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
}`, Op = `#define TOON
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
}`, Bp = `uniform float size;
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
}`, zp = `uniform vec3 diffuse;
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
}`, Hp = `#include <common>
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
}`, Gp = `uniform vec3 color;
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
}`, Vp = `uniform float rotation;
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
}`, kp = `uniform vec3 diffuse;
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
  alphahash_fragment: hd,
  alphahash_pars_fragment: ud,
  alphamap_fragment: dd,
  alphamap_pars_fragment: fd,
  alphatest_fragment: pd,
  alphatest_pars_fragment: md,
  aomap_fragment: _d,
  aomap_pars_fragment: gd,
  batching_pars_vertex: vd,
  batching_vertex: xd,
  begin_vertex: Md,
  beginnormal_vertex: Sd,
  bsdfs: yd,
  iridescence_fragment: Ed,
  bumpmap_pars_fragment: Td,
  clipping_planes_fragment: bd,
  clipping_planes_pars_fragment: Ad,
  clipping_planes_pars_vertex: wd,
  clipping_planes_vertex: Rd,
  color_fragment: Cd,
  color_pars_fragment: Pd,
  color_pars_vertex: Dd,
  color_vertex: Ld,
  common: Ud,
  cube_uv_reflection_fragment: Id,
  defaultnormal_vertex: Nd,
  displacementmap_pars_vertex: Fd,
  displacementmap_vertex: Od,
  emissivemap_fragment: Bd,
  emissivemap_pars_fragment: zd,
  colorspace_fragment: Hd,
  colorspace_pars_fragment: Gd,
  envmap_fragment: Vd,
  envmap_common_pars_fragment: kd,
  envmap_pars_fragment: Wd,
  envmap_pars_vertex: Xd,
  envmap_physical_pars_fragment: nf,
  envmap_vertex: Yd,
  fog_vertex: qd,
  fog_pars_vertex: jd,
  fog_fragment: Zd,
  fog_pars_fragment: Kd,
  gradientmap_pars_fragment: $d,
  lightmap_pars_fragment: Jd,
  lights_lambert_fragment: Qd,
  lights_lambert_pars_fragment: tf,
  lights_pars_begin: ef,
  lights_toon_fragment: sf,
  lights_toon_pars_fragment: rf,
  lights_phong_fragment: af,
  lights_phong_pars_fragment: of,
  lights_physical_fragment: lf,
  lights_physical_pars_fragment: cf,
  lights_fragment_begin: hf,
  lights_fragment_maps: uf,
  lights_fragment_end: df,
  logdepthbuf_fragment: ff,
  logdepthbuf_pars_fragment: pf,
  logdepthbuf_pars_vertex: mf,
  logdepthbuf_vertex: _f,
  map_fragment: gf,
  map_pars_fragment: vf,
  map_particle_fragment: xf,
  map_particle_pars_fragment: Mf,
  metalnessmap_fragment: Sf,
  metalnessmap_pars_fragment: yf,
  morphinstance_vertex: Ef,
  morphcolor_vertex: Tf,
  morphnormal_vertex: bf,
  morphtarget_pars_vertex: Af,
  morphtarget_vertex: wf,
  normal_fragment_begin: Rf,
  normal_fragment_maps: Cf,
  normal_pars_fragment: Pf,
  normal_pars_vertex: Df,
  normal_vertex: Lf,
  normalmap_pars_fragment: Uf,
  clearcoat_normal_fragment_begin: If,
  clearcoat_normal_fragment_maps: Nf,
  clearcoat_pars_fragment: Ff,
  iridescence_pars_fragment: Of,
  opaque_fragment: Bf,
  packing: zf,
  premultiplied_alpha_fragment: Hf,
  project_vertex: Gf,
  dithering_fragment: Vf,
  dithering_pars_fragment: kf,
  roughnessmap_fragment: Wf,
  roughnessmap_pars_fragment: Xf,
  shadowmap_pars_fragment: Yf,
  shadowmap_pars_vertex: qf,
  shadowmap_vertex: jf,
  shadowmask_pars_fragment: Zf,
  skinbase_vertex: Kf,
  skinning_pars_vertex: $f,
  skinning_vertex: Jf,
  skinnormal_vertex: Qf,
  specularmap_fragment: tp,
  specularmap_pars_fragment: ep,
  tonemapping_fragment: np,
  tonemapping_pars_fragment: ip,
  transmission_fragment: sp,
  transmission_pars_fragment: rp,
  uv_pars_fragment: ap,
  uv_pars_vertex: op,
  uv_vertex: lp,
  worldpos_vertex: cp,
  background_vert: hp,
  background_frag: up,
  backgroundCube_vert: dp,
  backgroundCube_frag: fp,
  cube_vert: pp,
  cube_frag: mp,
  depth_vert: _p,
  depth_frag: gp,
  distanceRGBA_vert: vp,
  distanceRGBA_frag: xp,
  equirect_vert: Mp,
  equirect_frag: Sp,
  linedashed_vert: yp,
  linedashed_frag: Ep,
  meshbasic_vert: Tp,
  meshbasic_frag: bp,
  meshlambert_vert: Ap,
  meshlambert_frag: wp,
  meshmatcap_vert: Rp,
  meshmatcap_frag: Cp,
  meshnormal_vert: Pp,
  meshnormal_frag: Dp,
  meshphong_vert: Lp,
  meshphong_frag: Up,
  meshphysical_vert: Ip,
  meshphysical_frag: Np,
  meshtoon_vert: Fp,
  meshtoon_frag: Op,
  points_vert: Bp,
  points_frag: zp,
  shadow_vert: Hp,
  shadow_frag: Gp,
  sprite_vert: Vp,
  sprite_frag: kp
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
const _r = { r: 0, b: 0, g: 0 }, pi = /* @__PURE__ */ new Xn(), Wp = /* @__PURE__ */ new ae();
function Xp(i, t, e, n, s, r, a) {
  const o = new qt(0);
  let l = r === !0 ? 0 : 1, c, u, d = null, p = 0, f = null;
  function _(T) {
    let y = T.isScene === !0 ? T.background : null;
    return y && y.isTexture && (y = (T.backgroundBlurriness > 0 ? e : t).get(y)), y;
  }
  function v(T) {
    let y = !1;
    const N = _(T);
    N === null ? h(o, l) : N && N.isColor && (h(N, 1), y = !0);
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || y) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(T, y) {
    const N = _(y);
    N && (N.isCubeTexture || N.mapping === Vr) ? (u === void 0 && (u = new fe(
      new ks(1, 1, 1),
      new Yn({
        name: "BackgroundCubeMaterial",
        uniforms: Es(Be.backgroundCube.uniforms),
        vertexShader: Be.backgroundCube.vertexShader,
        fragmentShader: Be.backgroundCube.fragmentShader,
        side: ze,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(C, P, F) {
      this.matrixWorld.copyPosition(F.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(u)), pi.copy(y.backgroundRotation), pi.x *= -1, pi.y *= -1, pi.z *= -1, N.isCubeTexture && N.isRenderTargetTexture === !1 && (pi.y *= -1, pi.z *= -1), u.material.uniforms.envMap.value = N, u.material.uniforms.flipEnvMap.value = N.isCubeTexture && N.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(pi)), u.material.toneMapped = Xt.getTransfer(N.colorSpace) !== te, (d !== N || p !== N.version || f !== i.toneMapping) && (u.material.needsUpdate = !0, d = N, p = N.version, f = i.toneMapping), u.layers.enableAll(), T.unshift(u, u.geometry, u.material, 0, 0, null)) : N && N.isTexture && (c === void 0 && (c = new fe(
      new Ws(2, 2),
      new Yn({
        name: "BackgroundMaterial",
        uniforms: Es(Be.background.uniforms),
        vertexShader: Be.background.vertexShader,
        fragmentShader: Be.background.fragmentShader,
        side: si,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(c)), c.material.uniforms.t2D.value = N, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = Xt.getTransfer(N.colorSpace) !== te, N.matrixAutoUpdate === !0 && N.updateMatrix(), c.material.uniforms.uvTransform.value.copy(N.matrix), (d !== N || p !== N.version || f !== i.toneMapping) && (c.material.needsUpdate = !0, d = N, p = N.version, f = i.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(T, y) {
    T.getRGB(_r, Oc(i)), n.buffers.color.setClear(_r.r, _r.g, _r.b, y, a);
  }
  function A() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(T, y = 1) {
      o.set(T), l = y, h(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(T) {
      l = T, h(o, l);
    },
    render: v,
    addToRenderList: m,
    dispose: A
  };
}
function Yp(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = p(null);
  let r = s, a = !1;
  function o(M, D, G, H, W) {
    let K = !1;
    const X = d(H, G, D);
    r !== X && (r = X, c(r.object)), K = f(M, H, G, W), K && _(M, H, G, W), W !== null && t.update(W, i.ELEMENT_ARRAY_BUFFER), (K || a) && (a = !1, y(M, D, G, H), W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(W).buffer));
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
    const H = G.wireframe === !0;
    let W = n[M.id];
    W === void 0 && (W = {}, n[M.id] = W);
    let K = W[D.id];
    K === void 0 && (K = {}, W[D.id] = K);
    let X = K[H];
    return X === void 0 && (X = p(l()), K[H] = X), X;
  }
  function p(M) {
    const D = [], G = [], H = [];
    for (let W = 0; W < e; W++)
      D[W] = 0, G[W] = 0, H[W] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: D,
      enabledAttributes: G,
      attributeDivisors: H,
      object: M,
      attributes: {},
      index: null
    };
  }
  function f(M, D, G, H) {
    const W = r.attributes, K = D.attributes;
    let X = 0;
    const tt = G.getAttributes();
    for (const k in tt)
      if (tt[k].location >= 0) {
        const dt = W[k];
        let St = K[k];
        if (St === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (St = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (St = M.instanceColor)), dt === void 0 || dt.attribute !== St || St && dt.data !== St.data) return !0;
        X++;
      }
    return r.attributesNum !== X || r.index !== H;
  }
  function _(M, D, G, H) {
    const W = {}, K = D.attributes;
    let X = 0;
    const tt = G.getAttributes();
    for (const k in tt)
      if (tt[k].location >= 0) {
        let dt = K[k];
        dt === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (dt = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (dt = M.instanceColor));
        const St = {};
        St.attribute = dt, dt && dt.data && (St.data = dt.data), W[k] = St, X++;
      }
    r.attributes = W, r.attributesNum = X, r.index = H;
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
    const G = r.newAttributes, H = r.enabledAttributes, W = r.attributeDivisors;
    G[M] = 1, H[M] === 0 && (i.enableVertexAttribArray(M), H[M] = 1), W[M] !== D && (i.vertexAttribDivisor(M, D), W[M] = D);
  }
  function A() {
    const M = r.newAttributes, D = r.enabledAttributes;
    for (let G = 0, H = D.length; G < H; G++)
      D[G] !== M[G] && (i.disableVertexAttribArray(G), D[G] = 0);
  }
  function T(M, D, G, H, W, K, X) {
    X === !0 ? i.vertexAttribIPointer(M, D, G, W, K) : i.vertexAttribPointer(M, D, G, H, W, K);
  }
  function y(M, D, G, H) {
    v();
    const W = H.attributes, K = G.getAttributes(), X = D.defaultAttributeValues;
    for (const tt in K) {
      const k = K[tt];
      if (k.location >= 0) {
        let rt = W[tt];
        if (rt === void 0 && (tt === "instanceMatrix" && M.instanceMatrix && (rt = M.instanceMatrix), tt === "instanceColor" && M.instanceColor && (rt = M.instanceColor)), rt !== void 0) {
          const dt = rt.normalized, St = rt.itemSize, Ot = t.get(rt);
          if (Ot === void 0) continue;
          const ne = Ot.buffer, q = Ot.type, et = Ot.bytesPerElement, gt = q === i.INT || q === i.UNSIGNED_INT || rt.gpuType === Lo;
          if (rt.isInterleavedBufferAttribute) {
            const at = rt.data, At = at.stride, Yt = rt.offset;
            if (at.isInstancedInterleavedBuffer) {
              for (let wt = 0; wt < k.locationSize; wt++)
                h(k.location + wt, at.meshPerAttribute);
              M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = at.meshPerAttribute * at.count);
            } else
              for (let wt = 0; wt < k.locationSize; wt++)
                m(k.location + wt);
            i.bindBuffer(i.ARRAY_BUFFER, ne);
            for (let wt = 0; wt < k.locationSize; wt++)
              T(
                k.location + wt,
                St / k.locationSize,
                q,
                dt,
                At * et,
                (Yt + St / k.locationSize * wt) * et,
                gt
              );
          } else {
            if (rt.isInstancedBufferAttribute) {
              for (let at = 0; at < k.locationSize; at++)
                h(k.location + at, rt.meshPerAttribute);
              M.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = rt.meshPerAttribute * rt.count);
            } else
              for (let at = 0; at < k.locationSize; at++)
                m(k.location + at);
            i.bindBuffer(i.ARRAY_BUFFER, ne);
            for (let at = 0; at < k.locationSize; at++)
              T(
                k.location + at,
                St / k.locationSize,
                q,
                dt,
                St * et,
                St / k.locationSize * at * et,
                gt
              );
          }
        } else if (X !== void 0) {
          const dt = X[tt];
          if (dt !== void 0)
            switch (dt.length) {
              case 2:
                i.vertexAttrib2fv(k.location, dt);
                break;
              case 3:
                i.vertexAttrib3fv(k.location, dt);
                break;
              case 4:
                i.vertexAttrib4fv(k.location, dt);
                break;
              default:
                i.vertexAttrib1fv(k.location, dt);
            }
        }
      }
    }
    A();
  }
  function N() {
    F();
    for (const M in n) {
      const D = n[M];
      for (const G in D) {
        const H = D[G];
        for (const W in H)
          u(H[W].object), delete H[W];
        delete D[G];
      }
      delete n[M];
    }
  }
  function C(M) {
    if (n[M.id] === void 0) return;
    const D = n[M.id];
    for (const G in D) {
      const H = D[G];
      for (const W in H)
        u(H[W].object), delete H[W];
      delete D[G];
    }
    delete n[M.id];
  }
  function P(M) {
    for (const D in n) {
      const G = n[D];
      if (G[M.id] === void 0) continue;
      const H = G[M.id];
      for (const W in H)
        u(H[W].object), delete H[W];
      delete G[M.id];
    }
  }
  function F() {
    S(), a = !0, r !== s && (r = s, c(r.object));
  }
  function S() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: o,
    reset: F,
    resetDefaultState: S,
    dispose: N,
    releaseStatesOfGeometry: C,
    releaseStatesOfProgram: P,
    initAttributes: v,
    enableAttribute: m,
    disableUnusedAttributes: A
  };
}
function qp(i, t, e) {
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
function jp(i, t, e, n) {
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
    return !(P !== mn && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(P) {
    const F = P === Gs && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(P !== Wn && n.convert(P) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    P !== Hn && !F);
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
  const d = e.logarithmicDepthBuffer === !0, p = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control"), f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), T = i.getParameter(i.MAX_VARYING_VECTORS), y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), N = _ > 0, C = i.getParameter(i.MAX_SAMPLES);
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
    maxVertexUniforms: A,
    maxVaryings: T,
    maxFragmentUniforms: y,
    vertexTextures: N,
    maxSamples: C
  };
}
function Zp(i) {
  const t = this;
  let e = null, n = 0, s = !1, r = !1;
  const a = new Ln(), o = new Ut(), l = { value: null, needsUpdate: !1 };
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
      const A = r ? 0 : n, T = A * 4;
      let y = h.clippingState || null;
      l.value = y, y = u(_, p, T, f);
      for (let N = 0; N !== T; ++N)
        y[N] = e[N];
      h.clippingState = y, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += A;
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
        const h = f + v * 4, A = p.matrixWorldInverse;
        o.getNormalMatrix(A), (m === null || m.length < h) && (m = new Float32Array(h));
        for (let T = 0, y = f; T !== v; ++T, y += 4)
          a.copy(d[T]).applyMatrix4(A, o), a.normal.toArray(m, y), m[y + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return t.numPlanes = v, t.numIntersection = 0, m;
  }
}
function Kp(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === Wa ? a.mapping = vs : o === Xa && (a.mapping = xs), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Wa || o === Xa)
        if (t.has(a)) {
          const l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Yu(l.height);
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
const Qi = 4, Ll = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], vi = 20, Ea = /* @__PURE__ */ new sd(), Ul = /* @__PURE__ */ new qt();
let Ta = null, ba = 0, Aa = 0, wa = !1;
const _i = (1 + Math.sqrt(5)) / 2, Zi = 1 / _i, Il = [
  /* @__PURE__ */ new w(-_i, Zi, 0),
  /* @__PURE__ */ new w(_i, Zi, 0),
  /* @__PURE__ */ new w(-Zi, 0, _i),
  /* @__PURE__ */ new w(Zi, 0, _i),
  /* @__PURE__ */ new w(0, _i, -Zi),
  /* @__PURE__ */ new w(0, _i, Zi),
  /* @__PURE__ */ new w(-1, 1, -1),
  /* @__PURE__ */ new w(1, 1, -1),
  /* @__PURE__ */ new w(-1, 1, 1),
  /* @__PURE__ */ new w(1, 1, 1)
];
class Nl {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   *
   * @param {Scene} scene
   * @param {number} sigma
   * @param {number} near
   * @param {number} far
   * @return {WebGLRenderTarget}
   */
  fromScene(t, e = 0, n = 0.1, s = 100) {
    Ta = this._renderer.getRenderTarget(), ba = this._renderer.getActiveCubeFace(), Aa = this._renderer.getActiveMipmapLevel(), wa = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(t, n, s, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   *
   * @param {Texture} equirectangular
   * @param {WebGLRenderTarget} [renderTarget=null] - Optional render target.
   * @return {WebGLRenderTarget}
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   *
   * @param {Texture} cubemap
   * @param {null} [renderTarget=null] - Optional render target.
   * @return {WebGLRenderTarget}
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Bl(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ol(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Ta, ba, Aa), this._renderer.xr.enabled = wa, t.scissorTest = !1, gr(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === vs || t.mapping === xs ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Ta = this._renderer.getRenderTarget(), ba = this._renderer.getActiveCubeFace(), Aa = this._renderer.getActiveMipmapLevel(), wa = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: Tn,
      minFilter: Tn,
      generateMipmaps: !1,
      type: Gs,
      format: mn,
      colorSpace: ys,
      depthBuffer: !1
    }, s = Fl(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Fl(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = $p(r)), this._blurMaterial = Jp(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new fe(this._lodPlanes[0], t);
    this._renderer.compile(e, Ea);
  }
  _sceneToCubeUV(t, e, n, s) {
    const o = new Je(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, p = u.toneMapping;
    u.getClearColor(Ul), u.toneMapping = ii, u.autoClear = !1;
    const f = new oi({
      name: "PMREM.Background",
      side: ze,
      depthWrite: !1,
      depthTest: !1
    }), _ = new fe(new ks(), f);
    let v = !1;
    const m = t.background;
    m ? m.isColor && (f.color.copy(m), t.background = null, v = !0) : (f.color.copy(Ul), v = !0);
    for (let h = 0; h < 6; h++) {
      const A = h % 3;
      A === 0 ? (o.up.set(0, l[h], 0), o.lookAt(c[h], 0, 0)) : A === 1 ? (o.up.set(0, 0, l[h]), o.lookAt(0, c[h], 0)) : (o.up.set(0, l[h], 0), o.lookAt(0, 0, c[h]));
      const T = this._cubeSize;
      gr(s, A * T, h > 2 ? T : 0, T, T), u.setRenderTarget(s), v && u.render(_, o), u.render(t, o);
    }
    _.geometry.dispose(), _.material.dispose(), u.toneMapping = p, u.autoClear = d, t.background = m;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === vs || t.mapping === xs;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Bl()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ol());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new fe(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    gr(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, Ea);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Il[(s - r - 1) % Il.length];
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
    const u = 3, d = new fe(this._lodPlanes[s], c), p = c.uniforms, f = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * vi - 1), v = r / _, m = isFinite(r) ? 1 + Math.floor(u * v) : vi;
    m > vi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);
    const h = [];
    let A = 0;
    for (let P = 0; P < vi; ++P) {
      const F = P / v, S = Math.exp(-F * F / 2);
      h.push(S), P === 0 ? A += S : P < m && (A += 2 * S);
    }
    for (let P = 0; P < h.length; P++)
      h[P] = h[P] / A;
    p.envMap.value = t.texture, p.samples.value = m, p.weights.value = h, p.latitudinal.value = a === "latitudinal", o && (p.poleAxis.value = o);
    const { _lodMax: T } = this;
    p.dTheta.value = _, p.mipInt.value = T - n;
    const y = this._sizeLods[s], N = 3 * y * (s > T - Qi ? s - T + Qi : 0), C = 4 * (this._cubeSize - y);
    gr(e, N, C, 3 * y, 2 * y), l.setRenderTarget(e), l.render(d, Ea);
  }
}
function $p(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - Qi + 1 + Ll.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let l = 1 / o;
    a > i - Qi ? l = Ll[a - i + Qi - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, d = 1 + c, p = [u, u, d, u, d, d, u, u, d, d, u, d], f = 6, _ = 6, v = 3, m = 2, h = 1, A = new Float32Array(v * _ * f), T = new Float32Array(m * _ * f), y = new Float32Array(h * _ * f);
    for (let C = 0; C < f; C++) {
      const P = C % 3 * 2 / 3 - 1, F = C > 2 ? 0 : -1, S = [
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
      A.set(S, v * _ * C), T.set(p, m * _ * C);
      const M = [C, C, C, C, C, C];
      y.set(M, h * _ * C);
    }
    const N = new Ge();
    N.setAttribute("position", new gn(A, v)), N.setAttribute("uv", new gn(T, m)), N.setAttribute("faceIndex", new gn(y, h)), t.push(N), s > Qi && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Fl(i, t, e) {
  const n = new Ci(i, t, e);
  return n.texture.mapping = Vr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function gr(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function Jp(i, t, e) {
  const n = new Float32Array(vi), s = new w(0, 1, 0);
  return new Yn({
    name: "SphericalGaussianBlur",
    defines: {
      n: vi,
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
    vertexShader: ko(),
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
    blending: ni,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ol() {
  return new Yn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: ko(),
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
    blending: ni,
    depthTest: !1,
    depthWrite: !1
  });
}
function Bl() {
  return new Yn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: ko(),
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
    blending: ni,
    depthTest: !1,
    depthWrite: !1
  });
}
function ko() {
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
function Qp(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Wa || l === Xa, u = l === vs || l === xs;
      if (c || u) {
        let d = t.get(o);
        const p = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== p)
          return e === null && (e = new Nl(i)), d = c ? e.fromEquirectangular(o, d) : e.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const f = o.image;
          return c && f && f.height > 0 || u && f && s(f) ? (e === null && (e = new Nl(i)), d = c ? e.fromEquirectangular(o) : e.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, t.set(o, d), o.addEventListener("dispose", r), d.texture) : null;
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
function tm(i) {
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
      return s === null && $i("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function em(i, t, e, n) {
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
      const A = f.array;
      v = f.version;
      for (let T = 0, y = A.length; T < y; T += 3) {
        const N = A[T + 0], C = A[T + 1], P = A[T + 2];
        p.push(N, C, C, P, P, N);
      }
    } else if (_ !== void 0) {
      const A = _.array;
      v = _.version;
      for (let T = 0, y = A.length / 3 - 1; T < y; T += 3) {
        const N = T + 0, C = T + 1, P = T + 2;
        p.push(N, C, C, P, P, N);
      }
    } else
      return;
    const m = new (Pc(p) ? Fc : Nc)(p, 1);
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
function nm(i, t, e) {
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
      for (let A = 0; A < _; A++)
        h += f[A] * v[A];
      e.update(h, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = d;
}
function im(i) {
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
function sm(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new se();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = u !== void 0 ? u.length : 0;
    let p = n.get(o);
    if (p === void 0 || p.count !== d) {
      let S = function() {
        P.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      p !== void 0 && p.texture.dispose();
      const f = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, v = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], h = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let T = 0;
      f === !0 && (T = 1), _ === !0 && (T = 2), v === !0 && (T = 3);
      let y = o.attributes.position.count * T, N = 1;
      y > t.maxTextureSize && (N = Math.ceil(y / t.maxTextureSize), y = t.maxTextureSize);
      const C = new Float32Array(y * N * 4 * d), P = new Lc(C, y, N, d);
      P.type = Hn, P.needsUpdate = !0;
      const F = T * 4;
      for (let M = 0; M < d; M++) {
        const D = m[M], G = h[M], H = A[M], W = y * N * 4 * M;
        for (let K = 0; K < D.count; K++) {
          const X = K * F;
          f === !0 && (s.fromBufferAttribute(D, K), C[W + X + 0] = s.x, C[W + X + 1] = s.y, C[W + X + 2] = s.z, C[W + X + 3] = 0), _ === !0 && (s.fromBufferAttribute(G, K), C[W + X + 4] = s.x, C[W + X + 5] = s.y, C[W + X + 6] = s.z, C[W + X + 7] = 0), v === !0 && (s.fromBufferAttribute(H, K), C[W + X + 8] = s.x, C[W + X + 9] = s.y, C[W + X + 10] = s.z, C[W + X + 11] = H.itemSize === 4 ? s.w : 1);
        }
      }
      p = {
        count: d,
        texture: P,
        size: new Dt(y, N)
      }, n.set(o, p), o.addEventListener("dispose", S);
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
function rm(i, t, e, n) {
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
const Wc = /* @__PURE__ */ new He(), zl = /* @__PURE__ */ new Vc(1, 1), Xc = /* @__PURE__ */ new Lc(), Yc = /* @__PURE__ */ new Pu(), qc = /* @__PURE__ */ new zc(), Hl = [], Gl = [], Vl = new Float32Array(16), kl = new Float32Array(9), Wl = new Float32Array(4);
function bs(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = Hl[s];
  if (r === void 0 && (r = new Float32Array(s), Hl[s] = r), t !== 0) {
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
function Yr(i, t) {
  let e = Gl[t];
  e === void 0 && (e = new Int32Array(t), Gl[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = i.allocateTextureUnit();
  return e;
}
function am(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function om(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Me(e, t)) return;
    i.uniform2fv(this.addr, t), Se(e, t);
  }
}
function lm(i, t) {
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
function cm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Me(e, t)) return;
    i.uniform4fv(this.addr, t), Se(e, t);
  }
}
function hm(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Me(e, t)) return;
    i.uniformMatrix2fv(this.addr, !1, t), Se(e, t);
  } else {
    if (Me(e, n)) return;
    Wl.set(n), i.uniformMatrix2fv(this.addr, !1, Wl), Se(e, n);
  }
}
function um(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Me(e, t)) return;
    i.uniformMatrix3fv(this.addr, !1, t), Se(e, t);
  } else {
    if (Me(e, n)) return;
    kl.set(n), i.uniformMatrix3fv(this.addr, !1, kl), Se(e, n);
  }
}
function dm(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Me(e, t)) return;
    i.uniformMatrix4fv(this.addr, !1, t), Se(e, t);
  } else {
    if (Me(e, n)) return;
    Vl.set(n), i.uniformMatrix4fv(this.addr, !1, Vl), Se(e, n);
  }
}
function fm(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function pm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Me(e, t)) return;
    i.uniform2iv(this.addr, t), Se(e, t);
  }
}
function mm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Me(e, t)) return;
    i.uniform3iv(this.addr, t), Se(e, t);
  }
}
function _m(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Me(e, t)) return;
    i.uniform4iv(this.addr, t), Se(e, t);
  }
}
function gm(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function vm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Me(e, t)) return;
    i.uniform2uiv(this.addr, t), Se(e, t);
  }
}
function xm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Me(e, t)) return;
    i.uniform3uiv(this.addr, t), Se(e, t);
  }
}
function Mm(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Me(e, t)) return;
    i.uniform4uiv(this.addr, t), Se(e, t);
  }
}
function Sm(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (zl.compareFunction = Rc, r = zl) : r = Wc, e.setTexture2D(t || r, s);
}
function ym(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || Yc, s);
}
function Em(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || qc, s);
}
function Tm(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || Xc, s);
}
function bm(i) {
  switch (i) {
    case 5126:
      return am;
    // FLOAT
    case 35664:
      return om;
    // _VEC2
    case 35665:
      return lm;
    // _VEC3
    case 35666:
      return cm;
    // _VEC4
    case 35674:
      return hm;
    // _MAT2
    case 35675:
      return um;
    // _MAT3
    case 35676:
      return dm;
    // _MAT4
    case 5124:
    case 35670:
      return fm;
    // INT, BOOL
    case 35667:
    case 35671:
      return pm;
    // _VEC2
    case 35668:
    case 35672:
      return mm;
    // _VEC3
    case 35669:
    case 35673:
      return _m;
    // _VEC4
    case 5125:
      return gm;
    // UINT
    case 36294:
      return vm;
    // _VEC2
    case 36295:
      return xm;
    // _VEC3
    case 36296:
      return Mm;
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
      return Sm;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return ym;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Em;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Tm;
  }
}
function Am(i, t) {
  i.uniform1fv(this.addr, t);
}
function wm(i, t) {
  const e = bs(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function Rm(i, t) {
  const e = bs(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Cm(i, t) {
  const e = bs(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function Pm(i, t) {
  const e = bs(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function Dm(i, t) {
  const e = bs(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function Lm(i, t) {
  const e = bs(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function Um(i, t) {
  i.uniform1iv(this.addr, t);
}
function Im(i, t) {
  i.uniform2iv(this.addr, t);
}
function Nm(i, t) {
  i.uniform3iv(this.addr, t);
}
function Fm(i, t) {
  i.uniform4iv(this.addr, t);
}
function Om(i, t) {
  i.uniform1uiv(this.addr, t);
}
function Bm(i, t) {
  i.uniform2uiv(this.addr, t);
}
function zm(i, t) {
  i.uniform3uiv(this.addr, t);
}
function Hm(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Gm(i, t, e) {
  const n = this.cache, s = t.length, r = Yr(e, s);
  Me(n, r) || (i.uniform1iv(this.addr, r), Se(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2D(t[a] || Wc, r[a]);
}
function Vm(i, t, e) {
  const n = this.cache, s = t.length, r = Yr(e, s);
  Me(n, r) || (i.uniform1iv(this.addr, r), Se(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture3D(t[a] || Yc, r[a]);
}
function km(i, t, e) {
  const n = this.cache, s = t.length, r = Yr(e, s);
  Me(n, r) || (i.uniform1iv(this.addr, r), Se(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTextureCube(t[a] || qc, r[a]);
}
function Wm(i, t, e) {
  const n = this.cache, s = t.length, r = Yr(e, s);
  Me(n, r) || (i.uniform1iv(this.addr, r), Se(n, r));
  for (let a = 0; a !== s; ++a)
    e.setTexture2DArray(t[a] || Xc, r[a]);
}
function Xm(i) {
  switch (i) {
    case 5126:
      return Am;
    // FLOAT
    case 35664:
      return wm;
    // _VEC2
    case 35665:
      return Rm;
    // _VEC3
    case 35666:
      return Cm;
    // _VEC4
    case 35674:
      return Pm;
    // _MAT2
    case 35675:
      return Dm;
    // _MAT3
    case 35676:
      return Lm;
    // _MAT4
    case 5124:
    case 35670:
      return Um;
    // INT, BOOL
    case 35667:
    case 35671:
      return Im;
    // _VEC2
    case 35668:
    case 35672:
      return Nm;
    // _VEC3
    case 35669:
    case 35673:
      return Fm;
    // _VEC4
    case 5125:
      return Om;
    // UINT
    case 36294:
      return Bm;
    // _VEC2
    case 36295:
      return zm;
    // _VEC3
    case 36296:
      return Hm;
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
      return Gm;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Vm;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return km;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Wm;
  }
}
class Ym {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = bm(e.type);
  }
}
class qm {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Xm(e.type);
  }
}
class jm {
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
const Ra = /(\w+)(\])?(\[|\.)?/g;
function Xl(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Zm(i, t, e) {
  const n = i.name, s = n.length;
  for (Ra.lastIndex = 0; ; ) {
    const r = Ra.exec(n), a = Ra.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      Xl(e, c === void 0 ? new Ym(o, i, t) : new qm(o, i, t));
      break;
    } else {
      let d = e.map[o];
      d === void 0 && (d = new jm(o), Xl(e, d)), e = d;
    }
  }
}
class Cr {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      Zm(r, a, this);
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
function Yl(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const Km = 37297;
let $m = 0;
function Jm(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const ql = /* @__PURE__ */ new Ut();
function Qm(i) {
  Xt._getMatrix(ql, Xt.workingColorSpace, i);
  const t = `mat3( ${ql.elements.map((e) => e.toFixed(4))} )`;
  switch (Xt.getTransfer(i)) {
    case Pr:
      return [t, "LinearTransferOETF"];
    case te:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function jl(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), s = i.getShaderInfoLog(t).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const a = parseInt(r[1]);
    return e.toUpperCase() + `

` + s + `

` + Jm(i.getShaderSource(t), a);
  } else
    return s;
}
function t_(i, t) {
  const e = Qm(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function e_(i, t) {
  let e;
  switch (t) {
    case Hh:
      e = "Linear";
      break;
    case Gh:
      e = "Reinhard";
      break;
    case Vh:
      e = "Cineon";
      break;
    case kh:
      e = "ACESFilmic";
      break;
    case Xh:
      e = "AgX";
      break;
    case Yh:
      e = "Neutral";
      break;
    case Wh:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const vr = /* @__PURE__ */ new w();
function n_() {
  Xt.getLuminanceCoefficients(vr);
  const i = vr.x.toFixed(4), t = vr.y.toFixed(4), e = vr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function i_(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Us).join(`
`);
}
function s_(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function r_(i, t) {
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
function Us(i) {
  return i !== "";
}
function Zl(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Kl(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const a_ = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Eo(i) {
  return i.replace(a_, l_);
}
const o_ = /* @__PURE__ */ new Map();
function l_(i, t) {
  let e = Ft[t];
  if (e === void 0) {
    const n = o_.get(t);
    if (n !== void 0)
      e = Ft[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return Eo(e);
}
const c_ = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function $l(i) {
  return i.replace(c_, h_);
}
function h_(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function Jl(i) {
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
function u_(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === mc ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === xh ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Dn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function d_(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case vs:
      case xs:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case Vr:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function f_(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case xs:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function p_(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case _c:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Bh:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case zh:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function m_(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function __(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = u_(e), c = d_(e), u = f_(e), d = p_(e), p = m_(e), f = i_(e), _ = s_(r), v = s.createProgram();
  let m, h, A = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(Us).join(`
`), m.length > 0 && (m += `
`), h = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    _
  ].filter(Us).join(`
`), h.length > 0 && (h += `
`)) : (m = [
    Jl(e),
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
  ].filter(Us).join(`
`), h = [
    Jl(e),
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
    e.toneMapping !== ii ? "#define TONE_MAPPING" : "",
    e.toneMapping !== ii ? Ft.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== ii ? e_("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Ft.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    t_("linearToOutputTexel", e.outputColorSpace),
    n_(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(Us).join(`
`)), a = Eo(a), a = Zl(a, e), a = Kl(a, e), o = Eo(o), o = Zl(o, e), o = Kl(o, e), a = $l(a), o = $l(o), e.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, m = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, h = [
    "#define varying in",
    e.glslVersion === sl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === sl ? "" : "#define gl_FragColor pc_fragColor",
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
  const T = A + m + a, y = A + h + o, N = Yl(s, s.VERTEX_SHADER, T), C = Yl(s, s.FRAGMENT_SHADER, y);
  s.attachShader(v, N), s.attachShader(v, C), e.index0AttributeName !== void 0 ? s.bindAttribLocation(v, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v);
  function P(D) {
    if (i.debug.checkShaderErrors) {
      const G = s.getProgramInfoLog(v).trim(), H = s.getShaderInfoLog(N).trim(), W = s.getShaderInfoLog(C).trim();
      let K = !0, X = !0;
      if (s.getProgramParameter(v, s.LINK_STATUS) === !1)
        if (K = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, v, N, C);
        else {
          const tt = jl(s, N, "vertex"), k = jl(s, C, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(v, s.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + G + `
` + tt + `
` + k
          );
        }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (H === "" || W === "") && (X = !1);
      X && (D.diagnostics = {
        runnable: K,
        programLog: G,
        vertexShader: {
          log: H,
          prefix: m
        },
        fragmentShader: {
          log: W,
          prefix: h
        }
      });
    }
    s.deleteShader(N), s.deleteShader(C), F = new Cr(s, v), S = r_(s, v);
  }
  let F;
  this.getUniforms = function() {
    return F === void 0 && P(this), F;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && P(this), S;
  };
  let M = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = s.getProgramParameter(v, Km)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(v), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = $m++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = N, this.fragmentShader = C, this;
}
let g_ = 0;
class v_ {
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
    return n === void 0 && (n = new x_(t), e.set(t, n)), n;
  }
}
class x_ {
  constructor(t) {
    this.id = g_++, this.code = t, this.usedTimes = 0;
  }
}
function M_(i, t, e, n, s, r, a) {
  const o = new Uc(), l = new v_(), c = /* @__PURE__ */ new Set(), u = [], d = s.logarithmicDepthBuffer, p = s.vertexTextures;
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
  function v(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, M, D, G, H) {
    const W = G.fog, K = H.geometry, X = S.isMeshStandardMaterial ? G.environment : null, tt = (S.isMeshStandardMaterial ? e : t).get(S.envMap || X), k = tt && tt.mapping === Vr ? tt.image.height : null, rt = _[S.type];
    S.precision !== null && (f = s.getMaxPrecision(S.precision), f !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", f, "instead."));
    const dt = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, St = dt !== void 0 ? dt.length : 0;
    let Ot = 0;
    K.morphAttributes.position !== void 0 && (Ot = 1), K.morphAttributes.normal !== void 0 && (Ot = 2), K.morphAttributes.color !== void 0 && (Ot = 3);
    let ne, q, et, gt;
    if (rt) {
      const $t = Be[rt];
      ne = $t.vertexShader, q = $t.fragmentShader;
    } else
      ne = S.vertexShader, q = S.fragmentShader, l.update(S), et = l.getVertexShaderID(S), gt = l.getFragmentShaderID(S);
    const at = i.getRenderTarget(), At = i.state.buffers.depth.getReversed(), Yt = H.isInstancedMesh === !0, wt = H.isBatchedMesh === !0, de = !!S.map, ce = !!S.matcap, Bt = !!tt, R = !!S.aoMap, Ye = !!S.lightMap, zt = !!S.bumpMap, Ht = !!S.normalMap, yt = !!S.displacementMap, re = !!S.emissiveMap, Mt = !!S.metalnessMap, E = !!S.roughnessMap, g = S.anisotropy > 0, O = S.clearcoat > 0, j = S.dispersion > 0, $ = S.iridescence > 0, Y = S.sheen > 0, vt = S.transmission > 0, ot = g && !!S.anisotropyMap, ft = O && !!S.clearcoatMap, Vt = O && !!S.clearcoatNormalMap, Q = O && !!S.clearcoatRoughnessMap, pt = $ && !!S.iridescenceMap, bt = $ && !!S.iridescenceThicknessMap, Rt = Y && !!S.sheenColorMap, mt = Y && !!S.sheenRoughnessMap, Gt = !!S.specularMap, Nt = !!S.specularColorMap, ie = !!S.specularIntensityMap, L = vt && !!S.transmissionMap, it = vt && !!S.thicknessMap, V = !!S.gradientMap, Z = !!S.alphaMap, ct = S.alphaTest > 0, lt = !!S.alphaHash, Lt = !!S.extensions;
    let he = ii;
    S.toneMapped && (at === null || at.isXRRenderTarget === !0) && (he = i.toneMapping);
    const Re = {
      shaderID: rt,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: ne,
      fragmentShader: q,
      defines: S.defines,
      customVertexShaderID: et,
      customFragmentShaderID: gt,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: f,
      batching: wt,
      batchingColor: wt && H._colorsTexture !== null,
      instancing: Yt,
      instancingColor: Yt && H.instanceColor !== null,
      instancingMorph: Yt && H.morphTexture !== null,
      supportsVertexTextures: p,
      outputColorSpace: at === null ? i.outputColorSpace : at.isXRRenderTarget === !0 ? at.texture.colorSpace : ys,
      alphaToCoverage: !!S.alphaToCoverage,
      map: de,
      matcap: ce,
      envMap: Bt,
      envMapMode: Bt && tt.mapping,
      envMapCubeUVHeight: k,
      aoMap: R,
      lightMap: Ye,
      bumpMap: zt,
      normalMap: Ht,
      displacementMap: p && yt,
      emissiveMap: re,
      normalMapObjectSpace: Ht && S.normalMapType === $h,
      normalMapTangentSpace: Ht && S.normalMapType === Kh,
      metalnessMap: Mt,
      roughnessMap: E,
      anisotropy: g,
      anisotropyMap: ot,
      clearcoat: O,
      clearcoatMap: ft,
      clearcoatNormalMap: Vt,
      clearcoatRoughnessMap: Q,
      dispersion: j,
      iridescence: $,
      iridescenceMap: pt,
      iridescenceThicknessMap: bt,
      sheen: Y,
      sheenColorMap: Rt,
      sheenRoughnessMap: mt,
      specularMap: Gt,
      specularColorMap: Nt,
      specularIntensityMap: ie,
      transmission: vt,
      transmissionMap: L,
      thicknessMap: it,
      gradientMap: V,
      opaque: S.transparent === !1 && S.blending === es && S.alphaToCoverage === !1,
      alphaMap: Z,
      alphaTest: ct,
      alphaHash: lt,
      combine: S.combine,
      //
      mapUv: de && v(S.map.channel),
      aoMapUv: R && v(S.aoMap.channel),
      lightMapUv: Ye && v(S.lightMap.channel),
      bumpMapUv: zt && v(S.bumpMap.channel),
      normalMapUv: Ht && v(S.normalMap.channel),
      displacementMapUv: yt && v(S.displacementMap.channel),
      emissiveMapUv: re && v(S.emissiveMap.channel),
      metalnessMapUv: Mt && v(S.metalnessMap.channel),
      roughnessMapUv: E && v(S.roughnessMap.channel),
      anisotropyMapUv: ot && v(S.anisotropyMap.channel),
      clearcoatMapUv: ft && v(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Vt && v(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Q && v(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: pt && v(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: bt && v(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: Rt && v(S.sheenColorMap.channel),
      sheenRoughnessMapUv: mt && v(S.sheenRoughnessMap.channel),
      specularMapUv: Gt && v(S.specularMap.channel),
      specularColorMapUv: Nt && v(S.specularColorMap.channel),
      specularIntensityMapUv: ie && v(S.specularIntensityMap.channel),
      transmissionMapUv: L && v(S.transmissionMap.channel),
      thicknessMapUv: it && v(S.thicknessMap.channel),
      alphaMapUv: Z && v(S.alphaMap.channel),
      //
      vertexTangents: !!K.attributes.tangent && (Ht || g),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!K.attributes.uv && (de || Z),
      fog: !!W,
      useFog: S.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reverseDepthBuffer: At,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: K.morphAttributes.position !== void 0,
      morphNormals: K.morphAttributes.normal !== void 0,
      morphColors: K.morphAttributes.color !== void 0,
      morphTargetsCount: St,
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
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: he,
      decodeVideoTexture: de && S.map.isVideoTexture === !0 && Xt.getTransfer(S.map.colorSpace) === te,
      decodeVideoTextureEmissive: re && S.emissiveMap.isVideoTexture === !0 && Xt.getTransfer(S.emissiveMap.colorSpace) === te,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === dn,
      flipSided: S.side === ze,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: Lt && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Lt && S.extensions.multiDraw === !0 || wt) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return Re.vertexUv1s = c.has(1), Re.vertexUv2s = c.has(2), Re.vertexUv3s = c.has(3), c.clear(), Re;
  }
  function h(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const D in S.defines)
        M.push(D), M.push(S.defines[D]);
    return S.isRawShaderMaterial === !1 && (A(M, S), T(M, S), M.push(i.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function A(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function T(S, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), S.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function y(S) {
    const M = _[S.type];
    let D;
    if (M) {
      const G = Be[M];
      D = Ho.clone(G.uniforms);
    } else
      D = S.uniforms;
    return D;
  }
  function N(S, M) {
    let D;
    for (let G = 0, H = u.length; G < H; G++) {
      const W = u[G];
      if (W.cacheKey === M) {
        D = W, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new __(i, M, S, r), u.push(D)), D;
  }
  function C(S) {
    if (--S.usedTimes === 0) {
      const M = u.indexOf(S);
      u[M] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function P(S) {
    l.remove(S);
  }
  function F() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: h,
    getUniforms: y,
    acquireProgram: N,
    releaseProgram: C,
    releaseShaderCache: P,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: F
  };
}
function S_() {
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
function y_(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function Ql(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function tc() {
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
    e.length > 1 && e.sort(d || y_), n.length > 1 && n.sort(p || Ql), s.length > 1 && s.sort(p || Ql);
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
function E_() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new tc(), i.set(n, [a])) : s >= r.length ? (a = new tc(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function T_() {
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
function b_() {
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
let A_ = 0;
function w_(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function R_(i) {
  const t = new T_(), e = b_(), n = {
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
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let f = 0, _ = 0, v = 0, m = 0, h = 0, A = 0, T = 0, y = 0, N = 0, C = 0, P = 0;
    c.sort(w_);
    for (let S = 0, M = c.length; S < M; S++) {
      const D = c[S], G = D.color, H = D.intensity, W = D.distance, K = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        u += G.r * H, d += G.g * H, p += G.b * H;
      else if (D.isLightProbe) {
        for (let X = 0; X < 9; X++)
          n.probe[X].addScaledVector(D.sh.coefficients[X], H);
        P++;
      } else if (D.isDirectionalLight) {
        const X = t.get(D);
        if (X.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const tt = D.shadow, k = e.get(D);
          k.shadowIntensity = tt.intensity, k.shadowBias = tt.bias, k.shadowNormalBias = tt.normalBias, k.shadowRadius = tt.radius, k.shadowMapSize = tt.mapSize, n.directionalShadow[f] = k, n.directionalShadowMap[f] = K, n.directionalShadowMatrix[f] = D.shadow.matrix, A++;
        }
        n.directional[f] = X, f++;
      } else if (D.isSpotLight) {
        const X = t.get(D);
        X.position.setFromMatrixPosition(D.matrixWorld), X.color.copy(G).multiplyScalar(H), X.distance = W, X.coneCos = Math.cos(D.angle), X.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), X.decay = D.decay, n.spot[v] = X;
        const tt = D.shadow;
        if (D.map && (n.spotLightMap[N] = D.map, N++, tt.updateMatrices(D), D.castShadow && C++), n.spotLightMatrix[v] = tt.matrix, D.castShadow) {
          const k = e.get(D);
          k.shadowIntensity = tt.intensity, k.shadowBias = tt.bias, k.shadowNormalBias = tt.normalBias, k.shadowRadius = tt.radius, k.shadowMapSize = tt.mapSize, n.spotShadow[v] = k, n.spotShadowMap[v] = K, y++;
        }
        v++;
      } else if (D.isRectAreaLight) {
        const X = t.get(D);
        X.color.copy(G).multiplyScalar(H), X.halfWidth.set(D.width * 0.5, 0, 0), X.halfHeight.set(0, D.height * 0.5, 0), n.rectArea[m] = X, m++;
      } else if (D.isPointLight) {
        const X = t.get(D);
        if (X.color.copy(D.color).multiplyScalar(D.intensity), X.distance = D.distance, X.decay = D.decay, D.castShadow) {
          const tt = D.shadow, k = e.get(D);
          k.shadowIntensity = tt.intensity, k.shadowBias = tt.bias, k.shadowNormalBias = tt.normalBias, k.shadowRadius = tt.radius, k.shadowMapSize = tt.mapSize, k.shadowCameraNear = tt.camera.near, k.shadowCameraFar = tt.camera.far, n.pointShadow[_] = k, n.pointShadowMap[_] = K, n.pointShadowMatrix[_] = D.shadow.matrix, T++;
        }
        n.point[_] = X, _++;
      } else if (D.isHemisphereLight) {
        const X = t.get(D);
        X.skyColor.copy(D.color).multiplyScalar(H), X.groundColor.copy(D.groundColor).multiplyScalar(H), n.hemi[h] = X, h++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = nt.LTC_FLOAT_1, n.rectAreaLTC2 = nt.LTC_FLOAT_2) : (n.rectAreaLTC1 = nt.LTC_HALF_1, n.rectAreaLTC2 = nt.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = p;
    const F = n.hash;
    (F.directionalLength !== f || F.pointLength !== _ || F.spotLength !== v || F.rectAreaLength !== m || F.hemiLength !== h || F.numDirectionalShadows !== A || F.numPointShadows !== T || F.numSpotShadows !== y || F.numSpotMaps !== N || F.numLightProbes !== P) && (n.directional.length = f, n.spot.length = v, n.rectArea.length = m, n.point.length = _, n.hemi.length = h, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = y + N - C, n.spotLightMap.length = N, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = P, F.directionalLength = f, F.pointLength = _, F.spotLength = v, F.rectAreaLength = m, F.hemiLength = h, F.numDirectionalShadows = A, F.numPointShadows = T, F.numSpotShadows = y, F.numSpotMaps = N, F.numLightProbes = P, n.version = A_++);
  }
  function l(c, u) {
    let d = 0, p = 0, f = 0, _ = 0, v = 0;
    const m = u.matrixWorldInverse;
    for (let h = 0, A = c.length; h < A; h++) {
      const T = c[h];
      if (T.isDirectionalLight) {
        const y = n.directional[d];
        y.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(m), d++;
      } else if (T.isSpotLight) {
        const y = n.spot[f];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), y.direction.setFromMatrixPosition(T.matrixWorld), s.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(m), f++;
      } else if (T.isRectAreaLight) {
        const y = n.rectArea[_];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), a.identity(), r.copy(T.matrixWorld), r.premultiply(m), a.extractRotation(r), y.halfWidth.set(T.width * 0.5, 0, 0), y.halfHeight.set(0, T.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), _++;
      } else if (T.isPointLight) {
        const y = n.point[p];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), p++;
      } else if (T.isHemisphereLight) {
        const y = n.hemi[v];
        y.direction.setFromMatrixPosition(T.matrixWorld), y.direction.transformDirection(m), v++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function ec(i) {
  const t = new R_(i), e = [], n = [];
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
function C_(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new ec(i), t.set(s, [o])) : r >= a.length ? (o = new ec(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
const P_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, D_ = `uniform sampler2D shadow_pass;
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
function L_(i, t, e) {
  let n = new Hc();
  const s = new Dt(), r = new Dt(), a = new se(), o = new nd({ depthPacking: Zh }), l = new id(), c = {}, u = e.maxTextureSize, d = { [si]: ze, [ze]: si, [dn]: dn }, p = new Yn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Dt() },
      radius: { value: 4 }
    },
    vertexShader: P_,
    fragmentShader: D_
  }), f = p.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const _ = new Ge();
  _.setAttribute(
    "position",
    new gn(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new fe(_, p), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = mc;
  let h = this.type;
  this.render = function(C, P, F) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || C.length === 0) return;
    const S = i.getRenderTarget(), M = i.getActiveCubeFace(), D = i.getActiveMipmapLevel(), G = i.state;
    G.setBlending(ni), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(!0), G.setScissorTest(!1);
    const H = h !== Dn && this.type === Dn, W = h === Dn && this.type !== Dn;
    for (let K = 0, X = C.length; K < X; K++) {
      const tt = C[K], k = tt.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", tt, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      s.copy(k.mapSize);
      const rt = k.getFrameExtents();
      if (s.multiply(rt), r.copy(k.mapSize), (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / rt.x), s.x = r.x * rt.x, k.mapSize.x = r.x), s.y > u && (r.y = Math.floor(u / rt.y), s.y = r.y * rt.y, k.mapSize.y = r.y)), k.map === null || H === !0 || W === !0) {
        const St = this.type !== Dn ? { minFilter: _n, magFilter: _n } : {};
        k.map !== null && k.map.dispose(), k.map = new Ci(s.x, s.y, St), k.map.texture.name = tt.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const dt = k.getViewportCount();
      for (let St = 0; St < dt; St++) {
        const Ot = k.getViewport(St);
        a.set(
          r.x * Ot.x,
          r.y * Ot.y,
          r.x * Ot.z,
          r.y * Ot.w
        ), G.viewport(a), k.updateMatrices(tt, St), n = k.getFrustum(), y(P, F, k.camera, tt, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === Dn && A(k, F), k.needsUpdate = !1;
    }
    h = this.type, m.needsUpdate = !1, i.setRenderTarget(S, M, D);
  };
  function A(C, P) {
    const F = t.update(v);
    p.defines.VSM_SAMPLES !== C.blurSamples && (p.defines.VSM_SAMPLES = C.blurSamples, f.defines.VSM_SAMPLES = C.blurSamples, p.needsUpdate = !0, f.needsUpdate = !0), C.mapPass === null && (C.mapPass = new Ci(s.x, s.y)), p.uniforms.shadow_pass.value = C.map.texture, p.uniforms.resolution.value = C.mapSize, p.uniforms.radius.value = C.radius, i.setRenderTarget(C.mapPass), i.clear(), i.renderBufferDirect(P, null, F, p, v, null), f.uniforms.shadow_pass.value = C.mapPass.texture, f.uniforms.resolution.value = C.mapSize, f.uniforms.radius.value = C.radius, i.setRenderTarget(C.map), i.clear(), i.renderBufferDirect(P, null, F, f, v, null);
  }
  function T(C, P, F, S) {
    let M = null;
    const D = F.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (D !== void 0)
      M = D;
    else if (M = F.isPointLight === !0 ? l : o, i.localClippingEnabled && P.clipShadows === !0 && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0) {
      const G = M.uuid, H = P.uuid;
      let W = c[G];
      W === void 0 && (W = {}, c[G] = W);
      let K = W[H];
      K === void 0 && (K = M.clone(), W[H] = K, P.addEventListener("dispose", N)), M = K;
    }
    if (M.visible = P.visible, M.wireframe = P.wireframe, S === Dn ? M.side = P.shadowSide !== null ? P.shadowSide : P.side : M.side = P.shadowSide !== null ? P.shadowSide : d[P.side], M.alphaMap = P.alphaMap, M.alphaTest = P.alphaTest, M.map = P.map, M.clipShadows = P.clipShadows, M.clippingPlanes = P.clippingPlanes, M.clipIntersection = P.clipIntersection, M.displacementMap = P.displacementMap, M.displacementScale = P.displacementScale, M.displacementBias = P.displacementBias, M.wireframeLinewidth = P.wireframeLinewidth, M.linewidth = P.linewidth, F.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const G = i.properties.get(M);
      G.light = F;
    }
    return M;
  }
  function y(C, P, F, S, M) {
    if (C.visible === !1) return;
    if (C.layers.test(P.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && M === Dn) && (!C.frustumCulled || n.intersectsObject(C))) {
      C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, C.matrixWorld);
      const H = t.update(C), W = C.material;
      if (Array.isArray(W)) {
        const K = H.groups;
        for (let X = 0, tt = K.length; X < tt; X++) {
          const k = K[X], rt = W[k.materialIndex];
          if (rt && rt.visible) {
            const dt = T(C, rt, S, M);
            C.onBeforeShadow(i, C, P, F, H, dt, k), i.renderBufferDirect(F, null, H, dt, C, k), C.onAfterShadow(i, C, P, F, H, dt, k);
          }
        }
      } else if (W.visible) {
        const K = T(C, W, S, M);
        C.onBeforeShadow(i, C, P, F, H, K, null), i.renderBufferDirect(F, null, H, K, C, null), C.onAfterShadow(i, C, P, F, H, K, null);
      }
    }
    const G = C.children;
    for (let H = 0, W = G.length; H < W; H++)
      y(G[H], P, F, S, M);
  }
  function N(C) {
    C.target.removeEventListener("dispose", N);
    for (const F in c) {
      const S = c[F], M = C.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const U_ = {
  [Oa]: Ba,
  [za]: Va,
  [Ha]: ka,
  [gs]: Ga,
  [Ba]: Oa,
  [Va]: za,
  [ka]: Ha,
  [Ga]: gs
};
function I_(i, t) {
  function e() {
    let L = !1;
    const it = new se();
    let V = null;
    const Z = new se(0, 0, 0, 0);
    return {
      setMask: function(ct) {
        V !== ct && !L && (i.colorMask(ct, ct, ct, ct), V = ct);
      },
      setLocked: function(ct) {
        L = ct;
      },
      setClear: function(ct, lt, Lt, he, Re) {
        Re === !0 && (ct *= he, lt *= he, Lt *= he), it.set(ct, lt, Lt, he), Z.equals(it) === !1 && (i.clearColor(ct, lt, Lt, he), Z.copy(it));
      },
      reset: function() {
        L = !1, V = null, Z.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let L = !1, it = !1, V = null, Z = null, ct = null;
    return {
      setReversed: function(lt) {
        if (it !== lt) {
          const Lt = t.get("EXT_clip_control");
          it ? Lt.clipControlEXT(Lt.LOWER_LEFT_EXT, Lt.ZERO_TO_ONE_EXT) : Lt.clipControlEXT(Lt.LOWER_LEFT_EXT, Lt.NEGATIVE_ONE_TO_ONE_EXT);
          const he = ct;
          ct = null, this.setClear(he);
        }
        it = lt;
      },
      getReversed: function() {
        return it;
      },
      setTest: function(lt) {
        lt ? at(i.DEPTH_TEST) : At(i.DEPTH_TEST);
      },
      setMask: function(lt) {
        V !== lt && !L && (i.depthMask(lt), V = lt);
      },
      setFunc: function(lt) {
        if (it && (lt = U_[lt]), Z !== lt) {
          switch (lt) {
            case Oa:
              i.depthFunc(i.NEVER);
              break;
            case Ba:
              i.depthFunc(i.ALWAYS);
              break;
            case za:
              i.depthFunc(i.LESS);
              break;
            case gs:
              i.depthFunc(i.LEQUAL);
              break;
            case Ha:
              i.depthFunc(i.EQUAL);
              break;
            case Ga:
              i.depthFunc(i.GEQUAL);
              break;
            case Va:
              i.depthFunc(i.GREATER);
              break;
            case ka:
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
        ct !== lt && (it && (lt = 1 - lt), i.clearDepth(lt), ct = lt);
      },
      reset: function() {
        L = !1, V = null, Z = null, ct = null, it = !1;
      }
    };
  }
  function s() {
    let L = !1, it = null, V = null, Z = null, ct = null, lt = null, Lt = null, he = null, Re = null;
    return {
      setTest: function($t) {
        L || ($t ? at(i.STENCIL_TEST) : At(i.STENCIL_TEST));
      },
      setMask: function($t) {
        it !== $t && !L && (i.stencilMask($t), it = $t);
      },
      setFunc: function($t, tn, bn) {
        (V !== $t || Z !== tn || ct !== bn) && (i.stencilFunc($t, tn, bn), V = $t, Z = tn, ct = bn);
      },
      setOp: function($t, tn, bn) {
        (lt !== $t || Lt !== tn || he !== bn) && (i.stencilOp($t, tn, bn), lt = $t, Lt = tn, he = bn);
      },
      setLocked: function($t) {
        L = $t;
      },
      setClear: function($t) {
        Re !== $t && (i.clearStencil($t), Re = $t);
      },
      reset: function() {
        L = !1, it = null, V = null, Z = null, ct = null, lt = null, Lt = null, he = null, Re = null;
      }
    };
  }
  const r = new e(), a = new n(), o = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, d = {}, p = /* @__PURE__ */ new WeakMap(), f = [], _ = null, v = !1, m = null, h = null, A = null, T = null, y = null, N = null, C = null, P = new qt(0, 0, 0), F = 0, S = !1, M = null, D = null, G = null, H = null, W = null;
  const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = !1, tt = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1 ? (tt = parseFloat(/^WebGL (\d)/.exec(k)[1]), X = tt >= 1) : k.indexOf("OpenGL ES") !== -1 && (tt = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), X = tt >= 2);
  let rt = null, dt = {};
  const St = i.getParameter(i.SCISSOR_BOX), Ot = i.getParameter(i.VIEWPORT), ne = new se().fromArray(St), q = new se().fromArray(Ot);
  function et(L, it, V, Z) {
    const ct = new Uint8Array(4), lt = i.createTexture();
    i.bindTexture(L, lt), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Lt = 0; Lt < V; Lt++)
      L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY ? i.texImage3D(it, 0, i.RGBA, 1, 1, Z, 0, i.RGBA, i.UNSIGNED_BYTE, ct) : i.texImage2D(it + Lt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ct);
    return lt;
  }
  const gt = {};
  gt[i.TEXTURE_2D] = et(i.TEXTURE_2D, i.TEXTURE_2D, 1), gt[i.TEXTURE_CUBE_MAP] = et(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), gt[i.TEXTURE_2D_ARRAY] = et(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), gt[i.TEXTURE_3D] = et(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), at(i.DEPTH_TEST), a.setFunc(gs), zt(!1), Ht(vh), at(i.CULL_FACE), R(ni);
  function at(L) {
    u[L] !== !0 && (i.enable(L), u[L] = !0);
  }
  function At(L) {
    u[L] !== !1 && (i.disable(L), u[L] = !1);
  }
  function Yt(L, it) {
    return d[L] !== it ? (i.bindFramebuffer(L, it), d[L] = it, L === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = it), L === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = it), !0) : !1;
  }
  function wt(L, it) {
    let V = f, Z = !1;
    if (L) {
      V = p.get(it), V === void 0 && (V = [], p.set(it, V));
      const ct = L.textures;
      if (V.length !== ct.length || V[0] !== i.COLOR_ATTACHMENT0) {
        for (let lt = 0, Lt = ct.length; lt < Lt; lt++)
          V[lt] = i.COLOR_ATTACHMENT0 + lt;
        V.length = ct.length, Z = !0;
      }
    } else
      V[0] !== i.BACK && (V[0] = i.BACK, Z = !0);
    Z && i.drawBuffers(V);
  }
  function de(L) {
    return _ !== L ? (i.useProgram(L), _ = L, !0) : !1;
  }
  const ce = {
    [gi]: i.FUNC_ADD,
    [Sh]: i.FUNC_SUBTRACT,
    [yh]: i.FUNC_REVERSE_SUBTRACT
  };
  ce[Eh] = i.MIN, ce[Th] = i.MAX;
  const Bt = {
    [bh]: i.ZERO,
    [Ah]: i.ONE,
    [wh]: i.SRC_COLOR,
    [Na]: i.SRC_ALPHA,
    [Uh]: i.SRC_ALPHA_SATURATE,
    [Dh]: i.DST_COLOR,
    [Ch]: i.DST_ALPHA,
    [Rh]: i.ONE_MINUS_SRC_COLOR,
    [Fa]: i.ONE_MINUS_SRC_ALPHA,
    [Lh]: i.ONE_MINUS_DST_COLOR,
    [Ph]: i.ONE_MINUS_DST_ALPHA,
    [Ih]: i.CONSTANT_COLOR,
    [Nh]: i.ONE_MINUS_CONSTANT_COLOR,
    [Fh]: i.CONSTANT_ALPHA,
    [Oh]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function R(L, it, V, Z, ct, lt, Lt, he, Re, $t) {
    if (L === ni) {
      v === !0 && (At(i.BLEND), v = !1);
      return;
    }
    if (v === !1 && (at(i.BLEND), v = !0), L !== Mh) {
      if (L !== m || $t !== S) {
        if ((h !== gi || y !== gi) && (i.blendEquation(i.FUNC_ADD), h = gi, y = gi), $t)
          switch (L) {
            case es:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case tl:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case el:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case nl:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case es:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case tl:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case el:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case nl:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        A = null, T = null, N = null, C = null, P.set(0, 0, 0), F = 0, m = L, S = $t;
      }
      return;
    }
    ct = ct || it, lt = lt || V, Lt = Lt || Z, (it !== h || ct !== y) && (i.blendEquationSeparate(ce[it], ce[ct]), h = it, y = ct), (V !== A || Z !== T || lt !== N || Lt !== C) && (i.blendFuncSeparate(Bt[V], Bt[Z], Bt[lt], Bt[Lt]), A = V, T = Z, N = lt, C = Lt), (he.equals(P) === !1 || Re !== F) && (i.blendColor(he.r, he.g, he.b, Re), P.copy(he), F = Re), m = L, S = !1;
  }
  function Ye(L, it) {
    L.side === dn ? At(i.CULL_FACE) : at(i.CULL_FACE);
    let V = L.side === ze;
    it && (V = !V), zt(V), L.blending === es && L.transparent === !1 ? R(ni) : R(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), a.setFunc(L.depthFunc), a.setTest(L.depthTest), a.setMask(L.depthWrite), r.setMask(L.colorWrite);
    const Z = L.stencilWrite;
    o.setTest(Z), Z && (o.setMask(L.stencilWriteMask), o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), re(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? at(i.SAMPLE_ALPHA_TO_COVERAGE) : At(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function zt(L) {
    M !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = L);
  }
  function Ht(L) {
    at(i.CULL_FACE), L !== D && i.cullFace(i.BACK), D = L;
  }
  function yt(L) {
    L !== G && (X && i.lineWidth(L), G = L);
  }
  function re(L, it, V) {
    L ? (at(i.POLYGON_OFFSET_FILL), (H !== it || W !== V) && (i.polygonOffset(it, V), H = it, W = V)) : At(i.POLYGON_OFFSET_FILL);
  }
  function Mt(L) {
    L ? at(i.SCISSOR_TEST) : At(i.SCISSOR_TEST);
  }
  function E(L) {
    L === void 0 && (L = i.TEXTURE0 + K - 1), rt !== L && (i.activeTexture(L), rt = L);
  }
  function g(L, it, V) {
    V === void 0 && (rt === null ? V = i.TEXTURE0 + K - 1 : V = rt);
    let Z = dt[V];
    Z === void 0 && (Z = { type: void 0, texture: void 0 }, dt[V] = Z), (Z.type !== L || Z.texture !== it) && (rt !== V && (i.activeTexture(V), rt = V), i.bindTexture(L, it || gt[L]), Z.type = L, Z.texture = it);
  }
  function O() {
    const L = dt[rt];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function j() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function $() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Y() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function vt() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ot() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ft() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Vt() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Q() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function pt() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function bt() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Rt(L) {
    ne.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), ne.copy(L));
  }
  function mt(L) {
    q.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), q.copy(L));
  }
  function Gt(L, it) {
    let V = c.get(it);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), c.set(it, V));
    let Z = V.get(L);
    Z === void 0 && (Z = i.getUniformBlockIndex(it, L.name), V.set(L, Z));
  }
  function Nt(L, it) {
    const Z = c.get(it).get(L);
    l.get(it) !== Z && (i.uniformBlockBinding(it, Z, L.__bindingPointIndex), l.set(it, Z));
  }
  function ie() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), a.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, rt = null, dt = {}, d = {}, p = /* @__PURE__ */ new WeakMap(), f = [], _ = null, v = !1, m = null, h = null, A = null, T = null, y = null, N = null, C = null, P = new qt(0, 0, 0), F = 0, S = !1, M = null, D = null, G = null, H = null, W = null, ne.set(0, 0, i.canvas.width, i.canvas.height), q.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: o
    },
    enable: at,
    disable: At,
    bindFramebuffer: Yt,
    drawBuffers: wt,
    useProgram: de,
    setBlending: R,
    setMaterial: Ye,
    setFlipSided: zt,
    setCullFace: Ht,
    setLineWidth: yt,
    setPolygonOffset: re,
    setScissorTest: Mt,
    activeTexture: E,
    bindTexture: g,
    unbindTexture: O,
    compressedTexImage2D: j,
    compressedTexImage3D: $,
    texImage2D: pt,
    texImage3D: bt,
    updateUBOMapping: Gt,
    uniformBlockBinding: Nt,
    texStorage2D: Vt,
    texStorage3D: Q,
    texSubImage2D: Y,
    texSubImage3D: vt,
    compressedTexSubImage2D: ot,
    compressedTexSubImage3D: ft,
    scissor: Rt,
    viewport: mt,
    reset: ie
  };
}
function N_(i, t, e, n, s, r, a) {
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
    ) : Lr("canvas");
  }
  function v(E, g, O) {
    let j = 1;
    const $ = Mt(E);
    if (($.width > O || $.height > O) && (j = O / Math.max($.width, $.height)), j < 1)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
        const Y = Math.floor(j * $.width), vt = Math.floor(j * $.height);
        d === void 0 && (d = _(Y, vt));
        const ot = g ? _(Y, vt) : d;
        return ot.width = Y, ot.height = vt, ot.getContext("2d").drawImage(E, 0, 0, Y, vt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + Y + "x" + vt + ")."), ot;
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
  function A(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function T(E, g, O, j, $ = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let Y = g;
    if (g === i.RED && (O === i.FLOAT && (Y = i.R32F), O === i.HALF_FLOAT && (Y = i.R16F), O === i.UNSIGNED_BYTE && (Y = i.R8)), g === i.RED_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.R8UI), O === i.UNSIGNED_SHORT && (Y = i.R16UI), O === i.UNSIGNED_INT && (Y = i.R32UI), O === i.BYTE && (Y = i.R8I), O === i.SHORT && (Y = i.R16I), O === i.INT && (Y = i.R32I)), g === i.RG && (O === i.FLOAT && (Y = i.RG32F), O === i.HALF_FLOAT && (Y = i.RG16F), O === i.UNSIGNED_BYTE && (Y = i.RG8)), g === i.RG_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RG8UI), O === i.UNSIGNED_SHORT && (Y = i.RG16UI), O === i.UNSIGNED_INT && (Y = i.RG32UI), O === i.BYTE && (Y = i.RG8I), O === i.SHORT && (Y = i.RG16I), O === i.INT && (Y = i.RG32I)), g === i.RGB_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RGB8UI), O === i.UNSIGNED_SHORT && (Y = i.RGB16UI), O === i.UNSIGNED_INT && (Y = i.RGB32UI), O === i.BYTE && (Y = i.RGB8I), O === i.SHORT && (Y = i.RGB16I), O === i.INT && (Y = i.RGB32I)), g === i.RGBA_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RGBA8UI), O === i.UNSIGNED_SHORT && (Y = i.RGBA16UI), O === i.UNSIGNED_INT && (Y = i.RGBA32UI), O === i.BYTE && (Y = i.RGBA8I), O === i.SHORT && (Y = i.RGBA16I), O === i.INT && (Y = i.RGBA32I)), g === i.RGB && O === i.UNSIGNED_INT_5_9_9_9_REV && (Y = i.RGB9_E5), g === i.RGBA) {
      const vt = $ ? Pr : Xt.getTransfer(j);
      O === i.FLOAT && (Y = i.RGBA32F), O === i.HALF_FLOAT && (Y = i.RGBA16F), O === i.UNSIGNED_BYTE && (Y = vt === te ? i.SRGB8_ALPHA8 : i.RGBA8), O === i.UNSIGNED_SHORT_4_4_4_4 && (Y = i.RGBA4), O === i.UNSIGNED_SHORT_5_5_5_1 && (Y = i.RGB5_A1);
    }
    return (Y === i.R16F || Y === i.R32F || Y === i.RG16F || Y === i.RG32F || Y === i.RGBA16F || Y === i.RGBA32F) && t.get("EXT_color_buffer_float"), Y;
  }
  function y(E, g) {
    let O;
    return E ? g === null || g === Ri || g === Ms ? O = i.DEPTH24_STENCIL8 : g === Hn ? O = i.DEPTH32F_STENCIL8 : g === Os && (O = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : g === null || g === Ri || g === Ms ? O = i.DEPTH_COMPONENT24 : g === Hn ? O = i.DEPTH_COMPONENT32F : g === Os && (O = i.DEPTH_COMPONENT16), O;
  }
  function N(E, g) {
    return m(E) === !0 || E.isFramebufferTexture && E.minFilter !== _n && E.minFilter !== Tn ? Math.log2(Math.max(g.width, g.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? g.mipmaps.length : 1;
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
      $.usedTimes--, $.usedTimes === 0 && S(E), Object.keys(j).length === 0 && p.delete(O);
    }
    n.remove(E);
  }
  function S(E) {
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
  function H() {
    const E = D;
    return E >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + s.maxTextures), D += 1, E;
  }
  function W(E) {
    const g = [];
    return g.push(E.wrapS), g.push(E.wrapT), g.push(E.wrapR || 0), g.push(E.magFilter), g.push(E.minFilter), g.push(E.anisotropy), g.push(E.internalFormat), g.push(E.format), g.push(E.type), g.push(E.generateMipmaps), g.push(E.premultiplyAlpha), g.push(E.flipY), g.push(E.unpackAlignment), g.push(E.colorSpace), g.join();
  }
  function K(E, g) {
    const O = n.get(E);
    if (E.isVideoTexture && yt(E), E.isRenderTargetTexture === !1 && E.version > 0 && O.__version !== E.version) {
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
  function k(E, g) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      et(O, E, g);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + g);
  }
  const rt = {
    [Ya]: i.REPEAT,
    [xi]: i.CLAMP_TO_EDGE,
    [qa]: i.MIRRORED_REPEAT
  }, dt = {
    [_n]: i.NEAREST,
    [qh]: i.NEAREST_MIPMAP_NEAREST,
    [js]: i.NEAREST_MIPMAP_LINEAR,
    [Tn]: i.LINEAR,
    [$r]: i.LINEAR_MIPMAP_NEAREST,
    [Mi]: i.LINEAR_MIPMAP_LINEAR
  }, St = {
    [Jh]: i.NEVER,
    [su]: i.ALWAYS,
    [Qh]: i.LESS,
    [Rc]: i.LEQUAL,
    [tu]: i.EQUAL,
    [iu]: i.GEQUAL,
    [eu]: i.GREATER,
    [nu]: i.NOTEQUAL
  };
  function Ot(E, g) {
    if (g.type === Hn && t.has("OES_texture_float_linear") === !1 && (g.magFilter === Tn || g.magFilter === $r || g.magFilter === js || g.magFilter === Mi || g.minFilter === Tn || g.minFilter === $r || g.minFilter === js || g.minFilter === Mi) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, rt[g.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, rt[g.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, rt[g.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, dt[g.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, dt[g.minFilter]), g.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, St[g.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (g.magFilter === _n || g.minFilter !== js && g.minFilter !== Mi || g.type === Hn && t.has("OES_texture_float_linear") === !1) return;
      if (g.anisotropy > 1 || n.get(g).__currentAnisotropy) {
        const O = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, s.getMaxAnisotropy())), n.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function ne(E, g) {
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
      const vt = $[E.__cacheKey];
      vt !== void 0 && ($[E.__cacheKey].usedTimes--, vt.usedTimes === 0 && S(g)), E.__cacheKey = Y, E.__webglTexture = $[Y].texture;
    }
    return O;
  }
  function q(E, g, O) {
    let j = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && (j = i.TEXTURE_2D_ARRAY), g.isData3DTexture && (j = i.TEXTURE_3D);
    const $ = ne(E, g), Y = g.source;
    e.bindTexture(j, E.__webglTexture, i.TEXTURE0 + O);
    const vt = n.get(Y);
    if (Y.version !== vt.__version || $ === !0) {
      e.activeTexture(i.TEXTURE0 + O);
      const ot = Xt.getPrimaries(Xt.workingColorSpace), ft = g.colorSpace === Qn ? null : Xt.getPrimaries(g.colorSpace), Vt = g.colorSpace === Qn || ot === ft ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Vt);
      let Q = v(g.image, !1, s.maxTextureSize);
      Q = re(g, Q);
      const pt = r.convert(g.format, g.colorSpace), bt = r.convert(g.type);
      let Rt = T(g.internalFormat, pt, bt, g.colorSpace, g.isVideoTexture);
      Ot(j, g);
      let mt;
      const Gt = g.mipmaps, Nt = g.isVideoTexture !== !0, ie = vt.__version === void 0 || $ === !0, L = Y.dataReady, it = N(g, Q);
      if (g.isDepthTexture)
        Rt = y(g.format === Ss, g.type), ie && (Nt ? e.texStorage2D(i.TEXTURE_2D, 1, Rt, Q.width, Q.height) : e.texImage2D(i.TEXTURE_2D, 0, Rt, Q.width, Q.height, 0, pt, bt, null));
      else if (g.isDataTexture)
        if (Gt.length > 0) {
          Nt && ie && e.texStorage2D(i.TEXTURE_2D, it, Rt, Gt[0].width, Gt[0].height);
          for (let V = 0, Z = Gt.length; V < Z; V++)
            mt = Gt[V], Nt ? L && e.texSubImage2D(i.TEXTURE_2D, V, 0, 0, mt.width, mt.height, pt, bt, mt.data) : e.texImage2D(i.TEXTURE_2D, V, Rt, mt.width, mt.height, 0, pt, bt, mt.data);
          g.generateMipmaps = !1;
        } else
          Nt ? (ie && e.texStorage2D(i.TEXTURE_2D, it, Rt, Q.width, Q.height), L && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, pt, bt, Q.data)) : e.texImage2D(i.TEXTURE_2D, 0, Rt, Q.width, Q.height, 0, pt, bt, Q.data);
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          Nt && ie && e.texStorage3D(i.TEXTURE_2D_ARRAY, it, Rt, Gt[0].width, Gt[0].height, Q.depth);
          for (let V = 0, Z = Gt.length; V < Z; V++)
            if (mt = Gt[V], g.format !== mn)
              if (pt !== null)
                if (Nt) {
                  if (L)
                    if (g.layerUpdates.size > 0) {
                      const ct = Dl(mt.width, mt.height, g.format, g.type);
                      for (const lt of g.layerUpdates) {
                        const Lt = mt.data.subarray(
                          lt * ct / mt.data.BYTES_PER_ELEMENT,
                          (lt + 1) * ct / mt.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, lt, mt.width, mt.height, 1, pt, Lt);
                      }
                      g.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, mt.width, mt.height, Q.depth, pt, mt.data);
                } else
                  e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, V, Rt, mt.width, mt.height, Q.depth, 0, mt.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Nt ? L && e.texSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, mt.width, mt.height, Q.depth, pt, bt, mt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, V, Rt, mt.width, mt.height, Q.depth, 0, pt, bt, mt.data);
        } else {
          Nt && ie && e.texStorage2D(i.TEXTURE_2D, it, Rt, Gt[0].width, Gt[0].height);
          for (let V = 0, Z = Gt.length; V < Z; V++)
            mt = Gt[V], g.format !== mn ? pt !== null ? Nt ? L && e.compressedTexSubImage2D(i.TEXTURE_2D, V, 0, 0, mt.width, mt.height, pt, mt.data) : e.compressedTexImage2D(i.TEXTURE_2D, V, Rt, mt.width, mt.height, 0, mt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Nt ? L && e.texSubImage2D(i.TEXTURE_2D, V, 0, 0, mt.width, mt.height, pt, bt, mt.data) : e.texImage2D(i.TEXTURE_2D, V, Rt, mt.width, mt.height, 0, pt, bt, mt.data);
        }
      else if (g.isDataArrayTexture)
        if (Nt) {
          if (ie && e.texStorage3D(i.TEXTURE_2D_ARRAY, it, Rt, Q.width, Q.height, Q.depth), L)
            if (g.layerUpdates.size > 0) {
              const V = Dl(Q.width, Q.height, g.format, g.type);
              for (const Z of g.layerUpdates) {
                const ct = Q.data.subarray(
                  Z * V / Q.data.BYTES_PER_ELEMENT,
                  (Z + 1) * V / Q.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Z, Q.width, Q.height, 1, pt, bt, ct);
              }
              g.clearLayerUpdates();
            } else
              e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, pt, bt, Q.data);
        } else
          e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Rt, Q.width, Q.height, Q.depth, 0, pt, bt, Q.data);
      else if (g.isData3DTexture)
        Nt ? (ie && e.texStorage3D(i.TEXTURE_3D, it, Rt, Q.width, Q.height, Q.depth), L && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, pt, bt, Q.data)) : e.texImage3D(i.TEXTURE_3D, 0, Rt, Q.width, Q.height, Q.depth, 0, pt, bt, Q.data);
      else if (g.isFramebufferTexture) {
        if (ie)
          if (Nt)
            e.texStorage2D(i.TEXTURE_2D, it, Rt, Q.width, Q.height);
          else {
            let V = Q.width, Z = Q.height;
            for (let ct = 0; ct < it; ct++)
              e.texImage2D(i.TEXTURE_2D, ct, Rt, V, Z, 0, pt, bt, null), V >>= 1, Z >>= 1;
          }
      } else if (Gt.length > 0) {
        if (Nt && ie) {
          const V = Mt(Gt[0]);
          e.texStorage2D(i.TEXTURE_2D, it, Rt, V.width, V.height);
        }
        for (let V = 0, Z = Gt.length; V < Z; V++)
          mt = Gt[V], Nt ? L && e.texSubImage2D(i.TEXTURE_2D, V, 0, 0, pt, bt, mt) : e.texImage2D(i.TEXTURE_2D, V, Rt, pt, bt, mt);
        g.generateMipmaps = !1;
      } else if (Nt) {
        if (ie) {
          const V = Mt(Q);
          e.texStorage2D(i.TEXTURE_2D, it, Rt, V.width, V.height);
        }
        L && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, pt, bt, Q);
      } else
        e.texImage2D(i.TEXTURE_2D, 0, Rt, pt, bt, Q);
      m(g) && h(j), vt.__version = Y.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function et(E, g, O) {
    if (g.image.length !== 6) return;
    const j = ne(E, g), $ = g.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + O);
    const Y = n.get($);
    if ($.version !== Y.__version || j === !0) {
      e.activeTexture(i.TEXTURE0 + O);
      const vt = Xt.getPrimaries(Xt.workingColorSpace), ot = g.colorSpace === Qn ? null : Xt.getPrimaries(g.colorSpace), ft = g.colorSpace === Qn || vt === ot ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ft);
      const Vt = g.isCompressedTexture || g.image[0].isCompressedTexture, Q = g.image[0] && g.image[0].isDataTexture, pt = [];
      for (let Z = 0; Z < 6; Z++)
        !Vt && !Q ? pt[Z] = v(g.image[Z], !0, s.maxCubemapSize) : pt[Z] = Q ? g.image[Z].image : g.image[Z], pt[Z] = re(g, pt[Z]);
      const bt = pt[0], Rt = r.convert(g.format, g.colorSpace), mt = r.convert(g.type), Gt = T(g.internalFormat, Rt, mt, g.colorSpace), Nt = g.isVideoTexture !== !0, ie = Y.__version === void 0 || j === !0, L = $.dataReady;
      let it = N(g, bt);
      Ot(i.TEXTURE_CUBE_MAP, g);
      let V;
      if (Vt) {
        Nt && ie && e.texStorage2D(i.TEXTURE_CUBE_MAP, it, Gt, bt.width, bt.height);
        for (let Z = 0; Z < 6; Z++) {
          V = pt[Z].mipmaps;
          for (let ct = 0; ct < V.length; ct++) {
            const lt = V[ct];
            g.format !== mn ? Rt !== null ? Nt ? L && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct, 0, 0, lt.width, lt.height, Rt, lt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct, Gt, lt.width, lt.height, 0, lt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct, 0, 0, lt.width, lt.height, Rt, mt, lt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct, Gt, lt.width, lt.height, 0, Rt, mt, lt.data);
          }
        }
      } else {
        if (V = g.mipmaps, Nt && ie) {
          V.length > 0 && it++;
          const Z = Mt(pt[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, it, Gt, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if (Q) {
            Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, pt[Z].width, pt[Z].height, Rt, mt, pt[Z].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Gt, pt[Z].width, pt[Z].height, 0, Rt, mt, pt[Z].data);
            for (let ct = 0; ct < V.length; ct++) {
              const Lt = V[ct].image[Z].image;
              Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct + 1, 0, 0, Lt.width, Lt.height, Rt, mt, Lt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct + 1, Gt, Lt.width, Lt.height, 0, Rt, mt, Lt.data);
            }
          } else {
            Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, Rt, mt, pt[Z]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Gt, Rt, mt, pt[Z]);
            for (let ct = 0; ct < V.length; ct++) {
              const lt = V[ct];
              Nt ? L && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct + 1, 0, 0, Rt, mt, lt.image[Z]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, ct + 1, Gt, Rt, mt, lt.image[Z]);
            }
          }
      }
      m(g) && h(i.TEXTURE_CUBE_MAP), Y.__version = $.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function gt(E, g, O, j, $, Y) {
    const vt = r.convert(O.format, O.colorSpace), ot = r.convert(O.type), ft = T(O.internalFormat, vt, ot, O.colorSpace), Vt = n.get(g), Q = n.get(O);
    if (Q.__renderTarget = g, !Vt.__hasExternalTextures) {
      const pt = Math.max(1, g.width >> Y), bt = Math.max(1, g.height >> Y);
      $ === i.TEXTURE_3D || $ === i.TEXTURE_2D_ARRAY ? e.texImage3D($, Y, ft, pt, bt, g.depth, 0, vt, ot, null) : e.texImage2D($, Y, ft, pt, bt, 0, vt, ot, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, E), Ht(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, j, $, Q.__webglTexture, 0, zt(g)) : ($ === i.TEXTURE_2D || $ >= i.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, j, $, Q.__webglTexture, Y), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function at(E, g, O) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), g.depthBuffer) {
      const j = g.depthTexture, $ = j && j.isDepthTexture ? j.type : null, Y = y(g.stencilBuffer, $), vt = g.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ot = zt(g);
      Ht(g) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ot, Y, g.width, g.height) : O ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ot, Y, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, Y, g.width, g.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, vt, i.RENDERBUFFER, E);
    } else {
      const j = g.textures;
      for (let $ = 0; $ < j.length; $++) {
        const Y = j[$], vt = r.convert(Y.format, Y.colorSpace), ot = r.convert(Y.type), ft = T(Y.internalFormat, vt, ot, Y.colorSpace), Vt = zt(g);
        O && Ht(g) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Vt, ft, g.width, g.height) : Ht(g) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Vt, ft, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, ft, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function At(E, g) {
    if (g && g.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, E), !(g.depthTexture && g.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const j = n.get(g.depthTexture);
    j.__renderTarget = g, (!j.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = !0), K(g.depthTexture, 0);
    const $ = j.__webglTexture, Y = zt(g);
    if (g.depthTexture.format === ns)
      Ht(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, Y) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else if (g.depthTexture.format === Ss)
      Ht(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, Y) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0);
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
      At(g.__webglFramebuffer, E);
    } else if (O) {
      g.__webglDepthbuffer = [];
      for (let j = 0; j < 6; j++)
        if (e.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[j]), g.__webglDepthbuffer[j] === void 0)
          g.__webglDepthbuffer[j] = i.createRenderbuffer(), at(g.__webglDepthbuffer[j], E, !1);
        else {
          const $ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Y = g.__webglDepthbuffer[j];
          i.bindRenderbuffer(i.RENDERBUFFER, Y), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, Y);
        }
    } else if (e.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer === void 0)
      g.__webglDepthbuffer = i.createRenderbuffer(), at(g.__webglDepthbuffer, E, !1);
    else {
      const j = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, $ = g.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, $), i.framebufferRenderbuffer(i.FRAMEBUFFER, j, i.RENDERBUFFER, $);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function wt(E, g, O) {
    const j = n.get(E);
    g !== void 0 && gt(j.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), O !== void 0 && Yt(E);
  }
  function de(E) {
    const g = E.texture, O = n.get(E), j = n.get(g);
    E.addEventListener("dispose", P);
    const $ = E.textures, Y = E.isWebGLCubeRenderTarget === !0, vt = $.length > 1;
    if (vt || (j.__webglTexture === void 0 && (j.__webglTexture = i.createTexture()), j.__version = g.version, a.memory.textures++), Y) {
      O.__webglFramebuffer = [];
      for (let ot = 0; ot < 6; ot++)
        if (g.mipmaps && g.mipmaps.length > 0) {
          O.__webglFramebuffer[ot] = [];
          for (let ft = 0; ft < g.mipmaps.length; ft++)
            O.__webglFramebuffer[ot][ft] = i.createFramebuffer();
        } else
          O.__webglFramebuffer[ot] = i.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let ot = 0; ot < g.mipmaps.length; ot++)
          O.__webglFramebuffer[ot] = i.createFramebuffer();
      } else
        O.__webglFramebuffer = i.createFramebuffer();
      if (vt)
        for (let ot = 0, ft = $.length; ot < ft; ot++) {
          const Vt = n.get($[ot]);
          Vt.__webglTexture === void 0 && (Vt.__webglTexture = i.createTexture(), a.memory.textures++);
        }
      if (E.samples > 0 && Ht(E) === !1) {
        O.__webglMultisampledFramebuffer = i.createFramebuffer(), O.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let ot = 0; ot < $.length; ot++) {
          const ft = $[ot];
          O.__webglColorRenderbuffer[ot] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, O.__webglColorRenderbuffer[ot]);
          const Vt = r.convert(ft.format, ft.colorSpace), Q = r.convert(ft.type), pt = T(ft.internalFormat, Vt, Q, ft.colorSpace, E.isXRRenderTarget === !0), bt = zt(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, bt, pt, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ot, i.RENDERBUFFER, O.__webglColorRenderbuffer[ot]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (O.__webglDepthRenderbuffer = i.createRenderbuffer(), at(O.__webglDepthRenderbuffer, E, !0)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, j.__webglTexture), Ot(i.TEXTURE_CUBE_MAP, g);
      for (let ot = 0; ot < 6; ot++)
        if (g.mipmaps && g.mipmaps.length > 0)
          for (let ft = 0; ft < g.mipmaps.length; ft++)
            gt(O.__webglFramebuffer[ot][ft], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, ft);
        else
          gt(O.__webglFramebuffer[ot], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, 0);
      m(g) && h(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (vt) {
      for (let ot = 0, ft = $.length; ot < ft; ot++) {
        const Vt = $[ot], Q = n.get(Vt);
        e.bindTexture(i.TEXTURE_2D, Q.__webglTexture), Ot(i.TEXTURE_2D, Vt), gt(O.__webglFramebuffer, E, Vt, i.COLOR_ATTACHMENT0 + ot, i.TEXTURE_2D, 0), m(Vt) && h(i.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let ot = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ot = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(ot, j.__webglTexture), Ot(ot, g), g.mipmaps && g.mipmaps.length > 0)
        for (let ft = 0; ft < g.mipmaps.length; ft++)
          gt(O.__webglFramebuffer[ft], E, g, i.COLOR_ATTACHMENT0, ot, ft);
      else
        gt(O.__webglFramebuffer, E, g, i.COLOR_ATTACHMENT0, ot, 0);
      m(g) && h(ot), e.unbindTexture();
    }
    E.depthBuffer && Yt(E);
  }
  function ce(E) {
    const g = E.textures;
    for (let O = 0, j = g.length; O < j; O++) {
      const $ = g[O];
      if (m($)) {
        const Y = A(E), vt = n.get($).__webglTexture;
        e.bindTexture(Y, vt), h(Y), e.unbindTexture();
      }
    }
  }
  const Bt = [], R = [];
  function Ye(E) {
    if (E.samples > 0) {
      if (Ht(E) === !1) {
        const g = E.textures, O = E.width, j = E.height;
        let $ = i.COLOR_BUFFER_BIT;
        const Y = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, vt = n.get(E), ot = g.length > 1;
        if (ot)
          for (let ft = 0; ft < g.length; ft++)
            e.bindFramebuffer(i.FRAMEBUFFER, vt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ft, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, vt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ft, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, vt.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, vt.__webglFramebuffer);
        for (let ft = 0; ft < g.length; ft++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && ($ |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && ($ |= i.STENCIL_BUFFER_BIT)), ot) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, vt.__webglColorRenderbuffer[ft]);
            const Vt = n.get(g[ft]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Vt, 0);
          }
          i.blitFramebuffer(0, 0, O, j, 0, 0, O, j, $, i.NEAREST), l === !0 && (Bt.length = 0, R.length = 0, Bt.push(i.COLOR_ATTACHMENT0 + ft), E.depthBuffer && E.resolveDepthBuffer === !1 && (Bt.push(Y), R.push(Y), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, R)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Bt));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ot)
          for (let ft = 0; ft < g.length; ft++) {
            e.bindFramebuffer(i.FRAMEBUFFER, vt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ft, i.RENDERBUFFER, vt.__webglColorRenderbuffer[ft]);
            const Vt = n.get(g[ft]).__webglTexture;
            e.bindFramebuffer(i.FRAMEBUFFER, vt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ft, i.TEXTURE_2D, Vt, 0);
          }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, vt.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        const g = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function zt(E) {
    return Math.min(s.maxSamples, E.samples);
  }
  function Ht(E) {
    const g = n.get(E);
    return E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && g.__useRenderToTexture !== !1;
  }
  function yt(E) {
    const g = a.render.frame;
    u.get(E) !== g && (u.set(E, g), E.update());
  }
  function re(E, g) {
    const O = E.colorSpace, j = E.format, $ = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || O !== ys && O !== Qn && (Xt.getTransfer(O) === te ? (j !== mn || $ !== Wn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), g;
  }
  function Mt(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = G, this.setTexture2D = K, this.setTexture2DArray = X, this.setTexture3D = tt, this.setTextureCube = k, this.rebindTextures = wt, this.setupRenderTarget = de, this.updateRenderTargetMipmap = ce, this.updateMultisampleRenderTarget = Ye, this.setupDepthRenderbuffer = Yt, this.setupFrameBufferTexture = gt, this.useMultisampledRTT = Ht;
}
function F_(i, t) {
  function e(n, s = Qn) {
    let r;
    const a = Xt.getTransfer(s);
    if (n === Wn) return i.UNSIGNED_BYTE;
    if (n === Uo) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Io) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Mc) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === vc) return i.BYTE;
    if (n === xc) return i.SHORT;
    if (n === Os) return i.UNSIGNED_SHORT;
    if (n === Lo) return i.INT;
    if (n === Ri) return i.UNSIGNED_INT;
    if (n === Hn) return i.FLOAT;
    if (n === Gs) return i.HALF_FLOAT;
    if (n === Sc) return i.ALPHA;
    if (n === yc) return i.RGB;
    if (n === mn) return i.RGBA;
    if (n === Ec) return i.LUMINANCE;
    if (n === Tc) return i.LUMINANCE_ALPHA;
    if (n === ns) return i.DEPTH_COMPONENT;
    if (n === Ss) return i.DEPTH_STENCIL;
    if (n === bc) return i.RED;
    if (n === No) return i.RED_INTEGER;
    if (n === Ac) return i.RG;
    if (n === Fo) return i.RG_INTEGER;
    if (n === Oo) return i.RGBA_INTEGER;
    if (n === Tr || n === br || n === Ar || n === wr)
      if (a === te)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === Tr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === br) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Ar) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === wr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === Tr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === br) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Ar) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === wr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === ja || n === Za || n === Ka || n === $a)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === ja) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Za) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ka) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === $a) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Ja || n === Qa || n === to)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === Ja || n === Qa) return a === te ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === to) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === eo || n === no || n === io || n === so || n === ro || n === ao || n === oo || n === lo || n === co || n === ho || n === uo || n === fo || n === po || n === mo)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === eo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === no) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === io) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === so) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ro) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === ao) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === oo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === lo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === co) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === ho) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === uo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === fo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === po) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === mo) return a === te ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Rr || n === _o || n === go)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Rr) return a === te ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === _o) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === go) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === wc || n === vo || n === xo || n === Mo)
      if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Rr) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === vo) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === xo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Mo) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === Ms ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const O_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, B_ = `
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
class z_ {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const s = new He(), r = t.properties.get(s);
      r.__webglTexture = e.texture, (e.depthNear !== n.depthNear || e.depthFar !== n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = s;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new Yn({
        vertexShader: O_,
        fragmentShader: B_,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new fe(new Ws(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class H_ extends Ui {
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, u = null, d = null, p = null, f = null, _ = null;
    const v = new z_(), m = e.getContextAttributes();
    let h = null, A = null;
    const T = [], y = [], N = new Dt();
    let C = null;
    const P = new Je();
    P.viewport = new se();
    const F = new Je();
    F.viewport = new se();
    const S = [P, F], M = new ad();
    let D = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let et = T[q];
      return et === void 0 && (et = new ga(), T[q] = et), et.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let et = T[q];
      return et === void 0 && (et = new ga(), T[q] = et), et.getGripSpace();
    }, this.getHand = function(q) {
      let et = T[q];
      return et === void 0 && (et = new ga(), T[q] = et), et.getHandSpace();
    };
    function H(q) {
      const et = y.indexOf(q.inputSource);
      if (et === -1)
        return;
      const gt = T[et];
      gt !== void 0 && (gt.update(q.inputSource, q.frame, c || a), gt.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function W() {
      s.removeEventListener("select", H), s.removeEventListener("selectstart", H), s.removeEventListener("selectend", H), s.removeEventListener("squeeze", H), s.removeEventListener("squeezestart", H), s.removeEventListener("squeezeend", H), s.removeEventListener("end", W), s.removeEventListener("inputsourceschange", K);
      for (let q = 0; q < T.length; q++) {
        const et = y[q];
        et !== null && (y[q] = null, T[q].disconnect(et));
      }
      D = null, G = null, v.reset(), t.setRenderTarget(h), f = null, p = null, d = null, s = null, A = null, ne.stop(), n.isPresenting = !1, t.setPixelRatio(C), t.setSize(N.width, N.height, !1), n.dispatchEvent({ type: "sessionend" });
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
        if (h = t.getRenderTarget(), s.addEventListener("select", H), s.addEventListener("selectstart", H), s.addEventListener("selectend", H), s.addEventListener("squeeze", H), s.addEventListener("squeezestart", H), s.addEventListener("squeezeend", H), s.addEventListener("end", W), s.addEventListener("inputsourceschange", K), m.xrCompatible !== !0 && await e.makeXRCompatible(), C = t.getPixelRatio(), t.getSize(N), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let gt = null, at = null, At = null;
          m.depth && (At = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, gt = m.stencil ? Ss : ns, at = m.stencil ? Ms : Ri);
          const Yt = {
            colorFormat: e.RGBA8,
            depthFormat: At,
            scaleFactor: r
          };
          d = new XRWebGLBinding(s, e), p = d.createProjectionLayer(Yt), s.updateRenderState({ layers: [p] }), t.setPixelRatio(1), t.setSize(p.textureWidth, p.textureHeight, !1), A = new Ci(
            p.textureWidth,
            p.textureHeight,
            {
              format: mn,
              type: Wn,
              depthTexture: new Vc(p.textureWidth, p.textureHeight, at, void 0, void 0, void 0, void 0, void 0, void 0, gt),
              stencilBuffer: m.stencil,
              colorSpace: t.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: p.ignoreDepthValues === !1
            }
          );
        } else {
          const gt = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(s, e, gt), s.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, !1), A = new Ci(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: mn,
              type: Wn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: m.stencil
            }
          );
        }
        A.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), ne.setContext(s), ne.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return v.getDepthTexture();
    };
    function K(q) {
      for (let et = 0; et < q.removed.length; et++) {
        const gt = q.removed[et], at = y.indexOf(gt);
        at >= 0 && (y[at] = null, T[at].disconnect(gt));
      }
      for (let et = 0; et < q.added.length; et++) {
        const gt = q.added[et];
        let at = y.indexOf(gt);
        if (at === -1) {
          for (let Yt = 0; Yt < T.length; Yt++)
            if (Yt >= y.length) {
              y.push(gt), at = Yt;
              break;
            } else if (y[Yt] === null) {
              y[Yt] = gt, at = Yt;
              break;
            }
          if (at === -1) break;
        }
        const At = T[at];
        At && At.connect(gt);
      }
    }
    const X = new w(), tt = new w();
    function k(q, et, gt) {
      X.setFromMatrixPosition(et.matrixWorld), tt.setFromMatrixPosition(gt.matrixWorld);
      const at = X.distanceTo(tt), At = et.projectionMatrix.elements, Yt = gt.projectionMatrix.elements, wt = At[14] / (At[10] - 1), de = At[14] / (At[10] + 1), ce = (At[9] + 1) / At[5], Bt = (At[9] - 1) / At[5], R = (At[8] - 1) / At[0], Ye = (Yt[8] + 1) / Yt[0], zt = wt * R, Ht = wt * Ye, yt = at / (-R + Ye), re = yt * -R;
      if (et.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(re), q.translateZ(yt), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), At[10] === -1)
        q.projectionMatrix.copy(et.projectionMatrix), q.projectionMatrixInverse.copy(et.projectionMatrixInverse);
      else {
        const Mt = wt + yt, E = de + yt, g = zt - re, O = Ht + (at - re), j = ce * de / E * Mt, $ = Bt * de / E * Mt;
        q.projectionMatrix.makePerspective(g, O, j, $, Mt, E), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function rt(q, et) {
      et === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(et.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (s === null) return;
      let et = q.near, gt = q.far;
      v.texture !== null && (v.depthNear > 0 && (et = v.depthNear), v.depthFar > 0 && (gt = v.depthFar)), M.near = F.near = P.near = et, M.far = F.far = P.far = gt, (D !== M.near || G !== M.far) && (s.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), D = M.near, G = M.far), P.layers.mask = q.layers.mask | 2, F.layers.mask = q.layers.mask | 4, M.layers.mask = P.layers.mask | F.layers.mask;
      const at = q.parent, At = M.cameras;
      rt(M, at);
      for (let Yt = 0; Yt < At.length; Yt++)
        rt(At[Yt], at);
      At.length === 2 ? k(M, P, F) : M.projectionMatrix.copy(P.projectionMatrix), dt(q, M, at);
    };
    function dt(q, et, gt) {
      gt === null ? q.matrix.copy(et.matrixWorld) : (q.matrix.copy(gt.matrixWorld), q.matrix.invert(), q.matrix.multiply(et.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy(et.projectionMatrix), q.projectionMatrixInverse.copy(et.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = Bs * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
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
    let St = null;
    function Ot(q, et) {
      if (u = et.getViewerPose(c || a), _ = et, u !== null) {
        const gt = u.views;
        f !== null && (t.setRenderTargetFramebuffer(A, f.framebuffer), t.setRenderTarget(A));
        let at = !1;
        gt.length !== M.cameras.length && (M.cameras.length = 0, at = !0);
        for (let wt = 0; wt < gt.length; wt++) {
          const de = gt[wt];
          let ce = null;
          if (f !== null)
            ce = f.getViewport(de);
          else {
            const R = d.getViewSubImage(p, de);
            ce = R.viewport, wt === 0 && (t.setRenderTargetTextures(
              A,
              R.colorTexture,
              p.ignoreDepthValues ? void 0 : R.depthStencilTexture
            ), t.setRenderTarget(A));
          }
          let Bt = S[wt];
          Bt === void 0 && (Bt = new Je(), Bt.layers.enable(wt), Bt.viewport = new se(), S[wt] = Bt), Bt.matrix.fromArray(de.transform.matrix), Bt.matrix.decompose(Bt.position, Bt.quaternion, Bt.scale), Bt.projectionMatrix.fromArray(de.projectionMatrix), Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(), Bt.viewport.set(ce.x, ce.y, ce.width, ce.height), wt === 0 && (M.matrix.copy(Bt.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), at === !0 && M.cameras.push(Bt);
        }
        const At = s.enabledFeatures;
        if (At && At.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && d) {
          const wt = d.getDepthInformation(gt[0]);
          wt && wt.isValid && wt.texture && v.init(t, wt, s.renderState);
        }
      }
      for (let gt = 0; gt < T.length; gt++) {
        const at = y[gt], At = T[gt];
        at !== null && At !== void 0 && At.update(at, et, c || a);
      }
      St && St(q, et), et.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: et }), _ = null;
    }
    const ne = new kc();
    ne.setAnimationLoop(Ot), this.setAnimationLoop = function(q) {
      St = q;
    }, this.dispose = function() {
    };
  }
}
const mi = /* @__PURE__ */ new Xn(), G_ = /* @__PURE__ */ new ae();
function V_(i, t) {
  function e(m, h) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), h.value.copy(m.matrix);
  }
  function n(m, h) {
    h.color.getRGB(m.fogColor.value, Oc(i)), h.isFog ? (m.fogNear.value = h.near, m.fogFar.value = h.far) : h.isFogExp2 && (m.fogDensity.value = h.density);
  }
  function s(m, h, A, T, y) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? r(m, h) : h.isMeshToonMaterial ? (r(m, h), d(m, h)) : h.isMeshPhongMaterial ? (r(m, h), u(m, h)) : h.isMeshStandardMaterial ? (r(m, h), p(m, h), h.isMeshPhysicalMaterial && f(m, h, y)) : h.isMeshMatcapMaterial ? (r(m, h), _(m, h)) : h.isMeshDepthMaterial ? r(m, h) : h.isMeshDistanceMaterial ? (r(m, h), v(m, h)) : h.isMeshNormalMaterial ? r(m, h) : h.isLineBasicMaterial ? (a(m, h), h.isLineDashedMaterial && o(m, h)) : h.isPointsMaterial ? l(m, h, A, T) : h.isSpriteMaterial ? c(m, h) : h.isShadowMaterial ? (m.color.value.copy(h.color), m.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function r(m, h) {
    m.opacity.value = h.opacity, h.color && m.diffuse.value.copy(h.color), h.emissive && m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (m.map.value = h.map, e(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.bumpMap && (m.bumpMap.value = h.bumpMap, e(h.bumpMap, m.bumpMapTransform), m.bumpScale.value = h.bumpScale, h.side === ze && (m.bumpScale.value *= -1)), h.normalMap && (m.normalMap.value = h.normalMap, e(h.normalMap, m.normalMapTransform), m.normalScale.value.copy(h.normalScale), h.side === ze && m.normalScale.value.negate()), h.displacementMap && (m.displacementMap.value = h.displacementMap, e(h.displacementMap, m.displacementMapTransform), m.displacementScale.value = h.displacementScale, m.displacementBias.value = h.displacementBias), h.emissiveMap && (m.emissiveMap.value = h.emissiveMap, e(h.emissiveMap, m.emissiveMapTransform)), h.specularMap && (m.specularMap.value = h.specularMap, e(h.specularMap, m.specularMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
    const A = t.get(h), T = A.envMap, y = A.envMapRotation;
    T && (m.envMap.value = T, mi.copy(y), mi.x *= -1, mi.y *= -1, mi.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (mi.y *= -1, mi.z *= -1), m.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(mi)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = h.reflectivity, m.ior.value = h.ior, m.refractionRatio.value = h.refractionRatio), h.lightMap && (m.lightMap.value = h.lightMap, m.lightMapIntensity.value = h.lightMapIntensity, e(h.lightMap, m.lightMapTransform)), h.aoMap && (m.aoMap.value = h.aoMap, m.aoMapIntensity.value = h.aoMapIntensity, e(h.aoMap, m.aoMapTransform));
  }
  function a(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, h.map && (m.map.value = h.map, e(h.map, m.mapTransform));
  }
  function o(m, h) {
    m.dashSize.value = h.dashSize, m.totalSize.value = h.dashSize + h.gapSize, m.scale.value = h.scale;
  }
  function l(m, h, A, T) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.size.value = h.size * A, m.scale.value = T * 0.5, h.map && (m.map.value = h.map, e(h.map, m.uvTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, e(h.alphaMap, m.alphaMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
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
  function f(m, h, A) {
    m.ior.value = h.ior, h.sheen > 0 && (m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), m.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (m.sheenColorMap.value = h.sheenColorMap, e(h.sheenColorMap, m.sheenColorMapTransform)), h.sheenRoughnessMap && (m.sheenRoughnessMap.value = h.sheenRoughnessMap, e(h.sheenRoughnessMap, m.sheenRoughnessMapTransform))), h.clearcoat > 0 && (m.clearcoat.value = h.clearcoat, m.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (m.clearcoatMap.value = h.clearcoatMap, e(h.clearcoatMap, m.clearcoatMapTransform)), h.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, e(h.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (m.clearcoatNormalMap.value = h.clearcoatNormalMap, e(h.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === ze && m.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (m.dispersion.value = h.dispersion), h.iridescence > 0 && (m.iridescence.value = h.iridescence, m.iridescenceIOR.value = h.iridescenceIOR, m.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (m.iridescenceMap.value = h.iridescenceMap, e(h.iridescenceMap, m.iridescenceMapTransform)), h.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = h.iridescenceThicknessMap, e(h.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), h.transmission > 0 && (m.transmission.value = h.transmission, m.transmissionSamplerMap.value = A.texture, m.transmissionSamplerSize.value.set(A.width, A.height), h.transmissionMap && (m.transmissionMap.value = h.transmissionMap, e(h.transmissionMap, m.transmissionMapTransform)), m.thickness.value = h.thickness, h.thicknessMap && (m.thicknessMap.value = h.thicknessMap, e(h.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = h.attenuationDistance, m.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (m.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (m.anisotropyMap.value = h.anisotropyMap, e(h.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = h.specularIntensity, m.specularColor.value.copy(h.specularColor), h.specularColorMap && (m.specularColorMap.value = h.specularColorMap, e(h.specularColorMap, m.specularColorMapTransform)), h.specularIntensityMap && (m.specularIntensityMap.value = h.specularIntensityMap, e(h.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, h) {
    h.matcap && (m.matcap.value = h.matcap);
  }
  function v(m, h) {
    const A = t.get(h).light;
    m.referencePosition.value.setFromMatrixPosition(A.matrixWorld), m.nearDistance.value = A.shadow.camera.near, m.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function k_(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, T) {
    const y = T.program;
    n.uniformBlockBinding(A, y);
  }
  function c(A, T) {
    let y = s[A.id];
    y === void 0 && (_(A), y = u(A), s[A.id] = y, A.addEventListener("dispose", m));
    const N = T.program;
    n.updateUBOMapping(A, N);
    const C = t.render.frame;
    r[A.id] !== C && (p(A), r[A.id] = C);
  }
  function u(A) {
    const T = d();
    A.__bindingPointIndex = T;
    const y = i.createBuffer(), N = A.__size, C = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, y), i.bufferData(i.UNIFORM_BUFFER, N, C), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, T, y), y;
  }
  function d() {
    for (let A = 0; A < o; A++)
      if (a.indexOf(A) === -1)
        return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function p(A) {
    const T = s[A.id], y = A.uniforms, N = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, T);
    for (let C = 0, P = y.length; C < P; C++) {
      const F = Array.isArray(y[C]) ? y[C] : [y[C]];
      for (let S = 0, M = F.length; S < M; S++) {
        const D = F[S];
        if (f(D, C, S, N) === !0) {
          const G = D.__offset, H = Array.isArray(D.value) ? D.value : [D.value];
          let W = 0;
          for (let K = 0; K < H.length; K++) {
            const X = H[K], tt = v(X);
            typeof X == "number" || typeof X == "boolean" ? (D.__data[0] = X, i.bufferSubData(i.UNIFORM_BUFFER, G + W, D.__data)) : X.isMatrix3 ? (D.__data[0] = X.elements[0], D.__data[1] = X.elements[1], D.__data[2] = X.elements[2], D.__data[3] = 0, D.__data[4] = X.elements[3], D.__data[5] = X.elements[4], D.__data[6] = X.elements[5], D.__data[7] = 0, D.__data[8] = X.elements[6], D.__data[9] = X.elements[7], D.__data[10] = X.elements[8], D.__data[11] = 0) : (X.toArray(D.__data, W), W += tt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, G, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(A, T, y, N) {
    const C = A.value, P = T + "_" + y;
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
  function _(A) {
    const T = A.uniforms;
    let y = 0;
    const N = 16;
    for (let P = 0, F = T.length; P < F; P++) {
      const S = Array.isArray(T[P]) ? T[P] : [T[P]];
      for (let M = 0, D = S.length; M < D; M++) {
        const G = S[M], H = Array.isArray(G.value) ? G.value : [G.value];
        for (let W = 0, K = H.length; W < K; W++) {
          const X = H[W], tt = v(X), k = y % N, rt = k % tt.boundary, dt = k + rt;
          y += rt, dt !== 0 && N - dt < tt.storage && (y += N - dt), G.__data = new Float32Array(tt.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = y, y += tt.storage;
        }
      }
    }
    const C = y % N;
    return C > 0 && (y += N - C), A.__size = y, A.__cache = {}, this;
  }
  function v(A) {
    const T = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" || typeof A == "boolean" ? (T.boundary = 4, T.storage = 4) : A.isVector2 ? (T.boundary = 8, T.storage = 8) : A.isVector3 || A.isColor ? (T.boundary = 16, T.storage = 12) : A.isVector4 ? (T.boundary = 16, T.storage = 16) : A.isMatrix3 ? (T.boundary = 48, T.storage = 48) : A.isMatrix4 ? (T.boundary = 64, T.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), T;
  }
  function m(A) {
    const T = A.target;
    T.removeEventListener("dispose", m);
    const y = a.indexOf(T.__bindingPointIndex);
    a.splice(y, 1), i.deleteBuffer(s[T.id]), delete s[T.id], delete r[T.id];
  }
  function h() {
    for (const A in s)
      i.deleteBuffer(s[A]);
    a = [], s = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: h
  };
}
class W_ {
  constructor(t = {}) {
    const {
      canvas: e = Su(),
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
    const A = [], T = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = $e, this.toneMapping = ii, this.toneMappingExposure = 1;
    const y = this;
    let N = !1, C = 0, P = 0, F = null, S = -1, M = null;
    const D = new se(), G = new se();
    let H = null;
    const W = new qt(0);
    let K = 0, X = e.width, tt = e.height, k = 1, rt = null, dt = null;
    const St = new se(0, 0, X, tt), Ot = new se(0, 0, X, tt);
    let ne = !1;
    const q = new Hc();
    let et = !1, gt = !1;
    this.transmissionResolutionScale = 1;
    const at = new ae(), At = new ae(), Yt = new w(), wt = new se(), de = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ce = !1;
    function Bt() {
      return F === null ? k : 1;
    }
    let R = n;
    function Ye(x, U) {
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
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Do}`), e.addEventListener("webglcontextlost", Z, !1), e.addEventListener("webglcontextrestored", ct, !1), e.addEventListener("webglcontextcreationerror", lt, !1), R === null) {
        const U = "webgl2";
        if (R = Ye(U, x), R === null)
          throw Ye(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let zt, Ht, yt, re, Mt, E, g, O, j, $, Y, vt, ot, ft, Vt, Q, pt, bt, Rt, mt, Gt, Nt, ie, L;
    function it() {
      zt = new tm(R), zt.init(), Nt = new F_(R, zt), Ht = new jp(R, zt, t, Nt), yt = new I_(R, zt), Ht.reverseDepthBuffer && p && yt.buffers.depth.setReversed(!0), re = new im(R), Mt = new S_(), E = new N_(R, zt, yt, Mt, Ht, Nt, re), g = new Kp(y), O = new Qp(y), j = new cd(R), ie = new Yp(R, j), $ = new em(R, j, re, ie), Y = new rm(R, $, j, re), Rt = new sm(R, Ht, E), Q = new Zp(Mt), vt = new M_(y, g, O, zt, Ht, ie, Q), ot = new V_(y, Mt), ft = new E_(), Vt = new C_(zt), bt = new Xp(y, g, O, yt, Y, f, l), pt = new L_(y, Y, Ht), L = new k_(R, re, Ht, yt), mt = new qp(R, zt, re), Gt = new nm(R, zt, re), re.programs = vt.programs, y.capabilities = Ht, y.extensions = zt, y.properties = Mt, y.renderLists = ft, y.shadowMap = pt, y.state = yt, y.info = re;
    }
    it();
    const V = new H_(y, R);
    this.xr = V, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = zt.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = zt.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (k = x, this.setSize(X, tt, !1));
    }, this.getSize = function(x) {
      return x.set(X, tt);
    }, this.setSize = function(x, U, B = !0) {
      if (V.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      X = x, tt = U, e.width = Math.floor(x * k), e.height = Math.floor(U * k), B === !0 && (e.style.width = x + "px", e.style.height = U + "px"), this.setViewport(0, 0, x, U);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(X * k, tt * k).floor();
    }, this.setDrawingBufferSize = function(x, U, B) {
      X = x, tt = U, k = B, e.width = Math.floor(x * B), e.height = Math.floor(U * B), this.setViewport(0, 0, x, U);
    }, this.getCurrentViewport = function(x) {
      return x.copy(D);
    }, this.getViewport = function(x) {
      return x.copy(St);
    }, this.setViewport = function(x, U, B, z) {
      x.isVector4 ? St.set(x.x, x.y, x.z, x.w) : St.set(x, U, B, z), yt.viewport(D.copy(St).multiplyScalar(k).round());
    }, this.getScissor = function(x) {
      return x.copy(Ot);
    }, this.setScissor = function(x, U, B, z) {
      x.isVector4 ? Ot.set(x.x, x.y, x.z, x.w) : Ot.set(x, U, B, z), yt.scissor(G.copy(Ot).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return ne;
    }, this.setScissorTest = function(x) {
      yt.setScissorTest(ne = x);
    }, this.setOpaqueSort = function(x) {
      rt = x;
    }, this.setTransparentSort = function(x) {
      dt = x;
    }, this.getClearColor = function(x) {
      return x.copy(bt.getClearColor());
    }, this.setClearColor = function() {
      bt.setClearColor.apply(bt, arguments);
    }, this.getClearAlpha = function() {
      return bt.getClearAlpha();
    }, this.setClearAlpha = function() {
      bt.setClearAlpha.apply(bt, arguments);
    }, this.clear = function(x = !0, U = !0, B = !0) {
      let z = 0;
      if (x) {
        let I = !1;
        if (F !== null) {
          const J = F.texture.format;
          I = J === Oo || J === Fo || J === No;
        }
        if (I) {
          const J = F.texture.type, st = J === Wn || J === Ri || J === Os || J === Ms || J === Uo || J === Io, ht = bt.getClearColor(), _t = bt.getClearAlpha(), Ct = ht.r, Pt = ht.g, Et = ht.b;
          st ? (_[0] = Ct, _[1] = Pt, _[2] = Et, _[3] = _t, R.clearBufferuiv(R.COLOR, 0, _)) : (v[0] = Ct, v[1] = Pt, v[2] = Et, v[3] = _t, R.clearBufferiv(R.COLOR, 0, v));
        } else
          z |= R.COLOR_BUFFER_BIT;
      }
      U && (z |= R.DEPTH_BUFFER_BIT), B && (z |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", Z, !1), e.removeEventListener("webglcontextrestored", ct, !1), e.removeEventListener("webglcontextcreationerror", lt, !1), bt.dispose(), ft.dispose(), Vt.dispose(), Mt.dispose(), g.dispose(), O.dispose(), Y.dispose(), ie.dispose(), L.dispose(), vt.dispose(), V.dispose(), V.removeEventListener("sessionstart", Yo), V.removeEventListener("sessionend", qo), li.stop();
    };
    function Z(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), N = !0;
    }
    function ct() {
      console.log("THREE.WebGLRenderer: Context Restored."), N = !1;
      const x = re.autoReset, U = pt.enabled, B = pt.autoUpdate, z = pt.needsUpdate, I = pt.type;
      it(), re.autoReset = x, pt.enabled = U, pt.autoUpdate = B, pt.needsUpdate = z, pt.type = I;
    }
    function lt(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Lt(x) {
      const U = x.target;
      U.removeEventListener("dispose", Lt), he(U);
    }
    function he(x) {
      Re(x), Mt.remove(x);
    }
    function Re(x) {
      const U = Mt.get(x).programs;
      U !== void 0 && (U.forEach(function(B) {
        vt.releaseProgram(B);
      }), x.isShaderMaterial && vt.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, U, B, z, I, J) {
      U === null && (U = de);
      const st = I.isMesh && I.matrixWorld.determinant() < 0, ht = dh(x, U, B, z, I);
      yt.setMaterial(z, st);
      let _t = B.index, Ct = 1;
      if (z.wireframe === !0) {
        if (_t = $.getWireframeAttribute(B), _t === void 0) return;
        Ct = 2;
      }
      const Pt = B.drawRange, Et = B.attributes.position;
      let kt = Pt.start * Ct, jt = (Pt.start + Pt.count) * Ct;
      J !== null && (kt = Math.max(kt, J.start * Ct), jt = Math.min(jt, (J.start + J.count) * Ct)), _t !== null ? (kt = Math.max(kt, 0), jt = Math.min(jt, _t.count)) : Et != null && (kt = Math.max(kt, 0), jt = Math.min(jt, Et.count));
      const me = jt - kt;
      if (me < 0 || me === 1 / 0) return;
      ie.setup(I, z, ht, B, _t);
      let ue, Wt = mt;
      if (_t !== null && (ue = j.get(_t), Wt = Gt, Wt.setIndex(ue)), I.isMesh)
        z.wireframe === !0 ? (yt.setLineWidth(z.wireframeLinewidth * Bt()), Wt.setMode(R.LINES)) : Wt.setMode(R.TRIANGLES);
      else if (I.isLine) {
        let Tt = z.linewidth;
        Tt === void 0 && (Tt = 1), yt.setLineWidth(Tt * Bt()), I.isLineSegments ? Wt.setMode(R.LINES) : I.isLineLoop ? Wt.setMode(R.LINE_LOOP) : Wt.setMode(R.LINE_STRIP);
      } else I.isPoints ? Wt.setMode(R.POINTS) : I.isSprite && Wt.setMode(R.TRIANGLES);
      if (I.isBatchedMesh)
        if (I._multiDrawInstances !== null)
          Wt.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
        else if (zt.get("WEBGL_multi_draw"))
          Wt.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
        else {
          const Tt = I._multiDrawStarts, Ee = I._multiDrawCounts, Zt = I._multiDrawCount, en = _t ? j.get(_t).bytesPerElement : 1, Ni = Mt.get(z).currentProgram.getUniforms();
          for (let Ve = 0; Ve < Zt; Ve++)
            Ni.setValue(R, "_gl_DrawID", Ve), Wt.render(Tt[Ve] / en, Ee[Ve]);
        }
      else if (I.isInstancedMesh)
        Wt.renderInstances(kt, me, I.count);
      else if (B.isInstancedBufferGeometry) {
        const Tt = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, Ee = Math.min(B.instanceCount, Tt);
        Wt.renderInstances(kt, me, Ee);
      } else
        Wt.render(kt, me);
    };
    function $t(x, U, B) {
      x.transparent === !0 && x.side === dn && x.forceSinglePass === !1 ? (x.side = ze, x.needsUpdate = !0, qs(x, U, B), x.side = si, x.needsUpdate = !0, qs(x, U, B), x.side = dn) : qs(x, U, B);
    }
    this.compile = function(x, U, B = null) {
      B === null && (B = x), h = Vt.get(B), h.init(U), T.push(h), B.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), x !== B && x.traverseVisible(function(I) {
        I.isLight && I.layers.test(U.layers) && (h.pushLight(I), I.castShadow && h.pushShadow(I));
      }), h.setupLights();
      const z = /* @__PURE__ */ new Set();
      return x.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite))
          return;
        const J = I.material;
        if (J)
          if (Array.isArray(J))
            for (let st = 0; st < J.length; st++) {
              const ht = J[st];
              $t(ht, B, I), z.add(ht);
            }
          else
            $t(J, B, I), z.add(J);
      }), T.pop(), h = null, z;
    }, this.compileAsync = function(x, U, B = null) {
      const z = this.compile(x, U, B);
      return new Promise((I) => {
        function J() {
          if (z.forEach(function(st) {
            Mt.get(st).currentProgram.isReady() && z.delete(st);
          }), z.size === 0) {
            I(x);
            return;
          }
          setTimeout(J, 10);
        }
        zt.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10);
      });
    };
    let tn = null;
    function bn(x) {
      tn && tn(x);
    }
    function Yo() {
      li.stop();
    }
    function qo() {
      li.start();
    }
    const li = new kc();
    li.setAnimationLoop(bn), typeof self < "u" && li.setContext(self), this.setAnimationLoop = function(x) {
      tn = x, V.setAnimationLoop(x), x === null ? li.stop() : li.start();
    }, V.addEventListener("sessionstart", Yo), V.addEventListener("sessionend", qo), this.render = function(x, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (N === !0) return;
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), V.enabled === !0 && V.isPresenting === !0 && (V.cameraAutoUpdate === !0 && V.updateCamera(U), U = V.getCamera()), x.isScene === !0 && x.onBeforeRender(y, x, U, F), h = Vt.get(x, T.length), h.init(U), T.push(h), At.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), q.setFromProjectionMatrix(At), gt = this.localClippingEnabled, et = Q.init(this.clippingPlanes, gt), m = ft.get(x, A.length), m.init(), A.push(m), V.enabled === !0 && V.isPresenting === !0) {
        const J = y.xr.getDepthSensingMesh();
        J !== null && jr(J, U, -1 / 0, y.sortObjects);
      }
      jr(x, U, 0, y.sortObjects), m.finish(), y.sortObjects === !0 && m.sort(rt, dt), ce = V.enabled === !1 || V.isPresenting === !1 || V.hasDepthSensing() === !1, ce && bt.addToRenderList(m, x), this.info.render.frame++, et === !0 && Q.beginShadows();
      const B = h.state.shadowsArray;
      pt.render(B, x, U), et === !0 && Q.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const z = m.opaque, I = m.transmissive;
      if (h.setupLights(), U.isArrayCamera) {
        const J = U.cameras;
        if (I.length > 0)
          for (let st = 0, ht = J.length; st < ht; st++) {
            const _t = J[st];
            Zo(z, I, x, _t);
          }
        ce && bt.render(x);
        for (let st = 0, ht = J.length; st < ht; st++) {
          const _t = J[st];
          jo(m, x, _t, _t.viewport);
        }
      } else
        I.length > 0 && Zo(z, I, x, U), ce && bt.render(x), jo(m, x, U);
      F !== null && P === 0 && (E.updateMultisampleRenderTarget(F), E.updateRenderTargetMipmap(F)), x.isScene === !0 && x.onAfterRender(y, x, U), ie.resetDefaultState(), S = -1, M = null, T.pop(), T.length > 0 ? (h = T[T.length - 1], et === !0 && Q.setGlobalState(y.clippingPlanes, h.state.camera)) : h = null, A.pop(), A.length > 0 ? m = A[A.length - 1] : m = null;
    };
    function jr(x, U, B, z) {
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
            z && wt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(At);
            const st = Y.update(x), ht = x.material;
            ht.visible && m.push(x, st, ht, B, wt.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || q.intersectsObject(x))) {
          const st = Y.update(x), ht = x.material;
          if (z && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), wt.copy(x.boundingSphere.center)) : (st.boundingSphere === null && st.computeBoundingSphere(), wt.copy(st.boundingSphere.center)), wt.applyMatrix4(x.matrixWorld).applyMatrix4(At)), Array.isArray(ht)) {
            const _t = st.groups;
            for (let Ct = 0, Pt = _t.length; Ct < Pt; Ct++) {
              const Et = _t[Ct], kt = ht[Et.materialIndex];
              kt && kt.visible && m.push(x, st, kt, B, wt.z, Et);
            }
          } else ht.visible && m.push(x, st, ht, B, wt.z, null);
        }
      }
      const J = x.children;
      for (let st = 0, ht = J.length; st < ht; st++)
        jr(J[st], U, B, z);
    }
    function jo(x, U, B, z) {
      const I = x.opaque, J = x.transmissive, st = x.transparent;
      h.setupLightsView(B), et === !0 && Q.setGlobalState(y.clippingPlanes, B), z && yt.viewport(D.copy(z)), I.length > 0 && Ys(I, U, B), J.length > 0 && Ys(J, U, B), st.length > 0 && Ys(st, U, B), yt.buffers.depth.setTest(!0), yt.buffers.depth.setMask(!0), yt.buffers.color.setMask(!0), yt.setPolygonOffset(!1);
    }
    function Zo(x, U, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null)
        return;
      h.state.transmissionRenderTarget[z.id] === void 0 && (h.state.transmissionRenderTarget[z.id] = new Ci(1, 1, {
        generateMipmaps: !0,
        type: zt.has("EXT_color_buffer_half_float") || zt.has("EXT_color_buffer_float") ? Gs : Wn,
        minFilter: Mi,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Xt.workingColorSpace
      }));
      const J = h.state.transmissionRenderTarget[z.id], st = z.viewport || D;
      J.setSize(st.z * y.transmissionResolutionScale, st.w * y.transmissionResolutionScale);
      const ht = y.getRenderTarget();
      y.setRenderTarget(J), y.getClearColor(W), K = y.getClearAlpha(), K < 1 && y.setClearColor(16777215, 0.5), y.clear(), ce && bt.render(B);
      const _t = y.toneMapping;
      y.toneMapping = ii;
      const Ct = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), h.setupLightsView(z), et === !0 && Q.setGlobalState(y.clippingPlanes, z), Ys(x, B, z), E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J), zt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Pt = !1;
        for (let Et = 0, kt = U.length; Et < kt; Et++) {
          const jt = U[Et], me = jt.object, ue = jt.geometry, Wt = jt.material, Tt = jt.group;
          if (Wt.side === dn && me.layers.test(z.layers)) {
            const Ee = Wt.side;
            Wt.side = ze, Wt.needsUpdate = !0, Ko(me, B, z, ue, Wt, Tt), Wt.side = Ee, Wt.needsUpdate = !0, Pt = !0;
          }
        }
        Pt === !0 && (E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J));
      }
      y.setRenderTarget(ht), y.setClearColor(W, K), Ct !== void 0 && (z.viewport = Ct), y.toneMapping = _t;
    }
    function Ys(x, U, B) {
      const z = U.isScene === !0 ? U.overrideMaterial : null;
      for (let I = 0, J = x.length; I < J; I++) {
        const st = x[I], ht = st.object, _t = st.geometry, Ct = z === null ? st.material : z, Pt = st.group;
        ht.layers.test(B.layers) && Ko(ht, U, B, _t, Ct, Pt);
      }
    }
    function Ko(x, U, B, z, I, J) {
      x.onBeforeRender(y, U, B, z, I, J), x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), I.onBeforeRender(y, U, B, z, x, J), I.transparent === !0 && I.side === dn && I.forceSinglePass === !1 ? (I.side = ze, I.needsUpdate = !0, y.renderBufferDirect(B, U, z, I, x, J), I.side = si, I.needsUpdate = !0, y.renderBufferDirect(B, U, z, I, x, J), I.side = dn) : y.renderBufferDirect(B, U, z, I, x, J), x.onAfterRender(y, U, B, z, I, J);
    }
    function qs(x, U, B) {
      U.isScene !== !0 && (U = de);
      const z = Mt.get(x), I = h.state.lights, J = h.state.shadowsArray, st = I.state.version, ht = vt.getParameters(x, I.state, J, U, B), _t = vt.getProgramCacheKey(ht);
      let Ct = z.programs;
      z.environment = x.isMeshStandardMaterial ? U.environment : null, z.fog = U.fog, z.envMap = (x.isMeshStandardMaterial ? O : g).get(x.envMap || z.environment), z.envMapRotation = z.environment !== null && x.envMap === null ? U.environmentRotation : x.envMapRotation, Ct === void 0 && (x.addEventListener("dispose", Lt), Ct = /* @__PURE__ */ new Map(), z.programs = Ct);
      let Pt = Ct.get(_t);
      if (Pt !== void 0) {
        if (z.currentProgram === Pt && z.lightsStateVersion === st)
          return Jo(x, ht), Pt;
      } else
        ht.uniforms = vt.getUniforms(x), x.onBeforeCompile(ht, y), Pt = vt.acquireProgram(ht, _t), Ct.set(_t, Pt), z.uniforms = ht.uniforms;
      const Et = z.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Et.clippingPlanes = Q.uniform), Jo(x, ht), z.needsLights = ph(x), z.lightsStateVersion = st, z.needsLights && (Et.ambientLightColor.value = I.state.ambient, Et.lightProbe.value = I.state.probe, Et.directionalLights.value = I.state.directional, Et.directionalLightShadows.value = I.state.directionalShadow, Et.spotLights.value = I.state.spot, Et.spotLightShadows.value = I.state.spotShadow, Et.rectAreaLights.value = I.state.rectArea, Et.ltc_1.value = I.state.rectAreaLTC1, Et.ltc_2.value = I.state.rectAreaLTC2, Et.pointLights.value = I.state.point, Et.pointLightShadows.value = I.state.pointShadow, Et.hemisphereLights.value = I.state.hemi, Et.directionalShadowMap.value = I.state.directionalShadowMap, Et.directionalShadowMatrix.value = I.state.directionalShadowMatrix, Et.spotShadowMap.value = I.state.spotShadowMap, Et.spotLightMatrix.value = I.state.spotLightMatrix, Et.spotLightMap.value = I.state.spotLightMap, Et.pointShadowMap.value = I.state.pointShadowMap, Et.pointShadowMatrix.value = I.state.pointShadowMatrix), z.currentProgram = Pt, z.uniformsList = null, Pt;
    }
    function $o(x) {
      if (x.uniformsList === null) {
        const U = x.currentProgram.getUniforms();
        x.uniformsList = Cr.seqWithValue(U.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Jo(x, U) {
      const B = Mt.get(x);
      B.outputColorSpace = U.outputColorSpace, B.batching = U.batching, B.batchingColor = U.batchingColor, B.instancing = U.instancing, B.instancingColor = U.instancingColor, B.instancingMorph = U.instancingMorph, B.skinning = U.skinning, B.morphTargets = U.morphTargets, B.morphNormals = U.morphNormals, B.morphColors = U.morphColors, B.morphTargetsCount = U.morphTargetsCount, B.numClippingPlanes = U.numClippingPlanes, B.numIntersection = U.numClipIntersection, B.vertexAlphas = U.vertexAlphas, B.vertexTangents = U.vertexTangents, B.toneMapping = U.toneMapping;
    }
    function dh(x, U, B, z, I) {
      U.isScene !== !0 && (U = de), E.resetTextureUnits();
      const J = U.fog, st = z.isMeshStandardMaterial ? U.environment : null, ht = F === null ? y.outputColorSpace : F.isXRRenderTarget === !0 ? F.texture.colorSpace : ys, _t = (z.isMeshStandardMaterial ? O : g).get(z.envMap || st), Ct = z.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Pt = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Et = !!B.morphAttributes.position, kt = !!B.morphAttributes.normal, jt = !!B.morphAttributes.color;
      let me = ii;
      z.toneMapped && (F === null || F.isXRRenderTarget === !0) && (me = y.toneMapping);
      const ue = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Wt = ue !== void 0 ? ue.length : 0, Tt = Mt.get(z), Ee = h.state.lights;
      if (et === !0 && (gt === !0 || x !== M)) {
        const Le = x === M && z.id === S;
        Q.setState(z, x, Le);
      }
      let Zt = !1;
      z.version === Tt.__version ? (Tt.needsLights && Tt.lightsStateVersion !== Ee.state.version || Tt.outputColorSpace !== ht || I.isBatchedMesh && Tt.batching === !1 || !I.isBatchedMesh && Tt.batching === !0 || I.isBatchedMesh && Tt.batchingColor === !0 && I.colorTexture === null || I.isBatchedMesh && Tt.batchingColor === !1 && I.colorTexture !== null || I.isInstancedMesh && Tt.instancing === !1 || !I.isInstancedMesh && Tt.instancing === !0 || I.isSkinnedMesh && Tt.skinning === !1 || !I.isSkinnedMesh && Tt.skinning === !0 || I.isInstancedMesh && Tt.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && Tt.instancingColor === !1 && I.instanceColor !== null || I.isInstancedMesh && Tt.instancingMorph === !0 && I.morphTexture === null || I.isInstancedMesh && Tt.instancingMorph === !1 && I.morphTexture !== null || Tt.envMap !== _t || z.fog === !0 && Tt.fog !== J || Tt.numClippingPlanes !== void 0 && (Tt.numClippingPlanes !== Q.numPlanes || Tt.numIntersection !== Q.numIntersection) || Tt.vertexAlphas !== Ct || Tt.vertexTangents !== Pt || Tt.morphTargets !== Et || Tt.morphNormals !== kt || Tt.morphColors !== jt || Tt.toneMapping !== me || Tt.morphTargetsCount !== Wt) && (Zt = !0) : (Zt = !0, Tt.__version = z.version);
      let en = Tt.currentProgram;
      Zt === !0 && (en = qs(z, U, I));
      let Ni = !1, Ve = !1, As = !1;
      const oe = en.getUniforms(), qe = Tt.uniforms;
      if (yt.useProgram(en.program) && (Ni = !0, Ve = !0, As = !0), z.id !== S && (S = z.id, Ve = !0), Ni || M !== x) {
        yt.buffers.depth.getReversed() ? (at.copy(x.projectionMatrix), Eu(at), Tu(at), oe.setValue(R, "projectionMatrix", at)) : oe.setValue(R, "projectionMatrix", x.projectionMatrix), oe.setValue(R, "viewMatrix", x.matrixWorldInverse);
        const Ne = oe.map.cameraPosition;
        Ne !== void 0 && Ne.setValue(R, Yt.setFromMatrixPosition(x.matrixWorld)), Ht.logarithmicDepthBuffer && oe.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(x.far + 1) / Math.LN2)
        ), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && oe.setValue(R, "isOrthographic", x.isOrthographicCamera === !0), M !== x && (M = x, Ve = !0, As = !0);
      }
      if (I.isSkinnedMesh) {
        oe.setOptional(R, I, "bindMatrix"), oe.setOptional(R, I, "bindMatrixInverse");
        const Le = I.skeleton;
        Le && (Le.boneTexture === null && Le.computeBoneTexture(), oe.setValue(R, "boneTexture", Le.boneTexture, E));
      }
      I.isBatchedMesh && (oe.setOptional(R, I, "batchingTexture"), oe.setValue(R, "batchingTexture", I._matricesTexture, E), oe.setOptional(R, I, "batchingIdTexture"), oe.setValue(R, "batchingIdTexture", I._indirectTexture, E), oe.setOptional(R, I, "batchingColorTexture"), I._colorsTexture !== null && oe.setValue(R, "batchingColorTexture", I._colorsTexture, E));
      const je = B.morphAttributes;
      if ((je.position !== void 0 || je.normal !== void 0 || je.color !== void 0) && Rt.update(I, B, en), (Ve || Tt.receiveShadow !== I.receiveShadow) && (Tt.receiveShadow = I.receiveShadow, oe.setValue(R, "receiveShadow", I.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (qe.envMap.value = _t, qe.flipEnvMap.value = _t.isCubeTexture && _t.isRenderTargetTexture === !1 ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && U.environment !== null && (qe.envMapIntensity.value = U.environmentIntensity), Ve && (oe.setValue(R, "toneMappingExposure", y.toneMappingExposure), Tt.needsLights && fh(qe, As), J && z.fog === !0 && ot.refreshFogUniforms(qe, J), ot.refreshMaterialUniforms(qe, z, k, tt, h.state.transmissionRenderTarget[x.id]), Cr.upload(R, $o(Tt), qe, E)), z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (Cr.upload(R, $o(Tt), qe, E), z.uniformsNeedUpdate = !1), z.isSpriteMaterial && oe.setValue(R, "center", I.center), oe.setValue(R, "modelViewMatrix", I.modelViewMatrix), oe.setValue(R, "normalMatrix", I.normalMatrix), oe.setValue(R, "modelMatrix", I.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Le = z.uniformsGroups;
        for (let Ne = 0, Zr = Le.length; Ne < Zr; Ne++) {
          const ci = Le[Ne];
          L.update(ci, en), L.bind(ci, en);
        }
      }
      return en;
    }
    function fh(x, U) {
      x.ambientLightColor.needsUpdate = U, x.lightProbe.needsUpdate = U, x.directionalLights.needsUpdate = U, x.directionalLightShadows.needsUpdate = U, x.pointLights.needsUpdate = U, x.pointLightShadows.needsUpdate = U, x.spotLights.needsUpdate = U, x.spotLightShadows.needsUpdate = U, x.rectAreaLights.needsUpdate = U, x.hemisphereLights.needsUpdate = U;
    }
    function ph(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return P;
    }, this.getRenderTarget = function() {
      return F;
    }, this.setRenderTargetTextures = function(x, U, B) {
      Mt.get(x.texture).__webglTexture = U, Mt.get(x.depthTexture).__webglTexture = B;
      const z = Mt.get(x);
      z.__hasExternalTextures = !0, z.__autoAllocateDepthBuffer = B === void 0, z.__autoAllocateDepthBuffer || zt.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(x, U) {
      const B = Mt.get(x);
      B.__webglFramebuffer = U, B.__useDefaultFramebuffer = U === void 0;
    };
    const mh = R.createFramebuffer();
    this.setRenderTarget = function(x, U = 0, B = 0) {
      F = x, C = U, P = B;
      let z = !0, I = null, J = !1, st = !1;
      if (x) {
        const _t = Mt.get(x);
        if (_t.__useDefaultFramebuffer !== void 0)
          yt.bindFramebuffer(R.FRAMEBUFFER, null), z = !1;
        else if (_t.__webglFramebuffer === void 0)
          E.setupRenderTarget(x);
        else if (_t.__hasExternalTextures)
          E.rebindTextures(x, Mt.get(x.texture).__webglTexture, Mt.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Et = x.depthTexture;
          if (_t.__boundDepthTexture !== Et) {
            if (Et !== null && Mt.has(Et) && (x.width !== Et.image.width || x.height !== Et.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(x);
          }
        }
        const Ct = x.texture;
        (Ct.isData3DTexture || Ct.isDataArrayTexture || Ct.isCompressedArrayTexture) && (st = !0);
        const Pt = Mt.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Pt[U]) ? I = Pt[U][B] : I = Pt[U], J = !0) : x.samples > 0 && E.useMultisampledRTT(x) === !1 ? I = Mt.get(x).__webglMultisampledFramebuffer : Array.isArray(Pt) ? I = Pt[B] : I = Pt, D.copy(x.viewport), G.copy(x.scissor), H = x.scissorTest;
      } else
        D.copy(St).multiplyScalar(k).floor(), G.copy(Ot).multiplyScalar(k).floor(), H = ne;
      if (B !== 0 && (I = mh), yt.bindFramebuffer(R.FRAMEBUFFER, I) && z && yt.drawBuffers(x, I), yt.viewport(D), yt.scissor(G), yt.setScissorTest(H), J) {
        const _t = Mt.get(x.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + U, _t.__webglTexture, B);
      } else if (st) {
        const _t = Mt.get(x.texture), Ct = U;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, _t.__webglTexture, B, Ct);
      } else if (x !== null && B !== 0) {
        const _t = Mt.get(x.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, _t.__webglTexture, B);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(x, U, B, z, I, J, st) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ht = Mt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && st !== void 0 && (ht = ht[st]), ht) {
        yt.bindFramebuffer(R.FRAMEBUFFER, ht);
        try {
          const _t = x.texture, Ct = _t.format, Pt = _t.type;
          if (!Ht.textureFormatReadable(Ct)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ht.textureTypeReadable(Pt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= x.width - z && B >= 0 && B <= x.height - I && R.readPixels(U, B, z, I, Nt.convert(Ct), Nt.convert(Pt), J);
        } finally {
          const _t = F !== null ? Mt.get(F).__webglFramebuffer : null;
          yt.bindFramebuffer(R.FRAMEBUFFER, _t);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, U, B, z, I, J, st) {
      if (!(x && x.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ht = Mt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && st !== void 0 && (ht = ht[st]), ht) {
        const _t = x.texture, Ct = _t.format, Pt = _t.type;
        if (!Ht.textureFormatReadable(Ct))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ht.textureTypeReadable(Pt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (U >= 0 && U <= x.width - z && B >= 0 && B <= x.height - I) {
          yt.bindFramebuffer(R.FRAMEBUFFER, ht);
          const Et = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, Et), R.bufferData(R.PIXEL_PACK_BUFFER, J.byteLength, R.STREAM_READ), R.readPixels(U, B, z, I, Nt.convert(Ct), Nt.convert(Pt), 0);
          const kt = F !== null ? Mt.get(F).__webglFramebuffer : null;
          yt.bindFramebuffer(R.FRAMEBUFFER, kt);
          const jt = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await yu(R, jt, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Et), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, J), R.deleteBuffer(Et), R.deleteSync(jt), J;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(x, U = null, B = 0) {
      x.isTexture !== !0 && ($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."), U = arguments[0] || null, x = arguments[1]);
      const z = Math.pow(2, -B), I = Math.floor(x.image.width * z), J = Math.floor(x.image.height * z), st = U !== null ? U.x : 0, ht = U !== null ? U.y : 0;
      E.setTexture2D(x, 0), R.copyTexSubImage2D(R.TEXTURE_2D, B, 0, 0, st, ht, I, J), yt.unbindTexture();
    };
    const _h = R.createFramebuffer(), gh = R.createFramebuffer();
    this.copyTextureToTexture = function(x, U, B = null, z = null, I = 0, J = null) {
      x.isTexture !== !0 && ($i("WebGLRenderer: copyTextureToTexture function signature has changed."), z = arguments[0] || null, x = arguments[1], U = arguments[2], J = arguments[3] || 0, B = null), J === null && (I !== 0 ? ($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), J = I, I = 0) : J = 0);
      let st, ht, _t, Ct, Pt, Et, kt, jt, me;
      const ue = x.isCompressedTexture ? x.mipmaps[J] : x.image;
      if (B !== null)
        st = B.max.x - B.min.x, ht = B.max.y - B.min.y, _t = B.isBox3 ? B.max.z - B.min.z : 1, Ct = B.min.x, Pt = B.min.y, Et = B.isBox3 ? B.min.z : 0;
      else {
        const je = Math.pow(2, -I);
        st = Math.floor(ue.width * je), ht = Math.floor(ue.height * je), x.isDataArrayTexture ? _t = ue.depth : x.isData3DTexture ? _t = Math.floor(ue.depth * je) : _t = 1, Ct = 0, Pt = 0, Et = 0;
      }
      z !== null ? (kt = z.x, jt = z.y, me = z.z) : (kt = 0, jt = 0, me = 0);
      const Wt = Nt.convert(U.format), Tt = Nt.convert(U.type);
      let Ee;
      U.isData3DTexture ? (E.setTexture3D(U, 0), Ee = R.TEXTURE_3D) : U.isDataArrayTexture || U.isCompressedArrayTexture ? (E.setTexture2DArray(U, 0), Ee = R.TEXTURE_2D_ARRAY) : (E.setTexture2D(U, 0), Ee = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, U.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Zt = R.getParameter(R.UNPACK_ROW_LENGTH), en = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Ni = R.getParameter(R.UNPACK_SKIP_PIXELS), Ve = R.getParameter(R.UNPACK_SKIP_ROWS), As = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ue.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ue.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ct), R.pixelStorei(R.UNPACK_SKIP_ROWS, Pt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Et);
      const oe = x.isDataArrayTexture || x.isData3DTexture, qe = U.isDataArrayTexture || U.isData3DTexture;
      if (x.isDepthTexture) {
        const je = Mt.get(x), Le = Mt.get(U), Ne = Mt.get(je.__renderTarget), Zr = Mt.get(Le.__renderTarget);
        yt.bindFramebuffer(R.READ_FRAMEBUFFER, Ne.__webglFramebuffer), yt.bindFramebuffer(R.DRAW_FRAMEBUFFER, Zr.__webglFramebuffer);
        for (let ci = 0; ci < _t; ci++)
          oe && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Mt.get(x).__webglTexture, I, Et + ci), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Mt.get(U).__webglTexture, J, me + ci)), R.blitFramebuffer(Ct, Pt, st, ht, kt, jt, st, ht, R.DEPTH_BUFFER_BIT, R.NEAREST);
        yt.bindFramebuffer(R.READ_FRAMEBUFFER, null), yt.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || x.isRenderTargetTexture || Mt.has(x)) {
        const je = Mt.get(x), Le = Mt.get(U);
        yt.bindFramebuffer(R.READ_FRAMEBUFFER, _h), yt.bindFramebuffer(R.DRAW_FRAMEBUFFER, gh);
        for (let Ne = 0; Ne < _t; Ne++)
          oe ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, je.__webglTexture, I, Et + Ne) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, je.__webglTexture, I), qe ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Le.__webglTexture, J, me + Ne) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Le.__webglTexture, J), I !== 0 ? R.blitFramebuffer(Ct, Pt, st, ht, kt, jt, st, ht, R.COLOR_BUFFER_BIT, R.NEAREST) : qe ? R.copyTexSubImage3D(Ee, J, kt, jt, me + Ne, Ct, Pt, st, ht) : R.copyTexSubImage2D(Ee, J, kt, jt, Ct, Pt, st, ht);
        yt.bindFramebuffer(R.READ_FRAMEBUFFER, null), yt.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else
        qe ? x.isDataTexture || x.isData3DTexture ? R.texSubImage3D(Ee, J, kt, jt, me, st, ht, _t, Wt, Tt, ue.data) : U.isCompressedArrayTexture ? R.compressedTexSubImage3D(Ee, J, kt, jt, me, st, ht, _t, Wt, ue.data) : R.texSubImage3D(Ee, J, kt, jt, me, st, ht, _t, Wt, Tt, ue) : x.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, J, kt, jt, st, ht, Wt, Tt, ue.data) : x.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, J, kt, jt, ue.width, ue.height, Wt, ue.data) : R.texSubImage2D(R.TEXTURE_2D, J, kt, jt, st, ht, Wt, Tt, ue);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, Zt), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, en), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Ni), R.pixelStorei(R.UNPACK_SKIP_ROWS, Ve), R.pixelStorei(R.UNPACK_SKIP_IMAGES, As), J === 0 && U.generateMipmaps && R.generateMipmap(Ee), yt.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, U, B = null, z = null, I = 0) {
      return x.isTexture !== !0 && ($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."), B = arguments[0] || null, z = arguments[1] || null, x = arguments[2], U = arguments[3], I = arguments[4] || 0), $i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, U, B, z, I);
    }, this.initRenderTarget = function(x) {
      Mt.get(x).__webglFramebuffer === void 0 && E.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? E.setTextureCube(x, 0) : x.isData3DTexture ? E.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? E.setTexture2DArray(x, 0) : E.setTexture2D(x, 0), yt.unbindTexture();
    }, this.resetState = function() {
      C = 0, P = 0, F = null, yt.reset(), ie.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Gn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorspace = Xt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Xt._getUnpackColorSpace();
  }
}
const nc = { type: "change" }, Wo = { type: "start" }, jc = { type: "end" }, xr = new zo(), ic = new Ln(), X_ = Math.cos(70 * Cc.DEG2RAD), xe = new w(), Fe = 2 * Math.PI, ee = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, Ca = 1e-6;
class Y_ extends od {
  constructor(t, e = null) {
    super(t, e), this.state = ee.NONE, this.enabled = !0, this.target = new w(), this.cursor = new w(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ts.ROTATE, MIDDLE: ts.DOLLY, RIGHT: ts.PAN }, this.touches = { ONE: Ji.ROTATE, TWO: Ji.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new w(), this._lastQuaternion = new Pi(), this._lastTargetPosition = new w(), this._quat = new Pi().setFromUnitVectors(t.up, new w(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Rl(), this._sphericalDelta = new Rl(), this._scale = 1, this._panOffset = new w(), this._rotateStart = new Dt(), this._rotateEnd = new Dt(), this._rotateDelta = new Dt(), this._panStart = new Dt(), this._panEnd = new Dt(), this._panDelta = new Dt(), this._dollyStart = new Dt(), this._dollyEnd = new Dt(), this._dollyDelta = new Dt(), this._dollyDirection = new w(), this._mouse = new Dt(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = j_.bind(this), this._onPointerDown = q_.bind(this), this._onPointerUp = Z_.bind(this), this._onContextMenu = ng.bind(this), this._onMouseWheel = J_.bind(this), this._onKeyDown = Q_.bind(this), this._onTouchStart = tg.bind(this), this._onTouchMove = eg.bind(this), this._onMouseDown = K_.bind(this), this._onMouseMove = $_.bind(this), this._interceptControlDown = ig.bind(this), this._interceptControlUp = sg.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(nc), this.update(), this.state = ee.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    xe.copy(e).sub(this.target), xe.applyQuaternion(this._quat), this._spherical.setFromVector3(xe), this.autoRotate && this.state === ee.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
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
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (xr.origin.copy(this.object.position), xr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(xr.direction)) < X_ ? this.object.lookAt(this.target) : (ic.setFromNormalAndCoplanarPoint(this.object.up, this.target), xr.intersectPlane(ic, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > Ca || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Ca || this._lastTargetPosition.distanceToSquared(this.target) > Ca ? (this.dispatchEvent(nc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
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
function q_(i) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function j_(i) {
  this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function Z_(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(jc), this.state = ee.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function K_(i) {
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
    case ts.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(i), this.state = ee.DOLLY;
      break;
    case ts.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = ee.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = ee.ROTATE;
      }
      break;
    case ts.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(i), this.state = ee.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(i), this.state = ee.PAN;
      }
      break;
    default:
      this.state = ee.NONE;
  }
  this.state !== ee.NONE && this.dispatchEvent(Wo);
}
function $_(i) {
  switch (this.state) {
    case ee.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(i);
      break;
    case ee.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(i);
      break;
    case ee.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function J_(i) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== ee.NONE || (i.preventDefault(), this.dispatchEvent(Wo), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(jc));
}
function Q_(i) {
  this.enabled !== !1 && this._handleKeyDown(i);
}
function tg(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ji.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(i), this.state = ee.TOUCH_ROTATE;
          break;
        case Ji.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(i), this.state = ee.TOUCH_PAN;
          break;
        default:
          this.state = ee.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ji.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(i), this.state = ee.TOUCH_DOLLY_PAN;
          break;
        case Ji.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(i), this.state = ee.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = ee.NONE;
      }
      break;
    default:
      this.state = ee.NONE;
  }
  this.state !== ee.NONE && this.dispatchEvent(Wo);
}
function eg(i) {
  switch (this._trackPointer(i), this.state) {
    case ee.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case ee.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case ee.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case ee.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = ee.NONE;
  }
}
function ng(i) {
  this.enabled !== !1 && i.preventDefault();
}
function ig(i) {
  i.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function sg(i) {
  i.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const sc = new ai(), Mr = new w();
class Zc extends rd {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const t = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], e = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new pe(t, 3)), this.setAttribute("uv", new pe(e, 2));
  }
  applyMatrix4(t) {
    const e = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return e !== void 0 && (e.applyMatrix4(t), n.applyMatrix4(t), e.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(t) {
    let e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    const n = new yo(e, 6, 1);
    return this.setAttribute("instanceStart", new ei(n, 3, 0)), this.setAttribute("instanceEnd", new ei(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(t) {
    let e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    const n = new yo(e, 6, 1);
    return this.setAttribute("instanceColorStart", new ei(n, 3, 0)), this.setAttribute("instanceColorEnd", new ei(n, 3, 3)), this;
  }
  fromWireframeGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  fromEdgesGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  fromMesh(t) {
    return this.fromWireframeGeometry(new ed(t.geometry)), this;
  }
  fromLineSegments(t) {
    const e = t.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ai());
    const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    t !== void 0 && e !== void 0 && (this.boundingBox.setFromBufferAttribute(t), sc.setFromBufferAttribute(e), this.boundingBox.union(sc));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ii()), this.boundingBox === null && this.computeBoundingBox();
    const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    if (t !== void 0 && e !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++)
        Mr.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(Mr)), Mr.fromBufferAttribute(e, r), s = Math.max(s, n.distanceToSquared(Mr));
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
  applyMatrix(t) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(t);
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
  uniforms: Ho.merge([
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
class qr extends Yn {
  constructor(t) {
    super({
      type: "LineMaterial",
      uniforms: Ho.clone(Be.line.uniforms),
      vertexShader: Be.line.vertexShader,
      fragmentShader: Be.line.fragmentShader,
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.setValues(t);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(t) {
    this.uniforms.diffuse.value = t;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(t) {
    t === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(t) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = t);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(t) {
    t === !0 !== this.dashed && (this.needsUpdate = !0), t === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(t) {
    this.uniforms.dashScale.value = t;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(t) {
    this.uniforms.dashSize.value = t;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(t) {
    this.uniforms.dashOffset.value = t;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(t) {
    this.uniforms.gapSize.value = t;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(t) {
    this.uniforms && (this.uniforms.opacity.value = t);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(t) {
    this.uniforms.resolution.value.copy(t);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(t) {
    this.defines && (t === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), t === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
}
const Pa = new se(), rc = new w(), ac = new w(), Te = new se(), be = new se(), vn = new se(), Da = new w(), La = new ae(), Ae = new Vo(), oc = new w(), Sr = new ai(), yr = new Ii(), xn = new se();
let En, wi;
function lc(i, t, e) {
  return xn.set(0, 0, -t, 1).applyMatrix4(i.projectionMatrix), xn.multiplyScalar(1 / xn.w), xn.x = wi / e.width, xn.y = wi / e.height, xn.applyMatrix4(i.projectionMatrixInverse), xn.multiplyScalar(1 / xn.w), Math.abs(Math.max(xn.x, xn.y));
}
function rg(i, t) {
  const e = i.matrixWorld, n = i.geometry, s = n.attributes.instanceStart, r = n.attributes.instanceEnd, a = Math.min(n.instanceCount, s.count);
  for (let o = 0, l = a; o < l; o++) {
    Ae.start.fromBufferAttribute(s, o), Ae.end.fromBufferAttribute(r, o), Ae.applyMatrix4(e);
    const c = new w(), u = new w();
    En.distanceSqToSegment(Ae.start, Ae.end, u, c), u.distanceTo(c) < wi * 0.5 && t.push({
      point: u,
      pointOnLine: c,
      distance: En.origin.distanceTo(u),
      object: i,
      face: null,
      faceIndex: o,
      uv: null,
      uv1: null
    });
  }
}
function ag(i, t, e) {
  const n = t.projectionMatrix, r = i.material.resolution, a = i.matrixWorld, o = i.geometry, l = o.attributes.instanceStart, c = o.attributes.instanceEnd, u = Math.min(o.instanceCount, l.count), d = -t.near;
  En.at(1, vn), vn.w = 1, vn.applyMatrix4(t.matrixWorldInverse), vn.applyMatrix4(n), vn.multiplyScalar(1 / vn.w), vn.x *= r.x / 2, vn.y *= r.y / 2, vn.z = 0, Da.copy(vn), La.multiplyMatrices(t.matrixWorldInverse, a);
  for (let p = 0, f = u; p < f; p++) {
    if (Te.fromBufferAttribute(l, p), be.fromBufferAttribute(c, p), Te.w = 1, be.w = 1, Te.applyMatrix4(La), be.applyMatrix4(La), Te.z > d && be.z > d)
      continue;
    if (Te.z > d) {
      const T = Te.z - be.z, y = (Te.z - d) / T;
      Te.lerp(be, y);
    } else if (be.z > d) {
      const T = be.z - Te.z, y = (be.z - d) / T;
      be.lerp(Te, y);
    }
    Te.applyMatrix4(n), be.applyMatrix4(n), Te.multiplyScalar(1 / Te.w), be.multiplyScalar(1 / be.w), Te.x *= r.x / 2, Te.y *= r.y / 2, be.x *= r.x / 2, be.y *= r.y / 2, Ae.start.copy(Te), Ae.start.z = 0, Ae.end.copy(be), Ae.end.z = 0;
    const v = Ae.closestPointToPointParameter(Da, !0);
    Ae.at(v, oc);
    const m = Cc.lerp(Te.z, be.z, v), h = m >= -1 && m <= 1, A = Da.distanceTo(oc) < wi * 0.5;
    if (h && A) {
      Ae.start.fromBufferAttribute(l, p), Ae.end.fromBufferAttribute(c, p), Ae.start.applyMatrix4(a), Ae.end.applyMatrix4(a);
      const T = new w(), y = new w();
      En.distanceSqToSegment(Ae.start, Ae.end, y, T), e.push({
        point: y,
        pointOnLine: T,
        distance: En.origin.distanceTo(y),
        object: i,
        face: null,
        faceIndex: p,
        uv: null,
        uv1: null
      });
    }
  }
}
class og extends fe {
  constructor(t = new Zc(), e = new qr({ color: Math.random() * 16777215 })) {
    super(t, e), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const t = this.geometry, e = t.attributes.instanceStart, n = t.attributes.instanceEnd, s = new Float32Array(2 * e.count);
    for (let a = 0, o = 0, l = e.count; a < l; a++, o += 2)
      rc.fromBufferAttribute(e, a), ac.fromBufferAttribute(n, a), s[o] = o === 0 ? 0 : s[o - 1], s[o + 1] = s[o] + rc.distanceTo(ac);
    const r = new yo(s, 2, 1);
    return t.setAttribute("instanceDistanceStart", new ei(r, 1, 0)), t.setAttribute("instanceDistanceEnd", new ei(r, 1, 1)), this;
  }
  raycast(t, e) {
    const n = this.material.worldUnits, s = t.camera;
    s === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const r = t.params.Line2 !== void 0 && t.params.Line2.threshold || 0;
    En = t.ray;
    const a = this.matrixWorld, o = this.geometry, l = this.material;
    wi = l.linewidth + r, o.boundingSphere === null && o.computeBoundingSphere(), yr.copy(o.boundingSphere).applyMatrix4(a);
    let c;
    if (n)
      c = wi * 0.5;
    else {
      const d = Math.max(s.near, yr.distanceToPoint(En.origin));
      c = lc(s, d, l.resolution);
    }
    if (yr.radius += c, En.intersectsSphere(yr) === !1)
      return;
    o.boundingBox === null && o.computeBoundingBox(), Sr.copy(o.boundingBox).applyMatrix4(a);
    let u;
    if (n)
      u = wi * 0.5;
    else {
      const d = Math.max(s.near, Sr.distanceToPoint(En.origin));
      u = lc(s, d, l.resolution);
    }
    Sr.expandByScalar(u), En.intersectsBox(Sr) !== !1 && (n ? rg(this, e) : ag(this, s, e));
  }
  onBeforeRender(t) {
    const e = this.material.uniforms;
    e && e.resolution && (t.getViewport(Pa), this.material.uniforms.resolution.value.set(Pa.z, Pa.w));
  }
}
class Xo extends Zc {
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  setPositions(t) {
    const e = t.length - 3, n = new Float32Array(2 * e);
    for (let s = 0; s < e; s += 3)
      n[2 * s] = t[s], n[2 * s + 1] = t[s + 1], n[2 * s + 2] = t[s + 2], n[2 * s + 3] = t[s + 3], n[2 * s + 4] = t[s + 4], n[2 * s + 5] = t[s + 5];
    return super.setPositions(n), this;
  }
  setColors(t) {
    const e = t.length - 3, n = new Float32Array(2 * e);
    for (let s = 0; s < e; s += 3)
      n[2 * s] = t[s], n[2 * s + 1] = t[s + 1], n[2 * s + 2] = t[s + 2], n[2 * s + 3] = t[s + 3], n[2 * s + 4] = t[s + 4], n[2 * s + 5] = t[s + 5];
    return super.setColors(n), this;
  }
  setFromPoints(t) {
    const e = t.length - 1, n = new Float32Array(6 * e);
    for (let s = 0; s < e; s++)
      n[6 * s] = t[s].x, n[6 * s + 1] = t[s].y, n[6 * s + 2] = t[s].z || 0, n[6 * s + 3] = t[s + 1].x, n[6 * s + 4] = t[s + 1].y, n[6 * s + 5] = t[s + 1].z || 0;
    return super.setPositions(n), this;
  }
  fromLine(t) {
    const e = t.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
}
class Kc extends og {
  constructor(t = new Xo(), e = new qr({ color: Math.random() * 16777215 })) {
    super(t, e), this.isLine2 = !0, this.type = "Line2";
  }
}
class lg extends De {
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
const Ki = new w(), cc = new ae(), hc = new ae(), uc = new w(), dc = new w();
class cg {
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
      _.matrixWorldAutoUpdate === !0 && _.updateMatrixWorld(), v.parent === null && v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(), cc.copy(v.matrixWorldInverse), hc.multiplyMatrices(v.projectionMatrix, cc), u(_, _, v), f(_);
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
        Ki.setFromMatrixPosition(_.matrixWorld), Ki.applyMatrix4(hc);
        const h = Ki.z >= -1 && Ki.z <= 1 && _.layers.test(m.layers) === !0, A = _.element;
        A.style.display = h === !0 ? "" : "none", h === !0 && (_.onBeforeRender(e, v, m), A.style.transform = "translate(" + -100 * _.center.x + "%," + -100 * _.center.y + "%)translate(" + (Ki.x * r + r) + "px," + (-Ki.y * a + a) + "px)", A.parentNode !== l && l.appendChild(A), _.onAfterRender(e, v, m));
        const T = {
          distanceToCameraSquared: d(m, _)
        };
        o.objects.set(_, T);
      }
      for (let h = 0, A = _.children.length; h < A; h++)
        u(_.children[h], v, m);
    }
    function d(_, v) {
      return uc.setFromMatrixPosition(_.matrixWorld), dc.setFromMatrixPosition(v.matrixWorld), uc.distanceToSquared(dc);
    }
    function p(_) {
      const v = [];
      return _.traverseVisible(function(m) {
        m.isCSS2DObject && v.push(m);
      }), v;
    }
    function f(_) {
      const v = p(_).sort(function(h, A) {
        if (h.renderOrder !== A.renderOrder)
          return A.renderOrder - h.renderOrder;
        const T = o.objects.get(h).distanceToCameraSquared, y = o.objects.get(A).distanceToCameraSquared;
        return T - y;
      }), m = v.length;
      for (let h = 0, A = v.length; h < A; h++)
        v[h].element.style.zIndex = m - h;
    }
  }
}
var ss, Un, Ke, ri, To, bo;
class hg {
  constructor(t, e) {
    xt(this, ri);
    xt(this, ss);
    xt(this, Un);
    xt(this, Ke);
    ut(this, ss, t.mesh), ut(this, Un, e), ut(this, Ke, new lg(document.createElement("div"))), b(this, ss).add(b(this, Ke)), e.asTeX ? Kt(this, ri, bo).call(this, this.text) : Kt(this, ri, To).call(this, this.text);
  }
  get mesh() {
    return b(this, Ke);
  }
  get text() {
    return b(this, Un).content ?? b(this, ss).name;
  }
  update(t, e) {
    return b(this, Un).content = t, e !== void 0 && (b(this, Un).asTeX = e), b(this, Un).asTeX ? Kt(this, ri, bo).call(this, t) : Kt(this, ri, To).call(this, t), this;
  }
}
ss = new WeakMap(), Un = new WeakMap(), Ke = new WeakMap(), ri = new WeakSet(), To = function(t) {
  b(this, Ke).element.textContent = t, b(this, Ke).element.style.textAlign = "center", b(this, Ke).center.set(0, 0);
}, bo = function(t) {
  b(this, Ke).element.innerHTML = b(this, Un).converter(t), b(this, Ke).element.classList.add("katex-m-0"), b(this, Ke).center.set(0, 1);
};
var rs, as, an, Si, yi;
class Xs {
  constructor(t, e) {
    xt(this, rs);
    xt(this, as);
    xt(this, an);
    xt(this, Si);
    xt(this, yi);
    ut(this, rs, t), ut(this, as, e), ut(this, yi, {
      opacity: 1,
      color: "#000000"
    });
  }
  get scene() {
    return b(this, rs);
  }
  set scene(t) {
    ut(this, rs, t);
  }
  get name() {
    return b(this, as);
  }
  set name(t) {
    ut(this, as, t);
  }
  get appearance() {
    return b(this, yi);
  }
  set appearance(t) {
    ut(this, yi, t);
  }
  get mesh() {
    return b(this, an);
  }
  set mesh(t) {
    ut(this, an, t);
  }
  get line() {
  }
  get arrow() {
  }
  get label() {
    return b(this, Si);
  }
  update() {
    return this.computed(), this;
  }
  color(t) {
    return b(this, an).traverse((e) => {
      e instanceof fe && e.material.color.set(t);
    }), this;
  }
  dash(t) {
    return b(this, an).traverse((e) => {
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
    return b(this, an).traverse((e) => {
      if (e instanceof fe) {
        if (this.line === void 0)
          return;
        const n = e.material;
        n.linewidth = t;
      }
    }), this;
  }
  fill(t, e) {
    return e === void 0 && (e = b(this, yi).opacity), b(this, an).traverse((n) => {
      if (n instanceof fe) {
        const s = n.material;
        s.color.set(t), s.opacity = e;
      }
    }), this;
  }
  wire(t) {
    return b(this, an).traverse((e) => {
      if (e instanceof fe) {
        const n = e.material;
        n.wireframe = t === void 0 ? !n.wireframe : t;
      }
    }), this;
  }
  addLabel(t, e, n) {
    return b(this, Si) === void 0 ? ut(this, Si, new hg(this, {
      content: t,
      asTeX: e,
      converter: n
    })) : b(this, Si).update(t, e), this;
  }
  hide() {
    return b(this, an).visible = !1, this;
  }
}
rs = new WeakMap(), as = new WeakMap(), an = new WeakMap(), Si = new WeakMap(), yi = new WeakMap();
var In, os, ls, on, Di, $c, Ao;
class Nr extends Xs {
  constructor(e, n, s) {
    super(e, n);
    xt(this, Di);
    xt(this, In);
    xt(this, os);
    // XYZ
    xt(this, ls);
    // XYZ
    xt(this, on);
    return ut(this, os, new w(0, 0, 0)), ut(this, ls, new w(0, 0, 1)), ut(this, In, Object.assign({
      type: "line"
    }, s)), this.appearance = Object.assign(
      {
        color: "black",
        width: 1,
        dashed: !1
      },
      s.appearance
    ), Kt(this, Di, $c).call(this), this;
  }
  get A() {
    return b(this, os);
  }
  get B() {
    return b(this, ls);
  }
  get direction() {
    return this.B.clone().sub(this.A).normalize();
  }
  get config() {
    return b(this, In);
  }
  get line() {
    return this.mesh;
  }
  get math() {
    return new Vo(this.A, this.B);
  }
  computed() {
    var r;
    const e = b(this, In).type, n = new w(), s = new w();
    if (this.config.through)
      n.set(this.config.through.A.x, this.config.through.A.y, this.config.through.A.z), s.set(this.config.through.B.x, this.config.through.B.y, this.config.through.B.z);
    else if (this.config.plane) {
      const a = this.config.plane.normal;
      n.set(this.config.plane.point.x, this.config.plane.point.y, this.config.plane.point.z), s.set(n.x + a.x, n.y + a.y, n.z + a.z);
    } else if (this.config.parallel) {
      const a = this.config.parallel.direction;
      n.set(this.config.parallel.point.x, this.config.parallel.point.y, this.config.parallel.point.z), s.set(n.x + a.x, n.y + a.y, n.z + a.z);
    }
    if (ut(this, os, n.clone()), ut(this, ls, s.clone()), e === "ray" && s.sub(n).normalize().multiplyScalar(1e3), e === "line") {
      const a = s.clone().sub(n).normalize().multiplyScalar(1e3);
      n.sub(a), s.add(a);
    }
    if (e === "vector") {
      b(this, on) || Kt(this, Di, Ao).call(this);
      const a = ((r = b(this, In).arrow) == null ? void 0 : r.length) ?? 0.6;
      b(this, on).translateX(this.B.x), b(this, on).translateY(this.B.y), b(this, on).translateZ(this.B.z), b(this, on).translateOnAxis(this.direction, -a / 2), b(this, on).quaternion.setFromUnitVectors(
        new w(0, 1, 0),
        this.direction
      );
    }
    this.line.geometry.setPositions([n.x, n.y, n.z, s.x, s.y, s.z]), this.line.computeLineDistances();
  }
}
In = new WeakMap(), os = new WeakMap(), ls = new WeakMap(), on = new WeakMap(), Di = new WeakSet(), $c = function() {
  const e = new Xo(), n = new qr({
    color: this.appearance.color,
    linewidth: this.appearance.width,
    vertexColors: !1,
    dashed: !!this.appearance.dashed,
    alphaToCoverage: !0
  });
  this.mesh = new Kc(e, n), this.mesh.scale.set(1, 1, 1), b(this, In).type === "vector" && Kt(this, Di, Ao).call(this), this.scene.add(this.mesh), this.computed();
}, Ao = function() {
  const e = Object.assign({
    width: 0.2,
    length: 0.6
  }, b(this, In).arrow);
  ut(this, on, new fe(
    new Wr(
      e.width,
      e.length,
      16
    ),
    new oi({ color: this.appearance.color })
  )), this.mesh.add(b(this, on));
};
var Mn, Qt, Nn, Or, Jc;
class Fr extends Xs {
  constructor(e, n, s) {
    super(e, n);
    xt(this, Or);
    xt(this, Mn);
    xt(this, Qt);
    xt(this, Nn);
    return ut(this, Qt, s), ut(this, Nn, new Ln()), ut(this, Mn, Object.assign({
      rotate: 0,
      width: 10,
      height: 10
    }, s.shape)), this.appearance = Object.assign(
      {
        opacity: 0.8,
        color: "lightblue"
      },
      s.appearance
    ), Kt(this, Or, Jc).call(this), this;
  }
  get width() {
    return b(this, Mn).width;
  }
  set width(e) {
    b(this, Mn).width = e;
  }
  get height() {
    return b(this, Mn).height;
  }
  set height(e) {
    b(this, Mn).height = e;
  }
  get math() {
    return b(this, Nn);
  }
  computed() {
    var n, s;
    const e = new w();
    if (b(this, Qt).equation) {
      const [r] = b(this, Qt).equation.split("="), a = r.split(/(?=[+|-])/);
      let o = 0, l = 0, c = 0, u = 0;
      a.forEach((f) => {
        f.includes("x") ? o = f === "x" || f === "+x" ? 1 : f === "-x" ? -1 : Number(f.replace("x", "")) : f.includes("y") ? l = f === "y" || f === "+y" ? 1 : f === "-y" ? -1 : Number(f.replace("y", "")) : f.includes("z") ? c = f === "z" || f === "+z" ? 1 : f === "-z" ? -1 : Number(f.replace("z", "")) : u = Number(f);
      });
      let d = new w(0, 0, 0);
      c !== 0 ? d.z = -u / c : l !== 0 ? d.y = -u / l : o !== 0 && (d.x = -u / o);
      const p = new w(o, l, c).normalize();
      b(this, Nn).setFromNormalAndCoplanarPoint(p, d), e.set(d.x, d.y, d.z);
    } else if ((n = b(this, Qt).through) != null && n.A && b(this, Qt).through.B && b(this, Qt).through.C) {
      const r = new w(b(this, Qt).through.A.x, b(this, Qt).through.A.y, b(this, Qt).through.A.z), a = new w(b(this, Qt).through.B.x, b(this, Qt).through.B.y, b(this, Qt).through.B.z), o = new w(b(this, Qt).through.C.x, b(this, Qt).through.C.y, b(this, Qt).through.C.z);
      b(this, Nn).setFromCoplanarPoints(r, a, o), e.set(
        (r.x + a.x + o.x) / 3,
        (r.y + a.y + o.y) / 3,
        (r.z + a.z + o.z) / 3
      );
    } else if ((s = b(this, Qt).fromLine) != null && s.line && b(this, Qt).fromLine.point) {
      const r = b(this, Qt).fromLine.point.clone(), a = b(this, Qt).fromLine.line.clone(), o = new Vo(
        r,
        r.clone().add(a)
      ), l = new w();
      o.delta(l).normalize(), b(this, Nn).setFromNormalAndCoplanarPoint(
        l,
        new w(b(this, Qt).fromLine.point.x, b(this, Qt).fromLine.point.y, b(this, Qt).fromLine.point.z)
      ), e.set(
        b(this, Qt).fromLine.point.x,
        b(this, Qt).fromLine.point.y,
        b(this, Qt).fromLine.point.z
      );
    }
    this.mesh.position.set(e.x, e.y, e.z), this.mesh.quaternion.setFromUnitVectors(new w(0, 0, 1), b(this, Nn).normal), b(this, Mn).rotate > 0 && this.mesh.rotateZ(b(this, Mn).rotate * Math.PI / 180);
  }
}
Mn = new WeakMap(), Qt = new WeakMap(), Nn = new WeakMap(), Or = new WeakSet(), Jc = function() {
  const e = new Ws(this.width, this.height), n = new oi({
    color: this.appearance.color,
    side: dn,
    wireframe: !1,
    transparent: !0,
    opacity: this.appearance.opacity
  });
  this.mesh = new fe(e, n), this.scene.add(this.mesh), this.computed();
};
var Fn, On, Bn, Hs, Br, Qc;
const zr = class zr extends Xs {
  constructor(e, n, s) {
    super(e, n);
    xt(this, Br);
    xt(this, Fn, 0);
    xt(this, On, 0);
    xt(this, Bn, 0);
    xt(this, Hs);
    return s.color && (this.appearance.color = s.color), ut(this, Hs, s), Kt(this, Br, Qc).call(this), this;
  }
  get v3() {
    return new w(b(this, Fn), b(this, On), b(this, Bn));
  }
  get x() {
    return b(this, Fn);
  }
  set x(e) {
    ut(this, Fn, e);
  }
  get y() {
    return b(this, On);
  }
  set y(e) {
    ut(this, On, e);
  }
  get z() {
    return b(this, Bn);
  }
  set z(e) {
    ut(this, Bn, e);
  }
  get config() {
    return b(this, Hs);
  }
  computed() {
    if (this.config.coordinates)
      ut(this, Fn, this.config.coordinates.x), ut(this, On, this.config.coordinates.y), ut(this, Bn, this.config.coordinates.z);
    else if (this.config.projection) {
      const { object: e, target: n } = this.config.projection;
      console.log(e, n);
      const s = new w();
      if (e instanceof zr && n instanceof Nr) {
        const r = e.v3;
        n.math.closestPointToPoint(r, !1, s);
      }
      e instanceof zr && n instanceof Fr && n.math.projectPoint(e.v3, s), ut(this, Fn, s.x), ut(this, On, s.y), ut(this, Bn, s.z);
    }
    this.mesh.position.set(b(this, Fn), b(this, On), b(this, Bn)), this.config.size && this.config.size > 0 && this.mesh.scale.set(this.config.size, this.config.size, this.config.size);
  }
};
Fn = new WeakMap(), On = new WeakMap(), Bn = new WeakMap(), Hs = new WeakMap(), Br = new WeakSet(), Qc = function() {
  const e = new Xr(0.07, 16, 16), n = new oi({ color: this.appearance.color });
  this.mesh = new fe(e, n), this.scene.add(this.mesh), this.computed();
};
let zs = zr;
var ge, cs, hs, ln, us, Sn, Ts, th, eh;
class ug extends Xs {
  constructor(e, n, s) {
    super(e, n);
    xt(this, Ts);
    xt(this, ge);
    xt(this, cs);
    xt(this, hs);
    xt(this, ln);
    xt(this, us);
    xt(this, Sn);
    return ut(this, ge, Object.assign({}, s)), ut(this, cs, b(this, ge).start.clone().sub(b(this, ge).center)), ut(this, hs, b(this, ge).end.clone().sub(b(this, ge).center)), this.appearance = Object.assign(
      {
        color: "black",
        width: 1,
        dashed: !1
      },
      s.appearance
    ), Kt(this, Ts, th).call(this), this;
  }
  get start() {
    return b(this, ge).start;
  }
  get end() {
    return b(this, ge).end;
  }
  get center() {
    return b(this, ge).center;
  }
  get config() {
    return b(this, ge);
  }
  get AB() {
    return b(this, cs);
  }
  get AC() {
    return b(this, hs);
  }
  get angle() {
    return b(this, cs).angleTo(b(this, hs));
  }
  get radius() {
    return b(this, ge).radius instanceof w ? b(this, ge).radius.clone().sub(b(this, ge).center).length() : isNaN(b(this, ge).radius) || b(this, ge).radius <= 0 ? 1 : b(this, ge).radius;
  }
  get line() {
    return b(this, us);
  }
  get arrow() {
    return b(this, ln);
  }
  computed() {
    this.mesh.position.set(this.center.x, this.center.y, this.center.z), this.mesh.quaternion.setFromUnitVectors(
      new w(0, 0, 1),
      this.AB.clone().cross(this.AC).normalize()
    );
    const e = b(this, Sn).getPoint(0), n = new w(e.x, e.y, 0);
    this.mesh.localToWorld(n), this.mesh.rotateZ(this.AB.angleTo(n.clone().sub(this.center))), this.line.computeLineDistances();
  }
}
ge = new WeakMap(), cs = new WeakMap(), hs = new WeakMap(), ln = new WeakMap(), us = new WeakMap(), Sn = new WeakMap(), Ts = new WeakSet(), th = function() {
  const e = new Xo();
  ut(this, Sn, new td(0, 0, this.radius, this.radius, 0, this.angle, !1, 0));
  const n = [];
  b(this, Sn).getPoints(50).forEach((r) => {
    n.push(r.x, r.y, 0);
  }), e.setPositions(n);
  const s = new qr({
    color: this.appearance.color,
    linewidth: this.appearance.width,
    vertexColors: !1,
    dashed: !!this.appearance.dashed,
    alphaToCoverage: !0
  });
  this.mesh = new Ls(), ut(this, us, new Kc(e, s)), this.mesh.add(b(this, us)), Kt(this, Ts, eh).call(this), this.scene.add(this.mesh), this.computed();
}, eh = function() {
  const e = Object.assign({
    width: 0.05,
    length: 0.2
  }, b(this, ge).arrow);
  ut(this, ln, new fe(
    new Wr(
      e.width,
      e.length,
      16
    ),
    new oi({
      color: this.appearance.color
      // transparent: true,
      // opacity: 0.4
    })
  )), b(this, ln).position.set(b(this, Sn).getPoint(1).x, b(this, Sn).getPoint(1).y, 0);
  const n = b(this, Sn).getLength(), s = (n - e.length / 2) / n, r = b(this, Sn).getTangent(s);
  b(this, ln).translateX(-r.x * e.length / 2), b(this, ln).translateY(-r.y * e.length / 2), b(this, ln).quaternion.setFromUnitVectors(
    new w(0, 1, 0),
    new w(r.x, r.y, 0)
  ), this.mesh.add(b(this, ln)), b(this, ln).visible = b(this, ge).mark === !0;
};
var Hr, cn, Ei, Gr, nh;
class dg extends Xs {
  constructor(e, n, s) {
    super(e, n);
    xt(this, Gr);
    xt(this, Hr);
    xt(this, cn);
    xt(this, Ei);
    return ut(this, cn, s), ut(this, Ei, new Ii(
      new w(),
      1
    )), ut(this, Hr, Object.assign({
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
    ), Kt(this, Gr, nh).call(this), this;
  }
  get center() {
    return b(this, Ei).center;
  }
  get radius() {
    return b(this, Ei).radius;
  }
  get math() {
    return b(this, Ei);
  }
  computed() {
    if (b(this, cn).centerRadius) {
      const e = new w(
        b(this, cn).centerRadius.center.x,
        b(this, cn).centerRadius.center.y,
        b(this, cn).centerRadius.center.z
      ), n = b(this, cn).centerRadius.radius;
      this.mesh.position.set(e.x, e.y, e.z), this.mesh.scale.set(n, n, n);
    }
  }
}
Hr = new WeakMap(), cn = new WeakMap(), Ei = new WeakMap(), Gr = new WeakSet(), nh = function() {
  var s, r;
  const e = new Xr(1, ((s = b(this, cn).shape) == null ? void 0 : s.segments.width) ?? 16, ((r = b(this, cn).shape) == null ? void 0 : r.segments.height) ?? 16), n = new oi({
    color: this.appearance.color,
    side: dn,
    wireframe: !1,
    transparent: !0,
    opacity: this.appearance.opacity
  });
  this.mesh = new fe(e, n), this.scene.add(this.mesh), this.computed();
};
var Oe, ds, yn, hn, un, Xe, le, fs, ps, Qe, ih, wo, Ro, sh;
class fg {
  constructor(t, e) {
    xt(this, Qe);
    xt(this, Oe);
    xt(this, ds);
    xt(this, yn);
    xt(this, hn);
    xt(this, un);
    xt(this, Xe);
    xt(this, le);
    xt(this, fs);
    xt(this, ps);
    let n;
    if (typeof t == "string") {
      if (n = document.getElementById(t), !n)
        throw new Error("Container not found");
    } else
      n = t;
    ut(this, Oe, document.createElement("div")), b(this, Oe).style.width = "100%", b(this, Oe).style.height = "100%", b(this, Oe).style.position = "relative", b(this, Oe).style.overflow = "hidden", n.appendChild(b(this, Oe)), ut(this, fs, {}), ut(this, ds, Object.assign({
      backgroundColor: "#ffffff"
    }, e)), e != null && e.converter ? ut(this, ps, e.converter) : ut(this, ps, (s) => s), Kt(this, Qe, ih).call(this), e != null && e.grid && Kt(this, Qe, wo).call(this), e != null && e.axis && Kt(this, Qe, Ro).call(this);
  }
  get container() {
    return b(this, Oe);
  }
  get config() {
    return b(this, ds);
  }
  get figures() {
    return b(this, fs);
  }
  get renderer() {
    return b(this, yn);
  }
  get css2DRenderer() {
    return b(this, hn);
  }
  get controls() {
    return b(this, un);
  }
  get camera() {
    return b(this, Xe);
  }
  get scene() {
    return b(this, le);
  }
  get converter() {
    return b(this, ps);
  }
  get create() {
    return {
      point: (t, e) => {
        const n = new zs(b(this, le), e, t);
        return this.figures[e] = n, n;
      },
      line: (t, e) => {
        const n = new Nr(b(this, le), e, t);
        return this.figures[e] = n, n;
      },
      plane: (t, e) => {
        const n = new Fr(b(this, le), e, t);
        return this.figures[e] = n, n;
      },
      arc: (t, e) => {
        const n = new ug(b(this, le), e, t);
        return this.figures[e] = n, n;
      },
      sphere: (t, e) => {
        const n = new dg(b(this, le), e, t);
        return this.figures[e] = n, n;
      }
    };
  }
  mount() {
    return b(this, Oe).appendChild(b(this, yn).domElement), b(this, Oe).appendChild(b(this, hn).domElement), b(this, yn).setAnimationLoop(() => {
      Kt(this, Qe, sh).call(this);
    }), this.onResize(), this;
  }
  onResize() {
    const t = b(this, Oe).clientWidth, e = b(this, Oe).clientHeight;
    return b(this, yn).setSize(t, e), b(this, hn).setSize(t, e), b(this, Xe).aspect = t / e, b(this, Xe).updateProjectionMatrix(), this;
  }
  toggleGrid(t) {
    const e = b(this, le).getObjectByName("gridXY"), n = b(this, le).getObjectByName("gridYZ"), s = b(this, le).getObjectByName("gridXZ");
    t === void 0 && (e && n && s ? t = !e.visible : t = !1), e && n && s ? (e.visible = t, n.visible = t, s.visible = t) : t && Kt(this, Qe, wo).call(this);
  }
  toggleAxis(t) {
    const e = b(this, le).getObjectByName("axisX"), n = b(this, le).getObjectByName("axisY"), s = b(this, le).getObjectByName("axisZ");
    t === void 0 && (e && n && s ? t = !e.visible : t = !1), e && n && s ? (e.visible = t, n.visible = t, s.visible = t) : t && Kt(this, Qe, Ro).call(this);
  }
  clear() {
    Object.keys(this.figures).forEach((t) => {
      this.figures[t].label && this.figures[t].mesh.remove(this.figures[t].label.mesh), this.scene.remove(this.figures[t].mesh);
    }), ut(this, fs, {});
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
Oe = new WeakMap(), ds = new WeakMap(), yn = new WeakMap(), hn = new WeakMap(), un = new WeakMap(), Xe = new WeakMap(), le = new WeakMap(), fs = new WeakMap(), ps = new WeakMap(), Qe = new WeakSet(), ih = function() {
  ut(this, yn, new W_({
    antialias: !0
  })), ut(this, hn, new cg()), b(this, hn).domElement.style.position = "absolute", b(this, hn).domElement.style.top = "0px", b(this, yn).setClearColor(b(this, ds).backgroundColor), ut(this, Xe, new Je(20, 1, 0.1, 2e3)), b(this, Xe).up.set(0, 0, 1), b(this, Xe).lookAt(0, 0, 0), b(this, Xe).position.set(25, 15, 30), ut(this, un, new Y_(
    b(this, Xe),
    b(this, hn).domElement
  )), b(this, un).minDistance = 5, b(this, un).maxDistance = 500, b(this, un).enablePan = !0, b(this, un).enableDamping = !0, b(this, un).dampingFactor = 0.05, ut(this, le, new ju());
}, wo = function(t = { size: 20, division: 20, color1: 14540253, color2: 15658734 }) {
  const e = new Ma(t.size, t.division, t.color1, t.color2);
  e.name = "gridXY", e.rotation.x = Math.PI / 2, e.position.set(t.size / 2, t.size / 2, 0), b(this, le).add(e);
  const n = new Ma(t.size, t.division, t.color1, t.color2);
  n.name = "gridYZ", n.position.set(0, t.size / 2, t.size / 2), n.rotation.z = Math.PI / 2, b(this, le).add(n);
  const s = new Ma(t.size, t.division, t.color1, t.color2);
  s.name = "gridXZ", s.position.set(t.size / 2, 0, t.size / 2), b(this, le).add(s);
}, Ro = function(t = { length: 5, headLength: 0.4, headWidth: 0.2, color: void 0 }) {
  const e = new ya(
    new w(1, 0, 0),
    new w(0, 0, 0),
    t.length,
    t.color ?? 16711680,
    t.headLength,
    t.headWidth
  );
  e.name = "axisX";
  const n = new ya(
    new w(0, 1, 0),
    new w(0, 0, 0),
    t.length,
    t.color ?? 65280,
    t.headLength,
    t.headWidth
  );
  n.name = "axisY";
  const s = new ya(
    new w(0, 0, 1),
    new w(0, 0, 0),
    t.length,
    t.color ?? 255,
    t.headLength,
    t.headWidth
  );
  s.name = "axisZ", b(this, le).add(e), b(this, le).add(n), b(this, le).add(s);
}, sh = function() {
  b(this, un).update(), b(this, yn).render(b(this, le), b(this, Xe)), b(this, hn).render(b(this, le), b(this, Xe));
};
function Is(i) {
  if (i === "") return !0;
  if (!isNaN(Number(i))) return parseFloat(i);
  if (i.match(/^[-.\d]+\/[-.\d]+$/)) {
    const [t, e] = i.split("/").map(Number);
    return t / e;
  }
  if (i.match(/^[-.\d]+;[-.\d]+$/)) {
    const [t, e] = i.split(";").map(Number);
    return { x: t, y: e };
  }
  if (i.match(/^[-.\d]+:[-.\d]+(:[xy])?$/)) {
    const [t, e, n] = i.split(":"), s = Number(t), r = Number(e);
    return {
      min: Math.min(s, r),
      max: Math.max(s, r),
      axis: n ?? "x"
    };
  }
  if (i.match(/^[-.\d]+:[-.\d]+:[.\d]+$/)) {
    const [t, e, n] = i.split(":").map(Number), s = Number(t), r = Number(e), a = Number(n), l = (r - s) / 100;
    return {
      min: Math.min(t, e),
      max: Math.max(t, e),
      step: Math.max(a, l)
    };
  }
  return i.startsWith("[") && i.endsWith("]") ? i.slice(1, -1).split(",").map(Is) : i;
}
function Ua(i, t) {
  return i.replace(new RegExp(`\\\\${t}`, "g"), "ESCAPESPLITTER").split(t).map((n) => n.replace("ESCAPESPLITTER", t));
}
function pg(i) {
  if (!i.includes("=")) return { key: i, value: "" };
  const [t, ...e] = i.split("=");
  return {
    key: t,
    value: e.join("=")
  };
}
var ti, Ti, zn, bi, Ai, Li, rh, Co;
class mg {
  constructor(t) {
    xt(this, Li);
    xt(this, ti);
    xt(this, Ti, "->");
    xt(this, zn, ",");
    xt(this, bi, "/");
    xt(this, Ai, []);
    var e, n, s;
    t && (ut(this, ti, t.formatter ?? void 0), (e = t.splitter) != null && e.main && ut(this, Ti, t.splitter.main), (n = t.splitter) != null && n.entry && ut(this, zn, t.splitter.entry), (s = t.splitter) != null && s.parameter && ut(this, bi, t.splitter.parameter), t.keys && ut(this, Ai, t.keys));
  }
  get splitter() {
    return {
      main: b(this, Ti),
      entry: b(this, zn),
      parameter: b(this, bi)
    };
  }
  set splitter_main(t) {
    ut(this, Ti, t);
  }
  set splitter_entry(t) {
    ut(this, zn, t);
  }
  set splitter_parameter(t) {
    ut(this, bi, t);
  }
  get formatter() {
    return b(this, ti);
  }
  set formatter(t) {
    ut(this, ti, t);
  }
  get keys() {
    return b(this, Ai);
  }
  set keys(t) {
    ut(this, Ai, t);
  }
  parse(t) {
    const [e, n] = t.split(b(this, Ti)), s = b(this, ti) ? b(this, ti).call(this, e) : e.trim(), { name: r, key: a, values: o } = Kt(this, Li, rh).call(this, s), l = Kt(this, Li, Co).call(this, n);
    return { name: r, key: a, values: o, parameters: l };
  }
  parameters(t, e) {
    return Kt(this, Li, Co).call(this, t, e ?? b(this, Ai));
  }
}
ti = new WeakMap(), Ti = new WeakMap(), zn = new WeakMap(), bi = new WeakMap(), Ai = new WeakMap(), Li = new WeakSet(), rh = function(t) {
  const [e, ...n] = t.split(" "), [s, r] = e.split("="), a = Ua(
    n.join(" "),
    b(this, zn)
  ).map((o) => Is(o));
  return { name: s, key: r, values: a };
}, Co = function(t, e) {
  if (t === void 0)
    return {};
  let n;
  if (e === void 0 || e.length === 0)
    n = Ua(t, b(this, zn));
  else {
    const r = Ua(t, b(this, zn)), a = e.map((o) => `${o}=`);
    n = [], r.forEach((o) => {
      if (e.includes(o))
        n.push(o);
      else if (o.includes("=")) {
        const l = o.split("=")[0] + "=";
        a.includes(l) && n.push(o);
      } else
        n[n.length - 1].includes("=") ? n[n.length - 1] += `,${o}` : n.push(o);
    });
  }
  const s = {};
  return n.forEach((r) => {
    const { key: a, value: o } = pg(r);
    if (o.match(/^[-.\d]+\/[-.\d]+$/)) {
      s[a] = {
        value: Is(o),
        options: []
      };
      return;
    }
    const [l, ...c] = o.split(b(this, bi));
    s[a] = {
      value: Is(l),
      options: c.map((u) => Is(u))
    };
  }), s;
};
function fc(i, t, e) {
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
    if (r instanceof zs && (a instanceof Nr || a instanceof Fr) || r instanceof Nr && a instanceof Fr)
      return {
        projection: {
          object: r,
          target: a
        }
      };
  }
}
function Er(i, t, e) {
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
function _g(i, t, e) {
  if (i.values.length === 0)
    return;
  const n = {}, s = i.values[0];
  if (typeof s == "string" && s.includes("=0"))
    return i.values.length > 1 && (n.shape = Ia(i, 1)), n.equation = i.values[0], n;
  if (i.values.length >= 2) {
    const [d, p] = i.values, f = t[d].direction, _ = t[p].v3;
    i.values.length > 2 && (n.shape = Ia(i, 2)), (f !== void 0 || _ !== void 0) && (n.fromLine = {
      line: f,
      point: _
    });
  }
  const [r, a, o] = i.values;
  if (r === void 0 || a === void 0 || o === void 0)
    return;
  const l = t[r].v3, c = t[a].v3, u = t[o].v3;
  if (!(l.x === void 0 || c.x === void 0 || u.x === void 0))
    return i.values.length > 3 && (n.shape = Ia(i, 3)), {
      through: { A: l, B: c, C: u }
    };
}
function Ia(i, t) {
  const [e, n, s] = i.values.slice(t);
  return {
    width: e ?? 10,
    height: n ?? e,
    rotate: s ?? 0
  };
}
function gg(i, t, e) {
  const [n, s, r, a] = i.values, o = t[n].v3, l = t[s].v3, c = t[r].v3, u = Object.hasOwn(t, a) ? t[a] : parseFloat(a);
  if (!(o.x === void 0 || l.x === void 0 || c.x === void 0))
    return {
      start: o,
      end: c,
      center: l,
      radius: u
    };
}
function vg(i, t, e) {
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
const xg = {
  pt: {
    name: "point",
    description: "Create a point",
    code: "A(3,4)",
    parameters: [],
    build: fc,
    create: "point"
  },
  proj: {
    name: "projection",
    description: "Create a projection of a point on a line / plane",
    code: "proj A,d | proj d,p",
    parameters: [],
    build: fc,
    create: "point"
  },
  line: {
    name: "line",
    description: "Create a line",
    code: "AB",
    parameters: [],
    build: Er,
    create: "line"
  },
  seg: {
    name: "segment",
    description: "Create a segement",
    code: "AB.",
    parameters: [],
    build: Er,
    create: "line"
  },
  ray: {
    name: "ray",
    description: "Create a ray",
    code: "AB[",
    parameters: [],
    build: Er,
    create: "line"
  },
  vec: {
    name: "vector",
    description: "Create a vector",
    code: "vAB",
    parameters: [],
    build: Er,
    create: "line"
  },
  plane: {
    name: "plane",
    description: "Create a plane",
    code: "A,B,C | n,A | ax+by+cz+d=0",
    parameters: [],
    build: _g,
    create: "plane"
  },
  arc: {
    name: "arc",
    description: "Create an arc",
    code: "a=arc A,B,C",
    parameters: [],
    build: gg,
    create: "arc"
  },
  sphere: {
    name: "sphere",
    description: "Create a sphere",
    code: "s=sphere A,#[,#,#]",
    parameters: [],
    build: vg,
    create: "sphere"
  }
}, pc = [
  "grid",
  "axis",
  "camera",
  "label",
  "tex",
  "points",
  "no-points"
];
var ms, ve, _s, we, ah, oh, Po, lh, ch, hh, uh;
class Tg extends fg {
  constructor(e, n) {
    super(e, {
      grid: !1,
      axis: !1,
      converter: n == null ? void 0 : n.converter
    });
    xt(this, we);
    xt(this, ms);
    xt(this, ve);
    xt(this, _s);
    ut(this, _s, new mg({
      formatter: (s) => Kt(this, we, ch).call(this, s),
      keys: pc,
      splitter: {
        main: "->",
        entry: ",",
        parameter: "/"
      }
    })), ut(this, ve, {
      grid: !1,
      axis: !1,
      label: !1,
      tex: !1,
      "no-points": !1
    }), n != null && n.parameters && this.refreshLayout(n.parameters), ut(this, ms, []), n != null && n.code && Kt(this, we, Po).call(this, n.code);
  }
  refreshLayout(e) {
    const n = b(this, _s).parameters(e ?? "", pc);
    return n.grid ? b(this, ve).grid = n.grid.value : b(this, ve).grid = !1, this.toggleGrid(b(this, ve).grid), n.axis ? b(this, ve).axis = n.axis.value : b(this, ve).axis = !1, this.toggleAxis(b(this, ve).axis), n.label ? b(this, ve).label = n.label.value : b(this, ve).label = !1, n.tex ? b(this, ve).tex = n.tex.value : b(this, ve).tex = !1, n["no-points"] ? b(this, ve)["no-points"] = n["no-points"].value : b(this, ve)["no-points"] = !1, this;
  }
  refresh(e) {
    this.clear(), Kt(this, we, Po).call(this, e);
  }
}
ms = new WeakMap(), ve = new WeakMap(), _s = new WeakMap(), we = new WeakSet(), ah = function(e) {
  const n = [];
  return e.split(`
`).map((r) => r.trim()).filter((r) => r.trim() !== "" && !r.startsWith("$")).forEach((r) => {
    const a = b(this, _s).parse(r);
    n.push(a);
  }), n;
}, oh = function(e) {
  let n = e, s = 1;
  for (; this.figures[n]; )
    n = `${e}_${s}`, s++;
  return n;
}, Po = function(e) {
  ut(this, ms, Kt(this, we, ah).call(this, e));
  const n = xg, s = this.create;
  return b(this, ms).forEach((r) => {
    r.name = Kt(this, we, oh).call(this, r.name);
    let a;
    if (Object.hasOwn(n, r.key)) {
      const { build: o, create: l } = n[r.key];
      if (Object.hasOwn(s, l)) {
        const c = o(r, this.figures, b(this, ve)), u = s[l];
        c && (a = u(c, r.name));
      }
    }
    a ? (b(this, ve).label || b(this, ve).tex, a instanceof zs && b(this, ve)["no-points"] && (r.parameters["!"] = { value: !0, options: [] }), Kt(this, we, lh).call(this, r.parameters, a)) : (console.log("No object created"), console.log(r));
  }), this;
}, lh = function(e, n) {
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
}, ch = function(e) {
  return /^[A-Z][0-9]*\(.*\)$/.exec(e) ? Kt(this, we, hh).call(this, e) : /^[a-z][0-9]*=[v]?[A-Z][0-9]*[A-Z][0-9]*[.\[]?/.exec(e) ? Kt(this, we, uh).call(this, e) : e;
}, // TO BE MOVED TO PI_PARSER
hh = function(e) {
  const n = e.split("(")[0], s = e.split("(")[1].split(")")[0].split(",");
  return `${n}=pt ` + s.join(",");
}, // TO BE MOVED TO PI_PARSER
uh = function(e) {
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
  Tg as Pi3Draw,
  fg as Pi3Graph
};
