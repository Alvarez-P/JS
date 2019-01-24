var signo = prompt('¿Cual es tu signo?')
console.log(signo)

const signoUsuario = signo => {
    switch (signo){
        case 'libra':
            console.log('eres libra')
            break
        case 'cancer':
        case 'cáncer':
            console.log('eres cancer')
            break
        default:
            console.log('No eres libra ni cancer')
            break
    }
}
signoUsuario(signo)