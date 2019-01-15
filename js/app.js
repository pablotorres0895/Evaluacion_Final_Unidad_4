let Calculadora = {
    keyPressResize: function(){

    },
    init : function(){
        let numUno    = 0;
        let numDos    = 0;
        let operador;
        let resultado = document.getElementById('display')
        
        let punto   = document.getElementById('punto')
        let on      = document.getElementById('on')
        let signo   = document.getElementById('sign')
        // operadores
        let igual   = document.getElementById('igual')
        let mas     = document.getElementById('mas')
        let dividir = document.getElementById('dividido')
        let menos   = document.getElementById('menos')
        let por     = document.getElementById('por')
        // numeros
        let nueve  = document.getElementById('9')
        let ocho   = document.getElementById('8')
        let siete  = document.getElementById('7')
        let seis   = document.getElementById('6')
        let cinco  = document.getElementById('5')
        let cuatro = document.getElementById('4')
        let tres   = document.getElementById('3')
        let dos    = document.getElementById('2')
        let uno    = document.getElementById('1')
        let cero   = document.getElementById('0')

        //eventos numeros
        cero.onclick = function(e){
            if(resultado.textContent != '0' && resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + cero.id
            }
        }
        uno.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = uno.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + uno.id
            }
        }
        dos.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = dos.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + dos.id
            }
        }
        tres.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = tres.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + tres.id
            }
        }
        cuatro.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = cuatro.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + cuatro.id
            }
        }
        cinco.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = cinco.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + cinco.id
            }
        }
        seis.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = seis.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + seis.id
            }
        }
        siete.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = siete.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + siete.id
            }
        }
        ocho.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = ocho.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + ocho.id
            }
        }
        nueve.onclick = function(e){
            if(resultado.textContent === '0'){
                resultado.textContent = nueve.id
            }else if(resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + nueve.id
            }
        }
        //eventos secundarios
        on.onclick = function(e){
            resultado.textContent = '0';
        }
        signo.onclick = function(e){
            if(resultado.textContent != '0' && resultado.textContent.length < 8){

                if(resultado.textContent.includes('-')){
                    
                    resultado.textContent = resultado.textContent.replace('-','');
                }else{
                    resultado.textContent = '-'+resultado.textContent;
                }
            }
        }
        punto.onclick = function(e){
            if(!resultado.textContent.includes('.') && resultado.textContent.length < 8){
                resultado.textContent = resultado.textContent + '.'
            }
        } 
        // eventos operadores
        mas.onclick = function(e){
            numUno = resultado.textContent
            operador = '+'
            resultado.textContent = '';

        }
        menos.onclick = function(e){
            numUno = resultado.textContent
            operador = '-'
            resultado.textContent = '';

        }
        dividir.onclick = function(e){
            numUno = resultado.textContent
            operador = '/'
            resultado.textContent = '';

        }
        por.onclick = function(e){
            numUno = resultado.textContent
            operador = '*'
            resultado.textContent = '';

        }
        igual.onclick = function(e){
            numDos = resultado.textContent
            let total = 0;
            let value;
            switch (operador) {
                case '+':
                    total = parseFloat(numUno)+parseFloat(numDos);
                    break;
                case '-':
                    total = parseFloat(numUno)-parseFloat(numDos);
                    break;
                case '*':
                    total = parseFloat(numUno)*parseFloat(numDos);
                    break;
                case '/':
                    total = parseFloat(numUno)/parseFloat(numDos);
                    break;
                default:
                    break;
            }
            value = ''+total;
            while (value.length > 8){
                value = value.slice(0, -1);
            }
            resultado.textContent = value;
        }
    }
}

Calculadora.init();