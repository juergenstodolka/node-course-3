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

  // db.collection('users').findOne({ _id: new ObjectID("5c8bbc96703e3039ec8865ef") }, (error, user) => {
  //   if (error) {
  //     console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({ age: 55 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').find({ age: 55 }).count((error, count) => {
  //   console.log(count)
  // })

  // 
  // Goal: Use find and findOne with tasks
  //
  // 1. Use findOne to fetch the last task by its id (print doc to console)
  // 2. Use find to fetch all tasks that are not completed (print docs to console)
  // 3. Test your work!

  db.collection('tasks').findOne({ _id: new ObjectID("5c8bb7adb7232b4a3cfa2cb0") }, (error, task) => {
    if (error) {
      console.log('Unable to fetch')
    }

    console.log(task)
  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    console.log(tasks)
  })

  // db.collection('users').updateOne({
  //   _id: new ObjectID("5c8a91374df7766314c74005")
  // }, {
  //     $inc: {
  //       age: 2
  //     }
  //   }).then((result) => {
  //     console.log(result)
  //   }).catch((error) => {
  //     console.log(error)
  //   })

  //
  // Goal: Use updateMany to complete all tasks
  //
  // 1. Check the documentation for updateMany
  // 2. Setup the call with query and the updates
  // 2. Use promise methods to setup the success/error handlers
  // 4. Test your work!
  db.collection('tasks').updateMany({
    completed: false
  }, {
      $set: { completed: true }
    }).then((result) => {
      console.log(result.modifiedCount)
    }).catch((error) => {
      console.log(error)
    })

})
