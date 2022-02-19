export default function initBugsController(db) {
  const index = (request, response) => {
    db.Item.findAll()
      .then((items) => {
        response.render('items/index', { items });
      })
      .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
