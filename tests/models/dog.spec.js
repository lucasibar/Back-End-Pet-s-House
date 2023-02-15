const { Raza, conn } = require('../../src/db.js');


describe('Dog model', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
    console.log('se conecto a la BDD');
  });
  
  describe('name', () => {
  it('should throw an error if name is null', async() => {
      try{
         await Raza.create({
                id:'1',

                height:'1 - 2',
                weight:'1 - 3',
                life_span:'12 años si lo cuidas bien',
                img:''})
      }catch (error) {
          expect(error.message).toBeDefined();
      }
  });

  it('should throw an error if height is null', async() => {
      try{
          await Raza.create({
          id:'1',
          name:'Pepe',

          weight:'1 - 3',
          life_span:'12 años si lo cuidas bien',
          img:''})
      } catch (error) {
            
      }
  });

  it('should throw an error if weight is null', async() => {
      try{
          await Raza.create({
          id:'1',
          name:'Pepe',
          height:'1 - 2',

          life_span:'12 años si lo cuidas bien',
          img:''})
        } catch (error) {
            expect(error.message).toBeDefined();
        }
      })       
      })
})
