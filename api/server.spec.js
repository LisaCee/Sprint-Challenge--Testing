const mongoose = require('mongoose');
const server = require('./server');
const request = require('supertest');
const Game = require('../games/Game');

describe('The API Server', () => {
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

  let gameId;
  // // hint - these wont be constants because you'll need to override them.

  beforeEach(async() => {
    let newGame = {
      title: 'Super Mario Bros',
      genre: 'Platform game',
      releaseDate: 'September 13, 1985'
    }
    testGame = await Game.create(newGame);
    //   // write a beforeEach hook that will populate your test DB with data
    //   // each time this hook runs, you should save a document to your db
    //   // by saving the document you'll be able to use it in each of your `it` blocks
  });

  afterEach(() => {
    //   // clear the games collection.
    return Game.remove()
  });

  it('runs the tests', () => {});

  // test the POST here
  it('adds a document to the database', async() => { 
    // const newGame = {
    //   title: 'Super Mario Bros2',
    //   genre: 'Platform game',
    //   releaseDate: 'September 13, 1985'
    // }
    const response = await request(server)
      .post('/api/games', newGame)
      .expect(201)
  })
  // test the GET here
  it('has a GET endpoint that return 200', async() => {
    await request(server)
      .get('/api/games')
      .expect(200)
  })

  // Test the DELETE here
  it('should remove a game from the database', async() => {
    const newGame = {
      title: 'Super Mario Bros2',
      genre: 'Platform game',
      releaseDate: 'September 13, 1985'
    }
    console.log(newGame)
    await request(server).delete('/api/games', newGame)
      .expect(202)
  })
});
