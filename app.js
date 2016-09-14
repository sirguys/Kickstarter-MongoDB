var mongo = require('mongodb')

mongo.MongoClient.connect('mongodb://127.0.0.1/coffee_shop', ready)

function ready(error, db) {
  //db.coffee.find()
  db.collection('coffee').find().toArray(show)
}

function show(error, data) {
  console.log(data)
}

/***************** Anonymous Function ************************/

mongo.MongoClient.connect('mongodb://127.0.0.1/coffee_shop',
  function(error, db) {
    db.collection('coffee').find().toArray(
      function(error, data) {
        console.log(data)
      }
    )
  }
)

/***************** Arrow Function ************************/

mongo.MongoClient.connect('mongodb://127.0.0.1/coffee_shop',
  (error, db) => db.collection('coffee').find().toArray(
    (error, data) => console.log(data)
  )
)
