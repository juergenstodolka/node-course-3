// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient

// Short access to properties
const { MongoClient, ObjectID } = require('mongodb')

// Create an new ObjectId
const id = new ObjectID()
console.log(id)
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString())
//console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// Async connection
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 27
  //   },
  //   {
  //     name: 'Gunther',
  //     age: 28
  //   }], (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert documents')
  //     }
  //     console.log(result.ops)
  //   })

  // db.collection('users').insertOne({

  //   name: 'Vikram',
  //   age: 35
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user');
  //   }
  //   console.log(result.ops);
  // })

  //
  // Goal : Insert 3 tasks into a new tasks collection
  //
  // 1. User insertMany to insert three documents
  //    - description (string), completed (boolean)
  // 2. Setup the callback to ahandle error or print ops
  // 3. Run the script
  // 4. Refresh the database in Robob 3t and view data in tasks collection

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Close your ticket SDT-5914',
  //     completed: false
  //   },
  //   {
  //     description: 'Buy a bus ticket',
  //     completed: false
  //   },
  //   {
  //     description: 'Do your guitar exercises',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }
  //   console.log(result.ops)
  // })

})