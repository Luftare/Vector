# Vector
Vector is an extended 2D vector library with lots of utilitary methods.
## How to install
```html
<script src="Vector.js"></script>
```
## Properties
### x & y
x-axis and y-axis values. These are the only properties of the `Vector` object.
```javascript
let vec = new Vector(100, 50);
console.log(vec.x, vec.y);//--> 100, 50
```
## Getters
### length
Length of the vector.
```javascript
let vec = new Vector(100, 50);
vec.length//111.80339887498948
```
### angle
Angle of the vector in radians.
```javascript
let vec = new Vector(100, 50);
vec.angle//0.4636476090008061
```
## Setters
### length
Set the length of the vector while maintaining the original angle of the vector.
```javascript
let vec = new Vector(100, 50);
vec.length = 25;//{x: 22.360, y: 11.180}
```
### angle
Set the angle of the vector in radians ie. rotate the vector to point at given angle.
```javascript
let vec = new Vector(100, 50);
vec.angle = Math.PI;//{x: -111.80339887498948, y: 0}
```
## Methods
### add(vector1 [, vectorN])
Sum of one or more vectors. Returns self so can be chained.
```javascript
let vec = new Vector(50, 50);
let other = new Vector(100, 100);
let another = new Vector(5, 0);
vec.add(other, another);//{x: 155, y: 150}
```
### clone()
Returns a new vector with x & y values copied from self.
```javascript
let vec = new Vector(50, 50);
let copy = vec.clone();
console.log(copy.x, copy.y);//--> 50, 50
```
### fromArray(array)
Set x & y properties from an array. Returns self so can be chained.
```javascript
let vec = new Vector();
let arr = [10, 20];
vec.fromArray(arr);//{x: 10, y: 20}
```
### fromObject(object)
Set x & y properties from object. Returns self so can be chained.
```javascript
let obj = {x: 10, y: 20};
let vec = new Vector();
vec.fromObject(obj);//{x: 10, y: 20}
```
### fromAngleRadius(angle, radius)
Set x & y properties from polar coordinates. Returns self so can be chained.
```javascript
let vec = new Vector();
vec.fromAngleRadius(Math.PI, 50);//{x: -50, y: 0}
```
### toArray()
Returns a new array with x & y values at index 0 (x) and 1 (y).
```javascript
let vec = new Vector(10, 20);
let arr = vec.toArray();//[10, 20]
```
### toObject()
Returns a new object with x & y properties copied from the vector.
```javascript
let vec = new Vector(10, 20);
let obj = vec.toObject();//{x: 10, y: 20}
```
### toString()
Returns a string presentation of the vector properties.
```javascript
let vec = new Vector(10, 20);
let str = vec.toString();//{x: 10, y: 20}'
```
### set(x, y) or set(vector)
Set the x & y values. Can be used with one or two arguments:
* 1 argument: copy object's x & y properties to the vector
* 2 arguments: set provided x & y arguments to the vector
Returns self so can be chained.
```javascript
//one argument
let other = {x: 200, y: 300};//this can be a vector, too
let vec = new Vector();
vec.set(other);//{x: 200, y: 300};

//two arguments
let v = new Vector();
v.set(20, 50);//{x: 20, y: 50};
```
### setFromTo(startPoint, endPoint)
Sets vector to point from one point to another. Returns self so can be chained.
```javascript
//one argument
let from = new Vector(50, 50);
let to = new Vector(100, 300);
let vec = new Vector();
vec.setFromTo(from, to);//{x: 50, y: 250};
```
### random([length])
Generates random vector with a length of 1. Optional argument can be passed to specify the length of the resulting vector. Returns self so can be chained.
```javascript
let vec = new Vector();
vec.random();//possibly: {x: -0.23372631348780365, y: 0.9723024274285244}
```
### substract(vector1 [, vectorN])
Substract one or more vectors. Returns self so can be chained.
```javascript
let vec = new Vector(50, 50);
let another = new Vector(10, 5);
vec.substract(another);//{x: 40, y: 45}
```
### substraction(vector1, vector2)
Sets vector value to the substraction of two vectors. Doesn't mutate the vectors passed as arguments. Returns self so can be chained.
```javascript
let vec = new Vector();
let other = new Vector(100, 100);
let another = new Vector(5, 5);
vec.substraction(another, other);//{x: -95, y: 95}
```
### scaledAdd(scale, vector1 [, vectorN])
Add one or more vectors while multiplying the vectors by given scalar. Doesn't mutate vectors passed as arguments. Returns self so can be chained.
```javascript
let position = new Vector(10, 10);
let velocity = new Vector(100, 100);
let dt = 0.1;
position.scaledAdd(dt, velocity);//{x: 20, y: 20}
```
### scale(number)
Multiply x & y values by given number. Returns self so can be chained.
```javascript
let vec = new Vector(10, 10);
vec.scale(10);//{x: 100, y: 100}
```
### toAngle(angle)
Rotate the vector to point to given angle. Returns self so can be chained.
```javascript
let vec = new Vector(0, 100);
vec.toAngle(Math.PI);//{x: -100, y: 0}
```
### alignWith(vector)
Align the vector to point towards the same direction as the vector provided. Returns self so can be chained.
```javascript
let vec = new Vector(200, 100);
let another = new Vector(10, 0);
vec.alignWith(another);//{x: 223.60679774997897, y: 0}
```
### distance(vector)
Returns the distance between the vector and another vector. Returns self so can be chained.
```javascript
let vec = new Vector(200, 100);
let another = new Vector(10, 0);
vec.distance(another);//214.7091055358389
```
### distanceSq(vector)
Returns the distance between the vector and another vector in power of two. More performant than the `distance` method when comparing two distances.
```javascript
let vec = new Vector(200, 100);
let another = new Vector(10, 0);
vec.distanceSq(another);//46100
```
### withinRange(vector, distance)
Returns boolean value depending wether given vector is within given distance of another vector when placing both vectors starting point to the origo.
```javascript
let vec = new Vector(0, 0);
let another = new Vector(10, 0);
vec.withinRange(another, 9);//false
```
### segmentDistance(otherEndofSegmentVector, point)
Returns closest distance between a point and a line segment defined by self and another vector.
```javascript
let vec = new Vector(-50, 40);
let another = new Vector(10, 10);
let point = new Vector(5, 30);
vec.segmentDistance(another, point);//15.652475842498529
```
### segmentDistanceSq(otherEndofSegmentVector, point)
Returns closest distance between a point and a line segment defined by self and another vector in power of two.
```javascript
let vec = new Vector(-50, 40);
let another = new Vector(10, 10);
let point = new Vector(5, 30);
vec.segmentDistanceSq(another, point);//245
```
### isShorter(length)
Returns a boolean:
* `true` if length is less than given length
* else return `false`
```javascript
let vec = new Vector(-50, 40);
vec.isShorter(200);//true
```
### isLonger
Returns a boolean: 
* `true` if length is more than given length
* else return `false`
```javascript
let vec = new Vector(-50, 40);
vec.isShorter(200);//false
```
### isEqual(vector)
Returns `true` if another vector has identical x & y properties as self, else return `false`.
```javascript
let vec = new Vector(-50, 40);
let another = new Vector(-50, 40);
vec.isEqual(another);//true
```
### isAligned(vector, [tolerance])
Returns `true` if another vector has the same angle as self. Optional second argument, tolerance, can be provided to extend truethful difference between the vectors' angles.
```javascript
let vec = new Vector(-500, 400);
let another = new Vector(-50, 40);
vec.isAligned(another);//true
```
### dot(vector)
Return the dot product of self and another vector.
```javascript
let vec = new Vector(10, 10);
let another = new Vector(2, 60);
vec.dot(another);//620
```
### cross(vector)
Return the cross product of self and another vector.
```javascript
let vec = new Vector(10, 10);
let another = new Vector(2, 60);
vec.cross(another);//580
```
### crossSign(vector)
Return the sign (1 or -1) of the cross product of self and another vector.
```javascript
let vec = new Vector(10, 10);
let another = new Vector(-2, -60);
vec.crossSign(another);//-1
```
### normalize()
Sets the length of the vector to 1. Normalization doesn't have any effect on vectors with zero length.
```javascript
let vec = new Vector(10, 10);
vec.normalize();//{x: 0.7071067811865475, y: 0.7071067811865475}
```
### toLength(length)
Sets the length of the vector. Returns self so can be chained.
```javascript
let vec = new Vector(10, 10);
vec.toLength(1);
console.log(vec);//{x: 0.7071067811865475, y: 0.7071067811865475}
```
### stretch(length)
Increases the length of the vector by given length. Returns self so can be chained.
```javascript
let vec = new Vector(10, 0);
vec.stretch(5);//{x: 15, y: 0}
```
### limit(length)
Limits the length of the vector. Returns self so can be chained.
```javascript
let vec = new Vector(10, 0);
vec.limit(5);//{x: 5, y: 0}
```
### unlimit(length)
Stretches the length of the vector if its' length is less than given length. Arguments: `unlimit(number)`. Returns self so can be chained.
```javascript
let vec = new Vector(10, 0);
vec.unlimit(15);//{x: 15, y: 0}
```
### clampLength(number1 [, numberN])
Clamps the length of the vector to be between two given values. Arguments can be provided at any order.  Returns self so can be chained.
```javascript
let vec = new Vector(1, 0);
vec.clampLength(5, 10);//{x: 5, y: 0}
```
### clampAngle(angle, vector)
Clamps the angle of the vector to be between within given angle to another vector. If the vector is outside of the allowed range, closest allowed angle is set. Returns self so can be chained.
```javascript
let vec = new Vector(1, 0);
let another = new Vector(30, 100);
vec.clampAngle(Math.PI / 10, another);//{x: 0.5692686788038682, y: 0.822151550100648}
```
### angleBetween(vector)
Returns the angle between self and another vector as absolute value in radians. 
```javascript
let vec = new Vector(-1, 0);
let another = new Vector(1, 1);
vec.angleBetween(another);//2.356194490192345
```
### angleBetweenSigned(vector)
Returns the angle between self and another vector where sign of the angle determines direction the another vector is angled from self.
```javascript
let vec = new Vector(-1, 0);
let another = new Vector(1, 1);
vec.angleBetweenSigned(another);//-2.356194490192345
```
### mirror()
Rotates the vector by 180 degrees or PI radians. Returns self so can be chained.
```javascript
let vec = new Vector(-14, 50);
vec.mirror();//{x: 14, y: -50}
```
### zero()
Sets the x & y values to 0. Returns self so can be chained.
```javascript
let vec = new Vector(-14, 50);
vec.zero();//{x: 0, y: 0}
```
### toNormal([boolean])
Rotates self by 90 degrees or PI / 2 radians. Returns self so can be chained. Optional argument can be provided to get mirrored normal.  Returns self so can be chained.
```javascript
let vec = new Vector(1, 0);
vec.toNormal();//{x: 0, y: 1}
```
### normalTo([boolean])
Sets the angle to be the normal of another vector. Optional argument can be provided to get mirrored normal. Returns self so can be chained.
```javascript
let vec = new Vector(100, 0);
let another = new Vector(20, 50);
vec.normalTo(another);//{x: 92.84766908852593, y: 37.13906763541038}
```
### rotate(radians)
Rotate vector by given radians. Returns self so can be chained.
```javascript
let vec = new Vector(100, 0);
vec.rotate(- Math.PI / 2);//{x: 0, y: -100}
```
### lerpAlign(radians, vector)
Rotate the vector towards aligning it with another vector by given radians if the vectors aren't already parallel. Rotates towards the direction with smallest angle difference (ie. doesn't take rotation direction of over PI angle). Returns self so can be chained.
```javascript
let vec = new Vector(100, 0);
let another = new Vector(0, 100);
vec.lerpAlign(Math.PI / 10, another);//{x: 95.10565162951536, y: 30.901699437494745}
```
### lerpAlignFixed(radians, clockwise, vector)
Rotate the vector towards aligning it with another vector by given radians if the vectors aren't aligned. Rotation direction is determined by the second argument (clockwise), truethful value rotates clockwise and falsy value rotates anti-clockwise. Returns self so can be chained.
```javascript
let vec = new Vector(100, 0);
let another = new Vector(0, 100);
vec.lerpAlignFixed(Math.PI / 10, false, another);//{x: 95.10565162951536, y: -30.901699437494745}
```
