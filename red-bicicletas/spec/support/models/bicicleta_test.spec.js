var Bicicleta = require('../../../models/bicicleta');

// Limpiar all bicis antes de cada test
beforeEach(() => {
    Bicicleta.allBicis = [];
});

// test 1: atributo .allBicis
describe('Bicicleta.allBicis', () => {
    it('Comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

// test 2: metodo .add()
describe('Bicicleta.add', () => {
    it('Agregar bicicleta', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [20.7236,-103.3848]);
        Bicicleta.add(a); 

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

// test 3: metodo .findById()
describe('Bicicleta.findById', () => {
    it('Encontrar una bicicleta por id', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [20.7236,-103.3848]);
        Bicicleta.add(a);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(a.id);
        expect(targetBici.color).toBe(a.color);
        expect(targetBici.modelo).toBe(a.modelo);
        expect(targetBici.ubicacion).toBe(a.ubicacion);

        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

// test 4: metodo .removeById()
describe('Bicicleta.removeById', () => {
    it('Remover una bicicleta por id', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [20.7236,-103.3848]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);

        Bicicleta.removeById(a.id);

        expect(Bicicleta.allBicis.length).toBe(0);
    });
});