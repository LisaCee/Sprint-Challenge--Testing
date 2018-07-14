const mongoose = require('mongoose');

const Game = require('./Game');

describe('The Game Model', () => {
  beforeAll(() => {
    return mongoose
      .connect('mongodb://localhost/test')
      .then(() => console.log('\n=== connected to TEST DB ==='))
      .catch(err => {
        console.log('error connecting to TEST database, is MongoDB running?');
      });
  });

  afterAll(() => {
    return mongoose
      .disconnect()
      .then(() => console.log('\n=== disconnected from TEST DB ==='));
  });

  it('runs the tests', () => {});

    it('contains a title field', async() => {
        const mario = 
          {title: 'Super Mario Bros',
          genre: 'platform',
          releaseDate: 'September 13, 1985'}

          const newGame = await Game.create(mario);
          expect(newGame.title).toBe('Super Mario Bros')
    })
    it('contains gives a genre field', async() => {
        const mario = 
          {title: 'Super Mario Bros',
          genre: 'platform',
          releaseDate: 'September 13, 1985'}

          const newGame = await Game.create(mario);
          expect(newGame.genre).toBe('platform')
    })
    it('returns game title when getGameTitle is called', async() => {
      const mario = 
          {title: 'Super Mario Bros',
          genre: 'platform',
          releaseDate: 'September 13, 1985'}

          const newGame = await Game.create(mario);
          expect(newGame.getGameTitle()).toBe('Super Mario Bros')
    })
});
