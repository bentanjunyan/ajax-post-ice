import db from './models/index.mjs';

// import the controller
// import initBugsController from './controllers/bugs.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  // const bugsController = initBugsController(db);

  // app.get('/bugs', bugsController.index);
  app.post('/bugs', (request, response) => {
    console.log('working');
    response.redirect('home');
  });
  app.get('/', (request, response) => {
    response.render('home');
  });
}
