const lista = document.getElementById('listaDeProyectos')

const proyectos = [
  {
    link: './coins/index.html',
    img: './img/coins.png',
    name: 'KonCoins'
  },
  {
    link: 'https://suplementos-santo-domingo.herokuapp.com/',
    img: './img/suplementos.png',
    name: ''
  },
  {
    link: './Gravity/index.html',
    img: './img/Gravity.png',
    name: 'Gravity'
  },
  {
    link: './game project/P/index.html',
    img: './img/aventurero.png',
    name: 'Aventurero'
  },
  {
    link: './2d/index.html',
    img: './img/2D Collisions.png',
    name: '2D Particles simulation'
  },
  {
    link: './3d/index.html',
    img: './img/3D Collisions.png',
    name: '3D Particles simulation'
  },
  {
    link: './snake/index.html',
    img: './img/Snake.png',
    name: 'Snake game'
  },
  {
    link: './cubeGame/index.html',
    img: './img/gameOfCubes.png',
    name: 'Game of cubes'
  },
  {
    link: './eco/index.html',
    img: './img/Evolution.png',
    name: 'Ecosistem simulation'
  },
  {
    link: './Ecosistem simulator/index.html',
    img: './img/Evolution2.png',
    name: 'Ecosistem simulation2'
  },
  {
    link: './tree/index.html',
    img: './img/Tree.png',
    name: 'Tree generator'
  },
  {
    link: './Planet formation/index.html',
    img: './img/Planet.png',
    name: 'Planet formation'
  },
  {
    link: './Electricity/index.html',
    img: './img/Electricity.png',
    name: 'Electricity'
  },
  {
    link: './Tanks/index.html',
    img: './img/Tanks.png',
    name: 'Tanks Game'
  },
  {
    link: './Cellular Automata/index.html',
    img: './img/Celular.png',
    name: 'Cellular automata'
  },
  {
    link: './spaceShip/index.html',
    img: './img/Space.png',
    name: 'Spaceship'
  },
  {
    link: './Evol/index.html',
    img: './img/Evol.png',
    name: 'Evolution'
  }
]

for (let counter = 0; counter < proyectos.length; counter++) {
  let proyecto = proyectos[counter]
  const card = document.createElement('div')
  card.setAttribute('class', 'col m3')
  card.innerHTML = `
    <a href="${proyecto.link}">
        <div class="conta">
            <div class="card">
                <div class="card-image">
                    <img src="${proyecto.img}" alt="">
                    <span class="card-title">${proyecto.name}</span>
                </div>
            </div>
        </div>
    </a>
  `

  lista.appendChild(card)
}
window.onload = function () {
  Particles.init({
      selector: '.background',
      maxParticles: 250,
      color: '#FFFFFF',
      connectParticles: false,
  });
};