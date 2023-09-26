Calculadora = require('../src/calculadora');

describe('RT - Verificar classe Calculadora', ()=>{

    let calc;

    beforeEach(()=>{
        calc = new Calculadora();
    });

    test('CN - Testar calculadora com valores positivos', ()=> {
        expect(calc.soma(2,2)).toBe(4);
        expect(calc.subtracao(4,2)).toBe(2);
        expect(calc.multiplicacao(4,2)).toBe(8);
        expect(calc.divisao(4,2)).toBe(2);
    });

    test('CN - Testar calculadora com valores negativos', ()=> {
        expect(calc.soma(-2,2)).toBe(0);
        expect(calc.subtracao(-4,2)).toBe(-6); 
        expect(calc.multiplicacao(-4,2)).toBe(-8);
        expect(calc.divisao(-4,2)).toBe(-2);
    });

    test('CN - Testar calculadora com entradas inválidas', ()=> {
        expect(calc.divisao(4,0)).toBe('Não é permitido divisão por zero.');
        expect(calc.divisao('@',8)).toBe('Não foi possível realizar esta operação.');
        expect(calc.soma('@',8)).toBe('Não foi possível realizar esta operação.');
        expect(calc.soma(8,'@')).toBe('Não foi possível realizar esta operação.');
        expect(calc.subtracao('@',8)).toBe('Não foi possível realizar esta operação.');
        expect(calc.multiplicacao('@',8)).toBe('Não foi possível realizar esta operação.');
    });
}); 

//RT - describe 
// Pré-condição - BeforeEach 
//   CN - test 
//     CT - expect PASSOS e RES. ESPERADO 