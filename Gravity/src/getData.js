
function getData () {
  const gravity = Number(document.getElementById('gravity').value)
  const electricity = Number(document.getElementById('electricity').value)
  const restitution = Number(document.getElementById('restitution').value)
  const numberOfBodies = Number(document.getElementById('bodies').value)
  const value1 = Number(document.getElementById('av1').value)
  const value2 = Number(document.getElementById('av2').value)

  return {
    gravity: gravity,
    electricity: electricity,
    restitution: restitution,
    average: [value1, value2],
    bodies: numberOfBodies
  }
}

export default getData
