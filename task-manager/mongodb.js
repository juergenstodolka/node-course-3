// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient

// Short access to properties
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// Async connection
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').deleteMany({
  //   age: 27
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  //
  // Goal: Use the deleteOne to remove a task
  //
  // 1. Grap the description for the task you want to remove
  // 2, Setup the call with the query
  // 3. Use promise methods to setup the success/error handlers
  // 4. Test your work!

  db.collection('tasks').deleteOne({
    description: "Buy a bus ticket"
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })


}) // END of connect
