# Vector
Vector is an extended 2D vector library with lots of utilitary methods.
## How to install
```html
<script src="Vector.js"></script>
```
## Properties
### x & y
x-axis and y-axis value. These are the only actual properties stored to the `Vector` object.
```javascript
let vec = new Vector(100, 50);
console.log(vec.x, vec.y);//--> 100, 50
```
## Getters
### length
Length of the vector.
```javascript
let vec = new Vector(100, 50);
console.log(vec.length);//--> 111.80339887498948
```
### angle
Angle of the vector in radians.
```javascript
let vec = new Vector(100, 50);
console.log(vec.angle);//--> 0.4636476090008061
```
## Setters
### length
Set the length of the vector while maintaining the original angle of the vector.
```javascript
let vec = new Vector(100, 50);
vec.length = 25;
console.log(vec.x, vec.y);//22.360, 11.180
```
### angle
Set the angle of the vector in radians ie. rotate the vector to point at given angle.
```javascript
let vec = new Vector(100, 50);
vec.angle = Math.PI;
console.log(vec.x, vec.y);//--> -111.80339887498948, 0
```
## Methods
### add
Sum one or more vectors. Arguments: `add(vector1 [, vectorn])`. Returns self so can be chained.
```javascript
let vec = new Vector(50, 50);
let other = new Vector(100, 100);
let another = new Vector(5, 0);
vec.add(other, another);
console.log(vec.x, vec.y);//--> 155, 150
### fromArray
Set x & y properties from array. Returns self and thus chainable.
```
### clone
Returns a new vector with copied x & y values.
```javascript
let vec = new Vector(50, 50);
let copy = vec.clone();
console.log(copy.x, copy.y);//--> 50, 50
```
### fromArray
Set x & y properties from array. Returns self so can be chained.
```javascript
let vec = new Vector();
let arr = [10, 20];
vec.fromArray(arr);
```
### fromObject
Set x & y properties from object.
```javascript
let obj = {x: 10, y: 20};
let vec = new Vector();
vec.fromObject(obj);
console.log(vec.x, vec.y);//--> 10, 20
```
### fromAngleRadius
Set x & y properties from polar coordinates. Arguments: `fromAngleRadius(angle, length)`. Returns self so can be chained.
```javascript
let vec = new Vector();
vec.fromAngleRadius(Math.PI, 50);
console.log(vec.x, vec.y);//--> -50, 0
```
### toArray
Returns a new array with x & y values at index 0 (x) and 1 (y).
```javascript
let vec = new Vector(10, 20);
let arr = vec.toArray();
console.log(arr);//--> [10, 20]
```
### toObject
Returns a new object with x & y properties copied from the vector.
```javascript
let vec = new Vector(10, 20);
let obj = vec.toObject();
console.log(obj);//--> {x: 10, y: 20}
```
### toString
Returns a string presentation of the vector properties.
```javascript
let vec = new Vector(10, 20);
let str = vec.toString();
console.log(str);//--> '{x: 10, y: 20}'
```
### set
Sets the vector x & y values. Has two alternative argument alternatives:
* 1 argument: Object --> copies object's x & y properties to the vector
* 2 arguments: values --> sets provided x & y values to the vector
Returns self so can be chained.
```javascript
//one argument
let other = {x: 200, y: 300};
let vec = new Vector();
vec.set(other)
console.log(vec.x, vec.y);//--> 200, 300

//two arguments
let v = new Vector();
v.set(20, 50);
console.log(v.x, v.y);//--> 20, 50
```
### setFromTo
Sets vector to point from one vector to another. Returns self so can be chained.
```javascript
//one argument
let from = new Vector(50, 50);
let to = new Vector(100, 300);
let vec = new Vector();
vec.setFromTo(from, to);
console.log(vec.x, vec.y);//--> 50, 250
```

