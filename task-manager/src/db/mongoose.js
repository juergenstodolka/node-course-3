const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})


//
// Goal: Add a password field to User
//
// 1. Setup the files as a require string
// 2.Ensure the length is greater than 6
// 3. Trim the password
// 4. Ensure that password doesn't contain "password"
// 5. Test your work!

//Defining a model
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate (value) {
      if (value.includes('Password')) {
        throw new Error('Password may not contain the word password')
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate (value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate (value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

// Creating an instance
// const me = new User({
//   name: '   Juergen ',
//   email: '  INFO@stodolka-juergen.de',
//   password: 'phone098!'
// })

// // Save the instanct to the database
// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error)
// })

// -------------------------------------------------------------------
// Goal: Create a model for tasks
//
// 1. Define the model with description and completed fields
// 2. Create a new instance  of the model
// 3. Save the model to the database
// 4. Test yout work!
// -------------------------------------------------------------------

// Next goal: Add validation and sanitization to task
//
// 1. Trim the description and make it require
// 2. Make completed optional and default it to false
// 3. Test your work with and without errors

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const my_task = new Task({
  description: 'Learn one chapter Node.js',
  completed: true
})

my_task.save().then(() => {
  console.log(my_task)
}).catch((error) => {
  console.log('Error!', error)
})
