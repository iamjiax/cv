const poiuy_ROW = 6,
  poiuy_COLUMN = 7,
  GRID_WIDTH = 100,
  EASY = 1,
  NORMAL = 3,
  HARD = 5,
  AI_LEVEL = NORMAL,
  WIN_NUM = 4;
class wlass {
  constructor(t, e, s, i) {
    const r = [1, 1, 0];
    (this.VEL_FACTOR = 0.3),
      (this.color = "olala"),
      (this.fill_color = [1, 0, 0]),
      i && ((this.color = "lalao"), (this.fill_color = r)),
      (this.x = t),
      (this.y = e),
      (this.wdm = s),
      (this.y_vel = s * this.VEL_FACTOR),
      (this.dd_xx = t),
      (this.dd_xy = e);
  }
  d_mm() {
    fill(...this.fill_color),
      noStroke(),
      ellipse(this.x, this.y, this.wdm, this.wdm);
  }
  d_d_at(t, e) {
    (this.x = t), (this.y = e), this.d_mm();
  }
  d_d() {
    (this.x = this.dd_xx),
      (this.y = min(this.dd_xy, this.y + this.y_vel)),
      this.d_mm();
  }
  s_ddt(t, e) {
    (this.dd_xx = t), (this.dd_xy = e);
  }
  a_ddt() {
    return this.y === this.dd_xy && this.x === this.dd_xx;
  }
}
class poiuy {
  constructor(t, e, s) {
    (this.GRID_WIDTH = s),
      (this.HALF_GRID = parseInt(100 / 2)),
      (this.t_yyy = 100),
      (this.INIT_Y = parseInt(100 / 2)),
      (this.COL_NUM = e),
      (this.ROW_NUM = t),
      (this.CENTER_X = parseInt((100 * this.COL_NUM) / 2)),
      (this.CENTER_Y = parseInt((100 * (this.ROW_NUM + 1)) / 2)),
      (this.grids = [...Array(t)].map((t) => Array(e).fill(null)));
  }
  d_d() {
    let t = parseInt(100 / 5);
    stroke(0, 0, 0.7), strokeWeight(t);
    let e = [1, this.ROW_NUM + 2];
    for (let t = e[0]; t < e[1]; t++)
      line(0, t * 100, this.COL_NUM * 100, t * 100);
    let s = this.COL_NUM + 1;
    for (let t = 0; t < s; t++)
      line(t * 100, 100, t * 100, this.ROW_NUM * 100 + 100);
  }
  add(t) {
    let e = this.x_t_c(t.dd_xx),
      s = this.y_to_row(t.dd_xy);
    this.grids[s][e] = t.color;
  }
  is_full() {
    for (let t = 0; t < this.grids[0].length; t++)
      if (!this.grids[0][t]) return !1;
    return !0;
  }
  n_e_r(t) {
    const e = this.x_t_c(t),
      s = this.grids.length - 1;
    let i = [0, this.COL_NUM];
    for (let t = s; t > -1; t += -1)
      if (e >= i[0] && e < i[1] && !this.grids[t][e]) return t;
    return -1;
  }
  h_e_gg(t) {
    return !(-1 === this.n_e_r(t));
  }
  ff_fd_dd_xy(t) {
    let e = this.n_e_r(t);
    return this.row_to_y(e);
  }
  n_g_c_x(t) {
    return this.c_t_x(this.x_t_c(t));
  }
  c_t_x(t) {
    return t * 100 + this.HALF_GRID;
  }
  x_t_c(t) {
    return parseInt(t / 100);
  }
  row_to_y(t) {
    return (t + 1) * 100 + this.HALF_GRID;
  }
  y_to_row(t) {
    return parseInt(t / 100) - 1;
  }
}
class smcp {
  random_move(t) {
    let e = this.g_u_cc(t);
    if (e) {
      return e[Math.floor(Math.random() * e.length)];
    }
    return -1;
  }
  smarter_move(t, e = "lalao") {
    let s = this.g_u_cc(t),
      i = Number.NEGATIVE_INFINITY,
      r = this.random_move(t);
    for (const h of s) {
      let s = this.n_e_r(t, h),
        _ = JSON.parse(JSON.stringify(t));
      _[s][h] = e;
      let l = this.e_ggs(_, e);
      l > i && ((i = l), (r = h));
    }
    return r;
  }
  minimax_move(t, e, s = "lalao") {
    const i = Number.NEGATIVE_INFINITY,
      r = Number.POSITIVE_INFINITY;
    let [h, _] = this.minimax(t, e, i, r, !0, s);
    return h;
  }
  minimax(t, e, s, i, r, h) {
    let _ = "lalao" === h ? "olala" : "lalao",
      l = this.is_terminal(t);
    if (0 === e || l) {
      if (l) {
        if (this.is_w_W(t, h)) {
          return [null, 1e9 + this.e_ggs(t, h)];
        }
        if (this.is_w_W(t, _)) {
          return [null, -1e9 + this.e_ggs(t, h)];
        }
        return [null, 0];
      }
      if (0 == e) {
        return [null, this.e_ggs(t, h)];
      }
    }
    let n = this.g_u_cc(t);
    if (r) {
      let r = Number.NEGATIVE_INFINITY,
        _ = this.random_move(t);
      for (let l of n) {
        let n = this.n_e_r(t, l),
          o = JSON.parse(JSON.stringify(t));
        o[n][l] = h;
        let a = this.minimax(o, e - 1, s, i, !1, h)[1];
        if ((a > r && ((r = a), (_ = l)), (s = Math.max(s, r)) >= i)) break;
      }
      return [_, r];
    }
    {
      let r = Number.POSITIVE_INFINITY,
        l = this.random_move(t);
      for (let o of n) {
        let n = this.n_e_r(t, o),
          a = JSON.parse(JSON.stringify(t));
        a[n][o] = _;
        let u = this.minimax(a, e - 1, s, i, !0, h)[1];
        if ((u < r && ((r = u), (l = o)), s >= (i = Math.min(i, r)))) break;
      }
      return [l, r];
    }
  }
  is_terminal(t) {
    return (
      0 === this.g_u_cc(t).length ||
      this.is_w_W(t, "olala") ||
      this.is_w_W(t, "lalao")
    );
  }
  is_w_W(t, e, s = 4) {
    const i = s;
    for (let s = 0; s < t.length; s++) {
      let r = 0;
      for (let h = 0; h < t[0].length; h++)
        if (t[s][h] === e) {
          if ((r += 1) === i) return !0;
        } else r = 0;
    }
    for (let s = 0; s < t[0].length; s++) {
      let r = 0;
      for (let h = 0; h < t.length; h++)
        if (t[h][s] === e) {
          if ((r += 1) === i) return !0;
        } else r = 0;
    }
    for (let s = 0; s < t[0].length; s++) {
      let r = 0,
        h = 0,
        _ = s;
      for (; h < t.length && _ < t[0].length; ) {
        if (t[h][_] === e) {
          if ((r += 1) === i) return !0;
        } else r = 0;
        (h += 1), (_ += 1);
      }
    }
    for (let s = 0; s < t.length; s++) {
      let r = 0,
        h = s,
        _ = 0;
      for (; h < t.length && _ < t[0].length; ) {
        if (t[h][_] === e) {
          if ((r += 1) === i) return !0;
        } else r = 0;
        (h += 1), (_ += 1);
      }
    }
    for (let s = 0; s < t[0].length; s++) {
      let r = 0,
        h = 0,
        _ = s;
      for (; h < t.length && _ >= 0; ) {
        if (t[h][_] === e) {
          if ((r += 1) === i) return !0;
        } else r = 0;
        (h += 1), (_ -= 1);
      }
    }
    for (let s = 0; s < t.length; s++) {
      let r = 0,
        h = s,
        _ = t[0].length - 1;
      for (; h < t.length && _ >= 0; ) {
        if (t[h][_] === e) {
          if ((r += 1) === i) return !0;
        } else r = 0;
        (h += 1), (_ -= 1);
      }
    }
    return !1;
  }
  e_ggs(t, e = "lalao") {
    const s = [
      [3, 4, 5, 7, 5, 4, 3],
      [4, 6, 8, 10, 8, 6, 4],
      [5, 8, 11, 13, 11, 8, 5],
      [5, 8, 11, 13, 11, 8, 5],
      [4, 6, 8, 10, 8, 6, 4],
      [3, 4, 5, 7, 5, 4, 3],
    ];
    let i = 0;
    const r = "lalao" === e ? "olala" : "lalao";
    for (let h = 0; h < t.length; h++)
      for (let _ = 0; _ < t[0].length; _++)
        t[h][_] === e ? (i += s[h][_]) : t[h][_] === r && (i -= s[h][_]);
    for (let s of t)
      for (let t = 0; t < s.length - 4 + 1; t++) {
        let r = s.slice(t, t + 4);
        i += this.e_4_pp(r, e);
      }
    for (let s = 0; s < t[0].length; s++) {
      let r = t.map((t) => t[s]);
      for (let t = 0; t < r.length - 4 + 1; t++) {
        let s = r.slice(t, t + 4);
        i += this.e_4_pp(s, e);
      }
    }
    for (let s = 0; s < t.length - 4 + 1; s++)
      for (let r = 0; r < t[0].length - 4 + 1; r++) {
        let h = [];
        for (let e = 0; e < 4; e++) h.push(t[s + e][r + e]);
        i += this.e_4_pp(h, e);
      }
    for (let s = 0; s < t.length - 4 + 1; s++)
      for (let r = 3; r < t[0].length; r++) {
        let h = [];
        for (let e = 0; e < 4; e++) h.push(t[s + e][r - e]);
        i += this.e_4_pp(h, e);
      }
    return i;
  }
  e_4_pp(t, e = "lalao") {
    let s = 0,
      i = "lalao" === e ? "olala" : "lalao";
    return (
      4 === t.filter((t) => t === e).length
        ? (s += 1e3)
        : 3 === t.filter((t) => t === e).length &&
          1 === t.filter((t) => null === t).length
        ? (s += 50)
        : 2 === t.filter((t) => t === e).length &&
          2 === t.filter((t) => null === t).length &&
          (s += 20),
      3 === t.filter((t) => t === i).length &&
      1 === t.filter((t) => null === t).length
        ? (s -= 200)
        : 2 !== t.filter((t) => t === i).length ||
          ((t[0] || t[2]) && (t[1] || t[3]) && (t[0] || t[3])) ||
          (s -= 100),
      s
    );
  }
  g_u_cc(t) {
    let e = [];
    for (let s = 0; s < t[0].length; s++) t[0][s] || e.push(s);
    return e;
  }
  n_e_r(t, e) {
    for (let s = t.length - 1; s > -1; s += -1) if (!t[s][e]) return s;
    return -1;
  }
}
class uiuiuig {
  constructor(t, e, s, i = !0, r = 3, h = 4) {
    (this.WIN_NUM = h),
      (this.AI_MODE = i),
      (this.AI_LEVEL = r),
      (this.PLAYER_1 = 0),
      (this.PLAYER_2 = 1),
      (this.wlass_wdm = 0.9 * s),
      (this.wlasss = []),
      (this.poiuy = new poiuy(t, e, s)),
      (this.mm_p = !1),
      (this.mouse_wlass = null),
      (this.ppt_ = this.PLAYER_1),
      (this.a_t = !1),
      (this.smcp = new smcp()),
      (this.w_W = null),
      (this.ililila = !1),
      (this.p_auu = !1);
  }
  update() {
    this.AI_MODE && this.a_t && !this.p_auu && this.a_i_p();
    for (let t of this.wlasss) t.d_d();
    if (
      (!this.ililila &&
        this.p_auu &&
        this.wlasss &&
        this.wlasss[this.wlasss.length - 1].a_ddt() &&
        (this.c_rt(), this.ililila || (this.p_auu = !1)),
      !this.p_auu &&
        this.mm_p &&
        this.m_a_bd() &&
        this.poiuy.h_e_gg(mouseX) &&
        this.mouse_wlass.d_d_at(this.poiuy.n_g_c_x(mouseX), this.poiuy.INIT_Y),
      this.poiuy.d_d(),
      this.ililila)
    )
      if (this.w_W) {
        let t = this.w_W + " WINS!";
        this.d_d_mm_gg(t);
      } else {
        let t = "IT'S A TIE!";
        this.d_d_mm_gg(t);
      }
  }
  c_rt() {
    (this.w_W = this.ff_fd_w_W(this.poiuy.grids)),
      (this.w_W || this.poiuy.is_full()) && (this.ililila = !0);
  }
  ff_fd_w_W(t) {
    return this.smcp.is_w_W(t, "olala", this.WIN_NUM)
      ? "RED"
      : this.smcp.is_w_W(t, "lalao", this.WIN_NUM)
      ? "YELLOW"
      : null;
  }
  d_d_mm_gg(t) {
    const e = (this.poiuy.GRID_WIDTH * this.poiuy.COL_NUM) / 10,
      s = e / 10;
    stroke(0),
      strokeWeight(s),
      textAlign(CENTER, CENTER),
      textSize(e),
      fill(1),
      text(t, this.poiuy.CENTER_X, this.poiuy.CENTER_Y);
  }
  handle_mm_p() {
    this.ililila ||
      ((this.mm_p = !0),
      (this.mouse_wlass = new wlass(
        mouseX,
        mouseY,
        this.wlass_wdm,
        this.ppt_
      )));
  }
  handle_mousereleased() {
    this.ililila ||
      ((this.mm_p = !1),
      !this.p_auu &&
        this.m_a_bd() &&
        this.poiuy.h_e_gg(mouseX) &&
        (this.mouse_wlass.s_ddt(
          this.poiuy.n_g_c_x(mouseX),
          this.poiuy.ff_fd_dd_xy(mouseX)
        ),
        this.wlasss.push(this.mouse_wlass),
        this.poiuy.add(this.mouse_wlass),
        (this.p_auu = !0),
        this.AI_MODE
          ? (this.a_t = !0)
          : (this.ppt_ =
              this.ppt_ === this.PLAYER_2 ? this.PLAYER_1 : this.PLAYER_2)));
  }
  m_a_bd() {
    return mouseY < this.poiuy.t_yyy;
  }
  a_i_p() {
    let t = this.smcp.minimax_move(this.poiuy.grids, this.AI_LEVEL),
      e = this.poiuy.c_t_x(t),
      s = new wlass(e, this.poiuy.INIT_Y, this.wlass_wdm, this.a_t);
    s.s_ddt(e, this.poiuy.ff_fd_dd_xy(e)),
      this.wlasss.push(s),
      this.poiuy.add(s),
      (this.p_auu = !0),
      (this.a_t = !1);
  }
}
const GRAY = [0.8, 0.8, 0.8];
let uiuiui_g = new uiuiuig(6, 7, 100, !0, AI_LEVEL, 4);
function setup() {
  createCanvas(700, 700), colorMode(RGB, 1), (uiuiui_g.AI_LEVEL = NORMAL);
}
function draw() {
  uiuiui_g.ililila && noLoop(), background(...GRAY), uiuiui_g.update();
}
function touchStarted() {
  uiuiui_g.handle_mm_p();
}
function touchEnded() {
  uiuiui_g.handle_mousereleased();
}
setTimeout(function () {
  document
    .getElementById("canvas")
    .appendChild(document.getElementById("defaultCanvas0"));
}, 100);
