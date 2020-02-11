module.exports = function(app, db) {
	
/*
APP POST
*/

	app.post('/add_alumnus', (req, res) => {
    const newAlumnus = {
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      otherNames: req.body.otherNames,
      graduationYear: req.body.graduationYear,
      phone: req.body.phone,
      email: req.body.email,
      street: req.body.street,
      town: req.body.town,
      country: req.body.country,
      photo: req.body.photo
    };

    db.collection('alumni').insert(newAlumnus, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
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

	app.get('/alumni', (req, res) => {
	  	const result = db.collection('alumni').find({}).toArray((err, item) => {
	  		if (err) console.log(err);
		    res.send(item);
	  	})
	});

/*END OF APP GET
*/

}