var Bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');

describe('Bicicleta API', () => {

    beforeEach(() => {
        Bicicleta.allBicis = [];
    });

    describe('GET BICICLETAS /', () => {
        it('Status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1, 'rojo', 'urbana', [20.7236,-103.3848]);
            Bicicleta.add(a); 

            request.get('http://localhost:5000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);
            });
        });
    });

    describe('POST BICICLETAS /create', () => {
        it('Status 200', (done) => {
            var headers = {'content-type' : 'application/json'};
            var aBici = '{"id":10, "color":"rojo", "modelo":"urbana", "lat":-34, "lng":-54}';
            request.post({
                headers: headers,
                url: 'http://localhost:5000/api/bicicletas/create',
                body: aBici
            }, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe("rojo");
                done();
            });
        });
    });

    describe('POST BICICLETAS /delete', () => {
        it('Status 200', (done) => {
            var headers = {'content-type' : 'application/json'};
            var aBici = '{"id":1}';

            var a = new Bicicleta(1, 'rojo', 'urbana', [20.7236,-103.3848]);
            Bicicleta.add(a); 

            expect(Bicicleta.allBicis.length).toBe(1);

            request.delete({
                headers: headers,
                url: 'http://localhost:5000/api/bicicletas/delete',
                body: aBici
            }, function(error, response, body) {
                expect(response.statusCode).toBe(204);
                expect(Bicicleta.allBicis.length).toBe(0);
                done();
            });
        });
    });

    describe('POST BICICLETAS /update', () => {
        it('Status 200', (done) => {
            var headers = {'content-type' : 'application/json'};
            var aBici = '{"id":1, "color":"verde", "modelo":"urbana", "lat":-34, "lng":-54}';

            var a = new Bicicleta(1, 'rojo', 'urbana', [20.7236,-103.3848]);
            Bicicleta.add(a); 

            expect(Bicicleta.allBicis.length).toBe(1);

            request.post({
                headers: headers,
                url: 'http://localhost:5000/api/bicicletas/1/update',
                body: aBici
            }, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(1).color).toBe("verde");
                done();
            });
        });
    });
});

