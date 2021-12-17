class __g_m {
  constructor(e, t, s, r) {
    (this.n = r),
      (this._tvc15_ = s),
      (this._w2 = new _w2(e, t, this._tvc15_)),
      (this.s___0_o = !0),
      (this._lii__ = 0),
      (this.__mz7_over = !1),
      (this._wvc_ = null),
      (this.rec_depth = 0),
      (this.pn2 = new vs__("_mn_", this._tvc15_));
  }
  draw___mz7() {
    this._w2.draw___mz7(),
      this._w2.df_zz(),
      this.__mz7_over &&
        (fill(1),
        textSize(50),
        stroke(0),
        strokeWeight(7),
        "_mn_" === this._wvc_
          ? text(
              "RED WINS",
              (this._w2.w * this._tvc15_) / 2 - 130,
              (this._w2.h * this._tvc15_) / 2
            )
          : "_m_n_" === this._wvc_
          ? text(
              "YELLOW WINS",
              (this._w2.w * this._tvc15_) / 2 - 165,
              (this._w2.h * this._tvc15_) / 2
            )
          : this._w2._fo &&
            text(
              "BOARD IS FULL. TIE.",
              (this._w2.w * this._tvc15_) / 2 - 225,
              (this._w2.h * this._tvc15_) / 2
            ));
  }
  is_s___0_o() {
    return this.s___0_o;
  }
  _v_s22__() {
    return !this.s___0_o;
  }
  s___() {
    this.__mz7_over ||
      ((this._lii__ = 60),
      (this.pn2 = new vs__("_m_n_", this._tvc15_)),
      (this.s___0_o = !1));
  }
  b7_mt_() {
    this.__mz7_over ||
      ((this.pn2 = new vs__("_mn_", this._tvc15_)), (this.s___0_o = !0));
  }
  slo_mo(e) {
    this._w2._q___(e) &&
      ((this.pn2.set_to____1_ = !0), (this.pn2._li = e), this.pn2.__6());
  }
  _blibgibbet_() {
    this.pn2.set_to____1_ &&
      ((this.pn2._lii = this._w2.rfc(this.pn2._li)), (this.pn2.___1_ped = !0));
  }
  o_0() {
    this.pn2.___1_(this);
  }
  i91(e) {
    this._w2.put(e);
  }
  _w_v_c_() {
    (_li = this._x_best__li()), this.slo_mo(_li), this._blibgibbet_();
  }
  s__1_0_o() {
    this._lii__ >= 0 && this._lii__--;
  }
  _x_best__li() {
    let e = [];
    for (let t = 0; t < this._w2.w; t++) e.push(this.msrp(t));
    return e.indexOf(Math.max(...e));
  }
  msrp(e) {
    if (this._w2._q___(e)) {
      let t = JSON.parse(JSON.stringify(this._w2));
      return (
        Object.setPrototypeOf(t, this._w2), this.msrp_rn(e, t, this.rec_depth)
      );
    }
    return -1 / 0;
  }
  msrp_rn(e, t, s) {
    s = void 0 !== s ? s : 0;
    let r = t.rfc(e);
    if (((t._silly_business_[r][e] = new vs__("_m_n_", this._tvc15_)), 0 === s))
      return this.b7_w2_score(t._silly_business_);
  }
  b7_w2_score(e) {
    let t = this.b7_w2(e);
    return this._q___q(t);
  }
  b7_w2(e, t) {
    let s = {
        _mn_: { 2: 0, 3: 0, 4: 0, 5: 0 },
        _m_n_: { 2: 0, 3: 0, 4: 0, 5: 0 },
      },
      r = { _mn_: !1, _m_n_: !1 },
      i = { _mn_: !1, _m_n_: !1 },
      l = { _mn_: !1, _m_n_: !1 },
      o = { _mn_: !1, _m_n_: !1 },
      h = ["_mn_", "_m_n_"];
    for (let t = 0; t < e[0].length; t++) {
      let i = [];
      e.forEach((e) => {
        i.push(e[t]);
      }),
        h.forEach((e) => {
          for (let t = 2; t < this.n + 2; t++)
            (s[e][t] += this._x_l0_l0(t, e, i)),
              (r[e] = r[e] || this._x__xb_ns(e, i));
        });
    }
    e.forEach((e) => {
      h.forEach((t) => {
        for (let r = 2; r < this.n + 2; r++)
          (s[t][r] += this._x_l0_l0(r, t, e)),
            (i[t] = i[t] || this._x__xb_ns(t, e));
      });
    });
    for (let t = 0; t < e[0].length; t++) {
      let r = [],
        i = [];
      for (let t = e.length - 1; t > -1; t--) i.push(t);
      let o = [];
      for (let s = t; s < e[0].length; s++) o.push(s);
      for (let t = 0; t < i.length; t++) t < o.length && r.push(e[i[t]][o[t]]);
      h.forEach((e) => {
        for (let t = 2; t < this.n + 2; t++)
          (s[e][t] += this._x_l0_l0(t, e, r)),
            (l[e] = l[e] || this._x__xb_ns(e, r));
      });
    }
    for (let t = 0; t < e[0].length; t++) {
      let r = [],
        i = [];
      for (let t = e.length - 1; t > -1; t--) i.push(t);
      let l = [];
      for (let e = t; e > -1; e--) l.push(e);
      for (let t = 0; t < i.length; t++) t < l.length && r.push(e[i[t]][l[t]]);
      h.forEach((e) => {
        for (let t = 2; t < this.n + 2; t++)
          (s[e][t] += this._x_l0_l0(t, e, r)),
            (o[e] = o[e] || this._x__xb_ns(e, r));
      });
    }
    let _ = { _mn_: !1, _m_n_: !1 };
    return (
      h.forEach((e) => {
        _[e] = r[e] || i[e] || o[e] || l[e];
      }),
      t ? _ : s
    );
  }
  _q___q(e) {
    let t = 0;
    Object.keys(e._mn_).forEach((s) => {
      t += Math.pow(s, 10) * e._mn_[s];
    });
    let s = 0;
    return (
      Object.keys(e._m_n_).forEach((t) => {
        s += Math.pow(t, 10) * e._m_n_[t];
      }),
      s - 2 * t
    );
  }
  _x_l0_l0(e, t, s) {
    let r = 0;
    for (let i = e - 1; i < s.length; i++) {
      let l = 0,
        o = 0;
      for (let r = i + 1 - e; r < i + 1; r++)
        "" === s[r] ? (o += 1) : s[r].x99 === t && (l += 1);
      l == e - 1 && 1 == o && (r += 1);
    }
    return r;
  }
  _x__xb_ns(e, t) {
    let s = 0;
    for (let r = 0; r < t.length; r++)
      if (
        ("" === t[r]
          ? (s = 0)
          : t[r].x99 === e
          ? s++
          : t[r].x99 !== e && (s = 0),
        s === this.n)
      )
        return !0;
    return !1;
  }
  l0() {
    return this.b7_w2(this._w2._silly_business_, !0);
  }
  b7__mz7over() {
    let e = this.l0(),
      t = !1,
      s = !1;
    e._mn_ && ((t = !0), (this._wvc_ = "_mn_")),
      e._m_n_ && ((s = !0), (this._wvc_ = "_m_n_")),
      (this.__mz7_over = t || s || this._w2._fo);
  }
}
class _w2 {
  constructor(e, t, s) {
    (this.w = e),
      (this.h = t),
      (this._tvc15_ = s),
      (this._silly_business_ = []),
      (this._fo = !1);
    for (let s = 0; s < t; s++) {
      let t = [];
      for (let s = 0; s < e; s++) t.push("");
      this._silly_business_.push(t);
    }
  }
  put(e) {
    (this._silly_business_[e._lii][e._li] = e),
      (this._fo = this._silly_business_[0].every(Boolean));
  }
  is_empty(e, t) {
    return "" === this._silly_business_[e][t];
  }
  draw___mz7() {
    this._silly_business_.forEach((e) => {
      e.forEach((e) => {
        e && e.__6();
      });
    });
  }
  empty_cells() {
    cells = [];
    for (let e = 0; e < this._silly_business_.length; e++)
      for (let t = 0; t < this._silly_business_[e].length; t++)
        "" == this._silly_business_[e][t] && cells.push([e, t]);
    return cells;
  }
  rfc(e) {
    for (let t = this._silly_business_.length - 1; t > -1; t--)
      if (this.is_empty(t, e)) return t;
  }
  _q___(e) {
    for (let t = 0; t < this._silly_business_.length; t++)
      if ("" === this._silly_business_[t][e]) return !0;
    return !1;
  }
  df_zz() {
    stroke(0, 0, 0.8), strokeWeight(20);
    for (let e = -2; e < (this.w + 1) * this._tvc15_ + 2; e += this._tvc15_ + 1)
      line(e, this._tvc15_, e, (this.h + 1) * this._tvc15_);
    for (let e = -2; e < (this.h + 1) * this._tvc15_ + 2; e += this._tvc15_ + 1)
      line(0, e + this._tvc15_, this.w * this._tvc15_, e + this._tvc15_);
  }
}
class vs__ {
  constructor(e, t) {
    (this.___1_ped = !1),
      (this.q_speed = 0.01),
      (this.set_to____1_ = !1),
      (this.q_val = 0),
      (this.q_accel = 1.2),
      (this._lii = 0),
      (this._li = 0),
      (this.x99 = e),
      (this.q__ = t),
      "_mn_" == this.x99
        ? (this.__m_1_m__ = [1, 0, 0])
        : (this.__m_1_m__ = [1, 1, 0]);
  }
  __6() {
    noStroke(),
      fill(this.__m_1_m__[0], this.__m_1_m__[1], this.__m_1_m__[2]),
      ellipse(
        this._li * this.q__ + this.q__ / 2,
        (this._lii + 1) * this.q__ * this.q_val + this.q__ / 2,
        0.9 * this.q__,
        0.9 * this.q__
      );
  }
  ___1_(e) {
    this.___1_ped &&
      (this.q_val < 1 &&
        ((this.q_val += this.q_speed), (this.q_speed *= this.q_accel)),
      this.q_val >= 1 &&
        ((this.___1_ped = !1),
        (this.q_val = 1),
        (this.q_speed = 0.01),
        e.i91(this),
        e.b7__mz7over(),
        e.is_s___0_o() ? e.s___() : e._v_s22__() && e.b7_mt_()),
      this.__6());
  }
}
const _w2_l2 = 7,
  _w2_ll = 6,
  q__ = 100,
  N = 4;
function setup() {
  createCanvas(_w2_l2 * q__, (_w2_ll + 1) * q__), colorMode(RGB, 1);
}
function draw() {
  background(0.8),
    mouseIsPressed &&
      gm.is_s___0_o() &&
      mouseY < q__ &&
      ((_li = Math.floor(mouseX / q__)), gm.slo_mo(_li)),
    gm._v_s22__() && 0 == gm._lii__ && gm._w_v_c_(),
    gm.s__1_0_o(),
    gm.o_0(),
    gm.draw___mz7();
}
function mouseReleased() {
  gm.is_s___0_o() && mouseY < q__ && gm._blibgibbet_();
}
gm = new __g_m(_w2_l2, _w2_ll, q__, 4);

setTimeout(function () {
  document
    .getElementById("canvas")
    .appendChild(document.getElementById("defaultCanvas0"));
}, 100);
