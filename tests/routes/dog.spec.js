const session = require('supertest-session');
const app = require('../../src/app.js');
const { Raza, conn } = require('../../src/db.js');
const agent = session(app);


describe('POST /dogs', () => {
    it('responde coin un codigo 200',()=>  agent.post('/dogs').expect(400) )
    // it('responde coin un codigo 200', () =>
    //     agent.post('/dogs')
    //     .send({
    //     "heightMAX": "3",
    //     "heightMIN": "1",
    //     "life_span": "si sigue asi poco",
    //     "name": "salchicha",
    //     "weightMAX": "3",
    //     "weightMIN": "1",
    //     "temperamentos": "[ 'sdfgfghh', 1 ]"
    //     })
    //     .expect(res.body.result).toEqual("Se creo con exito la raza salchicha")
    // );
});

