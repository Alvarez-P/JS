
var p1 = {
        nombre : 'Adolfo',
        apellido : 'Alvarez',
        edad : 21
    }
var p2 = {
        nombre : 'Esteban',
        apellido :  'Pacheco',
        edad: 20
    }

function Saludo(persona){
    var { nombre, edad } = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

Saludo(p1)
Saludo(p2)