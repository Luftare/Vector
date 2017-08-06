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
