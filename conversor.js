function cotação(){
    let dolar = document.getElementById('dolar')
    let d = Number(dolar.value)
    let real = document.getElementById('real')
    let r = Number(real.value)
    if (d == 0){
        let resultado = r / 5.40
        document.getElementById('resposta').innerHTML =  (`O valor de ${r.toLocaleString('pt-br',{style:'currency', currency:'BRL'})} equivale á ${resultado.toLocaleString('en-us',{style:'currency', currency:'USD'})}`)
    } else {
        let resultado = d * 5.40
        document.getElementById('resposta').innerHTML =
        (`O valor de ${d.toLocaleString('en-us',{style:'currency', currency:'USD'})} equivale á ${resultado.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`)
    }   
}