//searching for data in mongo db
use gauravcart

//This quary will give all the object with rating equal to 4.5
db.items.find({rating:4.5})

//This quary will give all the object with rating greater then and equal to 3.5

db.items.find({rating:{$gte:3.5}})
//This quary will give all the object with rating greater then  3.5
db.items.find({rating:{$gt: 3.5}})

//And operator
db.items.find({rating:{$gt:3.5}, price:{$gt:4000}})
db.items.find({rating:{$lt:3.5}, price:{$gt:14000}})

//Or operator
db.items.find({$or:[{rating: {$lt:3.5}}, {price:{$gt:14000}}]})
