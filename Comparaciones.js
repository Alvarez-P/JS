var persona = {
    nombre: 'Adolfo',
    apellido: 'Alvarez',
    edad: 28,
    ingeniero: true,
    futbolista: false,
    estudiante: true
}
function imprimirProfe(persona){
    console.log(`${persona.nombre} es: `)
    if ( persona.ingeniero ){
        console.log('Ingeniero')
    }
    if ( persona.futbolista ){
        console.log('futbolista')
    }
    if ( persona.estudiante ){
        console.log('estudiante')
    }
  
}
function imprimirEdad(persona){
        console.log(`${persona.nombre} es ${persona.edad >= 18 ?'mayor':'menor'} de edad`)
}

imprimirProfe(persona)
imprimirEdad(persona)

