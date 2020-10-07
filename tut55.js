//Inserting data in monogo db

use gauravcart
db.items.insertOne({name:"Samsung 30s",price:12000,rating:4.3,qty:233,sold:97})

db.items.insertMany([{name:"Samsung 30s",price:12000,rating:4.3,qty:233,sold:97},{name:"poco m2",price:18000,rating:4.5,qty:253,sold:117},{name:"mi 30s",price:8000,rating:4.1,qty:533,sold:97}])