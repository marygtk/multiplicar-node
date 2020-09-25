

const handleMultipli = (base, multiplicador)=>{
    let esSuma = false;
    let resultado = 0;
    if (multiplicador > 0) {
        esSuma = true;
    }
    
    for (let index = 0; index < base; index++) {
        if (esSuma) {
            resultado += multiplicador;
        }else{
            resultado -= multiplicador;
        } 
    }
    
    return resultado;
}

const prueba = handleMultipli(9,5);

console.log(prueba);
