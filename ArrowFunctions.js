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
const imprimirEdad = ({ nombre, edad }) => console.log(`${nombre} es ${edad >= 18 ?'mayor':'menor'} de edad`)


imprimirProfe(persona)
imprimirEdad(persona)