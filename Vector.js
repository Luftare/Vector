class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
    
  //getters
  get angle() {
    return Math.atan(this.y / this.x);
  }
  
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  
  get lengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  
  get normal() {
    return (new Vector()).set(this).toNormal();
  }
  
  //setters
  set angle(a) {
    const l = this.length;
    const nX = Math.cos(a);
    const nY = Math.sin(a);
    this.set(nX, nY).scale(l);
  }
  
  set length(l) {
    if(this.length === 0) return 0;
    this.normalize().scale(l);
  }
  
  //methods
  fromArray(arr) {
    this.x = arr[0];
    this.y = arr[1];
    return this;
  }
  
  fromObject(o) {
    this.x = o.x;
    this.y = o.y;
    return this;
  }
  
  toArray() {
    return [this.x, this.y];
  }
  
  toObject() {
    return {x: this.x, y: this.y};
  }
  
  toString() {
    return `{x: ${this.x}, y: ${this.y}}`;
  }
  
  set(...args) {
    if(args.length === 1) {
      this.x = args[0].x;
      this.y = args[0].y;
    } else {
      this.x = args[0];
      this.y = args[1];
    }
    return this;
  }
  
  add(...args) {
    args.forEach(v => {
      this.x += v.x;
      this.y += v.y;
    });
    return this;
  }
  
  clone() {
    return new Vector(this.x, this.y);
  }
  
  random(l = 1) {
    return this.set(l, 0).rotate(Math.random() * Math.PI * 2);
  }
   
  substract(...args) {
    args.forEach(v => {
      this.x -= v.x;
      this.y -= v.y;
    });
    return this;
  }
  
  substraction(a, b) {
    return this.set(a.x - b.x, a.y - b.y);
  }
  
  addScaled(a, ...args) {
    args.forEach(v => {
      this.x += v.x * a;
      this.y += v.y * a;
    });
    return this;
  }
  
  scale(a) {
    this.x *= a;
    this.y *= a;
    return this;
  }
  
  toAngle(a) {
    this.angle = a;
    return this;
  }
  
  alignWith(v) {
    this.angle = v.angle;
    return this;
  }
  
  distance(v) {
    return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2);
  }
  
  withinRange(v,r) {
    return (this.x - v.x) ** 2 + (this.y - v.y) ** 2 < r ** 2;
  }
  
  outsideRange(v,r) {
    return (this.x - v.x) ** 2 + (this.y - v.y) ** 2 > r ** 2;
  }
  
  isShorter(l) {
    return this.x ** 2 + this.y ** 2 < l ** 2;
  }
  
  isLonger(l) {
    return this.x ** 2 + this.y ** 2 > l ** 2;
  }
  
  dot(v) {
    return v.x * this.x + this.y * v.y;
  }
  
  cross(v) {
    return this.x * v.y - this.y * v.x;
  }
  
  isEqual(v) {
    return this.x === v.x && this.y && v.y;
  }
  
  crossSign(v) {
    if(this.equals(v)) return 0;
    const c = this.cross(v);
    return c >= 0? 1 : -1;
  }
  
  normalize() {
    const l = this.length;
    if(l === 0) return this.set(0,0);
    return this.scale(1/l);
  }
  
  toLength(l) {
    this.length = l;
    return this;
  }
  
  stretch(l) {
    this.length = Math.max(0, this.length + l);
    return this;
  }
  
  limit(l) {
    const len = this.length;
    return len > l? this.toLength(l) : this;
  }
  
  unlimit(l) {
    const len = this.length;
    return len < l? this.toLength(l) : this;
  }
  
  clampLength(...args) {
    const min = Math.min(...args);
    const max = math.max(...args);
    return this.limit(max).unlimit(min);
  }
  
  clampAngle(a, v) {
    if(a >= Math.PI) return this;
    if(v) {
      const oldAngle = this.angleBetween(v);
      return oldAngle > a? this.lerpAlignWith(oldAngle - a, v) : this;
    } else {
      const oldAngle = this.angle;
      if(oldAngle > 0){
        return oldAngle < a? this : this.toAngle(a);
      } else {
        return oldAngle > -a? this : this.toAngle(-a);
      }
    }
  }
  
  angleBetween(v) {
    return Math.acos(this.dot(v) / (this.length * v.length));
  }
  
  angleBetweenSigned(v) {
    var sign = this.crossSign(v);
    return sign * Math.acos(this.dot(v) / (this.length * v.length));
  }
  
  mirror() {
    return this.scale(-1);
  }
  
  zero() {
    return this.set(0,0);
  }
  
  toNormal(dir = false) {
    if(dir){
      return this.set(this.y,this.x).mirror();
    } else {
      return this.set(this.y,this.x);
    }
  }
  
  normalTo(v, dir) {
    return this.alignWith(v).toNormal(dir);
  }
  
  getNormal(dir = false) {
    const v = new Vector(this);
    return v.toNormal(dir);
  }
  
  rotate(a) {
    const l = this.length;
    const s = Math.sin(a);
    const c = Math.cos(a);
    const nX = this.x*c - this.y*s;
    const nY = this.x*s + this.y*c;
    return this.set(nX,nY).toLength(l);
  }
  
  lerpAlign(da, v) {
    const sign = this.crossSign(v);
    this.rotate(da * sign);
    const newSign = this.crossSign(v);
    return sign !== newSign? this.alignWith(v) : this;
  }
  
  lerpAlignFixed(da, CW, v) {
    const sign = this.crossSign(v);
    this.rotate(da * (CW? 1 : -1));
    const newSign = this.crossSign(v);
    return sign !== newSign? this.alignWith(v) : this;
  }
}