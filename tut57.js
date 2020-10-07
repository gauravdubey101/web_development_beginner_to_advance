
show dbs
use gauravcart
show collections

db.items.find({price:8000})

//deleteing items form the mongo database

db.items.deleteOne({price:8000})

//deleteOne will delete the matching document entry and will delete the first entry in case of multi document match.
db.items.dele