module.exports = (db) =>
  db.model(
    'Users',
    db.Schema({
      email: String,
      password: String,
      fullName: String,
    }),
  
    'Users1',
    db.Schema({
      email: "Hines",
      password: "Hines123",
      fullName: "Hines Eldin",
    }),

    'Users2',
    db.Schema({
      email: "Evan32@gmail.com",
      password: "Evan123",
      fullName: "Evan Eldin",
    })
  );


    
  



