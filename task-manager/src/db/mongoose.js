const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

// const User = mongoose.model('User', {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// })

// const me = new User({
//   name: 'Jürgen',
//   age: 'Mike'
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error)
// })

// 
// Goal: Vreate a model for tasks
//
// 1. Define the model with description and completed fields
// 2. Create a new instance  of the model
// 3. Save the model to the database
// 4. Test yout work!

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const my_task = new Task({
  description: 'Clean the kitchen',
  completed: false
})

my_task.save().then(() => {
  console.log(my_task)
}).catch((error) => {
  console.log('Error!', error)
})
