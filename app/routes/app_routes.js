module.exports = function(app, db) {
  /*
APP POST
*/

  app.post("/add_alumnus", (req, res) => {
    const newAlumnus = {
      lastName: req.body.lastName,
      otherNames: req.body.otherNames,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      town: req.body.town,
      country: req.body.country,
      password: req.body.password,
      photo: req.body.photo,
      degrees: req.body.degrees
    };

    db.collection("alumni").insertOne(newAlumnus, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  /*
END OF APP POST
*/

  /*
BEGINNING OF APP GET
*/

  app.get("/alumni", (req, res) => {
    db.collection("alumni")
      .find({})
      .toArray((err, item) => {
        if (err) console.log(err);
        res.send(item);
      });
  });

  app.get("/get_alumnus", (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    db.collection("alumni")
      .find({ email: email, password: password })
      .toArray((err, item) => {
        if (err) {
          console.log(err);
          res.sendStatus(401);
        } else {
          console.log(item);
          res.send(item);
        }
      });
  });

  /*END OF APP GET
   */
};
