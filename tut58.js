//open powershell
//run mongod
//run mongo in other powershell

show dbs
use gauravcart
show collections


// to create collection

db.anotherCollections.insertOne({a:45})

//update

db.items.updateOne({name:"poco x2"},{$set{price:"150000"}})
db.items.find()
db.items.updateMany({name:"poco x2"},{$set:{price:"150000",rating:1}})

