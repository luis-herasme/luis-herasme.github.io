
  const lista = document.getElementById("listaDeProyectos");

  const proyectos = [
    {
      link: "./optical/vid.mp4",
      img: "./img/optic.png",
      name: "Optical communication system",
    },
    {
      link: "https://github.com/LuisHerasme/Raycasting-python",
      img:
        "https://github.com/LuisHerasme/Raycasting-python/blob/master/show.gif?raw=true",
      name: "3D raycasting made in python",
    },
    {
      link: "https://github.com/LuisHerasme/Render",
      img:
        "https://raw.githubusercontent.com/LuisHerasme/Render/master/show.gif",
      name: "Render 3D, (Python)",
    },
    {
      link: "./fractalsWGL/index.html",
      img: "./img/fractalWebGl.png",
      name: "Fractales WebGL",
    },
    {
      link: "",
      img: "./img/SistemaGestionHogar.png",
      name: "Home management system (C)",
      disabled: true,
    },
    {
      link: "https://luisagario.herokuapp.com/",
      img: "./img/luisagario.png",
      name: "LuisAgario",
    },
    {
      link: "",
      img: "./img/hotdog.png",
      name: "Hot dog or not",
      disabled: true,
    },
    {
      link: "https://github.com/LuisHerasme/Game-made-in-C",
      img: "./img/zombie.png",
      name: "Zombie",
    },
    {
      link: "https://github.com/LuisHerasme/intec_man",
      img: "./img/intecMan.png",
      name: "IntecMan",
    },
    {
      link: "./Fractales/index.html",
      img: "./img/fractales.png",
      name: "Fractales",
    },
    {
      link: "./coins/index.html",
      img: "./img/coins.png",
      name: "KonCoins",
    },
    {
      link: "https://suplementos-santo-domingo.herokuapp.com/",
      img: "./img/suplementos.png",
      name: "Suplementos santo domingo",
    },
    {
      link: "./Gravity/index.html",
      img: "./img/Gravity.png",
      name: "Gravity",
    },
    {
      link: "./game project/P/index.html",
      img: "./img/aventurero.png",
      name: "Aventurero",
    },
    {
      link: "http://comprayapp.com/",
      img: "./img/comprayapp.png",
      name: "comprayapp",
    },
    {
      link: "./2d/index.html",
      img: "./img/2D Collisions.png",
      name: "2D Particles simulation",
    },
    {
      link: "./3d/index.html",
      img: "./img/3D Collisions.png",
      name: "3D Particles simulation",
    },
    {
      link: "./snake/index.html",
      img: "./img/Snake.png",
      name: "Snake game",
    },
    {
      link: "./cubeGame/index.html",
      img: "./img/gameOfCubes.png",
      name: "Game of cubes",
    },
    {
      link: "./eco/index.html",
      img: "./img/Evolution.png",
      name: "Ecosistem simulation",
    },
    {
      link: "./Ecosistem simulator/index.html",
      img: "./img/Evolution2.png",
      name: "Ecosistem simulation2",
    },
    {
      link: "./tree/index.html",
      img: "./img/Tree.png",
      name: "Tree generator",
    },
    {
      link: "./Planet formation/index.html",
      img: "./img/Planet.png",
      name: "Planet formation",
    },
    {
      link: "https://luisherasme.github.io/LienzoEngine/",
      img: "./img/lienzoengine.png",
      name: "Lienzo Engine",
    },
    {
      link: "./Electricity/index.html",
      img: "./img/Electricity.png",
      name: "Electricity",
      desciption: "Simulacion del comportamiento de particulas cargadas.",
    },
    {
      link: "./Tanks/index.html",
      img: "./img/Tanks.png",
      name: "Tanks Game",
    },
    {
      link: "./Cellular Automata/index.html",
      img: "./img/Celular.png",
      name: "Cellular automata",
    },
    {
      link: "./spaceShip/index.html",
      img: "./img/Space.png",
      name: "Spaceship",
    },
    {
      link: "./Evol/index.html",
      img: "./img/Evol.png",
      name: "Evolution",
    },
  ];

  const des = (d) => {
    if (!d) return "No descripción disponible.";
    return d;
  };

  for (let counter = 0; counter < proyectos.length; ) {
    const cards = document.createElement("div");
    cards.setAttribute("class", "row");
    for (let i = 0; i < 3; i++) {
      if (counter < proyectos.length) {
      let proyecto = proyectos[counter];
      counter++;
      const card = document.createElement("div");
      card.setAttribute("class", "col-md-4 col-sm-12");
      card.setAttribute("style", "padding: 0px 7.5px 0px 7.5px;");
      if (proyecto.disabled) {
        card.innerHTML = `
        <div class="card mb-3" style="border-radius: 0px;">
          
            <div class="embed-responsive embed-responsive-16by9">
              <img class="card-img-top embed-responsive-item" alt="${proyecto.name}" style="border-radius: 0px;" src="${proyecto.img}">
            </div>
          
          <div class="card-body">
            <div class="card-title mb-0">
              <span class="truncate card-title">${proyecto.name}</span>
            </div>
          </div>
        </div>
      `;
      } else {
        card.innerHTML = `
        <div class="card mb-3" style="border-radius: 0px;">
          <a href="${proyecto.link}">
            <div class="embed-responsive embed-responsive-16by9">
              <img class="card-img-top embed-responsive-item" alt="${proyecto.name}" style="border-radius: 0px;" src="${proyecto.img}">
            </div>
          </a>
          <div class="card-body">
            <div class="card-title mb-0">
              <span class="truncate card-title">${proyecto.name}</span>
            </div>
          </div>
        </div>
      `;        
      }

      cards.appendChild(card);
    }
    }
    lista.appendChild(cards);
  }
