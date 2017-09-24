// Vector library

function add (vec1, vec2) {
  // This function adds the two vectors given
  let vecR = []
  for (let i = 0; i < vec1.length; i++) {
    vecR[i] = vec1[i] + vec2[i]
  }
  return vecR
}

function sub (vec1, vec2) {
  // This function subtracts the two vectors given
  let vecR = []
  for (let i = 0; i < vec1.length; i++) {
    vecR[i] = vec1[i] - vec2[i]
  }
  return vecR
}

function mult (vec, scalar) {
  // This function multiplies the two vectors given
  let vecR = []
  for (let i = 0; i < vec.length; i++) {
    vecR[i] = vec[i] * scalar
  }
  return vecR
}

function inverse (vec) {
  // This function returns the inverse of the vector
  let vecR = []
  for (let i = 0; i < vec.length; i++) {
    vecR[i] = vec[i] * -1
  }
  return vecR
}

function normalize (vec) {
  // This function normalise the vector
  let r = mag(vec)
  if (isNaN(r) || r === 0) r = 1
  let vecR = []
  for (let i = 0; i < vec.length; i++) {
    vecR[i] = vec[i] / r
  }
  return vecR
}

function distance (vec1, vec2) {
  // Returns the magnitude of the distance between the two vectors given
  return mag(sub(vec1, vec2))
}

function copy (vec) {
  let vecR = []
  for (let i = 0; i < vec.length; i++) {
    vecR[i] = vec[i]
  }
  return vecR
}

function limit (vec, scalar) {
  // This function limits the magnitud of the vector
  let vecR = []
  if (mag(vec) > scalar) {
    vecR = normalize(vec)
    vecR = mult(vecR)
    return vecR
  }
  return vec
}

function dot (vec1, vec2) {
  // This function returns the dot product of the two vectors given
  let result = 0
  for (let i = 0; i < vec1.length; i++) {
    result += vec1[i] * vec2[i]
  }
  return result
}

function mag (vec) {
  // This functions returns the margnitud of the vector given
  return Math.sqrt(dot(vec, vec))
}

function moveTowards (vec1, vec2, speed, stop) {
  // Moves the first vector given to the second vector given
  if (speed === undefined) speed = 1
  if (stop === undefined) stop = 1

  let distance = sub(vec2, vec1)
  if (mag(distance) > stop) {
    let vecR = []
    distance = normalize(distance)
    distance = mult(distance, speed)
    vecR = add(vec1, distance)
    return vecR
  }
  return vec1
}

function angleBetween (vec1, vec2) {
  // Returns the angle between 2 vectors
  return Math.acos((dot(vec1, vec2)) / (mag(vec1) * mag(vec2)))
}

function setMag (vec, scalar) {
  // Sets the magnitud of the vector to the length of the scalar given
  let vecR = normalize(vec)
  vecR = mult(vecR, scalar)
  return vecR
}

function toDegree (radian) {
  return radian * (180 / Math.PI)
}

function cross (vec1, vec2) {
  let vecR = []
  vecR[0] = (vec1[1] * vec2[2]) - (vec1[2] * vec2[1])
  vecR[1] = (vec1[2] * vec2[0]) - (vec1[0] * vec2[2])
  vecR[2] = (vec1[0] * vec2[1]) - (vec1[1] * vec2[0])
  return vecR
}

/*
  This part of the code only works with 2-dimensional vectors
*/

function angle (vec) {
  // Returns the angle of the vector
  var result = /*-*/Math.atan2(vec[1], vec[0]) //- 3.14
  // if (result < 0) result += (2 * Math.PI)
  return result
}

function addAngle (vec, ang, piv) {
  let vecR = [vec[0], vec[1]]

  let s = Math.sin(ang)
  let c = Math.cos(ang)

  vecR = vector.sub(vecR, piv)

  // rotate point
  let xnew = vecR[0] * c - vecR[1] * s
  let ynew = vecR[0] * s + vecR[1] * c

  // translate point back:
  vecR = vector.add([xnew, ynew], piv)

  /*
  let l = mag(vec)
  let newAngle = angle(vec) + ang
  let vecR = []
  vecR[0] = l * Math.cos(newAngle)
  vecR[1] = l * Math.sin(newAngle)
  */
  return vecR
}

function setAngle (vec, ang) {
  let l = mag(vec)
  let vecR = []
  vecR[0] = l * Math.cos(ang)
  vecR[1] = l * Math.sin(ang)
  return vecR
}

function fromMD (magnitud, direction) {
  let vecR = [1, 1]
  vecR = setAngle(vecR, direction)
  vecR = setMag(vecR, magnitud)
  return vecR
}

function linearIntersect (a, b, c, d) {
  let r = vector.sub(b, a)
  let s = vector.sub(d, c)
  let d1 = vector.cross2d(r, s)
  let u = vector.cross2d(vector.sub(c, a), r) / d1
  let t = vector.cross2d(vector.sub(c, a), s) / d1
  if (!((u < 1 && u > 0) && (t < 1 && t > 0))) {
    u = 1
    t = 1
  }
  return {u, t}
}

function cross2d (ve1, vec2) {
  return ve1[0] * vec2[1] - ve1[1] * vec2[0]
}

const vector = { fromMD, cross2d, linearIntersect, cross, sub, add, mult, inverse, normalize, setMag, angle, addAngle, distance, copy, moveTowards, limit, dot, angleBetween, mag, toDegree, setAngle }

export default vector
