let Calculadora = {
    setData : function(screenData,numElement){
        if(screenData.textContent === '0'){
            screenData.textContent = numElement.id
        }else if(screenData.textContent.length < 8){
            screenData.textContent = screenData.textContent + numElement.id
        }
    },
    keyPressEffect: function(){
        let teclas = document.querySelectorAll('.tecla');
        for (let i = 0; i < teclas.length; i++) {
            teclas[i].onmousedown = function(e){
                e.preventDefault()
                teclas[i].style.transform = "scale(0.9)"
            }
            teclas[i].onmouseup = function(e){
                e.preventDefault()
                teclas[i].style.transform = "scale(1)"
            }

        }
    },
    keyPressNumbers : function(){
        let calculadora = this
        let resultado = document.getElementById('display')
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
            calculadora.setData(resultado, uno);
        }
        dos.onclick = function(e){
            calculadora.setData(resultado, dos)
        }
        tres.onclick = function(e){
            calculadora.setData(resultado, tres)
        }
        cuatro.onclick = function(e){
            calculadora.setData(resultado, cuatro)
        }
        cinco.onclick = function(e){
            calculadora.setData(resultado, cinco)
        }
        seis.onclick = function(e){
            calculadora.setData(resultado, seis)
        }
        siete.onclick = function(e){
            calculadora.setData(resultado, siete)
        }
        ocho.onclick = function(e){
            calculadora.setData(resultado, ocho)
        }
        nueve.onclick = function(e){
            calculadora.setData(resultado, nueve)
        }
    },
    keyPressSymbols : function(){
        let resultado = document.getElementById('display')
        //--------------------------------------------------
        let punto   = document.getElementById('punto')
        let on      = document.getElementById('on')
        let signo   = document.getElementById('sign')

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
    },
    setOperators : function(){
        let numUno    = 0;
        let numDos    = 0;
        let numAux    = 0;
        let operador;
        
        // elementos
        let resultado = document.getElementById('display')
        // operadores
        let igual   = document.getElementById('igual')
        let mas     = document.getElementById('mas')
        let dividir = document.getElementById('dividido')
        let menos   = document.getElementById('menos')
        let por     = document.getElementById('por')
         
        // eventos operadores
        mas.onclick = function(e){
            numAux = 0;
            numUno = resultado.textContent
            operador = '+'
            resultado.textContent = '';
        }
        menos.onclick = function(e){
            numAux = 0;
            numUno = resultado.textContent
            operador = '-'
            resultado.textContent = '';

        }
        dividir.onclick = function(e){
            numAux = 0;
            numUno = resultado.textContent
            operador = '/'
            resultado.textContent = '';

        }
        por.onclick = function(e){
            numAux = 0;
            numUno = resultado.textContent
            operador = '*'
            resultado.textContent = '';

        }
        igual.onclick = function(e){
            numDos = resultado.textContent
            if (numAux === 0){
                numAux = numDos;
            }else{
                numUno = numDos;
                numDos = numAux;
            }
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
            if (value.length > 8 && value.includes('.')){
                console.log(total);
                total = total.toPrecision(8);
            }
            resultado.textContent = total;
        }
    },
    init : function(){
        this.keyPressEffect()
        this.keyPressNumbers()
        this.keyPressSymbols()
        this.setOperators()
    }
}

Calculadora.init();