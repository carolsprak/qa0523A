const {sub, sum} = require('../src/calculos');

describe('RT - Verificar classe Calculadora', ()=>{
    test('CN - Testar calculadora com valores positivos', ()=> {
        expect(sub(2,2)).toBe(0);
        expect(sum(2,2)).toBe(4);
    });
});