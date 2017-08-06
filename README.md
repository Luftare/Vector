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
### random
Randoms vector direction. Length of the randomed vector can be passed as the only, optional, argument. Returns self so can be chained.
```javascript
let vec = new Vector();
vec.random();
console.log(vec);//possibly: {x: -0.23372631348780365, y: 0.9723024274285244}
```
### substract
Substract one or more vectors.  Arguments: `add(vector1 [, vectorn])`. Returns self so can be chained.
```javascript
let vec = new Vector(50, 50);
let another = new Vector(10, 5);
vec.substract(another);
console.log(vec);//--> {x: 40, y: 45}
```
### substraction
Sets vector value to the substraction of two vectors.  Arguments: `add(vector1 , vector2)`. Returns self so can be chained.
```javascript
let vec = new Vector();
let other = new Vector(100, 100);
let another = new Vector(5, 5);
vec.substraction(another, other);
console.log(vec);//--> {x: -95, y: 95}
```
### scaledAdd
Add one or more vectors by first scaling the to-be-added vectors with given number. Arguments: `scaledAdd(scale, vector1 [, vectorn])`. Returns self so can be chained.
```javascript
let vec = new Vector(10, 10);
let other = new Vector(100, 100);
let scale = 0.1;
vec.scaledAdd(scale, other);
console.log(vec);//--> {x: 20, y: 20}
```
### scale
Multiply x & y values by given number. Returns self so can be chained.
```javascript
let vec = new Vector(10, 10);
vec.scale(10);
console.log(vec);//--> {x: 100, y: 100}
```
### toAngle
Rotate the vector to point to given angle. Returns self so can be chained.
```javascript
let vec = new Vector(0, 100);
vec.toAngle(Math.PI);
console.log(vec);//--> {x: -100, y: 0}
```
### alignWith
Align the vector to point towards the same direction as the vector provided. Returns self so can be chained.
```javascript
let vec = new Vector(200, 100);
let another = new Vector(10, 0);
vec.alignWith(another);
console.log(vec);//--> {x: 223.60679774997897, y: 0}
```
### distance
Returns the distance between the vector and another vector.
```javascript
let vec = new Vector(200, 100);
let another = new Vector(10, 0);
vec.distance(another);
console.log(vec);//--> 214.7091055358389
```
### distanceSq
Returns the distance between the vector and another vector in power of two. More performant than the `distance` method when comparing two distances.
```javascript
let vec = new Vector(200, 100);
let another = new Vector(10, 0);
vec.distanceSq(another);
console.log(vec);//--> 46100
```
### withinRange
Returns boolean value depending wether given vector is within given distance. Arguments: `withinRange(vector, distance)`.
```javascript
let vec = new Vector(0, 0);
let another = new Vector(10, 0);
vec.withinRange(another, 9);//false
```
### segmentDistance
Returns closest distance between a point and a line segment produced by self and another vector. Arguments: `segmentDistance(anotherEndOfSegment, point)`.
```javascript
let vec = new Vector(-50, 40);
let another = new Vector(10, 10);
let point = new Vector(5, 30);
vec.segmentDistance(another, point);//15.652475842498529
```
### segmentDistanceSq
Returns closest distance between a point and a line segment produced by self and another vector, in power of two. Arguments: `segmentDistance(anotherEndOfSegment, point)`.
```javascript
let vec = new Vector(-50, 40);
let another = new Vector(10, 10);
let point = new Vector(5, 30);
vec.segmentDistanceSq(another, point);//245
```
### isShorter
Returns boolean: `true` if length is less than given length, else return `false`. Arguments: `isShorter(number)`.
```javascript
let vec = new Vector(-50, 40);
vec.isShorter(200);//true
```
### isLonger
Returns boolean: `true` if length is more than given length, else return `false`. Arguments: `isLonger(number)`.
```javascript
let vec = new Vector(-50, 40);
vec.isShorter(200);//false
```
### isEqual
Returns `true` if another vector has same x & y values as self, else return `false`. Arguments: `isEqual(vector)`.
```javascript
let vec = new Vector(-50, 40);
let another = new Vector(-50, 40);
vec.isEqual(another);//true
```
### isAligned
Returns `true` if another vector has the same angle as self. Optional second argument, tolerance, can be provided to extend allowed difference between the vectors' angles. Arguments: `isAligned(vector, number)`.
```javascript
let vec = new Vector(-500, 400);
let another = new Vector(-50, 40);
vec.isAligned(another);//true, no tolerance provided
```
### dot
Return the dot product of self and another vector. Arguments: `dot(vector)`.
```javascript
let vec = new Vector(10, 10);
let another = new Vector(2, 60);
vec.dot(another);//620
```
### cross
Return the cross product of self and another vector. Arguments: `cross(vector)`.
```javascript
let vec = new Vector(10, 10);
let another = new Vector(2, 60);
vec.cross(another);//580
```
### crossSign
Return the sign (1 or -1) of the cross product of self and another vector. Arguments: `cross(vector)`.
```javascript
let vec = new Vector(10, 10);
let another = new Vector(-2, -60);
vec.crossSign(another);//-1
```
### normalize
Sets the length of the vector to 1. Normalization doesn't have any effect on vectors with zero length.
```javascript
let vec = new Vector(10, 10);
vec.normalize();
console.log(vec);//{x: 0.7071067811865475, y: 0.7071067811865475}
```
### toLength
Sets the length of the vector. Returns self so can be chained.
```javascript
let vec = new Vector(10, 10);
vec.toLength(1);
console.log(vec);//{x: 0.7071067811865475, y: 0.7071067811865475}
```
### stretch
Increases the length of the vector. Arguments: `stretch(number)`. Returns self so can be chained.
```javascript
let vec = new Vector(10, 10);
vec.stretch(5);
console.log(vec);//{x: 15, y: 15}
```
### limit
Limits the length of the vector. Arguments: `limit(number)`. Returns self so can be chained.
```javascript
let vec = new Vector(10, 0);
vec.limit(5);
console.log(vec);//{x: 5, y: 0}
```
### unlimit
Stretches the length of the vector if its' length is less than given length. Arguments: `unlimit(number)`. Returns self so can be chained.
```javascript
let vec = new Vector(10, 0);
vec.unlimit(15);
console.log(vec);//{x: 15, y: 0}
```
### clampLength
Clamps the length of the vector to be between two given values. Arguments can be provided at any order. Arguments: `clampLength(limit1 [, limitn])`. Returns self so can be chained.
```javascript
let vec = new Vector(1, 0);
vec.clampLength(5, 10);
console.log(vec);//{x: 5, y: 0}
```
### clampAngle
Clamps the angle of the vector to be between within given angle to another vector. If the vector is outside of the allowed range, closest allowed angle is set. Arguments: `clampAngle(angle, vector)`. Returns self so can be chained.
```javascript
let vec = new Vector(1, 0);
let another = new Vector(30, 100);
vec.clampAngle(Math.PI / 10, another);
console.log(vec);//{x: 0.5692686788038682, y: 0.822151550100648}
```
### angleBetween
Returns the angle between self and another vector as absolute value. Arguments: `angleBetween(vector)`.
```javascript
let vec = new Vector(-1, 0);
let another = new Vector(1, 1);
vec.angleBetween(another);//2.356194490192345
```
### angleBetweenSigned
Returns the angle between self and another vector where sign of the angle tells which direction the another vector is angled from self. Arguments: `angleBetweenSigned(vector)`.
```javascript
let vec = new Vector(-1, 0);
let another = new Vector(1, 1);
vec.angleBetweenSigned(another);//-2.356194490192345
```
### mirror
Rotates the vector by 180 degrees or PI radians. Returns self so can be chained.
```javascript
let vec = new Vector(-14, 50);
vec.mirror();//{x: 14, y: -50}
```
### zero
Sets the x & y values to 0. Returns self so can be chained.
```javascript
let vec = new Vector(-14, 50);
vec.zero();//{x: 0, y: 0}
```
### toNormal
Rotates self by 90 degrees or PI / 2 radians. Returns self so can be chained. Optional argument can be provided to get mirrored normal. Arguments: `toNormal(boolean)`. Returns self so can be chained.
```javascript
let vec = new Vector(1, 0);
vec.toNormal();//{x: 0, y: 1}
```
### normalTo
Sets self to the normal of another vector. Optional argument can be provided to get mirrored normal. Arguments: `toNormal(boolean)`. Returns self so can be chained.
```javascript
let vec = new Vector(100, 0);
let another = new Vector(20, 50);
vec.normalTo(another);//{x: 92.84766908852593, y: 37.13906763541038}
```
### rotate
Rotate vector by given radians. Arguments: `rotate(radians)`. Returns self so can be chained.
```javascript
let vec = new Vector(100, 0);
vec.rotate(- Math.PI / 2);//{x: 0, y: -100}
```
### lerpAlign
Rotate the vector towards aligning it with another vector by given radians if the vectors aren't aligned. Rotates towards the direction with smallest angle difference (ie. doesn't take rotation direction of over PI angle). Arguments: `lerpAlign(radians, vector)`. Returns self so can be chained.
```javascript
let vec = new Vector(100, 0);
let another = new Vector(0, 100);
vec.lerpAlign(Math.PI / 10, another);//{x: 95.10565162951536, y: 30.901699437494745}
```
### lerpAlignFixed
Rotate the vector towards aligning it with another vector by given radians if the vectors aren't aligned. Rotation direction is depending on the clockwise/anticlockwise argument. Arguments: `lerpAlignFixed(radians, clockwise, vector)`. Returns self so can be chained.
```javascript
let vec = new Vector(100, 0);
let another = new Vector(0, 100);
vec.lerpAlignFixed(Math.PI / 10, false, another);//{x: 95.10565162951536, y: -30.901699437494745}
```
