// Estas son las variables utilizadas en el juego una es una variable tipo entero para el otro
// y la otra es un array que representa el inventario
var ORO = 500
var INVENTARIO = []

// Esta funcion es utilizada por la funcion para generar el mundo para crear las distintas opciones
function opcion(text, ir) {
    this.text = text
    this.ir = ir
}

// Esta funcion se ocupa de generar el objeto con el cual se genera el mundo
function level() {
    this.text = arguments[0]
    this.url = arguments[1]
    this.options = []
    for (var i in arguments) {
        if (i != 0) {
            if (i != 1) {
                data = new opcion(arguments[i][0], arguments[i][1])
                this.options.push(data)
            }
        }
    }
}

// Esta funcion es utilizada para a partir de objetos tipo level como el que se ve abajo que son objectos generados 
// con la funcion level se cambie el contenido de la pantalla
/*
    inicio: {
        text: "Eres un campesino y tu esposa es secuestrada",
        options: [{
            text: "No hacer nada",
            ir: "perdiste"
        }, {
            text: "Perseguir secuestrador",
            ir: "ciudad_home"
        }]
    },
*/
function render(level) {
    $("#text").text(level.text)

    if (level.url) {
        $("html").css('background-image', "url('./" + level.url + "')")
        $("html").css('background-size', "100%")
    }

    var contenido = "<div class='uk-flex uk-flex-column uk-flex-center'>";
    for (var i in level.options) {
        contenido += "<div id='nuevo' class='opcion btn_music' place=" + level.options[i].ir + ">" + level.options[i].text + "</div> <br>"
    }
    contenido += "</div>"
    $("#options").html(contenido)
}

// Esta funcion añade items al inventario
function inventarioAdd(item) {
    INVENTARIO.push(item)
    $('#invent').html('')

    INVENTARIO.forEach(function (element) {
        $('#invent').append('<p> <img class="iImage" src="./' + element + '"></p>')
    })
}

// Esta funcion añade items al menu cuando empieza el juego
function startGame() {
    $("#menu").append('<div class="uk-float-right"><div class="opcion" id="oro">Oro ' + ORO + '$</div> <div class="uk-float-right"></div><div class="uk-float-right uk-margin-right"><div uk-toggle="target: #inventario" class="si">Inventario</div></div>')
}

// Esta funcion es utilizada en la fase de pelea y continene un cronometro interno para el timepo de la pelea
function pelea(GAME) {
    var time = 5
    var inte = setInterval(function () {
        $('#options').html("")
        $('#options').html("<h3 class='red'>ESTAS PELIANDO  " + time + "</h3>")
        time -= 1
        if (time == 0) {
            render(GAME["ganaste"])
            clearInterval(inte)
        }
    }, 1000)
}

// Esta funcion es utilizada al inicio del juego
$(document).ready(function () {

    // Aqui son creadas cada una de las pantallas del juego
    var GAME = {
        inicio: new level("Eres un campesino y tu esposa es secuestrada", "house.jpg", ["No hacer nada", "perdiste"], ["Perseguir secuestrador", "ciudad_home"]),
        ciudad_home: new level("Estas en la ciudad y los secuestadores salieron de la ciudad", "home_town.jpg", ["Seguir a los secuestradores", "$salir"], ["Ir a la tienda", "tienda"]),
        tienda: new level("Estas en la tienda que deseas comprar", 'tienda.jpg', ["Posion $10", "$posion"], ["Espada $250", "$espada"], ["salir", "ciudad_home"]),
        perdiste: new level("Perdiste", "perder.jpg", ["Jugar denuevo", "inicio"]),
        salir: new level("El guardian de las ciudad no te deja salir porque no tienes el armamento necesario para salir, Vete a la tienda para comprarlo ", "door.jpg", ["Ir a la tienda", "tienda"]),
        fuera: new level("Estas en las afueras de la ciudad", "outside.jpg", ["Ir al pueblo mas cercano", "$frache"], ["Volver a la ciudad", "ciudad_home"]),
        frache: new level("Estas en el pueblo Frache aqui tambien hicieron una serie de secuestros y un anciano te regala una super espada revisa tu inventario si quieres verla, Dice que los secuestradores se encuetran en su castillo a las afueras de la ciudad", "franche.jpg", ["Ir a castillo", "castillo"]),
        castillo: new level("Derotas a los guardianes de la entrada del castillo", "castle.jpg", ["Entrar", "$inside"]),
        inside: new level("Estas dentro del castillo", "inside.jpg"),
        ganaste: new level("GANASTE!!!!", "ganar.jpeg")
    }

    // Y aqui las pantallas que generan una accion por una fnucion, Todas empiezan con $ para saber cuando son pantallas
    // que generan una accion no relacionada con la interfaz y pueden que tambien generen algo con la interfaz
    // pero llamando a un objeto de tipo GAME a que sea renderizado
    var GFUNCS = {
        $posion: function () {
            if (ORO >= 10) {
                ORO = ORO - 10
                $('#oro').text(ORO + '$')
                inventarioAdd("posion.png")
            }
            else {
                alert("No tiene suficiente dinero")
            }
        },
        $espada: function () {
            if (ORO >= 250) {
                ORO = ORO - 250
                $('#oro').text(ORO + '$')
                inventarioAdd("sword.png")
            }
            else {
                alert("No tiene suficiente dinero")
            }
        },
        $salir: function () {
            if (INVENTARIO.indexOf("sword.png") != -1) {
                render(GAME['fuera'])
            }
            else {
                render(GAME['salir'])
            }
        },
        $frache: function () {
            inventarioAdd("super.png")
            render(GAME['frache'])
        },
        $inside: function () {
            render(GAME['inside'])
            pelea(GAME)
        }

    }

    // Esto para saber el estado de la musica y reproducirla o parala dependiendo del estado
    var estado_musica = true

    var hover = new Howl({
        src: ['./hover.mp3']
    })

    var sound = new Howl({
        src: ['./town.mp3']
    })

    sound.play();

    // Lo hago de esta forma para poder manejar elementos anadidos dinamicamente
    $('#options').on('mouseenter', '.btn_music', function () {
        hover.play()
    })

    $('#options').on('click', '.opcion', function (e) {

        if ($(this).attr('place')[0] != '$') {
            render(GAME[$(this).attr('place')])
        } else {
            GFUNCS[$(this).attr('place')]()
        }

    })

    $('#musica').click(function () {
        if (estado_musica) {
            sound.stop()
            estado_musica = false
            $('#musica').text("Reproducir musica")
            $('#musica').removeClass('no')
            $('#musica').addClass('si')
        } else {
            sound.play()
            estado_musica = true
            $('#musica').text("Parar musica de fondo")
            $('#musica').removeClass('si')
            $('#musica').addClass('no')
        }
    })

    // Boton para iniciar la partida
    $('#nuevo').click(function () {
        startGame()
        render(GAME['inicio'])
    })
})
