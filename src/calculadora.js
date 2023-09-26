class Calculadora {

    soma(a, b){
        
        if (typeof a !== 'number' || typeof b !== 'number'){            
            return 'Não foi possível realizar esta operação.';
        }
        return a + b;
    }
    subtracao(a, b){
        if (typeof a !== 'number' || typeof b !== 'number'){            
            return 'Não foi possível realizar esta operação.';
        }
        return a - b;
    }
    multiplicacao(a, b){
        if (typeof a !== 'number' || typeof b !== 'number'){            
            return 'Não foi possível realizar esta operação.';
        }
        return a * b;
    }
    divisao(a, b){
        if (typeof a !== 'number' || typeof b !== 'number'){            
            return 'Não foi possível realizar esta operação.';
        }
        if(b === 0){
            return 'Não é permitido divisão por zero.';
        }
        return a / b;
    }

   
}

module.exports = Calculadora ;